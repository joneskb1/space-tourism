import "./Crew.css";
import Navbar from "../components/Navbar";
import { useFetch } from "../hooks/useFetch";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Crew() {
  const { data, isPending, error } = useFetch("https://react-space-tourism.herokuapp.com/crew");
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
        <div className="wrapper">
          <h5 className='crew-title'>
            <span>02</span>MEET YOUR CREW
          </h5>
           <picture>
                 <source  src={`.${data[num].images.webp}`} type="image/webp"/>
                 <img  className='crew-img'  src={`.${data[num].images.png}`} alt="crew member image"/>
            </picture>
            <hr></hr>
            <div className='dot-box'>
              <Link aria-label="Douglas Hurley tab"
                onClick={() => updateCrew(0)}
                className={num === 0 ? "active" : ""}
              ></Link>
              <Link aria-label="Mark Shuttleworth tab"
                onClick={() => updateCrew(1)}
                className={num === 1 ? "active" : ""}
              ></Link>
              <Link aria-label="Victor Glover tab"
                onClick={() => updateCrew(2)}
                className={num === 2 ? "active" : ""}
              ></Link>
              <Link aria-label="Anousheh Ansari tab"
                onClick={() => updateCrew(3)}
                className={num === 3 ? "active" : ""}
              ></Link>
            </div>
            <div className='crew-text-box'>
              <h4 className='role'>{data[num].role}</h4>
              <h3 className='name'>{data[num].name}</h3>
              <p className='bio'>{data[num].bio}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
