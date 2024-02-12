'use client'

import React, { useEffect } from 'react'
import Link from 'next/link'
import { urlFor } from '@/lib/client'
import { useStateContext } from '@/context'

const Product = ({product: {image, name, slug, price}, resetQty}) => {
  return (
    <div>
      <Link
        href={`/product/${slug.current}`}
      > 
        <div className="product-card" onClick={resetQty}>
          <img src={urlFor(image && image[0])} alt="item" width={250} height={250} object-fit="contain" className="product-image"/>
          <p className="product-name">{name}</p>
          <p className="product-price">₱{price}</p>
        </div>
      </Link>
    </div>
  )
}

export default Product