import {useState} from 'react'
import { LoginAnime, LoginContainerFlex } from './style/LoginStyle'
import AnimeRigth from "../assets/AnimeRigth.png"
import AnimeLeft from "../assets/AnimeLeft.png"
import { FcGoogle} from 'react-icons/fc';

import { auth } from '../Firebase/Firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import AuthProvider from './authProvider';


const Login = () => {
    const navigate = useNavigate();
    //** State */
    //** 0: inicializado */
    //** 1: loading */
    //** 2: loading completo*/
    //** 3: loading pero sin registro */
    //** 4: nadie logueado */
    //** 5: Ya existe el nombre de usuario */
    //** 6: nuevo username, click para continuar */
    const [currentstate,setCurrentState] = useState(0);


 //** FUNCIONAN QUE EJECUTA UNA VENTANA EMERGENTE PARA LOGUEARSE CON GOOGLE*/  
 const handleRegistGoogle = async ()=>{
    const googleProvider = new GoogleAuthProvider();
    await singInwithGoogle(googleProvider)

    async function singInwithGoogle (googleProvider) {
        try {
            const res = await signInWithPopup(auth,googleProvider)
            console.log(res);
        } catch (error) {
            console.error(error);
        }
    }
 }
 function handleUserLoggedIn(user){
    navigate("/")
 }
 function handleUserNotRegistered(user){
    navigate("/registrando-usuario")
 }
 function handleUserNotLoggedIn(user){
    setCurrentState(4)
 }
 if (currentstate === 4) {
    return (
        <LoginContainerFlex>
        <LoginAnime>
            <img src={AnimeRigth} alt="AnimeLogin" className='login-img-rigth'/>
            <img src={AnimeLeft} alt="AnimeLogin" className='login-img-left'/>
           <h1>Bienvenido a <b>AnimeDark</b></h1>
           <div className='login-usuario'>
            <input type="text" placeholder='Nombre de usuario'/>
           </div>
           <div className='login-password'>
            <input type="password" placeholder='Ingrese contraseña'/>
           </div>
           <button className='btn-ingresar'>Ingresar</button>
           <p className='login-con'>Registrate con</p>
           <FcGoogle className="Login-google" onClick={handleRegistGoogle}/>
        </LoginAnime>
    </LoginContainerFlex> 
    )
 }
  return (
    <AuthProvider onUserLoggedIn={handleUserLoggedIn} onUserNotRegistered={handleUserNotRegistered} onUserNotLoggedIn={handleUserNotLoggedIn} >
       <div>loagin</div>
    </AuthProvider>
    
  )
}

export default Login
