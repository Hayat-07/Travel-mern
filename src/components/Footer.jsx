import "./Footer.scss";
import v2 from "../assets/v2.mp4";

function Footer() {
  return (
    <section>
      <div className="footerVideo">
        <video
          src={v2}
          type="video/mp4"
          autoPlay
          muted
          loop
        ></video>

     
      </div>
    </section>
  );
}

export default Footer;
