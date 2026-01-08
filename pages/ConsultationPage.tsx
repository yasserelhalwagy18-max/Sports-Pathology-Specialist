
import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, ChevronLeft, CheckCircle2, ShieldCheck, MapPin, Video, Bell, FileText } from 'lucide-react';

const ConsultationPage: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [visitType, setVisitType] = useState<'online' | 'in-person'>('in-person');
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [reason, setReason] = useState('');

  const slots = ["۰۹:۰۰", "۱۰:۳۰", "۱۳:۰۰", "۱۵:۳۰", "۱۷:۰۰", "۱۸:۳۰"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedSlot) {
      alert('لطفاً یک بازه زمانی انتخاب کنید');
      return;
    }
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 text-right">
        <div className="bg-white p-12 rounded-[3rem] shadow-2xl max-w-md w-full text-center border border-blue-100 animate-in fade-in zoom-in duration-500">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="text-green-600 w-12 h-12" />
          </div>
          <h2 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">نوبت شما رزرو شد</h2>
          <p className="text-slate-600 mb-6 font-medium">پیامک تایید و یادآوری برای شما ارسال خواهد شد.</p>
          <div className="bg-blue-50 p-4 rounded-2xl mb-8 flex items-center gap-3 flex-row-reverse text-right">
            <Bell className="text-[#0D47A1]" size={20} />
            <p className="text-xs text-[#0D47A1] font-bold">یادآوری: ۲۴ ساعت و ۲ ساعت قبل از نوبت برای شما پیامک ارسال می‌شود.</p>
          </div>
          <button 
            onClick={() => window.location.hash = '#home'}
            className="bg-[#0D47A1] text-white px-10 py-4 rounded-2xl font-black text-lg hover:bg-blue-800 transition-all shadow-xl"
          >
            بازگشت به خانه
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-right">
      <div className="bg-[#0D47A1] py-20 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-black/10 -z-0" />
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-white">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">رزرو <span className="text-blue-200">نوبت ویزیت</span></h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl font-medium leading-relaxed">
            انتخاب نوبت حضوری در کلینیک یا مشاوره ویدئویی آنلاین با دکتر امیر حبیبی.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="space-y-8 order-2 lg:order-1">
            <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100">
              <h3 className="text-xl font-black text-slate-900 mb-6">انتخاب نوع ویزیت</h3>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <button 
                  onClick={() => setVisitType('in-person')}
                  className={`p-6 rounded-[2rem] border-2 transition-all flex flex-col items-center gap-3 ${visitType === 'in-person' ? 'bg-[#0D47A1] border-[#0D47A1] text-white shadow-xl' : 'bg-white border-slate-100 text-slate-600 hover:border-[#0D47A1]'}`}
                >
                  <MapPin size={32} />
                  <span className="font-black">مراجعه حضوری</span>
                </button>
                <button 
                  onClick={() => setVisitType('online')}
                  className={`p-6 rounded-[2rem] border-2 transition-all flex flex-col items-center gap-3 ${visitType === 'online' ? 'bg-[#0D47A1] border-[#0D47A1] text-white shadow-xl' : 'bg-white border-slate-100 text-slate-600 hover:border-[#0D47A1]'}`}
                >
                  <Video size={32} />
                  <span className="font-black">مشاوره آنلاین</span>
                </button>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 block pr-2 flex items-center justify-end gap-2 mb-2">
                   علت مراجعه <FileText size={16} className="text-[#0D47A1]" />
                </label>
                <textarea 
                  required
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  placeholder="لطفاً دلیل مراجعه خود را به اختصار شرح دهید..."
                  className="w-full bg-white border border-slate-200 rounded-2xl py-4 px-6 outline-none focus:border-[#0D47A1] transition-all text-right font-bold min-h-[140px] shadow-sm"
                />
              </div>
            </div>

            <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white">
              <h4 className="font-black mb-4 flex items-center gap-2 justify-end">یادآوری‌های هوشمند <Bell className="text-blue-400" /></h4>
              <ul className="space-y-4 text-sm opacity-80">
                <li className="flex items-center gap-3 flex-row-reverse">
                  <CheckCircle2 size={16} className="text-blue-400" />
                  <span>تایید فوری از طریق پیامک</span>
                </li>
                <li className="flex items-center gap-3 flex-row-reverse">
                  <CheckCircle2 size={16} className="text-blue-400" />
                  <span>یادآوری ۲۴ ساعت قبل از نوبت</span>
                </li>
                <li className="flex items-center gap-3 flex-row-reverse">
                  <CheckCircle2 size={16} className="text-blue-400" />
                  <span>هشدار نهایی ۲ ساعت مانده به ویزیت</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border border-slate-100 order-1 lg:order-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 block pr-2">نام بیمار</label>
                  <input required className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-6 outline-none focus:border-[#0D47A1] transition-all text-right font-bold" placeholder="مثال: علی محمدی" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 block pr-2">شماره تماس</label>
                  <input required className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-6 outline-none focus:border-[#0D47A1] transition-all text-center font-bold" placeholder="۰۹۱۲۳۴۵۶۷۸۹" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 block pr-2">انتخاب تاریخ</label>
                <input required type="date" className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-6 outline-none focus:border-[#0D47A1] transition-all text-right font-bold" />
              </div>

              <div className="space-y-4">
                <label className="text-sm font-bold text-slate-700 block pr-2">زمان‌های پیشنهادی (ساعت)</label>
                <div className="grid grid-cols-3 gap-3" dir="ltr">
                  {slots.map(slot => (
                    <button 
                      key={slot}
                      type="button"
                      onClick={() => setSelectedSlot(slot)}
                      className={`py-3 rounded-xl border-2 font-black transition-all ${selectedSlot === slot ? 'bg-[#0D47A1] border-[#0D47A1] text-white shadow-md' : 'bg-white border-slate-100 text-slate-600 hover:border-[#0D47A1]'}`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-[#0D47A1] text-white py-5 rounded-2xl font-black text-xl shadow-xl hover:bg-slate-900 transition-all flex items-center justify-center gap-3 active:scale-95"
              >
                تایید و ثبت نوبت <ChevronLeft />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationPage;
