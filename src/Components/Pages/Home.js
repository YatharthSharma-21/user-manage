import React,{useState} from "react";
import Card from "../Card/Card";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import Notiflix from "notiflix";
import { getMovies } from "../../Redux/Actions/moviesAction"
import { useHistory } from "react-router";

const Home = () => {
  const { movies } = useSelector((state) => state.movies);
  const [more,setMore] = useState(true);
  const dispatch = useDispatch();
  const history = useHistory();
  const { page } = useSelector((state) => state.movies);
  const fetchMoreData = () => {
    dispatch(getMovies(page, history));
    localStorage.setItem('welcome',true);
  }
  return (
    <div className="home">
      <InfiniteScroll
        dataLength={movies.length}
        next={fetchMoreData}
        hasMore={more}
        loader={Notiflix.Loading.Standard("Loading...")}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {movies.map((movie, index) => {
          return <Card data={movie} />;
        })}
      </InfiniteScroll>
    </div>
  );
};

export default Home;
