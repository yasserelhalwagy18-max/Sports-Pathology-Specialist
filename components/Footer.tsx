
import React from 'react';
import { Microscope, Mail, Phone, MapPin, Instagram, Linkedin, Twitter } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer id="contact" className="bg-slate-950 text-slate-400 pt-16 lg:pt-24 pb-12 border-t border-white/5 text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16 lg:mb-20">
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-8 text-white cursor-pointer justify-start flex-row-reverse" onClick={() => onNavigate('home')}>
              <div className="bg-blue-700 p-2 rounded-xl">
                <Microscope className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col items-end">
                <span className="text-lg font-black tracking-tight leading-none">دکتر امیر حبیبی</span>
                <span className="text-[10px] text-blue-500 font-black tracking-widest uppercase mt-1">کلینیک تخصصی</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-10 max-w-xs">
              تعریف استانداردهای بالینی برای پاتولوژی اسکلتی-عضلانی در ورزش‌های حرفه‌ای.
            </p>
            <div className="flex gap-4 justify-end">
              <a href="#" className="w-10 h-10 md:w-12 md:h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-blue-700 hover:text-white transition-all"><Linkedin size={20} /></a>
              <a href="#" className="w-10 h-10 md:w-12 md:h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-blue-700 hover:text-white transition-all"><Twitter size={20} /></a>
              <a href="#" className="w-10 h-10 md:w-12 md:h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-blue-700 hover:text-white transition-all"><Instagram size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-black mb-6 lg:mb-8 uppercase text-xs tracking-widest">منابع</h4>
            <ul className="space-y-4 text-sm font-bold uppercase tracking-tight text-[11px]">
              <li><button onClick={() => onNavigate('specialties')} className="hover:text-blue-500 transition-colors">بررسی مدالیته‌ها</button></li>
              <li><button onClick={() => onNavigate('research')} className="hover:text-blue-500 transition-colors">نمایه انتشارات</button></li>
              <li><button onClick={() => onNavigate('cases')} className="hover:text-blue-500 transition-colors">آرشیو موفقیت‌ها</button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-blue-500 transition-colors">گاه‌شمار حرفه‌ای</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-black mb-6 lg:mb-8 uppercase text-xs tracking-widest">مرکز اصلی</h4>
            <ul className="space-y-6 text-sm">
              <li className="flex gap-4 items-start flex-row-reverse">
                <MapPin className="text-blue-500 shrink-0" size={18} />
                <span className="font-medium text-white/80">تهران، میدان ونک<br />ساختمان پزشکان متخصص</span>
              </li>
              <li className="flex gap-4 items-center flex-row-reverse">
                <Phone className="text-blue-500 shrink-0" size={18} />
                <span className="font-medium text-white/80" dir="ltr">+۹۸ ۲۱ ۲۳۴۵ ۶۷۸۹</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-black mb-6 lg:mb-8 uppercase text-xs tracking-widest">خبرنامه</h4>
            <p className="text-xs mb-6 max-w-xs font-medium">به‌روزرسانی‌های ماهانه علمی در مورد بازسازی بافت و تشخیص‌های عملکردی.</p>
            <div className="flex gap-2 p-1.5 bg-white/5 rounded-2xl border border-white/5 flex-row-reverse">
              <input 
                type="email" 
                placeholder="ایمیل کاری" 
                className="bg-transparent px-4 py-2 flex-1 text-xs outline-none text-white font-bold text-right"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-blue-700 transition-all shrink-0">ارسال</button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-right">
          <p className="text-[10px] font-black uppercase tracking-widest opacity-30 order-2 md:order-1">© {new Date().getFullYear()} آزمایشگاه پاتولوژی دکتر امیر حبیبی. تمامی حقوق محفوظ است.</p>
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest opacity-30 order-1 md:order-2">
            <a href="#" className="hover:text-blue-500">حریم خصوصی</a>
            <a href="#" className="hover:text-blue-500">شرایط استفاده</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
