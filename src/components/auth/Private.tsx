import React from 'react';
import { Login } from "./Login";
import { ProfileProps } from "./Profile";

type PrivateProps = {
    isLoggedIn: boolean
    // if the prop accepts another prop ad it in <...>
    component: React.ComponentType<ProfileProps>
}

export const Private = ({ isLoggedIn, component: Component }: PrivateProps) => {
    if(isLoggedIn) {
        return <Component name="Prakash"/>
    }else {
        return <Login />
    }
}