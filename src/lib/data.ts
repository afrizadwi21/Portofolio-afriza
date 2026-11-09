export interface ProjectItem {
  id: string;
  name: string;
  type: string;
  category: string;
  description: string;
  tags: string[];
  color: string;
  kind: "bars" | "rows";
  highlights: string[];
  liveDemoUrl?: string;
  githubUrl?: string;
}

export interface TechLane {
  title: string;
  speedSec: number;
  items: string[];
}

export interface JourneyStep {
  phase: string;
  title: string;
  description: string;
}

export const PROJECTS: ProjectItem[] = [
  {
    id: "distribucore",
    name: "DistribuCore",
    type: "SaaS",
    category: "B2B SaaS · Distribution Management",
    description:
      "A personal product project focused on business process and distribution management, a SaaS-style platform for organising how goods and operations move through a business.",
    tags: ["B2B SaaS", "Business Process", "Stack: TBA"],
    color: "var(--acc)",
    kind: "bars",
    highlights: [
      "Product-focused build around distribution workflows",
      "Technologies: to be filled in",
      "Live demo: link coming soon",
    ],
    liveDemoUrl: "#",
    githubUrl: "https://github.com/afrizadwi21",
  },
  {
    id: "laundryflow",
    name: "LaundryFlow",
    type: "Backend",
    category: "Backend Development · Odoo Integration",
    description:
      "A laundry management backend with API development at its core: customer management, order management, and integrations built around Odoo.",
    tags: ["Python", "Odoo", "PostgreSQL", "REST API"],
    color: "var(--blue)",
    kind: "rows",
    highlights: [
      "Backend architecture designed around Odoo",
      "Customer management",
      "Order management",
      "Integrations through REST API",
    ],
    liveDemoUrl: "#",
    githubUrl: "https://github.com/afrizadwi21",
  },
];

export const TECH_LANES: TechLane[] = [
  {
    title: "Programming",
    speedSec: 34,
    items: ["JavaScript", "TypeScript", "PHP", "Python", "Go"],
  },
  {
    title: "Frontend",
    speedSec: 42,
    items: ["React.js", "Next.js", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Backend & Database",
    speedSec: 38,
    items: ["Laravel", "Node.js", "Odoo", "PostgreSQL", "REST API"],
  },
  {
    title: "Tools",
    speedSec: 46,
    items: ["Git", "GitHub", "Docker", "Figma", "VS Code"],
  },
];

export const JOURNEY_STEPS: JourneyStep[] = [
  {
    phase: "Foundation",
    title: "Software & Game Development",
    description:
      "Started at SMK Negeri 4 Padalarang, building the fundamentals of programming and software design.",
  },
  {
    phase: "Exploration",
    title: "Web development learning",
    description:
      "From HTML, CSS and JavaScript to modern frameworks and tooling.",
  },
  {
    phase: "Depth",
    title: "Backend development",
    description:
      "Working with APIs, databases and Odoo-based systems.",
  },
  {
    phase: "Practice",
    title: "Internship & real-world projects",
    description:
      "Applying skills to business-oriented applications outside the classroom.",
  },
  {
    phase: "Now",
    title: "Full-stack focus",
    description:
      "Leveling up with Next.js, TypeScript, Go and Docker.",
  },
];

export const PROFILE_DATA = {
  name: "M. Afriza Dwi I",
  shortName: "Afriza",
  role: "Web Developer Student | Aspiring Full-Stack Developer",
  school: "SMK Negeri 4 Padalarang",
  major: "Software & Game Dev (PPLG/RPL)",
  learning: "Next.js · TypeScript · Go · Docker",
  direction: "Full-Stack Development",
  headline: "Building Digital Experiences Through Code.",
  quote:
    "“I build digital experiences, develop practical software solutions, and explore modern technologies to solve real-world problems.”",
  lead:
    "I’m Afriza, a developer passionate about building modern web applications, backend systems, and practical digital solutions.",
  email: "afriza.dwi21@gmail.com",
  github: "https://github.com/afrizadwi21",
  linkedin: "https://www.linkedin.com/in/afrizadwi/",
  chips: [
    "Web Development",
    "Backend Engineering",
    "API Development",
    "AI-Powered Apps",
    "SaaS Products",
  ],
};
