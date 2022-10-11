import {useEffect,useState} from 'react'
import { Buscador } from './style/SearchStyle'
import { BiSearch } from 'react-icons/bi';
import SesionIcon from "./SesionIcon"
import SearchCards from './SearchCards';
import {getSearchAnime } from '../Firebase/Firebase';
import { NavLink,useSearchParams } from 'react-router-dom';
const Search = () => {
  const [buscar,setBuscar] = useState("")
  const [animejson,setAnimejson] = useState([])



  useEffect(()=>{
     const CajaAnime = document.querySelector(".Search-Anime-visual");

     const mostrar = async ()=>{
     const obtener = await getSearchAnime()
     const filter = obtener.filter(x => x.animecomplete.toLowerCase().includes(buscar));
     buscar.length > 2 ?  setAnimejson(filter) : setAnimejson([]);
     //animejson.length > 5 ? setSixAnime(animejson.slice(0,5)) : setSixAnime(animejson);
   }
   mostrar()


     document.addEventListener("click",(e)=>{
      if( !e.target.matches("#BuscarAnime *") ){
        CajaAnime.classList.add("hide")
      }else if ( buscar.length === 0){
        CajaAnime.classList.remove("hide")
      }
     })


     // eslint-disable-next-line react-hooks/exhaustive-deps
  },[buscar])

  return (

      <Buscador>
        <div id="BuscarAnime" className='Container-mostrar-buscador'>
        <form action="">
            <div className='icon-search'><BiSearch/></div>
            <input onChange={e => setBuscar(e.target.value.toLowerCase()) }  type="search" autoComplete='off' placeholder='Anime,Accion' />
            
        </form>
        <div id="animx" className="Search-Anime-visual hide">
          <div >
            {buscar.length > 2 & animejson.length !== 0? animejson.slice(0,5).map(Anime=> <NavLink className="link-search" to={`/search/${Anime.id}`}><SearchCards key={Anime.id}  Name={Anime.animecomplete} Img={Anime.imagen}/></NavLink> ) : <p>No se encontro anime</p>}
          </div>
          {animejson.length > 5 & buscar.length > 2 ?  <button className='ver-mas-search'>Ver Más</button> : ""}
        </div>
        </div>
        <SesionIcon/>
    </Buscador>
  )
}

export default Search
