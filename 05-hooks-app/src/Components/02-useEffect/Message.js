import React, { useEffect, useState } from 'react'
import './effects.css'

export const Message = () => {

    const [coors, setcoors] = useState({
        x:0,
        y:0
    })

    const {x,y} = coors;

    useEffect(() => {
    
        const mouseMove = (e) =>{
            const coors = {x:e.x,y:e.y};
            setcoors(coors)
            // console.log(coors)
        }

        window.addEventListener('mousemove',mouseMove);


        return () => {
            window.removeEventListener('mousemove',mouseMove);
        }
    }, [])

    return (
        <>
            <h1>MessageApp</h1>
            <hr/>
            <div>{x} {y}</div>
        </>
    )
}
