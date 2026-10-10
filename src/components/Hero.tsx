import React, { useState } from 'react';
import { Sparkles, ArrowRight, ChevronRight, ChevronLeft, MapPin, Phone, MessageCircle } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { Product, CategoryItem } from '../types';
import { getImageUrl, handleImageError } from '../utils/imageUtils';

interface HeroProps {
  onExploreClick: () => void;
  onSelectCategory: (cat: string) => void;
  onSelectProduct?: (product: Product) => void;
  categories?: CategoryItem[];
  products?: Product[];
}

export const Hero: React.FC<HeroProps> = ({
  onExploreClick,
  onSelectCategory,
  onSelectProduct,
  categories,
  products = PRODUCTS,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Curated hero slides featuring real Blessed Boutique products
  const heroSlides = [
    {
      badge: '★ NEW SIGNATURE ARRIVAL',
      title: 'Royal Emerald Green 3-Piece Set',
      subtitle: 'Soft Jorjet with Resham Zari & Silk Inner',
      desc: 'Exclusive readymade three-piece salwar suit. Body sizes 36 to 44 available (Length: 42-44 inches). Full cash on home delivery across all 64 districts in Bangladesh.',
      priceTag: 'Only ৳1,850 BDT',
      product: products[0] || PRODUCTS[0],
      bgAccent: 'from-stone-950/95 via-stone-900/80 to-transparent',
    },
    {
      badge: '★ FESTIVE DAWAT SPECIAL',
      title: 'Crimson Scarlet Festive Jorjet',
      subtitle: 'Heavy Zardozi, Stone & Sequence Work',
      desc: 'Celebrate family gatherings in pure royal elegance. Intricately crafted neckline with resham embroidery, matching trousers & luxury dupatta.',
      priceTag: 'Special Offer: ৳1,650 BDT',
      product: products.find((p) => p.category.includes('Party Wear') || p.category.includes('Red')) || products[1] || PRODUCTS[1],
      bgAccent: 'from-neutral-950/95 via-stone-950/80 to-transparent',
    },
    {
      badge: '★ BESTSELLING READYMADE',
      title: 'Midnight Black & Sunshine Yellow',
      subtitle: 'Timeless Elegance & Modern Cut',
      desc: 'Hand-finished neck embroidery and lightweight breathable drape with silk inner attached. Hassle-free ready-to-wear sizing from 36 to 44.',
      priceTag: 'Starting From ৳999 - ৳1,450 BDT',
      product: products.find((p) => p.category.includes('Embroidered')) || products[3] || PRODUCTS[3],
      bgAccent: 'from-stone-950/95 via-black/80 to-transparent',
    },
  ];

  const currentHero = heroSlides[currentSlide];

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
  };

  const defaultSidebarCategories = [
    { name: 'Readymade 3-Piece Sets', count: 6, query: 'Readymade 3-Piece Sets' },
    { name: 'Festive Georgette Suits', count: 5, query: 'Festive Georgette Suits' },
    { name: 'Embroidered Jorjet Collection', count: 5, query: 'Embroidered Jorjet Collection' },
    { name: 'Party Wear & Festive Red', count: 4, query: 'Party Wear & Festive Red' },
    { name: 'Daily Elegance & Casuals', count: 3, query: 'Daily Elegance & Casuals' },
  ];

  const sidebarCategories =
    categories && categories.length > 0
      ? categories.map((c) => {
          const matchCount = products.filter(
            (p) =>
              p.category.toLowerCase().trim() === c.name.toLowerCase().trim() ||
              p.category.toLowerCase().includes(c.name.toLowerCase()) ||
              c.name.toLowerCase().includes(p.category.toLowerCase())
          ).length;
          return {
            name: c.name,
            count: matchCount > 0 ? matchCount : 1,
            query: c.name,
          };
        })
      : defaultSidebarCategories;

  return (
    <section className="bg-[#FAF7F5] py-5 sm:py-7 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Brand Banner Card */}
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#FCECE7] via-[#FFF5F2] to-[#FCECE7] border border-[#F3D7D0] p-4 sm:p-6 shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-left">
              <img
                src={getImageUrl('/assets/blessed-logo.svg')}
                alt="Blessed Boutique"
                onError={handleImageError}
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl object-cover shadow border border-[#E8C9C1] flex-shrink-0"
              />
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#3D1D23]">
                    Blessed Boutique
                  </h2>
                  <span className="text-[11px] font-semibold tracking-wider text-[#A13A45] bg-[#A13A45]/10 px-2.5 py-0.5 rounded-full uppercase">
                    Islampur, Dhaka
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#6C424A] font-medium mt-0.5">
                  Elevating women’s fashion with timeless elegance & modern trends. 🛍️
                </p>
                <div className="flex items-center gap-4 text-xs text-stone-600 mt-2 flex-wrap">
                  <span className="flex items-center gap-1 font-semibold text-stone-800">
                    <MapPin className="w-3.5 h-3.5 text-[#B3404A]" />
                    Islampur Wholesale Market, Dhaka
                  </span>
                  <span className="flex items-center gap-1 font-semibold text-stone-800">
                    <Phone className="w-3.5 h-3.5 text-[#B3404A]" />
                    01333-100412 / 01991-103203
                  </span>
                  <span className="text-[11px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded">
                    ক্যাশ অন হোম ডেলিভারি
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto justify-end">
              <a
                href="https://wa.me/8801333100412?text=Hello%20Blessed%20Boutique,%20I%20want%20to%20order."
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs flex items-center gap-1.5 shadow-sm transition-colors whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4" />
                <span>হোয়াটসঅ্যাপে অর্ডার</span>
              </a>
              <button
                onClick={onExploreClick}
                className="px-5 py-2.5 rounded-xl bg-[#3D1D23] hover:bg-[#582C35] text-white font-semibold text-xs flex items-center gap-1.5 shadow-sm transition-colors whitespace-nowrap cursor-pointer"
              >
                <span>কালেকশন দেখুন</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Main Grid: Sidebar + Hero Slider */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Vertical Categories Sidebar */}
          <div className="hidden lg:block lg:col-span-3 bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="bg-[#3D1D23] text-white px-5 py-3.5 flex items-center justify-between font-bold text-xs uppercase tracking-wider">
              <span>BLESSED COLLECTIONS</span>
              <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded font-mono">EXPLORE</span>
            </div>

            <div className="divide-y divide-stone-100">
              {sidebarCategories.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    onSelectCategory(item.query);
                    onExploreClick();
                  }}
                  className="w-full text-left px-5 py-3.5 text-xs text-stone-700 hover:bg-stone-50 hover:text-[#B3404A] flex items-center justify-between group transition-colors cursor-pointer"
                >
                  <span className="font-medium truncate mr-2">{item.name}</span>
                  <div className="flex items-center gap-1.5 flex-shrink-0 text-stone-400 group-hover:text-[#B3404A]">
                    <span className="text-[11px] text-stone-400 font-mono">({item.count})</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </button>
              ))}
            </div>

            <div className="p-4 bg-stone-50 border-t border-stone-100 space-y-2">
              <div className="text-[11px] text-stone-600 bg-white p-2.5 rounded-xl border border-stone-200 leading-relaxed">
                <span className="font-bold text-[#3D1D23] block">সাইজ স্পেসিফিকেশন:</span>
                ৩৬, ৩৮, ৪০, ৪২, ৪৪ সাইজ এভেইলেবল। লং ৪২-৪৪ ইঞ্চি।
              </div>
              <button
                onClick={onExploreClick}
                className="w-full py-2.5 px-3 rounded-xl bg-[#3D1D23] hover:bg-[#582C35] text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span>সব পোশাক ব্রাউজ করুন</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Main Hero Carousel */}
          <div className="lg:col-span-9">
            <div className="relative rounded-2xl overflow-hidden bg-[#181516] text-white shadow-xl min-h-[440px] sm:min-h-[480px] flex flex-col justify-between p-6 sm:p-10 lg:p-12">
              {/* Product Background Image */}
              <img
                src={getImageUrl(currentHero.product.image)}
                alt={currentHero.title}
                onError={handleImageError}
                className="absolute inset-0 w-full h-full object-cover object-center opacity-75 transition-all duration-700 ease-in-out"
                referrerPolicy="no-referrer"
              />
              <div className={`absolute inset-0 bg-gradient-to-r ${currentHero.bgAccent}`} />

              {/* Top Controls */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B3404A] text-white text-xs font-bold uppercase tracking-wider shadow-md">
                  <Sparkles className="w-3 h-3" />
                  <span>{currentHero.badge}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrevSlide}
                    className="w-8 h-8 rounded-full bg-black/50 hover:bg-[#B3404A] border border-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
                    aria-label="Previous Slide"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNextSlide}
                    className="w-8 h-8 rounded-full bg-black/50 hover:bg-[#B3404A] border border-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
                    aria-label="Next Slide"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Center Content */}
              <div className="relative z-10 my-auto max-w-xl space-y-4 pt-6 pb-6">
                <div>
                  <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                    {currentHero.title}
                  </h1>
                  <p className="font-serif italic text-xl sm:text-2xl text-[#F2C94C] mt-1.5">
                    {currentHero.subtitle}
                  </p>
                </div>

                <p className="text-stone-300 text-xs sm:text-sm font-light leading-relaxed">
                  {currentHero.desc}
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={() => {
                      if (onSelectProduct) onSelectProduct(currentHero.product);
                      else onExploreClick();
                    }}
                    className="px-6 py-3.5 rounded-xl bg-[#B3404A] hover:bg-[#942B34] text-white font-bold text-xs sm:text-sm tracking-wide transition-all shadow-lg flex items-center gap-2 cursor-pointer"
                  >
                    <span>অর্ডার করুন (Order Now)</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-[#F2C94C] font-mono">
                    {currentHero.priceTag}
                  </div>
                </div>
              </div>

              {/* Bottom Indicators */}
              <div className="relative z-10 flex items-center justify-between pt-4 border-t border-white/10">
                <div className="flex items-center gap-2">
                  {heroSlides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-1.5 rounded-full transition-all cursor-pointer ${
                        currentSlide === idx ? 'w-8 bg-[#F2C94C]' : 'w-2 bg-white/30 hover:bg-white/60'
                      }`}
                      aria-label={`Slide ${idx + 1}`}
                    />
                  ))}
                </div>
                <div className="text-[11px] text-stone-300 hidden sm:block">
                  Cash on Delivery all over Bangladesh
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
