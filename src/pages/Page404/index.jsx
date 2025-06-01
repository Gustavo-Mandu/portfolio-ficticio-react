import styles from './Page404.module.css';

function Paga404() {
    return (
        <>
            <h2 className={styles.titulo2}>Algo de errado não está certo!</h2>
            <div className={styles.textos}>
                <span className={styles.texto_grande}>404</span> <br />
                <strong className={styles.texto_vermelho}>Página Não Localizada!</strong>
                <h2>Clique em algum link da navegação para explorar o site, caso tenha acessado pelo GitHub Pages.</h2>
            </div>
        </>
    )
}

export default Paga404;