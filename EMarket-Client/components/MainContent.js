import React, {Component} from 'react';

import Product from '../components/Product'

class MainContent extends Component {
    render () {
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
}

export default MainContent