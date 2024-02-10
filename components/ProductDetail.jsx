import { useStateContext } from '@/context'
import React from 'react'
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai'

const ProductDetail = ({product}) => {
    const { image, name, details, price } = product
    const { qty, incQty, decQty,} = useStateContext()
    // const cont = useStateContext()
    // console.log("Product Detail: ", qty)
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
                    onClick=""
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