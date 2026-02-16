// Events and notices data for NSU website

export interface Event {
  id: string;
  title: string;
  slug: string;
  description: string;
  date: string;
  endDate?: string;
  time: string;
  location: string;
  category: string;
  image?: string;
  registrationLink?: string;
}

export interface Notice {
  id: string;
  title: string;
  date: string;
  category: string;
  priority: "normal" | "important" | "urgent";
  href: string;
  department?: string;
}

export const events: Event[] = [
  {
    id: "1",
    title: "Spring 2025 Orientation Program",
    slug: "spring-2025-orientation",
    description: "Welcome session for newly admitted students of Spring 2025 semester. Learn about campus resources, academic policies, and student life.",
    date: "2025-01-15",
    time: "9:00 AM - 4:00 PM",
    location: "NSU Auditorium",
    category: "Academic",
    image: "/images/events/orientation.jpg",
    registrationLink: "/events/spring-2025-orientation/register",
  },
  {
    id: "2",
    title: "Career Fair 2025",
    slug: "career-fair-2025",
    description: "Connect with 100+ leading employers. Bring your resume and dress professionally for on-spot interviews.",
    date: "2025-01-25",
    endDate: "2025-01-26",
    time: "10:00 AM - 5:00 PM",
    location: "NSU Plaza",
    category: "Career",
    image: "/images/events/career-fair.jpg",
  },
  {
    id: "3",
    title: "Research Symposium 2025",
    slug: "research-symposium-2025",
    description: "Annual research showcase featuring presentations from faculty and graduate students across all disciplines.",
    date: "2025-02-10",
    time: "9:00 AM - 6:00 PM",
    location: "SAC Building",
    category: "Research",
    image: "/images/events/symposium.jpg",
  },
  {
    id: "4",
    title: "NSU Tech Fest 2025",
    slug: "tech-fest-2025",
    description: "The biggest technology festival featuring hackathons, workshops, tech talks, and competitions.",
    date: "2025-02-20",
    endDate: "2025-02-22",
    time: "All Day",
    location: "Engineering Building",
    category: "Technology",
    image: "/images/events/techfest.jpg",
  },
  {
    id: "5",
    title: "Alumni Reunion 2025",
    slug: "alumni-reunion-2025",
    description: "Annual gathering of NSU alumni. Reconnect with old friends and expand your professional network.",
    date: "2025-03-15",
    time: "4:00 PM - 9:00 PM",
    location: "NSU Campus",
    category: "Alumni",
    image: "/images/events/alumni.jpg",
  },
];

export const notices: Notice[] = [
  {
    id: "1",
    title: "Spring 2025 Class Registration Schedule",
    date: "2024-12-12",
    category: "Registration",
    priority: "important",
    href: "/notices/spring-2025-registration",
    department: "Registrar Office",
  },
  {
    id: "2",
    title: "Final Exam Schedule - Fall 2024",
    date: "2024-12-10",
    category: "Examination",
    priority: "urgent",
    href: "/notices/fall-2024-finals",
    department: "Registrar Office",
  },
  {
    id: "3",
    title: "Library Winter Break Hours",
    date: "2024-12-08",
    category: "General",
    priority: "normal",
    href: "/notices/library-winter-hours",
    department: "Library",
  },
  {
    id: "4",
    title: "Scholarship Application Deadline Extended",
    date: "2024-12-05",
    category: "Financial Aid",
    priority: "important",
    href: "/notices/scholarship-deadline",
    department: "Financial Aid Office",
  },
  {
    id: "5",
    title: "Campus COVID-19 Guidelines Update",
    date: "2024-12-01",
    category: "Health",
    priority: "normal",
    href: "/notices/covid-guidelines",
    department: "Health Services",
  },
  {
    id: "6",
    title: "Research Paper Submission Deadline",
    date: "2024-11-28",
    category: "Research",
    priority: "normal",
    href: "/notices/research-deadline",
    department: "Research Office",
  },
  {
    id: "7",
    title: "Student ID Card Collection Notice",
    date: "2024-11-25",
    category: "General",
    priority: "normal",
    href: "/notices/id-collection",
    department: "Student Affairs",
  },
  {
    id: "8",
    title: "Tuition Fee Payment Reminder",
    date: "2024-11-20",
    category: "Finance",
    priority: "important",
    href: "/notices/tuition-reminder",
    department: "Finance Office",
  },
];

export const eventCategories = [
  "All",
  "Academic",
  "Career",
  "Research",
  "Technology",
  "Alumni",
  "Cultural",
  "Sports",
];

export const noticeCategories = [
  "All",
  "Registration",
  "Examination",
  "General",
  "Financial Aid",
  "Health",
  "Research",
  "Finance",
];
