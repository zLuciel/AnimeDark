import styled from "styled-components";

export const Columna2 = styled.div`
width: min-content(380px,500px);
top: 0;
position: sticky;
margin: 20px 20px;
height: min-content;
background: rgba(0, 0, 0, 0.2);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 1);//**sombra aumentada */
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
border: 1px solid rgba(0, 0, 0, 0.3);
border-radius: 20px;
`
export const ColumnaMargin = styled.div`
width: 95%;
margin: auto;
`
export const TileVideoTrailer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 40px;
padding: 0 10px;
h4{
    color: #D8F90F;
}
`
export const VideosTrailers = styled.div`
width: 100%;
margin: auto;
height: 250px;
iframe{
    border-radius: 20px;
    width: 100%;
    height: 100%;
}
`
export const BtnTrailers = styled.div`

height: 30px;
display: flex;
justify-content: start;
align-items: center;
margin-top: 8px;
padding: 0 5px;
div{
    display: flex;
    margin: 0 10px;
}
.left-btn{
    color: rgba(255, 255, 255, 0.33);;
}
.right-btn{
    color: #D8F90F;
}
.left-btn,.right-btn{
    width: 25px;
    height: 25px;
    cursor: pointer;
}
`