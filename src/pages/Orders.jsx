import styles from "./Orders.module.css"
//import { useEffect, useState } from "react";


export const Orders = ({historial, setHistorial}) => {
  
  
  const eliminarDelHistorial = (indexToRemove) => {
    const nuevoPedido = historial.filter((_, index) => index !== indexToRemove);
    setHistorial(nuevoPedido);
  };


return (
    <div className={styles.model}>
      <h1>Historial de Pedidos Salientes</h1>
      <br />
        <div className={styles.containergral}>
        {historial.map((registro, index) => (
        <div className={styles.container}>
          <div>
          <h4>Pedido # {index + 1} — {registro.cliente}</h4>
          <br />
          <ul>
            {registro.pedido.map((item, i) => (
            <li key={i}>
              <div className={styles.itemorder}>
                <div>{item.name}</div> 
                <div>${item.price.toLocaleString()}</div>
                </div>
            </li>
            ))}
            <br />
            <h4>Items pedidos: {registro.pedido.length} - Total: ${registro.total.toLocaleString()}</h4>
            <br />
          </ul>
          </div>
            <div className={styles.containerbottom}>
              <button className={styles.button} onClick={() => eliminarDelHistorial(index)}>despachado</button>
            </div>
            
          
        </div>
        ))}
        </div>
    </div>
  );
}
