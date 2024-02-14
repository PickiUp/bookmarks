import { useState, useEffect } from 'react';
import { AiOutlineDoubleLeft } from 'react-icons/ai';
import { AiOutlineDoubleRight } from 'react-icons/ai';

import '../styles/Card.scss';
import Tag from '../components/Tag';
import { onlineTools, categories } from '../data/onlineTools';
import CardSection from '../components/CardSection';
import { useOutletContext } from 'react-router-dom';
const TRANSLATE_AMOUNT = 200;

function OnlineTools() {
    const [useTag, setUseTag] = useState(false);
    const [tagName, setTagName] = useState('');
    const [lastClickTag, setLastClickTag] = useState('');
    const [offset, setOffset] = useState(0);
    const [isRightVisiable, setIsRightVisiable] = useState(true);
    const [value] = useOutletContext();

    window.addEventListener('scroll', () => {
        const cardSections = document.querySelectorAll('.card-section');
        cardSections.forEach((cardSection) => {
            if (
                cardSection.getBoundingClientRect().top <= 52 &&
                cardSection.getBoundingClientRect().top > 0
            ) {
                const categoryText =
                    cardSection.querySelector('.card-header').textContent;
                const allLi = document.querySelectorAll('.card-container li');
                allLi.forEach((li) => {
                    li.classList.remove('active');
                    if (li.textContent === categoryText) {
                        li.classList.add('active');
                    }
                });
            }
        });
    });
    useEffect(() => {
        getAllCategoriesObj();
    }, [useTag, value]);

    function getAllTags() {
        return Array.from(
            new Set(onlineTools.map((item) => item.tags)?.flat()),
        );
    }

    function getAllCategoriesObj() {
        const obj = {};
        for (const item of useTag
            ? filterByTagName(tagName)
            : filterByKeyWords(value)) {
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
        return filterByKeyWords(value).filter((item) =>
            item.tags.includes(tagName),
        );
    }
    function filterByKeyWords(keywords) {
        return onlineTools.filter((item) => {
            return (
                matchKeywords(item.name, keywords) ||
                matchKeywords(item.desc, keywords)
            );
        });
    }
    function matchKeywords(text, keywords) {
        return text.match(new RegExp(keywords, 'gi'));
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
                <div className="card-toc">
                    <ul>
                        {Object.keys(getAllCategoriesObj())
                            .sort(sortByPriority)
                            .map((name, i) => (
                                <li
                                    key={i}
                                    onClick={(e) => {
                                        const target = e.target.textContent;
                                        const cardSections =
                                            document.querySelectorAll(
                                                '.card-section',
                                            );
                                        cardSections.forEach((section) => {
                                            const categoryText =
                                                section.querySelector(
                                                    '.card-header',
                                                ).textContent;
                                            if (categoryText === target) {
                                                section.scrollIntoView({
                                                    behavior: 'smooth',
                                                });
                                            }
                                        });
                                    }}>
                                    {name}
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default OnlineTools;
