export type Project = {
  id: string;
  slug: string;
  name: string;
  category?: string | null;
  client?: string | null;
  role?: string | null;
  objective?: string | null;
  overview?: string | null;
  responsibilities?: readonly string[] | null;
  result?: string | null;
  date?: string | null;
  description?: string | null;
  year?: number | null;
  location?: string | null;
  participantCount?: number | null;
  statistics?:
    | readonly {
        value: string;
        label: string;
      }[]
    | null;
  coverImage: string;
  galleryImages: readonly string[];
  galleryOrientations?: readonly ("landscape" | "portrait")[];
  galleryAspectRatios?: readonly ("4/3" | "3/2" | "3/4")[];
};

export const projects: readonly Project[] = [
  {
    id: "global-education-fair-m-tower",
    slug: "global-education-fair-m-tower",
    name: "Global Education Fair — M-Tower",
    category: "Large-scale event coordination",
    client: "Education Valley",
    role: "Creative Event Organizing Leader",
    overview:
      "Led overall event coordination, team communication, on-site operations and real-time problem solving.",
    date: "June 20, 2026",
    location: "M-Tower, Hledan, Yangon",
    statistics: [
      { value: "80+", label: "Team members and stakeholders coordinated" },
      { value: "35", label: "Volunteers supervised" },
      { value: "25", label: "External guests managed" },
      { value: "20", label: "Employees coordinated" },
    ],
    coverImage:
      "/assets/optimized/covers/global-education-fair-m-tower-cover.webp",
    galleryImages: [
      "/assets/optimized/gallery/global-education-fair-m-tower-01.webp",
      "/assets/optimized/gallery/global-education-fair-m-tower-02.webp",
      "/assets/optimized/gallery/global-education-fair-m-tower-03.webp",
      "/assets/optimized/gallery/global-education-fair-m-tower-04.webp",
    ],
    galleryAspectRatios: ["3/2", "3/2", "3/2", "3/2"],
  },
  {
    id: "germany-education-fair",
    slug: "germany-education-fair",
    name: "Germany Education Fair",
    category: "International education fair / marketing and operations",
    client: "Education Valley",
    role: "Marketing Executive & Event Management Leader",
    objective:
      "Promote and organize an education fair connecting students with study opportunities in Germany.",
    responsibilities: [
      "Executed marketing strategies to increase awareness",
      "Coordinated online and offline campaigns",
      "Managed event-day operations and information flow",
    ],
    result:
      "Delivered a well-organized fair with strong participant engagement and seamless event execution.",
    date: "March 28, 2026",
    location: "Jasmine Palace Hotel",
    coverImage:
      "/assets/optimized/covers/germany-education-fair-cover.webp",
    galleryImages: [
      "/assets/optimized/gallery/germany-education-fair-01.webp",
      "/assets/optimized/gallery/germany-education-fair-02.webp",
      "/assets/optimized/gallery/germany-education-fair-03.webp",
      "/assets/optimized/gallery/germany-education-fair-04.webp",
    ],
    galleryAspectRatios: ["3/2", "3/2", "3/2", "3/2"],
  },
  {
    id: "language-center-branch-opening",
    slug: "language-center-branch-opening",
    name: "Language Center Branch Opening",
    category: "Opening ceremony / program coordination",
    client: "CS Education Center",
    role: "Event Coordinator & MC",
    objective:
      "Organize and deliver the opening ceremony of a new language center branch.",
    responsibilities: [
      "Designed the event agenda and program flow",
      "Organized opening sequence and guest moments",
      "Managed practical timing and event objectives",
    ],
    result:
      "Successfully supported a professional and engaging branch opening ceremony.",
    date: "February 1, 2026",
    location: "South Okkalapa, Yangon",
    coverImage:
      "/assets/optimized/covers/language-center-branch-opening-cover.webp",
    galleryImages: [
      "/assets/optimized/gallery/language-center-branch-opening-01.webp",
      "/assets/optimized/gallery/language-center-branch-opening-02.webp",
      "/assets/optimized/gallery/language-center-branch-opening-03.webp",
    ],
    galleryOrientations: ["landscape", "portrait", "landscape"],
  },
  {
    id: "global-education-fair",
    slug: "global-education-fair",
    name: "Global Education Fair",
    category: "Education fair / student engagement platform",
    client: "Education Valley",
    role: "Marketing Leader & Event Organizer",
    objective:
      "Plan, coordinate and execute an education fair that connects students with international education opportunities.",
    responsibilities: [
      "Developed the event concept and floor plan",
      "Coordinated guests, employees and volunteers",
      "Managed operations, logistics and team communication",
    ],
    result:
      "Delivered a well-organized event with smooth operations and positive participant experiences.",
    date: "October 19, 2025",
    location: "Pan Pacific Hotel",
    coverImage:
      "/assets/optimized/covers/global-education-fair-cover.webp",
    galleryImages: [
      "/assets/optimized/gallery/global-education-fair-01.webp",
      "/assets/optimized/gallery/global-education-fair-02.webp",
      "/assets/optimized/gallery/global-education-fair-03.webp",
      "/assets/optimized/gallery/global-education-fair-04.webp",
    ],
    galleryAspectRatios: ["4/3", "4/3", "4/3", "4/3"],
  },
  {
    id: "kirigami-burmese-papercut",
    slug: "kirigami-burmese-papercut",
    name: "Kirigami & Burmese Papercut",
    category: "Art exhibition / cultural project",
    client: "Solo Exhibition by Phyo Thamein",
    role: "Curator & Creative Project Manager",
    objective:
      "Curate and manage a solo exhibition highlighting Burmese papercutting as cultural heritage.",
    responsibilities: [
      "Created a balanced exhibition flow",
      "Organized artworks by storytelling and audience experience",
      "Managed timeline, preparation and installation",
    ],
    result:
      "Successfully curated and managed “NARROW SKY: Kirigami and Burmese Papercut.”",
    date: "October 2–16, 2025",
    location: "The Japan Foundation, Yangon",
    coverImage:
      "/assets/optimized/covers/kirigami-burmese-papercut-cover.webp",
    galleryImages: [
      "/assets/optimized/gallery/kirigami-burmese-papercut-01.webp",
      "/assets/optimized/gallery/kirigami-burmese-papercut-02.webp",
      "/assets/optimized/gallery/kirigami-burmese-papercut-03.webp",
      "/assets/optimized/gallery/kirigami-burmese-papercut-04.webp",
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
