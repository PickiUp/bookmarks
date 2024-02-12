import React from 'react';

function Tag({
    tagName,
    setTagName,
    setUseTag,
    setLastClickTag,
    lastClickTag,
}) {
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

    function handleClick(e) {
        const tagName = e.target.dataset.name;
        setLastClickTag(tagName);

        if (tagName != lastClickTag) {
            setUseTag(true);
            setTagName(tagName);
            document
                .querySelectorAll('.card-tags  .tag-item')
                .forEach((item) => {
                    item.classList.add('noactive');
                });
            e.target.classList.remove('noactive');
        }
    }
    return (
        <div
            onClick={handleClick}
            className="tag-item"
            style={{ backgroundColor: randomBg() }}
            data-name={tagName}>
            {tagName ?? 'test'}
        </div>
    );
}

export default Tag;
