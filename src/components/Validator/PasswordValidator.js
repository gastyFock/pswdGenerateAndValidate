import React, { useState, useEffect, useRef } from 'react';
import cl from './Validator.module.css';

function PasswordValidator() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const passwordInputRef = useRef(null);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    const passwordInput = passwordInputRef.current;
    const requirements = [
      { regex: /.{8,}/, index: 0 },
      { regex: /[0-9]/, index: 1 },
      { regex: /[^A-Za-z0-9]/, index: 2 },
      { regex: /[a-z]/, index: 3 },
      { regex: /[A-Z]/, index: 4 },
    ];

    const handleKeyUp = (e) => {
      requirements.forEach((item) => {
        const isValid = item.regex.test(e.target.value);
        const requirementItem = document.querySelectorAll(".requirement-list_validator li")[item.index];
        if (requirementItem) {
          if (isValid) {
            requirementItem.classList.add("valid");
            requirementItem.firstElementChild.className = "fa-solid fa-check";
          } else {
            requirementItem.classList.remove("valid");
            requirementItem.firstElementChild.className = "fa-solid fa-circle";
          }
        }
      });
    };

    passwordInput.addEventListener("keyup", handleKeyUp);

    return () => {
      passwordInput.removeEventListener("keyup", handleKeyUp);
    };
  }, []); // Run this effect only once on component mount

  return (
    <div className={cl.validator} style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#002339',
      color: '#fff'
    }}>
      <div className="wrapper_validator" style={{
        background: '#fff',
        width: '450px',
        padding: '28px',
        borderRadius: '7px'
      }}>
        <div className="pass-field_validator" style={{
          height: '65px',
          width: '100%',
          position: 'relative'
        }}>
          <input
            className='input_validator'
            ref={passwordInputRef}
            type={showPassword ? "text" : "password"}
            placeholder="Validate your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} style={{
              width: '100%',
              height: '100%',
              padding: '0 17px',
              outline: 'none',
              fontSize: '1.3rem',
              borderRadius: '5px',
              border: '1px solid #999'
            }}
          />
          <button className='show_hide_btn' onClick={togglePasswordVisibility} style={{
            border: 0,
            outline: 0,
            background: '#019f55',
            color: '#fff',
            fontSize: '18px',
            fontWeight: 300,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '5px 7px',
            borderRadius: '10px',
            cursor: 'pointer',
            margin: '10px 280px',
          }}>Show/Hide</button>
        </div>
        <div className="content_validator" style={{
          margin: '20px 0 10px'
        }}>
          <p className='text_validator' style={{
            fontSize: '1.3rem',
            color: 'black'
          }}>Password must contain:</p>
          <ul className="requirement-list_validator" style={{
              marginTop: '15px',
              color: 'black',
              width: '20px',
              listStyle: 'none',
              fontSize: '1.3rem',
              marginBottom: '15px',
              minWidth: 400
          }}>
            <li><i className="fa-solid fa-circle" style={{
              fontSize: '0.6rem',
              color: '#aaa',
              width: '20px',
              verticalAlign: 'middle' 
            }}>
              </i> <span>At least 8 characters lenght</span></li>
            <li><i className="fa-solid fa-circle"style={{
              fontSize: '0.6rem',
              color: '#aaa',
              width: '20px',
              verticalAlign: 'middle' 
            }}></i> <span>At least 1 number (1-9)</span></li>
            <li><i className="fa-solid fa-circle"style={{
              fontSize: '0.6rem',
              color: '#aaa',
              width: '20px',
              verticalAlign: 'middle' 
            }}></i> <span>At least 1 special symbol (!-$)</span></li>
            <li><i className="fa-solid fa-circle"style={{
              fontSize: '0.6rem',
              color: '#aaa',
              width: '20px',
              verticalAlign: 'middle' 
            }}></i> <span>At least 1 lowercase letter (a-z)</span></li>
            <li><i className="fa-solid fa-circle"style={{
              fontSize: '0.6rem',
              color: '#aaa',
              width: '20px',
              verticalAlign: 'middle' 
            }}></i> <span>At least 1 uppercase letter (A-Z)</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PasswordValidator;
