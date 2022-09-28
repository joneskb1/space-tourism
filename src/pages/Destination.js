import "./Destination.css";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

export default function Destination() {
  const { data, isPending, error } = useFetch(
    "http://localhost:8000/destinations"
  );
  const [num, setNum] = useState(0);

  function updatePlanet(num) {
    setNum(num);
  }

  return (
    <>
      <div className='destination'>
        <Navbar />
        {isPending && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {data && (
          <>
            <p className='destination-title'>
              <span>01</span>PICK YOUR DESTINATION
            </p>

            <div className='content-box'>
              <img
                className='destination-img'
                src={`.${data[num].images.png}`}
              />
              <div className='text-container'>
                <div className='destination-list'>
                  <Link
                    onClick={() => updatePlanet(0)}
                    className={num === 0 ? "active" : ""}
                  >
                    MOON
                  </Link>
                  <Link
                    onClick={() => updatePlanet(1)}
                    className={num === 1 ? "active" : ""}
                  >
                    MARS
                  </Link>
                  <Link
                    onClick={() => updatePlanet(2)}
                    className={num === 2 ? "active" : ""}
                  >
                    EUROPA
                  </Link>
                  <Link
                    onClick={() => updatePlanet(3)}
                    className={num === 3 ? "active" : ""}
                  >
                    TITAN
                  </Link>
                </div>
                <h3 className='planet-name'>{data[num].name}</h3>
                <p className='planet-desc'>{data[num].description}</p>
                <hr></hr>
                <div className='stat-box'>
                  <div className='stat-item'>
                    <p className='stat-title'>AVG. DISTANCE</p>
                    <p className='planet-stat top'>{data[num].distance}</p>
                  </div>
                  <div className='stat-item'>
                    <p className='stat-title'>EST. TRAVEL TIME</p>
                    <p className='planet-stat'>{data[num].travel}</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
