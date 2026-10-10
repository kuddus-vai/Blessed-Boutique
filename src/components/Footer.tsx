import React from 'react';
import { Sparkles, MessageCircle, Instagram, Facebook, MapPin, Phone, Mail, Truck, ShieldCheck, RefreshCw } from 'lucide-react';
import { getImageUrl, handleImageError } from '../utils/imageUtils';

interface FooterProps {
  onOpenAdmin?: () => void;
  onOpenTracking?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAdmin, onOpenTracking }) => {
  return (
    <footer className="bg-[#181516] text-[#FCFAF7] border-t border-stone-800">
      {/* Top 4 Highlights Strip */}
      <div className="border-b border-stone-800 py-8 bg-[#1F1A1C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#B3404A]/20 text-[#F2A3AB] flex items-center justify-center flex-shrink-0">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <h5 className="font-semibold text-xs sm:text-sm text-white">ক্যাশ অন ডেলিভারি</h5>
                <p className="text-[11px] text-stone-400">ঢাকা ও সারাদেশে হোম ডেলিভারি</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#B3404A]/20 text-[#F2A3AB] flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h5 className="font-semibold text-xs sm:text-sm text-white">৩৬-৪৪ বডি সাইজ</h5>
                <p className="text-[11px] text-stone-400">রেডিমেড স্ট্রিচড ৩-পিস সেট</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#B3404A]/20 text-[#F2A3AB] flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h5 className="font-semibold text-xs sm:text-sm text-white">সফট জর্জেট ফেব্রিক</h5>
                <p className="text-[11px] text-stone-400">সিল্ক ইনার এটাচড কোয়ালিটি</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#B3404A]/20 text-[#F2A3AB] flex items-center justify-center flex-shrink-0">
                <RefreshCw className="w-5 h-5" />
              </div>
              <div>
                <h5 className="font-semibold text-xs sm:text-sm text-white">হোয়াটসঅ্যাপ অর্ডার</h5>
                <p className="text-[11px] text-stone-400">০১৩৩৩-১০০৪১২ সরাসরি লাইন</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main 4-Column Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-stone-800">
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={getImageUrl('/assets/blessed-logo.svg')}
                alt="Blessed Boutique"
                onError={handleImageError}
                className="w-11 h-11 rounded-xl object-cover shadow border border-[#E8C9C1]"
              />
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                Blessed <span className="text-[#F2C94C] italic font-normal">Boutique</span>
              </span>
            </div>
            <p className="text-xs text-stone-300 leading-relaxed font-light">
              Elevating women’s fashion with timeless elegance & modern trends. ইসলামপুর, ঢাকা ভিত্তিক প্রিমিয়াম রেডিমেড ৩-পিস সালোয়ার কামিজ ও ফেস্টিভ কালেকশন।
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://facebook.com/blessed_boutiquex"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-colors"
                aria-label="Facebook: blessed_boutiquex"
                title="Facebook: blessed_boutiquex"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com/blessed_boutiquex"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E4405F] hover:text-white transition-colors"
                aria-label="Instagram: blessed_boutiquex"
                title="Instagram: blessed_boutiquex"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/8801333100412"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-colors"
                aria-label="WhatsApp: 01333-100412"
                title="WhatsApp: 01333-100412"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
            <div className="text-[11px] text-stone-400 space-y-0.5 pt-1">
              <p className="text-stone-300 font-medium">হ্যান্ডেল: <span className="text-[#F2C94C]">@blessed_boutiquex</span></p>
              <p className="text-stone-400">হোয়াটসঅ্যাপ: 01333-100412 / 01991-103203</p>
            </div>
          </div>

          {/* Collections List */}
          <div className="space-y-3">
            <h4 className="font-serif text-base font-bold text-white uppercase tracking-wider">
              কালেকশন সমূহ
            </h4>
            <ul className="space-y-2 text-xs text-stone-300">
              <li>
                <a href="#catalog" className="hover:text-[#F2C94C] transition-colors">
                  রেডিমেড ৩-পিস সেট (সাইজ ৩৬-৪৪)
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-[#F2C94C] transition-colors">
                  ফেস্টিভ জর্জেট সুট কালেকশন
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-[#F2C94C] transition-colors">
                  এমব্রয়ডারি জর্জেট কালেকশন
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-[#F2C94C] transition-colors">
                  পার্টি ওয়্যার ও ব্রাইডাল রেড
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-[#F2C94C] transition-colors">
                  ডেইলি ক্যাজুয়াল এলিগ্যান্স (৳৯৯৯+)
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="font-serif text-base font-bold text-white uppercase tracking-wider">
              যোগাযোগ ও আউটলেট
            </h4>
            <div className="space-y-2.5 text-xs text-stone-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F2C94C] flex-shrink-0 mt-0.5" />
                <span>ইসলামপুর পাইকারি মার্কেট, ঢাকা, বাংলাদেশ</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F2C94C] flex-shrink-0" />
                <a href="tel:+8801333100412" className="hover:text-white font-mono">
                  01333-100412 / 01991-103203
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#F2C94C] flex-shrink-0" />
                <a href="mailto:boutiqueblessedreal@gmail.com" className="hover:text-white">
                  boutiqueblessedreal@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href="https://wa.me/8801333100412" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300">
                  WhatsApp Support (Click to Chat)
                </a>
              </div>
            </div>
          </div>

          {/* Quick Help & Tracking */}
          <div className="space-y-3">
            <h4 className="font-serif text-base font-bold text-white uppercase tracking-wider">
              অর্ডার ও সাপোর্ট
            </h4>
            <ul className="space-y-2 text-xs text-stone-300">
              <li>
                <button
                  onClick={onOpenTracking}
                  className="hover:text-[#F2C94C] transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <Truck className="w-3.5 h-3.5 text-[#F2C94C]" />
                  <span>লাইভ অর্ডার ট্র্যাকিং</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenAdmin}
                  className="hover:text-[#F2C94C] transition-colors cursor-pointer text-left flex items-center gap-1.5 text-stone-400 hover:text-white"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-stone-400" />
                  <span>অ্যাডমিন ড্যাশবোর্ড</span>
                </button>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#F2C94C] transition-colors">
                  সাইজ গাইড ও এক্সচেঞ্জ পলিসি
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#F2C94C] transition-colors">
                  আমাদের গল্প ও কোয়ালিটি নিশ্চয়তা
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Payment Methods */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>© 2026 Blessed Boutique. All rights reserved. Islampur, Dhaka, Bangladesh.</p>
          <div className="flex items-center gap-3 text-stone-400 font-medium">
            <span>ক্যাশ অন ডেলিভারি</span>
            <span>•</span>
            <span>বিকাশ</span>
            <span>•</span>
            <span>নগদ</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
