// News articles data for NSU website

export interface NewsArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  category: string;
  author: string;
  featured: boolean;
}

export const newsArticles: NewsArticle[] = [
  {
    id: "1",
    title: "NSU Achieves Top Ranking in QS World University Rankings 2025",
    slug: "nsu-qs-ranking-2025",
    excerpt: "North South University has been recognized among the top universities in Asia in the QS World University Rankings 2025, reflecting our commitment to academic excellence.",
    content: "Full article content here...",
    image: "/images/news/ranking.jpg",
    date: "2024-12-10",
    category: "Achievement",
    author: "NSU Communications",
    featured: true,
  },
  {
    id: "2",
    title: "New State-of-the-Art Research Lab Inaugurated",
    slug: "new-research-lab-2024",
    excerpt: "The university has opened a cutting-edge research facility equipped with the latest technology to support groundbreaking research across disciplines.",
    content: "Full article content here...",
    image: "/images/news/research-lab.jpg",
    date: "2024-12-05",
    category: "Research",
    author: "NSU Communications",
    featured: true,
  },
  {
    id: "3",
    title: "NSU Students Win International Hackathon",
    slug: "hackathon-win-2024",
    excerpt: "A team of NSU Computer Science students secured first place at the Global Tech Hackathon, competing against 500+ teams worldwide.",
    content: "Full article content here...",
    image: "/images/news/hackathon.jpg",
    date: "2024-12-01",
    category: "Student Achievement",
    author: "Department of CSE",
    featured: false,
  },
  {
    id: "4",
    title: "Partnership with Leading Tech Company Announced",
    slug: "tech-partnership-2024",
    excerpt: "NSU has signed a memorandum of understanding with a leading technology company to enhance industry-academia collaboration.",
    content: "Full article content here...",
    image: "/images/news/partnership.jpg",
    date: "2024-11-28",
    category: "Partnership",
    author: "NSU Communications",
    featured: false,
  },
  {
    id: "5",
    title: "Annual Convocation Ceremony 2024 Held Successfully",
    slug: "convocation-2024",
    excerpt: "Over 2,000 graduates received their degrees at the 29th Annual Convocation Ceremony, celebrating years of hard work and dedication.",
    content: "Full article content here...",
    image: "/images/news/convocation.jpg",
    date: "2024-11-20",
    category: "Event",
    author: "NSU Communications",
    featured: true,
  },
  {
    id: "6",
    title: "NSU Professor Receives Prestigious Research Grant",
    slug: "research-grant-2024",
    excerpt: "Dr. Ahmed Rahman from the Department of Pharmaceutical Sciences has received a $500,000 research grant for cancer research.",
    content: "Full article content here...",
    image: "/images/news/research-grant.jpg",
    date: "2024-11-15",
    category: "Research",
    author: "Research Office",
    featured: false,
  },
];

export const newsCategories = [
  "All",
  "Achievement",
  "Research",
  "Student Achievement",
  "Partnership",
  "Event",
  "Announcement",
];
