import React from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import Main from'./components/test';
import Navigation from './components/Navigation';
import Detail from './routes/Detail';
import Naver_mon from './components/01Naver_mon';
import Naver_tue from './components/02Naver_tue';
import Naver_wed from './components/03Naver_wed';
import Naver_thu from './components/04Naver_thu';
import Naver_fri from './components/05Naver_fri';
import Naver_sat from './components/06Naver_sat';
import Naver_sun from './components/07Naver_sun';
import Naver_fin from './components/08Naver_fin';
import Kakao_mon from './components/0011Kakao_mon';
import Kakao_tue from './components/0014Kakao_thu';
import Kakao_wed from './components/0013Kakao_wed';
import Kakao_thu from './components/0014Kakao_thu';
import Kakao_fri from './components/0015Kakao_fri';
import Kakao_sat from './components/0016Kakao_sat';
import Kakao_sun from './components/0017Kakao_sun';
import Kakao_fin from './components/0018Kakao_fin';
import Adult from './components/Adult';

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/naver-mon" component={Naver_mon} />
      <Route path="/naver-tue" component={Naver_tue} />
      <Route path="/naver-wed" component={Naver_wed} />
      <Route path="/naver-thu" component={Naver_thu} />
      <Route path="/naver-fri" component={Naver_fri} />
      <Route path="/naver-sat" component={Naver_sat} />
      <Route path="/naver-sun" component={Naver_sun} />
      <Route path="/naver-finished" component={Naver_fin} />
      <Route path="/kakao-mon" component={Kakao_mon} />
      <Route path="/kakao-tue" component={Kakao_tue} />
      <Route path="/kakao-wed" component={Kakao_wed} />
      <Route path="/kakao-thu" component={Kakao_thu} />
      <Route path="/kakao-fri" component={Kakao_fri} />
      <Route path="/kakao-sat" component={Kakao_sat} />
      <Route path="/kakao-sun" component={Kakao_sun} />
      <Route path="/kakao-finished" component={Kakao_fin} />
      <Route path="/adult" component={Adult} />
      

      <Route path="/detail" component={About} />

      <Route path="/adult" component={Adult}/>


    </HashRouter>
  );
}

/*
      <Link to="/naver-mon">월</Link>
      <Link to="/naver-mon">화</Link>
      <Link to="/naver-mon">수</Link>
      <Link to="/naver-mon">목</Link>
      <Link to="/naver-mon">금</Link>
      <Link to="/naver-mon">토</Link>
      <Link to="/naver-mon">일</Link>



      <Route path="/about" component={About} />
      <Route path="/movie-detail" component={Detail} />
      <Route path="/test" component={Main} />
*/

export default App;
