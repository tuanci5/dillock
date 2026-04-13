import {
  Target,
  Users,
  ShoppingBag,
  Video,
  Facebook,
  Layout,
  DollarSign,
  TrendingUp,
  Clock,
  Briefcase,
  ShieldCheck,
  Zap,
  Star,
  MessageSquare,
  Award,
  FileText,
  Megaphone,
  HeartHandshake,
  Image as ImageIcon,
  Layers,
  Globe,
  MapPin,
  Monitor,
  MousePointer2,
  ListRestart,
  Search,
  Camera,
  Sparkles
} from 'lucide-react';
import React from 'react';

export const MARKETING_DATA = {
  brand: {
    name: "Dlock",
    fullName: "Dillock",
    slogan: "Trao chất lượng – Nhận niềm tin",
    secondarySlogan: "Tinh hoa Công nghệ Đức",
    website: "dillock.vn",
    regionalWebsite: "dillock.com",
    positioning: "Đại lý độc quyền Dillock Miền Trung - Giải pháp khoá thông minh toàn quốc",
    experience: "Gần 15 năm kinh nghiệm ngành khoá thông minh",
    owner: "Công ty Cổ phần Công nghệ DILSMART",
    status: "Đại lý Độc quyền Miền Trung (Nghệ An - Đà Nẵng - Huế) & Lắp đặt Toàn quốc"
  },

  research: {
    productCategories: [
      {
        name: "Khoá vân tay thông minh Dillock",
        description: "Tích hợp FaceID, Nhận diện tĩnh mạch lòng bàn tay chuẩn Đức.",
        models: [
          { name: "Dillock DLZ.2.0729 (Premium)", price: "16.490.000 VNĐ", features: ["FaceID", "Palm Vein"] },
          { name: "Dillock DL T8 Pro (Tối ưu CP)", price: "2.490.000 VNĐ", features: ["FPC Fingerprint"] }
        ]
      },
      {
        name: "Khoá phân thể & Tiêu âm Dillock",
        description: "Dòng khoá Dillock êm ái cho cửa nhôm Xingfa và nội thất.",
        models: [
          { name: "Dillock DLH.1.2003 (Tiêu âm)", price: "1.250.000 - 1.500.000 VNĐ", features: ["Thân khoá nam châm"] }
        ]
      },
      {
        name: "Khoá khách sạn & Chống cháy Dillock",
        description: "Tiêu chuẩn quốc tế cho dự án và căn hộ cao cấp.",
        models: [
          { name: "Khóa thẻ từ khách sạn Dillock", price: "Từ 1.200.000 VNĐ", features: ["Quản lý tập trung"] },
          { name: "Khóa chống cháy Dillock EN1634", price: "Liên hệ", features: ["Chống cháy 120p"] }
        ]
      }
    ],
    technologies: [
      { name: "PVD Black Oiled Dillock", desc: "Công nghệ mạ Dillock chống trầy, chống vân tay, độ bền màu vĩnh cửu." },
      { name: "Palm Vein Recognition Dillock", desc: "Nhận diện tĩnh mạch lòng bàn tay Dillock - bảo mật sinh trắc học cao nhất." },
      { name: "MOSS Password Dillock", desc: "Mã số ảo Dillock chống nhìn trộm và chuẩn mã hoá quân đội." },
      { name: "Thân khoá Tiêu âm Dillock", desc: "Nam châm tích hợp Dillock giúp loại bỏ âm thanh cơ học." }
    ],
    brandAdvantages: [
      "Đại lý Độc quyền trọng điểm: Nghệ An, Đà Nẵng, Huế, Nha Trang...",
      "Đội ngũ kỹ thuật lắp đặt tận nơi toàn quốc (Hà Nội, TP.HCM và các tỉnh lẻ)",
      "Bảo hành chính hãng 24/7 trực tiếp tại các chi nhánh Miền Trung",
      "Vật liệu Dillock cao cấp SUS 304 & Nhôm hàng không"
    ],
    marketResearch: {
      keywords: [
        { term: "Khóa cửa thông minh", competition: "Rất cao", topSites: ["smarttech247.vn", "vinlock.com.vn", "kaadasvietnam.com.vn"] },
        { term: "Khóa cửa vân tay", competition: "Cao", topSites: ["kitos.com.vn", "beelock.vn", "vuhoangtelecom.vn"] },
        { term: "Khóa cửa nhôm Xingfa", competition: "Trung bình", topSites: ["onelock.vn", "khoacuahomekit.com", "dillock.vn"] },
        { term: "Khóa cửa gỗ", competition: "Trung bình", topSites: ["vietwood.vn", "khoahuyhoang.com"] },
        { term: "Khóa khách sạn thẻ từ", competition: "Thấp - B2B", topSites: ["adelgroup.vn", "lionlock.vn", "dillock.vn"] },
        { term: "Khóa cổng ngoài trời", competition: "Cao", topSites: ["onelock.vn", "khoa-s.com"] },
        { term: "Khóa cửa kính cường lực", competition: "Trung bình", topSites: ["beetechgroup.com", "kinggia.com"] },
        { term: "Khóa Face ID", competition: "Cao - Xu hướng", topSites: ["kaadasvietnam.com.vn", "philips-smartlock.vn", "dillock.vn"] },
        { term: "Hệ thống kiểm soát cửa", competition: "Trung bình - B2B", topSites: ["soeco.com.vn", "buigiatech.com"] },
        { term: "Khóa cửa Wifi / App", competition: "Rất cao", topSites: ["gucongnghe.com", "ihomes.vn"] }
      ],
      competitors: [
        {
          brand: "Kaadas",
          origin: "Đức",
          positioning: "Premium - Thiết kế Lamborghini",
          usp: "Cảm biến vân tay FPC Thụy Điển, nhận diện 3D Face siêu nhanh.",
          priceRange: "4M - 20M+ VNĐ",
          marketShare: "Top 1 Phân khúc Cao cấp",
          weakness: "Giá thành cao, kén cửa mỏng"
        },
        {
          brand: "Philips",
          origin: "Hà Lan",
          positioning: "Premium - Tin cậy Toàn cầu",
          usp: "Thiết kế Ergonomic, đèn báo trạng thái 'Smile', App cực kỳ ổn định.",
          priceRange: "6M - 25M+ VNĐ",
          marketShare: "Top 2 Phân khúc Cao cấp",
          weakness: "Mẫu mã ít thay đổi, phụ kiện thay thế đắt"
        }
      ],
      dillockAdvantages: [
        { title: "Độc quyền Miền Trung", desc: "Lợi thế dịch vụ tại chỗ, bảo hành trong 2h tại Nghệ An/Đà Nẵng." },
        { title: "Chuyên biệt Cửa nhôm", desc: "Dòng khóa Dillock có đố cửa hẹp cực kỳ đa dạng cho hệ Xingfa." },
        { title: "Công nghệ Tĩnh mạch", desc: "Bảo mật cao hơn vân tay, không lo mòn vân tay khi sử dụng lâu dài." }
      ],
      comparisonTable: [
        { feature: "Thương hiệu", dillock: "Đức/VN - Mới, đang phát triển", kaadas: "Đức - Lâu đời, phổ biến", philips: "Hà Lan - Global, uy tín rất cao" },
        { feature: "Công nghệ chính", dillock: "Tĩnh mạch (Palm Vein), FaceID 3D", kaadas: "Vân tay FPC Thụy Điển", philips: "FaceID, Cảm biến hồng ngoại" },
        { feature: "Phân khúc giá", dillock: "Tầm trung - Cạnh tranh cực mạnh", kaadas: "Trung bình - Cao", philips: "Cao - Rất cao" },
        { feature: "Thế mạnh", dillock: "Chuyên cửa nhôm, hỗ trợ tại chỗ 24/7", kaadas: "Thiết kế sang trọng, mẫu mã đa dạng", philips: "Độ bền tuyệt đối, App ổn định nhất" },
        { feature: "Ưu điểm Dillock", dillock: "Giá tốt hơn 30-50% cùng tính năng", kaadas: "Lợi thế thương hiệu lâu đời hơn", philips: "Phân khúc khách hàng siêu giàu" },
        { feature: "Nhược điểm", dillock: "Độ nhận diện thương hiệu chưa cao", kaadas: "Giá linh kiện thay thế đắt", philips: "Kén cửa, kén đại lý lắp đặt" }
      ]
    }
  },

  goals: [
    {
      phase: "Giai đoạn 1: Xây nền Dillock",
      tasks: [
        "Ra mắt Website dillock.com - Hub thông tin bán hàng Nghệ An & Miền Trung",
        "Xây dựng thư viện nội dung Technical Dillock (PVD, Palm Vein)",
        "Setup Gian hàng Dillock Mall trên Shopee & TikTok Shop",
        "Khẳng định vị thế Độc quyền Nghệ An - Miền Trung"
      ]
    },
    {
      phase: "Giai đoạn 2: Launching Dillock",
      tasks: [
        "Campaign SEO: 'Khóa thông minh Nghệ An', 'Khóa điện tử Đà Nẵng'",
        "Mở rộng dịch vụ lắp đặt nhanh tại Hà Nội & TP.HCM cho khách lẻ",
        "Ads chuyển đổi tập trung khu vực Vinh - Nghệ An & Đà Nẵng"
      ]
    },
    {
      phase: "Giai đoạn 3: Scale-up Dillock",
      tasks: [
        "Mở rộng mạng lưới cộng tác viên Dillock trên toàn quốc",
        "Tiếp cận thị trường dự án Nghệ An & Miền Trung (Hotels & Resorts)",
        "Tối ưu tỉ lệ bảo trì Dillock và up-sell khách hàng cũ"
      ]
    }
  ],

  personas: [
    {
      title: "Chủ nhà Nghệ An & Miền Trung",
      age: "28–45",
      concerns: ["Đơn vị chính hãng tại Vinh", "Lắp đặt nhanh khu vực Nghệ An", "Support 24/7 địa phương"]
    },
    {
      title: "Khách lẻ Bắc/Nam",
      age: "30–50",
      concerns: ["Tin tưởng Đại lý Độc quyền", "Hỗ trợ lắp đặt tận nơi mặc dù ở xa", "Giá trị thương hiệu"]
    },
    {
      title: "Chủ đầu tư / Resorts",
      age: "Tất cả",
      concerns: ["Quản lý Dillock tập trung", "Tiêu chuẩn Dillock EN1634", "Bảo trì dự án dài hạn"]
    }
  ],

  channels: [
    { id: "website", name: "dillock.com", icon: "Globe", role: "Cửa hàng online & Hub bán hàng Miền Trung", kpi: "10k+ visits/tháng" },
    { id: "fb", name: "Facebook Dillock", icon: "Facebook", role: "Tư vấn & Kéo Lead toàn quốc", kpi: "5k followers, 1k+ tương tác" },
    { id: "tiktok", name: "TikTok Dillock", icon: "Video", role: "Short-video Viral & Review", kpi: "100k views/tháng" },
    { id: "shopee", name: "Shopee & TMĐT", icon: "ShoppingBag", role: "Kênh bán lẻ & Traffic ngoại", kpi: "100+ đơn/tháng, 4.9/5 stars" },
    { id: "gmap", name: "Google Map Dillock", icon: "MapPin", role: "SEO Local & Uy tín tại Vinh/Đà Nẵng", kpi: "50+ reviews/tháng, Top 3 Local" }
  ],

  websiteStrategy: {
    domain: "dillock.com",
    brandTitle: "Dillock Nghệ An - Miền Trung | Độc quyền & Lắp đặt Toàn quốc",
    sections: [
      {
        title: "Cấu trúc Website Bán hàng",
        items: [
          "Trang chủ: Headline khẳng định vị thế Độc quyền Nghệ An & Miền Trung",
          "Cửa hàng: Phân cấp theo dòng máy (Smart, Phân thể, Dự án)",
          "Dịch vụ: Hotline 2h tại Vinh & Đà Nẵng và Lắp đặt Toàn quốc",
          "Dự án: Hình ảnh công trình thực tế tại Nghệ An/Đà Nẵng/Hà Nội/HCM",
          "Bảo hành: Kích hoạt bảo hành điện tử Dillock Online"
        ]
      },
      {
        title: "Chiến lược SEO & Traffic",
        items: [
          "Từ khóa Top 1: 'Khóa cửa vân tay Nghệ An', 'Khóa thông minh Vinh'",
          "Từ khóa khu vực: 'Khóa điện tử Đà Nẵng', 'Dillock Miền Trung'",
          "Blog: Tư vấn lắp đặt khóa cho cửa gỗ & nhôm tại Nghệ An",
          "Review: Đánh giá khách hàng lắp khóa Dillock tại TP. Vinh"
        ]
      }
    ]
  },

  contentStrategy: {
    pillars: [
      { label: "Bán lẻ Dillock trực tiếp", value: 40, color: "bg-amber-500", desc: "Tập trung chuyển đổi đơn hàng Dillock" },
      { label: "Giáo dục thị trường Dillock", value: 25, color: "bg-blue-500", desc: "Xây dựng nhận thức công nghệ Dillock" },
      { label: "Uy tín thương hiệu Dillock", value: 20, color: "bg-emerald-500", desc: "Chứng minh chất lượng Dillock Đức" },
      { label: "Case thực tế Dillock", value: 15, color: "bg-indigo-500", desc: "Minh chứng khách hàng Dillock thực tế" }
    ],
    groups: [
      {
        id: "A",
        title: "Nội dung bán hàng Dillock",
        items: ["Khoá Dillock phù hợp cửa nào?", "Mức giá khoá Dillock?", "Tặng quà mua khoá Dillock?", "Dịch vụ lắp đặt toàn quốc?", "Hướng dẫn đặt mua khoá Dillock"]
      },
      {
        id: "B",
        title: "Giáo dục thị trường Dillock",
        items: ["Khoá phân thể Dillock là gì?", "Khoá tiêu âm khác gì khoá thường?", "Vì sao dùng khoá vân tay Dillock?", "Chọn khoá Dillock cho cửa Xingfa", "Nhà trẻ nhỏ nên chọn khoá Dillock nào?"]
      },
      {
        id: "C",
        title: "Uy tín thương hiệu Dillock",
        items: ["Hình ảnh Dillock tại Vietbuild", "Hậu trường kho và lắp đặt Dillock", "Chứng nhận xuất xứ Dillock", "Dillock - Độc quyền Miền Trung", "Quy trình bảo hành điện tử Dillock"]
      },
      {
        id: "D",
        title: "Nội dung chuyển đổi Dillock",
        items: ["Feedback từ khách hàng Dillock", "Trước/Sau lắp đặt khoá Dillock", "Video test hỏa hoạn/biển mặn Dillock", "Kỹ thuật viên Dillock tư vấn tận nơi", "So sánh tính năng khoá Dillock"]
      }
    ],
    facebookCalendar: [
      {
        week: 1, goal: "Nhận diện & Giáo dục công nghệ Dillock",
        days: [
          { day: "Thứ 2", title: "Dillock Nghệ An - Miền Trung - Tinh hoa Đức phục vụ Toàn Quốc", format: "Hình ảnh Brand", type: "Uy tín" },
          { day: "Thứ 3", title: "Dillock TP. Vinh: Lắp đặt siêu hành 2h cho khách nội thành", format: "Carousel", type: "Bán lẻ" },
          { day: "Thứ 4", title: "Khóa Dillock tại Nghệ An? Đơn vị độc quyền đã có mặt!", format: "Video Team", type: "Uy tín" },
          { day: "Thứ 5", title: "Top 3 mẫu khóa Dillock tốt nhất cho nhà phố Nghệ An", format: "Album ảnh", type: "Bán lẻ" },
          { day: "Thứ 6", title: "Dillock Vietbuild: Đón khách Nghệ An ghé gian hàng", format: "Video Sự kiện", type: "Uy tín" },
          { day: "Thứ 7", title: "Feedback khách hàng Nghệ An review lắp khoá Dillock", format: "Video thực thực tế", type: "Feedback" },
          { day: "Chủ nhật", title: "Chốt đơn Dillock - Miễn phí lắp đặt tại Nghệ An & Toàn quốc", format: "Banner Sales", type: "Bán lẻ" }
        ]
      }
    ]
  },

  costs: {
    setup: [
      { name: "dillock.com - Cổng thông tin Nghệ An & Miền Trung", price: "20 triệu - 35 triệu" },
      { name: "Sản xuất Nội dung Khu vực (Trọng tâm Nghệ An)", price: "15 triệu - 30 triệu" },
      { name: "Quảng cáo Digital Hàng tháng (Phủ sóng toàn quốc)", price: "15 triệu - 50 triệu" }
    ],
    operation: [
      { name: "Quản trị Web & SEO Dillock (Key: Nghệ An, Vinh)", price: "10 triệu - 15 triệu/tháng" },
      { name: "Fanpage & Hỗ trợ Kỹ thuật Toàn quốc", price: "8 triệu - 12 triệu/tháng" },
      { name: "Logistics & Lắp đặt khu vực Nghệ An", price: "Thỏa thuận" }
    ],
    services: [
      {
        category: "Website & Trung tâm Kỹ thuật số",
        items: [
          { name: "Thiết kế Landing Page Dillock", price: "5.000.000 - 15.000.000 VNĐ", unit: "Dự án", icon: "Globe" },
          { name: "SEO Tổng thể (Key: Nghệ An/Đà Nẵng)", price: "10.000.000 - 20.000.000 VNĐ", unit: "Tháng", icon: "Search" },
          { name: "Quản trị & Bảo trì Website", price: "3.000.000 VNĐ", unit: "Tháng", icon: "Monitor" }
        ]
      },
      {
        category: "Nội dung & Sáng tạo nội dung",
        items: [
          { name: "Quản lý Fanpage (15 bài + Design)", price: "6.000.000 - 10.000.000 VNĐ", unit: "Tháng", icon: "Facebook" },
          { name: "Video Review Khoá (TikTok/Reels)", price: "2.000.000 - 5.000.000 VNĐ", unit: "Video", icon: "Video" },
          { name: "Chụp ảnh Sản phẩm & Showroom", price: "5.000.000 VNĐ", unit: "Buổi", icon: "Camera" }
        ]
      },
      {
        category: "Quản trị Quảng cáo (Ads Management)",
        items: [
          { name: "Phí quản lý Ads (Facebook/Google)", price: "15% - 20%", unit: "Ngân sách", icon: "TrendingUp" },
          { name: "Setup Phễu & Tài khoản Doanh nghiệp", price: "5.000.000 VNĐ", unit: "Một lần", icon: "Zap" },
          { name: "Thiết kế Banner Quảng cáo", price: "500.000 VNĐ", unit: "Banner", icon: "Image" }
        ]
      },
      {
        category: "Thương mại điện tử & Hệ thống",
        items: [
          { name: "Vận hành Shopee/TikTok Shop", price: "5.000.000 - 8.000.000 VNĐ", unit: "Tháng", icon: "ShoppingBag" },
          { name: "Tối ưu hóa Gian hàng/Mall", price: "3.000.000 VNĐ", unit: "Dự án", icon: "Sparkles" }
        ]
      }
    ],
    // Bảng tổng hợp chi phí dạng sheet
    oneTime: [
      { stt: 1, type: 'brand', category: "Website & Hệ thống", item: "Thiết kế & Dev Website dillock.com", unit: "Dự án", min: 20, max: 35, note: "Bao gồm domain, hosting 1 năm, thiết kế UI/UX" },
      { stt: 2, type: 'sales', category: "Website & Hệ thống", item: "Tối ưu hóa Gian hàng Shopee/TikTok Mall", unit: "Dự án", min: 3, max: 5, note: "Setup ban đầu, trang trí gian hàng, template" },
      { stt: 3, type: 'sales', category: "Website & Hệ thống", item: "Setup Phễu & Tài khoản Quảng cáo DN", unit: "Dự án", min: 5, max: 8, note: "Facebook Business, Google Ads account, pixel" },
      { stt: 4, type: 'brand', category: "Nội dung & Sản xuất", item: "Bộ ảnh Sản phẩm & Showroom chuyên nghiệp", unit: "Buổi", min: 5, max: 10, note: "3–5 buổi chụp đầy đủ dòng sản phẩm Dillock" },
      { stt: 5, type: 'brand', category: "Quảng cáo & Launch", item: "Chi phí Ads Launch (3 tháng đầu - giai đoạn khai trương)", unit: "Gói", min: 30, max: 60, note: "Facebook Ads + Google Ads giai đoạn nhận diện" },
    ],
    monthly: [
      { stt: 1, type: 'brand', category: "SEO & Web", item: "Quản trị & Bảo trì Website dillock.com", unit: "Tháng", min: 3, max: 5, note: "Cập nhật nội dung, bảo mật, tốc độ tải trang" },
      { stt: 2, type: 'brand', category: "SEO & Web", item: "SEO Tổng thể – Từ khóa Nghệ An, Đà Nẵng, Vinh", unit: "Tháng", min: 10, max: 20, note: "Bao gồm bài chuẩn SEO, backlink, báo cáo ranking" },
      { stt: 3, type: 'brand', category: "Nội dung & MXH", item: "Quản lý Fanpage Facebook (30 bài/tháng + Design)", unit: "Tháng", min: 6, max: 10, note: "Lên kế hoạch, thiết kế, đăng bài, reply comment" },
      { stt: 4, type: 'brand', category: "Nội dung & MXH", item: "Sản xuất Video TikTok / Reels (4–8 video/tháng)", unit: "Tháng", min: 8, max: 20, note: "Kịch bản, quay, dựng, đăng, tối ưu hashtag" },
      { stt: 5, type: 'sales', category: "Quảng cáo", item: "Ngân sách Quảng cáo Facebook Ads", unit: "Tháng", min: 10, max: 30, note: "Tùy theo mùa & chiến dịch, không bao gồm phí quản lý" },
      { stt: 6, type: 'sales', category: "Quảng cáo", item: "Ngân sách Google Ads (Search & Display)", unit: "Tháng", min: 5, max: 15, note: "Từ khóa cạnh tranh khu vực Nghệ An, Đà Nẵng" },
      { stt: 7, type: 'sales', category: "Quảng cáo", item: "Phí quản lý Ads (15–20% ngân sách)", unit: "Tháng", min: 3, max: 9, note: "Tính trên tổng ngân sách chạy quảng cáo thực tế" },
      { stt: 8, type: 'sales', category: "TMĐT & Vận hành", item: "Vận hành Shopee Mall / TikTok Shop", unit: "Tháng", min: 5, max: 8, note: "Đăng sản phẩm, chạy Flash Sale, xử lý đơn hàng" },
    ]
  }
};
