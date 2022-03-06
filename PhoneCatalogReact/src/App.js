import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";

import PaginaAnuncios from "./components/anuncios/PaginaAnuncios/PaginaAnuncios";
import PaginaNuevoAnuncio from "./components/anuncios/PaginaNuevoAnuncio/PaginaNuevoAnuncio";
import PaginaAnuncio from "./components/anuncios/PaginaAnuncio";
import Pagina404 from "./components/Pagina404"

function App() {

  return (
       <div className='App'>
    <BrowserRouter>
     
          <Routes>
              <Route path='/adverts/new' element={<PaginaNuevoAnuncio/>} />
              <Route path='/adverts/:id' element={<PaginaAnuncio/>} />
              <Route path='/phones' element={<PaginaAnuncios/>}  />
          <Route exact path='/' element={<PaginaAnuncios />} />
          <Route exact path='/index.html' element={<PaginaAnuncios />} />
          
              <Route path='*' element={<Pagina404/>}/>
          </Routes>

       
      </BrowserRouter>
            
       </div>
  );
}

export default App;
