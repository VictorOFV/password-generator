import { useState } from "react"
import usePasswordGenerator from "../../hooks/usePasswordGenerator"
import Button from "../Button"
import styles from "./styles.module.scss"
import Switch from "../Switch"

function PasswordGenerator() {
    const { password, generate } = usePasswordGenerator()
    const [copy, setCopy] = useState("Copiar")
    const [length, setLength] = useState(12)
    const [numbers, setNumbers] = useState(true)
    const [symbols, setSymbols] = useState(false)
    const [lowercase, setLowercase] = useState(true)
    const [uppercase, setUppercase] = useState(false)
    const [customLength, setCustomLength] = useState(false)

    function clipboard() {
        setCopy("Copiado")
        navigator.clipboard.writeText(password)
    }

    function handleButtonGenerate() {
        generate({ length, numbers, symbols, lowercase, uppercase })
        setCopy("Copiar")
    }

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Gerador de Senhas</h1>

            {customLength ? (
                <div className={styles.lengthContainer}>
                    <label htmlFor="range">Tamanho {length}</label>
                    <input type="range" id="range" value={length} min={4} max={99} onChange={(ev) => setLength(ev.target.value)} />
                </div>
            ) : null}
            
            <div className={styles.switchContainer}>
                <div className={styles.switch}>
                    <Switch onChange={() => setCustomLength((state) => state ? false : true)} checked={customLength} id="customLength" />
                    <label htmlFor="customLength">Personalizar</label>
                </div>
                <div className={styles.switch}>
                    <Switch onChange={() => setNumbers((state) => state ? false : true)} checked={numbers} id="numbers" />
                    <label htmlFor="numbers">Números</label>
                </div>
                <div className={styles.switch}>
                    <Switch onChange={() => setSymbols((state) => state ? false : true)} checked={symbols} id="symbols" />
                    <label htmlFor="symbols">Símbolos</label>
                </div>
                <div className={styles.switch}>
                    <Switch onChange={() => setLowercase((state) => state ? false : true)} checked={lowercase} id="lowercase" />
                    <label htmlFor="lowercase">Letras Minúsculas</label>
                </div>
                <div className={styles.switch}>
                    <Switch onChange={() => setUppercase((state) => state ? false : true)} checked={uppercase} id="uppercase" />
                    <label htmlFor="uppercase">Letras Maiúsculas</label>
                </div>
            </div>

            <div className={styles.buttonsContainer}>
                <Button event={handleButtonGenerate} title={"Gerar"} />
                <Button event={clipboard} title={copy} />
            </div>

            <div className={styles.passwordContainer}>
                <label>Senha:</label>
                <p className={styles.password}>{password}</p>
            </div>
        </div>
    )
}

export default PasswordGenerator