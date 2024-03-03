/** @type {import('next').NextConfig} */


const nextConfig = {
  // transpilePackages: ['three'],

  images: {
    remotePatterns: [
      {
        hostname: 'pratishlmc.vercel.app',
        protocol: 'https',

      },
      {
        hostname: 'img.icons8.com',
        protocol: 'https',
      }
    ]
  }

}

export default nextConfig;
