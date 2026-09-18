// Route metadata for country pages. Import rules and official sources live in
// country-guidance.ts and must be checked for each vehicle before purchase.

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
  // English keyword seeds for metadata.
  keywords: string[];
}

export const exportCountries: CountryExportInfo[] = [
  {
    code: "KE",
    slug: "kenya",
    name: { en: "Kenya", zh: "肯尼亚", ja: "ケニア" },
    region: { en: "East Africa", zh: "东非", ja: "東アフリカ" },
    keywords: ["import cars from Japan to Kenya", "Kenya car import duty", "buy used Japanese car Kenya"],
  },
  {
    code: "ZA",
    slug: "south-africa",
    name: { en: "South Africa", zh: "南非", ja: "南アフリカ" },
    region: { en: "Southern Africa", zh: "南非", ja: "南部アフリカ" },
    keywords: ["import Japanese car South Africa", "JDM South Africa import duty", "buy used Toyota South Africa"],
  },
  {
    code: "GB",
    slug: "united-kingdom",
    name: { en: "United Kingdom", zh: "英国", ja: "イギリス" },
    region: { en: "Western Europe", zh: "西欧", ja: "西欧" },
    keywords: ["import JDM car UK", "Japanese car UK import duty", "buy Toyota Land Cruiser UK"],
  },
  {
    code: "US",
    slug: "united-states",
    name: { en: "United States", zh: "美国", ja: "アメリカ" },
    region: { en: "North America", zh: "北美", ja: "北米" },
    keywords: ["import JDM car USA", "25 year rule import Japan car", "JDM classic car USA"],
  },
  {
    code: "CA",
    slug: "canada",
    name: { en: "Canada", zh: "加拿大", ja: "カナダ" },
    region: { en: "North America", zh: "北美", ja: "北米" },
    keywords: ["import Japanese car Canada", "JDM Canada RIV", "buy JDM car Canada"],
  },
  {
    code: "AU",
    slug: "australia",
    name: { en: "Australia", zh: "澳大利亚", ja: "オーストラリア" },
    region: { en: "Oceania", zh: "大洋洲", ja: "オセアニア" },
    keywords: ["import JDM car Australia", "Australian import car Japan", "buy JDM Australia"],
  },
  {
    code: "NZ",
    slug: "new-zealand",
    name: { en: "New Zealand", zh: "新西兰", ja: "ニュージーランド" },
    region: { en: "Oceania", zh: "大洋洲", ja: "オセアニア" },
    keywords: ["import Japanese car NZ", "JDM New Zealand import", "buy JDM New Zealand"],
  },
  {
    code: "AE",
    slug: "uae",
    name: { en: "United Arab Emirates", zh: "阿联酋", ja: "UAE" },
    region: { en: "Middle East", zh: "中东", ja: "中東" },
    keywords: ["import Japanese car UAE", "JDM Dubai import", "buy JDM UAE"],
  },
  {
    code: "TH",
    slug: "thailand",
    name: { en: "Thailand", zh: "泰国", ja: "タイ" },
    region: { en: "Southeast Asia", zh: "东南亚", ja: "東南アジア" },
    keywords: ["import Japanese car Thailand", "JDM Thailand import", "buy used Japanese car Thailand"],
  },
  {
    code: "MY",
    slug: "malaysia",
    name: { en: "Malaysia", zh: "马来西亚", ja: "マレーシア" },
    region: { en: "Southeast Asia", zh: "东南亚", ja: "東南アジア" },
    keywords: ["import Japanese car Malaysia", "JDM Malaysia import", "buy used Japanese car Malaysia"],
  },
  {
    code: "SG",
    slug: "singapore",
    name: { en: "Singapore", zh: "新加坡", ja: "シンガポール" },
    region: { en: "Southeast Asia", zh: "东南亚", ja: "東南アジア" },
    keywords: ["import JDM Singapore", "JDM Singapore import duty", "buy JDM Singapore"],
  },
  {
    code: "PH",
    slug: "philippines",
    name: { en: "Philippines", zh: "菲律宾", ja: "フィリピン" },
    region: { en: "Southeast Asia", zh: "东南亚", ja: "東南アジア" },
    keywords: ["import Japanese car Philippines", "JDM Philippines import", "buy used Japanese car Philippines"],
  },
  {
    code: "TW",
    slug: "taiwan",
    name: { en: "Taiwan", zh: "台湾", ja: "台湾" },
    region: { en: "East Asia", zh: "东亚", ja: "東アジア" },
    keywords: ["import Japanese car Taiwan", "JDM Taiwan import", "buy JDM Taiwan"],
  },
  {
    code: "HK",
    slug: "hong-kong",
    name: { en: "Hong Kong", zh: "香港", ja: "香港" },
    region: { en: "East Asia", zh: "东亚", ja: "東アジア" },
    keywords: ["import Japanese car Hong Kong", "JDM Hong Kong import duty", "buy JDM Hong Kong"],
  },
  {
    code: "CN",
    slug: "china",
    name: { en: "China", zh: "中国大陆", ja: "中国" },
    region: { en: "East Asia", zh: "东亚", ja: "東アジア" },
    keywords: ["import Japanese car China", "JDM China import duty", "buy used Japanese car China"],
  },
];

export function getCountryBySlug(slug: string): CountryExportInfo | undefined {
  return exportCountries.find((c) => c.slug === slug);
}
