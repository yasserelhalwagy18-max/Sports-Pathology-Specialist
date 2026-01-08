
import React from 'react';
import { Microscope, Activity, ShieldAlert, FileSearch, GraduationCap, BookOpen, FlaskConical } from 'lucide-react';
import { Publication, Exercise, RehabProgram, BlogPost } from './types';

export const SERVICES = [
  {
    id: 'tissue-analysis',
    title: 'آنالیز دقیق بافت',
    description: 'بررسی میکروسکوپی تخصصی بافت‌های اسکلتی-عضلانی برای تشخیص آسیب‌های پیچیده ورزشی در سطح سلولی و شناسایی نشانگرهای التهابی مزمن.',
    icon: <Microscope className="w-8 h-8 text-[#0D47A1]" />,
  },
  {
    id: 'performance-path',
    title: 'پروفایلینگ متابولیک',
    description: 'تجزیه و تحلیل نشانگرهای بیولوژیکی خونی و متابولیک برای ترسیم سقف ریکاوری ورزشکار و بهینه‌سازی بار تمرینی بر اساس تحمل واقعی بافت.',
    icon: <Activity className="w-8 h-8 text-[#0D47A1]" />,
  },
  {
    id: 'injury-prevention',
    title: 'غربالگری خطرات ژنومیک',
    description: 'شناسایی پیش‌زمینه‌های ژنتیکی برای اختلالات کلاژن یا شلی رباط از طریق غربالگری‌های تشخیصی پیشرفته برای مدیریت پیشگیرانه دوران حرفه‌ای.',
    icon: <ShieldAlert className="w-8 h-8 text-[#0D47A1]" />,
  },
  {
    id: 'surgical-pathology',
    title: 'مشاوره حین عمل',
    description: 'پشتیبانی پاتولوژی در زمان واقعی در طول بازسازی‌های ارتوپدی برای اطمینان از سلامت پیوند در جراحی‌های ورزشی حساس.',
    icon: <FileSearch className="w-8 h-8 text-[#0D47A1]" />,
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'سارا جنکینز',
    role: 'دونده المپیک',
    text: "آنالیز سلولی دکتر حبیبی کلید ریکاوری ACL من بود. ما فقط حدس نمی‌زدیم؛ ما ادغام پیوند را در زمان واقعی می‌دیدیم.",
    image: 'https://images.unsplash.com/photo-1565992441121-428761b285c0?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 2,
    name: 'مارکوس ثورن',
    role: 'مدیر عملکرد NFL',
    text: "پروفایل متابولیک ارائه شده توسط آزمایشگاه حبیبی پروتکل‌های بازگشت به بازی ما را تغییر داده است. این عینی‌ترین داده‌ای است که تاکنون داشته‌ایم.",
    image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 3,
    name: 'النا رودریگز',
    role: 'دوچرخه‌سوار حرفه‌ای',
    text: "پس از ۳ تشخیص اشتباه، دکتر حبیبی میکرو-کلسیفیکاسیون‌هایی را پیدا کرد که همه چیز را توضیح داد. تخصص واقعاً در سطح جهانی.",
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200'
  }
];

export const RESEARCH_PUBLICATIONS: Publication[] = [
  {
    title: "الگوهای بازیابی سلولی در دوندگان سرعت حرفه‌ای",
    journal: "مجله پاتولوژی ورزشی کاربردی",
    year: "۲۰۲۴",
    impact: "بالا",
    category: "سلامت عضلانی",
    icon: <BookOpen className="w-5 h-5" />
  },
  {
    title: "تشخیص میکروسکوپی شکستگی‌های استرس زیربالینی",
    journal: "بررسی ارتوپدی بالینی",
    year: "۲۰ academic",
    impact: "متوسط",
    category: "بازسازی استخوان",
    icon: <FlaskConical className="w-5 h-5" />
  }
];

export const PUBLIC_EXERCISES: Exercise[] = [
  {
    id: 'pub1',
    title: 'کشش کپسول پشتی شانه',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=400',
    sets: 3,
    reps: '۳۰ ثانیه مکث',
    duration: '۳ دقیقه',
    category: 'شانه',
    description: 'برای بهبود دامنه حرکتی شانه و کاهش فشار بر تاندون‌های چرخاننده.'
  },
  {
    id: 'pub2',
    title: 'تقویت عضله چهارسر (VMO)',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=400',
    sets: 4,
    reps: '۱۲ تکرار',
    duration: '۶ دقیقه',
    category: 'زانو',
    description: 'تمرکز بر بخش داخلی عضله چهارسر برای ثبات بیشتر کشکک زانو.'
  },
  {
    id: 'pub3',
    title: 'پل زدن (Bridging) برای ثبات کمر',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=400',
    sets: 3,
    reps: '۱۵ تکرار',
    duration: '۵ دقیقه',
    category: 'ستون فقرات',
    description: 'فعال‌سازی عضلات گلوتئال و ثبات‌دهنده‌های مرکزی کمر.'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog1',
    title: 'پیشگیری از آسیب ACL در ورزشکاران زن',
    excerpt: 'چرا ورزشکاران زن بیشتر در معرض آسیب رباط صلیبی هستند و چگونه می‌توان با تمرینات عصبی-عضلانی این خطر را کاهش داد.',
    author: 'دکتر امیر حبیبی',
    date: '۱۴ اسفند ۱۴۰۲',
    category: 'پیشگیری',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80&w=600',
    content: 'آسیب‌های رباط صلیبی قدامی (ACL) یکی از چالش‌برانگیزترین صدمات در ورزش‌های پربرخورد است...'
  },
  {
    id: 'blog2',
    title: 'نقش تغذیه در ترمیم میکروسکوپی بافت',
    excerpt: 'بررسی تاثیر پروتئین‌های کلاژن‌ساز و آنتی‌اکسیدان‌ها در سرعت بخشیدن به بازیابی سلولی پس از جراحی‌های ورزشی.',
    author: 'تیم تحقیقاتی حبیبی',
    date: '۲ فروردین ۱۴۰۳',
    category: 'ریکاوری',
    image: 'https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&q=80&w=600',
    content: 'فرآیند ترمیم بافت در سطح سلولی نیازمند بلوک‌های ساختمانی شیمیایی خاصی است...'
  }
];

export const CASE_STUDIES = [
  {
    title: "پرتاب‌کننده نخبه: درد مزمن آرنج",
    finding: "شناسایی میکرو-کلسیفیکاسیون‌های نادر در رباط جانبی اولنار که در MRI سنتی دیده نشده بود.",
    outcome: "درمان هدفمند موفق غیرجراحی؛ بازگشت به MLB در عرض ۴ ماه.",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "ژیمناست المپیک: سندرم استرس",
    finding: "تجزیه و تحلیل متابولیک سوء جذب مواد مغذی خاص را نشان داد که بر تراکم استخوان در سطح سلولی تأثیر می‌گذاشت.",
    outcome: "پروتکل تغذیه زیستی سفارشی؛ کسب مدال طلا در دوره بعدی قهرمانی.",
    image: "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?auto=format&fit=crop&q=80&w=800"
  }
];

export const REHAB_PROGRAMS: RehabProgram[] = [
  {
    id: 'acl-rehab-w1',
    title: 'بازتوانی ACL - هفته اول',
    week: 1,
    exercises: [
      {
        id: 'ex1',
        title: 'انقباض ایزومتریک چهارسر',
        videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=400',
        sets: 3,
        reps: '۱۰ ثانیه مکث',
        duration: '۵ دقیقه',
        description: 'در حالت نشسته یا خوابیده، عضلات روی ران خود را منقبض کرده و پشت زانو را به زمین فشار دهید.'
      },
      {
        id: 'ex2',
        title: 'بالا آوردن پا بصورت مستقیم (SLR)',
        videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        thumbnail: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=400',
        sets: 3,
        reps: '۱۵ تکرار',
        duration: '۸ دقیقه',
        description: 'پای آسیب دیده را در حالی که زانو کاملاً صاف است، تا زاویه ۴۵ درجه بالا بیاورید.'
      }
    ]
  }
];
