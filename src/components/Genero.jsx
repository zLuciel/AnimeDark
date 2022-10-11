import { useState } from "react";
import { IoMdArrowDropdown} from 'react-icons/io';
import { GeneroContainer} from "./style/GeneroStyle";
const Genero = () => {
    const [mostrar, setMostrar] = useState(false);
    const opciones = () => {
        if (mostrar === false) {
          setMostrar(true);
        } else {
          setMostrar(false);
        }
    };
    

  return (
    <GeneroContainer onClick={()=>opciones()} mostrar={mostrar}>
        <div className="tituloGenero" >
          <p>Genero:</p>
          <IoMdArrowDropdown className="arrow-icon"/>
        </div>
        
        <div className="listado-genero">
          <ul>
            <li>Accion</li>
            <li>Romance</li>
            <li>Gore</li>
            <li>Echhi</li>
            <li>Yaoi</li>
          </ul>
        </div>
      </GeneroContainer>
  )
}

export default Genero
