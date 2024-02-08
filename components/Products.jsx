import React from 'react'
import "../app/globals.css"
import { getAllProducts } from '@/utils'
import { Product } from '.'

// export async function getProducrt() {
//     // Instead of fetching your `/api` route you can call the same
//     // function directly in `getStaticProps`
//     console.log("Fetching from getStaticProps")
//     const products = await getAllProducts()
//     return { props: { products }, revalidate: 10 }
//   }

const Products = async () => {
    const products = await getAllProducts()
  return (
    <div>
        <div className="products-heading">
            <h2>Best Selling Products</h2>
            <p>Speakers of many variations</p>
        </div>
        <div className="products-container">
            {products?.map((product) => <Product key={product._id} product={product}/>)}
        </div>
    </div>
  )
}

export default Products