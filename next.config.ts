const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/dpmsnotes' : '',
  assetPrefix: isProd ? '/dpmsnotes/' : '',
};

module.exports = nextConfig;

