import React from 'react'
import {CardEmision} from "./style/AnimeEmisionCss"
const AnimeEmision = ({img,titulo,estado,sipnosis}) => {
  return (
    <CardEmision>
    <img className='img-bg' src={img} alt="Anime-blur" />
    <div className='container-img'><img src={img} alt={titulo} /></div>
    <div className='titulo-anime'>
    <h1>{titulo}</h1>
    <p>{estado}</p>
    </div>
    <div className='card-absolute'>
      <p>{sipnosis}</p>
    </div>
   </CardEmision>
  )
}

export default AnimeEmision
