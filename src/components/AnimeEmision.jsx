import React from 'react'
import {CardEmision} from "./style/AnimeEmisionCss"
const AnimeEmision = ({img,titulo,capitulo}) => {
  return (
    <CardEmision>
    <img className='img-bg' src={img} alt="Anime-blur" />
    <div className='container-img'><img src={img} alt="Anime" /></div>
    <div className='titulo-anime'>
    <h1>{titulo}</h1>
    <p>capitulos {capitulo}</p>
    </div>
   </CardEmision>
  )
}

export default AnimeEmision
