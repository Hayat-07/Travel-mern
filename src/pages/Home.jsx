import Footer from "../components/Footer"
import Header from "../components/Header"
import Main from "../components/Main"
import Mybody from "../components/Mybody"


function Home() {
  return (
   <>
    <div className="body">
    <Header></Header>
    <Mybody></Mybody>
    <Main></Main>
    <Footer></Footer>
    </div>
   </>
  )
}

export default Home