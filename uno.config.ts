import {
  defineConfig,
  presetAttributify,
  presetWind3,
  presetTypography,
  presetIcons,
  transformerDirectives,
} from 'unocss'
import { generateStyles } from './app/lib/unocss'

const globalStyles = {
  "html, body": "m-0 p-0",
  "body": "text-main-text bg-color-background",
  // "body": "text-main-text font-base bg-background",
}

export default defineConfig({
  presets: [
    presetWind3(), // Tailwind CSS
    presetAttributify(), // 属性モード
    presetTypography(), // タイポグラフィ（prose）
    presetIcons(), // アイコン
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
    colors: {
      primary: '#ec6800',
      secondary: '#63baab',
      accent: '#c4fcf0',
      colorBackground: '#fff5eb',
      onBackground: '#dfe0df',
      mainText: '#2C1E22',
      gradient: {
        50: '#2f4858',
        100: '#41527e',
        300: '#7a5191',
        500: '#bb4484',
        700: '#e74257',
        900: '#ec6800',
      }
    },
  },
  shortcuts: {},
  preflights: [
    {
      getCSS: () => generateStyles(globalStyles)
    }
  ]
})