import styled from "styled-components";

export const FavoriteContainer = styled.div`
width: 80%;
margin: 20px auto;
.flex-favorite{
    //margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
}
    .link-favorite{
        color: white;
        text-decoration: none;
    }
`
export const FavoriteOneCard = styled.div`
width: max-content;
margin-left: 10px;
text-align: center;
.favorite-img{
    width: 250px;
    height: 300px;
    img{
        width: 100%;
        height: 100%;
    }
}
`