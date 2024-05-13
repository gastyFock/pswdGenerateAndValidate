import { useState, useRef } from 'react';
import React from 'react';
import cl from './Generator.module.css'


function PasswordGenerator() {
    const [password, setPassword] = useState('');
    const passwordRef = useRef(null);

    const passwordBox = document.getElementById("password");
    const length = 25;

    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const numder = "0123456789";
    const symbol = "@#$%^&*()_+|}{[]></-=";
    const allChars = upperCase + lowerCase + numder + symbol;

    const copyPassword = () => {
        if (passwordRef.current) {
            passwordRef.current.select();
            document.execCommand("copy");
        }
    };

    const createNewPassword = () => {
        let newPassword = "";
        newPassword += upperCase[Math.floor(Math.random() * upperCase.length)];
        newPassword += lowerCase[Math.floor(Math.random() * lowerCase.length)];
        newPassword += numder[Math.floor(Math.random() * numder.length)];
        newPassword += symbol[Math.floor(Math.random() * symbol.length)];

        while(length > newPassword.length) {
            newPassword += allChars[Math.floor(Math.random() * allChars.length)];
        }

        setPassword(newPassword);
    };

    return (
        <div className={cl.generator}>
        <div className="container_generator">
            <h1 style={{
                fontWeight: 400,
                fontSize: '45px',
                fontFamily: 'Popins, sans-serif',
                boxSizing: 'border-box'
            }}>
                Generate a <br/><span style={{
                color: '#019f55',
                borderBottom: '4px solid #019f55',
                paddingBottom: '7px',
                margin: 0,
                padding: 0,
            }}>
                Random password</span></h1>
            <div className="display_generator" style={{
                width: '90%',
                marginTop: '50px',
                marginBottom: '30px',
                background: '#fff',
                color: '#333',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px 20px',
                borderRadius: '10px'
            }}>
                <input ref={passwordRef} id="password" type="text" placeholder="Password" value={password} readOnly
                style={{
                    border: 0,
                    outline: 0,
                    fontSize: '24px',
                    minWidth: 350
                }}/>
                <button onClick={copyPassword} style={{
                border: 0,
                outline: 0,
                background: '#019f55',
                color: '#fff',
                fontSize: '22px',
                fontWeight: 300,
                display: 'flex',
                alignWtems: 'center',
                justifyContent: 'center',
                padding: '8px 10px',
                borderRadius: '10px',
                cursor: 'pointer'
            }}>
                Copy</button>
            </div>
            <button onClick={createNewPassword} style={{
                border: 0,
                outline: 0,
                background: '#019f55',
                color: '#fff',
                fontSize: '22px',
                fontWeight: 300,
                display: 'flex',
                alignWtems: 'center',
                justifyContent: 'center',
                padding: '16px 26px',
                borderRadius: '10px',
                cursor: 'pointer'
            }}>Generate Password</button>
        </div>
        </div>
    );
}

export default PasswordGenerator;
