'use client'

import React from 'react'
import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai'
import { useStateContext } from "@/context";

const Navbar = () => {

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/"><img src="/shopz-light.jpg" alt="" height={70} width={70}/></Link>
      </p>
      <button
        type="button"
        className="cart-icon"
        onClick=""
      >
        <AiOutlineShopping />
        <span className="cart-item-qty">1</span>
      </button>
    </div>
  )
}

export default Navbar