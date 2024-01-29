import "./App.css"
import { BrowserRouter, Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
function App() {
  return (
    <>
      <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<Home></Home>}></Route>
        <Route path="/search" element={<Home></Home>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App