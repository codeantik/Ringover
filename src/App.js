import './App.css';
import { Component } from 'react';
import { Routes, Route } from 'react-router-dom'
import { Contact, Header, Home, ProductDetail, Store, Team } from './components' 
import { toast } from 'react-toastify'


export default class App extends Component {


  state = {
    cartItems: [],
  }

  handleAddToCart = (item) => {

    const found = this.state.cartItems.find(cartItem => cartItem.id === item.id)
    if(found) {
      toast.info(`Item already in cart!`)
      return;
    }

    this.setState((prevState) => {
      return {
        cartItems: [
          ...prevState.cartItems,
          item
        ]
      }
    })
  }

  handleDeleteFromCart = (id) => {
    this.setState((prevState) => {
      return {
        cartItems: [
          ...prevState.cartItems.filter(item => item.id !== id)
        ]
      }
    })
  }


  render() {

    const { cartItems } = this.state;
    const { handleAddToCart, handleDeleteFromCart } = this;
    const cartData = {
      cartItems,
      handleAddToCart,
      handleDeleteFromCart
    }

    return (
      <div>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} /> 
          <Route path='/team' element={<Team />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/product/:id' element={<ProductDetail cartData={cartData} />} />
          <Route path='/store' element={<Store cartData={cartData}/>} />
        </Routes>
      </div>
    )
  }
}
