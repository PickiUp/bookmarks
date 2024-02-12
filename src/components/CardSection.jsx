import OnlineToolCard from './OnlineToolCard';

function CardSection({ sectionName, sectionValue }) {
    return (
        <div className="card-section">
            <div className="card-header">{sectionName}</div>
            <div className="card-body">
                {sectionValue.map((data, i) => (
                    <OnlineToolCard
                        key={i}
                        {...data}
                    />
                ))}
            </div>
        </div>
    );
}

export default CardSection;
