import {useEffect} from 'react'
import { auth, getUserInfo, registerNewUser, userExists } from '../Firebase/Firebase';
import {  onAuthStateChanged } from 'firebase/auth';
//import { useNavigate } from 'react-router-dom';
const AuthProvider = ({children,onUserLoggedIn,onUserNotLoggedIn,onUserNotRegistered}) => {
   // const navigate = useNavigate();

    useEffect(()=>{
        onAuthStateChanged(auth,handleUserStateChanged);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

 //** funcion para saber si el usuario esta logueado */   
 const handleUserStateChanged = async (user)=>{
    if (user) {
        const isRegistered = await userExists(user.uid) 
        if (isRegistered) {
            const userInfo = await getUserInfo(user.uid)
            if(userInfo.processCompleted){
                  //** si el usuario esta registrado ira ala pagina principal home */
            onUserLoggedIn(userInfo);
            }else{
                onUserNotRegistered(userInfo)
            }
          
        }else{
            await registerNewUser({
                uid: user.uid,
                displayName: user.displayName,
                profilePicture:"",
                username:"",
                processCompleted:false,
                password:"",
            })
             //** si el usuario no esta registrado ira ala pagina de registrar nombre-foto-contraseña */
             onUserNotRegistered(user);
        }
        console.log(user.displayName);
        
    }else{
        onUserNotLoggedIn();
        console.log("no hay nadie");
    }
 }
    return (
    <>
    {children}
    </>
  )
}

export default AuthProvider
