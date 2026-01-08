
import React from 'react';
import { Quote, Star } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 lg:py-32 bg-slate-950 relative overflow-hidden text-right">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-blue-600/5 blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-blue-400/5 blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <h3 className="text-blue-500 font-black tracking-widest uppercase text-xs mb-4 italic">صدای بیماران</h3>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter mb-8">مورد اعتماد <br/><span className="text-blue-500 italic">نخبگان ورزش</span>.</h2>
          <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} className="text-blue-500 fill-blue-500" />
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 lg:p-10 rounded-[2.5rem] lg:rounded-[3rem] hover:bg-white/10 transition-all group hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/20">
              <Quote className="text-blue-500 mb-6 lg:mb-8 opacity-40 group-hover:opacity-100 transition-opacity rtl-flip" size={40} />
              <p className="text-slate-300 mb-8 lg:mb-10 text-base lg:text-lg leading-relaxed font-medium italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4 border-t border-white/10 pt-6 lg:pt-8 flex-row-reverse">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  loading="lazy"
                  className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl object-cover border-2 border-blue-500/20 group-hover:border-blue-500 transition-all"
                />
                <div className="flex-1">
                  <h4 className="text-white font-black text-sm tracking-tight">{testimonial.name}</h4>
                  <p className="text-blue-400 text-[10px] font-black uppercase tracking-widest">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
