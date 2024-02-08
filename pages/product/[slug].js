import React, { useState } from 'react'
import { Layout, Product } from '@/components'
import { client, urlFor } from '@/lib/client'
import { getAllProducts } from '@/utils'
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai'

// import "../../app/globals.css"


export async function getStaticPaths() {
    const query = `*[_type == "product"] {
        slug {
            current
        }
    }`;

    const products = await client.fetch(query);
    const paths = products.map((product) => ({
        params: {
            slug: product.slug.current
        }
    }))

    return {
        paths,
        fallback: 'blocking'
    }
}
 
export async function getStaticProps({params: {slug}}) {
    // console.log("Params ", slug)
    const products = await getAllProducts()
    const productQuery = `*[_type == "product" && slug.current == '${slug}'][0]`
    const product = await client.fetch(productQuery, { next: { revalidate: 20 } })
    return { 
        props: 
            { 
                product: product, 
                allProducts: products 
            } 
        }
}
 


const ProductDetails = ({product, allProducts}) => {
    const { image, name, details, price } = product
    const [ index, setIndex ] = useState(0)

    return (
        <Layout>
            <div>
                <div className="product-detail-container">
                    <div>
                        <div className="image-container">
                            {image && <img src={urlFor(image && image[index])} alt="item" className="product-detail-image"/>}
                        </div>
                        <div className="small-images-container">
                            {image?.map((item, i) => (
                                <img 
                                    src={urlFor(item)}
                                    width={120} 
                                    height={120}
                                    className={i === index ? 'small-image selected-image': 'small-image'}
                                    object-fit="contain"
                                    onMouseEnter={() => setIndex(i)}
                                >
                                </img>
                            ))}
                        </div>
                    </div>
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
                                <span className="minus"><AiOutlineMinus /></span>
                                <span className="num">1</span>
                                <span className="plus"><AiOutlinePlus /></span>
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
                <div className="maylike-products-wrapper">
                    <h2>You may also like</h2>
                    <div className="marquee">
                        <div className="maylike-products-container track">
                            {allProducts.map((product) => (
                                <Product key={product._id} product={product}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ProductDetails