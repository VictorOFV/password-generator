import { useState } from "react"
import generator from "generate-password-browser"

function generatePassword({ length, numbers, symbols, lowercase, uppercase }) {
    const password = generator.generate({
        length,
        numbers,
        symbols,
        lowercase,
        uppercase,
        strict: true
    })

    return password
}

function usePasswordGenerator() {
    const [password, setPassword] = useState("")

    const generate = (generatorOptions) => {
        setPassword(generatePassword(generatorOptions))
    }

    return { password, generate }
}

export default usePasswordGenerator