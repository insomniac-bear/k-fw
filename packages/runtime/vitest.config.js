import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    reporters: 'verbose',
    environment: 'jsdom',
    include: ['**/*.test.{ts,js,tsx,jsx}', '**/*.spec.{ts,js,tsx,jsx}'],
    exclude: ['**/node_modules/**', '**/dist/**'],
  },
  root: '.',
});
