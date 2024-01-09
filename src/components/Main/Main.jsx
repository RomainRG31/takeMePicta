import React from "react";
import "../Main/Main.css";
import IA from "../../assets/manMoutain.png";
import Card from "../Card/Card";
import card from "../../utils/card.json";
import hands from "../../assets/hands.png";

const Main = () => {
  const phoneNumber = "0699320178";
  const videoId = "kDJQMrGJRp8";
  const src = `https://www.youtube.com/embed/${videoId}`;

  return (
    <>
      <div className="max-width">
        <div className="container-videoBlock">
          <div className="left-block-video">
            <h2>Une opportunité se profile à l’horizon</h2>
            <iframe
              width="70%"
              height="500"
              src={src}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <p>
              Rejoindre l'équipe de développeurs chez Pictarine représente pour
              moi une opportunité passionnante de contribuer à l'innovation
              technologique. Votre approche créative et votre engagement envers
              l'excellence m'inspirent profondément. Je suis enthousiaste à
              l'idée de collaborer avec vous, d'apporter mes compétences et
              d'apprendre au sein de votre équipe dynamique.
            </p>
          </div>
          <div className="right-block-pictureIA">
            <img
              src={IA}
              className="ia"
              width={"100%"}
              height={"50%"}
              alt="Image générée par une IA représentant un homme de dos en position de tailleur regardant les montagnes au soleil couchant"
            />
          </div>
        </div>
        <div className="why-trust">
          <h2>
            <span>
              <img className="hands" src={hands} alt="" />
            </span>
            Pourquoi me faire confiance ?
          </h2>
          <p>
            Ma loyauté inébranlable, mes compétences éprouvées et mon engagement
            passionné garantissent que vous pouvez me faire confiance pour
            exceller et contribuer significativement à vos objectifs et
            réussites.
          </p>
        </div>
      </div>
      <div className="bg-black">
        <div className="max-width">
          <h1>
            La richesse de Romain<br></br>
            <span className="creatifs-title-degraded">en résumé</span>
          </h1>
          <div className="container-blockImg">
            <div className="left-blockImg">
              {card.slice(0, 2).map((data, id) => {
                return (
                  <Card
                    key={id}
                    img={data.img}
                    title={data.title}
                    text={data.text}
                  />
                );
              })}
            </div>
            <div className="right-blockImg">
              <Card
                key={2}
                sentence={card[2].sentence}
                img={card[2].img}
                title={card[2].title}
                text={card[2].text}
              />
            </div>
          </div>
          <div className="h3">
            <h3>
              <p>Ça donne envie ?</p>
              <span className="h3-title">Entretenons-nous !</span>
              <br></br>
              <button
                onClick={() => (window.location.href = `tel:${phoneNumber}`)}
              >
                J'offre ma chance
              </button>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
