import './styles.css'
import { FiSearch } from 'react-icons/fi'
import { BsStarHalf, BsStarFill, BsStar } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

export const Products = ({ products, addToCart }) => {

    const navigate = useNavigate();

    const handleNavigate = (item) => {
        navigate(`/product/${item.id}`, { state: { product: item }})
    }

    return (
        <div className="products-wrapper">
            <div className="products-header">
                <div className='products-title'>SHOES</div>
                <div className='products-options'>
                    <div>
                        <FiSearch className='search-icon' />
                    </div>
                    <div>
                        <button>sort by</button>
                    </div>
                </div>
            </div>
            <div className="products-grid">
                {products && products.length > 0 ? (products?.map(product => (
                    <div className='product-card' key={product.id}>
                        <img src={product.image} alt={product.name} onClick={() => handleNavigate(product)}/>
                        <div className='product-info'>
                            <div onClick={() => handleNavigate(product)}>
                                {product.name}
                            </div>
                            <div>
                                <p>{"Rs. "}{product.price}{" /-"}</p>
                                <p>
                                    {[...new Array(Math.floor(product.rating))].map((_, idx) => (
                                        <BsStarFill className='rating-star' key={idx} />
                                    ))}
                                    {product.rating % 1 !== 0 && <BsStarHalf className='rating-star' />}
                                    {[...new Array(5 - Math.ceil(product.rating))]?.map((_, idx) => (
                                        <BsStar key={idx} className='rating-star' />
                                    ))}
                                </p>
                            </div>
                            <button 
                                className='btn-add-to-cart'
                                onClick={() => addToCart(product)}
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))) : (
                    <div>
                        <h1>No products found! </h1>
                    </div>
                )}
            </div>
        </div>
    )
}