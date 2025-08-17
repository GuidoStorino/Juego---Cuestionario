import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/Juego---Cuestionario/", // 👈 importante: el nombre exacto del repo entre comillas
  plugins: [react()],
});

