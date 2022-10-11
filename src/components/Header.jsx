import {useRef,useEffect,useState} from "react";
import Logotipo from "../assets/Logo/logoanime.png"
import {
  Configuraciones,
  Headers,
  Logo,
  Nav,
} from "./style/HeaderStyle";
import { AiFillHome,AiFillSetting } from 'react-icons/ai';
import { MdOndemandVideo,MdFavorite } from 'react-icons/md';
import { FaBook} from 'react-icons/fa';
import { HiUserGroup} from 'react-icons/hi';
import {BiUserX} from 'react-icons/bi';
import { NavLink, Outlet , useLocation} from "react-router-dom";
import {auth} from "../Firebase/Firebase"

import AuthProvider from './authProvider';

const Header = () => {
  const refListNav = useRef(null)
  const Location = useLocation()
 // const [url,setUrl] = useState("")

  useEffect(()=>{
    const ListNavCurrent = refListNav.current;
    const ClickNav = ()=>{
      for (let i = 0; i < ListNavCurrent.children.length; i++) {
        ListNavCurrent.children[i].onclick = function(){
          let j = 0;
          while(j < ListNavCurrent.children.length){
              ListNavCurrent.children[j++].className=""
          }
          if(i !== 4 & i !== 9){
            ListNavCurrent.children[i].className="active"     
          }
            
      }
    }
  }
  ClickNav()
console.log(Location);
  
  
  },[])
console.log(Location,45);
 const handleSignOut = ()=>{
  auth.signOut()
  alert("sesion cerrada")
 }

 function handleUserLoggedIn(user){
 /* setLogin(12)
  alert("usuario registrado")
 // Login ?  : auth.signOut()
 if(Login === 11){
  auth.signOut()
  setLogin(false)
 }*/
}
function handleUserNotRegistered(user){
 
  //setCurrentUser(user)
  //setState(3)
}
function handleUserNotLoggedIn(user){
  
}

  return (
    <>
    <AuthProvider onUserLoggedIn={handleUserLoggedIn} onUserNotRegistered={handleUserNotRegistered} onUserNotLoggedIn={handleUserNotLoggedIn} >  
    <Headers>
      <div className="flex-header">
      <Logo>
        <img src={"https://firebasestorage.googleapis.com/v0/b/anime-8cd0d.appspot.com/o/AnimeDark%2F5-1.jpg?alt=media&token=3a714d65-4abb-4939-b2e3-3d5a04fd3f3e"} alt="logo" />
      </Logo>
      <Nav>
        <ul ref={refListNav} >
          <li className="active">
            {/*<b></b>
            <b></b>*/}
            <NavLink className="link-header" to="/">
              <span className="icon"><AiFillHome/></span>
              <span className="title-nav">Home</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="search" className="link-header">
              <span className="icon"><MdOndemandVideo/></span>
              <span className="title-nav">Ver Animes</span>
            </NavLink>
          </li>
          <li>
            <NavLink  to="favoritos" className="link-header" >
              <span className="icon"><MdFavorite/></span>
              <span className="title-nav">Favoritos</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="link-header" >
              <span className="icon"><FaBook/></span>
              <span className="title-nav">Comentarios</span>
            </NavLink>
          </li>
          <h1><HiUserGroup/><b>Suscripcion</b></h1>
          <li>
            <NavLink className="link-header" >
            <span className="img-sucri">
                <img src="https://firebasestorage.googleapis.com/v0/b/anime-8cd0d.appspot.com/o/AnimeDark%2F5-1.jpg?alt=media&token=3a714d65-4abb-4939-b2e3-3d5a04fd3f3e" alt="sd" />
            </span>
              <span className="title-nav">Wonkings</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="link-header" >
            <span className="img-sucri">
                <img src="https://firebasestorage.googleapis.com/v0/b/anime-8cd0d.appspot.com/o/AnimeDark%2F5-1.jpg?alt=media&token=3a714d65-4abb-4939-b2e3-3d5a04fd3f3e" alt="dsad" />
            </span>
              <span className="title-nav">Animeflv</span>
            </NavLink>
          </li>
          <li>
            
            <NavLink className="link-header" href="#3">
            <span className="img-sucri">
                <img src="https://firebasestorage.googleapis.com/v0/b/anime-8cd0d.appspot.com/o/AnimeDark%2F5-1.jpg?alt=media&token=3a714d65-4abb-4939-b2e3-3d5a04fd3f3e" alt="dasdas" />
            </span>
              <span className="title-nav">Bosstrap</span>
            </NavLink>
          </li>
          <li>
            
            <NavLink className="link-header" href="#3">
              <span className="img-sucri">
                <img src="https://firebasestorage.googleapis.com/v0/b/anime-8cd0d.appspot.com/o/AnimeDark%2F5-1.jpg?alt=media&token=3a714d65-4abb-4939-b2e3-3d5a04fd3f3e" alt="asdad" />
            </span>
              <span className="title-nav">Destiny</span>
            </NavLink>
          </li>
          <p className="ver-mas-nav">Ver Todos</p>
        </ul>
      </Nav>
      <Configuraciones>
        <div className="configuracion"  >
          <NavLink className="link-confi" to="configuracion-usuario">
          <AiFillSetting className="icon-confi-nav"/>
          <p>Configuracion</p>
          </NavLink>
        </div>
        <div className="Login-Nav" onClick={handleSignOut}>
        <BiUserX className="lapto"/>
        <button><BiUserX className="login-icon-nav"/><p>Login</p></button>
        </div>
      </Configuraciones>
      </div>
    </Headers>
    <Outlet/>
  </AuthProvider>
    </>
  );
};

export default Header;
