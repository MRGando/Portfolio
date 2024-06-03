/** @type {import('next').NextConfig} */
import { withCss } from 'next-css';

export default withCss({
    webpack(config, { isServer }) {
        // Add support for CSS
        config.module.rules.push({
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        });

        return config;
    },
});
