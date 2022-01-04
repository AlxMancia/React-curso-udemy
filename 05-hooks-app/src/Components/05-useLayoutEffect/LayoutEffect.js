import React, { useLayoutEffect, useRef, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './layout.css'


export const LayoutEffect = () => {

    const {counter,increment} = useCounter(1);
    const {data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const pTag = useRef();
    const [boxSize, setboxSize] = useState();

    const { quote } = !!data && data[0];
    // console.log(quote);

    useLayoutEffect(() => {
    
        setboxSize(pTag.current.getBoundingClientRect());
       
    }, [quote])

    return (
        <>
            <h1>Layout Effects</h1>
            <hr/>
    
            <blockquote className="blockquote text-end">
                <p 
                    className='mb-10'
                    ref={pTag}
                >
                    {quote}
                </p>
            </blockquote>

            <button onClick={increment}>Siguiente quote</button>

            <pre>
                { JSON.stringify(boxSize,null,3)}
            </pre>


        </>
    )
}
