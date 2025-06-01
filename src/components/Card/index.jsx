import styles from './Card.module.css';
import { FaHtml5, FaJsSquare, FaReact } from 'react-icons/fa';
import { IoLogoCss3 } from "react-icons/io5";
import { BsArrowRight } from "react-icons/bs";

function Card({ name, description, html_url }) {
    return(
        <section className={styles.card}>
            <h3>{ name }</h3>
            <p>{ description }</p>
            <div className={styles.card_footer}>
                <div className={styles.card_icones}>
                    {/* <FaHtml5 size={24} color='red'/> */}
                    <FaHtml5 />
                    <IoLogoCss3 />
                    <FaJsSquare />
                    <FaReact />
                    
                </div>
                <a href={html_url} target='_blank' rel='noopenner noreferrer' className={styles.card_button}>
                    <BsArrowRight />
                </a>
            </div>
        </section>
    )
}

export default Card;