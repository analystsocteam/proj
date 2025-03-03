import React, { useEffect } from 'react';
import { ShoppingCart, Heart, User, Search, ChevronRight, ChevronLeft, Star } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Import Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function App() {
  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });

    // Initialize Bootstrap tooltips and popovers
    if (typeof document !== 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js';
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);

  return (
    <div className="app-container">
      {/* Top Bar */}
      <div className="bg-gray-100 py-2 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-600">Welcome to FreshMart Online Store</div>
            <div className="flex space-x-4">
              <a href="#" className="text-sm text-gray-600 hover:text-green-500 transition-colors">Help</a>
              <a href="#" className="text-sm text-gray-600 hover:text-green-500 transition-colors">Contact</a>
              <a href="#" className="text-sm text-gray-600 hover:text-green-500 transition-colors">FAQ</a>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center mb-4 md:mb-0" data-aos="fade-right">
              <div className="text-green-500 mr-2">
                <ShoppingCart size={32} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Fresh<span className="text-green-500">Mart</span></h1>
                <p className="text-xs text-gray-500">GROCERY STORE</p>
              </div>
            </div>

            {/* Search Bar */}
            <div className="relative w-full md:w-1/3 mb-4 md:mb-0" data-aos="fade-up">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full py-2 px-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-green-500">
                <Search size={20} />
              </button>
            </div>

            {/* User Actions */}
            <div className="flex items-center space-x-6" data-aos="fade-left">
              <a href="#" className="flex flex-col items-center text-gray-700 hover:text-green-500 transition-colors">
                <User size={24} />
                <span className="text-xs mt-1">Account</span>
              </a>
              <a href="#" className="flex flex-col items-center text-gray-700 hover:text-green-500 transition-colors">
                <Heart size={24} />
                <span className="text-xs mt-1">Wishlist</span>
              </a>
              <a href="#" className="flex flex-col items-center text-gray-700 hover:text-green-500 transition-colors relative">
                <ShoppingCart size={24} />
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
                <span className="text-xs mt-1">$120.00</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <ul className="hidden md:flex space-x-8 py-4">
              <li><a href="#" className="text-green-500 font-medium hover:text-green-600 transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-700 font-medium hover:text-green-500 transition-colors">Shop</a></li>
              <li><a href="#" className="text-gray-700 font-medium hover:text-green-500 transition-colors">Categories</a></li>
              <li><a href="#" className="text-gray-700 font-medium hover:text-green-500 transition-colors">Deals</a></li>
              <li><a href="#" className="text-gray-700 font-medium hover:text-green-500 transition-colors">About</a></li>
              <li><a href="#" className="text-gray-700 font-medium hover:text-green-500 transition-colors">Contact</a></li>
            </ul>
            <div className="md:hidden py-4">
              <button className="text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
            <div className="hidden md:block">
              <a href="tel:+1234567890" className="flex items-center text-gray-700">
                <div className="bg-green-100 rounded-full p-2 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Call us now</div>
                  <div className="font-medium">+1 (234) 567-890</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Slider */}
      <section className="relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop={true}
          className="hero-swiper"
        >
          <SwiperSlide>
            <div className="hero-slide bg-gradient-to-r from-green-50 to-green-100 py-16 md:py-24">
              <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 mb-8 md:mb-0" data-aos="fade-right">
                    <span className="inline-block bg-green-100 text-green-600 text-sm font-medium px-3 py-1 rounded-full mb-4">Fresh & Organic</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Fresh Vegetables <br />& Fruits</h2>
                    <p className="text-gray-600 mb-6">Get up to 30% off on your first order. Shop now for the freshest produce delivered to your doorstep.</p>
                    <div className="flex space-x-4">
                      <a href="#" className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-full transition-colors">Shop Now</a>
                      <a href="#" className="border border-gray-300 hover:border-green-500 text-gray-700 hover:text-green-500 font-medium py-3 px-6 rounded-full transition-colors">View Deals</a>
                    </div>
                  </div>
                  <div className="md:w-1/2 flex justify-center" data-aos="fade-left">
                    <img 
                      src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                      alt="Fresh Vegetables and Fruits" 
                      className="max-w-full h-auto rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero-slide bg-gradient-to-r from-orange-50 to-yellow-100 py-16 md:py-24">
              <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 mb-8 md:mb-0" data-aos="fade-right">
                    <span className="inline-block bg-orange-100 text-orange-600 text-sm font-medium px-3 py-1 rounded-full mb-4">Healthy & Delicious</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Organic Juices <br />& Smoothies</h2>
                    <p className="text-gray-600 mb-6">Refresh yourself with our 100% natural juices and smoothies. No preservatives, just pure goodness.</p>
                    <div className="flex space-x-4">
                      <a href="#" className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-full transition-colors">Shop Now</a>
                      <a href="#" className="border border-gray-300 hover:border-orange-500 text-gray-700 hover:text-orange-500 font-medium py-3 px-6 rounded-full transition-colors">Learn More</a>
                    </div>
                  </div>
                  <div className="md:w-1/2 flex justify-center" data-aos="fade-left">
                    <img 
                      src="https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                      alt="Organic Juices and Smoothies" 
                      className="max-w-full h-auto rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="swiper-button-next !text-green-500 !right-4 !w-10 !h-10 !bg-white !rounded-full !shadow-md after:!text-xl"></div>
        <div className="swiper-button-prev !text-green-500 !left-4 !w-10 !h-10 !bg-white !rounded-full !shadow-md after:!text-xl"></div>
      </section>

      {/* Features */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm flex items-center" data-aos="fade-up" data-aos-delay="100">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Free Shipping</h3>
                <p className="text-sm text-gray-600">On orders over $50</p>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm flex items-center" data-aos="fade-up" data-aos-delay="200">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Quick Delivery</h3>
                <p className="text-sm text-gray-600">Within 24 hours</p>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm flex items-center" data-aos="fade-up" data-aos-delay="300">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Secure Payment</h3>
                <p className="text-sm text-gray-600">100% secure checkout</p>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm flex items-center" data-aos="fade-up" data-aos-delay="400">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Money Back</h3>
                <p className="text-sm text-gray-600">30 days guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800" data-aos="fade-right">Shop by Category</h2>
            <a href="#" className="flex items-center text-green-500 hover:text-green-600 transition-colors" data-aos="fade-left">
              <span className="mr-2">View All Categories</span>
              <ChevronRight size={20} />
            </a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow" data-aos="fade-up" data-aos-delay="100">
              <div className="bg-green-100 p-4 rounded-full inline-flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="font-medium text-gray-800">Fruits & Vegetables</h3>
              <p className="text-sm text-gray-500 mt-1">50+ items</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow" data-aos="fade-up" data-aos-delay="200">
              <div className="bg-orange-100 p-4 rounded-full inline-flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                </svg>
              </div>
              <h3 className="font-medium text-gray-800">Bakery & Pastry</h3>
              <p className="text-sm text-gray-500 mt-1">30+ items</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow" data-aos="fade-up" data-aos-delay="300">
              <div className="bg-blue-100 p-4 rounded-full inline-flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="font-medium text-gray-800">Dairy & Eggs</h3>
              <p className="text-sm text-gray-500 mt-1">25+ items</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow" data-aos="fade-up" data-aos-delay="400">
              <div className="bg-red-100 p-4 rounded-full inline-flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              <h3 className="font-medium text-gray-800">Meat & Seafood</h3>
              <p className="text-sm text-gray-500 mt-1">40+ items</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow" data-aos="fade-up" data-aos-delay="500">
              <div className="bg-purple-100 p-4 rounded-full inline-flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="font-medium text-gray-800">Beverages</h3>
              <p className="text-sm text-gray-500 mt-1">35+ items</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow" data-aos="fade-up" data-aos-delay="600">
              <div className="bg-yellow-100 p-4 rounded-full inline-flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="font-medium text-gray-800">Snacks & Groceries</h3>
              <p className="text-sm text-gray-500 mt-1">60+ items</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800" data-aos="fade-right">Featured Products</h2>
            <div className="flex space-x-2" data-aos="fade-left">
              <button className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition-colors">
                <ChevronLeft size={20} />
              </button>
              <button className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition-colors">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Product Card 1 */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="100">
              <div className="relative">
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded">-15%</span>
                <button className="absolute top-2 right-2 bg-white p-1.5 rounded-full text-gray-700 hover:text-red-500 transition-colors">
                  <Heart size={18} />
                </button>
                <img 
                  src="https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Organic Bananas" 
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <div className="text-xs text-gray-500 mb-1">Fruits</div>
                <h3 className="font-medium text-gray-800 mb-2">Organic Bananas</h3>
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400">
                    <Star size={16} fill="#FACC15" />
                    <Star size={16} fill="#FACC15" />
                    <Star size={16} fill="#FACC15" />
                    <Star size={16} fill="#FACC15" />
                    <Star size={16} fill="#FACC15" className="text-gray-300" />
                  </div>
                  <span className="text-xs text-gray-500 ml-2">(4.0)</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-green-500 font-medium">$4.99</span>
                    <span className="text-gray-400 text-sm line-through ml-2">$5.99</span>
                  </div>
                  <button className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full transition-colors">
                    <ShoppingCart size={18} />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Product Card 2 */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="200">
              <div className="relative">
                <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-medium px-2 py-1 rounded">Organic</span>
                <button className="absolute top-2 right-2 bg-white p-1.5 rounded-full text-gray-700 hover:text-red-500 transition-colors">
                  <Heart size={18} />
                </button>
                <img 
                  src="https://images.unsplash.com/photo-1594282486552-05a3b6fbfb63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Fresh Strawberries" 
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <div className="text-xs text-gray-500 mb-1">Berries</div>
                <h3 className="font-medium text-gray-800 mb-2">Fresh Strawberries</h3>
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400">
                    <Star size={16} fill="#FACC15" />
                    <Star size={16} fill="#FACC15" />
                    <Star size={16} fill="#FACC15" />
                    <Star size={16} fill="#FACC15" />
                    <Star size={16} fill="#FACC15" />
                  </div>
                  <span className="text-xs text-gray-500 ml-2">(5.0)</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-green-500 font-medium">$3.99</span>
                  </div>
                  <button className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full transition-colors">
                    <ShoppingCart size={18} />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Product Card 3 */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="300">
              <div className="relative">
                <button className="absolute top-2 right-2 bg-white p-1.5 rounded-full text-gray-700 hover:text-red-500 transition-colors">
                  <Heart size={18} />
                </button>
                <img 
                  src="https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Fresh Avocados" 
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <div className="text-xs text-gray-500 mb-1">Vegetables</div>
                <h3 className="font-medium text-gray-800 mb-2">Fresh Avocados</h3>
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400">
                    <Star size={16} fill="#FACC15" />
                    <Star size={16} fill="#FACC15" />
                    <Star size={16} fill="#FACC15" />
                    <Star size={16} fill="#FACC15" />
                    <Star size={16} fill="#FACC15" className="text-gray-300" />
                  </div>
                  <span className="text-xs text-gray-500 ml-2">(4.5)</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-green-500 font-medium">$6.99</span>
                  </div>
                  <button className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full transition-colors">
                    <ShoppingCart size={18} />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Product Card 4 */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="400">
              <div className="relative">
                <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-medium px-2 py-1 rounded">Hot</span>
                <button className="absolute top-2 right-2 bg-white p-1.5 rounded-full text-gray-700 hover:text-red-500 transition-colors">
                  <Heart size={18} />
                </button>
                <img 
                  src="https://images.unsplash.com/photo-1577234286642-fc512a5f8f11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Fresh Orange Juice" 
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <div className="text-xs text-gray-500 mb-1">Beverages</div>
                <h3 className="font-medium text-gray-800 mb-2">Fresh Orange Juice</h3>
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400">
                    <Star size={16} fill="#FACC15" />
                    <Star size={16} fill="#FACC15" />
                    <Star size={16} fill="#FACC15" />
                    <Star size={16} fill="#FACC15" />
                    <Star size={16} fill="#FACC15" />
                  </div>
                  <span className="text-xs text-gray-500 ml-2">(4.8)</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-green-500 font-medium">$5.49</span>
                  </div>
                  <button className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full transition-colors">
                    <ShoppingCart size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg overflow-hidden" data-aos="fade-right">
              <div className="flex flex-col md:flex-row items-center p-6 md:p-8">
                <div className="md:w-1/2 mb-6 md:mb-0">
                  <span className="inline-block bg-green-100 text-green-600 text-sm font-medium px-3 py-1 rounded-full mb-4">Special Offer</span>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Fresh Vegetables</h3>
                  <p className="text-gray-600 mb-4">Get up to 25% off on all vegetable products. Limited time offer.</p>
                  <a href="#" className="inline-block bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-full transition-colors">Shop Now</a>
                </div>
                <div className="md:w-1/2">
                  <img 
                    src="https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                    alt="Fresh Vegetables" 
                    className="w-full h-auto rounded-lg transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg overflow-hidden" data-aos="fade-left">
              <div className="flex flex-col md:flex-row items-center p-6 md:p-8">
                <div className="md:w-1/2 mb-6 md:mb-0">
                  <span className="inline-block bg-orange-100 text-orange-600 text-sm font-medium px-3 py-1 rounded-full mb-4">New Arrival</span>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Organic Fruits</h3>
                  <p className="text-gray-600 mb-4">Try our new collection of 100% organic fruits. Freshly harvested.</p>
                  <a href="#" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-full transition-colors">Shop Now</a>
                </div>
                <div className="md:w-1/2">
                  <img 
                    src="https://images.unsplash.com/photo-1619566636858-adf3ef46400b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                    alt="Organic Fruits" 
                    className="w-full h-auto rounded-lg transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Don't just take our word for it. Here's what our happy customers have to say about our products and services.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg" data-aos="fade-up" data-aos-delay="100">
              <div className="flex text-yellow-400 mb-4">
                <Star size={20} fill="#FACC15" />
                <Star size={20} fill="#FACC15" />
                <Star size={20} fill="#FACC15" />
                <Star size={20} fill="#FACC15" />
                <Star size={20} fill="#FACC15" />
              </div>
              <p className="text-gray-600 mb-6">"I've been ordering my groceries from FreshMart for over a year now. The quality of their products is consistently excellent, and their delivery is always on time. Highly recommended!"</p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" 
                  alt="Customer" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-medium text-gray-800">Sarah Johnson</h4>
                  <p className="text-sm text-gray-500">Loyal Customer</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg" data-aos="fade-up" data-aos-delay="200">
              <div className="flex text-yellow-400 mb-4">
                <Star size={20} fill="#FACC15" />
                <Star size={20} fill="#FACC15" />
                <Star size={20} fill="#FACC15" />
                <Star size={20} fill="#FACC15" />
                <Star size={20} fill="#FACC15" />
              </div>
              <p className="text-gray-600 mb-6">"The organic selection at FreshMart is impressive. I love that I can get fresh, locally sourced produce delivered right to my door. Their customer service is also top-notch!"</p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" 
                  alt="Customer" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-medium text-gray-800">Michael Brown</h4>
                  <p className="text-sm text-gray-500">Regular Shopper</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg" data-aos="fade-up" data-aos-delay="300">
              <div className="flex text-yellow-400 mb-4">
                <Star size={20} fill="#FACC15" />
                <Star size={20} fill="#FACC15" />
                <Star size={20} fill="#FACC15" />
                <Star size={20} fill="#FACC15" />
                <Star size={20} fill="#FACC15" className="text-gray-300" />
              </div>
              <p className="text-gray-600 mb-6">"As a busy mom, FreshMart has been a lifesaver. Their app is easy to use, and I can quickly reorder my family's favorites. The fresh produce and meats are always of the highest quality."</p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" 
                  alt="Customer" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-medium text-gray-800">Emily Davis</h4>
                  <p className="text-sm text-gray-500">Happy Customer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 bg-green-500">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:w-1/2" data-aos="fade-right">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Subscribe to Our Newsletter</h2>
              <p className="text-green-100">Get the latest updates, deals and exclusive offers directly to your inbox.</p>
            </div>
            <div className="w-full md:w-1/2" data-aos="fade-left">
              <div className="flex flex-col sm:flex-row">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full sm:w-2/3 px-4 py-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-300 mb-2 sm:mb-0"
                />
                <button className="w-full sm:w-1/3 bg-gray-800 hover:bg-gray-900 text-white font-medium py-3 px-4 rounded-r-lg transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white pt-12 pb-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="text-green-400 mr-2">
                  <ShoppingCart size={28} />
                </div>
                <div>
                  <h2 className="text-xl font-bold">Fresh<span className="text-green-400">Mart</span></h2>
                  <p className="text-xs text-gray-400">GROCERY STORE</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">We're dedicated to providing you with the freshest, highest-quality groceries delivered right to your doorstep.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Shop</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Categories</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">My Account</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Order History</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Shipping Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Returns & Refunds</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-400">123 Grocery St, Food City, FC 12345</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-400">+1 (234) 567-890</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-400">support@freshmart.com</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-400">Mon-Fri: 8AM - 9PM<br />Sat-Sun: 8AM - 5PM</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2025 FreshMart. All rights reserved.</p>
              <div className="flex items-center">
                <img src="https://via.placeholder.com/40x25" alt="Visa" className="h-6 mr-2" />
                <img src="https://via.placeholder.com/40x25" alt="Mastercard" className="h-6 mr-2" />
                <img src="https://via.placeholder.com/40x25" alt="PayPal" className="h-6 mr-2" />
                <img src="https://via.placeholder.com/40x25" alt="Apple Pay" className="h-6" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;