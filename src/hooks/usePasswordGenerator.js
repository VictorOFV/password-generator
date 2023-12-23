import { useState } from "react"
import generator from "generate-password-browser"

function generatePassword({ length, numbers, symbols, lowercase, uppercase }) {

    try {
        const password = generator.generate({
            length,
            numbers,
            symbols,
            lowercase,
            uppercase,
            strict: true
        })
    
        return password

    } catch(e) {
        return "Selecione alguma opção!"
    }
}

function usePasswordGenerator() {
    const [password, setPassword] = useState("Gere sua Senha!")

    const generate = (generatorOptions) => {
        setPassword(generatePassword(generatorOptions))
    }

    return { password, generate }
}

export default usePasswordGenerator