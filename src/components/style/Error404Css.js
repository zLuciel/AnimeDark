import styled from "styled-components";

export const Error404Container = styled.div`
position: relative;
width: 100%;
display: grid;
grid-template-columns: 1fr 50%;

background: rgba(0, 0, 0, 0.2);
box-shadow: 0 4px 30px rgba(0, 0, 0, 1);//**sombra aumentada */
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
border: 1px solid rgba(0, 0, 0, 0.3);

.circle{
    overflow: hidden;
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    z-index: -1;
}
.top{
    left: -50px;
    top: -50px;
    background: linear-gradient(90deg, rgba(13, 255, 211, 0.24) -6.75%, rgba(0, 240, 255, 0.43) 93.25%);
}
.derecha{
    top: -50px;
    right: 50vw;
    background: linear-gradient(90deg, rgba(20, 136, 204, 0.32) 0%, rgba(43, 50, 178, 0.56) 100%);
}
.abajo{
    left: -50px;
    bottom: -50px;
    background: linear-gradient(90deg, rgba(200, 78, 137, 0.6) 0%, rgba(241, 95, 121, 0.78) 100%);
}
`
export const InfoErrorContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
.txt-error{
    h1,p{
        margin-bottom: 20px;
    }
    h1{
        font-size: 5rem;
        color: #D8F90F;
    }
    p{
        font-size: 3rem;
    }
}

button{
    cursor: pointer;
    line-height: 2;
    font-size: 1.5rem;
    background: #D8F90F;
    width: 100%;
    height: max-content;
    border-radius: 10px;
}
`

export const ImgErrorContainer = styled.div`
    height: 100vh;
    img{
        width: 100%;
        height: 100%;
    }
`