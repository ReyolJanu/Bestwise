export interface ProductData {
  id: string
  name: string
  subtitle: string
  sku: string
  status: string
  visibility: boolean
  featured: boolean
  shortDescription: string
  fullDescription: string
  costPrice: number
  retailPrice: number
  salePrice: number
  stockQuantity: number
  weight: number
  dimensions: {
    length: number
    width: number
    height: number
  }
  seoTitle: string
  metaDescription: string
  images: string[]
}

export interface ProductVariant {
  id: string
  attribute: string
  options: string[]
}

export interface ReviewData {
  name: string
  rating: number
  date: string
  comment: string
}

export interface ShippingOption {
  name: string
  description: string
  price: string
}
