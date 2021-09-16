import './App.css';
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import RenderRoutes from "./Routes/Helpers/RenderRoutes";
import ROUTES from "./Routes/routes";
import { BrowserRouter  as Router } from "react-router-dom";
import Notiflix from "notiflix";

function App() {
  const loading = useSelector((state) => state.loading.isLoading);
  useEffect(() => {
    loading
      ? Notiflix.Loading.Standard("Loading...")
      : Notiflix.Loading.Remove();
  }, [loading]);
  return (
    <div className="App">
      <Router>
      <RenderRoutes routes={ROUTES} />
      </Router>
    </div>
  );
}

export default App;
