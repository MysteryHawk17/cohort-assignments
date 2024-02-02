import './card1.css';
import { useLocation } from 'react-router-dom';

const BirthdayCard = () => {
    const param=useLocation()
    const name=decodeURIComponent(param.search.substring(1));

    return (
        <div className="birthday-card" style={{ backgroundImage: `url(https://www.shutterstock.com/shutterstock/photos/2219354625/display_1500/stock-vector-happy-birthday-text-vector-template-design-birthday-greeting-in-circle-space-for-typography-with-2219354625.jpg)` }}>
            <div className="overlay"></div>
            <div className="content">
                <h2>Happy Birthday, {name}!</h2>
                <p>Wishing you a fantastic day filled with joy and happiness.</p>
            </div>
        </div>
    );
};


export default BirthdayCard;
