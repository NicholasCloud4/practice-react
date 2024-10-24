import React from 'react'

function ItemDescriptions({ description, price }) {
    return (
        <>
            <h2>{description}</h2>
            <h3>${price}</h3>
        </>
    )
}

export default ItemDescriptions