import { useEffect } from "react";
import data from "../API/Api";
import "./main.scss";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineClipboardList } from "react-icons/hi";

import Aos from 'aos';
import 'aos/dist/aos.css';

function Main() {

  useEffect(()=>{
     Aos.init({duration:1000})
  },[])

  return (
    <section className="main container section">
      <div className="sectionTitle">
        <h3 className="title"> Most Visited Destinations</h3>
      </div>

      <div className="sectContent grid">
        {data.map((x, i) => {
          let descript = x.description.substring(0, 100);
          return (
            <>
              <div key={i} data-aos="fade-up"  className="cardMy grid">
                <div className="imgDiv ">
                  <img src={x.img} alt="Image" />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "3px",
                  }}
                >
                  <h3>
                    {x.name} <CiLocationOn />
                  </h3>
                </div>
                <div className="flex" style={{ margin: "auto" }}>
                  <h4>{x.fees}</h4>
                  <button
                    className="btn"
                    style={{
                      marginLeft: "10px",
                      height: "1rem",
                      width: "1rem",
                      display: "flex",
                      margin: "auto",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "azure",
                    }}
                  >
                    {" "}
                    <h6>+1</h6>{" "}
                  </button>
                </div>
                <h6>{descript}</h6>
                <div
                  className="btn flex"
                  style={{
                    color: "white",
                    width: "50%",
                    margin: "auto",
                    height: "1.5rem",
                    textAlign: "center",
                  }}
                >
                  Dtails <HiOutlineClipboardList />
                </div>
              </div>
            </>
          );
        })}
      </div>
    </section>
  );
}

export default Main;
