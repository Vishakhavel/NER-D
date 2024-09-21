/** @type {import('next').NextConfig} */
const nextConfig = {
  // redirect the app to the /home page even if the user enters "/"
  async redirects() {
    return [
      {
        source: "/",
        destination: "/upload", // The page you want as the default
        permanent: true, // If this is a permanent redirect (set to `false` for temporary)
      },
    ];
  },
};

export default nextConfig;
