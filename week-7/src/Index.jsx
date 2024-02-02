import PropTypes from 'prop-types'
import './indexStyle.css';
import { useNavigate } from 'react-router-dom';
const Tile = ({ option, path }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/${path}`)
  }
  return (
    <div className="tile" onClick={handleClick}>
      {option}
    </div>
  );
};
Tile.propTypes = ({
  option: PropTypes.string,
  path: PropTypes.string
})
const PageWithTiles = () => {
  return (
    <div className="container">
      <Tile option="Profile Card" path="profile" />
      <Tile option="Color Changer" path='colorchanger' />
      <Tile option="Paragraph Generator" path="paragenerator" />
      <Tile option="Github Card" path="github" />
      <Tile option="Login Page" path='login' />
      <Tile option="Birthday Card Generator" path='birthday'/>
    </div>
  );
};

export default PageWithTiles;
