// Blog posts data — updated 2026-06-12
// Get a localized string from either a plain string or a {zh,en,ja} map
import { odometerFraudGuideHtml } from "./odometer-fraud-guide";
import { auctionGradeGuideHtml } from "./auction-grade-guide";

export type LocalizedText = string | Record<string, string>;

export function getLocalized(field: LocalizedText, locale: string): string {
  if (typeof field === "string") return field;
  return field[locale] || field.en || field.zh || Object.values(field)[0] || "";
}

export interface BlogPostData {
  slug: string;
  title: LocalizedText;
  excerpt: LocalizedText;
  category: LocalizedText;
  date: string;
  readTime: LocalizedText;
  color: string;
  image: string;
  content?: LocalizedText;
  embedHtml?: boolean;
}

export const demoPosts: BlogPostData[] = [
  {
    slug: "japan-auction-grade-guide",
    title: {
      zh: "日本中古车拍卖评级完整解说",
      en: "Japanese Used Car Auction Grades Explained",
      ja: "日本中古車オークション評価の完全ガイド",
    },
    excerpt: {
      zh: "一次看懂日本拍卖表中的 S、6、5、4.5、R、RA、外观A-E、内装A-E和瑕疵符号，判断车况是否值得竞标。",
      en: "A practical guide to S, 6, 5, 4.5, R, RA, exterior A-E, interior A-E, and defect symbols on Japanese auction sheets.",
      ja: "S、6、5、4.5、R、RA、外装A-E、内装A-E、瑕疵記号まで、日本のオークション評価を実用的に解説します。",
    },
    category: { zh: "购车指南", en: "Guide", ja: "購入ガイド" },
    date: "2026-07-08",
    readTime: { zh: "7分钟阅读", en: "7 min read", ja: "7分で読める" },
    color: "bg-red-600",
    image: "/images/blog/auction-grade-guide.svg",
    embedHtml: true,
    content: auctionGradeGuideHtml,
  },
  {
    slug: "odometer-fraud-guide",
    title: {
      zh: "日本中古车里程表造假识别指南",
      en: "How to Spot Odometer Fraud When Buying a Used Car in Japan",
      ja: "日本中古車の走行距離改ざんを見抜くガイド",
    },
    excerpt: {
      zh: "从拍卖单、车检记录、保养历史和车辆磨损细节判断里程是否真实，降低日本中古车代购风险。",
      en: "A practical guide to checking auction sheets, inspection records, service history, and wear clues before buying a used car in Japan.",
      ja: "オークションシート、車検記録、整備履歴、内外装の摩耗から走行距離の信頼性を確認するための実用ガイド。",
    },
    category: { zh: "购车指南", en: "Guide", ja: "購入ガイド" },
    date: "2026-07-06",
    readTime: { zh: "8分钟阅读", en: "8 min read", ja: "8分で読める" },
    color: "bg-red-600",
    image: "/images/services/car-inspection.jpg",
    embedHtml: true,
    content: odometerFraudGuideHtml,
  },
  {
    slug: "japan-used-car-pitfall-guide-2026",
    title: {
      zh: "在日本买二手车必看！2026年最全避坑指南（附评级解读）",
      en: "The Ultimate Guide to Avoiding Pitfalls When Buying a Used Car in Japan (2026)",
      ja: "日本での中古車購入に必見！2026年最新・失敗しないための完全ガイド（評価解説付き）",
    },
    excerpt: {
      zh: "日本二手车市场透明度高、车况良好，但新手入手仍有不少坑。本文整合车主真实经历与行业资料，涵盖拍卖评级、修复歴、里程造假、冠水车、车检保险、贷款等7大陷阱，助你在日本买到称心如意的中古车。",
      en: "Japan's used car market is transparent and well-maintained, but pitfalls still await first-time buyers. This guide covers auction grading, repair history, mileage fraud, flood damage, inspection, insurance, and loans — 7 common traps to avoid.",
      ja: "日本中古車市場は透明性が高く車況も良好ですが、初心者には落とし穴が潜んでいます。オークション評価、修復歴、走行距離の不正、冠水車、車検・保険、ローンなど、7つのよくある罠を回避するための完全ガイド。",
    },
    category: { zh: "购车指南", en: "Guide", ja: "購入ガイド" },
    date: "2026-06-13",
    readTime: { zh: "10分钟阅读", en: "10 min read", ja: "10分で読める" },
    color: "bg-amber-600",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Honda_U-car_at_Tsurumi_Osaka.jpg/1280px-Honda_U-car_at_Tsurumi_Osaka.jpg",
    content: {
      zh: `日本拥有成熟完善的中古车（二手车）交易体系。日本消费者普遍重视车辆保养，定期进行检查与维修，加之日本交通状况良好、公共交通发达，许多私家车使用强度较低，车况往往保持得相当不错。此外，日本还拥有严格的二手车评估制度，市场透明度较高，调表、隐瞒维修历史等情况相对少见。

但这并不意味着购买过程毫无风险。一旦不了解行业规则，从低价陷阱到隐藏费用，普通买家依然可能"哑巴吃黄连"。本指南带你逐一识破。

<div class="jdm-callout" style="border-left:3px solid #d97706;background:#fffbeb;padding:1rem 1.25rem;margin:1.5rem 0;border-radius:0 6px 6px 0">
<p style="margin:0;color:#374151;font-size:0.9375rem;line-height:1.75"><strong style="color:#111">本文适用人群：</strong>在日本生活的外国人、留学生、初来乍到的上班族，以及任何打算从日本中古车市场购车的买家。无论你是在 Goo-NET、CarSensor 线上选车，还是去实体车行看车，以下内容都适用。</p>
</div>

![日本热门中古车丰田普锐斯，混动车在日本二手车市场流通量极大](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/2015-2018_Toyota_Prius_S.jpg/960px-2015-2018_Toyota_Prius_S.jpg)

>>> 看懂拍卖评级系统

日本的车辆拍卖行有一套特设的汽车评级系统，基于车辆整体状况分为 **RA、R、1–6 级和 S 级**等13个等级，帮助买家筛走低质素的破旧车辆。看懂这套评级，是避开事故车、买到优质中古车的第一步。

<div class="jdm-model-table"><div class="overflow-x-auto my-6">
<table class="w-full text-sm border-collapse">
<thead><tr class="border-b-2 border-gray-900">
<th class="px-3 py-2.5 text-left font-mono text-xs tracking-wider uppercase text-gray-400 font-normal">评级</th>
<th class="px-3 py-2.5 text-left font-mono text-xs tracking-wider uppercase text-gray-400 font-normal">里程参考</th>
<th class="px-3 py-2.5 text-left font-mono text-xs tracking-wider uppercase text-gray-400 font-normal">车况描述</th>
</tr></thead>
<tbody>
<tr class="border-b border-gray-100">
<td class="px-3 py-3 font-semibold text-gray-900 whitespace-nowrap"><span class="inline-block text-xs px-2 py-0.5 rounded bg-green-100 text-green-700 font-medium mr-1">S级</span></td>
<td class="px-3 py-3 text-gray-600">不足1年</td>
<td class="px-3 py-3 text-gray-600">近乎全新，可视为新车</td>
</tr>
<tr class="border-b border-gray-100">
<td class="px-3 py-3 font-semibold text-gray-900 whitespace-nowrap"><span class="inline-block text-xs px-2 py-0.5 rounded bg-green-100 text-green-700 font-medium mr-1">6级</span></td>
<td class="px-3 py-3 text-gray-600">不到3万公里</td>
<td class="px-3 py-3 text-gray-600">使用极少，几乎完好无缺</td>
</tr>
<tr class="border-b border-gray-100">
<td class="px-3 py-3 font-semibold text-gray-900 whitespace-nowrap"><span class="inline-block text-xs px-2 py-0.5 rounded bg-green-100 text-green-700 font-medium mr-1">5级</span></td>
<td class="px-3 py-3 text-gray-600">不到6万公里</td>
<td class="px-3 py-3 text-gray-600">保养妥当，状况极佳</td>
</tr>
<tr class="border-b border-gray-100">
<td class="px-3 py-3 font-semibold text-gray-900 whitespace-nowrap"><span class="inline-block text-xs px-2 py-0.5 rounded bg-amber-100 text-amber-700 font-medium mr-1">4.5级</span></td>
<td class="px-3 py-3 text-gray-600">不到10万公里</td>
<td class="px-3 py-3 text-gray-600">轻微磨损，未必需要维修</td>
</tr>
<tr class="border-b border-gray-100">
<td class="px-3 py-3 font-semibold text-gray-900 whitespace-nowrap"><span class="inline-block text-xs px-2 py-0.5 rounded bg-amber-100 text-amber-700 font-medium mr-1">4级</span></td>
<td class="px-3 py-3 text-gray-600">不到15万公里</td>
<td class="px-3 py-3 text-gray-600">有轻微磨损，需小量维修</td>
</tr>
<tr class="border-b border-gray-100">
<td class="px-3 py-3 font-semibold text-gray-900 whitespace-nowrap"><span class="inline-block text-xs px-2 py-0.5 rounded bg-red-100 text-red-700 font-medium mr-1">R级</span></td>
<td class="px-3 py-3 text-gray-600">—</td>
<td class="px-3 py-3 text-gray-600">有修复歴（事故修复记录）</td>
</tr>
<tr class="border-b border-gray-100">
<td class="px-3 py-3 font-semibold text-gray-900 whitespace-nowrap"><span class="inline-block text-xs px-2 py-0.5 rounded bg-red-100 text-red-700 font-medium mr-1">RA级</span></td>
<td class="px-3 py-3 text-gray-600">—</td>
<td class="px-3 py-3 text-gray-600">有修复歴且内外损伤较重</td>
</tr>
</tbody>
</table>
</div></div>

<div class="jdm-callout" style="border-left:3px solid #16a34a;background:#f0fdf4;padding:1rem 1.25rem;margin:1.5rem 0;border-radius:0 6px 6px 0">
<p style="margin:0;color:#374151;font-size:0.9375rem;line-height:1.75"><strong style="color:#111">✅ 评级建议：</strong>普通买家优先考虑4级及以上车辆（绿色）；R/RA级（红色）为事故修复车，需有丰富经验或经专业第三方检查才可考虑，新手建议直接避开。</p>
</div>

>>> 七大常见陷阱

<div class="jdm-trap-item"><div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-8">
<div class="text-5xl sm:text-6xl font-bold text-gray-200 leading-none select-none shrink-0" style="font-family:Georgia,serif">01</div>
<div class="flex-1 min-w-0">
<h3 class="text-base font-semibold text-gray-900 mb-2 mt-0">低价诱饵 + 诸费用陷阱</h3>
<p class="text-gray-600 leading-relaxed text-sm mb-2"><strong class="text-gray-900">典型套路：</strong>网上看到一辆"30万日元"的极低标价，到了店里才发现：镀膜费、清洗费、手续费、代办费……各种"必选项"叠加下来，总价直接翻到80万日元甚至更高。有些店还会搭配"走合作贷款才享受此价"的条件，软磨硬泡不让你轻易离开。</p>
<p class="text-gray-600 leading-relaxed text-sm"><strong class="text-gray-900">如何避坑：</strong>要求出具含所有费用的总价报价单（车辆本体价、自动车税、重量税、法定保险费、登录手续费、车库证明代办费等）。警惕"镀膜""清洁""强制选装"等没有明码标价的附加项，绝不在第一次到访时仓促签约，多对比3家以上车行。</p>
</div>
</div></div>

<div class="jdm-trap-item"><div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-8">
<div class="text-5xl sm:text-6xl font-bold text-gray-200 leading-none select-none shrink-0" style="font-family:Georgia,serif">02</div>
<div class="flex-1 min-w-0">
<h3 class="text-base font-semibold text-gray-900 mb-2 mt-0">修复歴（事故车）的识别</h3>
<p class="text-gray-600 leading-relaxed text-sm mb-2"><strong class="text-gray-900">什么是修复歴车？</strong>修复歴有车（修復歴あり）是指车辆的骨架部分（フレーム）曾受损并被修复的车辆。价格通常较低，但若损伤波及底盘或车架，可能对行驶安全性造成影响。</p>
<p class="text-gray-600 leading-relaxed text-sm mb-3"><strong class="text-gray-900">识别方法：</strong>① 查看车辆信息页是否明确标注"修復歴なし"（无修复歴）；② 实车查看时，重点检查引擎盖周围的螺丝痕迹、车门缝隙是否均匀、车身漆面颜色一致性；③ 委托第三方机构（如日本自動車査定協会 JAAI）进行独立评估。</p>
<div style="border-left:3px solid #ef4444;background:#fff8f8;padding:0.75rem 1rem;margin:0.75rem 0;border-radius:0 6px 6px 0">
<p style="margin:0;color:#374151;font-size:0.8125rem;line-height:1.75"><strong style="color:#991f1f">⚠ 注意：</strong>水没车（冠水车）的损伤不属于"修复歴"范畴，需要另行确认（见陷阱04）。</p>
</div>
</div>
</div></div>

![购车前务必由专业技师检查发动机舱，核对保养记录](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Mechanic_works_on_car_engine_performing_routine_maintenance_and_inspections_on_vehicle_parts.jpg/960px-Mechanic_works_on_car_engine_performing_routine_maintenance_and_inspections_on_vehicle_parts.jpg)

<div class="jdm-trap-item"><div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-8">
<div class="text-5xl sm:text-6xl font-bold text-gray-200 leading-none select-none shrink-0" style="font-family:Georgia,serif">03</div>
<div class="flex-1 min-w-0">
<h3 class="text-base font-semibold text-gray-900 mb-2 mt-0">走行距离造假与过走行车</h3>
<p class="text-gray-600 leading-relaxed text-sm mb-2"><strong class="text-gray-900">参考标准：</strong>日本一般认为，车辆每年行驶约8,000～10,000公里属于正常范围。超过每年1万公里则可能被视为"过走行车"，零部件消耗较快。</p>
<p class="text-gray-600 leading-relaxed text-sm mb-2"><strong class="text-gray-900">注意事项：</strong>年式与走行距离要结合来看——10年车型走行5万公里（每年仅5,000公里）并非过走行；反之5年车型走行10万公里则需留意。走行距离极低也不代表没问题，长期不开动的车可能存在皮带老化、密封件硬化等问题。</p>
<p class="text-gray-600 leading-relaxed text-sm">一般认为<strong class="text-gray-900">正时皮带寿命约10万公里，发动机寿命约15万公里</strong>，购买时需确认是否已更换。日本已有车辆历史信息查询服务，可核对车检记录中的历史里程数，比对是否前后矛盾。</p>
</div>
</div></div>

<div class="jdm-trap-item"><div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-8">
<div class="text-5xl sm:text-6xl font-bold text-gray-200 leading-none select-none shrink-0" style="font-family:Georgia,serif">04</div>
<div class="flex-1 min-w-0">
<h3 class="text-base font-semibold text-gray-900 mb-2 mt-0">冠水车、塩害车、雹害车</h3>
<p class="text-gray-600 leading-relaxed text-sm mb-2">这三类车辆都不属于"修复歴有车"，但都有隐患，需要特别留意：</p>
<div class="grid grid-cols-1 sm:grid-cols-3 gap-3 my-3">
<div class="bg-gray-50 border border-gray-100 rounded-lg p-4">
<h4 class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-2">冠水车（水没車）</h4>
<p class="text-xs text-gray-600 leading-relaxed">长时间浸水后，发动机及电装系统极易劣化。识别：检查引擎盖内、脚垫、后备箱有无水渍、霉味或腐蚀。</p>
</div>
<div class="bg-gray-50 border border-gray-100 rounded-lg p-4">
<h4 class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-2">塩害车（塩害車）</h4>
<p class="text-xs text-gray-600 leading-relaxed">沿海地区行驶受盐分侵蚀，底盘和车架易生锈。识别：检查底盘下方、排气管周围、门槛内侧有无大面积锈蚀。</p>
</div>
<div class="bg-gray-50 border border-gray-100 rounded-lg p-4">
<h4 class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-2">雹害车（ひょう害車）</h4>
<p class="text-xs text-gray-600 leading-relaxed">被冰雹打出凹痕，通常低价销售。走行性能影响不大，但修复可能费用不低，部分修复后会被列为修复歴有车。</p>
</div>
</div>
</div>
</div></div>

<div class="jdm-trap-item"><div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-8">
<div class="text-5xl sm:text-6xl font-bold text-gray-200 leading-none select-none shrink-0" style="font-family:Georgia,serif">05</div>
<div class="flex-1 min-w-0">
<h3 class="text-base font-semibold text-gray-900 mb-2 mt-0">车检与保险的误区</h3>
<p class="text-gray-600 leading-relaxed text-sm mb-2"><strong class="text-gray-900">车检周期：</strong>日本自家用车的车检周期为——新车登录后首次3年，之后每2年一次。购买二手车时有"车检有"（剩余有效期内无需再检，是加分项）和"车检无"（需买家自行安排，费用和时间要提前计划）两种情况。</p>
<p class="text-gray-600 leading-relaxed text-sm mb-2"><strong class="text-gray-900">保险误区：</strong>很多人以为附带的"自賠責保険（强制责任险）"已足够，其实不然。强制险<strong style="color:#dc2626">仅保障对方的人身伤亡</strong>，不赔对方车辆损失，更不赔自己的损失，且赔付上限有限。</p>
<p class="text-gray-600 leading-relaxed text-sm">强烈建议另行购买<strong class="text-gray-900">任意保险（商业险）</strong>，通过 価格.com 等平台对比报价，第一年费用约5万～7万日元，通常包含对方无限赔付、自身人身赔偿及律师特约。提车当天即需保险生效，建议在过户完成、拿到新车检证扫描件后提前网上申请并设定生效日。</p>
</div>
</div></div>

<div class="jdm-trap-item"><div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-8">
<div class="text-5xl sm:text-6xl font-bold text-gray-200 leading-none select-none shrink-0" style="font-family:Georgia,serif">06</div>
<div class="flex-1 min-w-0">
<h3 class="text-base font-semibold text-gray-900 mb-2 mt-0">贷款买车的隐性成本</h3>
<p class="text-gray-600 leading-relaxed text-sm mb-2">日本二手日系车保值率较高，价格也相对不低，若选择有息贷款，<strong style="color:#dc2626">利息成本可能超过直接购买新车</strong>。在决定贷款前，请务必：</p>
<p class="text-gray-600 leading-relaxed text-sm">明确贷款年利率（金利），注意部分车行的"低标价+高利贷款"组合套路；比较车行贷款与银行贷款的综合成本；确认贷款条款中是否捆绑了车行独家保险或维修合同。</p>
</div>
</div></div>

<div class="jdm-trap-item"><div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start py-8">
<div class="text-5xl sm:text-6xl font-bold text-gray-200 leading-none select-none shrink-0" style="font-family:Georgia,serif">07</div>
<div class="flex-1 min-w-0">
<h3 class="text-base font-semibold text-gray-900 mb-2 mt-0">选择车行与购车渠道</h3>

<div class="jdm-model-table"><div class="overflow-x-auto my-3">
<table class="w-full text-sm border-collapse">
<thead><tr class="border-b-2 border-gray-900">
<th class="px-3 py-2 text-left font-mono text-xs tracking-wider uppercase text-gray-400 font-normal">渠道</th>
<th class="px-3 py-2 text-left font-mono text-xs tracking-wider uppercase text-gray-400 font-normal">优点</th>
<th class="px-3 py-2 text-left font-mono text-xs tracking-wider uppercase text-gray-400 font-normal">注意事项</th>
</tr></thead>
<tbody>
<tr class="border-b border-gray-100"><td class="px-3 py-2.5 font-semibold text-gray-900 whitespace-nowrap">厂商认定中古车</td><td class="px-3 py-2.5 text-gray-600">车况有保障，附原厂质保</td><td class="px-3 py-2.5 text-gray-600">价格较高</td></tr>
<tr class="border-b border-gray-100"><td class="px-3 py-2.5 font-semibold text-gray-900 whitespace-nowrap">大型连锁中古车商</td><td class="px-3 py-2.5 text-gray-600">库存丰富，信息透明</td><td class="px-3 py-2.5 text-gray-600">诸费用需仔细核实</td></tr>
<tr class="border-b border-gray-100"><td class="px-3 py-2.5 font-semibold text-gray-900 whitespace-nowrap">拍卖代行</td><td class="px-3 py-2.5 text-gray-600">价格接近批发价</td><td class="px-3 py-2.5 text-gray-600">需信任代行方专业判断</td></tr>
<tr class="border-b border-gray-100"><td class="px-3 py-2.5 font-semibold text-gray-900 whitespace-nowrap">个人卖家</td><td class="px-3 py-2.5 text-gray-600">价格可能更低</td><td class="px-3 py-2.5 text-gray-600">无保障，风险高，不建议新手</td></tr>
</tbody>
</table>
</div></div>
<div style="border-left:3px solid #ef4444;background:#fff8f8;padding:0.75rem 1rem;margin:0.75rem 0;border-radius:0 6px 6px 0">
<p style="margin:0;color:#374151;font-size:0.8125rem;line-height:1.75"><strong style="color:#991f1f">⚠ 警示案例：</strong>日本最大二手车公司 BIGMOTOR 曾于2023年曝出大规模骗保丑闻——员工系统性地对收购车辆进行人为破坏后向保险公司索取高额修理费。即使是知名连锁品牌也应保持审慎，多方对比。</p>
</div>
</div>
</div></div>

![日本正规厂商认定中古车经销店，车况有保障但价格略高](https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Toyota_TOYOPET_Japan_Car_dealership_Saitama_1.jpg/960px-Toyota_TOYOPET_Japan_Car_dealership_Saitama_1.jpg)

>>> 购车前必备的准备清单

在正式看车、签约前，请确认以下事项已就绪：

<div class="jdm-checklist" style="margin:1.5rem 0">
<div class="flex items-start gap-3 py-3 border-b border-gray-100">
<div class="w-5 h-5 rounded-full bg-amber-600 flex items-center justify-center flex-shrink-0 mt-0.5"><svg viewBox="0 0 10 10" fill="none" class="w-2.5 h-2.5"><polyline points="2,5 4.5,7.5 8,3" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
<span class="text-gray-600 text-sm leading-relaxed"><strong class="text-gray-900 font-medium">车库证明（車庫証明）</strong>——购车时必须提交停车位证明，租赁车位也可，需提前与停车场签约</span>
</div>
<div class="flex items-start gap-3 py-3 border-b border-gray-100">
<div class="w-5 h-5 rounded-full bg-amber-600 flex items-center justify-center flex-shrink-0 mt-0.5"><svg viewBox="0 0 10 10" fill="none" class="w-2.5 h-2.5"><polyline points="2,5 4.5,7.5 8,3" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
<span class="text-gray-600 text-sm leading-relaxed"><strong class="text-gray-900 font-medium">驾照（運転免許証）</strong>——在留外国人需持有日本驾照或经公证的国际驾照翻译件</span>
</div>
<div class="flex items-start gap-3 py-3 border-b border-gray-100">
<div class="w-5 h-5 rounded-full bg-amber-600 flex items-center justify-center flex-shrink-0 mt-0.5"><svg viewBox="0 0 10 10" fill="none" class="w-2.5 h-2.5"><polyline points="2,5 4.5,7.5 8,3" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
<span class="text-gray-600 text-sm leading-relaxed"><strong class="text-gray-900 font-medium">印章（認印）</strong>——签合同时通常需要</span>
</div>
<div class="flex items-start gap-3 py-3 border-b border-gray-100">
<div class="w-5 h-5 rounded-full bg-amber-600 flex items-center justify-center flex-shrink-0 mt-0.5"><svg viewBox="0 0 10 10" fill="none" class="w-2.5 h-2.5"><polyline points="2,5 4.5,7.5 8,3" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
<span class="text-gray-600 text-sm leading-relaxed"><strong class="text-gray-900 font-medium">初期预算规划</strong>——车辆本体价 + 诸费用（通常占车价的10%～20%）+ 任意保险 + 首次车检费（如需）</span>
</div>
<div class="flex items-start gap-3 py-3 border-b border-gray-100">
<div class="w-5 h-5 rounded-full bg-amber-600 flex items-center justify-center flex-shrink-0 mt-0.5"><svg viewBox="0 0 10 10" fill="none" class="w-2.5 h-2.5"><polyline points="2,5 4.5,7.5 8,3" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
<span class="text-gray-600 text-sm leading-relaxed"><strong class="text-gray-900 font-medium">比价准备</strong>——在 Goo-NET、CarSensor 等平台查询同款车型行情，建立价格基准</span>
</div>
<div class="flex items-start gap-3 py-3">
<div class="w-5 h-5 rounded-full bg-amber-600 flex items-center justify-center flex-shrink-0 mt-0.5"><svg viewBox="0 0 10 10" fill="none" class="w-2.5 h-2.5"><polyline points="2,5 4.5,7.5 8,3" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
<span class="text-gray-600 text-sm leading-relaxed"><strong class="text-gray-900 font-medium">实车检查</strong>——试乘、检查车内外、索取車両検査証</span>
</div>
</div>

>>> 总结：买车核心原则

1. **不被低价标签迷惑**，看总价，要求车行出具含所有费用的完整报价单。
2. **优先选择无修复歴、无冠水记录**的车辆，并索取第三方检查报告。
3. **走行距离要结合年式综合判断**，留意极低走行距离背后的异常。
4. **车险不能只靠强制险**，务必在提车当日前配置好任意保险。
5. **贷款有成本**，对比多方利率，警惕低价捆绑高利贷。
6. **货比三家**，不在第一次到店时仓促签约，多看多比较。

<div class="jdm-cta" style="background:#111;margin:2rem -1rem;padding:2.5rem 1.5rem;border-radius:0.75rem">
<p class="font-mono text-xs tracking-widest uppercase text-amber-500 mb-3">代拍服务</p>
<h3 style="font-family:Georgia,serif;font-size:1.5rem;font-weight:400;color:#fff;margin-bottom:0.75rem;line-height:1.3">担心自己踩坑？<br>让专业代拍帮你把关</h3>
<p style="font-size:0.875rem;color:rgba(255,255,255,0.5);max-width:480px;margin-bottom:1.5rem;line-height:1.75">我们深耕日本中古车市场多年，熟悉拍卖评级、修复歴甄别、实车检查全流程。可协助您从 USS、TAA、HAA 等拍卖场代为竞标，全程透明报价，安全出口至您所在地区。</p>
<a href="/zh/contact" style="display:inline-block;background:#d97706;color:#fff;font-size:0.8125rem;font-weight:500;letter-spacing:0.06em;padding:0.75rem 1.75rem;text-decoration:none;border-radius:0.25rem">立即咨询代拍服务</a>
<p style="margin-top:0.75rem;font-size:0.75rem;color:rgba(255,255,255,0.3);font-family:monospace;letter-spacing:0.04em">通常于24小时内回复 · 中文、日文均可沟通</p>
</div>`,
      en: `Japan has one of the most mature used car (中古車) trading systems in the world. Japanese consumers generally take vehicle maintenance seriously, conducting regular inspections and repairs. Combined with good road conditions and a robust public transit network, many privately-owned cars see relatively light use and remain in excellent condition. Japan also enforces a strict used car assessment system, making the market highly transparent — odometer fraud and concealed repair histories are comparatively rare.

But that doesn't mean buying is risk-free. Without understanding the rules of the industry, an ordinary buyer can still get burned — from low-price bait to hidden fees. This guide helps you see through every trap.

<div class="jdm-callout" style="border-left:3px solid #d97706;background:#fffbeb;padding:1rem 1.25rem;margin:1.5rem 0;border-radius:0 6px 6px 0">
<p style="margin:0;color:#374151;font-size:0.9375rem;line-height:1.75"><strong style="color:#111">Who this is for:</strong> Foreigners living in Japan, students, new workers, and anyone buying from Japan's used car market. Whether browsing Goo-NET and CarSensor online or visiting dealers in person, the advice below applies.</p>
</div>

![The Toyota Prius — a hugely popular model in Japan's used car market](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/2015-2018_Toyota_Prius_S.jpg/960px-2015-2018_Toyota_Prius_S.jpg)

>>> Understanding the Auction Grading System

Japan's vehicle auction houses use a specialized grading system based on overall condition, ranging across **RA, R, grades 1–6, and S** (13 levels in total), helping buyers filter out low-quality vehicles. Understanding this system is the first step to avoiding accident cars and buying a quality used car.

<div class="jdm-model-table"><div class="overflow-x-auto my-6">
<table class="w-full text-sm border-collapse">
<thead><tr class="border-b-2 border-gray-900">
<th class="px-3 py-2.5 text-left font-mono text-xs tracking-wider uppercase text-gray-400 font-normal">Grade</th>
<th class="px-3 py-2.5 text-left font-mono text-xs tracking-wider uppercase text-gray-400 font-normal">Mileage Ref.</th>
<th class="px-3 py-2.5 text-left font-mono text-xs tracking-wider uppercase text-gray-400 font-normal">Condition</th>
</tr></thead>
<tbody>
<tr class="border-b border-gray-100"><td class="px-3 py-3 font-semibold text-gray-900 whitespace-nowrap"><span class="inline-block text-xs px-2 py-0.5 rounded bg-green-100 text-green-700 font-medium mr-1">S</span></td><td class="px-3 py-3 text-gray-600">< 1 year</td><td class="px-3 py-3 text-gray-600">Nearly new, virtually brand new</td></tr>
<tr class="border-b border-gray-100"><td class="px-3 py-3 font-semibold text-gray-900 whitespace-nowrap"><span class="inline-block text-xs px-2 py-0.5 rounded bg-green-100 text-green-700 font-medium mr-1">6</span></td><td class="px-3 py-3 text-gray-600">< 30,000 km</td><td class="px-3 py-3 text-gray-600">Very lightly used, near flawless</td></tr>
<tr class="border-b border-gray-100"><td class="px-3 py-3 font-semibold text-gray-900 whitespace-nowrap"><span class="inline-block text-xs px-2 py-0.5 rounded bg-green-100 text-green-700 font-medium mr-1">5</span></td><td class="px-3 py-3 text-gray-600">< 60,000 km</td><td class="px-3 py-3 text-gray-600">Well maintained, excellent</td></tr>
<tr class="border-b border-gray-100"><td class="px-3 py-3 font-semibold text-gray-900 whitespace-nowrap"><span class="inline-block text-xs px-2 py-0.5 rounded bg-amber-100 text-amber-700 font-medium mr-1">4.5</span></td><td class="px-3 py-3 text-gray-600">< 100,000 km</td><td class="px-3 py-3 text-gray-600">Minor wear, may not need repair</td></tr>
<tr class="border-b border-gray-100"><td class="px-3 py-3 font-semibold text-gray-900 whitespace-nowrap"><span class="inline-block text-xs px-2 py-0.5 rounded bg-amber-100 text-amber-700 font-medium mr-1">4</span></td><td class="px-3 py-3 text-gray-600">< 150,000 km</td><td class="px-3 py-3 text-gray-600">Minor wear, small repairs needed</td></tr>
<tr class="border-b border-gray-100"><td class="px-3 py-3 font-semibold text-gray-900 whitespace-nowrap"><span class="inline-block text-xs px-2 py-0.5 rounded bg-red-100 text-red-700 font-medium mr-1">R</span></td><td class="px-3 py-3 text-gray-600">—</td><td class="px-3 py-3 text-gray-600">Repair history (accident-repaired)</td></tr>
<tr class="border-b border-gray-100"><td class="px-3 py-3 font-semibold text-gray-900 whitespace-nowrap"><span class="inline-block text-xs px-2 py-0.5 rounded bg-red-100 text-red-700 font-medium mr-1">RA</span></td><td class="px-3 py-3 text-gray-600">—</td><td class="px-3 py-3 text-gray-600">Repair history, heavier damage</td></tr>
</tbody>
</table>
</div></div>

<div class="jdm-callout" style="border-left:3px solid #16a34a;background:#f0fdf4;padding:1rem 1.25rem;margin:1.5rem 0;border-radius:0 6px 6px 0">
<p style="margin:0;color:#374151;font-size:0.9375rem;line-height:1.75"><strong style="color:#111">✅ Recommendation:</strong> Ordinary buyers should prioritize grade 4 and above (green). R/RA grades (red) are accident-repaired cars — only consider with extensive experience or a professional third-party inspection; beginners should avoid them entirely.</p>
</div>

>>> 7 Common Pitfalls

<div class="jdm-trap-item"><div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-8">
<div class="text-5xl sm:text-6xl font-bold text-gray-200 leading-none select-none shrink-0" style="font-family:Georgia,serif">01</div>
<div class="flex-1 min-w-0">
<h3 class="text-base font-semibold text-gray-900 mb-2 mt-0">Low-Price Bait + Hidden Fees</h3>
<p class="text-gray-600 leading-relaxed text-sm mb-2"><strong class="text-gray-900">The trap:</strong> You spot a car listed at "300,000 yen." At the dealership, coating fees, cleaning fees, processing fees, agency fees pile on until the total doubles to 800,000 yen or more. Some insist you take their partner loan to get the advertised price.</p>
<p class="text-gray-600 leading-relaxed text-sm"><strong class="text-gray-900">How to avoid:</strong> Demand an all-inclusive itemized quote (vehicle price, auto tax, weight tax, mandatory insurance, registration, parking certificate). Beware unlabeled add-ons like "coating" and "cleaning." Never sign on the first visit — compare at least 3 dealers.</p>
</div>
</div></div>

<div class="jdm-trap-item"><div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-8">
<div class="text-5xl sm:text-6xl font-bold text-gray-200 leading-none select-none shrink-0" style="font-family:Georgia,serif">02</div>
<div class="flex-1 min-w-0">
<h3 class="text-base font-semibold text-gray-900 mb-2 mt-0">Identifying Repair History (Accident Cars)</h3>
<p class="text-gray-600 leading-relaxed text-sm mb-2"><strong class="text-gray-900">What it is:</strong> A car with repair history (修復歴あり) has had its frame (フレーム) damaged and repaired. Priced lower, but if damage reached the chassis or frame, it may affect driving safety.</p>
<p class="text-gray-600 leading-relaxed text-sm mb-3"><strong class="text-gray-900">How to detect:</strong> ① Check the spec sheet for "修復歴なし" (no repair history); ② Inspect screw marks around the hood, door gap uniformity, and paint color consistency; ③ Commission an independent assessment from JAAI.</p>
<div style="border-left:3px solid #ef4444;background:#fff8f8;padding:0.75rem 1rem;margin:0.75rem 0;border-radius:0 6px 6px 0">
<p style="margin:0;color:#374151;font-size:0.8125rem;line-height:1.75"><strong style="color:#991f1f">⚠ Note:</strong> Flood damage (冠水車) is NOT classified as "repair history" — it must be checked separately (see pitfall 04).</p>
</div>
</div>
</div></div>

![Always have a professional mechanic inspect the engine bay and verify service records before purchase](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Mechanic_works_on_car_engine_performing_routine_maintenance_and_inspections_on_vehicle_parts.jpg/960px-Mechanic_works_on_car_engine_performing_routine_maintenance_and_inspections_on_vehicle_parts.jpg)

<div class="jdm-trap-item"><div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-8">
<div class="text-5xl sm:text-6xl font-bold text-gray-200 leading-none select-none shrink-0" style="font-family:Georgia,serif">03</div>
<div class="flex-1 min-w-0">
<h3 class="text-base font-semibold text-gray-900 mb-2 mt-0">Mileage Fraud & High-Mileage Cars</h3>
<p class="text-gray-600 leading-relaxed text-sm mb-2"><strong class="text-gray-900">Reference:</strong> 8,000–10,000 km/year is considered normal in Japan. Over 10,000 km/year may mark a car as "high-mileage," with faster component wear.</p>
<p class="text-gray-600 leading-relaxed text-sm mb-2"><strong class="text-gray-900">Key points:</strong> Combine mileage with model year — a 10-year-old car with 50,000 km (5,000 km/year) is fine; a 5-year-old car with 100,000 km needs scrutiny. Extremely low mileage isn't always good — long-idle cars may suffer belt aging and seal hardening.</p>
<p class="text-gray-600 leading-relaxed text-sm"><strong class="text-gray-900">Timing belts last ~100,000 km; engines ~150,000 km.</strong> Confirm whether these have been replaced. Japan now offers vehicle-history lookup services to cross-check mileage records for inconsistencies.</p>
</div>
</div></div>

<div class="jdm-trap-item"><div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-8">
<div class="text-5xl sm:text-6xl font-bold text-gray-200 leading-none select-none shrink-0" style="font-family:Georgia,serif">04</div>
<div class="flex-1 min-w-0">
<h3 class="text-base font-semibold text-gray-900 mb-2 mt-0">Flood, Salt & Hail Damage</h3>
<p class="text-gray-600 leading-relaxed text-sm mb-2">These three aren't classified as "repair history" but carry hidden risks:</p>
<div class="grid grid-cols-1 sm:grid-cols-3 gap-3 my-3">
<div class="bg-gray-50 border border-gray-100 rounded-lg p-4">
<h4 class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-2">Flood (水没車)</h4>
<p class="text-xs text-gray-600 leading-relaxed">Prolonged submersion degrades the engine and electrical systems. Check hood interior, floor mats, trunk for water stains, mildew, corrosion.</p>
</div>
<div class="bg-gray-50 border border-gray-100 rounded-lg p-4">
<h4 class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-2">Salt (塩害車)</h4>
<p class="text-xs text-gray-600 leading-relaxed">Coastal-area cars suffer salt corrosion to chassis and frame. Check undercarriage, exhaust, door sills for rust.</p>
</div>
<div class="bg-gray-50 border border-gray-100 rounded-lg p-4">
<h4 class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-2">Hail (ひょう害車)</h4>
<p class="text-xs text-gray-600 leading-relaxed">Hail dents, usually sold cheap. Driving impact is minor, but repairs can be costly and may later be logged as repair history.</p>
</div>
</div>
</div>
</div></div>

<div class="jdm-trap-item"><div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-8">
<div class="text-5xl sm:text-6xl font-bold text-gray-200 leading-none select-none shrink-0" style="font-family:Georgia,serif">05</div>
<div class="flex-1 min-w-0">
<h3 class="text-base font-semibold text-gray-900 mb-2 mt-0">Inspection (Shaken) & Insurance Misconceptions</h3>
<p class="text-gray-600 leading-relaxed text-sm mb-2"><strong class="text-gray-900">Inspection cycle:</strong> First shaken 3 years after registration, then every 2 years. Used cars come "with" (valid period remaining — a plus) or "without" shaken (you arrange and pay).</p>
<p class="text-gray-600 leading-relaxed text-sm mb-2"><strong class="text-gray-900">Insurance myth:</strong> Many think the mandatory CALI (自賠責保険) is enough. It's not — it <strong style="color:#dc2626">only covers the other party's bodily injury</strong>, not their vehicle, not yours, and caps are low.</p>
<p class="text-gray-600 leading-relaxed text-sm"><strong class="text-gray-900">Buy voluntary insurance (任意保険)</strong> via comparison sites like Kakaku.com — roughly 50,000–70,000 yen/year, usually with unlimited third-party coverage, own-injury, and legal rider. Have it effective on pickup day; apply online after getting the new shaken certificate.</p>
</div>
</div></div>

<div class="jdm-trap-item"><div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-8">
<div class="text-5xl sm:text-6xl font-bold text-gray-200 leading-none select-none shrink-0" style="font-family:Georgia,serif">06</div>
<div class="flex-1 min-w-0">
<h3 class="text-base font-semibold text-gray-900 mb-2 mt-0">Hidden Costs of Financing</h3>
<p class="text-gray-600 leading-relaxed text-sm mb-2">Japanese cars hold value well and aren't cheap; with an interest-bearing loan, <strong style="color:#dc2626">interest costs can exceed buying new outright</strong>. Before financing:</p>
<p class="text-gray-600 leading-relaxed text-sm">Clarify the annual rate (金利); watch for the "low sticker + high-rate loan" combo; compare dealer financing vs. bank loans; confirm the terms aren't bundled with dealer-exclusive insurance or maintenance contracts.</p>
</div>
</div></div>

<div class="jdm-trap-item"><div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start py-8">
<div class="text-5xl sm:text-6xl font-bold text-gray-200 leading-none select-none shrink-0" style="font-family:Georgia,serif">07</div>
<div class="flex-1 min-w-0">
<h3 class="text-base font-semibold text-gray-900 mb-2 mt-0">Choosing Dealers & Channels</h3>

<div class="jdm-model-table"><div class="overflow-x-auto my-3">
<table class="w-full text-sm border-collapse">
<thead><tr class="border-b-2 border-gray-900">
<th class="px-3 py-2 text-left font-mono text-xs tracking-wider uppercase text-gray-400 font-normal">Channel</th>
<th class="px-3 py-2 text-left font-mono text-xs tracking-wider uppercase text-gray-400 font-normal">Pros</th>
<th class="px-3 py-2 text-left font-mono text-xs tracking-wider uppercase text-gray-400 font-normal">Watch out</th>
</tr></thead>
<tbody>
<tr class="border-b border-gray-100"><td class="px-3 py-2.5 font-semibold text-gray-900 whitespace-nowrap">Certified Pre-Owned</td><td class="px-3 py-2.5 text-gray-600">Guaranteed condition, factory warranty</td><td class="px-3 py-2.5 text-gray-600">Higher price</td></tr>
<tr class="border-b border-gray-100"><td class="px-3 py-2.5 font-semibold text-gray-900 whitespace-nowrap">Big chain dealers</td><td class="px-3 py-2.5 text-gray-600">Large inventory, transparent info</td><td class="px-3 py-2.5 text-gray-600">Scrutinize fees</td></tr>
<tr class="border-b border-gray-100"><td class="px-3 py-2.5 font-semibold text-gray-900 whitespace-nowrap">Auction proxy</td><td class="px-3 py-2.5 text-gray-600">Near-wholesale price</td><td class="px-3 py-2.5 text-gray-600">Trust the proxy's expertise</td></tr>
<tr class="border-b border-gray-100"><td class="px-3 py-2.5 font-semibold text-gray-900 whitespace-nowrap">Private sellers</td><td class="px-3 py-2.5 text-gray-600">Potentially cheaper</td><td class="px-3 py-2.5 text-gray-600">No warranty, high risk, not for beginners</td></tr>
</tbody>
</table>
</div></div>
<div style="border-left:3px solid #ef4444;background:#fff8f8;padding:0.75rem 1rem;margin:0.75rem 0;border-radius:0 6px 6px 0">
<p style="margin:0;color:#374151;font-size:0.8125rem;line-height:1.75"><strong style="color:#991f1f">⚠ Cautionary tale:</strong> BIGMOTOR, once Japan's largest used-car chain, was exposed in 2023 for a massive insurance-fraud scandal — employees systematically damaged acquired vehicles to claim inflated repair payouts. Even well-known brands warrant skepticism and cross-shopping.</p>
</div>
</div>
</div></div>

![A certified dealer storefront in Japan — better guarantees but slightly higher prices](https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Toyota_TOYOPET_Japan_Car_dealership_Saitama_1.jpg/960px-Toyota_TOYOPET_Japan_Car_dealership_Saitama_1.jpg)

>>> Pre-Purchase Checklist

Before viewing cars or signing anything, make sure these are in order:

<div class="jdm-checklist" style="margin:1.5rem 0">
<div class="flex items-start gap-3 py-3 border-b border-gray-100">
<div class="w-5 h-5 rounded-full bg-amber-600 flex items-center justify-center flex-shrink-0 mt-0.5"><svg viewBox="0 0 10 10" fill="none" class="w-2.5 h-2.5"><polyline points="2,5 4.5,7.5 8,3" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
<span class="text-gray-600 text-sm leading-relaxed"><strong class="text-gray-900 font-medium">Parking certificate (車庫証明)</strong> — mandatory; a leased space works, but sign the contract in advance</span>
</div>
<div class="flex items-start gap-3 py-3 border-b border-gray-100">
<div class="w-5 h-5 rounded-full bg-amber-600 flex items-center justify-center flex-shrink-0 mt-0.5"><svg viewBox="0 0 10 10" fill="none" class="w-2.5 h-2.5"><polyline points="2,5 4.5,7.5 8,3" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
<span class="text-gray-600 text-sm leading-relaxed"><strong class="text-gray-900 font-medium">Driver's license</strong> — foreigners need a Japanese license or a notarized international translation</span>
</div>
<div class="flex items-start gap-3 py-3 border-b border-gray-100">
<div class="w-5 h-5 rounded-full bg-amber-600 flex items-center justify-center flex-shrink-0 mt-0.5"><svg viewBox="0 0 10 10" fill="none" class="w-2.5 h-2.5"><polyline points="2,5 4.5,7.5 8,3" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
<span class="text-gray-600 text-sm leading-relaxed"><strong class="text-gray-900 font-medium">Personal seal (認印)</strong> — usually required to sign contracts</span>
</div>
<div class="flex items-start gap-3 py-3 border-b border-gray-100">
<div class="w-5 h-5 rounded-full bg-amber-600 flex items-center justify-center flex-shrink-0 mt-0.5"><svg viewBox="0 0 10 10" fill="none" class="w-2.5 h-2.5"><polyline points="2,5 4.5,7.5 8,3" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
<span class="text-gray-600 text-sm leading-relaxed"><strong class="text-gray-900 font-medium">Budget planning</strong> — car price + fees (10–20% of price) + voluntary insurance + first shaken (if needed)</span>
</div>
<div class="flex items-start gap-3 py-3 border-b border-gray-100">
<div class="w-5 h-5 rounded-full bg-amber-600 flex items-center justify-center flex-shrink-0 mt-0.5"><svg viewBox="0 0 10 10" fill="none" class="w-2.5 h-2.5"><polyline points="2,5 4.5,7.5 8,3" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
<span class="text-gray-600 text-sm leading-relaxed"><strong class="text-gray-900 font-medium">Price benchmarking</strong> — check comparable models on Goo-NET / CarSensor to build a reference</span>
</div>
<div class="flex items-start gap-3 py-3">
<div class="w-5 h-5 rounded-full bg-amber-600 flex items-center justify-center flex-shrink-0 mt-0.5"><svg viewBox="0 0 10 10" fill="none" class="w-2.5 h-2.5"><polyline points="2,5 4.5,7.5 8,3" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
<span class="text-gray-600 text-sm leading-relaxed"><strong class="text-gray-900 font-medium">Physical inspection</strong> — test drive, inspect interior/exterior, request the 車両検査証</span>
</div>
</div>

>>> Core Principles

1. **Don't be seduced by the sticker price** — look at the total and demand an all-inclusive quote.
2. **Prioritize cars with no repair history and no flood record** — get a third-party inspection.
3. **Judge mileage alongside model year** — watch for anomalies behind ultra-low mileage.
4. **Don't rely on mandatory insurance alone** — set up voluntary coverage before pickup day.
5. **Loans have a cost** — compare rates everywhere; beware low-price + high-rate bundles.
6. **Shop around** — never sign on the first visit; compare broadly.

<div class="jdm-cta" style="background:#111;margin:2rem -1rem;padding:2.5rem 1.5rem;border-radius:0.75rem">
<p class="font-mono text-xs tracking-widest uppercase text-amber-500 mb-3">Proxy Bidding</p>
<h3 style="font-family:Georgia,serif;font-size:1.5rem;font-weight:400;color:#fff;margin-bottom:0.75rem;line-height:1.3">Worried about pitfalls?<br>Let our experts vet your car</h3>
<p style="font-size:0.875rem;color:rgba(255,255,255,0.5);max-width:480px;margin-bottom:1.5rem;line-height:1.75">We've worked Japan's used car market for years — fluent in auction grading, repair-history detection, and physical inspection. We can bid on your behalf at USS, TAA, and HAA auctions with transparent pricing and safe export to your location.</p>
<a href="/en/contact" style="display:inline-block;background:#d97706;color:#fff;font-size:0.8125rem;font-weight:500;letter-spacing:0.06em;padding:0.75rem 1.75rem;text-decoration:none;border-radius:0.25rem">Contact Proxy Bidding Service</a>
<p style="margin-top:0.75rem;font-size:0.75rem;color:rgba(255,255,255,0.3);font-family:monospace;letter-spacing:0.04em">Usually responds within 24 hours · English & Japanese available</p>
</div>`,
      ja: `日本は世界でも最も成熟した中古車取引システムを持っています。日本の消費者は車のメンテナンスを重んじ、定期的に点検・整備を行います。良好な道路事情と発達した公共交通機関も相まって、多くの自家用車は使用頻度が低く、車況が非常に良好に保たれています。また、厳格な中古車評価制度により市場の透明性が高く、メーター戻しや修理歴の隠蔽は比較的稀です。

しかし、購入にリスクが全くないわけではありません。業界のルールを理解していなければ、一般のバイヤーでも低価格の罠から隠れ費用まで「泣き寝入り」しかねません。本ガイドが一つひとつの罠を見抜くお手伝いをします。

<div class="jdm-callout" style="border-left:3px solid #d97706;background:#fffbeb;padding:1rem 1.25rem;margin:1.5rem 0;border-radius:0 6px 6px 0">
<p style="margin:0;color:#374151;font-size:0.9375rem;line-height:1.75"><strong style="color:#111">対象読者：</strong>日本に住む外国人、留学生、赴任したばかりの社会人、日本中古車市場から購入を検討するすべての方。Goo-NETやCarSensorでのオンライン選びでも、実店舗での見学でも、以下の内容はそのまま通用します。</p>
</div>

![日本中古車市場で圧倒的な流通量を誇る人気車種、トヨタ・プリウス](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/2015-2018_Toyota_Prius_S.jpg/960px-2015-2018_Toyota_Prius_S.jpg)

>>> オークション評価を理解する

日本の車両オークション会場には、車両の総合状態に基づき **RA、R、1〜6級、S級**など13段階の特別な評価システムがあり、低品質な車両を弾くのに役立ちます。この評価を理解することが、事故車を避け良質な中古車を買うための第一歩です。

<div class="jdm-model-table"><div class="overflow-x-auto my-6">
<table class="w-full text-sm border-collapse">
<thead><tr class="border-b-2 border-gray-900">
<th class="px-3 py-2.5 text-left font-mono text-xs tracking-wider uppercase text-gray-400 font-normal">評価</th>
<th class="px-3 py-2.5 text-left font-mono text-xs tracking-wider uppercase text-gray-400 font-normal">走行距離目安</th>
<th class="px-3 py-2.5 text-left font-mono text-xs tracking-wider uppercase text-gray-400 font-normal">車況</th>
</tr></thead>
<tbody>
<tr class="border-b border-gray-100"><td class="px-3 py-3 font-semibold text-gray-900 whitespace-nowrap"><span class="inline-block text-xs px-2 py-0.5 rounded bg-green-100 text-green-700 font-medium mr-1">S</span></td><td class="px-3 py-3 text-gray-600">1年未満</td><td class="px-3 py-3 text-gray-600">ほぼ新車同様</td></tr>
<tr class="border-b border-gray-100"><td class="px-3 py-3 font-semibold text-gray-900 whitespace-nowrap"><span class="inline-block text-xs px-2 py-0.5 rounded bg-green-100 text-green-700 font-medium mr-1">6</span></td><td class="px-3 py-3 text-gray-600">3万km未満</td><td class="px-3 py-3 text-gray-600">ほとんど使用なし、ほぼ完璧</td></tr>
<tr class="border-b border-gray-100"><td class="px-3 py-3 font-semibold text-gray-900 whitespace-nowrap"><span class="inline-block text-xs px-2 py-0.5 rounded bg-green-100 text-green-700 font-medium mr-1">5</span></td><td class="px-3 py-3 text-gray-600">6万km未満</td><td class="px-3 py-3 text-gray-600">整備良好、極めて良好</td></tr>
<tr class="border-b border-gray-100"><td class="px-3 py-3 font-semibold text-gray-900 whitespace-nowrap"><span class="inline-block text-xs px-2 py-0.5 rounded bg-amber-100 text-amber-700 font-medium mr-1">4.5</span></td><td class="px-3 py-3 text-gray-600">10万km未満</td><td class="px-3 py-3 text-gray-600">軽微な磨耗、修理不要の場合も</td></tr>
<tr class="border-b border-gray-100"><td class="px-3 py-3 font-semibold text-gray-900 whitespace-nowrap"><span class="inline-block text-xs px-2 py-0.5 rounded bg-amber-100 text-amber-700 font-medium mr-1">4</span></td><td class="px-3 py-3 text-gray-600">15万km未満</td><td class="px-3 py-3 text-gray-600">軽微な磨耗、小修理が必要</td></tr>
<tr class="border-b border-gray-100"><td class="px-3 py-3 font-semibold text-gray-900 whitespace-nowrap"><span class="inline-block text-xs px-2 py-0.5 rounded bg-red-100 text-red-700 font-medium mr-1">R</span></td><td class="px-3 py-3 text-gray-600">—</td><td class="px-3 py-3 text-gray-600">修復歴あり（事故修復記録）</td></tr>
<tr class="border-b border-gray-100"><td class="px-3 py-3 font-semibold text-gray-900 whitespace-nowrap"><span class="inline-block text-xs px-2 py-0.5 rounded bg-red-100 text-red-700 font-medium mr-1">RA</span></td><td class="px-3 py-3 text-gray-600">—</td><td class="px-3 py-3 text-gray-600">修復歴あり、内外の損傷が大きい</td></tr>
</tbody>
</table>
</div></div>

<div class="jdm-callout" style="border-left:3px solid #16a34a;background:#f0fdf4;padding:1rem 1.25rem;margin:1.5rem 0;border-radius:0 6px 6px 0">
<p style="margin:0;color:#374151;font-size:0.9375rem;line-height:1.75"><strong style="color:#111">✅ 評価の目安：</strong>一般のバイヤーは4級以上（緑）を優先検討しましょう。R/RA級（赤）は事故修復車です。経験豊富な方や専門の第三者点検を通す場合を除き、初心者は避けるのが無難です。</p>
</div>

>>> よくある7つの落とし穴

<div class="jdm-trap-item"><div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-8">
<div class="text-5xl sm:text-6xl font-bold text-gray-200 leading-none select-none shrink-0" style="font-family:Georgia,serif">01</div>
<div class="flex-1 min-w-0">
<h3 class="text-base font-semibold text-gray-900 mb-2 mt-0">低価格の餌 + 諸費用の罠</h3>
<p class="text-gray-600 leading-relaxed text-sm mb-2"><strong class="text-gray-900">典型手口：</strong>ネットで「30万円」の激安車を見つけて来店すると、コーティング費・清掃費・手数料・代行費……さまざまな「必須項目」が積み重なり、総額は80万円以上に跳ね上がります。提携ローンを組む条件で「この価格」と粘る店もあります。</p>
<p class="text-gray-600 leading-relaxed text-sm"><strong class="text-gray-900">回避策：</strong>すべての費用を含む総額見積書（車両本体価格・自動車税・重量税・自賠責保険・登録手数料・車庫証明代行費など）の提出を求めましょう。「コーティング」「清掃」「強制オプション」など価格表示のない追加項目に警戒し、初回訪問での契約は絶対に避け、3社以上比較しましょう。</p>
</div>
</div></div>

<div class="jdm-trap-item"><div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-8">
<div class="text-5xl sm:text-6xl font-bold text-gray-200 leading-none select-none shrink-0" style="font-family:Georgia,serif">02</div>
<div class="flex-1 min-w-0">
<h3 class="text-base font-semibold text-gray-900 mb-2 mt-0">修復歴（事故車）の見極め</h3>
<p class="text-gray-600 leading-relaxed text-sm mb-2"><strong class="text-gray-900">修復歴車とは：</strong>車の骨格部分（フレーム）が損傷し修復された車両です。価格は低めですが、損傷が足回りやフレームに及んでいる場合、走行の安全性に影響する可能性があります。</p>
<p class="text-gray-600 leading-relaxed text-sm mb-3"><strong class="text-gray-900">見極め方：</strong>① 車両情報欄に「修復歴なし」の明記があるか確認；② 実車確認ではボンネット周辺のネジ痕・ドア隙間の均一さ・ボディ塗装の色味の一致を重点確認；③ 第三者機関（JAAI等）に独立評価を依頼。</p>
<div style="border-left:3px solid #ef4444;background:#fff8f8;padding:0.75rem 1rem;margin:0.75rem 0;border-radius:0 6px 6px 0">
<p style="margin:0;color:#374151;font-size:0.8125rem;line-height:1.75"><strong style="color:#991f1f">⚠ 注意：</strong>水没車の損傷は「修復歴」に含まれず、別途確認が必要です（落とし穴04を参照）。</p>
</div>
</div>
</div></div>

![購入前には必ず専門の整備士にエンジンルームを点検し、整備記録を確認しましょう](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Mechanic_works_on_car_engine_performing_routine_maintenance_and_inspections_on_vehicle_parts.jpg/960px-Mechanic_works_on_car_engine_performing_routine_maintenance_and_inspections_on_vehicle_parts.jpg)

<div class="jdm-trap-item"><div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-8">
<div class="text-5xl sm:text-6xl font-bold text-gray-200 leading-none select-none shrink-0" style="font-family:Georgia,serif">03</div>
<div class="flex-1 min-w-0">
<h3 class="text-base font-semibold text-gray-900 mb-2 mt-0">走行距離の不正と過走行車</h3>
<p class="text-gray-600 leading-relaxed text-sm mb-2"><strong class="text-gray-900">参考基準：</strong>日本では年間8,000〜10,000kmが正常範囲とされます。年間1万km超は「過走行車」とされ、部品の消耗が早まります。</p>
<p class="text-gray-600 leading-relaxed text-sm mb-2"><strong class="text-gray-900">注意点：</strong>年式と走行距離を併せて判断しましょう——10年式で5万km（年5,000km）は過走行ではありませんが、5年式で10万kmは要注意。極端に走行距離が低くても問題なしとは限らず、長期間動かさない車はベルト劣化やシール硬化を起こします。</p>
<p class="text-gray-600 leading-relaxed text-sm"><strong class="text-gray-900">タイミングベルトは約10万km、エンジンは約15万kmが寿命</strong>とされ、交換済みか購入時に確認が必要です。日本では車歴情報照会サービスもあり、車検記録の歴史走行距離を照合して矛盾がないか確認できます。</p>
</div>
</div></div>

<div class="jdm-trap-item"><div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-8">
<div class="text-5xl sm:text-6xl font-bold text-gray-200 leading-none select-none shrink-0" style="font-family:Georgia,serif">04</div>
<div class="flex-1 min-w-0">
<h3 class="text-base font-semibold text-gray-900 mb-2 mt-0">冠水車・塩害車・雹害車</h3>
<p class="text-gray-600 leading-relaxed text-sm mb-2">この3種は「修復歴車」には含まれませんが、いずれも隠れたリスクがあり要注意です：</p>
<div class="grid grid-cols-1 sm:grid-cols-3 gap-3 my-3">
<div class="bg-gray-50 border border-gray-100 rounded-lg p-4">
<h4 class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-2">冠水車（水没車）</h4>
<p class="text-xs text-gray-600 leading-relaxed">長時間浸水するとエンジンや電装系が劣化しやすい。確認：ボンネット内・フロアマット・トランクに水濡れ・カビ臭・腐食がないか。</p>
</div>
<div class="bg-gray-50 border border-gray-100 rounded-lg p-4">
<h4 class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-2">塩害車</h4>
<p class="text-xs text-gray-600 leading-relaxed">沿岸部走行車は塩分侵食で足回りやフレームが錆びやすい。確認：床下・マフラー周辺・ドア下部内側に広範な錆がないか。</p>
</div>
<div class="bg-gray-50 border border-gray-100 rounded-lg p-4">
<h4 class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-2">雹害車（ひょう害車）</h4>
<p class="text-xs text-gray-600 leading-relaxed">雹で凹み、通常安価販売。走行性能への影響は軽微だが修理費用がかさむ場合も。一部は修復歴に分類されます。</p>
</div>
</div>
</div>
</div></div>

<div class="jdm-trap-item"><div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-8">
<div class="text-5xl sm:text-6xl font-bold text-gray-200 leading-none select-none shrink-0" style="font-family:Georgia,serif">05</div>
<div class="flex-1 min-w-0">
<h3 class="text-base font-semibold text-gray-900 mb-2 mt-0">車検と保険の誤解</h3>
<p class="text-gray-600 leading-relaxed text-sm mb-2"><strong class="text-gray-900">車検周期：</strong>日本の自家用車は新車登録後初回3年、以降2年ごと。中古車は「車検あり」（有効期間内は再検不要、プラス要因）と「車検なし」（手配と費用・時間の計画が必要）があります。</p>
<p class="text-gray-600 leading-relaxed text-sm mb-2"><strong class="text-gray-900">保険の誤解：</strong>付帯する「自賠責保険」で十分と思われがちですが、実は不足です。自賠責は<strong style="color:#dc2626">相手の人身傷害のみ</strong>を補償し、相手の車両損害も自分の損害も補償せず、支払上限もあります。</p>
<p class="text-gray-600 leading-relaxed text-sm"><strong class="text-gray-900">任意保険（商業保険）</strong>の併用を強く推奨します。価格.com等で比較し、初年度5万〜7万円程度で、相手無制限補償・自己人身補償・弁護士特約等を含む内容が一般的です。引き渡し当日から保険を有効にし、名義変更後・新車検証受領後に网上で事前申し込み・開始日を設定しましょう。</p>
</div>
</div></div>

<div class="jdm-trap-item"><div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-8">
<div class="text-5xl sm:text-6xl font-bold text-gray-200 leading-none select-none shrink-0" style="font-family:Georgia,serif">06</div>
<div class="flex-1 min-w-0">
<h3 class="text-base font-semibold text-gray-900 mb-2 mt-0">ローン購入の隠れたコスト</h3>
<p class="text-gray-600 leading-relaxed text-sm mb-2">日本中古車は保值率が高く価格も安くはないため、金利付きローンを選ぶと<strong style="color:#dc2626">利息コストが新車直接購入を上回る</strong>こともあります。ローン決定前に：</p>
<p class="text-gray-600 leading-relaxed text-sm">年利（金利）を明確にし、店舗の「低価格＋高金利ローン」の手口に注意。店舗ローンと銀行ローンの総コストを比較。条件に店舗独占の保険や整備契約が紐づいていないか確認。</p>
</div>
</div></div>

<div class="jdm-trap-item"><div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start py-8">
<div class="text-5xl sm:text-6xl font-bold text-gray-200 leading-none select-none shrink-0" style="font-family:Georgia,serif">07</div>
<div class="flex-1 min-w-0">
<h3 class="text-base font-semibold text-gray-900 mb-2 mt-0">販売店と購入ルートの選択</h3>

<div class="jdm-model-table"><div class="overflow-x-auto my-3">
<table class="w-full text-sm border-collapse">
<thead><tr class="border-b-2 border-gray-900">
<th class="px-3 py-2 text-left font-mono text-xs tracking-wider uppercase text-gray-400 font-normal">ルート</th>
<th class="px-3 py-2 text-left font-mono text-xs tracking-wider uppercase text-gray-400 font-normal">メリット</th>
<th class="px-3 py-2 text-left font-mono text-xs tracking-wider uppercase text-gray-400 font-normal">注意点</th>
</tr></thead>
<tbody>
<tr class="border-b border-gray-100"><td class="px-3 py-2.5 font-semibold text-gray-900 whitespace-nowrap">メーカー認定中古車</td><td class="px-3 py-2.5 text-gray-600">車況保証、純正保証付</td><td class="px-3 py-2.5 text-gray-600">価格が高め</td></tr>
<tr class="border-b border-gray-100"><td class="px-3 py-2.5 font-semibold text-gray-900 whitespace-nowrap">大型チェーン店</td><td class="px-3 py-2.5 text-gray-600">在庫豊富、情報透明</td><td class="px-3 py-2.5 text-gray-600">諸費用を精査</td></tr>
<tr class="border-b border-gray-100"><td class="px-3 py-2.5 font-semibold text-gray-900 whitespace-nowrap">オークション代行</td><td class="px-3 py-2.5 text-gray-600">卸値に近い価格</td><td class="px-3 py-2.5 text-gray-600">代行店の専門性に依存</td></tr>
<tr class="border-b border-gray-100"><td class="px-3 py-2.5 font-semibold text-gray-900 whitespace-nowrap">個人売買</td><td class="px-3 py-2.5 text-gray-600">より安価な可能性</td><td class="px-3 py-2.5 text-gray-600">保証なし、リスク高、初心者非推奨</td></tr>
</tbody>
</table>
</div></div>
<div style="border-left:3px solid #ef4444;background:#fff8f8;padding:0.75rem 1rem;margin:0.75rem 0;border-radius:0 6px 6px 0">
<p style="margin:0;color:#374151;font-size:0.8125rem;line-height:1.75"><strong style="color:#991f1f">⚠ 警戒すべき事例：</strong>日本最大級の中古車チェーン BIGMOTOR は2023年に大規模な保険金不正請求スキャンダルが発覚——従業員が仕入車両を計画的に破損し保険会社に高額修理費を請求していました。有名チェーンであっても慎重に、複数比較しましょう。</p>
</div>
</div>
</div></div>

![日本の正規認定中古車ディーラー店舗——保証があるが価格はやや高め](https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Toyota_TOYOPET_Japan_Car_dealership_Saitama_1.jpg/960px-Toyota_TOYOPET_Japan_Car_dealership_Saitama_1.jpg)

>>> 購入前の必須チェックリスト

本格的に見学・契約する前に、以下が整っているか確認しましょう：

<div class="jdm-checklist" style="margin:1.5rem 0">
<div class="flex items-start gap-3 py-3 border-b border-gray-100">
<div class="w-5 h-5 rounded-full bg-amber-600 flex items-center justify-center flex-shrink-0 mt-0.5"><svg viewBox="0 0 10 10" fill="none" class="w-2.5 h-2.5"><polyline points="2,5 4.5,7.5 8,3" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
<span class="text-gray-600 text-sm leading-relaxed"><strong class="text-gray-900 font-medium">車庫証明</strong>——購入時に駐車場証明の提出が必須。賃貸も可、事前に駐車場契約が必要</span>
</div>
<div class="flex items-start gap-3 py-3 border-b border-gray-100">
<div class="w-5 h-5 rounded-full bg-amber-600 flex items-center justify-center flex-shrink-0 mt-0.5"><svg viewBox="0 0 10 10" fill="none" class="w-2.5 h-2.5"><polyline points="2,5 4.5,7.5 8,3" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
<span class="text-gray-600 text-sm leading-relaxed"><strong class="text-gray-900 font-medium">運転免許証</strong>——在留外国人は日本免許または公証済み国際免許翻訳文が必要</span>
</div>
<div class="flex items-start gap-3 py-3 border-b border-gray-100">
<div class="w-5 h-5 rounded-full bg-amber-600 flex items-center justify-center flex-shrink-0 mt-0.5"><svg viewBox="0 0 10 10" fill="none" class="w-2.5 h-2.5"><polyline points="2,5 4.5,7.5 8,3" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
<span class="text-gray-600 text-sm leading-relaxed"><strong class="text-gray-900 font-medium">認印</strong>——契約時に通常必要</span>
</div>
<div class="flex items-start gap-3 py-3 border-b border-gray-100">
<div class="w-5 h-5 rounded-full bg-amber-600 flex items-center justify-center flex-shrink-0 mt-0.5"><svg viewBox="0 0 10 10" fill="none" class="w-2.5 h-2.5"><polyline points="2,5 4.5,7.5 8,3" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
<span class="text-gray-600 text-sm leading-relaxed"><strong class="text-gray-900 font-medium">初期予算計画</strong>——車両本体価格＋諸費用（通常車価の10〜20%）＋任意保険＋初回車検費（必要時）</span>
</div>
<div class="flex items-start gap-3 py-3 border-b border-gray-100">
<div class="w-5 h-5 rounded-full bg-amber-600 flex items-center justify-center flex-shrink-0 mt-0.5"><svg viewBox="0 0 10 10" fill="none" class="w-2.5 h-2.5"><polyline points="2,5 4.5,7.5 8,3" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
<span class="text-gray-600 text-sm leading-relaxed"><strong class="text-gray-900 font-medium">価格比較</strong>——Goo-NET・CarSensor等で同モデルの相場を確認、基準を把握</span>
</div>
<div class="flex items-start gap-3 py-3">
<div class="w-5 h-5 rounded-full bg-amber-600 flex items-center justify-center flex-shrink-0 mt-0.5"><svg viewBox="0 0 10 10" fill="none" class="w-2.5 h-2.5"><polyline points="2,5 4.5,7.5 8,3" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
<span class="text-gray-600 text-sm leading-relaxed"><strong class="text-gray-900 font-medium">実車点検</strong>——試乗、内外装確認、車両検査証の請求</span>
</div>
</div>

>>> まとめ：購入の核心原則

1. **価格ラベルに惑わされない**——総額を見て、すべての費用を含む見積書を請求する。
2. **修復歴なし・冠水記録なしを優先**——第三者点検報告書を入手する。
3. **走行距離は年式と併せて判断**——極端な低走行の裏にある異常に留意する。
4. **強制保険のみに頼らない**——引き渡し日前に任意保険を手配する。
5. **ローンにはコストがある**——複数の金利を比較、低価格＋高金利の抱き合わせに警戒する。
6. **比較 shopping**——初回来店での契約は避け、多くを見て比較する。

<div class="jdm-cta" style="background:#111;margin:2rem -1rem;padding:2.5rem 1.5rem;border-radius:0.75rem">
<p class="font-mono text-xs tracking-widest uppercase text-amber-500 mb-3">代行入札サービス</p>
<h3 style="font-family:Georgia,serif;font-size:1.5rem;font-weight:400;color:#fff;margin-bottom:0.75rem;line-height:1.3">落とし穴が心配？<br>プロの代行に任せましょう</h3>
<p style="font-size:0.875rem;color:rgba(255,255,255,0.5);max-width:480px;margin-bottom:1.5rem;line-height:1.75">日本中古車市場に長年深耕し、オークション評価・修復歴甄別・実車点検の全プロセスに精通しています。USS・TAA・HAA等のオークション会場で代行入札、完全透明な価格提示、お住まいの地域への安全な輸出まで。</p>
<a href="/ja/contact" style="display:inline-block;background:#d97706;color:#fff;font-size:0.8125rem;font-weight:500;letter-spacing:0.06em;padding:0.75rem 1.75rem;text-decoration:none;border-radius:0.25rem">代行入札サービスに相談する</a>
<p style="margin-top:0.75rem;font-size:0.75rem;color:rgba(255,255,255,0.3);font-family:monospace;letter-spacing:0.04em">通常24時間以内に返信 · 日本語・英語対応可能</p>
</div>`,
    },
  },
  {
    slug: "ferrari-used-car-buying-guide-2026",
    title: {
      zh: "2026年买法拉利中古车完整指南：价格、车款、陷阱一次搞懂",
      en: "Complete Ferrari Used Car Buying Guide 2026: Prices, Models & Pitfalls",
      ja: "2026年フェラーリ中古車完全購入ガイド：価格・モデル・注意点を徹底解説",
    },
    excerpt: {
      zh: "从入门款 Portofino 到旗舰 SF90，带你用最聪明的方式买到心目中那匹跃马。价格行情、热门车款分析、5大购车陷阱，一次搞懂。",
      en: "From the entry-level Portofino to the flagship SF90, your smart guide to buying a used Ferrari in Japan. Prices, model analysis, 5 common pitfalls, and proxy bidding service.",
      ja: "エントリーモデルのPortofinoからフラッグシップSF90まで、日本でフェラーリ中古車を賢く購入するための完全ガイド。価格相場、人気モデル分析、5つの注意点、代行入札サービスまで。",
    },
    category: { zh: "购车指南", en: "Guide", ja: "購入ガイド" },
    date: "2026-06-12",
    readTime: { zh: "8分钟阅读", en: "8 min read", ja: "8分で読める" },
    color: "bg-red-600",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Red_2019_Ferrari_SF90_Stradale_%2848264238897%29_%28cropped%29.jpg/1280px-Red_2019_Ferrari_SF90_Stradale_%2848264238897%29_%28cropped%29.jpg",
    content: {
      zh: `为什么现在是入手法拉利中古车的好时机？法拉利官方订单已排至2027年底，新车根本抢不到。与此同时，法拉利正式踏入电动化时代——首款纯电量产车型 Luce 于2026年5月正式发布，搭载四电机、最大马力超过1,000匹。

这对中古市场意味着什么？经典汽油款的稀缺性正在上升。许多买家开始提前布局，将V8、V12汽油版法拉利视为可驾驶的投资品。现在入场，等于卡在最好的时间点——既能享受驾驶乐趣，又不错过保值机会。

<div class="jdm-callout" style="border-left:3px solid #dc2626;background:#fef2f2;padding:1rem 1.25rem;margin:1.5rem 0;border-radius:0 6px 6px 0">
<p style="margin:0;color:#374151;font-size:0.9375rem;line-height:1.75"><strong style="color:#111">编辑观点：</strong>电动化转型往往让旧款燃油车保值力增强。参考保时捷911 GT3 RS的历史，这个规律在法拉利身上会更明显——因为产量本就极少，每一台汽油版都是有限资源。</p>
</div>

>>> 日本市场行情

以下数据来自日本主要中古车平台（カーセンサー、グーネット、価格.com）的实时统计，单位为日元。实际成交价因里程、车况、选配差异相当大，仅供参考。

<div class="jdm-price-grid"><div class="grid grid-cols-2 sm:grid-cols-3 gap-px bg-gray-200 border border-gray-200 rounded-lg overflow-hidden my-6">
<div class="bg-white p-5 hover:bg-gray-50 transition-colors">
<p class="font-mono text-xs tracking-wider text-gray-400 mb-1">California T / Portofino</p>
<p class="text-lg font-semibold text-gray-900 leading-tight mb-1">1,358<span class="text-red-600">～</span>2,980 <small class="text-xs font-light text-gray-500">万円</small></p>
<p class="text-xs text-gray-400">入门敞篷GT · 最易驾驭</p>
</div>
<div class="bg-white p-5 hover:bg-gray-50 transition-colors">
<p class="font-mono text-xs tracking-wider text-gray-400 mb-1">Roma / Roma Spider</p>
<p class="text-lg font-semibold text-gray-900 leading-tight mb-1">2,358<span class="text-red-600">～</span>4,550 <small class="text-xs font-light text-gray-500">万円</small></p>
<p class="text-xs text-gray-400">最热门款 · 库存量最大</p>
</div>
<div class="bg-white p-5 hover:bg-gray-50 transition-colors">
<p class="font-mono text-xs tracking-wider text-gray-400 mb-1">488 GTB / Spider</p>
<p class="text-lg font-semibold text-gray-900 leading-tight mb-1">2,168<span class="text-red-600">～</span>3,980 <small class="text-xs font-light text-gray-500">万円</small></p>
<p class="text-xs text-gray-400">经典V8 · 高性价比首选</p>
</div>
<div class="bg-white p-5 hover:bg-gray-50 transition-colors">
<p class="font-mono text-xs tracking-wider text-gray-400 mb-1">296 GTB / GTS</p>
<p class="text-lg font-semibold text-gray-900 leading-tight mb-1">2,930<span class="text-red-600">～</span>6,200 <small class="text-xs font-light text-gray-500">万円</small></p>
<p class="text-xs text-gray-400">V6混动 · 最新世代技术</p>
</div>
<div class="bg-white p-5 hover:bg-gray-50 transition-colors">
<p class="font-mono text-xs tracking-wider text-gray-400 mb-1">F8 Spider / Tributo</p>
<p class="text-lg font-semibold text-gray-900 leading-tight mb-1">3,500<span class="text-red-600">～</span>5,930 <small class="text-xs font-light text-gray-500">万円</small></p>
<p class="text-xs text-gray-400">488的后继款 · 性能更强</p>
</div>
<div class="bg-white p-5 hover:bg-gray-50 transition-colors">
<p class="font-mono text-xs tracking-wider text-gray-400 mb-1">SF90 Stradale</p>
<p class="text-lg font-semibold text-gray-900 leading-tight mb-1">4,180<span class="text-red-600">～</span>23,310 <small class="text-xs font-light text-gray-500">万円</small></p>
<p class="text-xs text-gray-400">旗舰插混 · 极度稀缺</p>
</div>
</div></div>

>>> 车款分析

根据保值性、日常可用性与中古市场流动性三个维度，以下是目前日本市场最具入手价值的法拉利车款。

<div class="jdm-model-table"><div class="overflow-x-auto my-6">
<table class="w-full text-sm border-collapse">
<thead><tr class="border-b-2 border-gray-900">
<th class="px-3 py-2.5 text-left font-mono text-xs tracking-wider uppercase text-gray-400 font-normal">车款</th>
<th class="px-3 py-2.5 text-left font-mono text-xs tracking-wider uppercase text-gray-400 font-normal">推荐理由</th>
<th class="px-3 py-2.5 text-left font-mono text-xs tracking-wider uppercase text-gray-400 font-normal">保值性</th>
<th class="px-3 py-2.5 text-left font-mono text-xs tracking-wider uppercase text-gray-400 font-normal">日常驾驭</th>
</tr></thead>
<tbody>
<tr class="border-b border-gray-100">
<td class="px-3 py-3 font-semibold text-gray-900 whitespace-nowrap">Ferrari Roma</td>
<td class="px-3 py-3 text-gray-600">设计最现代、库存充足、2+2座配置更实用</td>
<td class="px-3 py-3"><span class="inline-block text-xs px-2 py-0.5 rounded bg-green-100 text-green-700 font-medium">优</span></td>
<td class="px-3 py-3"><span class="inline-block text-xs px-2 py-0.5 rounded bg-green-100 text-green-700 font-medium">易</span></td>
</tr>
<tr class="border-b border-gray-100">
<td class="px-3 py-3 font-semibold text-gray-900 whitespace-nowrap">488 GTB / Spider</td>
<td class="px-3 py-3 text-gray-600">V8涡轮经典款，价格已趋稳，性价比最高</td>
<td class="px-3 py-3"><span class="inline-block text-xs px-2 py-0.5 rounded bg-amber-100 text-amber-700 font-medium">中</span></td>
<td class="px-3 py-3"><span class="inline-block text-xs px-2 py-0.5 rounded bg-amber-100 text-amber-700 font-medium">中</span></td>
</tr>
<tr class="border-b border-gray-100">
<td class="px-3 py-3 font-semibold text-gray-900 whitespace-nowrap">296 GTS</td>
<td class="px-3 py-3 text-gray-600">最新引擎技术，V6混动增值潜力大</td>
<td class="px-3 py-3"><span class="inline-block text-xs px-2 py-0.5 rounded bg-green-100 text-green-700 font-medium">优</span></td>
<td class="px-3 py-3"><span class="inline-block text-xs px-2 py-0.5 rounded bg-green-100 text-green-700 font-medium">易</span></td>
</tr>
<tr class="border-b border-gray-100">
<td class="px-3 py-3 font-semibold text-gray-900 whitespace-nowrap">Portofino M</td>
<td class="px-3 py-3 text-gray-600">敞篷GT首选，预算有限的最佳起点</td>
<td class="px-3 py-3"><span class="inline-block text-xs px-2 py-0.5 rounded bg-amber-100 text-amber-700 font-medium">中</span></td>
<td class="px-3 py-3"><span class="inline-block text-xs px-2 py-0.5 rounded bg-green-100 text-green-700 font-medium">易</span></td>
</tr>
<tr class="border-b border-gray-100">
<td class="px-3 py-3 font-semibold text-gray-900 whitespace-nowrap">SF90 Stradale</td>
<td class="px-3 py-3 text-gray-600">旗舰收藏，限量性带来极高溢价空间</td>
<td class="px-3 py-3"><span class="inline-block text-xs px-2 py-0.5 rounded bg-green-100 text-green-700 font-medium">优</span></td>
<td class="px-3 py-3"><span class="inline-block text-xs px-2 py-0.5 rounded bg-red-100 text-red-700 font-medium">难</span></td>
</tr>
</tbody>
</table>
</div></div>

>>> 购车陷阱

<div class="jdm-trap-item"><div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-8">
<div class="text-5xl sm:text-6xl font-bold text-gray-200 leading-none select-none shrink-0" style="font-family:Georgia,serif">01</div>
<div class="flex-1 min-w-0">
<h3 class="text-base font-semibold text-gray-900 mb-2 mt-0">忽略选配记录</h3>
<p class="text-gray-600 leading-relaxed text-sm">法拉利的选配金额动辄数百万日元，直接影响车辆的市场转售价值。购车前务必索取原始发票或出厂配置表（Carpass），逐项核对选配内容，缺少记录的车辆应要求大幅议价。</p>
</div>
</div></div>

<div class="jdm-trap-item"><div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-8">
<div class="text-5xl sm:text-6xl font-bold text-gray-200 leading-none select-none shrink-0" style="font-family:Georgia,serif">02</div>
<div class="flex-1 min-w-0">
<h3 class="text-base font-semibold text-gray-900 mb-2 mt-0">只看里程，不看保养历史</h3>
<p class="text-gray-600 leading-relaxed text-sm mb-3">低里程未必等于好车况。法拉利的液压系统、双离合变速箱若长期闲置，反而容易产生密封件老化等问题。请务必要求完整的保养纪录，优先选择由原厂认证工场维护的车辆。</p>
<div style="border-left:3px solid #ef4444;background:#fff8f8;padding:0.75rem 1rem;margin:0.75rem 0;border-radius:0 6px 6px 0">
<p style="margin:0;color:#374151;font-size:0.8125rem;line-height:1.75"><strong style="color:#991f1f">⚠ 红旗信号：</strong>无保养记录、曾在非原厂工场维修、更换过发动机或变速箱——三者任一出现，都应谨慎看待，或以此为筹码大幅压低出价。</p>
</div>
</div>
</div></div>

<div class="jdm-trap-item"><div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-8">
<div class="text-5xl sm:text-6xl font-bold text-gray-200 leading-none select-none shrink-0" style="font-family:Georgia,serif">03</div>
<div class="flex-1 min-w-0">
<h3 class="text-base font-semibold text-gray-900 mb-2 mt-0">不了解 Ferrari Approved 认证差异</h3>
<p class="text-gray-600 leading-relaxed text-sm">Ferrari Approved认证中古车须通过原厂190项严苛检查，提供至少12个月原厂保固与24小时道路救援。价格虽比一般中古车高出约10～15%，但对首次购入法拉利的买家而言，这笔溢价往往物有所值。</p>
</div>
</div></div>

<div class="jdm-trap-item"><div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-8">
<div class="text-5xl sm:text-6xl font-bold text-gray-200 leading-none select-none shrink-0" style="font-family:Georgia,serif">04</div>
<div class="flex-1 min-w-0">
<h3 class="text-base font-semibold text-gray-900 mb-2 mt-0">未确认左右驾及进口规格</h3>
<p class="text-gray-600 leading-relaxed text-sm">日本市场同时流通左驾（欧规）与右驾车辆。左驾车售价通常偏低，但停车场、高速收费站使用不便，且在日本市场转售时流通性较差，出口至其他地区前也需确认当地法规。</p>
</div>
</div></div>

<div class="jdm-trap-item"><div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start py-8">
<div class="text-5xl sm:text-6xl font-bold text-gray-200 leading-none select-none shrink-0" style="font-family:Georgia,serif">05</div>
<div class="flex-1 min-w-0">
<h3 class="text-base font-semibold text-gray-900 mb-2 mt-0">低估持有成本</h3>
<p class="text-gray-600 leading-relaxed text-sm">法拉利的年度持有费用（保险、原厂保养、车辆重量税、轮胎等）通常落在100～200万日元之间，视车款与保险条件而定。购车预算之外，请务必预留充足的持有费用，避免买得到、养不起的窘况。</p>
</div>
</div></div>

>>> 为什么选择日本

日本是全亚洲法拉利保有量最高的市场之一，拥有成熟完整的超跑生态系——从原厂维修体系到中古流通机制，都远优于其他亚洲市场。

<div class="jdm-checklist" style="margin:1.5rem 0">
<div class="flex items-start gap-3 py-3 border-b border-gray-100">
<div class="w-5 h-5 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 mt-0.5"><svg viewBox="0 0 10 10" fill="none" class="w-2.5 h-2.5"><polyline points="2,5 4.5,7.5 8,3" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
<span class="text-gray-600 text-sm leading-relaxed"><strong class="text-gray-900 font-medium">库存量大</strong>——目前日本中古市场流通约935台法拉利，选择远超其他亚洲市场</span>
</div>
<div class="flex items-start gap-3 py-3 border-b border-gray-100">
<div class="w-5 h-5 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 mt-0.5"><svg viewBox="0 0 10 10" fill="none" class="w-2.5 h-2.5"><polyline points="2,5 4.5,7.5 8,3" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
<span class="text-gray-600 text-sm leading-relaxed"><strong class="text-gray-900 font-medium">车况透明</strong>——日本用车习惯佳，里程造假极为少见，保养记录完整可查</span>
</div>
<div class="flex items-start gap-3 py-3 border-b border-gray-100">
<div class="w-5 h-5 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 mt-0.5"><svg viewBox="0 0 10 10" fill="none" class="w-2.5 h-2.5"><polyline points="2,5 4.5,7.5 8,3" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
<span class="text-gray-600 text-sm leading-relaxed"><strong class="text-gray-900 font-medium">价格竞争力</strong>——部分热门车款比欧美市场便宜15～25%，汇率优势不容忽视</span>
</div>
<div class="flex items-start gap-3 py-3 border-b border-gray-100">
<div class="w-5 h-5 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 mt-0.5"><svg viewBox="0 0 10 10" fill="none" class="w-2.5 h-2.5"><polyline points="2,5 4.5,7.5 8,3" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
<span class="text-gray-600 text-sm leading-relaxed"><strong class="text-gray-900 font-medium">原厂维修记录完整</strong>——易于核实，提高转售时的说服力与成交速度</span>
</div>
<div class="flex items-start gap-3 py-3">
<div class="w-5 h-5 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 mt-0.5"><svg viewBox="0 0 10 10" fill="none" class="w-2.5 h-2.5"><polyline points="2,5 4.5,7.5 8,3" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
<span class="text-gray-600 text-sm leading-relaxed"><strong class="text-gray-900 font-medium">出口流程成熟</strong>——支持全球发货，出口文件、验关、运输均有完整配套</span>
</div>
</div>

<div class="jdm-cta" style="background:#111;margin:2rem -1rem;padding:2.5rem 1.5rem;border-radius:0.75rem">
<p class="font-mono text-xs tracking-widest uppercase text-red-600 mb-3">代拍服务</p>
<h3 style="font-family:Georgia,serif;font-size:1.5rem;font-weight:400;color:#fff;margin-bottom:0.75rem;line-height:1.3">找不到心仪的车款？<br>我们帮你从日本拍回来</h3>
<p style="font-size:0.875rem;color:rgba(255,255,255,0.5);max-width:480px;margin-bottom:1.5rem;line-height:1.75">我们深耕日本超跑中古市场多年，可协助您从 USS、TAA、HAA 等日本主要拍卖场代为竞标。全程透明报价、提供现场照片影片，安全出口至您所在地区。</p>
<a href="/zh/contact" style="display:inline-block;background:#dc2626;color:#fff;font-size:0.8125rem;font-weight:500;letter-spacing:0.06em;padding:0.75rem 1.75rem;text-decoration:none;border-radius:0.25rem">立即咨询代拍服务</a>
<p style="margin-top:0.75rem;font-size:0.75rem;color:rgba(255,255,255,0.3);font-family:monospace;letter-spacing:0.04em">通常于24小时内回复 · 中文、日文均可沟通</p>
</div>`,
      en: `Why is now the perfect time to buy a used Ferrari? Ferrari's official order books are filled through the end of 2027 — getting a new car is nearly impossible. Meanwhile, Ferrari has officially entered the electric era: their first fully electric production model, the Luce, was announced in May 2026, featuring quad motors and over 1,000 horsepower.

What does this mean for the used market? The scarcity of classic gasoline models is rising fast. Many buyers are positioning early, treating V8 and V12 Ferraris as drivable investments. Buying now means catching the sweet spot — enjoying the driving pleasure while benefiting from appreciation potential.

<div class="jdm-callout" style="border-left:3px solid #dc2626;background:#fef2f2;padding:1rem 1.25rem;margin:1.5rem 0;border-radius:0 6px 6px 0">
<p style="margin:0;color:#374151;font-size:0.9375rem;line-height:1.75"><strong style="color:#111">Editor's take:</strong> Electrification transitions typically strengthen the resale value of older combustion models. The pattern seen with the Porsche 911 GT3 RS will be even more pronounced with Ferrari — production volumes were already tiny, making every gasoline model a finite resource.</p>
</div>

>>> Price Overview

Data below is sourced from Japan's major used car platforms (CarSensor, Goo-net, Price.com) in real time. All prices are in Japanese Yen. Actual transaction prices vary significantly based on mileage, condition, and optional equipment.

<div class="jdm-price-grid"><div class="grid grid-cols-2 sm:grid-cols-3 gap-px bg-gray-200 border border-gray-200 rounded-lg overflow-hidden my-6">
<div class="bg-white p-5 hover:bg-gray-50 transition-colors">
<p class="font-mono text-xs tracking-wider text-gray-400 mb-1">California T / Portofino</p>
<p class="text-lg font-semibold text-gray-900 leading-tight mb-1">1,358<span class="text-red-600">–</span>2,980 <small class="text-xs font-light text-gray-500">万円</small></p>
<p class="text-xs text-gray-400">Entry open GT · Easiest to drive</p>
</div>
<div class="bg-white p-5 hover:bg-gray-50 transition-colors">
<p class="font-mono text-xs tracking-wider text-gray-400 mb-1">Roma / Roma Spider</p>
<p class="text-lg font-semibold text-gray-900 leading-tight mb-1">2,358<span class="text-red-600">–</span>4,550 <small class="text-xs font-light text-gray-500">万円</small></p>
<p class="text-xs text-gray-400">Most popular · Largest inventory</p>
</div>
<div class="bg-white p-5 hover:bg-gray-50 transition-colors">
<p class="font-mono text-xs tracking-wider text-gray-400 mb-1">488 GTB / Spider</p>
<p class="text-lg font-semibold text-gray-900 leading-tight mb-1">2,168<span class="text-red-600">–</span>3,980 <small class="text-xs font-light text-gray-500">万円</small></p>
<p class="text-xs text-gray-400">Classic V8 · Best value pick</p>
</div>
<div class="bg-white p-5 hover:bg-gray-50 transition-colors">
<p class="font-mono text-xs tracking-wider text-gray-400 mb-1">296 GTB / GTS</p>
<p class="text-lg font-semibold text-gray-900 leading-tight mb-1">2,930<span class="text-red-600">–</span>6,200 <small class="text-xs font-light text-gray-500">万円</small></p>
<p class="text-xs text-gray-400">V6 hybrid · Latest tech</p>
</div>
<div class="bg-white p-5 hover:bg-gray-50 transition-colors">
<p class="font-mono text-xs tracking-wider text-gray-400 mb-1">F8 Spider / Tributo</p>
<p class="text-lg font-semibold text-gray-900 leading-tight mb-1">3,500<span class="text-red-600">–</span>5,930 <small class="text-xs font-light text-gray-500">万円</small></p>
<p class="text-xs text-gray-400">488 successor · More power</p>
</div>
<div class="bg-white p-5 hover:bg-gray-50 transition-colors">
<p class="font-mono text-xs tracking-wider text-gray-400 mb-1">SF90 Stradale</p>
<p class="text-lg font-semibold text-gray-900 leading-tight mb-1">4,180<span class="text-red-600">–</span>23,310 <small class="text-xs font-light text-gray-500">万円</small></p>
<p class="text-xs text-gray-400">Flagship PHEV · Extremely scarce</p>
</div>
</div></div>

>>> Model Analysis

Based on resale value, daily usability, and market liquidity, here are the most worthwhile Ferrari models currently available in the Japanese used car market.

<div class="jdm-model-table"><div class="overflow-x-auto my-6">
<table class="w-full text-sm border-collapse">
<thead><tr class="border-b-2 border-gray-900">
<th class="px-3 py-2.5 text-left font-mono text-xs tracking-wider uppercase text-gray-400 font-normal">Model</th>
<th class="px-3 py-2.5 text-left font-mono text-xs tracking-wider uppercase text-gray-400 font-normal">Why Buy</th>
<th class="px-3 py-2.5 text-left font-mono text-xs tracking-wider uppercase text-gray-400 font-normal">Resale</th>
<th class="px-3 py-2.5 text-left font-mono text-xs tracking-wider uppercase text-gray-400 font-normal">Daily Use</th>
</tr></thead>
<tbody>
<tr class="border-b border-gray-100">
<td class="px-3 py-3 font-semibold text-gray-900 whitespace-nowrap">Ferrari Roma</td>
<td class="px-3 py-3 text-gray-600">Modern design, ample stock, practical 2+2 seating</td>
<td class="px-3 py-3"><span class="inline-block text-xs px-2 py-0.5 rounded bg-green-100 text-green-700 font-medium">Excellent</span></td>
<td class="px-3 py-3"><span class="inline-block text-xs px-2 py-0.5 rounded bg-green-100 text-green-700 font-medium">Easy</span></td>
</tr>
<tr class="border-b border-gray-100">
<td class="px-3 py-3 font-semibold text-gray-900 whitespace-nowrap">488 GTB / Spider</td>
<td class="px-3 py-3 text-gray-600">Classic turbo V8, prices stabilized, best value</td>
<td class="px-3 py-3"><span class="inline-block text-xs px-2 py-0.5 rounded bg-amber-100 text-amber-700 font-medium">Good</span></td>
<td class="px-3 py-3"><span class="inline-block text-xs px-2 py-0.5 rounded bg-amber-100 text-amber-700 font-medium">Moderate</span></td>
</tr>
<tr class="border-b border-gray-100">
<td class="px-3 py-3 font-semibold text-gray-900 whitespace-nowrap">296 GTS</td>
<td class="px-3 py-3 text-gray-600">Latest engine tech, V6 hybrid appreciation potential</td>
<td class="px-3 py-3"><span class="inline-block text-xs px-2 py-0.5 rounded bg-green-100 text-green-700 font-medium">Excellent</span></td>
<td class="px-3 py-3"><span class="inline-block text-xs px-2 py-0.5 rounded bg-green-100 text-green-700 font-medium">Easy</span></td>
</tr>
<tr class="border-b border-gray-100">
<td class="px-3 py-3 font-semibold text-gray-900 whitespace-nowrap">Portofino M</td>
<td class="px-3 py-3 text-gray-600">Top open GT pick, best starting point on a budget</td>
<td class="px-3 py-3"><span class="inline-block text-xs px-2 py-0.5 rounded bg-amber-100 text-amber-700 font-medium">Good</span></td>
<td class="px-3 py-3"><span class="inline-block text-xs px-2 py-0.5 rounded bg-green-100 text-green-700 font-medium">Easy</span></td>
</tr>
<tr class="border-b border-gray-100">
<td class="px-3 py-3 font-semibold text-gray-900 whitespace-nowrap">SF90 Stradale</td>
<td class="px-3 py-3 text-gray-600">Flagship collectible, extreme scarcity premium</td>
<td class="px-3 py-3"><span class="inline-block text-xs px-2 py-0.5 rounded bg-green-100 text-green-700 font-medium">Excellent</span></td>
<td class="px-3 py-3"><span class="inline-block text-xs px-2 py-0.5 rounded bg-red-100 text-red-700 font-medium">Challenging</span></td>
</tr>
</tbody>
</table>
</div></div>

>>> Common Pitfalls

<div class="jdm-trap-item"><div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-8">
<div class="text-5xl sm:text-6xl font-bold text-gray-200 leading-none select-none shrink-0" style="font-family:Georgia,serif">01</div>
<div class="flex-1 min-w-0">
<h3 class="text-base font-semibold text-gray-900 mb-2 mt-0">Ignoring Option Records</h3>
<p class="text-gray-600 leading-relaxed text-sm">Ferrari options can cost several million yen and directly affect resale value. Always request the original invoice or factory spec sheet (Carpass) and verify every option. Cars without documentation should be negotiated down significantly.</p>
</div>
</div></div>

<div class="jdm-trap-item"><div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-8">
<div class="text-5xl sm:text-6xl font-bold text-gray-200 leading-none select-none shrink-0" style="font-family:Georgia,serif">02</div>
<div class="flex-1 min-w-0">
<h3 class="text-base font-semibold text-gray-900 mb-2 mt-0">Focusing Only on Mileage</h3>
<p class="text-gray-600 leading-relaxed text-sm mb-3">Low mileage doesn't guarantee good condition. Ferrari hydraulic systems and dual-clutch transmissions can develop seal degradation from prolonged sitting. Always demand complete service records and prioritize cars maintained at authorized Ferrari workshops.</p>
<div style="border-left:3px solid #ef4444;background:#fff8f8;padding:0.75rem 1rem;margin:0.75rem 0;border-radius:0 6px 6px 0">
<p style="margin:0;color:#374151;font-size:0.8125rem;line-height:1.75"><strong style="color:#991f1f">⚠ Red flags:</strong> No service history, repairs at non-authorized shops, engine or transmission replacement — any of these warrant caution or a significantly lower offer.</p>
</div>
</div>
</div></div>

<div class="jdm-trap-item"><div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-8">
<div class="text-5xl sm:text-6xl font-bold text-gray-200 leading-none select-none shrink-0" style="font-family:Georgia,serif">03</div>
<div class="flex-1 min-w-0">
<h3 class="text-base font-semibold text-gray-900 mb-2 mt-0">Not Understanding Ferrari Approved Certification</h3>
<p class="text-gray-600 leading-relaxed text-sm">Ferrari Approved certified pre-owned cars must pass a rigorous 190-point factory inspection, offering at least 12 months of original warranty and 24-hour roadside assistance. Prices run about 10–15% higher than non-certified used cars, but for first-time Ferrari buyers, this premium is often worth it.</p>
</div>
</div></div>

<div class="jdm-trap-item"><div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-8">
<div class="text-5xl sm:text-6xl font-bold text-gray-200 leading-none select-none shrink-0" style="font-family:Georgia,serif">04</div>
<div class="flex-1 min-w-0">
<h3 class="text-base font-semibold text-gray-900 mb-2 mt-0">Not Confirming LHD/RHD and Import Specs</h3>
<p class="text-gray-600 leading-relaxed text-sm">The Japanese market circulates both left-hand drive (European spec) and right-hand drive vehicles. LHD cars are typically priced lower but are less convenient at parking lots and toll stations, and have lower resale liquidity in Japan. Confirm local regulations before export.</p>
</div>
</div></div>

<div class="jdm-trap-item"><div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start py-8">
<div class="text-5xl sm:text-6xl font-bold text-gray-200 leading-none select-none shrink-0" style="font-family:Georgia,serif">05</div>
<div class="flex-1 min-w-0">
<h3 class="text-base font-semibold text-gray-900 mb-2 mt-0">Underestimating Ownership Costs</h3>
<p class="text-gray-600 leading-relaxed text-sm">Annual Ferrari ownership costs (insurance, factory maintenance, vehicle weight tax, tires, etc.) typically range from 1 to 2 million yen, depending on the model and insurance conditions. Budget for these beyond the purchase price to avoid buying a car you can't afford to maintain.</p>
</div>
</div></div>

>>> Why Japan

Japan has one of the highest Ferrari ownership rates in Asia, with a mature supercar ecosystem — from the factory service network to used car distribution mechanisms — far superior to other Asian markets.

<div class="jdm-checklist" style="margin:1.5rem 0">
<div class="flex items-start gap-3 py-3 border-b border-gray-100">
<div class="w-5 h-5 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 mt-0.5"><svg viewBox="0 0 10 10" fill="none" class="w-2.5 h-2.5"><polyline points="2,5 4.5,7.5 8,3" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
<span class="text-gray-600 text-sm leading-relaxed"><strong class="text-gray-900 font-medium">Large inventory</strong> — approximately 935 Ferraris currently in circulation on Japan's used market, far exceeding other Asian markets</span>
</div>
<div class="flex items-start gap-3 py-3 border-b border-gray-100">
<div class="w-5 h-5 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 mt-0.5"><svg viewBox="0 0 10 10" fill="none" class="w-2.5 h-2.5"><polyline points="2,5 4.5,7.5 8,3" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
<span class="text-gray-600 text-sm leading-relaxed"><strong class="text-gray-900 font-medium">Transparent condition</strong> — excellent Japanese car-care culture, odometer fraud is extremely rare, complete service records available</span>
</div>
<div class="flex items-start gap-3 py-3 border-b border-gray-100">
<div class="w-5 h-5 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 mt-0.5"><svg viewBox="0 0 10 10" fill="none" class="w-2.5 h-2.5"><polyline points="2,5 4.5,7.5 8,3" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
<span class="text-gray-600 text-sm leading-relaxed"><strong class="text-gray-900 font-medium">Competitive pricing</strong> — some popular models are 15–25% cheaper than Western markets, plus favorable exchange rates</span>
</div>
<div class="flex items-start gap-3 py-3 border-b border-gray-100">
<div class="w-5 h-5 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 mt-0.5"><svg viewBox="0 0 10 10" fill="none" class="w-2.5 h-2.5"><polyline points="2,5 4.5,7.5 8,3" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
<span class="text-gray-600 text-sm leading-relaxed"><strong class="text-gray-900 font-medium">Complete factory records</strong> — easy to verify, boosting buyer confidence and resale speed</span>
</div>
<div class="flex items-start gap-3 py-3">
<div class="w-5 h-5 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 mt-0.5"><svg viewBox="0 0 10 10" fill="none" class="w-2.5 h-2.5"><polyline points="2,5 4.5,7.5 8,3" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
<span class="text-gray-600 text-sm leading-relaxed"><strong class="text-gray-900 font-medium">Mature export process</strong> — global shipping with full documentation, customs clearance, and transport support</span>
</div>
</div>

<div class="jdm-cta" style="background:#111;margin:2rem -1rem;padding:2.5rem 1.5rem;border-radius:0.75rem">
<p class="font-mono text-xs tracking-widest uppercase text-red-600 mb-3">Proxy Bidding</p>
<h3 style="font-family:Georgia,serif;font-size:1.5rem;font-weight:400;color:#fff;margin-bottom:0.75rem;line-height:1.3">Can't find the model you want?<br>We'll bid on your behalf at Japan's auctions</h3>
<p style="font-size:0.875rem;color:rgba(255,255,255,0.5);max-width:480px;margin-bottom:1.5rem;line-height:1.75">We can help you bid at Japan's major auction houses (USS, TAA, HAA). Fully transparent pricing, on-site photos and video, safe export to your location.</p>
<a href="/en/contact" style="display:inline-block;background:#dc2626;color:#fff;font-size:0.8125rem;font-weight:500;letter-spacing:0.06em;padding:0.75rem 1.75rem;text-decoration:none;border-radius:0.25rem">Contact Proxy Bidding Service</a>
<p style="margin-top:0.75rem;font-size:0.75rem;color:rgba(255,255,255,0.3);font-family:monospace;letter-spacing:0.04em">Usually responds within 24 hours · English & Japanese available</p>
</div>`,
      ja: `なぜ今がフェラーリ中古車を購入するベストタイミングなのか？フェラーリの公式オーダーは2027年末まで埋まっており、新車の入手はほぼ不可能です。同時に、フェラーリは電動化時代に突入しました。2026年5月に初の純電気量産モデル「Luce」が発表され、4モーター、1,000馬力以上を搭載しています。

これは中古市場に何を意味するのでしょうか？クラシックなガソリンモデルの希少性が急速に高まっています。多くのバイヤーがV8・V12ガソリンフェラーリを「走れる投資対象」として早期に位置づけています。今購入すれば、ドライビングプレジャーを楽しみながら価値上昇の恩恵も受けられる絶妙なタイミングです。

<div class="jdm-callout" style="border-left:3px solid #dc2626;background:#fef2f2;padding:1rem 1.25rem;margin:1.5rem 0;border-radius:0 6px 6px 0">
<p style="margin:0;color:#374151;font-size:0.9375rem;line-height:1.75"><strong style="color:#111">編集部の見解：</strong>電動化への移行は、従来の内燃機関モデルの再販価値を典型的に強化します。ポルシェ911 GT3 RSで見られたパターンはフェラーリでさらに顕著になります。生産台数がすでに極めて少なく、ガソリンモデル1台1台が有限資源だからです。</p>
</div>

>>> 価格一覧

以下のデータは日本の主要中古車プラットフォーム（カーセンサー、グーネット、価格.com）のリアルタイム統計に基づいています。単位は万円。実際の取引価格は走行距離、車況、オプションにより大きく変動します。

<div class="jdm-price-grid"><div class="grid grid-cols-2 sm:grid-cols-3 gap-px bg-gray-200 border border-gray-200 rounded-lg overflow-hidden my-6">
<div class="bg-white p-5 hover:bg-gray-50 transition-colors">
<p class="font-mono text-xs tracking-wider text-gray-400 mb-1">California T / Portofino</p>
<p class="text-lg font-semibold text-gray-900 leading-tight mb-1">1,358<span class="text-red-600">～</span>2,980 <small class="text-xs font-light text-gray-500">万円</small></p>
<p class="text-xs text-gray-400">エントリーオープンGT · 運転しやすい</p>
</div>
<div class="bg-white p-5 hover:bg-gray-50 transition-colors">
<p class="font-mono text-xs tracking-wider text-gray-400 mb-1">Roma / Roma Spider</p>
<p class="text-lg font-semibold text-gray-900 leading-tight mb-1">2,358<span class="text-red-600">～</span>4,550 <small class="text-xs font-light text-gray-500">万円</small></p>
<p class="text-xs text-gray-400">人気No.1 · 在庫最多</p>
</div>
<div class="bg-white p-5 hover:bg-gray-50 transition-colors">
<p class="font-mono text-xs tracking-wider text-gray-400 mb-1">488 GTB / Spider</p>
<p class="text-lg font-semibold text-gray-900 leading-tight mb-1">2,168<span class="text-red-600">～</span>3,980 <small class="text-xs font-light text-gray-500">万円</small></p>
<p class="text-xs text-gray-400">クラシックV8 · コスパ抜群</p>
</div>
<div class="bg-white p-5 hover:bg-gray-50 transition-colors">
<p class="font-mono text-xs tracking-wider text-gray-400 mb-1">296 GTB / GTS</p>
<p class="text-lg font-semibold text-gray-900 leading-tight mb-1">2,930<span class="text-red-600">～</span>6,200 <small class="text-xs font-light text-gray-500">万円</small></p>
<p class="text-xs text-gray-400">V6ハイブリッド · 最新技術</p>
</div>
<div class="bg-white p-5 hover:bg-gray-50 transition-colors">
<p class="font-mono text-xs tracking-wider text-gray-400 mb-1">F8 Spider / Tributo</p>
<p class="text-lg font-semibold text-gray-900 leading-tight mb-1">3,500<span class="text-red-600">～</span>5,930 <small class="text-xs font-light text-gray-500">万円</small></p>
<p class="text-xs text-gray-400">488の後継 · 更なる高性能化</p>
</div>
<div class="bg-white p-5 hover:bg-gray-50 transition-colors">
<p class="font-mono text-xs tracking-wider text-gray-400 mb-1">SF90 Stradale</p>
<p class="text-lg font-semibold text-gray-900 leading-tight mb-1">4,180<span class="text-red-600">～</span>23,310 <small class="text-xs font-light text-gray-500">万円</small></p>
<p class="text-xs text-gray-400">フラッグシップPHEV · 極めて希少</p>
</div>
</div></div>

>>> おすすめモデル

再販価値、日常実用性、中古市場の流動性の3つの観点から、現在の日本市場で最も購入価値の高いフェラーリモデルをご紹介します。

<div class="jdm-model-table"><div class="overflow-x-auto my-6">
<table class="w-full text-sm border-collapse">
<thead><tr class="border-b-2 border-gray-900">
<th class="px-3 py-2.5 text-left font-mono text-xs tracking-wider uppercase text-gray-400 font-normal">モデル</th>
<th class="px-3 py-2.5 text-left font-mono text-xs tracking-wider uppercase text-gray-400 font-normal">おすすめ理由</th>
<th class="px-3 py-2.5 text-left font-mono text-xs tracking-wider uppercase text-gray-400 font-normal">再販価値</th>
<th class="px-3 py-2.5 text-left font-mono text-xs tracking-wider uppercase text-gray-400 font-normal">日常使用</th>
</tr></thead>
<tbody>
<tr class="border-b border-gray-100">
<td class="px-3 py-3 font-semibold text-gray-900 whitespace-nowrap">Ferrari Roma</td>
<td class="px-3 py-3 text-gray-600">最もモダンなデザイン、豊富な在庫、2+2シートで実用的</td>
<td class="px-3 py-3"><span class="inline-block text-xs px-2 py-0.5 rounded bg-green-100 text-green-700 font-medium">優</span></td>
<td class="px-3 py-3"><span class="inline-block text-xs px-2 py-0.5 rounded bg-green-100 text-green-700 font-medium">容易</span></td>
</tr>
<tr class="border-b border-gray-100">
<td class="px-3 py-3 font-semibold text-gray-900 whitespace-nowrap">488 GTB / Spider</td>
<td class="px-3 py-3 text-gray-600">V8ターボクラシック、価格安定、最高コスパ</td>
<td class="px-3 py-3"><span class="inline-block text-xs px-2 py-0.5 rounded bg-amber-100 text-amber-700 font-medium">良</span></td>
<td class="px-3 py-3"><span class="inline-block text-xs px-2 py-0.5 rounded bg-amber-100 text-amber-700 font-medium">普通</span></td>
</tr>
<tr class="border-b border-gray-100">
<td class="px-3 py-3 font-semibold text-gray-900 whitespace-nowrap">296 GTS</td>
<td class="px-3 py-3 text-gray-600">最新エンジン技術、V6ハイブリッド価値上昇余地大</td>
<td class="px-3 py-3"><span class="inline-block text-xs px-2 py-0.5 rounded bg-green-100 text-green-700 font-medium">優</span></td>
<td class="px-3 py-3"><span class="inline-block text-xs px-2 py-0.5 rounded bg-green-100 text-green-700 font-medium">容易</span></td>
</tr>
<tr class="border-b border-gray-100">
<td class="px-3 py-3 font-semibold text-gray-900 whitespace-nowrap">Portofino M</td>
<td class="px-3 py-3 text-gray-600">オープンGTの筆頭、予算限定のベストスタート</td>
<td class="px-3 py-3"><span class="inline-block text-xs px-2 py-0.5 rounded bg-amber-100 text-amber-700 font-medium">良</span></td>
<td class="px-3 py-3"><span class="inline-block text-xs px-2 py-0.5 rounded bg-green-100 text-green-700 font-medium">容易</span></td>
</tr>
<tr class="border-b border-gray-100">
<td class="px-3 py-3 font-semibold text-gray-900 whitespace-nowrap">SF90 Stradale</td>
<td class="px-3 py-3 text-gray-600">フラッグシップコレクション、希少性による高プレミアム</td>
<td class="px-3 py-3"><span class="inline-block text-xs px-2 py-0.5 rounded bg-green-100 text-green-700 font-medium">優</span></td>
<td class="px-3 py-3"><span class="inline-block text-xs px-2 py-0.5 rounded bg-red-100 text-red-700 font-medium">上級者向け</span></td>
</tr>
</tbody>
</table>
</div></div>

>>> 注意点

<div class="jdm-trap-item"><div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-8">
<div class="text-5xl sm:text-6xl font-bold text-gray-200 leading-none select-none shrink-0" style="font-family:Georgia,serif">01</div>
<div class="flex-1 min-w-0">
<h3 class="text-base font-semibold text-gray-900 mb-2 mt-0">オプション記録の見落とし</h3>
<p class="text-gray-600 leading-relaxed text-sm">フェラーリのオプションは数百万円に上ることがあり、再販価値に直接影響します。購入前に必ず元の請求書または出荷仕様書（Carpass）を入手し、全オプションを確認してください。記録のない車両は大幅な価格交渉が必要です。</p>
</div>
</div></div>

<div class="jdm-trap-item"><div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-8">
<div class="text-5xl sm:text-6xl font-bold text-gray-200 leading-none select-none shrink-0" style="font-family:Georgia,serif">02</div>
<div class="flex-1 min-w-0">
<h3 class="text-base font-semibold text-gray-900 mb-2 mt-0">走行距離ばかり気にしてメンテナンス履歴を無視</h3>
<p class="text-gray-600 leading-relaxed text-sm mb-3">低走行距離＝良い車況とは限りません。フェラーリの油圧システムやDCTトランスミッションは長期間の放置でシール劣化などの問題が発生しやすくなります。完全なメンテナンス記録を必ず要求し、正規ディーラーでの整備歴がある車両を優先してください。</p>
<div style="border-left:3px solid #ef4444;background:#fff8f8;padding:0.75rem 1rem;margin:0.75rem 0;border-radius:0 6px 6px 0">
<p style="margin:0;color:#374151;font-size:0.8125rem;line-height:1.75"><strong style="color:#991f1f">⚠ 危険信号：</strong>メンテナンス記録なし、非正規店での修理、エンジンまたはトランスミッションの交換——いずれかが該当する場合は要注意、または大幅な値下げ交渉の材料に。</p>
</div>
</div>
</div></div>

<div class="jdm-trap-item"><div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-8">
<div class="text-5xl sm:text-6xl font-bold text-gray-200 leading-none select-none shrink-0" style="font-family:Georgia,serif">03</div>
<div class="flex-1 min-w-0">
<h3 class="text-base font-semibold text-gray-900 mb-2 mt-0">Ferrari Approved認証の違いを理解していない</h3>
<p class="text-gray-600 leading-relaxed text-sm">Ferrari Approved認定中古車は190項目の厳格な工場検査に合格し、12ヶ月以上の正規保証と24時間ロードサイドアシスタンスが付帯します。一般中古車より10～15%高いですが、初めてフェラーリを購入する方にはこのプレミアムは十分な価値があります。</p>
</div>
</div></div>

<div class="jdm-trap-item"><div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-8">
<div class="text-5xl sm:text-6xl font-bold text-gray-200 leading-none select-none shrink-0" style="font-family:Georgia,serif">04</div>
<div class="flex-1 min-w-0">
<h3 class="text-base font-semibold text-gray-900 mb-2 mt-0">左右ハンドルと輸入仕様の確認不足</h3>
<p class="text-gray-600 leading-relaxed text-sm">日本市場には左ハンドル（欧州仕様）と右ハンドル車両が流通しています。左ハンドル車は価格が低めですが、駐車場や料金所で不便であり、日本市場での再販流動性も低いです。輸出先の地域の法規も事前に確認が必要です。</p>
</div>
</div></div>

<div class="jdm-trap-item"><div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start py-8">
<div class="text-5xl sm:text-6xl font-bold text-gray-200 leading-none select-none shrink-0" style="font-family:Georgia,serif">05</div>
<div class="flex-1 min-w-0">
<h3 class="text-base font-semibold text-gray-900 mb-2 mt-0">所有コストの過小評価</h3>
<p class="text-gray-600 leading-relaxed text-sm">フェラーリの年間所有費用（保険、正規メンテナンス、自動車重量税、タイヤ等）は通常100～200万円で、モデルと保険条件により変動します。購入予算以外にも十分な所有費用を確保してください。</p>
</div>
</div></div>

>>> 日本の優位性

日本はアジアで最もフェラーリ保有量が高い市場の一つで、正規サービスネットワークから中古車流通メカニズムまで、他のアジア市場を遥かに凌ぐ成熟したスーパーカーエコシステムを備えています。

<div class="jdm-checklist" style="margin:1.5rem 0">
<div class="flex items-start gap-3 py-3 border-b border-gray-100">
<div class="w-5 h-5 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 mt-0.5"><svg viewBox="0 0 10 10" fill="none" class="w-2.5 h-2.5"><polyline points="2,5 4.5,7.5 8,3" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
<span class="text-gray-600 text-sm leading-relaxed"><strong class="text-gray-900 font-medium">豊富な在庫</strong>——日本中古市場に約935台のフェラーリが流通、他のアジア市場を大きく上回る選択肢</span>
</div>
<div class="flex items-start gap-3 py-3 border-b border-gray-100">
<div class="w-5 h-5 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 mt-0.5"><svg viewBox="0 0 10 10" fill="none" class="w-2.5 h-2.5"><polyline points="2,5 4.5,7.5 8,3" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
<span class="text-gray-600 text-sm leading-relaxed"><strong class="text-gray-900 font-medium">透明な車況</strong>——日本のカーケア文化は優秀、走行距離の改ざんは極めて稀で、メンテナンス記録も完全に確認可能</span>
</div>
<div class="flex items-start gap-3 py-3 border-b border-gray-100">
<div class="w-5 h-5 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 mt-0.5"><svg viewBox="0 0 10 10" fill="none" class="w-2.5 h-2.5"><polyline points="2,5 4.5,7.5 8,3" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
<span class="text-gray-600 text-sm leading-relaxed"><strong class="text-gray-900 font-medium">競争力のある価格</strong>——一部の人気モデルは欧米市場より15～25%安く、為替メリットも無視できない</span>
</div>
<div class="flex items-start gap-3 py-3 border-b border-gray-100">
<div class="w-5 h-5 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 mt-0.5"><svg viewBox="0 0 10 10" fill="none" class="w-2.5 h-2.5"><polyline points="2,5 4.5,7.5 8,3" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
<span class="text-gray-600 text-sm leading-relaxed"><strong class="text-gray-900 font-medium">完全な正規記録</strong>——確認が容易で、再販時の説得力と成約スピードを向上</span>
</div>
<div class="flex items-start gap-3 py-3">
<div class="w-5 h-5 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 mt-0.5"><svg viewBox="0 0 10 10" fill="none" class="w-2.5 h-2.5"><polyline points="2,5 4.5,7.5 8,3" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
<span class="text-gray-600 text-sm leading-relaxed"><strong class="text-gray-900 font-medium">成熟した輸出プロセス</strong>——世界中への発送に対応、輸出書類、通関、輸送のフルサポート</span>
</div>
</div>

<div class="jdm-cta" style="background:#111;margin:2rem -1rem;padding:2.5rem 1.5rem;border-radius:0.75rem">
<p class="font-mono text-xs tracking-widest uppercase text-red-600 mb-3">代行入札サービス</p>
<h3 style="font-family:Georgia,serif;font-size:1.5rem;font-weight:400;color:#fff;margin-bottom:0.75rem;line-height:1.3">希望のモデルが見つからない？<br>日本のオークションで代行入札いたします</h3>
<p style="font-size:0.875rem;color:rgba(255,255,255,0.5);max-width:480px;margin-bottom:1.5rem;line-height:1.75">日本の主要オークション会場（USS、TAA、HAA）で代行入札いたします。完全透明な価格提示、現地写真・動画提供、お住まいの地域への安全な輸出。</p>
<a href="/ja/contact" style="display:inline-block;background:#dc2626;color:#fff;font-size:0.8125rem;font-weight:500;letter-spacing:0.06em;padding:0.75rem 1.75rem;text-decoration:none;border-radius:0.25rem">代行入札サービスに相談する</a>
<p style="margin-top:0.75rem;font-size:0.75rem;color:rgba(255,255,255,0.3);font-family:monospace;letter-spacing:0.04em">通常24時間以内に返信 · 日本語・英語対応可能</p>
</div>`,
    },
  },
  {
    slug: "25-best-jdm-cars-all-time",
    title: {
      zh: "史上最伟大的25款JDM名车：终极排行与购车指南",
      en: "25 Best JDM Cars of All Time: Ultimate Rankings & Buyer's Guide",
      ja: "史上最高のJDMカー25選：究極のランキングと購入ガイド",
    },
    excerpt: {
      zh: "从日产Skyline GT-R R34到丰田Supra MK4，深入解析日本国内市场25款最具传奇色彩的汽车，涵盖工程创新、赛道传承与文化影响。",
      en: "From the Nissan Skyline GT-R R34 to the Toyota Supra MK4, discover the 25 most legendary Japanese Domestic Market cars ever built — ranked by engineering, heritage, and driving purity.",
      ja: "日産スカイラインGT-R R34からトヨタスープラMK4まで、エンジニアリング、モータースポーツの遺産、走りの純粋さで選ぶ史上最高のJDMカー25選。",
    },
    category: { zh: "JDM文化", en: "JDM Culture", ja: "JDM文化" },
    date: "2026-06-11",
    readTime: { zh: "18分钟阅读", en: "18 min read", ja: "18分で読める" },
    color: "bg-red-500",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Nissan_Skyline_GT-R_R34_V_Spec_II.jpg/960px-Nissan_Skyline_GT-R_R34_V_Spec_II.jpg",
    content: {
      zh: `**JDM**——日本国内市场（Japanese Domestic Market）——指的是专门为日本本土销售而制造的车辆。数十年来，日本汽车制造商为国内买家生产了最强劲、最具异国情调、技术最大胆的车型，而让世界其他地区只能观望和羡慕。

得益于**25年进口法规**，许多传奇车型现在已合法进口到美国，需求的井喷将价格推至天际。无论你是资深收藏家还是首次购买者试图解读JDM市场，这份权威指南评选出有史以来最伟大的25款日本国内市场汽车——以工程创新、赛车运动传承、文化影响和驾驶纯粹度为评判标准。

## 什么是JDM车？

JDM是*日本国内市场*（Japanese Domestic Market）的缩写。这些车是按照日本政府规格制造的——右舵驾驶，针对日本道路调校，通常配备从未出口的性能版本或配置。25年规则（49 CFR 591.5）允许进口任何制造超过25年的车辆进入美国，无论原始合规性如何，使标志性的JDM车型对美国收藏家变得触手可及。

>>> 三大神车 — 绝对传奇

<div class="jdm-car-entry">
<div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-10">
<div class="text-6xl sm:text-7xl font-bold text-gray-200 leading-none select-none shrink-0">01</div>
<div class="flex-1 min-w-0">
<p class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-1">Nissan · 1999–2002 · 传奇</p>
<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Nissan Skyline GT-R R34</h2>
<div class="flex flex-wrap gap-x-5 gap-y-1 mb-4 font-mono text-xs text-gray-400">
<span>发动机 <strong class="text-gray-900">RB26DETT 2.6L 双涡轮增压直列六缸</strong></span>
<span>功率 <strong class="text-gray-900">276马力（出厂值 — 普遍超标）</strong></span>
<span>驱动 <strong class="text-gray-900">ATTESA E-TS 四驱</strong></span>
<span>0–60 <strong class="text-gray-900">~4.9秒</strong></span>
<span>产量 <strong class="text-gray-900">~11,500辆</strong></span>
</div>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Nissan_Skyline_GT-R_R34_V_Spec_II.jpg/960px-Nissan_Skyline_GT-R_R34_V_Spec_II.jpg" alt="Nissan Skyline GT-R R34 V-Spec II" class="w-full aspect-video object-cover rounded my-5" loading="lazy" />
<p class="text-gray-600 leading-relaxed mb-3">没有哪份JDM榜单会从别处开始。<strong>R34 Nissan Skyline GT-R</strong>是当之无愧的王者——这辆车如此强大，以至于日本房车锦标赛最终不得不施加限制，只为了给其他制造商一个机会。绰号<em>"哥斯拉"</em>，其RB26DETT双涡轮增压直列六缸发动机是汽车史上最受赞誉的发动机之一：无限改装潜力、扭矩凶猛，在适当保养下坚不可摧。</p>
<p class="text-gray-600 leading-relaxed mb-3">ATTESA E-TS Pro全轮驱动系统、Super-HICAS四轮转向，以及借鉴自GT赛车的多功能显示屏，让R34领先时代数十年。由于总共仅生产约11,500辆，保养良好的 specimen 现在拍卖价已超过200,000美元——而且还在攀升。保罗·沃克在<em>《速度与激情2》</em>中那辆著名的海湾蓝R34，巩固了它在全球流行文化中不朽的地位。</p>
<div class="inline-flex items-center gap-2 mt-4 bg-red-50 border border-red-200 rounded px-3 py-2 text-sm font-medium text-red-800">★ 有史以来最伟大的JDM车型 — 毋庸置疑</div>
</div>
</div>
</div>

<div class="jdm-car-entry">
<div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-10">
<div class="text-6xl sm:text-7xl font-bold text-gray-200 leading-none select-none shrink-0">02</div>
<div class="flex-1 min-w-0">
<p class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-1">Toyota · 1993–2002 · 传奇</p>
<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Toyota Supra MK4 (A80)</h2>
<div class="flex flex-wrap gap-x-5 gap-y-1 mb-4 font-mono text-xs text-gray-400">
<span>发动机 <strong class="text-gray-900">2JZ-GTE 3.0L 双涡轮增压直列六缸</strong></span>
<span>功率 <strong class="text-gray-900">320马力（JDM）/ 276马力（出口版）</strong></span>
<span>驱动 <strong class="text-gray-900">后驱 6速手动</strong></span>
<span>0–60 <strong class="text-gray-900">~4.6秒</strong></span>
<span>极速 <strong class="text-gray-900">180英里/小时（限制版）</strong></span>
</div>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Toyota_GR_Supra_%2851984008283crop%29.jpg/960px-Toyota_GR_Supra_%2851984008283crop%29.jpg" alt="Toyota Supra MK4 A80" class="w-full aspect-video object-cover rounded my-5" loading="lazy" />
<p class="text-gray-600 leading-relaxed mb-3"><strong>Toyota Supra MK4</strong>的2JZ-GTE发动机可以说是历史上最著名的直列六缸发动机。 notoriously 过度设计——丰田工程师设计的初衷是让它能在内部改装后承受1,000+马力——它成为了改装界的圣杯。JDM规格的车型出厂即输出320马力，而出口市场车型为276马力，这反映了日本的君子协定马力上限。</p>
<p class="text-gray-600 leading-relaxed mb-3">布莱恩·奥康纳在<em>《速度与激情》</em>中那辆橙色Supra使其成为整整一代人的梦想之车。状况良好的原装手动挡Supra MK4现在售价在100,000至200,000美元之间，由稀缺性和近乎宗教般的追随热情所推动。</p>
<div class="inline-flex items-center gap-2 mt-4 bg-red-50 border border-red-200 rounded px-3 py-2 text-sm font-medium text-red-800">★ 2JZ-GTE 定义了整整一代改装文化</div>
</div>
</div>
</div>

<div class="jdm-car-entry">
<div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-10">
<div class="text-6xl sm:text-7xl font-bold text-gray-200 leading-none select-none shrink-0">03</div>
<div class="flex-1 min-w-0">
<p class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-1">Mazda · 1992–2002 · 驾驶者之车</p>
<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Mazda RX-7 FD</h2>
<div class="flex flex-wrap gap-x-5 gap-y-1 mb-4 font-mono text-xs text-gray-400">
<span>发动机 <strong class="text-gray-900">13B-REW 1.3L 双转子涡轮增压</strong></span>
<span>功率 <strong class="text-gray-900">252–280马力（JDM）</strong></span>
<span>重量 <strong class="text-gray-900">~2,800磅</strong></span>
<span>0–60 <strong class="text-gray-900">~5.2秒</strong></span>
<span>配重 <strong class="text-gray-900">50/50 前后</strong></span>
</div>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/1994_Mazda_RX-7_R2_in_Vintage_Red%2C_front_left_%28Lime_Rock%29.jpg/960px-1994_Mazda_RX-7_R2_in_Vintage_Red%2C_front_left_%28Lime_Rock%29.jpg" alt="Mazda RX-7 FD in Vintage Red" class="w-full aspect-video object-cover rounded my-5" loading="lazy" />
<p class="text-gray-600 leading-relaxed mb-3">论纯粹的驾驶艺术，JDM经典中没有任何车型能匹敌<strong>Mazda RX-7 FD</strong>。其13B-REW双涡轮增压转子发动机被放置在前轴<em>后方</em>，实现了近乎完美的50/50重量分配。结果是一辆以超自然的平衡感旋转过弯的车，尽管配备了双 sequential 涡轮增压，重量仍不到2,900磅。<em>《Car and Driver》</em>连续五年将其评为十佳车型。</p>
<p class="text-gray-600 leading-relaxed mb-3">转子发动机的标志性特征——高转速、平顺的动力输出，对改装反应极佳——使其成为漂移和赛车运动社区的首选利器。韩在<em>《东京漂移》</em>中的Veilside版RX-7为新一代粉丝留下了不朽印象。</p>
<div class="inline-flex items-center gap-2 mt-4 bg-red-50 border border-red-200 rounded px-3 py-2 text-sm font-medium text-red-800">★ JDM历史上底盘平衡性最出色的车型</div>
</div>
</div>
</div>

>>> 日本超级跑车

<div class="jdm-car-entry">
<div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-10">
<div class="text-6xl sm:text-7xl font-bold text-gray-200 leading-none select-none shrink-0">04</div>
<div class="flex-1 min-w-0">
<p class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-1">Honda · 1990–2005 · 超级跑车</p>
<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Honda NSX (NA1/NA2)</h2>
<div class="flex flex-wrap gap-x-5 gap-y-1 mb-4 font-mono text-xs text-gray-400">
<span>发动机 <strong class="text-gray-900">C30A / C32B 3.0–3.2L VTEC V6</strong></span>
<span>功率 <strong class="text-gray-900">270–290马力</strong></span>
<span>驱动 <strong class="text-gray-900">中置后驱</strong></span>
<span>0–60 <strong class="text-gray-900">~5.7秒</strong></span>
<span>极速 <strong class="text-gray-900">168英里/小时</strong></span>
</div>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/AcuraNSX-05-cropped.jpg/960px-AcuraNSX-05-cropped.jpg" alt="Honda NSX NA1 supercar" class="w-full aspect-video object-cover rounded my-5" loading="lazy" />
<p class="text-gray-600 leading-relaxed mb-3">本田的目标是打造一款性能媲美法拉利但可以日常驾驶的超级跑车——他们成功了。<strong>Honda NSX</strong>在一级方程式传奇车手埃尔顿·塞纳的参与下开发，采用了全铝单体壳底盘、中置VTEC V6发动机，红线转速高达8,000 rpm，以及在当时量产车中前所未有的钛合金连杆。</p>
<p class="text-gray-600 leading-relaxed mb-3">1990年发布时，它震惊了法拉利和保时捷的工程师，他们购买了早期车型进行拆解分析。NSX-R变体采用碳纤维制造并去除隔音材料，成为驾驶者导向的标杆。其价值已大幅升值——品相完好的NSX-R如今交易价已超过200,000美元。</p>
<div class="inline-flex items-center gap-2 mt-4 bg-red-50 border border-red-200 rounded px-3 py-2 text-sm font-medium text-red-800">★ 第一款"日常超级跑车" — 埃尔顿·塞纳认可</div>
</div>
</div>
</div>

<div class="jdm-car-entry">
<div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-10">
<div class="text-6xl sm:text-7xl font-bold text-gray-200 leading-none select-none shrink-0">05</div>
<div class="flex-1 min-w-0">
<p class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-1">Lexus · 2010–2012 · 旗舰之作</p>
<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Lexus LFA</h2>
<div class="flex flex-wrap gap-x-5 gap-y-1 mb-4 font-mono text-xs text-gray-400">
<span>发动机 <strong class="text-gray-900">1LR-GUE 4.8L 自然吸气V10</strong></span>
<span>功率 <strong class="text-gray-900">552马力 @ 8,700 rpm</strong></span>
<span>红线 <strong class="text-gray-900">9,000 rpm</strong></span>
<span>0–60 <strong class="text-gray-900">3.7秒</strong></span>
<span>产量 <strong class="text-gray-900">500辆</strong></span>
</div>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Lexus_LFA_001.JPG/960px-Lexus_LFA_001.JPG" alt="Lexus LFA V10 supercar" class="w-full aspect-video object-cover rounded my-5" loading="lazy" />
<p class="text-gray-600 leading-relaxed mb-3"><strong>Lexus LFA</strong>是一个制造商在没有财务压力的情况下花费十年时间打磨旗舰之作的结晶。其4.8升自然吸气V10发动机转速高达9,000 rpm，排气声浪如此独特，以至于需要配备数字转速表——模拟指针根本无法跟上发动机加速响应的速度。</p>
<p class="text-gray-600 leading-relaxed mb-3">车身65%采用碳纤维增强聚合物制造，LFA代表了日本工艺的绝对巅峰。总共仅生产了500辆。如今售价已超过900,000美元。这对雷克萨斯而言是财务上的亏损——却是史上最伟大汽车之一。</p>
<div class="inline-flex items-center gap-2 mt-4 bg-red-50 border border-red-200 rounded px-3 py-2 text-sm font-medium text-red-800">★ 500辆。有史以来最伟大的V10声浪之一。</div>
</div>
</div>
</div>

>>> 拉力传奇与认证特装版

<div class="jdm-car-entry">
<div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-10">
<div class="text-6xl sm:text-7xl font-bold text-gray-200 leading-none select-none shrink-0">06</div>
<div class="flex-1 min-w-0">
<p class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-1">Mitsubishi · 1999 · 拉力特装版</p>
<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Mitsubishi Lancer Evolution VI T.M. Edition</h2>
<div class="flex flex-wrap gap-x-5 gap-y-1 mb-4 font-mono text-xs text-gray-400">
<span>发动机 <strong class="text-gray-900">4G63T 2.0L 涡轮增压直列四缸</strong></span>
<span>功率 <strong class="text-gray-900">276马力（低估）</strong></span>
<span>驱动 <strong class="text-gray-900">四驱 ACD/AYC</strong></span>
<span>产量 <strong class="text-gray-900">限量生产</strong></span>
</div>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/2017-04-02_Mitsubishi_Lancer_Evolution_X_MR_SST_14_%282%29.jpg/960px-2017-04-02_Mitsubishi_Lancer_Evolution_X_MR_SST_14_%282%29.jpg" alt="Mitsubishi Lancer Evolution" class="w-full aspect-video object-cover rounded my-5" loading="lazy" />
<p class="text-gray-600 leading-relaxed mb-3"><strong>Lancer Evolution VI Tommi Mäkinen Edition</strong>——以帮助三菱连续四年夺得WRC世界冠军的芬兰车手命名——代表了Evo车系的巅峰。更硬的悬挂、更通畅的排气、钛合金涡轮壳体以及微妙的空气动力学调整，使其成为当时最为纯粹的Evo。</p>
<p class="text-gray-600 leading-relaxed mb-3">Lancer Evolution的每一代（I到X）都遵循相同的核心配方：涡轮增压2.0升直列四缸发动机、全轮驱动，以及用于认证拉力赛部件的方正功能性车身。没有哪款Evo比VI TME更忠实地体现了这一理念。</p>
<div class="inline-flex items-center gap-2 mt-4 bg-red-50 border border-red-200 rounded px-3 py-2 text-sm font-medium text-red-800">★ 4个WRC冠军。零妥协。</div>
</div>
</div>
</div>

<div class="jdm-car-entry">
<div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-10">
<div class="text-6xl sm:text-7xl font-bold text-gray-200 leading-none select-none shrink-0">07</div>
<div class="flex-1 min-w-0">
<p class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-1">Subaru · 1998 · 认证特装版</p>
<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Subaru Impreza 22B STi</h2>
<div class="flex flex-wrap gap-x-5 gap-y-1 mb-4 font-mono text-xs text-gray-400">
<span>发动机 <strong class="text-gray-900">EJ22 2.2L 涡轮增压水平对置四缸</strong></span>
<span>功率 <strong class="text-gray-900">276马力（出厂值）</strong></span>
<span>产量 <strong class="text-gray-900">424辆</strong></span>
<span>车身 <strong class="text-gray-900">宽体双门</strong></span>
</div>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/2011_Subaru_Impreza_WRX_STI_sedan_front_--_2011_DC.jpg/960px-2011_Subaru_Impreza_WRX_STI_sedan_front_--_2011_DC.jpg" alt="Subaru Impreza WRX STI" class="w-full aspect-video object-cover rounded my-5" loading="lazy" />
<p class="text-gray-600 leading-relaxed mb-3">为庆祝斯巴鲁连续三年夺得WRC制造商冠军而打造，<strong>22B STi</strong>是现存最稀有、最令人向往的JDM车型之一。总共仅生产了424辆——400辆面向日本市场，24辆面向其他市场。加大的2.2升水平对置四缸发动机和宽体套件直接源自WRC赛车，赋予了它真正硬核的拉力赛血统。</p>
<p class="text-gray-600 leading-relaxed mb-3">低里程的案例在拍卖会上已售出超过200,000美元，对于一辆斯巴鲁来说几乎是不可想象的升值幅度。22B已成为1990年代末JDM时代的标杆收藏车型。</p>
<div class="inline-flex items-center gap-2 mt-4 bg-red-50 border border-red-200 rounded px-3 py-2 text-sm font-medium text-red-800">★ 仅造424辆。每一辆如今都是六位数身价。</div>
</div>
</div>
</div>

<div class="jdm-car-entry">
<div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-10">
<div class="text-6xl sm:text-7xl font-bold text-gray-200 leading-none select-none shrink-0">08</div>
<div class="flex-1 min-w-0">
<p class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-1">Honda · 1997–2000 · 仅限JDM的Type R</p>
<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Honda Civic Type R EK9</h2>
<div class="flex flex-wrap gap-x-5 gap-y-1 mb-4 font-mono text-xs text-gray-400">
<span>发动机 <strong class="text-gray-900">B16B 1.6L VTEC 直列四缸</strong></span>
<span>功率 <strong class="text-gray-900">185马力 @ 8,200 rpm</strong></span>
<span>驱动 <strong class="text-gray-900">前驱 5速密齿比</strong></span>
<span>红线 <strong class="text-gray-900">8,600 rpm</strong></span>
</div>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/2024_Honda_Civic_Type_R%2C_front_right%2C_06-15-2024.jpg/960px-2024_Honda_Civic_Type_R%2C_front_right%2C_06-15-2024.jpg" alt="Honda Civic Type R" class="w-full aspect-video object-cover rounded my-5" loading="lazy" />
<p class="text-gray-600 leading-relaxed mb-3">第一款Civic Type R仅在日本销售，其JDM独占性使其成为小钢炮社区的圣杯。B16B发动机——发布时世界上最高转速的自然吸气量产发动机——仅凭1.6升排量就输出了185马力，完全没有任何强制进气。</p>
<p class="text-gray-600 leading-relaxed mb-3">去除隔音材料、配备密齿比变速箱、完全为赛道使用而调校，EK9确立了一款Type R应有的一切标准：激进、专注，在被推至8,600 rpm红线极限时给予驾驶者极致的回报。</p>
<div class="inline-flex items-center gap-2 mt-4 bg-red-50 border border-red-200 rounded px-3 py-2 text-sm font-medium text-red-800">★ 第一款 — 也是许多人认为最好的 — Civic Type R。</div>
</div>
</div>
</div>

>>> 经典跑车

<div class="jdm-car-entry">
<div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-10">
<div class="text-6xl sm:text-7xl font-bold text-gray-200 leading-none select-none shrink-0">09</div>
<div class="flex-1 min-w-0">
<p class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-1">Honda · 1999–2009 · 敞篷跑车</p>
<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Honda S2000</h2>
<div class="flex flex-wrap gap-x-5 gap-y-1 mb-4 font-mono text-xs text-gray-400">
<span>Engine <strong class="text-gray-900">F20C / F22C 2.0–2.2L VTEC I4</strong></span>
<span>Power <strong class="text-gray-900">240–247 hp</strong></span>
<span>Specific Output <strong class="text-gray-900">120 hp/liter (F20C)</strong></span>
<span>Redline <strong class="text-gray-900">9,000 rpm</strong></span>
</div>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/HondaS2000-004.jpg/960px-HondaS2000-004.jpg" alt="Honda S2000 roadster" class="w-full aspect-video object-cover rounded my-5" loading="lazy" />
<p class="text-gray-600 leading-relaxed mb-3"><strong>Honda S2000</strong> 的自然吸气发动机达到了每升 120 马力的升功率——这是 1999 年发布时所有量产车中最高的比输出。这一成就至今仍然令人赞叹。JDM 专属的 Type S 版本增加了空气动力学套件、更宽的轮胎和重新调校的悬架，带来更加凌厉的驾驶体验。</p>
<p class="text-gray-600 leading-relaxed mb-3">后轮驱动、近乎完美的前置中置发动机布局，以及被调校至极致平衡的底盘，使 S2000 成为那个时代 Affordable 跑车的标杆。如今，品相良好的 S2000 成交价已超过原始厂商建议零售价，成功避开了大多数跑车所经历的贬值低谷。</p>
<div class="inline-flex items-center gap-2 mt-4 bg-red-50 border border-red-200 rounded px-3 py-2 text-sm font-medium text-red-800">★ 9,000 RPM。120 hp/升。Honda 的绝对巅峰之作。</div>
</div>
</div>
</div>

<div class="jdm-car-entry">
<div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-10">
<div class="text-6xl sm:text-7xl font-bold text-gray-200 leading-none select-none shrink-0">10</div>
<div class="flex-1 min-w-0">
<p class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-1">Honda · 1995–2001 · Type R</p>
<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Honda Integra Type R (DC2)</h2>
<div class="flex flex-wrap gap-x-5 gap-y-1 mb-4 font-mono text-xs text-gray-400">
<span>Engine <strong class="text-gray-900">B18C Spec-R 1.8L VTEC I4</strong></span>
<span>Power <strong class="text-gray-900">200 hp (JDM) / 195 hp (USDM)</strong></span>
<span>Redline <strong class="text-gray-900">8,500 rpm</strong></span>
<span>Drive <strong class="text-gray-900">FWD 5-Speed</strong></span>
</div>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/2002_Honda_Integra_%28DC5%29_Special_Edition_coupe_%282015-07-24%29_01.jpg/960px-2002_Honda_Integra_%28DC5%29_Special_Edition_coupe_%282015-07-24%29_01.jpg" alt="Honda Integra Type R DC2" class="w-full aspect-video object-cover rounded my-5" loading="lazy" />
<p class="text-gray-600 leading-relaxed mb-3"><strong>DC2 Integra Type R</strong> 在发布时便打破了纽博格林前驱车圈速纪录——并保持多年。其 B18C Spec-R 发动机由手工组装，每台都刻有制造技师的签名。Honda 对 NVH 平衡和换挡精度的极致追求，使其成为前驱操控的标杆，在驾驶参与感方面至今无人超越。</p>
<div class="inline-flex items-center gap-2 mt-4 bg-red-50 border border-red-200 rounded px-3 py-2 text-sm font-medium text-red-800">★ 前驱车的巅峰之作。纽博格林纪录保持者。</div>
</div>
</div>
</div>

<div class="jdm-car-entry">
<div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-10">
<div class="text-6xl sm:text-7xl font-bold text-gray-200 leading-none select-none shrink-0">11</div>
<div class="flex-1 min-w-0">
<p class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-1">Nissan · 1989–1994 · "哥斯拉"</p>
<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Nissan Skyline GT-R R32</h2>
<div class="flex flex-wrap gap-x-5 gap-y-1 mb-4 font-mono text-xs text-gray-400">
<span>Engine <strong class="text-gray-900">RB26DETT 2.6L Twin-Turbo I6</strong></span>
<span>Power <strong class="text-gray-900">276 hp (official)</strong></span>
<span>Drive <strong class="text-gray-900">ATTESA E-TS AWD</strong></span>
<span>JTCC Record <strong class="text-gray-900">29 races, 29 wins</strong></span>
</div>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Nissan_Skyline_GT-R_R34_V_Spec_II.jpg/960px-Nissan_Skyline_GT-R_R34_V_Spec_II.jpg" alt="Nissan Skyline GT-R R32" class="w-full aspect-video object-cover rounded my-5" loading="lazy" />
<p class="text-gray-600 leading-relaxed mb-3">这辆车赢得了"哥斯拉"的绰号——<strong>R32 GT-R</strong> 以压倒性优势横扫日本房车锦标赛，以至于澳大利亚一度将其禁赛。其 ATTESA 全轮驱动系统和 Super-HICAS 四轮转向系统在 1989 年堪称真正的革命性技术。如今已符合美国进口条件，价值正在快速攀升，R32 以低于 R33/R34 继任者的价格提供了纯正的 GT-R 基因。</p>
<div class="inline-flex items-center gap-2 mt-4 bg-red-50 border border-red-200 rounded px-3 py-2 text-sm font-medium text-red-800">★ 参赛即夺冠。因太过强大而被禁赛。</div>
</div>
</div>
</div>

<div class="jdm-car-entry">
<div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-10">
<div class="text-6xl sm:text-7xl font-bold text-gray-200 leading-none select-none shrink-0">12</div>
<div class="flex-1 min-w-0">
<p class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-1">Nissan · 1999–2002 · 漂移标志</p>
<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Nissan Silvia S15 Spec-R</h2>
<div class="flex flex-wrap gap-x-5 gap-y-1 mb-4 font-mono text-xs text-gray-400">
<span>Engine <strong class="text-gray-900">SR20DET 2.0L Turbo I4</strong></span>
<span>Power <strong class="text-gray-900">250 hp</strong></span>
<span>Drive <strong class="text-gray-900">RWD 6-Speed Manual</strong></span>
<span>Market <strong class="text-gray-900">Japan-Only</strong></span>
</div>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Nissan_Silvia_S15_001.JPG/960px-Nissan_Silvia_S15_001.JPG" alt="Nissan Silvia S15 Spec-R" class="w-full aspect-video object-cover rounded my-5" loading="lazy" />
<p class="text-gray-600 leading-relaxed mb-3"><strong>S15 Silvia Spec-R</strong> 从未在日本以外地区正式销售，这使其成为当今最受追捧的 JDM 进口车型之一。Spec-R 调校下的 SR20DET 发动机从 2.0 升排量中榨取出 250 马力——通过六速 Getrag 变速箱传递至后轮。均衡、轻量化且拥有无限的改装潜力，它成为了全球职业漂移的标准用车。</p>
<div class="inline-flex items-center gap-2 mt-4 bg-red-50 border border-red-200 rounded px-3 py-2 text-sm font-medium text-red-800">★ 日本专属。250 hp。全世界最爱的漂移战车。</div>
</div>
</div>
</div>

<div class="jdm-car-entry">
<div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-10">
<div class="text-6xl sm:text-7xl font-bold text-gray-200 leading-none select-none shrink-0">13</div>
<div class="flex-1 min-w-0">
<p class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-1">Toyota · 1983–1987 · 漂移起源</p>
<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Toyota Corolla AE86 Sprinter Trueno</h2>
<div class="flex flex-wrap gap-x-5 gap-y-1 mb-4 font-mono text-xs text-gray-400">
<span>Engine <strong class="text-gray-900">4A-GE 1.6L DOHC I4</strong></span>
<span>Power <strong class="text-gray-900">128 hp</strong></span>
<span>Drive <strong class="text-gray-900">RWD 5-Speed</strong></span>
<span>Heritage <strong class="text-gray-900">Inspired GR86 / BRZ</strong></span>
</div>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/1983_Toyota_Corolla_Levin.jpg/960px-1983_Toyota_Corolla_Levin.jpg" alt="Toyota Corolla AE86 Levin" class="w-full aspect-video object-cover rounded my-5" loading="lazy" />
<p class="text-gray-600 leading-relaxed mb-3"><strong>AE86</strong> 是此后所有轻量化后驱跑车的精神始祖。土屋圭市——"漂移之王"——正是驾驶着 AE86 在日本的盘山公路上书写了自己的传奇，由此诞生了现代漂移运动。其与 Yamaha 共同开发的 4A-GE 发动机，至今仍是那个时代自然吸气 DOHC 设计的经典范例。</p>
<p class="text-gray-600 leading-relaxed mb-3">AE86 直接启发了 Toyota GR86 和 Subaru BRZ 的诞生。在动漫《<em>头文字D</em>》中作为主角座驾，它成为了将数百万人引入 JDM 文化的启蒙之车。</p>
<div class="inline-flex items-center gap-2 mt-4 bg-red-50 border border-red-200 rounded px-3 py-2 text-sm font-medium text-red-800">★ 将漂移变为赛车运动的那辆车。</div>
</div>
</div>
</div>

<div class="jdm-car-entry">
<div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-10">
<div class="text-6xl sm:text-7xl font-bold text-gray-200 leading-none select-none shrink-0">14</div>
<div class="flex-1 min-w-0">
<p class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-1">Nissan · 1989–2000 · GT 跑车</p>
<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Nissan 300ZX Twin Turbo (Z32)</h2>
<div class="flex flex-wrap gap-x-5 gap-y-1 mb-4 font-mono text-xs text-gray-400">
<span>Engine <strong class="text-gray-900">VG30DETT 3.0L Twin-Turbo V6</strong></span>
<span>Power <strong class="text-gray-900">300 hp (JDM)</strong></span>
<span>Top Speed <strong class="text-gray-900">155 mph (limited)</strong></span>
<span>0–60 <strong class="text-gray-900">~5.6 sec</strong></span>
</div>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/1996_Nissan_300ZX_2-seater_t-top%2C_front_left%2C_06-15-2025.jpg/960px-1996_Nissan_300ZX_2-seater_t-top%2C_front_left%2C_06-15-2025.jpg" alt="Nissan 300ZX Twin Turbo Z32" class="w-full aspect-video object-cover rounded my-5" loading="lazy" />
<p class="text-gray-600 leading-relaxed mb-3"><strong>Z32 300ZX Twin Turbo</strong> 荣获 1990 年<em>《Road & Track》</em>年度最佳汽车，震惊了当时所有欧洲 GT 竞争对手。其 3.0 升双涡轮增压 V6 发动机配备四轮转向和精密的主动悬架系统，让人感觉仿佛在驾驶一台来自未来的跑车。JDM 版本输出 300 马力——显著高于出口版车型的 283 马力。</p>
<div class="inline-flex items-center gap-2 mt-4 bg-red-50 border border-red-200 rounded px-3 py-2 text-sm font-medium text-red-800">★ 《Road & Track》年度最佳。一台让欧洲颜面尽失的 GT 跑车。</div>
</div>
</div>
</div>

<div class="jdm-car-entry">
<div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-10">
<div class="text-6xl sm:text-7xl font-bold text-gray-200 leading-none select-none shrink-0">15</div>
<div class="flex-1 min-w-0">
<p class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-1">Toyota · 1986–1992 · 涡轮经典</p>
<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Toyota Supra MK3 Turbo (A70)</h2>
<div class="flex flex-wrap gap-x-5 gap-y-1 mb-4 font-mono text-xs text-gray-400">
<span>Engine <strong class="text-gray-900">7M-GTE 3.0L Turbo I6</strong></span>
<span>Power <strong class="text-gray-900">230 hp</strong></span>
<span>Drive <strong class="text-gray-900">RWD</strong></span>
</div>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Toyota_Supra_%28A70%2C_pre-facelift%29_1X7A2552.jpg/960px-Toyota_Supra_%28A70%2C_pre-facelift%29_1X7A2552.jpg" alt="Toyota Supra MK3 Turbo A70" class="w-full aspect-video object-cover rounded my-5" loading="lazy" />
<p class="text-gray-600 leading-relaxed mb-3">MK3 Supra 奠定了 MK4 后来将其封神的血脉传承。JDM 涡轮增压版本的动力输出强于出口市场版本，配备翻盖大灯、修长的引擎盖，以及充满 1980 年代末奢华感的内饰。随着 MK4 价格已令许多买家望而却步，MK3 正获得越来越多收藏家的关注。</p>
<div class="inline-flex items-center gap-2 mt-4 bg-red-50 border border-red-200 rounded px-3 py-2 text-sm font-medium text-red-800">★ 2JZ 传奇的祖父。</div>
</div>
</div>
</div>

>>> 隐藏瑰宝与邪典经典

<div class="jdm-car-entry">
<div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-10">
<div class="text-6xl sm:text-7xl font-bold text-gray-200 leading-none select-none shrink-0">16</div>
<div class="flex-1 min-w-0">
<p class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-1">Mitsubishi · 1996 · 拉力血统</p>
<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Mitsubishi Lancer Evolution IV</h2>
<div class="flex flex-wrap gap-x-5 gap-y-1 mb-4 font-mono text-xs text-gray-400">
<span>Engine <strong class="text-gray-900">4G63T 2.0L Turbo I4</strong></span>
<span>Power <strong class="text-gray-900">280 hp</strong></span>
<span>Drive <strong class="text-gray-900">AWD AYC</strong></span>
</div>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/2017-04-02_Mitsubishi_Lancer_Evolution_X_MR_SST_14_%282%29.jpg/960px-2017-04-02_Mitsubishi_Lancer_Evolution_X_MR_SST_14_%282%29.jpg" alt="Mitsubishi Lancer Evolution IV" class="w-full aspect-video object-cover rounded my-5" loading="lazy" />
<p class="text-gray-600 leading-relaxed mb-3">Evo IV 是首款搭载主动偏航控制（AYC）系统的 Evolution 车型——这是一种扭矩矢量差速器，彻底改变了车辆在极限状态下的操控表现。WRC 赛事的胜利随即接踵而至。其强悍的拉力血统、出色的性能表现，以及 AYC 系统的引入，使 Evo IV 成为 Evo 家族历程中的里程碑，也是 JDM 社区中备受推崇的标志性车型。</p>
<div class="inline-flex items-center gap-2 mt-4 bg-red-50 border border-red-200 rounded px-3 py-2 text-sm font-medium text-red-800">★ 搭载 AYC 的 Evolution——从此改变了一切。</div>
</div>
</div>
</div>

<div class="jdm-car-entry">
<div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-10">
<div class="text-6xl sm:text-7xl font-bold text-gray-200 leading-none select-none shrink-0">17</div>
<div class="flex-1 min-w-0">
<p class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-1">Nissan NISMO · 1997 · 极致稀有</p>
<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Nissan Skyline GT-R NISMO 400R</h2>
<div class="flex flex-wrap gap-x-5 gap-y-1 mb-4 font-mono text-xs text-gray-400">
<span>Engine <strong class="text-gray-900">RB-X GT2 2.8L Twin-Turbo I6</strong></span>
<span>Power <strong class="text-gray-900">400 hp</strong></span>
<span>Units Made <strong class="text-gray-900">~44</strong></span>
<span>Price (1997) <strong class="text-gray-900">¥12,800,000</strong></span>
</div>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Nissan_Skyline_GT-R_R34_V_Spec_II.jpg/960px-Nissan_Skyline_GT-R_R34_V_Spec_II.jpg" alt="Nissan Skyline GT-R NISMO 400R" class="w-full aspect-video object-cover rounded my-5" loading="lazy" />
<p class="text-gray-600 leading-relaxed mb-3">NISMO 原厂打造的 R33 GT-R 赛车认证版本，搭载了扩缸至 2.8 升的 RB26DETT 发动机，输出真正的 400 马力。全球仅生产约 44 台，400R 是现存最稀有的 JDM 车型之一。有记录的实车拍卖价已超过 50 万美元——这是市场上最极端的升值案例之一。</p>
<div class="inline-flex items-center gap-2 mt-4 bg-red-50 border border-red-200 rounded px-3 py-2 text-sm font-medium text-red-800">★ 44 台。400 hp。拍卖价 50 万美元。</div>
</div>
</div>
</div>

<div class="jdm-car-entry">
<div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-10">
<div class="text-6xl sm:text-7xl font-bold text-gray-200 leading-none select-none shrink-0">18</div>
<div class="flex-1 min-w-0">
<p class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-1">Toyota · 1989–1999 · 中置引擎经典</p>
<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Toyota MR2 SW20 Turbo</h2>
<div class="flex flex-wrap gap-x-5 gap-y-1 mb-4 font-mono text-xs text-gray-400">
<span>Engine <strong class="text-gray-900">3S-GTE 2.0L Turbo I4</strong></span>
<span>Power <strong class="text-gray-900">245 hp (JDM)</strong></span>
<span>Drive <strong class="text-gray-900">Mid-Engine RWD</strong></span>
</div>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/1993ToyotaMR2Hardtop.jpg/960px-1993ToyotaMR2Hardtop.jpg" alt="Toyota MR2 SW20 Turbo" class="w-full aspect-video object-cover rounded my-5" loading="lazy" />
<p class="text-gray-600 leading-relaxed mb-3">丰田的中置引擎双座跑车以远低于法拉利的价格提供了接近法拉利的造型和操控体验。JDM版SW20 Turbo输出245马力——显著高于出口版本——其中置引擎布局赋予了它非凡的弯道平衡性。臭名昭著的"突然甩尾"特性使其在极限驾驶时极具挑战性，也为其赢得了忠实的车迷追随。</p>
<div class="inline-flex items-center gap-2 mt-4 bg-red-50 border border-red-200 rounded px-3 py-2 text-sm font-medium text-red-800">★ 中置引擎，后轮驱动。法拉利的比例，丰田的价格。</div>
</div>
</div>
</div>

<div class="jdm-car-entry">
<div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-10">
<div class="text-6xl sm:text-7xl font-bold text-gray-200 leading-none select-none shrink-0">19</div>
<div class="flex-1 min-w-0">
<p class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-1">Nissan · 1997 · JDM 睡袍猛兽</p>
<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Nissan Stagea 260RS</h2>
<div class="flex flex-wrap gap-x-5 gap-y-1 mb-4 font-mono text-xs text-gray-400">
<span>Engine <strong class="text-gray-900">RB26DETT 2.6L Twin-Turbo I6</strong></span>
<span>Power <strong class="text-gray-900">276 hp</strong></span>
<span>Drive <strong class="text-gray-900">ATTESA E-TS AWD</strong></span>
<span>Body <strong class="text-gray-900">5-Door Wagon</strong></span>
</div>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/2001-2004_NISSAN_STAGEA.jpg/960px-2001-2004_NISSAN_STAGEA.jpg" alt="Nissan Stagea 260RS wagon" class="w-full aspect-video object-cover rounded my-5" loading="lazy" />
<p class="text-gray-600 leading-relaxed mb-3">客观地说，这是有史以来最实用的GT-R——<strong>Stagea 260RS</strong>采用了来自R33 Skyline GT-R的RB26DETT发动机、ATTESA四驱系统和制动系统，并装配在实用的五门旅行车车身上。NISMO提供完整的GT-R前脸改装套件。它是现存最实用、也最出人意料地快速的旅行车。</p>
<div class="inline-flex items-center gap-2 mt-4 bg-red-50 border border-red-200 rounded px-3 py-2 text-sm font-medium text-red-800">★ GT-R发动机。旅行车车身。世上独一无二。</div>
</div>
</div>
</div>

<div class="jdm-car-entry">
<div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-10">
<div class="text-6xl sm:text-7xl font-bold text-gray-200 leading-none select-none shrink-0">20</div>
<div class="flex-1 min-w-0">
<p class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-1">Honda · 1991–1996 · K-Car 敞篷跑车</p>
<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Honda Beat</h2>
<div class="flex flex-wrap gap-x-5 gap-y-1 mb-4 font-mono text-xs text-gray-400">
<span>Engine <strong class="text-gray-900">E07A 0.66L Mid-Mounted I3</strong></span>
<span>Power <strong class="text-gray-900">64 hp</strong></span>
<span>Drive <strong class="text-gray-900">Mid-Engine RWD</strong></span>
<span>Weight <strong class="text-gray-900">1,650 lbs</strong></span>
</div>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Honda_Beat_PP1_front.jpg/960px-Honda_Beat_PP1_front.jpg" alt="Honda Beat kei roadster" class="w-full aspect-video object-cover rounded my-5" loading="lazy" />
<p class="text-gray-600 leading-relaxed mb-3">这是宗一郎本人的告别之作——由本田创始人在1991年去世前亲自批准——<strong>Honda Beat</strong>将一台660cc中置发动机装进了仅重1,650磅的微型敞篷跑车中。64马力搭配不到2,000磅的整备质量，它开起来比物理定律所允许的还要快。这是本田创始人亲自批准的最后一款车。</p>
<div class="inline-flex items-center gap-2 mt-4 bg-red-50 border border-red-200 rounded px-3 py-2 text-sm font-medium text-red-800">★ 本田宗一郎留给世界的最后礼物。</div>
</div>
</div>
</div>

<div class="jdm-car-entry">
<div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-10">
<div class="text-6xl sm:text-7xl font-bold text-gray-200 leading-none select-none shrink-0">21</div>
<div class="flex-1 min-w-0">
<p class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-1">Toyota · 1989–1999 · WRC 英雄</p>
<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Toyota Celica GT-Four (ST185/ST205)</h2>
<div class="flex flex-wrap gap-x-5 gap-y-1 mb-4 font-mono text-xs text-gray-400">
<span>Engine <strong class="text-gray-900">3S-GTE 2.0L Turbo I4</strong></span>
<span>Power <strong class="text-gray-900">255 hp (ST205)</strong></span>
<span>Drive <strong class="text-gray-900">AWD</strong></span>
<span>WRC Titles <strong class="text-gray-900">3 (1992–1994)</strong></span>
</div>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/CelicaST185GT4APuenteHills.jpg/960px-CelicaST185GT4APuenteHills.jpg" alt="Toyota Celica GT-Four ST185" class="w-full aspect-video object-cover rounded my-5" loading="lazy" />
<p class="text-gray-600 leading-relaxed mb-3">Celica GT-Four在1990年代初为丰田赢得了三个WRC制造商冠军。JDM版ST205输出255马力——是有史以来最强大的Celica——并配备了更激进的中冷器和源自拉力赛的四驱系统。ST205后来因非法限流器板被WRC取消资格，为这台本已传奇的赛车增添了更多传奇色彩。</p>
<div class="inline-flex items-center gap-2 mt-4 bg-red-50 border border-red-200 rounded px-3 py-2 text-sm font-medium text-red-800">★ 3个WRC冠军。因作弊被禁赛。依然传奇。</div>
</div>
</div>
</div>

<div class="jdm-car-entry">
<div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-10">
<div class="text-6xl sm:text-7xl font-bold text-gray-200 leading-none select-none shrink-0">22</div>
<div class="flex-1 min-w-0">
<p class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-1">Mazda · 1985–1992 · 第二代</p>
<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Mazda RX-7 FC Turbo</h2>
<div class="flex flex-wrap gap-x-5 gap-y-1 mb-4 font-mono text-xs text-gray-400">
<span>Engine <strong class="text-gray-900">13B Turbo 1.3L Twin-Rotor</strong></span>
<span>Power <strong class="text-gray-900">185–215 hp (JDM)</strong></span>
<span>Drive <strong class="text-gray-900">RWD</strong></span>
</div>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Tuned_Mazda_SAVANNA_RX-7_GT-R_%28E-FC3S%29_front.jpg/960px-Tuned_Mazda_SAVANNA_RX-7_GT-R_%28E-FC3S%29_front.jpg" alt="Mazda Savanna RX-7 FC3S" class="w-full aspect-video object-cover rounded my-5" loading="lazy" />
<p class="text-gray-600 leading-relaxed mb-3">在传奇的FD之前，还有<strong>FC</strong>——在JDM涡轮增压版本中，它是一台真正的跑车。马自达在FC底盘上的涡轮增压13B转子发动机提供了纯粹的驾驶体验：跳灯、近乎完美的平衡，以及任何活塞发动机都无法比拟的独特声浪。随着FD的价格逐渐超出预算范围，FC的收藏价值正在不断攀升。</p>
<div class="inline-flex items-center gap-2 mt-4 bg-red-50 border border-red-200 rounded px-3 py-2 text-sm font-medium text-red-800">★ FD的被低估、同样纯粹的前身。</div>
</div>
</div>
</div>

<div class="jdm-car-entry">
<div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-10">
<div class="text-6xl sm:text-7xl font-bold text-gray-200 leading-none select-none shrink-0">23</div>
<div class="flex-1 min-w-0">
<p class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-1">Toyota / Yamaha · 1967–1970 · 初代传奇</p>
<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Toyota 2000GT</h2>
<div class="flex flex-wrap gap-x-5 gap-y-1 mb-4 font-mono text-xs text-gray-400">
<span>Engine <strong class="text-gray-900">2M 2.0L DOHC I6</strong></span>
<span>Power <strong class="text-gray-900">150 hp</strong></span>
<span>Units Made <strong class="text-gray-900">351</strong></span>
<span>Value <strong class="text-gray-900">$500,000–$1,000,000+</strong></span>
</div>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/TOYOTA_2000GT.jpg/960px-TOYOTA_2000GT.jpg" alt="Toyota 2000GT classic" class="w-full aspect-video object-cover rounded my-5" loading="lazy" />
<p class="text-gray-600 leading-relaxed mb-3">这辆车证明了日本也能打造世界级跑车——<strong>Toyota 2000GT</strong>由丰田与雅马哈联合开发，在1967年东京车展首次亮相时震惊了全场。一款敞篷版出现在詹姆斯·邦德电影<em>你只能活两次</em>（1967年）中。仅生产了351辆；如今它们是有史以来拍卖价格最高的日本汽车，经常超过1,000,000美元。</p>
<div class="inline-flex items-center gap-2 mt-4 bg-red-50 border border-red-200 rounded px-3 py-2 text-sm font-medium text-red-800">★ 日本的第一辆超级跑车。詹姆斯·邦德的座驾。一百万美元。</div>
</div>
</div>
</div>

<div class="jdm-car-entry">
<div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-10">
<div class="text-6xl sm:text-7xl font-bold text-gray-200 leading-none select-none shrink-0">24</div>
<div class="flex-1 min-w-0">
<p class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-1">Nissan · 1969–1972 · 经典 GT-R</p>
<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Nissan Skyline GT-R KPGC10 "Hakosuka"</h2>
<div class="flex flex-wrap gap-x-5 gap-y-1 mb-4 font-mono text-xs text-gray-400">
<span>Engine <strong class="text-gray-900">S20 2.0L DOHC 24V I6</strong></span>
<span>Power <strong class="text-gray-900">160 hp</strong></span>
<span>Race Record <strong class="text-gray-900">50 consecutive wins in Japan</strong></span>
<span>Units Made <strong class="text-gray-900">~1,945</strong></span>
</div>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Nissan_KPGC10_Skyline_2000GT-R_%2822091110222%29.jpg/960px-Nissan_KPGC10_Skyline_2000GT-R_%2822091110222%29.jpg" alt="Nissan Skyline 2000GT-R KPGC10 Hakosuka" class="w-full aspect-video object-cover rounded my-5" loading="lazy" />
<p class="text-gray-600 leading-relaxed mb-3">初代GT-R——<strong>Hakosuka</strong>（箱型Skyline）——在1969年首秀后连续赢得50场日本赛事冠军，奠定了GT-R铭牌作为赛车传奇的地位。其由雅马哈开发的S20发动机源自日产Prince赛车项目。如今找到一台真正的KPGC10 GT-R是日本汽车收藏界最具声望的成就之一。</p>
<div class="inline-flex items-center gap-2 mt-4 bg-red-50 border border-red-200 rounded px-3 py-2 text-sm font-medium text-red-800">★ 连续50场赛事胜利。GT-R传奇的起点。</div>
</div>
</div>
</div>

<div class="jdm-car-entry">
<div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-10">
<div class="text-6xl sm:text-7xl font-bold text-gray-200 leading-none select-none shrink-0">25</div>
<div class="flex-1 min-w-0">
<p class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-1">Mazda · 1989–1997 · 世纪经典</p>
<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Mazda MX-5 Miata / Eunos Roadster (NA)</h2>
<div class="flex flex-wrap gap-x-5 gap-y-1 mb-4 font-mono text-xs text-gray-400">
<span>Engine <strong class="text-gray-900">B6-ZE / BP-ZE 1.6–1.8L I4</strong></span>
<span>Power <strong class="text-gray-900">115–131 hp</strong></span>
<span>Weight <strong class="text-gray-900">~2,100 lbs</strong></span>
<span>Production <strong class="text-gray-900">World's Best-Selling Roadster</strong></span>
</div>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Eunos.jpg/960px-Eunos.jpg" alt="Mazda MX-5 Miata NA Eunos Roadster" class="w-full aspect-video object-cover rounded my-5" loading="lazy" />
<p class="text-gray-600 leading-relaxed mb-3">JDM版本——以<strong>Eunos Roadster</strong>之名销售——配备了出口市场无法获得的真皮内饰和标配升级装备。NA Miata对汽车文化的影响是不可估量的：它一手复兴了在1970年代消亡的小型经济型敞篷跑车细分市场，其"轻量化胜过纯粹马力"的理念影响了此后几十年间开发的每一款跑车。</p>
<p class="text-gray-600 leading-relaxed mb-3">它是历史上最畅销的敞篷跑车、世界上参赛最多的量产车，在许多方面也是无论价格如何都最纯粹地表达驾驶乐趣的车型。</p>
<div class="inline-flex items-center gap-2 mt-4 bg-red-50 border border-red-200 rounded px-3 py-2 text-sm font-medium text-red-800">★ 过去40年最重要的跑车。</div>
</div>
</div>
</div>

<div class="jdm-buying-guide">
<h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">JDM购买指南：您需要了解的一切</h2>
<p class="text-gray-500 leading-relaxed mb-6">进口一辆JDM汽车远不仅仅是找到合适的车型。以下是每位买家在向海外汇款之前都应该了解的事项。</p>
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
<div class="bg-gray-50 border border-gray-100 rounded-lg p-5">
<h4 class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-2">25年进口法规</h4>
<p class="text-sm text-gray-600 leading-relaxed">在美国，任何25年以上的车辆均可免EPA/NHTSA合规要求进口（49 CFR 591.5）。请仔细核对制造日期——而非车型年份。</p>
</div>
<div class="bg-gray-50 border border-gray-100 rounded-lg p-5">
<h4 class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-2">里程与文件</h4>
<p class="text-sm text-gray-600 leading-relaxed">日本拍卖检验单（3.5分以上为良好，4分以上为优秀）和日文保养记录是您主要的质量参考。里程表欺诈不常见但确实存在。</p>
</div>
<div class="bg-gray-50 border border-gray-100 rounded-lg p-5">
<h4 class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-2">锈蚀是最大敌人</h4>
<p class="text-sm text-gray-600 leading-relaxed">日本的沿海气候和道路撒盐意味着锈蚀检查至关重要。请彻底检查底盘纵梁、轮拱和底板——或者付费进行购车前检查。</p>
</div>
<div class="bg-gray-50 border border-gray-100 rounded-lg p-5">
<h4 class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-2">运输与关税</h4>
<p class="text-sm text-gray-600 leading-relaxed">请预算滚装或集装箱运输费用（1,500–4,000美元）、美国海关关税（申报价值的2.5%）、港口费用和州注册费。总到岸成本通常比购买价格高15–20%。</p>
</div>
<div class="bg-gray-50 border border-gray-100 rounded-lg p-5">
<h4 class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-2">零件供应</h4>
<p class="text-sm text-gray-600 leading-relaxed">主流JDM车型（Skyline、Supra、S15、Evo）通过专业经销商有充足的零件供应。较冷门的车型可能需要直接从日本采购。</p>
</div>
<div class="bg-gray-50 border border-gray-100 rounded-lg p-5">
<h4 class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-2">价值走势</h4>
<p class="text-sm text-gray-600 leading-relaxed">标志性车型（R34、Supra MK4、NSX-R、22B）在过去十年中升值了300–800%。目前最佳入手点是R32、FC RX-7和S13 Silvia——它们都刚刚符合进口资格。</p>
</div>
</div>
</div>

<div class="jdm-faq">
<h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">常见问题解答</h2>
<div class="border-b border-gray-100 py-5">
<p class="font-semibold text-gray-900 mb-2">JDM代表什么？</p>
<p class="text-sm text-gray-600 leading-relaxed">JDM代表日本国内市场（Japanese Domestic Market）——指的是按照日本规格制造、在日本国内销售的车辆。这些车型通常与同款的出口版本在规格、配置等级和功率输出上有所不同。</p>
</div>
<div class="border-b border-gray-100 py-5">
<p class="font-semibold text-gray-900 mb-2">哪款JDM车在2025年最有投资潜力？</p>
<p class="text-sm text-gray-600 leading-relaxed">Nissan Skyline GT-R R34和Toyota Supra MK4已经稳稳进入收藏品行列。对于寻求具有升值潜力入手点的买家来说，R32 GT-R、Honda S2000和Mazda RX-7 FC经常被进口商认为相对于其历史意义被低估了。</p>
</div>
<div class="border-b border-gray-100 py-5">
<p class="font-semibold text-gray-900 mb-2">哪些JDM车现在可以合法进口到美国？</p>
<p class="text-sm text-gray-600 leading-relaxed">截至2025年，任何在2000年或之前制造的车辆都有资格根据25年法规进口。这包括Nissan Skyline R34 GT-R（2002年款仍需等到2027年才符合资格）、Honda S2000（1999–2009年，早期型号已符合资格）以及所有Evo I至VI车型。该法规每年推进一年。</p>
</div>
<div class="border-b border-gray-100 py-5">
<p class="font-semibold text-gray-900 mb-2">为什么有些JDM车从未在日本以外销售？</p>
<p class="text-sm text-gray-600 leading-relaxed">有几个原因：JDM专属车型产量较低，出口认证不具备成本效益；有些是专门针对日本道路或条件进行性能调校的；另一些则受到日本君子协定的限制，将宣传功率上限设为276马力（这一上限使得在某些市场的出口销售变得棘手）；还有一些，如Civic Type R EK9，被认为太过专注而不适合更广泛的市场口味。</p>
</div>
<div class="border-b border-gray-100 py-5">
<p class="font-semibold text-gray-900 mb-2">最有价值的JDM车是什么？</p>
<p class="text-sm text-gray-600 leading-relaxed">Toyota 2000GT保持着JDM最高拍卖价格纪录，最精美的样本超过1,000,000美元。在现代JDM车中，Nissan Skyline GT-R NISMO 400R经常达到500,000美元以上，其次是Subaru Impreza 22B STi，完美状态下的样本可达200,000–300,000美元以上。</p>
</div>
<div class="border-b border-gray-100 py-5">
<p class="font-semibold text-gray-900 mb-2">最适合首次购买者的JDM车是什么？</p>
<p class="text-sm text-gray-600 leading-relaxed">Mazda MX-5 Miata NA / Eunos Roadster提供了价格亲民、零件充足、可靠性高和纯粹驾驶乐趣的最佳组合。对于预算有限但追求涡轮增压体验的人来说，早期的Nissan Silvia（S13、S14）和Honda Civic以可负担的价格提供了真正的JDM性格。</p>
</div>
</div>

## 结语

从**Nissan Skyline GT-R R34**到**Mazda MX-5 Miata**，这份榜单上的每一款车都代表了一个时刻——日本工程师拒绝按常规出牌的时刻。他们打造的汽车比同价位的欧洲或美国产品更轻、更聪明、更有改装潜力、更令人激动。JDM时代不仅仅是汽车历史中的一个篇章——它是一场革命，重新塑造了全世界对性能车的认知。

信息汇编自制造商规格、JDMBUYSELL、JDMDrives、TopSpeed、Drifted、VividRacing和JDM Sport Classics。所有价格均为市场估计，可能会有变动。进口前请务必核实车辆资格。`,
      en: `The phrase **JDM** — Japanese Domestic Market — refers to vehicles manufactured specifically for sale inside Japan. For decades, Japanese automakers produced their most potent, most exotic, and most technically adventurous machines exclusively for domestic buyers, leaving the rest of the world to watch and wish.

Thanks to the **25-year import rule**, many of these legends are now legal to import into the United States, opening a floodgate of demand that has pushed values into the stratosphere. Whether you're a seasoned collector or a first-time buyer trying to decode the JDM scene, this authoritative guide ranks the 25 greatest Japanese Domestic Market cars ever built — judged on engineering innovation, motorsport heritage, cultural impact, and driving purity.

## What Is a JDM Car?

JDM stands for *Japanese Domestic Market*. These are cars built to Japanese government specifications — right-hand drive, tuned for Japanese roads, and often featuring performance variants or trims that were never exported. The 25-year rule (49 CFR 591.5) allows U.S. importation of any vehicle manufactured 25+ years ago regardless of original compliance, making iconic JDM cars accessible to American collectors.

>>> The Holy Trinity — Absolute Legends

<div class="jdm-car-entry">
<div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-10">
<div class="text-6xl sm:text-7xl font-bold text-gray-200 leading-none select-none shrink-0">01</div>
<div class="flex-1 min-w-0">
<p class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-1">Nissan · 1999–2002 · Icon</p>
<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Nissan Skyline GT-R R34</h2>
<div class="flex flex-wrap gap-x-5 gap-y-1 mb-4 font-mono text-xs text-gray-400">
<span>Engine <strong class="text-gray-900">RB26DETT 2.6L Twin-Turbo I6</strong></span>
<span>Power <strong class="text-gray-900">276 hp (factory — widely exceeded)</strong></span>
<span>Drive <strong class="text-gray-900">ATTESA E-TS AWD</strong></span>
<span>0–60 <strong class="text-gray-900">~4.9 sec</strong></span>
<span>Units Made <strong class="text-gray-900">~11,500</strong></span>
</div>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Nissan_Skyline_GT-R_R34_V_Spec_II.jpg/960px-Nissan_Skyline_GT-R_R34_V_Spec_II.jpg" alt="Nissan Skyline GT-R R34 V-Spec II" class="w-full aspect-video object-cover rounded my-5" loading="lazy" />
<p class="text-gray-600 leading-relaxed mb-3">No JDM list begins anywhere else. The <strong>R34 Nissan Skyline GT-R</strong> is the undisputed king — a car so dominant that the Japanese Touring Car Championship ultimately had to impose restrictions just to give other manufacturers a chance. Nicknamed <em>"Godzilla"</em>, its RB26DETT twin-turbocharged inline-six is one of the most celebrated engines in automotive history: endlessly tunable, ferociously torquey, and utterly bulletproof with proper maintenance.</p>
<p class="text-gray-600 leading-relaxed mb-3">The ATTESA E-TS Pro all-wheel-drive system, Super-HICAS four-wheel steering, and a multifunction display borrowed from GT racing made the R34 feel decades ahead of the curve. With only around 11,500 ever produced, well-preserved examples now command $200,000+ at auction — and climbing. Paul Walker's famous Bayside Blue R34 in <em>2 Fast 2 Furious</em> cemented its global pop-culture immortality.</p>
<div class="inline-flex items-center gap-2 mt-4 bg-red-50 border border-red-200 rounded px-3 py-2 text-sm font-medium text-red-800">★ The Greatest JDM Car Ever Built — Full Stop</div>
</div>
</div>
</div>

<div class="jdm-car-entry">
<div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-10">
<div class="text-6xl sm:text-7xl font-bold text-gray-200 leading-none select-none shrink-0">02</div>
<div class="flex-1 min-w-0">
<p class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-1">Toyota · 1993–2002 · Legend</p>
<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Toyota Supra MK4 (A80)</h2>
<div class="flex flex-wrap gap-x-5 gap-y-1 mb-4 font-mono text-xs text-gray-400">
<span>Engine <strong class="text-gray-900">2JZ-GTE 3.0L Twin-Turbo I6</strong></span>
<span>Power <strong class="text-gray-900">320 hp (JDM) / 276 hp export</strong></span>
<span>Drive <strong class="text-gray-900">RWD 6-Speed Manual</strong></span>
<span>0–60 <strong class="text-gray-900">~4.6 sec</strong></span>
<span>Top Speed <strong class="text-gray-900">180 mph (limited)</strong></span>
</div>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Toyota_GR_Supra_%2851984008283crop%29.jpg/960px-Toyota_GR_Supra_%2851984008283crop%29.jpg" alt="Toyota Supra MK4 A80" class="w-full aspect-video object-cover rounded my-5" loading="lazy" />
<p class="text-gray-600 leading-relaxed mb-3">The <strong>Toyota Supra MK4</strong>'s 2JZ-GTE engine is arguably the most famous straight-six in history. Notoriously overbuilt — Toyota engineers designed it to handle 1,000+ horsepower with internal modifications — it became the holy grail of the tuner community. The JDM-spec car produced 320 hp from the factory, versus the 276 hp delivered to export markets, reflecting Japan's gentleman's agreement horsepower cap.</p>
<p class="text-gray-600 leading-relaxed mb-3">Brian O'Conner's orange Supra in <em>The Fast and the Furious</em> made it the car of an entire generation. Genuine manual-transmission Supra MK4s in good condition now sell for $100,000–$200,000, driven by scarcity and an almost religious following.</p>
<div class="inline-flex items-center gap-2 mt-4 bg-red-50 border border-red-200 rounded px-3 py-2 text-sm font-medium text-red-800">★ The 2JZ-GTE Defined an Entire Tuner Generation</div>
</div>
</div>
</div>

<div class="jdm-car-entry">
<div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-10">
<div class="text-6xl sm:text-7xl font-bold text-gray-200 leading-none select-none shrink-0">03</div>
<div class="flex-1 min-w-0">
<p class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-1">Mazda · 1992–2002 · Driver's Car</p>
<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Mazda RX-7 FD</h2>
<div class="flex flex-wrap gap-x-5 gap-y-1 mb-4 font-mono text-xs text-gray-400">
<span>Engine <strong class="text-gray-900">13B-REW 1.3L Twin-Rotor Turbo</strong></span>
<span>Power <strong class="text-gray-900">252–280 hp (JDM)</strong></span>
<span>Weight <strong class="text-gray-900">~2,800 lbs</strong></span>
<span>0–60 <strong class="text-gray-900">~5.2 sec</strong></span>
<span>Balance <strong class="text-gray-900">50/50 F/R</strong></span>
</div>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/1994_Mazda_RX-7_R2_in_Vintage_Red%2C_front_left_%28Lime_Rock%29.jpg/960px-1994_Mazda_RX-7_R2_in_Vintage_Red%2C_front_left_%28Lime_Rock%29.jpg" alt="Mazda RX-7 FD in Vintage Red" class="w-full aspect-video object-cover rounded my-5" loading="lazy" />
<p class="text-gray-600 leading-relaxed mb-3">For pure driving art, nothing in the JDM canon matches the <strong>Mazda RX-7 FD</strong>. Its 13B-REW twin-turbo rotary engine was positioned <em>behind</em> the front axle, achieving a near-perfect 50/50 weight distribution. The result is a car that rotates through corners with supernatural balance, weighing under 2,900 lbs despite twin sequential turbos. <em>Car and Driver</em> named it to their Ten Best list five consecutive years.</p>
<p class="text-gray-600 leading-relaxed mb-3">The rotary engine's defining characteristic — a high-revving, smooth power delivery that responds brilliantly to modification — made it the weapon of choice for the drifting and motorsport community. Han's RX-7 Veilside in <em>Tokyo Drift</em> immortalized it for a new generation.</p>
<div class="inline-flex items-center gap-2 mt-4 bg-red-50 border border-red-200 rounded px-3 py-2 text-sm font-medium text-red-800">★ The Most Balanced Chassis in JDM History</div>
</div>
</div>
</div>

>>> Japanese Supercars

<div class="jdm-car-entry">
<div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-10">
<div class="text-6xl sm:text-7xl font-bold text-gray-200 leading-none select-none shrink-0">04</div>
<div class="flex-1 min-w-0">
<p class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-1">Honda · 1990–2005 · Supercar</p>
<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Honda NSX (NA1/NA2)</h2>
<div class="flex flex-wrap gap-x-5 gap-y-1 mb-4 font-mono text-xs text-gray-400">
<span>Engine <strong class="text-gray-900">C30A / C32B 3.0–3.2L VTEC V6</strong></span>
<span>Power <strong class="text-gray-900">270–290 hp</strong></span>
<span>Drive <strong class="text-gray-900">Mid-Engine RWD</strong></span>
<span>0–60 <strong class="text-gray-900">~5.7 sec</strong></span>
<span>Top Speed <strong class="text-gray-900">168 mph</strong></span>
</div>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/AcuraNSX-05-cropped.jpg/960px-AcuraNSX-05-cropped.jpg" alt="Honda NSX NA1 supercar" class="w-full aspect-video object-cover rounded my-5" loading="lazy" />
<p class="text-gray-600 leading-relaxed mb-3">Honda set out to build a supercar that matched Ferrari in performance but could be driven daily without drama — and they succeeded. The <strong>Honda NSX</strong>, developed with input from Formula 1 legend Ayrton Senna, featured an all-aluminum monocoque chassis, a mid-mounted VTEC V6 with an 8,000 rpm redline, and titanium connecting rods that were unprecedented in a production car.</p>
<p class="text-gray-600 leading-relaxed mb-3">At launch in 1990, it stunned Ferrari and Porsche engineers who bought early examples for teardown analysis. The NSX-R variant, built with carbon fiber and stripped of sound deadening, became a benchmark for driver focus. Values have appreciated strongly — clean NSX-Rs now trade at $200,000+.</p>
<div class="inline-flex items-center gap-2 mt-4 bg-red-50 border border-red-200 rounded px-3 py-2 text-sm font-medium text-red-800">★ The First "Everyday Supercar" — Ayrton Senna Approved</div>
</div>
</div>
</div>

<div class="jdm-car-entry">
<div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-10">
<div class="text-6xl sm:text-7xl font-bold text-gray-200 leading-none select-none shrink-0">05</div>
<div class="flex-1 min-w-0">
<p class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-1">Lexus · 2010–2012 · Halo Car</p>
<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Lexus LFA</h2>
<div class="flex flex-wrap gap-x-5 gap-y-1 mb-4 font-mono text-xs text-gray-400">
<span>Engine <strong class="text-gray-900">1LR-GUE 4.8L NA V10</strong></span>
<span>Power <strong class="text-gray-900">552 hp @ 8,700 rpm</strong></span>
<span>Redline <strong class="text-gray-900">9,000 rpm</strong></span>
<span>0–60 <strong class="text-gray-900">3.7 sec</strong></span>
<span>Units Made <strong class="text-gray-900">500</strong></span>
</div>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Lexus_LFA_001.JPG/960px-Lexus_LFA_001.JPG" alt="Lexus LFA V10 supercar" class="w-full aspect-video object-cover rounded my-5" loading="lazy" />
<p class="text-gray-600 leading-relaxed mb-3">The <strong>Lexus LFA</strong> is what happens when a manufacturer spends a decade perfecting a halo car without any financial pressure. Its 4.8-liter naturally aspirated V10 revs to 9,000 rpm with an exhaust note so singular that a digital tachometer was required — analog needles couldn't move fast enough to track the engine's acceleration response.</p>
<p class="text-gray-600 leading-relaxed mb-3">Built with carbon fiber reinforced polymer for 65% of its body, the LFA embodies Japanese craftsmanship at its absolute peak. Only 500 were ever built. Today they sell for $900,000+. It was a financial loss for Lexus — and one of the greatest cars ever made.</p>
<div class="inline-flex items-center gap-2 mt-4 bg-red-50 border border-red-200 rounded px-3 py-2 text-sm font-medium text-red-800">★ 500 Units. One of the Greatest V10 Sounds Ever Made.</div>
</div>
</div>
</div>

>>> Rally Legends & Homologation Specials

<div class="jdm-car-entry">
<div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-10">
<div class="text-6xl sm:text-7xl font-bold text-gray-200 leading-none select-none shrink-0">06</div>
<div class="flex-1 min-w-0">
<p class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-1">Mitsubishi · 1999 · Rally Special</p>
<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Mitsubishi Lancer Evolution VI T.M. Edition</h2>
<div class="flex flex-wrap gap-x-5 gap-y-1 mb-4 font-mono text-xs text-gray-400">
<span>Engine <strong class="text-gray-900">4G63T 2.0L Turbo I4</strong></span>
<span>Power <strong class="text-gray-900">276 hp (underrated)</strong></span>
<span>Drive <strong class="text-gray-900">AWD ACD/AYC</strong></span>
<span>Production <strong class="text-gray-900">Limited Run</strong></span>
</div>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/2017-04-02_Mitsubishi_Lancer_Evolution_X_MR_SST_14_%282%29.jpg/960px-2017-04-02_Mitsubishi_Lancer_Evolution_X_MR_SST_14_%282%29.jpg" alt="Mitsubishi Lancer Evolution" class="w-full aspect-video object-cover rounded my-5" loading="lazy" />
<p class="text-gray-600 leading-relaxed mb-3">The <strong>Lancer Evolution VI Tommi Mäkinen Edition</strong> — named for the Finnish WRC champion who delivered Mitsubishi four consecutive rally world titles — represents the peak of the Evo lineage. Tighter suspension, a freer-flowing exhaust, titanium turbo housing, and subtle aero tweaks made it the most focused Evo built to that point.</p>
<p class="text-gray-600 leading-relaxed mb-3">Every generation of the Lancer Evolution (I through X) shared the same core recipe: turbocharged 2.0-liter inline-four, all-wheel drive, and a boxy, functional body designed to homologate rally parts. No Evo ever embodied that formula more faithfully than the VI TME.</p>
<div class="inline-flex items-center gap-2 mt-4 bg-red-50 border border-red-200 rounded px-3 py-2 text-sm font-medium text-red-800">★ 4 WRC Titles. Zero Compromise.</div>
</div>
</div>
</div>

<div class="jdm-car-entry">
<div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-10">
<div class="text-6xl sm:text-7xl font-bold text-gray-200 leading-none select-none shrink-0">07</div>
<div class="flex-1 min-w-0">
<p class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-1">Subaru · 1998 · Homologation Special</p>
<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Subaru Impreza 22B STi</h2>
<div class="flex flex-wrap gap-x-5 gap-y-1 mb-4 font-mono text-xs text-gray-400">
<span>Engine <strong class="text-gray-900">EJ22 2.2L Turbo Flat-4</strong></span>
<span>Power <strong class="text-gray-900">276 hp (factory)</strong></span>
<span>Units Made <strong class="text-gray-900">424</strong></span>
<span>Body <strong class="text-gray-900">Wide-Body 2-Door</strong></span>
</div>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/2011_Subaru_Impreza_WRX_STI_sedan_front_--_2011_DC.jpg/960px-2011_Subaru_Impreza_WRX_STI_sedan_front_--_2011_DC.jpg" alt="Subaru Impreza WRX STI" class="w-full aspect-video object-cover rounded my-5" loading="lazy" />
<p class="text-gray-600 leading-relaxed mb-3">Built to celebrate Subaru's three consecutive WRC constructors' championships, the <strong>22B STi</strong> is one of the rarest and most desirable JDM cars in existence. Only 424 were produced — 400 for Japan, 24 for other markets. The enlarged 2.2-liter flat-four and wide-body kit derived directly from the WRC car, giving it genuinely hardcore rally-bred performance.</p>
<p class="text-gray-600 leading-relaxed mb-3">Low-mileage examples have sold at auction for over $200,000 USD, an almost unthinkable appreciation for a Subaru. The 22B has become the benchmark collector car of the late 1990s JDM era.</p>
<div class="inline-flex items-center gap-2 mt-4 bg-red-50 border border-red-200 rounded px-3 py-2 text-sm font-medium text-red-800">★ 424 Built. Every Single One Is Now a Six-Figure Car.</div>
</div>
</div>
</div>

<div class="jdm-car-entry">
<div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-10">
<div class="text-6xl sm:text-7xl font-bold text-gray-200 leading-none select-none shrink-0">08</div>
<div class="flex-1 min-w-0">
<p class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-1">Honda · 1997–2000 · JDM-Only Type R</p>
<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Honda Civic Type R EK9</h2>
<div class="flex flex-wrap gap-x-5 gap-y-1 mb-4 font-mono text-xs text-gray-400">
<span>Engine <strong class="text-gray-900">B16B 1.6L VTEC I4</strong></span>
<span>Power <strong class="text-gray-900">185 hp @ 8,200 rpm</strong></span>
<span>Drive <strong class="text-gray-900">FWD 5-Speed Close-Ratio</strong></span>
<span>Redline <strong class="text-gray-900">8,600 rpm</strong></span>
</div>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/2024_Honda_Civic_Type_R%2C_front_right%2C_06-15-2024.jpg/960px-2024_Honda_Civic_Type_R%2C_front_right%2C_06-15-2024.jpg" alt="Honda Civic Type R" class="w-full aspect-video object-cover rounded my-5" loading="lazy" />
<p class="text-gray-600 leading-relaxed mb-3">The first-ever Civic Type R was sold only in Japan, and its JDM exclusivity made it the holy grail of the hot-hatch community. The B16B engine — the highest-revving naturally aspirated production engine in the world at launch — produced 185 hp from just 1.6 liters, entirely without forced induction.</p>
<p class="text-gray-600 leading-relaxed mb-3">Stripped of sound deadening, equipped with a close-ratio gearbox, and tuned for track use above all else, the EK9 set the template for everything a Type R should be: aggressive, focused, and utterly rewarding when pushed to its 8,600 rpm limit.</p>
<div class="inline-flex items-center gap-2 mt-4 bg-red-50 border border-red-200 rounded px-3 py-2 text-sm font-medium text-red-800">★ The First — and Many Say the Best — Civic Type R.</div>
</div>
</div>
</div>

>>> Sports Car Classics

<div class="jdm-car-entry">
<div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-10">
<div class="text-6xl sm:text-7xl font-bold text-gray-200 leading-none select-none shrink-0">09</div>
<div class="flex-1 min-w-0">
<p class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-1">Honda · 1999–2009 · Roadster</p>
<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Honda S2000</h2>
<div class="flex flex-wrap gap-x-5 gap-y-1 mb-4 font-mono text-xs text-gray-400">
<span>Engine <strong class="text-gray-900">F20C / F22C 2.0–2.2L VTEC I4</strong></span>
<span>Power <strong class="text-gray-900">240–247 hp</strong></span>
<span>Specific Output <strong class="text-gray-900">120 hp/liter (F20C)</strong></span>
<span>Redline <strong class="text-gray-900">9,000 rpm</strong></span>
</div>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/HondaS2000-004.jpg/960px-HondaS2000-004.jpg" alt="Honda S2000 roadster" class="w-full aspect-video object-cover rounded my-5" loading="lazy" />
<p class="text-gray-600 leading-relaxed mb-3">The <strong>Honda S2000</strong> produced 120 horsepower per liter from a naturally aspirated engine — the highest specific output of any production car at launch in 1999. That achievement remains remarkable to this day. The JDM-exclusive Type S variant added an aero body kit, larger tires, and revised suspension for an even sharper driving experience.</p>
<p class="text-gray-600 leading-relaxed mb-3">Rear-wheel drive, a near-perfect front-mid engine layout, and a chassis balanced to a razor's edge made the S2000 the benchmark affordable sports car of its era. Good examples now trade above their original MSRP, having largely avoided the depreciation valley most sports cars endure.</p>
<div class="inline-flex items-center gap-2 mt-4 bg-red-50 border border-red-200 rounded px-3 py-2 text-sm font-medium text-red-800">★ 9,000 RPM. 120 hp/liter. Honda at Its Absolute Peak.</div>
</div>
</div>
</div>

<div class="jdm-car-entry">
<div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-10">
<div class="text-6xl sm:text-7xl font-bold text-gray-200 leading-none select-none shrink-0">10</div>
<div class="flex-1 min-w-0">
<p class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-1">Honda · 1995–2001 · Type R</p>
<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Honda Integra Type R (DC2)</h2>
<div class="flex flex-wrap gap-x-5 gap-y-1 mb-4 font-mono text-xs text-gray-400">
<span>Engine <strong class="text-gray-900">B18C Spec-R 1.8L VTEC I4</strong></span>
<span>Power <strong class="text-gray-900">200 hp (JDM) / 195 hp (USDM)</strong></span>
<span>Redline <strong class="text-gray-900">8,500 rpm</strong></span>
<span>Drive <strong class="text-gray-900">FWD 5-Speed</strong></span>
</div>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/2002_Honda_Integra_%28DC5%29_Special_Edition_coupe_%282015-07-24%29_01.jpg/960px-2002_Honda_Integra_%28DC5%29_Special_Edition_coupe_%282015-07-24%29_01.jpg" alt="Honda Integra Type R DC2" class="w-full aspect-video object-cover rounded my-5" loading="lazy" />
<p class="text-gray-600 leading-relaxed mb-3">The <strong>DC2 Integra Type R</strong> set the Nürburgring lap record for front-wheel drive cars when it launched — and held it for years. Its B18C Spec-R engine was hand-assembled, with each unit signed by the technician who built it. Honda's relentless attention to NVH balance and rev-match precision made it a front-wheel drive handling benchmark that still hasn't been equaled for driver engagement.</p>
<div class="inline-flex items-center gap-2 mt-4 bg-red-50 border border-red-200 rounded px-3 py-2 text-sm font-medium text-red-800">★ FWD Perfected. The Nürburgring Record Holder.</div>
</div>
</div>
</div>

<div class="jdm-car-entry">
<div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-10">
<div class="text-6xl sm:text-7xl font-bold text-gray-200 leading-none select-none shrink-0">11</div>
<div class="flex-1 min-w-0">
<p class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-1">Nissan · 1989–1994 · "Godzilla"</p>
<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Nissan Skyline GT-R R32</h2>
<div class="flex flex-wrap gap-x-5 gap-y-1 mb-4 font-mono text-xs text-gray-400">
<span>Engine <strong class="text-gray-900">RB26DETT 2.6L Twin-Turbo I6</strong></span>
<span>Power <strong class="text-gray-900">276 hp (official)</strong></span>
<span>Drive <strong class="text-gray-900">ATTESA E-TS AWD</strong></span>
<span>JTCC Record <strong class="text-gray-900">29 races, 29 wins</strong></span>
</div>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Nissan_Skyline_GT-R_R34_V_Spec_II.jpg/960px-Nissan_Skyline_GT-R_R34_V_Spec_II.jpg" alt="Nissan Skyline GT-R R32" class="w-full aspect-video object-cover rounded my-5" loading="lazy" />
<p class="text-gray-600 leading-relaxed mb-3">The car that earned the Godzilla nickname — the <strong>R32 GT-R</strong> obliterated the Japanese Touring Car Championship so completely that Australia temporarily banned it. Its ATTESA all-wheel drive and Super-HICAS four-wheel steering were genuinely revolutionary for 1989. Now eligible for U.S. import and rapidly appreciating in value, the R32 offers genuine GT-R DNA at a lower price point than its R33/R34 successors.</p>
<div class="inline-flex items-center gap-2 mt-4 bg-red-50 border border-red-200 rounded px-3 py-2 text-sm font-medium text-red-800">★ Won Every Race It Entered. Banned for Being Too Good.</div>
</div>
</div>
</div>

<div class="jdm-car-entry">
<div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-10">
<div class="text-6xl sm:text-7xl font-bold text-gray-200 leading-none select-none shrink-0">12</div>
<div class="flex-1 min-w-0">
<p class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-1">Nissan · 1999–2002 · Drift Icon</p>
<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Nissan Silvia S15 Spec-R</h2>
<div class="flex flex-wrap gap-x-5 gap-y-1 mb-4 font-mono text-xs text-gray-400">
<span>Engine <strong class="text-gray-900">SR20DET 2.0L Turbo I4</strong></span>
<span>Power <strong class="text-gray-900">250 hp</strong></span>
<span>Drive <strong class="text-gray-900">RWD 6-Speed Manual</strong></span>
<span>Market <strong class="text-gray-900">Japan-Only</strong></span>
</div>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Nissan_Silvia_S15_001.JPG/960px-Nissan_Silvia_S15_001.JPG" alt="Nissan Silvia S15 Spec-R" class="w-full aspect-video object-cover rounded my-5" loading="lazy" />
<p class="text-gray-600 leading-relaxed mb-3">The <strong>S15 Silvia Spec-R</strong> was never officially sold outside Japan, making it one of the most coveted JDM imports of the current era. The SR20DET in Spec-R tune pushed 250 hp from 2.0 liters — through a six-speed Getrag gearbox to the rear wheels. Balanced, lightweight, and endlessly tunable, it became the global standard for professional drifting.</p>
<div class="inline-flex items-center gap-2 mt-4 bg-red-50 border border-red-200 rounded px-3 py-2 text-sm font-medium text-red-800">★ Japan-Only. 250 hp. The World's Favourite Drift Car.</div>
</div>
</div>
</div>

<div class="jdm-car-entry">
<div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-10">
<div class="text-6xl sm:text-7xl font-bold text-gray-200 leading-none select-none shrink-0">13</div>
<div class="flex-1 min-w-0">
<p class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-1">Toyota · 1983–1987 · Drift Origin</p>
<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Toyota Corolla AE86 Sprinter Trueno</h2>
<div class="flex flex-wrap gap-x-5 gap-y-1 mb-4 font-mono text-xs text-gray-400">
<span>Engine <strong class="text-gray-900">4A-GE 1.6L DOHC I4</strong></span>
<span>Power <strong class="text-gray-900">128 hp</strong></span>
<span>Drive <strong class="text-gray-900">RWD 5-Speed</strong></span>
<span>Heritage <strong class="text-gray-900">Inspired GR86 / BRZ</strong></span>
</div>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/1983_Toyota_Corolla_Levin.jpg/960px-1983_Toyota_Corolla_Levin.jpg" alt="Toyota Corolla AE86 Levin" class="w-full aspect-video object-cover rounded my-5" loading="lazy" />
<p class="text-gray-600 leading-relaxed mb-3">The <strong>AE86</strong> is the spiritual ancestor of every lightweight rear-wheel-drive sports car that followed. Keiichi Tsuchiya — the "Drift King" — built his entire legend driving one on Japanese mountain passes, giving birth to the art of modern drifting. Its 4A-GE engine, developed with Yamaha, remains a masterclass in naturally aspirated DOHC design for its era.</p>
<p class="text-gray-600 leading-relaxed mb-3">The AE86 directly inspired the Toyota GR86 and Subaru BRZ. In anime form, as the hero car of <em>Initial D</em>, it became the vehicle that introduced millions to JDM culture.</p>
<div class="inline-flex items-center gap-2 mt-4 bg-red-50 border border-red-200 rounded px-3 py-2 text-sm font-medium text-red-800">★ The Car That Invented Drifting as a Motorsport.</div>
</div>
</div>
</div>

<div class="jdm-car-entry">
<div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-10">
<div class="text-6xl sm:text-7xl font-bold text-gray-200 leading-none select-none shrink-0">14</div>
<div class="flex-1 min-w-0">
<p class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-1">Nissan · 1989–2000 · Grand Tourer</p>
<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Nissan 300ZX Twin Turbo (Z32)</h2>
<div class="flex flex-wrap gap-x-5 gap-y-1 mb-4 font-mono text-xs text-gray-400">
<span>Engine <strong class="text-gray-900">VG30DETT 3.0L Twin-Turbo V6</strong></span>
<span>Power <strong class="text-gray-900">300 hp (JDM)</strong></span>
<span>Top Speed <strong class="text-gray-900">155 mph (limited)</strong></span>
<span>0–60 <strong class="text-gray-900">~5.6 sec</strong></span>
</div>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/1996_Nissan_300ZX_2-seater_t-top%2C_front_left%2C_06-15-2025.jpg/960px-1996_Nissan_300ZX_2-seater_t-top%2C_front_left%2C_06-15-2025.jpg" alt="Nissan 300ZX Twin Turbo Z32" class="w-full aspect-video object-cover rounded my-5" loading="lazy" />
<p class="text-gray-600 leading-relaxed mb-3">The <strong>Z32 300ZX Twin Turbo</strong> was <em>Road & Track's</em> Car of the Year in 1990 and stunned every European GT rival of the era. Its 3.0-liter twin-turbo V6 with four-wheel steering and sophisticated active suspension made it feel like a sports car from the future. The JDM variant produced 300 hp — notably above the export market's 283 hp.</p>
<div class="inline-flex items-center gap-2 mt-4 bg-red-50 border border-red-200 rounded px-3 py-2 text-sm font-medium text-red-800">★ Road & Track Car of the Year. A Grand Tourer That Embarrassed Europe.</div>
</div>
</div>
</div>

<div class="jdm-car-entry">
<div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-10">
<div class="text-6xl sm:text-7xl font-bold text-gray-200 leading-none select-none shrink-0">15</div>
<div class="flex-1 min-w-0">
<p class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-1">Toyota · 1986–1992 · Turbo Classic</p>
<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Toyota Supra MK3 Turbo (A70)</h2>
<div class="flex flex-wrap gap-x-5 gap-y-1 mb-4 font-mono text-xs text-gray-400">
<span>Engine <strong class="text-gray-900">7M-GTE 3.0L Turbo I6</strong></span>
<span>Power <strong class="text-gray-900">230 hp</strong></span>
<span>Drive <strong class="text-gray-900">RWD</strong></span>
</div>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Toyota_Supra_%28A70%2C_pre-facelift%29_1X7A2552.jpg/960px-Toyota_Supra_%28A70%2C_pre-facelift%29_1X7A2552.jpg" alt="Toyota Supra MK3 Turbo A70" class="w-full aspect-video object-cover rounded my-5" loading="lazy" />
<p class="text-gray-600 leading-relaxed mb-3">The MK3 Supra established the lineage that the MK4 would immortalize. The JDM turbocharged version punched harder than export-market equivalents and featured pop-up headlights, a long hood, and an interior that oozed late-1980s excess. Now gaining serious collector attention as the MK4 prices have climbed out of reach for many buyers.</p>
<div class="inline-flex items-center gap-2 mt-4 bg-red-50 border border-red-200 rounded px-3 py-2 text-sm font-medium text-red-800">★ The Grandfather of the 2JZ Legend.</div>
</div>
</div>
</div>

>>> Hidden Gems & Cult Classics

<div class="jdm-car-entry">
<div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-10">
<div class="text-6xl sm:text-7xl font-bold text-gray-200 leading-none select-none shrink-0">16</div>
<div class="flex-1 min-w-0">
<p class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-1">Mitsubishi · 1996 · Rally Bred</p>
<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Mitsubishi Lancer Evolution IV</h2>
<div class="flex flex-wrap gap-x-5 gap-y-1 mb-4 font-mono text-xs text-gray-400">
<span>Engine <strong class="text-gray-900">4G63T 2.0L Turbo I4</strong></span>
<span>Power <strong class="text-gray-900">280 hp</strong></span>
<span>Drive <strong class="text-gray-900">AWD AYC</strong></span>
</div>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/2017-04-02_Mitsubishi_Lancer_Evolution_X_MR_SST_14_%282%29.jpg/960px-2017-04-02_Mitsubishi_Lancer_Evolution_X_MR_SST_14_%282%29.jpg" alt="Mitsubishi Lancer Evolution IV" class="w-full aspect-video object-cover rounded my-5" loading="lazy" />
<p class="text-gray-600 leading-relaxed mb-3">The Evo IV was the first Evolution to feature the Active Yaw Control system — a torque-vectoring differential that transformed the car's handling at the limit. WRC victories followed immediately. Its aggressive rally heritage, robust performance, and the arrival of AYC made the IV a landmark in the Evo story and a beloved icon in the JDM community.</p>
<div class="inline-flex items-center gap-2 mt-4 bg-red-50 border border-red-200 rounded px-3 py-2 text-sm font-medium text-red-800">★ The Evolution That Got AYC — And Changed Everything.</div>
</div>
</div>
</div>

<div class="jdm-car-entry">
<div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-10">
<div class="text-6xl sm:text-7xl font-bold text-gray-200 leading-none select-none shrink-0">17</div>
<div class="flex-1 min-w-0">
<p class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-1">Nissan NISMO · 1997 · Extreme Rarity</p>
<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Nissan Skyline GT-R NISMO 400R</h2>
<div class="flex flex-wrap gap-x-5 gap-y-1 mb-4 font-mono text-xs text-gray-400">
<span>Engine <strong class="text-gray-900">RB-X GT2 2.8L Twin-Turbo I6</strong></span>
<span>Power <strong class="text-gray-900">400 hp</strong></span>
<span>Units Made <strong class="text-gray-900">~44</strong></span>
<span>Price (1997) <strong class="text-gray-900">¥12,800,000</strong></span>
</div>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Nissan_Skyline_GT-R_R34_V_Spec_II.jpg/960px-Nissan_Skyline_GT-R_R34_V_Spec_II.jpg" alt="Nissan Skyline GT-R NISMO 400R" class="w-full aspect-video object-cover rounded my-5" loading="lazy" />
<p class="text-gray-600 leading-relaxed mb-3">NISMO's factory-built race-homologation version of the R33 GT-R featured an enlarged 2.8-liter version of the RB26DETT producing a genuine 400 hp. With only around 44 units made, the 400R is among the rarest JDM cars in existence. Values have reached $500,000+ for documented examples — one of the most extreme appreciations in the market.</p>
<div class="inline-flex items-center gap-2 mt-4 bg-red-50 border border-red-200 rounded px-3 py-2 text-sm font-medium text-red-800">★ 44 Units. 400 hp. Half a Million Dollars at Auction.</div>
</div>
</div>
</div>

<div class="jdm-car-entry">
<div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-10">
<div class="text-6xl sm:text-7xl font-bold text-gray-200 leading-none select-none shrink-0">18</div>
<div class="flex-1 min-w-0">
<p class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-1">Toyota · 1989–1999 · Mid-Engine Classic</p>
<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Toyota MR2 SW20 Turbo</h2>
<div class="flex flex-wrap gap-x-5 gap-y-1 mb-4 font-mono text-xs text-gray-400">
<span>Engine <strong class="text-gray-900">3S-GTE 2.0L Turbo I4</strong></span>
<span>Power <strong class="text-gray-900">245 hp (JDM)</strong></span>
<span>Drive <strong class="text-gray-900">Mid-Engine RWD</strong></span>
</div>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/1993ToyotaMR2Hardtop.jpg/960px-1993ToyotaMR2Hardtop.jpg" alt="Toyota MR2 SW20 Turbo" class="w-full aspect-video object-cover rounded my-5" loading="lazy" />
<p class="text-gray-600 leading-relaxed mb-3">Toyota's mid-engine two-seater offered Ferrari-adjacent styling and handling at a fraction of the price. The JDM SW20 Turbo produced 245 hp — significantly more than the export versions — with a mid-engine layout that gave it extraordinary cornering balance. The infamous "snap oversteer" characteristic made it demanding to drive at the limit, earning it a devoted enthusiast following.</p>
<div class="inline-flex items-center gap-2 mt-4 bg-red-50 border border-red-200 rounded px-3 py-2 text-sm font-medium text-red-800">★ Mid-Engine, Rear-Drive. Ferrari Proportions, Toyota Price.</div>
</div>
</div>
</div>

<div class="jdm-car-entry">
<div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-10">
<div class="text-6xl sm:text-7xl font-bold text-gray-200 leading-none select-none shrink-0">19</div>
<div class="flex-1 min-w-0">
<p class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-1">Nissan · 1997 · JDM Sleeper</p>
<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Nissan Stagea 260RS</h2>
<div class="flex flex-wrap gap-x-5 gap-y-1 mb-4 font-mono text-xs text-gray-400">
<span>Engine <strong class="text-gray-900">RB26DETT 2.6L Twin-Turbo I6</strong></span>
<span>Power <strong class="text-gray-900">276 hp</strong></span>
<span>Drive <strong class="text-gray-900">ATTESA E-TS AWD</strong></span>
<span>Body <strong class="text-gray-900">5-Door Wagon</strong></span>
</div>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/2001-2004_NISSAN_STAGEA.jpg/960px-2001-2004_NISSAN_STAGEA.jpg" alt="Nissan Stagea 260RS wagon" class="w-full aspect-video object-cover rounded my-5" loading="lazy" />
<p class="text-gray-600 leading-relaxed mb-3">Objectively the most practical GT-R ever built — the <strong>Stagea 260RS</strong> used the RB26DETT engine, ATTESA AWD, and braking system from the R33 Skyline GT-R, fitted to a practical five-door wagon body. NISMO offered a full GT-R front conversion kit. It is simultaneously the most useful and most unexpectedly fast estate car in existence.</p>
<div class="inline-flex items-center gap-2 mt-4 bg-red-50 border border-red-200 rounded px-3 py-2 text-sm font-medium text-red-800">★ GT-R Engine. Wagon Body. Nothing Else Like It on Earth.</div>
</div>
</div>
</div>

<div class="jdm-car-entry">
<div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-10">
<div class="text-6xl sm:text-7xl font-bold text-gray-200 leading-none select-none shrink-0">20</div>
<div class="flex-1 min-w-0">
<p class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-1">Honda · 1991–1996 · Kei Roadster</p>
<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Honda Beat</h2>
<div class="flex flex-wrap gap-x-5 gap-y-1 mb-4 font-mono text-xs text-gray-400">
<span>Engine <strong class="text-gray-900">E07A 0.66L Mid-Mounted I3</strong></span>
<span>Power <strong class="text-gray-900">64 hp</strong></span>
<span>Drive <strong class="text-gray-900">Mid-Engine RWD</strong></span>
<span>Weight <strong class="text-gray-900">1,650 lbs</strong></span>
</div>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Honda_Beat_PP1_front.jpg/960px-Honda_Beat_PP1_front.jpg" alt="Honda Beat kei roadster" class="w-full aspect-video object-cover rounded my-5" loading="lazy" />
<p class="text-gray-600 leading-relaxed mb-3">Sochiro Honda's personal farewell project — approved by the founder himself before his 1991 death — the <strong>Honda Beat</strong> placed a 660cc mid-mounted engine in a tiny open roadster weighing just 1,650 lbs. With 64 hp and sub-2,000 lb curb weight, it feels faster than physics should allow. The last car personally approved by Honda's founder.</p>
<div class="inline-flex items-center gap-2 mt-4 bg-red-50 border border-red-200 rounded px-3 py-2 text-sm font-medium text-red-800">★ Sochiro Honda's Final Gift to the World.</div>
</div>
</div>
</div>

<div class="jdm-car-entry">
<div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-10">
<div class="text-6xl sm:text-7xl font-bold text-gray-200 leading-none select-none shrink-0">21</div>
<div class="flex-1 min-w-0">
<p class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-1">Toyota · 1989–1999 · WRC Hero</p>
<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Toyota Celica GT-Four (ST185/ST205)</h2>
<div class="flex flex-wrap gap-x-5 gap-y-1 mb-4 font-mono text-xs text-gray-400">
<span>Engine <strong class="text-gray-900">3S-GTE 2.0L Turbo I4</strong></span>
<span>Power <strong class="text-gray-900">255 hp (ST205)</strong></span>
<span>Drive <strong class="text-gray-900">AWD</strong></span>
<span>WRC Titles <strong class="text-gray-900">3 (1992–1994)</strong></span>
</div>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/CelicaST185GT4APuenteHills.jpg/960px-CelicaST185GT4APuenteHills.jpg" alt="Toyota Celica GT-Four ST185" class="w-full aspect-video object-cover rounded my-5" loading="lazy" />
<p class="text-gray-600 leading-relaxed mb-3">The Celica GT-Four won three WRC manufacturer titles for Toyota in the early 1990s. The JDM ST205 variant produced 255 hp — the most powerful Celica ever built — and featured a more aggressive intercooler and rally-derived AWD system. The ST205 was later disqualified from WRC for an illegal restrictor plate, adding notoriety to an already legendary machine.</p>
<div class="inline-flex items-center gap-2 mt-4 bg-red-50 border border-red-200 rounded px-3 py-2 text-sm font-medium text-red-800">★ 3 WRC Titles. Banned for Cheating. Still Legendary.</div>
</div>
</div>
</div>

<div class="jdm-car-entry">
<div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-10">
<div class="text-6xl sm:text-7xl font-bold text-gray-200 leading-none select-none shrink-0">22</div>
<div class="flex-1 min-w-0">
<p class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-1">Mazda · 1985–1992 · Second Generation</p>
<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Mazda RX-7 FC Turbo</h2>
<div class="flex flex-wrap gap-x-5 gap-y-1 mb-4 font-mono text-xs text-gray-400">
<span>Engine <strong class="text-gray-900">13B Turbo 1.3L Twin-Rotor</strong></span>
<span>Power <strong class="text-gray-900">185–215 hp (JDM)</strong></span>
<span>Drive <strong class="text-gray-900">RWD</strong></span>
</div>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Tuned_Mazda_SAVANNA_RX-7_GT-R_%28E-FC3S%29_front.jpg/960px-Tuned_Mazda_SAVANNA_RX-7_GT-R_%28E-FC3S%29_front.jpg" alt="Mazda Savanna RX-7 FC3S" class="w-full aspect-video object-cover rounded my-5" loading="lazy" />
<p class="text-gray-600 leading-relaxed mb-3">Before the legendary FD came the <strong>FC</strong> — and in JDM turbocharged form, it was a serious sports car. Mazda's turbocharged 13B rotary in the FC chassis offered a pure driver's experience with pop-up headlights, near-perfect balance, and a sound unlike any piston engine. Growing in collector value as the FD pushes beyond budget reach.</p>
<div class="inline-flex items-center gap-2 mt-4 bg-red-50 border border-red-200 rounded px-3 py-2 text-sm font-medium text-red-800">★ The FD's Underrated, Equally Pure Predecessor.</div>
</div>
</div>
</div>

<div class="jdm-car-entry">
<div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-10">
<div class="text-6xl sm:text-7xl font-bold text-gray-200 leading-none select-none shrink-0">23</div>
<div class="flex-1 min-w-0">
<p class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-1">Toyota / Yamaha · 1967–1970 · The Original</p>
<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Toyota 2000GT</h2>
<div class="flex flex-wrap gap-x-5 gap-y-1 mb-4 font-mono text-xs text-gray-400">
<span>Engine <strong class="text-gray-900">2M 2.0L DOHC I6</strong></span>
<span>Power <strong class="text-gray-900">150 hp</strong></span>
<span>Units Made <strong class="text-gray-900">351</strong></span>
<span>Value <strong class="text-gray-900">$500,000–$1,000,000+</strong></span>
</div>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/TOYOTA_2000GT.jpg/960px-TOYOTA_2000GT.jpg" alt="Toyota 2000GT classic" class="w-full aspect-video object-cover rounded my-5" loading="lazy" />
<p class="text-gray-600 leading-relaxed mb-3">The car that proved Japan could build a world-class sports car — the <strong>Toyota 2000GT</strong>, co-developed with Yamaha, stunned audiences at its 1967 Tokyo Motor Show debut. A roadster version appeared in the James Bond film <em>You Only Live Twice</em> (1967). Only 351 were built; today they are the most valuable Japanese cars ever auctioned, regularly exceeding $1,000,000.</p>
<div class="inline-flex items-center gap-2 mt-4 bg-red-50 border border-red-200 rounded px-3 py-2 text-sm font-medium text-red-800">★ Japan's First Supercar. A James Bond Car. One Million Dollars.</div>
</div>
</div>
</div>

<div class="jdm-car-entry">
<div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-10">
<div class="text-6xl sm:text-7xl font-bold text-gray-200 leading-none select-none shrink-0">24</div>
<div class="flex-1 min-w-0">
<p class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-1">Nissan · 1969–1972 · Vintage GT-R</p>
<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Nissan Skyline GT-R KPGC10 "Hakosuka"</h2>
<div class="flex flex-wrap gap-x-5 gap-y-1 mb-4 font-mono text-xs text-gray-400">
<span>Engine <strong class="text-gray-900">S20 2.0L DOHC 24V I6</strong></span>
<span>Power <strong class="text-gray-900">160 hp</strong></span>
<span>Race Record <strong class="text-gray-900">50 consecutive wins in Japan</strong></span>
<span>Units Made <strong class="text-gray-900">~1,945</strong></span>
</div>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Nissan_KPGC10_Skyline_2000GT-R_%2822091110222%29.jpg/960px-Nissan_KPGC10_Skyline_2000GT-R_%2822091110222%29.jpg" alt="Nissan Skyline 2000GT-R KPGC10 Hakosuka" class="w-full aspect-video object-cover rounded my-5" loading="lazy" />
<p class="text-gray-600 leading-relaxed mb-3">The original GT-R — the <strong>Hakosuka</strong> (box-shaped Skyline) — won 50 consecutive races in Japan after its 1969 debut and established the GT-R nameplate as a racing legend. Its Yamaha-developed S20 engine was derived from the Nissan Prince racing program. Finding an authentic KPGC10 GT-R today is among the most prestigious achievements in Japanese car collecting.</p>
<div class="inline-flex items-center gap-2 mt-4 bg-red-50 border border-red-200 rounded px-3 py-2 text-sm font-medium text-red-800">★ 50 Consecutive Race Wins. Where the GT-R Legacy Began.</div>
</div>
</div>
</div>

<div class="jdm-car-entry">
<div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-10">
<div class="text-6xl sm:text-7xl font-bold text-gray-200 leading-none select-none shrink-0">25</div>
<div class="flex-1 min-w-0">
<p class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-1">Mazda · 1989–1997 · Universal Classic</p>
<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Mazda MX-5 Miata / Eunos Roadster (NA)</h2>
<div class="flex flex-wrap gap-x-5 gap-y-1 mb-4 font-mono text-xs text-gray-400">
<span>Engine <strong class="text-gray-900">B6-ZE / BP-ZE 1.6–1.8L I4</strong></span>
<span>Power <strong class="text-gray-900">115–131 hp</strong></span>
<span>Weight <strong class="text-gray-900">~2,100 lbs</strong></span>
<span>Production <strong class="text-gray-900">World's Best-Selling Roadster</strong></span>
</div>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Eunos.jpg/960px-Eunos.jpg" alt="Mazda MX-5 Miata NA Eunos Roadster" class="w-full aspect-video object-cover rounded my-5" loading="lazy" />
<p class="text-gray-600 leading-relaxed mb-3">The JDM version — sold as the <strong>Eunos Roadster</strong> — featured a leather-trimmed interior and standard equipment upgrades unavailable in export markets. The NA Miata's impact on automotive culture is immeasurable: it single-handedly revived the small, affordable roadster segment that had died in the 1970s, and its philosophy of light weight over raw power influenced every sports car developed in the decades that followed.</p>
<p class="text-gray-600 leading-relaxed mb-3">It is the best-selling roadster in history, the most-raced production car in the world, and by many measures the most pure expression of driving joy at any price.</p>
<div class="inline-flex items-center gap-2 mt-4 bg-red-50 border border-red-200 rounded px-3 py-2 text-sm font-medium text-red-800">★ The Most Important Sports Car of the Last 40 Years.</div>
</div>
</div>
</div>

<div class="jdm-buying-guide">
<h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">JDM Buying Guide: What You Need to Know</h2>
<p class="text-gray-500 leading-relaxed mb-6">Importing a JDM car involves more than finding the right model. Here's what every buyer should understand before sending money overseas.</p>
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
<div class="bg-gray-50 border border-gray-100 rounded-lg p-5">
<h4 class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-2">25-Year Import Rule</h4>
<p class="text-sm text-gray-600 leading-relaxed">In the U.S., any vehicle 25+ years old can be imported without EPA/NHTSA compliance (49 CFR 591.5). Check the manufacture date carefully — not the model year.</p>
</div>
<div class="bg-gray-50 border border-gray-100 rounded-lg p-5">
<h4 class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-2">Mileage & Documentation</h4>
<p class="text-sm text-gray-600 leading-relaxed">Japanese auction inspection sheets (grade 3.5+ is good, 4+ is excellent) and service records in Japanese are your primary quality signals. Odometer fraud is uncommon but exists.</p>
</div>
<div class="bg-gray-50 border border-gray-100 rounded-lg p-5">
<h4 class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-2">Rust Is the Enemy</h4>
<p class="text-sm text-gray-600 leading-relaxed">Japan's coastal climate and road salt use mean rust inspection is critical. Inspect chassis rails, wheel wells, and floor pans thoroughly — or pay for a pre-purchase inspection.</p>
</div>
<div class="bg-gray-50 border border-gray-100 rounded-lg p-5">
<h4 class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-2">Shipping & Duty</h4>
<p class="text-sm text-gray-600 leading-relaxed">Budget for RoRo or container shipping ($1,500–$4,000), U.S. customs duty (2.5% of declared value), port fees, and state registration. Total landed cost is typically 15–20% above purchase price.</p>
</div>
<div class="bg-gray-50 border border-gray-100 rounded-lg p-5">
<h4 class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-2">Parts Availability</h4>
<p class="text-sm text-gray-600 leading-relaxed">Mainstream JDM cars (Skyline, Supra, S15, Evo) have strong parts availability via specialists. More obscure models may require sourcing direct from Japan.</p>
</div>
<div class="bg-gray-50 border border-gray-100 rounded-lg p-5">
<h4 class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-2">Value Trajectory</h4>
<p class="text-sm text-gray-600 leading-relaxed">Iconic models (R34, Supra MK4, NSX-R, 22B) have appreciated 300–800% in the last decade. Best entry points are currently R32, FC RX-7, and S13 Silvia — all recently eligible for import.</p>
</div>
</div>
</div>

<div class="jdm-faq">
<h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
<div class="border-b border-gray-100 py-5">
<p class="font-semibold text-gray-900 mb-2">What does JDM stand for?</p>
<p class="text-sm text-gray-600 leading-relaxed">JDM stands for Japanese Domestic Market — referring to vehicles manufactured to Japanese specifications for sale within Japan. These often have different specifications, trim levels, and power outputs compared to export versions of the same model.</p>
</div>
<div class="border-b border-gray-100 py-5">
<p class="font-semibold text-gray-900 mb-2">Which JDM car has the best investment potential in 2025?</p>
<p class="text-sm text-gray-600 leading-relaxed">The Nissan Skyline GT-R R34 and Toyota Supra MK4 are already firmly in collector territory. For buyers seeking entry points with appreciation potential, the R32 GT-R, Honda S2000, and Mazda RX-7 FC are frequently cited by importers as undervalued relative to their historical significance.</p>
</div>
<div class="border-b border-gray-100 py-5">
<p class="font-semibold text-gray-900 mb-2">What JDM cars are now legal to import to the U.S.?</p>
<p class="text-sm text-gray-600 leading-relaxed">As of 2025, any vehicle manufactured in or before 2000 is eligible for import under the 25-year rule. This includes the Nissan Skyline R34 GT-R (2002 models remain ineligible until 2027), Honda S2000 (1999–2009 makes early models eligible), and all Evo I through VI models. The rule advances by one year annually.</p>
</div>
<div class="border-b border-gray-100 py-5">
<p class="font-semibold text-gray-900 mb-2">Why were some JDM cars never sold outside Japan?</p>
<p class="text-sm text-gray-600 leading-relaxed">Several reasons: JDM-only models were built in low volumes not cost-effective for export homologation; some were specifically performance-tuned for Japanese roads or conditions; others were restricted by Japan's gentleman's agreement limiting advertised power to 276 hp (a cap that made export sales in some markets tricky); and some, like the Civic Type R EK9, were simply deemed too focused for broader market tastes.</p>
</div>
<div class="border-b border-gray-100 py-5">
<p class="font-semibold text-gray-900 mb-2">What is the most valuable JDM car?</p>
<p class="text-sm text-gray-600 leading-relaxed">The Toyota 2000GT holds the record for highest JDM auction prices, with the finest examples exceeding $1,000,000. Among modern-era JDM cars, the Nissan Skyline GT-R NISMO 400R regularly achieves $500,000+, followed by the Subaru Impreza 22B STi at $200,000–$300,000+ for pristine examples.</p>
</div>
<div class="border-b border-gray-100 py-5">
<p class="font-semibold text-gray-900 mb-2">What's the best JDM car for a first-time buyer?</p>
<p class="text-sm text-gray-600 leading-relaxed">The Mazda MX-5 Miata NA / Eunos Roadster offers the best combination of affordability, parts availability, reliability, and pure driving pleasure. For those seeking a turbocharged experience on a budget, early Nissan Silvias (S13, S14) and Honda Civics offer genuine JDM character at accessible prices.</p>
</div>
</div>

## Conclusion

From the **Nissan Skyline GT-R R34** to the **Mazda MX-5 Miata**, every car on this list represents a moment when Japanese engineers refused to play by conventional rules. They built cars that were lighter, smarter, more tunable, and more thrilling than anything Europe or America produced at the same price point. The JDM era wasn't just a chapter in automotive history — it was a revolution that reshaped how the world thinks about performance cars.

Information compiled from manufacturer specifications, JDMBUYSELL, JDMDrives, TopSpeed, Drifted, VividRacing, and JDM Sport Classics. All prices are market estimates and subject to change. Always verify vehicle eligibility before importation.`,
      ja: `**JDM**（Japanese Domestic Market）という言葉は、日本国内での販売を目的として製造された車両を指します。数十年にわたり、日本の自動車メーカーは最も強力で、最もエキゾチックで、最も技術的に野心的なマシンを国内のバイヤー向けに独占的に生産し、世界の他の地域はそれを見つめ、羨望するしかありませんでした。

**25年輸入ルール**のおかげで、これらのレジェンドの多くが現在アメリカへの輸入が合法となり、需要の洪水が価格を成層圏へと押し上げています。経験豊富なコレクターであれ、JDMシーンを解読しようとする初めてのバイヤーであれ、この権威あるガイドは、エンジニアリングの革新性、モータースポーツの遺産、文化的影響、そしてドライビングの純粋さを基準に、史上最高の日本の domestic market 車25台をランキングしています。

## JDMカーとは何か？

JDMは*Japanese Domestic Market*（日本国内市場）の略です。これらは日本政府の仕様に合わせて製造された車 — 右ハンドルで、日本の道路に合わせてチューニングされ、輸出されることのなかったパフォーマンスバリアントやトリムを特徴とすることが多い車です。25年ルール（49 CFR 591.5）により、元の適合性に関わらず、25年以上前に製造された車両のアメリカへの輸入が認められており、象徴的なJDMカーがアメリカのコレクターにとって入手可能となっています。

>>> ホーリートリニティ — 絶対的レジェンド

<div class="jdm-car-entry">
<div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-10">
<div class="text-6xl sm:text-7xl font-bold text-gray-200 leading-none select-none shrink-0">01</div>
<div class="flex-1 min-w-0">
<p class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-1">Nissan · 1999–2002 · Icon</p>
<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Nissan Skyline GT-R R34</h2>
<div class="flex flex-wrap gap-x-5 gap-y-1 mb-4 font-mono text-xs text-gray-400">
<span>Engine <strong class="text-gray-900">RB26DETT 2.6L Twin-Turbo I6</strong></span>
<span>Power <strong class="text-gray-900">276 hp (factory — widely exceeded)</strong></span>
<span>Drive <strong class="text-gray-900">ATTESA E-TS AWD</strong></span>
<span>0–60 <strong class="text-gray-900">~4.9 sec</strong></span>
<span>Units Made <strong class="text-gray-900">~11,500</strong></span>
</div>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Nissan_Skyline_GT-R_R34_V_Spec_II.jpg/960px-Nissan_Skyline_GT-R_R34_V_Spec_II.jpg" alt="Nissan Skyline GT-R R34 V-Spec II" class="w-full aspect-video object-cover rounded my-5" loading="lazy" />
<p class="text-gray-600 leading-relaxed mb-3">JDMリストは他のどこからも始まらない。<strong>R34 Nissan Skyline GT-R</strong>は不動の王 — 日本ツーリングカーチャンピオンシップが結局、他のメーカーにチャンスを与えるために制限を課さざるを得なかったほど圧倒的な車だ。<em>"ゴジラ"</em>という愛称で呼ばれるRB26DETTツインターボ直列6気筒エンジンは、自動車史上最も称賛されたエンジンの一つである：際限なくチューン可能で、猛烈なトルクを誇り、適切なメンテナンスを受ければ完全に無敵である。</p>
<p class="text-gray-600 leading-relaxed mb-3">ATTESA E-TS Proフルタイム四輪駆動システム、スーパーHICAS四輪操舵、そしてGTレーシングから借用したマルチファンクションディスプレイにより、R34は時代を数十年先取りしているかのように感じられた。約11,500台しか生産されず、状態の良い車は現在オークションで$200,000以上 — しかも上昇中 — で取引されている。ポール・ウォーカーが<em>2 Fast 2 Furious</em>で運転した有名なベイサイドブルーのR34は、そのグローバルなポップカルチャーにおける不死性を決定づけた。</p>
<div class="inline-flex items-center gap-2 mt-4 bg-red-50 border border-red-200 rounded px-3 py-2 text-sm font-medium text-red-800">★ 史上最高のJDMカー — 異論の余地なし</div>
</div>
</div>
</div>

<div class="jdm-car-entry">
<div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-10">
<div class="text-6xl sm:text-7xl font-bold text-gray-200 leading-none select-none shrink-0">02</div>
<div class="flex-1 min-w-0">
<p class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-1">Toyota · 1993–2002 · Legend</p>
<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Toyota Supra MK4 (A80)</h2>
<div class="flex flex-wrap gap-x-5 gap-y-1 mb-4 font-mono text-xs text-gray-400">
<span>Engine <strong class="text-gray-900">2JZ-GTE 3.0L Twin-Turbo I6</strong></span>
<span>Power <strong class="text-gray-900">320 hp (JDM) / 276 hp export</strong></span>
<span>Drive <strong class="text-gray-900">RWD 6-Speed Manual</strong></span>
<span>0–60 <strong class="text-gray-900">~4.6 sec</strong></span>
<span>Top Speed <strong class="text-gray-900">180 mph (limited)</strong></span>
</div>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Toyota_GR_Supra_%2851984008283crop%29.jpg/960px-Toyota_GR_Supra_%2851984008283crop%29.jpg" alt="Toyota Supra MK4 A80" class="w-full aspect-video object-cover rounded my-5" loading="lazy" />
<p class="text-gray-600 leading-relaxed mb-3"><strong>Toyota Supra MK4</strong>の2JZ-GTEエンジンは、おそらく史上最も有名な直列6気筒エンジンである。意図的にオーバービルトに設計されており — トヨタのエンジニアは内部改造で1,000馬力以上に耐えられるよう設計した — チューナーコミュニティの究極の聖杯となった。JDM仕様の車は工場出荷時で320馬力を発揮し、輸出市場向けの276馬力に対して、日本の紳士協定の出力上限を反映していた。</p>
<p class="text-gray-600 leading-relaxed mb-3"><em>The Fast and the Furious</em>でのブライアン・オコナーのオレンジ色のSupraは、ひと世代全体の象徴的な車となった。状態の良い本物のマニュアルトランスミッション Supra MK4は現在$100,000〜$200,000で取引されており、その希少性とほぼ宗教的な熱狂的なファンベースが価格を押し上げている。</p>
<div class="inline-flex items-center gap-2 mt-4 bg-red-50 border border-red-200 rounded px-3 py-2 text-sm font-medium text-red-800">★ 2JZ-GTEがチューナー世代を定義した</div>
</div>
</div>
</div>

<div class="jdm-car-entry">
<div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-10">
<div class="text-6xl sm:text-7xl font-bold text-gray-200 leading-none select-none shrink-0">03</div>
<div class="flex-1 min-w-0">
<p class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-1">Mazda · 1992–2002 · Driver's Car</p>
<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Mazda RX-7 FD</h2>
<div class="flex flex-wrap gap-x-5 gap-y-1 mb-4 font-mono text-xs text-gray-400">
<span>Engine <strong class="text-gray-900">13B-REW 1.3L Twin-Rotor Turbo</strong></span>
<span>Power <strong class="text-gray-900">252–280 hp (JDM)</strong></span>
<span>Weight <strong class="text-gray-900">~2,800 lbs</strong></span>
<span>0–60 <strong class="text-gray-900">~5.2 sec</strong></span>
<span>Balance <strong class="text-gray-900">50/50 F/R</strong></span>
</div>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/1994_Mazda_RX-7_R2_in_Vintage_Red%2C_front_left_%28Lime_Rock%29.jpg/960px-1994_Mazda_RX-7_R2_in_Vintage_Red%2C_front_left_%28Lime_Rock%29.jpg" alt="Mazda RX-7 FD in Vintage Red" class="w-full aspect-video object-cover rounded my-5" loading="lazy" />
<p class="text-gray-600 leading-relaxed mb-3">純粋なドライビングアートのために、JDMカノンの中で<strong>Mazda RX-7 FD</strong>に匹敵するものはない。13B-REWツインターボロータリーエンジンはフロントアクスルの<em>後ろ</em>に配置され、ほぼ完璧な50/50の重量配分を実現した。その結果、ツインシーケンシャルターボを搭載しながら2,900 lbs未満の重量で、超自然的なバランスでコーナーを回る車が完成した。<em>Car and Driver</em>誌は5年連続でテンベストリストに選出した。</p>
<p class="text-gray-600 leading-relaxed mb-3">ロータリーエンジンの決定的な特徴 — 高回転で滑らかなパワー供給と、改造に対する素晴らしいレスポンス — は、ドリフトやモータースポーツコミュニティにとって究極の武器となった。<em>Tokyo Drift</em>でのハンのVeilside仕様のRX-7は、新世代にその名を永遠に刻み込んだ。</p>
<div class="inline-flex items-center gap-2 mt-4 bg-red-50 border border-red-200 rounded px-3 py-2 text-sm font-medium text-red-800">★ JDM史上最もバランスの良いシャシー</div>
</div>
</div>
</div>

>>> ジャパニーズ・スーパーカー

<div class="jdm-car-entry">
<div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-10">
<div class="text-6xl sm:text-7xl font-bold text-gray-200 leading-none select-none shrink-0">04</div>
<div class="flex-1 min-w-0">
<p class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-1">Honda · 1990–2005 · Supercar</p>
<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Honda NSX (NA1/NA2)</h2>
<div class="flex flex-wrap gap-x-5 gap-y-1 mb-4 font-mono text-xs text-gray-400">
<span>Engine <strong class="text-gray-900">C30A / C32B 3.0–3.2L VTEC V6</strong></span>
<span>Power <strong class="text-gray-900">270–290 hp</strong></span>
<span>Drive <strong class="text-gray-900">Mid-Engine RWD</strong></span>
<span>0–60 <strong class="text-gray-900">~5.7 sec</strong></span>
<span>Top Speed <strong class="text-gray-900">168 mph</strong></span>
</div>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/AcuraNSX-05-cropped.jpg/960px-AcuraNSX-05-cropped.jpg" alt="Honda NSX NA1 supercar" class="w-full aspect-video object-cover rounded my-5" loading="lazy" />
<p class="text-gray-600 leading-relaxed mb-3">ホンダはフェラーリに匹敵するパフォーマンスを持ちながら、日常的にトラブルなく運転できるスーパーカーを作ることを目指した — そして成功した。F1のレジェンド、アイルトン・セナの協力を得て開発された<strong>Honda NSX</strong>は、オールアルミニウムモノコックシャシー、ミッドマウントVTEC V6（8,000 rpmのレブリミット）、そして量産車では前例のないチタン製コネクティングロッドを搭載していた。</p>
<p class="text-gray-600 leading-relaxed mb-3">1990年の発売時、フェラーリとポルシェのエンジニアは衝撃を受け、初期モデルを分解分析のために購入した。カーボンファイバーで製造され、防音材を排除したNSX-Rバリアントは、ドライバー重視のベンチマークとなった。価値は大きく上昇しており — 状態の良いNSX-Rは現在$200,000以上で取引されている。</p>
<div class="inline-flex items-center gap-2 mt-4 bg-red-50 border border-red-200 rounded px-3 py-2 text-sm font-medium text-red-800">★ 初の「日常のスーパーカー」— アイルトン・セナ承認</div>
</div>
</div>
</div>

<div class="jdm-car-entry">
<div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-10">
<div class="text-6xl sm:text-7xl font-bold text-gray-200 leading-none select-none shrink-0">05</div>
<div class="flex-1 min-w-0">
<p class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-1">Lexus · 2010–2012 · Halo Car</p>
<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Lexus LFA</h2>
<div class="flex flex-wrap gap-x-5 gap-y-1 mb-4 font-mono text-xs text-gray-400">
<span>Engine <strong class="text-gray-900">1LR-GUE 4.8L NA V10</strong></span>
<span>Power <strong class="text-gray-900">552 hp @ 8,700 rpm</strong></span>
<span>Redline <strong class="text-gray-900">9,000 rpm</strong></span>
<span>0–60 <strong class="text-gray-900">3.7 sec</strong></span>
<span>Units Made <strong class="text-gray-900">500</strong></span>
</div>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Lexus_LFA_001.JPG/960px-Lexus_LFA_001.JPG" alt="Lexus LFA V10 supercar" class="w-full aspect-video object-cover rounded my-5" loading="lazy" />
<p class="text-gray-600 leading-relaxed mb-3"><strong>Lexus LFA</strong>は、メーカーが財政的なプレッシャーを一切受けずに10年かけてハローカーを完璧に仕上げた結果である。4.8リッターの自然吸気V10エンジンは9,000 rpmまで回り、そのあまりに独自の排気音のためデジタルタコメーターが必要だった — アナログ針ではエンジンの加速レスポンスを追跡するのに十分な速さで動くことができなかったのだ。</p>
<p class="text-gray-600 leading-relaxed mb-3">ボディの65%にカーボンファイバー強化ポリマーを使用して製造されたLFAは、日本の職人技の絶対的な頂点を体現している。わずか500台しか生産されなかった。現在では$900,000以上で取引されている。レクサスにとっては財政的な損失であった — そして史上最高の車の一つであった。</p>
<div class="inline-flex items-center gap-2 mt-4 bg-red-50 border border-red-200 rounded px-3 py-2 text-sm font-medium text-red-800">★ 500台。史上最高のV10サウンドの一つ。</div>
</div>
</div>
</div>

>>> ラリーレジェンド＆ホモロゲーションスペシャル

<div class="jdm-car-entry">
<div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-10">
<div class="text-6xl sm:text-7xl font-bold text-gray-200 leading-none select-none shrink-0">06</div>
<div class="flex-1 min-w-0">
<p class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-1">Mitsubishi · 1999 · Rally Special</p>
<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Mitsubishi Lancer Evolution VI T.M. Edition</h2>
<div class="flex flex-wrap gap-x-5 gap-y-1 mb-4 font-mono text-xs text-gray-400">
<span>Engine <strong class="text-gray-900">4G63T 2.0L Turbo I4</strong></span>
<span>Power <strong class="text-gray-900">276 hp (underrated)</strong></span>
<span>Drive <strong class="text-gray-900">AWD ACD/AYC</strong></span>
<span>Production <strong class="text-gray-900">Limited Run</strong></span>
</div>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/2017-04-02_Mitsubishi_Lancer_Evolution_X_MR_SST_14_%282%29.jpg/960px-2017-04-02_Mitsubishi_Lancer_Evolution_X_MR_SST_14_%282%29.jpg" alt="Mitsubishi Lancer Evolution" class="w-full aspect-video object-cover rounded my-5" loading="lazy" />
<p class="text-gray-600 leading-relaxed mb-3"><strong>Lancer Evolution VI Tommi Mäkinen Edition</strong> — ミツビシにWRCラリーワールドタイトルを4連覇をもたらしたフィンランド人WRCチャンピオンの名を冠したこの車 — はEvo系譜の頂点を表している。よりタイトなサスペンション、より流量の多いエキゾースト、チタンターボハウジング、そして微妙なエアロの調整により、それまでに作られた中最もフォーカスされたEvoとなった。</p>
<p class="text-gray-600 leading-relaxed mb-3">ランサーエボリューションのすべての世代（IからXまで）は同じ核心のレシピを共有していた：ターボチャージャー付き2.0リッター直列4気筒、四輪駆動、そしてラリーパーツをホモロゲーションするために設計された四角く機能的なボディ。VI TMEほど忠実にそのフォーミュラを体現したEvoは他にない。</p>
<div class="inline-flex items-center gap-2 mt-4 bg-red-50 border border-red-200 rounded px-3 py-2 text-sm font-medium text-red-800">★ WRCタイトル4連覇。妥協なし。</div>
</div>
</div>
</div>

<div class="jdm-car-entry">
<div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-10">
<div class="text-6xl sm:text-7xl font-bold text-gray-200 leading-none select-none shrink-0">07</div>
<div class="flex-1 min-w-0">
<p class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-1">Subaru · 1998 · Homologation Special</p>
<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Subaru Impreza 22B STi</h2>
<div class="flex flex-wrap gap-x-5 gap-y-1 mb-4 font-mono text-xs text-gray-400">
<span>Engine <strong class="text-gray-900">EJ22 2.2L Turbo Flat-4</strong></span>
<span>Power <strong class="text-gray-900">276 hp (factory)</strong></span>
<span>Units Made <strong class="text-gray-900">424</strong></span>
<span>Body <strong class="text-gray-900">Wide-Body 2-Door</strong></span>
</div>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/2011_Subaru_Impreza_WRX_STI_sedan_front_--_2011_DC.jpg/960px-2011_Subaru_Impreza_WRX_STI_sedan_front_--_2011_DC.jpg" alt="Subaru Impreza WRX STI" class="w-full aspect-video object-cover rounded my-5" loading="lazy" />
<p class="text-gray-600 leading-relaxed mb-3">スバルのWRCマニュファクチャラーズチャンピオンシップ3連覇を記念して製造された<strong>22B STi</strong>は、存在する中で最も希少で最も望ましいJDMカーの一つである。わずか424台のみが生産された — 日本向けに400台、他市場向けに24台。拡大された2.2リッターフラットフォーとWRCカーから直接派生したワイドボディキットは、真のハードコアなラリーブリードのパフォーマンスを与えていた。</p>
<p class="text-gray-600 leading-relaxed mb-3">低走行距離の車はオークションで$200,000 USD以上で落札されており、スバルとしてはほとんど想像もつかないほどの価値上昇である。22Bは1990年代後半のJDM時代を代表するコレクターカーのベンチマークとなっている。</p>
<div class="inline-flex items-center gap-2 mt-4 bg-red-50 border border-red-200 rounded px-3 py-2 text-sm font-medium text-red-800">★ 424台製造。その一台一台が今や6桁の車。</div>
</div>
</div>
</div>

<div class="jdm-car-entry">
<div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-10">
<div class="text-6xl sm:text-7xl font-bold text-gray-200 leading-none select-none shrink-0">08</div>
<div class="flex-1 min-w-0">
<p class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-1">Honda · 1997–2000 · JDM-Only Type R</p>
<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Honda Civic Type R EK9</h2>
<div class="flex flex-wrap gap-x-5 gap-y-1 mb-4 font-mono text-xs text-gray-400">
<span>Engine <strong class="text-gray-900">B16B 1.6L VTEC I4</strong></span>
<span>Power <strong class="text-gray-900">185 hp @ 8,200 rpm</strong></span>
<span>Drive <strong class="text-gray-900">FWD 5-Speed Close-Ratio</strong></span>
<span>Redline <strong class="text-gray-900">8,600 rpm</strong></span>
</div>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/2024_Honda_Civic_Type_R%2C_front_right%2C_06-15-2024.jpg/960px-2024_Honda_Civic_Type_R%2C_front_right%2C_06-15-2024.jpg" alt="Honda Civic Type R" class="w-full aspect-video object-cover rounded my-5" loading="lazy" />
<p class="text-gray-600 leading-relaxed mb-3">初代Civic Type Rは日本国内でのみ販売され、そのJDM exclusivityはホットハッチコミュニティにとって究極の聖杯となった。B16Bエンジン — 発売時に世界で最も高回転する自然吸気量産エンジン — は、たった1.6リッターから185馬力を生み出し、一切の過給機なしでそれを実現していた。</p>
<p class="text-gray-600 leading-relaxed mb-3">防音材を排除し、クロスレシオギアボックスを装備し、何よりもサーキットでの使用に向けてチューンされたEK9は、Type Rであるべきすべてのテンプレートを設定した：アグレッシブで、フォーカスされ、8,600 rpmの限界までプッシュした時に圧倒的に報われる車。</p>
<div class="inline-flex items-center gap-2 mt-4 bg-red-50 border border-red-200 rounded px-3 py-2 text-sm font-medium text-red-800">★ 最初の — そして多くの人が最高と呼ぶ — Civic Type R。</div>
</div>
</div>
</div>

>>> スポーツカー・クラシック

<div class="jdm-car-entry">
<div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-10">
<div class="text-6xl sm:text-7xl font-bold text-gray-200 leading-none select-none shrink-0">09</div>
<div class="flex-1 min-w-0">
<p class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-1">Honda · 1999–2009 · オープンスポーツ</p>
<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Honda S2000</h2>
<div class="flex flex-wrap gap-x-5 gap-y-1 mb-4 font-mono text-xs text-gray-400">
<span>エンジン <strong class="text-gray-900">F20C / F22C 2.0–2.2L VTEC 直列4気筒</strong></span>
<span>最高出力 <strong class="text-gray-900">240–247 hp</strong></span>
<span>リッター出力 <strong class="text-gray-900">120 hp/リッター (F20C)</strong></span>
<span>レブリミット <strong class="text-gray-900">9,000 rpm</strong></span>
</div>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/HondaS2000-004.jpg/960px-HondaS2000-004.jpg" alt="Honda S2000 roadster" class="w-full aspect-video object-cover rounded my-5" loading="lazy" />
<p class="text-gray-600 leading-relaxed mb-3"><strong>Honda S2000</strong> は、自然吸気エンジンから1リッターあたり120馬力を叩き出しました — 1999年の登場時における量産車として世界最高のリッター出力でした。この偉業は今日でもなお驚異的な記録として語り継がれています。日本国内専用のType S仕様は、エアロボディキット、大径タイヤ、および改良されたサスペンションを追加し、さらに鋭敏なドライビング体験を実現していました。</p>
<p class="text-gray-600 leading-relaxed mb-3">後輪駆動、ほぼ完璧なフロントミッドシップエンジンレイアウト、そして刃のように研ぎ澄まされたシャシーバランスにより、S2000はその時代を代表する手頃なスポーツカーの基準となりました。良質な個体は現在、新車時の希望小売価格を上回る価格で取引されており、多くのスポーツカーが直面する価値の谷間をほぼ回避しています。</p>
<div class="inline-flex items-center gap-2 mt-4 bg-red-50 border border-red-200 rounded px-3 py-2 text-sm font-medium text-red-800">★ 9,000 RPM。120 hp/リッター。Hondaの絶対的な頂点。</div>
</div>
</div>
</div>

<div class="jdm-car-entry">
<div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-10">
<div class="text-6xl sm:text-7xl font-bold text-gray-200 leading-none select-none shrink-0">10</div>
<div class="flex-1 min-w-0">
<p class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-1">Honda · 1995–2001 · Type R</p>
<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Honda Integra Type R (DC2)</h2>
<div class="flex flex-wrap gap-x-5 gap-y-1 mb-4 font-mono text-xs text-gray-400">
<span>エンジン <strong class="text-gray-900">B18C Spec-R 1.8L VTEC 直列4気筒</strong></span>
<span>最高出力 <strong class="text-gray-900">200 hp (JDM) / 195 hp (USDM)</strong></span>
<span>レブリミット <strong class="text-gray-900">8,500 rpm</strong></span>
<span>駆動方式 <strong class="text-gray-900">FF 5速</strong></span>
</div>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/2002_Honda_Integra_%28DC5%29_Special_Edition_coupe_%282015-07-24%29_01.jpg/960px-2002_Honda_Integra_%28DC5%29_Special_Edition_coupe_%282015-07-24%29_01.jpg" alt="Honda Integra Type R DC2" class="w-full aspect-video object-cover rounded my-5" loading="lazy" />
<p class="text-gray-600 leading-relaxed mb-3"><strong>DC2 Integra Type R</strong> は、発売時に前輪駆動車のニュルブルクリンク ラップレコードを樹立し、その後何年にもわたり記録を保持し続けました。B18C Spec-Rエンジンは手作業で組み立てられ、各ユニットには組み立てた技術者のサインが入れられていました。HondaのNVHバランスと回転数マッチングの精度に対する執念ある追求は、ドライバーとの一体感において未だに凌駕されていない前輪駆動ハンドリングの基準を作り上げました。</p>
<div class="inline-flex items-center gap-2 mt-4 bg-red-50 border border-red-200 rounded px-3 py-2 text-sm font-medium text-red-800">★ FFの究極形。ニュルブルクリンク レコードホルダー。</div>
</div>
</div>
</div>

<div class="jdm-car-entry">
<div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-10">
<div class="text-6xl sm:text-7xl font-bold text-gray-200 leading-none select-none shrink-0">11</div>
<div class="flex-1 min-w-0">
<p class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-1">Nissan · 1989–1994 · "ゴジラ"</p>
<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Nissan Skyline GT-R R32</h2>
<div class="flex flex-wrap gap-x-5 gap-y-1 mb-4 font-mono text-xs text-gray-400">
<span>エンジン <strong class="text-gray-900">RB26DETT 2.6L ツインターボ 直列6気筒</strong></span>
<span>最高出力 <strong class="text-gray-900">276 hp (公称)</strong></span>
<span>駆動方式 <strong class="text-gray-900">ATTESA E-TS 4WD</strong></span>
<span>JTCC戦績 <strong class="text-gray-900">29戦 29勝</strong></span>
</div>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Nissan_Skyline_GT-R_R34_V_Spec_II.jpg/960px-Nissan_Skyline_GT-R_R34_V_Spec_II.jpg" alt="Nissan Skyline GT-R R32" class="w-full aspect-video object-cover rounded my-5" loading="lazy" />
<p class="text-gray-600 leading-relaxed mb-3">「ゴジラ」の異名を獲得した車 — <strong>R32 GT-R</strong> は全日本ツーリングカー選手権を圧倒的な強さで制し、オーストラリアでは一時的に出場禁止になりました。ATTESAフルタイム4WDとスーパーHICAS四輪操舵は、1989年当時として真に革新的な技術でした。現在はアメリカへの輸入が可能になり、急速に価値が上昇しています。R32は、R33/R34の後継モデルよりも低い価格帯で本物のGT-RのDNAを提供しています。</p>
<div class="inline-flex items-center gap-2 mt-4 bg-red-50 border border-red-200 rounded px-3 py-2 text-sm font-medium text-red-800">★ 出場した全レースで優勝。強すぎて禁止された伝説。</div>
</div>
</div>
</div>

<div class="jdm-car-entry">
<div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-10">
<div class="text-6xl sm:text-7xl font-bold text-gray-200 leading-none select-none shrink-0">12</div>
<div class="flex-1 min-w-0">
<p class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-1">Nissan · 1999–2002 · ドリフト・アイコン</p>
<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Nissan Silvia S15 Spec-R</h2>
<div class="flex flex-wrap gap-x-5 gap-y-1 mb-4 font-mono text-xs text-gray-400">
<span>エンジン <strong class="text-gray-900">SR20DET 2.0L ターボ 直列4気筒</strong></span>
<span>最高出力 <strong class="text-gray-900">250 hp</strong></span>
<span>駆動方式 <strong class="text-gray-900">FR 6速マニュアル</strong></span>
<span>市場 <strong class="text-gray-900">日本国内専売</strong></span>
</div>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Nissan_Silvia_S15_001.JPG/960px-Nissan_Silvia_S15_001.JPG" alt="Nissan Silvia S15 Spec-R" class="w-full aspect-video object-cover rounded my-5" loading="lazy" />
<p class="text-gray-600 leading-relaxed mb-3"><strong>S15 Silvia Spec-R</strong> は日本国外で正式に販売されたことがなく、現在のJDM輸入車の中で最も熱望される一台となっています。Spec-RチューンのSR20DETは、2.0リッターから250馬力を発生し — 6速ゲトラグギアボックスを通じて後輪に駆動力を伝達します。優れたバランス、軽量な車体、そして無限のチューニングポテンシャルにより、プロフェッショナル・ドリフトの世界的なスタンダードとなりました。</p>
<div class="inline-flex items-center gap-2 mt-4 bg-red-50 border border-red-200 rounded px-3 py-2 text-sm font-medium text-red-800">★ 日本専売。250 hp。世界が愛したドリフトカー。</div>
</div>
</div>
</div>

<div class="jdm-car-entry">
<div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-10">
<div class="text-6xl sm:text-7xl font-bold text-gray-200 leading-none select-none shrink-0">13</div>
<div class="flex-1 min-w-0">
<p class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-1">Toyota · 1983–1987 · ドリフトの原点</p>
<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Toyota Corolla AE86 Sprinter Trueno</h2>
<div class="flex flex-wrap gap-x-5 gap-y-1 mb-4 font-mono text-xs text-gray-400">
<span>エンジン <strong class="text-gray-900">4A-GE 1.6L DOHC 直列4気筒</strong></span>
<span>最高出力 <strong class="text-gray-900">128 hp</strong></span>
<span>駆動方式 <strong class="text-gray-900">FR 5速</strong></span>
<span>ヘリテージ <strong class="text-gray-900">GR86 / BRZの原型</strong></span>
</div>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/1983_Toyota_Corolla_Levin.jpg/960px-1983_Toyota_Corolla_Levin.jpg" alt="Toyota Corolla AE86 Levin" class="w-full aspect-video object-cover rounded my-5" loading="lazy" />
<p class="text-gray-600 leading-relaxed mb-3"><strong>AE86</strong> は、その後に登場したすべての軽量後輪駆動スポーツカーの精神的先祖です。「ドリフト王」土屋圭市は、日本の峠道でこの車を駆り、自身の伝説の全てを築き上げるとともに、現代ドリフトという芸術を誕生させました。ヤマハと共同開発された4A-GEエンジンは、その時代の自然吸気DOHC設計の模範として今なお高く評価されています。</p>
<p class="text-gray-600 leading-relaxed mb-3">AE86は、Toyota GR86およびSubaru BRZに直接的なインスピレーションを与えました。アニメ<em>頭文字D</em>の主人公の車として、何百万人もの人々にJDM文化を紹介した存在となりました。</p>
<div class="inline-flex items-center gap-2 mt-4 bg-red-50 border border-red-200 rounded px-3 py-2 text-sm font-medium text-red-800">★ ドリフトをモータースポーツとして確立した車。</div>
</div>
</div>
</div>

<div class="jdm-car-entry">
<div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-10">
<div class="text-6xl sm:text-7xl font-bold text-gray-200 leading-none select-none shrink-0">14</div>
<div class="flex-1 min-w-0">
<p class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-1">Nissan · 1989–2000 · グランドツアラー</p>
<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Nissan 300ZX Twin Turbo (Z32)</h2>
<div class="flex flex-wrap gap-x-5 gap-y-1 mb-4 font-mono text-xs text-gray-400">
<span>エンジン <strong class="text-gray-900">VG30DETT 3.0L ツインターボ V6</strong></span>
<span>最高出力 <strong class="text-gray-900">300 hp (JDM)</strong></span>
<span>最高速度 <strong class="text-gray-900">155 mph (リミッター付き)</strong></span>
<span>0–60 <strong class="text-gray-900">約5.6秒</strong></span>
</div>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/1996_Nissan_300ZX_2-seater_t-top%2C_front_left%2C_06-15-2025.jpg/960px-1996_Nissan_300ZX_2-seater_t-top%2C_front_left%2C_06-15-2025.jpg" alt="Nissan 300ZX Twin Turbo Z32" class="w-full aspect-video object-cover rounded my-5" loading="lazy" />
<p class="text-gray-600 leading-relaxed mb-3"><strong>Z32 300ZX Twin Turbo</strong> は、1990年に<em>Road & Track</em>誌のカ・オブ・ザ・イヤーに選出され、当時のすべてのヨーロッパのGTライバルを驚嘆させました。3.0リッターツインターボV6、四輪操舵、そして高度なアクティブサスペンションにより、未来のスポーツカーのような感覚を与えました。JDM仕様は300馬力を発生し、輸出仕様の283馬力を明確に上回っていました。</p>
<div class="inline-flex items-center gap-2 mt-4 bg-red-50 border border-red-200 rounded px-3 py-2 text-sm font-medium text-red-800">★ Road & Track カ・オブ・ザ・イヤー。ヨーロッパを唸らせたグランドツアラー。</div>
</div>
</div>
</div>

<div class="jdm-car-entry">
<div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-10">
<div class="text-6xl sm:text-7xl font-bold text-gray-200 leading-none select-none shrink-0">15</div>
<div class="flex-1 min-w-0">
<p class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-1">Toyota · 1986–1992 · ターボ・クラシック</p>
<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Toyota Supra MK3 Turbo (A70)</h2>
<div class="flex flex-wrap gap-x-5 gap-y-1 mb-4 font-mono text-xs text-gray-400">
<span>エンジン <strong class="text-gray-900">7M-GTE 3.0L ターボ 直列6気筒</strong></span>
<span>最高出力 <strong class="text-gray-900">230 hp</strong></span>
<span>駆動方式 <strong class="text-gray-900">FR</strong></span>
</div>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Toyota_Supra_%28A70%2C_pre-facelift%29_1X7A2552.jpg/960px-Toyota_Supra_%28A70%2C_pre-facelift%29_1X7A2552.jpg" alt="Toyota Supra MK3 Turbo A70" class="w-full aspect-video object-cover rounded my-5" loading="lazy" />
<p class="text-gray-600 leading-relaxed mb-3">MK3 Supraは、後にMK4が不滅の名声を得ることになる血統を確立しました。JDMのターボ仕様は輸出仕様よりも高出力を誇り、跳ね上がるヘッドライト、ロングノーズ、そして1980年代後半の豪華さを漂わせる内装を特徴としていました。MK4の価格が多くのバイヤーにとって手の届かないものとなった現在、真剣なコレクターの注目を集め始めています。</p>
<div class="inline-flex items-center gap-2 mt-4 bg-red-50 border border-red-200 rounded px-3 py-2 text-sm font-medium text-red-800">★ 2JZ伝説の祖。</div>
</div>
</div>
</div>

>>> 隠れた名車 & カルト・クラシック

<div class="jdm-car-entry">
<div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-10">
<div class="text-6xl sm:text-7xl font-bold text-gray-200 leading-none select-none shrink-0">16</div>
<div class="flex-1 min-w-0">
<p class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-1">Mitsubishi · 1996 · ラリー・ブレッド</p>
<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Mitsubishi Lancer Evolution IV</h2>
<div class="flex flex-wrap gap-x-5 gap-y-1 mb-4 font-mono text-xs text-gray-400">
<span>エンジン <strong class="text-gray-900">4G63T 2.0L ターボ 直列4気筒</strong></span>
<span>最高出力 <strong class="text-gray-900">280 hp</strong></span>
<span>駆動方式 <strong class="text-gray-900">4WD AYC</strong></span>
</div>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/2017-04-02_Mitsubishi_Lancer_Evolution_X_MR_SST_14_%282%29.jpg/960px-2017-04-02_Mitsubishi_Lancer_Evolution_X_MR_SST_14_%282%29.jpg" alt="Mitsubishi Lancer Evolution IV" class="w-full aspect-video object-cover rounded my-5" loading="lazy" />
<p class="text-gray-600 leading-relaxed mb-3">Evo IVは、アクティブ・ヨー・コントロール（AYC）システムを採用した最初のエボリューションモデルでした — リミットでのハンドリングを変革するトルクベクタリング・デファレンシャルです。WRCでの勝利が直ちに続きました。そのアグレッシブなラリーヘリテージ、堅牢なパフォーマンス、そしてAYCの登場により、IVはエボリューションの歴史におけるマイルストーンとなり、JDMコミュニティで愛されるアイコンとなりました。</p>
<div class="inline-flex items-center gap-2 mt-4 bg-red-50 border border-red-200 rounded px-3 py-2 text-sm font-medium text-red-800">★ AYCを獲得したエボリューション — すべてを変えた一台。</div>
</div>
</div>
</div>

<div class="jdm-car-entry">
<div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-10">
<div class="text-6xl sm:text-7xl font-bold text-gray-200 leading-none select-none shrink-0">17</div>
<div class="flex-1 min-w-0">
<p class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-1">Nissan NISMO · 1997 · 究極の希少性</p>
<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Nissan Skyline GT-R NISMO 400R</h2>
<div class="flex flex-wrap gap-x-5 gap-y-1 mb-4 font-mono text-xs text-gray-400">
<span>エンジン <strong class="text-gray-900">RB-X GT2 2.8L ツインターボ 直列6気筒</strong></span>
<span>最高出力 <strong class="text-gray-900">400 hp</strong></span>
<span>生産台数 <strong class="text-gray-900">約44台</strong></span>
<span>価格 (1997年) <strong class="text-gray-900">¥12,800,000</strong></span>
</div>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Nissan_Skyline_GT-R_R34_V_Spec_II.jpg/960px-Nissan_Skyline_GT-R_R34_V_Spec_II.jpg" alt="Nissan Skyline GT-R NISMO 400R" class="w-full aspect-video object-cover rounded my-5" loading="lazy" />
<p class="text-gray-600 leading-relaxed mb-3">NISMOがファクトリーで製造したR33 GT-Rのレースホモロゲーションモデルは、RB26DETTの拡大版である2.8リッターエンジンを搭載し、真正の400馬力を発生していました。約44台のみが製造された400Rは、存在する中で最も希少なJDMカーの一台です。記録された個体の価値は50万ドル以上に達しており — 市場で最も極端な価値上昇の一つとなっています。</p>
<div class="inline-flex items-center gap-2 mt-4 bg-red-50 border border-red-200 rounded px-3 py-2 text-sm font-medium text-red-800">★ 44台。400 hp。オークションで50万ドル。</div>
</div>
</div>
</div>

<div class="jdm-car-entry">
<div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-10">
<div class="text-6xl sm:text-7xl font-bold text-gray-200 leading-none select-none shrink-0">18</div>
<div class="flex-1 min-w-0">
<p class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-1">Toyota · 1989–1999 · ミッドシップ・クラシック</p>
<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Toyota MR2 SW20 Turbo</h2>
<div class="flex flex-wrap gap-x-5 gap-y-1 mb-4 font-mono text-xs text-gray-400">
<span>Engine <strong class="text-gray-900">3S-GTE 2.0L Turbo I4</strong></span>
<span>Power <strong class="text-gray-900">245 hp (JDM)</strong></span>
<span>Drive <strong class="text-gray-900">Mid-Engine RWD</strong></span>
</div>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/1993ToyotaMR2Hardtop.jpg/960px-1993ToyotaMR2Hardtop.jpg" alt="Toyota MR2 SW20 Turbo" class="w-full aspect-video object-cover rounded my-5" loading="lazy" />
<p class="text-gray-600 leading-relaxed mb-3">Toyotaのミッドシップ2シーターは、フェラーリに匹敵するスタイリングとハンドリングを、その何分の一かの価格で提供した。JDM仕様のSW20 Turboは245馬力を発生し — 輸出仕様よりも大幅に高出力 — ミッドシップレイアウトによる卓越したコーナリングバランスを備えていた。悪名高い「スナップオーバーステア」の特性により、限界域でのドライビングが難しく、熱心なマニアたちの絶大な支持を集めることとなった。</p>
<div class="inline-flex items-center gap-2 mt-4 bg-red-50 border border-red-200 rounded px-3 py-2 text-sm font-medium text-red-800">★ ミッドシップ、後輪駆動。フェラーリのプロポーション、Toyotaの価格。</div>
</div>
</div>
</div>

<div class="jdm-car-entry">
<div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-10">
<div class="text-6xl sm:text-7xl font-bold text-gray-200 leading-none select-none shrink-0">19</div>
<div class="flex-1 min-w-0">
<p class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-1">Nissan · 1997 · JDMスリーパー</p>
<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Nissan Stagea 260RS</h2>
<div class="flex flex-wrap gap-x-5 gap-y-1 mb-4 font-mono text-xs text-gray-400">
<span>Engine <strong class="text-gray-900">RB26DETT 2.6L Twin-Turbo I6</strong></span>
<span>Power <strong class="text-gray-900">276 hp</strong></span>
<span>Drive <strong class="text-gray-900">ATTESA E-TS AWD</strong></span>
<span>Body <strong class="text-gray-900">5-Door Wagon</strong></span>
</div>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/2001-2004_NISSAN_STAGEA.jpg/960px-2001-2004_NISSAN_STAGEA.jpg" alt="Nissan Stagea 260RS wagon" class="w-full aspect-video object-cover rounded my-5" loading="lazy" />
<p class="text-gray-600 leading-relaxed mb-3">客観的に見て史上最も実用的なGT-R — <strong>Stagea 260RS</strong> はR33 Skyline GT-RからRB26DETTエンジン、ATTESA AWD、ブレーキシステムを移植し、実用的な5ドアワゴンボディに搭載していた。NISMOはフルGT-Rフロントコンバージョンキットを提供していた。同時に史上最も実用的で、かつ最も予想外に速いエステートカーである。</p>
<div class="inline-flex items-center gap-2 mt-4 bg-red-50 border border-red-200 rounded px-3 py-2 text-sm font-medium text-red-800">★ GT-Rエンジン。ワゴンボディ。世界で類を見ない存在。</div>
</div>
</div>
</div>

<div class="jdm-car-entry">
<div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-10">
<div class="text-6xl sm:text-7xl font-bold text-gray-200 leading-none select-none shrink-0">20</div>
<div class="flex-1 min-w-0">
<p class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-1">Honda · 1991–1996 · 軽オープンカー</p>
<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Honda Beat</h2>
<div class="flex flex-wrap gap-x-5 gap-y-1 mb-4 font-mono text-xs text-gray-400">
<span>Engine <strong class="text-gray-900">E07A 0.66L Mid-Mounted I3</strong></span>
<span>Power <strong class="text-gray-900">64 hp</strong></span>
<span>Drive <strong class="text-gray-900">Mid-Engine RWD</strong></span>
<span>Weight <strong class="text-gray-900">1,650 lbs</strong></span>
</div>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Honda_Beat_PP1_front.jpg/960px-Honda_Beat_PP1_front.jpg" alt="Honda Beat kei roadster" class="w-full aspect-video object-cover rounded my-5" loading="lazy" />
<p class="text-gray-600 leading-relaxed mb-3">宗一郎本田自身の個人的な farewell project — 1991年の他界前に創業者自身が承認した — <strong>Honda Beat</strong> は660ccのミッドマウントエンジンをわずか1,650ポンドの小さなオープンロードスターに搭載した。64馬力と2,000ポンド未満の車体重量で、物理的にあり得ないほど速く感じる。Hondaの創業者が個人的に承認した最後の車である。</p>
<div class="inline-flex items-center gap-2 mt-4 bg-red-50 border border-red-200 rounded px-3 py-2 text-sm font-medium text-red-800">★ 宗一郎本田から世界への最後の贈り物。</div>
</div>
</div>
</div>

<div class="jdm-car-entry">
<div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-10">
<div class="text-6xl sm:text-7xl font-bold text-gray-200 leading-none select-none shrink-0">21</div>
<div class="flex-1 min-w-0">
<p class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-1">Toyota · 1989–1999 · WRCの英雄</p>
<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Toyota Celica GT-Four (ST185/ST205)</h2>
<div class="flex flex-wrap gap-x-5 gap-y-1 mb-4 font-mono text-xs text-gray-400">
<span>Engine <strong class="text-gray-900">3S-GTE 2.0L Turbo I4</strong></span>
<span>Power <strong class="text-gray-900">255 hp (ST205)</strong></span>
<span>Drive <strong class="text-gray-900">AWD</strong></span>
<span>WRC Titles <strong class="text-gray-900">3 (1992–1994)</strong></span>
</div>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/CelicaST185GT4APuenteHills.jpg/960px-CelicaST185GT4APuenteHills.jpg" alt="Toyota Celica GT-Four ST185" class="w-full aspect-video object-cover rounded my-5" loading="lazy" />
<p class="text-gray-600 leading-relaxed mb-3">Celica GT-Fourは1990年代前半にToyotaにWRCマニュファクチャラータイトルを3回もたらした。JDM仕様のST205は255馬力を発生 — 歴代最強のCelica — され、よりアグレッシブなインタークーラーとラリー由来のAWDシステムを搭載していた。ST205は後にWRCで不正なリストリクタープレートにより失格となり、すでに伝説的なマシンにさらなる悪名を加えることとなった。</p>
<div class="inline-flex items-center gap-2 mt-4 bg-red-50 border border-red-200 rounded px-3 py-2 text-sm font-medium text-red-800">★ WRCタイトル3回。不正で失格。それでも伝説。</div>
</div>
</div>
</div>

<div class="jdm-car-entry">
<div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-10">
<div class="text-6xl sm:text-7xl font-bold text-gray-200 leading-none select-none shrink-0">22</div>
<div class="flex-1 min-w-0">
<p class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-1">Mazda · 1985–1992 · セカンドジェネレーション</p>
<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Mazda RX-7 FC Turbo</h2>
<div class="flex flex-wrap gap-x-5 gap-y-1 mb-4 font-mono text-xs text-gray-400">
<span>Engine <strong class="text-gray-900">13B Turbo 1.3L Twin-Rotor</strong></span>
<span>Power <strong class="text-gray-900">185–215 hp (JDM)</strong></span>
<span>Drive <strong class="text-gray-900">RWD</strong></span>
</div>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Tuned_Mazda_SAVANNA_RX-7_GT-R_%28E-FC3S%29_front.jpg/960px-Tuned_Mazda_SAVANNA_RX-7_GT-R_%28E-FC3S%29_front.jpg" alt="Mazda Savanna RX-7 FC3S" class="w-full aspect-video object-cover rounded my-5" loading="lazy" />
<p class="text-gray-600 leading-relaxed mb-3">伝説のFDが登場する前に<strong>FC</strong>が存在した — JDMターボ仕様では、それは真剣なスポーツカーだった。Mazdaのターボチャージド13BロータリーをFCシャシーに搭載し、ポップアップヘッドライト、ほぼ完璧なバランス、そしてピストンエンジンとは全く異なるサウンドで純粋なドライビング体験を提供した。FDが予算を超えて手が届かなくなる中、コレクター価値が高まりつつある。</p>
<div class="inline-flex items-center gap-2 mt-4 bg-red-50 border border-red-200 rounded px-3 py-2 text-sm font-medium text-red-800">★ FDの過小評価された、同じく純粋な先代。</div>
</div>
</div>
</div>

<div class="jdm-car-entry">
<div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-10">
<div class="text-6xl sm:text-7xl font-bold text-gray-200 leading-none select-none shrink-0">23</div>
<div class="flex-1 min-w-0">
<p class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-1">Toyota / Yamaha · 1967–1970 · オリジナル</p>
<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Toyota 2000GT</h2>
<div class="flex flex-wrap gap-x-5 gap-y-1 mb-4 font-mono text-xs text-gray-400">
<span>Engine <strong class="text-gray-900">2M 2.0L DOHC I6</strong></span>
<span>Power <strong class="text-gray-900">150 hp</strong></span>
<span>Units Made <strong class="text-gray-900">351</strong></span>
<span>Value <strong class="text-gray-900">$500,000–$1,000,000+</strong></span>
</div>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/TOYOTA_2000GT.jpg/960px-TOYOTA_2000GT.jpg" alt="Toyota 2000GT classic" class="w-full aspect-video object-cover rounded my-5" loading="lazy" />
<p class="text-gray-600 leading-relaxed mb-3">日本が世界水準のスポーツカーを作れることを証明した車 — Yamahaと共同開発された<strong>Toyota 2000GT</strong> は、1967年の東京モーターショーで初公開され、観衆を驚嘆させた。オープンモデルはジェームズ・ボンド映画<em>007は二度死ぬ</em>（1967年）に登場した。わずか351台が生産され、現在ではオークション史上最も高価な日本車であり、 regularly exceeding $1,000,000 で取引されている。</p>
<div class="inline-flex items-center gap-2 mt-4 bg-red-50 border border-red-200 rounded px-3 py-2 text-sm font-medium text-red-800">★ 日本初のスーパーカー。ジェームズ・ボンドカー。100万ドル。</div>
</div>
</div>
</div>

<div class="jdm-car-entry">
<div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-10">
<div class="text-6xl sm:text-7xl font-bold text-gray-200 leading-none select-none shrink-0">24</div>
<div class="flex-1 min-w-0">
<p class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-1">Nissan · 1969–1972 · ビンテージGT-R</p>
<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Nissan Skyline GT-R KPGC10 "Hakosuka"</h2>
<div class="flex flex-wrap gap-x-5 gap-y-1 mb-4 font-mono text-xs text-gray-400">
<span>Engine <strong class="text-gray-900">S20 2.0L DOHC 24V I6</strong></span>
<span>Power <strong class="text-gray-900">160 hp</strong></span>
<span>Race Record <strong class="text-gray-900">50 consecutive wins in Japan</strong></span>
<span>Units Made <strong class="text-gray-900">~1,945</strong></span>
</div>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Nissan_KPGC10_Skyline_2000GT-R_%2822091110222%29.jpg/960px-Nissan_KPGC10_Skyline_2000GT-R_%2822091110222%29.jpg" alt="Nissan Skyline 2000GT-R KPGC10 Hakosuka" class="w-full aspect-video object-cover rounded my-5" loading="lazy" />
<p class="text-gray-600 leading-relaxed mb-3">初代GT-R — <strong>Hakosuka</strong>（箱型スカイライン） — は1969年のデビュー後、日本で50連勝を達成し、GT-Rの名をレーシングレジェンドとして確立した。Yamahaが開発したS20エンジンはNissan Princeレーシングプログラムをベースとしていた。今日、本物のKPGC10 GT-Rを見つけることは、日本車コレクティングにおける最も名誉ある成就の一つである。</p>
<div class="inline-flex items-center gap-2 mt-4 bg-red-50 border border-red-200 rounded px-3 py-2 text-sm font-medium text-red-800">★ 50連勝。GT-Rレガシーの原点。</div>
</div>
</div>
</div>

<div class="jdm-car-entry">
<div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b border-gray-100 py-10">
<div class="text-6xl sm:text-7xl font-bold text-gray-200 leading-none select-none shrink-0">25</div>
<div class="flex-1 min-w-0">
<p class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-1">Mazda · 1989–1997 · 万人に愛されるクラシック</p>
<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Mazda MX-5 Miata / Eunos Roadster (NA)</h2>
<div class="flex flex-wrap gap-x-5 gap-y-1 mb-4 font-mono text-xs text-gray-400">
<span>Engine <strong class="text-gray-900">B6-ZE / BP-ZE 1.6–1.8L I4</strong></span>
<span>Power <strong class="text-gray-900">115–131 hp</strong></span>
<span>Weight <strong class="text-gray-900">~2,100 lbs</strong></span>
<span>Production <strong class="text-gray-900">World's Best-Selling Roadster</strong></span>
</div>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Eunos.jpg/960px-Eunos.jpg" alt="Mazda MX-5 Miata NA Eunos Roadster" class="w-full aspect-video object-cover rounded my-5" loading="lazy" />
<p class="text-gray-600 leading-relaxed mb-3">JDM仕様 — <strong>Eunos Roadster</strong> として販売 — はレザーインテリアと輸出市場では利用できない標準装備のアップグレードを備えていた。NA Miataの自動車文化への影響は計り知れない：1970年代に消滅していた小型で手頃な価格のロードスターセグメントを単独で復活させ、パワーよりも軽さを重視する哲学はその後数十年にわたって開発されるあらゆるスポーツカーに影響を与えた。</p>
<p class="text-gray-600 leading-relaxed mb-3">史上最も売れたロードスターであり、世界で最もレースに使われている量産車であり、多くの指標においてあらゆる価格帯で最も純粋なドライビングの歓びを表現している。</p>
<div class="inline-flex items-center gap-2 mt-4 bg-red-50 border border-red-200 rounded px-3 py-2 text-sm font-medium text-red-800">★ 過去40年間で最も重要なスポーツカー。</div>
</div>
</div>
</div>

<div class="jdm-buying-guide">
<h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">JDM購入ガイド：知っておくべきこと</h2>
<p class="text-gray-500 leading-relaxed mb-6">JDM車を輸入するには、適切なモデルを見つける以上のことが必要です。海外に送金する前に、すべての購入者が理解すべき重要なポイントを紹介します。</p>
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
<div class="bg-gray-50 border border-gray-100 rounded-lg p-5">
<h4 class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-2">25年輸入ルール</h4>
<p class="text-sm text-gray-600 leading-relaxed">米国では、25年以上経過した車両はEPA/NHTSA適合免除で輸入可能（49 CFR 591.5）。モデル年式ではなく、製造年月日を慎重に確認すること。</p>
</div>
<div class="bg-gray-50 border border-gray-100 rounded-lg p-5">
<h4 class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-2">走行距離と書類</h4>
<p class="text-sm text-gray-600 leading-relaxed">日本のオークション検査シート（評価3.5以上が良好、4以上が優秀）と日本語のサービス記録が主な品質の指標。メーターの改ざんは稀だが存在する。</p>
</div>
<div class="bg-gray-50 border border-gray-100 rounded-lg p-5">
<h4 class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-2">錆は最大の敵</h4>
<p class="text-sm text-gray-600 leading-relaxed">日本の沿岸気候と凍結防止剤の使用により、錆の点検が極めて重要。シャシレール、ホイールハウス、フロアパンを徹底的に点検するか、購入前点検に費用を払うこと。</p>
</div>
<div class="bg-gray-50 border border-gray-100 rounded-lg p-5">
<h4 class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-2">送料と関税</h4>
<p class="text-sm text-gray-600 leading-relaxed">RoRoまたはコンテナ輸送（$1,500–$4,000）、米国関税（申告価額の2.5%）、港湾手数料、州登録費用を見込むこと。陸送込み総費用は通常購入価格の15–20%増となる。</p>
</div>
<div class="bg-gray-50 border border-gray-100 rounded-lg p-5">
<h4 class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-2">パーツの入手性</h4>
<p class="text-sm text-gray-600 leading-relaxed">主流のJDM車（Skyline、Supra、S15、Evo）は専門店を通じてパーツが豊富に入手可能。よりマニアックなモデルは日本から直接調達する必要がある場合がある。</p>
</div>
<div class="bg-gray-50 border border-gray-100 rounded-lg p-5">
<h4 class="font-mono text-xs tracking-widest uppercase text-amber-600 mb-2">価値の推移</h4>
<p class="text-sm text-gray-600 leading-relaxed">アイコンモデル（R34、Supra MK4、NSX-R、22B）は過去10年で300–800%価値が上昇した。現在の最適なエントリーポイントはR32、FC RX-7、S13 Silvia — いずれも最近輸入対象となったばかり。</p>
</div>
</div>
</div>

<div class="jdm-faq">
<h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">よくある質問</h2>
<div class="border-b border-gray-100 py-5">
<p class="font-semibold text-gray-900 mb-2">JDMとは何の略ですか？</p>
<p class="text-sm text-gray-600 leading-relaxed">JDMはJapanese Domestic Market（日本国内市場）の略 — 日本国内向けに日本の仕様で製造された車両を指す。これらは同じモデルの輸出仕様と比較して、異なる仕様、トリムレベル、出力を持つことが多い。</p>
</div>
<div class="border-b border-gray-100 py-5">
<p class="font-semibold text-gray-900 mb-2">2025年に最も投資価値の高いJDM車はどれですか？</p>
<p class="text-sm text-gray-600 leading-relaxed">Nissan Skyline GT-R R34とToyota Supra MK4はすでにコレクターの領域にある。値上がり余地を探している購入者にとって、R32 GT-R、Honda S2000、Mazda RX-7 FCは輸入業者から歴史的意義に比べて過小評価されていると頻繁に挙げられる。</p>
</div>
<div class="border-b border-gray-100 py-5">
<p class="font-semibold text-gray-900 mb-2">米国に合法輸入できるJDM車はどれですか？</p>
<p class="text-sm text-gray-600 leading-relaxed">2025年現在、2000年以前に製造された車両は25年ルールにより輸入対象となる。これにはNissan Skyline R34 GT-R（2002年モデルは2027年まで対象外）、Honda S2000（1999–2009年、初期モデルが対象）、すべてのEvo I～VIモデルが含まれる。このルールは毎年1年ずつ適用が進む。</p>
</div>
<div class="border-b border-gray-100 py-5">
<p class="font-semibold text-gray-900 mb-2">なぜ一部のJDM車は日本国外で販売されなかったのですか？</p>
<p class="text-sm text-gray-600 leading-relaxed">いくつかの理由がある：JDM専用モデルは少量生産で輸出用の適合認証にコストが合わなかった；一部は日本の道路や条件に特化してチューンされていた；他は日本の紳士協定により出力を276馬力に制限していた（この上限により一部市場での輸出販売が難しかった）；そしてCivic Type R EK9のように、より広い市場の嗜好には焦点が絞りすぎていると見なされたものもあった。</p>
</div>
<div class="border-b border-gray-100 py-5">
<p class="font-semibold text-gray-900 mb-2">最も高価なJDM車はどれですか？</p>
<p class="text-sm text-gray-600 leading-relaxed">Toyota 2000GTがJDMオークション史上最高額を記録しており、最良の個体は$1,000,000を超える。現代のJDM車の中では、Nissan Skyline GT-R NISMO 400Rが常に$500,000以上で取引され、次いでSubaru Impreza 22B STiが状態の良い個体で$200,000–$300,000以上となっている。</p>
</div>
<div class="border-b border-gray-100 py-5">
<p class="font-semibold text-gray-900 mb-2">初めての購入者に最適なJDM車はどれですか？</p>
<p class="text-sm text-gray-600 leading-relaxed">Mazda MX-5 Miata NA / Eunos Roadsterは、手頃な価格、パーツの入手性、信頼性、純粋なドライビングプレジャーのバランスが最も優れている。ターボチャージド体験を予算内で求める人には、初期のNissan Silvia（S13、S14）やHonda Civicが本物のJDMキャラクターを手頃な価格で提供している。</p>
</div>
</div>

## 結論

**Nissan Skyline GT-R R34** から **Mazda MX-5 Miata** に至るまで、このリストのすべての車は、日本のエンジニアたちが従来のルールに従うことを拒否した瞬間を代表している。彼らはヨーロッパやアメリカが同じ価格帯で生み出したものよりも、軽く、賢く、チューン可能で、スリリングな車を作り上げた。JDMの時代は自動車史の一章に過ぎなかったのではない — それは世界がパフォーマンスカーについて考える方法を根本から変えた革命だった。

メーカー仕様、JDMBUYSELL、JDMDrives、TopSpeed、Drifted、VividRacing、JDM Sport Classicsから編集された情報。すべての価格は市場推定値であり、変更される可能性があります。輸入前に必ず車両の適格性を確認してください。`,
    },
  },
  {
    slug: "japan-used-car-market-news-2025-2026",
    title: {
      zh: "日本中古车市场新闻 2025–2026：高级、经典与限量车型的崛起",
      en: "Japan Used Car Market News 2025–2026: The Rise of Premium, Classic & Limited-Edition Vehicles",
      ja: "日本中古車市場ニュース 2025–2026：プレミアム・クラシック・限定車の台頭",
    },
    excerpt: {
      zh: "从拍卖会上以六位数成交的 JDM 传奇跑车，到运往中东的手工豪华面包车，日本高端中古车市场正在蓬勃发展。深入解析 709 亿美元市场如何重塑全球收藏车格局。",
      en: "From vintage JDM legends commanding six-figure sums to hand-built luxury minivans shipped to the Middle East, Japan's high-end used car segment is booming. A deep-dive into the $70.9 billion market reshaping the global collector car landscape.",
      ja: "オークションで6桁の価格を叩き出すビンテージJDMレジェンドから、中東へ出荷される高級ミニバンまで。日本のハイエンド中古車セグメントは急成長中。709億ドル市場がグローバルなコレクターカーの景色をどう変えているのか、徹底解説。",
    },
    category: { zh: "市场资讯", en: "Market News", ja: "市場情報" },
    date: "2026-06-10",
    readTime: { zh: "15分钟阅读", en: "15 min read", ja: "15分で読める" },
    color: "bg-amber-500",
    image: "https://images.unsplash.com/photo-1692406069831-0bb7ea297645?w=1200&q=80",
    content: {
      zh: `## 为什么全球目光聚焦日本高端二手车市场

长期以来，日本一直是全球最值得信赖的二手车来源地。但在大量涌入各国港口的畅销混动车型和家庭SUV之外，一场更安静、更独特的变革正在悄然兴起——它的推动者是收藏家、投资者和汽车发烧友，他们追逐的是史上最令人心驰神往的汽车珍品。

从拍卖会上以六位数成交的JDM传奇老车，到远销中东的手工精制豪华MPV，日本高端二手车市场在2025年蓬勃兴旺，进入2026年依然势头不减。

![日本汽车拍卖场](https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80)

## 日本二手车市场概览：709亿美元规模持续扩张

2025年日本二手车市场估值达**709亿美元**，预计到2034年将增长至**1,241亿美元**——复合年增长率（CAGR）为**6.41%**。这一增长的核心驱动力来自日本独特而严苛的车辆检验文化（即"车检"制度），它使车辆保持极佳状态，并形成了全球独一无二的优质二手车供给体系。

日本最大的汽车拍卖平台运营商**USS株式会社**报告称，2025年4月至11月期间，上拍车辆达**2,331,773辆**，同比**增长12.1%**，同期成交**1,546,608辆**。平均成交价为**123.3万日元（约合8,000美元）**，但在高端细分市场，这一数字呈指数级增长。

## 日本二手车出口动态：2025年堪称"黄金时代"

### 出口量再创新高

2025年是日本二手车出口连续增长的**第五个年头**，年出口量同比增长**9.1%**，达到约**170万辆**——连续第三年刷新历史纪录。日本汽车出口总额在2025年达到**1,053.9亿美元**。

日元贬值形成了结构性助推：美元兑日元汇率长期在140–150区间波动，使得日本二手车对海外买家而言实际上比2022年之前的汇率水平**便宜了约30%**。

### 主要出口目的地

- **非洲、南亚、中东、太平洋地区**：对日本品质的需求持续增长
- **智利**：2025年9月出口量同比激增**103.3%**
- **坦桑尼亚**：非洲最大的右舵车集散地，仅9月就接收了**12,478辆**
- **阿联酋**：高端车型和豪华MPV的首选目的地
- **俄罗斯和蒙古**：受法规限制影响，2026年初出口量大幅下滑

![港口集装箱运输](https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80)

### 2026年："简单模式"的终结？

2026年1月的快报数据显示出口略有下滑——出口量**94,810辆**，同比下降**1.8%**——主要原因是俄罗斯和蒙古实施新规后，对两国的出口下降近**20%**。市场分析师将2026年描述为大批量出口商"简单模式"的终结，优势正向那些能够为挑剔的全球买家采购优质混动车型、SUV和高端车型的从业者转移。

## JDM经典车热潮：投资级资产

### 为什么JDM传奇车型正在成为"蓝筹"资产

日本二手车市场最引人瞩目的篇章，或许是JDM（日本国内市场）性能跑车的爆发式升值。曾经平易近人的运动轿车，如今已成为全球公认的收藏级资产，其升值表现经常超越传统投资工具。

**日产R34 Skyline GT-R**——绰号"哥斯拉"——车况良好的车型如今常以**15万美元以上**成交，稀有版本如Z-Tune更是突破**30万美元**。**丰田Supra Mk4**（JZA80），尤其是双涡轮增压手动挡版本，JDM规格的车型已突破**10万美元以上**。

![经典JDM跑车](https://images.unsplash.com/photo-1694114420400-56d2261008df?w=800&q=80)

### 25年进口规则的关键催化作用

美国的**25年进口规则**是一个转折点。2024–2025年间符合联邦进口合规要求的车型——包括R34 GT-R和JZA80 Supra——释放了海量的美国买家需求。加拿大的15年进口规则同样为更早期的车型打开了大门。

### 值得关注的JDM车型（2025–2026）

| 车型 | 估价区间 | 核心驱动力 |
|---|---|---|
| 日产Skyline R34 GT-R | $150,000–$300,000+ | 美国进口合规开放，极度稀缺 |
| 丰田Supra JZA80（Mk4） | $100,000–$180,000 | 改装文化传承，流行文化符号 |
| 马自达RX-7 FD（Spirit R） | $60,000–$120,000 | 转子引擎稀缺性，设计经典 |
| 本田NSX（NA1/NA2） | $80,000–$160,000 | 法拉利劲敌，历史地位卓越 |
| 三菱Lancer Evo VI–VIII | $35,000–$80,000 | 拉力赛血统，收藏热度攀升 |
| 日产Skyline R32 GT-R | $40,000–$80,000 | "哥斯拉"血统的入门之选 |

由于供给日益减少，车况优良、低里程、未经改装（"原装"）的车型价格持续攀升。日本国内的拍卖行正日益成为获取原始状态珍品的唯一来源。

## 豪华与超高端细分市场

### 日本豪华MPV现象

当JDM跑车占据收藏界的头条时，日本的超豪华MPV市场同样书写着精彩的出口故事。**丰田Alphard（埃尔法）**及其姊妹车型**Vellfire（威尔法）**已成为从东南亚到海湾国家的首选行政座驾，催生了巨大的二手车出口需求。

全球市场上二手埃尔法的价格区间从**13,000美元到53,000美元**不等，具体取决于代际和车况，而顶配的**Executive Lounge S**版本在近新车况下经常超过**45,000美元**。

![豪华座驾](https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&q=80)

**丰田兰德酷路泽**依然是全球越野豪华的标杆，由于全球范围的稀缺性和品牌坚如磐石的口碑，二手车在国际市场上的售价通常比日本原零售价高出**30%–50%**。

### 日本拍卖行中的欧洲顶级豪车

日本同时也是欧洲豪华和超跑品牌的重要二级市场。**保时捷、法拉利、梅赛德斯-奔驰、宝马Alpina、兰博基尼和宾利**等品牌的车况优良、低里程车型源源不断地流通于日本各大拍卖会——通常附带着令全球买家趋之若鹜的精细日式保养记录。

## 日本拍卖体系如何支撑高端市场

日本的汽车拍卖生态是高端二手车繁荣的基础设施支柱：

- **USS**是日本最大的拍卖平台，每年处理数百万辆车辆，以日本著名的精细化**1–5级车况评估报告**著称
- **4级及以上**代表优秀车况——是全球高端买家公认的基准
- 拍卖如今几乎完全**数字化并向全球开放**，国际买家可以实时出价竞拍
- 任何细分市场的成交率超过**60%**通常意味着市场过热

![汽车拍卖与检测](https://images.unsplash.com/photo-1508974239320-0a029497e820?w=800&q=80)

## 2026年关键趋势

- **从走量到走质**——"什么都收、直接出口"的时代正在终结。2026年的赢家是那些以数据驱动精准采购优质混动车型、高端SUV和JDM收藏品的从业者。

- **JDM成为金融资产**——机构级收藏家和投资基金正在进入JDM市场，将汽车视为艺术品或名表般的投资标的。针对收藏车的保险产品和专业仓储设施在日本不断扩大。

- **日元汇率风险**——2026年初日元的走强开始压缩出口商利润。以日元支付拍卖价格、以美元CIF价格销售的双重汇率敞口令人承压。

- **中国电动车竞争**——中国品牌电动车开始在发展中国家以价格优势挑战日本二手车。但在高端市场，日本品质依然胜出。

- **法规收紧**——多个出口目的国已实施更严格的排放标准、右舵限制或车辆年限要求，贸易流向正在向阿联酋、东南亚和拉丁美洲重新洗牌。

- **在线拍卖全球化**——USS、TAA和Goo-net Exchange等平台已使日本的高端库存对**100多个国家**的买家可见且可触达。

## 买家指南

- **拍卖等级**：投资级采购务必以**4级及以上**为目标
- **改装状态**：对于JDM收藏车，未经改装的"原装"车型溢价显著
- **保养记录**：日本精细的维保文化意味着许多车辆附带完整的4S店保养档案
- **进口法规**：购买前务必确认您所在国家的进口规定（年限限制、排放标准、方向盘位置）
- **运输费用**：日本二手车出口的运输费用通常为**1,000–2,500美元**，取决于车辆尺寸和目的地
- **汇率风险**：鉴于2026年日元波动，尽量锁定汇率，并以您的本币核算CIF成本

## 结语

2025至2026年的日本二手车市场新闻，讲述的是关于非凡需求、持续升值和全球买家对无可替代品质的热切追求。无论是一辆崭新的R34 GT-R驶向美国收藏家的车库，一台顶配埃尔法奔赴迪拜，还是一辆经典兰德酷路泽远赴东非——全世界对日本汽车卓越品质的渴望永无止境。

日本的高端二手车市场已不再是一个小众领域，**它本身已成为一个全球性的资产类别。**`,
      en: `## Why the World Is Watching Japan's Premium Used Car Market

Japan has long been the world's most trusted source of pre-owned vehicles. But beyond the popular hybrids and family SUVs that flood global ports, a quieter, more exclusive revolution is underway — one driven by collectors, investors, and enthusiasts chasing some of the most desirable automobiles ever built.

From vintage JDM legends commanding six-figure sums at auction, to hand-built luxury minivans shipped to the Middle East, Japan's high-end used car segment is booming in 2025 and shows no sign of slowing in 2026.

![Japan car auction lot](https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80)

## Japan Used Car Market Overview: $70.9 Billion and Growing

The Japan used car market was valued at **USD 70.9 billion** in 2025, with forecasts projecting growth to **USD 124.1 billion by 2034** — a compound annual growth rate (CAGR) of **6.41%**. This expansion is fueled by Japan's uniquely stringent vehicle inspection culture (the *shaken* system), which keeps cars in exceptional condition and creates a premium second-hand supply unlike anywhere else on earth.

**USS Co., Ltd.** — Japan's largest auto auction operator — reported that from April to November 2025, **2,331,773 units** were listed, a **12.1% year-on-year increase**, while **1,546,608 vehicles** were purchased during the same period. The average winning price hit **¥1.233 million (~USD 8,000)**, but in the premium segment, figures are exponentially higher.

## Japan Used Car Export News: 2025 Was the "Golden Age"

### Record-Breaking Export Volume

2025 marked the **fifth consecutive year** of used car export growth, with annual volume jumping **9.1% year-on-year** to approximately **1.7 million units** — the third consecutive record-breaking high. The total value of Japan's automotive exports reached **$105.39 billion** in 2025.

The weak yen has been a structural accelerator: with the USD/JPY rate hovering around 140–150 yen, Japanese used cars were effectively **30% cheaper** for overseas buyers compared to pre-2022 exchange rates.

### Key Export Destinations

- **Africa, South Asia, Middle East, Pacific**: Consistently growing demand for Japanese quality
- **Chile**: Exports surged **+103.3% year-on-year** in September 2025
- **Tanzania**: Africa's largest right-hand-drive hub, receiving **12,478 units** in September alone
- **UAE**: A prime destination for high-end models and luxury vans
- **Russia & Mongolia**: Slowed sharply in early 2026 due to regulatory restrictions

![Shipping containers at port](https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80)

### 2026: End of "Easy Mode"?

The January 2026 flash report showed a slight dip — **94,810 units** exported, down **1.8%** from the prior year — largely due to nearly **20% drops** in Russian and Mongolian exports following new regulations. Market analysts now describe 2026 as the end of "easy mode" for bulk exporters, with the advantage shifting to those who can source high-quality hybrids, SUVs, and premium models for discerning global buyers.

## The JDM Classic Car Boom: Investment-Grade Assets

### Why JDM Legends Are the New Blue-Chip Assets

Perhaps the most dramatic chapter in Japan used car market news is the explosive appreciation of classic Japanese domestic market (JDM) performance cars. What were once affordable sports cars have become globally recognized collector assets, routinely outperforming traditional investment vehicles.

The **Nissan R34 Skyline GT-R** — nicknamed "Godzilla" — now regularly commands **$150,000+** for clean examples, with rare variants like the Z-Tune exceeding **$300,000**. The **Toyota Supra Mk4** (JZA80), especially twin-turbo manual versions, has crossed **$100,000+** for JDM-spec examples.

![Classic JDM sports car](https://images.unsplash.com/photo-1694114420400-56d2261008df?w=800&q=80)

### The 25-Year Import Rule Catalyst

The United States' **25-year import rule** was a turning point. Models that became federally legal to import in 2024–2025 — including the R34 GT-R and JZA80 Supra — unlocked a massive wave of American demand. Canada's 15-year rule similarly opened doors for earlier models.

### Top JDM Models to Watch (2025–2026)

| Model | Estimated Value | Key Driver |
|---|---|---|
| Nissan Skyline R34 GT-R | $150,000–$300,000+ | US import eligibility, extreme rarity |
| Toyota Supra JZA80 (Mk4) | $100,000–$180,000 | Tuner legacy, cultural icon |
| Mazda RX-7 FD (Spirit R) | $60,000–$120,000 | Rotary rarity, design icon |
| Honda NSX (NA1/NA2) | $80,000–$160,000 | Ferrari rival, historic significance |
| Mitsubishi Lancer Evo VI–VIII | $35,000–$80,000 | Rally pedigree, rising collector interest |
| Nissan Skyline R32 GT-R | $40,000–$80,000 | Entry point to Godzilla lineage |

Prices for clean, low-mileage, unmodified ("stock") examples continue to rise due to dwindling supply. Japan's domestic auction houses are increasingly the only source for pristine, original-condition specimens.

## Luxury & Ultra-Premium Segment

### The Japanese Luxury MPV Phenomenon

While JDM sports cars dominate collector headlines, Japan's ultra-luxury minivan segment tells an equally compelling export story. The **Toyota Alphard** and its twin **Vellfire** have become the preferred executive transport in markets from Southeast Asia to the Gulf states, generating massive used-car export demand.

Used Alphard prices on the global market range from **$13,000 to $53,000** depending on generation and condition, but top-spec **Executive Lounge S** grades in near-new condition frequently exceed **$45,000**.

![Luxury vehicle](https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&q=80)

The **Toyota Land Cruiser** remains a global benchmark for off-road luxury, with used examples selling internationally for **30–50% above** their original Japanese retail price due to worldwide scarcity and the brand's bulletproof reputation.

### High-End European Exotics via Japanese Auctions

Japan is also a significant secondary market for European luxury and exotic brands. **Porsche, Ferrari, Mercedes-Benz, BMW Alpina, Lamborghini, and Bentley** all flow through Japanese auctions in well-maintained, low-mileage examples — often with meticulous Japanese service records that global buyers prize.

## How Japan's Auction System Powers the Premium Market

Japan's vehicle auction ecosystem is the infrastructure backbone of the premium used car boom:

- **USS** (United States of Showa) is the dominant platform, processing millions of units annually with Japan's famously detailed **1–5 grade inspection reports**
- Grades **4 and above** signal excellent condition — the benchmark for premium buyers worldwide
- Auctions are now almost entirely **digital and globally accessible**, with international buyers able to bid in real time
- Contract rates above **60%** for any given segment typically signal an overheated market

![Car auction and inspection](https://images.unsplash.com/photo-1508974239320-0a029497e820?w=800&q=80)

## Key Trends Shaping 2026

- **From Volume to Value** — The era of "buy anything and export it" is ending. Winners in 2026 are sourcing high-quality hybrids, premium SUVs, and JDM collectibles with data-driven precision.

- **JDM as Financial Asset** — Institutional-grade collectors and investment funds are entering the JDM market, treating vehicles like art or watches. Insurance products and specialized storage facilities for collector cars are expanding in Japan.

- **Yen Volatility Risk** — A strengthening yen in early 2026 has begun compressing exporter margins. Those paying auction prices in JPY and selling CIF in USD face double exposure.

- **Chinese EV Competition** — Chinese-branded EVs are beginning to challenge Japanese used cars in developing markets on price. For the premium segment, Japanese quality still wins.

- **Regulatory Tightening** — Several export-destination countries have imposed stricter emissions, right-hand-drive, or age-of-vehicle restrictions, reshuffling trade flows toward UAE, Southeast Asia, and Latin America.

- **Online Auctions Go Global** — Platforms like USS, TAA, and Goo-net Exchange have made Japan's premium inventory visible and accessible to buyers in **100+ countries**.

## Buyer's Guide

- **Auction Grades**: Always target **Grade 4 or above** for investment-grade purchases
- **Modification Status**: For collector JDM cars, unmodified "stock" examples command substantial premiums
- **Service Records**: Japan's culture of meticulous maintenance means many vehicles come with complete dealer service histories
- **Import Regulations**: Verify your country's import rules (age restrictions, emissions, steering position) before purchasing
- **Shipping Costs**: Japan used car export shipping typically costs **$1,000–$2,500** depending on vehicle size and destination
- **Currency Risk**: With yen volatility in 2026, lock in FX rates where possible and calculate CIF costs in your base currency

## Conclusion

Japan used car market news in 2025–2026 tells a story of extraordinary demand, rising values, and a global audience hungry for quality that cannot be replicated. Whether it's a pristine R34 GT-R heading to an American collector, a top-spec Alphard bound for Dubai, or a vintage Land Cruiser destined for East Africa — the world's appetite for Japanese automotive excellence is insatiable.

Japan's premium used car segment is no longer a niche; **it is a global asset class in its own right.**`,
      ja: `## なぜ世界が日本のプレミアム中古車市場に注目しているのか

日本は長年にわたり、世界が最も信頼する中古車の供給源であり続けてきた。しかし、世界中の港に次々と届けられる人気のハイブリッドカーやファミリーSUVの陰で、より静かで、よりエクスクルーシブな革命が進んでいる——その牽引者は、これまでに建造された最も魅力的な自動車を追い求めるコレクター、投資家、そして熱狂的な愛好家たちだ。

オークションで6桁の価格を叩き出すヴィンテージJDMレジェンドから、中東へ出荷される手作りの高級ミニバンに至るまで、日本のハイエンド中古車セグメントは2025年に爆発的な成長を見せ、2026年に入ってもその勢いは衰れる気配がない。

![日本のカー オークション会場](https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80)

## 日本中古車市場概況：709億ドル規模で成長継続

2025年の日本中古車市場は**709億米ドル**と評価され、2034年までに**1,241億米ドル**に成長すると予測されている——年間平均成長率（CAGR）は**6.41%**。この拡大を支えているのは、日本特有の厳格な車検制度（*shaken*）であり、車両を極めて良好な状態に保ち、世界のどこにも類を見ないプレミアムな中古車供給を生み出している。

日本最大の自動車オークション運営会社である**USS株式会社**の報告によると、2025年4月から11月までに**2,331,773台**が出品され、前年比**12.1%の増加**となり、同期間に**1,546,608台**が落札された。平均落札価格は**123.3万円（約8,000米ドル）**に達したが、プレミアムセグメントではこの数字は桁違いに跳ね上がる。

## 日本中古車輸出ニュース：2025年は「黄金時代」

### 記録的な輸出台数

2025年は中古車輸出が成長を記録した**連続5年目**となり、年間輸出台数は前年比**9.1%増**の約**170万台**に達した——過去最高を更新する3年連続の記録である。2025年の日本の自動車輸出総額は**1,053.9億ドル**に達した。

円安は構造的な追い風となった：ドル/円レートが140～150円付近で推移する中、日本の中古車は海外のバイヤーにとって2022年以前の為替水準と比較して実質的に**30%安く**なっていた。

### 主要輸出先

- **アフリカ、南アジア、中東、太平洋地域**：日本の品質に対する需要が安定して成長
- **チリ**：2025年9月の輸出が前年比**+103.3%**と急増
- **タンザニア**：アフリカ最大の右ハンドル車拠点、9月だけで**12,478台**を受領
- **UAE**：ハイエンドモデルと高級バンの主要な輸出先
- **ロシア・モンゴル**：規制強化により2026年初頭に大幅減少

![港湾のコンテナ](https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80)

### 2026年：「イージーモード」の終わり？

2026年1月の速報値はわずかな減少を示した——輸出台数**94,810台**、前年比**1.8%減**——主な要因は、新規制導入後のロシア・モンゴル向け輸出が**約20%減少**したことだ。市場アナリストは2026年を大量輸出業者にとっての「イージーモード」の終焉と位置付け、優位性は質の高いハイブリッド車、SUV、プレミアムモデルを厳選して仕入れることができる業者に移りつつあると分析している。

## JDMクラシックカー ブーム：投資級資産

### なぜJDMレジェンドは新しい「ブルーチップ」資産なのか

日本中古車市場ニュースの中で最もドラマチックな章は、間違いなくJDM（日本国内市場）パフォーマンスカーの爆発的な価値上昇だろう。かつては手の届くスポーツカーだった車々が、今や世界的に認知されたコレクター資産となり、伝統的な投資対象を常に凌駕するリターンを記録している。

**日産R34スカイラインGT-R**——通称「ゴジラ」——は、状態の良い個体で現在**15万ドル以上**で取引され、Z-Tuneなどのレアバリアントは**30万ドル**を超える。**トヨタ スープラ Mk4**（JZA80）、特にツインターボ マニュアル車は、JDM仕様で**10万ドル以上**に達している。

![クラシックJDMスポーツカー](https://images.unsplash.com/photo-1694114420400-56d2261008df?w=800&q=80)

### 25年輸入ルールがもたらした転換点

米国の**25年輸入規則**は大きな転換点となった。2024～2025年に連邦法上の輸入が合法化されたモデル——R34 GT-RやJZA80スープラなど——が、米国の膨大な需要を一気に解放した。カナダの15年ルールも同様に、より初期のモデルへの道を開いた。

### 注目のJDMモデル（2025～2026）

| モデル | 推定価格 | 主な推進要因 |
|---|---|---|
| 日産スカイライン R34 GT-R | $150,000–$300,000+ | 米国輸入解禁、極端な希少性 |
| トヨタ スープラ JZA80（Mk4） | $100,000–$180,000 | チューニング文化の遺産、文化的アイコン |
| マツダ RX-7 FD（スピリットR） | $60,000–$120,000 | ロータリーの希少性、デザインの傑作 |
| ホンダ NSX（NA1/NA2） | $80,000–$160,000 | フェラーリのライバル、歴史的意義 |
| 三菱 ランサーエボ VI～VIII | $35,000–$80,000 | ラリーの血統、コレクター人気上昇中 |
| 日産スカイライン R32 GT-R | $40,000–$80,000 | ゴジラ系譜への入り口 |

状態が良く、低走行距離で、無改造（「純正」）の個体は、供給減少により価格上昇が続いている。日本国内のオークションハウスは、ますます原状態の完品を入手できる唯一の源泉となりつつある。

## ラグジュアリー＆ウルトラプレミアムセグメント

### 日本の高級MPVフィーバー

JDMスポーツカーがコレクターの話題を席巻する一方で、日本のウルトララグジュアリーミニバンセグメントも同様に魅力的な輸出ストーリーを紡ぎ出している。**トヨタ アルファード**とその兄弟車**ヴェルファイア**は、東南アジアから湾岸諸国に至るまでエグゼクティブトランスポーターとして好まれ、巨大な中古車輸出需要を生み出している。

世界市場における中古アルファードの価格帯は**13,000～53,000ドル**とジェネレーションや状態により幅があるが、最高仕様の**エグゼクティブラウンジ S**グレードで新車同様の状態のものはしばしば**45,000ドル**を超える。

![高級車両](https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&q=80)

**トヨタ ランドクルーザー**は、オフロード×ラグジュアリーの世界的ベンチマークであり続け、世界中の希少性とブランドの揺るぎない信頼性により、中古車が国際市場で日本の元小売価格を**30～50%上回る**価格で取引されている。

### 日本オークション経由で流通するヨーロッパ最高級車

日本はヨーロッパのラグジュアリーおよびエキゾチックブランドにとっても重要なセカンダリーマーケットである。**ポルシェ、フェラーリ、メルセデス・ベンツ、BMWアルピナ、ランボルギーニ、ベントレー**が、整備状態が良く低走行の個体として日本のオークションを流通している——多くは、世界中のバイヤーが高く評価する、きめ細かな日本のサービス履歴を伴っている。

## 日本のオークション制度がプレミアム市場をどう支えているか

日本の車両オークションエコシステムは、プレミアム中古車ブームのインフラ骨格である：

- **USS**は圧倒的な市場支配力を持つプラットフォームであり、日本でおなじみの精密な**1～5段階評価レポート**とともに年間数百万台を処理している
- **グレード4以上**は優良な状態を示す——世界のプレミアムバイヤーの基準
- オークションは現在ほぼ完全に**デジタル化され、グローバルにアクセス可能**で、海外バイヤーもリアルタイムで入札できる
- いずれかのセグメントで落札率が**60%**を超えると、通常は市場の過熱を示唆する

![カー オークションと車検](https://images.unsplash.com/photo-1508974239320-0a029497e820?w=800&q=80)

## 2026年を形作る主要トレンド

- **量から質へ**——「何でも買って輸出する」時代は終わりつつある。2026年の勝者は、データドリブンな精度で高品質なハイブリッド車、プレミアムSUV、JDMコレクティブルを仕入れる業者だ。

- **JDMが金融資産に**——機関級コレクターや投資ファンドがJDM市場に参入し、車両をアートや時計と同列に扱い始めている。コレクターカー向けの保険商品や専用ストレージ施設が日本でも拡大している。

- **円高リスク**——2026年初頭の円高は輸出業者のマージン圧迫を始めている。オークション価格をJPYで支払い、CIFをUSDで販売する業者は二重の為替エクスポージャーに直面している。

- **中国EV競争**——中国ブランドのEVが、価格面で新興国市場における日本中古車に挑戦し始めている。プレミアムセグメントにおいては、依然として日本の品質が勝る。

- **規制強化**——複数の輸出先国が排出ガス、右ハンドル、車両年式に関する規制を厳格化し、貿易フローがUAE、東南アジア、ラテンアメリカ方向へ再編されている。

- **オンラインオークションのグローバル化**——USS、TAA、Goo-net Exchangeなどのプラットフォームが、日本のプレミアム在庫を**100カ国以上**のバイヤーに可視化し、アクセス可能にしている。

## バイヤーズガイド

- **オークショングレード**：投資級の購入には常に**グレード4以上**を狙うべき
- **改造状況**：コレクター向けJDMカーでは、無改造の「純正」個体が大幅なプレミアムを得る
- **サービス履歴**：日本のきめ細かなメンテナンス文化のおかげで、多くの車両が完全なディーラーサービス履歴を保有している
- **輸入規制**：購入前に自国の輸入ルール（年式制限、排出ガス、ハンドル位置）を確認すること
- **輸送費用**：日本中古車輸出の輸送費は通常**1,000～2,500ドル**、車両サイズと目的地により異なる
- **為替リスク**：2026年の円変動を踏まえ、可能な限りFXレートを固定し、自国通貨でCIFコストを計算すること

## おわりに

2025～2026年の日本中古車市場ニュースが語るのは、並外れた需要、価値の上昇、そして再現不可能な品質を渇望するグローバルなオーディエンスの物語である。それがアメリカのコレクターに向かうピカピカのR34 GT-Rであれ、ドバイに向かう最高仕様のアルファードであれ、東アフリカに向かうヴィンテージのランドクルーザーであれ——世界中の日本の自動車エクセレンスに対する食欲は果てしない。

日本のプレミアム中古車セグメントはもはやニッチではない。**それはそれ自体が一つのグローバルな資産クラスとなっている。**`,
    },
  },
  {
    slug: "buying-guide-2025",
    title: {
      zh: "2025年日本中古车购买完全指南",
      en: "Complete Guide to Buying Japanese Used Cars in 2025",
      ja: "2025年日本中古車購入完全ガイド",
    },
    excerpt: {
      zh: "从选车到交付，购买和进口日本中古车所需的一切知识全面解析。",
      en: "Everything you need to know about purchasing and importing quality Japanese used vehicles, from selection to delivery.",
      ja: "選択から納車まで、日本の中古車を購入・輸入するために必要なすべてを網羅した完全ガイド。",
    },
    category: { zh: "购车指南", en: "Guide", ja: "購入ガイド" },
    date: "2025-05-20",
    readTime: { zh: "8分钟阅读", en: "8 min read", ja: "8分で読める" },
    color: "bg-neutral-1000",
    image: "/images/blog/office-business.jpg",
    content: {
      zh: `## 为什么选择日本二手车？

日本拥有世界上最可靠、保养最完善的二手车。凭借严格的检查标准、平均行驶里程低以及精益求精的车辆养护文化，日本二手车为全球买家提供了卓越的价值。

无论您是希望扩大库存的经销商，还是寻求高品质车辆的个人买家，日本二手车市场都能为您提供无与伦比的选择和品质。

## 购买流程详解

### 1. 车辆选型
浏览我们精心甄选的优质日本二手车库存。每条车源信息都包含详细规格、车况报告和透明定价，帮助您做出明智的决策。

### 2. 检查报告
每辆车都附带一份全面的车况报告，对外观、内饰和机械状况进行评级。理解这些报告对于做出明智的购买决策至关重要。

### 3. 购买与付款
找到心仪的车辆后，确认订单并通过银行电汇完成付款。我们确保交易过程安全透明。

### 4. 出口与交付
付款完成后，我们负责处理所有出口文件、车辆整备和运输安排，将您的车辆安全送达最近的港口。

## 首次买家须知

- 提前制定清晰的预算，涵盖所有费用和运输成本
- 购车前仔细研读车辆状况报告
- 关注总到岸成本，而非仅看车辆售价
- 优先选择拥有完整保养记录的车辆
- 选择定价透明、信誉良好的出口商合作

## 常见误区

许多首次购车的买家只关注车辆售价，却忽略了运输、出口处理、海运和保险等额外费用。在确认购买之前，务必要求对方提供完整的费用明细。`,
      en: `## Why Buy Japanese Used Cars?

Japan is home to some of the world's most reliable and well-maintained used vehicles. With strict inspection standards, low mileage averages, and a culture of meticulous vehicle care, Japanese used cars offer exceptional value for buyers worldwide.

Whether you're a dealer looking to expand your inventory or an individual seeking a quality vehicle, Japan's used car market provides unmatched selection and quality.

## How the Process Works

### 1. Vehicle Selection
Browse our curated inventory of premium Japanese used vehicles. Each listing includes detailed specifications, condition reports, and transparent pricing to help you make an informed decision.

### 2. Inspection Reports
Every vehicle comes with a comprehensive condition report that grades the exterior, interior, and mechanical condition. Understanding these reports is crucial for making informed purchase decisions.

### 3. Purchase & Payment
Once you've found your ideal vehicle, confirm the order and complete payment via bank wire transfer. We ensure a secure and transparent transaction process.

### 4. Export & Delivery
After payment, we handle all export documentation, vehicle preparation, and shipping arrangements to deliver your vehicle safely to your nearest port.

## Tips for First-Time Buyers

- Start with a clear budget that includes all fees and shipping costs
- Study vehicle condition reports carefully before purchasing
- Consider the total landed cost, not just the vehicle price
- Choose vehicles with comprehensive service history
- Work with an established exporter with transparent pricing

## Common Mistakes to Avoid

Many first-time buyers focus only on the vehicle price without accounting for additional costs like transport, export processing, shipping, and insurance. Always request a complete cost breakdown before confirming your purchase.`,
      ja: `## 日本の中古車を選ぶ理由

日本は世界で最も信頼性が高く、整備状態の良い中古車が揃う市場です。厳格な車検制度、平均走行距離の少なさ、そして車を大切に扱う文化により、日本の中古車は世界中のバイヤーに並外れた価値を提供しています。

在庫を拡大したいディーラーの方にも、品質の良い車をお探しの個人の方にも、日本の中古車市場は他に類を見ない選択肢と品質をお届けします。

## 購入の流れ

### 1. 車両選び
弊社が厳選したプレミアム日本中古車の在庫をご覧ください。各車両には詳細な仕様、車両状態レポート、透明性の高い価格情報が記載されており、納得のいく選択が可能です。

### 2. 車検レポート
すべての車両には、外装・内装・機関の状態を評価した包括的な車両状態レポートが付属します。これらのレポートを正しく理解することが、賢明な購入判断に不可欠です。

### 3. ご購入とお支払い
希望の車両が見つかりましたら、ご注文を確認のうえ、銀行送金でお支払いください。安全かつ透明性の高い取引プロセスを保証いたします。

### 4. 輸出・配送
お支払い完了後、輸出書類の手配、車両の準備、船積手配をすべて弊社で行い、お客様の車両を最寄りの港まで安全にお届けします。

## 初めてご購入される方へ

- 諸費用と送料を含めた明確な予算を事前に立てる
- 購入前に車両状態レポートを念入りに確認する
- 車両価格だけでなく、総輸入コスト（ランデッドコスト）を考慮する
- 整備履歴が完全に残っている車両を優先する
- 価格設定が透明で実績のある輸出業者を選ぶ

## よくある失敗

初めて購入される方の多くは、車両価格ばかりに目を向けてしまい、陸送・輸出手続き・船積・保険などの追加コストを見落としがちです。購入を確定する前に、必ず全費用の明細を請求しましょう。`,
    },
  },
  {
    slug: "top-japanese-used-cars-2025",
    title: {
      zh: "2025年最值得购买的十大日本中古车",
      en: "Top 10 Japanese Used Cars to Buy in 2025",
      ja: "2025年に買うべき日本中古車トップ10",
    },
    excerpt: {
      zh: "我们的专家精选今年性价比最高、最值得购买的日本中古车型。",
      en: "Our experts pick the best value Japanese used cars available for purchase this year.",
      ja: "専門家が厳選する、今年最もコストパフォーマンスに優れた日本中古車トップ10。",
    },
    category: { zh: "购车贴士", en: "Buying Tips", ja: "購入のヒント" },
    date: "2025-05-18",
    readTime: { zh: "6分钟阅读", en: "6 min read", ja: "6分で読める" },
    color: "bg-green-500",
    image: "/images/blog/car-keys.jpg",
    content: {
      zh: `## 这些车型为何脱颖而出

日本二手车市场物超所值，但部分车型在可靠性、保值率和整体满意度方面始终表现卓越。

## 2025年度精选推荐

### 1. 丰田凯美瑞（Toyota Camry）
这款经久不衰的经典车型以卓越的可靠性和舒适性闻名。二手车以其经得起考验的耐用性提供极高的性价比。

### 2. 本田思域（Honda Civic）
省油、驾驶乐趣十足且极其可靠。思域始终是您能做出的最明智的二手车选择之一。

### 3. 日产Note（Nissan Note）
紧凑、实用且价格亲民。完美的城市代步之选，燃油经济性出色。

### 4. 丰田普锐斯（Toyota Prius）
这款混合动力先驱继续以卓越的燃油经济性和低维护成本引领潮流。

### 5. 马自达CX-5（Mazda CX-5）
一款时尚的紧凑型SUV，兼具出色的驾驶乐趣和高级的内饰品质。

## 选车要点

购买日本二手车时，请优先选择保养记录完整、行驶里程低且检查报告良好的车辆。务必核实车辆的拍卖等级和状况评估结果。`,
      en: `## Why These Models Stand Out

The Japanese used car market offers incredible value, but some models consistently outperform others in terms of reliability, resale value, and overall satisfaction.

## Top Picks for 2025

### 1. Toyota Camry
A perennial favorite known for exceptional reliability and comfort. Used models offer outstanding value with proven longevity.

### 2. Honda Civic
Fuel-efficient, fun to drive, and incredibly reliable. The Civic remains one of the smartest used car purchases you can make.

### 3. Nissan Note
Compact, practical, and affordable. Perfect for urban driving with excellent fuel economy.

### 4. Toyota Prius
The hybrid pioneer continues to deliver exceptional fuel economy and low maintenance costs.

### 5. Mazda CX-5
A stylish compact SUV with engaging driving dynamics and premium interior quality.

## What to Look For

When shopping for a used Japanese car, prioritize vehicles with complete service history, low mileage, and clean inspection reports. Always verify the vehicle's auction grade and condition assessment.`,
      ja: `## これらのモデルが選ばれる理由

日本の中古車市場は驚くほどのコストパフォーマンスを誇りますが、信頼性・リセールバリュー・総合的な満足度の面で、常に一頭地を抜くモデルがあります。

## 2025年 おすすめランキング

### 1. トヨタ カムリ
抜群の信頼性と快適さで愛され続ける定番モデル。中古車としても耐久性が実証されており、非常に高いコストパフォーマンスを発揮します。

### 2. ホンダ シビック
燃費が良く、運転が楽しく、そして非常に信頼性が高い。シビックは中古車として最も賢い選択肢の一つであり続けています。

### 3. 日産 ノート
コンパクトで実用的、そして手頃な価格。優れた燃費を誇り、都市部の走行に最適です。

### 4. トヨタ プリウス
ハイブリッドのパイオニアであり続け、優れた燃費と低メンテナンスコストを実現し続けています。

### 5. マツダ CX-5
スタイリッシュなコンパクトSUVで、爽快な走りと上質なインテリアを兼ね備えています。

## チェックポイント

日本中古車を購入する際は、メンテナンス履歴が完全で、走行距離が少なく、点検レポートがクリーンな車両を優先しましょう。オークション等級と車両状態評価を必ず確認してください。`,
    },
  },
  {
    slug: "understanding-vehicle-inspection",
    title: {
      zh: "读懂日本中古车检查报告",
      en: "Understanding Japanese Vehicle Inspection Reports",
      ja: "日本の中古車検査レポートを読み解く",
    },
    excerpt: {
      zh: "学习如何像专业买家一样阅读和理解日本中古车检查报告，掌握拍卖等级评定标准。",
      en: "Learn how to read and interpret Japanese vehicle inspection reports like a professional buyer.",
      ja: "プロのバイヤーのように、日本の中古車検査レポートを読み解く方法を学びましょう。",
    },
    category: { zh: "购车指南", en: "Guide", ja: "購入ガイド" },
    date: "2025-05-15",
    readTime: { zh: "10分钟阅读", en: "10 min read", ja: "10分で読める" },
    color: "bg-neutral-1000",
    image: "/images/blog/car-keys.jpg",
    content: {
      zh: `## 什么是日本车辆检查报告？

日本每辆二手车都会定期接受检查，生成详尽的状况报告。这些报告是您在购买前评估车辆状况的最佳工具。

## 了解拍卖等级

日本拍卖行采用标准化的评级体系：

- **5级**：近乎全新，磨损极少
- **4.5级**：车况优秀，保养非常到位
- **4级**：车况良好，符合车龄的正常磨损
- **3.5级**：车况一般，可能需要进行部分维修
- **3级**：低于平均水平，可能需要较大维修

## 内饰与外观评级

报告还包含以下方面的详细评级：
- 外观状况（划痕、凹痕、锈蚀）
- 内饰状况（座椅、仪表台、整洁度）
- 机械状况（发动机、变速箱、制动系统）

## 核心建议

购车前务必索取完整的检查报告。较低的价格可能意味着报告中会揭示潜在的隐患。`,
      en: `## What is a Japanese Vehicle Inspection Report?

Every used vehicle in Japan undergoes regular inspections that produce detailed condition reports. These reports are your best tool for evaluating a vehicle's condition before purchase.

## Understanding Auction Grades

Japanese auction houses use a standardized grading system:

- **Grade 5**: Near new condition, minimal wear
- **Grade 4.5**: Excellent condition, very well maintained
- **Grade 4**: Good condition, normal wear for age
- **Grade 3.5**: Average condition, some repairs may be needed
- **Grade 3**: Below average, significant repairs likely

## Interior and Exterior Ratings

Reports also include detailed ratings for:
- Exterior condition (scratches, dents, rust)
- Interior condition (seats, dashboard, cleanliness)
- Mechanical condition (engine, transmission, brakes)

## Key Takeaways

Always request the full inspection report before purchasing. A lower price may indicate hidden issues that the report will reveal.`,
      ja: `## 日本の車両検査レポートとは？

日本では、すべての中古車が定期的に検査を受け、詳細な状態レポートが作成されます。このレポートは、購入前に車両の状態を評価するための最も有力なツールです。

## オークション等級を理解する

日本のオークションハウスは統一された等級システムを採用しています：

- **等級5**：新車同様の状態、ほとんど摩耗なし
- **等級4.5**：極めて良好な状態、非常に丁寧に整備されている
- **等級4**：良好な状態、年式相応の通常使用感
- **等級3.5**：並の状態、一部の修理が必要な場合あり
- **等級3**：平均を下回る状態、大幅な修理が必要な可能性あり

## 内装・外装の評価

レポートには以下の項目について詳細な評価も含まれています：
- 外装の状態（傷、へこみ、錆）
- 内装の状態（シート、ダッシュボード、清潔さ）
- 機関の状態（エンジン、トランスミッション、ブレーキ）

## 重要なポイント

購入前に必ず完全な検査レポートを請求しましょう。価格が安い場合、レポートに隠れた問題が記載されている可能性があります。`,
    },
  },
  {
    slug: "shipping-to-africa-guide",
    title: {
      zh: "日本中古车出口非洲完全指南",
      en: "Shipping Japanese Used Cars to Africa: Complete Guide",
      ja: "日本中古車のアフリカ輸出完全ガイド",
    },
    excerpt: {
      zh: "涵盖港口、航线、运输时间及非洲各国进口法规的详细指南。",
      en: "Detailed guide covering ports, shipping lines, transit times, and import regulations for African destinations.",
      ja: "港湾、海運ルート、輸送時間、アフリカ各国の輸入規制を網羅した詳細ガイド。",
    },
    category: { zh: "物流运输", en: "Shipping", ja: "物流・輸送" },
    date: "2025-05-12",
    readTime: { zh: "7分钟阅读", en: "7 min read", ja: "7分で読める" },
    color: "bg-purple-500",
    image: "/images/blog/city-road.jpg",
    content: {
      zh: `## 为什么非洲是一个不断增长的市场

非洲是日本二手车辆增长最快的市场之一。实惠的价格、可靠的品质以及充足的零部件供应，使日本汽车成为非洲道路的理想选择。

## 热门目的地

- **肯尼亚**（蒙巴萨港）- 运输周期4-6周
- **坦桑尼亚**（达累斯萨拉姆港）- 运输周期4-6周
- **乌干达**（经由蒙巴萨）- 总计6-8周
- **尼日利亚**（拉各斯港）- 运输周期5-7周

## 进口法规

每个国家都有特定的进口法规，包括车龄限制、检验要求和关税结构。我们负责处理所有文件，确保通关顺利无阻。

## 运输方式

我们提供RoRo（滚装船）和集装箱运输两种方式，具体取决于您的目的地和车辆类型。`,
      en: `## Why Africa is a Growing Market

Africa represents one of the fastest-growing markets for Japanese used vehicles. Affordable pricing, reliability, and availability of parts make Japanese cars ideal for African roads.

## Popular Destinations

- **Kenya** (Mombasa port) - 4-6 weeks transit
- **Tanzania** (Dar es Salaam) - 4-6 weeks transit
- **Uganda** (via Mombasa) - 6-8 weeks total
- **Nigeria** (Lagos) - 5-7 weeks transit

## Import Regulations

Each country has specific import regulations including age limits, inspection requirements, and duty structures. We handle all documentation to ensure smooth customs clearance.

## Shipping Options

We offer both RoRo (Roll-on/Roll-off) and container shipping options depending on your destination and vehicle type.`,
      ja: `## アフリカが成長市場である理由

アフリカは日本中古車にとって最も急成長している市場の一つです。手頃な価格、高い信頼性、そして豊富な部品供給により、日本車はアフリカの道路環境に最適です。

## 人気の輸出先

- **ケニア**（モンバサ港）- 輸送期間4～6週間
- **タンザニア**（ダルエスサラーム港）- 輸送期間4～6週間
- **ウガンダ**（モンバサ経由）- 合計6～8週間
- **ナイジェリア**（ラゴス港）- 輸送期間5～7週間

## 輸入規制

各国には車齢制限、検査要件、関税体系など独自の輸入規制があります。当社はすべての書類手続きを担当し、スムーズな通関を実現します。

## 輸送オプション

お客様の目的地や車種に応じて、RoRo（ロールオン/ロールオフ）とコンテナ輸送の両方をご利用いただけます。`,
    },
  },
  {
    slug: "toyota-hiace-buying-guide",
    title: {
      zh: "丰田海狮购车指南：选购要点",
      en: "Toyota HiAce Buying Guide: What to Look For",
      ja: "トヨタ・ハイエース購入ガイド：チェックポイント",
    },
    excerpt: {
      zh: "丰田海狮依然是最受欢迎的出口车型之一。以下是购买前的检查要点与选购建议。",
      en: "The Toyota HiAce remains one of the most popular exports. Here's what to check before buying.",
      ja: "トヨタ・ハイエルスは依然として最も人気のある輸出車種の一つ。購入前に確認すべきポイントを解説。",
    },
    category: { zh: "购车贴士", en: "Buying Tips", ja: "購入のヒント" },
    date: "2025-05-08",
    readTime: { zh: "5分钟阅读", en: "5 min read", ja: "5分で読める" },
    color: "bg-green-500",
    image: "/images/blog/ev-car.jpg",
    content: {
      zh: `## 为什么HiAce是王者

丰田HiAce可以说是日本出口量最大的商用车辆。其卓越的可靠性、充足的载货空间和多功能性，使其成为全球各类企业的理想之选。

## 关键检查事项

- **发动机状况**：注意是否有异响，检查是否有机油渗漏
- **变速箱**：各档位换挡是否顺畅
- **车身状况**：查看是否有锈蚀，尤其是底盘部位
- **里程数**：HiAce在妥善保养的情况下，可靠行驶里程可超过30万公里

## 热门车型

Commuter（客运版）和Van（货运版）两种配置各有侧重，请根据您的主要用途进行选择。`,
      en: `## Why the HiAce is King

The Toyota HiAce is arguably the most popular commercial vehicle export from Japan. Its reliability, cargo capacity, and versatility make it ideal for businesses worldwide.

## Key Things to Check

- **Engine condition**: Listen for unusual noises, check for oil leaks
- **Transmission**: Smooth shifting in all gears
- **Body condition**: Look for rust, especially in the undercarriage
- **Mileage**: HiAce models can reliably exceed 300,000 km with proper maintenance

## Popular Variants

The Commuter (passenger) and Van (cargo) configurations each serve different needs. Choose based on your primary use case.`,
      ja: `## HiAceが王様である理由

トヨタ・ハイエースは、日本から輸出される商用車の中で間違いなく最も人気のあるモデルです。その信頼性、積載能力、そして多用途性により、世界中のビジネスに最適な一台です。

## 重要な確認ポイント

- **エンジンの状態**：異音がないか確認、オイル漏れをチェック
- **トランスミッション**：全ギアでスムーズなシフトができるか
- **ボディの状態**：特に床下の錆に注意して確認
- **走行距離**：ハイエースは適切なメンテナンスにより30万km以上の走行も十分可能

## 人気のバリエーション

コミューター（乗用）とバン（貨物）の構成はそれぞれ異なるニーズに対応します。ご自身の主な用途に基づいてお選びください。`,
    },
  },
  {
    slug: "market-trends-may-2025",
    title: {
      zh: "日本中古车市场趋势 — 2025年5月",
      en: "Japanese Used Car Market Trends — May 2025",
      ja: "日本中古車市場トレンド — 2025年5月",
    },
    excerpt: {
      zh: "日本中古车市场热门车型的市场分析与价格趋势，助您把握购车时机。",
      en: "Market analysis and price trends for popular models in the Japanese used car market.",
      ja: "日本中古車市場の人気車種に関する市場分析と価格動向。購入タイミングを見極めるための必読レポート。",
    },
    category: { zh: "市场资讯", en: "Market News", ja: "市場情報" },
    date: "2025-05-05",
    readTime: { zh: "6分钟阅读", en: "6 min read", ja: "6分で読める" },
    color: "bg-amber-500",
    image: "/images/blog/workshop.jpg",
    content: {
      zh: `## 市场概况

日本二手车市场继续保持强劲的国际买家需求。随着燃油经济性在全球范围内日益受到重视，混合动力车型的需求尤为旺盛。

## 价格趋势

- **丰田车型**：价格稳定，混合动力版本略有上涨
- **本田车型**：价格具有竞争力，性价比较高
- **SUV**：需求强劲，各品牌价格普遍上涨
- **紧凑型车**：价格实惠，车源充足

## 热门车型

混合动力车型，尤其是丰田普锐斯和Aqua，持续主导出口需求。丰田RAV4和本田CR-V等SUV车型也始终保持高人气。

## 市场展望

预计未来几个月价格将保持平稳，国际市场的强劲需求仍将持续。`,
      en: `## Market Overview

The Japanese used car market continues to show strong demand from international buyers. Hybrid vehicles are seeing particularly high demand as fuel efficiency becomes a priority worldwide.

## Price Trends

- **Toyota models**: Stable pricing with slight increases for hybrid variants
- **Honda vehicles**: Competitive pricing, good value opportunities
- **SUVs**: Strong demand driving prices up across all brands
- **Compact cars**: Affordable options with excellent availability

## What's Hot

Hybrid vehicles, particularly the Toyota Prius and Aqua, continue to dominate export demand. SUVs like the Toyota RAV4 and Honda CR-V remain consistently popular.

## Outlook

We expect steady pricing through the coming months with continued strong international demand.`,
      ja: `## 市場概況

日本中古車市場は、引き続き海外バイヤーからの強い需要を示しています。燃費性能が世界的に重視されるようになり、ハイブリッド車の需要が特に高まっています。

## 価格動向

- **トヨタ車種**：価格安定、ハイブリッドモデルは小幅上昇
- **ホンダ車種**：競争力のある価格、お買い得感あり
- **SUV**：強い需要により全ブランドで価格上昇
- **コンパクトカー**：手頃な価格で豊富な在庫

## 注目の車種

ハイブリッド車、特にトヨタ・プリウスとアクアが輸出需要を牽引し続けています。トヨタ・RAV4やホンダ・CR-VなどのSUVも安定した人気を維持しています。

## 今後の見通し

今後数か月間は価格が安定すると予想され、引き続き強い海外需要が見込まれます。`,
    },
  },
];
