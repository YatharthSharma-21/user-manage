import './App.css';
import RenderRoutes from "./Routes/Helpers/RenderRoutes";
import ROUTES from "./Routes/routes";
import { BrowserRouter  as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <RenderRoutes routes={ROUTES} />
      </Router>
    </div>
  );
}

export default App;
