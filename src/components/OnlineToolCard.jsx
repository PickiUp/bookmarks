import React from 'react';

function OnlineToolCard({ imgSrc, imgAlt, name, link, desc }) {
    function randomBg() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }

    return (
        <div
            className={`card-item`}
            style={{ backgroundColor: `${randomBg()}` }}>
            <div className="card">
                <div className="card-present">
                    <div className="card-thumbnail">
                        <img
                            src={
                                imgSrc ??
                                'https://xsgames.co/randomusers/assets/avatars/male/60.jpg'
                            }
                            alt={imgAlt}
                        />
                    </div>
                    <div className="card-link">
                        <a href={link}>Visit</a>
                    </div>
                </div>
                <div className="card-info">
                    <h3>{name}</h3>
                    <p>{desc}</p>
                </div>
            </div>
        </div>
    );
}

export default OnlineToolCard;
