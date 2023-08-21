'use client'
import React from "react";
import { useState } from "react";

export const ToggleContext = React.createContext()

export const ToggleProvider = ({ children }) => {
    const [mode, setMode] = useState("dark")

    const toggle = () => {
        setMode(prev => prev === "dark" ? "light" : "dark")
    }

    return <ToggleContext.Provider value={{ toggle,mode }}>
        <div className={`theme ${mode}`}>{children}</div>
    </ToggleContext.Provider>
}