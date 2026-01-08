import React, { useState } from 'react';
import { REHAB_PROGRAMS } from '../constants';
import ExercisePlayer from '../components/ExercisePlayer';
import { CheckCircle2, Circle, AlertCircle, ChevronLeft, Calendar, TrendingUp, Info } from 'lucide-react';
import { RehabLog } from '../types';

const RehabPage: React.FC = () => {
  const [activeProgram] = useState(REHAB_PROGRAMS[0]);
  const [selectedExerciseId, setSelectedExerciseId] = useState(activeProgram.exercises[0].id);
  const [logs, setLogs] = useState<RehabLog[]>([]);
  const [showLogModal, setShowLogModal] = useState(false);
  const [tempPainLevel, setTempPainLevel] = useState(1);

  const activeExercise = activeProgram.exercises.find(ex => ex.id === selectedExerciseId)!;
  const isCompleted = logs.some(l => l.exerciseId === selectedExerciseId);

  const completionPercentage = Math.round((logs.length / activeProgram.exercises.length) * 100);

  const handleComplete = () => {
    setShowLogModal(true);
  };

  const submitLog = () => {
    const newLog: RehabLog = {
      exerciseId: selectedExerciseId,
      date: new Date().toISOString(),
      completed: true,
      painLevel: tempPainLevel
    };
    setLogs([...logs, newLog]);
    setShowLogModal(false);
    // Find next uncompleted exercise
    const nextIdx = activeProgram.exercises.findIndex(ex => ex.id === selectedExerciseId) + 1;
    if (nextIdx < activeProgram.exercises.length) {
      setSelectedExerciseId(activeProgram.exercises[nextIdx].id);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-right animate-in fade-in duration-700">
      <div className="bg-white py-8 md:py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 md:gap-8">
            <div className="max-w-3xl">
              <h3 className="text-[#0D47A1] font-black tracking-widest uppercase text-[10px] md:text-xs mb-2 md:mb-4">پلتفرم فیزیوتراپی دیجیتال</h3>
              <h1 className="text-2xl md:text-4xl lg:text-6xl font-black text-slate-900 tracking-tighter mb-2 md:mb-4 leading-tight">مسیر <span className="text-[#0D47A1] italic">ریکاوری هوشمند</span>.</h1>
              <p className="text-sm md:text-lg text-slate-600 font-medium">برنامه اختصاصی شما بر اساس آنالیز بافت تنظیم شده است.</p>
            </div>
            <div className="w-full lg:w-auto bg-[#0D47A1] p-5 md:p-6 rounded-[1.5rem] md:rounded-[2rem] text-white shadow-xl flex items-center justify-between lg:justify-end gap-4 md:gap-6 flex-row-reverse">
              <div className="text-center">
                <p className="text-[8px] md:text-[10px] font-black uppercase mb-1 opacity-70">پیشرفت کل</p>
                <p className="text-xl md:text-3xl font-black">{completionPercentage}%</p>
              </div>
              <div className="w-px h-10 md:h-12 bg-white/20" />
              <div className="text-right">
                <p className="text-[8px] md:text-[10px] font-black uppercase mb-1 opacity-70">برنامه فعلی</p>
                <p className="text-sm md:text-lg font-bold">{activeProgram.title}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 md:py-16">
        <div className="grid lg:grid-cols-3 gap-8 md:gap-12 items-start">
          {/* List of Exercises Sidebar */}
          <div className="lg:col-span-1 space-y-4 order-2 lg:order-1">
            <div className="mb-6 md:mb-8">
              <div className="flex justify-between items-center mb-3 flex-row-reverse">
                <h4 className="text-lg md:text-xl font-black text-slate-900 flex items-center gap-2">
                   لیست تمرینات امروز <Calendar size={18} className="text-[#0D47A1]" />
                </h4>
                <span className="text-[10px] md:text-xs font-black text-[#00C853]">{completionPercentage}% تکمیل</span>
              </div>
              <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden shadow-inner">
                <div 
                  className="bg-[#00C853] h-full transition-all duration-700 ease-out" 
                  style={{ width: `${completionPercentage}%` }}
                />
              </div>
            </div>

            <div className="space-y-3 md:space-y-4">
              {activeProgram.exercises.map((ex, idx) => {
                const completed = logs.some(l => l.exerciseId === ex.id);
                const active = selectedExerciseId === ex.id;
                return (
                  <button 
                    key={ex.id}
                    onClick={() => setSelectedExerciseId(ex.id)}
                    className={`w-full p-4 md:p-6 rounded-[1.5rem] md:rounded-[2rem] border-2 transition-all flex items-center gap-3 md:gap-4 flex-row-reverse text-right group ${
                      active ? 'bg-[#0D47A1] border-[#0D47A1] text-white shadow-xl' : 'bg-white border-slate-100 text-slate-600 hover:border-[#0D47A1]'
                    }`}
                  >
                    <div className={`shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center transition-colors ${active ? 'bg-white/20' : 'bg-slate-100 group-hover:bg-blue-50'}`}>
                      {completed ? <CheckCircle2 className={active ? 'text-white' : 'text-[#00C853]'} size={20} /> : <Circle className="opacity-30" size={20} />}
                    </div>
                    <div className="flex-1">
                      <div className="text-[8px] md:text-[10px] font-black uppercase tracking-tight mb-1 opacity-60">تمرین شماره {idx + 1}</div>
                      <h5 className="font-bold text-sm md:text-lg leading-tight">{ex.title}</h5>
                    </div>
                  </button>
                );
              })}
            </div>
            
            <div className="p-6 md:p-8 bg-slate-900 rounded-[1.5rem] md:rounded-[2.5rem] text-white mt-6 shadow-lg">
              <div className="flex items-center gap-3 mb-3 md:mb-4 flex-row-reverse">
                <AlertCircle className="text-blue-400" size={18} />
                <h4 className="font-bold text-sm md:text-base">هشدار درد</h4>
              </div>
              <p className="text-[10px] md:text-xs text-slate-400 leading-relaxed">در صورت احساس درد تیز (بالای ۷ از ۱۰) بلافاصله تمرین را متوقف کنید.</p>
            </div>
          </div>

          {/* Player and Info */}
          <div className="lg:col-span-2 space-y-6 md:space-y-8 order-1 lg:order-2">
            <ExercisePlayer videoUrl={activeExercise.videoUrl} thumbnail={activeExercise.thumbnail} />
            
            <div className="bg-white p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] shadow-xl border border-slate-100">
              <div className="flex flex-col sm:flex-row justify-between items-start mb-8 md:mb-10 flex-row-reverse gap-4">
                <div className="flex-1">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-2">{activeExercise.title}</h2>
                  <div className="flex gap-2 md:gap-4 flex-row-reverse flex-wrap">
                    <span className="bg-blue-50 text-[#0D47A1] px-3 py-1 rounded-full text-[10px] font-black">{activeExercise.duration}</span>
                    <span className="bg-slate-100 text-slate-500 px-3 py-1 rounded-full text-[10px] font-black">{activeExercise.sets} ست × {activeExercise.reps}</span>
                  </div>
                </div>
                <button 
                  onClick={handleComplete}
                  disabled={isCompleted}
                  className={`w-full sm:w-auto px-8 py-4 md:px-10 md:py-5 rounded-xl md:rounded-2xl font-black text-sm md:text-xl transition-all shadow-xl active:scale-95 flex items-center justify-center gap-2 md:gap-3 ${
                    isCompleted ? 'bg-[#00C853]/10 text-[#00C853] border border-[#00C853]/20' : 'bg-[#0D47A1] text-white hover:bg-slate-900'
                  }`}
                >
                  {isCompleted ? <><CheckCircle2 size={20} /> انجام شد</> : <>ثبت انجام <ChevronLeft className="rtl-flip" size={20} /></>}
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-8 md:gap-12 text-right">
                <div className="space-y-4 md:space-y-6">
                  <h4 className="font-black text-base md:text-lg flex items-center justify-end gap-2 text-slate-900">نحوه اجرا <Info size={18} className="text-[#0D47A1]" /></h4>
                  <p className="text-xs md:text-base text-slate-600 leading-relaxed font-medium">{activeExercise.description}</p>
                </div>
                <div className="space-y-4 md:space-y-6">
                  <h4 className="font-black text-base md:text-lg flex items-center justify-end gap-2 text-slate-900">توصیه دکتر <TrendingUp size={18} className="text-[#0D47A1]" /></h4>
                  <div className="p-4 md:p-6 bg-[#F5F7FA] rounded-2xl border border-slate-100 italic text-[11px] md:text-sm text-slate-500 border-r-4 border-r-[#0D47A1]">
                    "تمرکز خود را بر کنترل آرام فاز برگشت حرکت بگذارید."
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pain Log Modal */}
      {showLogModal && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-md" onClick={() => setShowLogModal(false)} />
          <div className="relative bg-white w-full max-w-md rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 text-right shadow-2xl animate-in zoom-in duration-300">
            <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-4 md:mb-6">میزان درد را ثبت کنید</h3>
            <p className="text-xs md:text-base text-slate-500 mb-8 md:mb-10 font-medium">از ۱ (بدون درد) تا ۱۰ (درد شدید)، حین تمرین چه حسی داشتید؟</p>
            
            <div className="grid grid-cols-5 gap-2 md:gap-3 mb-8 md:mb-12" dir="ltr">
              {[...Array(10)].map((_, i) => (
                <button 
                  key={i}
                  onClick={() => setTempPainLevel(i + 1)}
                  className={`py-3 md:py-4 rounded-xl font-black text-xs md:text-base transition-all ${
                    tempPainLevel === i + 1 
                      ? 'bg-[#0D47A1] text-white scale-110 shadow-lg' 
                      : 'bg-slate-100 text-slate-400 hover:bg-slate-200'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button 
              onClick={submitLog}
              className="w-full bg-slate-900 text-white py-4 md:py-5 rounded-xl md:rounded-2xl font-black text-base md:text-xl hover:bg-[#0D47A1] transition-all shadow-xl active:scale-95"
            >
              ثبت و ادامه
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RehabPage;