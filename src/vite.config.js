// vitest.config.js
import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        globals: true,            // Allows using describe/it without imports
        environment: 'jsdom',     // ✅ Simulates a browser (fixes document/localStorage errors)
        setupFiles: './src/setupTests.js', // CRA already has setupTests.js, reuse it here
    },
});
