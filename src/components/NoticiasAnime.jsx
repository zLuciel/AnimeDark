//import {useState} from 'react'
import { NoticiasAnimeApi, NoticiasImg, NoticiInfo } from './style/NoticiasAnimeCss';

const NoticiasAnime = ({img,fecha,titulo}) => {


  return (
    <NoticiasAnimeApi>
           <NoticiasImg>
           <img src={img} alt={titulo} />
           </NoticiasImg>
           <NoticiInfo>
           <p>{titulo}</p>
           <p>{fecha}</p>
           </NoticiInfo>  
     </NoticiasAnimeApi>  
  )
}

export default NoticiasAnime
