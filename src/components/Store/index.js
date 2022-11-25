import './styles.css';
import { Products } from './Products';
import { Filter } from './Filter';
import { Cart } from '../Cart';
import { products } from '../../data';
import { useState } from 'react';


export const Store = ({ cartData }) => {

    const { handleAddToCart } = cartData;
    const [productShoes, setProductShoes] = useState([...products]);

    // console.log('productShoes', productShoes)

    return (
        <div className='store-container'>

            {/* filter */}

            <div className="filter-container">
                <Filter products={products} setProductShoes={setProductShoes}/>
            </div>

            {/* products */}
            <div className="products-container">
                <Products products={productShoes} addToCart={handleAddToCart}/>
            </div> 

            {/* cart */}

            <div className="cart-container">
                <Cart cartData={cartData}/>
            </div>
        </div>
    )
}