import React from 'react';
import './App.css';          // html => 글자(구조), css => 꾸미기(인테리어), js => 기능(스마트 홈)
import {HashRouter, Route} from 'react-router-dom';
import About from './routes/About';
import Home from "./routes/Home";

function App(){
  return (
    <HashRouter>
    <Route path="/" component={Home}/>
    <Route path="/about" component={About}/>
    </HashRouter>
  );
}

export default App;