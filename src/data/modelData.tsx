import React from 'react';
import { Target, Users, MessageSquare, TrendingUp, Cpu, Briefcase, DollarSign, Megaphone } from 'lucide-react';
import { ProcessStep, Department } from '../types';

export const DEPARTMENTS: Department[] = [
  {
    id: 'sales-mkt',
    title: 'Phòng KD - MKT (Hiệu suất)',
    description: 'Chạy ads chuyển đổi, quản lý khách hàng và tái chốt đơn hiệu quả.',
    icon: <MessageSquare className="w-6 h-6" />,
    color: 'bg-blue-600'
  },
  {
    id: 'comms-dept',
    title: 'Phòng Truyền thông',
    description: 'Xây dựng hình ảnh thương hiệu, Viral content, PR và xử lý khủng hoảng.',
    icon: <Megaphone className="w-6 h-6" />,
    color: 'bg-amber-500'
  },
  {
    id: 'hr-dept',
    title: 'Hành chính – Nhân sự',
    description: 'Tuyển dụng, đào tạo, quản lý văn phòng và văn hóa doanh nghiệp.',
    icon: <Briefcase className="w-6 h-6" />,
    color: 'bg-emerald-500'
  },
  {
    id: 'finance-dept',
    title: 'Tài chính – Kế toán',
    description: 'Quản lý dòng tiền, thu chi, báo cáo tài chính và lương thưởng.',
    icon: <DollarSign className="w-6 h-6" />,
    color: 'bg-rose-500'
  },
  {
    id: 'technical',
    title: 'Kỹ thuật & Hạ tầng',
    description: 'Quản lý hạ tầng mạng, SIM, thiết bị và hỗ trợ kỹ thuật chuyên sâu.',
    icon: <Cpu className="w-6 h-6" />,
    color: 'bg-indigo-500'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 1,
    title: 'Tiếp cận (Marketing)',
    description: 'Chạy quảng cáo, xây dựng nội dung, thu hút khách hàng tiềm năng từ các kênh online.',
    icon: <Target className="w-6 h-6" />
  },
  {
    id: 2,
    title: 'Tư vấn & Chốt đơn (Sale)',
    description: 'Tiếp nhận khách, tư vấn gói cước phù hợp, chốt đơn hàng và xác nhận thanh toán.',
    icon: <MessageSquare className="w-6 h-6" />
  },
  {
    id: 3,
    title: 'Chăm sóc sau bán (CSKH)',
    description: 'Hỗ trợ kỹ thuật, nhắc gia hạn, duy trì mối quan hệ và phát sinh doanh thu tái mua.',
    icon: <Users className="w-6 h-6" />
  },
  {
    id: 4,
    title: 'Phát triển doanh thu',
    description: 'Tối ưu quy trình, nâng cao tỷ lệ gia hạn và khai thác giới thiệu khách mới.',
    icon: <TrendingUp className="w-6 h-6" />
  }
];
