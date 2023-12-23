import styles from "./styles.module.scss"

function Button({ title, event, id }) {
    return <button id={id} onClick={event} className={styles.button}>{title}</button>
}

export default Button