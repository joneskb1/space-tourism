import "./Crew.css";
import Navbar from "../components/Navbar";
import { useFetch } from "../hooks/useFetch";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Crew() {
  const { data, isPending, error } = useFetch("http://localhost:8000/crew");
  const [num, setNum] = useState(0);

  function updateCrew(num) {
    setNum(num);
  }

  return (
    <div className='crew'>
      <Navbar />
      {isPending && <p className="error">Loading...</p>}
      {error && <p className="error">{error}</p>}
      {data && (
        <>
          <p className='crew-title'>
            <span>02</span>MEET YOUR CREW
          </p>
          <div className='grid-box'>
            <img className='crew-img' src={`.${data[num].images.png}`} />
            <hr></hr>
            <div className='dot-box'>
              <Link
                onClick={() => updateCrew(0)}
                className={num === 0 ? "active" : ""}
              ></Link>
              <Link
                onClick={() => updateCrew(1)}
                className={num === 1 ? "active" : ""}
              ></Link>
              <Link
                onClick={() => updateCrew(2)}
                className={num === 2 ? "active" : ""}
              ></Link>
              <Link
                onClick={() => updateCrew(3)}
                className={num === 3 ? "active" : ""}
              ></Link>
            </div>
            <div className='crew-text-box'>
              <p className='role'>{data[num].role}</p>
              <p className='name'>{data[num].name}</p>
              <p className='bio'>{data[num].bio}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
