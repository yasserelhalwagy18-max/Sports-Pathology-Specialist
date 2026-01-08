
import React from 'react';
import { Microscope, Activity, ShieldAlert, FileSearch, Zap, Layers, CheckCircle } from 'lucide-react';

const SpecialtiesPage: React.FC = () => {
  const deepServices = [
    {
      title: "تشخیص بافت مولکولی",
      icon: <Microscope className="w-8 h-8 md:w-10 md:h-10" />,
      details: "ما از توالی‌یابی نسل جدید و پاتولوژی دیجیتال برای شناسایی تخریب سلولی مدت‌ها قبل از ظاهر شدن در MRI استفاده می‌کنیم. این امر برای آسیب‌های رباطی و تاندونوپاتی حیاتی است.",
      steps: ["استخراج بیوپسی", "توالی‌یابی ژنتیکی", "آنالیز بار سلولی"],
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "آنالیز سیالات بیومکانیکی",
      icon: <Activity className="w-8 h-8 md:w-10 md:h-10" />,
      details: "با تجزیه و تحلیل مایع سینوویال و نشانگرهای بیولوژیکی خونی تحت شرایط استرس، ما چشم‌انداز التهابی ورزشکار را ترسیم کرده و «شاخص ریکاوری» عددی ارائه می‌دهیم.",
      steps: ["ترسیم آستانه لاکتات", "پروفایلینگ سیتوکین", "امتیاز سلامت سینوویال"],
      image: "https://images.unsplash.com/photo-1579154238328-1c31405e6092?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "ارزیابی زنده ماندن پیوند",
      icon: <Zap className="w-8 h-8 md:w-10 md:h-10" />,
      details: "برای کاندیداهای جراحی، ما آنالیز در زمان واقعی بافت اهداکننده را ارائه می‌دهیم تا بالاترین احتمال ادغام و خطر پس زدن صفر را تضمین کنیم.",
      steps: ["بررسی عروق", "شمارش تراکم سلولی", "تأیید بافت‌شناسی"],
      image: "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-right">
      <div className="bg-slate-950 py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-blue-600/10 blur-[120px]" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-white tracking-tighter mb-8 leading-tight">تخصص‌های <br/><span className="text-blue-500 italic">بالینی ما</span>.</h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl font-medium leading-relaxed">
            دقت تشخیصی بی‌نظیر با استفاده از پیشرفته‌ترین ابزارهای پاتولوژی جهان و پروتکل‌های بالینی اختصاصی.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 lg:py-32">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {deepServices.map((service, idx) => (
            <div key={idx} className="group flex flex-col bg-slate-50 rounded-[2.5rem] lg:rounded-[3rem] border border-slate-100 hover:bg-white hover:shadow-2xl hover:border-blue-100 transition-all overflow-hidden">
              <div className="h-48 md:h-64 overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0" />
              </div>
              <div className="p-8 lg:p-12 pt-8">
                <div className="bg-blue-700 text-white w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-[2rem] flex items-center justify-center mb-8 md:mb-10 shadow-lg shadow-blue-200 group-hover:rotate-6 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 tracking-tight">{service.title}</h3>
                <p className="text-sm md:text-base text-slate-600 mb-8 md:mb-10 font-medium leading-relaxed">{service.details}</p>
                <div className="space-y-4">
                  {service.steps.map((step, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-3 text-xs md:text-sm font-bold text-slate-900 flex-row-reverse">
                      <CheckCircle className="w-5 h-5 text-blue-700 shrink-0" />
                      <span className="flex-1 text-right">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 lg:mt-32 p-8 md:p-16 bg-blue-700 rounded-[2.5rem] md:rounded-[4rem] text-white flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="lg:w-1/2 text-right">
            <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tight leading-tight">گردش کار تشخیصی پیشرفته</h2>
            <p className="text-blue-100 mb-8 font-medium">هر بیمار در کلینیک دکتر حبیبی تحت یک چرخه تحلیلی دقیق ۴۸ ساعته قرار می‌گیرد که سه سطح مختلف مشاهده بالینی را ترکیب می‌کند.</p>
            <div className="grid grid-cols-2 gap-6 md:gap-8">
              <div className="text-right">
                <Layers className="mb-4 text-blue-300 mr-auto lg:mr-0 ml-0 lg:ml-auto" />
                <h4 className="font-bold mb-2">اسکن چند لایه</h4>
                <p className="text-[10px] md:text-xs text-blue-200">بررسی همزمان بافت‌شناسی و تصویربرداری دیجیتال.</p>
              </div>
              <div className="text-right">
                <Zap className="mb-4 text-blue-300 mr-auto lg:mr-0 ml-0 lg:ml-auto" />
                <h4 className="font-bold mb-2">گزارش‌دهی سریع</h4>
                <p className="text-[10px] md:text-xs text-blue-200">نتایج از طریق پورتال امن در ۴۸ ساعت تحویل داده می‌شود.</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 overflow-hidden rounded-[2rem] md:rounded-[3rem] w-full">
            <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800" alt="آزمایشگاه" className="w-full h-64 md:h-96 object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialtiesPage;
