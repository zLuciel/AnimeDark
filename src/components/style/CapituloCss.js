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
`
export const VideoGrid = styled.div`
grid-area: Capitulo;
h1{
    font-size: 6rem;
    margin-bottom: 5px;
}
p{
    padding-right: 80px;
}
`

export const NoticiasGrid = styled.div`
grid-area: Noticias;
justify-self: end;
margin: 10px 20px;
`

export const VideoContainer = styled.div`
justify-self: center;
align-self: center;
width: 80%;
margin: 0 auto;

height: 500px;
iframe{
    border-radius: 10px;
    width: 100%;
    height: 100%;
}
`