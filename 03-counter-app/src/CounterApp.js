//rafcp functional component con proptype

import React, { useState } from 'react';
import PropTypes from 'prop-types';


const CounterApp = ( {value=10} ) => {

    const [ counter, setCounter ] = useState(value);

    //HandleAdd
    const handleAdd = (e) => {
        setCounter(counter + 1);
        // setCounter( (c) => c + 1 );
    }
    
    const handleReset = (e) =>{
        setCounter(value)
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>

            <button onClick={ handleAdd } > +1 </button>
            <button onClick={ () => setCounter(value) } > Reset </button>
            <button onClick={ () => setCounter(counter - 1) } > -1 </button>
        </>
    );
}

CounterApp.propTypes = {
    value : PropTypes.number    
}


export default CounterApp;