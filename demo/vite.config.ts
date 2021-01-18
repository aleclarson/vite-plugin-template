import {{camelize name}} from 'vite-plugin-{{name}}'
import reactPlugin from '@vitejs/plugin-react-refresh'
import type { UserConfig } from 'vite'

const config: UserConfig = {
  plugins: [
    reactPlugin(),
    {{camelize name}}(),
  ],
}

export default config
