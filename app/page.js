import { Footer, HeroBanner, FooterBanner, Product } from '../components'
import React from 'react'
import './globals.css';
import { client } from '../lib/client'


async function getData() {
  const productQuery = '*[_type == "product"]'
  const products = await client.fetch(productQuery, { next: { revalidate: 20 } })
  const bannerQuery = '*[_type == "banner"]'
  const banner = await client.fetch(bannerQuery, { next: { revalidate: 20 } })
  return {products, banner}
}

const Home = async () => {
  const {products, banner } = await getData()
  return (
    <div>
      <HeroBanner heroBanner={banner.length && banner[0]}/>
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className="products-container">
        {products?.map((product) => <Product key={product._id} product={product}/>)}
      </div>
      <FooterBanner footerBanner={banner.length && banner[1]} />
    </div>
  )
}

// export const getServerSideProps = async () => {
  

//   return {
//     props: { products, banner }
//   }
// }
export default Home