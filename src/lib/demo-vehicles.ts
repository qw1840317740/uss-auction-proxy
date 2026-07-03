// Localized text: either a plain string (language-neutral) or {zh,en,ja} map
export type LocalizedText = string | Record<string, string>;

export interface Vehicle {
  id: string;
  make: string;
  model: string;
  year: number;
  mileage: number;
  displacement: string;
  fuel: string;
  transmission: string;
  drive: string;
  exteriorColor: string;
  bodyType: string;
  price: number;
  images: string[];
  features: string[];
  status: string;

  // Quick-spec fields
  inspection: string; // 車検有効期限 e.g. "2026/03"
  repairHistory: "none" | "yes"; // 修復歴
  region: string; // 出品地域

  // Catalog specs
  doors: number;
  seats: number;
  dimensions: string; // 全長×全幅×全高
  weight: string; // 車両重量
  maxPower: string; // 最高出力
  fuelEconomy: string; // 燃費

  // Localized content
  highlights: Record<string, string[]>;
  description: Record<string, string>;
}

export const demoVehicles: Vehicle[] = [];

export const archivedDemoVehicles: Vehicle[] = [
  {
    id: "1",
    make: "Toyota",
    model: "Land Cruiser 300",
    year: 2022,
    mileage: 25000,
    displacement: "3,346cc",
    fuel: "Diesel",
    transmission: "AT",
    drive: "4WD",
    exteriorColor: "White Pearl",
    bodyType: "SUV",
    price: 6500000,
    status: "available",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/2021_Toyota_Land_Cruiser_300_%28Russia%29_front_view.jpg/960px-2021_Toyota_Land_Cruiser_300_%28Russia%29_front_view.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/2021_Toyota_Land_Cruieser_300_ZX.jpg/960px-2021_Toyota_Land_Cruieser_300_ZX.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/2021_Toyota_Land_Cruiser_300_%28Russia%29_rear_view.png/960px-2021_Toyota_Land_Cruiser_300_%28Russia%29_rear_view.png",
    ],
    features: ["LED Headlights", "Apple CarPlay / Android Auto", "Power Tailgate", "Heated Seats", "Multi-Terrain Select"],
    inspection: "2026/03",
    repairHistory: "none",
    region: "神奈川県",
    doors: 5,
    seats: 7,
    dimensions: "4,965×1,980×1,935mm",
    weight: "2,510kg",
    maxPower: "305ps / 4,000rpm",
    fuelEconomy: "10.8km/L",
    highlights: {
      zh: ["3.3L V6 双涡轮柴油，305ps强悍动力", "7座布局，越野与家用兼顾", "Multi-Terrain Select 多地形选择系统", "白色珍珠漆，车况如新"],
      en: ["3.3L V6 twin-turbo diesel, 305ps", "7-seat layout, off-road and family ready", "Multi-Terrain Select system", "White Pearl paint, like-new condition"],
      ja: ["3.3L V6ツインターボディーゼル 305ps", "7人乗り、オフロードと家族用车に最適", "マルチテレインセレクト搭載", "ホワイトパール、新車同様の車況"],
    },
    description: {
      zh: "2022年款丰田陆地巡洋舰300，搭载3.3L V6双涡轮增压柴油发动机，输出305匹马力。作为丰田旗舰越野车，Land Cruiser 300 凭借全时四驱、多地形选择系统和托森式LSD，无论是沙漠穿越还是雪地行驶都游刃有余。白色珍珠漆面保养极佳，仅行驶2.5万公里，是一台难得的低里程准新车。",
      en: "The 2022 Toyota Land Cruiser 300 is powered by a 3.3L V6 twin-turbo diesel producing 305ps. As Toyota's flagship SUV, it combines full-time 4WD, Multi-Terrain Select, and a Torsen LSD to handle everything from desert crossings to snow. This White Pearl example is in exceptional condition with only 25,000 km — a rare low-mileage find.",
      ja: "2022年式トヨタ ランドクルーザー300。3.3L V6ツインターボディーゼルが305psを発揮するトヨタの旗艦SUVです。フルタイム4WD、マルチテレインセレクト、トルセンLSDを搭載し、砂漠から雪道まで走破。ホワイトパールの美麗車体、走行2.5万kmの低走行準新車です。",
    },
  },
  {
    id: "2",
    make: "Toyota",
    model: "Harrier",
    year: 2023,
    mileage: 12000,
    displacement: "1,987cc",
    fuel: "Gasoline",
    transmission: "CVT",
    drive: "FWD",
    exteriorColor: "Black",
    bodyType: "SUV",
    price: 3800000,
    status: "available",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/TOYOTA_HARRIER_%28XU80%29_China.jpg/960px-TOYOTA_HARRIER_%28XU80%29_China.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/2017-2020_Toyota_Harrier_Hybrid_Premium_front_left.jpg/960px-2017-2020_Toyota_Harrier_Hybrid_Premium_front_left.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/2017-2020_Toyota_Harrier_Hybrid_Premium_rear.jpg/960px-2017-2020_Toyota_Harrier_Hybrid_Premium_rear.jpg",
    ],
    features: ["Toyota Safety Sense", "Panoramic Roof", "LED Headlights", "Power Tailgate", "Heated Seats"],
    inspection: "2026/05",
    repairHistory: "none",
    region: "東京都",
    doors: 5,
    seats: 5,
    dimensions: "4,740×1,855×1,660mm",
    weight: "1,620kg",
    maxPower: "171ps / 6,600rpm",
    fuelEconomy: "14.0km/L",
    highlights: {
      zh: ["都市豪华SUV代表作，轿跑式溜背造型", "全景天窗 + 电动尾门，配置齐全", "Toyota Safety Sense 全套主动安全", "黑色外观，仅1.2万公里准新车"],
      en: ["Premium urban crossover with coupe-like styling", "Panoramic roof + power tailgate, fully equipped", "Full Toyota Safety Sense suite", "Black exterior, 12,000 km near-new"],
      ja: ["都市プレミアムSUV、クーペ風フォルム", "パノラマルーフ＋パワーテールゲート装備", "Toyota Safety Sense 全装備", "ブラック、走行1.2万kmの準新車"],
    },
    description: {
      zh: "2023年款丰田 Harrier（鹞），融合了轿跑的优雅与SUV的实用。2.0L自然吸气发动机搭配CVT变速箱，平顺省油。配备全景天窗、电动尾门、加热座椅和 Toyota Safety Sense 主动安全系统。黑色车身气场十足，仅行驶1.2万公里，是追求质感与实用的家庭首选。",
      en: "The 2023 Toyota Harrier blends coupe elegance with SUV practicality. Its 2.0L naturally aspirated engine and CVT deliver smooth, efficient performance. Equipped with a panoramic roof, power tailgate, heated seats, and the full Toyota Safety Sense suite. This black example has just 12,000 km — a refined choice for families.",
      ja: "2023年式トヨタ ハリアー。クーペの優雅さとSUVの実用性を融合。2.0L自然吸気＋CVTで滑らかで燃費良。パノラマルーフ、パワーテールゲート、シートヒーター、Toyota Safety Senseを装備。ブラック車体、走行1.2万km。質感と実用を求めるファミリーに最適です。",
    },
  },
  {
    id: "3",
    make: "Honda",
    model: "Civic",
    year: 2023,
    mileage: 8000,
    displacement: "1,498cc",
    fuel: "Gasoline",
    transmission: "CVT",
    drive: "FWD",
    exteriorColor: "Silver Metallic",
    bodyType: "Sedan",
    price: 2800000,
    status: "available",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Honda_Civic_Hybrid_%282022%2C_Europe%29_1X7A6073.jpg/960px-Honda_Civic_Hybrid_%282022%2C_Europe%29_1X7A6073.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Honda_Civic_Hybrid_%282022%2C_Europe%29_1X7A1955.jpg/960px-Honda_Civic_Hybrid_%282022%2C_Europe%29_1X7A1955.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/2024_Honda_Civic_Type_R_FL5_in_Championship_White%2C_front_left%2C_06-30-2024.jpg/960px-2024_Honda_Civic_Type_R_FL5_in_Championship_White%2C_front_left%2C_06-30-2024.jpg",
    ],
    features: ["Honda SENSING", "LED Headlights", "Apple CarPlay / Android Auto", "Push Start", "Auto-dimming Mirror", "Smart Key"],
    inspection: "2026/07",
    repairHistory: "none",
    region: "埼玉県",
    doors: 4,
    seats: 5,
    dimensions: "4,555×1,800×1,415mm",
    weight: "1,330kg",
    maxPower: "182ps / 6,000rpm",
    fuelEconomy: "15.8km/L",
    highlights: {
      zh: ["11代思域，1.5L VTEC Turbo 182ps", "Honda SENSING 全套主动安全", "银色金属漆，运动且耐看", "仅8千公里，准新车况"],
      en: ["11th-gen Civic, 1.5L VTEC Turbo 182ps", "Full Honda SENSING safety suite", "Silver Metallic, sporty and timeless", "Only 8,000 km, near-new condition"],
      ja: ["11代目シビック、1.5L VTECターボ 182ps", "Honda SENSING 全装備", "シルバーメタリック、スポーティ", "走行8千kmのみ、準新車"],
    },
    description: {
      zh: "2023年款本田思域（第11代），搭载1.5L VTEC Turbo 发动机，输出182匹马力，动力充沛且燃油经济性出色。Honda SENSING 主动安全、LED 大灯、Apple CarPlay/Android Auto 一应俱全。银色金属漆面光泽如新，仅行驶8千公里，是年轻买家的高性价比之选。",
      en: "The 2023 Honda Civic (11th gen) runs a 1.5L VTEC Turbo pushing 182ps — spirited yet fuel-efficient. Honda SENSING, LED headlights, and Apple CarPlay/Android Auto are all standard. This Silver Metallic example gleams like new with just 8,000 km — a high-value pick for young drivers.",
      ja: "2023年式ホンダ シビック（11代目）。1.5L VTECターボが182psを発揮し、力強く燃費も良好。Honda SENSING、LEDヘッドライト、Apple CarPlay/Android Autoを完備。シルバーメタリック、走行8千km。若い層に人気の高コストパフォーマンスモデルです。",
    },
  },
  {
    id: "4",
    make: "Nissan",
    model: "Note Aura",
    year: 2022,
    mileage: 18000,
    displacement: "1,198cc",
    fuel: "Hybrid",
    transmission: "CVT",
    drive: "FWD",
    exteriorColor: "White",
    bodyType: "Hatchback",
    price: 1800000,
    status: "available",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Nissan_Note_e-POWER_%28E13%29%2C_2021%2C_front.jpg/960px-Nissan_Note_e-POWER_%28E13%29%2C_2021%2C_front.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Nissan_Note_e-POWER_%28E13%29%2C_2021%2C_front-left.jpg/960px-Nissan_Note_e-POWER_%28E13%29%2C_2021%2C_front-left.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Nissan_Note_e-POWER_%28E13%29%2C_2021%2C_rear.jpg/960px-Nissan_Note_e-POWER_%28E13%29%2C_2021%2C_rear.jpg",
    ],
    features: ["ProPILOT", "Around View Monitor", "LED Headlights", "Heated Seats", "Apple CarPlay"],
    inspection: "2026/04",
    repairHistory: "none",
    region: "大阪府",
    doors: 5,
    seats: 5,
    dimensions: "4,045×1,695×1,520mm",
    weight: "1,290kg",
    maxPower: "116ps / 4,800rpm",
    fuelEconomy: "21.0km/L",
    highlights: {
      zh: ["e-POWER 第二代混动，116ps油耗仅21km/L", "ProPILOT 驾驶辅助 + 环视监控", "紧凑灵活，城市代步首选", "白色外观，保养良好"],
      en: ["2nd-gen e-POWER hybrid, 116ps at 21km/L", "ProPILOT assist + Around View Monitor", "Compact and nimble, ideal city car", "White exterior, well maintained"],
      ja: ["第2世代e-POWER、116psで燃費21km/L", "プロパイロット＋アラウンドビューモニター", "コンパクトで街乗りに最適", "ホワイト、整備良好"],
    },
    description: {
      zh: "2022年款日产 Note Aura，搭载第二代 e-POWER 混动系统，电机驱动带来平顺如电车的驾驶感受，百公里油耗仅约4.8L。ProPILOT 驾驶辅助、360度环视监控、加热座椅、Apple CarPIay 全部配齐。紧凑车身在城市中穿梭自如，白色车况良好，是经济实用的代步之选。",
      en: "The 2022 Nissan Note Aura runs the 2nd-gen e-POWER system for EV-smooth driving at roughly 4.8 L/100km. ProPILOT assist, 360° Around View Monitor, heated seats, and Apple CarPlay are all included. Its compact body is perfect for city driving — a practical, economical commuter in excellent condition.",
      ja: "2022年式日産 ノート オーラ。第2世代e-POWERがEVのような滑らかな走りを提供し、燃費は約21km/L。プロパイロット、アラウンドビューモニター、シートヒーター、Apple CarPlayを完備。コンパクトボディで街乗りに最適、車況良好の経済的モデルです。",
    },
  },
  {
    id: "5",
    make: "Toyota",
    model: "Prius",
    year: 2023,
    mileage: 5000,
    displacement: "1,798cc",
    fuel: "Hybrid",
    transmission: "CVT",
    drive: "FWD",
    exteriorColor: "Red",
    bodyType: "Sedan",
    price: 3200000,
    status: "available",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Toyota_Prius_%28XW60%29_Plug-in_Hybrid_Automesse_Ludwigsburg_2023_1X7A0004.jpg/960px-Toyota_Prius_%28XW60%29_Plug-in_Hybrid_Automesse_Ludwigsburg_2023_1X7A0004.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/2023_Toyota_Prius_Z_HEV.jpg/960px-2023_Toyota_Prius_Z_HEV.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/2023_Toyota_Prius_Z_PHEV_rear.jpg/960px-2023_Toyota_Prius_Z_PHEV_rear.jpg",
    ],
    features: ["Toyota Safety Sense", "Solar Charging Roof", "HUD Display", "Apple CarPlay", "Adaptive Cruise Control"],
    inspection: "2026/06",
    repairHistory: "none",
    region: "愛知県",
    doors: 4,
    seats: 5,
    dimensions: "4,600×1,780×1,470mm",
    weight: "1,410kg",
    maxPower: "103ps / 3,600rpm",
    fuelEconomy: "28.0km/L",
    highlights: {
      zh: ["第5代普锐斯，颠覆性轿跑设计", "太阳能充电天窗 + HUD 抬头显示", "1.8L 混动油耗高达28km/L", "红色车身，仅5千公里"],
      en: ["5th-gen Prius, striking coupe design", "Solar charging roof + HUD display", "1.8L hybrid up to 28km/L", "Red body, only 5,000 km"],
      ja: ["5代目プリウス、革新的クーペデザイン", "ソーラー充電ルーフ＋HUDディスプレイ", "1.8Lハイブリッド燃費28km/L", "レッド、走行5千kmのみ"],
    },
    description: {
      zh: "2023年款丰田普锐斯（第5代），凭借颠覆性的轿跑造型成为日本年度车。1.8L 混动系统油耗高达28km/L，搭载太阳能充电天窗、HUD 抬头显示、自适应巡航和全套 Toyota Safety Sense。红色车身极具辨识度，仅行驶5千公里，是科技与颜值兼备的节能旗舰。",
      en: "The 2023 Toyota Prius (5th gen) won Japan Car of the Year with its dramatic coupe styling. The 1.8L hybrid sips fuel at up to 28km/L, while a solar charging roof, HUD, adaptive cruise, and full Toyota Safety Sense round out the tech. This red example has just 5,000 km — a tech-forward eco flagship.",
      ja: "2023年式トヨタ プリウス（5代目）。革新的クーペスタイルで日本カー・オブ・ザ・イヤー受賞。1.8Lハイブリッドが28km/Lの低燃費、ソーラー充電ルーフ、HUD、アダプティブクルーズ、Toyota Safety Senseを完備。レッド車体、走行5千km。テクノロジーと美しさを併せ持つエコ旗艦です。",
    },
  },
  {
    id: "6",
    make: "Mazda",
    model: "CX-5",
    year: 2022,
    mileage: 30000,
    displacement: "2,488cc",
    fuel: "Gasoline",
    transmission: "AT",
    drive: "AWD",
    exteriorColor: "Soul Red",
    bodyType: "SUV",
    price: 2500000,
    status: "available",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/2022_Mazda_CX-5_2.0_front.jpg/960px-2022_Mazda_CX-5_2.0_front.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Mazda_CX-5_Newground_1X7A6786_%28cropped%29.jpg/960px-Mazda_CX-5_Newground_1X7A6786_%28cropped%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Mazda_CX-5_%28KF%29_Facelift_1X7A0331_%282%29.jpg/960px-Mazda_CX-5_%28KF%29_Facelift_1X7A0331_%282%29.jpg",
    ],
    features: ["i-Activsense", "Bose Sound System", "LED Headlights", "Power Liftgate", "Heated Seats"],
    inspection: "2026/02",
    repairHistory: "none",
    region: "千葉県",
    doors: 5,
    seats: 5,
    dimensions: "4,575×1,845×1,690mm",
    weight: "1,620kg",
    maxPower: "194ps / 6,000rpm",
    fuelEconomy: "12.4km/L",
    highlights: {
      zh: ["2.5L 自然吸气，194ps 动力充沛", "i-Activsense 全套主动安全", "Bose 音响 + 电动尾门", "魂动红招牌配色，辨识度高"],
      en: ["2.5L naturally aspirated, 194ps", "Full i-Activsense safety suite", "Bose audio + power liftgate", "Signature Soul Red, highly recognizable"],
      ja: ["2.5L自然吸気 194ps", "i-Activsense 全装備", "Boseオーディオ＋パワーリフトゲート", "魂動レッド、高辨识度"],
    },
    description: {
      zh: "2022年款马自达 CX-5，2.5L 自然吸气发动机输出194匹马力，搭配 i-Activ AWD 四驱系统。魂动设计语言下的「魂动红」是马自达招牌配色。配备 i-Activsense 主动安全、Bose 音响、电动尾门和加热座椅。操控与设计兼顾，是中型SUV中极具驾驶乐趣的选择。",
      en: "The 2022 Mazda CX-5 pairs a 2.5L naturally aspirated engine (194ps) with i-Activ AWD. The signature Soul Red Crystal paint turns heads, while i-Activsense safety, Bose audio, power liftgate, and heated seats round out the package. A mid-size SUV that genuinely rewards the driver.",
      ja: "2022年式マツダ CX-5。2.5L自然吸気が194psを発揮、i-Activ AWDと組み合わせ。魂動レッドクリスタルはマツダの代名詞。i-Activsense、Boseオーディオ、パワーリフトゲート、シートヒーターを装備。中型SUVの中で駆け抜ける喜びを味わえる一台です。",
    },
  },
];

// Resolve a localized field (plain string or {zh,en,ja} map)
export function getVehicleText(field: LocalizedText, locale: string): string {
  if (typeof field === "string") return field;
  return field[locale] || field.en || field.zh || Object.values(field)[0] || "";
}

export function getVehicleList(field: Record<string, string[]>, locale: string): string[] {
  return field[locale] || field.en || field.zh || [];
}
