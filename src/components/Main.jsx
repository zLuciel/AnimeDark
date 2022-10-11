//import {useState,useEffect} from "react";
import Anime4x4 from "./Anime4x4";
import Columna2Main from "./Columna2Main";
import Search from "./Search";
//import { getEmision } from '../Firebase/Firebase'
//import { LoadingAnime } from "./Loading"
import {
  Columna1,
  ContainerPrincipal,
  FlexSuperiorMain,
  MainContainer,
} from "./style/MainStyle";


const Main = () => {

  //const [Emision,setEmision] = useState([])
  //const [cargando,setLoding] = useState(true)
  

 /* useEffect(()=>{/** dara error mejor instalo en anime4x4 defrente */
      //const AnimeEmision = async ()=>{
     // const emision = await getEmision() //**en el map parasa el await y asyn */
     /* setEmision(emision)
      setLoding(false)
    }
    AnimeEmision()
  },[])*/
/*if(cargando){
  return <LoadingAnime/>
}*/
  return (
    <ContainerPrincipal>
      <MainContainer>
        <Columna1>
          <FlexSuperiorMain>
            <Search />
          </FlexSuperiorMain>
          <div className="video-container">
            {<iframe
            title="cyberpunk"
              frameBorder="0"
              src="https://mega.nz/embed/Yp9nnYiJ#YSlMu4Vl2b6cMqeDlEG5rhUhGhFn7bp84p00HIGb8qw"
              allowFullScreen
          ></iframe>}
          </div>
          <h1 className="Anime-emision-title">Ultimos Episodios :</h1>
          <Anime4x4 />
        </Columna1>
        <Columna2Main />
      </MainContainer>
    </ContainerPrincipal>
  );
};

export default Main;