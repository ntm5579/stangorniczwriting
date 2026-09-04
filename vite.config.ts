import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'
import Sitemap from 'vite-plugin-sitemap'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    Sitemap({ hostname: 'https://ntm5579.github.io/stangorniczwriting' }),
  ],
  base: '/stangorniczwriting',
})
