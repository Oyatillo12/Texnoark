import React, { createContext, useState } from "react";
type ContextType = {
    accessToken: string | null,
    setAccessToken:React.Dispatch<React.SetStateAction<string | null>>,
}

export const Context = createContext<ContextType>({
    accessToken: "",
    setAccessToken: () => {},
})


export const AuthContext  = ({children}:{children:React.ReactNode}) => {
    const [accessToken,setAccessToken] = useState<string | null>(localStorage.getItem('access_token') || null);
    return (
        <Context.Provider value={{accessToken,setAccessToken}}>
            {children}
        </Context.Provider>
    )
}