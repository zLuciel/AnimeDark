import styled from "styled-components";

export const CapitulosContainer = styled.div`
position: relative;
 width: 100%;
 display: grid;
 grid-template-areas: 
 "Search Search"
 "Capitulo Noticias";
 grid-template-columns: 1fr max-content;
.bgxd{
width: max-content;
padding: 10px 0;
background: rgba(0, 0, 0, 0.2);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 1);//**original 0.3 */
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
margin-right: 30px;
}
.absolute-bg-fixed{
    position: fixed;
    width: 100%;
    height: 100%;
    opacity: .1;
    z-index: -1;
 img{
    width: 100%;
    height: 100%;
    object-fit: cover;
 }
}
`

export const SearchGrid = styled.div`
grid-area: Search;
width: 94%;
margin: 10px auto;
`
export const VideoGrid = styled.div`
grid-area: Capitulo;
width: 90%;
margin: 0 auto;
position: relative;
h1{
    font-size: 7rem;
    margin-bottom: 5px;
}
.temporada-cap{
    display: flex;
    align-items: center;
 .star-one{
    color: #D8F90F;
    margin-left: 10px;
 }
}
p{
    color: #D7D7D7D6;
    line-height: 1.5;
    font-size: 1.2rem;
    padding-right: 0px;
    margin: 10px 0px;
}
h3 {
margin-bottom: 10px;
b{
    color: #D8F90F;
}
}
button{
    cursor: pointer;
    width: 150px;
    height: 30px;
    border-radius: 20px;
    border: 1px solid black;
    margin-right: 10px;
}

`

export const NoticiasGrid = styled.div`
grid-area: Noticias;
justify-self: end;
margin: 10px 20px;
`

export const VideoContainer = styled.div`
display: flex;
width: 100%;
height: 580px;
.videocapitulo{
width: 100%;
height: 480px;

 iframe{
    border-radius: 10px;
    width: 100%;
    height: 100%;
    margin-bottom: 10px;
}
h2{
    margin-bottom: 10px;
}
.btn-video > button{
    background: white;
        color: black;
    :hover{
    background: #D8F90F;
    color: black;
    }
}
}


`