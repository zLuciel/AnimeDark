//import {useEffect,useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { CapitulosContainer, NoticiasGrid, SearchGrid, VideoContainer, VideoGrid } from '../components/style/CapituloCss'
import Search from '../components/Search'
import { getAnimeId } from '../Firebase/Firebase'

import {getNoticias} from "../api/NoticiaAnimeApi?^v4"
import {useQuery} from "react-query"
import NoticiasAnime from '../components/NoticiasAnime?^t=v32'
const Capitulos = () => {
    const params = useParams()
    const navigate = useNavigate()
      
const {data: NoticiAnimes,error, isLoading}  = useQuery(["AnimeNoticia"],  getNoticias)
const {data: VideosAnime,error:error1, isLoading:isLoading1}  = useQuery(["VideoAnime",params.id], ()=> getAnimeId(params.id))

const backCap = parseInt( params.capitulo.split("-")[1]) - 1
const skipCap = parseInt( params.capitulo.split("-")[1]) + 1

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
        <p>{VideosAnime[0].sipnosis} </p>
        <h2>{`capitulo ${skipCap - 1}`}</h2>
        <VideoContainer>  
       { <iframe src={VideosAnime[0].linkvideo[backCap]} title={VideosAnime[0].animecomplete} frameBorder="0" allowFullScreen></iframe>}
       <button onClick={handleBack}>Back</button>
       <button onClick={handleSkip}>Skip</button>
      </VideoContainer>
      </VideoGrid>
      <NoticiasGrid>
        <div className='bgxd'>
         {NoticiAnimes.map((el,index) => <NoticiasAnime key={index} img={el.yoast_head_json["og_image"][0].url} fecha = {el.date} titulo = {el.title.rendered} /> )}
      </div>
      </NoticiasGrid>
      
    </CapitulosContainer>
  )
}

export default Capitulos
