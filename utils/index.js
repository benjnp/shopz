import { client } from "@/lib/client"

export async function getAllProducts() {
    const productQuery = '*[_type == "product"]'
    const products = await client.fetch(productQuery, { next: { revalidate: 20 } })
    return products
}

export async function getBanners() {
    const bannerQuery = '*[_type == "banner"]'
    const banner = await client.fetch(bannerQuery, { next: { revalidate: 20 } })
    return banner
}