import { sveltekit } from '@sveltejs/kit/vite';
import { build, defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
    build: {
        minify: false // minification is causing odd bugs on IOS
    }
});
