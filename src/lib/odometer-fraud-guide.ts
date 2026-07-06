type GuideMethod = {
  badge: string;
  badgeClass: string;
  title: string;
  paragraphs: string[];
  callout?: {
    className: string;
    html: string;
  };
};

type GuideCopy = {
  lang: string;
  eyebrow: string;
  titleHtml: string;
  description: string;
  meta: Array<{ value: string; label: string }>;
  imageAlt: string;
  imageCaption: string;
  introLabel: string;
  introTitle: string;
  introParagraphs: string[];
  stats: Array<{ label: string; width: number; value: string }>;
  introCallout: string;
  methodsLabel: string;
  methodsTitle: string;
  methods: GuideMethod[];
  tableLabel: string;
  tableTitle: string;
  tableHeaders: string[];
  tableRows: string[][];
  tableNote: string;
  japanLabel: string;
  japanTitle: string;
  japanParagraphs: string[];
  japanCallout: string;
  ctaEyebrow: string;
  ctaTitleHtml: string;
  ctaDescription: string;
  ctaTags: string[];
  ctaButton: string;
  ctaNote: string;
};

const p = (html: string, compact = false) =>
  `<p${compact ? ' style="margin-bottom:.5rem"' : ""}>${html}</p>`;

function renderGuide(copy: GuideCopy): string {
  return `
<div class="hero" lang="${copy.lang}">
  <div class="eyebrow">${copy.eyebrow}</div>
  <h1 class="hero-title">${copy.titleHtml}</h1>
  <p class="hero-desc">${copy.description}</p>
  <div class="hero-meta">
    ${copy.meta.map((item) => `<div class="meta-item"><strong>${item.value}</strong>${item.label}</div>`).join("\n    ")}
  </div>
</div>

<figure class="article-cover-image">
  <img src="/images/services/car-inspection.jpg" alt="${copy.imageAlt}" loading="lazy">
  <figcaption>${copy.imageCaption}</figcaption>
</figure>

<div class="article-body" lang="${copy.lang}">
  <div class="section">
    <div class="section-label">${copy.introLabel}</div>
    <h2>${copy.introTitle}</h2>
    ${copy.introParagraphs.join("\n    ")}
    <div style="margin: 1.5rem 0;">
      ${copy.stats
        .map(
          (stat) => `<div class="stat-row">
        <span class="stat-label">${stat.label}</span>
        <div class="stat-bar-wrap"><div class="stat-bar" style="width:${stat.width}%"></div></div>
        <span class="stat-val">${stat.value}</span>
      </div>`
        )
        .join("\n      ")}
    </div>
    <div class="callout-amber"><p>${copy.introCallout}</p></div>
  </div>

  <div class="section">
    <div class="section-label">${copy.methodsLabel}</div>
    <h2>${copy.methodsTitle}</h2>
    <div class="step-list">
      ${copy.methods
        .map(
          (method, index) => `<div class="step-item">
        <div class="step-num">${String(index + 1).padStart(2, "0")}</div>
        <div class="step-content">
          <span class="step-badge ${method.badgeClass}">${method.badge}</span>
          <h3>${method.title}</h3>
          ${method.paragraphs.join("\n          ")}
          ${
            method.callout
              ? `<div class="${method.callout.className}"><p>${method.callout.html}</p></div>`
              : ""
          }
        </div>
      </div>`
        )
        .join("\n      ")}
    </div>
  </div>

  <div class="section">
    <div class="section-label">${copy.tableLabel}</div>
    <h2>${copy.tableTitle}</h2>
    <table class="summary-table">
      <thead>
        <tr>${copy.tableHeaders.map((header) => `<th>${header}</th>`).join("")}</tr>
      </thead>
      <tbody>
        ${copy.tableRows
          .map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`)
          .join("\n        ")}
      </tbody>
    </table>
    <p>${copy.tableNote}</p>
  </div>

  <div class="section">
    <div class="section-label">${copy.japanLabel}</div>
    <h2>${copy.japanTitle}</h2>
    ${copy.japanParagraphs.join("\n    ")}
    <div class="callout-green"><p>${copy.japanCallout}</p></div>
  </div>

  <div class="section" style="border-bottom:none;padding-bottom:0">
    <div class="cta-section" id="cta">
      <div class="cta-eyebrow">${copy.ctaEyebrow}</div>
      <h2 class="cta-title">${copy.ctaTitleHtml}</h2>
      <p class="cta-desc">${copy.ctaDescription}</p>
      <div class="cta-features">
        ${copy.ctaTags.map((tag) => `<span class="cta-tag">${tag}</span>`).join("\n        ")}
      </div>
      <a class="cta-btn" href="https://clickcar.jp/contact">${copy.ctaButton}</a>
      <p class="cta-note">${copy.ctaNote}</p>
    </div>
  </div>
</div>`;
}

const zh: GuideCopy = {
  lang: "zh-CN",
  eyebrow: "购车避坑指南 · 2026年6月更新",
  titleHtml: "日本中古车里程表造假<br>怎么识别？<em>5个判断方法</em>",
  description:
    "从日本买车最常被问到的问题之一，就是里程表能不能信。本文用5个具体方法，带你一步步核实，让你买到的每一公里都更透明。",
  meta: [
    { value: "2026年6月", label: "最后更新" },
    { value: "6 分钟", label: "阅读时间" },
    { value: "日本法规", label: "数据来源" },
    { value: "适用", label: "所有车款" },
  ],
  imageAlt: "ClickCar 车辆检查与里程核对服务",
  imageCaption: "车辆检查、文件核对与里程验证，是日本中古车代拍前的重要步骤。",
  introLabel: "背景说明",
  introTitle: "里程造假，在日本还存在吗？",
  introParagraphs: [
    p("里程表造假（日文：走行距離改ざん）曾经是日本中古车市场的一大问题。过去使用机械式仪表盘的年代，只要拨动字盘就可能篡改数字，因此并不少见。"),
    p("但现在已经大不相同。数字仪表的普及、2017年起车检制度的强化，以及日本自动车查定协会（JAAI）走行メーター管理システム的建立，让改表门槛大幅提高，发生率也持续下降。"),
  ],
  stats: [
    { label: "2010年代以前", width: 82, value: "高风险" },
    { label: "2017年车检改制后", width: 38, value: "中风险" },
    { label: "2021年法规强化后", width: 14, value: "低风险" },
    { label: "2025年现况", width: 7, value: "极低" },
  ],
  introCallout:
    "<strong>注意：极少不代表不存在。</strong>高价跑车和豪华进口车仍然需要特别小心，因为同款车每少1万公里，价格可能相差10万日元以上，犯罪诱因依然存在。",
  methodsLabel: "核心方法",
  methodsTitle: "5个识别里程造假的方法",
  methods: [
    {
      badge: "自行操作 · 最快速",
      badgeClass: "badge-easy",
      title: "核对车检证的历次里程记录",
      paragraphs: [
        p("这是最直接、最有效的第一步。日本自2017年1月起，车检证（車検証）备考栏必须记录前两次车检时的里程数。正常车辆的里程应随时间递增；如果出现“前次里程 > 本次里程”的异常，基本可以判断仪表曾被篡改或更换。"),
        p("核对时，也要留意里程增加速度。日本自用车年均行驶约6,000至7,500公里，如果一台10年车只显示3万公里，就需要特别谨慎。"),
      ],
      callout: {
        className: "callout-green",
        html: "<strong>重点：</strong>向卖方索取车检证原件，确认备考栏的“走行距離計表示値”（本次）与“旧走行距離計表示値”（前次）两项数据完整且合理。",
      },
    },
    {
      badge: "自行操作 · 必查文件",
      badgeClass: "badge-easy",
      title: "检查保养记录本与各类贴纸",
      paragraphs: [
        p("每次在原厂或授权工场保养时，技师通常会在メンテナンスノート（保养记录本）上记录当时里程。引擎室盖板内侧、车门框上的换油贴纸、正时皮带更换记录，也可能留下当时的里程数据。"),
        p("部分不良业者会在篡改仪表后，声称“保养记录本遗失”，再补发一本空白记录本来清除痕迹。因此，<strong style=\"color:var(--black);font-weight:500\">保养记录缺失本身就是一个红旗信号</strong>。"),
      ],
      callout: {
        className: "callout-red",
        html: "<strong>红旗清单：</strong>保养记录本不存在 · 保养贴纸被撕除 · 引擎室过度清洁 · 记录本与仪表里程对不上",
      },
    },
    {
      badge: "目视判断 · 需要经验",
      badgeClass: "badge-medium",
      title: "观察车身各部位的磨耗状况",
      paragraphs: [
        p("车辆的磨耗痕迹很难整体伪造。如果仪表显示里程偏低，但以下部位磨损明显，就需要提高警惕："),
        p("<strong style=\"color:var(--black);font-weight:500\">方向盘与排挡杆皮革</strong>——使用频率最高，磨耗最诚实。若显示3万公里的车，方向盘皮革已经明显龟裂或褪色，就不太合理。", true),
        p("<strong style=\"color:var(--black);font-weight:500\">刹车踏板橡胶垫</strong>——低里程车踏板应相对饱满；严重磨耗代表长期使用。", true),
        p("<strong style=\"color:var(--black);font-weight:500\">门槛饰条与车门边框</strong>——上下车摩擦痕迹很难彻底清除。", true),
        p("<strong style=\"color:var(--black);font-weight:500\">正时皮带更换记录</strong>——正时皮带通常建议每10万公里更换，若显示5万公里的车已有更换记录，需要解释原因。"),
      ],
    },
    {
      badge: "专业工具 · 最精准",
      badgeClass: "badge-pro",
      title: "通过 ECU 数据比对",
      paragraphs: [
        p("现代车辆的里程数据并不只存在仪表盘里。发动机控制模块（ECU）、变速箱控制单元、ABS控制模块等系统，都可能独立记录车辆运行数据。"),
        p("即使仪表盘显示数字被修改，这些分散在各模块里的“数字足迹”仍可能保留真实历史。专业诊断设备可以读取多个ECU数据交叉比对，一旦仪表里程与ECU记录矛盾，问题就会暴露。"),
      ],
      callout: {
        className: "callout-green",
        html: "<strong>实务价值：</strong>对于高价车、跑车和豪华进口车，ECU比对是非常有价值的核验方式。",
      },
    },
    {
      badge: "官方查询 · 最权威",
      badgeClass: "badge-pro",
      title: "通过 JAAI 走行メーター管理システム 查询",
      paragraphs: [
        p("日本自动车查定协会（JAAI）的走行メーター管理システム，汇总了日本拍卖市场的历次出品里程记录。只要输入车辆识别信息，即可调阅该车过去进入拍卖场时的里程历史。"),
        p("查询可至JAAI相关窗口办理，费用通常不高。如果车辆曾多次进入拍卖场，这是判断里程真实性很有力的书面依据。"),
      ],
      callout: {
        className: "callout-amber",
        html: "<strong>注意：</strong>如果车辆从未进入过拍卖市场，系统可能查无记录。这不一定代表有问题，需要结合其他方法综合判断。",
      },
    },
  ],
  tableLabel: "一览表",
  tableTitle: "5种方法难度与效果比较",
  tableHeaders: ["方法", "难度", "费用", "效果", "适合对象"],
  tableRows: [
    ["① 核对车检证里程", '<span class="dot dot-g"></span> 简单', "免费", "★★★★", "所有买家"],
    ["② 查保养记录本", '<span class="dot dot-g"></span> 简单', "免费", "★★★★", "所有买家"],
    ["③ 磨耗目视判断", '<span class="dot dot-a"></span> 中等', "免费", "★★★", "有一定经验者"],
    ["④ ECU 数字比对", '<span class="dot dot-b"></span> 需专业', "需委托", "★★★★★", "高价车款"],
    ["⑤ JAAI 官方查询", '<span class="dot dot-b"></span> 需专业', "约¥1,500", "★★★★★", "拍卖流通车"],
  ],
  tableNote:
    "实务上建议<strong style=\"color:var(--black);font-weight:500\">至少结合前三种方法</strong>自行初筛，如果有疑虑或购买高价车款，再进行ECU比对或委托JAAI查询。",
  japanLabel: "为何选择日本",
  japanTitle: "日本中古车里程可信度，为什么高于许多市场？",
  japanParagraphs: [
    p("除了制度保障，日本的用车文化本身也是优势。日本自用车年均行驶约6,000至7,500公里，低于许多欧美市场；加上原厂和认证工场网络完善，保养记录相对容易追溯。"),
    p("2021年《道路运送车辆法》修正后，中古车销售时的里程记录保存与揭露责任进一步强化。里程篡改在日本不只是诚信问题，也可能引发法律责任。"),
  ],
  japanCallout:
    "<strong>结论：</strong>日本中古车市场整体透明度较高，但买车时仍应做文件、记录、磨耗和系统数据的交叉核验。",
  ctaEyebrow: "ClickCar 的承诺",
  ctaTitleHtml: "我们帮你完成<br>关键核实工作",
  ctaDescription:
    "ClickCar 可在日本当地协助核对车检证、保养记录、拍卖信息与车辆细节，让你不用亲自跑日本，也能更安心地判断车况。",
  ctaTags: ["车检证核对", "拍卖信息确认", "现场照片与视频", "透明报价", "支持代拍服务"],
  ctaButton: "立即咨询 ClickCar →",
  ctaNote: "中文、英文、日文均可沟通 · 通常 24 小时内回复",
};

const en: GuideCopy = {
  lang: "en",
  eyebrow: "Buyer Safety Guide · Updated June 2026",
  titleHtml: "How to Spot Odometer Fraud<br>in Japanese Used Cars: <em>5 Checks</em>",
  description:
    "One of the most common questions about buying from Japan is whether the mileage can be trusted. This guide gives you five practical checks to verify the numbers before you bid or buy.",
  meta: [
    { value: "June 2026", label: "Last updated" },
    { value: "6 min", label: "Read time" },
    { value: "Japan rules", label: "Reference" },
    { value: "All models", label: "Applies to" },
  ],
  imageAlt: "ClickCar vehicle inspection and mileage verification service",
  imageCaption: "Vehicle inspection, document checks, and mileage verification are key steps before bidding in Japan.",
  introLabel: "Background",
  introTitle: "Does odometer fraud still exist in Japan?",
  introParagraphs: [
    p("Odometer fraud, known in Japanese as 走行距離改ざん, used to be a serious issue in the used-car market. In the era of mechanical gauges, rolling back the displayed number was much easier and therefore more common."),
    p("Today the situation is very different. Digital meters, stricter inspection records since 2017, and the Japan Automobile Appraisal Institute (JAAI) mileage management system have made manipulation harder and far less common."),
  ],
  stats: [
    { label: "Before the 2010s", width: 82, value: "High" },
    { label: "After 2017 inspection changes", width: 38, value: "Medium" },
    { label: "After 2021 rule updates", width: 14, value: "Low" },
    { label: "Current market", width: 7, value: "Very low" },
  ],
  introCallout:
    "<strong>Important: rare does not mean impossible.</strong> High-value sports cars and imported luxury cars still deserve extra caution because a lower mileage reading can change the price significantly.",
  methodsLabel: "Core Checks",
  methodsTitle: "5 ways to identify mileage manipulation",
  methods: [
    {
      badge: "Self-check · Fastest",
      badgeClass: "badge-easy",
      title: "Check mileage records on the inspection certificate",
      paragraphs: [
        p("This is the quickest first step. Since January 2017, Japanese inspection certificates have included mileage readings from recent inspections. A normal car should show mileage increasing over time; if an older record is higher than the current reading, the meter may have been replaced or altered."),
        p("Also check whether the pace of mileage growth makes sense. Private cars in Japan often average around 6,000 to 7,500 km per year, so an extremely low number on an older car deserves closer review."),
      ],
      callout: {
        className: "callout-green",
        html: "<strong>Key point:</strong> Ask for the original inspection certificate and compare the current and previous mileage fields in the remarks section.",
      },
    },
    {
      badge: "Self-check · Required documents",
      badgeClass: "badge-easy",
      title: "Review service books and maintenance stickers",
      paragraphs: [
        p("When a car is maintained by a dealer or certified workshop, the mileage is usually written in the maintenance notebook. Oil-change stickers, timing-belt records, and labels around the engine bay or door frame can also reveal historical readings."),
        p("A common warning sign is a missing service book. Some sellers claim the book was lost after changing the meter, then replace it with a blank one. <strong style=\"color:var(--black);font-weight:500\">Missing records should never be ignored.</strong>"),
      ],
      callout: {
        className: "callout-red",
        html: "<strong>Red flags:</strong> no service book · removed stickers · overly cleaned engine bay · records that do not match the displayed mileage",
      },
    },
    {
      badge: "Visual check · Experience needed",
      badgeClass: "badge-medium",
      title: "Compare mileage with visible wear",
      paragraphs: [
        p("Wear patterns are hard to fake consistently. If the displayed mileage is low but the following areas look heavily used, take a closer look:"),
        p("<strong style=\"color:var(--black);font-weight:500\">Steering wheel and shift lever</strong> — these surfaces are touched constantly. Cracked or faded leather on a supposedly low-mileage car is suspicious.", true),
        p("<strong style=\"color:var(--black);font-weight:500\">Brake pedal rubber</strong> — heavy wear usually indicates long-term use.", true),
        p("<strong style=\"color:var(--black);font-weight:500\">Door sills and door edges</strong> — entry and exit marks are difficult to erase completely.", true),
        p("<strong style=\"color:var(--black);font-weight:500\">Timing-belt records</strong> — if a car showing 50,000 km already has a 100,000 km timing-belt replacement record, the story needs explanation."),
      ],
    },
    {
      badge: "Professional tool · Most precise",
      badgeClass: "badge-pro",
      title: "Compare ECU data",
      paragraphs: [
        p("Modern cars do not store driving data only in the dashboard. The engine ECU, transmission control unit, ABS module, and other systems may each keep operational records."),
        p("Even if the dashboard reading has been changed, these distributed digital traces may still show the true history. A professional scan tool can compare multiple modules and expose contradictions."),
      ],
      callout: {
        className: "callout-green",
        html: "<strong>Practical value:</strong> ECU checks are especially useful for expensive models, sports cars, and imported luxury vehicles.",
      },
    },
    {
      badge: "Official check · Strongest paper trail",
      badgeClass: "badge-pro",
      title: "Use the JAAI mileage management system",
      paragraphs: [
        p("The Japan Automobile Appraisal Institute (JAAI) mileage management system collects mileage records from Japanese auction circulation. If the car has passed through auctions, its historical readings can form a useful timeline."),
        p("This type of check is helpful when a vehicle has been listed at auction multiple times. If no auction history exists, combine this with document checks, wear inspection, and ECU data where possible."),
      ],
      callout: {
        className: "callout-amber",
        html: "<strong>Note:</strong> no auction record does not automatically mean a problem. Some cars are sold directly or held privately for a long time.",
      },
    },
  ],
  tableLabel: "Summary",
  tableTitle: "Difficulty and reliability comparison",
  tableHeaders: ["Method", "Difficulty", "Cost", "Reliability", "Best for"],
  tableRows: [
    ["① Inspection certificate", '<span class="dot dot-g"></span> Easy', "Free", "★★★★", "All buyers"],
    ["② Service records", '<span class="dot dot-g"></span> Easy', "Free", "★★★★", "All buyers"],
    ["③ Wear inspection", '<span class="dot dot-a"></span> Medium', "Free", "★★★", "Experienced buyers"],
    ["④ ECU comparison", '<span class="dot dot-b"></span> Professional', "Paid", "★★★★★", "High-value cars"],
    ["⑤ JAAI check", '<span class="dot dot-b"></span> Professional', "About ¥1,500", "★★★★★", "Auction cars"],
  ],
  tableNote:
    "In practice, start with the first three checks. For high-value vehicles or any doubtful case, add ECU comparison or an official JAAI check.",
  japanLabel: "Why Japan",
  japanTitle: "Why Japanese used-car mileage is often more reliable",
  japanParagraphs: [
    p("Japan has a strong ownership and maintenance culture. Private cars often cover fewer kilometers than in many Western markets, and dealer or certified workshop records are relatively easy to trace."),
    p("After updates to Japanese vehicle laws, mileage record preservation and disclosure have become more important in used-car sales. Manipulation is not just a trust issue; it can also create legal risk."),
  ],
  japanCallout:
    "<strong>Bottom line:</strong> Japan is a comparatively transparent market, but serious buyers should still cross-check documents, records, physical wear, and available system data.",
  ctaEyebrow: "ClickCar Promise",
  ctaTitleHtml: "We handle the key<br>verification work for you",
  ctaDescription:
    "ClickCar can help verify inspection certificates, service records, auction information, and vehicle details locally in Japan before you proceed.",
  ctaTags: ["Inspection certificate check", "Auction data review", "Photos and video", "Transparent pricing", "Bidding support"],
  ctaButton: "Contact ClickCar →",
  ctaNote: "Chinese, English, and Japanese support · Usually replies within 24 hours",
};

const ja: GuideCopy = {
  lang: "ja",
  eyebrow: "購入前チェックガイド · 2026年6月更新",
  titleHtml: "日本中古車の走行距離改ざんを<br>見抜くには？<em>5つの確認方法</em>",
  description:
    "日本から中古車を購入するとき、走行距離を信頼できるかは重要なポイントです。この記事では、入札・購入前に確認したい5つの実用的な方法を整理します。",
  meta: [
    { value: "2026年6月", label: "最終更新" },
    { value: "6分", label: "読了時間" },
    { value: "日本制度", label: "参考情報" },
    { value: "全車種", label: "対象" },
  ],
  imageAlt: "ClickCarの車両確認と走行距離照合サービス",
  imageCaption: "車両確認、書類チェック、走行距離の照合は、日本での入札前に重要な工程です。",
  introLabel: "背景",
  introTitle: "走行距離改ざんは、今の日本にもあるのか？",
  introParagraphs: [
    p("走行距離改ざんは、かつて日本の中古車市場でも問題になっていました。機械式メーターの時代は表示距離を操作しやすく、現在よりも発生しやすい環境でした。"),
    p("しかし現在は状況が大きく変わっています。デジタルメーターの普及、2017年以降の車検証記録の強化、日本自動車査定協会（JAAI）の走行メーター管理システムにより、改ざんの難易度は高くなっています。"),
  ],
  stats: [
    { label: "2010年代以前", width: 82, value: "高リスク" },
    { label: "2017年制度強化後", width: 38, value: "中リスク" },
    { label: "2021年法規強化後", width: 14, value: "低リスク" },
    { label: "現在の市場", width: 7, value: "非常に低い" },
  ],
  introCallout:
    "<strong>注意：少ないからといってゼロではありません。</strong>高額なスポーツカーや輸入高級車では、走行距離の差が価格に大きく影響するため、特に慎重な確認が必要です。",
  methodsLabel: "確認方法",
  methodsTitle: "走行距離改ざんを見抜く5つの方法",
  methods: [
    {
      badge: "自分で確認 · 最速",
      badgeClass: "badge-easy",
      title: "車検証の走行距離記録を確認する",
      paragraphs: [
        p("最初に見るべきなのは車検証です。2017年1月以降、車検証の備考欄には過去の走行距離表示値が記録されます。通常は時間とともに距離が増えるため、過去の記録が現在表示より大きい場合は注意が必要です。"),
        p("距離の増え方も確認しましょう。日本の自家用車は年間6,000〜7,500km程度の使用が多いため、年式に対して極端に低い表示は慎重に見ます。"),
      ],
      callout: {
        className: "callout-green",
        html: "<strong>ポイント：</strong>車検証の原本を確認し、「走行距離計表示値」と「旧走行距離計表示値」の整合性を見ます。",
      },
    },
    {
      badge: "自分で確認 · 必須書類",
      badgeClass: "badge-easy",
      title: "メンテナンスノートと各種ステッカーを確認する",
      paragraphs: [
        p("ディーラーや認証工場で整備された車両は、メンテナンスノートに当時の走行距離が記録されることがあります。オイル交換ステッカーやタイミングベルト交換記録も重要な手がかりです。"),
        p("メーター操作後に「記録簿を紛失した」と説明されるケースもあります。<strong style=\"color:var(--black);font-weight:500\">整備記録がないこと自体が注意すべきサイン</strong>です。"),
      ],
      callout: {
        className: "callout-red",
        html: "<strong>注意点：</strong>記録簿がない · ステッカーが剥がされている · エンジンルームが不自然に清掃されている · 記録と表示距離が合わない",
      },
    },
    {
      badge: "目視確認 · 経験が必要",
      badgeClass: "badge-medium",
      title: "車両各部の摩耗状態を見る",
      paragraphs: [
        p("摩耗は全体を自然に偽装しにくい部分です。表示距離が低いのに次の箇所の使用感が強い場合は注意します。"),
        p("<strong style=\"color:var(--black);font-weight:500\">ステアリングとシフトレバー</strong>——常に触れる場所のため、劣化が距離感と合うか確認します。", true),
        p("<strong style=\"color:var(--black);font-weight:500\">ブレーキペダルのゴム</strong>——摩耗が大きい場合、長期間使用されていた可能性があります。", true),
        p("<strong style=\"color:var(--black);font-weight:500\">サイドシルとドア周辺</strong>——乗り降りによる擦れは完全には消しにくい痕跡です。", true),
        p("<strong style=\"color:var(--black);font-weight:500\">タイミングベルト交換記録</strong>——表示距離が低いのに交換記録がある場合、理由を確認します。"),
      ],
    },
    {
      badge: "専門機器 · 精度が高い",
      badgeClass: "badge-pro",
      title: "ECUデータを照合する",
      paragraphs: [
        p("現代の車両では、走行に関する情報がメーターだけでなく、エンジンECU、トランスミッション制御、ABSなど複数のユニットに残る場合があります。"),
        p("メーター表示が変更されていても、各ユニットのデータに矛盾が残ることがあります。専門診断機で複数データを照合すると、改ざんの可能性を見つけやすくなります。"),
      ],
      callout: {
        className: "callout-green",
        html: "<strong>実務上の価値：</strong>高額車、スポーツカー、輸入高級車では特に有効な確認方法です。",
      },
    },
    {
      badge: "公的確認 · 強い根拠",
      badgeClass: "badge-pro",
      title: "JAAIの走行メーター管理システムを確認する",
      paragraphs: [
        p("日本自動車査定協会（JAAI）の走行メーター管理システムには、オークション流通時の走行距離記録が蓄積されています。過去にオークションへ出品された車両であれば、履歴確認の手がかりになります。"),
        p("複数回オークションを通過している車両では、走行距離の推移を確認しやすくなります。記録がない場合も、書類、摩耗、ECUデータと合わせて総合判断します。"),
      ],
      callout: {
        className: "callout-amber",
        html: "<strong>注意：</strong>オークション履歴がない車両では記録が出ない場合があります。それだけで問題車とは限りません。",
      },
    },
  ],
  tableLabel: "比較表",
  tableTitle: "5つの方法の難易度と有効性",
  tableHeaders: ["方法", "難易度", "費用", "有効性", "向いている人"],
  tableRows: [
    ["① 車検証の確認", '<span class="dot dot-g"></span> 簡単', "無料", "★★★★", "すべての買主"],
    ["② 整備記録の確認", '<span class="dot dot-g"></span> 簡単', "無料", "★★★★", "すべての買主"],
    ["③ 摩耗の目視確認", '<span class="dot dot-a"></span> 中程度', "無料", "★★★", "経験のある買主"],
    ["④ ECU照合", '<span class="dot dot-b"></span> 専門的', "依頼が必要", "★★★★★", "高額車両"],
    ["⑤ JAAI確認", '<span class="dot dot-b"></span> 専門的', "約¥1,500", "★★★★★", "オークション流通車"],
  ],
  tableNote:
    "実務上は、まず<strong style=\"color:var(--black);font-weight:500\">最初の3つを組み合わせて確認</strong>し、不安がある場合や高額車ではECU照合やJAAI確認を追加するのがおすすめです。",
  japanLabel: "日本市場の特徴",
  japanTitle: "日本中古車の走行距離が比較的信頼される理由",
  japanParagraphs: [
    p("日本では自家用車の年間走行距離が比較的短く、整備文化も根付いています。ディーラーや認証工場での整備記録も追いやすい傾向があります。"),
    p("法制度の強化により、中古車販売時の走行距離記録や説明責任も重要になっています。走行距離改ざんは単なる信用問題ではなく、法的リスクにもつながります。"),
  ],
  japanCallout:
    "<strong>結論：</strong>日本の中古車市場は比較的透明ですが、購入時は書類、記録、摩耗、システムデータを組み合わせて確認することが大切です。",
  ctaEyebrow: "ClickCar のお約束",
  ctaTitleHtml: "重要な確認作業を<br>日本現地でサポート",
  ctaDescription:
    "ClickCarは車検証、整備記録、オークション情報、車両状態を日本現地で確認し、安心して検討できる材料を提供します。",
  ctaTags: ["車検証確認", "オークション情報確認", "現地写真・動画", "明朗な見積もり", "代行入札対応"],
  ctaButton: "ClickCarに相談する →",
  ctaNote: "中国語・英語・日本語に対応 · 通常24時間以内に返信",
};

export const odometerFraudGuideHtml: Record<string, string> = {
  zh: renderGuide(zh),
  en: renderGuide(en),
  ja: renderGuide(ja),
};
