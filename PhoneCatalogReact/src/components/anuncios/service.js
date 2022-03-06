import client from "../../api/client";

const anunciosBaseUrl = "";

export const getUltimosAnuncios = () => {
  const url = `/`;
  return client.get(url);
};

export const createAnuncio = anuncio => {
  const url = `${anunciosBaseUrl}/apiv1/anuncios`;

  return client.post(url, anuncio);
};


export const getUltimoAnuncio = id => {
  const url = `${anunciosBaseUrl}/adverts/${id}`;
  return client.get(url);
};

export const deleteAnuncio = id => {
  const url = `${anunciosBaseUrl}/adverts/${id}`;
  return client.delete(url);
};
