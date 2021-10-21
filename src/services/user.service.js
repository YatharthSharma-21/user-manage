import axios from "axios";
const getList = (pageNo = 1) =>
  axios.get(
    `https://gorest.co.in/public-api/users`
  );
export {
  getList,
};
