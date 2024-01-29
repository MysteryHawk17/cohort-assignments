import './card-style.css'
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import PropTypes from 'prop-types';
const Card = ({ fullName, description, interests, linkedin, twitter }) => {

    return (
        <div className="card">
            <div className="container">
                <div className="name">{fullName}</div>
                <div className="description">{description}</div>
                {console.log(interests)}
                <div className="lower">
                    <div className="interests">
                        <div className="title">Interests</div>
                        {interests.map((e, index) => {
                            return <div className="interest" key={index}>{e}</div>
                        })}
                    </div>
                    <div className="links">
                        <a href={linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin size={30} /></a>
                        <a href={twitter} target="_blank" rel="noopener noreferrer"><FaTwitter size={30} /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
Card.propTypes = {
    fullName: PropTypes.string.isRequired,
    description: PropTypes.string,
    interests: PropTypes.arrayOf(PropTypes.string),
    linkedin: PropTypes.string,
    twitter: PropTypes.string
};
export default Card