import React from "react";
import "../Footer/Footer.css";
import logo from "../../assets/Plogo.png";
import car from "../../assets/car.png";
import bike from "../../assets/bike.png";
import linkedin from "../../assets/linkedin.png";
import linkedinColored from "../../assets/linkedinColored.png";
import github from "../../assets/github.png";
import githubColored from "../../assets/githubColored.png";
import portfolio from "../../assets/portfolio.png";
import portfolioColored from "../../assets/portfolioColored.png";

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="max-width">
        <p className="Romain">Romain</p>
        {/* <img src={logo} width={300} height={50} alt="Logo de Pictarine" /> */}
        <div className="block-infos">
          <p>15 rue des Ormeaux</p>
          <p>31450 Belberaud</p>
          <div className="car-time">
            <p>11 min -</p>
            <img src={car} alt="" />
          </div>
          <div className="bike-time">
            <p>25 min -</p>
            <img src={bike} alt="" />
          </div>
          <div className="social-media">
            <div>
              <a href="https://www.linkedin.com/in/romainrg31">
                <img src={linkedin} width={50} height={50} alt="LinkedIn" />
                <img
                  src={linkedinColored}
                  className="linkedin-hover"
                  width={50}
                  height={50}
                  alt="LinkedIn"
                />
              </a>
            </div>
            <div>
              <a href="https://github.com/RomainRG31">
                <img src={github} width={50} height={50} alt="GitHub" />
                <img
                  src={githubColored}
                  className="github-hover"
                  width={50}
                  height={50}
                  alt="GitHub"
                />
              </a>
            </div>
            <div>
              <a href="http://romainroger.vercel.app">
                <img src={portfolio} width={50} height={50} alt="Portfolio" />
                <img
                  src={portfolioColored}
                  className="portfolio-hover"
                  width={50}
                  height={50}
                  alt="Portfolio"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
