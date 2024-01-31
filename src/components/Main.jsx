import data from "../API/Api";
import "./main.scss";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineClipboardList } from "react-icons/hi";

function Main() {
  return (
    <section className="main container section">
      <div className="sectionTitle">
        <h3 className="title"> Most Visited Destinations</h3>
      </div>

      <div className="sectContent grid">
        {data.map((x, i) => {
          return (
            <>
              <div key={i} className="cardMy grid">
                <div className="imgDiv ">
                <img src={x.img} alt="Image" />
                </div>
               <div style={{display:"flex", justifyContent:"center",alignItems:"center" }}>
               <h2>{x.name}</h2> <span><CiLocationOn /></span>
               </div>
                <h3>{x.fees}</h3>
                <h6>{x.description}</h6>
                <div className="btn flex" style={{color:"white", width:"50%",margin:"auto", height:"1.5rem",textAlign:"center"}}>Dtails <HiOutlineClipboardList />
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
