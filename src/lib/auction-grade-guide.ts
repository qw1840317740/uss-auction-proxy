type GradeRow = {
  grade: string;
  gradeClass: string;
  name: string;
  desc: string;
  pill: string;
  pillClass: string;
};

type RatingItem = {
  letter: string;
  desc: string;
};

type DefectItem = {
  code: string;
  meaning: string;
};

type MatrixRow = {
  combination: string;
  condition: string;
  decision: string;
  className: string;
};

type AuctionGuideCopy = {
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
  introCallout: string;
  gradeLabel: string;
  gradeTitle: string;
  gradeRows: GradeRow[];
  ratingLabel: string;
  ratingTitle: string;
  exteriorTitle: string;
  interiorTitle: string;
  exteriorRows: RatingItem[];
  interiorRows: RatingItem[];
  defectLabel: string;
  defectTitle: string;
  defectParagraph: string;
  defects: DefectItem[];
  matrixLabel: string;
  matrixTitle: string;
  matrixHeaders: string[];
  matrixRows: MatrixRow[];
  matrixCallout: string;
  agentLabel: string;
  agentTitle: string;
  agentParagraphs: string[];
  agentCallout: string;
  ctaEyebrow: string;
  ctaTitleHtml: string;
  ctaDescription: string;
  ctaTags: string[];
  ctaButton: string;
  ctaHref: string;
  ctaNote: string;
};

const p = (html: string) => `<p>${html}</p>`;

function renderAuctionGuide(copy: AuctionGuideCopy): string {
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
    <div class="callout-amber"><p>${copy.introCallout}</p></div>
  </div>

  <div class="section">
    <div class="section-label">${copy.gradeLabel}</div>
    <h2>${copy.gradeTitle}</h2>
    <div class="grade-stack">
      ${copy.gradeRows
        .map(
          (row) => `<div class="grade-row">
        <div class="grade-badge ${row.gradeClass}">${row.grade}</div>
        <div class="grade-info">
          <div class="grade-name">${row.name}</div>
          <div class="grade-desc">${row.desc}</div>
        </div>
        <span class="grade-pill ${row.pillClass}">${row.pill}</span>
      </div>`
        )
        .join("\n      ")}
    </div>
  </div>

  <div class="section">
    <div class="section-label">${copy.ratingLabel}</div>
    <h2>${copy.ratingTitle}</h2>
    <div class="two-col">
      <div class="col-block">
        <div class="col-header">${copy.exteriorTitle}</div>
        ${copy.exteriorRows
          .map((row) => `<div class="ie-row"><span class="ie-letter">${row.letter}</span><span class="ie-desc">${row.desc}</span></div>`)
          .join("\n        ")}
      </div>
      <div class="col-block">
        <div class="col-header">${copy.interiorTitle}</div>
        ${copy.interiorRows
          .map((row) => `<div class="ie-row"><span class="ie-letter">${row.letter}</span><span class="ie-desc">${row.desc}</span></div>`)
          .join("\n        ")}
      </div>
    </div>
  </div>

  <div class="section">
    <div class="section-label">${copy.defectLabel}</div>
    <h2>${copy.defectTitle}</h2>
    <p>${copy.defectParagraph}</p>
    <div class="defect-grid">
      ${copy.defects
        .map((item) => `<div class="defect-cell"><div class="defect-code">${item.code}</div><div class="defect-meaning">${item.meaning}</div></div>`)
        .join("\n      ")}
    </div>
  </div>

  <div class="section">
    <div class="section-label">${copy.matrixLabel}</div>
    <h2>${copy.matrixTitle}</h2>
    <table class="matrix">
      <thead>
        <tr>${copy.matrixHeaders.map((header) => `<th>${header}</th>`).join("")}</tr>
      </thead>
      <tbody>
        ${copy.matrixRows
          .map(
            (row) => `<tr>
          <td>${row.combination}</td>
          <td>${row.condition}</td>
          <td><span class="${row.className}">${row.decision}</span></td>
        </tr>`
          )
          .join("\n        ")}
      </tbody>
    </table>
    <div class="callout-blue"><p>${copy.matrixCallout}</p></div>
  </div>

  <div class="section">
    <div class="section-label">${copy.agentLabel}</div>
    <h2>${copy.agentTitle}</h2>
    ${copy.agentParagraphs.join("\n    ")}
    <div class="callout-red"><p>${copy.agentCallout}</p></div>
  </div>

  <div class="section" style="border-bottom:none;padding-bottom:0">
    <div class="cta-section" id="cta">
      <div class="cta-eyebrow">${copy.ctaEyebrow}</div>
      <h2 class="cta-title">${copy.ctaTitleHtml}</h2>
      <p class="cta-desc">${copy.ctaDescription}</p>
      <div class="cta-features">
        ${copy.ctaTags.map((tag) => `<span class="cta-tag">${tag}</span>`).join("\n        ")}
      </div>
      <a class="cta-btn" href="${copy.ctaHref}">${copy.ctaButton}</a>
      <p class="cta-note">${copy.ctaNote}</p>
    </div>
  </div>
</div>`;
}

const zh: AuctionGuideCopy = {
  lang: "zh-CN",
  eyebrow: "拍卖知识 · 2026年6月更新",
  titleHtml: "日本中古车拍卖评级<br><em>完整解说</em>",
  description:
    "S、6、5、4.5、4、3.5、R、RA……这些数字和字母会直接影响车辆价值。读懂日本拍卖表，才能判断车况是否值得出价。",
  meta: [
    { value: "2026年6月", label: "最后更新" },
    { value: "7 分钟", label: "阅读时间" },
    { value: "USS / TAA", label: "评级标准" },
    { value: "适合", label: "所有买家" },
  ],
  imageAlt: "日本中古车拍卖检查与评级说明",
  imageCaption: "拍卖评级只是第一层筛选，真正判断车况还要结合外观、内装、瑕疵符号和检查员备注。",
  introLabel: "前言",
  introTitle: "为什么拍卖评级这么重要？",
  introParagraphs: [
    p("日本拍卖场会用综合评分、外观评分、内装评分和瑕疵符号来描述车辆状态。对海外买家来说，这张拍卖表往往是决定是否竞标的第一依据。"),
    p("但评级不是简单的“分数越高越好”。例如 R 或 RA 代表修复历史，4.5 不等于完美，外观 A 和内装 C 也会改变实际价值。只有把这些信息组合起来看，才不会被单一数字误导。"),
  ],
  introCallout:
    "<strong>核心原则：</strong>综合评级负责快速筛选，外观/内装评级负责判断成色，瑕疵符号负责定位问题，检查员备注负责补充风险。",
  gradeLabel: "综合评级",
  gradeTitle: "综合评级：S 到 RA 完整解说",
  gradeRows: [
    { grade: "S", gradeClass: "g-s", name: "接近新车", desc: "通常为注册后不久、里程极低、状态非常新的车辆。", pill: "顶级", pillClass: "pill-s" },
    { grade: "6", gradeClass: "g-6", name: "几乎新车级", desc: "使用痕迹很少，车况优秀，价格通常也高。", pill: "优秀", pillClass: "pill-6" },
    { grade: "5", gradeClass: "g-5", name: "高品质二手车", desc: "整体状态很好，小瑕疵较少，是优质车源。", pill: "推荐", pillClass: "pill-5" },
    { grade: "4.5", gradeClass: "g-45", name: "良好以上", desc: "常见优质等级，适合多数买家重点关注。", pill: "稳妥", pillClass: "pill-45" },
    { grade: "4", gradeClass: "g-4", name: "标准良好", desc: "有正常使用痕迹，但整体仍然可接受。", pill: "常见", pillClass: "pill-4" },
    { grade: "3.5", gradeClass: "g-35", name: "一般车况", desc: "划痕、凹陷或内装磨耗较明显，需要看细节。", pill: "谨慎", pillClass: "pill-35" },
    { grade: "3", gradeClass: "g-3", name: "问题较多", desc: "瑕疵较多，适合预算有限或可接受整备的买家。", pill: "高风险", pillClass: "pill-3" },
    { grade: "R", gradeClass: "g-r", name: "修复历史车", desc: "车辆骨架或重要结构部位曾修复，必须仔细确认。", pill: "需专业判断", pillClass: "pill-r" },
    { grade: "RA", gradeClass: "g-ra", name: "轻度修复历史", desc: "通常比 R 轻，但仍需要结合修复位置判断。", pill: "需核实", pillClass: "pill-ra" },
    { grade: "X", gradeClass: "g-x", name: "不可评价或特殊车", desc: "事故、故障、改装或资料不足等情况，风险较高。", pill: "避开", pillClass: "pill-x" },
  ],
  ratingLabel: "内外装评级",
  ratingTitle: "外观 A–E 与内装 A–E 分别代表什么？",
  exteriorTitle: "Exterior",
  interiorTitle: "Interior",
  exteriorRows: [
    { letter: "A", desc: "外观非常好，只有极少轻微瑕疵。" },
    { letter: "B", desc: "轻微划痕或小凹陷，整体观感仍好。" },
    { letter: "C", desc: "可见划痕、凹陷或修补痕迹，需要看图确认。" },
    { letter: "D", desc: "外观瑕疵明显，可能需要钣金或喷漆。" },
    { letter: "E", desc: "外观状态差，修复成本可能较高。" },
  ],
  interiorRows: [
    { letter: "A", desc: "内装干净，磨耗极少。" },
    { letter: "B", desc: "正常使用痕迹，整体良好。" },
    { letter: "C", desc: "污渍、磨耗、异味或小破损较明显。" },
    { letter: "D", desc: "内装状态较差，需要清洁或修复。" },
    { letter: "E", desc: "严重污损、破损或异味，不建议盲拍。" },
  ],
  defectLabel: "瑕疵符号",
  defectTitle: "拍卖表上的瑕疵符号怎么读？",
  defectParagraph: "拍卖图上的字母和数字会标注问题位置与程度。不同拍卖场略有差异，但常见含义大致如下：",
  defects: [
    { code: "A1 / A2 / A3", meaning: "划痕，数字越大越明显。" },
    { code: "U1 / U2 / U3", meaning: "凹陷，数字越大越严重。" },
    { code: "W", meaning: "喷漆波纹或修补痕迹。" },
    { code: "S", meaning: "锈蚀。" },
    { code: "C", meaning: "腐蚀。" },
    { code: "P", meaning: "漆面褪色或变色。" },
    { code: "X", meaning: "需要更换的部件。" },
    { code: "XX", meaning: "已更换部件。" },
    { code: "B", meaning: "凹痕或修补不良。" },
    { code: "E", meaning: "小凹点。" },
  ],
  matrixLabel: "组合判断",
  matrixTitle: "综合等级 × 外观 × 内装，怎么组合判断？",
  matrixHeaders: ["组合", "车况理解", "建议"],
  matrixRows: [
    { combination: "4.5 / A / A", condition: "整体优秀，瑕疵少，价格通常较高。", decision: "优先", className: "mc-best" },
    { combination: "4 / B / B", condition: "标准好车，性价比常常不错。", decision: "推荐", className: "mc-good" },
    { combination: "3.5 / C / C", condition: "有明显瑕疵，适合预算型买家。", decision: "谨慎", className: "mc-ok" },
    { combination: "R / B / B", condition: "表面不错但有修复历史，关键看修复部位。", decision: "需查", className: "mc-ok" },
    { combination: "RA / A / B", condition: "轻修复且成色好，可能有机会。", decision: "可评估", className: "mc-good" },
  ],
  matrixCallout:
    "<strong>不要只看综合分。</strong>同样是 4 分车，A/A 和 C/C 的实际价值差距很大；同样是 R 级，修复前梁和修复后备箱地板，风险也完全不同。",
  agentLabel: "海外买家",
  agentTitle: "海外买家无法直接参与日本拍卖，必须通过代理人",
  agentParagraphs: [
    p("多数日本拍卖场只对持有会员资格的业者开放，普通海外买家无法直接注册和出价。因此你看到的拍卖表，需要由日本本地代理或出口商代为确认、报价和竞标。"),
    p("一个负责任的代理人不只是帮你按按钮出价，还应该解释评级、确认瑕疵、补充现场照片或视频，并告诉你这台车是否值得竞标。"),
  ],
  agentCallout:
    "<strong>重点：</strong>如果代理人只给你一张拍卖表，不解释 R、RA、A3、U3、XX 等含义，就不适合托付高金额采购。",
  ctaEyebrow: "ClickCar 的支持",
  ctaTitleHtml: "看懂评级之后<br>让我们帮你竞标",
  ctaDescription:
    "ClickCar 可协助解读拍卖表、核对车况、补充现场信息，并根据你的预算和用途判断是否值得出价。",
  ctaTags: ["拍卖表解读", "修复历史判断", "现场照片与视频", "透明报价", "日本本地代拍"],
  ctaButton: "联系 ClickCar →",
  ctaHref: "/zh/contact",
  ctaNote: "中文、英文、日文均可沟通 · 通常 24 小时内回复",
};

const en: AuctionGuideCopy = {
  lang: "en",
  eyebrow: "Auction Knowledge · Updated June 2026",
  titleHtml: "Japanese Used Car Auction Grades<br><em>Complete Guide</em>",
  description:
    "S, 6, 5, 4.5, 4, 3.5, R, RA... these numbers and letters strongly affect vehicle value. Learning how to read the auction sheet helps you decide whether a car is worth bidding on.",
  meta: [
    { value: "June 2026", label: "Last updated" },
    { value: "7 min", label: "Read time" },
    { value: "USS / TAA", label: "Grade standards" },
    { value: "All buyers", label: "Best for" },
  ],
  imageAlt: "Japanese used car auction inspection and grading guide",
  imageCaption: "Auction grades are only the first filter. True condition comes from combining grade, exterior, interior, defect marks, and inspector notes.",
  introLabel: "Overview",
  introTitle: "Why auction grades matter",
  introParagraphs: [
    p("Japanese auction houses describe vehicle condition with an overall grade, exterior grade, interior grade, defect marks, and inspector notes. For overseas buyers, the auction sheet is often the first basis for deciding whether to bid."),
    p("A higher number is not always enough. R and RA indicate repair history, 4.5 does not mean perfect, and an exterior A with interior C can still change the real value. You need to read the whole sheet, not one score."),
  ],
  introCallout:
    "<strong>Core idea:</strong> the overall grade filters the car, exterior and interior grades explain cosmetic condition, defect marks locate issues, and inspector notes add risk details.",
  gradeLabel: "Overall Grade",
  gradeTitle: "Overall grade: from S to RA",
  gradeRows: [
    { grade: "S", gradeClass: "g-s", name: "Almost new", desc: "Very new vehicle, usually recently registered with extremely low mileage.", pill: "Top", pillClass: "pill-s" },
    { grade: "6", gradeClass: "g-6", name: "Near-new condition", desc: "Minimal signs of use and excellent overall condition.", pill: "Excellent", pillClass: "pill-6" },
    { grade: "5", gradeClass: "g-5", name: "High-quality used car", desc: "Very good overall condition with limited minor flaws.", pill: "Recommended", pillClass: "pill-5" },
    { grade: "4.5", gradeClass: "g-45", name: "Above average", desc: "A common high-quality target for many buyers.", pill: "Safe target", pillClass: "pill-45" },
    { grade: "4", gradeClass: "g-4", name: "Standard good car", desc: "Normal use marks, generally acceptable if details are clean.", pill: "Common", pillClass: "pill-4" },
    { grade: "3.5", gradeClass: "g-35", name: "Average condition", desc: "More visible scratches, dents, or interior wear.", pill: "Check closely", pillClass: "pill-35" },
    { grade: "3", gradeClass: "g-3", name: "Many issues", desc: "Several flaws; suitable only if the price and repair plan make sense.", pill: "Risky", pillClass: "pill-3" },
    { grade: "R", gradeClass: "g-r", name: "Repair history", desc: "Structural or important parts have been repaired. Expert review is required.", pill: "Expert check", pillClass: "pill-r" },
    { grade: "RA", gradeClass: "g-ra", name: "Light repair history", desc: "Usually lighter than R, but repair location still matters.", pill: "Verify", pillClass: "pill-ra" },
    { grade: "X", gradeClass: "g-x", name: "Special or ungraded", desc: "Accident, fault, heavy modification, or insufficient data. High risk.", pill: "Avoid", pillClass: "pill-x" },
  ],
  ratingLabel: "Exterior / Interior",
  ratingTitle: "What do exterior A-E and interior A-E mean?",
  exteriorTitle: "Exterior",
  interiorTitle: "Interior",
  exteriorRows: [
    { letter: "A", desc: "Excellent exterior with very few minor marks." },
    { letter: "B", desc: "Light scratches or small dents; still looks good overall." },
    { letter: "C", desc: "Visible scratches, dents, or repair marks. Photos matter." },
    { letter: "D", desc: "Obvious exterior defects; bodywork or paint may be needed." },
    { letter: "E", desc: "Poor exterior condition and potentially high repair cost." },
  ],
  interiorRows: [
    { letter: "A", desc: "Clean interior with very little wear." },
    { letter: "B", desc: "Normal use marks but generally good." },
    { letter: "C", desc: "Noticeable stains, wear, odor, or small damage." },
    { letter: "D", desc: "Poor interior requiring cleaning or repair." },
    { letter: "E", desc: "Severe stains, damage, or odor. Do not bid blindly." },
  ],
  defectLabel: "Defect Symbols",
  defectTitle: "How to read defect marks on auction sheets",
  defectParagraph:
    "Letters and numbers on the vehicle diagram indicate issue type and severity. Each auction house may vary slightly, but common meanings include:",
  defects: [
    { code: "A1 / A2 / A3", meaning: "Scratch. Larger number means more visible." },
    { code: "U1 / U2 / U3", meaning: "Dent. Larger number means more severe." },
    { code: "W", meaning: "Paint wave or repair mark." },
    { code: "S", meaning: "Rust." },
    { code: "C", meaning: "Corrosion." },
    { code: "P", meaning: "Paint fading or discoloration." },
    { code: "X", meaning: "Part needs replacement." },
    { code: "XX", meaning: "Part already replaced." },
    { code: "B", meaning: "Dent or poor repair." },
    { code: "E", meaning: "Small dimple." },
  ],
  matrixLabel: "Decision Matrix",
  matrixTitle: "How to combine overall grade, exterior, and interior",
  matrixHeaders: ["Combination", "Condition", "Decision"],
  matrixRows: [
    { combination: "4.5 / A / A", condition: "Excellent overall; usually expensive but clean.", decision: "Priority", className: "mc-best" },
    { combination: "4 / B / B", condition: "Good standard car with balanced value.", decision: "Recommended", className: "mc-good" },
    { combination: "3.5 / C / C", condition: "Visible flaws; budget buyers only.", decision: "Careful", className: "mc-ok" },
    { combination: "R / B / B", condition: "Looks clean but has repair history. Location is critical.", decision: "Verify", className: "mc-ok" },
    { combination: "RA / A / B", condition: "Light repair with good cosmetics; may be an opportunity.", decision: "Evaluate", className: "mc-good" },
  ],
  matrixCallout:
    "<strong>Do not read only the overall grade.</strong> Two grade-4 cars can be very different if one is A/A and the other is C/C. Repair location also matters far more than the letter R alone.",
  agentLabel: "Overseas Buyers",
  agentTitle: "Overseas buyers usually need a local auction agent",
  agentParagraphs: [
    p("Most Japanese auction houses are open only to licensed members. Ordinary overseas buyers cannot directly register and bid, so a local agent or exporter must confirm the sheet, quote the vehicle, and bid on your behalf."),
    p("A good agent should do more than click the bid button. They should explain the grade, identify risks, request extra photos or video when needed, and tell you whether the car is worth bidding on."),
  ],
  agentCallout:
    "<strong>Key point:</strong> if an agent only sends the auction sheet without explaining R, RA, A3, U3, or XX, they are not suitable for high-value purchases.",
  ctaEyebrow: "ClickCar Support",
  ctaTitleHtml: "Understand the grade<br>then let us bid for you",
  ctaDescription:
    "ClickCar can interpret auction sheets, verify condition, request extra on-site information, and judge whether a car is worth bidding on for your budget and use case.",
  ctaTags: ["Auction sheet review", "Repair-history check", "Photos and video", "Transparent quote", "Japan auction bidding"],
  ctaButton: "Contact ClickCar →",
  ctaHref: "/en/contact",
  ctaNote: "Chinese, English, and Japanese support · Usually replies within 24 hours",
};

const ja: AuctionGuideCopy = {
  lang: "ja",
  eyebrow: "オークション知識 · 2026年6月更新",
  titleHtml: "日本中古車オークション評価<br><em>完全ガイド</em>",
  description:
    "S、6、5、4.5、4、3.5、R、RAなどの評価は車両価値に大きく影響します。オークションシートを読めるようになることで、入札すべき車か判断しやすくなります。",
  meta: [
    { value: "2026年6月", label: "最終更新" },
    { value: "7分", label: "読了時間" },
    { value: "USS / TAA", label: "評価基準" },
    { value: "全ての買主", label: "対象" },
  ],
  imageAlt: "日本中古車オークション検査と評価の説明",
  imageCaption: "オークション評価は最初のフィルターです。実際の判断には、外装・内装・記号・検査員コメントを組み合わせます。",
  introLabel: "概要",
  introTitle: "なぜオークション評価が重要なのか？",
  introParagraphs: [
    p("日本のオークション会場では、総合評価、外装評価、内装評価、展開図の記号、検査員コメントで車両状態を示します。海外買主にとって、オークションシートは入札判断の出発点になります。"),
    p("ただし、数字が高ければ必ず良いとは限りません。RやRAは修復歴を示し、4.5でも完璧ではありません。外装Aでも内装Cなら価値判断は変わります。全体を組み合わせて読むことが大切です。"),
  ],
  introCallout:
    "<strong>基本：</strong>総合評価は一次選別、外装・内装評価は見た目の状態、記号は問題箇所、検査員コメントはリスク補足として読みます。",
  gradeLabel: "総合評価",
  gradeTitle: "総合評価：SからRAまで",
  gradeRows: [
    { grade: "S", gradeClass: "g-s", name: "新車に近い状態", desc: "登録後まもなく、走行距離が非常に少ない車両。", pill: "最上位", pillClass: "pill-s" },
    { grade: "6", gradeClass: "g-6", name: "ほぼ新車級", desc: "使用感が少なく、全体状態が非常に良い車両。", pill: "優秀", pillClass: "pill-6" },
    { grade: "5", gradeClass: "g-5", name: "高品質中古車", desc: "全体的に状態が良く、小さな欠点が少ない車両。", pill: "おすすめ", pillClass: "pill-5" },
    { grade: "4.5", gradeClass: "g-45", name: "良好以上", desc: "多くの買主が狙いやすい高品質グレード。", pill: "安定", pillClass: "pill-45" },
    { grade: "4", gradeClass: "g-4", name: "標準的に良好", desc: "通常使用の痕跡はあるが、全体的には許容範囲。", pill: "一般的", pillClass: "pill-4" },
    { grade: "3.5", gradeClass: "g-35", name: "平均的な状態", desc: "傷、へこみ、内装摩耗が比較的目立つ場合がある。", pill: "注意", pillClass: "pill-35" },
    { grade: "3", gradeClass: "g-3", name: "欠点が多い", desc: "複数の問題があり、整備前提で検討する車両。", pill: "高リスク", pillClass: "pill-3" },
    { grade: "R", gradeClass: "g-r", name: "修復歴あり", desc: "骨格や重要部位の修復歴があるため、専門確認が必要。", pill: "要確認", pillClass: "pill-r" },
    { grade: "RA", gradeClass: "g-ra", name: "軽度修復歴", desc: "Rより軽い場合が多いが、修復箇所の確認が重要。", pill: "要照合", pillClass: "pill-ra" },
    { grade: "X", gradeClass: "g-x", name: "評価不可・特殊車", desc: "事故、故障、改造、情報不足などリスクが高い車両。", pill: "避ける", pillClass: "pill-x" },
  ],
  ratingLabel: "外装・内装",
  ratingTitle: "外装A-E、内装A-Eの意味",
  exteriorTitle: "Exterior",
  interiorTitle: "Interior",
  exteriorRows: [
    { letter: "A", desc: "外装が非常に良く、軽微な傷のみ。" },
    { letter: "B", desc: "小傷や小さなへこみはあるが全体は良好。" },
    { letter: "C", desc: "傷、へこみ、補修跡が見える。写真確認が必要。" },
    { letter: "D", desc: "外装欠点が明確で、板金や塗装が必要な場合あり。" },
    { letter: "E", desc: "外装状態が悪く、修理費が高くなる可能性。" },
  ],
  interiorRows: [
    { letter: "A", desc: "内装が清潔で摩耗が少ない。" },
    { letter: "B", desc: "通常使用の痕跡はあるが概ね良好。" },
    { letter: "C", desc: "汚れ、摩耗、臭い、小さな破れが目立つ。" },
    { letter: "D", desc: "清掃や補修が必要な内装状態。" },
    { letter: "E", desc: "重い汚れ、破損、臭いがあり、盲目的な入札は危険。" },
  ],
  defectLabel: "記号",
  defectTitle: "オークションシートの記号の読み方",
  defectParagraph:
    "展開図の文字と数字は、問題の種類と程度を示します。会場により多少違いますが、代表的な意味は次の通りです。",
  defects: [
    { code: "A1 / A2 / A3", meaning: "傷。数字が大きいほど目立つ。" },
    { code: "U1 / U2 / U3", meaning: "へこみ。数字が大きいほど大きい。" },
    { code: "W", meaning: "塗装波、補修跡。" },
    { code: "S", meaning: "錆。" },
    { code: "C", meaning: "腐食。" },
    { code: "P", meaning: "塗装の色あせ、変色。" },
    { code: "X", meaning: "交換が必要な部品。" },
    { code: "XX", meaning: "交換済み部品。" },
    { code: "B", meaning: "へこみ、補修不良。" },
    { code: "E", meaning: "小さなえくぼ。" },
  ],
  matrixLabel: "組み合わせ判断",
  matrixTitle: "総合評価 × 外装 × 内装の見方",
  matrixHeaders: ["組み合わせ", "状態の理解", "判断"],
  matrixRows: [
    { combination: "4.5 / A / A", condition: "全体的に優秀で価格は高め。", decision: "優先", className: "mc-best" },
    { combination: "4 / B / B", condition: "標準的に良い車。バランスが良い。", decision: "おすすめ", className: "mc-good" },
    { combination: "3.5 / C / C", condition: "欠点が目立つ。予算重視向け。", decision: "注意", className: "mc-ok" },
    { combination: "R / B / B", condition: "見た目は良くても修復歴あり。箇所確認が重要。", decision: "確認", className: "mc-ok" },
    { combination: "RA / A / B", condition: "軽度修復で見た目が良ければ候補になる。", decision: "評価可", className: "mc-good" },
  ],
  matrixCallout:
    "<strong>総合評価だけで判断しないこと。</strong>同じ4点でもA/AとC/Cでは価値が大きく違います。R評価も、修復箇所によってリスクは大きく変わります。",
  agentLabel: "海外買主",
  agentTitle: "海外買主は通常、日本の代理人が必要",
  agentParagraphs: [
    p("多くの日本オークション会場は会員業者向けで、一般の海外買主が直接登録して入札することはできません。そのため、日本現地の代理人や輸出業者がシート確認、見積り、入札を代行します。"),
    p("良い代理人は単に入札するだけではありません。評価の意味、修復歴、瑕疵記号、追加写真や動画の必要性を説明し、その車に入札すべきか判断材料を提供します。"),
  ],
  agentCallout:
    "<strong>重要：</strong>R、RA、A3、U3、XXなどを説明せずにシートだけ送る代理人には、高額購入を任せない方が安全です。",
  ctaEyebrow: "ClickCar のサポート",
  ctaTitleHtml: "評価を理解したら<br>入札はお任せください",
  ctaDescription:
    "ClickCarはオークションシートの解読、車両状態確認、追加情報の取得、予算と用途に合う入札判断を日本現地でサポートします。",
  ctaTags: ["オークションシート解読", "修復歴確認", "写真・動画確認", "明朗な見積もり", "日本現地入札"],
  ctaButton: "ClickCarに相談する →",
  ctaHref: "/ja/contact",
  ctaNote: "中国語・英語・日本語に対応 · 通常24時間以内に返信",
};

export const auctionGradeGuideHtml: Record<string, string> = {
  zh: renderAuctionGuide(zh),
  en: renderAuctionGuide(en),
  ja: renderAuctionGuide(ja),
};
