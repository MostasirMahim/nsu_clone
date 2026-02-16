// VC Messages, Achievements, Accreditations, Research data

export interface VCMessage {
  id: string;
  title: string;
  message: string;
  author: string;
  designation: string;
  image: string;
  date: string;
}

export interface Achievement {
  id: string;
  title: string;
  value: string;
  icon: string;
  description: string;
}

export interface Accreditation {
  id: string;
  name: string;
  shortName: string;
  logo: string;
  href: string;
  description: string;
}

export interface ResearchHighlight {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
  category: string;
}

export const vcMessages: VCMessage[] = [
  {
    id: "1",
    title: "Welcome Message from the Vice-Chancellor",
    message: "North South University stands as a beacon of academic excellence in Bangladesh. For over three decades, we have been committed to providing world-class education that empowers our students to become leaders and change-makers. Our mission is to nurture critical thinking, innovation, and ethical leadership. Welcome to our vibrant community of scholars, researchers, and future leaders.",
    author: "Prof. Dr. Abdul Hannan",
    designation: "Vice-Chancellor",
    image: "/images/leadership/vc.jpg",
    date: "2024-12-01",
  },
  {
    id: "2",
    title: "Message on Academic Excellence",
    message: "At NSU, we believe that education is the foundation of progress. Our faculty members, drawn from the finest institutions worldwide, are dedicated to pushing the boundaries of knowledge. We encourage our students to question, explore, and innovate. Together, we are building a future where knowledge transforms lives and societies.",
    author: "Prof. Dr. Abdul Hannan",
    designation: "Vice-Chancellor",
    image: "/images/leadership/vc.jpg",
    date: "2024-11-15",
  },
];

export const achievements: Achievement[] = [
  {
    id: "1",
    title: "Students Enrolled",
    value: "25,000+",
    icon: "Users",
    description: "Active students across all programs",
  },
  {
    id: "2",
    title: "Alumni Worldwide",
    value: "75,000+",
    icon: "GraduationCap",
    description: "Graduates making impact globally",
  },
  {
    id: "3",
    title: "Faculty Members",
    value: "600+",
    icon: "UserCheck",
    description: "Highly qualified educators and researchers",
  },
  {
    id: "4",
    title: "Research Publications",
    value: "5,000+",
    icon: "BookOpen",
    description: "Published in international journals",
  },
  {
    id: "5",
    title: "Years of Excellence",
    value: "32+",
    icon: "Award",
    description: "Since establishment in 1992",
  },
  {
    id: "6",
    title: "Academic Programs",
    value: "35+",
    icon: "Library",
    description: "Undergraduate and graduate programs",
  },
];

export const accreditations: Accreditation[] = [
  {
    id: "1",
    name: "University Grants Commission of Bangladesh",
    shortName: "UGC",
    logo: "/images/accreditation/ugc.png",
    href: "https://ugc.gov.bd",
    description: "Primary regulatory body for higher education in Bangladesh",
  },
  {
    id: "2",
    name: "Association of Commonwealth Universities",
    shortName: "ACU",
    logo: "/images/accreditation/acu.png",
    href: "https://www.acu.ac.uk",
    description: "Network of universities across the Commonwealth",
  },
  {
    id: "3",
    name: "Association to Advance Collegiate Schools of Business",
    shortName: "AACSB",
    logo: "/images/accreditation/aacsb.png",
    href: "https://www.aacsb.edu",
    description: "Premier global accrediting body for business schools",
  },
  {
    id: "4",
    name: "Institute of Engineers, Bangladesh",
    shortName: "IEB",
    logo: "/images/accreditation/ieb.png",
    href: "https://www.iebbd.org",
    description: "Professional engineering organization",
  },
  {
    id: "5",
    name: "Bar Council of Bangladesh",
    shortName: "BCB",
    logo: "/images/accreditation/bcb.png",
    href: "https://www.barcouncil.gov.bd",
    description: "Regulatory body for legal education",
  },
  {
    id: "6",
    name: "Pharmacy Council of Bangladesh",
    shortName: "PCB",
    logo: "/images/accreditation/pcb.png",
    href: "#",
    description: "Regulatory body for pharmacy education",
  },
];

export const researchHighlights: ResearchHighlight[] = [
  {
    id: "1",
    title: "Artificial Intelligence & Machine Learning",
    description: "Cutting-edge research in AI applications for healthcare, finance, and smart cities.",
    image: "/images/research/ai.jpg",
    href: "/research/ai-ml",
    category: "Technology",
  },
  {
    id: "2",
    title: "Sustainable Development",
    description: "Research on climate change, renewable energy, and environmental conservation.",
    image: "/images/research/sustainability.jpg",
    href: "/research/sustainability",
    category: "Environment",
  },
  {
    id: "3",
    title: "Public Health & Epidemiology",
    description: "Studies on disease prevention, health policy, and community health interventions.",
    image: "/images/research/health.jpg",
    href: "/research/public-health",
    category: "Health",
  },
  {
    id: "4",
    title: "Business & Economics",
    description: "Research on economic development, entrepreneurship, and financial markets.",
    image: "/images/research/business.jpg",
    href: "/research/business",
    category: "Business",
  },
];

export const journals = [
  {
    id: "1",
    name: "NSU Studies in Language and Literature",
    issn: "1999-4915",
    href: "/journals/nsull",
  },
  {
    id: "2",
    name: "NSU Law Journal",
    issn: "2072-5531",
    href: "/journals/law",
  },
  {
    id: "3",
    name: "NSU Review of Business and Economics",
    issn: "1999-4923",
    href: "/journals/rbe",
  },
  {
    id: "4",
    name: "NSU Engineering and Technology Journal",
    issn: "2220-9085",
    href: "/journals/engineering",
  },
];
