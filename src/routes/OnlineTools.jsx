import BookMarkContent from '../components/BookMarkContent';
import { onlineTools, categories } from '../data/onlineTools';

function OnlineTools() {
    return (
        <BookMarkContent
            datas={onlineTools}
            categories={categories}
        />
    );
}

export default OnlineTools;
