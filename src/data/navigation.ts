// Navigation menu structure for NSU website

export interface NavItem {
  title: string;
  href: string;
  children?: NavItem[];
}

export const topBarLinks: NavItem[] = [
  { title: "Publications", href: "/publications" },
  { title: "International Students", href: "/admission/international" },
  { title: "Academic Calendar", href: "/academic/calendar" },
  { title: "Library", href: "/library" },
  { title: "Newsletters", href: "/newsletters" },
  { title: "Journals", href: "/research/journals" },
  { title: "Catalog", href: "/catalog" },
  { title: "Archive", href: "/archive" },
  { title: "Contact Us", href: "/contact" },
];

export const mainNavItems: NavItem[] = [
  {
    title: "About",
    href: "/about",
    children: [
      { title: "Overview", href: "/about/overview" },
      { title: "History", href: "/about/history" },
      { title: "Vision & Mission", href: "/about/vision-mission" },
      { title: "Leadership", href: "/about/leadership" },
      { title: "Board of Trustees", href: "/about/trustees" },
      { title: "Why NSU", href: "/about/why-nsu" },
      { title: "Campus", href: "/about/campus" },
    ],
  },
  {
    title: "Academic",
    href: "/academic",
    children: [
      { title: "Schools & Departments", href: "/academic/schools" },
      { title: "Programs", href: "/academic/programs" },
      { title: "Course Catalog", href: "/academic/catalog" },
      { title: "Academic Calendar", href: "/academic/calendar" },
      { title: "Academic Policies", href: "/academic/policies" },
      { title: "Academic Council", href: "/academic/council" },
      { title: "Teaching & Learning Center", href: "/academic/tlc" },
      { title: "IQAC", href: "/academic/iqac" },
      { title: "Library", href: "/library" },
    ],
  },
  {
    title: "Faculty",
    href: "/faculty",
    children: [
      { title: "All Faculty Members", href: "/faculty" },
      { title: "Computer Science & Engineering", href: "/faculty/cse" },
      { title: "Electrical & Computer Engineering", href: "/faculty/ece" },
      { title: "Civil & Environmental Engineering", href: "/faculty/cee" },
      { title: "Architecture", href: "/faculty/architecture" },
      { title: "School of Business", href: "/faculty/business" },
      { title: "School of Law", href: "/faculty/law" },
      { title: "English & Modern Languages", href: "/faculty/english" },
      { title: "Economics", href: "/faculty/economics" },
      { title: "Public Health", href: "/faculty/public-health" },
    ],
  },
  {
    title: "Offices",
    href: "/offices",
    children: [
      { title: "Office of the VC", href: "/offices/vc" },
      { title: "Registrar", href: "/offices/registrar" },
      { title: "Student Affairs", href: "/offices/student-affairs" },
      { title: "Finance", href: "/offices/finance" },
      { title: "IT Office", href: "/offices/it" },
      { title: "Career & Placement", href: "/offices/career" },
      { title: "Research Office", href: "/offices/research" },
    ],
  },
  {
    title: "Admission",
    href: "/admission",
    children: [
      { title: "Undergraduate", href: "/admission/undergraduate" },
      { title: "Graduate", href: "/admission/graduate" },
      { title: "International Students", href: "/admission/international" },
      { title: "Admission Test Info", href: "/admission/test-info" },
      { title: "How to Apply", href: "/admission/how-to-apply" },
      { title: "Tuition & Fees", href: "/admission/tuition" },
      { title: "Financial Aid", href: "/admission/financial-aid" },
      { title: "Visit NSU", href: "/admission/visit" },
      { title: "Admission Office", href: "/admission/office" },
      { title: "FAQ", href: "/admission/faq" },
    ],
  },
  {
    title: "NSU Online",
    href: "/nsu-online",
    children: [
      { title: "Student Portal", href: "https://rds.northsouth.edu" },
      { title: "NSU LMS", href: "https://lms.northsouth.edu" },
      { title: "Email", href: "https://mail.northsouth.edu" },
      { title: "Library Portal", href: "https://library.northsouth.edu" },
    ],
  },
  { title: "Alumni", href: "/alumni" },
  { title: "Research", href: "/research" },
  {
    title: "Useful Links",
    href: "#",
    children: [
      { title: "UGC Bangladesh", href: "https://ugc.gov.bd" },
      { title: "Ministry of Education", href: "https://moedu.gov.bd" },
      { title: "HEQEP", href: "https://heqep.gov.bd" },
    ],
  },
];

export const siteMetadata = {
  name: "North South University",
  shortName: "NSU",
  tagline: "The First Private University of Bangladesh",
  established: 1992,
  address: "Plot 15, Block B, Bashundhara R/A, Dhaka-1229, Bangladesh",
  phone: "+880 2 55668200",
  fax: "+880 2 55668202",
  email: "info@northsouth.edu",
  website: "https://www.northsouth.edu",
  socialLinks: {
    facebook: "https://facebook.com/NorthSouthUniversity",
    twitter: "https://twitter.com/NSUBangladesh",
    youtube: "https://youtube.com/NorthSouthUniversity",
    instagram: "https://instagram.com/nsubangladesh",
    linkedin: "https://linkedin.com/school/north-south-university",
  },
};
