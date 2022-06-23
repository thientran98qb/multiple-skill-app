export const configApi = {
  base_url: "https://api.themoviedb.org/3",
  api_key: "e6c98b503ebc6ef57d315c4e3e57b40b",
  getImageOriginal: (img: string) =>
    `https://image.tmdb.org/t/p/original/${img}`,
  getImageW500: (img: string) => `https://image.tmdb.org/t/p/w500/${img}`,
};
