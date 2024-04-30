'use client'

import { useContext } from "react"
import {Context} from "./AuthStateProvider"


export default function useAuth(){
    const context = useContext(Context)
    if(!context) throw new Error("context is used out of it's provider")
    return context
}