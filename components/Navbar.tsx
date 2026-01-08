
import React, { useState, useEffect } from 'react';
import { Menu, X, Microscope, ChevronLeft, User, LogOut, HeartPulse, BookOpen, Library, LayoutDashboard } from 'lucide-react';

interface NavbarProps {
  onNavigate: (view: string) => void;
  currentView: string;
  isLoggedIn: boolean;
  onLogout: () => void;
  userRole?: 'doctor' | 'patient';
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView, isLoggedIn, onLogout, userRole }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const links = [
    { name: 'خانه', view: 'home' },
    { name: 'کتابخانه تمرین', view: 'exercise-library' },
    { name: 'مجله علمی', view: 'blog' },
    { name: 'تحقیقات', view: 'research' },
  ];

  const handleNav = (view: string) => {
    setIsOpen(false);
    onNavigate(view);
  };

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-md z-[100] border-b border-slate-100 h-16 md:h-24 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center gap-2 md:gap-3 cursor-pointer group hover:scale-105 transition-transform" onClick={() => handleNav('home')}>
            <div className="bg-[#0D47A1] p-1.5 md:p-2 rounded-xl group-hover:rotate-6 transition-transform">
              <Microscope className="w-4 h-4 md:w-6 md:h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm md:text-lg font-black text-[#212121] tracking-tight leading-none">دکتر امیر حبیبی</span>
              <span className="text-[8px] md:text-[10px] text-[#0D47A1] font-black tracking-widest uppercase mt-1">آسیب‌شناسی ورزشی</span>
            </div>
          </div>
          
          <div className="hidden lg:flex space-x-reverse space-x-6 xl:space-x-8 items-center">
            {links.map((link) => (
              <button 
                key={link.name} 
                onClick={() => handleNav(link.view)}
                className={`text-[13px] font-black uppercase tracking-tight transition-all relative py-2 hover:text-[#0D47A1] ${
                  currentView === link.view ? 'text-[#0D47A1]' : 'text-slate-500'
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 right-0 h-0.5 bg-[#0D47A1] rounded-full transition-all transform origin-right ${
                  currentView === link.view ? 'scale-x-100' : 'scale-x-0'
                }`} />
              </button>
            ))}
            
            {isLoggedIn && userRole === 'doctor' && (
              <button 
                onClick={() => handleNav('dashboard')}
                className={`text-[13px] font-black uppercase tracking-tight transition-all relative py-2 flex items-center gap-2 hover:text-[#0D47A1] ${
                  currentView === 'dashboard' ? 'text-[#0D47A1]' : 'text-[#00C853]'
                }`}
              >
                <LayoutDashboard size={16} />
                <span>پنل مدیریت دکتر</span>
              </button>
            )}

            {isLoggedIn && userRole === 'patient' && (
              <button 
                onClick={() => handleNav('rehab')}
                className={`text-[13px] font-black uppercase tracking-tight transition-all relative py-2 flex items-center gap-2 hover:text-[#0D47A1] ${
                  currentView === 'rehab' ? 'text-[#0D47A1]' : 'text-slate-500'
                }`}
              >
                <HeartPulse size={16} />
                <span>ریکاوری دیجیتال</span>
                <span className={`absolute bottom-0 left-0 right-0 h-0.5 bg-[#0D47A1] rounded-full transition-all transform origin-right ${
                  currentView === 'rehab' ? 'scale-x-100' : 'scale-x-0'
                }`} />
              </button>
            )}
            
            <div className="flex items-center gap-4 mr-4 border-r border-slate-100 pr-4">
              {isLoggedIn ? (
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => handleNav(userRole === 'doctor' ? 'dashboard' : 'profile')}
                    className="flex items-center gap-2 text-slate-700 font-bold hover:text-[#0D47A1] transition-colors p-2 rounded-lg hover:bg-blue-50"
                  >
                    <User size={18} />
                    <span>{userRole === 'doctor' ? 'پنل دکتر' : 'پنل کاربری'}</span>
                  </button>
                  <button onClick={onLogout} className="text-red-500 hover:bg-red-50 p-2 rounded-lg transition-colors">
                    <LogOut size={18} />
                  </button>
                </div>
              ) : (
                <button 
                  onClick={() => handleNav('login')}
                  className="bg-slate-100 text-[#212121] px-5 py-2 rounded-xl text-[11px] font-black uppercase hover:bg-[#0D47A1] hover:text-white transition-all"
                >
                  ورود / عضویت
                </button>
              )}
              <button 
                onClick={() => handleNav('consultation')}
                className="bg-[#0D47A1] text-white px-6 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-[#00C853] transition-all shadow-xl hover:-translate-y-1 active:scale-95"
              >
                رزرو نوبت
              </button>
            </div>
          </div>

          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsOpen(true)} className="text-slate-900 p-2 hover:bg-slate-50 rounded-lg">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      <div className={`lg:hidden fixed inset-0 z-[200] transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
        <div className={`absolute top-0 right-0 h-full w-[80%] max-w-sm bg-white shadow-2xl transition-transform duration-500 ease-in-out transform flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-white">
            <div className="flex items-center gap-2">
              <div className="bg-[#0D47A1] p-1.5 rounded-lg">
                <Microscope size={18} className="text-white" />
              </div>
              <span className="font-black text-[#212121]">منوی اصلی</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-slate-100 rounded-full">
              <X size={24} className="text-slate-900" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-2 mt-4 bg-white">
            {links.map((link) => (
              <button key={link.name} onClick={() => handleNav(link.view)} className={`w-full text-right px-6 py-4 rounded-2xl text-lg font-black flex items-center justify-between hover:bg-slate-50 ${currentView === link.view ? 'bg-blue-50 text-[#0D47A1]' : 'text-slate-900'}`}>
                <span>{link.name}</span>
                <ChevronLeft size={18} />
              </button>
            ))}
            {isLoggedIn && userRole === 'doctor' && (
              <button onClick={() => handleNav('dashboard')} className={`w-full text-right px-6 py-4 rounded-2xl text-lg font-black flex items-center justify-between hover:bg-slate-50 ${currentView === 'dashboard' ? 'bg-blue-50 text-[#0D47A1]' : 'text-[#00C853]'}`}>
                <div className="flex items-center gap-3">
                  <LayoutDashboard size={20} className="text-[#00C853]" />
                  <span>پنل مدیریت دکتر</span>
                </div>
                <ChevronLeft size={18} />
              </button>
            )}
            {isLoggedIn && userRole === 'patient' && (
              <button onClick={() => handleNav('rehab')} className={`w-full text-right px-6 py-4 rounded-2xl text-lg font-black flex items-center justify-between hover:bg-slate-50 ${currentView === 'rehab' ? 'bg-blue-50 text-[#0D47A1]' : 'text-slate-900'}`}>
                <div className="flex items-center gap-3">
                  <HeartPulse size={20} className="text-[#0D47A1]" />
                  <span>ریکاوری دیجیتال</span>
                </div>
                <ChevronLeft size={18} />
              </button>
            )}
            {isLoggedIn ? (
              <button onClick={() => handleNav(userRole === 'doctor' ? 'dashboard' : 'profile')} className="w-full text-right px-6 py-4 rounded-2xl text-lg font-black flex items-center justify-between hover:bg-slate-50">
                <span>{userRole === 'doctor' ? 'پنل دکتر' : 'پنل کاربری'}</span>
                <User size={18} />
              </button>
            ) : (
              <button onClick={() => handleNav('login')} className="w-full text-right px-6 py-4 rounded-2xl text-lg font-black flex items-center justify-between hover:bg-slate-50">
                <span>ورود / عضویت</span>
                <User size={18} />
              </button>
            )}
          </div>
          <div className="p-6 bg-slate-50 border-t border-slate-100">
            <button onClick={() => handleNav('consultation')} className="w-full bg-[#0D47A1] text-white py-4 rounded-2xl font-black text-lg shadow-xl active:scale-95">رزرو نوبت مشاوره</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
