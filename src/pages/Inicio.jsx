
import styles from "./Inicio.module.css"
export const Inicio = () => {

  
  return (
<div className={styles.container}>
      <header className={styles.hero}>
        <h1>Bienvenido a Rápido & Sabroso</h1>
        <p>¡Las mejores hamburguesas, papas y más, listas en minutos!</p>
        <a href="#menu" className={styles.cta}>Ver Menú</a>
      </header>

      <section id="menu" className={styles.menuSection}>
        <h2>Menú Destacado</h2>
        <div className={styles.menuGrid}>
          <div className={styles.menuItem}>
            <img src="https://i.pravatar.cc/150" alt="Hamburguesa Clásica" />
            <h3>Hamburguesa Clásica</h3>
            <p>Pan brioche con ajonjoli, carne de res, queso mozarella, papas fosforo y salsas en envoltura de papel antigraso.</p>
          </div>
          <div className={styles.menuItem}>
            <img src="https://i.pravatar.cc/150" alt="Papas con Queso" />
            <h3>Papas con Queso</h3>
            <p>Crujientes papas bañadas en queso cheddar, reparadas con la receta tradicional, para una experiencia auténtica.</p>
          </div>
          <div className={styles.menuItem}>
            <img src="https://i.pravatar.cc/150" alt="Combo Familiar" />
            <h3>Aros de Cebolla</h3>
            <p>Estos Aros de Cebolla son redondos, están sabrosos, crujientes y dorados, solos o acompañados de una de tus salsas favoritas.</p>
          </div>
        </div>
      </section>
    </div>

  )
};
