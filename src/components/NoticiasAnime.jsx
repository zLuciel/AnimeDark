//import {useState} from 'react'
import { NoticiasAnimeApi, NoticiasImg, NoticiInfo } from './style/NoticiasAnimeCss';

const NoticiasAnime = ({img,fecha,titulo}) => {
const d = new Date(fecha);
const fechaFormt = d.toLocaleString()


  return (
    <NoticiasAnimeApi>
           <NoticiasImg>
           <img src={img} alt={titulo} />
           </NoticiasImg>
           <NoticiInfo>
           <p>{titulo}</p>
           <p>{fechaFormt}</p>
           </NoticiInfo>  
     </NoticiasAnimeApi>  
  )
}

export default NoticiasAnime
