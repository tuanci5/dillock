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

const GOOGLE_CLIENT_ID = '637002508826-b7jmlrenhbagrh6rjp4m4uq8n210fq9a.apps.googleusercontent.com';

// --- Types ---

type TabType = 'overview' | 'strategy' | 'content' | 'channels' | 'website' | 'execution' | 'budget' | 'roadmap';

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
    { id: 'overview', label: 'Hệ sinh thái SP', icon: <LayoutDashboard className="w-5 h-5" /> },
    { id: 'strategy', label: 'Chiến lược cốt lõi', icon: <Target className="w-5 h-5" /> },
    { id: 'content', label: 'Chiến lược nội dung', icon: <FileText className="w-5 h-5" /> },
    { id: 'website', label: 'Website & Hệ thống', icon: <Monitor className="w-5 h-5" /> },
    { id: 'channels', label: 'Kênh triển khai', icon: <Globe className="w-5 h-5" /> },
    { id: 'execution', label: 'Thực thi & Tech', icon: <Zap className="w-5 h-5" /> },
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
        className={`fixed inset-y-0 left-0 w-72 bg-dark-card text-white z-50 transform transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] md:relative md:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        <div className="p-8 h-full flex flex-col">
          <div className="flex items-center gap-4 mb-16 px-2 text-nowrap">
            <div className="p-3 bg-primary rounded-2xl shadow-2xl shadow-primary/20 transform rotate-[-3deg]">
              <Lock className="w-7 h-7 text-slate-900" />
            </div>
            <div>
              <h2 className="font-display font-bold text-2xl leading-none gold-text tracking-tighter">DLOCK</h2>
              <p className="text-[10px] text-slate-500 font-bold tracking-[0.3em] uppercase mt-1">BRAND STRATEGY</p>
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
                  <span className="font-bold text-[13px] tracking-wide">{item.label}</span>
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
              <span className="font-bold text-[10px] uppercase tracking-[0.3em]">Sign Out</span>
            </button>
          </div>
        </div>
      </motion.aside>
    </>
  );
};

// --- Tab Components ---

const OverviewTab = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="space-y-16"
  >
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
      <div className="lg:col-span-2 space-y-10">
        <div className="p-10 white-card relative overflow-hidden group">
          <div className="absolute top-[-100px] right-[-100px] w-64 h-64 bg-slate-50 rounded-full blur-3xl" />
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-10 flex items-center gap-4 text-slate-900">
               <div className="p-3 bg-primary/10 rounded-2xl text-primary"><ShoppingBag className="w-6 h-6" /></div>
               Cấu trúc Hệ sinh thái Sản phẩm Dillock
            </h3>
            <div className="grid grid-cols-1 gap-8">
              {MARKETING_DATA.research.productCategories.map((cat, i) => (
                <div key={i} className="p-8 bg-slate-50/50 border border-slate-200 rounded-[2.5rem] hover:border-primary/40 transition-all group/cat">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">{cat.name}</h4>
                      <p className="text-xs text-slate-500 font-bold opacity-70">{cat.description}</p>
                    </div>
                    <div className="px-4 py-1.5 bg-slate-100 text-[10px] font-bold uppercase tracking-widest text-slate-500 rounded-full border border-slate-200">Featured</div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {cat.models.map((model, idx) => (
                      <div key={idx} className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-3 group/model hover:border-primary/50 transition-all">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-bold text-slate-900 tracking-tight">{model.name}</span>
                          <span className="text-xs text-primary font-bold px-3 py-1 bg-primary/5 rounded-lg border border-primary/10">{model.price}</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {model.features.map((f, fidx) => (
                            <span key={fidx} className="text-[8px] text-slate-500 font-bold tracking-widest uppercase bg-slate-50 px-2.5 py-1.5 rounded-lg border border-slate-100 italic">#{f}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-10 bg-slate-100/50 border border-slate-200 rounded-[3rem] relative overflow-hidden group">
          <h3 className="text-2xl font-bold mb-10 flex items-center gap-4 text-slate-900">
             <div className="p-3 bg-emerald-100 text-emerald-600 rounded-2xl"><ShieldCheck className="w-6 h-6" /></div>
             Ưu thế Thương hiệu Dillock Toàn quốc
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {MARKETING_DATA.research.brandAdvantages.map((adv, i) => (
              <div key={i} className="flex items-center gap-5 p-6 bg-white rounded-[1.5rem] border border-slate-200 hover:border-primary transition-all shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                  <CheckCircle2 size={18} className="text-emerald-500" />
                </div>
                <span className="text-sm font-bold text-slate-700 leading-snug">{adv}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Analysis Sidebar */}
      <div className="space-y-10">
        <div className="p-10 white-card relative overflow-hidden border-2 border-slate-100 shadow-2xl">
          <div className="absolute bottom-[-50px] right-[-50px] p-4 opacity-[0.03] text-slate-900 pointer-events-none">
            <Award size={300} />
          </div>
          <h3 className="text-md font-bold mb-8 text-slate-400 uppercase tracking-[0.3em] text-center italic border-b border-slate-100 pb-4">Corporate Identity</h3>
          <div className="space-y-2 mb-10 text-center relative z-10">
             <p className="text-lg font-bold text-slate-900 leading-tight uppercase font-display">{MARKETING_DATA.brand.owner}</p>
             <p className="text-[10px] text-primary font-bold uppercase tracking-widest">{MARKETING_DATA.brand.experience}</p>
          </div>
          <div className="space-y-4 relative z-10">
            {[
              { label: 'Platform', value: 'dillock.vn' },
              { label: 'Regional', value: 'dillock.com' },
              { label: 'Tech', value: 'German Standard' },
              { label: 'Network', value: '63 Provinces' }
            ].map((item, i) => (
              <div key={i} className="flex justify-between items-center p-4 bg-slate-50/80 rounded-2xl border border-slate-100 hover:bg-slate-100 transition-colors">
                <span className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em]">{item.label}</span>
                <span className="font-bold text-slate-900 text-xs tracking-tight">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="p-12 bg-slate-900 rounded-[3rem] shadow-2xl relative overflow-hidden group">
          <p className="text-[9px] font-bold text-slate-500 uppercase tracking-[0.5em] mb-8 block text-center opacity-60 italic">Campaign Core Slogan</p>
          <p className="text-3xl font-display font-bold text-white italic leading-[1.15] text-center mb-10 group-hover:gold-text transition-all duration-700">
            "{MARKETING_DATA.brand.slogan}"
          </p>
          <div className="flex flex-col items-center gap-5">
            <div className="h-px w-16 bg-white/10" />
            <div className="flex items-center gap-4">
              <Zap className="w-6 h-6 text-primary fill-primary animate-pulse" />
              <span className="text-[11px] font-bold uppercase text-slate-300 tracking-[0.3em]">{MARKETING_DATA.brand.secondarySlogan}</span>
            </div>
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
        <h3 className="text-4xl font-bold mb-4 text-slate-900 tracking-tighter">Target Segmentation Toàn quốc</h3>
        <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Đối tượng khách hàng Dillock 63 tỉnh thành</p>
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
        <p className="text-[10px] font-bold uppercase tracking-[0.6em] mb-10 text-slate-400 italic">Central Value Proposition</p>
        <h3 className="text-5xl md:text-7xl font-display font-bold mb-12 leading-tight italic tracking-tighter text-slate-900 text-wrap">
          "Độc quyền Miền Trung <br/> Phục vụ Toàn quốc"
        </h3>
        <div className="p-10 bg-white rounded-[2.5rem] border border-slate-200 shadow-2xl relative">
           <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-8 py-2 bg-slate-900 text-primary text-[10px] font-bold rounded-full uppercase tracking-widest shadow-xl">Positioning Statement</div>
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
                   <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Dillock Specific Content</p>
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
                 <p className="text-slate-400 font-bold uppercase tracking-[0.3em] text-[10px] mt-1 italic">30-Day Execution Roadmap & National Support</p>
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
                   Launch dillock.com
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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {MARKETING_DATA.channels.map((chan, i) => {
        const Icon = chan.id === 'fb' ? Facebook : chan.id === 'shopee' ? ShoppingBag : chan.id === 'website' ? Globe : Video;
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
                 <p className="text-[9px] text-slate-400 uppercase font-bold tracking-[0.2em] mb-4 border-b border-slate-200 pb-2">Target Performance KPI</p>
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
            <h3 className="text-3xl font-bold text-slate-900 tracking-tighter italic">Quuy trình Tối ưu Chuyển đổi</h3>
            <p className="text-slate-400 font-bold uppercase tracking-[0.3em] text-[10px] mt-1">Direct Conversion Strategy Flow</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        {[
          { icon: <Search/>, title: "Discovery", body: "Tiếp cận khách toàn quốc qua Ads & Website dillock.com." },
          { icon: <MessageSquare/>, title: "Engagement", body: "Tư vấn kỹ thuật Dillock sâu (PVD, Palm Vein)." },
          { icon: <Award/>, title: "Authority", body: "Khẳng định Độc quyền Miền Trung & Chất lượng Đức." },
          { icon: <ShoppingBag/>, title: "Conversion", body: "Lắp đặt tại chỗ 63 tỉnh thành & Bảo hành 24/7." }
        ].map((step, i) => (
          <div key={i} className="relative text-center p-8 space-y-6 group/step">
             <div className="w-20 h-20 mx-auto bg-white rounded-[2rem] flex items-center justify-center text-slate-400 border border-slate-200 group-hover/step:text-primary group-hover/step:border-primary/50 group-hover/step:bg-slate-50 transition-all duration-500 shadow-xl group-hover/step:shadow-inner transform group-hover/step:scale-110">
               {React.cloneElement(step.icon as React.ReactElement, { size: 32 })}
             </div>
             <div className="space-y-3">
               <h4 className="font-bold text-slate-900 uppercase tracking-[0.2em] text-sm italic">{step.title}</h4>
               <p className="text-xs text-slate-500 leading-relaxed font-bold italic px-2">{step.body}</p>
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

const ExecutionTab = () => (
  <motion.div
    initial={{ opacity: 0, scale: 1.05 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6 }}
    className="space-y-16"
  >
    <div className="relative p-12 bg-slate-900 rounded-[3rem] shadow-2xl overflow-hidden group">
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.05),transparent_70%)]" />
       <div className="flex items-center gap-6 mb-16 relative z-10">
          <div className="p-4 bg-primary/10 rounded-2xl border border-primary/20 shadow-xl"><Cpu className="text-primary w-8 h-8"/></div>
          <div>
             <h3 className="text-3xl font-bold text-white italic tracking-tighter">Thực thi Kỹ thuật & Công nghệ Dillock</h3>
             <p className="text-slate-500 font-bold uppercase tracking-[0.3em] text-[10px] mt-1">Deep Tech Focus & National Service Grid</p>
          </div>
       </div>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
         {MARKETING_DATA.research.technologies.map((tech, i) => (
           <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] hover:bg-white/10 transition-all group/tech">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 border border-primary/20 group-hover/tech:bg-primary group-hover/tech:text-slate-950 transition-all">
                 <ShieldCheck size={20} />
              </div>
              <h4 className="text-lg font-bold text-white mb-3 tracking-tight">{tech.name}</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-bold italic opacity-80">{tech.desc}</p>
           </div>
         ))}
       </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div className="space-y-8">
        <h3 className="text-2xl font-bold text-slate-900 uppercase tracking-tighter pl-6 border-l-4 border-slate-900 italic mb-10">Series Video Công nghệ Toàn quốc</h3>
        {[
          { icon: <Video/>, title: "Dillock Smart Biometrics Show", desc: "Demo trực tiếp công nghệ Palm Vein & FaceID Dillock." },
          { icon: <ShieldCheck/>, title: "Dillock National Installation", desc: "Hành trình đội kỹ thuật lắp đặt 63 tỉnh thành." },
          { icon: <Star/>, title: "Dillock PVD Oiled Benchmark", desc: "Kiểm tra độ bền mạ Dillock SUS 304 chuẩn Đức." },
          { icon: <Info/>, title: "Exclusive Heritage Vision", desc: "Tầm nhìn đại diện Độc quyền Miền Trung của Dillock." }
        ].map((v, i) => (
          <div key={i} className="p-8 bg-white border border-slate-200 rounded-[2.5rem] flex items-center gap-8 group hover:border-primary/50 transition-all duration-500 hover:shadow-2xl">
            <div className="w-16 h-16 bg-slate-50 rounded-[1.5rem] flex items-center justify-center shrink-0 border border-slate-100 group-hover:bg-primary group-hover:text-slate-950 transition-all shadow-inner">
              <Video className="w-8 h-8 text-slate-400 group-hover:text-slate-950 transition-colors" />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-slate-900 text-lg tracking-tight mb-1">{v.title}</h4>
              <p className="text-sm text-slate-500 font-bold italic opacity-70 leading-relaxed">{v.desc}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-12 white-card bg-slate-900 relative overflow-hidden flex flex-col items-center text-center">
         <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-10 border border-primary/20"><Sparkles size={40} className="text-primary animate-pulse" /></div>
         <h4 className="text-2xl font-bold text-white mb-6 italic tracking-tight uppercase">High-Performance Output</h4>
         <p className="text-slate-400 font-bold leading-relaxed mb-12">Hệ tài sản kỹ thuật được phủ sóng từ website dillock.com đến Fanpage toàn quốc.</p>
         <div className="grid grid-cols-3 gap-8 w-full">
            {[
              { val: "63", label: "Provinces" },
              { val: "2h", label: "Local SLA" },
              { val: "24/7", label: "Monitoring" }
            ].map((stat, i) => (
              <div key={i} className="space-y-2">
                 <p className="text-2xl font-display font-bold gold-text">{stat.val}</p>
                 <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
         </div>
      </div>
    </div>
  </motion.div>
);

const BudgetTab = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="space-y-16"
  >
    <div className="p-16 white-card bg-slate-50 border-2 border-slate-200 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-16 opacity-5 pointer-events-none transform rotate-12 scale-150"><DollarSign size={200} /></div>
      <h3 className="text-4xl font-bold mb-20 text-center text-slate-900 tracking-tighter italic">Dự toán Tài chính Kế hoạch Dillock</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
        <div className="space-y-12">
           <div className="flex items-center gap-5 px-8 border-l-4 border-primary">
              <div className="p-3 bg-primary/10 rounded-2xl"><Layers size={22} className="text-primary"/></div>
              <h4 className="text-md font-bold text-slate-900 uppercase tracking-widest italic">Setup & Asset Production Toàn quốc</h4>
           </div>
           <div className="space-y-6">
             {MARKETING_DATA.costs.setup.map((item, i) => (
               <div key={i} className="flex justify-between items-center p-8 bg-white border border-slate-200 rounded-[2.5rem] group hover:border-primary transition-all shadow-sm">
                 <span className="text-md font-bold text-slate-600 group-hover:text-slate-900 transition-colors uppercase tracking-tight">{item.name}</span>
                 <span className="text-primary font-bold text-2xl italic tracking-tighter leading-none border-b-2 border-primary/10">{item.price}</span>
               </div>
             ))}
           </div>
        </div>
        <div className="space-y-12">
           <div className="flex items-center gap-5 px-8 border-l-4 border-slate-900">
              <div className="p-3 bg-slate-900 rounded-2xl shadow-xl"><Activity size={22} className="text-primary"/></div>
              <h4 className="text-md font-bold text-slate-900 uppercase tracking-widest italic">Hệ thống Vận hành & SEO</h4>
           </div>
           <div className="space-y-6">
             {MARKETING_DATA.costs.operation.map((item, i) => (
               <div key={i} className="flex justify-between items-center p-8 bg-white border border-slate-200 rounded-[2.5rem] group hover:border-primary transition-all shadow-sm">
                 <span className="text-md font-bold text-slate-600 group-hover:text-slate-900 transition-colors uppercase tracking-tight">{item.name}</span>
                 <span className="text-slate-900 font-bold text-2xl italic tracking-tighter leading-none border-b-2 border-slate-200">{item.price}</span>
               </div>
             ))}
           </div>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
      {MARKETING_DATA.costs.packages.map((pkg, i) => (
        <div key={i} className={`p-12 rounded-[4rem] border transition-all duration-700 relative flex flex-col items-center text-center group ${
            i === 1 ? 'bg-slate-900 border-transparent scale-105 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.3)] z-10' : 'white-card border-slate-200 hover:border-primary/40'
          }`}>
          {i === 1 && (
            <div className="absolute -top-6 px-10 py-2.5 bg-primary text-slate-950 text-[11px] font-bold rounded-full uppercase tracking-[0.4em] shadow-2xl border border-primary/20 italic transform -rotate-2">
              Recommend Focus
            </div>
          )}
          <h4 className={`text-4xl font-display font-bold mb-3 tracking-tighter ${i === 1 ? 'text-white' : 'text-slate-900'}`}>{pkg.name}</h4>
          <p className={`text-[11px] font-bold uppercase mb-14 tracking-widest opacity-40 ${i === 1 ? 'text-slate-400' : 'text-slate-500'}`}>Phí Gói Quản lý</p>
          <div className={`text-7xl font-display font-bold mb-16 italic tracking-tighter ${i === 1 ? 'text-primary' : 'gold-text'}`}>
            {pkg.fee}
          </div>
          
          <div className="w-full space-y-6 mb-16 text-left px-4">
             <div className={`flex items-center gap-4 mb-8 opacity-40 ${i === 1 ? 'text-slate-400' : 'text-slate-300'}`}>
                <div className="h-px bg-current flex-1" />
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] italic">Commitment</p>
                <div className="h-px bg-current flex-1" />
             </div>
            {pkg.features.map((f, idx) => (
              <div key={idx} className="flex items-start gap-5">
                <div className={`w-6 h-6 rounded-xl flex items-center justify-center shrink-0 mt-0.5 shadow-sm ${i === 1 ? 'bg-primary text-slate-950' : 'bg-slate-50 text-emerald-500 border border-slate-100'}`}>
                  <CheckCircle2 size={14} />
                </div>
                <span className={`text-[15px] font-bold tracking-tight leading-snug ${i === 1 ? 'text-slate-200' : 'text-slate-600'}`}>{f}</span>
              </div>
            ))}
          </div>

          <div className={`mt-auto w-full p-10 rounded-[3rem] transition-all duration-500 ${i === 1 ? 'bg-white/5 border border-white/10 shadow-inner' : 'bg-slate-50 border border-slate-100 group-hover:bg-white'}`}>
            <p className={`text-[10px] uppercase font-bold mb-4 tracking-[0.3em] opacity-40 ${i === 1 ? 'text-slate-400' : 'text-slate-500'}`}>Recommended Ads Spend</p>
            <p className={`text-3xl font-bold italic tracking-tighter font-display ${i === 1 ? 'text-white' : 'text-slate-900'}`}>{pkg.ads}</p>
          </div>
        </div>
      ))}
    </div>

    <div className="p-20 white-card bg-slate-900 text-center relative overflow-hidden group shadow-3xl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.06),transparent_80%)]" />
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-10 border border-primary/20"><TrendingUp size={40} className="text-primary" /></div>
        <h3 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white tracking-tighter text-center">National Partnership Model</h3>
        <p className="text-slate-500 font-bold mb-16 uppercase tracking-[0.3em] italic max-w-2xl leading-relaxed text-center">Win-Win Partnership Strategy 2026 - Central Region Exclusive</p>
        
        <div className="flex flex-col md:flex-row gap-12 justify-center items-center w-full">
          <div className="p-12 bg-white/5 backdrop-blur-3xl rounded-[4rem] border border-white/10 min-w-[380px] hover:border-primary/50 transition-all group/bonus">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.4em] mb-8 italic">Based on Revenue</p>
            <p className="text-7xl font-display font-bold gold-text mb-6 italic tracking-tighter drop-shadow-2xl group-hover/bonus:scale-110 transition-transform">2% - 5%</p>
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest leading-loose border-t border-white/5 pt-6 italic">Gross Online Revenue Share</p>
          </div>
          <div className="text-3xl font-bold text-white/5 italic uppercase pointer-events-none">X</div>
          <div className="p-12 bg-white/5 backdrop-blur-3xl rounded-[4rem] border border-white/10 min-w-[380px] hover:border-primary/50 transition-all group/bonus">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.4em] mb-8 italic">Based on Net Profit</p>
            <p className="text-7xl font-display font-bold gold-text mb-6 italic tracking-tighter drop-shadow-2xl group-hover/bonus:scale-110 transition-transform">5% - 10%</p>
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest leading-loose border-t border-white/5 pt-6 italic text-center text-wrap">Net Profit Dividend Model</p>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

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
    return ['overview', 'strategy', 'content', 'website', 'channels', 'execution', 'budget', 'roadmap'].includes(part) ? part : 'overview';
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
              <Route path="/overview" element={<OverviewTab />} />
              <Route path="/strategy" element={<StrategyTab />} />
              <Route path="/content" element={<ContentTab />} />
              <Route path="/website" element={<WebsiteTab />} />
              <Route path="/channels" element={<ChannelsTab />} />
              <Route path="/execution" element={<ExecutionTab />} />
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
