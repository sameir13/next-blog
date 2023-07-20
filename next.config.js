/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
  },

  env: {
    DB_URI:
      "mongodb+srv://abc:abc@cluster0.npyo22m.mongodb.net/post?retryWrites=true&w=majority",
      NEXTAUTH_SECRET: "codewithsameer",
  },
};


module.exports = nextConfig;
