//import {useEffect,useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { CapitulosContainer, NoticiasGrid, SearchGrid, VideoContainer, VideoGrid } from '../components/style/CapituloCss'
import Search from '../components/Search'
import { getAnimeId } from '../Firebase/Firebase'
import {
  AiTwotoneStar
} from "react-icons/ai";
import {getNoticias1} from "../api/NoticiaAnimeApi?^v4"
import {useQuery} from "react-query"
import NoticiasAnime from '../components/NoticiasAnime?^t=v32'

import { DiscussionEmbed } from 'disqus-react'
const Capitulos = () => {
    const params = useParams()
    const navigate = useNavigate()
      
const {data: NoticiAnimes,error, isLoading}  = useQuery(["AnimeNoticia"],  getNoticias1)
const {data: VideosAnime,error:error1, isLoading:isLoading1}  = useQuery(["VideoAnime",params.id], ()=> getAnimeId(params.id))

const backCap = parseInt( params.capitulo.split("-")[1]) - 1
const skipCap = parseInt( params.capitulo.split("-")[1]) + 1

//**Configuracion para los comentarios de Disqus */
const disqusShortname = "https-animedark-vercel-app"
const disqusCongif = {
  identifier:params.id + params.capitulo,
  title:"AnimeDark",
  url: "http://localhost:3000/search/"+params.id+"/"+params.capitulo,
  language: 'Es',
}

//**Funciones Botones de skip y back  (es mejor separan las funciones y tenerlos ordenados)*/
const handleBack = () =>{
    navigate(`/search/${params.id}/capitulo-${backCap}`)
}
const handleSkip = () =>{
  navigate(`/search/${params.id}/capitulo-${skipCap}`)
}

  console.error(error,error1);
  if(isLoading || isLoading1){
    return <div>Loading</div>
  }
      console.log("https://animedark.vercel.app/search/bOXEehlrjZJAZ9fk2AIr/"+params.capitulo);
  return (
    <CapitulosContainer>
      <div className='absolute-bg-fixed'>
        <img src={VideosAnime[0].bg} alt="" />
      </div>
      <SearchGrid>
        <Search/>
      </SearchGrid>
      <VideoGrid>

        <h1>{VideosAnime[0].animecomplete} </h1>
        <h2 className='temporada-cap'>{VideosAnime[0].temporada}
           <AiTwotoneStar className="star-one" />
            <AiTwotoneStar className="star-one" />
            <AiTwotoneStar className="star-one" />
            <AiTwotoneStar className="star-one" />
            <AiTwotoneStar className="star-one" /></h2>
       <p>{VideosAnime[0].sipnosis} </p>
        <h3>Estado:<b>{VideosAnime[0].estado}</b></h3>
        
      <VideoContainer>
      <div className='videocapitulo'>
      <h2>{`Capitulo ${skipCap - 1}`}</h2>  
       { <iframe src={VideosAnime[0].linkvideo[backCap]} title={VideosAnime[0].animecomplete} frameBorder="0" allowFullScreen></iframe>}
       <div className='btn-video'>
       <button onClick={handleBack}>Anterior</button>
       <button onClick={handleSkip}>Siguiente</button>
       </div>
      </div>
      </VideoContainer>

       <DiscussionEmbed shortname={disqusShortname} config={disqusCongif} />
      </VideoGrid>
      <NoticiasGrid>
        <div className='bgxd'>
         {NoticiAnimes.map((el,index) => <NoticiasAnime key={index} img={el._embedded["wp:featuredmedia"][0].source_url} fecha = {el.date} titulo = {el.title.rendered} /> )}
      </div>
      </NoticiasGrid>
      
    </CapitulosContainer>
  )
}

export default Capitulos
