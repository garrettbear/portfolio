export interface ProjectPhoto {
  url: string;
  alt: string;
  description?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  imageUrl?: string;
  photos?: ProjectPhoto[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  year: number;
}

export const projects: Project[] = [
  {
    id: "metamask-design-system",
    title: "MetaMask Design System",
    description: "Contributed to MetaMask's comprehensive design system at ConsenSys, focusing on component library development and design consistency.",
    longDescription: "As part of the MetaMask team at ConsenSys, I contributed to the development of their comprehensive design system. This involved creating reusable components, establishing design patterns, and ensuring consistency across the MetaMask ecosystem. The work included developing React components, documenting design guidelines, and collaborating with designers and developers to maintain high standards of user experience.",
    technologies: ["React", "TypeScript", "Storybook", "Figma", "Design Systems", "NPM"],
    imageUrl: "/media.png",
    photos: [

    ],
    liveUrl: "https://metamask.github.io/metamask-storybook/index.html?path=/docs/components-componentlibrary-avataraccount--docs",
    githubUrl: "https://github.com/MetaMask/metamask-extension/tree/main/ui/components/component-library",
    featured: true,
    year: 2022
  },
  {
    id: "gumgum-design-system",
    title: "GumGum Design System",
    description: "Led the development of GumGum's design system, streamlining workflows and enhancing team productivity across the organization.",
    longDescription: "I led the development and implementation of GumGum's design system, which became a cornerstone for maintaining design consistency across all products. This project involved creating a comprehensive component library, establishing design tokens, and building documentation that enabled teams to work more efficiently. You can view the legacy design system at https://ds.gumgum.com/stable/ and the current system at https://concrete.gumgum.com/.",
    technologies: ["React", "Storybook", "Docs", "Figma", "Design Tokens", "NPM"],
    imageUrl: "/media.png",
    photos: [],
    liveUrl: "https://concrete.gumgum.com/",
    githubUrl: "https://github.com/gumgum/design-system",
    featured: true,
    year: 2018
  },
  {
    id: "gumgum-product-design",
    title: "GumGum Product Design",
    description: "Led product design for internal ad tech dashboards, creating UX/UI flows and building both low-fidelity designs and high-fidelity coded prototypes that evolved into production-ready applications.",
    longDescription: "I led the product design for GumGum’s internal data-heavy dashboard applications, focusing on UX/UI that supported complex ad tech workflows. My process combined low-fidelity wireframes for early validation with high-fidelity coded prototypes built directly in the design system. These prototypes transitioned seamlessly into production code, reducing friction between design and engineering. The result was a suite of internal tools that improved data visualization, streamlined campaign management, and increased efficiency across the organization.",
    technologies: ["React",  "Netlify", "Figma", "Design System", "Prototyping"],
    imageUrl: "/media.png",
    photos: [
      {
        url: "/projects/gumgum-dashboard-before-after.png",
        alt: "GumGum Ad Manager Before and After",
        description: "GumGum Ad Manager Before and After"
      },
    ],
    liveUrl: "https://gumgum.com/",
    featured: true,
    year: 2018
  },
  {
    id: "cvs-receipt",
    title: "CVS Receipt Infinite Scroll",
    description: "A fun CodePen experiment poking fun at CVS’s notoriously long receipts with an endless scroll effect.",
    longDescription: "This playful CodePen project recreates the experience of receiving an endlessly long CVS receipt — because anyone who’s shopped at CVS knows the struggle. Built as a joke, it uses simple CSS and JavaScript to create an infinite scroll effect. To take it further, I built a quick data scraper for the CVS website that turned coupons into products, adding an extra layer of realism to the parody. The pen gained traction, becoming a top feature on CodePen and getting mentioned on both the Syntax.fm and CodePen Radio podcasts, showing how a small playful idea can resonate widely with the developer community.",
    technologies: ["HTML", "CSS", "JavaScript"],
    imageUrl: "/media.png",
    liveUrl: "https://codepen.io/garrettbear/pen/JzMmqg",
    githubUrl: "https://github.com/garrettbear/CVScraper",
    featured: false,
    year: 2019
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with Next.js and Tailwind CSS, showcasing design and development skills.",
    longDescription: "This portfolio website represents a perfect blend of design and development skills. Built with Next.js for optimal performance and SEO, styled with Tailwind CSS for rapid development, and featuring a clean, modern aesthetic that reflects my design philosophy. The site includes smooth animations, responsive design, and a focus on user experience.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    imageUrl: "/media.png",
    liveUrl: "https://www.garrettbear.com",
    githubUrl: "https://github.com/garrettbear/portfolio",
    featured: false,
    year: 2025
  },
  {
    id: "milkcrate-art",
    title: "Milkcrate.art",
    description: "A playful 3D digital project inspired by milk crates, created as an experimental piece of design and art.",
    longDescription: "Milkcrate.art is a random 3D experiment I made for fun, serving as a digital inspiration for a future project: creating tinted resin milk crates. While the long-term goal is physical fabrication, this project showcases the early creative exploration in a digital medium, blending design, art, and imagination.",
    technologies: ["Three.js", "React"],
    imageUrl: "/media.png",
    liveUrl: "https://milkcrate.art",
    githubUrl: "https://github.com/garrettbear/milkcrate.art",
    featured: false,
    year: 2023
  },
  {
    id: "ricotta-bear",
    title: "Ricotta Bear",
    description: "Branding and art direction for a pizza pop-up.",
    longDescription: "Based in Los Angeles, Ricotta Bear is a beloved pizza pop-up that specializes in naturally leavened “sourdough” pizza. We cater to intimate events, providing guests with a memorable experience featuring our fresh, gourmet pizzas and an assortment of delectable dishes.",
    technologies: ["Art Direction", "Branding", "Illustration"],
    imageUrl: "/media.png",
    photos: [
      {
        url: "/projects/garden-party-gold.jpg",
        alt: "Garden Party Gold",
        description: "Garden Party Gold"
      },
      {
        url: "/projects/garden-party.jpg",
        alt: "Garden Party",
        description: "Garden Party"
      },
      {
        url: "/projects/la-festa-invite.jpeg",
        alt: "La Festa Invite",
        description: "La Festa Invite"
      },
    ],
    liveUrl: "https://instagram.com/ricottabear",
    featured: false,
    year: 2024
  }
];

export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter(project => project.featured);
}

export function getAllProjects(): Project[] {
  return projects.sort((a, b) => b.year - a.year);
}
