
import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { ArrowUpLeft, X, CheckCircle2 } from 'lucide-react';

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<typeof SERVICES[0] | null>(null);

  return (
    <section id="services" className="py-20 lg:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 lg:mb-24 gap-6 md:gap-8 text-right">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-blue-700 font-black tracking-tight uppercase text-xs mb-4 italic">
              <span className="w-12 h-px bg-blue-700"></span>
              تخصص‌های اصلی ما
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.2] tracking-tighter">
              مدالیته‌های بالینی <br />
              <span className="text-blue-700 italic">در سطح جهانی</span>.
            </h2>
          </div>
          <p className="text-slate-500 font-medium max-w-xs text-sm leading-relaxed">
            تلفیق تصویربرداری سلولی پیشرفته با پزشکی ورزشی بالینی برای ارائه شفافیت تشخیصی بی‌سابقه.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {SERVICES.map((service, idx) => (
            <div 
              key={service.id} 
              onClick={() => setSelectedService(service)}
              className={`p-8 lg:p-10 rounded-[2.5rem] lg:rounded-[3rem] transition-all duration-500 group relative overflow-hidden flex flex-col items-start text-right cursor-pointer hover:scale-[1.02] hover:shadow-2xl ${
                idx % 2 === 0 ? 'bg-slate-50 border border-slate-100' : 'bg-blue-700 text-white shadow-2xl shadow-blue-200'
              }`}
            >
              <div className={`mb-8 lg:mb-12 p-4 lg:p-5 rounded-2xl w-fit transition-all duration-500 group-hover:rotate-12 ${
                idx % 2 === 0 ? 'bg-white shadow-sm group-hover:bg-blue-700 group-hover:text-white' : 'bg-blue-600 group-hover:bg-white group-hover:text-blue-700'
              }`}>
                <div className="transition-colors">
                  {React.cloneElement(service.icon as React.ReactElement<any>, { 
                    className: `w-6 h-6 lg:w-8 lg:h-8 ${idx % 2 === 0 ? 'text-blue-700 group-hover:text-white' : 'text-white group-hover:text-blue-700'}` 
                  })}
                </div>
              </div>
              
              <h3 className="text-xl lg:text-2xl font-black mb-4 lg:mb-6 tracking-tight leading-tight">{service.title}</h3>
              <p className={`text-xs lg:text-sm leading-relaxed mb-8 lg:mb-10 font-medium ${
                idx % 2 === 0 ? 'text-slate-500' : 'text-blue-100'
              }`}>
                {service.description}
              </p>
              
              <button className={`mt-auto flex items-center gap-3 font-black text-[10px] lg:text-xs uppercase tracking-widest transition-all group-hover:gap-5 ${
                idx % 2 === 0 ? 'text-blue-700' : 'text-white'
              }`}>
                مشاهده مدالیته <ArrowUpLeft size={18} />
              </button>

              {/* Background Accent */}
              <div className={`absolute -bottom-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-20 transition-all group-hover:scale-150 ${
                idx % 2 === 0 ? 'bg-blue-700' : 'bg-white'
              }`} />
            </div>
          ))}
        </div>
      </div>

      {/* Modality Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-md" onClick={() => setSelectedService(null)} />
          <div className="relative bg-white w-full max-w-2xl rounded-[3rem] overflow-hidden shadow-2xl animate-in zoom-in duration-300">
            <div className="p-8 md:p-12 text-right">
              <button onClick={() => setSelectedService(null)} className="absolute top-8 left-8 p-2 hover:bg-slate-100 rounded-full transition-colors">
                <X size={24} className="text-slate-900" />
              </button>
              <div className="bg-blue-700 text-white w-20 h-20 rounded-3xl flex items-center justify-center mb-10 shadow-xl shadow-blue-200">
                {React.cloneElement(selectedService.icon as React.ReactElement<any>, { className: 'w-10 h-10 text-white' })}
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tighter">{selectedService.title}</h3>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">{selectedService.description}</p>
              
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-3 flex-row-reverse text-slate-900 font-bold">
                  <CheckCircle2 size={20} className="text-blue-700" />
                  <span>دقت تشخیصی در سطح مولکولی</span>
                </div>
                <div className="flex items-center gap-3 flex-row-reverse text-slate-900 font-bold">
                  <CheckCircle2 size={20} className="text-blue-700" />
                  <span>تأییدیه استانداردهای بین‌المللی ارتوپدی</span>
                </div>
                <div className="flex items-center gap-3 flex-row-reverse text-slate-900 font-bold">
                  <CheckCircle2 size={20} className="text-blue-700" />
                  <span>پروتکل‌های اختصاصی ریکاوری نخبگان</span>
                </div>
              </div>

              <button 
                onClick={() => { window.location.hash = '#consultation'; setSelectedService(null); }}
                className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-xl hover:bg-blue-700 transition-all shadow-xl active:scale-95"
              >
                رزرو نوبت برای این مدالیته
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
