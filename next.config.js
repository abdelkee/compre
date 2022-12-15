/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
});

module.exports = withPWA({
  experimental: { appDir: true },
  images: {
    domains: ["exgqcqdbjjdllndxzmze.supabase.co"],
  },
});

// module.exports = withPWA({
//   pwa: {
//     dest: "public",
//     register: true,
//     skipWaiting: true,
//
//   },
// });
