import axios from "axios"
const api = "https://somoskudasai.com/wp-json/wp/v2/posts"
export const getNoticias = async ()  =>{
  const {data} = await axios.get(api);
  return data
}