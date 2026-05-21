import styles from './notFound.module.css'


const NotFound = () => {
    return (
        <article className={`${styles.contents} mainpanel`}>
            <div className={styles.innerContent}>
                <h1 className={styles.notFoundTitle}>404</h1>
                <h2 className={styles.notFoundText}>página não encontrada :(</h2>
            </div>
        </article>
    )
}

export default NotFound