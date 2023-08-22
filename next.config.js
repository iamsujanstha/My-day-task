const nextConfig = {
  env: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
  },

  typescript: {
    ignoreBuildErrors: true,
  },

  compiler: {
    styledComponents: true,
  },

  async redirects() {
    return [
      {
        source: "/",
        destination: "/tasks",
        permanent: false,
      },
    ];
  },

  webpack(config, options) {
    config.module.rules.push({
      test: /\.(ogg|mp3|wav|mpe?g)$/i,
      use: [
        {
          loader: "url-loader",
          options: {
            name: "[name]-[hash].[ext]",
          },
        },
      ],
    });
    return config;
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos", // Update to a string, not an array
        port: "",
        pathname: "/account123/**",
      },
    ],
  },
};

module.exports = nextConfig;
