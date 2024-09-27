import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@supabase/supabase-js': '@supabase/supabase-js/dist/main.js'
    }
  }
});
