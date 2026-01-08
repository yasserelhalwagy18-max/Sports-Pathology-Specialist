import React, { useState } from 'react';
import { CASE_STUDIES } from '../constants';
import { Play, TrendingUp, History, Info, ArrowLeft, X, CheckCircle2 } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <div className="min-h-screen bg-white text-right animate-in fade-in duration-700">
      <div className="bg-slate-50 py-20 lg:py-32 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="text-right">
              <h3 className="text-blue-700 font-black tracking-widest uppercase text-xs mb-4 italic flex items-center gap-2 justify-end">
                <span className="w-8 h-px bg-blue-700"></span> سوابق بالینی
              </h3>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tighter mb-8 leading-[1.1]">از آسیب‌های <br />پنهان تا <span className="text-blue-700 italic">پیروزی</span>.</h1>
              <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed max-w-xl">
                نمونه‌های واقعی از اینکه چگونه پاتولوژی پیشرفته مسیرهای درمان را تغییر داده و دوران حرفه‌ای ورزشکاران نخبگان را تضمین کرده است.
              </p>
            </div>
            
            {/* Hero Video Player Section */}
            <div className="relative group overflow-hidden rounded-[2.5rem] md:rounded-[4rem] shadow-2xl h-[350px] md:h-[450px] bg-slate-200">
              {isVideoPlaying ? (
                <div className="relative w-full h-full bg-black animate-in fade-in zoom-in-95 duration-500">
                  <iframe 
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0&showinfo=0&modestbranding=1" 
                    title="Journey Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  <button 
                    onClick={() => setIsVideoPlaying(false)}
                    className="absolute top-6 right-6 bg-white/20 backdrop-blur-md p-3 rounded-full text-white hover:bg-red-500 transition-all shadow-xl active:scale-90"
                    aria-label="بستن ویدیو"
                  >
                    <X size={24} />
                  </button>
                </div>
              ) : (
                <div 
                  className="relative h-full cursor-pointer group"
                  onClick={() => setIsVideoPlaying(true)}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1000" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" 
                    alt="ورزشکار در حال تمرین" 
                  />
                  <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/30 transition-colors flex items-center justify-center">
                    <div className="flex flex-col items-center gap-6">
                      <div className="w-24 h-24 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center text-white border border-white/30 group-hover:scale-110 group-hover:bg-blue-700 transition-all duration-500 shadow-2xl">
                        <Play className="fill-white rtl-flip ml-1" size={36} />
                      </div>
                      <div className="text-center">
                        <p className="text-white font-black uppercase tracking-[0.2em] text-xs mb-1">مشاهده مستند کوتاه</p>
                        <p className="text-blue-200 font-bold text-sm">مسیر بازیابی: از آزمایشگاه تا استادیوم</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20 lg:py-32 space-y-24 lg:space-y-40">
        {CASE_STUDIES.map((study, idx) => (
          <div key={idx} className={`grid lg:grid-cols-2 gap-16 lg:gap-24 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
            <div className={`relative ${idx % 2 !== 0 ? 'lg:order-2' : ''}`}>
              <div className="relative rounded-[3rem] md:rounded-[5rem] overflow-hidden group shadow-[0_30px_80px_-20px_rgba(0,0,0,0.15)] bg-slate-100">
                <img src={study.image} className="w-full h-[450px] md:h-[650px] object-cover group-hover:scale-105 transition-transform duration-[2000ms] grayscale-[0.2] group-hover:grayscale-0" alt={study.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-10 left-10 right-10 text-right text-white">
                  <div className="flex gap-4 items-center mb-6 flex-row-reverse">
                    <div className="bg-blue-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">کیس شماره #{idx + 829}</div>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-white/70">
                      <CheckCircle2 size={14} className="text-green-400" />
                      <span>سوابق بالینی تأیید شده</span>
                    </div>
                  </div>
                  <h4 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight">{study.title}</h4>
                </div>
              </div>
              {/* Decorative Card */}
              <div className="hidden lg:block absolute -bottom-10 -right-10 bg-white p-8 rounded-[2rem] shadow-2xl border border-slate-100 max-w-[280px] animate-bounce-subtle">
                <p className="text-[10px] font-black text-blue-700 uppercase mb-2 tracking-widest">تغییر وضعیت</p>
                <p className="text-sm font-bold text-slate-900 leading-relaxed">بازگشت به سطح رقابت حرفه‌ای در کمتر از ۲۰ هفته با پروتکل اختصاصی.</p>
              </div>
            </div>
            
            <div className="space-y-10 md:space-y-16 text-right">
              <div className="space-y-8 md:space-y-10">
                <div className="flex gap-6 items-start flex-row-reverse group/item">
                  <div className="bg-blue-50 p-4 rounded-2xl text-blue-700 shrink-0 group-hover/item:bg-blue-700 group-hover/item:text-white transition-all duration-300 shadow-sm">
                    <History className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h5 className="text-xl font-black text-slate-900 mb-2">وضعیت اولیه بیمار</h5>
                    <p className="text-sm md:text-base text-slate-600 leading-relaxed font-medium">تجربه چندین تشخیص اشتباه در مراکز سنتی. درد مداوم که با تصویربرداری‌های معمول توجیه نمی‌شد و باعث وقفه در عملکرد ورزشکار شده بود.</p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start flex-row-reverse group/item">
                  <div className="bg-red-50 p-4 rounded-2xl text-red-600 shrink-0 group-hover/item:bg-red-600 group-hover/item:text-white transition-all duration-300 shadow-sm">
                    <Info className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h5 className="text-xl font-black text-slate-900 mb-2">تشخیص پاتولوژی سلولی</h5>
                    <p className="text-sm md:text-base text-red-700 italic font-bold">"{study.finding}"</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start flex-row-reverse group/item">
                  <div className="bg-green-50 p-4 rounded-2xl text-green-600 shrink-0 group-hover/item:bg-green-600 group-hover/item:text-white transition-all duration-300 shadow-sm">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h5 className="text-xl font-black text-slate-900 mb-2">دستاورد نهایی</h5>
                    <p className="text-sm md:text-base text-slate-900 font-bold leading-relaxed">{study.outcome}</p>
                  </div>
                </div>
              </div>

              <div className="p-8 md:p-10 bg-slate-900 rounded-[2.5rem] text-white relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-24 h-24 bg-blue-700 blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity" />
                <p className="text-[10px] md:text-xs text-blue-400 font-black uppercase tracking-widest mb-6">گزارش آزمایشگاه مرکزی</p>
                <p className="text-sm md:text-base italic leading-relaxed opacity-80 font-medium">
                  "این پرونده نمونه بارز نیاز به دقت میکروسکوپی در ورزشکاران حرفه‌ای است. زمانی که MRI محدودیت‌های خود را نشان می‌دهد، پاتولوژی سلولی تنها راه حل برای شناسایی ریشه درد است."
                </p>
                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between flex-row-reverse">
                  <span className="text-[10px] font-bold text-white/40">تأییدیه: آزمایشگاه دکتر حبیبی</span>
                  <button 
                    onClick={() => window.alert('نسخه کامل گزارش بالینی فقط برای اعضای تیم پزشکی قابل دسترسی است.')}
                    className="bg-white/10 hover:bg-white/20 text-white px-5 py-2 rounded-xl text-[10px] font-black transition-all"
                  >
                    گزارش کامل بالینی
                  </button>
                </div>
              </div>
              
              <div className="flex justify-end pt-4">
                <button 
                  onClick={() => window.alert('مشاوره برای موارد مشابه در اولویت بررسی قرار می‌گیرد.')}
                  className="flex items-center gap-2 bg-slate-50 text-blue-700 px-8 py-4 rounded-2xl font-black text-sm md:text-base flex-row-reverse hover:bg-blue-50 transition-all group shadow-sm active:scale-95"
                >
                  درخواست مشاوره مشابه <ArrowLeft size={18} className="group-hover:-translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Footer CTA on Case Page */}
      <div className="max-w-7xl mx-auto px-4 py-20 lg:py-40">
        <div className="bg-blue-700 rounded-[3rem] p-12 lg:p-24 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[100px] rounded-full" />
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-8 tracking-tighter relative z-10">داستان موفقیت بعدی متعلق به <span className="text-blue-200">شماست</span>.</h2>
          <button 
            onClick={() => window.location.hash = '#consultation'}
            className="bg-white text-blue-700 px-12 py-5 rounded-2xl text-xl font-black hover:bg-slate-100 transition-all shadow-2xl relative z-10 active:scale-95"
          >
            رزرو نوبت بررسی پرونده
          </button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesPage;