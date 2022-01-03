import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GiftExpertApp = () => {

    // const catgories = ['One punch','Samurai X','Dragon ball'];

    const [categories, setcategories] = useState(['Jujutsu kaisen']);

    // const handlerAdd = () =>{
    //     setcategories([...categories,'Jujutsu Kaisen']);
    //     // setcategories( catg => [...catg,'Jujutsu Kaisen']);
    // }

    return (
        <>
            <h2>GiftExpertApp</h2>
            <AddCategory setCategories={setcategories} />
            <hr/>

            

            <ol>
                { 
                    categories.map( category =>(
                        <GifGrid 
                            key={category}
                            category={category}
                        />
                    )) 
                }
            </ol>
        </>
    )
}
