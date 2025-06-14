"use client"

import { useState, useEffect } from "react"
import { CalendarIcon, Upload, X, Plus, Save, Eye, Copy, Trash2 } from "lucide-react"
import { format } from "date-fns"
import { useLoading } from '../../hooks/useLoading'
import Loader from '../loader/page'

import { Button } from "../../../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/ui/card"
import { Input } from "../../../components/ui/input"
import { Label } from "../../../components/ui/label"
import { Textarea } from "../../../components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../components/ui/tabs"
import { Switch } from "../../../components/ui/switch"
import { Badge } from "../../../components/ui/badge"
import { Calendar } from "../../../components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "../../../components/ui/popover"
import { Checkbox } from "../../../components/ui/checkbox"
import { Separator } from "../../../components/ui/separator"
import { cn } from "../../../lib/utils"
import ProductPreviewModalComponent from "../preview/page"

// Sample data for dropdowns and multi-selects
const categoryOptions = [
  "Greeting Cards",
  "Gifts",
  "Homeware",
  "Stationery",
  "Accessories",
  "Clothing",
  "Books",
  "Electronics",
]

const subcategoryOptions = [
  "Birthday",
  "Anniversary",
  "Wedding",
  "Christmas",
  "Kitchenware",
  "Mugs",
  "Cushions",
  "Wall Art",
]

const occasionOptions = [
  "Birthday",
  "Christmas",
  "Valentine's Day",
  "Mother's Day",
  "Father's Day",
  "Anniversary",
  "Wedding",
  "Graduation",
]

const recipientOptions = ["Mum", "Dad", "Sister", "Brother", "Friend", "Partner", "Colleague", "Teacher", "Boss"]

const themeOptions = ["Humour", "Sentimental", "Inspirational", "Cute", "Elegant", "Modern", "Vintage", "Minimalist"]

const productTypeOptions = ["Mug", "Money Wallet", "Keyring", "Coaster", "Notebook", "Card", "Frame", "Cushion"]

const seasonOptions = [
  "Spring 2025",
  "Summer 2025",
  "Autumn 2025",
  "Winter 2025",
  "Holiday 2024",
  "Back to School 2025",
]

const brandOptions = ["CozyMugs", "Artisan Co.", "Creative Cards", "Home Essentials", "Gift Gallery"]

const roomOptions = ["Kitchen", "Living Room", "Bedroom", "Office", "Bathroom", "Garden", "Dining Room"]

const statusOptions = ["Draft", "Published", "Archived", "Pending Review", "Scheduled"]

const stockStatusOptions = ["In Stock", "Low Stock", "Out of Stock", "Backordered"]

const shippingClassOptions = ["Free Shipping", "Standard", "Fragile", "Oversize", "Express"]

const taxClassOptions = ["VAT (15%)", "GST (10%)", "Exempt", "Reduced Rate"]

export default function AdminProductManager() {
  const { loading, withLoading } = useLoading()
  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedSubcategories, setSelectedSubcategories] = useState([])
  const [selectedOccasions, setSelectedOccasions] = useState([])
  const [selectedRecipients, setSelectedRecipients] = useState([])
  const [selectedThemes, setSelectedThemes] = useState([])
  const [selectedProductTypes, setSelectedProductTypes] = useState([])
  const [selectedSeasons, setSelectedSeasons] = useState([])
  const [selectedRooms, setSelectedRooms] = useState([])
  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")
  const [saleStartDate, setSaleStartDate] = useState()
  const [saleEndDate, setSaleEndDate] = useState()
  const [variants, setVariants] = useState([])
  const [showPreview, setShowPreview] = useState(false)
  const [productData] = useState({
    id: "PRD-001",
    name: "Personalized Birthday Mug",
    subtitle: "Make their special day memorable",
    sku: "MUG-BIRTH-001",
    status: "published",
    visibility: true,
    featured: true,
    shortDescription:
      "A beautiful personalized mug perfect for birthday celebrations with custom text and vibrant colors.",
    fullDescription:
      "This premium ceramic mug is perfect for celebrating birthdays in style. Made from high-quality materials, it features a glossy finish and comfortable handle. The design can be personalized with names, dates, and special messages to create a truly unique gift that will be treasured for years to come.",
    costPrice: 8.5,
    retailPrice: 24.99,
    salePrice: 19.99,
    stockQuantity: 150,
    weight: 0.35,
    dimensions: { length: 12, width: 8, height: 9 },
    seoTitle: "Personalized Birthday Mug - Custom Gift | Gift Gallery",
    metaDescription:
      "Create the perfect birthday gift with our personalized mugs. High-quality ceramic with custom text and designs. Fast shipping available.",
    images: [
      "/placeholder.svg?height=400&width=400&text=Birthday+Mug+Main",
      "/placeholder.svg?height=400&width=400&text=Birthday+Mug+Side",
      "/placeholder.svg?height=400&width=400&text=Birthday+Mug+Handle",
    ],
  })
  const [products, setProducts] = useState([])

  const handleMultiSelectToggle = (value, selectedValues, setSelectedValues) => {
    if (selectedValues.includes(value)) {
      setSelectedValues(selectedValues.filter((item) => item !== value))
    } else {
      setSelectedValues([...selectedValues, value])
    }
  }

  const addTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()])
      setNewTag("")
    }
  }

  const removeTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove))
  }

  const addVariant = () => {
    setVariants([
      ...variants,
      {
        id: Date.now().toString(),
        attribute: "",
        options: [],
      },
    ])
  }

  const removeVariant = (id) => {
    setVariants(variants.filter((variant) => variant.id !== id))
  }

  const MultiSelectField = ({ label, options, selectedValues, onToggle }) => (
    <div className="space-y-2">
      <Label>{label}</Label>
      <div className="border rounded-md p-3 max-h-32 overflow-y-auto">
        <div className="grid grid-cols-2 gap-2">
          {options.map((option) => (
            <div key={option} className="flex items-center space-x-2">
              <Checkbox
                id={`${label}-${option}`}
                checked={selectedValues.includes(option)}
                onCheckedChange={() => onToggle(option)}
              />
              <Label htmlFor={`${label}-${option}`} className="text-sm font-normal cursor-pointer">
                {option}
              </Label>
            </div>
          ))}
        </div>
      </div>
      {selectedValues.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-2">
          {selectedValues.map((value) => (
            <Badge key={value} variant="secondary" className="text-xs">
              {value}
            </Badge>
          ))}
        </div>
      )}
    </div>
  )

  useEffect(() => {
    const fetchProducts = async () => {
      await withLoading(async () => {
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`)
          const data = await response.json()
          setProducts(data)
        } catch (error) {
          console.error('Error fetching products:', error)
        }
      })
    }

    fetchProducts()
  }, [withLoading])

  const handleProductUpdate = async (productId, updates) => {
    await withLoading(async () => {
      try {
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${productId}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(updates),
        })
        
        setProducts(prevProducts => 
          prevProducts.map(product => 
            product.id === productId ? { ...product, ...updates } : product
          )
        )
      } catch (error) {
        console.error('Error updating product:', error)
      }
    })
  }

  const handleProductDelete = async (productId) => {
    await withLoading(async () => {
      try {
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${productId}`, {
          method: 'DELETE',
        })
        
        setProducts(prevProducts => 
          prevProducts.filter(product => product.id !== productId)
        )
      } catch (error) {
        console.error('Error deleting product:', error)
      }
    })
  }

  return (
    <>
      {loading && <Loader />}
      <div className="container mx-auto p-6 max-w-6xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold">Manage Products</h1>
            <p className="text-muted-foreground">Create and edit product information</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Copy className="w-4 h-4 mr-2" />
              Duplicate
            </Button>
            <Button variant="outline" size="sm" onClick={() => setShowPreview(true)}>
              <Eye className="w-4 h-4 mr-2" />
              Preview
            </Button>
            <Button variant="destructive" size="sm">
              <Trash2 className="w-4 h-4 mr-2" />
              Delete
            </Button>
          </div>
        </div>

        <Tabs defaultValue="basic" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 lg:grid-cols-9">
            <TabsTrigger value="basic">Basic</TabsTrigger>
            <TabsTrigger value="categorization">Categories</TabsTrigger>
            <TabsTrigger value="media">Media</TabsTrigger>
            <TabsTrigger value="descriptions">Descriptions</TabsTrigger>
            <TabsTrigger value="pricing">Pricing</TabsTrigger>
            <TabsTrigger value="inventory">Inventory</TabsTrigger>
            <TabsTrigger value="variants">Variants</TabsTrigger>
            <TabsTrigger value="seo">SEO</TabsTrigger>
            <TabsTrigger value="additional">Additional</TabsTrigger>
          </TabsList>

          <TabsContent value="basic">
            <Card>
              <CardHeader>
                <CardTitle>Basic Details</CardTitle>
                <CardDescription>Essential product information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="product-id">Product ID</Label>
                    <Input id="product-id" value="PRD-001" readOnly className="bg-muted" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="sku">SKU / Barcode</Label>
                    <Input id="sku" placeholder="Enter SKU" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="product-name">Product Name *</Label>
                  <Input id="product-name" placeholder="Enter product name" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="product-subtitle">Product Subtitle</Label>
                  <Input id="product-subtitle" placeholder="Enter subtitle (optional)" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="status">Status</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        {statusOptions.map((status) => (
                          <SelectItem key={status} value={status.toLowerCase()}>
                            {status}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="visibility">Visibility</Label>
                    <div className="flex items-center space-x-2 pt-2">
                      <Switch id="visibility" />
                      <Label htmlFor="visibility">Visible</Label>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="featured">Featured Product</Label>
                    <div className="flex items-center space-x-2 pt-2">
                      <Switch id="featured" />
                      <Label htmlFor="featured">Featured</Label>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="categorization">
            <Card>
              <CardHeader>
                <CardTitle>Categorization & Filters</CardTitle>
                <CardDescription>Organize your product with categories and tags</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <MultiSelectField
                    label="Main Category"
                    options={categoryOptions}
                    selectedValues={selectedCategories}
                    onToggle={(value) => handleMultiSelectToggle(value, selectedCategories, setSelectedCategories)}
                  />

                  <MultiSelectField
                    label="Subcategory"
                    options={subcategoryOptions}
                    selectedValues={selectedSubcategories}
                    onToggle={(value) => handleMultiSelectToggle(value, selectedSubcategories, setSelectedSubcategories)}
                  />

                  <MultiSelectField
                    label="Occasion"
                    options={occasionOptions}
                    selectedValues={selectedOccasions}
                    onToggle={(value) => handleMultiSelectToggle(value, selectedOccasions, setSelectedOccasions)}
                  />

                  <MultiSelectField
                    label="Recipient"
                    options={recipientOptions}
                    selectedValues={selectedRecipients}
                    onToggle={(value) => handleMultiSelectToggle(value, selectedRecipients, setSelectedRecipients)}
                  />

                  <MultiSelectField
                    label="Theme / Style"
                    options={themeOptions}
                    selectedValues={selectedThemes}
                    onToggle={(value) => handleMultiSelectToggle(value, selectedThemes, setSelectedThemes)}
                  />

                  <MultiSelectField
                    label="Product Type"
                    options={productTypeOptions}
                    selectedValues={selectedProductTypes}
                    onToggle={(value) => handleMultiSelectToggle(value, selectedProductTypes, setSelectedProductTypes)}
                  />

                  <MultiSelectField
                    label="Season / Collection"
                    options={seasonOptions}
                    selectedValues={selectedSeasons}
                    onToggle={(value) => handleMultiSelectToggle(value, selectedSeasons, setSelectedSeasons)}
                  />

                  <MultiSelectField
                    label="Room / Placement"
                    options={roomOptions}
                    selectedValues={selectedRooms}
                    onToggle={(value) => handleMultiSelectToggle(value, selectedRooms, setSelectedRooms)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="brand">Brand / Designer</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select brand" />
                    </SelectTrigger>
                    <SelectContent>
                      {brandOptions.map((brand) => (
                        <SelectItem key={brand} value={brand.toLowerCase()}>
                          {brand}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Tags</Label>
                  <div className="flex gap-2">
                    <Input
                      value={newTag}
                      onChange={(e) => setNewTag(e.target.value)}
                      placeholder="Add a tag"
                      onKeyPress={(e) => e.key === "Enter" && addTag()}
                    />
                    <Button type="button" onClick={addTag} size="sm">
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                  {tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                          {tag}
                          <X className="w-3 h-3 cursor-pointer" onClick={() => removeTag(tag)} />
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="media">
            <Card>
              <CardHeader>
                <CardTitle>Media</CardTitle>
                <CardDescription>Upload product images and videos</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Main Image *</Label>
                  <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                    <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">
                      Click to upload or drag and drop your main product image
                    </p>
                    <Button variant="outline" size="sm" className="mt-2">
                      Choose File
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Gallery Images</Label>
                  <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                    <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">Upload additional product images</p>
                    <Button variant="outline" size="sm" className="mt-2">
                      Choose Files
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="video-url">Video URL</Label>
                  <Input id="video-url" placeholder="https://youtube.com/watch?v=..." />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="descriptions">
            <Card>
              <CardHeader>
                <CardTitle>Descriptions</CardTitle>
                <CardDescription>Product descriptions and specifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="short-description">Short Description</Label>
                  <Textarea
                    id="short-description"
                    placeholder="Brief product description (max 150 characters)"
                    maxLength={150}
                  />
                  <p className="text-xs text-muted-foreground">0/150 characters</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="full-description">Full Description</Label>
                  <Textarea id="full-description" placeholder="Detailed product description" rows={6} />
                </div>

                <div className="space-y-2">
                  <Label>Specifications</Label>
                  <div className="border rounded-md p-4">
                    <div className="grid grid-cols-2 gap-4 mb-2">
                      <Input placeholder="Attribute name" />
                      <Input placeholder="Value" />
                    </div>
                    <Button variant="outline" size="sm">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Specification
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pricing">
            <Card>
              <CardHeader>
                <CardTitle>Pricing</CardTitle>
                <CardDescription>Set product pricing and tax information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="cost-price">Cost Price</Label>
                    <Input id="cost-price" type="number" placeholder="0.00" step="0.01" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="retail-price">Retail Price *</Label>
                    <Input id="retail-price" type="number" placeholder="0.00" step="0.01" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="sale-price">Sale Price</Label>
                    <Input id="sale-price" type="number" placeholder="0.00" step="0.01" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Sale Start Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !saleStartDate && "text-muted-foreground",
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {saleStartDate ? format(saleStartDate, "PPP") : "Pick a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar mode="single" selected={saleStartDate} onSelect={setSaleStartDate} initialFocus />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-2">
                    <Label>Sale End Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !saleEndDate && "text-muted-foreground",
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {saleEndDate ? format(saleEndDate, "PPP") : "Pick a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar mode="single" selected={saleEndDate} onSelect={setSaleEndDate} initialFocus />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tax-class">Tax Class</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select tax class" />
                    </SelectTrigger>
                    <SelectContent>
                      {taxClassOptions.map((taxClass) => (
                        <SelectItem key={taxClass} value={taxClass.toLowerCase()}>
                          {taxClass}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="inventory">
            <Card>
              <CardHeader>
                <CardTitle>Inventory & Shipping</CardTitle>
                <CardDescription>Manage stock and shipping information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="stock-quantity">Stock Quantity</Label>
                    <Input id="stock-quantity" type="number" placeholder="0" min="0" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="stock-status">Stock Status</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        {stockStatusOptions.map((status) => (
                          <SelectItem key={status} value={status.toLowerCase()}>
                            {status}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="min-order-qty">Minimum Order Qty</Label>
                    <Input id="min-order-qty" type="number" placeholder="1" min="1" />
                  </div>
                </div>

                <Separator />

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="weight">Weight (kg)</Label>
                    <Input id="weight" type="number" placeholder="0.0" step="0.1" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="length">Length (cm)</Label>
                    <Input id="length" type="number" placeholder="0" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="width">Width (cm)</Label>
                    <Input id="width" type="number" placeholder="0" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="height">Height (cm)</Label>
                    <Input id="height" type="number" placeholder="0" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="shipping-class">Shipping Class</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select shipping class" />
                      </SelectTrigger>
                      <SelectContent>
                        {shippingClassOptions.map((shippingClass) => (
                          <SelectItem key={shippingClass} value={shippingClass.toLowerCase()}>
                            {shippingClass}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="warehouse-location">Warehouse Location</Label>
                    <Input id="warehouse-location" placeholder="Enter location" />
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch id="backorder-allowed" />
                  <Label htmlFor="backorder-allowed">Allow Backorders</Label>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="variants">
            <Card>
              <CardHeader>
                <CardTitle>Product Variants</CardTitle>
                <CardDescription>Configure product variations like size, color, etc.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {variants.map((variant) => (
                  <div key={variant.id} className="border rounded-lg p-4 space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">Variant Attribute</h4>
                      <Button variant="outline" size="sm" onClick={() => removeVariant(variant.id)}>
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Attribute Name</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select attribute" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="color">Color</SelectItem>
                            <SelectItem value="size">Size</SelectItem>
                            <SelectItem value="material">Material</SelectItem>
                            <SelectItem value="style">Style</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Options</Label>
                        <Input placeholder="Enter options (comma separated)" />
                      </div>
                    </div>
                  </div>
                ))}

                <Button variant="outline" onClick={addVariant}>
                  <Plus className="w-4 h-4 mr-2" />
                  Add Variant
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="seo">
            <Card>
              <CardHeader>
                <CardTitle>SEO & Marketing</CardTitle>
                <CardDescription>Optimize for search engines and marketing</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="seo-title">SEO Title</Label>
                  <Input id="seo-title" placeholder="Optimized title for search engines" maxLength={60} />
                  <p className="text-xs text-muted-foreground">0/60 characters</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="meta-description">Meta Description</Label>
                  <Textarea id="meta-description" placeholder="Brief description for search results" maxLength={160} />
                  <p className="text-xs text-muted-foreground">0/160 characters</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="slug">URL Slug</Label>
                  <Input id="slug" placeholder="product-url-slug" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="search-keywords">Search Keywords</Label>
                  <Input id="search-keywords" placeholder="keyword1, keyword2, keyword3" />
                </div>

                <div className="space-y-2">
                  <Label>Promo Banner Image</Label>
                  <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-4 text-center">
                    <Upload className="w-6 h-6 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">Upload promotional banner</p>
                    <Button variant="outline" size="sm" className="mt-2">
                      Choose File
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="additional">
            <Card>
              <CardHeader>
                <CardTitle>Additional Information</CardTitle>
                <CardDescription>Extra product details and internal notes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="personalization-text">Personalization Text</Label>
                  <Input id="personalization-text" placeholder="Custom text for personalization" />
                </div>

                <div className="space-y-2">
                  <Label>Upload Artwork</Label>
                  <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-4 text-center">
                    <Upload className="w-6 h-6 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">Upload custom artwork files</p>
                    <Button variant="outline" size="sm" className="mt-2">
                      Choose Files
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Occasion Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal text-muted-foreground"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        Pick an occasion date
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar mode="single" initialFocus />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="supplier">Supplier</Label>
                  <Input id="supplier" placeholder="Supplier name" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="internal-notes">Internal Notes</Label>
                  <Textarea id="internal-notes" placeholder="Internal notes (not visible to customers)" rows={4} />
                </div>

                <Separator />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                  <div>
                    <Label>Date Created</Label>
                    <p className="mt-1">2024-01-15 10:30 AM</p>
                  </div>
                  <div>
                    <Label>Last Modified</Label>
                    <p className="mt-1">2024-01-20 2:45 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Sticky Action Buttons */}
        <div className="sticky bottom-0 bg-background border-t p-4 mt-8">
          <div className="flex flex-wrap gap-2 justify-end">
            <Button variant="outline">Save Draft</Button>
            <Button variant="outline" onClick={() => setShowPreview(true)}>
              <Eye className="w-4 h-4 mr-2" />
              Preview
            </Button>
            <Button>
              <Save className="w-4 h-4 mr-2" />
              Publish Product
            </Button>
          </div>
        </div>
        {showPreview && (
          <ProductPreviewModalComponent
            product={productData}
            categories={selectedCategories}
            occasions={selectedOccasions}
            recipients={selectedRecipients}
            themes={selectedThemes}
            onClose={() => setShowPreview(false)}
          />
        )}
      </div>
    </>
  )
}

