import {
  defineConfig,
  presetAttributify,
  presetWind3,
  presetTypography,
  transformerDirectives,
} from 'unocss'
import { generateStyles } from './app/lib/unocss'

const globalStyles = {
  "html, body": "m-0 p-0",
  "body": "bg-red-500"
  // "body": "text-main-text font-base bg-background",
}

export default defineConfig({
  presets: [
    presetWind3(), // Tailwind CSS
    presetAttributify(), // 属性モード
    presetTypography(), // タイポグラフィ（prose）
  ],
  transformers: [
    // preflightsでTailwindのクラスを使用するための変換
    // これにより、Tailwindのユーティリティクラスが適用される
    // 例: `@apply bg-blue-500` のような記述が可能になる
    transformerDirectives(),
  ],
  content: {
    filesystem: ['app/**/*.{html,js,ts,jsx,tsx,svelte,vue}']
  },
  theme: {
  },
  shortcuts: {},
  preflights: [
    {
      getCSS: () => generateStyles(globalStyles)
    }
  ]
})