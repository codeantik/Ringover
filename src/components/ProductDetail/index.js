import './styles.css';
import { useEffect, useState } from 'react';
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import { BsStar, BsStarHalf, BsStarFill } from 'react-icons/bs'
import { Cart } from '../Cart';
import { useLocation, useNavigate } from 'react-router-dom';

export const ProductDetail = ({ cartData }) => {

    const { handleAddToCart } = cartData;
    const navigate = useNavigate()
    const location = useLocation()
    const [product, setProduct] = useState({})


    const handleBackNavigate = () => {
        navigate(-1)
    }

    useEffect(() => {
        console.log(location)
        setProduct(location.state.product)
        /* eslint-disable react-hooks/exhaustive-deps */
    }, [])

    return (
        <div className='productdetail-container'>
            <div className="productdetail-design-container">
                <MdOutlineArrowBackIosNew className='back-icon' onClick={handleBackNavigate}/>
                <div className="design-wrapper">
                    <div className='header'>
                        Your Design Space
                    </div>
                    {product !== null && typeof product === 'object' ? 
                    (
                    <div className='design-main'>
                        <div className="design-main-img">
                            <img src={product?.image} alt={product?.name}  />
                            <div className='rate-product'>
                                <div>
                                    Rate product
                                </div>
                                <div>
                                    {/* {[...new Array(5).map((_, idx) => (
                                        <BsStar key={idx} className="design-rating-star" />
                                    ))]} */}
                                    <BsStar className="mark-rating-star" />
                                    <BsStar className="mark-rating-star" />
                                    <BsStar className="mark-rating-star" />
                                    <BsStar className="mark-rating-star" />
                                    <BsStar className="mark-rating-star" />
                                </div>
                            </div>
                        </div>
                        <div className="design-main-content">
                            <h5>{product?.name}</h5>
                            <h3>Rs. {product?.price} /-</h3>
                            <p>{product?.description}</p>
                            <p>
                                {[...new Array(Math.floor(product?.rating) || 0)].map((_, idx) => (
                                    <BsStarFill key={idx} className='design-rating-star' />
                                ))}
                                {product?.rating % 1 !== 0 && <BsStarHalf className='design-rating-star' />}
                                {[...new Array(5 - (Math.ceil(product?.rating) || 0))]?.map((_, idx) => (
                                    <BsStar key={idx} className='design-rating-star' />
                                ))}
                            </p>
                            <p>{Math.floor(Math.random() * 501)} Reviews</p>
                        </div>
                    </div>
                    ) : 
                        <div>Loading...</div>
                    }
                    <div className="design-footer">
                        <button>
                            Share Design
                        </button>
                        <button onClick={() => handleAddToCart(product)}>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
            <div className="productdetail-cart-container">
                <Cart cartData={cartData} />
            </div>
        </div>
    )
}