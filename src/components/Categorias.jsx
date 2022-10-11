import { CategoriasContainer} from "./style/CategoriaStyle";
import Genero from "./Genero";
const Categorias = () => {
 
  return (
    <CategoriasContainer>
      <div className="all-categoria">
        <p>All Categoria</p>
      </div>
      <Genero/>
      <Genero/>
      <Genero/>
      <Genero/>
    </CategoriasContainer>
  );
};

export default Categorias;
