import React, { useState } from 'react';
import { ShoppingBag, Heart, Sparkles, MessageCircle, Menu, X, Search, Phone, ChevronDown, Truck, ShieldCheck } from 'lucide-react';
import { CATEGORIES } from '../data/products';
import { CategoryItem } from '../types';
import { getImageUrl, handleImageError } from '../utils/imageUtils';

interface NavbarProps {
  cartCount: number;
  cartTotal: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onSelectCategory: (cat: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onOpenAdmin?: () => void;
  onOpenTracking?: () => void;
  categories?: CategoryItem[];
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  cartTotal,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onSelectCategory,
  searchQuery,
  setSearchQuery,
  onOpenAdmin,
  onOpenTracking,
  categories,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [selectedCatName, setSelectedCatName] = useState('সকল ক্যাটাগরি');

  const navCategories = categories && categories.length > 0
    ? ['All Collections', ...categories.map((c) => c.name)]
    : Array.from(CATEGORIES);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategoryFromDropdown = (cat: string) => {
    setSelectedCatName(cat);
    onSelectCategory(cat);
    setCategoryDropdownOpen(false);
    scrollToSection('catalog');
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    scrollToSection('catalog');
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-stone-200 shadow-sm">
      {/* Top Black Notification Bar */}
      <div className="bg-[#111111] text-stone-300 text-[11px] sm:text-xs py-2 px-4 border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left helpline */}
          <div className="flex items-center gap-2">
            <span className="text-white font-medium flex items-center gap-1">
              <Phone className="w-3 h-3 text-[#E28B96]" />
              <span className="hidden sm:inline">হটলাইন:</span> 01333-100412
            </span>
            <span className="hidden md:inline text-stone-500">|</span>
            <span className="hidden md:inline text-stone-400">০১৯৯১-১০৩২০৩</span>
            <span className="hidden lg:inline text-stone-500">|</span>
            <span className="hidden lg:inline text-stone-400">ইসলামপুর, ঢাকা</span>
          </div>

          {/* Center delivery announcement */}
          <div className="hidden lg:flex items-center gap-2 text-stone-200">
            <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
            <span>সারা বাংলাদেশে হোম ডেলিভারি ও ফুল ক্যাশ অন ডেলিভারি (COD)!</span>
          </div>

          {/* Right quick actions */}
          <div className="flex items-center gap-3 sm:gap-4 text-stone-300">
            <button
              onClick={onOpenTracking}
              className="hover:text-white transition-colors cursor-pointer flex items-center gap-1 text-[11px]"
            >
              <Truck className="w-3 h-3 text-[#C23330]" />
              <span>অর্ডার ট্র্যাকিং</span>
            </button>
            <button
              onClick={onOpenAdmin}
              className="hover:text-white transition-colors cursor-pointer flex items-center gap-1 bg-white/10 px-2 py-0.5 rounded text-[11px] font-semibold text-amber-300 hover:bg-white/20"
            >
              <ShieldCheck className="w-3 h-3 text-amber-400" />
              <span>অ্যাডমিন</span>
            </button>
            <button
              onClick={onOpenWishlist}
              className="hover:text-white transition-colors cursor-pointer flex items-center gap-1"
            >
              <span>উইশলিস্ট</span>
              <span>({wishlistCount})</span>
            </button>
            <button
              onClick={onOpenCart}
              className="hover:text-white transition-colors cursor-pointer flex items-center gap-1"
            >
              <span>কার্ট</span>
              <span>({cartCount})</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Header Middle Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-stone-800 hover:text-[#C23330] cursor-pointer"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Brand Logo */}
        <div
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="cursor-pointer flex items-center gap-3 select-none"
        >
          <img
            src={getImageUrl('/assets/blessed-logo.svg')}
            alt="Blessed Boutique Logo"
            onError={handleImageError}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl object-cover shadow-sm border border-[#E8C9C1]"
          />
          <div className="flex flex-col items-start">
            <div className="flex items-baseline gap-1.5">
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#3D1D23]">
                Blessed
              </span>
              <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#B3404A] uppercase">
                BOUTIQUE
              </span>
            </div>
            <p className="text-[9px] uppercase tracking-wider text-stone-500 font-medium hidden sm:block">
              Islampur, Dhaka • Elegant • Trendy • Affordable
            </p>
          </div>
        </div>

        {/* Middle Search Bar */}
        <form
          onSubmit={handleSearchSubmit}
          className="hidden md:flex flex-1 max-w-xl mx-4 items-center bg-stone-50 rounded-full border border-stone-300 focus-within:border-[#C23330] focus-within:ring-1 focus-within:ring-[#C23330] overflow-hidden transition-all shadow-inner"
        >
          {/* Category Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
              className="h-10 px-3.5 text-xs text-stone-700 font-medium flex items-center gap-1 border-r border-stone-200 hover:bg-stone-100 transition-colors whitespace-nowrap cursor-pointer"
            >
              <span className="truncate max-w-[110px]">{selectedCatName}</span>
              <ChevronDown className="w-3.5 h-3.5 text-stone-400" />
            </button>

            {categoryDropdownOpen && (
              <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-xl border border-stone-200 py-1.5 z-50 max-h-60 overflow-y-auto">
                {navCategories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => handleSelectCategoryFromDropdown(cat)}
                    className="w-full text-left px-4 py-2 text-xs text-stone-700 hover:bg-stone-50 hover:text-[#C23330] font-medium truncate"
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Search Input */}
          <input
            type="text"
            placeholder="পোশাকের নাম, ফেব্রিক, বা কোড দিয়ে খুঁজুন..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 px-3 py-2 text-xs text-stone-800 bg-transparent focus:outline-none placeholder:text-stone-400"
          />

          {/* Search Red Button */}
          <button
            type="submit"
            className="h-10 px-5 bg-[#C23330] hover:bg-[#A92A28] text-white text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Search className="w-3.5 h-3.5" />
            <span>খুঁজুন</span>
          </button>
        </form>

        {/* Right Info & Actions */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Hotline box */}
          <div className="hidden xl:flex items-center gap-2.5 pl-2 border-l border-stone-200">
            <div className="w-9 h-9 rounded-full bg-[#E28B96]/20 text-[#B3404A] flex items-center justify-center flex-shrink-0">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-stone-500 block leading-none">
                হটলাইন / হোয়াটসঅ্যাপ
              </span>
              <a
                href="tel:+8801333100412"
                className="font-mono font-bold text-xs text-stone-800 hover:text-[#B3404A]"
              >
                01333-100412
              </a>
            </div>
          </div>

          {/* Wishlist Button */}
          <button
            onClick={onOpenWishlist}
            className="p-2.5 text-stone-700 hover:text-[#C23330] transition-colors relative rounded-full hover:bg-stone-100 cursor-pointer"
            aria-label="Wishlist"
          >
            <Heart className="w-5 h-5" />
            {wishlistCount > 0 && (
              <span className="absolute top-1 right-1 bg-[#C23330] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Cart Button with BDT Price Display */}
          <button
            onClick={onOpenCart}
            className="flex items-center gap-2 py-2 px-3 rounded-lg bg-stone-900 hover:bg-[#C23330] text-white transition-all shadow cursor-pointer"
            aria-label="Cart"
          >
            <div className="relative">
              <ShoppingBag className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-[#C23330] text-white text-[9px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center ring-2 ring-stone-900">
                  {cartCount}
                </span>
              )}
            </div>
            <span className="text-xs font-bold font-mono">
              ৳{cartTotal.toLocaleString()} BDT
            </span>
          </button>

          {/* Admin Console Shortcut */}
          <button
            onClick={onOpenAdmin}
            className="hidden sm:flex items-center gap-1.5 py-2 px-2.5 rounded-lg border border-stone-200 hover:border-[#C23330] hover:bg-stone-50 text-stone-700 text-xs font-semibold transition-all cursor-pointer"
            title="Open Admin Console"
          >
            <ShieldCheck className="w-4 h-4 text-[#C23330]" />
            <span className="hidden md:inline">Admin</span>
          </button>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="md:hidden px-4 pb-3">
        <form
          onSubmit={handleSearchSubmit}
          className="flex items-center bg-stone-50 rounded-lg border border-stone-300 overflow-hidden"
        >
          <input
            type="text"
            placeholder="পোশাকের নাম, ফেব্রিক, কোড..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 px-3 py-2 text-xs text-stone-800 bg-transparent focus:outline-none"
          />
          <button
            type="submit"
            className="px-3 py-2 bg-[#C23330] text-white text-xs font-medium"
          >
            <Search className="w-4 h-4" />
          </button>
        </form>
      </div>

      {/* Bottom Category Navigation Strip */}
      <div className="hidden lg:block bg-stone-50 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Left Red Categories Button */}
          <div className="flex items-center">
            <button
              onClick={() => {
                onSelectCategory('All Collections');
                scrollToSection('catalog');
              }}
              className="h-11 px-5 bg-[#C23330] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-[#A92A28] transition-colors cursor-pointer"
            >
              <Menu className="w-4 h-4" />
              <span>CATEGORIES ▼</span>
              <span className="text-[10px] bg-black/20 px-1.5 py-0.5 rounded ml-1">EXPLORE</span>
            </button>

            {/* Nav links */}
            <nav className="flex items-center space-x-6 pl-6 text-xs font-medium text-stone-700">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="hover:text-[#C23330] transition-colors cursor-pointer"
              >
                হোম
              </button>
              <button
                onClick={() => {
                  onSelectCategory('Readymade 3-Piece Sets');
                  scrollToSection('catalog');
                }}
                className="hover:text-[#C23330] transition-colors cursor-pointer"
              >
                রেডিমেড ৩-পিস (৩৬-৪৪)
              </button>
              <button
                onClick={() => {
                  onSelectCategory('Festive Georgette Suits');
                  scrollToSection('catalog');
                }}
                className="hover:text-[#C23330] transition-colors cursor-pointer"
              >
                ফেস্টিভ জর্জেট সুট
              </button>
              <button
                onClick={() => {
                  onSelectCategory('Embroidered Jorjet Collection');
                  scrollToSection('catalog');
                }}
                className="hover:text-[#C23330] transition-colors cursor-pointer"
              >
                এমব্রয়ডারি জর্জেট
              </button>
              <button
                onClick={() => {
                  onSelectCategory('Party Wear & Festive Red');
                  scrollToSection('catalog');
                }}
                className="hover:text-[#C23330] transition-colors cursor-pointer"
              >
                পার্টি ওয়্যার রেড
              </button>
              <button
                onClick={() => {
                  onSelectCategory('Daily Elegance & Casuals');
                  scrollToSection('catalog');
                }}
                className="hover:text-[#C23330] transition-colors cursor-pointer"
              >
                ডেইলি ক্যাজুয়াল (৳৯৯৯+)
              </button>
              <button
                onClick={() => scrollToSection('lookbook')}
                className="hover:text-[#C23330] transition-colors cursor-pointer"
              >
                কমিউনিটি লুকবুক
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="hover:text-[#C23330] transition-colors cursor-pointer"
              >
                FAQ ও সাপোর্ট
              </button>
            </nav>
          </div>

          {/* Right WhatsApp Support Link */}
          <a
            href="https://wa.me/8801333100412?text=Hello%20Blessed%20Boutique,%20I%20would%20like%20to%20order."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800 transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>হোয়াটসঅ্যাপ (01333-100412)</span>
          </a>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-stone-200 px-6 py-6 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-3 font-medium text-sm text-stone-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-left py-2 border-b border-stone-100 hover:text-[#B3404A]"
            >
              হোম
            </button>
            <button
              onClick={() => {
                onSelectCategory('Readymade 3-Piece Sets');
                scrollToSection('catalog');
              }}
              className="text-left py-2 border-b border-stone-100 hover:text-[#B3404A]"
            >
              রেডিমেড ৩-পিস সেট (সাইজ ৩৬-৪৪)
            </button>
            <button
              onClick={() => {
                onSelectCategory('Festive Georgette Suits');
                scrollToSection('catalog');
              }}
              className="text-left py-2 border-b border-stone-100 hover:text-[#B3404A]"
            >
              ফেস্টিভ জর্জেট কালেকশন
            </button>
            <button
              onClick={() => {
                onSelectCategory('Embroidered Jorjet Collection');
                scrollToSection('catalog');
              }}
              className="text-left py-2 border-b border-stone-100 hover:text-[#B3404A]"
            >
              এমব্রয়ডারি জর্জেট সুট
            </button>
            <button
              onClick={() => {
                onSelectCategory('Party Wear & Festive Red');
                scrollToSection('catalog');
              }}
              className="text-left py-2 border-b border-stone-100 hover:text-[#B3404A]"
            >
              পার্টি ওয়্যার ও স্পেশাল রেড
            </button>
            <button
              onClick={() => {
                onSelectCategory('Daily Elegance & Casuals');
                scrollToSection('catalog');
              }}
              className="text-left py-2 border-b border-stone-100 hover:text-[#B3404A]"
            >
              ডেইলি ক্যাজুয়াল এলিগ্যান্স (৳৯৯৯+)
            </button>
            <button
              onClick={() => scrollToSection('lookbook')}
              className="text-left py-2 border-b border-stone-100 hover:text-[#C23330]"
            >
              কমিউনিটি লুকবুক
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-left py-2 border-b border-stone-100 hover:text-[#C23330]"
            >
              সাধারণ জিজ্ঞাসিত প্রশ্নাবলী (FAQ)
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-left py-2 border-b border-stone-100 hover:text-[#C23330]"
            >
              আমাদের কথা ও কোয়ালিটি গ্যারান্টি
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenTracking) onOpenTracking();
              }}
              className="text-left py-2 border-b border-stone-100 text-stone-800 hover:text-[#C23330] flex items-center gap-2 font-medium"
            >
              <Truck className="w-4 h-4 text-[#C23330]" />
              <span>অর্ডার ট্র্যাকিং (Live Tracking)</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenAdmin) onOpenAdmin();
              }}
              className="text-left py-2 text-[#C23330] hover:text-[#A92A28] flex items-center gap-2 font-bold"
            >
              <ShieldCheck className="w-4 h-4 text-[#C23330]" />
              <span>অ্যাডমিন প্যানেল (Admin Console)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
