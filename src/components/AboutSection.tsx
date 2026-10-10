import React from 'react';
import { Sparkles, Award, ShieldCheck, HeartHandshake, MapPin } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { getImageUrl, handleImageError } from '../utils/imageUtils';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#B3404A]/10 text-[#B3404A] text-xs font-bold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ISLAMPUR, DHAKA • BANGLADESH</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#2C2123] leading-tight">
              About Blessed Boutique <br className="hidden sm:inline" />
              <span className="text-[#B3404A]">Timeless Elegance & Modern Trends</span>
            </h2>

            <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-light">
              Welcome to <strong>Blessed Boutique</strong>, located in the historic textile hub of <strong>Islampur, Dhaka</strong>. Our passion is elevating women’s fashion with sophisticated, readymade 3-piece salwar suits and festive ensembles that unite contemporary elegance with traditional craftsmanship.
            </p>

            <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-light">
              Every outfit in our catalog is crafted from <strong>premium soft jorjet / georgette</strong> with comfortable attached silk inners. We offer inclusive standard body sizing (<strong>36 to 44 body size</strong> with 42-44 inch length) so you get the perfect fit straight out of the package. With <strong>100% Cash on Home Delivery</strong> across all 64 districts of Bangladesh, you can inspect the embroidery and fabric before completing payment.
            </p>

            {/* 3 Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#FCFAF7] border border-stone-200 space-y-1.5">
                <div className="w-8 h-8 rounded-lg bg-[#B3404A]/10 text-[#B3404A] flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="font-serif font-bold text-sm text-[#2C2123]">Premium Soft Jorjet</h4>
                <p className="text-[11px] text-stone-500">Hand-finished resham & sequence work with silk inner attached.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#FCFAF7] border border-stone-200 space-y-1.5">
                <div className="w-8 h-8 rounded-lg bg-[#B3404A]/10 text-[#B3404A] flex items-center justify-center">
                  <Award className="w-4 h-4" />
                </div>
                <h4 className="font-serif font-bold text-sm text-[#2C2123]">Ready 36-44 Sizing</h4>
                <p className="text-[11px] text-stone-500">Pre-stitched readymade cut ready to wear for festivals & dawats.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#FCFAF7] border border-stone-200 space-y-1.5">
                <div className="w-8 h-8 rounded-lg bg-[#B3404A]/10 text-[#B3404A] flex items-center justify-center">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <h4 className="font-serif font-bold text-sm text-[#2C2123]">Cash on Delivery</h4>
                <p className="text-[11px] text-stone-500">Doorstep delivery & inspection across all Bangladesh districts.</p>
              </div>
            </div>

            {/* Location & Contact Highlights */}
            <div className="p-4 rounded-xl bg-[#FCECE7]/60 border border-[#F3D7D0] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#B3404A] flex-shrink-0" />
                <div>
                  <span className="font-bold text-xs text-[#3D1D23] block">Islampur, Dhaka Outlet & Warehouse</span>
                  <span className="text-[11px] text-stone-600">WhatsApp: 01333-100412 / 01991-103203</span>
                </div>
              </div>
              <a
                href="https://wa.me/8801333100412?text=Hello%20Blessed%20Boutique"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-lg bg-[#B3404A] hover:bg-[#942B34] text-white text-xs font-semibold transition-colors"
              >
                হোয়াটসঅ্যাপে যোগাযোগ
              </a>
            </div>
          </div>

          {/* Right Image Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-2 border-stone-200 relative group">
              <img
                src={getImageUrl(PRODUCTS[0].image)}
                alt="Blessed Boutique Readymade Ensemble"
                onError={handleImageError}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Floating Quality Seal Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-xl border border-stone-200 flex items-center gap-3.5">
                <img
                  src={getImageUrl('/assets/blessed-logo.svg')}
                  alt="Blessed Boutique"
                  onError={handleImageError}
                  className="w-12 h-12 rounded-xl object-cover shadow border border-[#E8C9C1] flex-shrink-0"
                />
                <div>
                  <h5 className="font-serif font-bold text-sm text-[#2C2123]">Blessed Boutique Guarantee</h5>
                  <p className="text-[11px] text-stone-500">Elegant • Trendy • Affordable fashion from Islampur, Dhaka.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
