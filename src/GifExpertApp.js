import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setcategories] = useState(['Naruto']);

    return (
    <>
        <h2 className='titu animate__animated animate__bounceInDown'>GifChipoCrack</h2>
        <AddCategory setcategories={ setcategories } />
        <hr />

        
        <ol>
            { 
                categories.map(category => (
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

