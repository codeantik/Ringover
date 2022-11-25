import './styles.css';
import { useState } from 'react';

export const Filter = ({ products, setProductShoes }) => {

    const [filters, setFilters] = useState({
        cost: '',
        type: '',
        color: '',
        rating: '0',
    })


    const handleResetFilter = () => {
        setFilters({
            color: '',
            cost: '',
            rating: '0',
            type: ''
        })
    }
    

    const handleFilter = (e) => {
        setFilters(prevFilter => ({
            ...prevFilter,
            [e.target.name]: e.target.value
        }))
    }

    const handleColor = (choosenColor)  => {
        setFilters(prevFilter => ({
            ...prevFilter,
            color: choosenColor
        }))
    }

    const handleSubmitFilter = () => {
        setProductShoes(prevProductShoes => {
            let data = [...products]
            console.log(data)
            data = filters.type.length ? data?.filter(product => product.type === filters.type) : data
            data = filters.color.length ? data?.filter(product => product.color === filters.color) : data
            data = filters.rating !== '0' ? data?.filter(product => product.rating >= parseInt(filters.rating)) : data
            if(filters.cost === '100-500') {
                data = data?.filter(product => product.price >= 100 && product.price <= 500)
            }
            else if(filters.cost === '501-1000') {
                data = data?.filter(product => product.price >= 501 && product.price <= 1000)
            }
            else if(filters.cost === '1001+') {
                console.log(data)
                data = data?.filter(product => product.price >= 1001);
            }

            return data;
        })
        // handleResetFilter()
    }

    const handleClearFilter = () => {
        setProductShoes(products)
        handleResetFilter()
    }

    // console.log(filters)


    return (
        <div className='filter-wrapper'>
            <div className="filter-header">
                <p>FILTERS</p>
                <button onClick={handleClearFilter}>
                    CLEAR
                </button>
            </div>
            <div className='filter-cost'>
                <div>
                    <p>Cost</p>
                </div>
                <label>
                    <input
                        type="radio"
                        name="cost"
                        value="100-500"
                        checked={filters.cost === '100-500'}
                        onChange={handleFilter}
                    />
                     Rs. 100 - 500
                </label>
                <label>
                    <input
                        type="radio"
                        name="cost"
                        value="501-1000"
                        checked={filters.cost === '501-1000'}
                        onChange={handleFilter}
                    />
                    Rs. 501 - 1000
                </label>
                <label>
                    <input
                        type="radio"
                        name="cost"
                        value="1001+"
                        checked={filters.cost === '1001+'}
                        onChange={handleFilter}
                    />
                    Rs. 1001+
                </label>
            </div>
            <div className="filter-color">
                <div>
                    <p>Colour</p>
                </div>
                <div className="filter-color-wrapper">
                    <div className='white' onClick={() => handleColor('white')}>

                    </div>
                    <div className='black' onClick={() => handleColor('black')}>

                    </div>
                    <div className='red' onClick={() => handleColor('red')}>

                    </div>
                    <div className='other' onClick={() => handleColor('other')}>
                        <img
                            src="https://res.cloudinary.com/dhqxln7zi/image/upload/v1661613650/pp_ivrmpm.jpg"
                            alt='other'
                        />
                    </div>
                </div>
            </div>
            <div className="filter-type">
                <div>
                    <p>Type</p>
                </div>
                <label
                >
                    <input
                        type="radio"
                        className="input-checkbox"
                        name="type"
                        value='loafers'
                        checked={filters.type === 'loafers'}
                        onChange={handleFilter}
                    />
                    <span>Loafers</span>
                </label>
                <label
                >
                    <input
                        type="radio"
                        className="input-checkbox"
                        name="type"
                        value='sneakers-low'
                        checked={filters.type === 'sneakers-low'}
                        onChange={handleFilter}
                    />
                    <span>Sneakers-low</span>
                </label>
                <label
                >
                    <input
                        type="radio"
                        className="input-checkbox"
                        name="type"
                        value='sneakers-mid'
                        checked={filters.type === 'sneakers-mid'}
                        onChange={handleFilter}
                    />
                    <span>Sneakers-mid</span>
                </label>
            </div>
            <div className="filter-rating">
                <div>
                    <p>Rating</p>
                </div>
                <div className='rating-range'>
                    <div>1</div>
                    <input 
                        type='range'
                        min='1'
                        max='5'
                        value={filters.rating}
                        name='rating'
                        onChange={handleFilter}
                    />
                    <div>5</div>
                </div>
            </div> 
            <div className='btn-filter'>
                <button className='btn-filter-apply' onClick={handleSubmitFilter}>
                    Apply
                </button> 
            </div>  
        </div>
    )
}