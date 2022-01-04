import React, { useState } from 'react';
import '../02-useEffect/effects.css'
import { MultipleCustoHooks } from '../03-examples/MultipleCustoHooks';

export const RealExampleRef = () => {

    const [show, setshow] = useState(false);

    return (
        <>
            <h1>Real Example Ref</h1>
            <hr/>

            { show  && <MultipleCustoHooks/>}

            <button
                onClick={()=>{setshow(!show)}}
            >
                Toggle
            </button>
        </>
    )
}
