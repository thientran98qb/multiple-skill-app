export interface Movie {
  backdrop_path: string;
  poster_path: string;
  original_title: string;
  overview: string;
  genre_ids: number[];
  title: string;
  id: number;
  original_name: string;
}

export interface ListType {
  [name: string]: string;
  popular: string;
  top_rated: string;
  latest: string;
}

export interface MovieListType extends ListType {
  upcoming: string;
}

export interface TvListType extends ListType {
  on_the_air: string;
}
export interface Paramtype {
  [name: string]: string | number;
}

export interface VideoType {
  name: string,
  key: string
}
