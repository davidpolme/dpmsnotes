import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media2.dev.to",
      },
      {
        protocol: "https",
        hostname: "dev-to-uploads.s3.amazonaws.com",
      },
    ],
  },
  pageExtensions: ["ts", "tsx", "mdx"],
  basePath: isProd ? "/dpmsnotes" : "",
  assetPrefix: isProd ? "/dpmsnotes/" : "",
};

export default withMDX(nextConfig);
