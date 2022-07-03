import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { categories, tmdbConfig } from '../../api/tmdbConfig';
import { Movie } from '../../models';
import MovieItem from '../MovieItem';

interface MovieListProps {
  type: string;
  category: string;
}

const MovieList = ({type, category}: MovieListProps) => {
  const [items, setItems] = useState<Movie[]>([])
  /**
   * Get type movie, category
   */
  useEffect(() => {
    (async () => {
      const params = {}
      let response = null
      try {
        if (category === categories.movie) {
          response = await tmdbConfig.getMovieList(type, params)
        } else {
          response = await tmdbConfig.getTvList(type, params)
        }
        setItems(response.results)
      } catch (error) {
        console.log(error);
      }
    })()
  }, [type, category])
  return (
    <Swiper slidesPerView={"auto"} spaceBetween={20}>
      {items.map((movie, index) => (
        <SwiperSlide style={{width: "15%"}} key={index}>
          <MovieItem movie={movie}/>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default MovieList
