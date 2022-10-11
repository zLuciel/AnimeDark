import styled from "styled-components";

export const CardTopContainer = styled.section`
display: flex;
flex-direction: column;
`
export const CardAnimeTop = styled.div`
 display: flex;
 margin-bottom: 20px;
 .card-img-top{
    width: 141px;
    height: 180px;
    border-radius: 20px;
    overflow: hidden;
    img{
        width: 100%;
        height: 100%;
    }
 }
 .card-info-top{
    
    width: 50%;
    margin: auto;
    h3,h4{
        line-height: 1.8;
    }
    h4{
        color: rgba(255, 255, 255, 0.5);
    }
    p{
       color: rgba(255, 255, 255, 0.8)
    }
 }
 .top-global-star{
    width: max-content;
   *{
    color: #D8F90F;
    margin-right: 15px;
    margin-top: 5px;
   } 
 }
`