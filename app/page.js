import { Footer, HeroBanner, FooterBanner, Product, Navbar, Products } from '../components'
import React from 'react'
import './globals.css';
import { client } from '../lib/client'


async function getData() {
  const bannerQuery = '*[_type == "banner"]'
  const banner = await client.fetch(bannerQuery, { next: { revalidate: 20 } })
  return {banner}
}

const Home = async () => {
  const { banner } = await getData()
  return (
    <div className="main-container">
      <Navbar />
      <HeroBanner heroBanner={banner.length && banner[0]}/>
      <Products />
      <FooterBanner footerBanner={banner.length && banner[1]} />
      <Footer />
    </div>
  )
}

// export const getServerSideProps = async () => {
  

//   return {
//     props: { products, banner }
//   }
// }
export default Home