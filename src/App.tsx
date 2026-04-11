/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { useNavigate, useLocation, Routes, Route, Navigate } from 'react-router-dom';
import {
  Users,
  Target,
  MessageSquare,
  TrendingUp,
  CheckCircle2,
  BarChart3,
  ShieldCheck,
  Zap,
  Search,
  Megaphone,
  ChevronDown,
  Info,
  HeartHandshake,
  Wifi,
  ShoppingCart,
  RefreshCcw,
  Clock,
  Smartphone,
  Headphones,
  LayoutDashboard,
  UserCog,
  Wallet,
  Menu,
  X,
  FileText,
  Briefcase,
  Award,
  DollarSign,
  PieChart,
  AlertCircle,
  Cpu,
  GraduationCap,
  BookOpen,
  Star,
  Sparkles,
  Layers,
  Rocket,
  ShoppingBag,
  Video,
  Globe,
  Camera,
  Image as ImageIcon,
  Lock,
  ArrowRight,
  ChevronRight,
  Minus,
  Activity,
  Maximize,
  HardDrive,
  Facebook,
  Calendar,
  MapPin,
  Monitor,
  MousePointer2,
  ListRestart
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import LoginPage from './components/LoginPage';
import { MARKETING_DATA } from './data/marketingData';

const GOOGLE_CLIENT_ID = '637002508826-qcp2focvlutcoo0s0i9vd46964hrctfu.apps.googleusercontent.com';

// --- Types ---

type TabType = 'overview' | 'strategy' | 'content' | 'channels' | 'website' | 'budget' | 'roadmap';

// --- Shared Components ---

const Header = () => (
  <header className="mb-16 text-center relative">
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="flex items-center justify-center gap-3 mb-6">
        <div className="h-[2px] w-12 bg-primary/20" />
        <span className="px-5 py-2 text-[11px] font-bold tracking-[0.4em] text-primary uppercase bg-slate-100 rounded-full border border-slate-200">
           {MARKETING_DATA.brand.status}
        </span>
        <div className="h-[2px] w-12 bg-primary/20" />
      </div>
      <h1 id="main-title" className="text-5xl font-bold tracking-tighter text-slate-900 md:text-6xl lg:text-5xl mb-6">
        Chiến lược Marketing <span className="gold-text">Dlock 2026</span>
      </h1>
      <p className="max-w-3xl mx-auto text-lg text-slate-500 font-medium leading-relaxed">
        Đơn vị Độc quyền Miền Trung chuyên giải pháp <span className="text-slate-900 font-bold">{MARKETING_DATA.brand.fullName}</span>. 
        Tư vấn, cung cấp và <span className="text-primary italic">Lắp đặt tận nơi Toàn quốc 63 tỉnh thành</span>.
      </p>
    </motion.div>
  </header>
);

const Sidebar = ({
  activeTab,
  onLogout,
  user,
}: {
  activeTab: TabType;
  onLogout: () => void;
  user: any;
}) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const baseMenuItems = [
    { id: 'overview', label: 'Nghiên cứu SP & Đối thủ', icon: <Search className="w-5 h-5" /> },
    { id: 'strategy', label: 'Chiến lược cốt lõi', icon: <Target className="w-5 h-5" /> },
    { id: 'content', label: 'Chiến lược nội dung', icon: <FileText className="w-5 h-5" /> },
    { id: 'website', label: 'Website & Hệ thống', icon: <Monitor className="w-5 h-5" /> },
    { id: 'channels', label: 'Kênh triển khai', icon: <Globe className="w-5 h-5" /> },
    { id: 'budget', label: 'Ngân sách & Gói', icon: <BarChart3 className="w-5 h-5" /> },
    { id: 'roadmap', label: 'Timeline & KPI', icon: <Clock className="w-5 h-5" /> },
  ];

  const handleNavigate = (id: string) => {
    navigate(`/${id}`);
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between p-4 bg-dark-card border-b border-white/5 sticky top-0 z-50 shadow-xl">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary rounded-xl shadow-lg shadow-primary/30">
            <Lock className="w-5 h-5 text-slate-900" />
          </div>
          <span className="font-bold text-white tracking-[0.2em] italic text-sm">DLOCK</span>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-slate-400">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-slate-950/40 backdrop-blur-sm z-40 md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar Content */}
      <motion.aside
        className={`fixed inset-y-0 left-0 w-80 bg-dark-card text-white z-50 transform transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] md:relative md:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        <div className="p-8 h-full flex flex-col">
          <div className="flex items-center gap-4 mb-16 px-2 text-nowrap">
            <div className="p-3 bg-primary rounded-2xl shadow-2xl shadow-primary/20 transform rotate-[-3deg]">
              <Lock className="w-7 h-7 text-slate-900" />
            </div>
            <div>
              <h2 className="font-display font-bold text-2xl leading-none gold-text tracking-tighter">DLOCK</h2>
              <p className="text-[10px] text-slate-500 font-bold tracking-[0.3em] uppercase mt-1">CHIẾN LƯỢC THƯƠNG HIỆU</p>
            </div>
          </div>

          {user && (
            <div className="mb-14 p-4 bg-white/5 rounded-3xl border border-white/10 flex items-center gap-4 transition-all hover:bg-white/10">
              <div className="relative">
                <img src={user.picture} alt="" className="w-12 h-12 rounded-2xl border-2 border-primary/20 p-0.5" />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-dark-card rounded-full shadow-lg" />
              </div>
              <div className="overflow-hidden">
                <p className="text-sm font-bold text-white truncate">{user.name}</p>
                <p className="text-[10px] text-primary font-bold uppercase tracking-widest leading-none">{user.role}</p>
              </div>
            </div>
          )}

          <nav className="space-y-1.5 flex-1">
            {baseMenuItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all duration-400 group ${isActive
                      ? 'bg-primary text-slate-950 shadow-2xl shadow-primary/40 scale-[1.05]'
                      : 'text-slate-500 hover:bg-white/5 hover:text-white'
                    }`}
                >
                  <div className={`${isActive ? 'text-slate-950' : 'text-slate-600 group-hover:text-primary transition-colors'}`}>
                    {item.icon}
                  </div>
                  <span className="font-bold text-[12px] tracking-tight whitespace-nowrap">{item.label}</span>
                  {isActive && (
                    <motion.div layoutId="navMarker" className="ml-auto">
                        <ArrowRight size={14} className="text-slate-950" />
                    </motion.div>
                  )}
                </button>
              );
            })}
          </nav>

          <div className="mt-8 pt-8 border-t border-white/5">
            <button
              onClick={onLogout}
              className="w-full flex items-center gap-4 px-6 py-4 rounded-xl text-slate-600 hover:bg-red-500/10 hover:text-red-400 transition-all duration-300 group"
            >
              <div className="p-2 bg-red-500/10 rounded-lg group-hover:bg-red-500 group-hover:text-white transition-colors">
                <X size={18} />
              </div>
              <span className="font-bold text-[10px] uppercase tracking-[0.3em]">Đăng xuất</span>
            </button>
          </div>
        </div>
      </motion.aside>
    </>
  );
};

// --- Tab Components ---

const ResearchTab = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="space-y-16"
  >
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
      <div className="lg:col-span-2 space-y-12">
        {/* Section 1: Keyword Landscape */}
        <div className="p-12 white-card border-2 border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-10 opacity-[0.03] text-primary pointer-events-none">
            <Search size={150} />
          </div>
          <h3 className="text-2xl font-bold mb-10 flex items-center gap-4 text-slate-900 italic tracking-tighter">
            <div className="p-3 bg-slate-900 rounded-2xl text-primary"><Search className="w-6 h-6" /></div>
            Bản đồ Từ khóa & Thị trường (Top 10)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {MARKETING_DATA.research.marketResearch.keywords.map((kw, i) => (
              <div key={i} className="group p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:border-primary/50 hover:bg-white transition-all duration-300">
                <div className="flex justify-between items-start mb-3">
                  <span className="font-bold text-slate-900 text-sm">{kw.term}</span>
                  <span className={`text-[9px] font-bold px-2 py-1 rounded-md uppercase tracking-wider ${
                    kw.competition.includes('Rất cao') ? 'bg-red-50 text-red-500' :
                    kw.competition.includes('Cao') ? 'bg-orange-50 text-orange-500' : 'bg-blue-50 text-blue-500'
                  }`}>
                    {kw.competition}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {kw.topSites.map((site, idx) => (
                    <span key={idx} className="text-[10px] text-slate-400 font-medium px-2 py-0.5 bg-white border border-slate-200 rounded-md group-hover:text-primary transition-colors">
                      {site}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Deep Dive Competitors */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {MARKETING_DATA.research.marketResearch.competitors.map((comp, i) => (
            <div key={i} className="p-10 bg-slate-900 rounded-[2.5rem] relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 text-white transform rotate-12 group-hover:text-primary transition-colors">
                <ShieldCheck size={120} />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-primary border border-white/10">
                    <Briefcase size={24} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white tracking-tight">{comp.brand}</h4>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest italic">{comp.positioning}</span>
                  </div>
                </div>
                
                <div className="space-y-4 mb-8">
                   <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                      <p className="text-[10px] text-primary font-bold uppercase mb-1">Thế mạnh (USP)</p>
                      <p className="text-sm text-slate-300 leading-relaxed font-medium">{comp.usp}</p>
                   </div>
                   <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                        <p className="text-[9px] text-slate-500 font-bold uppercase mb-1 text-center">Giá bán</p>
                        <p className="text-xs text-white font-bold text-center">{comp.priceRange}</p>
                      </div>
                      <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                        <p className="text-[9px] text-slate-500 font-bold uppercase mb-1 text-center">Thị phần</p>
                        <p className="text-xs text-white font-bold text-center">{comp.marketShare}</p>
                      </div>
                   </div>
                </div>

                <div className="flex items-center gap-2 text-[10px] font-bold text-red-400 uppercase bg-red-400/10 px-4 py-2 rounded-xl border border-red-400/20 w-fit">
                   <AlertCircle size={14} />
                   Hạn chế: {comp.weakness}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section: Detailed Comparison Table */}
        <div className="p-12 white-card border-2 border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 p-10 opacity-[0.03] text-primary pointer-events-none">
            <Layers size={150} />
          </div>
          <h3 className="text-2xl font-bold mb-10 flex items-center gap-4 text-slate-900 italic tracking-tighter">
            <div className="p-3 bg-slate-900 rounded-2xl text-primary"><Layers className="w-6 h-6" /></div>
            Bảng So sánh Ưu & Nhược điểm Chi tiết
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-100">
                  <th className="py-5 px-6 text-left text-[10px] font-bold text-slate-400 uppercase tracking-widest">Tiêu chí</th>
                  <th className="py-5 px-6 text-center text-sm font-bold text-primary italic bg-primary/5 rounded-t-2xl border-x-2 border-t-2 border-primary/20">Dillock (Chúng ta)</th>
                  <th className="py-5 px-6 text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">Kaadas</th>
                  <th className="py-5 px-6 text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">Philips</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {MARKETING_DATA.research.marketResearch.comparisonTable.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-6 px-6 text-xs font-bold text-slate-900 italic">{row.feature}</td>
                    <td className="py-6 px-6 text-xs font-bold text-slate-900 text-center bg-primary/5 border-x-2 border-primary/20">
                      {row.dillock}
                    </td>
                    <td className="py-6 px-6 text-xs font-medium text-slate-500 text-center">{row.kaadas}</td>
                    <td className="py-6 px-6 text-xs font-medium text-slate-500 text-center">{row.philips}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Section 3: Dillock Strategic Edge */}
      <div className="space-y-8">
        <div className="p-10 bg-white rounded-[3rem] border-2 border-slate-100 shadow-2xl relative overflow-hidden">
          <div className="absolute bottom-[-40px] right-[-40px] opacity-[0.02] transform -rotate-12">
            <TrendingUp size={250} />
          </div>
          <h3 className="text-sm font-bold mb-10 text-slate-400 uppercase tracking-[0.3em] text-center italic border-b border-slate-100 pb-4">
            Ưu thế Dillock vs Đối thủ
          </h3>
          <div className="space-y-6">
            {MARKETING_DATA.research.marketResearch.dillockAdvantages.map((adv, i) => (
              <div key={i} className="flex gap-5 p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-primary/50 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center shrink-0 text-primary shadow-lg">
                  {i === 0 ? <MapPin size={20} /> : i === 1 ? <Layers size={20} /> : <Zap size={20} />}
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-primary transition-colors tracking-tight">{adv.title}</h5>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">{adv.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-10 bg-slate-900 rounded-[3rem] shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-5 text-white"><Rocket size={100} /></div>
          <p className="text-[10px] font-bold text-primary uppercase tracking-[0.4em] mb-4">Chiến lược 2026</p>
          <h4 className="text-2xl font-bold text-white mb-6 leading-tight italic tracking-tight">
            "Chiếm lĩnh thị trường ngách & Khẳng định vị thế Độc quyền"
          </h4>
          <div className="p-5 bg-white/5 rounded-2xl border border-white/10">
             <p className="text-[11px] text-slate-300 leading-relaxed font-medium">
                Tập trung vào lợi thế bảo mật <span className="text-primary font-bold italic">Tĩnh mạch lòng bàn tay</span> và dòng khóa <span className="text-primary font-bold italic">Cửa nhôm tiêu chuẩn Đức</span> để né tránh trực diện cuộc chiến giá rẻ của các thương hiệu phổ thông.
             </p>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const StrategyTab = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.98 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6 }}
    className="space-y-16"
  >
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {MARKETING_DATA.goals.map((goal, i) => (
        <div key={i} className="p-10 white-card relative overflow-hidden group hover:-translate-y-2">
          <div className="flex items-center justify-between mb-10">
            <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center font-bold text-primary text-2xl italic tracking-tighter shadow-2xl transform rotate-3">
               0{i+1}
            </div>
            <Rocket className="w-7 h-7 text-primary/30 group-hover:text-primary group-hover:scale-125 transition-all duration-500" />
          </div>
          <h4 className="text-xl font-bold mb-10 leading-tight h-14 flex items-center text-slate-900 tracking-tight">{goal.phase}</h4>
          <ul className="space-y-6">
            {goal.tasks.map((task, idx) => (
              <li key={idx} className="flex items-start gap-4 group/item">
                <div className="w-2 h-2 rounded-full bg-slate-200 mt-2 shrink-0 group-hover/item:bg-primary group-hover/item:scale-125 transition-all" />
                <span className="text-sm text-slate-500 font-bold group-hover/item:text-slate-900 transition-colors leading-relaxed tracking-tight">{task}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    <div className="p-14 white-card bg-slate-50/30 border-2 border-slate-100 relative overflow-hidden">
      <div className="text-center mb-16 relative z-10">
        <h3 className="text-4xl font-bold mb-4 text-slate-900 tracking-tighter">Phân khúc Khách hàng Toàn quốc</h3>
        <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Phân lớp đối tượng Dillock 63 tỉnh thành</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
        {MARKETING_DATA.personas.map((per, i) => (
          <div key={i} className="p-10 bg-white border border-slate-200 rounded-[3rem] shadow-xl hover:border-primary/50 transition-all duration-500 group">
            <div className="w-16 h-16 bg-slate-50 rounded-[2rem] flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-slate-950 transition-all border border-slate-100 shadow-inner">
              <Users className="w-8 h-8 text-slate-400 group-hover:text-slate-950 transition-colors" />
            </div>
            <h4 className="text-2xl font-bold mb-3 text-slate-900 tracking-tight">{per.title}</h4>
            <div className="inline-block px-4 py-1.5 bg-slate-50 rounded-full border border-slate-100 mb-10">
               <p className="text-primary text-[10px] font-bold uppercase tracking-widest">Độ tuổi: {per.age}</p>
            </div>
            <div className="space-y-4">
              <p className="text-[10px] text-slate-400 uppercase font-bold tracking-[0.2em] mb-4 italic">Nhu cầu trọng tâm</p>
              {per.concerns.map((con, idx) => (
                <div key={idx} className="flex items-center gap-4 text-sm text-slate-500 group-hover:text-slate-900 font-bold tracking-tight">
                  <div className="h-px w-4 bg-slate-200" />
                  {con}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="p-20 bg-slate-50 rounded-[4rem] border border-slate-200 text-center relative overflow-hidden group shadow-inner">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08),transparent_80%)]" />
      <div className="relative z-10 max-w-4xl mx-auto">
        <p className="text-[10px] font-bold uppercase tracking-[0.6em] mb-10 text-slate-400 italic">Giá trị Cốt lõi Miền Trung</p>
        <h3 className="text-5xl md:text-7xl font-display font-bold mb-12 leading-tight italic tracking-tighter text-slate-900 text-wrap">
          "Độc quyền Miền Trung <br/> Phục vụ Toàn quốc"
        </h3>
        <div className="p-10 bg-white rounded-[2.5rem] border border-slate-200 shadow-2xl relative">
           <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-8 py-2 bg-slate-900 text-primary text-[10px] font-bold rounded-full uppercase tracking-widest shadow-xl">Tuyên ngôn Định vị</div>
           <p className="font-bold text-2xl text-slate-900 leading-relaxed italic px-6 pt-4 border-l-4 border-primary">
             {MARKETING_DATA.brand.positioning}
           </p>
        </div>
      </div>
    </div>
  </motion.div>
);

const ContentTab = () => {
  const [activeWeek, setActiveWeek] = useState(1);

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-16"
    >
      <div className="p-14 white-card bg-slate-50/50 relative overflow-hidden shadow-2xl border-2 border-slate-100">
        <h3 className="text-3xl font-bold mb-16 flex items-center gap-6 text-slate-900 tracking-tighter">
          <div className="p-4 bg-slate-900 rounded-2xl shadow-xl shadow-slate-900/20"><PieChart className="w-8 h-8 text-primary" /></div>
          Tỷ trọng Nội dung Chiến lược Dillock
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {MARKETING_DATA.contentStrategy.pillars.map((pill, i) => (
            <div key={i} className="p-8 bg-white border border-slate-200 rounded-[2.5rem] shadow-sm group hover:-translate-y-2 transition-all">
               <div className="flex justify-between items-center mb-6">
                  <p className="text-4xl font-display font-bold text-slate-900 italic">{pill.value}%</p>
                  <div className={`w-3 h-3 rounded-full ${pill.color} animate-pulse`} />
               </div>
               <p className="text-md font-bold text-slate-700 mb-2 uppercase tracking-tight leading-none">{pill.label}</p>
               <p className="text-xs text-slate-400 font-bold italic opacity-70">{pill.desc}</p>
               <div className="mt-8 h-2 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${pill.value}%` }}
                    transition={{ duration: 1.5, delay: i * 0.1 }}
                    className={`h-full rounded-full ${pill.color}`}
                  />
               </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {MARKETING_DATA.contentStrategy.groups.map((group, i) => (
          <div key={i} className="p-12 white-card group hover:border-primary/50 transition-all duration-500 shadow-xl">
             <div className="flex items-center gap-5 mb-12">
                <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center font-bold text-primary text-xl border border-primary/20 shadow-xl group-hover:scale-110 transition-transform">
                  {group.id}
                </div>
                <div>
                   <h4 className="text-2xl font-bold text-slate-900 tracking-tight">{group.title}</h4>
                   <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Nội dung Đặc thù Dillock</p>
                </div>
             </div>
             <ul className="grid grid-cols-1 gap-4">
                {group.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white transition-colors group/item">
                     <div className="w-3 h-3 rounded-sm border-2 border-primary/30 group-hover/item:bg-primary transition-all shrink-0" />
                     <span className="text-sm font-bold text-slate-600 group-hover/item:text-slate-900 transition-colors italic tracking-tight">{item}</span>
                  </li>
                ))}
             </ul>
          </div>
        ))}
      </div>

      {/* Calendar Section */}
      <div className="p-14 white-card bg-white relative overflow-hidden shadow-3xl border-2 border-primary/5">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
           <div className="flex items-center gap-6">
              <div className="p-5 bg-primary text-slate-950 rounded-[2rem] shadow-2xl shadow-primary/20"><Calendar size={32} /></div>
              <div>
                 <h3 className="text-3xl font-bold text-slate-900 italic tracking-tighter text-wrap">Kế hoạch Facebook (Toàn quốc)</h3>
                 <p className="text-slate-400 font-bold uppercase tracking-[0.3em] text-[10px] mt-1 italic">Lộ trình Thực thi 30 Ngày & Hỗ trợ Toàn quốc</p>
              </div>
           </div>
           
           <div className="flex bg-slate-100 p-2 rounded-2xl border border-slate-200 overflow-x-auto max-w-full">
              {[1, 2, 3, 4].map((w) => (
                <button
                  key={w}
                  onClick={() => setActiveWeek(w)}
                  className={`px-8 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all text-nowrap ${
                    activeWeek === w ? 'bg-slate-900 text-primary shadow-xl' : 'text-slate-400 hover:text-slate-900'
                  }`}
                >
                  Tuần {w}
                </button>
              ))}
           </div>
        </div>

        <div className="space-y-10">
           <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-200 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5"><TrendingUp size={100} className="text-slate-900" /></div>
              <p className="text-[11px] font-bold text-primary uppercase tracking-[0.4em] mb-4">Chiến lược Tuần {activeWeek}</p>
              <p className="text-2xl font-bold text-slate-800 italic tracking-tight relative z-10">{MARKETING_DATA.contentStrategy.facebookCalendar[activeWeek-1]?.goal || 'Đang cập nhật...'}</p>
           </div>

           <div className="grid grid-cols-1 gap-6">
              {MARKETING_DATA.contentStrategy.facebookCalendar[activeWeek-1]?.days?.map((d, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex flex-col md:flex-row items-center gap-6 p-8 bg-white border border-slate-200 rounded-[2.5rem] hover:border-primary/40 hover:shadow-2xl transition-all duration-500 group/day"
                >
                  <div className="w-24 h-24 bg-slate-50 border border-slate-200 rounded-[2rem] flex flex-col items-center justify-center shrink-0 group-hover/day:bg-slate-900 transition-colors duration-500">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest group-hover/day:text-primary/60">{d.day}</p>
                    <p className="text-2xl font-display font-bold text-slate-900 group-hover/day:text-white italic">0{idx+1}</p>
                  </div>
                  
                  <div className="flex-1 space-y-4 text-center md:text-left">
                     <div className="flex flex-wrap justify-center md:justify-start gap-4">
                        <span className={`px-4 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest border ${
                           d.type === 'Bán lẻ' ? 'bg-amber-50 border-amber-200 text-amber-700' :
                           d.type === 'Giáo dục' ? 'bg-blue-50 border-blue-200 text-blue-700' :
                           d.type === 'Uy tín' ? 'bg-emerald-50 border-emerald-200 text-emerald-700' :
                           'bg-indigo-50 border-indigo-200 text-indigo-700'
                        }`}>
                           {d.type}
                        </span>
                        <div className="flex items-center gap-2 px-4 py-1.5 bg-slate-50 rounded-full border border-slate-100">
                            {d.format.includes('Video') ? <Video size={12} className="text-slate-400" /> : <ImageIcon size={12} className="text-slate-400" />}
                            <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">{d.format}</span>
                        </div>
                     </div>
                     <h5 className="text-xl font-bold text-slate-900 tracking-tight leading-tight group-hover/day:text-primary transition-colors italic">{d.title}</h5>
                  </div>
                </motion.div>
              ))}
           </div>
        </div>
      </div>
    </motion.div>
  );
};

const WebsiteTab = () => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="space-y-16"
  >
    <div className="p-16 white-card bg-slate-900 relative overflow-hidden group shadow-3xl">
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.06),transparent_80%)] opacity-50" />
       <div className="relative z-10 flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 space-y-10">
             <div className="p-4 bg-primary/10 rounded-2xl border border-primary/20 w-fit">
                <Monitor className="w-10 h-10 text-primary" />
             </div>
             <h3 className="text-5xl font-bold text-white tracking-tighter leading-tight italic">
                {MARKETING_DATA.websiteStrategy.domain}
             </h3>
             <p className="text-xl text-slate-400 font-bold leading-relaxed italic border-l-4 border-primary pl-8">
                {MARKETING_DATA.websiteStrategy.brandTitle}
             </p>
             <div className="flex gap-4">
                <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-3">
                   <Globe className="text-primary w-5 h-5" />
                   <span className="text-xs text-white font-bold tracking-widest uppercase italic">63 Tỉnh Thành</span>
                </div>
                <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-3">
                   <Target className="text-emerald-500 w-5 h-5" />
                   <span className="text-xs text-white font-bold tracking-widest uppercase italic">SEO Miền Trung</span>
                </div>
             </div>
          </div>
          <div className="w-full md:w-1/2 relative">
             <div className="aspect-video bg-white/5 rounded-[3rem] border border-white/10 flex items-center justify-center overflow-hidden relative group/mockup hover:border-primary/50 transition-all">
                <div className="absolute inset-0 bg-slate-800/40 flex items-center justify-center opacity-0 group-hover/mockup:opacity-100 transition-opacity z-20">
                   <MousePointer2 className="text-primary w-12 h-12" />
                </div>
                <ImageIcon className="text-white/10 w-32 h-32" />
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 px-8 py-3 bg-primary text-slate-900 font-bold rounded-full text-xs uppercase tracking-widest shadow-2xl">
                   Truy cập dillock.com
                </div>
             </div>
          </div>
       </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
       {MARKETING_DATA.websiteStrategy.sections.map((section, idx) => (
         <div key={idx} className="p-12 white-card group hover:border-primary/50 transition-all duration-500 shadow-2xl">
            <h4 className="text-2xl font-bold text-slate-900 mb-12 flex items-center gap-5 italic tracking-tight">
               <div className="p-3 bg-slate-900 rounded-2xl text-primary"><Search className="w-6 h-6" /></div>
               {section.title}
            </h4>
            <div className="space-y-6">
               {section.items.map((item, i) => (
                 <div key={i} className="flex items-start gap-6 p-6 bg-slate-50 rounded-[2rem] border border-slate-100 hover:bg-white transition-all shadow-sm">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                    <p className="text-[15px] font-bold text-slate-600 leading-relaxed italic">{item}</p>
                 </div>
               ))}
            </div>
         </div>
       ))}
    </div>

    <div className="p-16 bg-slate-100 rounded-[4rem] border border-slate-200 relative overflow-hidden group shadow-inner">
       <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-10">
             <div className="flex items-center gap-5">
                <div className="p-4 bg-slate-900 rounded-2xl"><MapPin className="text-primary w-7 h-7" /></div>
                <h3 className="text-3xl font-bold text-slate-900 italic tracking-tighter">Mạng lưới Dịch vụ Toàn quốc</h3>
             </div>
             <p className="text-lg text-slate-500 font-bold leading-relaxed italic">
                Dù là đại lý độc quyền tại Miền Trung, chúng tôi đã chuẩn hóa quy trình vận chuyển và lắp đặt chuyên nghiệp để phục vụ khách hàng trên toàn lãnh thổ Việt Nam.
             </p>
             <div className="grid grid-cols-2 gap-8">
                <div className="space-y-3">
                   <p className="text-primary font-bold text-4xl italic">02h</p>
                   <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Lắp đặt tại Đà Nẵng</p>
                </div>
                <div className="space-y-3">
                   <p className="text-slate-900 font-bold text-4xl italic">24h</p>
                   <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Hỗ trợ các tỉnh thành</p>
                </div>
             </div>
          </div>
          <div className="w-full md:w-1/2 p-12 bg-white rounded-[3rem] border border-slate-200 shadow-2xl relative overflow-hidden cursor-crosshair group/map hover:border-emerald-500/30 transition-all">
             <div className="absolute inset-0 bg-slate-50 opacity-50" />
             <div className="relative z-10 flex flex-col gap-6">
                {[
                   { province: "Nghệ An (Vinh)", status: "Trọng tâm Độc quyền" },
                  { province: "Đà Nẵng / Huế", status: "Trụ sở Miền Trung" },
                  { province: "Hà Nội / TP.HCM", status: "Sẵn sàng lắp đặt" }
                ].map((loc, i) => (
                  <div key={i} className="flex justify-between items-center p-6 bg-slate-100/50 rounded-2xl border border-slate-200 hover:bg-emerald-50 transition-colors">
                     <span className="font-bold text-slate-900 uppercase tracking-tight text-sm">{loc.province}</span>
                     <span className="text-[9px] font-bold text-emerald-600 bg-emerald-100 px-3 py-1 rounded-full">{loc.status}</span>
                  </div>
                ))}
             </div>
          </div>
       </div>
    </div>
  </motion.div>
);

const ChannelsTab = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    className="space-y-16"
  >
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {MARKETING_DATA.channels.map((chan, i) => {
        const Icon = chan.id === 'fb' ? Facebook : 
                    chan.id === 'shopee' ? ShoppingBag : 
                    chan.id === 'website' ? Globe : 
                    chan.id === 'gmap' ? MapPin : Video;
        return (
          <div key={i} className="group p-12 white-card relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700 -rotate-12 transform scale-150">
              <Icon size={120} />
            </div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-20 h-20 bg-slate-900 rounded-[2rem] flex items-center justify-center mb-12 group-hover:bg-primary group-hover:shadow-[0_20px_40px_rgba(212,175,55,0.4)] transition-all duration-500 shadow-xl transform group-hover:scale-110">
                <Icon className="w-10 h-10 text-primary group-hover:text-slate-950 transition-colors" />
              </div>
              <h4 className="text-3xl font-bold mb-6 text-slate-900 tracking-tighter">{chan.name}</h4>
              <div className="flex items-center gap-3 mb-10">
                 <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                 <p className="text-slate-500 text-[11px] font-bold uppercase tracking-widest italic">{chan.role}</p>
              </div>
              <div className="mt-auto p-8 bg-slate-50 rounded-[2rem] border border-slate-200 shadow-inner group-hover:bg-white transition-colors duration-500">
                 <p className="text-[9px] text-slate-400 uppercase font-bold tracking-[0.2em] mb-4 border-b border-slate-200 pb-2">Chỉ tiêu KPI Mục tiêu</p>
                 <p className="text-md text-slate-900 font-extrabold leading-tight tracking-tight italic">{chan.kpi}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>

    <div className="p-16 white-card bg-slate-100/30 border-2 border-slate-100 relative overflow-hidden">
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,0,0,0.02),transparent_70%)]" />
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-20 relative z-10">
        <div className="flex items-center gap-6">
          <div className="p-4 bg-slate-900 rounded-[1.5rem] shadow-2xl border border-white/10">
            <Activity className="w-8 h-8 text-primary animate-pulse" />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-slate-900 tracking-tighter italic">Quy trình Tối ưu Chuyển đổi</h3>
            <p className="text-slate-400 font-bold uppercase tracking-[0.3em] text-[10px] mt-1">Quy trình Chiến lược Chuyển đổi Trực tiếp</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        {[
          { 
            icon: <Search/>, 
            title: "Khám phá", 
            body: "Tiếp cận khách toàn quốc qua Ads & Website dillock.com.",
            platform: "FB/Google Ads, TikTok Viral",
            content: "Short Video, Banner Tiếp cận"
          },
          { 
            icon: <MessageSquare/>, 
            title: "Tương tác", 
            body: "Tư vấn kỹ thuật Dillock sâu (PVD, Palm Vein).",
            platform: "Fanpage, Website Blog, Messenger",
            content: "Technical Blog, Video tư vấn"
          },
          { 
            icon: <Award/>, 
            title: "Uy tín", 
            body: "Khẳng định Độc quyền Miền Trung & Chất lượng Đức.",
            platform: "Website, FB (Feedback/Showroom)",
            content: "Case Study, Ảnh thực tế kỹ thuật"
          },
          { 
            icon: <ShoppingBag/>, 
            title: "Chuyển đổi", 
            body: "Lắp đặt tại chỗ 63 tỉnh thành & Bảo hành 24/7.",
            platform: "Shopee Mall, TikTok Shop, Zalo",
            content: "Flash Sale, Ưu đãi, Cam kết 2h"
          }
        ].map((step, i) => (
          <div key={i} className="relative text-center p-8 space-y-6 group/step">
             <div className="w-20 h-20 mx-auto bg-white rounded-[2rem] flex items-center justify-center text-slate-400 border border-slate-200 group-hover/step:text-primary group-hover/step:border-primary/50 group-hover/step:bg-slate-50 transition-all duration-500 shadow-xl group-hover/step:shadow-inner transform group-hover/step:scale-110">
               {React.cloneElement(step.icon as React.ReactElement, { size: 32 })}
             </div>
             <div className="space-y-4">
               <div>
                  <h4 className="font-bold text-slate-900 uppercase tracking-[0.2em] text-sm italic">{step.title}</h4>
                  <p className="text-[10px] text-slate-500 leading-relaxed font-bold italic px-2 mt-2">{step.body}</p>
               </div>
               
               <div className="pt-4 border-t border-slate-100 space-y-2">
                  <div className="flex flex-col items-center">
                    <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">Nền tảng</span>
                    <span className="text-[10px] font-bold text-primary italic">{step.platform}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">Nội dung</span>
                    <span className="text-[10px] font-bold text-slate-700 italic">{step.content}</span>
                  </div>
               </div>
             </div>
             {i < 3 && (
               <div className="absolute right-[-30px] top-12 text-slate-100 hidden lg:block">
                 <ArrowRight size={50} strokeWidth={1} />
               </div>
             )}
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);


// Helper to format triệu VNĐ
const fmtM = (val: number) => `${val} triệu`;

// Category color map
const catColorMap: Record<string, { bg: string; text: string; border: string; dot: string }> = {
  "Website & Hệ thống": { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200", dot: "bg-blue-500" },
  "Nội dung & Sản xuất": { bg: "bg-violet-50", text: "text-violet-700", border: "border-violet-200", dot: "bg-violet-500" },
  "Quảng cáo & Launch": { bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-200", dot: "bg-amber-500" },
  "SEO & Web":           { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200", dot: "bg-emerald-500" },
  "Nội dung & MXH":     { bg: "bg-violet-50", text: "text-violet-700", border: "border-violet-200", dot: "bg-violet-500" },
  "Quảng cáo":           { bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-200", dot: "bg-amber-500" },
  "TMĐT & Vận hành":   { bg: "bg-indigo-50", text: "text-indigo-700", border: "border-indigo-200", dot: "bg-indigo-500" },
};
const getCatStyle = (cat: string) => catColorMap[cat] ?? { bg: "bg-slate-50", text: "text-slate-600", border: "border-slate-200", dot: "bg-slate-400" };

const BudgetTab = () => {
  const oneTimeData = MARKETING_DATA.costs.oneTime;
  const monthlyData = MARKETING_DATA.costs.monthly;

  const oneTimeMin = oneTimeData.reduce((s, r) => s + r.min, 0);
  const oneTimeMax = oneTimeData.reduce((s, r) => s + r.max, 0);
  const monthlyMin = monthlyData.reduce((s, r) => s + r.min, 0);
  const monthlyMax = monthlyData.reduce((s, r) => s + r.max, 0);

  // 3-month total (setup + 3 months of operation)
  const totalMin = oneTimeMin + monthlyMin * 3;
  const totalMax = oneTimeMax + monthlyMax * 3;

  const TableHeader = () => (
    <div className="grid grid-cols-[2rem_1fr_6rem_7rem_7rem_7rem] gap-0 border-b-2 border-slate-200 bg-slate-900 rounded-t-2xl px-4 py-4">
      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">#</span>
      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-4">Hạng mục</span>
      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">Đơn vị</span>
      <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest text-right pr-2">Tối thiểu</span>
      <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest text-right pr-2">Tối đa</span>
      <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest text-right pr-2">Ghi chú</span>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-16"
    >
      {/* === HEADER KPI CARDS === */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Đầu tư 1 lần (Tối thiểu)", value: fmtM(oneTimeMin), sub: "Chi phí tối thiểu thiết lập", color: "from-amber-500 to-amber-600", icon: <Zap size={20}/> },
          { label: "Đầu tư 1 lần (Tối đa)", value: fmtM(oneTimeMax), sub: "Chi phí tối đa thiết lập", color: "from-orange-500 to-red-500", icon: <Layers size={20}/> },
          { label: "Hàng tháng (Tối thiểu)", value: fmtM(monthlyMin), sub: "Chi phí tối thiểu/tháng", color: "from-blue-500 to-indigo-600", icon: <Activity size={20}/> },
          { label: "Hàng tháng (Tối đa)", value: fmtM(monthlyMax), sub: "Chi phí tối đa/tháng", color: "from-indigo-500 to-purple-600", icon: <TrendingUp size={20}/> },
        ].map((kpi, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className={`p-7 rounded-[2rem] bg-gradient-to-br ${kpi.color} text-white shadow-2xl relative overflow-hidden group hover:-translate-y-1 transition-transform`}
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              {kpi.icon}
            </div>
            <div className="mb-4 p-2 bg-white/15 rounded-xl w-fit">{kpi.icon}</div>
            <p className="text-3xl font-bold tracking-tighter mb-1">{kpi.value}</p>
            <p className="text-[10px] font-bold uppercase tracking-widest opacity-70">{kpi.label}</p>
            <p className="text-[9px] mt-2 opacity-50 italic">{kpi.sub}</p>
          </motion.div>
        ))}
      </div>

      {/* === BẢNG 1: CHI PHÍ ĐẦU TƯ 1 LẦN === */}
      <div className="white-card overflow-hidden rounded-[2.5rem] shadow-2xl border-2 border-slate-100">
        {/* Section Header */}
        <div className="p-8 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <div className="p-3 bg-amber-500/20 rounded-2xl border border-amber-500/30">
              <Zap className="w-7 h-7 text-amber-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">CHI PHÍ ĐẦU TƯ 1 LẦN</h3>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.3em] mt-1">Đầu tư thiết lập • Xây dựng hệ thống ban đầu</p>
            </div>
          </div>
          <div className="text-right hidden md:block">
            <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Tổng ước tính</p>
            <p className="text-lg font-bold text-amber-400 tracking-tight">{fmtM(oneTimeMin)} – {fmtM(oneTimeMax)}</p>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-50 border-b-2 border-slate-200">
                <th className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center py-4 px-4 w-10">#</th>
                <th className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-left py-4 px-4">Danh mục</th>
                <th className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-left py-4 px-4">Hạng mục chi phí</th>
                <th className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center py-4 px-4 w-24">Đơn vị</th>
                <th className="text-[10px] font-bold text-amber-600 uppercase tracking-widest text-right py-4 px-4 w-32">Tối thiểu (triệu)</th>
                <th className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest text-right py-4 px-4 w-32">Tối đa (triệu)</th>
                <th className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-left py-4 px-4 w-64">Ghi chú</th>
              </tr>
            </thead>
            <tbody>
              {oneTimeData.map((row, i) => {
                const cs = getCatStyle(row.category);
                const isEven = i % 2 === 0;
                return (
                  <motion.tr
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    className={`border-b border-slate-100 group hover:bg-amber-50/50 transition-colors ${isEven ? 'bg-white' : 'bg-slate-50/40'}`}
                  >
                    <td className="py-4 px-4 text-center">
                      <span className="text-[11px] font-bold text-slate-300">{String(row.stt).padStart(2,'0')}</span>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest border ${cs.bg} ${cs.text} ${cs.border}`}>
                        <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${cs.dot}`} />
                        {row.category}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-sm font-bold text-slate-700 group-hover:text-slate-900 transition-colors">{row.item}</span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="text-[10px] font-bold text-slate-400 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">{row.unit}</span>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <span className="text-sm font-bold text-amber-600 tracking-tight">{fmtM(row.min)}</span>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <span className="text-sm font-bold text-emerald-600 tracking-tight">{fmtM(row.max)}</span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-[11px] text-slate-400 italic leading-snug">{row.note}</span>
                    </td>
                  </motion.tr>
                );
              })}
            </tbody>
            {/* Subtotal Row */}
            <tfoot>
              <tr className="bg-slate-900">
                <td colSpan={4} className="py-5 px-6">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                    <span className="text-sm font-bold text-white uppercase tracking-widest">TỔNG CHI PHÍ ĐẦU TƯ 1 LẦN</span>
                  </div>
                </td>
                <td className="py-5 px-4 text-right">
                  <span className="text-lg font-bold text-amber-400 tracking-tighter">{fmtM(oneTimeMin)}</span>
                </td>
                <td className="py-5 px-4 text-right">
                  <span className="text-lg font-bold text-emerald-400 tracking-tighter">{fmtM(oneTimeMax)}</span>
                </td>
                <td className="py-5 px-4">
                  <span className="text-[10px] text-slate-500 italic">Chi phí setup tối thiểu → tối đa</span>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {/* === BẢNG 2: CHI PHÍ HÀNG THÁNG === */}
      <div className="white-card overflow-hidden rounded-[2.5rem] shadow-2xl border-2 border-slate-100">
        {/* Section Header */}
        <div className="p-8 bg-gradient-to-r from-indigo-900 via-blue-900 to-indigo-900 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <div className="p-3 bg-blue-400/20 rounded-2xl border border-blue-400/30">
              <Activity className="w-7 h-7 text-blue-300" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">CHI PHÍ VẬN HÀNH HÀNG THÁNG</h3>
              <p className="text-[10px] text-blue-300/60 font-bold uppercase tracking-[0.3em] mt-1">Chi phí định kỳ hàng tháng • Duy trì và tối ưu liên tục</p>
            </div>
          </div>
          <div className="text-right hidden md:block">
            <p className="text-[10px] text-blue-400/60 uppercase tracking-widest font-bold">Ước tính / tháng</p>
            <p className="text-lg font-bold text-blue-300 tracking-tight">{fmtM(monthlyMin)} – {fmtM(monthlyMax)}</p>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-50 border-b-2 border-slate-200">
                <th className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center py-4 px-4 w-10">#</th>
                <th className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-left py-4 px-4">Danh mục</th>
                <th className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-left py-4 px-4">Hạng mục chi phí</th>
                <th className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center py-4 px-4 w-24">Đơn vị</th>
                <th className="text-[10px] font-bold text-amber-600 uppercase tracking-widest text-right py-4 px-4 w-32">Tối thiểu (triệu)</th>
                <th className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest text-right py-4 px-4 w-32">Tối đa (triệu)</th>
                <th className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-left py-4 px-4 w-64">Ghi chú</th>
              </tr>
            </thead>
            <tbody>
              {monthlyData.map((row, i) => {
                const cs = getCatStyle(row.category);
                const isEven = i % 2 === 0;
                return (
                  <motion.tr
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    className={`border-b border-slate-100 group hover:bg-blue-50/40 transition-colors ${isEven ? 'bg-white' : 'bg-slate-50/40'}`}
                  >
                    <td className="py-4 px-4 text-center">
                      <span className="text-[11px] font-bold text-slate-300">{String(row.stt).padStart(2,'0')}</span>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest border ${cs.bg} ${cs.text} ${cs.border}`}>
                        <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${cs.dot}`} />
                        {row.category}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-sm font-bold text-slate-700 group-hover:text-slate-900 transition-colors">{row.item}</span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">{row.unit}</span>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <span className="text-sm font-bold text-amber-600 tracking-tight">{fmtM(row.min)}</span>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <span className="text-sm font-bold text-emerald-600 tracking-tight">{fmtM(row.max)}</span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-[11px] text-slate-400 italic leading-snug">{row.note}</span>
                    </td>
                  </motion.tr>
                );
              })}
            </tbody>
            {/* Subtotal Row */}
            <tfoot>
              <tr className="bg-indigo-900">
                <td colSpan={4} className="py-5 px-6">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-300 animate-pulse" />
                    <span className="text-sm font-bold text-white uppercase tracking-widest">TỔNG CHI PHÍ HÀNG THÁNG</span>
                  </div>
                </td>
                <td className="py-5 px-4 text-right">
                  <span className="text-lg font-bold text-amber-400 tracking-tighter">{fmtM(monthlyMin)}</span>
                </td>
                <td className="py-5 px-4 text-right">
                  <span className="text-lg font-bold text-emerald-400 tracking-tighter">{fmtM(monthlyMax)}</span>
                </td>
                <td className="py-5 px-4">
                  <span className="text-[10px] text-blue-300/50 italic">Tổng chi phí/tháng tối thiểu → tối đa</span>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {/* === TỔNG KẾT CUỐI === */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="white-card overflow-hidden rounded-[2.5rem] shadow-2xl border-2 border-primary/20"
      >
        <div className="p-8 bg-gradient-to-br from-slate-900 to-black">
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-primary/20 rounded-2xl border border-primary/30">
              <DollarSign className="w-7 h-7 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">BẢNG TỔNG HỢP NGÂN SÁCH</h3>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.3em] mt-1">Budget Summary • Dự toán Tổng thể Chiến dịch Dillock 2026</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Setup */}
            <div className="p-6 bg-white/5 rounded-[2rem] border border-white/10 hover:border-amber-500/40 transition-all group">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-xl bg-amber-500/20 flex items-center justify-center">
                  <Zap size={16} className="text-amber-400" />
                </div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Đầu tư 1 Lần</span>
              </div>
              <p className="text-3xl font-bold text-white tracking-tighter mb-1">{fmtM(oneTimeMin)}</p>
              <p className="text-[10px] text-slate-500 italic mb-4">đến {fmtM(oneTimeMax)}</p>
              <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-amber-500 to-orange-400 rounded-full" style={{width:'65%'}} />
              </div>
              <p className="text-[9px] text-slate-600 mt-2 italic">Setup hệ thống, nội dung, tài khoản</p>
            </div>

            {/* Monthly x 3 */}
            <div className="p-6 bg-white/5 rounded-[2rem] border border-white/10 hover:border-blue-400/40 transition-all group">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-xl bg-blue-400/20 flex items-center justify-center">
                  <Activity size={16} className="text-blue-300" />
                </div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Vận hành (3 tháng)</span>
              </div>
              <p className="text-3xl font-bold text-white tracking-tighter mb-1">{fmtM(monthlyMin * 3)}</p>
              <p className="text-[10px] text-slate-500 italic mb-4">đến {fmtM(monthlyMax * 3)}</p>
              <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full" style={{width:'80%'}} />
              </div>
              <p className="text-[9px] text-slate-600 mt-2 italic">Chi phí vận hành 3 tháng đầu</p>
            </div>

            {/* Grand Total */}
            <div className="p-6 bg-primary/10 rounded-[2rem] border-2 border-primary/30 hover:border-primary/60 transition-all relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(212,175,55,0.1),transparent_70%)]" />
              <div className="flex items-center gap-3 mb-5 relative z-10">
                <div className="w-8 h-8 rounded-xl bg-primary/20 flex items-center justify-center">
                  <TrendingUp size={16} className="text-primary" />
                </div>
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Tổng 3 Tháng Đầu</span>
              </div>
              <p className="text-4xl font-bold gold-text tracking-tighter mb-1 relative z-10">{fmtM(totalMin)}</p>
              <p className="text-[11px] text-slate-400 italic mb-4 relative z-10">đến {fmtM(totalMax)}</p>
              <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden relative z-10">
                <div className="h-full bg-gradient-to-r from-primary to-amber-300 rounded-full shadow-[0_0_8px_rgba(212,175,55,0.8)]" style={{width:'100%'}} />
              </div>
              <p className="text-[9px] text-slate-500 mt-2 italic relative z-10">Setup + 3 tháng vận hành = Giai đoạn Kickoff</p>
            </div>
          </div>

          {/* Footer note */}
          <div className="mt-8 p-5 bg-white/5 rounded-2xl border border-white/5 flex items-start gap-4">
            <AlertCircle size={18} className="text-slate-500 shrink-0 mt-0.5" />
            <p className="text-[11px] text-slate-400 leading-relaxed italic">
              <span className="text-white font-bold">Lưu ý:</span> Các con số trên là ước tính dự toán, có thể thay đổi theo quy mô chiến dịch thực tế. 
              Chi phí quảng cáo (Ads) chưa bao gồm <span className="text-primary">ngân sách tiêu thụ mùa cao điểm</span>. 
              Khuyến nghị dự phòng thêm <span className="text-emerald-400 font-bold">10–15%</span> tổng ngân sách cho phát sinh.
            </p>
          </div>
        </div>
      </motion.div>

      {/* === CÁC GÓI DỊCH VỤ CHI TIẾT === */}
      <div className="space-y-12">
        {MARKETING_DATA.costs.services.map((group, i) => (
          <div key={i} className="p-10 white-card bg-white border border-slate-200 rounded-[3rem] shadow-xl overflow-hidden group">
            <div className="flex items-center gap-6 mb-12 border-b border-slate-100 pb-8">
              <div className="p-4 bg-slate-900 rounded-2xl shadow-xl shadow-slate-900/10">
                 <Layers className="w-8 h-8 text-primary" />
              </div>
              <div>
                 <h4 className="text-2xl font-bold text-slate-900 tracking-tighter italic">{group.category}</h4>
                 <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.3em] mt-1">Giải pháp theo Nền tảng</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {group.items.map((item, idx) => {
                 const IconComp = 
                  item.icon === 'Globe' ? Globe : 
                  item.icon === 'Search' ? Search : 
                  item.icon === 'Monitor' ? Monitor : 
                  item.icon === 'Facebook' ? Facebook : 
                  item.icon === 'Video' ? Video : 
                  item.icon === 'Camera' ? Camera : 
                  item.icon === 'TrendingUp' ? TrendingUp : 
                  item.icon === 'Zap' ? Zap : 
                  item.icon === 'Image' ? ImageIcon : 
                  item.icon === 'ShoppingBag' ? ShoppingBag : 
                  Sparkles;

                 return (
                   <div key={idx} className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:border-primary/40 hover:bg-white transition-all duration-500 group/service hover:shadow-2xl">
                      <div className="flex justify-between items-start mb-8">
                         <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-slate-100 shadow-sm group-hover/service:bg-primary group-hover/service:text-slate-950 transition-all">
                            <IconComp size={20} />
                         </div>
                         <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest bg-white px-3 py-1 rounded-full border border-slate-100">{item.unit}</span>
                      </div>
                      <h5 className="text-md font-bold text-slate-900 mb-4 leading-tight group-hover/service:text-primary transition-colors italic tracking-tight">{item.name}</h5>
                      <div className="mt-auto pt-6 border-t border-slate-100">
                         <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1 opacity-60">Mức đầu tư dự kiến</p>
                         <p className="text-xl font-display font-bold text-slate-900 italic tracking-tighter whitespace-nowrap">{item.price}</p>
                      </div>
                   </div>
                 );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* === MÔ HÌNH HỢP TÁC === */}
      <div className="p-20 white-card bg-slate-900 text-center relative overflow-hidden group shadow-3xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.06),transparent_80%)]" />
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-10 border border-primary/20"><TrendingUp size={40} className="text-primary" /></div>
          <h3 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white tracking-tighter text-center">Mô hình Hợp tác Toàn quốc</h3>
          <p className="text-slate-500 font-bold mb-16 uppercase tracking-[0.3em] italic max-w-2xl leading-relaxed text-center">Chiến lược Hợp tác Đôi bên cùng có lợi 2026 - Độc quyền Miền Trung</p>
          
          <div className="flex flex-col md:flex-row gap-12 justify-center items-center w-full">
            <div className="p-12 bg-white/5 backdrop-blur-3xl rounded-[4rem] border border-white/10 min-w-[380px] hover:border-primary/50 transition-all group/bonus">
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.4em] mb-8 italic">Dựa trên Doanh thu</p>
              <p className="text-7xl font-display font-bold gold-text mb-6 italic tracking-tighter drop-shadow-2xl group-hover/bonus:scale-110 transition-transform">2% - 5%</p>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest leading-loose border-t border-white/5 pt-6 italic">Chia sẻ Doanh thu Online (Gross)</p>
            </div>
            <div className="text-3xl font-bold text-white/5 italic uppercase pointer-events-none">X</div>
            <div className="p-12 bg-white/5 backdrop-blur-3xl rounded-[4rem] border border-white/10 min-w-[380px] hover:border-primary/50 transition-all group/bonus">
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.4em] mb-8 italic">Dựa trên Lợi nhuận Ròng</p>
              <p className="text-7xl font-display font-bold gold-text mb-6 italic tracking-tighter drop-shadow-2xl group-hover/bonus:scale-110 transition-transform">5% - 10%</p>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest leading-loose border-t border-white/5 pt-6 italic text-center text-wrap">Mô hình Chia cổ tức Lợi nhuận Ròng</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const RoadmapTab = () => (
  <motion.div
    initial={{ opacity: 0, scale: 1.05 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.7 }}
    className="space-y-16 pb-32"
  >
    <div className="relative pt-32">
       <div className="absolute top-0 left-0 w-full h-1 bg-slate-100 flex items-center">
          <motion.div 
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
            className="h-full bg-primary shadow-[0_0_20px_rgba(212,175,55,0.8)]"
          />
       </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
        {[
          { 
            month: "Tháng 01: Hệ thống dillock.com", 
            items: ["Hàn thiện Website dillock.com", "Xây dựng 20 Technical Assets Dillock", "SEO Top 10 từ khóa địa phương", "Campaign: 'The German Tech Legend'"] 
          },
          { 
            month: "Tháng 02: Launching Toàn quốc", 
            items: ["Quảng cáo đa kênh Bắc - Trung - Nam", "Series: 'Mở cửa bằng lòng bàn tay Dillock'", "Creative A/B Testing Dillock", "Case Studies thực tế Toàn quốc"] 
          },
          { 
            month: "Tháng 03: Growth & Optimization", 
            items: ["Tối ưu CPA khoá phổ thông Dillock", "Mở rộng dự án Miền Trung trọng điểm", "Automation Sales Funnels", "Scale Ad-spend Toàn quốc"] 
          }
        ].map((m, i) => (
          <div key={i} className="relative pt-12 group/step">
            <div className="absolute top-[-35px] left-0 w-16 h-16 rounded-[2rem] bg-slate-900 shadow-2xl flex items-center justify-center text-primary font-bold text-2xl z-20 group-hover/step:rotate-[360deg] transition-all duration-700">
              {i+1}
            </div>
            <div className="p-12 white-card border-2 border-slate-100 h-full flex flex-col group-hover/step:border-primary/50 transition-all duration-500 shadow-2xl group-hover/step:shadow-inner">
              <h4 className="text-xl font-bold mb-12 text-slate-900 uppercase tracking-widest leading-tight italic border-l-4 border-primary pl-6">{m.month}</h4>
              <ul className="space-y-6 flex-1">
                {m.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-5 group/item">
                    <div className="w-6 h-6 rounded-xl bg-slate-50 flex items-center justify-center shrink-0 mt-1 transition-all border border-slate-100 group-hover/item:bg-primary group-hover/item:text-slate-950">
                       <CheckCircle2 size={14} />
                    </div>
                    <span className="text-[14px] text-slate-500 font-bold leading-relaxed group-hover/item:text-slate-900 transition-colors uppercase italic tracking-tighter">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="p-16 bg-slate-50 rounded-[4.5rem] border border-slate-200 relative overflow-hidden shadow-inner group text-center">
       <div className="absolute top-0 right-0 p-16 opacity-[0.02] text-slate-900 group-hover:scale-110 transition-transform duration-1000"><Activity size={250} /></div>
       <h3 className="text-3xl font-bold mb-16 flex items-center justify-center gap-6 text-slate-900 italic tracking-tighter">
         <div className="p-4 bg-slate-900 rounded-[1.5rem] shadow-2xl border border-white/5">
            <Info className="w-8 h-8 text-primary" />
         </div>
         Expert Strategy Insights Dillock
       </h3>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10 text-center">
         {[
           { title: "National Coverage", body: "Sẵn sàng lắp đặt Bắc - Trung - Nam chuyên nghiệp." },
           { title: "Central Exclusivity", body: "Tập trung di sản và hỗ trợ tại khu vực Độc quyền." },
           { title: "dillock.com Hub", body: "Cửa hàng online trọng tâm kéo Lead toàn quốc." },
           { title: "German Quality", body: "Xây dựng uy tín từ linh kiện và công nghệ Đức." }
         ].map((tip, i) => (
           <div key={i} className="space-y-6 group/tip">
             <div className="flex items-center justify-center gap-4">
                <div className="h-0.5 w-6 bg-primary/40 group-hover/tip:w-10 transition-all duration-500" />
                <p className="text-[11px] font-bold text-slate-900 uppercase tracking-widest">{tip.title}</p>
             </div>
             <p className="text-sm text-slate-500 leading-relaxed font-bold italic group-hover/tip:text-slate-900 transition-colors">{tip.body}</p>
           </div>
         ))}
       </div>
    </div>
  </motion.div>
);

// --- Main App Logic ---

function AppContent() {
  const [user, setUser] = useState<any>(() => {
    const savedUser = localStorage.getItem('dlock_mkt_user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const activeTab = useMemo(() => {
    const part = pathname.replace(/^\//, '') as TabType;
    return ['overview', 'strategy', 'content', 'website', 'channels', 'budget', 'roadmap'].includes(part) ? part : 'overview';
  }, [pathname]);

  const handleLoginSuccess = (userData: any) => {
    localStorage.setItem('dlock_mkt_user', JSON.stringify(userData));
    setUser(userData);
  };

  const handleLogout = () => {
    localStorage.removeItem('dlock_mkt_user');
    setUser(null);
  };

  if (!user) {
    return (
      <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
         <LoginPage onLoginSuccess={handleLoginSuccess} />
      </GoogleOAuthProvider>
    );
  }

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans selection:bg-primary/30 selection:text-slate-900 overflow-hidden text-slate-600 tracking-tight">
      <Sidebar activeTab={activeTab} onLogout={handleLogout} user={user} />
      
      <main className="flex-1 overflow-y-auto overflow-x-hidden pt-12 md:pt-16 px-8 md:px-16 custom-scrollbar bg-slate-50">
        <div className="max-w-7xl mx-auto pb-32">
          <Header />
          
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/overview" element={<ResearchTab />} />
              <Route path="/strategy" element={<StrategyTab />} />
              <Route path="/content" element={<ContentTab />} />
              <Route path="/website" element={<WebsiteTab />} />
              <Route path="/channels" element={<ChannelsTab />} />

              <Route path="/budget" element={<BudgetTab />} />
              <Route path="/roadmap" element={<RoadmapTab />} />
              <Route path="/" element={<Navigate to="/overview" replace />} />
              <Route path="*" element={<Navigate to="/overview" replace />} />
            </Routes>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <AppContent />
    </GoogleOAuthProvider>
  );
}

export default App;

