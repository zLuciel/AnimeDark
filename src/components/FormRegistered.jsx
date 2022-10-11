
import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { existsUsername, updateUser } from '../Firebase/Firebase';
import AuthProvider from './authProvider';

const FormRegistered = () => {
    const [state,setState] = useState(0);
    const [currentUser,setCurrentUser] = useState({});
    const [username,setUserName] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate();
    
    const handleInputUserName = (e)=>{
        setUserName(e.target.value);
    }
    const handleInputUserPass = (e)=>{
        setPassword(e.target.value);
    }
    const handleContinue = async () =>{
        if(username !== ""){
            const exists = await existsUsername(username);
            if(exists){
                setState(5)
            }else{
                const tmp = {...currentUser};
                tmp.username = username
                tmp.password = password
                tmp.processCompleted = true;
                await updateUser(tmp);
                setState(6)
            }
        }
    }
    function handleUserLoggedIn(user){
        navigate("/")
     }
     function handleUserNotRegistered(user){
        setCurrentUser(user)
        setState(3)
     }
     function handleUserNotLoggedIn(user){
       navigate("/login")
     }
     console.log(password);
     if(state === 6){
        return (
            <>
            <div><p>Disfra del anime</p></div>
            </>
        )
     }
     if(state === 3 || state === 5){
        return (
            <>
            <div>Bienvenido {currentUser.displayName} </div>
            <p>para terminar el proceso elige un nombre de usuario y contraseña</p>
            <div>
                <input type="text" placeholder='Nombre usuario' onChange={handleInputUserName}/>
            </div>
            <div>
                <input type="password" placeholder='Contraseña' onChange={handleInputUserPass}/>
            </div>
            <button onClick={handleContinue}>continuar</button>
            {state === 5 ? <p>el nombre ya existe</p> : " "}
            </>
        )
     }
  return (
 <AuthProvider onUserLoggedIn={handleUserLoggedIn} onUserNotRegistered={handleUserNotRegistered} onUserNotLoggedIn={handleUserNotLoggedIn} >  
 </AuthProvider>
  )
}

export default FormRegistered
