import React, { useState, useId } from 'react';
import { useFilters } from '../hooks/useFilters';
import './Products.css'
export function Filters () {
    const { filters, setFilters} = useFilters()
    
    const [minPrice, setMinPrice] = useState(0);
    const minPriceFilterId = useId()// useId: Esto nos genera un Id unico para price
    const categoryFilterId = useId()

    console.log({
        minPriceFilterId,
        categoryFilterId
    })
    const [category, setCategory] = useState('all');
    const handleChangeMinPrice = (event) => {       
       //setMinPrice(event.target.value)
       setFilters(prevState => ({
        ...prevState,
        minPrice: event.target.value
       })

       )
      };

    const handleChangeCategory = (event) => {
        setFilters(prevState => ({
            ...prevState,
            category: event.target.value
          }
      )

      )
    }
    
    return (
        <section className='filters'>
            <div>
                <label htmlFor="price">Price a partir de </label>
                <input
                    type="range" 
                    id="minPriceFilterId" 
                    min='0' 
                    max='1000' 
                    onChange={handleChangeMinPrice}
                    value={filters.minPrice}
                    >
                </input>
                <span>${filters.minPrice}</span>
            </div>
            <div>
                <label htmlFor="catecategoryFilterId">Category</label>
                <select id='categoryFilterId' onChange={handleChangeCategory}>
                    <option value='all'>Todas</option>
                    <option value='laptops'>Portatiles</option>
                    <option value='smartphones'>Telefonos móviles</option>
                    <option value='groceries'>Comestibles</option>
                    <option value='beauty'>Belleza</option>

                </select>
            </div>

        </section>
    )
}