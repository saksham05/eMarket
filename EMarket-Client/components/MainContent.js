import React from 'react';

import Product from '../components/Product'

function MainContent() {
    return (
        <main style={{display:'flex', flexWrap:'wrap', justifyContent: 'space-between'}}>
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
        </main>
    )
}

export default MainContent