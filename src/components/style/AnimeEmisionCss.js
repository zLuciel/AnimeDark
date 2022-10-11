import styled from "styled-components";

export const CardEmision = styled.div`
    cursor: pointer;
    flex: initial;
    position: relative;
    margin: 10px 10px ;
    overflow: hidden;
    width:200px;//***responsive 200px */
    min-height: 310px;
    border-radius: 20px;
    transition: all 0.5s;
    @media (max-width: 1788px){
      width: 220px;
    }
    @media (max-width: 1738px){
    width: 200px;
  }
  @media (max-width: 1649px){
    width: 195px;
    height: 310px;
  }
  :hover{
    color: #D8F90F;
    transform: scale(1.04);
    transition: all 0.5s;
  }
  .img-bg {
    opacity: 0.5;
    position: absolute;
    width: 100%;
    height: 100%;
    filter: blur(2.5px);
    z-index: -1;
  }
.container-img {
    position: absolute;
    overflow: hidden;
    left: 10px;
    top: 10px;
    border-radius: 20px;
    z-index: 9;
    width: 180px;
    height: 231px;
    img {
      width: 100%;
      height: 100%;
    }
    @media (max-width: 1649px){
      width: 170px;
    }

  }
  .titulo-anime{
    position: absolute;
    padding: 0 15px;
    bottom: 15px;
    //left: 15px;
    h1{
      
      font-size: 1.1rem;
    }
  }
  @media (max-width: 1649px){
      .titulo-anime{
        h1{
          font-size: 1.1rem;
        }
      }
    }
`