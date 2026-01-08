
import React from 'react';
import { ArrowLeft, Activity, Award, ShieldCheck, Microscope } from 'lucide-react';

const Hero: React.FC = () => {
  const navigate = (hash: string) => {
    window.location.hash = hash;
  };

  return (
    <section id="home" className="relative pt-24 pb-12 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-r from-blue-50/80 to-transparent -z-10" />
      <div className="absolute top-1/4 -left-20 w-64 md:w-96 h-64 md:h-96 bg-blue-200/20 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-transparent via-blue-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative z-10 text-right">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-blue-100/50 backdrop-blur-sm text-blue-700 rounded-full text-[10px] md:text-xs font-bold tracking-tight uppercase mb-6 md:mb-8 border border-blue-200">
              <ShieldCheck size={14} />
              <span>تعالی تشخیصی در ورزش‌های نخبگان</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-slate-900 leading-[1.1] md:leading-[0.95] mb-6 md:mb-8 tracking-tighter">
              علمِ پشتِ <br />
              یک <span className="text-blue-700 italic">بازگشتِ قهرمانانه</span>.
            </h1>
            <p className="text-base md:text-xl text-slate-600 mb-8 md:mb-10 leading-relaxed max-w-xl font-medium">
              دکتر امیر حبیبی فاصله بین آسیب‌شناسی با وضوح بالا و عملکرد قهرمانی را پر می‌کند. ما فقط آسیب را نمی‌بینیم—ما نقشه سلولی بهبودی را می‌بینیم.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-5 justify-start">
              <button 
                onClick={() => navigate('consultation')}
                className="flex items-center justify-center gap-3 bg-blue-700 text-white px-8 py-4 md:px-10 md:py-5 rounded-2xl text-base md:text-lg font-bold hover:bg-blue-800 transition-all shadow-[0_20px_50px_rgba(29,78,216,0.3)] hover:scale-[1.02] active:scale-95"
              >
                شروع مشاوره <ArrowLeft size={20} className="rtl-flip" />
              </button>
              <button 
                onClick={() => navigate('research')}
                className="flex items-center justify-center gap-3 bg-white border border-slate-200 text-slate-700 px-8 py-4 md:px-10 md:py-5 rounded-2xl text-base md:text-lg font-bold hover:border-blue-700 hover:text-blue-700 transition-all backdrop-blur-sm hover:scale-[1.02] active:scale-95"
              >
                تحقیقات بالینی
              </button>
            </div>
            
            <div className="mt-12 md:mt-16 grid grid-cols-3 gap-4 md:gap-8">
              <div className="group cursor-default">
                <span className="block text-2xl md:text-3xl font-black text-slate-900 group-hover:text-blue-700 transition-colors tracking-tighter">۹۸٪</span>
                <span className="text-[10px] md:text-xs text-slate-400 font-bold uppercase tracking-tight">نرخ دقت</span>
              </div>
              <div className="group cursor-default">
                <span className="block text-2xl md:text-3xl font-black text-slate-900 group-hover:text-blue-700 transition-colors tracking-tighter">۱۵۰+</span>
                <span className="text-[10px] md:text-xs text-slate-400 font-bold uppercase tracking-tight">ورزشکار حرفه‌ای</span>
              </div>
              <div className="group cursor-default">
                <span className="block text-2xl md:text-3xl font-black text-slate-900 group-hover:text-blue-700 transition-colors tracking-tighter">۱۲</span>
                <span className="text-[10px] md:text-xs text-slate-400 font-bold uppercase tracking-tight">اختراع جهانی</span>
              </div>
            </div>
          </div>
          
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] mt-8 lg:mt-0">
            <div className="absolute inset-0 bg-blue-600/5 rounded-[3rem] md:rounded-[4rem] -rotate-3 -z-10" />
            <div className="relative z-10 h-full rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl border-[8px] md:border-[12px] border-white group">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000" 
                alt="دکتر امیر حبیبی" 
                loading="eager"
                className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              
              {/* Floating Tech UI */}
              <div className="absolute top-6 left-6 md:top-10 md:left-10 bg-white/10 backdrop-blur-xl border border-white/20 p-3 md:p-4 rounded-2xl text-white">
                <Microscope className="w-5 h-5 md:w-6 md:h-6 mb-2 text-blue-400" />
                <div className="text-[9px] font-bold tracking-widest uppercase opacity-60">اسکن آزمایشگاهی</div>
                <div className="text-xs md:text-sm font-bold">آنالیز سلولی فعال</div>
              </div>
            </div>

            {/* Floating Experience Card */}
            <div className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-12 bg-white p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] z-20 flex items-center gap-4 md:gap-5 max-w-[240px] md:max-w-sm border border-slate-100">
              <div className="bg-blue-700 p-3 md:p-4 rounded-xl md:rounded-2xl shadow-lg shadow-blue-200">
                <Activity className="text-white w-6 h-6 md:w-8 md:h-8" />
              </div>
              <div className="text-right">
                <p className="text-[9px] text-blue-600 font-black uppercase tracking-widest mb-1">تخصص</p>
                <p className="text-xs md:text-base text-slate-900 font-bold leading-tight tracking-tight">پاتولوژیست دارای سه گواهی‌نامه تخصصی</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
