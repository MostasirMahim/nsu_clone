// Faculty members data for NSU website

export interface FacultyMember {
  id: string;
  name: string;
  designation: string;
  department: string;
  school: string;
  email: string;
  phone?: string;
  office?: string;
  image: string;
  education: string[];
  researchAreas: string[];
  publications?: number;
  profileUrl: string;
}

export const facultyMembers: FacultyMember[] = [
  // Computer Science & Engineering
  {
    id: "cse-001",
    name: "Dr. Mohammad Rahman",
    designation: "Professor & Chair",
    department: "Computer Science & Engineering",
    school: "School of Engineering & Physical Sciences",
    email: "mohammad.rahman@northsouth.edu",
    phone: "+880 2 55668200 Ext. 1234",
    office: "SAC 801",
    image: "/images/faculty/cse-001.jpg",
    education: [
      "PhD in Computer Science, MIT",
      "MS in Computer Science, Stanford University",
      "BSc in CSE, BUET",
    ],
    researchAreas: ["Artificial Intelligence", "Machine Learning", "Computer Vision"],
    publications: 85,
    profileUrl: "/faculty/cse/mohammad-rahman",
  },
  {
    id: "cse-002",
    name: "Dr. Sarah Ahmed",
    designation: "Associate Professor",
    department: "Computer Science & Engineering",
    school: "School of Engineering & Physical Sciences",
    email: "sarah.ahmed@northsouth.edu",
    office: "SAC 802",
    image: "/images/faculty/cse-002.jpg",
    education: [
      "PhD in Computer Science, Carnegie Mellon University",
      "MS in Software Engineering, Georgia Tech",
      "BSc in CSE, NSU",
    ],
    researchAreas: ["Software Engineering", "Cloud Computing", "DevOps"],
    publications: 42,
    profileUrl: "/faculty/cse/sarah-ahmed",
  },
  {
    id: "cse-003",
    name: "Dr. Kamal Hossain",
    designation: "Assistant Professor",
    department: "Computer Science & Engineering",
    school: "School of Engineering & Physical Sciences",
    email: "kamal.hossain@northsouth.edu",
    office: "SAC 803",
    image: "/images/faculty/cse-003.jpg",
    education: [
      "PhD in Cybersecurity, University of Maryland",
      "MS in Information Security, Johns Hopkins",
      "BSc in CSE, BUET",
    ],
    researchAreas: ["Cybersecurity", "Cryptography", "Network Security"],
    publications: 28,
    profileUrl: "/faculty/cse/kamal-hossain",
  },
  // Electrical & Computer Engineering
  {
    id: "ece-001",
    name: "Dr. Farhana Islam",
    designation: "Professor & Chair",
    department: "Electrical & Computer Engineering",
    school: "School of Engineering & Physical Sciences",
    email: "farhana.islam@northsouth.edu",
    office: "SAC 701",
    image: "/images/faculty/ece-001.jpg",
    education: [
      "PhD in Electrical Engineering, UC Berkeley",
      "MS in EE, Stanford University",
      "BSc in EEE, BUET",
    ],
    researchAreas: ["Power Systems", "Renewable Energy", "Smart Grid"],
    publications: 92,
    profileUrl: "/faculty/ece/farhana-islam",
  },
  {
    id: "ece-002",
    name: "Dr. Tanvir Alam",
    designation: "Associate Professor",
    department: "Electrical & Computer Engineering",
    school: "School of Engineering & Physical Sciences",
    email: "tanvir.alam@northsouth.edu",
    office: "SAC 702",
    image: "/images/faculty/ece-002.jpg",
    education: [
      "PhD in Electronics, University of Tokyo",
      "MS in VLSI Design, IIT Delhi",
      "BSc in EEE, NSU",
    ],
    researchAreas: ["VLSI Design", "Embedded Systems", "IoT"],
    publications: 55,
    profileUrl: "/faculty/ece/tanvir-alam",
  },
  // School of Business
  {
    id: "bus-001",
    name: "Dr. Aminul Karim",
    designation: "Professor & Dean",
    department: "Management",
    school: "School of Business & Economics",
    email: "aminul.karim@northsouth.edu",
    office: "NAC 501",
    image: "/images/faculty/bus-001.jpg",
    education: [
      "PhD in Management, Harvard Business School",
      "MBA, Wharton School",
      "BBA, IBA Dhaka",
    ],
    researchAreas: ["Strategic Management", "Leadership", "Organizational Behavior"],
    publications: 78,
    profileUrl: "/faculty/business/aminul-karim",
  },
  {
    id: "bus-002",
    name: "Dr. Nasreen Begum",
    designation: "Associate Professor",
    department: "Marketing & International Business",
    school: "School of Business & Economics",
    email: "nasreen.begum@northsouth.edu",
    office: "NAC 502",
    image: "/images/faculty/bus-002.jpg",
    education: [
      "PhD in Marketing, Northwestern University",
      "MBA, Columbia Business School",
      "BBA, NSU",
    ],
    researchAreas: ["Consumer Behavior", "Digital Marketing", "Brand Management"],
    publications: 45,
    profileUrl: "/faculty/business/nasreen-begum",
  },
  // Law
  {
    id: "law-001",
    name: "Barrister Shafiqul Huq",
    designation: "Professor & Chair",
    department: "Law",
    school: "School of Humanities & Social Sciences",
    email: "shafiqul.huq@northsouth.edu",
    office: "NAC 601",
    image: "/images/faculty/law-001.jpg",
    education: [
      "PhD in Law, University of London",
      "LLM, University of Cambridge",
      "LLB, University of Dhaka",
      "Called to the Bar, Lincoln's Inn",
    ],
    researchAreas: ["Constitutional Law", "Human Rights", "International Law"],
    publications: 65,
    profileUrl: "/faculty/law/shafiqul-huq",
  },
  // Public Health
  {
    id: "ph-001",
    name: "Dr. Mahmuda Khatun",
    designation: "Professor & Chair",
    department: "Public Health",
    school: "School of Health & Life Sciences",
    email: "mahmuda.khatun@northsouth.edu",
    office: "SAC 901",
    image: "/images/faculty/ph-001.jpg",
    education: [
      "PhD in Epidemiology, Johns Hopkins",
      "MPH, Harvard School of Public Health",
      "MBBS, Dhaka Medical College",
    ],
    researchAreas: ["Epidemiology", "Global Health", "Health Policy"],
    publications: 110,
    profileUrl: "/faculty/public-health/mahmuda-khatun",
  },
];

export const departments = [
  { id: "cse", name: "Computer Science & Engineering", school: "SEPS" },
  { id: "ece", name: "Electrical & Computer Engineering", school: "SEPS" },
  { id: "cee", name: "Civil & Environmental Engineering", school: "SEPS" },
  { id: "arch", name: "Architecture", school: "SEPS" },
  { id: "math", name: "Mathematics & Physics", school: "SEPS" },
  { id: "mgmt", name: "Management", school: "SBE" },
  { id: "mkt", name: "Marketing & International Business", school: "SBE" },
  { id: "acf", name: "Accounting & Finance", school: "SBE" },
  { id: "econ", name: "Economics", school: "SBE" },
  { id: "eng", name: "English & Modern Languages", school: "SHSS" },
  { id: "law", name: "Law", school: "SHSS" },
  { id: "psc", name: "Political Science & Sociology", school: "SHSS" },
  { id: "ph", name: "Public Health", school: "SHLS" },
  { id: "pharm", name: "Pharmaceutical Sciences", school: "SHLS" },
];
