
import React, { useState } from 'react';
import { PUBLIC_EXERCISES } from '../constants';
import ExercisePlayer from '../components/ExercisePlayer';
import { Search, Filter, Play, ArrowLeft } from 'lucide-react';

const ExerciseLibraryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('همه');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedExercise, setSelectedExercise] = useState<typeof PUBLIC_EXERCISES[0] | null>(null);

  const categories = ['همه', 'شانه', 'زانو', 'ستون فقرات'];

  const filteredExercises = PUBLIC_EXERCISES.filter(ex => {
    const matchesCategory = activeCategory === 'همه' || ex.category === activeCategory;
    const matchesSearch = ex.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#F5F7FA] text-right">
      <div className="bg-[#0D47A1] py-16 md:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-white">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">کتابخانه <span className="text-blue-200">تمرینات پیشگیرانه</span></h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl font-medium leading-relaxed">
            مجموعه‌ای از تمرینات اصلاحی و تقویتی برای حفظ سلامت بافت‌های اسکلتی-عضلانی در طول دوران حرفه‌ای.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between flex-row-reverse">
          <div className="flex gap-2 flex-row-reverse overflow-x-auto pb-2 no-scrollbar w-full md:w-auto">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 rounded-full text-sm font-black transition-all border shrink-0 ${
                  activeCategory === cat ? 'bg-[#00C853] border-[#00C853] text-white shadow-lg' : 'bg-white border-slate-200 text-slate-600 hover:border-[#0D47A1]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-80">
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="جستجوی تمرین..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-2xl py-4 pr-12 pl-6 outline-none focus:border-[#0D47A1] transition-all text-right font-bold"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredExercises.map(ex => (
            <div 
              key={ex.id}
              onClick={() => setSelectedExercise(ex)}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-100 group cursor-pointer hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img src={ex.thumbnail} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={ex.title} />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-white/20 backdrop-blur-md p-4 rounded-full text-white">
                    <Play fill="white" size={32} />
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-[#0D47A1] text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">
                  {ex.category}
                </div>
              </div>
              <div className="p-8 text-right">
                <h3 className="text-xl font-black text-[#212121] mb-3 group-hover:text-[#0D47A1] transition-colors">{ex.title}</h3>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed line-clamp-2">{ex.description}</p>
                <div className="flex justify-between items-center flex-row-reverse border-t border-slate-50 pt-6">
                  <span className="text-xs font-black text-slate-400 uppercase tracking-widest">{ex.duration}</span>
                  <button className="text-[#0D47A1] font-black text-xs flex items-center gap-2 group-hover:gap-4 transition-all">
                    مشاهده ویدئو <ArrowLeft size={16} className="rtl-flip" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedExercise && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-md" onClick={() => setSelectedExercise(null)} />
          <div className="relative bg-white w-full max-w-4xl rounded-[3rem] overflow-hidden shadow-2xl animate-in zoom-in duration-300">
            <div className="grid lg:grid-cols-5 h-full">
              <div className="lg:col-span-3 p-4 bg-black flex items-center">
                <ExercisePlayer videoUrl={selectedExercise.videoUrl} thumbnail={selectedExercise.thumbnail} />
              </div>
              <div className="lg:col-span-2 p-8 md:p-12 text-right bg-white overflow-y-auto">
                <h3 className="text-2xl font-black text-[#212121] mb-4">{selectedExercise.title}</h3>
                <div className="inline-block bg-blue-50 text-[#0D47A1] px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
                  {selectedExercise.category}
                </div>
                <p className="text-slate-600 mb-8 leading-relaxed font-medium">{selectedExercise.description}</p>
                <div className="space-y-4 mb-10">
                  <div className="bg-slate-50 p-4 rounded-2xl flex justify-between items-center flex-row-reverse">
                    <span className="text-sm font-bold text-slate-500">تعداد ست</span>
                    <span className="text-lg font-black text-[#0D47A1]">{selectedExercise.sets}</span>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-2xl flex justify-between items-center flex-row-reverse">
                    <span className="text-sm font-bold text-slate-500">تکرار / مکث</span>
                    <span className="text-lg font-black text-[#0D47A1]">{selectedExercise.reps}</span>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedExercise(null)}
                  className="w-full bg-[#0D47A1] text-white py-4 rounded-2xl font-black hover:bg-slate-900 transition-all shadow-xl"
                >
                  بستن
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExerciseLibraryPage;
