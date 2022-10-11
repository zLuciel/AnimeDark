
import Categorias from '../components/Categorias'
import NoticiasAnime from '../components/NoticiasAnime?^t=v32'
import { VerAnimeContainer } from '../components/style/VerAnimeCss'
import  Search  from "../components/Search"
import {getNoticias} from "../api/NoticiaAnimeApi?^v3"
import {useQuery} from "react-query"
//import {QueryClient } from '@tanstack/react-query'

export const VerAnimes = () => {
 
 
const {data: NoticiAnimes,error, isLoading}  = useQuery(["AnimeNoticia"],  getNoticias,{
 // refetchInterval: 2000,
 //onSuccess: () => { QueryClient.invalidateQueries(["AnimeNoticia"])},
  cacheTime: 3000
})
//{NoticiAnimes.map((el,index) => <NoticiasAnime key={index} img={el.yoast_head_json["og_image"][0].url} fecha = {el.date} titulo = {el.title.rendered} /> )}
if(isLoading){
return <div>Loading</div>
}
if (error) {
  return <h1>{error}</h1>
}
  return (
    <VerAnimeContainer>
        <Search/>
        <Categorias/>
        <div className='bgxd'>
        {NoticiAnimes.map((el,index) => <NoticiasAnime key={index} img={el.yoast_head_json["og_image"][0].url} fecha = {el.date} titulo = {el.title.rendered} /> )}
        </div>
    </VerAnimeContainer>
  )
}
