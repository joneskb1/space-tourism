import "./App.css";
import Home from "./pages/Home.js";
import Destination from "./pages/Destination";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Tech from "./pages/Tech.js";
import Crew from "./pages/Crew";
import { NavContext } from "./context/NavContext";
import { useContext } from "react";

function App() {
  const context = useContext(NavContext);

  return (
    <div className="App">
      <BrowserRouter>
        <main onClick={context.closeMenu}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/destination" element={<Destination />}></Route>
            <Route path="/technology" element={<Tech />}></Route>
            <Route path="/crew" element={<Crew />}></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
