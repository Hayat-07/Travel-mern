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
          let descript=x.description.substring(0,100)
          return (
            <>
              <div key={i} className="cardMy grid">
                <div className="imgDiv ">
                <img src={x.img} alt="Image" />
                </div>
               <div style={{display:"flex", justifyContent:"center",alignItems:"center",padding:"3px" }}>
               <h3 >{x.name} <CiLocationOn /></h3> 
               </div>
                <h4>{x.fees}</h4>
                <h6>{descript}</h6>
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
