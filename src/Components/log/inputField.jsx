import styles from '../log/inputField.module.css'

const InputField = ({title, type, placeholder,icon}) => {
    return (
        <section className={styles.fieldcontainer}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.inputcontainer}>
                <input className={styles.field}
                    type={type}
                    placeholder={placeholder}
                />
                <img className={styles.icon} src={icon} />
            </div>
        </section>
    )
}

export default InputField