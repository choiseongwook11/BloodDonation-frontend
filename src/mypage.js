import './mypage.css';

function Mypage() {
    return (
        <div className="all">
        <div className="Web">
            <p className="logo"><a href="/">BLOOD DONETION</a></p>
            <p className="account">OOO회원님 환영합니다!</p>
            <div className="rectangle">
                <h1 className="title">내 정보</h1>
                <img className="profile-img"></img>
                <h1 className="profile-name">장희철님</h1>
                <div className="rectangle2">
                    <p className="title2">장희철님이 헌혈한 양</p>
                    <div className="rectangle3">
                        <p className="title3">현재 등급 : 7</p>
                        <p className="sub-title">(10등급 중 7등급)</p>
                        <div className="gagebar">
                            <div className="gagebar2">
                                <p className="qunaty">700mL / 1000mL</p>
                            </div>
                        </div>
                        <div className="count">
                            <p className="title4">현재까지 헌혈한 횟수 : 13회</p>
                            <p className="sub-title2">( 1회 당 100mL씩 채워짐 )</p>
                            <p className="title5">지금까지 39명의 생명을 살리셨습니다!</p>
                            <p className="sub-title3">( 1회 당 3명의 생명을 살릴 수 있습니다 )</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="title6">내가 모은 메달</h1>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Mypage;