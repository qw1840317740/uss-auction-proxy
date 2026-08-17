// Country-specific export guidance for clickcar.jp. One entry per areaServed country
// in siteConfig. Each entry drives a /[locale]/export-to/[slug] page; slug is the
// route segment (kebab-case). `meta` provides locale-neutral facts used by every
// locale's page copy; `keywords` seeds per-page long-tail SEO keywords.
//
// IMPORTANT: numbers here (duties, age limits, port names) are generic guidance for
// informational content — not legal advice. Update with verified figures before relying
// on them in marketing copy. Google penalizes inaccurate factual claims in YMYL export
// topics.

export type CountryCode =
  | "JP" | "CN" | "HK" | "TW" | "SG" | "MY" | "TH" | "PH"
  | "AU" | "NZ" | "GB" | "US" | "CA" | "ZA" | "KE" | "AE";

export interface CountryExportInfo {
  code: CountryCode;
  slug: string;
  name: {
    en: string;
    zh: string;
    ja: string;
  };
  region: {
    en: string;
    zh: string;
    ja: string;
  };
  // Capital / main commercial hub — used in body copy
  capital: string;
  // Primary receiving port(s) used for RoRo/container shipping from Japan
  ports: string[];
  // Estimated ocean transit time from Yokohama (weeks)
  transitWeeks: string;
  // General import age / regulation notes (generic — verify with current rules)
  vehicleAgeNote: {
    en: string;
    zh: string;
    ja: string;
  };
  // Suggested route / handling profile
  shipping: "RoRo" | "Container" | "Both";
  // Per-country keyword seeds (English). zh/ja versions are auto-generated.
  keywords: string[];
  // Whether right-hand drive vehicles are accepted (affects buyer choice)
  rhdAccepted: boolean;
}

export const exportCountries: CountryExportInfo[] = [
  {
    code: "KE",
    slug: "kenya",
    name: { en: "Kenya", zh: "肯尼亚", ja: "ケニア" },
    region: { en: "East Africa", zh: "东非", ja: "東アフリカ" },
    capital: "Nairobi",
    ports: ["Mombasa"],
    transitWeeks: "4–6 weeks",
    vehicleAgeNote: {
      en: "Kenya enforces an 8-year age limit on imported used vehicles; we recommend 2018+ units for hassle-free clearance.",
      zh: "肯尼亚对二手车有8年车龄限制，建议选择2018年后车型以确保顺利清关。",
      ja: "ケニアは中古車の8年車齢制限を設けています。スムーズな通関のため2018年以降の車両をおすすめします。",
    },
    shipping: "Both",
    rhdAccepted: true,
    keywords: ["import cars from Japan to Kenya", "Kenya car import duty", "buy used Japanese car Kenya"],
  },
  {
    code: "ZA",
    slug: "south-africa",
    name: { en: "South Africa", zh: "南非", ja: "南アフリカ" },
    region: { en: "Southern Africa", zh: "南非", ja: "南部アフリカ" },
    capital: "Pretoria",
    ports: ["Durban", "Cape Town"],
    transitWeeks: "4–5 weeks",
    vehicleAgeNote: {
      en: "South Africa has no fixed age limit but applies strict roadworthy (SABS) testing at port of entry; well-maintained JDM units with full service history clear fastest.",
      zh: "南非没有固定车龄限制，但到港后会执行严格的SABS车检；车况良好、有完整保养记录的日本车通关最快。",
      ja: "南アフリカには固定の車齢制限がありませんが、入港時に厳格なSABS検査が行われます。整備記録が完全な車両は通関がスムーズです。",
    },
    shipping: "Both",
    rhdAccepted: true,
    keywords: ["import Japanese car South Africa", "JDM South Africa import duty", "buy used Toyota South Africa"],
  },
  {
    code: "GB",
    slug: "united-kingdom",
    name: { en: "United Kingdom", zh: "英国", ja: "イギリス" },
    region: { en: "Western Europe", zh: "西欧", ja: "西欧" },
    capital: "London",
    ports: ["Southampton", "Felixstowe"],
    transitWeeks: "6–8 weeks",
    vehicleAgeNote: {
      en: "UK accepts JDM imports without an age limit; vehicles over 3 years old need an IVA test, under 3 years old need a Certificate of Conformity (CoC) — both require the original Japanese export certificate.",
      zh: "英国对日本二手车无车龄限制；3年以上需IVA测试，3年以下需合格证(CoC)，两者均需日本出口证明原件。",
      ja: "イギリスは年式制限なしで日本車を受け入れます。3年以上はIVAテスト、3年未満はCoC合格証が必要で、どちらも日本の輸出証明書原本が必要です。",
    },
    shipping: "Container",
    rhdAccepted: true,
    keywords: ["import JDM car UK", "Japanese car UK import duty", "buy Toyota Land Cruiser UK"],
  },
  {
    code: "US",
    slug: "united-states",
    name: { en: "United States", zh: "美国", ja: "アメリカ" },
    region: { en: "North America", zh: "北美", ja: "北米" },
    capital: "Washington, D.C.",
    ports: ["Los Angeles", "Long Beach", "New York"],
    transitWeeks: "3–4 weeks",
    vehicleAgeNote: {
      en: "US import rules are strict — most JDM units over 25 years old qualify for the classic-car exemption and avoid EPA/DOT compliance testing; younger vehicles must be 21+ years old and meet federal standards.",
      zh: "美国进口法规严格——大多数25年以上的日本车符合经典车豁免条件，可免EPA/DOT测试；较新车辆必须满21年并符合联邦标准。",
      ja: "アメリカの輸入規制は厳格です。25年超のJDM車はクラシック車免除の対象でEPA/DOT適合テストは不要。それ以外は21年経過と連邦基準適合が必要です。",
    },
    shipping: "Both",
    rhdAccepted: false,
    keywords: ["import JDM car USA", "25 year rule import Japan car", "JDM classic car USA"],
  },
  {
    code: "CA",
    slug: "canada",
    name: { en: "Canada", zh: "加拿大", ja: "カナダ" },
    region: { en: "North America", zh: "北美", ja: "北米" },
    capital: "Ottawa",
    ports: ["Vancouver", "Montreal"],
    transitWeeks: "3–4 weeks",
    vehicleAgeNote: {
      en: "Canada follows the US 15-year rule for used vehicles; vehicles 15 years or older are exempt from federal inspection, younger ones must pass RIV (Registrar of Imported Vehicles) inspection.",
      zh: "加拿大遵循美国15年规则；15年以上车辆免联邦检查，较新车辆必须通过RIV检查。",
      ja: "カナダはアメリカの15年ルールに準拠。15年以上は連邦検査免除、それ未満はRIV検査が必要です。",
    },
    shipping: "Both",
    rhdAccepted: false,
    keywords: ["import Japanese car Canada", "JDM Canada RIV", "buy JDM car Canada"],
  },
  {
    code: "AU",
    slug: "australia",
    name: { en: "Australia", zh: "澳大利亚", ja: "オーストラリア" },
    region: { en: "Oceania", zh: "大洋洲", ja: "オセアニア" },
    capital: "Canberra",
    ports: ["Melbourne", "Sydney", "Brisbane"],
    transitWeeks: "4–5 weeks",
    vehicleAgeNote: {
      en: "Australia has no fixed age limit on vehicle imports but requires strict ADR compliance via SEVS (Specialist & Enthusiast Vehicle Scheme) or a Registered Automotive Workshop (RAW) approval for used vehicles.",
      zh: "澳大利亚对二手车无固定车龄限制，但需通过SEVS或RAW认证以符合ADR标准。",
      ja: "オーストラリアは年式制限がありませんが、SEVSまたはRAW認証によるADR適合が必要です。",
    },
    shipping: "Both",
    rhdAccepted: true,
    keywords: ["import JDM car Australia", "Australian import car Japan", "buy JDM Australia"],
  },
  {
    code: "NZ",
    slug: "new-zealand",
    name: { en: "New Zealand", zh: "新西兰", ja: "ニュージーランド" },
    region: { en: "Oceania", zh: "大洋洲", ja: "オセアニア" },
    capital: "Wellington",
    ports: ["Auckland", "Lyttelton"],
    transitWeeks: "5–6 weeks",
    vehicleAgeNote: {
      en: "New Zealand has no fixed age limit but requires Entry Certification through a specialist facility; rust-free JDM stock is preferred due to strict border biosecurity.",
      zh: "新西兰对二手车无固定车龄限制，但需通过专项设施的入境认证；因严格的边境生物安全要求，无锈蚀的日本车更受欢迎。",
      ja: "ニュージーランドは年式制限がありませんが、専門施設でのEntry Certificationが必要です。厳格な検疫のため錆のないJDM車が好まれます。",
    },
    shipping: "Both",
    rhdAccepted: true,
    keywords: ["import Japanese car NZ", "JDM New Zealand import", "buy JDM New Zealand"],
  },
  {
    code: "AE",
    slug: "uae",
    name: { en: "United Arab Emirates", zh: "阿联酋", ja: "UAE" },
    region: { en: "Middle East", zh: "中东", ja: "中東" },
    capital: "Abu Dhabi",
    ports: ["Jebel Ali (Dubai)"],
    transitWeeks: "3–4 weeks",
    vehicleAgeNote: {
      en: "UAE has no age limit on vehicle imports; GCC specifications (or post-conversion to GCC) are required for resale but private imports are generally unrestricted.",
      zh: "阿联酋对二手车无车龄限制；转售需符合GCC规格或转GCC改装，但个人进口基本不受限。",
      ja: "UAEは年式制限なし。再販にはGCC仕様（またはGCC改装）が求められますが、個人輸入は概ね自由です。",
    },
    shipping: "Both",
    rhdAccepted: false,
    keywords: ["import Japanese car UAE", "JDM Dubai import", "buy JDM UAE"],
  },
  {
    code: "TH",
    slug: "thailand",
    name: { en: "Thailand", zh: "泰国", ja: "タイ" },
    region: { en: "Southeast Asia", zh: "东南亚", ja: "東南アジア" },
    capital: "Bangkok",
    ports: ["Laem Chabang"],
    transitWeeks: "2–3 weeks",
    vehicleAgeNote: {
      en: "Thailand recently revised rules on used vehicle imports; private buyers under MOI quotas can import JDM units, age limits and duty rates change frequently — confirm latest policy before purchase.",
      zh: "泰国近期修订二手车进口规则；个人买家通过MOI配额可进口日本车，车龄限制和税率经常变化，请在下单前确认最新政策。",
      ja: "タイは最近中古車の輸入規則を改正しました。MOI枠での個人輸入が可能ですが、年式制限や税率は頻繁に変更されるため、注文前に最新政策を確認してください。",
    },
    shipping: "Both",
    rhdAccepted: true,
    keywords: ["import Japanese car Thailand", "JDM Thailand import", "buy used Japanese car Thailand"],
  },
  {
    code: "MY",
    slug: "malaysia",
    name: { en: "Malaysia", zh: "马来西亚", ja: "マレーシア" },
    region: { en: "Southeast Asia", zh: "东南亚", ja: "東南アジア" },
    capital: "Kuala Lumpur",
    ports: ["Port Klang", "Penang"],
    transitWeeks: "2–3 weeks",
    vehicleAgeNote: {
      en: "Malaysia enforces a 5-year age limit for used vehicles at the time of registration; older units cannot be registered without special exemptions (e.g. AP permit for individuals).",
      zh: "马来西亚对二手车有5年车龄限制（旧车无法登记除非有AP许可证等豁免）。",
      ja: "マレーシアは登録時点で5年以内の中古車が対象。それ以外はAP許可など特別な免除が必要です。",
    },
    shipping: "Both",
    rhdAccepted: true,
    keywords: ["import Japanese car Malaysia", "JDM Malaysia import", "buy used Japanese car Malaysia"],
  },
  {
    code: "SG",
    slug: "singapore",
    name: { en: "Singapore", zh: "新加坡", ja: "シンガポール" },
    region: { en: "Southeast Asia", zh: "东南亚", ja: "東南アジア" },
    capital: "Singapore",
    ports: ["Singapore"],
    transitWeeks: "2 weeks",
    vehicleAgeNote: {
      en: "Singapore has no age limit but high COE (Certificate of Entitlement) costs make most imports uneconomical except for rare JDM specials; we help with documentation for collectors.",
      zh: "新加坡无车龄限制，但COE拥车证成本高昂，普通进口不划算；我们可为收藏家提供稀有日本车的文件服务。",
      ja: "シンガポールは年式制限なしですが、COE（権利証）コストが極めて高いため一般輸入は非経済的。レアなJDM車専門に書類サポートを行います。",
    },
    shipping: "Container",
    rhdAccepted: true,
    keywords: ["import JDM Singapore", "JDM Singapore import duty", "buy JDM Singapore"],
  },
  {
    code: "PH",
    slug: "philippines",
    name: { en: "Philippines", zh: "菲律宾", ja: "フィリピン" },
    region: { en: "Southeast Asia", zh: "东南亚", ja: "東南アジア" },
    capital: "Manila",
    ports: ["Manila", "Cebu"],
    transitWeeks: "2–3 weeks",
    vehicleAgeNote: {
      en: "Philippines enforces a 3-year age limit for used vehicles imported by traders; private buyers importing for personal use under a Returning Resident or OFW scheme may import older units.",
      zh: "菲律宾对贸易商进口的二手车有3年车龄限制；侨民或OFW个人进口可进口较旧车辆。",
      ja: "フィリピンは業者輸入に3年以内の中古車制限。帰国居住者やOFW枠での個人輸入は古い車両も対象となります。",
    },
    shipping: "Both",
    rhdAccepted: true,
    keywords: ["import Japanese car Philippines", "JDM Philippines import", "buy used Japanese car Philippines"],
  },
  {
    code: "TW",
    slug: "taiwan",
    name: { en: "Taiwan", zh: "台湾", ja: "台湾" },
    region: { en: "East Asia", zh: "东亚", ja: "東アジア" },
    capital: "Taipei",
    ports: ["Kaohsiung", "Keelung"],
    transitWeeks: "1–2 weeks",
    vehicleAgeNote: {
      en: "Taiwan allows used Japanese vehicle imports with a 10-year age limit measured from the first registration date; JDM luxury cars and Kei-class vehicles are popular.",
      zh: "台湾允许进口日本二手车，以初登年月计算有10年车龄限制；日本豪华车和K-car较受欢迎。",
      ja: "台湾は初度登録から10年以内の中古日本車輸入を許可。JDMの高級車や軽クラスが人気です。",
    },
    shipping: "Both",
    rhdAccepted: true,
    keywords: ["import Japanese car Taiwan", "JDM Taiwan import", "buy JDM Taiwan"],
  },
  {
    code: "HK",
    slug: "hong-kong",
    name: { en: "Hong Kong", zh: "香港", ja: "香港" },
    region: { en: "East Asia", zh: "东亚", ja: "東アジア" },
    capital: "Hong Kong",
    ports: ["Hong Kong"],
    transitWeeks: "1–2 weeks",
    vehicleAgeNote: {
      en: "Hong Kong has no age limit on imports but charges a First Registration Tax (FRT) of up to ~115% based on vehicle value; we help collectors and dealers with documentation.",
      zh: "香港对二手车无车龄限制，但首次登记税(FRT)高达车辆价值的约115%；我们可为收藏家与车行提供文件支持。",
      ja: "香港は年式制限なしですが、FRT（初回登録税）が車両価値の約115%までかかります。コレクターやディーラーの書類手続きをサポートします。",
    },
    shipping: "Container",
    rhdAccepted: true,
    keywords: ["import Japanese car Hong Kong", "JDM Hong Kong import duty", "buy JDM Hong Kong"],
  },
  {
    code: "CN",
    slug: "china",
    name: { en: "China", zh: "中国大陆", ja: "中国" },
    region: { en: "East Asia", zh: "东亚", ja: "東アジア" },
    capital: "Beijing",
    ports: ["Shanghai", "Tianjin", "Guangzhou"],
    transitWeeks: "1–2 weeks",
    vehicleAgeNote: {
      en: "China restricts used-vehicle imports to special pilot programs and only allows near-new (under ~3 years) units; JDM imports are uncommon and require a permit.",
      zh: "中国对二手车进口限制在特殊试点项目，仅允许近新（3年以内）车辆；日本二手车进口不常见，需特殊许可。",
      ja: "中国は中古車輸入を試験的プロジェクトに限定しており、近新車（3年未満）のみ許可。JDM輸入は一般的でなく、特別な許可が必要です。",
    },
    shipping: "Container",
    rhdAccepted: false,
    keywords: ["import Japanese car China", "JDM China import duty", "buy used Japanese car China"],
  },
];

export function getCountryBySlug(slug: string): CountryExportInfo | undefined {
  return exportCountries.find((c) => c.slug === slug);
}