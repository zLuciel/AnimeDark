
import Anime4x4 from "./Anime4x4";
import Columna2Main from "./Columna2Main";
import Search from "./Search";

import {
  Columna1,
  ContainerPrincipal,
  FlexSuperiorMain,
  MainContainer,
} from "./style/MainStyle";
import videoanime from "../assets/mainanime.mp4"

const Main = () => {

 
  return (
    <ContainerPrincipal>
      <MainContainer>
        <Columna1>
          <FlexSuperiorMain>
            <Search />
          </FlexSuperiorMain>
          <div className="video-container">
            {/*<iframe
            title="cyberpunk"
              frameBorder="0"
              src="https://mega.nz/embed/Yp9nnYiJ#YSlMu4Vl2b6cMqeDlEG5rhUhGhFn7bp84p00HIGb8qw"
              allowFullScreen
  ></iframe>*/}
          <video controls style={{width:"100%",height:"100%",objectFit:"cover"}} src={videoanime} autoPlay muted loop></video>
           
          </div>
          <h1 className="Anime-emision-title">Ultimos Episodios :</h1>
          <Anime4x4 />
        </Columna1>
        <div className="fixed-vol2">
          <Columna2Main />
        </div>
        
      </MainContainer>
    </ContainerPrincipal>
  );
};

export default Main;
