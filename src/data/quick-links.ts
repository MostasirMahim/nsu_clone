// Quick links data for NSU website

export interface QuickLink {
  id: string;
  title: string;
  href: string;
  icon: string; // Icon name for lucide-react
  description?: string;
}

export const quickLinks: QuickLink[] = [
  {
    id: "1",
    title: "Scheduled Events",
    href: "/events",
    icon: "Calendar",
    description: "View upcoming university events",
  },
  {
    id: "2",
    title: "Degree Verification",
    href: "/services/degree-verification",
    icon: "BadgeCheck",
    description: "Verify academic credentials",
  },
  {
    id: "3",
    title: "Online Payment",
    href: "/services/payment",
    icon: "CreditCard",
    description: "Pay tuition and fees online",
  },
  {
    id: "4",
    title: "Job Portal",
    href: "/careers",
    icon: "Briefcase",
    description: "Career opportunities at NSU",
  },
  {
    id: "5",
    title: "Student Portal",
    href: "https://rds.northsouth.edu",
    icon: "GraduationCap",
    description: "Access student services",
  },
  {
    id: "6",
    title: "Library",
    href: "/library",
    icon: "Library",
    description: "Digital and physical resources",
  },
  {
    id: "7",
    title: "NSU LMS",
    href: "https://lms.northsouth.edu",
    icon: "BookOpen",
    description: "Learning Management System",
  },
  {
    id: "8",
    title: "Research",
    href: "/research",
    icon: "FlaskConical",
    description: "Research initiatives and publications",
  },
];
