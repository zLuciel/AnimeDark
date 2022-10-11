// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {firebaseConfig }from "./firebase.cof"
import {getFirestore,collection,getDocs,doc,getDoc,query,where,setDoc,deleteDoc} from "firebase/firestore"




// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
const db = getFirestore(app);
//const storage = getStorage(app);

//** si existe la coleecion users */
export async function userExists(uid){
  const docRef = doc(db, "users", uid); //**creando documento en firebase con el uid */
  const res = await getDoc(docRef)
  return res.exists(); //** si existe el documento */
}
//**si existe el usuario Booleano */
export async function existsUsername(username){
  const users = [];
  const docsRef = collection(db,"users");
  const q = query(docsRef, where("username", "==", username));
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach(doc =>{
    users.push(doc.data());
  });
  return users.length > 0 ? users[0].uid : null
}
//**Search Anime FIREBASE*/

export async function getSearchAnime(){
  const Animes = [];
  try {
    const collectionRef = collection(db,"Animes")
    const q = query(collectionRef);
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach(doc => {
    const anime = {...doc.data()};
    Animes.push(anime)
    })
    return Animes
  } catch (error) {
    console.log(error);
  }
}


//**TRAER LOS ANIMES FINALIZADOS */
export async function getEmision(){
  const Animes = [];
  try {
    const collectionRef = collection(db,"Animes")
    const q = query(collectionRef, where("estado",`==`,"Finalizado"));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach(doc => {
    const anime = {...doc.data()};
    Animes.push(anime)
    })
    return Animes
  } catch (error) {
    console.log(error);
  }
}

//**TRAER LOS ANIMES POR ID PERZONALIZADO */
export async function getAnimeId(id){
  const Animes = [];
  try {
    const collectionRef = collection(db,"Animes")
    const q = query(collectionRef, where("id",`==`,id));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach(doc => {
    const anime = {...doc.data()};
    Animes.push(anime)
    })
    return Animes
  } catch (error) {
     console.log(error);
  }
}

export async function registerNewUser(user){
  try {
    const collectionRef = collection(db,"users");
    const docRef = doc(collectionRef,user.uid);
   await setDoc(docRef,user); //**si quiero el id aleatorio ponemos addDoc */
  } catch (error) {
    console.error(error);
  }
}


//**actualzar la informacion */
export async function updateUser(user){
  try {
    const collectionRef = collection(db,"users");
    const docRef = doc(collectionRef,user.uid);
   await setDoc(docRef,user); //**si quiero el id aleatorio ponemos addDoc */
  } catch (error) {
    console.error(error);
  }
}
//** Agregar favoritos*/

export async function insertNewFavorite(LinkFavorite){
  try {
    const collectionRef  = collection(db,"favoritos");
    const docRef = doc(collectionRef,LinkFavorite.id)
    const res = await setDoc(docRef,LinkFavorite)
    return res;
  } catch (error) {
    console.error(error);
  }
}
export async function getUserInfo(uid){
  try {
    const docRef = doc(db,"users", uid);
    const document = await getDoc(docRef);
    return document.data();
  } catch (error) {
    console.error(error);
  }
}


//** traer favoritos*/

export async function getFavorite(uid){
  const AnimesFavoritos = [];
  try {
    const collectionRef = collection(db,"favoritos")
    const q = query(collectionRef, where("uid",`==`,uid));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach(doc => {
    const anime = {...doc.data()};
    AnimesFavoritos.push(anime)
    })
    return AnimesFavoritos
  } catch (error) {
    console.error(error);
  }
}

//**si existe el Anime Boolean */
export async function existsAnimeFavorite(id){
  const favorite = [];
  const docsRef = collection(db,"favoritos");
  const q = query(docsRef, where("id", "==", id));
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach(doc =>{
    favorite.push(doc.data());
  });
  return favorite.length > 0 ? favorite[0].id : null
}
//**Eliminar favorites dependiendo del id */

export async function Deletefavorite(id){
  return await deleteDoc(doc(db, "favoritos", id));
 
}