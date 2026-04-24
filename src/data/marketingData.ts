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
  Sparkles,
  Youtube
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
        "Tổ chức Workshop kỹ thuật & Tuyển dụng Đại lý khu vực",
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
    },
    {
      title: "Đại lý / Nhà phân phối (B2B)",
      age: "30–50",
      concerns: ["Chính sách chiết khấu & Thưởng", "Đào tạo kỹ thuật & Marketing", "Độc quyền khu vực"]
    }
  ],

  channels: [
    { id: "website", name: "dillock.com", icon: "Globe", role: "Cửa hàng online & Hub bán hàng Miền Trung", kpi: "10k+ visits/tháng" },
    { id: "fb", name: "Facebook Dillock", icon: "Facebook", role: "Tư vấn & Kéo Lead toàn quốc", kpi: "5k followers, 1k+ tương tác" },
    { id: "tiktok", name: "TikTok Dillock", icon: "Video", role: "Short-video Viral & Review", kpi: "100k views/tháng" },
    { id: "youtube", name: "Youtube Dillock", icon: "Youtube", role: "Video Review & Hướng dẫn kỹ thuật", kpi: "20k+ views/tháng, 1k+ subscribers" },
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
    ],
    seoKeywords: [
      { keyword: "Khóa cửa thông minh", volume: "15,000", difficulty: "Rất Cao", intent: "Thông tin" },
      { keyword: "Khóa cửa vân tay", volume: "12,500", difficulty: "Cao", intent: "Mua hàng" },
      { keyword: "Khóa điện tử", volume: "9,800", difficulty: "Cao", intent: "Mua hàng" },
      { keyword: "Khóa cửa nhôm Xingfa", volume: "8,500", difficulty: "Trung bình", intent: "Mua hàng" },
      { keyword: "Khóa cửa gỗ thông minh", volume: "6,200", difficulty: "Trung bình", intent: "Mua hàng" },
      { keyword: "Khóa cửa kính cường lực", volume: "5,400", difficulty: "Trung bình", intent: "Mua hàng" },
      { keyword: "Khóa vân tay Hà Nội", volume: "4,500", difficulty: "Cao", intent: "Mua hàng" },
      { keyword: "Khóa cửa thông minh TP.HCM", volume: "4,800", difficulty: "Cao", intent: "Mua hàng" },
      { keyword: "Lắp đặt khóa cửa vân tay", volume: "3,200", difficulty: "Cao", intent: "Dịch vụ" },
      { keyword: "Khóa Dillock chính hãng", volume: "2,500", difficulty: "Thấp", intent: "Thương hiệu" },
      { keyword: "Giá khóa cửa vân tay", volume: "7,800", difficulty: "Cao", intent: "Thông tin" },
      { keyword: "Khóa thẻ từ khách sạn", volume: "3,900", difficulty: "Trung bình", intent: "B2B" },
      { keyword: "Hệ thống khóa khách sạn", volume: "2,100", difficulty: "Thấp", intent: "B2B" },
      { keyword: "Khóa cửa nhận diện khuôn mặt", volume: "2,800", difficulty: "Trung bình", intent: "Mua hàng" },
      { keyword: "Khóa Dillock DLZ.2.0729", volume: "1,200", difficulty: "Thấp", intent: "Thương hiệu" },
      { keyword: "Khóa Dillock DL T8 Pro", volume: "1,500", difficulty: "Thấp", intent: "Thương hiệu" },
      { keyword: "Khóa cửa thông minh giá rẻ", volume: "6,500", difficulty: "Rất Cao", intent: "Mua hàng" },
      { keyword: "Đại lý khóa Dillock toàn quốc", volume: "1,800", difficulty: "Thấp", intent: "Thương hiệu" },
      { keyword: "Khóa cửa thông minh Đức", volume: "2,200", difficulty: "Trung bình", intent: "Mua hàng" },
      { keyword: "Công nghệ khóa tĩnh mạch", volume: "950", difficulty: "Thấp", intent: "Thông tin" },
      { keyword: "Khóa vân tay Đà Nẵng", volume: "2,100", difficulty: "Trung bình", intent: "Mua hàng" },
      { keyword: "Khóa điện tử Hải Phòng", volume: "1,800", difficulty: "Trung bình", intent: "Mua hàng" },
      { keyword: "Lắp khóa cửa vân tay tại nhà", volume: "2,400", difficulty: "Cao", intent: "Dịch vụ" },
      { keyword: "Khóa cửa thông minh Bình Dương", volume: "1,900", difficulty: "Trung bình", intent: "Mua hàng" },
      { keyword: "Khóa vân tay Cần Thơ", volume: "1,500", difficulty: "Trung bình", intent: "Mua hàng" },
      { keyword: "Khóa điện tử Đồng Nai", volume: "1,600", difficulty: "Trung bình", intent: "Mua hàng" },
      { keyword: "Khóa cửa thông minh Nha Trang", volume: "1,200", difficulty: "Trung bình", intent: "Mua hàng" },
      { keyword: "Khóa vân tay Vinh Nghệ An", volume: "1,800", difficulty: "Trung bình", intent: "Mua hàng" },
      { keyword: "Khóa điện tử Quảng Ninh", volume: "1,400", difficulty: "Thấp", intent: "Mua hàng" },
      { keyword: "Khóa cửa thông minh Bắc Ninh", volume: "1,300", difficulty: "Thấp", intent: "Mua hàng" },
      { keyword: "Khóa vân tay Vũng Tàu", volume: "1,100", difficulty: "Thấp", intent: "Mua hàng" },
      { keyword: "Khóa điện tử Thanh Hóa", volume: "1,200", difficulty: "Thấp", intent: "Mua hàng" },
      { keyword: "Khóa cửa thông minh Thái Nguyên", volume: "900", difficulty: "Thấp", intent: "Mua hàng" },
      { keyword: "Khóa vân tay Nam Định", volume: "850", difficulty: "Thấp", intent: "Mua hàng" },
      { keyword: "Khóa điện tử Huế", volume: "1,000", difficulty: "Thấp", intent: "Mua hàng" },
      { keyword: "Khóa cửa thông minh Lào Cai", volume: "700", difficulty: "Thấp", intent: "Mua hàng" },
      { keyword: "Khóa vân tay Phú Quốc", volume: "1,200", difficulty: "Trung bình", intent: "B2B" },
      { keyword: "Khóa điện tử Buôn Ma Thuột", volume: "800", difficulty: "Thấp", intent: "Mua hàng" },
      { keyword: "Khóa cửa thông minh Quy Nhơn", volume: "950", difficulty: "Thấp", intent: "Mua hàng" },
      { keyword: "Khóa vân tay Việt Trì", volume: "750", difficulty: "Thấp", intent: "Mua hàng" },
      { keyword: "Khóa điện tử Thái Bình", volume: "800", difficulty: "Thấp", intent: "Mua hàng" },
      { keyword: "Khóa cửa thông minh Long An", volume: "1,100", difficulty: "Thấp", intent: "Mua hàng" },
      { keyword: "Khóa vân tay Tiền Giang", volume: "900", difficulty: "Thấp", intent: "Mua hàng" },
      { keyword: "Khóa điện tử An Giang", volume: "850", difficulty: "Thấp", intent: "Mua hàng" },
      { keyword: "Khóa cửa thông minh Kiên Giang", volume: "1,000", difficulty: "Thấp", intent: "Mua hàng" },
      { keyword: "Khóa vân tay Cà Mau", volume: "700", difficulty: "Thấp", intent: "Mua hàng" },
      { keyword: "Khóa điện tử Sóc Trăng", volume: "600", difficulty: "Thấp", intent: "Mua hàng" },
      { keyword: "Khóa cửa thông minh Trà Vinh", volume: "550", difficulty: "Thấp", intent: "Mua hàng" },
      { keyword: "Khóa vân tay Bến Tre", volume: "650", difficulty: "Thấp", intent: "Mua hàng" },
      { keyword: "Khóa điện tử Vĩnh Long", volume: "700", difficulty: "Thấp", intent: "Mua hàng" },
      { keyword: "Khóa cửa thông minh Hậu Giang", volume: "500", difficulty: "Thấp", intent: "Mua hàng" },
      { keyword: "Khóa vân tay Tây Ninh", volume: "800", difficulty: "Thấp", intent: "Mua hàng" },
      { keyword: "Khóa điện tử Bình Phước", volume: "750", difficulty: "Thấp", intent: "Mua hàng" },
      { keyword: "Khóa cửa thông minh Lâm Đồng", volume: "1,100", difficulty: "Trung bình", intent: "B2B" },
      { keyword: "Khóa vân tay Kon Tum", volume: "500", difficulty: "Thấp", intent: "Mua hàng" },
      { keyword: "Khóa điện tử Gia Lai", volume: "700", difficulty: "Thấp", intent: "Mua hàng" },
      { keyword: "Khóa cửa thông minh Đắk Nông", volume: "450", difficulty: "Thấp", intent: "Mua hàng" },
      { keyword: "Khóa vân tay Đắk Lắk", volume: "900", difficulty: "Thấp", intent: "Mua hàng" },
      { keyword: "Khóa điện tử Ninh Thuận", volume: "550", difficulty: "Thấp", intent: "Mua hàng" },
      { keyword: "Khóa cửa thông minh Bình Thuận", volume: "850", difficulty: "Thấp", intent: "Mua hàng" },
      { keyword: "Khóa vân tay Khánh Hòa", volume: "1,300", difficulty: "Trung bình", intent: "B2B" },
      { keyword: "Khóa điện tử Phú Yên", volume: "650", difficulty: "Thấp", intent: "Mua hàng" },
      { keyword: "Khóa cửa thông minh Quảng Ngãi", volume: "800", difficulty: "Thấp", intent: "Mua hàng" },
      { keyword: "Khóa vân tay Quảng Nam", volume: "950", difficulty: "Thấp", intent: "Mua hàng" },
      { keyword: "Khóa điện tử Quảng Trị", volume: "600", difficulty: "Thấp", intent: "Mua hàng" },
      { keyword: "Khóa cửa thông minh Quảng Bình", volume: "750", difficulty: "Thấp", intent: "Mua hàng" },
      { keyword: "Khóa vân tay Hà Tĩnh", volume: "1,100", difficulty: "Thấp", intent: "Mua hàng" },
      { keyword: "Khóa điện tử Ninh Bình", volume: "850", difficulty: "Thấp", intent: "Mua hàng" },
      { keyword: "Khóa cửa thông minh Hà Nam", volume: "700", difficulty: "Thấp", intent: "Mua hàng" },
      { keyword: "Khóa vân tay Hưng Yên", volume: "950", difficulty: "Thấp", intent: "Mua hàng" },
      { keyword: "Khóa điện tử Hải Dương", volume: "1,100", difficulty: "Thấp", intent: "Mua hàng" },
      { keyword: "Khóa cửa thông minh Vĩnh Phúc", volume: "1,000", difficulty: "Thấp", intent: "Mua hàng" },
      { keyword: "Khóa vân tay Phú Thọ", volume: "800", difficulty: "Thấp", intent: "Mua hàng" },
      { keyword: "Khóa điện tử Tuyên Quang", volume: "550", difficulty: "Thấp", intent: "Mua hàng" },
      { keyword: "Khóa cửa thông minh Yên Bái", volume: "500", difficulty: "Thấp", intent: "Mua hàng" },
      { keyword: "Khóa vân tay Hòa Bình", volume: "650", difficulty: "Thấp", intent: "Mua hàng" },
      { keyword: "Khóa điện tử Sơn La", volume: "600", difficulty: "Thấp", intent: "Mua hàng" },
      { keyword: "Khóa cửa thông minh Điện Biên", volume: "450", difficulty: "Thấp", intent: "Mua hàng" },
      { keyword: "Khóa vân tay Lai Châu", volume: "400", difficulty: "Thấp", intent: "Mua hàng" },
      { keyword: "Khóa điện tử Cao Bằng", volume: "500", difficulty: "Thấp", intent: "Mua hàng" },
      { keyword: "Khóa cửa thông minh Bắc Kạn", volume: "400", difficulty: "Thấp", intent: "Mua hàng" },
      { keyword: "Khóa vân tay Lạng Sơn", volume: "850", difficulty: "Thấp", intent: "Mua hàng" },
      { keyword: "Khóa điện tử Hà Giang", volume: "450", difficulty: "Thấp", intent: "Mua hàng" },
      { keyword: "Khóa cửa cổng ngoài trời", volume: "3,500", difficulty: "Cao", intent: "Mua hàng" },
      { keyword: "Khóa vân tay cửa nhôm", volume: "4,200", difficulty: "Trung bình", intent: "Mua hàng" },
      { keyword: "Khóa điện tử Face ID", volume: "1,800", difficulty: "Trung bình", intent: "Thông tin" },
      { keyword: "Khóa chống cháy Dillock", volume: "1,100", difficulty: "Thấp", intent: "B2B" },
      { keyword: "Lắp khóa cửa thông minh chung cư", volume: "2,800", difficulty: "Cao", intent: "Dịch vụ" },
      { keyword: "Thay khóa cửa vân tay", volume: "1,500", difficulty: "Trung bình", intent: "Dịch vụ" },
      { keyword: "Khóa cửa thông minh wifi", volume: "3,200", difficulty: "Cao", intent: "Thông tin" },
      { keyword: "Khóa vân tay điều khiển từ xa", volume: "1,900", difficulty: "Trung bình", intent: "Mua hàng" },
      { keyword: "Review khóa cửa Dillock", volume: "1,200", difficulty: "Thấp", intent: "Thông tin" },
      { keyword: "So sánh khóa Dillock và Kaadas", volume: "850", difficulty: "Thấp", intent: "Thông tin" },
      { keyword: "Hướng dẫn cài đặt khóa Dillock", volume: "2,100", difficulty: "Thấp", intent: "Hỗ trợ" },
      { keyword: "Sửa khóa điện tử tại nhà", volume: "1,700", difficulty: "Cao", intent: "Dịch vụ" },
      { keyword: "Bảo trì khóa cửa thông minh", volume: "900", difficulty: "Thấp", intent: "Dịch vụ" },
      { keyword: "Phụ kiện khóa Dillock", volume: "600", difficulty: "Thấp", intent: "Phụ kiện" },
      { keyword: "Pin khóa cửa thông minh", volume: "2,500", difficulty: "Thấp", intent: "Phụ kiện" },
      { keyword: "Khóa cửa thông minh cho biệt thự", volume: "1,400", difficulty: "Trung bình", intent: "B2B" },
      { keyword: "Hệ thống kiểm soát cửa ra vào", volume: "2,800", difficulty: "Trung bình", intent: "B2B" }
    ],
    adsKeywords: [
      { keyword: "Mua khóa vân tay Dillock", cpc: "8,500đ", matchType: "Cụm từ", group: "Bán lẻ" },
      { keyword: "Khóa cửa thông minh giá rẻ", cpc: "5,000đ", matchType: "Mở rộng", group: "Giá rẻ" },
      { keyword: "Lắp đặt khóa cửa tại Vinh", cpc: "12,000đ", matchType: "Chính xác", group: "Dịch vụ" },
      { keyword: "Khóa thẻ từ khách sạn", cpc: "15,000đ", matchType: "Cụm từ", group: "B2B / Dự án" },
      { keyword: "Dillock Việt Nam", cpc: "3,000đ", matchType: "Mở rộng", group: "Thương hiệu" },
      { keyword: "Khóa cửa nhận diện khuôn mặt", cpc: "10,500đ", matchType: "Cụm từ", group: "Cao cấp" }
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
      },
      {
        id: "E",
        title: "Phát triển Đại lý & B2B",
        items: ["Chính sách đại lý Dillock", "Quyền lợi khi làm đối tác", "Hệ thống hỗ trợ kỹ thuật 24/7", "Câu chuyện thành công của đại lý", "Quy trình đăng ký đối tác"]
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
      { name: "dillock.com - Cổng thông tin & Hub bán hàng Toàn quốc", price: "35 triệu - 50 triệu" },
      { name: "Sản xuất Nội dung Hệ thống (100+ bài chuẩn SEO)", price: "30 triệu - 45 triệu" },
      { name: "Quảng cáo Digital Launching (Phủ sóng 63 tỉnh thành)", price: "50 triệu - 100 triệu" }
    ],
    operation: [
      { name: "Quản trị Web & SEO Tổng thể (100 Keywords Toàn quốc)", price: "25 triệu - 45 triệu/tháng" },
      { name: "Hệ thống Fanpage vệ tinh & Support Đại lý", price: "5 triệu/đại lý/tháng" },
      { name: "Logistics & Vận hành Kỹ thuật Toàn quốc", price: "Thỏa thuận" }
    ],
    services: [
      {
        category: "Website & Trung tâm Kỹ thuật số",
        items: [
          { name: "Thiết kế Hub Website Dillock Toàn quốc", price: "35.000.000 - 50.000.000 VNĐ", unit: "Dự án", icon: "Globe" },
          { name: "SEO Tổng thể (Chiến dịch 100 Keywords)", price: "25.000.000 - 45.000.000 VNĐ", unit: "Tháng", icon: "Search" },
          { name: "Quản trị & Bảo trì Website Hệ thống", price: "5.000.000 VNĐ", unit: "Tháng", icon: "Monitor" }
        ]
      },
      {
        category: "Nội dung & Sáng tạo nội dung",
        items: [
          { name: "Quản lý Fanpage Brand (30 bài + Design)", price: "10.000.000 - 15.000.000 VNĐ", unit: "Tháng", icon: "Facebook" },
          { name: "Sản xuất Video Review (8-12 Video/tháng)", price: "15.000.000 - 30.000.000 VNĐ", unit: "Tháng", icon: "Video" },
          { name: "Chụp ảnh Sản phẩm & Showroom (Nationwide)", price: "10.000.000 VNĐ", unit: "Buổi", icon: "Camera" }
        ]
      },
      {
        category: "Hỗ trợ Marketing Đại lý (Agent Support)",
        items: [
          { name: "Gói hỗ trợ trọn gói cho 1 Đại lý", price: "5.000.000 VNĐ", unit: "Đại lý/Tháng", icon: "Zap" },
          { name: "Setup & Tối ưu Google Map điểm bán", price: "2.000.000 VNĐ", unit: "Một lần", icon: "MapPin" },
          { name: "Thiết kế POSM/Sales Kit cho đại lý", price: "5.000.000 VNĐ", unit: "Gói", icon: "Image" }
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
      { stt: 5, type: 'brand', category: "Nội dung & Sản xuất", item: "Sản xuất Bộ Sales Kit & POSM cho Đại lý", unit: "Bộ", min: 10, max: 20, note: "Catalog, Standee, Bảng mẫu khóa, Profile công ty" },
      { stt: 6, type: 'brand', category: "Quảng cáo & Launch", item: "Chi phí Ads Launch (3 tháng đầu - giai đoạn khai trương)", unit: "Gói", min: 30, max: 60, note: "Facebook Ads + Google Ads giai đoạn nhận diện" },
    ],
    monthly: [
      { stt: 1, type: 'brand', category: "SEO & Web", item: "Quản trị & Bảo trì Website dillock.com", unit: "Tháng", min: 3, max: 5, note: "Cập nhật nội dung, bảo mật, tốc độ tải trang" },
      { stt: 2, type: 'brand', category: "SEO & Web", item: "SEO Tổng thể – Chiến dịch 100 từ khóa Toàn quốc", unit: "Tháng", min: 25, max: 45, note: "Bao gồm bài chuẩn SEO, backlink, báo cáo ranking 63 tỉnh" },
      { stt: 3, type: 'brand', category: "Nội dung & MXH", item: "Quản lý Fanpage Facebook chính (30 bài/tháng + Design)", unit: "Tháng", min: 10, max: 15, note: "Lên kế hoạch, thiết kế, đăng bài, reply comment" },
      { stt: 4, type: 'brand', category: "Nội dung & MXH", item: "Sản xuất Video TikTok / Reels (8–12 video/tháng)", unit: "Tháng", min: 15, max: 30, note: "Kịch bản, quay, dựng, đăng, tối ưu hashtag" },
      { stt: 5, type: 'sales', category: "Quảng cáo", item: "Ngân sách Quảng cáo Facebook Ads Toàn quốc", unit: "Tháng", min: 30, max: 100, note: "Tùy theo mùa & chiến dịch, không bao gồm phí quản lý" },
      { stt: 6, type: 'sales', category: "Quảng cáo", item: "Ngân sách Google Ads (Search & Display)", unit: "Tháng", min: 20, max: 50, note: "Từ khóa cạnh tranh cao trên toàn lãnh thổ" },
      { stt: 7, type: 'sales', category: "Quảng cáo", item: "Phí quản lý Ads (15–20% ngân sách)", unit: "Tháng", min: 5, max: 20, note: "Tính trên tổng ngân sách chạy quảng cáo thực tế" },
      { stt: 8, type: 'sales', category: "TMĐT & Vận hành", item: "Vận hành Shopee Mall / TikTok Shop", unit: "Tháng", min: 5, max: 8, note: "Đăng sản phẩm, chạy Flash Sale, xử lý đơn hàng" },
      { stt: 9, type: 'brand', category: "Đại lý & B2B", item: "Tổ chức Đào tạo & Workshop kỹ thuật định kỳ", unit: "Tháng", min: 5, max: 10, note: "Hỗ trợ đại lý mới, cập nhật công nghệ sản phẩm" },
      { stt: 10, type: 'sales', category: "Đại lý & B2B", item: "Gói hỗ trợ Marketing Đại lý (Fanpage + Ads + Map)", unit: "Đại lý", min: 5, max: 5, note: "Hỗ trợ trọn gói nội dung, quảng cáo khu vực và Google Map" },
    ]
  },

  agentMarketing: {
    title: "Marketing Đại lý & Đối tác",
    strategy: "Chuyển giao năng lực Marketing và đồng hành tăng trưởng cùng đại lý địa phương.",
    supportActivities: [
      {
        name: "Quản trị Fanpage Đại lý",
        icon: "Facebook",
        desc: "Xây dựng and quản trị hệ thống Fanpage theo công thức: [Thương hiệu] + [Địa lý] (Ví dụ: Dillock Vinh, Dillock Đà Nẵng).",
        items: ["Thiết kế cover/avatar đồng bộ thương hiệu", "Lên lịch bài viết (3-5 bài/tuần) nội dung địa phương", "Hỗ trợ kịch bản phản hồi khách hàng khu vực"]
      },
      {
        name: "Quảng cáo Facebook cho Đại lý",
        icon: "Megaphone",
        desc: "Chạy quảng cáo tập trung bán kính 5-10km quanh showroom đại lý để kéo khách trực tiếp.",
        items: ["Target đối tượng tiềm năng quanh điểm bán", "Tối ưu chiến dịch tin nhắn/lead cho đại lý", "Hỗ trợ kỹ thuật chạy Ads cho nhân sự đại lý"]
      },
      {
        name: "Hỗ trợ Google Maps (SEO Local)",
        icon: "MapPin",
        desc: "Xác minh and tối ưu điểm bán trên bản đồ để khách hàng dễ dàng tìm kiếm showroom.",
        items: ["Đăng ký & Xác minh Google Business Profile", "Tối ưu bộ từ khóa SEO Local khu vực", "Chiến dịch thu thập review thật từ khách hàng"]
      }
    ]
  },

  businessPlan: {
    title: "Kế hoạch Kinh doanh Mục tiêu",
    avgProductPrice: 3000000,
    marketingRatio: 0.1, // 10%
    metrics: [
      { label: "Doanh thu Mục tiêu", min: "1.23 Tỷ", max: "2.88 Tỷ", unit: "VNĐ/Tháng", icon: "TrendingUp" },
      { label: "Sản lượng Mục tiêu", min: "410", max: "960", unit: "Sản phẩm/Tháng", icon: "ShoppingCart" },
      { label: "Ngân sách Marketing", min: "123 Triệu", max: "288 Triệu", unit: "VNĐ/Tháng", icon: "DollarSign" },
      { label: "Giá bán Trung bình", value: "3.000.000", unit: "VNĐ", icon: "Tag" }
    ],
    channels: [
      { name: "Bán lẻ (Dillock Mall & Showroom)", share: 45, target: "185 - 430 bộ/tháng", strategy: "Tập trung Facebook Ads & Google Search để chốt đơn trực tiếp." },
      { name: "Hệ thống Đại lý Toàn quốc", share: 35, target: "145 - 335 bộ/tháng", strategy: "Hỗ trợ đại lý địa phương bằng Fanpage, Ads khu vực và Google Maps." },
      { name: "Dự án & B2B (Căn hộ, Khách sạn)", share: 20, target: "80 - 195 bộ/tháng", strategy: "Tư vấn giải pháp trọn gói, chiết khấu cao cho chủ đầu tư và thầu thợ." }
    ],
    growthPhases: [
      { phase: "Giai đoạn 1 (Tháng 1-3)", goal: "Hoàn thiện Hub Website & Setup 20 Đại lý", focus: "Nhận diện thương hiệu & Phủ SEO Local" },
      { phase: "Giai đoạn 2 (Tháng 4-8)", goal: "Đẩy mạnh Ads & TikTok Review", focus: "Tăng trưởng doanh số bán lẻ & Mở rộng 50 Đại lý" },
      { phase: "Giai đoạn 3 (Tháng 9-12)", goal: "Tối ưu hóa Hệ thống & B2B", focus: "Chiếm lĩnh thị phần khóa dự án & Tối ưu hóa ROI" }
    ],
    profitSharing: {
      threshold: 1500,
      percentage: 5,
      note: "Sau khi đạt mốc 1500 sản phẩm tích lũy, áp dụng mức chia sẻ 5% doanh thu tính từ sản phẩm thứ 1501 trở đi."
    }
  }
};
