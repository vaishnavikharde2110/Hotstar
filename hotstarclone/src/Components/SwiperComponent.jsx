// SwiperComponent.js

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import MovieCard from './Moviecard.jsx';
import './SwiperComponent.css'

const SwiperComponent = ({ movies }) => {
  return (
    <div className='swiperDiv'>
      <h1>New Release</h1>
    <Swiper
      spaceBetween={10}
      slidesPerView={6}
      navigation
      pagination={{ clickable: true }}
      
      scrollbar={{ draggable: true }}
    >
      {movies.map((movie) => (
        <SwiperSlide key={movie.id}>
          <MovieCard movie={movie} />
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  );
};

export default SwiperComponent;
