// Hero slider data for NSU website

export interface HeroSlide {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  ctaButtons: {
    text: string;
    href: string;
    variant: "primary" | "secondary";
  }[];
}

export const heroSlides: HeroSlide[] = [
  {
    id: "1",
    title: "Welcome to North South University",
    subtitle: "The First Private University of Bangladesh",
    description: "Established in 1992, NSU has been at the forefront of higher education, producing leaders who make a difference globally.",
    image: "/images/hero/campus-main.jpg",
    ctaButtons: [
      { text: "Apply for Admission", href: "/admission", variant: "primary" },
      { text: "Explore Programs", href: "/academic/programs", variant: "secondary" },
    ],
  },
  {
    id: "2",
    title: "Spring 2025 Admission Open",
    subtitle: "Your Future Starts Here",
    description: "Join our vibrant community of scholars and innovators. Applications are now open for undergraduate and graduate programs.",
    image: "/images/hero/admission.jpg",
    ctaButtons: [
      { text: "Apply Now", href: "/admission/how-to-apply", variant: "primary" },
      { text: "International Applicants", href: "/admission/international", variant: "secondary" },
    ],
  },
  {
    id: "3",
    title: "World-Class Research",
    subtitle: "Innovation & Discovery",
    description: "Our faculty and students are engaged in cutting-edge research across disciplines, contributing to global knowledge.",
    image: "/images/hero/research.jpg",
    ctaButtons: [
      { text: "Explore Research", href: "/research", variant: "primary" },
      { text: "View Publications", href: "/publications", variant: "secondary" },
    ],
  },
  {
    id: "4",
    title: "State-of-the-Art Campus",
    subtitle: "Learn, Grow, Succeed",
    description: "Experience our modern facilities, extensive library, and vibrant campus life designed to nurture your potential.",
    image: "/images/hero/campus-aerial.jpg",
    ctaButtons: [
      { text: "Virtual Tour", href: "/about/campus", variant: "primary" },
      { text: "Visit NSU", href: "/admission/visit", variant: "secondary" },
    ],
  },
];
