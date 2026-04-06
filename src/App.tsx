/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
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
  PieChart
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---

type TabType = 'model' | 'hr' | 'salary';

interface KPI {
  label: string;
  value: string;
}

interface Role {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  tasks: string[];
  kpis: KPI[];
  color: string;
  focusArea?: string;
}

interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface JobDescription {
  title: string;
  objective: string;
  tasks: string[];
  powers?: string[];
  kpis: string[];
  requirements?: string[];
}

// --- Data ---

const JD_DATA: Record<string, JobDescription> = {
  'head': {
    title: 'Trưởng phòng Kinh doanh – Marketing – CSKH',
    objective: 'Chịu trách nhiệm quản lý toàn bộ hoạt động marketing, tư vấn/chốt đơn, chăm sóc sau bán, gia hạn và phát triển doanh thu.',
    tasks: [
      'Xây dựng kế hoạch doanh thu theo tuần/tháng/quý',
      'Lập kế hoạch marketing và phân bổ ngân sách quảng cáo',
      'Quản lý hoạt động tiếp nhận khách hàng từ các kênh online',
      'Tổ chức quy trình tư vấn, chốt đơn và chăm sóc khách hàng',
      'Phối hợp giữa marketing, sale và CSKH để tối ưu hiệu quả toàn phòng',
      'Theo dõi chất lượng lead, tỷ lệ chốt, tỷ lệ gia hạn',
      'Phân tích dữ liệu vận hành để phát hiện điểm nghẽn',
      'Tuyển dụng, đào tạo, phân công và đánh giá nhân sự'
    ],
    powers: [
      'Phân công và điều phối công việc trong phòng',
      'Đề xuất tuyển dụng, điều chuyển, khen thưởng, kỷ luật',
      'Đề xuất ngân sách marketing, thưởng doanh số'
    ],
    kpis: [
      'Tổng doanh thu',
      'Doanh thu khách mới',
      'Doanh thu gia hạn/tái mua',
      'Tỷ lệ chuyển đổi từ lead sang đơn hàng',
      'Hiệu quả chi phí marketing (ROI)'
    ]
  },
  'mkt_lead': {
    title: 'Trưởng nhóm Marketing',
    objective: 'Tổ chức và triển khai hoạt động marketing thu hút đúng khách hàng mục tiêu là người nước ngoài tại Nhật.',
    tasks: [
      'Xây dựng kế hoạch marketing theo tuần/tháng',
      'Triển khai quảng cáo trên FB, TikTok, Google, Instagram',
      'Định hướng nội dung truyền thông theo từng nhóm khách hàng',
      'Theo dõi số lượng và chất lượng lead từ từng kênh',
      'Tổ chức sản xuất nội dung: bài viết, hình ảnh, video, landing page',
      'Quản lý fanpage, social media, group cộng đồng'
    ],
    kpis: [
      'Số lượng lead/inbox/form',
      'Chi phí trên mỗi lead',
      'Tỷ lệ lead đúng tệp',
      'Tỷ lệ chuyển đổi từ lead sang tư vấn'
    ]
  },
  'sale_lead': {
    title: 'Trưởng nhóm Sale/Tư vấn',
    objective: 'Quản lý đội ngũ tư vấn, đảm bảo tiếp nhận khách nhanh, tư vấn đúng nhu cầu và đạt tỷ lệ chốt đơn.',
    tasks: [
      'Phân chia lead cho nhân viên tư vấn',
      'Giám sát tốc độ phản hồi khách hàng',
      'Theo dõi tỷ lệ chốt đơn của từng nhân viên',
      'Chuẩn hóa kịch bản tư vấn theo từng nhóm nhu cầu',
      'Hướng dẫn nhân viên xử lý tình huống khó',
      'Phối hợp với marketing để phản hồi chất lượng lead'
    ],
    kpis: [
      'Tỷ lệ phản hồi khách hàng đúng thời gian',
      'Tỷ lệ chốt đơn của đội',
      'Doanh thu của đội tư vấn',
      'Chất lượng cập nhật thông tin khách hàng'
    ]
  },
  'cskh_lead': {
    title: 'Trưởng nhóm Chăm sóc khách hàng',
    objective: 'Tổ chức hoạt động chăm sóc sau bán đảm bảo khách sử dụng ổn định, hài lòng và phát sinh gia hạn/tái mua.',
    tasks: [
      'Xây dựng quy trình CSKH sau bán',
      'Phân công danh sách khách cần chăm sóc',
      'Theo dõi tỷ lệ hỗ trợ thành công',
      'Kiểm soát việc nhắc gia hạn, đổi gói',
      'Theo dõi phản hồi và khiếu nại',
      'Tổng hợp các lỗi, vấn đề khách thường gặp'
    ],
    kpis: [
      'Tỷ lệ khách được chăm sóc đúng hạn',
      'Tỷ lệ gia hạn',
      'Tỷ lệ xử lý vấn đề thành công',
      'Doanh thu từ khách cũ'
    ]
  },
  'sale_staff': {
    title: 'Nhân viên Sale/Chat Tư vấn',
    objective: 'Tiếp nhận khách hàng, xác định nhu cầu và tư vấn gói SIM Data hoặc Pocket WiFi phù hợp để chốt đơn.',
    tasks: [
      'Trả lời inbox, chat, điện thoại, form đăng ký',
      'Xác định nhu cầu: Mới sang Nhật? Cá nhân/Nhóm? Ngắn/Dài hạn?',
      'Tư vấn gói phù hợp theo nhu cầu và ngân sách',
      'Giải thích bảng giá, ưu đãi, cách tính cước',
      'Chốt đơn, lấy thông tin nhận hàng, xác nhận thanh toán',
      'Theo dõi lại khách chưa chốt (Follow-up)'
    ],
    kpis: [
      'Thời gian phản hồi (< 2 phút)',
      'Số khách được tư vấn',
      'Tỷ lệ chốt đơn',
      'Doanh thu cá nhân'
    ]
  },
  'cskh_staff': {
    title: 'Nhân viên Chăm sóc khách hàng',
    objective: 'Hỗ trợ khách hàng sau bán, đảm bảo khách sử dụng được dịch vụ và duy trì mối quan hệ để gia hạn.',
    tasks: [
      'Xác nhận khách đã nhận hàng và hướng dẫn lắp SIM/WiFi',
      'Hỗ trợ cài đặt APN, xử lý lỗi kết nối cơ bản',
      'Nhắc gia hạn trước kỳ cước',
      'Tư vấn đổi gói nếu nhu cầu khách thay đổi',
      'Xin đánh giá, phản hồi, lời giới thiệu từ khách hàng'
    ],
    kpis: [
      'Tỷ lệ khách sử dụng thành công sau mua',
      'Tỷ lệ gia hạn',
      'Số khách tái mua/giới thiệu thêm',
      'Mức độ hài lòng của khách hàng'
    ]
  },
  'mkt_ads': {
    title: 'Nhân viên Marketing Ads',
    objective: 'Triển khai và tối ưu hoạt động quảng cáo để tạo ra khách hàng tiềm năng chất lượng.',
    tasks: [
      'Thiết lập và vận hành chiến dịch quảng cáo',
      'Theo dõi ngân sách, hiệu suất quảng cáo hàng ngày',
      'Tối ưu tệp khách hàng mục tiêu',
      'Tối ưu mẫu quảng cáo, nội dung, chi phí',
      'Phối hợp với content để cải thiện thông điệp'
    ],
    kpis: [
      'Số lead thu về',
      'Giá mỗi lead',
      'Tỷ lệ lead hợp lệ',
      'Hiệu suất ngân sách quảng cáo'
    ]
  },
  'mkt_content': {
    title: 'Nhân viên Content Marketing',
    objective: 'Xây dựng nội dung thu hút đúng nhu cầu khách hàng, giúp tăng lượng khách quan tâm.',
    tasks: [
      'Viết nội dung quảng cáo, bài đăng fanpage, bài social',
      'Xây dựng nội dung theo từng nhóm khách (Mới sang, ở KTX...)',
      'Phối hợp với sale để cập nhật câu hỏi thường gặp',
      'Viết nội dung cho các chương trình khuyến mãi, gia hạn',
      'Hỗ trợ viết kịch bản video ngắn, tin nhắn mẫu'
    ],
    kpis: [
      'Số lượng nội dung triển khai đúng kế hoạch',
      'Mức độ tương tác của nội dung',
      'Tỷ lệ chuyển đổi từ nội dung sang inbox/form'
    ]
  },
  'mkt_media': {
    title: 'Nhân viên Media/Thiết kế',
    objective: 'Thiết kế hình ảnh, video, ấn phẩm truyền thông phục vụ quảng bá sản phẩm.',
    tasks: [
      'Thiết kế banner, hình ảnh quảng cáo, bài đăng social',
      'Dựng video ngắn giới thiệu sản phẩm, hướng dẫn sử dụng',
      'Thiết kế hình ảnh bảng giá, infographic, hướng dẫn cài đặt',
      'Hỗ trợ chỉnh sửa ấn phẩm theo từng chiến dịch'
    ],
    kpis: [
      'Tiến độ hoàn thành ấn phẩm',
      'Chất lượng hình ảnh/video',
      'Mức độ phù hợp với khách hàng mục tiêu'
    ]
  },
  'telesale': {
    title: 'Nhân viên Telesales',
    objective: 'Gọi điện cho khách hàng để xác nhận nhu cầu, tư vấn và chốt đơn.',
    tasks: [
      'Gọi điện cho khách hàng ngay sau khi nhận lead',
      'Xác minh nhu cầu sử dụng và tư vấn gói phù hợp',
      'Chốt đơn qua điện thoại',
      'Theo dõi khách chưa chốt và nhắc khách hoàn tất đơn hàng'
    ],
    kpis: [
      'Tỷ lệ gọi thành công',
      'Tỷ lệ chốt qua điện thoại',
      'Doanh thu từ data telesales'
    ]
  },
  'crm': {
    title: 'Nhân viên Quản lý dữ liệu / CRM',
    objective: 'Quản lý dữ liệu khách hàng xuyên suốt để hỗ trợ việc vận hành và báo cáo.',
    tasks: [
      'Nhập và cập nhật dữ liệu khách hàng từ các nguồn',
      'Theo dõi trạng thái lead, đơn hàng, gia hạn',
      'Phân loại khách mới, khách cũ, khách cần follow-up',
      'Lập báo cáo dữ liệu định kỳ'
    ],
    kpis: [
      'Tỷ lệ chính xác dữ liệu',
      'Tỷ lệ cập nhật đúng hạn',
      'Chất lượng báo cáo'
    ]
  },
  'ops': {
    title: 'Nhân viên Xử lý đơn hàng / Vận hành',
    objective: 'Đảm bảo đơn hàng được xác nhận, chuẩn bị và bàn giao đúng, đủ, nhanh chóng.',
    tasks: [
      'Tiếp nhận thông tin đơn hàng từ sale',
      'Kiểm tra thông tin khách hàng, sản phẩm, địa chỉ',
      'Phối hợp chuẩn bị SIM/Pocket WiFi theo đơn',
      'Theo dõi tình trạng giao hàng và cập nhật trạng thái'
    ],
    kpis: [
      'Tỷ lệ xử lý đơn đúng hạn',
      'Tỷ lệ sai sót đơn hàng',
      'Tốc độ xử lý đơn'
    ]
  }
};

const ROLES: Role[] = [
  {
    id: 'head',
    title: 'Trưởng phòng Kinh doanh – Marketing – CSKH',
    icon: <ShieldCheck className="w-6 h-6" />,
    color: 'bg-blue-600',
    description: 'Quản lý tổng thể chuỗi thu hút khách, chốt đơn và chăm sóc sau bán.',
    tasks: [
      'Xây dựng kế hoạch doanh thu và ngân sách marketing',
      'Giám sát quy trình tiếp nhận và xử lý khách hàng online',
      'Phối hợp giữa các tổ để tối ưu tỷ lệ chuyển đổi (CR)',
      'Phân tích dữ liệu doanh thu, gia hạn và tái mua',
      'Đảm bảo chất lượng phục vụ khách hàng người nước ngoài'
    ],
    kpis: [
      { label: 'Tổng doanh thu', value: 'Yên/VNĐ' },
      { label: 'Doanh thu gia hạn', value: 'Yên/VNĐ' },
      { label: 'Tỷ lệ chuyển đổi phễu', value: '%' },
      { label: 'ROI Marketing', value: 'x Lần' }
    ]
  },
  {
    id: 'marketing',
    title: 'Tổ Marketing',
    icon: <Megaphone className="w-6 h-6" />,
    color: 'bg-indigo-500',
    focusArea: 'Người mới sang Nhật, Thực tập sinh, Du học sinh',
    description: 'Tạo khách hàng tiềm năng và đưa khách vào các kênh tư vấn (Inbox/LINE).',
    tasks: [
      'Chạy Ads (FB, TikTok, Google) nhắm đúng tệp người Việt tại Nhật',
      'Xây dựng nội dung cho fanpage, hội nhóm, landing page',
      'Seeding trong cộng đồng người nước ngoài tại Nhật',
      'Thiết kế hình ảnh/video giới thiệu SIM/WiFi trực quan',
      'Đo lường chất lượng khách hàng từ từng kênh quảng cáo'
    ],
    kpis: [
      { label: 'Số lead/inbox/form', value: 'Leads' },
      { label: 'Chi phí mỗi lead', value: 'Yên' },
      { label: 'Tỷ lệ lead đúng tệp', value: '%' }
    ]
  },
  {
    id: 'sales',
    title: 'Tổ Sale / Tư vấn',
    icon: <MessageSquare className="w-6 h-6" />,
    color: 'bg-emerald-500',
    focusArea: 'Tư vấn giải pháp viễn thông theo hoàn cảnh',
    description: 'Tiếp nhận khách hàng từ Marketing và chuyển đổi thành đơn hàng.',
    tasks: [
      'Phản hồi siêu tốc tin nhắn, cuộc gọi, form đăng ký',
      'Hỏi nhu cầu: Mới sang Nhật? Cá nhân/Nhóm? Ngắn/Dài hạn?',
      'Tư vấn gói SIM hoặc Pocket WiFi phù hợp nhất',
      'Giải thích giá, ưu đãi, cách tính cước và thời điểm mua',
      'Chốt đơn và xác nhận thông tin giao hàng/thanh toán'
    ],
    kpis: [
      { label: 'Tỷ lệ chốt đơn', value: '%' },
      { label: 'Thời gian phản hồi', value: '< 2 Phút' },
      { label: 'Doanh thu cá nhân', value: 'Yên' }
    ]
  },
  {
    id: 'cskh',
    title: 'Tổ Chăm sóc khách hàng',
    icon: <HeartHandshake className="w-6 h-6" />,
    color: 'bg-rose-500',
    focusArea: 'Hỗ trợ kỹ thuật & Gia hạn doanh thu',
    description: 'Đảm bảo khách dùng được dịch vụ và phát sinh doanh thu tiếp theo.',
    tasks: [
      'Xác nhận nhận hàng và hướng dẫn cài đặt APN/kích hoạt',
      'Hỗ trợ xử lý lỗi kết nối mạng cơ bản cho khách',
      'Nhắc gia hạn cước trước hạn để tránh gián đoạn',
      'Tư vấn đổi gói data khi nhu cầu khách thay đổi',
      'Khai thác giới thiệu khách mới từ khách hàng cũ'
    ],
    kpis: [
      { label: 'Tỷ lệ gia hạn', value: '%' },
      { label: 'Số lượt giới thiệu', value: 'Referrals' },
      { label: 'Tỷ lệ xử lý sự cố', value: '%' }
    ]
  }
];

const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 1,
    title: 'Thu hút khách hàng',
    description: 'Ads & Content nhắm đúng người Việt tại Nhật cần internet gấp.',
    icon: <Megaphone className="w-5 h-5" />
  },
  {
    id: 2,
    title: 'Tiếp nhận & Sàng lọc',
    description: 'Xác định nhanh: Mới sang? Ở ký túc xá? Cần data nhiều hay ít?',
    icon: <Search className="w-5 h-5" />
  },
  {
    id: 3,
    title: 'Chốt đơn & Giao hàng',
    description: 'Xác nhận địa chỉ, thời gian giao và hình thức thanh toán tại Nhật.',
    icon: <ShoppingCart className="w-5 h-5" />
  },
  {
    id: 4,
    title: 'Hỗ trợ Kỹ thuật',
    description: 'Hướng dẫn lắp SIM, cài đặt APN và đảm bảo khách dùng được mạng.',
    icon: <Smartphone className="w-5 h-5" />
  },
  {
    id: 5,
    title: 'Gia hạn & Giới thiệu',
    description: 'Nhắc gia hạn, nâng gói và xin giới thiệu bạn bè cùng phòng/công ty.',
    icon: <RefreshCcw className="w-5 h-5" />
  }
];

// --- Components ---

const Header = () => (
  <header className="mb-12 text-center">
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-center gap-2 mb-4">
        <Wifi className="w-6 h-6 text-blue-600" />
        <span className="px-3 py-1 text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-100 rounded-full">
          Dịch vụ Viễn thông tại Nhật
        </span>
      </div>
      <h1 id="main-title" className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
        Phòng Kinh doanh – Marketing – CSKH
      </h1>
      <p className="max-w-3xl mx-auto mt-4 text-lg text-slate-600">
        Mô hình quản trị vòng đời khách hàng chuyên biệt cho <span className="font-bold text-blue-600">SIM Data & Pocket WiFi</span>. 
        Tối ưu hóa từ lúc tìm khách đến khi gia hạn và giới thiệu.
      </p>
    </motion.div>
  </header>
);

const OrgChart = ({ activeRole, setActiveRole }: { activeRole: string, setActiveRole: (id: string) => void }) => (
  <section className="relative py-12 mb-16 overflow-hidden bg-white border rounded-3xl border-slate-200 shadow-sm">
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', size: '20px 20px' }} />
    
    <div className="relative z-10 flex flex-col items-center">
      {/* Head of Dept */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setActiveRole('head')}
        className={`relative p-6 text-white rounded-2xl shadow-xl transition-all duration-300 ${activeRole === 'head' ? 'ring-4 ring-blue-200' : ''} ${ROLES[0].color}`}
      >
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-8 h-8" />
          <div className="text-left">
            <p className="text-xs font-medium opacity-80">Quản trị Doanh thu & Vòng đời</p>
            <h3 className="text-lg font-bold">Trưởng phòng Kinh doanh – Marketing – CSKH</h3>
          </div>
        </div>
      </motion.button>

      {/* Vertical Line */}
      <div className="w-px h-12 bg-slate-200" />

      {/* Horizontal Connector */}
      <div className="relative w-full max-w-5xl px-4">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] h-px bg-slate-200" />
        
        <div className="grid grid-cols-1 gap-6 pt-12 md:grid-cols-3">
          {ROLES.slice(1).map((role, idx) => (
            <div key={role.id} className="relative flex flex-col items-center">
              {/* Vertical Connector to Horizontal Line */}
              <div className="absolute top-[-48px] w-px h-12 bg-slate-200" />
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveRole(role.id)}
                className={`w-full p-5 rounded-2xl border-2 transition-all duration-300 text-left group ${
                  activeRole === role.id 
                    ? `border-transparent text-white shadow-lg ${role.color}` 
                    : 'border-slate-100 bg-slate-50 text-slate-700 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`p-2 rounded-lg ${activeRole === role.id ? 'bg-white/20' : 'bg-white shadow-sm'}`}>
                    {React.cloneElement(role.icon as React.ReactElement, { 
                      className: `w-5 h-5 ${activeRole === role.id ? 'text-white' : 'text-slate-600'}` 
                    })}
                  </div>
                  <h4 className="font-bold leading-tight">{role.title}</h4>
                </div>
                <p className={`text-xs line-clamp-2 ${activeRole === role.id ? 'text-white/80' : 'text-slate-500'}`}>
                  {role.description}
                </p>
              </motion.button>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const RoleDetailPanel = ({ role }: { role: Role }) => (
  <motion.div
    key={role.id}
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    className="grid grid-cols-1 gap-8 lg:grid-cols-2 mb-16"
  >
    <div className="p-8 bg-white border rounded-3xl border-slate-200 shadow-sm">
      <div className="flex items-center gap-4 mb-6">
        <div className={`p-3 text-white rounded-xl ${role.color}`}>
          {role.icon}
        </div>
        <div>
          <h3 className="text-2xl font-bold text-slate-900">{role.title}</h3>
          <p className="text-slate-500">{role.description}</p>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h4 className="flex items-center gap-2 mb-3 font-semibold text-slate-800">
            <Zap className="w-4 h-4 text-amber-500" />
            Nhiệm vụ trọng tâm
          </h4>
          <ul className="space-y-2">
            {role.tasks.map((task, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-600">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                <span>{task}</span>
              </li>
            ))}
          </ul>
        </div>

        {role.focusArea && (
          <div className="pt-4 border-t border-slate-100">
            <h4 className="flex items-center gap-2 mb-2 font-semibold text-slate-800">
              <Target className="w-4 h-4 text-blue-500" />
              Trọng tâm:
            </h4>
            <p className="text-slate-600 text-sm italic">{role.focusArea}</p>
          </div>
        )}
      </div>
    </div>

    <div className="p-8 bg-slate-900 rounded-3xl shadow-xl text-white">
      <h4 className="flex items-center gap-2 mb-6 text-lg font-bold">
        <BarChart3 className="w-5 h-5 text-blue-400" />
        Chỉ số đo lường (KPIs)
      </h4>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {role.kpis.map((kpi, i) => (
          <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/10">
            <p className="text-sm text-slate-400">{kpi.label}</p>
            <p className="text-xl font-bold text-blue-400">{kpi.value}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-8 p-6 rounded-2xl bg-blue-500/10 border border-blue-500/20">
        <div className="flex gap-3">
          <Info className="w-5 h-5 text-blue-400 shrink-0" />
          <div>
            <p className="font-bold text-blue-100 mb-1">Tư duy ngành Viễn thông</p>
            <p className="text-sm text-blue-200/80 italic">
              "Bán SIM/WiFi không chỉ là bán sản phẩm, mà là bán giải pháp kết nối và sự hỗ trợ kịp thời cho người xa xứ."
            </p>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const WhySection = () => (
  <section className="py-16">
    <div className="flex flex-col items-center mb-12 text-center">
      <h2 className="text-3xl font-bold text-slate-900">Tại sao mô hình này phù hợp?</h2>
      <p className="mt-2 text-slate-600">Đặc thù kinh doanh SIM/WiFi tại Nhật đòi hỏi sự liên kết chặt chẽ.</p>
    </div>

    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
      {[
        {
          title: 'Sản phẩm cần tư vấn sâu',
          desc: 'Khách không chỉ mua giá, họ mua sự phù hợp (SIM vs WiFi, gói tháng vs năm).',
          icon: <Headphones className="w-6 h-6" />,
          color: 'bg-emerald-100 text-emerald-600'
        },
        {
          title: 'Khách hàng cần phản hồi nhanh',
          desc: 'Người mới sang Nhật cần internet ngay để liên lạc, tra cứu. Chậm 5 phút là mất khách.',
          icon: <Clock className="w-6 h-6" />,
          color: 'bg-blue-100 text-blue-600'
        },
        {
          title: 'Hỗ trợ liên tục sau bán',
          desc: 'Cài đặt APN, lỗi mạng, gia hạn hàng tháng là mắt xích giữ chân khách lâu dài.',
          icon: <RefreshCcw className="w-6 h-6" />,
          color: 'bg-rose-100 text-rose-600'
        }
      ].map((item, i) => (
        <div key={i} className="p-8 bg-white border rounded-3xl border-slate-200 shadow-sm">
          <div className={`p-3 rounded-2xl w-fit mb-6 ${item.color}`}>
            {item.icon}
          </div>
          <h3 className="text-xl font-bold mb-3">{item.title}</h3>
          <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

const ProcessSection = () => (
  <section className="py-16">
    <div className="flex flex-col items-center mb-12 text-center">
      <h2 className="text-3xl font-bold text-slate-900">Quy trình vận hành chuẩn</h2>
      <p className="mt-2 text-slate-600">Chuỗi giá trị: Tạo khách – Chốt khách – Giữ khách – Tăng doanh thu.</p>
    </div>

    <div className="relative">
      <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 hidden lg:block" />
      
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
        {PROCESS_STEPS.map((step, idx) => (
          <motion.div
            key={step.id}
            whileHover={{ y: -5 }}
            className="relative z-10 p-6 bg-white border rounded-2xl border-slate-200 shadow-sm text-center group"
          >
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 text-blue-600 bg-blue-50 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
              {step.icon}
            </div>
            <div className="absolute top-4 right-4 text-xs font-bold text-slate-200">0{step.id}</div>
            <h4 className="mb-2 font-bold text-slate-900">{step.title}</h4>
            <p className="text-sm text-slate-500 leading-relaxed">{step.description}</p>
            
            {idx < PROCESS_STEPS.length - 1 && (
              <div className="flex justify-center mt-4 lg:hidden">
                <ChevronDown className="w-5 h-5 text-slate-300" />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const ValueSection = () => (
  <section className="grid grid-cols-1 gap-8 py-16 lg:grid-cols-2">
    <div className="p-8 bg-emerald-50 rounded-3xl border border-emerald-100">
      <h3 className="flex items-center gap-2 mb-6 text-xl font-bold text-emerald-900">
        <TrendingUp className="w-6 h-6" />
        Ưu điểm cho Doanh nghiệp
      </h3>
      <ul className="space-y-4">
        {[
          { title: 'Đồng bộ toàn bộ quá trình', desc: 'Giảm đứt gãy thông tin từ lúc khách thấy Ads đến khi dùng mạng.' },
          { title: 'Tăng tỷ lệ chốt đơn', desc: 'Khách được tư vấn theo nhu cầu thực tế thay vì chỉ nhận bảng giá.' },
          { title: 'Tăng tỷ lệ gia hạn', desc: 'CSKH theo sát giúp duy trì khách cũ và tạo doanh thu dài hạn ổn định.' },
          { title: 'Lan truyền qua giới thiệu', desc: 'Khách hài lòng sẽ giới thiệu cho bạn cùng phòng, đồng nghiệp.' }
        ].map((item, i) => (
          <li key={i} className="flex gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-emerald-900">{item.title}</p>
              <p className="text-sm text-emerald-700">{item.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>

    <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100">
      <h3 className="flex items-center gap-2 mb-6 text-xl font-bold text-blue-900">
        <Target className="w-6 h-6" />
        Mục tiêu vận hành cốt lõi
      </h3>
      <ul className="space-y-4">
        {[
          { title: 'Phản hồi siêu tốc', desc: 'Thiết lập ca trực chat/inbox để không bỏ sót khách hàng cần gấp.' },
          { title: 'Kịch bản tư vấn chuẩn', desc: 'Mẫu hỏi nhu cầu và tư vấn theo từng trường hợp (Mới sang, ở KTX...).' },
          { title: 'Bảng giá & Ưu đãi rõ ràng', desc: 'Tránh gây nhầm lẫn về điều kiện áp dụng hoặc thời gian tặng cước.' },
          { title: 'Hệ thống theo dõi khách', desc: 'Lưu trữ lịch sử gia hạn và chăm sóc để tái khai thác hiệu quả.' }
        ].map((item, i) => (
          <li key={i} className="flex gap-3">
            <div className="w-5 h-5 rounded-full bg-blue-200 flex items-center justify-center shrink-0 mt-0.5">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            </div>
            <div>
              <p className="font-bold text-blue-900">{item.title}</p>
              <p className="text-sm text-blue-700">{item.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

// --- Main App ---

const Sidebar = ({ activeTab, setActiveTab }: { activeTab: TabType, setActiveTab: (t: TabType) => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 'model', label: 'Mô hình Vận hành', icon: <LayoutDashboard className="w-5 h-5" /> },
    { id: 'hr', label: 'Nhân sự & JD', icon: <UserCog className="w-5 h-5" /> },
    { id: 'salary', label: 'Lương & KPI', icon: <Wallet className="w-5 h-5" /> },
  ];

  return (
    <>
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between p-4 bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <Wifi className="w-6 h-6 text-blue-600" />
          <span className="font-bold text-slate-800">Telecom Japan</span>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-slate-600">
          {isOpen ? <X /> : <Menu />}
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
            className="fixed inset-0 bg-slate-900/50 z-40 md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar Content */}
      <motion.aside
        className={`fixed inset-y-0 left-0 w-64 bg-slate-900 text-white z-50 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6">
          <div className="flex items-center gap-3 mb-10">
            <div className="p-2 bg-blue-600 rounded-lg">
              <Wifi className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="font-bold text-lg leading-tight">Telecom</h2>
              <p className="text-xs text-slate-400">Business Model</p>
            </div>
          </div>

          <nav className="space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id as TabType);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  activeTab === item.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20'
                    : 'text-slate-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                {item.icon}
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
            <p className="text-xs text-slate-400 mb-1">Phiên bản</p>
            <p className="text-sm font-bold">v2.0 - Specialized</p>
          </div>
        </div>
      </motion.aside>
    </>
  );
};

const HRTab = () => {
  const [selectedJD, setSelectedJD] = useState<string>('head');

  return (
    <div className="max-w-6xl mx-auto">
      <header className="mb-10">
        <h2 className="text-3xl font-bold text-slate-900">Mô tả công việc (JD)</h2>
        <p className="text-slate-600 mt-2">Chi tiết nhiệm vụ, quyền hạn và KPI cho từng vị trí trong phòng ban.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* JD List */}
        <div className="lg:col-span-1 space-y-2">
          {Object.entries(JD_DATA).map(([id, jd]) => (
            <button
              key={id}
              onClick={() => setSelectedJD(id)}
              className={`w-full text-left px-4 py-3 rounded-xl transition-all ${
                selectedJD === id
                  ? 'bg-white border-2 border-blue-600 shadow-sm text-blue-700 font-bold'
                  : 'bg-transparent border-2 border-transparent text-slate-600 hover:bg-slate-100'
              }`}
            >
              <div className="text-sm">{jd.title}</div>
            </button>
          ))}
        </div>

        {/* JD Detail */}
        <div className="lg:col-span-3">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedJD}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-blue-100 text-blue-600 rounded-2xl">
                  <Briefcase className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">{JD_DATA[selectedJD].title}</h3>
                  <p className="text-slate-500 italic">Mục tiêu: {JD_DATA[selectedJD].objective}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <section>
                    <h4 className="flex items-center gap-2 font-bold text-slate-800 mb-4">
                      <FileText className="w-5 h-5 text-blue-500" />
                      Nhiệm vụ chính
                    </h4>
                    <ul className="space-y-3">
                      {JD_DATA[selectedJD].tasks.map((task, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  {JD_DATA[selectedJD].powers && (
                    <section>
                      <h4 className="flex items-center gap-2 font-bold text-slate-800 mb-4">
                        <Zap className="w-5 h-5 text-amber-500" />
                        Quyền hạn
                      </h4>
                      <ul className="space-y-3">
                        {JD_DATA[selectedJD].powers?.map((power, i) => (
                          <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-2" />
                            <span>{power}</span>
                          </li>
                        ))}
                      </ul>
                    </section>
                  )}
                </div>

                <div className="space-y-6">
                  <section className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <h4 className="flex items-center gap-2 font-bold text-slate-800 mb-4">
                      <Award className="w-5 h-5 text-indigo-500" />
                      Chỉ số đánh giá (KPI)
                    </h4>
                    <div className="grid grid-cols-1 gap-3">
                      {JD_DATA[selectedJD].kpis.map((kpi, i) => (
                        <div key={i} className="px-4 py-3 bg-white rounded-xl border border-slate-200 text-sm font-medium text-slate-700">
                          {kpi}
                        </div>
                      ))}
                    </div>
                  </section>

                  <div className="p-6 bg-blue-600 rounded-2xl text-white">
                    <h4 className="font-bold mb-2">Yêu cầu chung</h4>
                    <p className="text-sm text-blue-100 leading-relaxed">
                      Nắm chắc sản phẩm, phản hồi nhanh, giao tiếp khéo léo và luôn đặt lợi ích kết nối của khách hàng lên hàng đầu.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Staffing Scale Section */}
      <section className="mt-16 p-8 bg-blue-50 border border-blue-100 rounded-3xl">
        <h3 className="text-2xl font-bold text-blue-900 mb-8 flex items-center gap-2">
          <Users className="w-6 h-6" />
          Gợi ý cơ cấu nhân sự theo quy mô
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Quy mô nhỏ',
              staff: ['1 Trưởng phòng', '1 Marketing Ads/Content', '1–2 Sale/Chat tư vấn', '1 CSKH kiêm xử lý đơn']
            },
            {
              title: 'Quy mô vừa',
              staff: ['1 Trưởng phòng', '1 Trưởng nhóm Marketing (1 Ads, 1 Content)', '2–4 Sale/Chat tư vấn', '1 Trưởng nhóm CSKH (1–2 NV)', '1 Xử lý đơn/CRM']
            },
            {
              title: 'Quy mô lớn',
              staff: ['1 Trưởng phòng', '1 Trưởng nhóm MKT (2-3 NV)', '1 Trưởng nhóm Sale (4-8 NV)', '1 Trưởng nhóm CSKH (2-4 NV)', '1 CRM + 1-2 Vận hành đơn']
            }
          ].map((scale, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-blue-100">
              <h4 className="font-bold text-blue-800 mb-4 pb-2 border-b border-blue-50">{scale.title}</h4>
              <ul className="space-y-2">
                {scale.staff.map((s, idx) => (
                  <li key={idx} className="text-sm text-slate-600 flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-blue-400" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const SalaryTab = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <header className="mb-10">
        <h2 className="text-3xl font-bold text-slate-900">Cơ chế Lương & Thưởng</h2>
        <p className="text-slate-600 mt-2">Hệ thống đãi ngộ dựa trên hiệu suất và giá trị đóng góp dài hạn.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="p-8 bg-white border border-slate-200 rounded-3xl shadow-sm">
          <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
            <DollarSign className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold mb-2">Lương Cứng</h3>
          <p className="text-slate-500 text-sm mb-4">Đảm bảo đời sống nhân sự, dựa trên cấp bậc và thâm niên.</p>
          <div className="text-2xl font-bold text-slate-900">15M - 25M <span className="text-sm font-normal text-slate-400">VNĐ</span></div>
        </div>

        <div className="p-8 bg-white border border-slate-200 rounded-3xl shadow-sm">
          <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
            <TrendingUp className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold mb-2">Hoa hồng Sale</h3>
          <p className="text-slate-500 text-sm mb-4">Thưởng trên mỗi đơn hàng SIM/WiFi chốt thành công.</p>
          <div className="text-2xl font-bold text-emerald-600">5% - 15% <span className="text-sm font-normal text-slate-400">Doanh thu</span></div>
        </div>

        <div className="p-8 bg-white border border-slate-200 rounded-3xl shadow-sm">
          <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-6">
            <RefreshCcw className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold mb-2">Thưởng Gia hạn</h3>
          <p className="text-slate-500 text-sm mb-4">Dành cho CSKH khi khách tiếp tục sử dụng dịch vụ.</p>
          <div className="text-2xl font-bold text-indigo-600">10% - 20% <span className="text-sm font-normal text-slate-400">Giá trị gia hạn</span></div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-slate-900 rounded-3xl p-8 text-white">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <PieChart className="w-6 h-6 text-blue-400" />
            Công thức tính thu nhập
          </h3>
          <div className="space-y-6">
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
              <p className="text-blue-400 font-mono text-sm mb-2">THU NHẬP TỔNG =</p>
              <p className="text-lg font-bold">Lương cứng + (Doanh số mới × %HH) + (Doanh số gia hạn × %Thưởng) + Thưởng KPI</p>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              <div className="flex justify-between items-center p-4 border-b border-white/10">
                <span className="text-slate-400">Đạt 80% KPI</span>
                <span className="font-bold">Nhận 100% Lương cứng</span>
              </div>
              <div className="flex justify-between items-center p-4 border-b border-white/10">
                <span className="text-slate-400">Đạt 100% KPI</span>
                <span className="font-bold text-emerald-400">+ Thưởng 2M - 5M</span>
              </div>
              <div className="flex justify-between items-center p-4">
                <span className="text-slate-400">Vượt 120% KPI</span>
                <span className="font-bold text-amber-400">Thưởng nóng + Vinh danh</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-3xl p-8">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-slate-900">
            <BarChart3 className="w-6 h-6 text-blue-600" />
            Trọng số KPI theo bộ phận
          </h3>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-medium text-slate-700">Marketing (Lead & Cost)</span>
                <span className="text-blue-600 font-bold">40%</span>
              </div>
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-blue-600 w-[40%]" />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-medium text-slate-700">Sale (Doanh thu mới)</span>
                <span className="text-emerald-600 font-bold">40%</span>
              </div>
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-600 w-[40%]" />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-medium text-slate-700">CSKH (Tỷ lệ gia hạn)</span>
                <span className="text-rose-600 font-bold">20%</span>
              </div>
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-rose-600 w-[20%]" />
              </div>
            </div>
            <p className="text-xs text-slate-400 mt-4 italic">
              * Trọng số có thể điều chỉnh theo chiến lược từng tháng (Ưu tiên tìm khách mới hay giữ khách cũ).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('model');
  const [activeRole, setActiveRole] = useState<string>('head');

  const currentRole = ROLES.find(r => r.id === activeRole) || ROLES[0];

  const ModelTab = () => (
    <>
      <Header />

      {/* Section 1: Org Chart */}
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Users className="w-6 h-6 text-blue-600" />
          Cơ cấu tổ chức đề xuất
        </h2>
        <p className="text-sm text-slate-500 hidden sm:block">Nhấp vào từng vị trí để xem chi tiết</p>
      </div>
      
      <OrgChart activeRole={activeRole} setActiveRole={setActiveRole} />

      {/* Section 2: Role Details */}
      <AnimatePresence mode="wait">
        <RoleDetailPanel role={currentRole} />
      </AnimatePresence>

      {/* Section 3: Why This Model? */}
      <WhySection />

      {/* Section 4: Process Flow */}
      <ProcessSection />

      {/* Section 5: Value & Goals */}
      <ValueSection />
    </>
  );

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-1 p-4 md:p-12 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === 'model' && <ModelTab />}
              {activeTab === 'hr' && <HRTab />}
              {activeTab === 'salary' && <SalaryTab />}
            </motion.div>
          </AnimatePresence>

          {/* Footer / Call to Action */}
          <footer className="mt-20 py-12 border-t border-slate-200 text-center">
            <div className="p-8 bg-slate-900 rounded-3xl text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Tạo khách – Chốt khách – Giữ khách – Tăng doanh thu</h3>
              <p className="max-w-2xl mx-auto mb-8 opacity-80">
                Mô hình quản trị doanh thu theo vòng đời khách hàng, đặc biệt phù hợp với ngành viễn thông 
                bán theo hình thức quảng cáo – tư vấn – chốt đơn – hỗ trợ sử dụng – gia hạn.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-6 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-lg">
                  Trình ký Đề án
                </button>
                <button className="px-6 py-3 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-colors border border-white/20">
                  Tải Slide Outline
                </button>
              </div>
            </div>
            <p className="mt-8 text-slate-400 text-sm">
              © 2026 Hệ thống Quản trị Doanh nghiệp Online. Thiết kế chuyên biệt cho ngành Viễn thông tại Nhật.
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
}
