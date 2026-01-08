import React, { useState } from 'react';
import { 
  Users, Calendar as CalendarIcon, Activity, ClipboardList, TrendingUp, 
  Settings, Search, Bell, Filter, 
  ChevronLeft, MoreVertical, CheckCircle, Clock, 
  AlertCircle, Download, FileText, PlusCircle, 
  Stethoscope, Play, Trash2, Save, X, Video, MapPin,
  ChevronRight
} from 'lucide-react';
import { PatientRecord, Appointment, Exercise, Prescription, RehabLog } from '../types';
import { PUBLIC_EXERCISES } from '../constants';

const DoctorDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'appointments' | 'patients' | 'prescriptions' | 'reports'>('overview');
  const [showPrescriptionModal, setShowPrescriptionModal] = useState(false);
  const [selectedPatientId, setSelectedPatientId] = useState<string>('');
  const [prescribedExercises, setPrescribedExercises] = useState<Exercise[]>([]);
  const [viewingPatientLogs, setViewingPatientLogs] = useState<PatientRecord | null>(null);

  const stats = [
    { label: 'بیماران فعال', value: '۱۲۴', icon: <Users size={20} />, trend: '+۱۲٪', color: 'bg-blue-500' },
    { label: 'ویزیت‌های امروز', value: '۱۸', icon: <CalendarIcon size={20} />, trend: '۸ آنلاین', color: 'bg-green-500' },
    { label: 'ریکاوری‌های موفق', value: '۴۵', icon: <Activity size={20} />, trend: 'ماه جاری', color: 'bg-purple-500' },
    { label: 'نسخه‌های فعال', value: '۳۲', icon: <ClipboardList size={20} />, trend: 'رصد هوشمند', color: 'bg-orange-500' },
  ];

  const recentPatients: PatientRecord[] = [
    { id: '1', name: 'علی رضایی', phone: '۰۹۱۲۳۴۵۶۷۸۹', lastVisit: '۱۴۰۳/۰۲/۱۵', rehabProgress: 85, avgPain: 2, status: 'active' },
    { id: '2', name: 'مریم ساداتی', phone: '۰۹۱۹۸۷۶۵۴۳۲', lastVisit: '۱۴۰۳/۰۲/۱۲', rehabProgress: 40, avgPain: 6, status: 'observation' },
    { id: '3', name: 'رضا علوی', phone: '۰۹۱۲۰۰۰۰۱۱۱', lastVisit: '۱۴۰۳/۰۲/۱۰', rehabProgress: 100, avgPain: 0, status: 'recovered' },
  ];

  const mockLogs: RehabLog[] = [
    { exerciseId: 'pub1', date: '۱۴۰۳/۰۲/۱۸', completed: true, painLevel: 3 },
    { exerciseId: 'pub2', date: '۱۴۰۳/۰۲/۱۸', completed: true, painLevel: 2 },
    { exerciseId: 'pub1', date: '۱۴۰۳/۰۲/۱۷', completed: true, painLevel: 4 },
    { exerciseId: 'pub2', date: '۱۴۰۳/۰۲/۱۷', completed: true, painLevel: 4 },
    { exerciseId: 'pub1', date: '۱۴۰۳/۰۲/۱۶', completed: true, painLevel: 5 },
  ];

  const todayAppointments: Appointment[] = [
    { id: 'a1', patientName: 'سهراب مرادی', phone: '۰۹۱۲۳۳۳۴۴۵۵', date: 'امروز', time: '۰۹:۳۰', type: 'online', status: 'confirmed', reason: 'بررسی درد زانو' },
    { id: 'a2', patientName: 'الناز رکابی', phone: '۰۹۳۵۱۱۱۲۲۳۳', date: 'امروز', time: '۱۰:۴۵', type: 'in-person', status: 'pending', reason: 'آسیب مچ پا' },
    { id: 'a3', patientName: 'حمید استیلی', phone: '۰۹۱۲۵۵۵۶۶۷۷', date: 'امروز', time: '۱۳:۰۰', type: 'online', status: 'confirmed', reason: 'مشاوره جراحی' },
  ];

  const activePrescriptions: Prescription[] = [
    { id: 'p1', patientId: '1', patientName: 'علی رضایی', assignedDate: '۱۴۰۳/۰۲/۱۴', status: 'active', exercises: [PUBLIC_EXERCISES[0], PUBLIC_EXERCISES[1]] },
    { id: 'p2', patientId: '2', patientName: 'مریم ساداتی', assignedDate: '۱۴۰۳/۰۲/۱۱', status: 'active', exercises: [PUBLIC_EXERCISES[2]] },
  ];

  const menuItems = [
    { id: 'overview', label: 'داشبورد', icon: <TrendingUp size={18} /> },
    { id: 'prescriptions', label: 'نسخه‌ها', icon: <Stethoscope size={18} /> },
    { id: 'appointments', label: 'نوبت‌ها', icon: <CalendarIcon size={18} /> },
    { id: 'patients', label: 'پرونده‌ها', icon: <Users size={18} /> },
    { id: 'reports', label: 'گزارشات', icon: <ClipboardList size={18} /> },
  ];

  const handleAddExercise = (ex: Exercise) => {
    if (!prescribedExercises.find(e => e.id === ex.id)) {
      setPrescribedExercises([...prescribedExercises, ex]);
    }
  };

  const handleRemoveExercise = (id: string) => {
    setPrescribedExercises(prescribedExercises.filter(ex => ex.id !== id));
  };

  const handleSavePrescription = () => {
    if (!selectedPatientId || prescribedExercises.length === 0) {
      alert('لطفاً بیمار و حداقل یک تمرین را انتخاب کنید');
      return;
    }
    alert('نسخه دیجیتال با موفقیت برای بیمار ارسال شد');
    setShowPrescriptionModal(false);
    setPrescribedExercises([]);
    setSelectedPatientId('');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'appointments':
        return (
          <div className="space-y-6 md:space-y-8 animate-in fade-in duration-500">
            <div className="flex flex-col sm:flex-row justify-between items-center flex-row-reverse mb-6 gap-4">
              <h3 className="text-xl md:text-2xl font-black text-slate-900">تقویم زمان‌بندی نوبت‌ها</h3>
              <div className="flex gap-2 w-full sm:w-auto justify-center">
                <button className="bg-white border border-slate-200 p-2 rounded-xl hover:bg-slate-50 transition-all"><ChevronRight size={18} className="text-slate-400" /></button>
                <div className="bg-white border border-slate-200 px-4 py-2 rounded-xl font-bold text-slate-700 text-xs sm:text-sm">هفته جاری</div>
                <button className="bg-white border border-slate-200 p-2 rounded-xl hover:bg-slate-50 transition-all"><ChevronLeft size={18} className="text-slate-400" /></button>
              </div>
            </div>

            <div className="bg-white rounded-[2rem] md:rounded-[3rem] border border-slate-100 shadow-xl overflow-hidden p-4 md:p-8">
              <div className="grid grid-cols-7 gap-1 md:gap-4 mb-4 md:mb-6 border-b border-slate-50 pb-4 md:pb-6 text-center" dir="rtl">
                {['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج'].map(day => (
                  <div key={day} className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-widest">{day}</div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1 md:gap-4">
                {[...Array(30)].map((_, i) => {
                  const day = i + 1;
                  const hasAppt = day === 2 || day === 4 || day === 5;
                  return (
                    <div key={i} className={`aspect-square md:h-32 rounded-lg md:rounded-[2rem] border transition-all p-1 md:p-4 text-right flex flex-col justify-between group cursor-pointer ${hasAppt ? 'bg-blue-50/50 border-blue-100' : 'bg-slate-50/30 border-slate-50 hover:bg-white hover:border-blue-200'}`}>
                      <span className={`text-[10px] md:text-sm font-black ${hasAppt ? 'text-blue-700' : 'text-slate-400'}`}>{day}</span>
                      {hasAppt && (
                        <div className="hidden md:flex flex-col gap-1">
                          <div className="bg-blue-700 text-white text-[8px] font-black p-1.5 rounded-lg truncate">۳ نوبت</div>
                          <div className="bg-green-600 text-white text-[8px] font-black p-1.5 rounded-lg truncate">۱ آنلاین</div>
                        </div>
                      )}
                      {hasAppt && <div className="md:hidden w-1 h-1 bg-blue-700 rounded-full mx-auto" />}
                    </div>
                  );
                })}
              </div>
            </div>
            
            <section className="bg-white rounded-[2rem] md:rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden mt-6 md:mt-8">
              <div className="p-6 md:p-8 border-b border-slate-50 flex flex-col sm:flex-row justify-between items-center flex-row-reverse gap-4">
                <h3 className="text-lg md:text-xl font-black text-slate-900">جزئیات نوبت‌های امروز</h3>
                <button className="w-full sm:w-auto bg-[#00C853] text-white px-6 py-2 rounded-xl font-black text-xs flex items-center justify-center gap-2 shadow-lg">
                  <PlusCircle size={16} /> افزودن نوبت
                </button>
              </div>
              <div className="divide-y divide-slate-50">
                {todayAppointments.map((app) => (
                  <div key={app.id} className="p-4 md:p-6 flex flex-col sm:flex-row items-center justify-between hover:bg-slate-50 transition-colors flex-row-reverse gap-4">
                    <div className="flex items-center gap-3 md:gap-4 flex-row-reverse text-right w-full sm:w-auto">
                      <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center font-bold shrink-0 ${app.type === 'online' ? 'bg-blue-50 text-blue-600' : 'bg-green-50 text-green-600'}`}>
                        {app.type === 'online' ? <Video size={18} /> : <MapPin size={18} />}
                      </div>
                      <div className="flex-1">
                        <h5 className="font-black text-slate-900 text-sm md:text-base">{app.patientName}</h5>
                        <p className="text-[10px] md:text-xs text-slate-400 font-bold">{app.reason}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between sm:justify-end gap-6 md:gap-8 flex-row-reverse w-full sm:w-auto border-t sm:border-0 pt-4 sm:pt-0">
                      <div className="text-right">
                        <p className="text-xs md:text-sm font-black text-slate-900">{app.time}</p>
                        <p className="text-[9px] md:text-[10px] text-slate-400 font-bold uppercase">{app.type === 'online' ? 'مشاوره ویدئویی' : 'مطب حضوری'}</p>
                      </div>
                      <div className="flex gap-2">
                        <button className="p-2 md:p-3 bg-white border border-slate-100 rounded-xl text-slate-400 hover:text-blue-700 transition-all"><CheckCircle size={18} /></button>
                        <button className="p-2 md:p-3 bg-white border border-slate-100 rounded-xl text-slate-400 hover:text-red-500 transition-all"><Trash2 size={18} /></button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        );

      case 'patients':
        return (
          <div className="space-y-6 md:space-y-8 animate-in fade-in duration-500">
            <div className="flex flex-col sm:flex-row justify-between items-center flex-row-reverse mb-6 gap-4">
              <h3 className="text-xl md:text-2xl font-black text-slate-900">مدیریت پرونده بیماران</h3>
              <div className="flex gap-2 items-center w-full sm:w-auto">
                <div className="relative flex-1 sm:w-64">
                  <input type="text" placeholder="جستجو..." className="w-full bg-white border border-slate-200 rounded-xl py-2 px-10 text-xs md:text-sm font-medium focus:border-blue-700 outline-none transition-all" />
                  <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                </div>
                <button className="bg-white border border-slate-200 p-2.5 rounded-xl text-slate-600 hover:bg-slate-50 transition-all"><Filter size={18} /></button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:gap-6">
              {recentPatients.map((patient) => (
                <div key={patient.id} className="bg-white p-4 md:p-8 rounded-[1.5rem] md:rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col lg:flex-row items-center justify-between flex-row-reverse gap-4">
                  <div className="flex items-center gap-4 md:gap-6 flex-row-reverse w-full lg:w-auto">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-700 text-lg md:text-2xl font-black shrink-0">{patient.name[0]}</div>
                    <div className="text-right">
                      <h4 className="text-base md:text-xl font-black text-slate-900">{patient.name}</h4>
                      <div className="flex flex-col sm:flex-row gap-1 sm:gap-4 flex-row-reverse text-[10px] md:text-xs text-slate-400 font-bold mt-1">
                        <span dir="ltr">{patient.phone}</span>
                        <span className="hidden sm:inline">|</span>
                        <span>آخرین: {patient.lastVisit}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row items-center gap-6 lg:gap-12 flex-row-reverse w-full lg:w-auto border-t lg:border-0 pt-4 lg:pt-0">
                    <div className="text-right w-full sm:w-40">
                      <div className="flex justify-between items-center flex-row-reverse mb-1">
                        <span className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase">پیشرفت</span>
                        <span className="text-[10px] font-black text-blue-700">{patient.rehabProgress}%</span>
                      </div>
                      <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden shadow-inner">
                        <div className="bg-blue-700 h-full" style={{ width: `${patient.rehabProgress}%` }} />
                      </div>
                    </div>
                    
                    <div className="flex gap-2 w-full sm:w-auto">
                      <button 
                        onClick={() => setViewingPatientLogs(patient)}
                        className="flex-1 sm:flex-none bg-blue-700 text-white px-5 py-2.5 rounded-xl font-black text-[10px] shadow-lg hover:bg-slate-900 transition-all"
                      >
                        بررسی جزئیات
                      </button>
                      <button className="bg-slate-50 text-slate-600 p-2.5 rounded-xl hover:bg-slate-100 transition-all"><MoreVertical size={18} /></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'prescriptions':
        return (
          <div className="space-y-6 md:space-y-8 animate-in fade-in duration-500">
            <div className="flex flex-col sm:flex-row justify-between items-center flex-row-reverse mb-6 gap-4">
              <h3 className="text-xl md:text-2xl font-black text-slate-900">مدیریت نسخه‌های دیجیتال</h3>
              <button 
                onClick={() => setShowPrescriptionModal(true)}
                className="w-full sm:w-auto bg-[#0D47A1] text-white px-6 py-3 rounded-xl font-black text-[10px] md:text-sm flex items-center justify-center gap-2 hover:bg-slate-900 transition-all shadow-xl"
              >
                <PlusCircle size={18} /> تجویز برنامه جدید
              </button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {activePrescriptions.map((pres) => (
                <div key={pres.id} className="bg-white p-6 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-all">
                  <div className="flex justify-between items-start mb-6 flex-row-reverse">
                    <div className="text-right">
                      <h4 className="text-base md:text-lg font-black text-slate-900">{pres.patientName}</h4>
                      <p className="text-[9px] md:text-[10px] text-slate-400 font-bold">تاریخ تجویز: {pres.assignedDate}</p>
                    </div>
                    <span className="bg-green-50 text-green-600 px-2 py-0.5 rounded-full text-[9px] font-black">فعال</span>
                  </div>
                  
                  <div className="space-y-2 mb-6 md:mb-8">
                    {pres.exercises.map((ex) => (
                      <div key={ex.id} className="flex items-center gap-2 flex-row-reverse text-right bg-slate-50 p-2 rounded-lg">
                        <Play size={12} className="text-[#0D47A1]" />
                        <span className="text-[10px] md:text-xs font-bold text-slate-700">{ex.title}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <button className="flex-1 bg-slate-50 text-slate-600 py-2.5 rounded-xl font-black text-[10px] hover:bg-slate-100 transition-all">ویرایش</button>
                    <button className="flex-1 border border-slate-100 text-slate-400 py-2.5 rounded-xl font-black text-[10px] hover:text-red-500 transition-all">توقف</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'overview':
      default:
        return (
          <div className="animate-in fade-in duration-500">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-10">
              {stats.map((stat, i) => (
                <div key={i} className="bg-white p-4 md:p-6 rounded-xl md:rounded-[2rem] border border-slate-100 shadow-sm flex flex-col md:flex-row items-center justify-between flex-row-reverse gap-3 md:gap-4">
                  <div className={`${stat.color} p-3 md:p-4 rounded-xl md:rounded-2xl text-white shadow-lg shrink-0`}>
                    {stat.icon}
                  </div>
                  <div className="text-center md:text-right">
                    <p className="text-[8px] md:text-xs font-black text-slate-400 uppercase mb-1 tracking-tight">{stat.label}</p>
                    <h4 className="text-lg md:text-2xl font-black text-slate-900">{stat.value}</h4>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
              <div className="lg:col-span-2 space-y-6 md:space-y-8">
                <section className="bg-white rounded-[1.5rem] md:rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
                  <div className="p-6 md:p-8 border-b border-slate-50 flex justify-between items-center flex-row-reverse">
                    <h3 className="text-lg md:text-xl font-black text-slate-900">ویزیت‌های پیش‌رو</h3>
                    <button onClick={() => setActiveTab('appointments')} className="text-[#0D47A1] text-[10px] md:text-xs font-black flex items-center gap-1 hover:underline">مشاهده همه <ChevronLeft size={14} /></button>
                  </div>
                  <div className="divide-y divide-slate-50">
                    {todayAppointments.slice(0, 3).map((app) => (
                      <div key={app.id} className="p-4 md:p-6 flex items-center justify-between hover:bg-slate-50 transition-colors flex-row-reverse">
                        <div className="flex items-center gap-3 md:gap-4 flex-row-reverse text-right">
                          <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center font-bold shrink-0 ${app.type === 'online' ? 'bg-blue-50 text-blue-600' : 'bg-green-50 text-green-600'}`}>
                            {app.type === 'online' ? <Video size={18} /> : <MapPin size={18} />}
                          </div>
                          <div>
                            <h5 className="font-black text-slate-900 text-xs md:text-base">{app.patientName}</h5>
                            <p className="text-[10px] text-slate-400 font-bold">{app.time}</p>
                          </div>
                        </div>
                        <button className="text-slate-400 hover:text-slate-900 p-2"><MoreVertical size={18} /></button>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="bg-white rounded-[1.5rem] md:rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
                  <div className="p-6 md:p-8 border-b border-slate-50 flex justify-between items-center flex-row-reverse">
                    <h3 className="text-lg md:text-xl font-black text-slate-900">پرونده‌های فعال</h3>
                    <button onClick={() => setActiveTab('patients')} className="bg-slate-50 text-slate-600 p-2 rounded-lg hover:bg-slate-100 transition-all"><Filter size={18} /></button>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-right">
                      <thead className="bg-slate-50/50">
                        <tr className="text-slate-400 text-[9px] md:text-[10px] font-black uppercase tracking-widest">
                          <th className="p-4 md:p-6 text-right">بیمار</th>
                          <th className="p-4 md:p-6 text-right hidden sm:table-cell">پیشرفت</th>
                          <th className="p-4 md:p-6 text-right">وضعیت</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-50">
                        {recentPatients.map((patient) => (
                          <tr key={patient.id} className="hover:bg-slate-50 transition-colors">
                            <td className="p-4 md:p-6">
                              <div className="font-bold text-slate-900 text-xs md:text-base">{patient.name}</div>
                              <div className="text-[9px] md:text-[10px] text-slate-400 font-bold" dir="ltr">{patient.phone}</div>
                            </td>
                            <td className="p-4 md:p-6 hidden sm:table-cell">
                              <div className="w-full bg-slate-100 h-1 rounded-full overflow-hidden max-w-[80px]">
                                <div className="bg-[#00C853] h-full" style={{ width: `${patient.rehabProgress}%` }} />
                              </div>
                            </td>
                            <td className="p-4 md:p-6">
                              <span className={`px-2 py-0.5 rounded-full text-[9px] font-black ${
                                patient.status === 'active' ? 'bg-blue-50 text-blue-700' : 'bg-green-50 text-green-700'
                              }`}>
                                {patient.status === 'active' ? 'درمان' : 'بهبود'}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>
              </div>

              <div className="space-y-6 md:space-y-8">
                <section className="bg-[#0D47A1] p-6 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-24 h-24 bg-white/10 blur-[60px] opacity-20" />
                  <div className="flex items-center justify-between mb-4 md:mb-6 flex-row-reverse">
                    <h4 className="font-black flex items-center gap-2 text-xs md:text-sm text-right">هوش مصنوعی جمینای <Activity size={16} className="text-blue-300" /></h4>
                    <div className="w-2 h-2 bg-[#00C853] rounded-full"></div>
                  </div>
                  <div className="p-4 bg-white/10 rounded-2xl border border-white/10 text-right">
                    <p className="text-[10px] md:text-xs font-medium leading-relaxed mb-3">تحلیل روند درمان ۳ بیمار نشان‌دهنده نیاز به تغییر پروتکل است.</p>
                    <button onClick={() => setActiveTab('prescriptions')} className="text-[10px] font-black text-blue-300 hover:text-white transition-colors underline">مشاهده اصلاحات</button>
                  </div>
                </section>

                <section className="bg-white p-6 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] border border-slate-100 shadow-sm text-right">
                  <h3 className="text-base md:text-lg font-black text-slate-900 mb-4 md:mb-6 flex items-center justify-end gap-2">
                    گزارشات معلق <AlertCircle size={18} className="text-orange-500" />
                  </h3>
                  <div className="space-y-3">
                    {[1, 2].map((item) => (
                      <div key={item} className="p-3 md:p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between flex-row-reverse group cursor-pointer hover:border-[#0D47A1] transition-all">
                        <div className="flex items-center gap-3 flex-row-reverse">
                          <FileText size={16} className="text-slate-400 group-hover:text-[#0D47A1]" />
                          <div className="text-right">
                            <p className="text-xs font-bold text-slate-900">نمونه #۳۲۴{item}</p>
                            <p className="text-[9px] text-slate-400 font-bold">بیمار: م. ساداتی</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F7FA] flex text-right font-['Vazirmatn'] relative pb-20 lg:pb-0">
      {/* Sidebar - Desktop */}
      <aside className="w-72 bg-white border-l border-slate-200 hidden lg:flex flex-col sticky top-24 h-[calc(100vh-6rem)]">
        <div className="p-8 border-b border-slate-50">
          <div className="flex items-center gap-4 flex-row-reverse">
            <div className="w-12 h-12 bg-[#0D47A1] rounded-2xl flex items-center justify-center text-white font-black shadow-lg">د</div>
            <div className="text-right">
              <h4 className="font-black text-slate-900">دکتر امیر حبیبی</h4>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">پنل مدیریت تخصصی</p>
            </div>
          </div>
        </div>
        
        <nav className="flex-1 p-6 space-y-2">
          {menuItems.map(item => (
            <button 
              key={item.id}
              onClick={() => setActiveTab(item.id as any)}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl font-bold transition-all flex-row-reverse ${activeTab === item.id ? 'bg-[#0D47A1] text-white shadow-xl' : 'text-slate-500 hover:bg-slate-50'}`}
            >
              {item.icon}
              <span className="flex-1 text-right">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-6 border-t border-slate-50">
          <button className="w-full flex items-center gap-4 px-4 py-3 text-slate-500 hover:text-red-500 transition-colors flex-row-reverse font-bold">
            <Settings size={20} />
            <span className="flex-1 text-right">تنظیمات</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-4 md:p-8 lg:p-12 overflow-x-hidden">
        {/* Mobile Tab Scroller */}
        <div className="lg:hidden flex overflow-x-auto no-scrollbar gap-2 mb-6 -mx-4 px-4 sticky top-0 bg-[#F5F7FA] z-[10] py-3 border-b border-slate-100">
          {menuItems.map(item => (
            <button 
              key={item.id}
              onClick={() => setActiveTab(item.id as any)}
              className={`whitespace-nowrap flex items-center gap-2 px-5 py-2.5 rounded-xl text-[10px] font-black transition-all flex-row-reverse ${
                activeTab === item.id ? 'bg-[#0D47A1] text-white shadow-md' : 'bg-white text-slate-500 border border-slate-100'
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        {renderContent()}
      </main>

      {/* Modals remain same as previous version but with p-4 md:p-8 for better mobile responsiveness */}
      {viewingPatientLogs && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-md" onClick={() => setViewingPatientLogs(null)} />
          <div className="relative bg-white w-full max-w-4xl rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl animate-in zoom-in duration-300 flex flex-col max-h-[90vh]">
            <div className="p-6 md:p-8 border-b border-slate-100 flex justify-between items-center flex-row-reverse shrink-0">
              <div className="text-right">
                <h3 className="text-lg md:text-2xl font-black text-slate-900">پیشرفت: {viewingPatientLogs.name}</h3>
                <p className="text-[10px] font-bold text-slate-400">آخرین بروزرسانی: امروز</p>
              </div>
              <button onClick={() => setViewingPatientLogs(null)} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                <X size={24} />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 md:p-8">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-10">
                <div className="bg-slate-50 p-4 md:p-6 rounded-2xl md:rounded-3xl border border-slate-100 text-right">
                  <p className="text-[8px] md:text-[10px] font-black text-slate-400 uppercase mb-1">میانگین درد</p>
                  <div className="flex items-center gap-2 md:gap-3 justify-end">
                    <span className="text-xl md:text-3xl font-black text-red-500">{viewingPatientLogs.avgPain}</span>
                    <TrendingUp size={20} className="text-red-400" />
                  </div>
                </div>
                <div className="bg-slate-50 p-4 md:p-6 rounded-2xl md:rounded-3xl border border-slate-100 text-right">
                  <p className="text-[8px] md:text-[10px] font-black text-slate-400 uppercase mb-1">انطباق برنامه</p>
                  <div className="flex items-center gap-2 md:gap-3 justify-end">
                    <span className="text-xl md:text-3xl font-black text-green-600">۸۸٪</span>
                    <Activity size={20} className="text-green-400" />
                  </div>
                </div>
                <div className="bg-slate-50 p-4 md:p-6 rounded-2xl md:rounded-3xl border border-slate-100 text-right col-span-2 md:col-span-1">
                  <p className="text-[8px] md:text-[10px] font-black text-slate-400 uppercase mb-1">تمرینات</p>
                  <div className="flex items-center gap-2 md:gap-3 justify-end">
                    <span className="text-xl md:text-3xl font-black text-blue-700">۴۲</span>
                    <CheckCircle size={20} className="text-blue-400" />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-black text-slate-900 text-right mb-4">تاریخچه فعالیت‌ها</h4>
                <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
                  <table className="w-full text-right min-w-[400px]" dir="rtl">
                    <thead className="bg-slate-50">
                      <tr className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        <th className="p-4 text-right">تاریخ</th>
                        <th className="p-4 text-right">تمرین</th>
                        <th className="p-4 text-right">درد</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {mockLogs.map((log, i) => {
                        const ex = PUBLIC_EXERCISES.find(e => e.id === log.exerciseId);
                        return (
                          <tr key={i} className="hover:bg-slate-50 transition-colors">
                            <td className="p-4 text-[10px] md:text-sm font-bold text-slate-900">{log.date}</td>
                            <td className="p-4 text-[10px] md:text-sm font-medium text-slate-600">{ex?.title || 'تمرین'}</td>
                            <td className="p-4 text-[10px] md:text-sm font-black">{log.painLevel}/۱۰</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8 border-t border-slate-100 bg-slate-50 flex flex-col sm:flex-row justify-between items-center flex-row-reverse gap-4 shrink-0">
              <div className="flex gap-2 w-full sm:w-auto">
                <button className="flex-1 sm:flex-none bg-blue-700 text-white px-6 py-3 rounded-xl font-black text-xs shadow-xl">تماس ویدئویی</button>
                <button className="flex-1 sm:flex-none bg-white border border-slate-200 text-slate-600 px-6 py-3 rounded-xl font-black text-xs">ارسال پیام</button>
              </div>
              <div className="text-right text-[10px] font-bold text-slate-400">
                بر اساس سنسورهای حرکتی و گزارشات.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Prescription Modal */}
      {showPrescriptionModal && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-md" onClick={() => setShowPrescriptionModal(false)} />
          <div className="relative bg-white w-full max-w-4xl rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl animate-in zoom-in duration-300 flex flex-col max-h-[90vh]">
            <div className="p-6 md:p-8 border-b border-slate-100 flex justify-between items-center flex-row-reverse shrink-0">
              <h3 className="text-lg md:text-2xl font-black text-slate-900">تجویز برنامه دیجیتال</h3>
              <button onClick={() => setShowPrescriptionModal(false)} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                <X size={24} />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 md:p-8 grid md:grid-cols-2 gap-6 md:gap-10">
              <div className="space-y-6">
                <div className="space-y-2 text-right">
                  <label className="text-xs md:text-sm font-bold text-slate-700 block pr-2">انتخاب بیمار</label>
                  <select 
                    value={selectedPatientId}
                    onChange={(e) => setSelectedPatientId(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl md:rounded-2xl py-3 md:py-4 px-6 outline-none focus:border-[#0D47A1] transition-all text-right font-bold text-xs md:text-sm"
                  >
                    <option value="">جستجو...</option>
                    {recentPatients.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
                  </select>
                </div>

                <div className="bg-slate-50 rounded-[1.5rem] md:rounded-[2rem] p-4 md:p-6 border border-slate-100">
                  <h4 className="font-black text-slate-900 mb-4 text-right text-xs md:text-sm">تمرینات منتخب</h4>
                  {prescribedExercises.length > 0 ? (
                    <div className="space-y-2">
                      {prescribedExercises.map((ex) => (
                        <div key={ex.id} className="bg-white p-3 rounded-lg flex justify-between items-center flex-row-reverse border border-slate-50 shadow-sm">
                          <span className="font-bold text-[10px] md:text-xs text-slate-700">{ex.title}</span>
                          <button onClick={() => handleRemoveExercise(ex.id)} className="text-red-500 hover:bg-red-50 p-1 rounded-md">
                            <Trash2 size={16} />
                          </button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-6 text-slate-400">
                      <p className="text-[10px] font-bold">هنوز تمرینی انتخاب نشده است</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-black text-slate-900 text-right text-xs md:text-sm">کتابخانه تمرینات</h4>
                <div className="space-y-2 max-h-[300px] overflow-y-auto pr-2 no-scrollbar">
                  {PUBLIC_EXERCISES.map((ex) => (
                    <button 
                      key={ex.id}
                      onClick={() => handleAddExercise(ex)}
                      className="w-full bg-white border border-slate-100 p-3 rounded-xl flex items-center justify-between flex-row-reverse hover:border-[#0D47A1] transition-all text-right group"
                    >
                      <div className="flex items-center gap-3 flex-row-reverse">
                        <img src={ex.thumbnail} className="w-8 h-8 md:w-10 md:h-10 rounded-lg object-cover" alt="" />
                        <div>
                          <p className="font-black text-[10px] md:text-xs text-slate-900">{ex.title}</p>
                          <p className="text-[8px] md:text-[9px] text-[#0D47A1] font-bold">{ex.category}</p>
                        </div>
                      </div>
                      <PlusCircle size={18} className="text-slate-300 group-hover:text-[#0D47A1]" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8 border-t border-slate-100 bg-slate-50 flex justify-end shrink-0">
              <button 
                onClick={handleSavePrescription}
                className="w-full sm:w-auto bg-[#00C853] text-white px-8 py-4 rounded-xl md:rounded-2xl font-black text-sm md:text-base shadow-xl hover:bg-[#0D47A1] transition-all flex items-center justify-center gap-3"
              >
                <Save size={20} /> انتشار نسخه
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorDashboard;