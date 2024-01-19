import "./email.css";
import Email from "../images/backend_text_1.jpg";
import Email1 from "../images/app.jpg";
import Email2 from "../images/devops.jpg";
import Enxsys from "../images/enxsys.png";
import Company from "../images/19737.jpg";
import fb from "../images/facebook.svg";
import insta from "../images/instagram.svg";
import yt from "../images/youtube.svg";
import linkedin from "../images/linkedin.svg";
import twit from "../images/twitter.svg";

import Image from "next/image";

export default function EmailTemplete() {
  return (
    <>
      <div className="wrapper">
        <div className="top-header">Enxsys</div>
        <div className="hero-section">
          <Image src={Enxsys} alt="no image found"></Image>
        </div>
        <div className="three-column">
          <div className="card">
            <Image src={Email} alt="no image found"></Image>
            <h2>Web Dev</h2>
            <p>
              We are proficient professionals who do their best to build
              outstanding web applications with cutting-edge technologies and
              battle-tested tools.
            </p>
            <button className="btn">Learn more</button>
          </div>
          <div className="card">
            <Image src={Email1} alt="no image found"></Image>
            <h2>Mobile App Dev</h2>
            <p>
              With our deep understanding of everything mobile-related, we
              create beautiful and easy-to-use mobile applications that offer
              flawless functionality.
            </p>
            <button className="btn">Learn more</button>
          </div>
          <div className="card">
            <Image src={Email2} alt="no image found"></Image>

            <h2>DevOps</h2>
            <p>
              We specialize in setting up server environments through a trusted
              providers like AWS, Microsoft Azure, and Google Cloud and we
              configure.
            </p>
            <button className="btn">Learn more</button>
          </div>
        </div>
        <hr className="orange-line"></hr>
        <div className="two-column">
          <div className="card">
            <Image src={Company} alt="no image found"></Image>
          </div>
          <div className="card">
            <h2> Custom-made elegant and stylish apps</h2>
            <p>
              Your app is the face of your business, and it has to look and feel
              great. When you use Enxsys, we take your ideas, images and
            </p>
            <button className="btn">Learn more</button>
          </div>
        </div>
        <hr className="orange-line"></hr>
        <div className="footer">
          <div className="social">
            <Image src={fb} alt="no"></Image>
            <Image src={yt} alt="no"></Image>
            <Image src={insta} alt="no"></Image>
            <Image src={linkedin} alt="no"></Image>
            <Image src={twit} alt="no"></Image>
          </div>
          <h3> info@enxsys.com </h3>
          <h3>enxsys.com</h3>
        </div>
      </div>
    </>
  );
}
