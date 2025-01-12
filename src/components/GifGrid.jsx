/* eslint-disable react/prop-types */

import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({ category }) => {

  const { images, isLoading  } = useFetchGifs( category );

  // eslint-disable-next-line no-unused-vars
 
  
  return (
   <>
      <h3>{ category }</h3>
      {
        isLoading && ( <h2>Cargando...</h2> )
      }
      

      <div className="card-grid">
        {
          images.map( (image) => (
            <GifItem 
              key={ image.id } 
              { ...image }
            />
        ))
        }
      </div>


   </>
  )
}
