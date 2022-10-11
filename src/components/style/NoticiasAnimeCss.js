import styled from "styled-components";

export const NoticiasAnimeApi = styled.div`
overflow: hidden;
cursor: pointer;
 display: flex;
/* From https://css.glass */
/*background: rgba(216, 249, 15, 0.9);
color: black;
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(15.5px);
-webkit-backdrop-filter: blur(15.5px);*/
margin: 20px 50px;
`
export const NoticiasImg = styled.div`
width: 250px;
height: 150px;
img{
    width: 100%;
    height: 100%;
   /* border-bottom-right-radius: 20px;
    border-top-right-radius: 20px;*/
    border-radius: 10px;
}
`

export const NoticiInfo = styled.div`
justify-self: center;
align-self: center;
width: 200px;
padding: 20px;
p{
    margin: 10px 0px ;
}
:hover{
    color: #D8F90F;
}
`