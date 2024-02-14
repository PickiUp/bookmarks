import { useState, useEffect } from 'react';
import { AiOutlineDoubleLeft } from 'react-icons/ai';
import { AiOutlineDoubleRight } from 'react-icons/ai';

import '../styles/Card.scss';
import Tag from '../components/Tag';
import { onlineTools, categories } from '../data/onlineTools';
import CardSection from '../components/CardSection';
const TRANSLATE_AMOUNT = 200;

function OnlineTools() {
    const [useTag, setUseTag] = useState(false);
    const [tagName, setTagName] = useState('');
    const [lastClickTag, setLastClickTag] = useState('');
    const [offset, setOffset] = useState(0);
    const [isRightVisiable, setIsRightVisiable] = useState(true);

    useEffect(() => {
        getAllCategoriesObj();
    }, [useTag]);

    function getAllTags() {
        return Array.from(
            new Set(onlineTools.map((item) => item.tags)?.flat()),
        );
    }

    function getAllCategoriesObj() {
        const obj = {};
        for (const item of useTag ? filterByTagName(tagName) : onlineTools) {
            for (const category of item.categories) {
                if (obj[category] === undefined) {
                    obj[category] = [item];
                } else {
                    obj[category].push(item);
                }
            }
        }
        return obj;
    }

    function filterByTagName(tagName) {
        return onlineTools.filter((item) => item.tags.includes(tagName));
    }

    function sortByPriority(a, b) {
        let aPriority, bPriority;
        for (const category in categories) {
            if (categories[category].name === a) {
                aPriority = categories[category].priority;
            }
            if (categories[category].name === b) {
                bPriority = categories[category].priority;
            }
        }
        if (aPriority < bPriority) return 1;
        if (aPriority > bPriority) return -1;
        return 0;
    }

    return (
        <div className="card-area">
            <div className="card-tags">
                {!isRightVisiable && (
                    <div
                        className="btn-pre"
                        onClick={() => {
                            setOffset(() => {
                                if (offset - TRANSLATE_AMOUNT < 0) {
                                    setIsRightVisiable(true);

                                    return 0;
                                }
                                return offset - TRANSLATE_AMOUNT;
                            });
                        }}>
                        <button>
                            <AiOutlineDoubleLeft />
                        </button>
                    </div>
                )}
                <div
                    className="tag-items"
                    style={{ transform: `translateX(-${offset}px` }}>
                    <div
                        onClick={(e) => {
                            setUseTag(false);
                            document
                                .querySelectorAll('.card-tags  .tag-item')
                                .forEach((item) => {
                                    item.classList.remove('noActive');
                                    item.classList.remove('active');
                                });
                        }}
                        className="tag-item"
                        style={{
                            backgroundColor: '#000',
                            color: '#fff',
                        }}
                        data-name="ALL">
                        ALL
                    </div>
                    {getAllTags().map((item, i) => (
                        <Tag
                            lastClickTag={lastClickTag}
                            setLastClickTag={setLastClickTag}
                            setTagName={setTagName}
                            setUseTag={setUseTag}
                            key={i}
                            tagName={item}
                        />
                    ))}
                </div>
                {isRightVisiable && (
                    <div
                        className="btn-next"
                        onClick={() => {
                            setOffset(() => {
                                const scrollEl =
                                    document.querySelector('.tag-items');
                                const width = scrollEl.clientWidth;
                                const edge = scrollEl.scrollWidth;

                                if (width + offset + TRANSLATE_AMOUNT >= edge) {
                                    setIsRightVisiable(false);
                                    return edge - width;
                                }
                                return offset + TRANSLATE_AMOUNT;
                            });
                        }}>
                        <button>
                            <AiOutlineDoubleRight />
                        </button>
                    </div>
                )}
            </div>
            <div className="card-container">
                {Object.keys(getAllCategoriesObj())
                    .sort(sortByPriority)
                    .map((key, i) => (
                        <CardSection
                            key={i}
                            sectionName={key}
                            sectionValue={getAllCategoriesObj()[key]}
                        />
                    ))}
            </div>
        </div>
    );
}

export default OnlineTools;
