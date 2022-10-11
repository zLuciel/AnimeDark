import styled from "styled-components";

export const FotoPerfilContainer = styled.div`
  width: 110px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .notify{
    color: #D8F90F;
    width: 25px;
    height: 25px;
  }
  .flex-bg-transp {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 65px;
    height: 30px;
    background: rgba(0, 0, 0, 0.2);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 25px;
    display: flex;
  }
  .container-img-perfil {
    
    overflow: hidden;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;
