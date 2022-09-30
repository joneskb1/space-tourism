import "./Tech.css";
import Navbar from "../components/Navbar";
import { useFetch } from "../hooks/useFetch";
import { useState, useEffect } from "react";
import useWindowSize from "../hooks/useWindowSize";

export default function Tech() {
  const { data, isPending, error } = useFetch(
    "http://localhost:8000/technology"
  );
  const { windowSize } = useWindowSize();
  const [num, setNum] = useState(0);
  const [orientation, setOrientation] = useState("");

  useEffect(() => {
    if (windowSize.innerWidth >= 1440) {
      setOrientation("portrait");
    } else {
      setOrientation("landscape");
    }
  }, [windowSize]);


  function updateTech(num) {
    setNum(num);
  }

  return (
    <div className='tech'>
      <Navbar />
      {isPending && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {data && (
        <>
          <p className='tech-title'>
            <span>03</span>SPACE LAUNCH 101
          </p>
          <div className="tech-container-desktop">
          <img className='tech-img' src={`.${data[num].images[orientation]}`} />

          <div className='btn-box'>
            <button
              onClick={() => updateTech(0)}
              className={num === 0 ? "active" : ""}
            >
              1
            </button>
            <button
              onClick={() => updateTech(1)}
              className={num === 1 ? "active" : ""}
            >
              2
            </button>
            <button
              onClick={() => updateTech(2)}
              className={num === 2 ? "active" : ""}
            >
              3
            </button>
          </div>
          <div className='tech-text-box'>
            <p className='tech-term'>THE TERMINOLOGY...</p>
            <p className='tech-name'>{data[num].name}</p>
            <p className='tech-desc'>{data[num].description}</p>
          </div>
          </div>
        </>
      )}
    </div>
  );
}
