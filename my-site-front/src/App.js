import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from "./Component/SideBar/index";
import "./App.css";
import LeftSideLayOut from "./LayOut/LeftSide";
import RightSideLayOut from "./LayOut/RightSide";
import Board from "./Page/Management";
import Home from "./Page/Home";

function App() {
  return (
    <Router>
      <LeftSideLayOut>
        <SideBar />
      </LeftSideLayOut>
      <RightSideLayOut>
        <Routes>
          <Route path="/reports" element={<Home />} />
          <Route path="/management/board" element={<Board />} />
        </Routes>
      </RightSideLayOut>
    </Router>
  );
}

export default App;
