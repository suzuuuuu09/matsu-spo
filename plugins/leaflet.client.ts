import L from 'leaflet'

// Leafletマーカーアイコンの問題を修正
// デフォルトマーカーのアイコンURLを削除
delete (L.Icon.Default.prototype as any)._getIconUrl

// CDNからアイコンを読み込むように設定
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
})
