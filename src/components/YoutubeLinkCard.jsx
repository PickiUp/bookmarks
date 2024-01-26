import '../styles/linkCard.scss';
import { FaBell } from 'react-icons/fa';
import { IoIosVideocam } from 'react-icons/io';
function LinkCard() {
    return (
        <div className="card-wrapper">
            <div className="card-front">
                <div className="card-info-img">
                    <img
                        src="https://yt3.googleusercontent.com/ytc/AIf8zZT5dbX235QP06VDV-COYirQsOieC6evNJlopHL5og=s176-c-k-c0x00ffffff-no-rj"
                        alt=""
                    />
                </div>
                <div className="card-info-text">
                    <div className="name">
                        Arjun Khara
                        <span>@ArjunKhara</span>
                    </div>

                    <div className="description">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Pariatur facilis quibusdam soluta harum autem
                        </p>
                    </div>
                </div>
            </div>
            <div className="card-back">
                <div className="meta">
                    <div className="meta-item">
                        <FaBell />
                        120k
                    </div>
                    <div className="meta-item">
                        <IoIosVideocam />
                        144
                    </div>
                </div>
                <a href="">
                    <button className="link">Visit</button>
                </a>
            </div>
        </div>
    );
}

export default LinkCard;
