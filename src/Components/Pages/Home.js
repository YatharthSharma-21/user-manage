import React,{useState} from "react";
import Card from "../Card/Card";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import Notiflix from "notiflix";
import { getUsers} from "../../Redux/Actions/userAction"
import { useHistory } from "react-router";

const Home = () => {
  const { users, page } = useSelector((state) => state.users);
  const [more,setMore] = useState(true);
  const dispatch = useDispatch();
  const history = useHistory();  
  console.log('length',users.length)
  if(users && users.length == 0){
    dispatch(getUsers(page, history));
  }
  const fetchMoreData = () => {
    dispatch(getUsers(page, history));
    localStorage.setItem('welcome',true);
  }
  return (
    <div className="row m-0">     
        {users.map((movie, index) => {
          return <Card data={movie} index={index}/>;
        })}      
    </div>
  );
};

export default Home;
