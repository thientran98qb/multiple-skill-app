import { ListResponse, ListType, Movie, MovieListType, Paramtype, TvListType, VideoType } from "../models";
import configAxios from "./configAxios";

export const categories = {
  movie: "movie",
  tv: "tv",
};

export const tvType: TvListType = {
  on_the_air: "on_the_air",
  popular: "popular",
  top_rated: "top_rated",
  latest: "latest",
};
export const movieType: MovieListType = {
  popular: "popular",
  top_rated: "top_rated",
  upcoming: "upcoming",
  latest: "latest",
};

export const tmdbConfig = {
  getMovieList: (
    type: string,
    params: Paramtype
  ): Promise<ListResponse<Movie>> => {
    const url = `/movie/${movieType[type]}`;
    return configAxios.get(url, { params });
  },
  getTvList: (
    type: string,
    params: Paramtype
  ): Promise<ListResponse<Movie>> => {
    const url = `/tv/${tvType[type]}`;
    return configAxios.get(url, { params });
  },
  getVideos: (movieId: number): Promise<ListResponse<VideoType>> => {
    const params = {}
    const url = `/movie/${movieId}/videos`;
    return configAxios.get(url, {params})
  }
};
