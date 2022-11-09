import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';          // html => 글자(구조), css => 꾸미기(인테리어), js => 기능(스마트 홈)


class Home extends React.Component{ //기능을 물려받은
  state = {
    isLoading:true,
    movies: [],
  }
getMovies = async () => { //동기화 하는 동안의 시간을 대기하는 상태
  const{
    data : {
      data : {movies}
     }
     } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');

  console.log(movies);
  this.setState({movies:movies, isLoading:false});

}
componentDidMount(){
  /*setTimeout(()=>{
    this.setState({isLoading:false});
  }, 3000);*/
  this.getMovies();
}


  render(){
    const {isLoading, movies} = this.state;
    return(
      <section className="container">
        {
          isLoading ? (
            <div ckass="loader">
              <spen className ="loader_text"> Loading... </spen>
            </div>
            )
            :(
                <div className="movies">
                  {movies.map((movie) =>
                    (
                      <Movie
                        key = {movie.id} 
                        id ={movie.id}
                        year={movie.year}
                        title={movie.title}
                        summary={movie.summary}
                        poster={movie.medium_cover_image}  
                        genres={movie.genres}/>
                    )
                  )
                  } </div>
            )
        }
      </section>  //3항 연산,
    );
  }
}

export default Home;