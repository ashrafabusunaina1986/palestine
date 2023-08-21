'use client'

import react, { createContext } from "react"

import { useState } from "react"

export const DataContext=createContext()


 const  DataProvider=({children})=>{
    const [info,setInfo]=useState([])

    return <DataContext.Provider value={{info,setInfo}}>
        {children}
    </DataContext.Provider>
}
export default DataProvider