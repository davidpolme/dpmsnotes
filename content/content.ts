export const headerLinks = [
  { id: 1, label: "Inicio", path: "/" },
  { id: 2, label: "Conóceme", path: "/about-me" },
  { id: 3, label: "Portfolio", path: "/portfolio" },
  { id: 4, label: "Blog", path: "/blog" },
];

export const heroData = {
  image: {
    dark: "https://dpmsnotes.s3.us-east-1.amazonaws.com/illustrations/character-dark-mode.png",
    light:
      "https://dpmsnotes.s3.us-east-1.amazonaws.com/illustrations/character-light-mode.png",
    alt: "character",
    width: 40,
    height: 40,
  },
  title: "Hola, soy David 🚀",
  subtitle: `✨Full Stack Software Engineer. En este espacio comparto proyectos, aprendizajes y reflexiones sobre tecnología.✨`,
  buttonText: "Inicia Aquí",
  buttonLink: "/",
};




export const sectionsData = [
  {
    id: 1,
    title: "Portfolio",
    description: "Explora algunos de mis proyectos en software y tecnología.",
    image: {
      dark: "https://dpmsnotes.s3.us-east-1.amazonaws.com/illustrations/portfolio-dark-mode.png",
      light:
        "https://dpmsnotes.s3.us-east-1.amazonaws.com/illustrations/portfolio-light-mode.png",
    },
    alt: "Portfolio",
    link: "/portfolio",
  },
  {
    id: 2,
    title: "Blog",
    description:
      "Lee mis artículos sobre desarrollo, tecnología y experiencias personales.",
    image: {
      dark: "https://dpmsnotes.s3.us-east-1.amazonaws.com/illustrations/blog-dark-mode.png",
      light:
        "https://dpmsnotes.s3.us-east-1.amazonaws.com/illustrations/blog-light-mode.png",
    },
    alt: "Blog",
    link: "/blog",
  },
  {
    id: 3,
    title: "Conóceme",
    description:
      "Saber más sobre mí, mi experiencia y mis intereses fuera de la programación.",
    image: {
      dark: "https://dpmsnotes.s3.us-east-1.amazonaws.com/illustrations/about-me-and-dog-dark-mode.png",
      light:
        "https://dpmsnotes.s3.us-east-1.amazonaws.com/illustrations/about-me-light-mode.png",
    },
    alt: "Acerca de mí",
    link: "/about-me",
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