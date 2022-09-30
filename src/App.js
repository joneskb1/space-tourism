import "./App.css";
import Home from "./pages/Home.js";
import Destination from "./pages/Destination";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Tech from "./pages/Tech.js";
import Crew from "./pages/Crew";


// make it all responsive & active states

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/destination' element={<Destination />}></Route>
          <Route path='/technology' element={<Tech />}></Route>
          <Route path='/crew' element={<Crew />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
