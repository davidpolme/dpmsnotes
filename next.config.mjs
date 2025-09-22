import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "media2.dev.to" },
      { protocol: "https", hostname: "dev-to-uploads.s3.amazonaws.com" },
    ],
  },
  pageExtensions: ["ts", "tsx", "mdx"],
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",
};

export default withMDX(nextConfig);
