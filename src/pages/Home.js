import "./Home.css";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className='home'>
      <Navbar></Navbar>
      <div className='content-container'>
        <div className='text-container'>
          <h1 className='subh3'>So, you want to travel to
          <span className='feature-text'>Space</span></h1>
          <p className='body-text'>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="circle-container">
        <div className='circle'>
          <Link to='/destination' className='explore-btn'>
            Explore
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
}
