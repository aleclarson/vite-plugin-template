import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import {{camelize ident}} from '{{name}}'

export default defineConfig({
  plugins: [
    reactRefresh(),
    {{camelize ident}}(),
  ],
})
