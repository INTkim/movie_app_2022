import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about__container">
    <span className='Question'>
      Q1. 이 사이트는 어떤 사이트인가요? 
    </span>
    <span className='Answer'>
      각각 플랫폼을 옮기지 않고 한 사이트에서 바로 웹툰 감상을 가능하게 사이트로 이동시켜주는 사이트입니다. 
    </span>
    <span className='Question'>
        Q2. 누가 만들었나요? 
      </span>
      <span className='Answer'>
        고딩요
      </span>
      <span className='Question'>
        Q3. 왜 만들었나요? 
      </span>
      <span className='Answer'>
        많은 친구들이 웹툰을 볼 때마다 다른 불버 사이트에 접속하는 것을 보고 한 사이트에 바로 연재처에 들어가게 하고 싶었습니다. 
      </span>
      <span className='Question'>
        Q4. 보고싶은 웹툰이 안나와요? 
      </span>
      <span className='Answer'>
        많은 웹툰을 한번에 가져올 시 로딩 속도가 느려지는 일이 발생해 한 페이지에 50개씩의 웹툰들만 나오게 하였습니다.
      </span>
    </div>
  );
}

export default About;
