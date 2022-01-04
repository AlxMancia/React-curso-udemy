import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../03-examples/examples.css'

export const MultipleCustoHooks = () => {

    const {counter,increment} = useCounter(1);

    const {loading,data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const { author, quote } = !!data && data[0];

    console.log(quote);

    return (
        <>
            <h1>Breaking bad quotes</h1>
            <hr/>

            {
                loading ? (
                    <div className='alert alert-info text-center'>
                        Loading
                    </div>
                )
                : (
                    <blockquote className="blockquote text-end">
                        <p className='mb-10'>
                            {quote}
                        </p>
                        <footer className="blockquote-footer">{author}</footer>
                    </blockquote>
            )
            }   

            <button onClick={increment}>Siguiente quote</button>


        </>
    )
}
