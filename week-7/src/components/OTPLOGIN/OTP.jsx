
import  { useState, useRef } from 'react';
import './otp.css';

const OTPPage = () => {
  const [otp, setOTP] = useState(['', '', '', '']);
  const otpBoxes = useRef([]);

  const handleOTPEnter = (index, e) => {
    const { value } = e.target;
    const newOTP = [...otp];
    newOTP[index] = value;
    setOTP(newOTP);

    if (value !== '' && index < otp.length - 1) {
      otpBoxes.current[index + 1].focus();
    } else if (value === '' && index > 0) {
      otpBoxes.current[index - 1].focus();
    }
  };
  const handleBackspace = (index, e) => {
    if (e.key === 'Backspace' && index > 0 && otp[index] === '') {
      otpBoxes.current[index - 1].focus();
    }
  };
  
  const handleVerifyOTP = () => {
    const enteredOTP = otp.join('');
    alert(`OTP Verified: ${enteredOTP}`);
  };

  return (
    <div className="otp-page">
      <div className="otp-card">
        <h2 className="otp-header">Enter OTP</h2>
        <div className="otp-input-container">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleOTPEnter(index, e)}
              onKeyDown={(e) => handleBackspace(index, e)}
              ref={(el) => (otpBoxes.current[index] = el)}
              className="otp-input"
            />
          ))}
        </div>
        <button onClick={handleVerifyOTP} className="verify-btn">
          Verify
        </button>
      </div>
    </div>
  );
};

export default OTPPage;
