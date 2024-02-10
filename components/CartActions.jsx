'use client'
import React from 'react'
import { useStateContext } from '@/context'

const CartActions = ({product, qty}) => {
    const { onAdd } = useStateContext()
  return (
    <div>
        <div className="buttons">
            <button
                type="button"
                className="add-to-cart"
                onClick={() => onAdd(product, qty)}
            >
                Add to Cart
            </button>
            <button
                type="button"
                className="buy-now"
            >
                Buy Now
            </button>
        </div>
    </div>
  )
}

export default CartActions