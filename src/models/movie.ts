export interface Movie {
  backdrop_path: string;
  poster_path: string;
  original_title: string;
  overview: string;
  genre_ids: number[];
  title: string;
}

export interface ListType {
  [name: string]: string;
}
export interface Paramtype {
  [name: string]: string | number;
}
