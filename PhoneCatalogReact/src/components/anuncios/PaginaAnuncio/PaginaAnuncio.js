import { useEffect, useState } from "react";
import { getUltimoAnuncio, deleteAnuncio } from "../service";
import { useNavigate } from 'react-router-dom';
import ConfirmButton from "../../common/ConfirmButton";
import Loader from "../../common/Loader"
import Layout from "../../layout/Layout";
import "./PaginaAnuncios.css";
import styles from "./AnuncioPagina.module.css";
import { useParams } from "react-router-dom";

function PaginaAnuncio() {

  const { id } = useParams();
  const history = useNavigate();
  const [anuncio, setAnuncios] = useState([]);
  const [isLoading, setLoading] = useState(true)
  
  const borrarAnuncio = function () {
    deleteAnuncio(id).then(()=>(history("/")) );
  };

  useEffect(() => {
    getUltimoAnuncio(id)
      .then((anuncio) => {
        setAnuncios(anuncio);
        setLoading(false);
      });
  }, [id]);
    
  return (
    <Layout title='Detalle Anuncio'>
      {isLoading ? (
        <Loader />
      ) : (
        <ul >
          <li className='listado-anuncios pagina-anuncio' key={anuncio.id}>
            <div className={styles.bloqueAnuncio}>
                <img
                      alt='imagenes-articulos'
                      className={styles.Imagen }
                      src={`${process.env.REACT_APP_API_BASE_URL}/public/images/${anuncio.imageFileName}` }
                />
                    <div className={styles.caracteristicas}>
                    <h4 className={styles.anuncioName}>{anuncio.name}</h4>
                    <br></br>
                    <span>{anuncio.description}</span>
                    <br></br>
                      <span>{anuncio.processor} </span>
                      <span>{anuncio.screen}  </span>
                      <span>{anuncio.ram} GB </span>
                      <span>{anuncio.color}</span>
                    
                    <div className={styles.precioBox}>
                    <p>
                      Desde<br></br>
                      </p>
                     <strong>{anuncio.price}{" "}€</strong>
                    </div>

              {
                <ConfirmButton
                  confirmation='Are you sure?'
                  className='myButton'
                  onConfirm={borrarAnuncio}
                >
                  Delete
                </ConfirmButton>
                  }
                  
                  </div>
            </div>
          </li>
        </ul>
      )}
    </Layout>
  );
}

export default PaginaAnuncio;
