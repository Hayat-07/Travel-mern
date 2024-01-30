import data from '../API/Api'
import "./main.scss";

function Main() {


  return (
    <section className="main container section">
          <div className="sectionTitle">
            <h3 className="title"> Most Visited Destinations</h3>
          </div>

          <div className="sectContent grid">
              {
                data.map((x)=>{
                   return (<>
                     <div className="cardMy grid">
                     <h2>{x.name}</h2>
                     <h3>{x.fees}</h3>
                     <h6>{x.description}</h6>
                     </div>
                   </>)
                })
              }
          </div>
    </section>
  )
}

export default Main