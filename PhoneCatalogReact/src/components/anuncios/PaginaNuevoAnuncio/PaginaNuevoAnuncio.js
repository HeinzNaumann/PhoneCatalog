import Layout from "../../layout/Layout";
import Button from "../../common/button";
import { useState } from "react";
import { createAnuncio } from "../service";
import "./PaginaNuevoAnuncio.css"
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'

  
const element = <FontAwesomeIcon icon={faImage} />

function PaginaNuevoAnuncio() {
  const [value, setValue] = useState({
      name: "",
      manufacturer: "",
      description: "",
      color: "",
      price: "",
      imageFileName: "",
      screen: "",
      processor: "",
      ram: ""
  });

  const history = useNavigate();

  const handleChange = e => {

    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async event => {
    event.preventDefault();
   
    try {
      const data = new FormData(event.target);
      await createAnuncio(data);
      history("/");
    } catch (error) {
  console.error('outer', error);
   }
  };

  return (
    <Layout title='Add your product'>
      <div className="containerform">
      <form onSubmit={handleSubmit} className="form">
        <label>Name of product</label>
          <input
          
          type='text'
          name='name'
          value={value.name}
          onChange={handleChange}
        />
       
        <label>Name of manufacturer </label>
        <input
          type='text'
          name='manufacturer'
          value={value.manufacturer}
          onChange={handleChange}
        />
          <label>Description</label>
        <textarea
          rows="10"
          className="textarea"
          type='textarea'
          name='description'
          value={value.description}
          onChange={handleChange}
        />
           <label>Color</label>
        <input
          type='text'
          name='color'
          value={value.color}
          onChange={handleChange}
        />
        <div className="filas-dobles">
          <div className="label-input">
          <label>Price </label>
          <input
            name='price'
            value={value.price}
            onChange={handleChange}
            type='number'
              />
          </div>

          <div className="label-input">
            <label>Screen</label>
            <input
              type='text'
              name='screen'
              value={value.screen}
              onChange={handleChange}
          />
           </div>
      <div className="filas-dobles">
          <div className="label-input">
        <label>Processor </label>
        <input
          type='text'
          name='processor'
          value={value.processor}
          onChange={handleChange}
            />
            </div>
          </div>
          <div className="label-input">
          <label>Ram</label>
        <input
          type='number'
          name='ram'
          value={value.ram}
          onChange={handleChange}
            />
        </div>
        <label htmlFor="file-upload" className="custom-file-upload"><i>{element}</i> Insert Photo </label>
            
            <input
          id="file-upload"
          name='imageFileName'
          type='file'
          value={value.imageFileName }
          onChange={handleChange}
        />
        </div>
        <Button
          disabled={!value.name || !value.price || !value.ram || !value.imageFileName} 
          type='submit'
          className='newTweetPage-submit'
          variant='primary'
        >
          Crear
        </Button>
        </form>
        </div>
    </Layout>
  );
}

export default PaginaNuevoAnuncio;
