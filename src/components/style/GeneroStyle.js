import styled from "styled-components";
export const GeneroContainer = styled.div`
position: relative;
margin-right: 20px;
cursor: pointer;
.tituloGenero{
    background: rgba(217, 217, 217, 0.12);
    border-radius: 20px;
    width: 90px;
    line-height: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    .arrow-icon{
        color: #D8F90F;
        width: 20px;
        height: 18px;
    }
}
.listado-genero{
position: absolute;
z-index: 4000;
ul{
border-radius:10px;
text-align: center;
width: 90px;
background: rgba(0, 0, 0, 0.8);
display: ${({mostrar}) => mostrar ? "block" : "none"};

}

 ul > li{
    padding: 3px 0;
    margin: 8px;
    cursor: pointer;
    list-style: none;
}
}
`