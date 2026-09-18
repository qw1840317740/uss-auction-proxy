type Locale = "en" | "zh" | "ja";
type Localized = Record<Locale, string>;

export interface CountryGuidance {
  source: string;
  secondarySource?: { name: string; url: string };
  rule: Localized;
  check: Localized;
  restricted?: boolean;
}

// Official destination-authority guidance. Recheck the linked rules for each
// vehicle before bidding; the importer's eligibility can change the pathway.
export const countryGuidance: Record<string, CountryGuidance> = {
  kenya: {
    source: "https://www.kebs.org/wp-content/uploads/2023/12/NOTICE-TO-IMPORTERS-OF-USED-SECONDHAND-MOTOR-VEHICLES.pdf",
    rule: {
      en: "Kenya's standards authority applies an eight-year limit based on the year of first registration and generally requires right-hand drive. The eligible registration years roll forward each January.",
      zh: "肯尼亚标准局按首次登记年份执行八年车龄限制，通常要求右舵。可进口的首次登记年份每年一月变化。",
      ja: "ケニアの基準当局は初度登録年を基準に8年の車齢制限を適用し、原則として右ハンドルを求めます。対象の登録年は毎年1月に変わります。",
    },
    check: {
      en: "Check the current KEBS year cutoff and pre-export inspection requirements against the registration and export documents before placing a bid.",
      zh: "竞拍前用登记和出口文件核对 KEBS 当年的年份门槛及装船前检验要求。",
      ja: "入札前に登録・輸出書類でKEBSの当年の年式基準と船積前検査要件を確認してください。",
    },
  },
  "south-africa": {
    source: "https://www.gov.za/services/import/import-permit-general-goods",
    secondarySource: { name: "NRCS", url: "https://www.gov.za/services/register-motor-vehicle/letter-authority-respect-motor-vehicle" },
    restricted: true,
    rule: {
      en: "A used passenger car cannot be treated as an ordinary unrestricted import. South Africa requires an ITAC import permit for second-hand goods and a vehicle letter of authority may also be required.",
      zh: "二手乘用车不能按普通不受限商品进口。南非对二手商品要求 ITAC 进口许可，车辆还可能需要主管机构的批准函。",
      ja: "中古乗用車は一般の無制限輸入品として扱えません。南アフリカでは中古品にITAC輸入許可が必要で、車両の承認書も求められる場合があります。",
    },
    check: {
      en: "Ask the South African importer to confirm ITAC eligibility and the NRCS letter-of-authority pathway before we source a vehicle.",
      zh: "寻车前请南非进口人向 ITAC 确认许可资格，并核实 NRCS 批准函的申请途径。",
      ja: "車両探しの前に、現地輸入者がITACの許可資格とNRCSの承認書手続きを確認してください。",
    },
  },
  "united-kingdom": {
    source: "https://www.gov.uk/importing-vehicles-into-the-uk",
    rule: {
      en: "For a permanent UK import, the importer must complete customs and tax steps, notify HMRC, obtain vehicle approval where required, then register and insure the car. Vehicles over ten years old may be exempt from approval.",
      zh: "永久进口英国需完成海关和税务手续、通知 HMRC，并按车辆情况取得批准、办理登记和保险。车龄超过十年的车辆可能豁免车辆批准。",
      ja: "英国への恒久輸入では通関・納税、HMRCへの通知、必要な車両認可、登録・保険が必要です。10年超の車両は認可が免除される場合があります。",
    },
    check: {
      en: "Confirm the exact vehicle's approval route and expected VAT or duty with UK authorities before purchase.",
      zh: "购车前向英国主管部门确认具体车辆的批准途径和预计增值税、关税。",
      ja: "購入前に対象車両の認可手続きとVAT・関税の見込みを英国当局に確認してください。",
    },
  },
  "united-states": {
    source: "https://www.nhtsa.gov/importing-vehicle/importation-and-certification-faqs",
    secondarySource: { name: "EPA", url: "https://www.epa.gov/importing-vehicles-and-engines/learn-about-importing-vehicles-and-engines" },
    rule: {
      en: "NHTSA generally allows a vehicle at least 25 years old, measured from manufacture, without compliance with all federal motor-vehicle safety standards. EPA emissions requirements are a separate check.",
      zh: "美国 NHTSA 通常允许制造满 25 年的车辆不按全部联邦机动车安全标准认证进口；EPA 排放要求仍需另行核实。",
      ja: "米国NHTSAは通常、製造から25年以上の車両について連邦安全基準への全面適合なしでの輸入を認めます。EPAの排出ガス要件は別途確認が必要です。",
    },
    check: {
      en: "Verify the manufacture month, original engine configuration, NHTSA declaration and EPA route before bidding; 21 years is not a substitute for the 25-year safety rule.",
      zh: "竞拍前核实制造年月、原厂发动机配置、NHTSA 申报及 EPA 途径；21 年的排放规则不能替代 25 年安全规则。",
      ja: "入札前に製造月、元のエンジン仕様、NHTSA申告、EPAの手続きを確認してください。排出ガスの21年規則は安全基準の25年規則とは別です。",
    },
  },
  canada: {
    source: "https://tc.canada.ca/en/road-transportation/importing-vehicle/importing-vehicle-countries-other-united-states-mexico",
    rule: {
      en: "Transport Canada lists vehicles at least 15 years old, counted from the month and year of manufacture, among the exceptions that may be imported from outside the US and Mexico.",
      zh: "加拿大交通部将按制造年月计算已满 15 年的车辆列为可从美国、墨西哥以外地区进口的例外之一。",
      ja: "カナダ運輸省は、製造年月から15年以上経過した車両を米国・メキシコ以外からの輸入が可能な例外の一つとしています。",
    },
    check: {
      en: "Confirm manufacture date and provincial registration rules. The Canadian exception is not a US rule, and younger Japanese-market cars are not automatically eligible.",
      zh: "核实制造日期和省级上牌规则。加拿大的例外不是美国规则，较新的日本市场车型不能自动进口。",
      ja: "製造日と州・準州の登録要件を確認してください。カナダの例外は米国の規則ではなく、新しい日本仕様車が自動的に認められるわけではありません。",
    },
  },
  australia: {
    source: "https://www.infrastructure.gov.au/infrastructure-transport-vehicles/vehicles/importing-road-vehicle-australia",
    rule: {
      en: "Australia requires an import approval before a road vehicle is shipped. The importer applies through ROVER under a pathway applicable to that vehicle; customs, biosecurity and state registration remain separate.",
      zh: "澳大利亚要求道路车辆装船前取得进口批准。进口人通过 ROVER 按具体车辆适用的途径申请；海关、检疫和州级登记仍需另办。",
      ja: "オーストラリア向け道路車両は船積み前に輸入承認が必要です。輸入者はROVERで車両に適用される区分から申請し、通関・検疫・州での登録にも対応します。",
    },
    check: {
      en: "Identify the approval pathway and obtain the approval before booking shipment. Auction purchase alone does not establish eligibility.",
      zh: "订舱前确认批准途径并取得许可；拍卖成交本身不代表车辆符合进口资格。",
      ja: "船積み予約前に認可区分を特定し、承認を取得してください。落札だけでは輸入資格は確定しません。",
    },
  },
  "new-zealand": {
    source: "https://www.nzta.govt.nz/vehicles/importing-a-vehicle",
    rule: {
      en: "A used vehicle must meet New Zealand entry certification and applicable safety and emissions standards. Biosecurity cleaning is a separate border requirement.",
      zh: "二手车需符合新西兰入境认证及适用的安全、排放标准；生物安全清洁是另一项边境要求。",
      ja: "中古車はニュージーランドの入国認証と適用される安全・排出基準を満たす必要があります。検疫上の洗浄は別の入国要件です。",
    },
    check: {
      en: "Check the model's standards evidence and entry-certification route, then budget for inspection and biosecurity before purchase.",
      zh: "购车前核实车型的标准证明及入境认证途径，并预算检测和生物安全处理费用。",
      ja: "購入前に車種の基準適合資料と認証手続きを確認し、検査・検疫費用を見込んでください。",
    },
  },
  uae: {
    source: "https://rta.ae/wps/portal/rta/ae/home/rta-services/service-details?serviceId=519",
    rule: {
      en: "Import clearance and road registration are separate checks. Dubai's RTA says right-hand-drive vehicles cannot normally be registered except with a classic plate; requirements can differ by emirate.",
      zh: "进口清关和道路登记是两项不同审核。迪拜 RTA 指出右舵车辆通常不能登记，经典车牌存在例外；各酋长国要求可能不同。",
      ja: "輸入通関と公道登録は別の審査です。ドバイRTAによると、右ハンドル車はクラシックプレートの例外を除き通常登録できず、首長国ごとに条件が異なる場合があります。",
    },
    check: {
      en: "Ask the destination emirate's registration authority about the exact vehicle before bidding. Steering conversion alone does not guarantee registration.",
      zh: "竞拍前向目的酋长国登记机构核实具体车辆；改左舵不保证一定能上牌。",
      ja: "入札前に仕向首長国の登録当局へ対象車両を確認してください。左ハンドル化だけで登録が保証されるわけではありません。",
    },
  },
  thailand: {
    source: "https://www.dft.go.th/th-th/Detail-Law/ArticleId/29602/-3-2568-1",
    restricted: true,
    rule: {
      en: "Thailand regulates used-car imports as prohibited or permit-controlled goods. The Department of Foreign Trade publishes the current notices and exceptions; ordinary personal purchases should not be assumed eligible.",
      zh: "泰国将二手车进口列为禁止或须许可管理的货物。对外贸易厅公布现行公告和例外情形，普通个人购车不能视为当然可进口。",
      ja: "タイは中古車の輸入を禁止または許可対象の品目として規制しています。外国貿易局が現行の告示と例外を公表しており、一般の個人購入が当然に認められるわけではありません。",
    },
    check: {
      en: "Have the Thai importer confirm a valid permit or exemption for this vehicle with the Department of Foreign Trade before sourcing or shipping.",
      zh: "寻车或装船前请泰国进口人向对外贸易厅确认该车的有效许可或豁免。",
      ja: "車両探し・船積み前に、現地輸入者が外国貿易局へ対象車両の許可または免除を確認してください。",
    },
  },
  malaysia: {
    source: "https://www.miti.gov.my/ap",
    rule: {
      en: "Malaysia's MITI uses Approved Permits (APs) for vehicle imports. Its Open AP category covers used or reconditioned completely built-up cars between one and five years old; other AP categories have different eligibility.",
      zh: "马来西亚 MITI 对车辆进口实行 AP 准证。Open AP 类别涵盖车龄一至五年的进口二手或翻新整车；其他 AP 类别资格不同。",
      ja: "マレーシアのMITIは車両輸入にAP（輸入許可）を用います。Open APは1〜5年の中古・再生完成車を対象とし、他のAP区分には別の資格条件があります。",
    },
    check: {
      en: "Confirm the importer's AP category, vehicle age and registration pathway with MITI before bidding; an AP exception is not a general age waiver.",
      zh: "竞拍前向 MITI 核实进口人的 AP 类别、车辆车龄及登记途径；个别 AP 例外不等于普遍豁免。",
      ja: "入札前にMITIへ輸入者のAP区分、車齢、登録手続きを確認してください。APの例外は一般的な年式免除ではありません。",
    },
  },
  singapore: {
    source: "https://onemotoring.lta.gov.sg/content/onemotoring/home/buying/upfront-vehicle-costs/import-a-vehicle.html",
    rule: {
      en: "Singapore's LTA generally permits used cars no more than three years old for standard registration, subject to technical and emissions requirements. Classic and vintage schemes have separate conditions.",
      zh: "新加坡 LTA 的普通二手车登记通常要求车龄不超过三年，并符合技术及排放条件。经典车和古董车计划另有要求。",
      ja: "シンガポールLTAの通常登録では、中古車は原則3年未満で技術・排出基準を満たす必要があります。クラシック・ヴィンテージ車は別の制度です。",
    },
    check: {
      en: "Check the first-registration date, LTA technical approval, COE and registration charges before buying; shipping cost alone is not the landed cost.",
      zh: "购车前核实首次登记日期、LTA 技术批准、拥车证及登记费用；海运费并非全部落地成本。",
      ja: "購入前に初度登録日、LTAの技術承認、COE、登録費用を確認してください。海上運賃だけが総費用ではありません。",
    },
  },
  philippines: {
    source: "https://customs.gov.ph/motor-vehicles-boats-yachts/",
    restricted: true,
    rule: {
      en: "The Philippine Bureau of Customs says only qualified used motor vehicles may be imported by qualified persons, with a DTI Certificate of Authority to Import (CAI). This is not an open retail import route.",
      zh: "菲律宾海关规定，仅符合条件的人士可凭 DTI 的进口授权证书（CAI）进口符合条件的二手车，并非面向所有买家的普通零售进口渠道。",
      ja: "フィリピン税関によると、適格な中古車を適格者がDTIの輸入承認証（CAI）を得て輸入できます。一般向けの自由な中古車輸入制度ではありません。",
    },
    check: {
      en: "Confirm the buyer's CAI eligibility and the exact vehicle's conditions with DTI and Customs before any purchase commitment.",
      zh: "承诺购车前，请买方向 DTI 和海关核实自身 CAI 资格及具体车辆条件。",
      ja: "購入を確約する前に、購入者のCAI資格と対象車両の条件をDTI・税関に確認してください。",
    },
  },
  taiwan: {
    source: "https://web.customs.gov.tw/ekeelung/singlehtml/ea03be58c8214efd96e97aff419e243a",
    rule: {
      en: "Taiwan Customs requires used-car import declarations and supporting invoice and shipping documents. A personal importer may need a TITA permit depending on vehicle value; emissions and safety tests are separate.",
      zh: "台湾海关要求二手车进口报关及发票、运输文件。个人进口人可能因车辆价格需要国际贸易署许可；排放和安全检测另行办理。",
      ja: "台湾税関では中古車の輸入申告と送り状・輸送書類が必要です。個人輸入者は車両価格によりTITAの許可が必要な場合があり、排出・安全検査は別です。",
    },
    check: {
      en: "Check TITA permit applicability and whether the exact Japan-spec car can pass local emissions, safety and registration testing before bidding.",
      zh: "竞拍前核实是否需要国际贸易署许可，以及该日本规格车型能否通过当地排放、安全和上牌检测。",
      ja: "入札前にTITA許可の要否と、対象の日本仕様車が現地の排出・安全・登録検査を通過できるか確認してください。",
    },
  },
  "hong-kong": {
    source: "https://www.customs.gov.hk/en/service-enforcement-information/trade-facilitation/faqs/index.html",
    rule: {
      en: "Hong Kong Customs says vehicles for road use, new or used, are subject to First Registration Tax before licensing. Import procedures and road registration are separate steps.",
      zh: "香港海关说明，在香港道路使用的新车或二手车均须在领牌前缴纳首次登记税；进口手续与上牌是不同步骤。",
      ja: "香港税関によると、公道使用の新車・中古車には登録前に初回登録税が課されます。輸入手続きと道路登録は別の段階です。",
    },
    check: {
      en: "Estimate First Registration Tax with the Transport Department and confirm approval of the exact vehicle before committing to a purchase.",
      zh: "购车前向运输署估算首次登记税，并核实具体车辆是否可登记。",
      ja: "購入前に運輸署で初回登録税を試算し、対象車両の登録可否を確認してください。",
    },
  },
  china: {
    source: "https://www.gov.cn/gongbao/content/2006/content_363679.htm",
    restricted: true,
    rule: {
      en: "Mainland China's published automobile trade policy prohibits imports of used cars and right-hand-drive cars through ordinary trade. Do not treat this destination as a routine used-car export market.",
      zh: "中国大陆公布的汽车贸易政策禁止通过普通贸易进口旧汽车和右舵汽车。不能将其视为常规二手车出口目的地。",
      ja: "中国本土の公表済み自動車貿易政策は、通常の貿易による中古車・右ハンドル車の輸入を禁止しています。一般的な中古車輸出先として扱えません。",
    },
    check: {
      en: "Only proceed if the importer supplies written confirmation of a specific lawful exception from the competent Chinese authority before sourcing.",
      zh: "仅当进口人取得中国主管部门对具体合法例外的书面确认后，才应开始寻车。",
      ja: "車両調達前に、輸入者が中国の主管当局から特定の合法的例外について書面確認を得た場合に限り進めてください。",
    },
  },
};
