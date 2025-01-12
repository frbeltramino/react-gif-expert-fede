
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch']);

  // eslint-disable-next-line no-unused-vars
  const onAddCategory = ( newCategory ) => {
    if ( categories.includes(newCategory) ) return
    setCategories( [  newCategory, ...categories ]);
    //categories.push(newCategory);
  }

  return (
    <>
      {/* { titulo} */}
      <h1>GifExpertApp</h1>

      {/* input */}
      <AddCategory 
        //setCategories = {setCategories}
        onNewCategory={ value => onAddCategory(value)}
      />

      {
        categories.map( (category) => 
          (
            <GifGrid 
            key={ category } 
            category={ category }  
          />
          )
        ) 
      }
       

    </>
  )
}

