
import React from 'react';
import { Award, GraduationCap, MapPin, Globe, Mail, Phone, Calendar } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-right">
      {/* Intro Header */}
      <div className="bg-slate-50 py-20 lg:py-32 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="w-28 h-28 md:w-32 md:h-32 mx-auto mb-8 md:mb-10 overflow-hidden rounded-full border-4 border-white shadow-2xl">
            <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200" alt="دکتر امیر حبیبی" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tighter mb-6">دکتر امیر حبیبی</h1>
          <p className="text-lg md:text-xl text-blue-700 font-bold uppercase tracking-widest mb-10 md:mb-12">پیشگام پاتولوژی ورزشی</p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-slate-500 font-bold text-xs md:text-sm">
            <span className="flex items-center gap-2"><MapPin size={18} /> تهران، ایران</span>
            <span className="flex items-center gap-2"><Globe size={18} /> مشاوره‌های جهانی</span>
            <span className="flex items-center gap-2"><Award size={18} /> دارای بورد تخصصی</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-3 gap-16 lg:gap-24">
          <div className="lg:col-span-2 space-y-12 lg:space-y-16">
            <section>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 md:mb-8 border-b-4 border-blue-700 pb-2 inline-block">ماموریت ما</h2>
              <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-medium">
                "دوران حرفه‌ای من به این ایده اختصاص یافته است که هیچ ورزشکاری نباید به دلیل یک آسیب پنهان از میدان دور بماند. ما فراتر از تصویر می‌رویم تا حقیقت را در بافت پیدا کنیم."
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-8">مسیر حرفه‌ای</h2>
              <div className="space-y-10 lg:space-y-12">
                {[
                  { year: '۱۳۹۹ - اکنون', title: 'مؤسس آزمایشگاه بالینی حبیبی', text: 'تأسیس برترین آزمایشگاه خصوصی برای آسیب‌شناسی ورزشی با وضوح بالا.' },
                  { year: '۱۳۹۴ - ۱۳۹۹', title: 'مدیر تشخیص، کمیته ملی المپیک', text: 'نظارت بر پروتکل‌های سلامت بافت برای بیش از ۴۰۰ ورزشکار المپیکی در دو دوره.' },
                  { year: '۱۳۸۹ - ۱۳۹۴', title: 'دانشیار دانشگاه علوم پزشکی', text: 'تدریس پاتولوژی مولکولی اسکلتی-عضلانی و تشخیص‌های جراحی.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 lg:gap-8 group flex-row-reverse">
                    <div className="w-24 md:w-32 shrink-0 text-blue-700 font-black text-xs uppercase tracking-tight pt-1 text-left">{item.year}</div>
                    <div className="flex-1">
                      <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">{item.title}</h4>
                      <p className="text-sm md:text-base text-slate-600 leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="lg:col-span-1 space-y-8 lg:space-y-12">
            <div className="bg-slate-50 p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] border border-slate-100">
              <h3 className="text-lg md:text-xl font-black text-slate-900 mb-6 md:mb-8">تحصیلات</h3>
              <div className="space-y-6 md:space-y-8">
                <div className="flex gap-4 flex-row-reverse">
                  <GraduationCap className="text-blue-700 shrink-0" />
                  <div className="flex-1">
                    <h5 className="font-bold text-sm md:text-base">دانشگاه جانز هاپکینز</h5>
                    <p className="text-xs text-slate-500 italic">دکترای پزشکی، با افتخار پاتولوژی</p>
                  </div>
                </div>
                <div className="flex gap-4 flex-row-reverse">
                  <GraduationCap className="text-blue-700 shrink-0" />
                  <div className="flex-1">
                    <h5 className="font-bold text-sm md:text-base">پزشکی استنفورد</h5>
                    <p className="text-xs text-slate-500 italic">رزیدنتی، پاتولوژی ارتوپدی</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] text-white">
              <h3 className="text-lg md:text-xl font-black mb-6 md:mb-8">تماس مستقیم</h3>
              <div className="space-y-4 md:space-y-6">
                <button className="w-full flex items-center justify-between p-4 bg-white/10 rounded-xl md:rounded-2xl hover:bg-white/20 transition-all flex-row-reverse">
                  <div className="flex items-center gap-3 flex-row-reverse">
                    <Mail size={18} />
                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest">ایمیل مستقیم</span>
                  </div>
                  <Calendar size={18} />
                </button>
                <button className="w-full flex items-center justify-between p-4 bg-white/10 rounded-xl md:rounded-2xl hover:bg-white/20 transition-all flex-row-reverse">
                  <div className="flex items-center gap-3 flex-row-reverse">
                    <Phone size={18} />
                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest">تماس با تیم پزشکی</span>
                  </div>
                  <Calendar size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
