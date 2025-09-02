import type { Dayjs } from "dayjs";
import dayjs from "dayjs";

export type DateInfo = Dayjs | { start: Dayjs; end: Dayjs } | Dayjs[];

export interface MarkerItem {
  name: string;  // 祭りの名前
  icon: "fireworks" | "kimono" | "lantern" | "drum" | "tanabata"; // マップに表示するアイコン
  place: string;  // 開催場所
  latLng: [number, number];  // マップピンの座標
  imageUrl?: string;  // 画像URL
  referenceUrl?: string;  // 参照元のURL
  description: string;
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
    date: { start:dayjs("2025-07-24"), end:dayjs("2025-07-27")} // 複数日の例
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
    date: { start: dayjs("2025-08-06"), end: dayjs("2025-08-08") }
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
    date: [dayjs("2025-07-26"), dayjs("2025-07-27")]
  },
  // {
  //   name: "円頓寺七夕まつり",
  //   icon: "",
  //   place: "",
  //   latLng: [0, 0],
  //   imageUrl: "",
  //   referenceUrl: "",
  //   description: `
  //     ここに祭りの説明を入力します。
  //   `,
  //   date:
  // }
]