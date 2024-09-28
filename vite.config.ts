import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';

import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    base: '/todo-web/',
    plugins: [TanStackRouterVite(), react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
});
