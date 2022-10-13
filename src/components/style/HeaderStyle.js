import styled from "styled-components";

export const Headers = styled.header`
/***80px reponsive */

min-width: 200px;
//min-width: 80px;
min-height: 100vh;
height: max-content;

display: flex;
flex-direction: column;
justify-content: center;
top: 0;
position: sticky;
border-bottom-right-radius: 10px;
border-top-right-radius: 10px;
/* From https://css.glass */
background: rgba(0, 0, 0, 0.2);
box-shadow: 0 4px 30px rgba(0, 0, 0, 1);//**original 0.3 */
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
@media (max-width: 1525px){
min-width: 80px;
}
`
export const Logo = styled.div`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: start;
  position: relative;
  img{
    width: 80%;
    height: 100%;
  }
`
export const Nav= styled.nav`
 max-height: 70vh;
 min-height: 550px;
 position: relative;
 img{
  width: 100%;
  height: 100%;
 }

 .img-sucri{
  margin-right: 20px;
  width: 30px;
  height: 30px;
  img{
    width: 100%;
    height: 100%;
    border-radius:60%;
  }
  @media (max-width: 1525px){
    margin-left: -4px;
    width: 25px;
    height: 25px;
  }
 }
 h1{
  //border: 1px solid greenyellow;
  display: flex;
  justify-content: start;
  align-items: center;
  font-size: 0.9rem;
  margin: 25px 20px;
  color: #D8F90F;
  *{
 //border: 1px solid greenyellow;
   margin-right: 20px;
   width: 22px;
   height: 100%;
  }
 }
ul{
  padding-top: 25px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding-left:20px; //**padding 20px responsive */
 /* @media (max-width: 1525px){
    padding-left: 50px;
    position : relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
}*/
}
.icon{
  margin-right: 10px;
  *{
  width: 20px;
  height: 20px;
  }
}
.title-nav{
  font-size: 1rem;
}
@media (max-width: 1525px){
.title-nav,h1>b{
  display: none;
}
 h1{
  *{
    margin-right: 0;
  }
 }
}
li{
    cursor: pointer;
    position: relative;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    margin-bottom: 10px;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
}
.active{
  background:  #D8F90F;//**original  #172936*/
  .link-header{
    height: 100%;
    color: black; //**original  #D8F90F*/
  }
}
.green{
    color: #D8F90F;
}
.active > b:nth-child(1){
  position: absolute;
  top: -20px;
  right: 0;
  height: 20px;
  width: 20px;
  background:  #D8F90F;  /**original  #172936 */
}
.active > b:nth-child(1)::before{
  content: " ";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-bottom-right-radius: 15px;
  background: rgba(22, 32, 0, 1);/**original 0 0 0 0.25 */
  backdrop-filter: blur(5.3px);/**5.3 */
}
.active > b:nth-child(2){
  position: absolute;
  bottom: -20px;
  right: 0;
  height: 20px;
  width: 20px;
  background: #D8F90F;/**original #172936 */
}
.active > b:nth-child(2)::before{
  content: " ";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-top-right-radius: 15px;
  background:  rgba(22, 32, 0, 1); /**original 0.25 */
}
.link-header{
 // border: 1px solid red;//**configurACION LINK */
  background: none;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  //left: 15px;
  top: 0px;
  width: 100%;
  text-decoration: none;
  color:white;
  height: 100%;
  *{
    margin-left: 10px;
  }
}

ul > p{
  bottom: -30px;
  position: absolute;
  width: 100%;
  left: 0;
  text-align: center;
  color: #D8F90F;
  padding: 0;
  margin: 0;
  @media (max-width: 1525px){
    font-size: .8rem;
  }
}
`


export const Configuraciones = styled.div`
 /*height: 20vh;
 max-height:200px;
 min-height: 200px;*/
 min-height: max-content;
 position: relative;
 display: flex;
 justify-content: start;
 align-items: center;
 flex-direction: column;
 .configuracion{
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 85%;
  .link-confi{
    color: white;
    text-decoration: none;
    display: flex;
    align-items: center;
  }
.icon-confi-nav{
  min-width: 20px;
  min-height: 20px;
  color: #D8F90F;
  margin-right: 10px;
 }
 @media (max-width: 1525px){
    p{
      display: none;
    }
    .icon-confi-nav{
      margin-right: 0;
    }
  }
 }
 .Login-Nav{
  button{
    color: white;
    background: rgba(217, 217, 217, 0.1);
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: 1px solid #D8F90F;
    border-radius: 15px;
    width: 120px;
    height: 40px;
    .login-icon-nav{
      min-width: 22px;
      min-height: 22px;
      color: #D8F90F;
    }
  }
  .lapto{
      display: none;
      color: #D8F90F;
      min-width: 23px;
      min-height: 23px;
    }
  @media (max-width: 1525px){
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    .lapto{
  color: #D8F90F;
  min-width: 23px;
  min-height: 23px;
    display: flex;
    
    }
    button{
      display: none;
    }
  }
 }
`