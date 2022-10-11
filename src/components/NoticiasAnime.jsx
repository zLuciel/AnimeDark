//import {useState} from 'react'
import { NoticiasAnimeApi, NoticiasImg, NoticiInfo } from './style/NoticiasAnimeCss';

const NoticiasAnime = ({img,fecha,titulo}) => {
   // const [NoticiAnime,setNoticiAnime] = useState([])

    /*useEffect(()=>{

        fetch("https://somoskudasai.com/wp-json/wp/v2/posts?_embed")
          .then(res => res.ok ? res.json(): Promise.reject(res))
          .then(json => {
          
            setNoticiAnime(json)
          });
        
    },[])*/

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
