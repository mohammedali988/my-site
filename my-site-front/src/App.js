import { BrowserRouter as Router } from "react-router-dom";
import SideBar from "./Component/SideBar/index";
import "./App.css";

function App() {
  return (
    <Router>
      <SideBar />
    </Router>
  );
}

export default App;
