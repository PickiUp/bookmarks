import React from 'react';

function Tag({ tagName }) {
    const bgArr = [
        '#7DC383',
        '#FFA45C',
        '#9182C4',
        '#F5D7A1',
        '#28CC9E',
        '#D7E9FD',
        '#6699CC',
        '#C70039',
    ];

    function randomBg() {
        return bgArr[Math.floor(Math.random() * bgArr.length)];
    }
    return (
        <div
            className="tag-item"
            style={{ backgroundColor: randomBg() }}
            data-test="gsgs">
            {tagName ?? 'test'}
        </div>
    );
}

export default Tag;
