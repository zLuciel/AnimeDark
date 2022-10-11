import React from "react";
import {
    BtnTrailers,
  Columna2,
  ColumnaMargin,
  TileVideoTrailer,
  VideosTrailers,
} from "./style/Columna2Style";
import { HiArrowCircleLeft,HiArrowCircleRight} from 'react-icons/hi';

import CardTopGlobal from "./CardTopGlobal";
const Columna2Main = () => {
  return (
    <Columna2>
    <ColumnaMargin>
      <TileVideoTrailer>
        <h3>Trailers</h3>
        <h4>Ver Todos</h4>
      </TileVideoTrailer>
      <VideosTrailers>
        { <iframe
            title="cyberpunk"
              frameBorder="0"
              src="https://mega.nz/embed/Yp9nnYiJ#YSlMu4Vl2b6cMqeDlEG5rhUhGhFn7bp84p00HIGb8qw"
              allowFullScreen
          ></iframe>}
      </VideosTrailers>
      <BtnTrailers>
        <HiArrowCircleLeft className="left-btn"/>
        <div><p>01</p>/<p>12</p></div>
        <HiArrowCircleRight className="right-btn"/>
      </BtnTrailers>
      <TileVideoTrailer>
        <h3>Los top globales</h3>
        <h4> Ver todos</h4>
      </TileVideoTrailer>
      <CardTopGlobal/>
      </ColumnaMargin>
    </Columna2>
  );
};

export default Columna2Main;
