import styled from "styled-components";

export const DynamicAnimeOne = styled.div`
//background: url(${props => props.bg}) center center/cover no-repeat;

display: grid;
grid-template-columns: 100%;
grid-template-rows: minmax(max-content,600px) 1fr;
.flex-container-info-one{
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
}
/*.container-bg{
    
    .bg-fixed{
    //background-size: cover;
    opacity: .08;
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 100%;
    img{
       // background-size: cover;
        width: 100%;
        height: 100%;
    }
}
}*/
.title-one,.temporada-one,.sipnosis-one,.genero-one,.estado-one{
    margin-bottom: 15px;
}
.temporada-one{
    display: flex;
    align-items: center;
    p{
        margin-right: 10px;
        font-size: 2rem;
    }
    .star-one{
        color: #D8F90F;
        margin-right: 10px;
    }
}
.contenido-principal-one{
    margin-left: 50px;
    min-width: 800px;
    max-width: 900px;

.sipnosis-one{
    line-height: 1.5;
    font-size: 1.3rem;
    color: #D7D7D7;
    padding-right: 80px;
}
.title-one{
    display: flex;
    h1{
     max-width: 750px;
    // min-width: max-content;
     font-size: 6rem;   
    }
    .favorite-one{
        justify-self: flex-start;
        align-self: flex-end;
        width: 100px;
        height: 100px;
        color: #D8F90F;
    }
}
.estado-one{
    display: flex;
    p{
        margin-left: 10px;
        color: yellow;
        font-style: normal;
    }
}
.genero-one{
    display: flex;
    align-items: center;
    p{
        margin: 0 3px;
    }
}
button{
    border: 1px solid black;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 1000px;
    width: 112px;
    height: 39px;
    background: #D8F90F;
    padding: 0 10px;
    p{
        font-style: normal;
        line-height: 2;
        font-size: 1.2rem;
    }
    .play-one{
        width: 30px;
        height: 30px;
    }
}
}

`
export const CapitulOne = styled.div`
h1{
    margin-left: 50px;
    margin-bottom: 20px;
}
.capitulos-flex-container{
    flex-wrap: wrap;
    position: relative;
    margin-left: 50px;
    margin-bottom: 20px;
    display: flex;
    justify-content: flex-start;
    .capitulo-img-vid{
        left: 50%;
        bottom: 15%;
        transform: translate(-50%,50%);
        width: 30%;
        position: absolute;
        border-radius: 20px;
        background-color: #D8F90F;
        p{
            text-align: center;
            color: black;
        }
    }
  .container-img-cap-one{
    position: relative;
    margin-bottom: 30px;
    margin-right: 30px;
    overflow: hidden;
    border-radius: 20px;
    width: 350px;
    min-height: 197px;
    min-width: 200px;
    height: max-content;
    img{
        opacity: .8;
        width: 100%;
        height: 100%;
    }
    }
   
}
`