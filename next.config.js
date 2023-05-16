/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,

    eslint: {
        dirs: ["app", "lib", "constants"],
    },

    async rewrites() {
        return [{ source: "/:path*", destination: "/api/:path*" }];
    },
};

module.exports = nextConfig;
