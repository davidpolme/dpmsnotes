// next.config.mjs
import createMDX from "@next/mdx";
import path from "path";

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
      { protocol: "https", hostname: "img.shields.io" },
      { protocol: "https", hostname: "raw.githubusercontent.com" },
      { protocol: "https", hostname: "www.vectorlogo.zone" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
      { protocol: "https", hostname: "pandas.pydata.org" },
    ],
  },
  pageExtensions: ["ts", "tsx", "mdx"],
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",

  sassOptions: {
    includePaths: [path.join(process.cwd(), "styles")],
  },
};

export default withMDX(nextConfig);
