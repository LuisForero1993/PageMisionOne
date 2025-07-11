import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";


export const NavBar = () => {

  return (
    <div>
        <nav className={styles.navbar}>
          <div className={styles.logo}>
          <Link to="/" className={styles.logoLink}>MiApp</Link>
          </div>
          <ul className={styles.navLinks}>
            <li><Link to="/nuevo-pedido">Nuevo Pedido</Link></li>
            <li><Link to="/pedidos">Pedidos</Link></li>
          </ul>
        </nav>
    </div>
  )
};
