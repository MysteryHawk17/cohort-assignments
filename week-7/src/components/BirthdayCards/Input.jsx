
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './input.css'
const Input = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim() !== '') {
            navigate('/route1');
        }
    };

    return (
        <form className='birthdayForm' onSubmit={handleSubmit}>
            <h1>Birthday Card Generator</h1>
            <label htmlFor="name">{`Enter the recipient's name:`}</label>
            <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <br />
            <button type="button" onClick={() => navigate(`/birthday/card1?${name}`)}>Generate Card 1</button>
            <button type="button" onClick={() => navigate(`/birthday/card2?${name}`)}>
                Generate Card
            </button>
        </form>
    );
};

export default Input;