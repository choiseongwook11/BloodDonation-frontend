import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./register.css"

function Register() {
    const navigate = useNavigate();
    const [Email, setEmail] = useState("");
    const [Username, setUsername] = useState("");
    const [Password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value);
    };

    const onUsernameHandler = (event) => {
        setUsername(event.currentTarget.value);
    };

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    };

    const onConfirmPasswordHandler = (event) => {
        setConfirmPassword(event.currentTarget.value);
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();

        if (Password !== ConfirmPassword) {
            alert('Passwords do not match');
            return;
        }

        let body = {
            email: Email,
            username: Username,
            password: Password,
        };


        fetch('', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then(response => {
                if (response.ok) {

                    navigate('/login');
                } else {

                    throw new Error('Network response was not ok.');
                }
            })
            .catch(error => {

                console.error("There was an error!", error);
            });
    };

    return (
        <div>
            <header className="all">
                <div>
                    <div className="head-box">
                        <div className="head-text"><a href="/">BLOOD DONETION</a></div>
                    </div>
                    <div class="top_text-box">
                        <div className="top_text" onClick={() => navigate("/login")}>로그인</div>
                        <div className="top_text">ㅣ</div>
                        <div className="top_text" onClick={() => navigate("/Register")}>회원가입</div>
                    </div>
                </div>
            </header>
            <section className='all'>
                <div className="app-container">
                    <form className="form-container" onSubmit={onSubmitHandler}>
                        <label>Email</label>
                        <input type="email" value={Email} onChange={onEmailHandler} />
                        <label>Username</label>
                        <input type="text" value={Username} onChange={onUsernameHandler} />
                        <label>Password</label>
                        <input type="password" value={Password} onChange={onPasswordHandler} />
                        <label>Confirm Password</label>
                        <input type="password" value={ConfirmPassword} onChange={onConfirmPasswordHandler} />
                        <br />
                        <button type="submit">회원가입</button>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Register;
