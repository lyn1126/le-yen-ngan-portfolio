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
  quickFacts: string[];
  about: string[];
  objectives: Array<{
    title: string;
    content: string;
  }>;
  whatICanHelpWith: string[];
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
    context: string;
    tasks: string[];
    outcome: string;
    skills: string;
  }>;
  whyMe: Array<{
    title: string;
    content: string;
  }>;
  workflow: string[];
  availability: {
    title: string;
    items: string[];
  };
  contactTitle: string;
  contactDescription: string;
};

export const profile: Profile = {
  name: "Lê Yến Ngân",
  role: "E-commerce Operations Intern",
  headline:
    "Sinh viên năm 2 định hướng E-commerce Operations, yêu thích công việc cần sự cẩn thận, rõ ràng và bám sát quy trình.",
  intro:
    "Em đang tìm kiếm cơ hội thực tập hoặc part-time trong lĩnh vực vận hành sàn thương mại điện tử. Em có định hướng phát triển lâu dài với công việc liên quan đến đăng tải và cập nhật sản phẩm, kiểm tra dữ liệu, theo dõi đơn hàng, hỗ trợ khách hàng cơ bản và phối hợp triển khai các hoạt động bán hàng trên sàn.",
  email: "yennganle92@gmail.com",
  phone: "0977346274",
  location: "TP.HCM / Hybrid / Remote",
  socials: {
    facebook: "",
    linkedin: "",
  },
  badges: [
    "E-commerce Operations",
    "Internship / Part-time",
    "Google Sheets / Excel cơ bản",
  ],
  quickFacts: [
    "Sinh viên năm 2",
    "Định hướng vận hành sàn TMĐT",
    "Có thể hỗ trợ công việc theo checklist",
    "Quan tâm đến dữ liệu, sản phẩm và trải nghiệm khách hàng",
  ],
  about: [
    "Em là Lê Yến Ngân, hiện là sinh viên năm 2 và đang định hướng phát triển trong lĩnh vực thương mại điện tử, đặc biệt là mảng vận hành sàn. Em quan tâm đến cách một gian hàng online được tổ chức, cập nhật, theo dõi và tối ưu mỗi ngày để vận hành ổn định hơn.",
    "Điểm em phù hợp với công việc này là sự cẩn thận, tinh thần học hỏi và khả năng làm việc theo quy trình. Em thích những đầu việc cần kiểm tra chi tiết, sắp xếp thông tin rõ ràng, cập nhật dữ liệu chính xác và phối hợp xử lý các việc phát sinh một cách có hệ thống.",
  ],
  objectives: [
    {
      title: "Mục tiêu ngắn hạn",
      content:
        "Em mong muốn có cơ hội thực tập hoặc làm việc part-time ở vị trí E-commerce Operations để được tiếp cận trực tiếp với quy trình vận hành gian hàng, học cách phối hợp công việc thực tế và rèn sự chính xác trong từng đầu việc hằng ngày.",
    },
    {
      title: "Mục tiêu dài hạn",
      content:
        "Em muốn phát triển thành nhân sự E-commerce Operations có khả năng hỗ trợ quản lý sản phẩm, cập nhật dữ liệu, theo dõi hiệu quả vận hành và phối hợp triển khai các chương trình bán hàng trên sàn một cách ổn định, có trách nhiệm.",
    },
  ],
  whatICanHelpWith: [
    "Hỗ trợ đăng tải và cập nhật thông tin sản phẩm trên sàn",
    "Kiểm tra tên sản phẩm, mô tả, phân loại, giá bán và hình ảnh trước khi cập nhật",
    "Hỗ trợ theo dõi trạng thái đơn hàng và tổng hợp thông tin đơn cơ bản",
    "Cập nhật dữ liệu bán hàng, tồn kho hoặc danh sách sản phẩm trên Google Sheets / Excel",
    "Soạn phản hồi cơ bản cho khách hàng theo tình huống phổ biến",
    "Hỗ trợ chuẩn bị voucher, campaign và các chương trình khuyến mãi đơn giản",
  ],
  skills: [
    {
      title: "Vận hành sàn TMĐT",
      items: [
        "Hỗ trợ đăng tải và chỉnh sửa thông tin sản phẩm",
        "Rà soát mô tả, giá bán, phân loại và hình ảnh trước khi cập nhật",
        "Theo dõi các đầu việc lặp lại theo checklist",
        "Hỗ trợ kiểm tra trạng thái đơn hàng cơ bản",
      ],
    },
    {
      title: "Dữ liệu & công cụ",
      items: [
        "Google Sheets / Excel cơ bản",
        "Nhập liệu cẩn thận, có tổ chức",
        "Sắp xếp dữ liệu theo bảng, cột và checklist rõ ràng",
        "Đối chiếu và kiểm tra thông tin trước khi cập nhật",
      ],
    },
    {
      title: "Hỗ trợ khách hàng",
      items: [
        "Giao tiếp lịch sự, rõ ràng",
        "Soạn phản hồi ngắn gọn cho các câu hỏi thường gặp",
        "Ghi nhận vấn đề của khách hàng để chuyển xử lý",
        "Hỗ trợ các tình huống cơ bản liên quan đến đơn hàng, giao hàng và đổi trả",
      ],
    },
    {
      title: "Tác phong làm việc",
      items: [
        "Cẩn thận với chi tiết",
        "Chủ động học hỏi và tiếp nhận góp ý",
        "Có trách nhiệm với công việc được giao",
        "Biết sắp xếp công việc cá nhân và theo tiến độ",
        "Có thể làm việc theo quy trình và checklist",
      ],
    },
  ],
  education: {
    school: "Trường Đại học Sư phạm Kỹ thuật TP.HCM",
    year: "Sinh viên năm 2",
    major: "Khoa Thương mại điện tử",
    duration: "2024 - Hiện tại",
    relatedKnowledge: [
      "Thương mại điện tử",
      "Marketing căn bản",
      "Hành vi khách hàng",
      "Tin học ứng dụng",
      "Quản trị kinh doanh",
      "Kỹ năng giao tiếp",
    ],
  },
  projects: [
    {
      title: "Chuẩn bị và rà soát nội dung sản phẩm",
      description:
        "Thực hành chuẩn bị thông tin cho sản phẩm trước khi đăng bán trên gian hàng online, tập trung vào sự rõ ràng và tính nhất quán của dữ liệu.",
      context:
        "Mô phỏng tình huống cần chuẩn hóa nội dung cho một nhóm sản phẩm trước khi cập nhật lên sàn.",
      tasks: [
        "Viết lại tên sản phẩm theo hướng ngắn gọn, rõ ý và dễ tìm kiếm",
        "Sắp xếp lại mô tả sản phẩm theo bố cục dễ đọc",
        "Kiểm tra giá bán, phân loại và thông tin cơ bản trước khi cập nhật",
      ],
      outcome:
        "Tạo được bộ nội dung sản phẩm rõ ràng hơn, dễ kiểm tra hơn trước khi đăng tải.",
      skills:
        "Nhập liệu, rà soát thông tin, tư duy sắp xếp nội dung, chú ý chi tiết",
    },
    {
      title: "Tìm hiểu quy trình vận hành gian hàng TMĐT",
      description:
        "Quan sát và ghi chú lại cách một gian hàng trên sàn thương mại điện tử vận hành từ sản phẩm đến chương trình bán hàng và phản hồi khách hàng.",
      context:
        "Tự nghiên cứu các shop đang hoạt động trên sàn để hiểu rõ hơn về các đầu việc vận hành thường gặp.",
      tasks: [
        "Quan sát cách đặt tên và trình bày sản phẩm của shop",
        "Tìm hiểu các hình thức voucher, flash sale và ưu đãi freeship",
        "Ghi chú lại các bước cơ bản trong quy trình xử lý đơn hàng",
      ],
      outcome:
        "Có cái nhìn thực tế hơn về cách vận hành gian hàng và các điểm cần theo dõi thường xuyên.",
      skills:
        "Quan sát, ghi chú quy trình, phân tích cơ bản, tư duy vận hành",
    },
    {
      title: "Soạn bộ phản hồi khách hàng cơ bản",
      description:
        "Thực hành viết các mẫu phản hồi ngắn gọn, lịch sự cho những tình huống khách hàng thường gặp khi mua sắm online.",
      context:
        "Mô phỏng tình huống hỗ trợ khách hàng ở mức cơ bản trong quá trình mua hàng.",
      tasks: [
        "Soạn mẫu xác nhận đơn hàng",
        "Soạn mẫu trả lời câu hỏi về sản phẩm",
        "Soạn mẫu phản hồi khi khách hỏi về tình trạng giao hàng",
      ],
      outcome:
        "Xây dựng được các mẫu phản hồi có thể dùng làm nền tảng cho công việc CSKH cơ bản.",
      skills:
        "Giao tiếp khách hàng, viết nội dung ngắn, xử lý tình huống cơ bản",
    },
  ],
  whyMe: [
    {
      title: "Cẩn thận khi làm việc với dữ liệu",
      content:
        "Em hiểu rằng trong công việc vận hành sàn, những chi tiết như tên sản phẩm, giá bán, phân loại, tồn kho hay trạng thái đơn hàng đều cần được kiểm tra kỹ trước khi cập nhật.",
    },
    {
      title: "Làm việc theo checklist",
      content:
        "Em phù hợp với những công việc có quy trình rõ ràng. Em có xu hướng kiểm tra từng bước, đối chiếu thông tin và hoàn thành công việc theo thứ tự để hạn chế sai sót.",
    },
    {
      title: "Chủ động học và tiếp nhận hướng dẫn",
      content:
        "Với vai trò thực tập hoặc part-time, em sẵn sàng học quy trình nội bộ, tiếp nhận góp ý và điều chỉnh cách làm để đáp ứng yêu cầu công việc tốt hơn.",
    },
    {
      title: "Tinh thần trách nhiệm ổn định",
      content:
        "Em luôn cố gắng hoàn thành đầu việc đúng thời gian, hỏi lại khi chưa rõ yêu cầu và giữ thái độ nghiêm túc với những công việc dù là nhỏ hay lặp lại.",
    },
  ],
  workflow: [
    "Nhận danh sách sản phẩm hoặc đầu việc cần cập nhật",
    "Kiểm tra thông tin cơ bản: tên, mô tả, giá, phân loại, hình ảnh",
    "Sắp xếp và cập nhật dữ liệu theo đúng định dạng yêu cầu",
    "Rà soát lại sau khi cập nhật để hạn chế sai sót",
    "Ghi chú các vấn đề phát sinh để phối hợp xử lý tiếp",
  ],
  availability: {
    title: "Thời gian & hình thức làm việc",
    items: [
      "Đang tìm cơ hội internship hoặc part-time",
      "Có thể làm việc tại TP.HCM, hybrid hoặc remote tùy tính chất công việc",
      "Sẵn sàng bắt đầu với các đầu việc hỗ trợ vận hành cơ bản",
    ],
  },
  contactTitle: "Liên hệ với em",
  contactDescription:
    "Em sẵn sàng trao đổi thêm về cơ hội internship hoặc part-time trong lĩnh vực E-commerce Operations. Nếu anh/chị đang tìm ứng viên có tinh thần học hỏi, cẩn thận và phù hợp với các đầu việc vận hành nền tảng, em rất mong có cơ hội kết nối.",
};
