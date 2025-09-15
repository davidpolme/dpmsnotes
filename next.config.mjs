import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // necesario si usas next export
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media2.dev.to", // <-- dominio que estás usando
      },
      {
        protocol: "https",
        hostname: "dev-to-uploads.s3.amazonaws.com", // en caso de que uses directos
      },
    ],
  },
  pageExtensions: ["ts", "tsx", "mdx"],
};

export default withMDX(nextConfig);
