import styles from './Sobre.module.css'
import avatar from './images/avatarFundoTransparente.png'
import html from './images/icon-html.svg'
import css from './images/icon-css.svg'
import js from './images/icon-js.svg'
import react from './images/icon-react.svg'
import node from './images/icon-node.svg'
import sql from './images/icon-sql.svg'

function Sobre() {
    return (
        <section className={styles.sobre}>


            <div className={styles.bio}>
                <figure className={styles.retratoImagem}>
                    <img src={avatar} alt="avatar" className={styles.avatar} />
                </figure>
                <div className={styles.bioTexto}>
                    <h2>Sobre</h2>
                    <p>Sou <span>Gustavo Mandu</span> <br />
                        <strong>Dev Full Stack</strong></p>
                    <p>Estudo desenvolvimento Web desde 2021</p>
                    <p>Sou apaixonado por transformar ideias em realidade digital.</p>
                    <p>Especializado em criação de aplicações dinâmicas e intuitivas, <br />com foco na experiência do usuário.</p>
                </div>
            </div>


            <div className={styles.techs}>
                <h3>Techs</h3>
                <div className={styles.icones}>
                    <img src={html} alt="HTML" />
                    <img src={css} alt="CSS" />
                    <img src={js} alt="JavaScript" />
                    <img src={react} alt="React" />
                    <img src={node} alt="Node.js" />
                    <img src={sql} alt="SQL" />
                </div>
            </div>
        </section>
    )
}

export default Sobre