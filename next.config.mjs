/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
        // Add support for CSS
        config.module.rules.push({
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        });

        return config;
    },
};

module.exports = nextConfig;