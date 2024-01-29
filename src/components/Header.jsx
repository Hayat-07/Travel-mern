import "./Header.scss";
import { SiYourtraveldottv } from "react-icons/si";
import { IoCloseOutline } from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";
import { useState } from "react";

function Header() {
  const [navStatus,setNavStatus]=useState("navBar");
  return (
   <section className="headerSection">
 
       <header className="header flex">
          
          <div className="logoDiv">
            <a href="#" className="logo flex"> <h1><SiYourtraveldottv className="icon"/>  Travel</h1></a>
          </div>




          <div className={navStatus}  >
            <ul className="navList flex ">

              <li className="navItem">
                <a href="#" className="navLink">Home</a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">Packages</a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">Shop</a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">About</a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">Pages</a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">News</a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">Contact</a>
              </li>

              <button  className="btn">
                <a href="#">Book Now</a>
              </button>
            </ul>


            <div  onClick={()=>{setNavStatus("navBar")}} className="closeNavbar">
            <IoCloseOutline  className="icon"/>
            </div>
          </div>



          <div className="toggleNavbar">
          <TbGridDots onClick={()=>{setNavStatus("navBar navShow")}}  className="icon"/>
          </div>


       </header>

   </section>
  )
}

export default Header