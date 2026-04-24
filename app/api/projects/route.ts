import { NextResponse } from "next/server"
import { Project } from '@/types/project'

export const projects: Project[] = [
    {
      type: "project", //"sideProject",
      id: 1,
      title: "저작권 배움터/e배움터",
      mainDesc: "한국저작권위원회 교육시스템 기능개선 사업", // 메인텍스트
      subDesc:
        "저작권배움터 교육시스템 기능개선사업의 UI 개발 및<br/>웹접근성 인증마크 획득을 위한 코드 개선",
      role: "퍼블리싱 100%  디자인 30%",
      date: "2025.04. ~ 2025.11.", //기간
      count: 6, //참여인원
      link: [
        // 링크
        {
          linkttl: "저작권배움터",
          link: "https://www.edu-copyright.or.kr/offedu/web/main/mainPage.do",
        },
        {
          linkttl: "저작권e배움터",
          link: "https://edu-copyright.or.kr/user/main/main.do",
        },
        {
          linkttl: "장애인e배움터",
          link: "https://edu-copyright.or.kr/dsprUser/main/main.do",
        },
      ],
      image: "/images/screenshot/copyright_01.png", // 썸네일
      imageList: [
        "/images/screenshot/copyright_01.png",
        "/images/screenshot/copyright_02.png",
        "/images/screenshot/copyright_03.png",
      ],
      imageAlt: "저작권배움터 메인페이지 썸네일",
      tool: ["html", "css", "js", "figma", "zeplin"], // 기술스택
      contList: [
        "UI 통일성을 위한 저작권배움터 메인페이지 리뉴얼 디자인 및 퍼블리싱",
        "기능 개선 페이지 퍼블리싱 작업",
        "웹 접근성 진단 도구(OpenWAX)를 활용한 접근성 점검 수행",
        // 주요내용
        "모바일 레이아웃 깨짐 이슈 수정 및 안정화",
      ],
      strength: ["웹접근성 인증마크 갱신/획득 경험"], //역량
    },
    {
      type: "project", //"sideProject",
      id: 2,
      title: "NEXUS",
      mainDesc: "네트워크 모니터링 관리 시스템", // 메인텍스트
      subDesc:
        "실시간 정보 공유를 위한 국방 모바일 환경 신뢰 연동 기술 개발 내<br/>네트워크 모니터링을 위한 관리 시스템",
      role: "퍼블리싱/디자인 100%",
      date: "2025.04. ~ 2025.06.", //기간
      count: 6, //참여인원
      // link: [
      //   // 링크
      //   {
      //     linkttl: "저작권배움터",
      //     link: "#",
      //   },
      //   {
      //     linkttl: "저작권e배움터",
      //     link: "https://edu-copyright.or.kr/user/main/main.do",
      //   },
      //   {
      //     linkttl: "장애인e배움터",
      //     link: "https://edu-copyright.or.kr/dsprUser/main/main.do",
      //   },
      // ],
      image: "/images/screenshot/nexus_01.png", // 썸네일
      imageList: [
        "/images/screenshot/nexus_01.png",
        "/images/screenshot/nexus_02.png",
        "/images/screenshot/nexus_03.png",
      ],
      imageAlt: "nexus 메인페이지 썸네일",
      tool: ["html", "css", "js", "vue", "figma", "zeplin"], // 기술스택
      contList: [
        // 주요내용
        "Figma를 활용한 UI 디자인 작업",
        "Vue.js 기반 페이지 퍼블리싱 및 컴포넌트 구현",
        "SVG 이미지 적용 및 반응형·인터렉션 구현",
        "스켈레톤 UI를 활용한 로딩 화면 구성",
      ],
      strength: [
        "SVG 이미지 적용을 통한 해상도 대응",
        "스켈레톤 UI를 통해 로딩 시 사용자 경험 개선",
      ], //역량
    },
    {
      type: "project", //"sideProject",
      id: 3,
      title: "e학습터 서비스",
      mainDesc: "e학습터 서비스 구조 개선 사업", // 메인텍스트
      subDesc:
        "e학습터 서비스의 MSA 구조 전환에 따른<br/>Vue.js 프레임워크 내 퍼블리싱 작업",
      role: "퍼블리싱 100%",
      date: "2024.07. ~ 2024.12.", //기간
      count: 18, //참여인원
      // link: [
      //   // 링크
      //   {
      //     linkttl: "저작권배움터",
      //     link: "#",
      //   },
      //   {
      //     linkttl: "저작권e배움터",
      //     link: "https://edu-copyright.or.kr/user/main/main.do",
      //   },
      //   {
      //     linkttl: "장애인e배움터",
      //     link: "https://edu-copyright.or.kr/dsprUser/main/main.do",
      //   },
      // ],
      image: "/images/screenshot/elearning_01.png", // 썸네일
      imageList: [
        "/images/screenshot/elearning_01.png",
        "/images/screenshot/elearning_02.png",
        "/images/screenshot/elearning_03.png",
      ],
      imageAlt: "e학습터 메인페이지 썸네일",
      tool: ["html", "css", "js", "vue", "zeplin", "git"], // 기술스택
      contList: [
        // 주요내용
        "JSP 기반 마크업을 Vue 컴포넌트 구조로 전환",
        "공통 레이아웃 및 메인 페이지 작업",
        "문제은행 관리페이지(리뉴얼) 퍼블리싱 작업",
        "Vue 환경에 맞는 라이브러리 적용 (vue-draggable-next, sweetalert2 등)",
        "재사용을 위한 라이브러리의 컴포넌트화(datepicker 등)",
      ],
      strength: [
        "Vue 환경에 맞는 라이브러리로 전환하여 안정성 개선",
        "템플릿페이지를 통해~~~ ",
        "공통된 UI의 컴포넌트 작업을 통해 재사용성 증진",
      ], //역량
    },
    {
      type: "project", //"sideProject",
      id: 4,
      title: "다비치마켓",
      mainDesc: "다비치마켓 쇼핑몰 리뉴얼 및 기능 개선", // 메인텍스트
      subDesc:
        "nuxt.js 프레임워크를 활용하여<br/>다비치 쇼핑몰 퍼블리싱 및 개발 진행",
      role: "퍼블리싱 60% 개발 10%",
      date: "2022.06. ~ 2023.11.", //기간
      count: 8, //참여인원
      link: [
        // 링크
        {
          linkttl: "다비치마켓 바로가기",
          link: "https://www.davichmarket.com/",
        },
      ],
      image: "/images/screenshot/dmarket_01.png", // 썸네일
      imageList: [
        "/images/screenshot/dmarket_01.png",
        "/images/screenshot/dmarket_02.webp",
      ],
      imageAlt: "다비치 마켓 사이트 샘플 이미지",
      tool: [
        "html",
        "scss",
        "js",
        "vue",
        "zeplin",
        "git",
        "postman",
        "sourcetree",
      ], // 기술스택
      contList: [
        // 주요내용
        "Nuxt.js 내 페이지 퍼블리싱 및 컴포넌트 구현",
        "다비치 마켓 앱(하이브리드 앱)에 적용되는 웹뷰 작업",
        "SCSS 사용 및 BEM 방법론 적용",
        "상품랭킹페이지 등 일부 페이지 데이터 API 적용",
      ],
      strength: [
        "BEM 방법론 사용으로 클래스 네이밍을 통일하여 협업 효율 향상",
        "반응형 및 크로스 브라우징을 통한 웹 호환성 확보",
      ], //역량
    },
    {
      type: "project", //"sideProject",
      id: 5,
      title: "다비치안경체인",
      mainDesc: "다비치안경체인 웹사이트 신규 구축", // 메인텍스트
      subDesc:
        "다비치안경체인 회사의 소개 사이트 및<br/>관리자 페이지의 퍼블리싱/유지보수",
      role: "퍼블리싱 70%",
      date: "2021.11. ~ 2022.04.", //기간
      count: 6, //참여인원
      link: [
        // 링크
        {
          linkttl: "다비치안경체인 바로가기",
          link: "https://davich.com/",
        },
      ],
      image: "/images/screenshot/davich_01.png", // 썸네일
      imageList: [
        "/images/screenshot/davich_01.png",
        "/images/screenshot/davich_02.png",
      ],
      imageAlt: "다비치안경체인 사이트 썸네일",
      tool: [
        "html",
        "scss",
        "js",
        "vue",
        "git",
        "sourcetree",
        "zeplin",
        "postman",
      ], // 기술스택
      contList: [
        // 주요내용
        "공통 컴포넌트 및 페이지 퍼블리싱 작업",
        "관리자 페이지 퍼블리싱 작업",
        "Zeplin과 Git을 활용하여 디자이너 및 개발자와 협업",
        "유지보수 과정에서 데이터 API 적용",
        "디바이스에 따라 분기되는 적응형 UI 구현",
      ],
      strength: [
        "다양한 협업툴을 통해 협업 경험 보유",
        "스크롤 이벤트 페이지의 작업으로 인터렉션 구현 경험",
      ], //역량
    },
    {
      type: "project", //"sideProject",
      id: 6,
      title: "피팅몬스터 콘택트렌즈 CMS",
      mainDesc: "자사솔루션 피팅몬스터 콘택트렌즈의 CMS", // 메인텍스트
      subDesc: "자사 가상피팅API 사용 및관리를 위한<br/>CMS UI 개발",
      role: "퍼블리싱 80% 개발 10%",
      date: "2022.04. ~ 2022.06.", //기간
      count: 6, //참여인원
      // link: [
      //   // 링크
      //   {
      //     linkttl: "다비치안경체인",
      //     link: "https://edu-copyright.or.kr/dsprUser/main/main.do",
      //   },
      // ],
      image: "/images/screenshot/img_cms.png", // 썸네일
      imageList: ["/images/screenshot/img_cms.png"],
      imageAlt: "cms 대시보드 썸네일",
      tool: ["html", "scss", "js", "vue", "git", "sourcetree", "zeplin"], // 기술스택
      contList: [
        // 주요내용
        "모바일 사이즈 고려하여 가로스크롤 시에도 모든 화면 보이도록 UI 구성",
        "퍼블리셔 간 협업을 위한 스타일가이드 기반 컴포넌트화 작업",
        "대시보드 및 통계 페이지에 데이터 API 적용",
        "관리자/사용자 권한에 따른 화면 분기 처리",
      ],
      strength: [
        "모든 사이즈 대응한 반응형 작업",
        "분기처리 작업 경험",
        "첫 데이터 api 적용 경험",
      ], //역량
    },
    {
      type: "project", //"sideProject",
      id: 7,
      title: "렌즈톡톡 쇼핑몰",
      mainDesc: "자사 영문 쇼핑몰 사이트 구축", // 메인텍스트
      subDesc:
        "카페24의 템플릿을 활용하여 <br/>자사 영문 렌즈 쇼핑몰 구축 작업",
      role: "퍼블리싱 100%",
      date: "2021.09. ~ 2021.10.", //기간
      count: 3, //참여인원
      // link: [
      //   // 링크
      //   {
      //     linkttl: "렌즈톡톡 쇼핑몰",
      //     link: "https://edu-copyright.or.kr/dsprUser/main/main.do",
      //   },
      // ],
      image: "/images/screenshot/img_lenstoktok.png", // 썸네일
      imageList: ["/images/screenshot/img_lenstoktok.png"],
      imageAlt: "렌즈톡톡 사이트 썸네일",
      tool: ["html", "css", "js", "zeplin"], // 기술스택
      contList: [
        // 주요내용
        "카페24 솔루션 환경에서 퍼블리싱 작업",
        "이미지 맵을 활용한 이미지 링크 구현",
        "쿠키(setCookie)를 이용한 팝업 제어 기능 작업",
        "Google Maps API 와 Google Mail API 적용",
      ],
      strength: [
        "솔루션 내 마크업 경험",
        "로컬스토리지 사용 경험",
        "api 적용 경험",
      ], //역량
    },
    {
      type: "sideProject", //"sideProject",
      id: 8,
      title: "오늘의 여행(사이드 프로젝트)",
      mainDesc: "여행사이트 구축 프로젝트", // 메인텍스트
      subDesc:
        "관광지 소개 및 여행 루트 업로드,<br/>여행단 모집을 위한 채팅을 포함한 참여형 웹사이트",
      role: "퍼블리싱/디자인 100% 개발 20%",
      date: "2025.01. ~ 2025.08.", //기간
      count: 4, //참여인원
      // link: [
      //   // 링크
      //   {
      //     linkttl: "다비치안경체인",
      //     link: "https://edu-copyright.or.kr/dsprUser/main/main.do",
      //   },
      // ],
      image: "/images/screenshot/travel_01.png", // 썸네일
      imageList: [
        "/images/screenshot/travel_01.png",
        "/images/screenshot/travel_02.png",
      ],
      imageAlt: "오늘의 여행 사이트 썸네일",
      tool: [
        "html",
        "css",
        "js",
        "react",
        "figma",
        "git",
        "sourcetree",
        "zeplin",
      ], // 기술스택
      contList: [
        // 주요내용
        "피그마를 이용하여 UI/UX 설계",
        "React UI 컴포넌트 작업 및 반응형 레이아웃 구현",
        "검색·프로모션·메인 화면 데이터 API 적용",
        // "화면설계서 부터 "
      ],
      strength: [
        "다양한 협업툴을 통해 협업경험 및 ~~~",
        "다양한 스크롤이벤트 페이지의 작업으로 인터렉션 구현 경험",
      ], //역량
    },
    {
      type: "sideProject", //"sideProject",
      id: 9,
      title: "나만의 배경화면 만들기(사이트 프로젝트)",
      mainDesc: "배경 이미지를 생성하는 사이트", // 메인텍스트
      subDesc:
        "가지고 있는 이미지나 pixabay의 무료 이미지로 ppt, 배경이미지를<br/>간단하게 제작하는 사이트입니다.",
      role: "퍼블리싱/디자인/개발 100%",
      date: "2025.12. ~ 2026.1.", //기간
      count: 1, //참여인원
      link: [
        // 링크
        {
          linkttl: "나만의 배경화면 만들기 바로가기",
          link: "https://wallpaper-edit.pages.dev/",
        },
      ],
      image: "/images/screenshot/wallpaper_01.png", // 썸네일
      imageList: ["/images/screenshot/wallpaper_01.png"],
      imageAlt: "나만의 배경화면 만들기 사이트 썸네일",
      tool: [
        "html",
        "css",
        "js",
        "vue",
        "figma",
        "git",
        "sourcetree",
        "zeplin",
      ], // 기술스택
      contList: [
        // 주요내용
        "피그마로 UI/UX 설계",
        "nuxt.js에서 페이지 퍼블리싱 및 이미지 에디터 기능 구현",
        "이미지 API(Pixabay API), 성경 API(bible API) 연동",
        "웹표준형(W3C Markup Validation Service), 웹접근성 진단 툴(OpenWAX)을 통한 점검 시행",
        "SEO를 위한 사이트 최적화",
      ],
      strength: [
        "다양한 협업툴을 통해 협업경험 및 ~~~",
        "다양한 스크롤이벤트 페이지의 작업으로 인터렉션 구현 경험",
      ], //역량
    },
    {
      type: "sideProject", //"sideProject",
      id: 10,
      title: "최하혜의 포트폴리오",
      mainDesc: "나의 이력 및 프로젝트를 소개하는 포트폴리오", // 메인텍스트
      subDesc: "나의 이력 및 프로젝트를 소개하는 포트폴리오",
      role: "퍼블리싱/디자인/개발 100%",
      date: "2026.03. ~ ", //기간
      count: 1, //참여인원
      // link: [
      //   // 링크
      //   {
      //     linkttl: "사이트 바로가기",
      //     link: "",
      //   },
      // ],
      image: "/images/screenshot/img_main.png", // 썸네일
      imageList: ["/images/screenshot/img_main.png"],
      imageAlt: "포트폴리오 사이트 썸네일",
      tool: ["html", "scss", "js", "react", "figma", "git", "zeplin"], // 기술스택
      contList: [
        // 주요내용
        "next.js 프레임워크를 활용하여 퍼블리싱, 반응형 작업",
        "웹 접근성을 고려하여 다크 모드, 폰트 크기 설정 기능",
        "크로스 브라우징 이슈 대응", //(10vh, 파이어 폭스)
      ],
      strength: [
        "다양한 협업툴을 통해 협업경험 및 ~~~",
        "다양한 스크롤이벤트 페이지의 작업으로 인터렉션 구현 경험",
      ], //역량
    },
  ];

  export async function GET() {
    return NextResponse.json(projects);
  }