"use client"

import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setFilter, setCategory } from "./store"

// Define filter options for each category with more examples
const filterOptions = {
  Balloons: {
    occasion: [
      "Birthday",
      "Wedding",
      "Anniversary",
      "Valentine's Day",
      "Graduation",
      "Baby Shower",
      "Halloween",
      "Christmas",
      "New Year",
      "Retirement",
      "Engagement",
      "Hen Party",
      "Stag Do",
      "Christening",
    ],
    type: [
      "Latex",
      "Foil",
      "Bubble",
      "Number/Letter",
      "Confetti",
      "LED",
      "Helium-filled",
      "Air-filled",
      "Biodegradable",
      "Shaped",
    ],
    size: ["Mini", "Standard", "Large", "Giant", "Jumbo", "Custom"],
    color: [
      "Red",
      "Pink",
      "Blue",
      "Gold",
      "Silver",
      "Multi-color",
      "Green",
      "Purple",
      "Black",
      "White",
      "Yellow",
      "Orange",
      "Rose Gold",
      "Teal",
      "Navy",
      "Pastel Mix",
    ],
    finish: ["Matte", "Metallic", "Chrome", "Confetti", "Glitter", "Pearlescent", "Transparent", "Opaque"],
  },
  Cards: {
    occasion: [
      "Birthday",
      "Wedding",
      "Anniversary",
      "Sympathy",
      "Congratulations",
      "Thank You",
      "Get Well",
      "New Baby",
      "Retirement",
      "Graduation",
      "New Home",
      "Engagement",
      "Valentine's Day",
      "Christmas",
      "Easter",
    ],
    recipient: [
      "Friend",
      "Family",
      "Partner",
      "Colleague",
      "Child",
      "Parent",
      "Grandparent",
      "Teacher",
      "Boss",
      "Sibling",
      "Cousin",
      "Aunt/Uncle",
      "Niece/Nephew",
    ],
    style: [
      "Funny",
      "Sentimental",
      "Artistic",
      "Photo",
      "Pop-up",
      "Musical",
      "Handmade",
      "Vintage",
      "Modern",
      "Minimalist",
      "Luxury",
      "Illustrated",
      "Personalized",
      "Letterpress",
      "Foil",
    ],
  },
  "Home & Living": {
    subcategory: [
      "Clocks",
      "Frames",
      "Candles",
      "Decor",
      "Garden",
      "Cushions",
      "Throws",
      "Wall Art",
      "Vases",
      "Lamps",
      "Rugs",
      "Storage",
      "Mirrors",
      "Artificial Plants",
      "Ornaments",
    ],
    color: [
      "White",
      "Black",
      "Natural",
      "Gold",
      "Silver",
      "Blue",
      "Green",
      "Pink",
      "Multi-color",
      "Wood",
      "Grey",
      "Beige",
      "Copper",
      "Brass",
      "Terracotta",
    ],
    size: ["Small", "Medium", "Large", "Extra Large", "Mini", "Oversized", "Standard"],
    brand: [
      "HomeStyle",
      "LivingCo",
      "DecorPlus",
      "FrameIt",
      "ArtHome",
      "GardenLife",
      "LuxDecor",
      "CozyHome",
      "ModernLiving",
      "NaturalHome",
    ],
  },
  "Kitchen & Dining": {
    type: [
      "Mugs",
      "Plates",
      "Cutlery",
      "Glasses",
      "Cookware",
      "Bakeware",
      "Serveware",
      "Storage",
      "Gadgets",
      "Textiles",
      "Teapots",
      "Coffee Makers",
      "Coasters",
      "Placemats",
      "Trays",
    ],
    material: [
      "Ceramic",
      "Glass",
      "Stainless Steel",
      "Wood",
      "Plastic",
      "Silicone",
      "Porcelain",
      "Bamboo",
      "Cast Iron",
      "Copper",
      "Marble",
      "Melamine",
      "Enamel",
      "Crystal",
    ],
    brand: [
      "KitchenPro",
      "DineWell",
      "CeramicArt",
      "GlassWorks",
      "ChefChoice",
      "HomeCook",
      "TableTop",
      "GourmetKitchen",
      "CulinaryDelight",
      "DiningElegance",
    ],
  },
  "Toys, Novelties & Collectibles": {
    ageGroup: ["0-2 years", "3-5 years", "6-8 years", "9-12 years", "13+ years", "Adult", "All Ages"],
    type: [
      "Puzzle",
      "Plush",
      "Action Figure",
      "Board Game",
      "Collectible",
      "Educational",
      "Outdoor",
      "Electronic",
      "Building",
      "Arts & Crafts",
      "Vehicles",
      "Dolls",
      "Science Kits",
      "Musical",
      "Role Play",
    ],
    brand: [
      "ToyWorld",
      "CollectMore",
      "PlayTime",
      "GameMaster",
      "KidZone",
      "LearnPlay",
      "FunToys",
      "CollectiblesInc",
      "CreativeToys",
      "BrainGames",
    ],
  },
}

export function FilterSidebar() {
  const dispatch = useDispatch()
  const { category, filters } = useSelector((state) => state.products.filters)
  const [selectedFilters, setSelectedFilters] = useState({})
  const [priceRange, setPriceRange] = useState([0, 200])
  const [ratingFilter, setRatingFilter] = useState([])
  const [discountFilter, setDiscountFilter] = useState([])
  const [expandedSections, setExpandedSections] = useState({
    price: true,
    rating: true,
    discount: true,
  })

  // Get the available filters for the current category
  const availableFilters = filterOptions[category] || {}

  // Reset filters when category changes
  useEffect(() => {
    setSelectedFilters({})
    setPriceRange([0, 200])
    setRatingFilter([])
    setDiscountFilter([])

    // Set all filter sections to expanded for the new category
    const newExpandedSections = { price: true, rating: true, discount: true }
    Object.keys(availableFilters).forEach((key) => {
      newExpandedSections[key] = true
    })
    setExpandedSections(newExpandedSections)
  }, [category])

  // Handle category change
  const handleCategoryChange = (newCategory) => {
    dispatch(setCategory(newCategory))
  }

  // Handle filter change
  const handleFilterChange = (filterKey, value) => {
    const currentValues = selectedFilters[filterKey] || []
    const newValues = currentValues.includes(value)
      ? currentValues.filter((v) => v !== value)
      : [...currentValues, value]

    const updatedFilters = {
      ...selectedFilters,
      [filterKey]: newValues,
    }

    setSelectedFilters(updatedFilters)
    dispatch(setFilter({ key: filterKey, values: newValues }))
  }

  // Handle price range change
  const handlePriceChange = (e) => {
    const value = Number.parseInt(e.target.value)
    const [min, max] = priceRange

    if (e.target.id === "price-min") {
      setPriceRange([value, max])
    } else {
      setPriceRange([min, value])
    }
  }

  // Apply price range when slider interaction ends
  const handlePriceChangeEnd = () => {
    dispatch(setFilter({ key: "price", values: priceRange }))
  }

  // Handle rating filter
  const handleRatingChange = (rating) => {
    const newRatings = ratingFilter.includes(rating)
      ? ratingFilter.filter((r) => r !== rating)
      : [...ratingFilter, rating]

    setRatingFilter(newRatings)
    dispatch(setFilter({ key: "rating", values: newRatings }))
  }

  // Handle discount filter
  const handleDiscountChange = (hasDiscount) => {
    const newValue = discountFilter.includes(hasDiscount) ? [] : [hasDiscount]
    setDiscountFilter(newValue)
    dispatch(setFilter({ key: "discount", values: newValue }))
  }

  // Toggle section expansion
  const toggleSection = (section) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section],
    })
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Filters</h2>

      {/* Category selector */}
      <div className="mb-6">
        <h3 className="font-medium mb-2">Category</h3>
        <select
          className="w-full p-2 border rounded"
          value={category}
          onChange={(e) => handleCategoryChange(e.target.value)}
        >
          {Object.keys(filterOptions).map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Price range filter with slider */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-medium">Price Range</h3>
          <button onClick={() => toggleSection("price")} className="text-gray-500 hover:text-gray-700">
            {expandedSections.price ? "−" : "+"}
          </button>
        </div>

        {expandedSections.price && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="bg-gray-100 px-3 py-1 rounded">
                <span className="text-sm font-medium">£{priceRange[0]}</span>
              </div>
              <div className="bg-gray-100 px-3 py-1 rounded">
                <span className="text-sm font-medium">£{priceRange[1]}</span>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="h-1 w-full bg-gray-200 rounded-full"></div>
              </div>
              <div
                className="absolute inset-0 flex items-center"
                style={{
                  left: `${(priceRange[0] / 200) * 100}%`,
                  right: `${100 - (priceRange[1] / 200) * 100}%`,
                }}
              >
                <div className="h-1 w-full bg-purple-600 rounded-full"></div>
              </div>
              <input
                id="price-min"
                type="range"
                min="0"
                max="200"
                value={priceRange[0]}
                onChange={handlePriceChange}
                onMouseUp={handlePriceChangeEnd}
                onTouchEnd={handlePriceChangeEnd}
                className="absolute w-full h-1 appearance-none bg-transparent pointer-events-auto"
                style={{ zIndex: 20 }}
              />
              <input
                id="price-max"
                type="range"
                min="0"
                max="200"
                value={priceRange[1]}
                onChange={handlePriceChange}
                onMouseUp={handlePriceChangeEnd}
                onTouchEnd={handlePriceChangeEnd}
                className="absolute w-full h-1 appearance-none bg-transparent pointer-events-auto"
                style={{ zIndex: 20 }}
              />
            </div>

            <div className="flex items-center space-x-2">
              <div className="flex-1">
                <label className="text-xs text-gray-500 mb-1 block">Min</label>
                <input
                  type="number"
                  min="0"
                  max={priceRange[1]}
                  value={priceRange[0]}
                  onChange={(e) => {
                    const value = Math.min(Number.parseInt(e.target.value) || 0, priceRange[1])
                    setPriceRange([value, priceRange[1]])
                  }}
                  onBlur={handlePriceChangeEnd}
                  className="w-full p-1 border rounded text-sm"
                />
              </div>
              <div className="flex-1">
                <label className="text-xs text-gray-500 mb-1 block">Max</label>
                <input
                  type="number"
                  min={priceRange[0]}
                  max="200"
                  value={priceRange[1]}
                  onChange={(e) => {
                    const value = Math.max(Number.parseInt(e.target.value) || 0, priceRange[0])
                    setPriceRange([priceRange[0], value])
                  }}
                  onBlur={handlePriceChangeEnd}
                  className="w-full p-1 border rounded text-sm"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Rating filter */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-medium">Rating</h3>
          <button onClick={() => toggleSection("rating")} className="text-gray-500 hover:text-gray-700">
            {expandedSections.rating ? "−" : "+"}
          </button>
        </div>

        {expandedSections.rating && (
          <div className="space-y-2">
            {[4, 3, 2, 1].map((rating) => (
              <label key={rating} className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2 h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                  checked={ratingFilter.includes(rating)}
                  onChange={() => handleRatingChange(rating)}
                />
                <div className="flex items-center">
                  {Array(5)
                    .fill(null)
                    .map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  <span className="ml-1 text-sm">& Up</span>
                </div>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Discount filter */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-medium">Discount</h3>
          <button onClick={() => toggleSection("discount")} className="text-gray-500 hover:text-gray-700">
            {expandedSections.discount ? "−" : "+"}
          </button>
        </div>

        {expandedSections.discount && (
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2 h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                checked={discountFilter.includes("yes")}
                onChange={() => handleDiscountChange("yes")}
              />
              <div className="flex items-center">
                <span className="bg-red-100 text-red-800 text-xs font-semibold px-2 py-0.5 rounded">On Sale</span>
              </div>
            </label>
          </div>
        )}
      </div>

      {/* Dynamic filters based on category */}
      {Object.entries(availableFilters).map(([filterKey, values]) => (
        <div key={filterKey} className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-medium capitalize">{filterKey}</h3>
            <button onClick={() => toggleSection(filterKey)} className="text-gray-500 hover:text-gray-700">
              {expandedSections[filterKey] ? "−" : "+"}
            </button>
          </div>

          {expandedSections[filterKey] && (
            <div className="space-y-2 max-h-48 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
              {values.map((value) => (
                <label key={value} className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2 h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                    checked={(selectedFilters[filterKey] || []).includes(value)}
                    onChange={() => handleFilterChange(filterKey, value)}
                  />
                  <span className="text-sm">{value}</span>
                </label>
              ))}
            </div>
          )}
        </div>
      ))}

      {/* Applied filters */}
      <div className="mb-6">
        <h3 className="font-medium mb-2">Applied Filters</h3>
        <div className="flex flex-wrap gap-2">
          {Object.entries(selectedFilters).map(([key, values]) =>
            values.map((value) => (
              <div
                key={`${key}-${value}`}
                className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full flex items-center"
              >
                <span className="capitalize">
                  {key}: {value}
                </span>
                <button
                  onClick={() => handleFilterChange(key, value)}
                  className="ml-1 text-purple-600 hover:text-purple-800"
                >
                  ×
                </button>
              </div>
            )),
          )}
          {priceRange[0] > 0 || priceRange[1] < 200 ? (
            <div className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full flex items-center">
              <span>
                Price: £{priceRange[0]} - £{priceRange[1]}
              </span>
              <button
                onClick={() => {
                  setPriceRange([0, 200])
                  dispatch(setFilter({ key: "price", values: [0, 200] }))
                }}
                className="ml-1 text-purple-600 hover:text-purple-800"
              >
                ×
              </button>
            </div>
          ) : null}
          {discountFilter.length > 0 && (
            <div className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full flex items-center">
              <span>On Sale</span>
              <button
                onClick={() => {
                  setDiscountFilter([])
                  dispatch(setFilter({ key: "discount", values: [] }))
                }}
                className="ml-1 text-purple-600 hover:text-purple-800"
              >
                ×
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Clear all filters button */}
      <button
        className="w-full py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
        onClick={() => {
          setSelectedFilters({})
          setPriceRange([0, 200])
          setRatingFilter([])
          setDiscountFilter([])
          dispatch(setCategory(category)) // This resets all filters
        }}
      >
        Clear All Filters
      </button>
    </div>
  )
}
