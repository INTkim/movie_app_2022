import PropTypes from 'prop-types';
import React  from 'react';


function Food({name, picture, rating, author, genre}) {
  return (
    <div>
      <h2>{name} ! </h2>
      <h2>{author} 작가님</h2>
      <h2> 장르: {genre} </h2>
      <h4> 김태현 평점 : {rating}/5.0</h4>
      <img src={picture} alt={name} />
      <h4> </h4>
    </div>
  );
}

const foodIlike = [
{
  id : 1,
  name :"화산귀환",
  image : 'https://comicthumb-phinf.pstatic.net/20210331_216/pocket_1617183112705Vg2vA_JPEG/210331_.jpg?type=m260',
  rating : 4.9,
  poser : "LICO Team",
  genre : "무협 판타지",
},
{
  id : 2,
  name :"일렉시드",
  image :"https://comicthumb-phinf.pstatic.net/20191127_185/pocket_15747908314220ABz0_JPEG/_690x1000.jpg?type=m260",
  rating : 4.5 ,
  poser : "손제호, 제나",
  genre : "액션 판타지",
},
{
  id : 3,
  name : "입학용병",
  image : "https://comicthumb-phinf.pstatic.net/20201113_17/pocket_1605261751461Qdptv_JPEG/__690x100.jpg?type=m260",
  rating : 4.7,
  poser : "YC, 락현",
  genre : "학원 액션물",
},
]; //food i like 라는 배열을 만듦




//93page
function App() {
  return  (
    <div>
      <h1> 김태현 선정 최고의 NAVER WEBTOON! </h1>
      {foodIlike.map(dish =>(<Food key={dish.id} 
      name={dish.name} picture={dish.image} author={dish.poser} genre={dish.genre} rating={dish.rating} />))}
    </div>
  ); //<div>여는 태그, </div>닫는 태그

}

Food.propTypes = {
  name : PropTypes.number.isRequired,
  picture : PropTypes.number.isRequired,
  rating : PropTypes.number.isRequired,
};





export default App;
