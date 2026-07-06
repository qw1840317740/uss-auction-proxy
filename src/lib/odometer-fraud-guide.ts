function guide({
  introLabel,
  introTitle,
  intro1,
  intro2,
  warning,
  methodsTitle,
  sectionLabel,
  rows,
  whyTitle,
  why1,
  why2,
  caseText,
  ctaTitle,
  ctaDesc,
  ctaButton,
  ctaNote,
}: {
  introLabel: string;
  introTitle: string;
  intro1: string;
  intro2: string;
  warning: string;
  methodsTitle: string;
  sectionLabel: string;
  rows: { n: string; badge: string; title: string; body: string; tip: string; tone?: "green" | "amber" | "red" }[];
  whyTitle: string;
  why1: string;
  why2: string;
  caseText: string;
  ctaTitle: string;
  ctaDesc: string;
  ctaButton: string;
  ctaNote: string;
}) {
  return `<div class="article-body">
  <div class="section">
    <div class="section-label">${introLabel}</div>
    <h2>${introTitle}</h2>
    <p>${intro1}</p>
    <p>${intro2}</p>
    <div class="stat-row"><span class="stat-label">2010s</span><div class="stat-bar-wrap"><div class="stat-bar" style="width:82%"></div></div><span class="stat-val">High</span></div>
    <div class="stat-row"><span class="stat-label">2017</span><div class="stat-bar-wrap"><div class="stat-bar" style="width:38%"></div></div><span class="stat-val">Medium</span></div>
    <div class="stat-row"><span class="stat-label">2021</span><div class="stat-bar-wrap"><div class="stat-bar" style="width:14%"></div></div><span class="stat-val">Low</span></div>
    <div class="stat-row"><span class="stat-label">Today</span><div class="stat-bar-wrap"><div class="stat-bar" style="width:7%"></div></div><span class="stat-val">Rare</span></div>
    <div class="callout-amber"><p><strong>Note:</strong> ${warning}</p></div>
  </div>

  <div class="section">
    <div class="section-label">${sectionLabel}</div>
    <h2>${methodsTitle}</h2>
    <div class="step-list">
      ${rows
        .map(
          (item) => `<div class="step-item">
        <div class="step-num">${item.n}</div>
        <div class="step-content">
          <span class="step-badge">${item.badge}</span>
          <h3>${item.title}</h3>
          <p>${item.body}</p>
          <div class="callout-${item.tone || "green"}"><p>${item.tip}</p></div>
        </div>
      </div>`,
        )
        .join("")}
    </div>
  </div>

  <div class="section">
    <div class="section-label">Checklist</div>
    <h2>${methodsTitle}</h2>
    <table class="summary-table">
      <thead><tr><th>Method</th><th>Difficulty</th><th>Cost</th><th>Best for</th></tr></thead>
      <tbody>
        <tr><td>Inspection certificate mileage</td><td>Easy</td><td>Free</td><td>Every buyer</td></tr>
        <tr><td>Service records</td><td>Easy</td><td>Free</td><td>Every buyer</td></tr>
        <tr><td>Wear inspection</td><td>Medium</td><td>Free</td><td>Experienced buyers</td></tr>
        <tr><td>ECU data comparison</td><td>Professional</td><td>Paid</td><td>High-value cars</td></tr>
        <tr><td>JAAI inquiry</td><td>Professional</td><td>About ¥1,500</td><td>Auction cars</td></tr>
      </tbody>
    </table>
  </div>

  <div class="section">
    <div class="section-label">Japan Market</div>
    <h2>${whyTitle}</h2>
    <p>${why1}</p>
    <p>${why2}</p>
    <div class="callout-green"><p>${caseText}</p></div>
  </div>

  <div class="section" style="border-bottom:none;padding-bottom:0">
    <div class="cta-section">
      <div class="cta-eyebrow">ClickCar</div>
      <h2 class="cta-title">${ctaTitle}</h2>
      <p class="cta-desc">${ctaDesc}</p>
      <div class="cta-features">
        <span class="cta-tag">Mileage check</span>
        <span class="cta-tag">Auction sheet review</span>
        <span class="cta-tag">Inspection records</span>
        <span class="cta-tag">Transparent quote</span>
      </div>
      <a class="cta-btn" href="/contact">${ctaButton}</a>
      <p class="cta-note">${ctaNote}</p>
    </div>
  </div>
</div>`;
}

export const odometerFraudGuideZh = guide({
  introLabel: "背景说明",
  introTitle: "里程表作假，在日本还存在吗？",
  intro1: "里程表作假曾经是日本中古车市场的一大风险。尤其在机械仪表时代，数字被人为回调并不罕见。",
  intro2: "现在情况已经不同。数字仪表、车检记录强化、JAAI 走行メーター管理系统，让造假的成本和被发现概率都大幅提高。",
  warning: "高价跑车、豪华进口车仍然需要谨慎。少一万公里可能带来明显价差，所以购买前仍必须核实。",
  sectionLabel: "核心方法",
  methodsTitle: "5 个识别里程表作假的方法",
  rows: [
    { n: "01", badge: "最快速", title: "核对车检证的历次里程", body: "日本车检证会记录前次和本次车检时的里程。正常车辆里程应随时间增加，若出现倒退或跳跃，就要高度警惕。", tip: "向卖方索取车检证原件，重点看备考栏的走行距离记录。" },
    { n: "02", badge: "必查文件", title: "检查保养记录与贴纸", body: "原厂或授权工场保养时通常会记录当时里程。机油贴纸、正时皮带更换贴纸也能提供线索。", tip: "保养记录本突然缺失，本身就是红旗。", tone: "red" },
    { n: "03", badge: "目视判断", title: "观察方向盘、踏板和内饰磨损", body: "低里程车不应有严重方向盘发亮、踏板橡胶磨平、座椅塌陷等痕迹。磨损状态要和里程逻辑一致。", tip: "这一步不能单独定罪，但很适合发现异常。" },
    { n: "04", badge: "专业工具", title: "读取 ECU 数据交叉比对", body: "现代车辆的里程相关数据可能存在于 ECU、变速箱控制单元、ABS 等模块中。专业设备可读取并比对。", tip: "高价车或可疑车建议做这一步。" },
    { n: "05", badge: "官方查询", title: "使用 JAAI 走行メーター管理系统", body: "JAAI 系统记录车辆在日本拍卖市场出现过的里程历史，适合确认拍卖流通车辆的时间线。", tip: "若车辆从未进入拍卖流通，系统可能查无记录。", tone: "amber" },
  ],
  whyTitle: "为什么日本中古车里程可信度相对更高？",
  why1: "日本年均行驶里程较低，车检和保养制度完善，许多车辆都有连续的书面记录。",
  why2: "2021 年法规强化后，销售中古车时的里程记录保存和说明责任更明确，违规风险更高。",
  caseText: "实务建议：至少同时看车检证、保养记录、内饰磨损。三者一致时，可信度会高很多。",
  ctaTitle: "我们帮你做完核实工作",
  ctaDesc: "ClickCar 会在日本当地协助确认车检证、保养记录、拍卖单和现场照片，降低远程买车风险。",
  ctaButton: "咨询 ClickCar",
  ctaNote: "中文、英文、日文均可沟通",
});

export const odometerFraudGuideEn = guide({
  introLabel: "Background",
  introTitle: "Does odometer fraud still happen in Japan?",
  intro1: "Odometer rollback used to be a real risk in the Japanese used-car market, especially when analog clusters were common.",
  intro2: "Today, digital meters, stricter inspection records, and JAAI mileage tracking make fraud harder and easier to detect.",
  warning: "Sports cars and imported luxury cars still deserve extra caution. A lower mileage reading can change the price enough to create incentive.",
  sectionLabel: "Core Checks",
  methodsTitle: "5 ways to spot odometer fraud",
  rows: [
    { n: "01", badge: "Fastest check", title: "Compare mileage on the inspection certificate", body: "Japanese inspection certificates show recent mileage records. The numbers should move forward logically over time.", tip: "Ask for the original inspection certificate and check the remarks section." },
    { n: "02", badge: "Paper trail", title: "Check service records and maintenance stickers", body: "Dealer service books, oil-change stickers, and timing-belt labels often include mileage at the time of service.", tip: "A missing service book is not harmless; treat it as a warning sign.", tone: "red" },
    { n: "03", badge: "Wear clues", title: "Inspect steering wheel, pedals, seats, and trim", body: "A low-mileage car should not have heavy pedal wear, shiny steering leather, collapsed seats, or badly scratched door sills.", tip: "Wear does not prove fraud by itself, but it tells you where to look closer." },
    { n: "04", badge: "Professional", title: "Read ECU data and compare modules", body: "Modern cars may store mileage-related data in the ECU, transmission module, ABS module, and other systems.", tip: "Use this for expensive cars or whenever the paper trail feels inconsistent." },
    { n: "05", badge: "Official route", title: "Use the JAAI mileage management system", body: "JAAI records mileage history from Japanese auction circulation and can help verify the timeline of auction vehicles.", tip: "If a car never passed through auction, there may be no record.", tone: "amber" },
  ],
  whyTitle: "Why Japanese used cars are usually more traceable",
  why1: "Average annual mileage in Japan is relatively low, and inspection and maintenance culture is document-heavy.",
  why2: "Since legal requirements tightened, sellers face more responsibility for keeping and disclosing mileage history.",
  caseText: "Practical rule: compare inspection records, service history, and physical wear together. One source is useful; three consistent sources are stronger.",
  ctaTitle: "We verify before you buy",
  ctaDesc: "ClickCar checks inspection records, auction sheets, service history, and vehicle photos locally in Japan before recommending a car.",
  ctaButton: "Contact ClickCar",
  ctaNote: "Chinese, English, and Japanese support available",
});

export const odometerFraudGuideJa = guide({
  introLabel: "背景",
  introTitle: "日本中古車で走行距離改ざんはまだあるのか",
  intro1: "アナログメーター時代には、走行距離の改ざんは中古車市場の大きなリスクでした。",
  intro2: "現在はデジタルメーター、車検記録、JAAI の走行メーター管理システムにより、改ざんは難しく、発見もしやすくなっています。",
  warning: "高額なスポーツカーや輸入高級車では今でも注意が必要です。走行距離の差が価格に大きく影響するためです。",
  sectionLabel: "確認方法",
  methodsTitle: "走行距離改ざんを見抜く 5 つの方法",
  rows: [
    { n: "01", badge: "最初に確認", title: "車検証の走行距離記録を確認する", body: "車検証には過去の走行距離記録が残ります。通常は時間とともに自然に増えるため、逆転や不自然な増減は要注意です。", tip: "原本の車検証を確認し、備考欄の走行距離を見ます。" },
    { n: "02", badge: "記録確認", title: "整備記録簿とステッカーを見る", body: "整備記録簿、オイル交換ステッカー、タイミングベルト交換記録には当時の走行距離が残ることがあります。", tip: "整備記録簿がない場合は警戒すべきサインです。", tone: "red" },
    { n: "03", badge: "目視確認", title: "ハンドル、ペダル、シートの摩耗を見る", body: "低走行車なのにペダルが大きく摩耗している、ハンドルが強く光っている、シートがへたっている場合は不自然です。", tip: "摩耗だけで断定はできませんが、違和感を見つける有効な方法です。" },
    { n: "04", badge: "専門確認", title: "ECU データを読み取って比較する", body: "現代車では ECU、ミッション制御、ABS など複数のユニットに走行関連データが残る場合があります。", tip: "高額車や記録に違和感がある車では有効です。" },
    { n: "05", badge: "公式確認", title: "JAAI 走行メーター管理システムを利用する", body: "JAAI のシステムでは、日本のオークション流通時の走行距離履歴を確認できる場合があります。", tip: "オークション流通歴がない車では記録がない場合もあります。", tone: "amber" },
  ],
  whyTitle: "日本中古車の走行距離が比較的信頼しやすい理由",
  why1: "日本は年間走行距離が比較的少なく、車検や整備記録が残りやすい市場です。",
  why2: "法規制の強化により、中古車販売時の走行距離記録の保存と説明責任も重くなっています。",
  caseText: "実務では、車検証、整備記録、内外装の摩耗を合わせて確認することが重要です。",
  ctaTitle: "購入前に確認します",
  ctaDesc: "ClickCar は日本現地で車検証、オークションシート、整備記録、写真を確認してからご提案します。",
  ctaButton: "ClickCar に相談",
  ctaNote: "中国語・英語・日本語で対応可能",
});
