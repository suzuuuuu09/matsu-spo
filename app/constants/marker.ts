import type { Dayjs } from "dayjs";
import dayjs from "dayjs";

export type DateInfo = Dayjs | { start: Dayjs; end: Dayjs } | Dayjs[];

export interface MarkerItem {
  name: string;  // 祭りの名前
  icon: "fireworks" | "kimono" | "lantern" |
        "drum" | "tanabata" | "sakura" |
        "fire"; // マップに表示するアイコン
  place: string;  // 開催場所
  latLng: [number, number];  // マップピンの座標
  imageUrl?: string;  // 画像URL
  referenceUrl?: string;  // 参照元のURL
  description: string;
  access?: string;
  date?: DateInfo;
}

export const MARKER_ITEMS: MarkerItem[] = [
  // 愛知県
  {
    name: "海の日名古屋みなと祭",
    icon: "fireworks",
    place: "名古屋港ガーデンふ頭 一帯",
    latLng: [35.0919, 136.8772],
    imageUrl: "https://aichinow.pref.aichi.jp/upload/spot_images/9dd89da1b6c9c3ab650904062104814f.jpg",
    referenceUrl: "https://aichinow.pref.aichi.jp/spots/detail/1076/",
    description: "昭和21年に戦後の復興祭として始まり､まきわら船パレードなどが開催されました｡現在では、名古屋の暑い夏の到来を告げる祭りとして多くの市民に親しまれており、神楽揃えや音楽ステージ､総おどりなど、多彩なイベントが行われます。「海の日名古屋みなと祭」の締めくくりとして行われる恒例の花火大会では、メモリアル花火・スターマインなど、様々な花火を打ち上げられます。音と光の共演に感動もひとしおです。",
    access: "地下鉄名港線「名古屋港」駅より徒歩すぐ",
    date: dayjs("2025-07-21")
  },
  {
    name: "岡崎城下家康公夏まつり",
    icon: "drum",
    place: "岡崎城公園",
    latLng: [34.9567, 137.1597],
    imageUrl: "https://aichinow.pref.aichi.jp/upload/spot_images/48f7e8b0d786edcf32329a1068059e79.png",
    referenceUrl: "https://aichinow.pref.aichi.jp/spots/detail/89/",
    description: `
      長く市民に親しまれてきました「岡崎城下家康公夏まつり」の今年のテーマは【「祝おう八朔！」ー唄ってみよう！
      えびすくい音頭と岡崎民謡ー】参加者及び来場者が家康公の史跡に触れる事で、岡崎固有の感動と感謝のある夏まつりです。
    `,
    access: "名鉄「東岡崎」駅より徒歩約10分",
    date: [dayjs("2025-08-09"), dayjs("2025-08-11"), dayjs("2025-09-20"), dayjs("2025-09-21")]
  },
  {
    name: "たんころりんの夕涼み",
    icon: "lantern",
    place: "足助重伝建の町並み一帯",
    latLng: [35.1364, 137.3189],
    imageUrl: "https://aichinow.pref.aichi.jp/upload/spot_images/93767520b89d983404d59adb798ccd14.jpg",
    referenceUrl: "https://aichinow.pref.aichi.jp/spots/detail/135/",
    description: "「たんころりん」とは、竹かごと和紙で作った円柱の形をした行灯(あんどん)のことです。「たんころりんの夕涼み」は、毎年8月上旬から中旬にかけて開催され、足助地区の古い町並み(約1.5km)の街道沿いにたんころりんを並べ、和紙を通した火の灯が夏の夜の情緒を演出するイベントです。",
    access: "東海環状自動車道「豊田勘八IC」より車で約20分",
    date: { start: dayjs("2025-08-09"), end: dayjs("2025-08-15") }
  },
  {
    name: "名古屋城夏まつり",
    icon: "kimono",
    place: "名古屋城内",
    latLng: [35.1850, 136.8996],
    imageUrl: "https://aichinow.pref.aichi.jp/upload/spot_images/680afdd533d0e417e4dc6e49775efe91.jpg",
    referenceUrl: "https://aichinow.pref.aichi.jp/spots/detail/2302/",
    description: "夏の名古屋城を楽しめるイベントが開催されます！大盆踊り大会やステージイベントが会場を盛り上げます。また、キンキンに冷えた飲み物や、ふわふわのかき氷もあります！名古屋城で、ゆったりと涼しい夏を過ごしてみませんか♪さらに、重要文化財の西南隅櫓も限定公開されます。",
    access: "地下鉄名城線「名古屋城」駅より徒歩約5分",
    date: { start: dayjs("2025-08-09"), end: dayjs("2025-08-17") }
  },
  {
    name: "綾渡の夜念仏と盆踊",
    icon: "kimono",
    place: "平勝寺境内",
    latLng: [35.1291, 137.3606],
    imageUrl: "https://aichinow.pref.aichi.jp/upload/spot_images/693c7cba92ff31c03d78fb03e5b12401.jpg",
    referenceUrl: "https://aichinow.pref.aichi.jp/spots/detail/1638/",
    description: `
      香嵐渓から東へ約5km、標高500mの山間に点在する戸数20数戸の山里「綾渡」。
      曹洞宗の古刹「平勝寺」の境内にて、執り行われるお盆の行事です。
      月明かりの中、唱えられる念仏と鐘の音が鳴り響き、なんともいえない独特な世界観に引き込まれます。
      「綾渡の夜念仏と盆踊」が含まれる「風流踊」は2022年にユネスコ無形文化遺産に登録されました。
    `,
    access: "猿投グリーンロード「力石IC」より車で約40分（要予約の無料見学バス推奨）",
    date: [dayjs("2025-08-10"), dayjs("2025-08-15")]
  },
  {
    name: "たこ祭り",
    icon: "drum",
    place: "日間賀島東浜海水浴場",
    latLng: [34.7061, 137.0119],
    imageUrl: "https://aichinow.pref.aichi.jp/upload/spot_images/91fee9fe0aa094fda3b0486a7e21a52b.jpg",
    referenceUrl: "https://aichinow.pref.aichi.jp/spots/detail/1519/",
    description: `
      たこの名産地として知られる日間賀島で行われるお祭です。
      夜は、地元の子ども達による太鼓やダンスがあり、最後は打ち上げ花火が夜空を彩ります！
    `,
    access: "師崎港より高速船で約10分",
    date: dayjs("2025-08-12")
  },
  {
    name: "三好いいじゃんまつり",
    icon: "kimono",
    place: "三好稲荷閣周辺道路",
    latLng: [35.0871, 137.0744],
    imageUrl: "https://aichinow.pref.aichi.jp/upload/spot_images/ae8864762b678bc326e7f79e5ab35ade.jpg",
    referenceUrl: "https://aichinow.pref.aichi.jp/spots/detail/1111/",
    description: `
      会場となる三好稲荷周辺道路に、さまざまな衣装を身にまとった踊り手たちが集結し、オリジナルまつりソング「じゃんだらりん」と「JUST ROLLIN'」を踊る、踊り手も観客も一体となれるイベントです。
      踊りおもしろコンテストも行われ、踊り手の気合の入った踊りとパフォーマンスが楽しめます！
    `,
    access: "東名高速道路「東名三好IC」より車で約10分",
    date: dayjs("2025-08-23")
  },
  {
    name: "市制70周年記念こまき令和夏まつり",
    icon: "fireworks",
    place: "小牧駅周辺道路",
    latLng: [35.2891, 136.9284],
    imageUrl: "https://aichinow.pref.aichi.jp/upload/spot_images/231c3d93ee8959ed368b04b65925a43c.jpg",
    referenceUrl: "https://aichinow.pref.aichi.jp/spots/detail/1355/",
    description: `
      今年のこまき令和夏まつりでは中京テレビで放送されている「ぐ～たくさん」で紹介されたグルメが大集結するGU-TAKU LANDを開催！
      さらに70周年をお祝いする菓子まきも実施されるほか、小牧市PR隊長の井田潤さんがまつりのメインイベントであるこまき総踊りを盛り上げるために駆けつけます！
      また、例年大人気のこども縁日ではプロジェクションマッピングによる花火が打ちあがります！
      みんなで特別な70周年の夜を楽しみましょう♪
    `,
    access: "名鉄小牧線「小牧」駅より徒歩すぐ",
    date: dayjs("2025-08-23")
  },
  {
    name: "三河一色大提灯まつり",
    icon: "lantern",
    place: "三河一色諏訪神社",
    latLng: [34.80857861365298, 137.02279017405758],
    imageUrl: "https://aichinow.pref.aichi.jp/upload/spot_images/5e76aab3402d8491af8db64576365944.jpg",
    referenceUrl: "https://aichinow.pref.aichi.jp/spots/detail/145/",
    description: `
      450年以上の歴史を誇る三河一色諏訪神社のお祭りで、使用される提灯は県の有形民俗文化財にも指定されています。
      全長6～10ｍの巨大な提灯6組12張が登場し、夕暮れにゆらゆら揺らめく様は圧巻です。提灯に描かれた神話や歴史などの時代絵巻が漆黒の夜空に浮かび上がり幻想的な世界をお楽しみいただけます。
    `,
    access: "国道23号線「西尾東IC」より車で約20分",
    date: [dayjs("2025-08-23"), dayjs("2025-08-24")]
  },
  {
    name: "にっぽんど真ん中祭り",
    icon: "drum",
    place: "久屋大通公園",
    latLng: [35.16508589971218, 136.90893780106344],
    imageUrl: "https://aichinow.pref.aichi.jp/upload/spot_images/abff9cebaa63cdf4fcdedbd816dca646.jpg",
    referenceUrl: "https://aichinow.pref.aichi.jp/spots/detail/53/",
    description: `
      日本のど真ん中、真夏の名古屋を舞台に繰り広げる日本最大級の踊りの祭典、にっぽんど真ん中祭り(通称・どまつり)。国内外から集結する約200チームが地域色豊かな踊りを披露する、誰でも参加できる市民参加型のお祭りです。
    `,
    access: "地下鉄名城線「矢場町」駅より徒歩約1分",
    date: { start: dayjs("2025-08-29"), end: dayjs("2025-08-31") }
  },
  {
    name: "せともの祭",
    icon: "kimono",
    place: "瀬戸市内一円",
    latLng: [35.22493082625655, 137.09668571640577],
    imageUrl: "https://aichinow.pref.aichi.jp/upload/spot_images/487b6209df9e96acd6a55ba740b264e8.jpg",
    referenceUrl: "https://aichinow.pref.aichi.jp/spots/detail/65/",
    description: `
      瀬戸川沿いに約200軒もの、せともの店が立ち並ぶ「せともの大廉売市」は全国最大級の規模であり、普段使いの器から陶芸作品まで豊富に並び、例年全国津々浦々から数十万人の人出でにぎわいます！
      “瀬戸の窯元ゾーン”や“若手作家ゾーン”などで、お気に入りの逸品を探して瀬戸焼の魅力を存分に楽しみましょう♪
    `,
    access: "名鉄瀬戸線「尾張瀬戸」駅より徒歩すぐ",
    date: [dayjs("2025-08-13"), dayjs("2025-08-14")]
  },
  {
    name: "にっしん夢まつり",
    icon: "fireworks",
    place: "日進市役所駐車場周辺",
    latLng: [35.13206742040239, 137.03947158650496],
    imageUrl: "https://aichinow.pref.aichi.jp/upload/feature_languages/8679f92fe9fb1af299653cc8864c48e1.jpg",
    referenceUrl: "http://www.asobinohiroba.net",
    description: `
      市制30周年を記念した、今年のまつりのテーマは「新(あらた)」。「夢おどり」では、多数のチームが鳴子おどりなどを披露しステージを盛り上げます！「夢屋台」では、さまざまな屋台が出店します。夕方からは、約2,000発の花火が夜空を彩ります。
    `,
    access: "名鉄豊田線「日進」駅より巡回バスで約30分",
    date: dayjs("2025-09-14")
  },
  {
    name: "中村公園夏まつり",
    icon: "fireworks",
    place: "中村公園",
    latLng: [35.175083773745875, 136.85423755898196],
    imageUrl: "https://aichinow.pref.aichi.jp/upload/spot_images/c171e78a2ce088d83e7d20fe23f2a83d.jpg",
    referenceUrl: "https://aichinow.pref.aichi.jp/spots/detail/1587/",
    description: `
      恒例の納涼盆おどり大会を始め、写生会「中村公園と夏まつりを描く会」や書道展、毎年大盛り上がりのステージイベントに出店、納涼花火鑑賞会などもあり、中村公園が大変賑わう3日間です♪
    `,
    access: "地下鉄東山線「中村公園」駅より徒歩約10分",
    date: { start: dayjs("2025-07-23"), end: dayjs("2025-07-25") }
  },
  {
    name: "一宮七夕まつり",
    icon: "tanabata",
    place: "真清田神社周辺",
    latLng: [35.30730935041803, 136.80196844524463],
    imageUrl: "https://aichinow.pref.aichi.jp/upload/spot_images/2ee519d62beba2cd446fec4ec84c58f7.jpg",
    referenceUrl: "https://aichinow.pref.aichi.jp/spots/detail/73/",
    description: `
      織物の神様のご加護により織物業が発達したといわれる一宮市。
      織物と因縁の深い牽牛・織女にちなんで7月の最終日曜日をフィナーレとする木曜日からの4日間、「七夕まつり」が開催されます。
    `,
    access: "JR「尾張一宮」駅より徒歩約5分",
    date: { start:dayjs("2025-07-24"), end:dayjs("2025-07-27")} // 複数日の例
  },
  {
    name: "尾張津島天王祭",
    icon: "lantern",
    place: "津島神社・天王川公園",
    latLng: [35.17358543715172, 136.7209477164036],
    imageUrl: "https://aichinow.pref.aichi.jp/upload/spot_images/4a1e36461ff299c4ab92605434749722.jpg",
    referenceUrl: "https://aichinow.pref.aichi.jp/spots/detail/320/",
    description: `
      津島神社の祭礼として600年近くの歴史があり、日本三大川祭りのひとつとして、全国の数ある夏祭りの中でも最も華麗なものと言われています。
      尾張津島天王祭の車楽舟行事は昭和55年に国の無形民俗文化財に指定されており、ユネスコの無形文化遺産に登録されました。
    `,
    access: "名鉄「津島」駅より徒歩約15分",
    date: [dayjs("2025-07-26"), dayjs("2025-07-27")]
  },
  {
    name: "刈谷万燈祭(秋葉社の祭礼)",
    icon: "lantern",
    place: "刈谷市中心部、秋葉社周辺",
    latLng: [34.98725294761389, 136.9927510894054],
    imageUrl: "https://aichinow.pref.aichi.jp/upload/spot_images/c52650014669e1ed0f3b0d24da58772b.jpg",
    referenceUrl: "https://aichinow.pref.aichi.jp/spots/detail/93/",
    description: `
      愛知県の無形民俗文化財に指定されている「万燈祭(まんどまつり)」は、刈谷市銀座にある秋葉社の祭礼で、五穀豊穣・火難防除・町内安全を祈願する祭りで、「天下の奇祭」と呼ばれる刈谷市を代表する夏祭りです。
      市内氏子7町がそれぞれ数か月かけて制作した高さ約5m、重さ約60㎏の万燈を、若衆が1人で担ぎ勇壮に舞う姿をぜひご覧ください
    `,
    access: "名鉄三河線「刈谷市」駅より徒歩約5分",
    date: [dayjs("2025-07-26"), dayjs("2025-07-27")]
  },
  {
    name: "円頓寺七夕まつり",
    icon: "tanabata",
    place: "円頓寺商店街",
    latLng: [35.17642763410212, 136.89134181063878],
    imageUrl: "https://aichinow.pref.aichi.jp/upload/spot_images/dbd8485b05f38a8f2a674c20b810f70c.jpg",
    referenceUrl: "https://aichinow.pref.aichi.jp/spots/detail/2514/",
    description: `
      店主や一般参加による手作りのハリボテ飾りや、吹き流しなどがアーケードを埋め尽くし、華やかに彩ります。各店舗による七夕まつり期間限定のセールや屋台を楽しめ、なごのキャンパス会場では、名古屋おもてなし武将隊による盆踊り大会も開催されます。
      その他ハリボテの一般審査に協力すれば、ガラガラ抽選会に参加して豪華景品が当たる企画も開催されるので是非ご参加ください！
    `,
    access: "地下鉄桜通線「国際センター」駅より徒歩約5分",
    date: { start: dayjs("2025-07-30"), end: dayjs("2025-08-03") }
  },
  {
    name: "安城七夕まつり",
    icon: "tanabata",
    place: "JR安城駅周辺市街地",
    latLng: [34.96040416202726, 137.08652299636842],
    imageUrl: "https://aichinow.pref.aichi.jp/upload/spot_images/89898f3218ff750644db7931ebdced8a.JPG",
    referenceUrl: "https://aichinow.pref.aichi.jp/spots/detail/136/",
    description: `
      「安城七夕まつり」は、今年で72回目を迎えます。
      約2kmにおよぶ竹飾りの通りが日本一長いと言われており、毎年8月上旬の金・土・日に、JR安城駅周辺の市街地で盛大に行なわれます。
      2025年は「虹」をテーマに開催。
      通りを涼しげに彩る竹飾りや2013年に世界記録にもなった願いごと短冊など、安城市民だけでなく、周辺地域からの観光客も多く参加し、期間中はたくさんの人で賑わいます。
      安城の夏の風物詩、安城七夕まつりにぜひ一度足をお運びください。ここに祭りの説明を入力します。
    `,
    access: "JR「安城」駅より徒歩すぐ",
    date: { start: dayjs("2025-08-01"), end: dayjs("2025-08-03") }
  },
  {
    name: "尾張津島 藤まつり",
    icon: "sakura",
    place: "天王川公園",
    latLng: [35.1724017735782, 136.7202313617308],
    imageUrl: "https://aichinow.pref.aichi.jp/upload/spot_images/0c71c6edfeb49c091dd0c80d87a60138.jpg",
    referenceUrl: "https://aichinow.pref.aichi.jp/spots/detail/74/",
    description: `
    かつて「藤浪の里」とうたわれた藤の名所・津島市。4月中旬から上旬には、その名残を今に伝える「尾張津島藤まつり」が開催されます。
    会場となる天王川公園には、長さ275m、面積約5,000平方メートルの見事な藤棚があります。昼は風にそよぐ壮麗な藤を、夜はライトアップされた幻想的な風情を味わえます。さらに、藤棚の下には疎水が流れており、水面に映える藤の花は、また違った趣きが楽しめます。
    `,
    access: "名鉄「津島」駅より徒歩約15分",
    date: { start: dayjs("2025-04-12"), end: dayjs("2025-04-27")}
  },






    // 愛知県以外の祭り
  {
    name: "仙台七夕まつり",
    icon: "tanabata",
    place: "仙台市中心部および周辺地域商店街",
    latLng: [38.26027834556364, 140.88206097022285],
    imageUrl: "https://www.sentabi.jp/wp-content/themes/sentabi/assets/images/feature/tanabata/img04.jpg",
    referenceUrl: "https://www.sentabi.jp/feature/tanabata/",
    description: `
      仙台駅前から中央通り、一番町通りのアーケード街にかけて豪華絢爛な七夕飾りがご覧いただける他、周辺の地域商店街も昔ながらの笹飾りで彩られます。
      また、飾りの内容は当日まで企業秘密となっており、8月6日の朝8時頃から飾り付けが行われ、その豪華さを競い合います。
    `,
    access: "JR「仙台」駅より徒歩すぐ",
    date: { start: dayjs("2025-08-06"), end: dayjs("2025-08-08") }
  },
  {
    name: "神田祭",
    icon: "lantern",
    place: "神田神社（神田明神）",
    latLng: [35.7020620488247, 139.7678996006087],
    imageUrl: "https://att-japan.net/wp-content/uploads/2023/08/shrine20230601-3477-yt1za.jpg",
    referenceUrl: "https://kandamatsuri.com",
    description: `
      東京都千代田区の神田明神で2年に1度、奇数年に行われる盛大な祭礼で、京都の祇園祭、大阪の天神祭とともに「日本三大祭り」の一つとされています。祭りの見どころは、大小200を超える神輿が街を練り歩き、神田明神へ集まる「神輿宮入」で、江戸時代から続く「天下祭」の伝統と迫力ある「附祭（つけまつり）」が楽しめます。﻿
    `,
    access: "JR「御茶ノ水」駅より徒歩約5分",
    date: [dayjs("2025-05-13"), dayjs("2025-05-14")]
  },
  {
    name: "弘前さくらまつり",
    icon: "sakura",
    place: "弘前公園",
    latLng: [40.60727815270666, 140.4645777940268],
    imageUrl: "https://shigenoyuta.com/wp-content/uploads/2018/05/DSC_4600-e1555976256258.jpg",
    referenceUrl: "https://www.hirosakipark.jp/sakura/",
    description: `
      弘前桜まつりの開催時期はおよそ4月中旬～5月上旬。ライトアップが、日没～23時まで行われます。特に人気があるビューポイントは、西濠の春陽橋からの景観です。濠の両側に咲き誇る桜が、水面に映る様子が圧巻です。また、200もの露店が軒を連ねます。縁日定番の焼きそばから、津軽伝統の生姜味噌おでんまで、様々な屋台グルメを味わえます。
    `,
    access: "JR「弘前」駅よりバスで約15分",
    date: { start: dayjs("2025-04-18"), end: dayjs("2025-05-06") }
  },
  {
    name: "千代田の桜まつり",
    icon: "sakura",
    place: "千鳥ヶ淵公園",
    latLng: [35.68623991214128, 139.74510579615065],
    imageUrl: "https://visit-chiyoda.tokyo/sakura/uniq/images/gallery/2025/gallery_06.jpg",
    referenceUrl: "https://visit-chiyoda.tokyo/sakura/",
    description: `
      2025年より開催期間を拡大し、春の時期に千代田区内で催される、さまざまなイベントを総称した「千代田のさくらまつり」を3月12日(水)～4月23日(水)に開催します。
      例年3月下旬から4月上旬に12日間程度行われる全長約700ｍ・さくらの名所「千鳥ヶ淵緑道」の夜桜ライトアップ期間中は、千鳥ヶ淵ボート場も夜間まで営業を延長し、訪れる人々はお濠の水上から、この魔法のような景色を楽しむことができます。
    `,
    access: "地下鉄「九段下」駅より徒歩約5分",
    date: { start: dayjs("2025-03-12"), end: dayjs("2025-04-23") }
  },
  {
    name: "五山送り火",
    icon: "fire",
    place: "京都市内各所",
    latLng: [35.010976210913654, 135.76839564795713],
    imageUrl: "https://ja.kyoto.travel/img/ogp/ogp_major_okuribi.jpg",
    referenceUrl: "https://www.gozan-okuribi.com/2022/ja/top.html",
    description: `
      毎年 8 月 16 日の夜、京都の山々に次々と浮かびあがる壮大な炎の文字。
      お盆の精霊を送る仏教的伝統行事「京都五山送り火 (きょうとござんおくりび)」は、京都四大行事の 1 つです。
      5 つの送り火が順番に点り、それぞれ約 30 分間燃え続けます。
      午後 8 時、東山に最初の送り火、「大」の字が浮かび上がります。
      続いて松ヶ崎に「妙」と「法」の文字、西賀茂には「船形 (ふながた)」、大北山に「大」の文字 (左大文字)、最後に嵯峨鳥居本の曼荼羅山に「鳥居形」が点灯。
    `,
    access: "鑑賞場所により異なる（鴨川堤防など）",
    date: dayjs("2025-08-16")
  },
  {
    name: "青森ねぶた祭",
    icon: "fire",
    place: "青森市内",
    latLng: [40.8230166158134, 140.74639004081698],
    imageUrl: "https://aomori-tourism.com/lsc/upfile/article/0000/0039/39_1_l.jpg",
    referenceUrl: "https://www.nebuta.jp",
    description: `
      青森ねぶた祭は、七夕祭りの灯籠流しの変形であろうといわれていますが、その起源は定かではありません。
      奈良時代（710年～794年）に中国から渡来した「七夕祭」と、古来から津軽にあった習俗と精霊送り、人形、虫送り等の行事が一体化して、紙と竹、ローソクが普及されると灯籠となり、それが変化して人形、扇ねぶたになったと考えられています。
    `,
    access: "JR「青森」駅より徒歩約5分",
    date: { start: dayjs("2025-08-02"), end: dayjs("2025-08-07") }
  },
  {
    name: "沖縄全島エイサーまつり",
    icon: "drum",
    place: "沖縄市内",
    latLng: [26.334290398596483, 127.80571328592008],
    imageUrl: "https://www.zentoeisa.com/images/common/ogp.jpg",
    referenceUrl: "https://www.zentoeisa.com",
    description: `
      「沖縄全島エイサーまつり」は、毎年旧盆明けの最初の週末に行われる、1956年の「コザ市誕生」を機に「全島エイサーコンクール」としてスタートし、今では沖縄の夏の風物詩として日本を代表する「まつり」の一つとなりました。
      「まつり」には本島各地から選抜された青年会などの団体や、全国の姉妹都市や協賛団体からのゲストが集結します。会場に鳴り響く三線、歌、太鼓のリズムに酔いしれ、その迫力あるバチさばきに感動しながら、本場のエイサーのだいご味を思う存分味わうことが出来る一大イベントです。
      まつりは3日間に渡り、金曜日のまつり初日には、国道330号コザ・ゲート通りでの「みちじゅねー」、そして土曜日の中日が沖縄市青年団協議会による「沖縄市青年まつり」日曜日が「本祭」として、全島から集められた青年会による、エイサー大会が沖縄市コザ運動公園で開催されます。
    `,
    access: "沖縄自動車道「沖縄南IC」より車ですぐ（臨時駐車場・シャトルバス利用推奨）",
    date: { start: dayjs("2025-09-12"), end: dayjs("2025-09-14") }
  },
  {
    name: "長崎ランタンフェスティバル",
    icon: "lantern",
    place: "長崎市内",
    latLng: [32.74075963645693, 129.8746999120227],
    imageUrl: "https://www.at-nagasaki.jp/storage/banners/86/responsive_images/exYrtJPSpGUxHdBL7FwtLX97UCyY2Kx6NFXqREJ3__1639_1093.jpg",
    referenceUrl: "https://www.at-nagasaki.jp/lantern-festival",
    description: `
      長崎新地中華街の人たちが、街の振興のために、中国の旧正月（春節）を祝う行事として親しまれていた「春節祭」を、平成6年から「長崎ランタンフェスティバル」として規模を拡大したところ、長崎の冬を彩る一大風物詩となりました。
      期間中は、中国の「元宵節」のランタン（中国提灯）を飾る風習に習い、長崎新地中華街はもとより、浜町・観光通りアーケードなど市内中心部は、極彩色のランタンなどで彩られます。また、中国色豊かなイベントも繰り広げられ、皆様を魅了します。
    `,
    access: "路面電車「新地中華街」電停より徒歩約2分",
    date: { start: dayjs("2025-02-06"), end: dayjs("2025-02-23") }
  }
]