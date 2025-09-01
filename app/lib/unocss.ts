// 簡略化したスタイルの記述を正しく適用できるようにする
export const generateStyles = (styles: Record<string, string>) => {
  return Object.entries(styles)
    .map(([selector, classes]) => `${selector} { @apply ${classes} }`)
    .join('\n\n  ')
}