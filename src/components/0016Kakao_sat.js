import React from 'react';
import axios from 'axios';
import Movie from './Webtoon';
import './Home.css';

var Api_Link = `https://korea-webtoon-api.herokuapp.com/?perPage=50&service=kakaoPage&updateDay=sat`;



class Kakao_sat extends React.Component {
  
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async (params) => {
    const movies = await axios.get(Api_Link);
    this.setState({ movies:movies.data.webtoons, isLoading: false });
    console.log(movies);
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => {
              return (
                <Movie
                  title={movie.title}
                  author={movie.author}
                  img={movie.img}
                  service={movie.service}
                  url={movie.url}
                />
              );
            })}
          </div>
        )}
      </section>
    );
  }
}

export default Kakao_sat;
