"use client"

import { useEffect, useState } from "react"
import Slider from "react-slick"
import Image from "next/image"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { FaFire } from "react-icons/fa6"
import { Heart, Flame, ChevronRight } from "lucide-react"
import { FaRegClock } from "react-icons/fa"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Footer from "./components/footer/page"
import Navbar from "./components/navBar/page"
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from "./actions/productAction"
import { getCategories } from "./actions/categoryAction"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { AiFillStar, AiOutlineStar, AiTwotoneStar } from 'react-icons/ai';
import Loader from "./components/loader/page"
import { addToCart } from "./slices/cartSlice";
import { addToWishlist } from "./slices/wishlistSlice";
import { toast, Toaster } from 'sonner';

const images = ["/1.jpg", "/2.jpg", "/3.jpg"]

export default function FancyCarousel() {
  const { allProducts } = useSelector((state) => state.productsState)
  const { categories } = useSelector((state) => state.categoriesState)
  const { isAuthenticated } = useSelector((state) => state.userState)
  const dispatch = useDispatch()
    
  const [loading, setLoading] = useState(true);
  const [localCategories, setLocalCategories] = useState([]);
  const router = useRouter();

  // Event data for Upcoming Events section
  const events = [
    {
      name: "Father's Day",
      key: "fathers-day",
      image: "/fatherday.jpg", // Add this image to public if not present
    },
    {
      name: "Mother's Day",
      key: "mothers-day",
      image: "/motherday.jpg",
    },
    {
      name: "Birthday",
      key: "birthday",
      image: "/birthday-invitation.svg",
    },
    {
      name: "Brother's Day",
      key: "brothers-day",
      image: "/profile-avatar.png", // Use a suitable image or add one
    },
    {
      name: "Christmas",
      key: "christmas",
      image: "/christmas.jpg", // Add this image to public if not present
    },
    {
      name: "New Year",
      key: "newyear",
      image: "/newyear.jpg", // Add this image to public if not present
    },
  ];

  const [showMoreCategories, setShowMoreCategories] = useState(false);


  useEffect(() => {
    dispatch(getProducts())
    dispatch(getCategories())
    console.log("checking", allProducts)

    // Fetch categories from backend
    const fetchCategories = async () => {
      try {
        const res = await fetch("/api/categories");
        const data = await res.json();
        // If data is an array, use it directly; if wrapped in {data: []}, unwrap
        const cats = Array.isArray(data) ? data : data.data;
        setLocalCategories(cats || []);
      } catch (err) {
        setLocalCategories([]);
      }
    };
    fetchCategories();
  }, [dispatch])

  // Helper function to get product image
  const getProductImage = (product) => {
    if (product?.images && product.images.length > 0) {
      if (typeof product.images[0] === 'object' && product.images[0].url) {
        return product.images[0].url;
      }
      return product.images[0];
    }
    return '/placeholder.svg';
  };

  // Helper function to check if image is external
  const isExternalImage = (src) => {
    return src && (src.startsWith('http://') || src.startsWith('https://'));
  };

  // Helper function to get category image
  const getCategoryImage = (category) => {
    if (category?.icon) {
      return category.icon;
    }
    if (category?.image) {
      return category.image;
    }
    // Fallback to icon or default image based on category name
    const categoryName = category?.name?.toLowerCase();
    if (categoryName?.includes('balloon')) return '/balloon.svg';
    if (categoryName?.includes('mug')) return '/mug.svg';
    if (categoryName?.includes('birthday') || categoryName?.includes('card')) return '/birthday-invitation.svg';
    if (categoryName?.includes('home') || categoryName?.includes('living')) return '/home.svg';
    return '/placeholder.svg';
  };

  const cards = [
    {
      icon: "✏️",
      title: "Customizable Gift",
      description:
        "Design gifts your way — choose packaging, add notes, select colors or themes. Every gift becomes a reflection of your style and emotion.",
    },
    {
      icon: "⏰",
      title: "Reminder Gift Notify",
      description:
        "Never miss special moments. Set reminders for birthdays, anniversaries, and holidays to ensure your loved ones feel remembered.",
    },
    {
      icon: "👨‍👩‍👦",
      title: "Collaborative Gift",
      description:
        "Invite your friends and family to join in on a special gift. Split the cost, share the joy, and create memorable surprises — together.",
    },
    {
      icon: "🎁",
      title: "Surprise Gift Delivery",
      description:
        "Schedule a surprise delivery for your loved ones at just the right moment. We'll handle the magic while you enjoy the reactions.",
    },
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  }

  // Handle category click navigation
  const handleCategoryClick = (categoryName) => {
    // Navigate to showcase page with category parameter
    router.push(`/allProducts/showcase?category=${encodeURIComponent(categoryName)}`);
  };

  // Handle explore more functionality
  const handleExploreMore = () => {
    setShowMoreCategories(!showMoreCategories);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-12">
        {/* Hero Carousel */}
        <div className="w-full h-[300px] sm:h-[400px] lg:h-[500px] relative rounded-xl overflow-hidden shadow-lg">
          <Slider {...settings}>
            {images.map((src, index) => (
              <div key={index} className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]">
                <Image
                  src={src || "/placeholder.svg"}
                  alt={`Slide ${index}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* Categories Section */}
        <section className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">Shop by Categories</h2>
            <Button 
              variant="ghost" 
              className="text-purple-600 hover:text-purple-700 hover:bg-purple-50 transition-all duration-200"
              onClick={handleExploreMore}
            >
              {showMoreCategories ? 'Show Less' : 'Explore more'} 
              <ChevronRight className={`ml-1 h-4 w-4 transition-transform duration-200 ${showMoreCategories ? 'rotate-90' : ''}`} />
            </Button>
          </div>

          // ...existing code...
<div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4">
  {categories && categories.length > 0 ? (
    categories.slice(0, showMoreCategories ? categories.length : 6).map((category, index) => (
      <div 
        key={category._id || index} 
        className="flex flex-col items-center space-y-2 group cursor-pointer transform hover:scale-105 transition-all duration-300"
        onClick={() => handleCategoryClick(category.name)}
      >
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-gray-200 overflow-hidden group-hover:border-purple-400 group-hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-purple-50 to-pink-50">
          <Image
            src={getCategoryImage(category)}
            alt={category.name}
            width={80}
            height={80}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <span className="text-xs sm:text-sm text-center text-gray-700 group-hover:text-purple-600 transition-colors font-medium">
          {category.name}
        </span>
      </div>
    ))
  ) : (
    // Fallback categories if database is empty
    [
      { name: "Balloons", image: "/balloon.svg" },
      { name: "Mugs", image: "/mug.svg" },
      { name: "Birthday Cards", image: "/birthday-invitation.svg" },
      { name: "Home & Living", image: "/home.svg" },
      { name: "Party Supplies", image: "/party.svg" },
      { name: "Decorations", image: "/decoration.svg" },
      { name: "Gifts", image: "/gift.svg" },
      { name: "Keychains", image: "/keychain.svg" },
    ].slice(0, showMoreCategories ? 8 : 6).map((category, index) => (
      <div 
        key={index} 
        className="flex flex-col items-center space-y-2 group cursor-pointer transform hover:scale-105 transition-all duration-300"
        onClick={() => handleCategoryClick(category.name)}
      >
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-gray-200 overflow-hidden group-hover:border-purple-400 group-hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-purple-50 to-pink-50">
          <Image
            src={category.image}
            alt={category.name}
            width={80}
            height={80}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <span className="text-xs sm:text-sm text-center text-gray-700 group-hover:text-purple-600 transition-colors font-medium">
          {category.name}
        </span>
      </div>
    ))
  )}
</div>
// ...existing code...
        </section>

        {/* Hot Sales Section */}
        <section className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 flex items-center gap-2">
              <FaFire className="text-red-500" />
              Hot Sales
            </h2>
            <Button variant="ghost" className="text-purple-600 hover:text-purple-700">
              Explore more <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {allProducts && allProducts.length > 0 ? (
              allProducts.slice(0, 6).map((product) => {
                // const imageSrc = getProductImage(product);
                // const isExternal = isExternalImage(imageSrc);
                
                return (
                  <Card key={product._id} className="group hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <div className="relative">
                        <Image
                          src="/placeholder.svg"
                          alt={product.name}
                          width={200}
                          height={200}
                          className="w-full aspect-square object-cover rounded-t-lg"
                        />
                        <div className="absolute top-2 left-2 bg-red-100 rounded-full p-1">
                          <Flame className="text-red-500 w-3 h-3 sm:w-4 sm:h-4" />
                        </div>
                        <div className="absolute top-2 right-2 bg-purple-100 rounded-full p-1 cursor-pointer hover:bg-purple-200 transition-colors">
                          <Heart className="text-purple-500 w-3 h-3 sm:w-4 sm:h-4" />
                        </div>
                      </div>
                      <div className="p-3">
                        <h3 className="font-medium text-sm sm:text-base truncate">{product.name}</h3>
                        <p className="font-semibold text-purple-600 text-sm sm:text-base">
                          US ${product.price || product.retailPrice}
                        </p>
                        <div className="flex text-yellow-400 text-xs sm:text-sm mt-1">
                          {Array.from({ length: 5 }, (_, i) => {
                            const fullStars = Math.floor(product.rating || 0);
                            const hasHalfStar = (product.rating || 0) - fullStars >= 0.5;
                            if (i < fullStars) {
                              return <AiFillStar key={i} />;
                            } else if (i === fullStars && hasHalfStar) {
                              return <AiTwotoneStar key={i} />;
                            } else {
                              return <AiOutlineStar key={i} />;
                            }
                          })}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })
            ) : (
              // Fallback to static items if no products
              [1, 2, 3, 4, 5, 6].map((item) => (
                <Card key={item} className="group hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="relative">
                      <Image
                        src="/mug.jpg"
                        alt="Birthday Mug"
                        width={200}
                        height={200}
                        className="w-full aspect-square object-cover rounded-t-lg"
                      />
                      <div className="absolute top-2 left-2 bg-red-100 rounded-full p-1">
                        <Flame className="text-red-500 w-3 h-3 sm:w-4 sm:h-4" />
                      </div>
                      <div className="absolute top-2 right-2 bg-purple-100 rounded-full p-1 cursor-pointer hover:bg-purple-200 transition-colors">
                        <Heart className="text-purple-500 w-3 h-3 sm:w-4 sm:h-4" />
                      </div>
                    </div>
                    <div className="p-3">
                      <h3 className="font-medium text-sm sm:text-base truncate">Birthday Mug</h3>
                      <p className="font-semibold text-purple-600 text-sm sm:text-base">US $25.75</p>
                      <div className="flex text-yellow-400 text-xs sm:text-sm mt-1">
                        <span>★★★★★</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <FaRegClock className="text-purple-600" />
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">Upcoming Events</h2>
          </div>

          <div
            className="flex flex-row gap-4 overflow-x-auto pb-2 -mx-4 px-4 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 sm:overflow-visible sm:mx-0 sm:px-0"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {events.map((event) => (
              <Card
                key={event.key}
                className="min-w-[220px] max-w-[90vw] sm:min-w-0 sm:max-w-none overflow-hidden group hover:shadow-lg transition-shadow cursor-pointer flex-shrink-0"
                onClick={() => router.push(`/allProducts/showcase/${event.key}`)}
              >
                <CardContent className="p-0">
                  <div className="relative h-48 sm:h-56 flex items-center justify-center bg-gray-100">
                    {/* Removed Image rendering */}
                    <div className="absolute bottom-0 right-0 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-tl-2xl">
                      <span className="font-medium text-gray-900">{event.name}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* All Products */}
     
        <section className="space-y-6 ">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">All Products</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 ">
            {allProducts && allProducts.length > 0 ? (
              allProducts.slice(0, 12).map((product) => (
                <Link key={product._id} href={`/productDetail/${product._id}`} className="block">
                  <CardContent className="p-0 border-1 border-[#D9D9D9] rounded-[10px]">
                    <div className="relative">
                      <Image
                        src={product.images[0].url || "/placeholder.svg"}
                        alt={product.name}
                        width={200}
                        height={200}
                        className="w-full aspect-square object-cover rounded-t-lg"
                      />
                      <div className="absolute top-2 left-2 bg-red-100 rounded-full p-1">
                        <Flame className="text-red-500 w-3 h-3 sm:w-4 sm:h-4" />
                      </div>
                      <div className="absolute top-2 right-2 bg-purple-100 rounded-full p-1 cursor-pointer hover:bg-purple-200 transition-colors"
                        onClick={e => {
                          e.preventDefault();
                          if (!isAuthenticated) return alert('Please login to add to wishlist');
                          dispatch(addToWishlist(product));
                          toast.success('Added to wishlist!');
                        }}
                      >
                        <Heart className="text-purple-500 w-3 h-3 sm:w-4 sm:h-4" />
                      </div>
                    </div>
                    <div className="p-3">
                      <h3 className="font-medium text-sm sm:text-base truncate">{product.name}</h3>
                      <p className="font-semibold text-purple-600 text-sm sm:text-base">US ${product.price || product.retailPrice}</p>
                      <div className="flex text-yellow-400 text-xs sm:text-sm mt-1">
                        <div className="flex text-yellow-400 text-xs sm:text-sm mt-1">
                          {Array.from({ length: 5 }, (_, i) => {
                            const fullStars = Math.floor(product.rating || 0);
                            const hasHalfStar = (product.rating || 0) - fullStars >= 0.5;
                            if (i < fullStars) {
                              return <AiFillStar key={i} />;
                            } else if (i === fullStars && hasHalfStar) {
                              return <AiTwotoneStar key={i} />;
                            } else {
                              return <AiOutlineStar key={i} />;
                            }
                          })}
                        </div>
                      </div>
                      <Button
                        className="mt-2 w-full bg-purple-600 hover:bg-purple-700 text-white"
                        onClick={e => {
                          e.preventDefault();
                          if (!isAuthenticated) return alert('Please login to add to cart');
                          dispatch(addToCart({ product, quantity: 1 }));
                          toast.success('Added to cart!');
                        }}
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </CardContent>
                </Link>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-red-500 text-lg">Server currently busy!</p>
              </div>
            )}
          </div>
        </section>

        {/* Services Cards */}
        <section className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">Our Services</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map((card, index) => (
              <Card key={index} className="border-2 border-purple-200 hover:border-purple-400 transition-colors">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3 bg-purple-600 text-white p-3 rounded-full">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-xl">
                      {card.icon}
                    </div>
                    <h3 className="font-semibold text-sm sm:text-base">{card.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{card.description}</p>
                  <Button variant="outline" className="w-full border-purple-600 text-purple-600 hover:bg-purple-50">
                    Explore
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Trending Services */}
        <section className="space-y-6">
          <Card className="border-2 border-purple-200 overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-purple-600 text-white p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-xl">💖</div>
                <h2 className="text-xl font-semibold">Trending Services</h2>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2 space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="relative h-48 rounded-lg overflow-hidden">
                        <Image src="/decoration4.jpg" alt="decoration" fill className="object-cover" />
                      </div>
                      <div className="relative h-48 rounded-lg overflow-hidden">
                        <Image src="/decoration1.jpg" alt="decoration" fill className="object-cover" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="relative h-48 rounded-lg overflow-hidden">
                        <Image src="/decoration2.jpg" alt="decoration" fill className="object-cover" />
                      </div>
                      <div className="relative h-48 rounded-lg overflow-hidden">
                        <Image src="/decoration3.jpg" alt="decoration" fill className="object-cover" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <p className="text-gray-600 leading-relaxed">
                      There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                      alteration in some form, by injected humour, or randomised words which don't look even slightly
                      believable.
                    </p>

                    <div className="flex gap-4">
                      <div className="w-2 bg-purple-600 rounded-full"></div>
                      <div className="space-y-2">
                        <div className="font-medium">All Decoration Items</div>
                        <div className="text-gray-600">Party Table</div>
                        <div className="text-gray-600">Other Elegant Items</div>
                      </div>
                    </div>

                    <Button className="w-full bg-purple-600 hover:bg-purple-700">Explore</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* About Us */}
        <section className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative h-64 sm:h-80 rounded-lg overflow-hidden">
              <Image src="/map.jpg" alt="Our location" fill className="object-cover" />
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">About Us</h2>
              <p className="text-gray-600 leading-relaxed">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                alteration in some form, by injected humour, or randomised words which don't look even slightly
                believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything
                embarrassing hidden in the middle of text.
              </p>

              <div className="grid grid-cols-2 gap-8">
                <div className="flex gap-3">
                  <div className="w-2 bg-purple-600 rounded-full"></div>
                  <div>
                    <div className="text-3xl font-bold text-purple-600">2500+</div>
                    <div className="text-gray-600">Active users</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 bg-purple-600 rounded-full"></div>
                  <div>
                    <div className="text-3xl font-bold text-purple-600">10000+</div>
                    <div className="text-gray-600">Products</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />

      {/* Custom Carousel Styles */}
      <style jsx global>{`
        .slick-dots li button:before {
          font-size: 12px;
          color: #9333ea;
          opacity: 0.5;
        }

        .slick-dots li.slick-active button:before {
          color: #9333ea;
          opacity: 1;
        }

        .slick-prev:before,
        .slick-next:before {
          color: #9333ea;
          font-size: 24px;
        }

        @media (max-width: 768px) {
          .slick-prev:before,
          .slick-next:before {
            font-size: 20px;
          }
        }
      `}</style>

      <Toaster position="top-center" richColors closeButton />
    </div>
  )
}
