import axios from "axios"
import { getFetchNoticia } from "../Firebase/Firebase";
 
export const getNoticias = async ()  =>{
  const api = await getFetchNoticia()
  const {data} = await axios.get(api[0].animenoticia);
  return data
}
//https://somoskudasai.com/wp-json/wp/v2/posts?categories=284
//"https://www.anmosugoi.com/wp-json/wp/v2/posts?categories=39"
// https://www.anmosugoi.com/wp-json/wp/v2/posts?_embed

export const getNoticias1 = async ()  =>{
  const API = process.env.REACT_APP_APIWORPRESS
  const {data} = await axios.get(API);
  return data
}