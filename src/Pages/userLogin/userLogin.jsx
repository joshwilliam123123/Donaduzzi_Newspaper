import styles from './userLogin.module.css'
import { useState } from 'react'

const UserLogin = () => {
    const [msg, setmsg] = useState("Olá")
    return (
        <article className={`${styles.contents} mainpanel`}>
            <div className={styles.innerContent}>
                <section className={styles.separationSection}>
                    <h1 className={styles.msg}>{msg}!</h1>
                    <h3 className={styles.textDescription}>bem vindo ao jornal donaduzzi</h3>
                </section>
                <section className={styles.separationSection}>
                    <h2 className={styles.title}>email</h2>
                    <input className={styles.field}
                        type="text"
                        placeholder="---"
                    />
                     <h2 className={styles.title}>senha</h2>
                    <input className={styles.field}
                        type="password"
                        placeholder="---"
                    />
                </section>
            </div>
        </article>
    )
}

export default UserLogin