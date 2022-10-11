import React from 'react'
import { Error404Container, ImgErrorContainer, InfoErrorContainer } from '../components/style/Error404Css'
import ErrorImg from "../assets/ERROR404.png"
import { useNavigate } from 'react-router-dom'
export const Error404 = () => {
    const Navigate = useNavigate()
    const handleHome = ()=>{
       Navigate("/")
    }

  return (
    <Error404Container>
        <div className='circle top'>
        </div>
        <div className='circle abajo'>
        </div>
        <div className='circle derecha'>
        </div>
        <InfoErrorContainer>
            <div className='txt-error'>
            <h1>Oooops...</h1>
            <p>Pagina no econtrada <br /> Esta paagina o enlace <br /> no existe</p>
            <button onClick={handleHome}>Regresar al inicio</button>
            </div>
            
        </InfoErrorContainer>
        <ImgErrorContainer>
            <img src={ErrorImg} alt="Error404" />
        </ImgErrorContainer>
    </Error404Container>
  )
}
