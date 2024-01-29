
import "./Mybody.scss";
import video from '../assets//v1.mp4';


function Mybody() {
  return (
    
         <section className="home">
           
           <div className="overlay">
            <h1>This is Overlay</h1>
           </div>
           <video  src={video} muted autoPlay loop type="video/mp4"></video>



           <div className="homeContent container">
            <div className="textDiv">
                <span className="smalltext">
                  Our Packages
                </span>
                <h1 className="homeTitle">
                  Search your Holiday
                </h1>
            </div>


            <div className="cardDiv">
              
            </div>
           </div>


         </section>
    
  )
}

export default Mybody