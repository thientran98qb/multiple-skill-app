import { Box, Typography } from '@mui/material';
import React from 'react'
import { configApi } from '../../api/configApi';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { Movie } from '../../models'
import { MovieItemContainer } from './MovieItemStyles';
import { Link } from 'react-router-dom';

interface MovieItemProps {
  movie: Movie;
}

const MovieItem = ({movie}: MovieItemProps) => {
  const movieImage = configApi.getImageW500(movie.poster_path || movie.backdrop_path)
  return (
    <Link to="">
      <MovieItemContainer className='movie-item' imageCover={movieImage}>
        <Box className='movie-item-img'>
          <PlayCircleIcon/>
        </Box>
        <Typography>{movie.title || movie.original_name}</Typography>
      </MovieItemContainer>
    </Link>
  )
}

export default MovieItem
