import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // obligatorio con export estático
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media2.dev.to",
      },
      {
        protocol: "https",
        hostname: "dev-to-uploads.s3.amazonaws.com",
      },
      // 🔽 agrega todos los hosts externos que usas en <Image />
      {
        protocol: "https",
        hostname: "img.shields.io",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "www.vectorlogo.zone",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "pandas.pydata.org",
      },
    ],
  },
  pageExtensions: ["ts", "tsx", "mdx"],
  basePath: isProd ? "/dpmsnotes" : "",
  assetPrefix: isProd ? "/dpmsnotes/" : "",
};

export default withMDX(nextConfig);
