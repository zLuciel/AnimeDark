import styled from "styled-components";

export const Buscador = styled.div`
display: flex;
justify-content: space-between;
align-items: center;//**posicion del buscador */
.Container-mostrar-buscador{
    position: relative;
    width: 50%;
    form{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: rgba(0, 0, 0, 0.2);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);//**original 0.1 */
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 15px;
    width: 100%;
    height: 30px;
    padding: 10px 5px;
    margin-bottom: 5px;
    .icon-search{
        height: 23px;
        width: 30px;
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #D8F90F;
        margin-right: 10px;
        cursor: pointer;
        *{
            color: black;
        }
    }
}
 form > input{
    width: 100%;
    background: none;
    outline: none;
    border: none;
    color: white;
 }
 form > input::placeholder{
 }
 .ver-mas-search{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 30px;
    border: none;
    color: #D8F90F;
    background: black;
    border-radius: 20px;
    :hover{
        color: black;
        background: #D8F90F;
    }
 }
 .Search-Anime-visual{
    width: 100%;
    display: block;
    z-index: 45;
    position: absolute;
    height: max-content;
    padding: 10px;

    /* From https://css.glass */
background: rgba(0, 0, 0, 0.2);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
border: 1px solid rgba(0, 0, 0, 0.3);
.link-search{
    text-decoration: none;
    color: white;
}
}
 .hide{
    display: none;
 }

}

`
