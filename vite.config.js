import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  //開發中、產品路徑                               //github檔案名稱
  base: process.env.NODE_ENV === 'production' ? '/week6_React_homework/':'/',
  plugins: [react()],
})