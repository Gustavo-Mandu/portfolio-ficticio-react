import styles from './Contatos.module.css'
import { GoMail } from 'react-icons/go'
import { BsInstagram, BsYoutube, BsGithub, BsLinkedin } from 'react-icons/bs'

function Contatos() {
    return (
        <section className={styles.contatos}>
            <h2>Contatos</h2>
            <h3>Entre em contato</h3>
            <p>Para que possamos conversar mais sobre.</p>
            <div className={styles.icones}>

                <a href="mailto:exemplo@gmail.com" target="_blank" rel="noopener noreferrer">
                    <GoMail className={styles.icone} />
                </a>

                <a href="https://www.instagram.com/">
                    <BsInstagram className={styles.icone} />
                </a>

                <a href="https://www.youtube.com/">
                    <BsYoutube className={styles.icone} />
                </a>

                <a href="https://github.com/">
                    <BsGithub className={styles.icone} />
                </a>

                <a href="https://www.linkedin.com/">
                    <BsLinkedin className={styles.icone} />
                </a>
            </div>
        </section>
    )
}

export default Contatos