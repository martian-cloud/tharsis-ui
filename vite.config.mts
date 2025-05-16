import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import relay from 'vite-plugin-relay';

export default defineConfig({
    server: {
        open: true,
        port: 3000,
    },
    build: {
        sourcemap: false
    },
    plugins: [
        relay,
        react({
            babel: {
                plugins: ['relay']
            },
        }),
    ]
});
