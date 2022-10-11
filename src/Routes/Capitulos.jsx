import {useEffect,useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { CapitulosContainer, VideoContainer } from '../components/style/CapituloCss'
import Search from '../components/Search'
import { getAnimeId } from '../Firebase/Firebase'
const Capitulos = () => {
    const params = useParams()
    const navigate = useNavigate()
    const [VideosAnime,setVideosAnimes] = useState([])

   useEffect(()=>{
    const getVideosAnime = async ()=>{
      const video = await getAnimeId(params.id)
      video.forEach(el => setVideosAnimes(el.linkvideo))
    } 
    getVideosAnime()

   },[params.id])
 
  const capitulo = parseInt( params.capitulo.split("-")[1]) - 1
  console.log(capitulo);
  return (
    <CapitulosContainer>
      <Search/>

      <VideoContainer>
        <iframe src={VideosAnime[capitulo]} title={"nose"} frameBorder="0" allowFullScreen></iframe>
      </VideoContainer>
      <h1>{params.capitulo}</h1>
    </CapitulosContainer>
  )
}

export default Capitulos
