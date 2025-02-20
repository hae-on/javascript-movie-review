export const API_KEY = process.env.API_KEY;
export const BASE_URL = "https://api.themoviedb.org/3/";

export const FetchUrl: Readonly<{ [key: string]: string }> = {
  POPULAR_URL: `${BASE_URL}movie/popular?api_key=${API_KEY}&language=ko-KR&page=`,
  SEARCH_URL: `${BASE_URL}search/movie?api_key=${API_KEY}&language=ko-KR&query=`,
  GENRE_URL: `${BASE_URL}genre/movie/list?api_key=${API_KEY}&language=ko-KR`,
};

export const Url: Readonly<{ [key: string]: string }> = {
  IMAGE_URL: "https://image.tmdb.org/t/p/original/",
};

export const HTMLTag: Readonly<{ [key: string]: string }> = {
  NO_SEARCH_TAG: '<p class="not-search">해당 검색 결과가 없습니다</p>',
};

export const Word: Readonly<{ [key: string]: string }> = {
  TITLE_POPULAR: "지금 인기 있는 영화",
  TITLE_SEARCH: "검색 결과",
  OVERVIEW_EMPTY: "영화 내용이 등록되지 않았습니다",
};

export const ConstantsNumber: Readonly<{ [key: string]: number }> = {
  PAGE_MIN_NUMBER: 1,
  PAGE_MAX_NUMBER: 500,
  ROAD_IMAGE_NUMBER: 20,
};

export const StatusCode: Readonly<{ [key: number]: number }> = {
  401: 33,
  402: 7,
  403: 3,
  404: 34,
  500: 25,
};
