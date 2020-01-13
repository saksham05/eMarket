import React from 'react'

import ProductImage from '../components/ProductImage'
import ProductDetails from '../components/ProductDetails'

function Product() {
    return (
        <div style={{padding:10, flexGrow: 1}}>
            <ProductImage />
            <ProductDetails />
        </div>
    )
}

export default Product