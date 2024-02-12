'use client'

import React,  { useState, useEffect } from 'react'
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';
import { useStateContext } from '@/context';
import { runFireworks } from '../lib/utils';


const SuccessComponent = () => {

    const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
    // const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuanitity, onRemove } = useStateContext();
    // const testcont = useStateContext()
    // console.log("Context ", testcont)
    useEffect(() => {
        localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0);
        runFireworks();
      }, []);

  return (
    <div className="success">
        <p className="icon">
        <BsBagCheckFill />
        </p>
        <h2>Thank you for your order!</h2>
        <p className="email-msg">Since this is a demo product, email wont be sent by Stripe.</p>
        <p className="description">
        If you want to see my portfolio, please visit
        <a className="email" href="https://bpacheco.site" target="_blank">
            https://bpacheco.site
        </a>
        </p>
        <Link href="/">
        <button type="button" width="300px" className="btn">
            Continue Shopping
        </button>
        </Link>
    </div>
  )
}

export default SuccessComponent