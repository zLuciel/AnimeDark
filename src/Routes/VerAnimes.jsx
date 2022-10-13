
import Categorias from '../components/Categorias'
import NoticiasAnime from '../components/NoticiasAnime?^t=v32'
import { VerAnimeContainer } from '../components/style/VerAnimeCss'
import  Search  from "../components/Search"
import {getNoticias1} from "../api/NoticiaAnimeApi?^v3"
import {useQuery} from "react-query"
//import {QueryClient } from '@tanstack/react-query'

export const VerAnimes = () => {
 
  const {data: NoticiAnimes,error, isLoading}  = useQuery(["AnimeNoticia2"],  getNoticias1)

//{NoticiAnimes.map((el,index) => <NoticiasAnime key={index} img={el.yoast_head_json["og_image"][0].url} fecha = {el.date} titulo = {el.title.rendered} /> )}
//img={el.yoast_head_json["og_image"][0].url}
if(isLoading){
  return <div>Loading</div>
}
  return (
    <VerAnimeContainer>
        <Search/>
        <Categorias/>
        {NoticiAnimes.map((el,index) => <NoticiasAnime key={index} img={el._embedded["wp:featuredmedia"][0].source_url} fecha = {el.date} titulo = {el.title.rendered} /> )}
    </VerAnimeContainer>
  )
}
