import axios from "axios";
const getList = (pageNo = 1) =>
  axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=794137e5f25823bf7b26a1b10ab26aaa&language=en-US&page=${pageNo}`
  );
export {
  getList,
};
