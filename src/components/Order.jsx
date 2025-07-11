import React from 'react'
import buttonDelete from '../assets/delete.png';
import styleButton from "./Button.module.css"
import styles from "./Order.module.css"


export const Order = ({neworder, eliminarDelPedido}) => {


  return (

  <div className={styles.itemorder}>
    {neworder.map((order, index) => (
      <div className={styles.containergral}>

        <div className={styles.containerleft}>
          <span>{index + 1}. {order.name}</span>
        </div>

        <div className={styles.containerrigth}>
          ${order.price.toLocaleString()}
          <button className={styleButton.botonConTexto} onClick={() => eliminarDelPedido(index)}>
            <img src={buttonDelete} alt="Icono eliminar" className={styleButton.iconosmall} />
          </button>
        </div>

      </div>

        
     
    ))}
  </div>
  )
};
