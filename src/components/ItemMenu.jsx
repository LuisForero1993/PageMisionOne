import styles from  "./ItemMenu.module.css"
//import { useState } from "react";
import buttonAdd from '../assets/agregar.png';
import styleButton from "./Button.module.css"

export const ItemMenu = ({name, price, image, updateOrder}) => {
  
  




  
  return (
    <>
    <div className={styles.container}>
      <div>
        <span>
          <img src={image} alt="photo" className={styles.image} />
          <h5>{name}</h5>
          <br />
          <strong>Precio: ${price.toLocaleString()}</strong>
        </span>        
      </div>
      <div className={styles.containerbottom}>
        <button className={styleButton.botonConTexto} onClick={()=> updateOrder(name, price)}>
          <img src={buttonAdd} alt="Icono añadir" className={styleButton.iconosmall} />
          <span>Añadir</span>
        </button>
      </div>

    </div>
    </>
  );
};
