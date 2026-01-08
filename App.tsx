
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import AIAssistant from './components/AIAssistant';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import SpecialtiesPage from './pages/SpecialtiesPage';
import ResearchPage from './pages/ResearchPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import AboutPage from './pages/AboutPage';
import ConsultationPage from './pages/ConsultationPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import RehabPage from './pages/RehabPage';
import ExerciseLibraryPage from './pages/ExerciseLibraryPage';
import BlogPage from './pages/BlogPage';
import DoctorDashboard from './pages/DoctorDashboard';
import { Beaker, ArrowLeft, HeartPulse, BookOpen, GraduationCap, LayoutDashboard } from 'lucide-react';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState('home');
  const [isNavigating, setIsNavigating] = useState(false);
  const [user, setUser] = useState<{ phone: string; role?: 'doctor' | 'patient' } | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      const knownPages = [
        'specialties', 'research', 'cases', 'about', 'consultation', 
        'login', 'profile', 'rehab', 'exercise-library', 'blog', 'dashboard'
      ];
      
      if (knownPages.includes(hash)) {
        triggerNavigation(hash);
      } else {
        triggerNavigation('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const triggerNavigation = (view: string) => {
    setIsNavigating(true);
    setTimeout(() => {
      setCurrentView(view);
      setIsNavigating(false);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 150);
  };

  const navigate = (view: string) => {
    window.location.hash = view;
  };

  const handleLoginSuccess = (phone: string) => {
    // Special case for doctor login demo (e.g. 09121111111)
    const role = phone === '09121111111' ? 'doctor' : 'patient';
    setUser({ phone, role });
    navigate(role === 'doctor' ? 'dashboard' : 'profile');
  };

  const handleLogout = () => {
    setUser(null);
    navigate('home');
  };

  const renderView = () => {
    switch (currentView) {
      case 'login':
        return <LoginPage onLoginSuccess={handleLoginSuccess} />;
      case 'dashboard':
        return <DoctorDashboard />;
      case 'profile':
        return user ? <ProfilePage userPhone={user.phone} /> : <LoginPage onLoginSuccess={handleLoginSuccess} />;
      case 'rehab':
        return user ? <RehabPage /> : <LoginPage onLoginSuccess={handleLoginSuccess} />;
      case 'exercise-library':
        return <ExerciseLibraryPage />;
      case 'blog':
        return <BlogPage />;
      case 'specialties':
        return <SpecialtiesPage />;
      case 'research':
        return <ResearchPage />;
      case 'cases':
        return <CaseStudiesPage />;
      case 'about':
        return <AboutPage />;
      case 'consultation':
        return <ConsultationPage />;
      case 'home':
      default:
        return (
          <div className="animate-in fade-in duration-700">
            <Hero />
            <div className="bg-[#212121] py-10 md:py-16 overflow-hidden">
              <div className="max-w-7xl mx-auto px-4 text-center">
                <p className="text-slate-500 text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] mb-6 md:mb-10">مورد اعتماد برترین نهادهای جهانی</p>
                <div className="flex flex-wrap justify-center items-center gap-6 md:gap-24 opacity-30 px-4">
                  <span className="text-lg md:text-2xl font-black text-white tracking-tighter">NIKE SPORTS LAB</span>
                  <span className="text-lg md:text-2xl font-black text-white tracking-tighter italic underline decoration-blue-500 underline-offset-8">US OLYMPICS</span>
                  <span className="text-lg md:text-2xl font-black text-white tracking-tighter">FIFA ACCREDITED</span>
                  <span className="text-lg md:text-2xl font-black text-white tracking-tighter border-2 border-white/20 px-3 md:px-4 py-1">Mayo Clinic</span>
                </div>
              </div>
            </div>
            <Services />
            
            {/* Featured Section for Education */}
            <section className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-8">
                  <div 
                    onClick={() => navigate('exercise-library')}
                    className="group relative bg-[#F5F7FA] p-12 rounded-[3rem] cursor-pointer overflow-hidden transition-all hover:bg-[#0D47A1] hover:text-white"
                  >
                    <div className="relative z-10">
                      <div className="bg-[#0D47A1] group-hover:bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-colors">
                        <HeartPulse className="text-white group-hover:text-[#0D47A1]" />
                      </div>
                      <h3 className="text-3xl font-black mb-4">کتابخانه تمرینات</h3>
                      <p className="text-slate-500 group-hover:text-blue-100 font-medium leading-relaxed mb-6">مجموعه‌ای رایگان از تمرینات تخصصی برای شانه، زانو و ستون فقرات با آموزش ویدئویی.</p>
                      <button className="flex items-center gap-2 font-black text-xs uppercase tracking-widest">مشاهده تمرینات <ArrowLeft size={16} className="rtl-flip" /></button>
                    </div>
                  </div>
                  <div 
                    onClick={() => navigate('blog')}
                    className="group relative bg-[#F5F7FA] p-12 rounded-[3rem] cursor-pointer overflow-hidden transition-all hover:bg-[#00C853] hover:text-white"
                  >
                    <div className="relative z-10">
                      <div className="bg-[#00C853] group-hover:bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-colors">
                        <BookOpen className="text-white group-hover:text-[#00C853]" />
                      </div>
                      <h3 className="text-3xl font-black mb-4">مجله علمی سلامت</h3>
                      <p className="text-slate-500 group-hover:text-green-100 font-medium leading-relaxed mb-6">مقالات تخصصی در زمینه پیشگیری از آسیب و ریکاوری پیشرفته سلولی.</p>
                      <button className="flex items-center gap-2 font-black text-xs uppercase tracking-widest">مطالعه مقالات <ArrowLeft size={16} className="rtl-flip" /></button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <Testimonials />
            <AIAssistant />
            <section className="py-16 md:py-32 relative overflow-hidden bg-[#0D47A1]">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
              <div className="max-w-4xl mx-auto px-4 text-center text-white relative z-10">
                <Beaker className="w-10 h-10 md:w-16 md:h-16 mx-auto mb-6 md:mb-10 text-blue-300 opacity-50" />
                <h2 className="text-2xl md:text-5xl lg:text-7xl font-black mb-6 md:mb-8 tracking-tighter leading-tight">ریکاوری شما یک علم است.</h2>
                <p className="text-base md:text-xl text-blue-100 mb-8 md:mb-10 max-w-2xl mx-auto font-medium">
                   برای بازگشت به میدان مسابقه، ما اینجا هستیم تا مسیر علمی بهبودی شما را در سطح سلولی ترسیم کنیم.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={() => navigate('rehab')}
                    className="bg-white text-[#0D47A1] px-8 py-4 md:px-12 md:py-6 rounded-2xl md:rounded-[2rem] text-base md:text-xl font-black hover:bg-slate-100 transition-all shadow-2xl active:scale-95 flex items-center justify-center gap-3"
                  >
                    <HeartPulse /> فیزیوتراپی دیجیتال
                  </button>
                  <button 
                    onClick={() => navigate('consultation')}
                    className="bg-transparent border-2 border-white text-white px-8 py-4 md:px-12 md:py-6 rounded-2xl md:rounded-[2rem] text-base md:text-xl font-black hover:bg-white/10 transition-all active:scale-95 flex items-center justify-center gap-3"
                  >
                    <span>رزرو نوبت فوری</span> <ArrowLeft size={24} className="rtl-flip" />
                  </button>
                </div>
              </div>
            </section>
          </div>
        );
    }
  };

  return (
    <div className={`min-h-screen bg-[#F5F7FA] selection:bg-[#0D47A1] selection:text-white font-['Vazirmatn'] transition-opacity duration-300 ${isNavigating ? 'opacity-50' : 'opacity-100'}`}>
      <Navbar onNavigate={navigate} currentView={currentView} isLoggedIn={!!user} onLogout={handleLogout} userRole={user?.role} />
      <main className="transition-all pt-16 md:pt-24 min-h-[60vh]">
        {renderView()}
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
};

export default App;
