import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {

    const {setuser} = useContext(UserContext);

    


    return (
        <>
            <h1>Login Screen</h1>
            <hr/>

            <button
                className='btn btn-primary'
                onClick={()=>setuser({
                    id:123,
                    name:'Alexis',
                    email:'alx.mancia@gmail.com'
                })}
            >
                Agregar
            </button>
        </>
    )
}
