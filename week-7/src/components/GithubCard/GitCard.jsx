import { useState } from 'react';
import axios from 'axios';
import './gitCard.css';

const GitCard = () => {
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false)
    const handleChange = (event) => {
        setUsername(event.target.value);
    };

    const fetchData = () => {
        if(userData)setUserData(null)
        setLoading(true);
        axios.get(`https://api.github.com/users/${username}`)
            .then(response => {
                setUserData(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
                setError(true);
            });
    };

    return (
        <div className="GitCard">
            <div className="form-container">
                <input
                    type="text"
                    placeholder="Enter GitHub username"
                    value={username}
                    onChange={handleChange}
                />
                <button onClick={fetchData}>Get Data</button>
            </div>
            {loading ? (
                <div className="loader">Loading...</div>
            ) : userData ? (
                <div className="card">
                    <img src={userData.avatar_url} alt="Profile" />
                    <div className="user-details">
                        <h2>{userData.name}</h2>
                        <p>@{userData.login}</p>
                        <p>Followers: {userData.followers}</p>
                        <p>Following: {userData.following}</p>
                    </div>
                </div>
            ) : error&&<h1>No user Data found</h1>}
        </div>
    );
}

export default GitCard;
