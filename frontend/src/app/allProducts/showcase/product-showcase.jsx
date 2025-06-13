"use client"

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Image from "next/image"
import { setProducts, setLoading } from "./store"

// Sample data with more varied examples
const sampleProducts = [
  {
    id: "balloon-1",
    name: "Birthday Balloons Pack",
    category: "Balloons",
    price: 12.99,
    discount: 15,
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.5,
    ratingCount: 127,
    stock: 25,
    attributes: {
      occasion: ["Birthday", "Celebration"],
      type: "Latex",
      size: "Standard",
      color: "Multi-color",
      finish: "Metallic",
    },
  },
  {
    id: "balloon-2",
    name: "Giant Number Balloons",
    category: "Balloons",
    price: 24.99,
    discount: 0,
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.8,
    ratingCount: 89,
    stock: 12,
    attributes: {
      occasion: ["Birthday"],
      type: "Foil",
      size: "Giant",
      color: "Gold",
      finish: "Metallic",
    },
  },
  {
    id: "balloon-3",
    name: "Wedding Balloons Set",
    category: "Balloons",
    price: 18.5,
    discount: 20,
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.2,
    ratingCount: 56,
    stock: 8,
    attributes: {
      occasion: ["Wedding"],
      type: "Latex",
      size: "Standard",
      color: "White",
      finish: "Pearlescent",
    },
  },
  {
    id: "balloon-4",
    name: "LED Light-up Balloons",
    category: "Balloons",
    price: 15.99,
    discount: 0,
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.7,
    ratingCount: 42,
    stock: 15,
    attributes: {
      occasion: ["Party", "Celebration"],
      type: "LED",
      size: "Standard",
      color: "Multi-color",
      finish: "Matte",
    },
  },
  {
    id: "card-1",
    name: "Handmade Birthday Card",
    category: "Cards",
    price: 4.99,
    discount: 0,
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.9,
    ratingCount: 215,
    stock: 50,
    attributes: {
      occasion: ["Birthday"],
      recipient: ["Friend", "Family"],
      style: "Handmade",
    },
  },
  {
    id: "card-2",
    name: "Wedding Congratulations Card",
    category: "Cards",
    price: 5.99,
    discount: 10,
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.6,
    ratingCount: 78,
    stock: 30,
    attributes: {
      occasion: ["Wedding"],
      recipient: ["Friend", "Family"],
      style: "Artistic",
    },
  },
  {
    id: "home-1",
    name: "Decorative Wall Clock",
    category: "Home & Living",
    price: 34.99,
    discount: 25,
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.3,
    ratingCount: 67,
    stock: 5,
    attributes: {
      subcategory: ["Clocks"],
      color: "Black",
      size: "Medium",
      brand: "HomeStyle",
    },
  },
  {
    id: "home-2",
    name: "Photo Frame Set",
    category: "Home & Living",
    price: 28.5,
    discount: 0,
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.5,
    ratingCount: 93,
    stock: 18,
    attributes: {
      subcategory: ["Frames"],
      color: "White",
      size: "Medium",
      brand: "FrameIt",
    },
  },
  {
    id: "kitchen-1",
    name: "Ceramic Mug Set",
    category: "Kitchen & Dining",
    price: 22.99,
    discount: 15,
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.7,
    ratingCount: 124,
    stock: 22,
    attributes: {
      type: ["Mugs"],
      material: "Ceramic",
      brand: "KitchenPro",
    },
  },
  {
    id: "kitchen-2",
    name: "Glass Serving Platter",
    category: "Kitchen & Dining",
    price: 32.5,
    discount: 0,
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.4,
    ratingCount: 56,
    stock: 7,
    attributes: {
      type: ["Serveware"],
      material: "Glass",
      brand: "GlassWorks",
    },
  },
  {
    id: "toy-1",
    name: "Educational Puzzle Set",
    category: "Toys, Novelties & Collectibles",
    price: 19.99,
    discount: 20,
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.8,
    ratingCount: 87,
    stock: 14,
    attributes: {
      ageGroup: ["3-5 years"],
      type: ["Puzzle", "Educational"],
      brand: "LearnPlay",
    },
  },
  {
    id: "toy-2",
    name: "Collectible Action Figure",
    category: "Toys, Novelties & Collectibles",
    price: 45.99,
    discount: 0,
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.9,
    ratingCount: 134,
    stock: 3,
    attributes: {
      ageGroup: ["13+ years", "Adult"],
      type: ["Action Figure", "Collectible"],
      brand: "CollectiblesInc",
    },
  },
]

export function ProductShowcase({ filtered }) {
  const dispatch = useDispatch()
  const { products, filteredProducts, loading, error } = useSelector((state) => state.products)

  // Load products on component mount
  useEffect(() => {
    if (products.length === 0) {
      dispatch(setLoading(true))

      // Simulate API call with sample data
      setTimeout(() => {
        dispatch(setProducts(sampleProducts))
        dispatch(setLoading(false))
      }, 500)
    }
  }, [dispatch, products.length])

  // Display products based on filtered prop
  const displayProducts = filtered ? filteredProducts : products

  // Function to handle add to cart
  const handleAddToCart = (product) => {
    console.log("Added to cart:", product)
    // In a real app, this would dispatch an action to add the product to the cart
    alert(`Added ${product.name} to cart!`)
  }

  // Function to handle buy now
  const handleBuyNow = (product) => {
    console.log("Buy now:", product)
    // In a real app, this would redirect to checkout with this product
    alert(`Proceeding to checkout for ${product.name}!`)
  }

  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array(8)
          .fill(null)
          .map((_, i) => (
            <div key={i} className="bg-gray-100 animate-pulse rounded-lg p-4 h-64"></div>
          ))}
      </div>
    )
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>
  }

  if (displayProducts.length === 0) {
    return (
      <div className="text-gray-500 p-8 bg-gray-50 rounded-lg text-center">
        <svg className="w-12 h-12 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h3 className="text-lg font-medium mb-1">No products found</h3>
        <p>Try adjusting your filters to find what you're looking for.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {displayProducts.map((product) => (
        <div
          key={product.id}
          className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="relative h-48">
            <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-contain p-4" />

            {/* Improved discount tag design */}
            {product.discount > 0 && (
              <div className="absolute top-0 left-0">
                <div className="bg-red-600 text-white font-bold py-1 px-3 rounded-br-lg shadow-md flex items-center">
                  <span className="text-lg">{product.discount}%</span>
                  <span className="ml-1 text-xs">OFF</span>
                </div>
              </div>
            )}

            {/* Size badge */}
            {product.attributes.size && (
              <div className="absolute bottom-2 right-2">
                <div className="bg-gray-800 bg-opacity-70 text-white text-xs py-1 px-2 rounded">
                  {product.attributes.size}
                </div>
              </div>
            )}
          </div>

          <div className="p-4">
            <h3 className="font-medium text-gray-800 line-clamp-2 h-12">{product.name}</h3>

            <div className="flex items-center mt-1">
              {Array(5)
                .fill(null)
                .map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              {product.rating % 1 >= 0.5 && (
                <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              )}
              <span className="text-xs text-gray-500 ml-1">({product.ratingCount})</span>
            </div>

            <div className="mt-3">
              {product.discount > 0 ? (
                <div className="flex items-center">
                  <span className="font-bold text-lg text-red-600">
                    £{(product.price * (1 - product.discount / 100)).toFixed(2)}
                  </span>
                  <span className="ml-2 text-sm text-gray-500 line-through">£{product.price.toFixed(2)}</span>
                </div>
              ) : (
                <div className="font-bold text-lg">£{product.price.toFixed(2)}</div>
              )}
            </div>

            {/* Stock indicator */}
            <div className="mt-1 mb-3">
              {product.stock <= 5 ? (
                <span className="text-xs text-red-600">Only {product.stock} left in stock!</span>
              ) : product.stock <= 10 ? (
                <span className="text-xs text-orange-500">Low stock: {product.stock} remaining</span>
              ) : (
                <span className="text-xs text-green-600">In stock ({product.stock})</span>
              )}
            </div>

            {/* Add to Cart and Buy Now buttons */}
            <div className="grid grid-cols-1 gap-2">
              <button
                onClick={() => handleAddToCart(product)}
                className="w-full py-2 bg-purple-600 text-white text-sm font-medium rounded-md hover:bg-purple-700 transition-colors flex items-center justify-center"
              >
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Add to Cart
              </button>
              <button
                onClick={() => handleBuyNow(product)}
                className="w-full py-2 bg-gray-800 text-white text-sm font-medium rounded-md hover:bg-gray-900 transition-colors"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
