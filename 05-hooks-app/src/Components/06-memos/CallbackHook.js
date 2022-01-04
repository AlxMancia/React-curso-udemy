import React, { useCallback, useState } from 'react'
import '../03-examples/examples.css'
import { ShowIncrement } from './ShowIncrement';


export const CallbackHook = () => {

    const [counter, setcounter] = useState(10);

    // const increment = () =>{
    //     setcounter(counter+1);
    // }

    const increment = useCallback( (num) => {
            setcounter(c => c + num);
        },[setcounter]
    )

    return (
        <>
            <h1>useCallback hook</h1>
            <h3>{counter}</h3>
            <hr/>

            <ShowIncrement increment={increment}/>
        </>
    )
}
