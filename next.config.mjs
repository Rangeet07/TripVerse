/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
    images:{ 
      qualities:[75,100],
    remotePatterns:[
      {
        protocol:'https',
        hostname:'images.unsplash.com'
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com'
      }
    ]
  }
};

export default nextConfig;
