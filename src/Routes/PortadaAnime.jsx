import {useState} from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import AnimeOneDynamic from '../components/AnimeOneDynamic'
import Search from '../components/Search'
import { ContainerPortada } from '../components/style/PortadaAnimeCss'
import { Deletefavorite, existsAnimeFavorite, getAnimeId, insertNewFavorite } from '../Firebase/Firebase'

import AuthProvider from '../components/authProvider';
import {useQuery} from "react-query"

const PortadaAnime = () => {
   const navigate = useNavigate();
   const params = useParams()
   const {data: AnimeInfo,error, isLoading}  = useQuery(["AnimeNoticia",params.id],()=>  getAnimeId(params.id))
 
    const [state,setState] = useState(0);
    const [currentUser,setCurrentUser] = useState("");
    const [Agregado,setAgregado] = useState(false);
    



const handleFavoritos = async ()=>{
  
  const existFav = await existsAnimeFavorite(params.id)
  //console.log(existFav);
  if(existFav){
    alert("ya se agrego")
  }else{
    addLinkFavorite()
    alert("agrego correcto")
  }
  
}

async function  handleUserLoggedIn(user){
  setCurrentUser(user)
  setState(2)
  const existFav = await existsAnimeFavorite(params.id)
  if(existFav){
    setAgregado(true)
  }else{
    setAgregado(false)
  }
  
}
function handleUserNotRegistered(user){
  //navigate("/registrando-usuario")
  
}
function handleUserNotLoggedIn(user){
  //navigate("/login")
  setState(4)
}

const addLinkFavorite = ()=>{
  const LinkFavorite = {
    id: params.id,
    anime: AnimeInfo[0].anime,
    imagen: AnimeInfo[0].imagen,
    uid: currentUser.uid,
    capitulos: AnimeInfo[0].capitulos,
    agregado:true
  }
    insertNewFavorite(LinkFavorite);
}
const handleDeleteFavorite = async ()=>{
   await Deletefavorite(params.id)
   alert("borrado")
}
if(isLoading){
  return (
    <h1>Loading</h1>
  )
}
    return (
      <AuthProvider onUserLoggedIn={handleUserLoggedIn} onUserNotRegistered={handleUserNotRegistered} onUserNotLoggedIn={handleUserNotLoggedIn} >  
      <ContainerPortada >
        <div className='container-search'>
          <Search/>
        </div>
        <div className='bg-fixed'>
          <img src={AnimeInfo[0].bg} alt="xd" />
        </div>
          {AnimeInfo.map(el => <AnimeOneDynamic key={el.id} agregado={Agregado}   DeleteFavorite={handleDeleteFavorite} handleFavoritos={handleFavoritos} imgvideo={el.imgvideo} temporada={el.temporada} name={el.animecomplete} genero={el.genero} sipnosis={el.sipnosis} estado={el.estado} />)}
      </ContainerPortada>
      </AuthProvider>
    )
}

export default PortadaAnime
