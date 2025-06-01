import { Link } from "react-router-dom";
import styles from './Home.module.css';
import imgHome from '/developer-red.svg'

function Home() {
  return (
    <section className={styles.home}>
      <div className={styles.apresentacao}>
        <p>
          Olá, sou <br />
          <span>Gustavo Mandu</span> <br />
          Dev Full Stack
        </p>
        <Link to="/sobre" className={`${styles.btn} ${styles.btn_red}`}>
          Saiba mais sobre mim
        </Link>
      </div>
      <figure>
        <img className={styles.img_home} src={imgHome} alt="Imagem de Home" />
      </figure>
    </section>
  )
}

export default Home