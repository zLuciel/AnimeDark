import {useState} from 'react'
import AuthProvider from './authProvider';
import { NavLink, useNavigate } from 'react-router-dom';
import { getFavorite } from '../Firebase/Firebase';
import { FavoriteContainer, FavoriteOneCard } from './style/Favoritos';
import  Search  from "./Search";
import AnimeEmision from './AnimeEmision';
import {useQuery} from "react-query"

const Favoritos = () => {
    const [userid,setUser] = useState("")
   const navigate = useNavigate()
  const {data: Favorite,error, isLoading}  = useQuery(["AnimeFavorite",userid], ()=> getFavorite(userid));
   /*const traerFavorite = async (uid)=>{
    setFavorite(await getFavorite(uid))
   }*/
   console.log(Favorite,9);
     function  handleUserLoggedIn(user){
     setUser(user.uid)
      //setFavorite(await getFavorite(user.uid))
     }
     
     console.log(userid,458);
     function handleUserNotRegistered(user){
        navigate("/registrando-usuario")
     }
     function handleUserNotLoggedIn(user){
       navigate("/login")
     }

    if(isLoading){
      return <h1>Loading</h1>
    }
  return (
    <AuthProvider onUserLoggedIn={handleUserLoggedIn} onUserNotRegistered={handleUserNotRegistered} onUserNotLoggedIn={handleUserNotLoggedIn}> 
    <FavoriteContainer>
      <div style={{width:"80%"}}>
      <Search/>
      </div>
    <div className='flex-favorite'>
      {Favorite.map(el => <AnimeEmision img={el.imagen} titulo={el.anime} capitulo={el.capitulos} />)}
      {/*Favorite.map(el => 
    <NavLink className="link-favorite" to={`/search/${el.id}`} >
      <FavoriteOneCard>
        <div className='favorite-img'>
        <img src={el.imagen} alt={el.anime} />
        </div>
        <h2>{el.anime}</h2>
      </FavoriteOneCard>   
      </NavLink>
    )*/}
    </div>
    
    </FavoriteContainer>
  </AuthProvider>
  )
}

export default Favoritos
