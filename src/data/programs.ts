// Academic programs data for NSU website

export interface Program {
  id: string;
  name: string;
  shortName: string;
  level: "undergraduate" | "graduate" | "doctoral";
  school: string;
  department: string;
  duration: string;
  credits: number;
  description: string;
}

export interface StudyOption {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  href: string;
  features: string[];
}

export const studyOptions: StudyOption[] = [
  {
    id: "undergraduate",
    title: "Undergraduate",
    subtitle: "Bachelor's Programs",
    description: "Explore our diverse undergraduate programs designed to prepare you for a successful career and lifelong learning.",
    image: "/images/study/undergraduate.jpg",
    href: "/admission/undergraduate",
    features: [
      "15+ Bachelor's Programs",
      "World-class Faculty",
      "Research Opportunities",
      "Industry Partnerships",
    ],
  },
  {
    id: "graduate",
    title: "Graduate",
    subtitle: "Master's & PhD Programs",
    description: "Advance your career with our rigorous graduate programs led by internationally recognized faculty.",
    image: "/images/study/graduate.jpg",
    href: "/admission/graduate",
    features: [
      "20+ Graduate Programs",
      "Flexible Schedules",
      "Research Focus",
      "Professional Development",
    ],
  },
  {
    id: "international",
    title: "International",
    subtitle: "Global Students",
    description: "Join our diverse international community. We welcome students from around the world.",
    image: "/images/study/international.jpg",
    href: "/admission/international",
    features: [
      "Student Visa Support",
      "Scholarship Opportunities",
      "Campus Housing",
      "Cultural Integration",
    ],
  },
];

export const programs: Program[] = [
  // School of Engineering & Physical Sciences
  {
    id: "bsc-cse",
    name: "Bachelor of Science in Computer Science & Engineering",
    shortName: "BSc in CSE",
    level: "undergraduate",
    school: "School of Engineering & Physical Sciences",
    department: "Computer Science & Engineering",
    duration: "4 years",
    credits: 148,
    description: "A comprehensive program covering software development, algorithms, AI, and more.",
  },
  {
    id: "bsc-eee",
    name: "Bachelor of Science in Electrical & Electronic Engineering",
    shortName: "BSc in EEE",
    level: "undergraduate",
    school: "School of Engineering & Physical Sciences",
    department: "Electrical & Computer Engineering",
    duration: "4 years",
    credits: 148,
    description: "Learn power systems, electronics, telecommunications, and embedded systems.",
  },
  {
    id: "bsc-ce",
    name: "Bachelor of Science in Civil Engineering",
    shortName: "BSc in CE",
    level: "undergraduate",
    school: "School of Engineering & Physical Sciences",
    department: "Civil & Environmental Engineering",
    duration: "4 years",
    credits: 160,
    description: "Design and construct infrastructure that shapes our world.",
  },
  {
    id: "b-arch",
    name: "Bachelor of Architecture",
    shortName: "B.Arch",
    level: "undergraduate",
    school: "School of Engineering & Physical Sciences",
    department: "Architecture",
    duration: "5 years",
    credits: 180,
    description: "Creative design meets technical excellence in our architecture program.",
  },
  // School of Business & Economics
  {
    id: "bba",
    name: "Bachelor of Business Administration",
    shortName: "BBA",
    level: "undergraduate",
    school: "School of Business & Economics",
    department: "Management",
    duration: "4 years",
    credits: 130,
    description: "Develop leadership skills and business acumen for the global marketplace.",
  },
  {
    id: "bsc-economics",
    name: "Bachelor of Science in Economics",
    shortName: "BSc in Economics",
    level: "undergraduate",
    school: "School of Business & Economics",
    department: "Economics",
    duration: "4 years",
    credits: 130,
    description: "Understand economic principles that drive global markets and policy.",
  },
  // Graduate Programs
  {
    id: "mba",
    name: "Master of Business Administration",
    shortName: "MBA",
    level: "graduate",
    school: "School of Business & Economics",
    department: "Management",
    duration: "2 years",
    credits: 60,
    description: "Executive leadership program for aspiring business leaders.",
  },
  {
    id: "msc-cse",
    name: "Master of Science in Computer Science & Engineering",
    shortName: "MSc in CSE",
    level: "graduate",
    school: "School of Engineering & Physical Sciences",
    department: "Computer Science & Engineering",
    duration: "2 years",
    credits: 45,
    description: "Advanced studies in computing with research opportunities.",
  },
  {
    id: "llm",
    name: "Master of Laws",
    shortName: "LLM",
    level: "graduate",
    school: "School of Humanities & Social Sciences",
    department: "Law",
    duration: "1.5 years",
    credits: 36,
    description: "Advanced legal education for practicing lawyers and scholars.",
  },
  {
    id: "mph",
    name: "Master of Public Health",
    shortName: "MPH",
    level: "graduate",
    school: "School of Health & Life Sciences",
    department: "Public Health",
    duration: "2 years",
    credits: 60,
    description: "Prepare to address complex public health challenges globally.",
  },
];

export const schools = [
  {
    id: "seps",
    name: "School of Engineering & Physical Sciences",
    shortName: "SEPS",
    departments: [
      "Computer Science & Engineering",
      "Electrical & Computer Engineering",
      "Civil & Environmental Engineering",
      "Architecture",
      "Mathematics & Physics",
    ],
  },
  {
    id: "sbe",
    name: "School of Business & Economics",
    shortName: "SBE",
    departments: [
      "Management",
      "Marketing & International Business",
      "Accounting & Finance",
      "Economics",
    ],
  },
  {
    id: "shss",
    name: "School of Humanities & Social Sciences",
    shortName: "SHSS",
    departments: [
      "English & Modern Languages",
      "History & Philosophy",
      "Political Science & Sociology",
      "Law",
    ],
  },
  {
    id: "shls",
    name: "School of Health & Life Sciences",
    shortName: "SHLS",
    departments: [
      "Public Health",
      "Pharmaceutical Sciences",
      "Biochemistry & Microbiology",
      "Environmental Science & Management",
    ],
  },
];
