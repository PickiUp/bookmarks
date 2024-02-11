import { useEffect } from 'react';
import OnlineToolCard from '../components/OnlineToolCard';
import '../styles/OnlineToolCard.scss';
import Tag from '../components/Tag';
import { onlineTools } from '../data/onlineTools';
function OnlineTools() {
    function averageSpace() {
        const container = document.querySelector('.card-container');
        let rowItemCount = Math.floor(container.clientWidth / 316) - 1;
        const contentWidth = rowItemCount * 316 + 300;
        const restSpace = container.clientWidth - contentWidth;
        const pl = restSpace / 2;
        container.style.paddingLeft = pl + 'px';
    }

    useEffect(() => {
        averageSpace();
        window.addEventListener('resize', averageSpace);
    });

    function getAllTags() {
        return Array.from(
            new Set(onlineTools.map((item) => item.tags)?.flat()),
        );
    }

    return (
        <div className="card-area">
            <div className="card-tags">
                {getAllTags().map((item, i) => (
                    <Tag
                        key={i}
                        tagName={item}
                    />
                ))}
            </div>
            <div className="card-container">
                {onlineTools.map((item, i) => (
                    <OnlineToolCard
                        key={i}
                        name={item.name}
                        imgSrc={item.gSrc}
                        imgAlt={item.gAlt}
                        link={item.link}
                        desc={item.desc}
                        tags={item.tags}
                    />
                ))}
            </div>
        </div>
    );
}

export default OnlineTools;
