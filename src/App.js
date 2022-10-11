import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ConfigUser from "./components/ConfigUser";
import Favoritos from "./components/Favoritos";
import FormRegistered from "./components/FormRegistered";
import Header from "./components/Header";
import Login from "./components/Login";
import Capitulos from "./Routes/Capitulos";
import { Error404 } from "./Routes/Error404";
import Home from "./Routes/Home";
import PortadaAnime from "./Routes/PortadaAnime";
import { VerAnimes } from "./Routes/VerAnimes?t=v56";

function App() {
  //<Route path="search/:id/:capitulo" element={<Capitulos/>} />
  return (
    <div className="flex-body">
    <BrowserRouter>
    <Routes >
      <Route path="/" element={<Header/>} > 
      <Route index element={<Home />} />
      <Route path="search" element={<VerAnimes/>} />
    
      <Route path="search/:id/" element={<PortadaAnime/>} />
       <Route path="search/:id/:capitulo" element={<Capitulos/>} />
      <Route path="favoritos" element={<Favoritos/>} />
      <Route path="configuracion-usuario" element={<ConfigUser/>} />
      <Route path="prueba" element={<p>prueba </p>} />
      <Route path="*" element={<Navigate replace to="/404" />} />
      </Route>
      <Route path="/404" element={<Error404/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/registrando-usuario" element={<FormRegistered/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
