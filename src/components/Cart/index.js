import './styles.css';

import { BsCart2 } from 'react-icons/bs'
import { VscLocation } from 'react-icons/vsc'
import { CgCalendarDates } from 'react-icons/cg'



export const Cart = ({ cartData }) => {

    const { cartItems, handleDeleteFromCart } = cartData;

    const cartItemCard = (product) => {

        return (
            <div className='cartitemcard-container'>
                <div>
                    <img src={product.image} alt={product.name} />
                </div>
                <div className='cartitemcard-info'>
                    <h3>{product.name}</h3>
                    <p>Rs. {product.price} /-</p>
                </div>
                <p
                    className='cart-remove'
                    onClick={() => handleDeleteFromCart(product.id)}
                >
                    X
                </p>
            </div>
        )
    
    }

    return (
        <div className='cart-wrapper'>
            <div className="cart-header">
                <p>CART</p>
                <BsCart2  className='cart-icon'/>
            </div>
            <div className="cart-items">
                {cartItems.length > 0 ? (cartItems?.map((item, _) => (
                    <div key={item.id}>
                        {cartItemCard(item)}
                    </div>
                ))) : (
                    <div className='no-cart-items'>
                        <p>What's stopping you, designer?</p>
                    </div>
                )}
                
            </div>
            <div className="cart-footer">
                <div className="cart-date">
                    <div>
                        <VscLocation className='cart-location' />
                        <div>Home</div>
                    </div>
                    <div>
                        <CgCalendarDates className='cart-calendar' />
                        <div>Select date</div>
                    </div>
                </div>
                {cartItems.length > 0 && 
                <div className="cart-btn">
                    <button>
                        Order Now
                    </button>
                </div>}

            </div>
        </div>
    )
}
