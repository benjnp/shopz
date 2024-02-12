'use client'

import React, { useEffect } from 'react'
import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai'
import { useStateContext } from "@/context";
import { Cart } from '.';
import { TemplateContext } from 'next/dist/shared/lib/app-router-context.shared-runtime';

const Navbar = () => {
  const { totalQuantities, setTotalQuantities, showCart, setShowCart, setCartItems, setTotalPrice } = useStateContext()
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Perform localStorage action
      let qty = localStorage.getItem('qty') 
      if(qty == null)
        qty = 0
      else
        setTotalQuantities(parseInt(qty))
      let tempCartStorage = localStorage.getItem('cart')
      let tempCart
      if( tempCartStorage != null && tempCartStorage != '') {
        tempCart = JSON.parse(localStorage.getItem('cart'));
        setCartItems(tempCart)
      }
      else
        tempCart = []
      // if(tempCart !== null) {
      //   setCartItems(tempCart)
      // }
      let tempPrice = localStorage.getItem('totalPrice') 
      if(tempPrice !== null) 
        setTotalPrice(parseInt(tempPrice))
      
      
    }
  }, [])
  

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/"><img src="/shopz-light.jpg" alt="" height={70} width={70}></img></Link>
      </p>
      <button
        type="button"
        className="cart-icon"
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>
      {showCart && <Cart />}
    </div>
  )
}

export default Navbar