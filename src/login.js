import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import './login.css';

function Login() {
    const navigate = useNavigate()
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value);
    };

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();

        console.log('Email', Email);
        console.log('Password', Password);

        let body = {
            email: Email,
            password: Password
        };
    // 여기에서 로그인 API를 호출하거나 로그인 처리를 수행합니다.
    // 예시: axios.post('/api/users/login', body)...
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
                    <div className="top_text">회원가입</div>
                </div>
            </div>
        </header>
        <section className='all'>
            <div className="app-container">
                <form className="form-container" onSubmit={onSubmitHandler}>
                    <label>Email</label>
                    <input type="email" value={Email} onChange={onEmailHandler} />
                    <label>Password</label>
                    <input type="password" value={Password} onChange={onPasswordHandler} />
                    <br />
                    <button type="submit">로그인</button>
                </form>
            </div>
        </section>
    </div>
);
}

export default Login;
