import React from "react";
import "../Header/Header.css";
import Logo from "../../assets/PLogo.png";
import me from "../../assets/profilePicture.jpg";
import code from "../../assets/code.jpeg";
const Header = () => {
  return (
    <header className="max-width">
      <img
        src={Logo}
        className="logo"
        width={300}
        height={50}
        alt="Logo de Pictarine"
      />
      <div className="first-block-header">
        <div className="left-block">
          <h1>
            Alternant<br></br>
            <span className="creatifs-title">créatif</span>
          </h1>
          <p>
            Motivé et créatif, je suis prêt à apporter ma passion et mon élan
            pour contribuer significativement à l'innovation et au succès de
            votre entreprise.
          </p>
        </div>
        <div className="header-pictures">
          <img src={me} className="me" width={500} height={650} alt="" />
          <img src={code} className="code" width={850} height={600} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
