import React from 'react'
import { FotoPerfilContainer } from './style/SesionIcon'
import { MdNotifications } from 'react-icons/md';
const SesionIcon = () => {
  return (
    <FotoPerfilContainer>
      <MdNotifications className='notify'/>
      <div className='flex-bg-transp'>
        <div className='container-img-perfil'>
          <img src="https://firebasestorage.googleapis.com/v0/b/anime-8cd0d.appspot.com/o/AnimeDark%2F5-1.jpg?alt=media&token=3a714d65-4abb-4939-b2e3-3d5a04fd3f3e" alt="perfil" />
        </div>
      </div>
    </FotoPerfilContainer>
  )
}

export default SesionIcon
