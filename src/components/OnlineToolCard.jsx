function OnlineToolCard({ imgSrc, imgAlt, link, name, desc }) {
    return (
        <div className={`card-item`}>
            <div className="card">
                <div className="card-present">
                    <div className="card-thumbnail">
                        <img
                            src={
                                imgSrc
                                    ? imgSrc
                                    : 'https://xsgames.co/randomusers/assets/avatars/male/60.jpg'
                            }
                            alt={imgAlt}
                            title={imgAlt}
                        />
                    </div>
                    <div className="card-link">
                        <a href={link}>Visit</a>
                    </div>
                </div>
                <div className="card-info">
                    <h3>{name}</h3>
                    <p>
                        {desc
                            ? desc
                            : '站长很懒，没有写描述，留下3行占位内容用于控制布局效果'}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default OnlineToolCard;
