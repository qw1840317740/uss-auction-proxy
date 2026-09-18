export const buyingGuideSlugs = [
  "used-cars-from-japan",
  "japan-car-auction",
  "japan-export-costs",
] as const;

export type BuyingGuideSlug = (typeof buyingGuideSlugs)[number];
export type BuyingGuideLocale = "en" | "zh" | "ja";

interface Section {
  title: string;
  body: string;
  points: string[];
}

interface Guide {
  title: string;
  description: string;
  intro: string;
  sections: Section[];
  question: string;
  answer: string;
}

export const buyingGuides: Record<BuyingGuideSlug, Record<BuyingGuideLocale, Guide>> = {
  "used-cars-from-japan": {
    en: {
      title: "Buy Used Cars from Japan",
      description: "Compare listed vehicles and auction sourcing, review condition evidence, and plan the full import cost before buying a used car from Japan.",
      intro: "A successful purchase starts with a vehicle you can legally import, not a promising auction photo. ClickCar can help shortlist listed vehicles or source through Japanese auctions, then coordinate the agreed Japan-side purchase and export steps.",
      sections: [
        {
          title: "Choose the buying route",
          body: "A listed vehicle has an asking price and currently available photographs. An auction vehicle has a bidding deadline and may need a maximum bid before its final price is known. Neither route removes the need to verify eligibility in the destination country.",
          points: ["Send model, year range, budget and destination port.", "Decide whether a fixed-price listing or auction search suits your timeline.", "Check the destination's age, steering, emissions and registration rules first."],
        },
        {
          title: "Review the actual vehicle",
          body: "Ask for the chassis number, mileage, condition photographs and available service or auction records. An auction grade is a screening tool, not a warranty. Additional inspection depends on the vehicle's location and the time available before bidding.",
          points: ["Read repair-history notes and the auction sheet when available.", "Check whether an independent inspection can be arranged.", "Keep the vehicle description and any agreed conditions in writing."],
        },
        {
          title: "Compare the landed cost",
          body: "The vehicle price is only one part of the budget. A useful estimate separates the purchase and service fee, inland transport, any preparation, export paperwork and sea freight from destination taxes, port charges and registration costs.",
          points: ["Request an itemized written estimate and exclusions.", "Ask whether marine insurance is included or optional.", "Confirm who handles customs clearance after arrival."],
        },
        {
          title: "Approve purchase and shipment",
          body: "Confirm transaction terms, bank details and the shipment route before sending funds. Japan-side deregistration and carrier paperwork follow the purchase. The destination importer remains responsible for local approval and registration unless separately agreed.",
          points: ["Verify payment instructions through an independent channel.", "Do not book shipment before a required import permit is granted.", "Keep invoice, export evidence and bill of lading together."],
        },
      ],
      question: "Can I buy a car in Japan without travelling there?",
      answer: "You can review a vehicle and approve a purchase remotely. Available inspection and documents vary by vehicle; local import approval, customs and registration still need to be arranged for your destination.",
    },
    zh: {
      title: "从日本购买二手车",
      description: "比较现车和拍卖寻车，核对车况资料，并在购车前估算日本二手车进口的完整费用。",
      intro: "购车首先要确认车辆能否在目的地合法进口，而不是只看拍卖照片。ClickCar 可协助筛选现车或日本拍卖车辆，并协调约定的日本境内购车与出口步骤。",
      sections: [
        {
          title: "选择购车方式",
          body: "现车有当前标价和可查看的照片；拍卖车辆有竞拍截止时间，成交价须在出价后才能确定。两种方式都要先核实目的国准入资格。",
          points: ["提供车型、年份范围、预算和目的港。", "根据时间安排选择固定标价或拍卖寻车。", "先查车龄、方向盘、排放和登记规则。"],
        },
        {
          title: "核对具体车辆",
          body: "索取车架号、里程、车况照片及可获取的保养或拍卖记录。拍卖评级只能辅助筛选，不是车况保证。能否额外检测取决于车辆所在地及竞拍前剩余时间。",
          points: ["如有拍卖表，阅读修复历史和检查员备注。", "确认能否安排独立检测。", "把车辆描述及约定条件保留为书面记录。"],
        },
        {
          title: "计算落地成本",
          body: "车价只是预算的一部分。费用估算应区分购车费、服务费、日本境内运输、整备、出口文件及海运，与目的地税费、港杂费和上牌费用。",
          points: ["索取列明包含及未包含项目的书面报价。", "确认海运保险是包含还是可选。", "明确到港后谁负责清关。"],
        },
        {
          title: "确认交易和装运",
          body: "付款前核实交易条款、银行资料及航线。成交后办理日本境内注销和船公司文件。除非另有约定，目的地进口人负责当地许可及登记。",
          points: ["通过独立渠道核对收款信息。", "需要进口许可的市场，获批前不要订舱。", "妥善保存发票、出口证明和提单。"],
        },
      ],
      question: "不去日本也能购车吗？",
      answer: "可以远程查看车辆并确认交易。检查方式和可提供文件因车而异；目的地的进口许可、清关及上牌仍需另行安排。",
    },
    ja: {
      title: "日本から中古車を購入",
      description: "在庫車とオークション調達を比較し、車両状態と輸入総費用を購入前に確認するためのガイドです。",
      intro: "購入の出発点は、魅力的な写真ではなく、仕向地で合法的に輸入できる車両かどうかの確認です。ClickCarは掲載車両または日本のオークションからの調達と、合意した日本側の購入・輸出手続きを支援します。",
      sections: [
        {
          title: "購入方法を選ぶ",
          body: "掲載車両には提示価格と現在の写真があります。オークション車には入札期限があり、最終価格は落札まで確定しません。どちらも仕向地での輸入資格を先に確認します。",
          points: ["車種、年式、予算、仕向港を伝える。", "固定価格とオークション調達を日程に合わせて選ぶ。", "車齢、ハンドル、排出ガス、登録条件を調べる。"],
        },
        {
          title: "個別車両を確認する",
          body: "車台番号、走行距離、状態写真、入手可能な整備・オークション記録を確認します。評価点は選別の材料であり保証ではありません。追加点検の可否は所在地と入札までの時間によります。",
          points: ["出品票があれば修復歴と検査員の記載を読む。", "独立した点検を手配できるか確認する。", "車両説明と合意事項を書面に残す。"],
        },
        {
          title: "到着までの費用を計算する",
          body: "車両価格だけでは総予算は分かりません。購入・サービス料、日本国内輸送、整備、輸出書類、海上運賃と、仕向地の税金・港湾費用・登録費用を分けて確認します。",
          points: ["包含・除外項目を記載した見積書を求める。", "海上保険の扱いを確認する。", "到着後の通関担当者を決める。"],
        },
        {
          title: "購入と船積みを承認する",
          body: "送金前に契約条件、口座情報、航路を確認します。購入後に日本側の登録抹消と運送書類を準備します。別途合意がなければ現地の許可・登録は輸入者が担当します。",
          points: ["別の連絡手段で振込先を照合する。", "輸入許可が必要なら承認前に船積み予約をしない。", "請求書、輸出証明、船荷証券を保管する。"],
        },
      ],
      question: "日本へ行かずに車を購入できますか？",
      answer: "車両確認と購入承認は遠隔でも可能です。検査方法や書類は車両ごとに異なり、仕向地の輸入許可・通関・登録は別途手配が必要です。",
    },
  },
  "japan-car-auction": {
    en: {
      title: "Buy Through a Japanese Car Auction",
      description: "Understand auction access, condition sheets, maximum bids and post-sale export steps before buying a Japanese used car at auction.",
      intro: "Auction sourcing can widen the search beyond current listings, but it is a time-sensitive purchase. ClickCar helps buyers define a brief, review available vehicle evidence and agree a maximum bid before an auction agent acts in Japan.",
      sections: [
        {
          title: "Set a vehicle brief before searching",
          body: "A useful brief names the model, acceptable years and mileage, must-have equipment, condition exclusions and destination. Import eligibility belongs in the brief: an attractive lot is not useful if it cannot be registered where you live.",
          points: ["Specify budget in JPY and the destination port.", "Identify any age or steering restrictions.", "Decide which repair histories are unacceptable."],
        },
        {
          title: "Read the sheet, then question it",
          body: "Auction sheets may show an overall grade, exterior and interior marks, equipment and inspector notes. Grading conventions can differ among auction houses. Translated notes and photographs help, but they do not replace a vehicle-specific inspection when one is available.",
          points: ["Review chassis number, mileage and repair-history classification.", "Ask what additional photos or inspection can be obtained.", "Treat grade as a screening signal, not a guarantee."],
        },
        {
          title: "Agree the bid and fees in writing",
          body: "Before bidding, agree the maximum bid, service charge, auction fees and what happens if the vehicle is not won. Auctions may have deadlines and cancellation restrictions. Payment schedule and any refundable amount must be documented for the specific transaction.",
          points: ["Approve the maximum JPY bid before the auction.", "Confirm fees and payment terms in writing.", "Verify the beneficiary account independently."],
        },
        {
          title: "Plan the steps after a winning bid",
          body: "After purchase, the vehicle may need collection, document processing, deregistration and delivery to a Japanese port. Sea freight and destination clearance are separate. Check a required import permit before bidding, not after the car is bought.",
          points: ["Review the invoice and available vehicle records.", "Choose an available RoRo or container route.", "Confirm the importer responsible for local taxes and registration."],
        },
      ],
      question: "Can ClickCar guarantee the auction condition grade?",
      answer: "No. The auction house assigns its grade and inspection notes. We can share available records, explain what they show and discuss additional inspection when feasible; condition should be assessed for the specific vehicle.",
    },
    zh: {
      title: "日本二手车拍卖代购",
      description: "了解日本拍卖准入、拍卖表、最高出价和成交后的出口步骤，避免只凭评级决定购车。",
      intro: "拍卖能扩大寻车范围，但交易时间紧。ClickCar 可协助确定车型需求、阅读可获取的车况资料，并在日本代理出价前书面确认最高报价。",
      sections: [
        {
          title: "先定义寻车条件",
          body: "需求应包括车型、可接受的年款和里程、必需配置、不能接受的车况及目的地。目的国准入条件也应写进需求；无法登记的好车不适合竞拍。",
          points: ["写明日元预算及目的港。", "核对车龄和方向盘限制。", "明确不能接受的修复历史。"],
        },
        {
          title: "读懂拍卖表，也要提出疑问",
          body: "拍卖表可能显示综合评级、内外饰评分、配置及检查员备注。各拍卖场标准会有差异。翻译备注和照片有帮助，但条件允许时仍应考虑针对该车的额外检测。",
          points: ["核对车架号、里程和修复历史类别。", "询问能否取得补充照片或检测。", "评级是筛选信号，不是车况保证。"],
        },
        {
          title: "书面确认出价和费用",
          body: "竞拍前明确最高出价、服务费、拍卖费用和未中标时的处理。拍卖通常有截止时间及撤销限制。付款时间和可退金额须在具体交易文件中说明。",
          points: ["拍卖前确认最高日元出价。", "书面列出费用和付款条款。", "通过独立渠道核对收款账户。"],
        },
        {
          title: "规划成交后的流程",
          body: "成交后可能涉及提车、文件、注销及运往日本港口。海运和目的地清关是不同环节。需要进口许可的市场应在竞拍前核实，而不是买车后再查。",
          points: ["核对发票及可获取的车辆记录。", "选择可用的滚装或集装箱航线。", "确认当地税费及上牌责任人。"],
        },
      ],
      question: "ClickCar 能保证拍卖评级代表真实车况吗？",
      answer: "不能。评级和检查备注由拍卖场提供。我们可分享现有记录、解释其含义，并在可行时讨论额外检测；仍需按具体车辆评估。",
    },
    ja: {
      title: "日本の中古車オークションで購入",
      description: "オークション参加、出品票、入札上限、落札後の輸出手続きを確認してから中古車を購入するためのガイドです。",
      intro: "オークションでは掲載車両以外にも探せますが、期限のある取引です。ClickCarは希望条件を整理し、入手可能な車両資料を確認し、日本での代理入札前に上限額を合意します。",
      sections: [
        {
          title: "検索前に条件を決める",
          body: "車種、許容年式・走行距離、必要装備、避けたい状態、仕向地を指定します。輸入資格も条件の一つです。現地で登録できない車両は、魅力的でも適切な入札対象ではありません。",
          points: ["日本円の予算と仕向港を指定する。", "車齢・ハンドルの制限を確認する。", "許容できない修復歴を決める。"],
        },
        {
          title: "出品票を読み、疑問を残さない",
          body: "出品票には総合評価、内外装評価、装備、検査員コメントが記載されます。評価方法は会場により異なります。翻訳や写真は参考になりますが、可能なら車両ごとの追加点検も検討します。",
          points: ["車台番号、走行距離、修復歴区分を確認する。", "追加写真・点検を取得できるか尋ねる。", "評価点を保証ではなく選別材料とする。"],
        },
        {
          title: "入札額と手数料を書面で合意",
          body: "入札前に上限額、サービス料、オークション費用、不落札時の扱いを決めます。入札には期限や取消制限があります。支払い時期と返金条件は個別の取引書面で確認します。",
          points: ["日本円での入札上限を事前承認する。", "費用・支払い条件を書面化する。", "別の連絡手段で振込先を確認する。"],
        },
        {
          title: "落札後の手続きを考える",
          body: "購入後は引き取り、書類、抹消登録、港への輸送が必要になる場合があります。海上輸送と仕向地での通関は別です。輸入許可が必要なら落札前に確認します。",
          points: ["請求書と入手可能な車両記録を確認する。", "利用可能なRoRo・コンテナ航路を選ぶ。", "現地の税金・登録担当者を確認する。"],
        },
      ],
      question: "出品票の評価点は車両状態を保証しますか？",
      answer: "保証しません。評価点と検査コメントはオークション会場が付与します。入手可能な資料を共有し、可能なら追加点検を検討しますが、個別車両として判断してください。",
    },
  },
  "japan-export-costs": {
    en: {
      title: "Cost to Import a Used Car from Japan",
      description: "See which Japan-side, shipping and destination charges belong in a used-car import estimate, and what to confirm before paying.",
      intro: "There is no universal landed price for a Japanese used car. The same model can cost differently after freight, taxes and compliance work in different destinations. Use an itemized route-specific estimate before approving a purchase.",
      sections: [
        {
          title: "Japan-side purchase costs",
          body: "Start with the agreed vehicle price or winning bid. Add the sourcing service fee, applicable auction charges, inland transport, any requested inspection or preparation and Japan-side export documentation. Confirm which items are fixed and which depend on third parties.",
          points: ["Vehicle price or maximum auction bid.", "Service and auction fees.", "Transport, preparation and deregistration."],
        },
        {
          title: "Shipping and insurance",
          body: "RoRo and container shipping differ in availability, handling and price. Freight depends on the vehicle size, ports and sailing schedule. Marine insurance is a separate decision unless the quote explicitly includes it. A shipping estimate is not a guaranteed delivery date.",
          points: ["Compare available routes for the exact vehicle.", "Ask whether insurance is included.", "Check port and carrier charges at both ends."],
        },
        {
          title: "Destination charges",
          body: "The importer may face duty, VAT or other taxes, clearance, port storage, compliance testing and registration. These are set by the destination and vehicle classification, not by a generic Japan-side quote. Some countries require an import permit before shipment.",
          points: ["Ask a local customs agent for tax and clearance estimates.", "Confirm technical approval and registration costs.", "Budget for currency movement and possible storage."],
        },
        {
          title: "Read the quotation",
          body: "Ask whether the quoted amount is limited to the Japanese port, includes ocean freight, or includes some destination services. Define what is excluded, who pays third-party charges and how changes are approved. Keep the payment and refund terms with the estimate.",
          points: ["Match the quote to the vehicle and destination port.", "Read exclusions and optional services.", "Verify the beneficiary before transferring funds."],
        },
      ],
      question: "Can you give one fixed landed price for every country?",
      answer: "No. Landed cost depends on the exact vehicle, route, taxes, clearance and registration. We can itemize known Japan-side and shipping charges, while destination charges should be verified locally.",
    },
    zh: {
      title: "日本二手车进口费用怎么算",
      description: "了解日本购车、海运和目的地费用分别包含什么，付款前读懂报价的包含与未包含项目。",
      intro: "日本二手车没有通用的落地价。相同车型运往不同国家，海运、税费和合规成本都可能不同。确认购车前，应索取针对车辆与航线的明细估算。",
      sections: [
        {
          title: "日本境内购车费用",
          body: "从约定车价或拍卖成交价开始，加上寻车服务费、适用的拍卖费用、国内运输、约定的检测与整备，以及日本出口文件费用。区分固定金额与第三方浮动费用。",
          points: ["车价或拍卖最高出价。", "服务费与拍卖费用。", "陆运、整备和出口注销。"],
        },
        {
          title: "海运与保险",
          body: "滚装和集装箱的可用性、处理方式与价格不同。海运费用取决于车身尺寸、港口和船期。除非报价明确包含，海运保险须另行确认。运输估算不是保证到港日期。",
          points: ["比较该车可用的航线。", "确认是否包含保险。", "核对两端港口和船公司收费。"],
        },
        {
          title: "目的地费用",
          body: "进口人可能需支付关税、增值税等税费、清关、港口堆存、合规检测及上牌费用。这些取决于目的地及车辆分类，不能用通用日本报价代替。有些国家装船前还需许可。",
          points: ["向当地报关行询问税费与清关估算。", "核实检测、认证和上牌成本。", "为汇率变化和可能的堆存费预留预算。"],
        },
        {
          title: "读懂报价范围",
          body: "确认报价是到日本港口、包含海运，还是包含部分目的地服务。写明未含项目、第三方费用付款人及价格变化的确认方式，并保存付款及退款条款。",
          points: ["确保报价对应具体车辆和目的港。", "查看未含及可选服务。", "汇款前核对收款人。"],
        },
      ],
      question: "可以给所有国家一个固定落地价吗？",
      answer: "不能。落地成本取决于具体车辆、航线、税费、清关和上牌。我们可列明已知的日本境内及海运费用，目的地收费仍应在当地核实。",
    },
    ja: {
      title: "日本中古車の輸入費用",
      description: "日本側の購入費、海上輸送、仕向地の費用を分け、送金前に見積もりの包含・除外項目を確認します。",
      intro: "日本の中古車に共通の到着総額はありません。同じ車種でも仕向地によって運賃、税金、適合費用が異なります。購入承認前に車両と航路に合わせた明細見積もりを確認してください。",
      sections: [
        {
          title: "日本側の購入費用",
          body: "合意した車両価格または落札額に、調達サービス料、該当するオークション費用、国内輸送、希望する点検・整備、日本側の輸出書類費用を加えます。固定額と第三者に依存する費用を分けて確認します。",
          points: ["車両価格または入札上限。", "サービス料・オークション費用。", "国内輸送、整備、登録抹消。"],
        },
        {
          title: "海上輸送と保険",
          body: "RoRoとコンテナは利用可否、取扱い、価格が異なります。運賃は車両サイズ、港、船便によります。見積もりに明示されない限り海上保険は別途確認します。輸送期間は保証日ではありません。",
          points: ["対象車両の利用可能な航路を比較する。", "保険の有無を確認する。", "両港の費用と運送会社料金を確認する。"],
        },
        {
          title: "仕向地の費用",
          body: "輸入者は関税、VAT等の税金、通関、保管、適合検査、登録費用を負担する場合があります。金額は仕向地と車両区分で決まり、日本側の一般見積もりでは確定できません。船積み前の輸入許可が必要な国もあります。",
          points: ["現地通関業者に税金・通関費用を確認する。", "認可・検査・登録費用を確認する。", "為替変動と保管料を見込む。"],
        },
        {
          title: "見積もりの範囲を読む",
          body: "見積もりが日本の港までか、海上運賃を含むか、仕向地のサービスを一部含むかを確認します。除外項目、第三者費用の負担者、変更時の承認方法を明記し、支払い・返金条件と一緒に保存します。",
          points: ["車両と仕向港が見積もりに合っているか確認する。", "除外・オプション項目を読む。", "送金前に受取人を照合する。"],
        },
      ],
      question: "すべての国に固定の到着総額を提示できますか？",
      answer: "できません。総額は車両、航路、税金、通関、登録によって変わります。日本側と海上輸送の既知の費用を明示し、仕向地の費用は現地で確認します。",
    },
  },
};
