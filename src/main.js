import './main.css';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

function Main() {
  const navigate = useNavigate()
  return (
    <div>
      <header className="all">
        <div>
          <div className="head-box">
            <div className="head-text"><a href="/">BLOOD DONETION</a></div>
          </div>
          <div class="top_text-box">
            <div className="top_text" onClick={() => navigate("/login")}>로그인</div>
            <div className="top_text">/</div>
            <div className="top_text">회원가입</div>
          </div>
        </div>
      </header>
      <header class="all">
        <div class="sub_main">
          <div class="text-box">
            <div class="text">헌혈</div>
            <div class="text">헌혈의 집</div>
            <div class="text" onClick={() => navigate("/mypage")}>마이페이지</div>
            <div class="text">고객센터</div>
          </div>
        </div>
      </header>
      <section className="all">
        <div>
          <ul className="section_container">
            <li className="section_banner">
              <div className="banner"></div>
            </li>
            <li className="section_user">
              <div className="sec_text_container">
                <div className="sec_text">함께만드는 즐거운 헌혈,
                  안전한 수혈</div>
              </div>
              <div className="user">
                <div className="user_text">최성욱님이 헌혈한 횟수</div>
                <div className="user_prograssbar">
                  <div className="user_prograssbar_t"></div>
                </div>
                <div className='done_cou'>
                  <div>400ml/1000ml</div>
                </div>
                <div className="user_rank">현재 티어 : 실버</div>
                <div className="user_text_cou">헌혈 횟수 : 4회</div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <div class="info-containar">
          <ul class="info-list">
            <li className="map"></li>
            <li className="munjin"></li>
            <li className="choi"></li>
            <li className="qust"></li>
            <li className="qa"></li>
          </ul>
        </div>
      </section>
      <footer>
        <div class="footer-container">
          <div class="footer-text">
            <p>Copyright &copy; Bongyang`s spring. All rights reserved</p>
            <p className="footer-text-link"><a href="https://school.gyo6.net/gbsw/main.do?sysId=gbsw">사이트바로가기</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Main;
