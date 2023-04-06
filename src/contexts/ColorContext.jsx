import React, { createContext, useState } from 'react'

export const ColorsContext = createContext()

export const ColorsProvider = ({ children }) => {
    const [color, setColor] = useState('silver')

    return (
        <ColorsContext.Provider value={{ color, setColor }}>
            { children }
        </ColorsContext.Provider>
    )
}