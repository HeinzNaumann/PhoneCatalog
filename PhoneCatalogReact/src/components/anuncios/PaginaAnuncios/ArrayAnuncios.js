import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { ListaVacia } from "./PaginaAnuncios";
import styles from "./AnunciosPagina.module.css";
import plus from "../../../assets/plus.png"

const ArrayAnuncio = ({ anuncios}) => {

  return (
    <Fragment>
      
      <div className={styles.paginaAnuncios}>
        
        {anuncios.length ? (
        
          <ul className='contenedor-anuncios'>
            {anuncios.map(anuncio => (
              <li className='listado-anuncios' key={anuncio._id}>
                <Link to={`/adverts/${anuncio._id}`}>
                  <div className={styles.bloqueAnuncio}>
                    <img
                      alt='imagenes-articulos'
                      className={anuncio.Imagen}
                      src={`${process.env.REACT_APP_API_BASE_URL}/public/images/${anuncio.imageFileName}` }
                    />
                    <h4 className={styles.anuncioName}>{anuncio.name}</h4>
                    
                    <span className={styles.description}><p className={styles.destexto}>{anuncio.description}</p></span>
                    <div className={anuncio.Caracteristicas}>
                      <span>{anuncio.processor} - </span>
                      <span>{anuncio.screen} - </span><br></br>
                      <span>{anuncio.ram} GB -</span>
                      <span>{anuncio.color}</span>
                    </div>
                    <div className={styles.precioBox}>
                    <p>
                      Desde<br></br>
                      </p>
                     <strong>{anuncio.price}{" "}€</strong>
                    </div>

                  </div>
                </Link>
              </li>
           
            ))}
            <li className='listado-anuncios add'>
                <Link to={`/adverts/new`}>
                  <div className={styles.bloqueAnuncioVacio}>
                  <img className={styles.image} src={plus} width="30px" alt="add"/>
                  </div>
                </Link>
              </li>
          </ul>
        ) : (
            
          <ListaVacia />
        )}
      </div>
    </Fragment>
  );
};

export default ArrayAnuncio;
