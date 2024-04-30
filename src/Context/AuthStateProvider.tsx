"use client"

import { GLOBAL_STATE_TYPES, USER } from "@/constants"
import { createContext, useState } from "react"

interface AuthProps {
    children: React.ReactNode
}

const Initial_State = {
    isAuthenticated: false,
    user: null
}

export const Context = createContext<GLOBAL_STATE_TYPES>(Initial_State)


export default function AuthStateProvider({children}: AuthProps) {

    // Global States to be Provided fro All componets to Know the Current State of The User
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true)
    const [user, setUser] = useState<USER | null>({
        email: "Markus6@gmail.com",
        username: "markus2435",
        firstName: "Markus",
        lastName: "Paul",
        referalId: "425113551",
        city: "Lagos",
        country: "Nigeria"
    })

    return (
        <Context.Provider value={{
            isAuthenticated,
            user
        }}>
            {children}
        </Context.Provider>
    )
}
