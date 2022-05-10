import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import MainRoutes from "./components/MainRoutes";
import { DataProvider } from "./data/DataContext";

const App = (props) => {

  return (
    <div className="app">
      <DataProvider>
        <Router>
          <NavBar />
          <MainRoutes />
        </Router>
      </DataProvider>
      {/* <iframe src="https://player.vimeo.com/video/672696307?h=2a462ef126" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe> */}
    </div>
  );
};

export default App;
