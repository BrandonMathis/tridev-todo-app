import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'
import react from '@vitejs/plugin-react'
import path from 'path';
import fs from 'fs';

const sourceCodeDir = 'app/javascript';
const items = fs.readdirSync(sourceCodeDir);
const directories = items.filter((item) =>
  fs.lstatSync(path.join(sourceCodeDir, item)).isDirectory()
);
const aliasesFromJavascriptRoot = {};
directories.forEach((directory) => {
  aliasesFromJavascriptRoot[directory] = path.resolve(
    __dirname,
    sourceCodeDir,
    directory
  );
});

export default defineConfig({
  plugins: [
    RubyPlugin(),
    react()
  ],
  resolve: {
    preserveSymlinks: true,
    alias: {
      ...aliasesFromJavascriptRoot,
    },
  },
  build: {
    rollupOptions: {
      output: {
        // Build particularly large node modules independently
        // https://stackoverflow.com/a/69705514/1079597
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('twilio')) {
              return 'vendor_twilio';
            } else if (id.includes('pdftron')) {
              return 'vendor_pdftron';
            } else if (id.includes('firebase')) {
              return 'vendor_firebase';
            } else if (id.includes('pusher-js')) {
              return 'vendor_pusher';
            }
            return 'vendor'; // all other npm packages go in this generic 'vendor' chunk
          }
        },
      },
    },
  },

})
