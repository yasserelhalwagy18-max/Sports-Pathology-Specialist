
import React, { useState, useMemo } from 'react';
import { BookOpen, GraduationCap, FlaskConical, Search, FileText, Filter, Check, X, ArrowUpLeft } from 'lucide-react';
import { RESEARCH_PUBLICATIONS } from '../constants';
import { Publication } from '../types';

const ResearchPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeImpact, setActiveImpact] = useState<string>('all');

  const categories = useMemo(() => {
    const cats = new Set(RESEARCH_PUBLICATIONS.map(p => p.category));
    return ['all', ...Array.from(cats)];
  }, []);

  const impacts = [
    { label: 'همه سطوح', value: 'all' },
    { label: 'بالا', value: 'بالا' },
    { label: 'متوسط', value: 'متوسط' },
    { label: 'پایین', value: 'پایین' }
  ];

  const filteredPublications = useMemo(() => {
    return RESEARCH_PUBLICATIONS.filter(pub => {
      const matchesSearch = pub.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            pub.journal.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === 'all' || pub.category === activeCategory;
      const matchesImpact = activeImpact === 'all' || pub.impact === activeImpact;
      return matchesSearch && matchesCategory && matchesImpact;
    });
  }, [searchTerm, activeCategory, activeImpact]);

  return (
    <div className="min-h-screen bg-slate-50 text-right animate-in fade-in duration-700">
      {/* Header */}
      <div className="bg-white py-12 lg:py-32 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 lg:gap-12">
            <div className="max-w-3xl">
              <h3 className="text-blue-700 font-black tracking-widest uppercase text-[10px] md:text-xs mb-4">اولویت با علم</h3>
              <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tighter mb-4 md:mb-8 leading-tight">آرشیو <span className="text-blue-700">تحقیقات بالینی</span>.</h1>
              <p className="text-base md:text-xl text-slate-600 font-medium leading-relaxed">
                دسترسی به یک دهه تحقیقات داوری شده که آینده پاتولوژی بافت‌های ورزشی را تعریف می‌کند.
              </p>
            </div>
            <div className="relative w-full md:w-80">
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input 
                type="text" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="جستجو در انتشارات..." 
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3.5 md:py-4 pr-12 pl-6 outline-none focus:border-blue-700 focus:bg-white transition-all font-bold text-sm text-right shadow-sm" 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8 lg:py-24">
        {/* Mobile Horizontal Filters */}
        <div className="lg:hidden mb-8 overflow-x-auto pb-4 no-scrollbar">
          <div className="flex gap-2 flex-row-reverse min-w-max">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold border transition-all ${
                  activeCategory === cat 
                    ? 'bg-blue-700 border-blue-700 text-white shadow-lg' 
                    : 'bg-white border-slate-200 text-slate-600'
                }`}
              >
                {cat === 'all' ? 'همه دسته‌ها' : cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-12">
          {/* Desktop Sidebar Filters */}
          <div className="hidden lg:block lg:col-span-1 space-y-8 order-2 lg:order-1">
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 sticky top-32">
              <div className="flex items-center justify-between mb-8 flex-row-reverse">
                <h4 className="font-black text-xs uppercase tracking-widest flex items-center gap-2">
                  <Filter size={14} /> فیلترها
                </h4>
                {(activeCategory !== 'all' || activeImpact !== 'all') && (
                  <button 
                    onClick={() => { setActiveCategory('all'); setActiveImpact('all'); }}
                    className="text-[10px] text-red-500 font-black hover:bg-red-50 px-2 py-1 rounded-lg transition-colors"
                  >
                    حذف فیلترها
                  </button>
                )}
              </div>
              
              <div className="space-y-10">
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 pr-2">دسته‌بندی موضوعی</p>
                  <div className="space-y-1">
                    {categories.map(cat => (
                      <button 
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`w-full text-right px-4 py-3 rounded-xl text-xs font-bold transition-all flex items-center justify-between flex-row-reverse ${
                          activeCategory === cat ? 'bg-blue-700 text-white shadow-lg shadow-blue-200' : 'hover:bg-slate-50 text-slate-600'
                        }`}
                      >
                        {cat === 'all' ? 'همه دسته‌ها' : cat}
                        {activeCategory === cat && <Check size={12} />}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 pr-2">تاثیرگذاری بالینی</p>
                  <div className="flex flex-wrap gap-2 flex-row-reverse">
                    {impacts.map(impact => (
                      <button 
                        key={impact.value}
                        onClick={() => setActiveImpact(impact.value)}
                        className={`px-4 py-2 rounded-xl text-[10px] font-bold transition-all border ${
                          activeImpact === impact.value 
                            ? 'bg-blue-700 border-blue-700 text-white shadow-lg shadow-blue-200' 
                            : 'border-slate-200 text-slate-500 hover:border-blue-700'
                        }`}
                      >
                        {impact.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-700 blur-[80px] opacity-30 -z-10" />
              <GraduationCap className="w-10 h-10 mb-6 text-blue-400" />
              <h4 className="text-xl font-bold mb-4">همکاری آکادمیک</h4>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">دعوت از پژوهشگران و پاتولوژیست‌های ورزشی جهت مشارکت در طرح‌های بالینی.</p>
              <button 
                onClick={() => window.alert('درخواست شما برای تیم آکادمیک ارسال شد.')}
                className="w-full bg-blue-700 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 transition-all flex items-center justify-center gap-2"
              >
                ارسال درخواست <ArrowUpLeft size={16} />
              </button>
            </div>
          </div>

          {/* Publication List */}
          <div className="lg:col-span-3 space-y-6 order-1 lg:order-2">
            {filteredPublications.length > 0 ? (
              filteredPublications.map((pub, idx) => (
                <div 
                  key={idx} 
                  className="bg-white p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] border border-slate-100 hover:shadow-2xl hover:border-blue-200 hover:-translate-y-1 transition-all duration-500 group cursor-pointer text-right"
                >
                  <div className="flex justify-between items-start mb-6 flex-row-reverse">
                    <div className="flex gap-4 items-center flex-row-reverse">
                      <div className="bg-blue-50 p-3 md:p-4 rounded-2xl group-hover:bg-blue-700 group-hover:text-white transition-all duration-500">
                        <FileText className="w-5 h-5 md:w-6 md:h-6" />
                      </div>
                      <div className="text-right">
                        <div className="flex flex-wrap items-center gap-2 md:gap-3 flex-row-reverse mb-1 md:mb-2">
                          <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-blue-700 bg-blue-50 px-2 py-0.5 rounded">{pub.journal}</span>
                          <span className="text-[8px] md:text-[10px] font-bold text-slate-400">{pub.category}</span>
                        </div>
                        <h4 className="text-lg md:text-2xl font-black text-slate-900 leading-tight group-hover:text-blue-700 transition-colors">{pub.title}</h4>
                      </div>
                    </div>
                    <span className="hidden sm:inline-block text-[10px] md:text-xs font-black text-slate-400 px-3 md:px-4 py-1.5 md:py-2 bg-slate-50 rounded-full border border-slate-100">{pub.year}</span>
                  </div>
                  
                  <p className="text-sm md:text-base text-slate-600 mb-8 font-medium leading-relaxed">
                    تجزیه و تحلیل پاتولوژیک نشان می‌دهد که بازسازی بافت در سطح سلولی نیازمند رویکردی چند‌جانبه است که در این تحقیق به تفصیل بررسی شده است.
                  </p>
                  
                  <div className="flex items-center justify-between flex-row-reverse border-t border-slate-50 pt-6 md:pt-8">
                    <div className="flex flex-wrap gap-3 md:gap-6 text-[8px] md:text-[10px] font-black uppercase tracking-tight text-slate-400">
                      <span>ارجاعات: ۱.۲ هزار</span>
                      <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full ${
                        pub.impact === 'بالا' ? 'bg-green-50 text-green-600' : pub.impact === 'متوسط' ? 'bg-orange-50 text-orange-600' : 'bg-slate-100 text-slate-500'
                      }`}>
                        <span>تاثیر بالینی: {pub.impact}</span>
                      </div>
                    </div>
                    <button 
                      onClick={(e) => { e.stopPropagation(); window.alert('آماده‌سازی فایل برای دانلود...'); }}
                      className="bg-slate-900 text-white px-4 md:px-7 py-2.5 md:py-3.5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-700 shadow-lg"
                    >
                      <span className="hidden sm:inline">مشاهده کامل مقاله</span>
                      <span className="sm:hidden">PDF</span>
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-white p-12 md:p-20 rounded-[3rem] text-center border border-dashed border-slate-200">
                <X className="mx-auto mb-6 text-slate-300" size={40} />
                <h3 className="text-xl font-black text-slate-900 mb-2">نتیجه‌ای یافت نشد</h3>
                <p className="text-slate-500">لطفاً فیلترها را تغییر دهید یا عبارت دیگری جستجو کنید.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchPage;
