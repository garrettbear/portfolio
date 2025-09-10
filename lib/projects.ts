export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  imageUrl?: string;
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
    liveUrl: "https://metamask.github.io/metamask-storybook/index.html?path=/docs/components-componentlibrary-avataraccount--docs",
    githubUrl: "https://github.com/MetaMask/metamask-extension/tree/main/ui/components/component-library",
    featured: true,
    year: 2022
  },
  {
    id: "gumgum-design-system",
    title: "GumGum Design System",
    description: "Led the development of GumGum&apos;s design system, streamlining workflows and enhancing team productivity across the organization.",
    longDescription: "I led the development and implementation of GumGum&apos;s design system, which became a cornerstone for maintaining design consistency across all products. This project involved creating a comprehensive component library, establishing design tokens, and building documentation that enabled teams to work more efficiently. You can view the legacy design system at https://ds.gumgum.com/stable/ and the current system at https://concrete.gumgum.com/.",
    technologies: ["React", "Storybook", "Docs", "Figma", "Design Tokens", "NPM"],
    imageUrl: "/media.png",
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
    liveUrl: "https://gumgum.com/",
    featured: true,
    year: 2018
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
    id: "ricotta-bear",
    title: "Ricotta Bear",
    description: "Branding and art direction for a pizza pop-up.",
    longDescription: "Based in Los Angeles, Ricotta Bear is a beloved pizza pop-up that specializes in naturally leavened “sourdough” pizza. We cater to intimate events, providing guests with a memorable experience featuring our fresh, gourmet pizzas and an assortment of delectable dishes.",
    technologies: ["Art Direction", "Branding", "Illustration"],
    imageUrl: "/media.png",
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
