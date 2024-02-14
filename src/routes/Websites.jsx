import BookMarkContent from '../components/BookMarkContent';
import { websites, categories } from '../data/websites';
import React from 'react';

function Websites() {
    return (
        <BookMarkContent
            datas={websites}
            categories={categories}
        />
    );
}

export default Websites;
