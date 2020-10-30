import React, { useState } from 'react'

export const useForm = (estadoInicial) => {
    const [state, setState] = useState(estadoInicial)

    const handleInputChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    return {
        state,
        setState,
        handleInputChange
    }
}
