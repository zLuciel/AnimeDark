
import { Anime4x4Conteiner } from './style/Anime4x4Style'
import AnimeEmision from './AnimeEmision'
import { NavLink } from 'react-router-dom'
import { getEmision } from '../Firebase/Firebase'
import {useQuery} from "react-query"

const Anime4x4 = () => {
  const {data: Emision,error, isLoading}  = useQuery(["AnimeEmision"],  getEmision,{
    //staleTime:Infinity,
    //refetchOnReconnect:false,
  })

  if(isLoading){
    return <h1>Loading</h1>
  }
  if(error){
    return <h1>Error</h1>
  }
  return (
    <Anime4x4Conteiner>
      {Emision.map( (Anime)=> <NavLink style={{color:"white"}} key={Anime.id} to={`search/${Anime.id}`}> <AnimeEmision img={Anime.imagen} sipnosis={Anime.sipnosis} titulo={Anime.anime} estado={Anime.estado}  /></NavLink> )}
   </Anime4x4Conteiner>
  )
}

export default Anime4x4
