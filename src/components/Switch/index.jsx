import styles from "./styles.module.scss"

function Switch(props) {
    return <input {...props} class={styles.toggle} type="checkbox" />
}

export default Switch