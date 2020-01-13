import React from 'react'

import ProductName from '../components/ProductName'
import ProductPrice from '../components/ProductPrice'

function ProductDetails() {
    return (
        <div style = {{backgroundColor: 'lightgrey', display:'flex', width:250, flexGrow: 1}}>
            <ProductName />
            <ProductPrice />
        </div>
    )
}

export default ProductDetails