import React from "react";
import { CardAnimeTop, CardTopContainer } from "./style/CardTopGlobalStyle";
import {BsStarFill} from 'react-icons/bs';
const CardTopGlobal = () => {
    const prueba2 = "https://firebasestorage.googleapis.com/v0/b/anime-8cd0d.appspot.com/o/AnimeDark%2Fanime1.jpg?alt=media&token=5def6c82-857e-4181-b6e7-d95c5aa51f46"
    const prueba1 = "https://firebasestorage.googleapis.com/v0/b/anime-8cd0d.appspot.com/o/AnimeDark%2Fanime3.jpg?alt=media&token=18645aa3-12ba-4768-8fcd-414c66552e6e"
  const prueba =
    "https://firebasestorage.googleapis.com/v0/b/anime-8cd0d.appspot.com/o/AnimeDark%2Fanime2.jpg?alt=media&token=c40b038d-3e24-4764-b348-df14a4de5fc7";
  return (
    <CardTopContainer>
      <CardAnimeTop>
        <div className="card-img-top">
          <img src={prueba1} alt="foto" />
        </div>
        <div className="card-info-top">
          <h3>Black Cover Season 4</h3>
          <h4>144 Videos</h4>
          <p>
            BlacK Cover inspiracion del mangas del autor Fukimi Yamoto BlacK
            Cover inspiracion del mangas del autor Fukimi{" "}
          </p>
          <div className="top-global-star"><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/></div>
        </div>
      </CardAnimeTop>
      <CardAnimeTop>
        <div className="card-img-top">
          <img src={prueba} alt="foto" />
        </div>
        <div className="card-info-top">
          <h3>Black Cover Season 4</h3>
          <h4>144 Videos</h4>
          <p>
            BlacK Cover inspiracion del mangas del autor Fukimi Yamoto BlacK
            Cover inspiracion del mangas del autor Fukimi{" "}
          </p>
          <div className="top-global-star"><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/></div>
        </div>
      </CardAnimeTop>
      <CardAnimeTop>
        <div className="card-img-top">
          <img src={prueba2} alt="foto" />
        </div>
        <div className="card-info-top">
          <h3>Black Cover Season 4</h3>
          <h4>144 Videos</h4>
          <p>
            BlacK Cover inspiracion del mangas del autor Fukimi Yamoto BlacK
            Cover inspiracion del mangas del autor Fukimi{" "}
          </p>
          <div className="top-global-star"><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/></div>
        </div>
      </CardAnimeTop>
    </CardTopContainer>
  );
};

export default CardTopGlobal;
