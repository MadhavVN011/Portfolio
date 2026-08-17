export const profile = {
  name: "Madhav V Nair",
  age: 22,
  location: "Mumbai, Maharashtra, India",
  avatarUrl: "/profile.jpg",
  bio: [
    "I'm a Computer Science & Engineering student specializing in Cloud Computing who enjoys building things and figuring out how technology can solve real problems. My work spans AI/ML, software development, cloud infrastructure, and Web3, and I'm always curious about what I can build by combining them.",
    "Currently, I'm working as an AI Development Intern at Skandha Media Services, where I'm getting hands-on experience building AI-driven solutions and exploring how they can be applied to real-world workflows. I've also been a national hackathon finalist and have built projects ranging from computer vision and intelligent systems to blockchain-based applications.",
    "When I'm not working or studying, you'll usually find me experimenting with a new project, exploring an interesting technology, or turning some random idea into something that actually works. I'm always looking for the next thing worth building.",
  ],
  email: "nairmadhav523@gmail.com",
  github: "https://github.com/MadhavVN011",
  githubUsername: "MadhavVN011",
  linkedin: "https://linkedin.com/in/madhav-nair-272249254",
  twitter: "https://x.com/nair32595",
  resumeUrl: "/resume.pdf",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Github", href: "#github" },
  { label: "Inspiration", href: "#hackathons" },
];

export type Experience = {
  role: string;
  organization: string;
  period: string;
  details: string;
  current?: boolean;
};

export const experiences: Experience[] = [
  {
    role: "AI Dev Intern",
    organization: "Skandha Media Services",
    period: "Present",
    details: "Contributing to AI development and media service solutions.",
    current: true,
  },
  {
    role: "Cloud Computing Intern",
    organization: "SkillFied Mentor",
    period: "Jan 2026 – Feb 2026",
    details:
      "Executed core cloud infrastructure tasks, server provisioning, and application deployments while optimizing scalable cloud architectures.",
  },
];

export type Project = {
  name: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    name: "AgroTrustChain",
    description:
      "Decentralized agricultural traceability platform. Implemented secure smart contracts, immutable product traceability, hash verification, and utility tokens.",
    tech: ["Flask", "Solidity", "Web3.py", "Ganache", "Truffle", "SQL Server"],
    github: "https://github.com/MadhavVN011",
  },
  {
    name: "HealthcareDL",
    description:
      "Full-stack health diagnostic platform using deep learning with 90%+ prediction accuracy and algorithmic recommendations.",
    tech: ["TensorFlow", "Flask", "Python"],
    github: "https://github.com/MadhavVN011",
  },
  {
    name: "OrbitUs",
    description:
      "Decentralized collaboration tool built for EthIndia 2024. Smart contracts for backend immutability and responsive UI.",
    tech: ["React.js", "Next.js", "Solidity"],
    github: "https://github.com/MadhavVN011",
  },
];

export type Skill = {
  name: string;
  icon: string;
};

export type SkillCategory = {
  category: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML5", icon: "html5" },
      { name: "CSS3", icon: "css3" },
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "React", icon: "react" },
      { name: "TailwindCSS", icon: "tailwindcss" },
      { name: "Figma", icon: "figma" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Python", icon: "python" },
      { name: "Flask", icon: "flask" },
      { name: "Node.js", icon: "nodejs" },
      { name: "Express.js", icon: "express" },
      { name: "Solidity", icon: "solidity" },
      { name: "C", icon: "c" },
      { name: "C++", icon: "cpp" },
    ],
  },
  {
    category: "AI & Machine Learning",
    skills: [
      { name: "PyTorch", icon: "pytorch" },
      { name: "TensorFlow", icon: "tensorflow" },
      { name: "Keras", icon: "keras" },
      { name: "Scikit-Learn", icon: "scikitlearn" },
      { name: "OpenCV", icon: "opencv" },
      { name: "Pandas", icon: "pandas" },
      { name: "NumPy", icon: "numpy" },
    ],
  },
  {
    category: "DevOps & Cloud",
    skills: [
      { name: "AWS", icon: "aws" },
      { name: "Linux", icon: "linux" },
      { name: "Git", icon: "git" },
      { name: "Docker", icon: "docker" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MySQL", icon: "mysql" },
      { name: "Apache", icon: "apache" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "PowerBI", icon: "powerbi" },
    ],
  },
];

export type Certification = {
  name: string;
  issuer: string;
};

export const certifications: Certification[] = [
  { name: "Artificial Intelligence", issuer: "Great Learning Academy" },
  { name: "Data Structures in C", issuer: "Great Learning Academy" },
  { name: "Cloud Computing", issuer: "Skill Vertex" },
  { name: "Foundation of Cloud IoT Edge ML", issuer: "NPTEL" },
  { name: "Cyber Security & Ethical Hacking", issuer: "IIT Roorkee" },
  { name: "DBMS & MySQL", issuer: "Udemy" },
  { name: "Analysis for Algorithms", issuer: "TutorialsPoint" },
];

export type Hackathon = {
  name: string;
  result: string;
  detail?: string;
  location: string;
  date?: string;
  iconType: "ethereum" | "web3";
};

export const hackathons: Hackathon[] = [
  {
    name: "EthIndia 2024",
    result: "National Finalist",
    detail:
      "Built OrbitUs: Co-developed a secure decentralized collaboration platform using Solidity smart contracts for back-end immutability and architected an ultra-responsive front-end via React.js and Next.js.",
    location: "Bengaluru, India",
    iconType: "ethereum",
  },
  {
    name: "Unfold 2024",
    result: "National Finalist",
    location: "India",
    iconType: "web3",
  },
  {
    name: "EthMumbai 2023",
    result: "National Finalist",
    location: "Mumbai, India",
    iconType: "ethereum",
  },
];
