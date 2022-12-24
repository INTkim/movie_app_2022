import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <div className="nav">
      <Link className='detail' to="/detail">세부 ← 처음 볼 시 클릭!</Link>
      <h4 className="nav__service">NAVER</h4>
      <Link className="nav__day" to="/naver-mon">월</Link>
      <Link className="nav__day" to="/naver-tue">화</Link>
      <Link className="nav__day" to="/naver-wed">수</Link>
      <Link className="nav__day" to="/naver-thu">목</Link>
      <Link className="nav__day" to="/naver-fri">금</Link>
      <Link className="nav__day" to="/naver-sat">토</Link>
      <Link className="nav__day" to="/naver-sun">일</Link>
      <Link className="nav__day" to="/naver-finished">완결</Link>
      <h4 className="nav__service">KAKAOPAGE</h4>
      <Link className="nav__day" to="/kakao-mon">월</Link>
      <Link className="nav__day" to="/kakao-tue">화</Link>
      <Link className="nav__day" to="/kakao-wed">수</Link>
      <Link className="nav__day" to="/kakao-thu">목</Link>
      <Link className="nav__day" to="/kakao-fri">금</Link>
      <Link className="nav__day" to="/kakao-sat">토</Link>
      <Link className="nav__day" to="/kakao-sun">일</Link>
      <Link className="nav__day" to="/kakao-finished">완결</Link>
      
    </div>
  );
}

export default Navigation;
