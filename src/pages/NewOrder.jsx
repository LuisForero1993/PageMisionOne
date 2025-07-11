import styles from "./NewOrder.module.css"
import { ItemMenu } from "../components/ItemMenu";
import { useState } from "react";
import { Order } from "../components/Order";
import { Orders } from "./Orders";
import buttonSave from '../assets/save.png';
import buttonDelete from '../assets/delete.png';
import styleButton from "../components/Button.module.css"

export const NewOrder = ({ menu, historial, setHistorial }) => {

  const [neworder, setNewOrder] = useState([]);
  const [cliente, setCliente] = useState("");
  const [inputValue, setInputValue] = useState('');
  const [reboteSave, setReboteSave] = useState(false);
  const [reboteClean, setReboteClean] = useState(false);


  const total = neworder.reduce((sum, order)=> sum + order.price, 0);
  
  const updateOrder = (name, price) => {
    const newOrder = {
      name,
      price,
    };
    setNewOrder((prev)=>[...prev,newOrder]);
  };

  const eliminarDelPedido = (indexToRemove) => {
    const nuevoPedido = neworder.filter((_, index) => index !== indexToRemove);
    setNewOrder(nuevoPedido);
  };

  const removeOrder = () => {
    setReboteClean(true);
    setTimeout(() => setReboteClean(false), 300); // duración del rebote
    setNewOrder([]);
    setInputValue('');
    setCliente("");
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setCliente(event.target.value);
  };

  const confirmOrder =()=>{
    setReboteSave(true);
    setTimeout(() => setReboteSave(false), 300); // duración del rebote
    if (neworder.length > 0 && cliente.length>0 ){//establecer tambien la del nombre validacion diferente de vacio
      const newRecord = [...historial, {
        cliente: cliente,
        pedido: neworder,
        total: total,
      }];
      setHistorial(newRecord);
      setNewOrder([]);
      setCliente("");
    }
    else{
      alert("Campos vacios");
    }
  };


  return (
    <div className={styles.model}>  
      <h2 className={styles.title}>INGRESAR NUEVO PEDIDO</h2>
      <div className={styles.container}>
        <section className={styles.leftsection}>
          <div className={styles.infocliente}>
            
            <div className={styles.inputContainer}>
              <label className={styles.label}>1. Ingrese el nombre del cliente:</label>
                <input
                className={styles.inputPedido}
                type="text"
                placeholder="Escribe el nombre"
                value={inputValue}
                onChange={handleInputChange}
              />
            </div>
            <span className={styles.label}>2. Toma la orden del cliente:</span>
            <br />
          </div>
          <div className={styles.containerlist}>
        {menu.map((item, i) => {
          return (
          
            <ItemMenu
              key={i}
              name={item.name}
              price={item.price}
              image={item.image}
              description={item.description}
              updateOrder={updateOrder}
            />
          
          );
        })}
        </div>
        </section>
        <section className={styles.rightsection}>
          <h3>3. Verifica el pedido tomado:</h3>
          <br />
          <h4>Cliente: {cliente}</h4>
          <br />
          <Order
          neworder={neworder}
          eliminarDelPedido={eliminarDelPedido}
          />



          <br />
          <h4>Items: {neworder.length} - Total: ${total.toLocaleString()}</h4>
          <div className={styles.containerother}>
          <button
            className={`${styleButton.botonConTexto} ${reboteSave ? styleButton.rebote : ''}`}
            onClick={confirmOrder}
          >
          <img src={buttonSave} alt="Icono guardar" className={styleButton.icono} />
          <span className={styleButton.texto}>Guardar</span>
          </button>

          <button
            className={`${styleButton.botonConTexto} ${reboteClean ? styleButton.rebote : ''}`}
            onClick={removeOrder}
          >
          <img src={buttonDelete} alt="Icono eliminar" className={styleButton.icono} />
          <span className={styleButton.texto}>Eliminar</span>
          </button>
          </div>
        </section>
      </div>
      
    </div>
  );
};


