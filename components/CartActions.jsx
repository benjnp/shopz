'use client'
import React from 'react'
import { useStateContext } from '@/context'

const CartActions = ({product, qty}) => {
    const { onAdd, setShowCart } = useStateContext()

    const handleBuyNow = () => {
        onAdd(product, qty)
        setShowCart(true)
    }
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
                onClick={handleBuyNow}
            >
                Buy Now
            </button>
        </div>
    </div>
  )
}

export default CartActions