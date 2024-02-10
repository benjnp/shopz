'use client'

import { useStateContext } from '@/context'
import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { save } from '@/lib/storage'

const ProductDetail = ({product}) => {
    const { image, name, details, price } = product
    const { onAdd} = useStateContext()
    const [ qty, setQty ] = useState(1)

    const incQty = () => {
        setQty((prevQty) => prevQty + 1);
      }
    
      const decQty = () => {
        setQty((prevQty) => {
          if(prevQty - 1 < 1) return 1;
         
          return prevQty - 1;
        });
      }
    // if (typeof window !== 'undefined') {
    //     // Perform localStorage action
    //     const quant = localStorage.getItem("qty")
    //     console.log(quant)
    //   }
    
  
    
  return (
    <div>
        <div className="product-detail-desc">
            <h1>{name}</h1>
            <div className="reviews">
                <div>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                </div>
                <p>(20)</p>
            </div>
            <h4>Details: </h4>
            <p>{details}</p>
            <p className="price">₱{price}</p>
            <div className="quantity">
                <h3>Quantity: </h3>
                <p className="quantity-desc">
                    <span className="minus" onClick={decQty}><AiOutlineMinus /></span>
                    <span className="num">{qty}</span>
                    <span className="plus" onClick={incQty}><AiOutlinePlus /></span>
                </p>
            </div>
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
                    onClick=""
                >
                    Buy Now
                </button>
            </div>
        </div>
    </div>
  )
}

export default ProductDetail