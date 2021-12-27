import React, {useState} from 'react'

const Context = React.createContext()

export const UserContextProvider = ({children}) =>{
    const [user, setUser]=useState()

    const login = (objUser) => {
        setUser(objUser.username)
        window.localStorage.setItem('user',JSON.stringify(objUser))
    }

    const logout = () =>{
        setUser()
        window.localStorage.removeItem('user')
        console.log('hola')
    }

    return(
        <Context.Provider value={{user, login, logout}}>
            {children}
        </Context.Provider>
    )
}

export default Context