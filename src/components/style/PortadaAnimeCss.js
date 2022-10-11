import styled from "styled-components";

export const ContainerPortada = styled.div`

width: 100%;
position: relative;
.container-search{
 width: 93%;
 margin: 10px auto;
 background: none;
}
.bg-fixed{
    //background-size: cover;
    opacity: .08;
    z-index: -1;
    position: fixed;
    width: 100%;
    top: 0;
    //height: 100%;
    img{
       // background-size: cover;
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }
}
`