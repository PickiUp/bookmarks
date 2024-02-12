import '../styles/OnlineToolCard.scss';
import Tag from '../components/Tag';
import { onlineTools } from '../data/onlineTools';
import CardSection from '../components/CardSection';
function OnlineTools() {
    function getAllTags() {
        return Array.from(
            new Set(onlineTools.map((item) => item.tags)?.flat()),
        );
    }

    function getAllCategoriesObj() {
        const obj = {};
        for (const item of onlineTools) {
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
    function getAllCategories() {
        return Object.keys(getAllCategoriesObj());
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
                {Object.keys(getAllCategoriesObj()).map((key, i) => (
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
