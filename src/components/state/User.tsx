import { useState } from "react"

type AuthUser = {
    name: string
    email: string
}

export const User = () => {
    const [user, setUser] = useState<null | AuthUser>({} as AuthUser)
    const handleLogin = () => {
        setUser({
            name: 'prakash', 
            email: 'prakash@gmail.com',
        })
    }
    
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <div> User name is {user?.name} </div>
            <div> User email is {user?.email} </div>
        </div>
    )
}