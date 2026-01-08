
import React from 'react';
import { BLOG_POSTS } from '../constants';
import { Calendar, User, Tag, ArrowLeft } from 'lucide-react';

const BlogPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F5F7FA] text-right">
      <div className="bg-white py-16 md:py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-[#212121] tracking-tighter mb-6">مجله علمی <span className="text-[#0D47A1]">پاتولوژی ورزشی</span></h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
            آخرین یافته‌های تحقیقاتی در زمینه ریکاوری، پیشگیری از آسیب و عملکرد بهینه ورزشکاران نخبگان.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {BLOG_POSTS.map(post => (
              <article key={post.id} className="bg-white rounded-[3rem] overflow-hidden shadow-xl border border-slate-100 group hover:shadow-2xl transition-all duration-500">
                <div className="h-[400px] overflow-hidden relative">
                  <img src={post.image} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt={post.title} />
                  <div className="absolute top-6 right-6 bg-[#0D47A1] text-white px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest shadow-lg">
                    {post.category}
                  </div>
                </div>
                <div className="p-10 md:p-16">
                  <div className="flex gap-6 mb-8 text-xs font-black text-slate-400 uppercase tracking-widest flex-row-reverse">
                    <span className="flex items-center gap-2"><Calendar size={14} className="text-[#0D47A1]" /> {post.date}</span>
                    <span className="flex items-center gap-2"><User size={14} className="text-[#0D47A1]" /> {post.author}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-[#212121] mb-6 leading-tight group-hover:text-[#0D47A1] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">
                    {post.excerpt}
                  </p>
                  <button className="flex items-center gap-3 bg-[#F5F7FA] text-[#0D47A1] px-10 py-5 rounded-2xl font-black text-lg hover:bg-[#0D47A1] hover:text-white transition-all active:scale-95">
                    مطالعه کامل مقاله <ArrowLeft size={20} className="rtl-flip" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-10">
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl border border-slate-100">
              <h3 className="text-xl font-black text-[#212121] mb-8 flex items-center justify-end gap-3">
                دسته‌بندی موضوعی <Tag size={20} className="text-[#0D47A1]" />
              </h3>
              <div className="space-y-2">
                {['پیشگیری از آسیب', 'تغذیه ورزشی', 'ریکاوری سلولی', 'اخبار کلینیک', 'تکنولوژی تشخیصی'].map(cat => (
                  <button key={cat} className="w-full text-right px-6 py-4 rounded-xl font-bold text-slate-600 hover:bg-[#0D47A1] hover:text-white transition-all flex items-center justify-between flex-row-reverse">
                    <span>{cat}</span>
                    <span className="text-[10px] opacity-50 font-black">۱۲</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-[#0D47A1] p-10 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-24 h-24 bg-white/10 blur-[60px]" />
              <h3 className="text-2xl font-black mb-6 leading-tight">اشتراک در مجله سلامت حبیبی</h3>
              <p className="text-blue-100 mb-8 font-medium">مهم‌ترین یافته‌های تحقیقاتی را به صورت هفتگی در ایمیل خود دریافت کنید.</p>
              <div className="space-y-4">
                <input type="email" placeholder="ایمیل شما" className="w-full bg-white/10 border border-white/20 rounded-xl py-4 px-6 outline-none focus:border-white transition-all text-right font-bold text-sm" />
                <button className="w-full bg-[#00C853] text-white py-4 rounded-xl font-black shadow-xl hover:bg-white hover:text-[#00C853] transition-all">تایید اشتراک</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
