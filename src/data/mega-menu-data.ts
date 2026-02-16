// Mega menu data for NSU website dropdown navigation

export interface MegaMenuColumn {
  title: string;
  items: { label: string; href: string }[];
}

export interface MegaMenuItem {
  navLabel: string;
  columns: MegaMenuColumn[];
}

export const megaMenuData: Record<string, MegaMenuColumn[]> = {
  About: [
    {
      title: "ABOUT NSU",
      items: [
        { label: "Brief History", href: "/about/history" },
        { label: "Vision, Mission & Strategy", href: "/about/vision-mission" },
        { label: "International Advisory Board", href: "/about/advisory-board" },
        { label: "Accreditation", href: "/about/accreditation" },
        { label: "International Recognition", href: "/about/recognition" },
        { label: "Facts About NSU", href: "/about/facts" },
      ],
    },
    {
      title: "NSU Trustees",
      items: [
        { label: "Board of Trustees", href: "/about/trustees" },
      ],
    },
    {
      title: "Executive Leaders",
      items: [
        { label: "VC, Pro-VC & Treasurer", href: "/about/leadership" },
        { label: "Deans, Chairs & Directors", href: "/about/deans" },
        { label: "Administration", href: "/about/administration" },
      ],
    },
    {
      title: "Authorities",
      items: [
        { label: "Syndicate", href: "/about/syndicate" },
        { label: "Academic Council", href: "/about/academic-council" },
      ],
    },
  ],

  Academic: [
    {
      title: "SCHOOLS",
      items: [
        { label: "School of Business & Economics", href: "/academic/sbe" },
        { label: "School of Engineering & Physical Sciences", href: "/academic/seps" },
        { label: "School of Humanities & Social Sciences", href: "/academic/shss" },
        { label: "School of Health & Life Sciences", href: "/academic/shls" },
      ],
    },
    {
      title: "PROGRAMS",
      items: [
        { label: "Undergraduate Programs", href: "/academic/undergraduate" },
        { label: "Graduate Programs", href: "/academic/graduate" },
        { label: "PhD Programs", href: "/academic/phd" },
      ],
    },
    {
      title: "RESOURCES",
      items: [
        { label: "Course Catalog", href: "/academic/catalog" },
        { label: "Academic Calendar", href: "/academic/calendar" },
        { label: "Academic Policies", href: "/academic/policies" },
      ],
    },
    {
      title: "QUALITY ASSURANCE",
      items: [
        { label: "IQAC", href: "/academic/iqac" },
        { label: "Teaching & Learning Center", href: "/academic/tlc" },
        { label: "Library", href: "/library" },
      ],
    },
  ],

  Faculty: [
    {
      title: "ENGINEERING",
      items: [
        { label: "Computer Science & Engineering", href: "/faculty/cse" },
        { label: "Electrical & Computer Engineering", href: "/faculty/ece" },
        { label: "Civil & Environmental Engineering", href: "/faculty/cee" },
        { label: "Architecture", href: "/faculty/architecture" },
      ],
    },
    {
      title: "BUSINESS",
      items: [
        { label: "School of Business", href: "/faculty/business" },
        { label: "Accounting & Finance", href: "/faculty/accounting" },
        { label: "Management", href: "/faculty/management" },
        { label: "Marketing & International Business", href: "/faculty/marketing" },
      ],
    },
    {
      title: "HUMANITIES & SOCIAL SCIENCES",
      items: [
        { label: "English & Modern Languages", href: "/faculty/english" },
        { label: "Economics", href: "/faculty/economics" },
        { label: "Political Science & Sociology", href: "/faculty/political-science" },
      ],
    },
    {
      title: "HEALTH & LIFE SCIENCES",
      items: [
        { label: "Public Health", href: "/faculty/public-health" },
        { label: "Pharmaceutical Sciences", href: "/faculty/pharma" },
        { label: "Biochemistry & Microbiology", href: "/faculty/biochem" },
      ],
    },
  ],

  Offices: [
    {
      title: "ADMINISTRATION",
      items: [
        { label: "Office of the VC", href: "/offices/vc" },
        { label: "Registrar", href: "/offices/registrar" },
        { label: "Controller of Examinations", href: "/offices/controller" },
      ],
    },
    {
      title: "STUDENT SERVICES",
      items: [
        { label: "Student Affairs", href: "/offices/student-affairs" },
        { label: "Career & Placement", href: "/offices/career" },
        { label: "Counseling Center", href: "/offices/counseling" },
      ],
    },
    {
      title: "FINANCE & OPERATIONS",
      items: [
        { label: "Finance", href: "/offices/finance" },
        { label: "Accounts", href: "/offices/accounts" },
        { label: "Procurement", href: "/offices/procurement" },
      ],
    },
    {
      title: "SUPPORT",
      items: [
        { label: "IT Office", href: "/offices/it" },
        { label: "Research Office", href: "/offices/research" },
        { label: "Library", href: "/library" },
      ],
    },
  ],

  Admission: [
    {
      title: "APPLY",
      items: [
        { label: "How to Apply", href: "/admission/how-to-apply" },
        { label: "Admission Test Info", href: "/admission/test-info" },
        { label: "Admission Office", href: "/admission/office" },
        { label: "FAQ", href: "/admission/faq" },
      ],
    },
    {
      title: "PROGRAMS",
      items: [
        { label: "Undergraduate", href: "/admission/undergraduate" },
        { label: "Graduate", href: "/admission/graduate" },
        { label: "International Students", href: "/admission/international" },
      ],
    },
    {
      title: "FINANCIAL",
      items: [
        { label: "Tuition & Fees", href: "/admission/tuition" },
        { label: "Financial Aid", href: "/admission/financial-aid" },
        { label: "Scholarships", href: "/admission/scholarships" },
      ],
    },
    {
      title: "VISIT",
      items: [
        { label: "Visit NSU", href: "/admission/visit" },
        { label: "Virtual Tour", href: "/admission/virtual-tour" },
        { label: "Contact Admission", href: "/admission/contact" },
      ],
    },
  ],

  "NSU Online": [
    {
      title: "PORTALS",
      items: [
        { label: "Student Portal (RDS)", href: "https://rds.northsouth.edu" },
        { label: "NSU LMS", href: "https://lms.northsouth.edu" },
        { label: "Email", href: "https://mail.northsouth.edu" },
        { label: "Library Portal", href: "https://library.northsouth.edu" },
      ],
    },
    {
      title: "E-SERVICES",
      items: [
        { label: "Online Payment", href: "/nsu-online/payment" },
        { label: "Transcript Request", href: "/nsu-online/transcript" },
        { label: "Certificate Verification", href: "/nsu-online/verification" },
      ],
    },
  ],

  "Useful Links": [
    {
      title: "EXTERNAL LINKS",
      items: [
        { label: "UGC Bangladesh", href: "https://ugc.gov.bd" },
        { label: "Ministry of Education", href: "https://moedu.gov.bd" },
        { label: "HEQEP", href: "https://heqep.gov.bd" },
        { label: "APQN", href: "https://apqn.org" },
      ],
    },
    {
      title: "NSU RESOURCES",
      items: [
        { label: "All Published Journals", href: "/journals" },
        { label: "Publications Repository", href: "/publications" },
        { label: "Newsletter Archive", href: "/newsletters" },
      ],
    },
  ],
};
