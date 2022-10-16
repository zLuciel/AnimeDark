import React from "react";
import { CapitulOne, DynamicAnimeOne } from "./style/AnimeOneDynamiCss";
import {
  AiTwotoneStar,
  AiFillPlayCircle,
  AiOutlineHeart,
  AiFillHeart,
} from "react-icons/ai";
import { NavLink} from "react-router-dom";
const AnimeOneDynamic = ({
  name,
  estado,
  sipnosis,
  genero,
  temporada,
  imgvideo,
  handleFavoritos,
  DeleteFavorite,
  agregado,
}) => {

  return (
    <DynamicAnimeOne>
      <div className="flex-container-info-one">
        <div className="contenido-principal-one">
          <div className="title-one">
            <h1>{name} {!agregado ? <AiOutlineHeart className="favorite-one" onClick={handleFavoritos}/> :  <AiFillHeart className="favorite-one" onClick={DeleteFavorite}/> }</h1>
          </div>
          <div className="temporada-one">
            <p>{temporada}</p>
            <AiTwotoneStar className="star-one" />
            <AiTwotoneStar className="star-one" />
            <AiTwotoneStar className="star-one" />
            <AiTwotoneStar className="star-one" />
            <AiTwotoneStar className="star-one" />
          </div>
          <p className="sipnosis-one">{sipnosis}</p>
          <div className="genero-one">
            <h3>Genero:</h3>
            {genero.map((el) => (
              <p>{el}</p>
            ))}
          </div>
          <h3 className="estado-one">
            Estado:<p>{estado}</p>
          </h3>
          <button>
            <p>Play</p>
            <AiFillPlayCircle className="play-one" />
          </button>
        </div>
      </div>

      <CapitulOne>
        <h1>Lista de episodios</h1>
        
        <div className="capitulos-flex-container">
          {imgvideo.map((el,index) => (
          <NavLink to={`capitulo-${index + 1}`} >
            <div key={index} className="container-img-cap-one">
              <img loading="lazy" src={el} alt={`capitulo${index + 1}`} />
              <div className="capitulo-img-vid">
                <p>Capitulo {index + 1} </p>
              </div>
            </div>
            </NavLink>
          ))}
        </div>
        
      </CapitulOne>
    </DynamicAnimeOne>
  );
};

export default AnimeOneDynamic;
