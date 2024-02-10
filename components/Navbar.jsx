'use client'

import React, { useEffect } from 'react'
import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai'
import { useStateContext } from "@/context";

const Navbar = () => {
  const { totalQuantities, setTotalQuantities } = useStateContext()
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Perform localStorage action
      const qty = localStorage.getItem('qty') 
      setTotalQuantities(parseInt(qty))
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
      >
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>
    </div>
  )
}

export default Navbar