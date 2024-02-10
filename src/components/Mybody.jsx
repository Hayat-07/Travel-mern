import { useEffect } from "react";
import "./Mybody.scss";
import video from "../assets//v1.webm";
import { IoLocationOutline } from "react-icons/io5";
import { TbFilterSearch } from "react-icons/tb";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { BsListTask } from "react-icons/bs";
import { TbApps } from "react-icons/tb";
import Aos from "aos";
import "aos/dist/aos.css";

function Mybody() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type="video/WEBM"></video>

      <div className="homeContent container">
        <div className="textDiv">
          <span data-aos="fade-up" className="smalltext">
            Our Packages
          </span>
          <h1 data-aos="fade-up" className="homeTitle">
            Search your Holiday
          </h1>
        </div>

        <div data-aos="fade-up" className="cardDiv flex">
          <div className="inputesDiv flex">
            <div className="nameInput">
              <label htmlFor="Input">Search Your Destination</label>
              <div className="name">
                <input type="text" placeholder="Enter Name Here..." />
                {/* <span>
                  <IoLocationOutline />
                </span> */}
              </div>
            </div>

            <div className="dateInput">
              <label htmlFor="date">Search Your Date</label>
              <div className="date">
                <input type="date" placeholder="Enter Name Here..." />
              </div>
            </div>

            <div className="priceInput">
              <label htmlFor="price">Max price:$5000</label>
              <div className="price ">
                <input
                  type="range"
                  max={5000}
                  min={1000}
                  placeholder="Enter Name Here..."
                />
              </div>
            </div>
          </div>

          <div className="moreFilter flex">
            <TbFilterSearch />
            <span>More Filters</span>
          </div>
        </div>

        <div className="homeFooterIcons flex">
          <div className="leftIcons flex">
            <FaFacebook className="icon" />
            <AiOutlineInstagram className="icon" />
            <FaTripadvisor className="icon" />
          </div>
          <div className="rightIcons flex">
            <BsListTask className="icon" />
            <TbApps className="icon" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mybody;
