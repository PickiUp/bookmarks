function Card({ src, link, name, desc }) {
    return (
        <div className={`card-item`}>
            <div className="card">
                <div className="card-present">
                    <div className="card-thumbnail">
                        <img
                            src={
                                src
                                    ? src
                                    : 'https://s1.wzznft.com/i/2024/02/13/qz6f7u.png'
                            }
                            alt={name}
                            title={name}
                        />
                    </div>
                    <div className="card-link">
                        <a
                            href={link}
                            target="_blank">
                            Visit
                        </a>
                    </div>
                </div>
                <div className="card-info">
                    <a
                        href={link}
                        target="_blank">
                        <h3>{name}</h3>
                    </a>
                    <p title={desc}>
                        {desc
                            ? desc
                            : '站长很懒，没有写描述，留下3行占位内容用于控制布局效果'}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Card;
