import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../common/button";
import Layout from "../../layout/Layout";
import Loader from "../../common/Loader"

//Archivos que pasamos
import { getUltimosAnuncios } from "../service";
import ArrayAnuncio from "./ArrayAnuncios";


export const ListaVacia = () => (
  <div style={{ textAlign: "center" }}>
    <p>Pon el primer anuncio</p>
    <Button as={Link} to='/adverts/new' variant='primary'>
      anuncio
    </Button>
  </div>
);

function PaginaAnuncios({ history, ...props }  ) {

  //Listado de  todos los anuncios
  const [anuncios, setAnuncios] = useState([]);
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    getUltimosAnuncios()
      .then((anuncios)=> {
        setAnuncios(anuncios);
        setLoading(false); 
      })
  }, []);


  return (
    <>  
         {isLoading ? (
        <Loader />
      ) : ( 
    <Layout title='All the products' {...props}>
        <ArrayAnuncio   
          anuncios={anuncios}
        ></ArrayAnuncio>
      
        </Layout>
      )}
    </>
  );
}

export default PaginaAnuncios;
