import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig(({mode}) => ({
  plugins: [react()],
  define: {
    isDev: mode === 'development',
    isProd: mode === 'production',
    currentEnv: JSON.stringify(mode)
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/assets/styles/variables.scss";
          @use "@/assets/styles/helpers.scss";
        `,
        silenceDeprecations: ['legacy-js-api'],
      },
    },
  },
}))
