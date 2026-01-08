
import React, { useState } from 'react';
import { Phone, ArrowLeft, Loader2, ShieldCheck, Key } from 'lucide-react';

interface LoginPageProps {
  onLoginSuccess: (phone: string) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLoginSuccess }) => {
  const [step, setStep] = useState<'phone' | 'otp'>('phone');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.startsWith('09') || phone.length !== 11) {
      alert('لطفاً شماره همراه صحیح وارد کنید (مثال: ۰۹۱۲۳۴۵۶۷۸۹)');
      return;
    }
    setIsLoading(true);
    // Simulate SMS Provider (Kavenegar/Magfa) call
    setTimeout(() => {
      setIsLoading(false);
      setStep('otp');
    }, 1500);
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length !== 5) {
      alert('کد تایید ۵ رقمی است');
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onLoginSuccess(phone);
    }, 1200);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4 bg-slate-50">
      <div className="max-w-md w-full bg-white rounded-[3rem] shadow-2xl p-8 md:p-12 border border-slate-100">
        <div className="text-center mb-10">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShieldCheck className="text-blue-700 w-10 h-10" />
          </div>
          <h1 className="text-3xl font-black text-slate-900 mb-2">ورود به پنل سلامت</h1>
          <p className="text-slate-500 font-medium">برای دسترسی به سوابق و نوبت‌ها وارد شوید</p>
        </div>

        {step === 'phone' ? (
          <form onSubmit={handleSendOtp} className="space-y-6">
            <div className="space-y-2 text-right">
              <label className="text-sm font-bold text-slate-700 mr-2">شماره همراه</label>
              <div className="relative">
                <Phone className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input 
                  type="tel" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 pr-12 pl-6 outline-none focus:border-blue-700 transition-all text-center font-black text-lg tracking-widest"
                  maxLength={11}
                  required
                />
              </div>
            </div>
            <button 
              disabled={isLoading}
              className="w-full bg-blue-700 text-white py-5 rounded-2xl font-black text-xl shadow-xl hover:bg-slate-900 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
            >
              {isLoading ? <Loader2 className="animate-spin" /> : <>دریافت کد تایید <ArrowLeft className="rtl-flip" /></>}
            </button>
          </form>
        ) : (
          <form onSubmit={handleVerifyOtp} className="space-y-6">
            <div className="space-y-2 text-right">
              <div className="flex justify-between items-center mb-2 px-2">
                <button onClick={() => setStep('phone')} className="text-xs text-blue-600 font-bold hover:underline">ویرایش شماره</button>
                <label className="text-sm font-bold text-slate-700">کد تایید ارسال شده</label>
              </div>
              <div className="relative">
                <Key className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input 
                  type="text" 
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="_ _ _ _ _"
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 pr-12 pl-6 outline-none focus:border-blue-700 transition-all text-center font-black text-2xl tracking-[0.5em]"
                  maxLength={5}
                  required
                />
              </div>
            </div>
            <button 
              disabled={isLoading}
              className="w-full bg-blue-700 text-white py-5 rounded-2xl font-black text-xl shadow-xl hover:bg-slate-900 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
            >
              {isLoading ? <Loader2 className="animate-spin" /> : 'تایید و ورود'}
            </button>
            <p className="text-center text-xs text-slate-400 font-bold">ارسال مجدد کد تا ۶۰ ثانیه دیگر</p>
          </form>
        )}
        
        <div className="mt-10 pt-8 border-t border-slate-50 text-center">
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">قدرت گرفته از سامانه پیامکی امن</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
