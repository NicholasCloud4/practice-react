import React from 'react'
import ItemDescriptions from './ItemDescriptions'

function Product({ name, description, price }) {
    return (
        <div>
            <h1>{name}</h1>
            <ItemDescriptions description={description} price={price} />
        </div>
    )
}

export default Product
