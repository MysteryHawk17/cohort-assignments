import './card2.css'; 
import { useLocation } from 'react-router-dom';
const BirthdayWish = () => {
  const param=useLocation()
    console.log(param);
    const name=decodeURIComponent(location.search.substring(1));

  return (
    <div className="birthday-wish-container">
      <div className="birthday-wish-content">
        <h1>Happy Birthday, {name}!</h1>
        <p>Wishing you a fantastic day filled with joy and happiness.</p>
      </div>
    </div>
  );
};

export default BirthdayWish;
