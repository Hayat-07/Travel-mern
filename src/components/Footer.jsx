import "./Footer.scss";

import { FiSend } from "react-icons/fi";
import { FaAngleRight } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";
import { FaYoutube } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaTripadvisor } from "react-icons/fa";

function Footer() {
  return (
    <section className="footer">
      <div className="footerVideo">
       

        <div className="footerContent">
          <div className="topDiv ">
            <h5>Keep In Touch</h5>
            <h1>Travel With Us</h1>
            <input type="text" placeholder="Enter Your Email" />
            <button className="btn">
              Send <FiSend className="icon" />
            </button>
          </div>

          <div className="bottomDiv">
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              non libero quae odio eius nesciunt, maxime ut totam numquam
              ducimus!
            </h3>
            <div className="iconsDiv ">
              <IoLogoTwitter className="icon" />
              <FaYoutube className="icon" />
              <RiInstagramFill className="icon" />
              <FaTripadvisor className="icon" />
            </div>

            <div>
              <div className="serviceLinks">
                <h1>OUR AGENCY</h1>
                <li>
                  <FaAngleRight /> Services
                </li>
                <li>
                  <FaAngleRight /> Insurence
                </li>
                <li>
                  <FaAngleRight /> Agency
                </li>
                <li>
                  <FaAngleRight /> Tourism
                </li>
                <li>
                  <FaAngleRight /> Payments
                </li>
              </div>
              <div className="serviceLinks">
                <h1>PARTNERS</h1>
                <li>
                  <FaAngleRight /> Bookings
                </li>
                <li>
                  <FaAngleRight /> RentCars
                </li>
                <li>
                  <FaAngleRight /> HostelWorld
                </li>
                <li>
                  <FaAngleRight /> Trivago
                </li>
                <li>
                  <FaAngleRight /> TripAdvisor
                </li>
              </div>

              <div className="serviceLinks">
                <h1>LAST MUNITE</h1>
                <li>
                  <FaAngleRight />London
                </li>
                <li>
                  <FaAngleRight />California
                </li>
                <li>
                  <FaAngleRight /> Indonasia
                </li>
                <li>
                  <FaAngleRight /> Europe
                </li>
                <li>
                  <FaAngleRight /> Oceania
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
