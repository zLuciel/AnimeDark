import styled from "styled-components";

export const SearchCard = styled.div`
margin: 10px 20px;
display: flex;
justify-content: start;
align-items: center;

.search-img{
    border-radius: 5px;
    overflow: hidden;
    width: 50px;
    height: 50px;
    img{
        width: 100%;
        height: 100%;
    }
}
.search-title{
    align-self: start;
    h4{
        padding: 0px 10px;
    }
}
`