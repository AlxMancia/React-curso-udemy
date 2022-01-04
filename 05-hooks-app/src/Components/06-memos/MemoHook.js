import React, { useMemo, useState } from 'react'
import { procesoPesado } from '../../helpers/procesoPesado';
import { useCounter } from '../../hooks/useCounter'
import '../03-examples/examples.css'


export const MemoHook = () => {

    const {counter, increment} = useCounter(5000);
    const [show, setshow] = useState(true)


    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

    return (
        <>
            <h1>Memo hook</h1>
            <h3>Counter:  <small>{counter}</small> </h3>
            <hr/>

            <p>{memoProcesoPesado}</p>

            <button 
                className='btn btn-primary'
                onClick={increment}
            >
                +1
            </button>

            <button
                className='btn btn-outline-primary'
                onClick={()=>{setshow(!show)}}
            >
                Hide/Show:  {JSON.stringify(show)}
            </button> 
        </>
    )
}
