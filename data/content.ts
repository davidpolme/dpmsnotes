import golangBg from "@/public/images/golangbg.png";

export const headerLinks = [
  { id: 1, label: "Inicio", path: "/" },
  { id: 2, label: "Conóceme", path: "/conoceme" },
  { id: 3, label: "Proyectos", path: "/proyectos" },
  { id: 4, label: "Blog", path: "/blog" },
];

export const welcomeData = {
  title: "¡Hola! 👋",
  paragraph: `Soy David Polania, Full Stack Software Engineer apasionado por Golang, React, Cloud y AI/ML. 
En este espacio comparto proyectos, aprendizajes y reflexiones sobre tecnología. 
Además de programar, me encanta la música: toco guitarra y estoy aprendiendo piano. 🚀`,
  button: "Conóceme",
};

export const itemsData = [
  {
    id: 1,
    title: "Proyectos",
    description: "Explora algunos de mis proyectos en software y tecnología.",
    image: golangBg,
    alt: "Proyectos",
    link: "/proyectos",
  },
];

export const footerData = {
  about: `Soy David Polanía, ingeniero de software full stack. 
Me apasionan la tecnología, la música y seguir aprendiendo cada día.`,
  social: [
    { label: "LinkedIn", href: "https://linkedin.com/in/davidpolme" },
    { label: "YouTube", href: "https://www.youtube.com/@hiitus6183" },
    { label: "LeetCode", href: "https://leetcode.com/u/davidpolme/" },
    { label: "Dev.to", href: "https://dev.to/davidpolme" },
  ],
};
