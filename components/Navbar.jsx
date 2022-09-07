import React from 'react'
import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai';

import { Cart } from './'
import { useStateContext } from '../context/StateContext';

const Navbar = () => {

  const {showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className='navbar-container'>
      <p className='logo'>
        <Link href="/">KL Headphones</Link>
      </p>

      <button type='button' className='cart-icon' onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {/* when showCart is true only show the Cart Component */}
      {showCart && <Cart/>}
    </div>
  )
}

export default Navbar