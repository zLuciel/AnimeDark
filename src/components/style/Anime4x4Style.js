import styled from "styled-components";

export const Anime4x4Conteiner = styled.div`
  display: flex;
  border: 0px solid greenyellow;
//*  flex-wrap: wrap; por ahora no*/
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  flex-wrap: wrap;
  
  @media (max-width: 1649px){
    justify-content: flex-start;
  }
`;
