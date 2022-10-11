import styled from "styled-components";

export const ContainerPrincipal = styled.div`
height: 4000px;
width: 100%;
position: relative;
`
export const MainContainer = styled.main`
width: 100%;
height: 100vh;
display: grid;
grid-template-columns: minmax(703px,1200px) minmax(380px,500px);//**380px 500px*/
`
export const Columna1 = styled.div`
    /*width: 1200px;*/
  /*  min-width: 700px;*/
    margin: 10px 30px;
    .Anime-emision-title{
      padding-left: 25px;
      margin-top: 10px;
    }
 .video-container{
    border-radius: 20px;
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 500px;
    iframe{
        width: 100%;
        height: 100%;
    }
 }
`
export const FlexSuperiorMain = styled.div`
height: 40px;
margin: 10px 10px;
display: grid;
grid-template-columns: 1fr;
`