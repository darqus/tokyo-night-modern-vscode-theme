/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    include: ['test/**/*.test.ts'],
    exclude: ['node_modules/**', 'dist/**'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'dist/',
        'scripts/',
        'test/',
        'coverage/',
        '**/*.test.ts',
        '**/index.ts', // Exclude entry point files that might cause issues
      ],
      include: ['src/**/*.ts'],
      enabled: process.env.COVERAGE === 'true', // Only enable coverage when explicitly requested
    },
  },
})
