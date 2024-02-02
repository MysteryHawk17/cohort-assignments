
import  { useState } from 'react';
import './login.css';
import {useNavigate} from 'react-router-dom'
const LoginPage = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigate=useNavigate();
  const handleChange = (e) => {
    const { value } = e.target;
    setPhoneNumber(value);
  };

  const handleSendOTP = () => {
    navigate("/login/otp")
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2 className="login-header">Login via OTP</h2>
        <input
          type="tel"
          placeholder="Enter your phone number"
          value={phoneNumber}
          onChange={handleChange}
          className="phone-input"
        />
        <button onClick={handleSendOTP} className="send-otp-btn">
          Send OTP
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
