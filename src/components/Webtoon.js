import React from 'react';
import PropTypes from 'prop-types';
import './Webtoon.css';
import { Link } from 'react-router-dom';

function Movie({ title, img, author, service, url }) {
  return (
    <div className="webtoon">
      <img src={img} alt={title} title={title} onclick="window.location.href='http://www.naver.com'"/>
      <div className="webtoon__data">
      <h3 className="webtoon__title">{title} </h3>
      <h3 className='webtoon__author'>작가 : {author} </h3>
      <h3 className='webtoon__service'>플랫폼: {service} </h3>
      </div>
    </div>
  );
}

Movie.propTypes = {
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  img : PropTypes.string.isRequired,
  service: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
