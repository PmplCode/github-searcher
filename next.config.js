/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "avatars.githubusercontent.com",
      },
      {
        hostname: "github.githubassets.com",
      },
      {
        hostname: "img.icons8.com",
      },
      {
        hostname: "icons.veryicon.com",
      },
    ],
  }
};

module.exports = nextConfig;
