
import React, { useState } from 'react';
import { User, Activity, Weight, Ruler, AlertCircle, Save, CheckCircle } from 'lucide-react';

interface ProfilePageProps {
  userPhone: string;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ userPhone }) => {
  const [isSaved, setIsSaved] = useState(false);
  const [profile, setProfile] = useState({
    name: 'کاربر عزیز',
    age: '',
    weight: '',
    height: '',
    injury: ''
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 text-right">
      <div className="max-w-4xl mx-auto grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-8 rounded-[2.5rem] shadow-xl text-center border border-slate-100">
            <div className="w-24 h-24 bg-blue-700 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-black">
              {profile.name[0]}
            </div>
            <h2 className="text-xl font-black text-slate-900 mb-1">{profile.name}</h2>
            <p className="text-slate-400 text-sm font-bold" dir="ltr">{userPhone}</p>
            <div className="mt-8 pt-8 border-t border-slate-50 space-y-4">
              <div className="flex justify-between items-center flex-row-reverse text-sm font-bold">
                <span className="text-slate-400">وضعیت پرونده</span>
                <span className="text-green-600 bg-green-50 px-3 py-1 rounded-full">تکمیل شده</span>
              </div>
              <div className="flex justify-between items-center flex-row-reverse text-sm font-bold">
                <span className="text-slate-400">آخرین ویزیت</span>
                <span className="text-slate-600">بدون سابقه</span>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-700 text-white p-8 rounded-[2.5rem] shadow-xl">
            <AlertCircle className="mb-4 opacity-50" />
            <h4 className="font-black mb-2">توصیه دکتر حبیبی</h4>
            <p className="text-xs text-blue-100 leading-relaxed">تکمیل دقیق اطلاعات فیزیکی به تشخیص صحیح‌تر در جلسات مشاوره کمک شایانی می‌کند.</p>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-slate-100">
            <h3 className="text-2xl font-black text-slate-900 mb-8 flex items-center justify-end gap-3">
              تنظیمات پرونده سلامت <User className="text-blue-700" />
            </h3>

            <form onSubmit={handleSave} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 block pr-2">سن (سال)</label>
                  <div className="relative">
                    <Activity className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input 
                      type="number" 
                      value={profile.age}
                      onChange={(e) => setProfile({...profile, age: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 pr-12 pl-6 outline-none focus:border-blue-700 transition-all text-right font-bold"
                      placeholder="مثال: ۲۸"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 block pr-2">وزن (کیلوگرم)</label>
                  <div className="relative">
                    <Weight className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input 
                      type="number" 
                      value={profile.weight}
                      onChange={(e) => setProfile({...profile, weight: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 pr-12 pl-6 outline-none focus:border-blue-700 transition-all text-right font-bold"
                      placeholder="مثال: ۷۵"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 block pr-2">قد (سانتی‌متر)</label>
                <div className="relative">
                  <Ruler className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input 
                    type="number" 
                    value={profile.height}
                    onChange={(e) => setProfile({...profile, height: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 pr-12 pl-6 outline-none focus:border-blue-700 transition-all text-right font-bold"
                    placeholder="مثال: ۱۸۵"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 block pr-2">دغدغه یا آسیب فعلی</label>
                <textarea 
                  value={profile.injury}
                  onChange={(e) => setProfile({...profile, injury: e.target.value})}
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-6 outline-none focus:border-blue-700 transition-all text-right font-bold min-h-[120px]"
                  placeholder="توضیح دهید که در کدام قسمت احساس درد یا مشکل دارید..."
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-xl hover:bg-blue-700 transition-all shadow-xl flex items-center justify-center gap-3 active:scale-95"
              >
                {isSaved ? <><CheckCircle /> ذخیره شد</> : <><Save /> بروزرسانی اطلاعات</>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
