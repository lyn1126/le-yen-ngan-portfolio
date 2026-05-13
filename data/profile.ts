export type Profile = {
  name: string;
  role: string;
  headline: string;
  intro: string;
  email: string;
  phone: string;
  location: string;
  socials: {
    facebook: string;
    linkedin: string;
  };
  badges: string[];
  about: string[];
  objectives: Array<{
    title: string;
    content: string;
  }>;
  skills: Array<{
    title: string;
    items: string[];
  }>;
  education: {
    school: string;
    year: string;
    major: string;
    duration: string;
    relatedKnowledge: string[];
  };
  projects: Array<{
    title: string;
    description: string;
    tasks: string[];
    skills: string;
  }>;
  whyMe: Array<{
    title: string;
    content: string;
  }>;
};

export const profile: Profile = {
  name: "Lê Yến Ngân",
  role: "E-commerce Operations Intern",
  headline: "Sinh viên năm 2 định hướng E-commerce Operations",
  intro:
    "Em đang tìm kiếm cơ hội thực tập hoặc part-time trong lĩnh vực vận hành sàn thương mại điện tử. Với tinh thần học hỏi nhanh, cẩn thận trong công việc và mong muốn phát triển trong môi trường thực tế, em hy vọng có thể tham gia hỗ trợ các công việc như quản lý sản phẩm, theo dõi đơn hàng, cập nhật dữ liệu, chăm sóc khách hàng và hỗ trợ các chương trình bán hàng trên sàn.",
  email: "your-email@example.com",
  phone: "0123456789",
  location: "TP.HCM / Remote / Hybrid",
  socials: {
    facebook: "",
    linkedin: "",
  },
  badges: [
    "E-commerce Operations",
    "Internship / Part-time",
    "Second-year Student",
  ],
  about: [
    "Em là Lê Yến Ngân, hiện là sinh viên năm 2 và đang định hướng phát triển trong lĩnh vực thương mại điện tử, đặc biệt là mảng vận hành sàn.",
    "Dù chưa có nhiều kinh nghiệm thực tế, em có sự quan tâm đến cách một gian hàng online được quản lý, vận hành và tối ưu hằng ngày.",
    "Em yêu thích những công việc cần sự cẩn thận, rõ ràng và có quy trình như nhập liệu sản phẩm, kiểm tra thông tin đơn hàng, theo dõi tồn kho, hỗ trợ phản hồi khách hàng và phối hợp xử lý các vấn đề phát sinh.",
  ],
  objectives: [
    {
      title: "Mục tiêu ngắn hạn",
      content:
        "Em mong muốn có cơ hội thực tập hoặc làm việc part-time ở vị trí vận hành sàn thương mại điện tử để được tiếp xúc với quy trình làm việc thực tế.",
    },
    {
      title: "Mục tiêu dài hạn",
      content:
        "Em mong muốn phát triển trở thành nhân sự E-commerce Operations có khả năng theo dõi hiệu quả vận hành gian hàng, hỗ trợ tối ưu nội dung sản phẩm và phối hợp triển khai chương trình khuyến mãi.",
    },
  ],
  skills: [
    {
      title: "Vận hành sàn TMĐT",
      items: [
        "Hỗ trợ đăng tải và cập nhật thông tin sản phẩm",
        "Kiểm tra tên sản phẩm, mô tả, giá bán và hình ảnh",
        "Theo dõi trạng thái đơn hàng cơ bản",
        "Hỗ trợ cập nhật tồn kho",
        "Hỗ trợ voucher, campaign và chương trình bán hàng",
      ],
    },
    {
      title: "Nhập liệu & công cụ văn phòng",
      items: [
        "Google Sheets / Excel cơ bản",
        "Nhập liệu cẩn thận và có tổ chức",
        "Sắp xếp dữ liệu theo bảng và checklist",
        "Kiểm tra thông tin trước khi cập nhật",
      ],
    },
    {
      title: "Hỗ trợ khách hàng",
      items: [
        "Giao tiếp lịch sự, rõ ràng",
        "Soạn tin nhắn phản hồi khách hàng cơ bản",
        "Ghi nhận vấn đề của khách hàng",
        "Hỗ trợ các tình huống đơn giản về đơn hàng và đổi trả",
      ],
    },
    {
      title: "Kỹ năng mềm",
      items: [
        "Cẩn thận và có trách nhiệm",
        "Chủ động học hỏi",
        "Biết tiếp nhận góp ý",
        "Quản lý thời gian cá nhân",
        "Làm việc nhóm",
      ],
    },
  ],
  education: {
    school: "Tên trường đại học / cao đẳng",
    year: "Sinh viên năm 2",
    major: "Chuyên ngành: [Điền chuyên ngành]",
    duration: "[Năm bắt đầu] - Hiện tại",
    relatedKnowledge: [
      "Marketing căn bản",
      "Hành vi khách hàng",
      "Thương mại điện tử",
      "Tin học ứng dụng",
      "Quản trị kinh doanh",
      "Kỹ năng giao tiếp",
    ],
  },
  projects: [
    {
      title: "Thực hành chuẩn bị thông tin sản phẩm",
      description:
        "Thực hành cách chuẩn bị nội dung cơ bản cho một sản phẩm trước khi đăng bán trên gian hàng online.",
      tasks: [
        "Viết tên sản phẩm rõ ràng, dễ hiểu",
        "Sắp xếp thông tin sản phẩm theo bố cục hợp lý",
        "Kiểm tra giá, phân loại và mô tả trước khi đăng",
      ],
      skills: "Nhập liệu, kiểm tra thông tin, tư duy sắp xếp nội dung",
    },
    {
      title: "Tìm hiểu quy trình vận hành gian hàng TMĐT",
      description:
        "Tìm hiểu cách các gian hàng trên sàn thương mại điện tử vận hành thông qua việc quan sát sản phẩm, khuyến mãi, phản hồi khách hàng và xử lý đơn hàng.",
      tasks: [
        "Quan sát cách shop đặt tên và mô tả sản phẩm",
        "Tìm hiểu voucher, flash sale và freeship",
        "Ghi chú các bước cơ bản trong quy trình xử lý đơn hàng",
      ],
      skills: "Quan sát, phân tích cơ bản, ghi chú quy trình",
    },
    {
      title: "Soạn mẫu phản hồi khách hàng cơ bản",
      description:
        "Thực hành soạn các mẫu tin nhắn phản hồi khách hàng thường gặp trong quá trình mua sắm online.",
      tasks: [
        "Soạn mẫu xác nhận đơn hàng",
        "Soạn mẫu trả lời câu hỏi về sản phẩm",
        "Soạn mẫu phản hồi khi khách hỏi về giao hàng",
      ],
      skills: "Giao tiếp khách hàng, viết nội dung ngắn, xử lý tình huống cơ bản",
    },
  ],
  whyMe: [
    {
      title: "Cẩn thận với chi tiết",
      content:
        "Em hiểu rằng công việc vận hành sàn cần sự chính xác trong từng thông tin như tên sản phẩm, giá bán, tồn kho và trạng thái đơn hàng.",
    },
    {
      title: "Sẵn sàng học hỏi",
      content:
        "Em có tinh thần học hỏi và sẵn sàng tiếp nhận hướng dẫn từ anh/chị trong quá trình làm việc.",
    },
    {
      title: "Có trách nhiệm",
      content:
        "Em luôn cố gắng hoàn thành công việc đúng thời gian, chủ động hỏi lại khi chưa hiểu rõ yêu cầu.",
    },
    {
      title: "Phù hợp với công việc có quy trình",
      content:
        "Em yêu thích các công việc có tính hệ thống như theo dõi danh sách, cập nhật dữ liệu và xử lý công việc theo checklist.",
    },
  ],
};
