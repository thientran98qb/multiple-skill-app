import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react'
import { categories, tmdbConfig } from '../../api/tmdbConfig';
import { Movie } from '../../models';
import MovieItem from '../MovieItem';

interface MovieListProps {
  type: string;
  category: string;
}
const SlideItem = styled(SwiperSlide)`
  .swiper-slide {
    width: 15%;
    @media only screen and (max-width: 768px) {
      width: 30%;
    }
    @media only screen and (max-width: 460px) {
      width: 47%;
    }
  }
`
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
    <SlideItem>
      <Swiper slidesPerView={"auto"} spaceBetween={20}>
        {items.map((movie, index) => (
          <SwiperSlide key={index}>
            <MovieItem movie={movie}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </SlideItem>
  )
}

export default MovieList
