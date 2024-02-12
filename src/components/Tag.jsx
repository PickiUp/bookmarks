import React from 'react';

function Tag({
    tagName,
    setTagName,
    setUseTag,
    setLastClickTag,
    lastClickTag,
}) {
    function handleClick(e) {
        const tagName = e.target.dataset.name;

        if (tagName != lastClickTag) {
            setUseTag(true);
            setTagName(tagName);
            document
                .querySelectorAll('.card-tags  .tag-item')
                .forEach((item) => {
                    item.classList.remove('active');
                    item.classList.add('noActive');
                });
            e.target.classList.remove('noActive');
            e.target.classList.add('active');
        }
        setLastClickTag(tagName);
    }
    return (
        <div
            onClick={handleClick}
            className="tag-item"
            data-name={tagName}>
            {tagName ?? 'test'}
        </div>
    );
}

export default Tag;
