// Country import-rule guides (US 25-year rule, UK collectors' VAT).
// Facts checked against NHTSA, EPA, CBP, HMRC, DVLA and the UK Trade Tariff on 2026-10-22.
// Rendered by the markdown path in src/app/[locale]/blog/[slug]/_Content.tsx.
import type { LocalizedText } from "./demo-blog";

const PORSCHE_1974 = "/vehicles/porsche-911-27-1974";
const PORSCHE_1992 = "/vehicles/porsche-911-carrera-2-1992";

export const usTwentyFiveYearRuleContent: LocalizedText = {
  en: `Most cars sold new in Japan were never certified to the US Federal Motor Vehicle Safety Standards (FMVSS) or to EPA emission standards. For a young car, that usually rules out importing it for road use. Once a car is old enough, two federal age exemptions remove most of that barrier. This guide explains both, the forms that go with them, the duty, and the date mistake that catches many buyers of Japanese export cars.

This is general information, not legal advice. Confirm your entry with a licensed US customs broker before the car sails.

## The short answer

- **NHTSA (safety):** a vehicle at least **25 years old** can be imported without regard to FMVSS. The 25 years run from the **date of manufacture**, not the model year.
- **EPA (emissions):** a vehicle at least **21 years old** and in **original, unmodified configuration** is exempt. EPA counts calendar years: year of import minus year of manufacture.
- **Forms:** DOT **HS-7**, Box 1, and EPA **3520-1**, code E, filed with CBP at entry.
- **Duty:** passenger cars are generally dutiable at **2.5%** of the price paid or payable.

## The NHTSA 25-year rule

NHTSA says a motor vehicle at least 25 years old can be lawfully imported whether or not it complies with FMVSS. It is entered under **Box 1 of the HS-7 declaration**, which asks for the date of manufacture. In NHTSA's words, "the 25 year period runs from the date of the vehicle's manufacture."

So the clock is month-precise. A car built in June 2001 is eligible once it is 25 years old in June 2026, not on 1 January. What counts is the car's age on the date of entry into the US, so plan the sailing so the car arrives after its 25th birthday. Entering it early is a false declaration on a federal form.

If the build date is not on a label fixed by the manufacturer, NHTSA suggests other evidence: an invoice showing the date of first sale, a registration document showing the car was registered at least 25 years ago or, failing those, a statement from a recognised vehicle historical society.

A car under 25 years old that was never US-certified can only come in through a **Registered Importer**. NHTSA must first have found that model eligible, and you post a DOT bond of 150% of the car's value. For most Japanese-market cars that route is impractical.

## The EPA 21-year exemption

EPA Form 3520-1 code E covers a vehicle at least 21 years old, counted as calendar year of import minus calendar year of manufacture, and in original unmodified configuration. Two practical consequences:

- **Engine swaps can disqualify a car.** A replacement engine is only acceptable if it is the same model as the original, or a certified engine with its aftertreatment from a vehicle no older than the one being imported. EPA asks importers in doubt to contact its Imports Hotline before shipping.
- **Modified cars need a different route.** A heavily modified car can pass the NHTSA 25-year test and still fail EPA's original-configuration test. A non-conforming car must then go through an Independent Commercial Importer (ICI).

Gasoline cars built before 1 January 1968 are excluded from EPA requirements entirely. CBP may ask for proof of age under either rule.

## The Japanese paperwork trap: first registration is not the build date

When a car leaves Japan it is deregistered, and the Transport Bureau issues an **export certificate** (輸出抹消仮登録証明書). That certificate records the **first registration year and month** (初度登録年月), not the build date.

- For a car sold new in Japan, first registration usually follows the build date closely. Near the 25-year line, though, a gap of even one month decides whether the car is eligible.
- For a car that was itself imported into Japan, such as a European classic, first Japanese registration can come long after the car was built.

NHTSA counts from manufacture, so get build-date evidence before you bid. That means a manufacturer's label or build certificate, the chassis number decoded against the maker's records, or the documents NHTSA lists above. Ask for photos of the chassis plate and any build labels before you commit.

## Duty and tariffs

CBP lists foreign-made vehicles as generally dutiable at:

| Vehicle | Duty rate |
|---|---|
| Passenger car | 2.5% |
| Truck | 25% |
| Motorcycle | Free or 2.4% |

Duty is based on the price paid or payable, so the bill of sale matters. Some vans and pickups are classed as trucks, which moves them from 2.5% to 25%.

Since 3 April 2025, CBP has collected an additional Section 232 tariff on most imported passenger vehicles and light trucks. CBP's guidance (CSMS #64624801) applies **0% additional duty** under heading 9903.94.04 to vehicles manufactured in a year at least 25 years before the year of entry. Tariff policy has changed often since 2025, so confirm the current rate with your broker before shipping.

## Paperwork checklist

| Document | From | Why CBP or your state needs it |
|---|---|---|
| Export certificate (輸出抹消仮登録証明書) | Japanese Transport Bureau | Proves deregistration in Japan; shows the first registration date |
| Bill of sale or invoice | Seller | Basis for the duty value |
| Original bill of lading | Shipping line | Required by CBP for clearance |
| DOT HS-7, Box 1 | Importer or broker | Claims the 25-year NHTSA exemption |
| EPA 3520-1, code E | Importer or broker | Claims the 21-year EPA exemption |
| Proof of manufacture date | Manufacturer or historical society | Supports both exemptions |
| CBP Form 7501 | Customs broker | Entry document state DMVs use for titling |

## Step by step

1. **Confirm the build date.** It must put the car at 25 years or more on its expected arrival date, not just on the export certificate.
2. **Confirm originality.** Check that the engine and emission equipment match the original specification so code E applies.
3. **Buy the car.** Bid at USS through our [auction agent service](/services/auction), or choose from stock.
4. **Export and ship.** Deregistration, the export certificate and RoRo or container booking are covered in our [export guide](/export-guide).
5. **Clear US customs.** Your broker files the entry with the HS-7 and 3520-1, and you pay duty.
6. **Title and register in your state.** State rules vary, and some states apply their own emissions rules on top of the federal exemptions.

## Two LHD Porsche 911s that already qualify

Both cars in our current stock clear the NHTSA and EPA age thresholds by a wide margin, and both are left-hand drive:

- [1974 Porsche 911 2.7](${PORSCHE_1974}): 52 years old, 2,687cc flat-six, 5-speed manual, left-hand drive.
- [1992 Porsche 911 Carrera 2 (964)](${PORSCHE_1992}): 34 years old, 3.6-litre air-cooled flat-six, 5-speed manual, left-hand drive, first registered May 1992.

Before either car ships, we can provide the documents your broker needs to prepare the HS-7 and 3520-1.

## FAQ

### Is the 25-year rule counted from the model year?

No. NHTSA counts from the date of manufacture, and a car's model year can differ from when it was built. EPA's 21-year rule uses calendar years: year of import minus year of manufacture.

### Can I ship a car before it turns 25?

Yes, as long as it is at least 25 years old on the date it is entered into the US. Allow a margin for early arrivals; if the car arrives a week early it is still under 25.

### Do I need a Registered Importer for a 25-year-old car?

Not for the NHTSA side: a Box 1 entry does not require one. On the EPA side, a car that is not in original configuration may still need an Independent Commercial Importer.

### How much import duty will I pay on a car from Japan?

Generally 2.5% for a passenger car and 25% for a truck, based on the price paid. Under CBP's guidance, the Section 232 surcharge does not apply to vehicles built in a year at least 25 years before entry. Confirm the current rates with your broker.

### Is right-hand drive a problem?

No federal rule bars a right-hand-drive car imported under the 25-year exemption. Both of the 911s above are left-hand drive in any case.

### Can ClickCar buy at Japanese auctions for me?

Yes. We bid at USS auctions on your behalf and handle export from Japan. Our commission is a percentage of the purchase, agreed before you bid. See our [USS auction service](/services/auction).

## Official sources

- NHTSA, [Importation and Certification FAQs](https://www.nhtsa.gov/importing-vehicle/importation-and-certification-faqs)
- NHTSA, [Importing a Vehicle (HS-7 declaration)](https://www.nhtsa.gov/importing-vehicle)
- EPA, [Learn About Importing Vehicles and Engines](https://www.epa.gov/importing-vehicles-and-engines/learn-about-importing-vehicles-and-engines)
- EPA, [Forms for Importing Vehicles and Engines (3520-1)](https://www.epa.gov/importing-vehicles-and-engines/publications-and-forms-importing-vehicles-and-engines)
- CBP, [Importing a Motor Vehicle](https://www.cbp.gov/trade/basic-import-export/importing-car)
- CBP, [CSMS #64624801: Import Duties on Certain Automobiles](https://content.govdelivery.com/accounts/USDHSCBP/bulletins/3da18a1)
- eCFR, [40 CFR Part 85 Subpart P](https://www.ecfr.gov/current/title-40/chapter-I/subchapter-C/part-85/subpart-P)`,

  zh: `日本国内销售的新车，大多从未按照美国联邦机动车安全标准（FMVSS）或 EPA 排放标准做过认证。车龄较新的车，通常因此无法作为上路车辆进口到美国。车龄够了以后，联邦层面的两条车龄豁免就能解决大部分障碍。本文讲清这两条豁免、对应的申报表格、关税，以及日本出口车买家最容易踩的一个日期陷阱。

本文为一般信息，不构成法律意见。装船前请向持牌美国报关行（customs broker）确认具体申报方案。

## 一句话结论

- **NHTSA（安全）：**车龄满 **25 年**的车辆可以不受 FMVSS 限制进口。25 年从**制造日期**起算，而不是车型年份。
- **EPA（排放）：**车龄满 **21 年**且保持**原厂未改装状态**的车辆可豁免。EPA 按日历年计算：进口年份减去制造年份。
- **表格：**入境时向 CBP 提交 DOT **HS-7**（勾选 Box 1）和 EPA **3520-1**（代码 E）。
- **关税：**乘用车一般按实付或应付价格的 **2.5%** 征收。

## NHTSA 的 25 年规则

NHTSA 明确：车龄至少 25 年的机动车，不论是否符合 FMVSS 均可合法进口，申报时在 **HS-7 表的 Box 1** 填写制造日期。NHTSA 原文说明 25 年期限从车辆制造之日起算。

所以计时精确到月。2001 年 6 月制造的车，要到 2026 年 6 月满 25 年才符合条件，而不是 1 月 1 日。判断标准是车辆进入美国当天的车龄，所以要把船期安排在车满 25 年之后到港。提前申报属于在联邦表格上虚假申报。

如果制造日期没有印在原厂固定的铭牌上，NHTSA 建议提供其他证明：显示首次销售日期的发票、证明车辆至少 25 年前已登记的登记文件；都没有时，可以用权威车辆历史协会出具的说明。

未满 25 年且从未取得美国认证的车，只能通过 **Registered Importer（注册进口商）**进口：NHTSA 须先认定该车型可进口，并且要缴纳车辆价值 150% 的 DOT 保证金。对大多数日本国内版车型来说，这条路不现实。

## EPA 的 21 年豁免

EPA 3520-1 表的代码 E 适用于车龄至少 21 年（进口日历年减制造日历年）且保持原厂未改装状态的车辆。实际影响有两点：

- **换过发动机可能失去资格。**替换发动机必须与原装型号相同，或者是来自车龄不老于本车的认证车辆、带全套后处理装置的认证发动机。拿不准时，EPA 建议在装船前联系其进口热线。
- **改装车要走别的路径。**大幅改装的车可能满足 NHTSA 的 25 年条件，却不满足 EPA 的原厂状态条件。这类不合规车辆需通过 Independent Commercial Importer（ICI）进口。

1968 年 1 月 1 日前制造的汽油车完全不受 EPA 排放要求约束。无论适用哪条规则，CBP 都可能要求提供车龄证明。

## 日本文件的陷阱：初度登录不等于制造日期

车辆出口时须在日本注销登记，由运输支局签发**出口证明书**（輸出抹消仮登録証明書）。这份证明书记载的是**初度登录年月**（初度登録年月），而不是制造日期。

- 日本国内新车销售的车，初度登录通常紧随制造日期；但在 25 年临界点附近，差一个月就决定能否进口。
- 原本就是进口到日本的车（例如欧洲经典车），在日本的初度登录可能比制造日期晚很多。

NHTSA 从制造日期起算，所以出价前就要拿到制造日期证明：原厂铭牌或厂方出具的生产证明、按厂方记录解码的车架号，或上文 NHTSA 列出的文件。下单前请索取车架号铭牌和生产标签的照片。

## 关税与附加关税

CBP 公布的外国产车辆一般税率：

| 车辆类型 | 关税税率 |
|---|---|
| 乘用车 | 2.5% |
| 卡车 | 25% |
| 摩托车 | 免税或 2.4% |

关税按实付或应付价格计算，所以买卖合同很重要。部分厢式车和皮卡会被归为卡车，税率从 2.5% 变为 25%。

自 2025 年 4 月 3 日起，CBP 对多数进口乘用车和轻型卡车加征 Section 232 关税。按 CBP 指引（CSMS #64624801），制造年份比入境年份早至少 25 年的车辆，适用税号 9903.94.04，**附加关税为 0%**。2025 年以来关税政策变动频繁，装船前请向报关行确认最新税率。

## 文件清单

| 文件 | 出具方 | 用途 |
|---|---|---|
| 出口证明书（輸出抹消仮登録証明書） | 日本运输支局 | 证明已在日本注销，记载初度登录年月 |
| 买卖合同或发票 | 卖方 | 关税完税价格依据 |
| 正本提单 | 船公司 | CBP 清关必需 |
| DOT HS-7（Box 1） | 进口人或报关行 | 申请 NHTSA 25 年豁免 |
| EPA 3520-1（代码 E） | 进口人或报关行 | 申请 EPA 21 年豁免 |
| 制造日期证明 | 厂方或车辆历史协会 | 支持两项豁免 |
| CBP Form 7501 | 报关行 | 州车管局（DMV）办理产权登记所用的入境凭证 |

## 操作步骤

1. **确认制造日期：**按预计到港日计算须满 25 年，而不只是按出口证明书上的日期。
2. **确认原厂状态：**发动机与排放装置须与原厂规格一致，才适用代码 E。
3. **购车：**通过我们的 [USS 拍卖代拍服务](/services/auction)竞拍，或直接选购现车。
4. **出口与海运：**注销登记、出口证明书、滚装船或集装箱订舱，详见[出口指南](/export-guide)。
5. **美国清关：**报关行提交入境申报及 HS-7、3520-1，缴纳关税。
6. **州内产权与登记：**各州规定不同，部分州在联邦豁免之外还有自己的排放要求。

## 两台已符合条件的左舵保时捷 911

我们现有的两台库存车都远超 NHTSA 与 EPA 的车龄门槛，而且都是左舵：

- [1974 年保时捷 911 2.7](${PORSCHE_1974})：车龄 52 年，2,687cc 水平对置六缸，5 速手动，左舵。
- [1992 年保时捷 911 Carrera 2（964）](${PORSCHE_1992})：车龄 34 年，3.6 升风冷水平对置六缸，5 速手动，左舵，1992 年 5 月初度登录。

装船前，我们可以提供报关行准备 HS-7 和 3520-1 所需的文件。

## 常见问题

### 25 年规则按车型年份计算吗？

不是。NHTSA 按制造日期计算，车型年份可能与实际生产时间不同。EPA 的 21 年规则按日历年计算：进口年份减去制造年份。

### 车还没满 25 年可以先装船吗？

可以，只要进入美国当天车龄已满 25 年即可。要给提前到港留出余量：早到一周，车龄就仍不满 25 年。

### 25 年以上的车需要找注册进口商（RI）吗？

NHTSA 方面不需要，按 Box 1 申报不要求 RI。EPA 方面，如果车辆不是原厂状态，仍可能需要 ICI。

### 从日本进口一台车要交多少关税？

乘用车一般 2.5%，卡车 25%，按实付价格计算。按 CBP 指引，制造年份比入境年份早至少 25 年的车辆不加征 Section 232 关税。请向报关行确认最新税率。

### 右舵车有问题吗？

联邦层面没有规定禁止按 25 年豁免进口右舵车。上面两台 911 本来就是左舵。

### ClickCar 可以替我在日本拍卖会竞拍吗？

可以。我们代您参加 USS 拍卖并负责日本出口手续，佣金按成交价的一定比例收取，竞拍前约定。详见 [USS 拍卖代拍服务](/services/auction)。

## 官方来源

- NHTSA：[Importation and Certification FAQs](https://www.nhtsa.gov/importing-vehicle/importation-and-certification-faqs)
- NHTSA：[Importing a Vehicle（HS-7 申报表）](https://www.nhtsa.gov/importing-vehicle)
- EPA：[Learn About Importing Vehicles and Engines](https://www.epa.gov/importing-vehicles-and-engines/learn-about-importing-vehicles-and-engines)
- EPA：[进口申报表格（3520-1）](https://www.epa.gov/importing-vehicles-and-engines/publications-and-forms-importing-vehicles-and-engines)
- CBP：[Importing a Motor Vehicle](https://www.cbp.gov/trade/basic-import-export/importing-car)
- CBP：[CSMS #64624801 汽车进口关税指引](https://content.govdelivery.com/accounts/USDHSCBP/bulletins/3da18a1)
- eCFR：[40 CFR Part 85 Subpart P](https://www.ecfr.gov/current/title-40/chapter-I/subchapter-C/part-85/subpart-P)`,

  ja: `日本で新車販売された車の多くは、米国連邦自動車安全基準（FMVSS）やEPA排出ガス基準の認証を一度も受けていません。年式の新しい車は、そのため公道用として米国へ輸入することが通常できません。年式が十分に古くなると、連邦レベルの2つの年数免除でこの壁の大半がなくなります。本記事では、その2つの免除、必要な申告書類、関税、そして日本の輸出車を買う人がつまずきやすい日付の落とし穴を解説します。

本記事は一般的な情報であり、法的助言ではありません。船積み前に、米国の通関業者（customs broker）に具体的な申告内容を確認してください。

## 結論

- **NHTSA（安全）：**製造から **25年以上** 経過した車両は、FMVSSへの適合を問わず輸入できます。25年は**製造日**から数え、モデルイヤーではありません。
- **EPA（排出ガス）：**製造から **21年以上** 経過し、**オリジナルの未改造状態**である車両は免除されます。EPAは暦年で数えます（輸入年－製造年）。
- **書類：**入国時にCBPへ DOT **HS-7**（Box 1）と EPA **3520-1**（コードE）を提出します。
- **関税：**乗用車は原則として支払価格の **2.5%** です。

## NHTSAの25年ルール

NHTSAによれば、製造から25年以上経過した自動車は、FMVSSに適合しているかどうかにかかわらず合法的に輸入できます。申告は **HS-7のBox 1** で行い、製造日を記入します。NHTSAは、25年の期間は車両の製造日から起算すると明記しています。

つまり月単位で判定されます。2001年6月製造の車は、1月1日ではなく、25年を迎える2026年6月から対象になります。基準は米国に入国する日の車齢なので、25年を迎えた後に到着するよう船便を組んでください。早すぎる申告は連邦書式への虚偽申告になります。

メーカーが車体に固定したラベルに製造日がない場合、NHTSAは別の証拠を挙げています。最初の販売日がわかる請求書、25年以上前に登録されたことを示す登録書類、それもなければ公認の自動車歴史団体による証明書です。

25年未満で米国認証のない車は、**Registered Importer（登録輸入業者）**経由でしか輸入できません。NHTSAがその車種を輸入可能と認定していることが前提で、車両価格の150%のDOTボンドも必要です。日本仕様車の多くでは現実的ではありません。

## EPAの21年免除

EPA様式3520-1のコードEは、製造から21年以上（輸入した暦年－製造した暦年）で、オリジナルの未改造状態の車両に適用されます。実務上のポイントは2つです。

- **エンジン載せ替えで対象外になることがあります。**交換エンジンは、オリジナルと同型式であるか、輸入車両より古くない認証車両の後処理装置付き認証エンジンである必要があります。判断に迷う場合、EPAは船積み前に輸入ホットラインへの相談を勧めています。
- **改造車は別ルートになります。**大きく改造された車は、NHTSAの25年要件を満たしても、EPAのオリジナル状態要件を満たさないことがあります。その場合はIndependent Commercial Importer（ICI）経由の輸入が必要です。

1968年1月1日より前に製造されたガソリン車は、EPAの排出ガス規制の対象外です。どちらのルールでも、CBPは車齢の証明を求めることがあります。

## 日本の書類の落とし穴：初度登録は製造日ではない

日本から輸出する車は抹消登録を行い、運輸支局が **輸出抹消仮登録証明書** を発行します。この証明書に記載されるのは **初度登録年月** であり、製造日ではありません。

- 日本で新車販売された車は、初度登録が製造直後であることが一般的です。ただし25年の境目では、1か月の差が輸入できるかどうかを分けます。
- もともと日本に輸入された車（欧州のクラシックカーなど）は、日本での初度登録が製造よりかなり後になることがあります。

NHTSAは製造日から数えるため、入札前に製造日の証拠を確保してください。メーカーのラベルや生産証明書、メーカー記録と照合した車台番号、または前述のNHTSAが挙げる書類です。購入前に、車台番号プレートと製造ラベルの写真を依頼しましょう。

## 関税と追加関税

CBPが示す外国製車両の一般的な関税率は次のとおりです。

| 車種 | 関税率 |
|---|---|
| 乗用車 | 2.5% |
| トラック | 25% |
| 二輪車 | 無税または2.4% |

関税は支払価格（または支払うべき価格）に基づくため、売買契約書が重要です。一部のバンやピックアップはトラックに分類され、税率が2.5%から25%に変わります。

2025年4月3日以降、CBPは多くの輸入乗用車・小型トラックにSection 232の追加関税を課しています。CBPのガイダンス（CSMS #64624801）では、入国年より25年以上前の年に製造された車両は、品目番号9903.94.04により **追加関税0%** です。2025年以降、関税政策は頻繁に変わっているため、船積み前に通関業者へ最新の税率を確認してください。

## 書類チェックリスト

| 書類 | 発行元 | 用途 |
|---|---|---|
| 輸出抹消仮登録証明書 | 運輸支局 | 日本での抹消を証明し、初度登録年月を記載 |
| 売買契約書・請求書 | 売主 | 関税の課税価格の根拠 |
| 船荷証券（原本） | 船会社 | CBPの通関に必要 |
| DOT HS-7（Box 1） | 輸入者または通関業者 | NHTSAの25年免除を申告 |
| EPA 3520-1（コードE） | 輸入者または通関業者 | EPAの21年免除を申告 |
| 製造日の証明 | メーカーまたは歴史団体 | 両方の免除の裏付け |
| CBP Form 7501 | 通関業者 | 州のDMVでの名義登録に使う輸入証明 |

## 手順

1. **製造日の確認：**輸出抹消仮登録証明書の日付ではなく、到着予定日の時点で25年以上であることを確認します。
2. **オリジナル状態の確認：**コードEが使えるよう、エンジンと排出ガス装置がオリジナル仕様か確認します。
3. **購入：**当社の [USSオークション代行](/services/auction) で入札するか、在庫車から選びます。
4. **輸出と海上輸送：**抹消登録、輸出抹消仮登録証明書、RoRo船・コンテナの手配は [輸出ガイド](/export-guide) で解説しています。
5. **米国の通関：**通関業者がHS-7と3520-1を添えて輸入申告し、関税を納付します。
6. **州での名義登録：**州ごとに規則が異なり、連邦の免除とは別に独自の排出ガス規制を設ける州もあります。

## すでに条件を満たす左ハンドルのポルシェ911

当社の現在の在庫2台は、どちらもNHTSAとEPAの年数要件を大きく上回り、左ハンドルです。

- [1974年 ポルシェ 911 2.7](${PORSCHE_1974})：製造から52年、2,687cc水平対向6気筒、5速MT、左ハンドル。
- [1992年 ポルシェ 911 カレラ2（964）](${PORSCHE_1992})：製造から34年、3.6L空冷水平対向6気筒、5速MT、左ハンドル、初度登録1992年5月。

どちらも船積み前に、通関業者がHS-7と3520-1を準備するための書類をご提供できます。

## よくある質問

### 25年ルールはモデルイヤーで数えますか？

いいえ。NHTSAは製造日から数え、モデルイヤーと実際の製造時期は異なることがあります。EPAの21年ルールは暦年（輸入年－製造年）で数えます。

### 25年を迎える前に船積みしてもよいですか？

はい。米国に入国する日に25年以上であれば問題ありません。早着に備えて余裕を持たせてください。1週間早く着けば、まだ25年未満です。

### 25年以上の車でも登録輸入業者（RI）は必要ですか？

NHTSA側では不要で、Box 1の申告にRIは要りません。EPA側では、オリジナル状態でない車はICIが必要になる場合があります。

### 日本から輸入すると関税はいくらですか？

原則として乗用車は2.5%、トラックは25%で、支払価格に基づきます。CBPのガイダンスでは、入国年より25年以上前に製造された車両にSection 232の追加関税はかかりません。最新の税率は通関業者に確認してください。

### 右ハンドルは問題になりますか？

25年免除で輸入する右ハンドル車を禁じる連邦規則はありません。なお、上記の911は2台とも左ハンドルです。

### ClickCarは日本のオークションで代理入札できますか？

はい。USSオークションで代理入札し、日本からの輸出手続きまで対応します。手数料は購入価格に対する一定割合で、入札前に合意します。詳しくは [USSオークション代行](/services/auction) をご覧ください。

## 公式情報源

- NHTSA：[Importation and Certification FAQs](https://www.nhtsa.gov/importing-vehicle/importation-and-certification-faqs)
- NHTSA：[Importing a Vehicle（HS-7申告書）](https://www.nhtsa.gov/importing-vehicle)
- EPA：[Learn About Importing Vehicles and Engines](https://www.epa.gov/importing-vehicles-and-engines/learn-about-importing-vehicles-and-engines)
- EPA：[輸入申告書式（3520-1）](https://www.epa.gov/importing-vehicles-and-engines/publications-and-forms-importing-vehicles-and-engines)
- CBP：[Importing a Motor Vehicle](https://www.cbp.gov/trade/basic-import-export/importing-car)
- CBP：[CSMS #64624801 自動車の輸入関税に関するガイダンス](https://content.govdelivery.com/accounts/USDHSCBP/bulletins/3da18a1)
- eCFR：[40 CFR Part 85 Subpart P](https://www.ecfr.gov/current/title-40/chapter-I/subchapter-C/part-85/subpart-P)`,
};

export const ukClassicCarVatContent: LocalizedText = {
  en: `Bringing a car from Japan into Great Britain normally means 10% customs duty and 20% import VAT on top of the price and shipping. A genuine classic can cost far less. If HMRC accepts it as a collectors' item under tariff heading 9705, duty is 0% and import VAT is charged on a reduced value, giving an effective rate of **5%**. Cars this old are also exempt from Individual Vehicle Approval (IVA). This guide covers the rules, how to secure the classification before you ship, and the NOVA and DVLA steps after arrival.

This is general information, not tax advice. Your customs agent files the declaration, and HMRC makes the classification decision.

## The short answer

- **Ordinary used car (heading 8703):** 10% third-country duty unless a trade preference applies, plus 20% import VAT on the value including shipping and duty.
- **Collectors' vehicle (heading 9705):** 0% duty, and import VAT on 25% of the value, an **effective 5%**.
- **Who qualifies:** at least **30 years old**, in **original state**, and a model **no longer in production**.
- **Vehicle approval:** cars **over 10 years old** are exempt from IVA.
- **After arrival:** tell HMRC through **NOVA within 14 days**, then register with **DVLA** (£55 first registration fee).

## What counts as a collectors' vehicle (heading 9705)

The UK Trade Tariff's chapter 97 note says heading 9705 covers motor vehicles of historical interest that meet three tests:

1. **Original state.** There are no substantial changes to the chassis, body, steering, braking, transmission, suspension or engine. Repair and restoration are allowed, and worn parts may be replaced, provided the car is kept in historically correct condition. Modernised or modified cars are excluded.
2. **At least 30 years old.**
3. **A model or type no longer in production.**

A car meeting all three is presumed to have the other collector characteristics (rarity, special trade, higher value). Cars of any age used in a historic event, and racing cars with significant competition success, can also qualify with proof.

An engine swap, a modern suspension conversion or a restomod build is exactly what takes a car out of 9705 and back to 10% duty and 20% VAT.

## How the 5% VAT works

HMRC's import VAT guidance gives the method: work out the value for duty, add the extra costs, then **multiply the total by 25%**. Charging 20% VAT on that reduced value gives an effective rate of 5%.

An illustrative comparison for a car with a £100,000 import value (price plus shipping), assuming the 10% third-country rate applies to the ordinary route:

| | Ordinary car (8703) | Collectors' vehicle (9705) |
|---|---|---|
| Customs duty | £10,000 (10%) | £0 |
| VAT base | £110,000 | £25,000 (25% of value) |
| Import VAT at 20% | £22,000 | £5,000 |
| **Total import tax** | **£32,000** | **£5,000** |

The duty rate on an ordinary car depends on the car's country of origin and on proof of origin, not on the country it ships from.

## Lock in the classification before you ship

Classification as a collectors' item is a judgement HMRC makes on evidence. Ask before you spend the money:

- **Before buying:** HMRC's guidance suggests emailing the Tariff Classification Service for non-binding advice on whether the vehicle is eligible.
- **For certainty:** apply for an **Advance Tariff Ruling**, a legally binding decision on the commodity code. You need an EORI number. HMRC replies in 30 to 120 days, and you must apply **before customs procedures are completed**, because rulings cannot be retrospective. Quote the ruling reference on your import declaration.

Prepare evidence of the build year, production numbers and survivors, originality (chassis and engine numbers, photos), the purchase price and the intended use.

## No IVA for cars over 10 years old

GOV.UK lists cars and minibuses with up to 8 passenger seats that are **over 10 years old** as exempt from vehicle approval, so a 30-year-old classic does not need IVA. Left-hand drive does not stop registration. Before an MOT, though, the headlamps must be set so they do not dazzle oncoming traffic when you drive on the left.

Two further historic-vehicle rules may apply after registration:

- **MOT exemption:** cars built or first registered **more than 40 years ago**, with no substantial changes in the last 30 years, do not need an annual MOT.
- **Historic vehicle tax class:** from 1 April 2026, cars **built before 1 January 1986** can apply to stop paying vehicle tax. They must still be taxed at a nil rate.

## NOVA within 14 days

You must tell HMRC within **14 days** of the vehicle arriving, using the **Notification of Vehicle Arrivals (NOVA)** service. You cannot register the car until NOVA is processed, and you may be fined for late notification. If the car is shipped, your shipping company or customs agent, or HMRC's CARS team, can make the NOVA declaration. They will need:

- the import declaration documents or Movement Reference Number (MRN)
- the invoice or bill of sale, if you bought the car within the last 6 months
- an official document confirming the VIN or chassis number, such as the Japanese export certificate (輸出抹消仮登録証明書)

DVLA's import leaflet advises allowing 48 hours after HMRC confirmation before applying to register.

## Register with DVLA

DVLA charges a £55 first registration fee, and you tax the car at the same time. You will need proof of vehicle approval (or that the car is exempt), the original foreign registration document showing when the vehicle was made, and evidence of when you collected it. The V5C can take up to 6 weeks to arrive.

Note that the Japanese export certificate shows the **first registration** month, not the build date. For a car first registered in Japan years after it was built, keep manufacturer dating evidence ready for HMRC and DVLA. You must not use the car on a public road before it is registered, taxed and insured, except to drive to a pre-booked MOT or approval test.

## Step by step

1. **Check age and originality** before you bid or buy.
2. **Get classification advice or an Advance Tariff Ruling** for heading 9705.
3. **Buy the car.** Bid at USS through our [auction agent service](/services/auction), or choose from stock.
4. **Export and ship.** Deregistration, the export certificate and RoRo or container booking are covered in our [export guide](/export-guide).
5. **Import declaration.** Your UK customs agent declares the car under 9705 and pays duty and VAT.
6. **NOVA within 14 days.**
7. **MOT if required, then DVLA registration, tax and insurance.**

## Two LHD Porsche 911s over the 30-year line

Both cars in our current stock are well past 30 years old, are from model lines long out of production, and are left-hand drive:

- [1974 Porsche 911 2.7](${PORSCHE_1974}): 52 years old, 2,687cc flat-six, 5-speed manual. Built before 1986, so it also falls within the historic-vehicle tax and MOT age limits.
- [1992 Porsche 911 Carrera 2 (964)](${PORSCHE_1992}): 34 years old, 3.6-litre air-cooled flat-six, 5-speed manual, first registered May 1992.

Whether a particular car qualifies for 9705 is for HMRC to decide. We can provide the photos, chassis and engine numbers and documents your agent needs for an Advance Tariff Ruling application.

## FAQ

### Does every 30-year-old car get 5% VAT?

No. The car must also be in original state, without substantial changes to major components, and be a model no longer in production. HMRC decides on the evidence, so an Advance Tariff Ruling is the safest route for a valuable car.

### Is there import duty on a classic car from Japan?

Not if it is classified under heading 9705, which has 0% duty. Under heading 8703 the third-country rate is 10%. Preferences such as the UK–Japan agreement depend on the car's country of origin and need proof of origin, so a European car bought in Japan does not automatically qualify.

### Do I need IVA for a left-hand-drive classic?

No. Cars over 10 years old are exempt from vehicle approval. You will still need headlamps that are correct for driving on the left before an MOT.

### How quickly must I use NOVA?

Within 14 days of the car arriving in the UK. Online NOVA notifications are usually processed within hours.

### Can I drive the car home from the port?

No. Until it is registered, taxed and insured, the only journeys allowed are to a pre-booked MOT or vehicle approval test. Arrange transport from the port.

### Can ClickCar buy at Japanese auctions for me?

Yes. We bid at USS auctions on your behalf and handle export from Japan; your UK customs agent handles the import side. Our commission is a percentage of the purchase, agreed before you bid. See our [USS auction service](/services/auction).

## Official sources

- GOV.UK, [How to value goods for import VAT](https://www.gov.uk/guidance/how-to-value-goods-for-import-vat)
- HMRC, [IMPS05200: works of art, antiques and collectors' items](https://www.gov.uk/hmrc-internal-manuals/imports/imps05200)
- UK Trade Tariff, [Heading 9705](https://www.trade-tariff.service.gov.uk/headings/9705) and [Heading 8703](https://www.trade-tariff.service.gov.uk/headings/8703)
- GOV.UK, [Apply for an Advance Tariff Ruling](https://www.gov.uk/guidance/apply-for-an-advance-tariff-ruling)
- GOV.UK, [Importing vehicles into the UK](https://www.gov.uk/importing-vehicles-into-the-uk) and [Telling HMRC (NOVA)](https://www.gov.uk/importing-vehicles-into-the-uk/telling-hmrc)
- GOV.UK, [Exemptions from vehicle approval](https://www.gov.uk/vehicle-approval/exemptions-from-vehicle-approval)
- GOV.UK, [Registering an imported vehicle](https://www.gov.uk/importing-vehicles-into-the-uk/registering-an-imported-vehicle)
- GOV.UK, [Historic (classic) vehicles: MOT and vehicle tax](https://www.gov.uk/historic-vehicles)`,

  zh: `把一台车从日本运进英国（大不列颠），通常要在车价和运费之上缴纳 10% 关税和 20% 进口增值税（VAT）。真正的经典车可以便宜得多：如果 HMRC 认定它属于税目 9705 的收藏品，关税为 0%，进口 VAT 按降低后的价值计征，实际税率只有 **5%**。这个车龄的车还免做单车认证（IVA）。本文讲清规则、如何在装船前锁定归类，以及到港后的 NOVA 与 DVLA 手续。

本文为一般信息，不构成税务意见。进口申报由您的报关代理提交，归类由 HMRC 决定。

## 一句话结论

- **普通二手车（税目 8703）：**第三国关税 10%（适用贸易优惠时除外），另按含运费和关税的价值征 20% 进口 VAT。
- **收藏级车辆（税目 9705）：**关税 0%，进口 VAT 按价值的 25% 计征，**实际税率 5%**。
- **适用条件：**车龄至少 **30 年**、保持**原厂状态**、车型**已停产**。
- **车辆认证：****超过 10 年**的轿车免做 IVA。
- **到港后：****14 天内**通过 **NOVA** 通知 HMRC，然后向 **DVLA** 登记（首次登记费 £55）。

## 什么车算收藏级车辆（税目 9705）

英国关税税则第 97 章注释规定，税目 9705 涵盖具有历史意义、同时满足以下三项的机动车：

1. **原厂状态：**车架、车身、转向、制动、变速箱、悬挂、发动机没有实质性改动。允许维修和修复，也可以更换磨损部件，前提是车辆保持历史上正确的状态。现代化改造或改装车辆不在此列。
2. **车龄至少 30 年。**
3. **车型或型号已不再生产。**

满足这三项的车辆，被推定具备收藏品的其他特征（稀有、特殊交易、价值较高）。此外，有证据证明参与过历史事件的车辆（不论车龄），以及取得重要赛事成绩的赛车，也可归入此税目。

换发动机、改现代悬挂、restomod 式改造，正是会让车辆失去 9705 资格、回到 10% 关税加 20% VAT 的情形。

## 5% VAT 是怎么算出来的

HMRC 的进口 VAT 指引给出了算法：先算出完税价格，加上附加费用，再把**总额乘以 25%**。对这个降低后的价值征收 20% VAT，实际税率就是 5%。

以进口价值（车价加运费）£100,000 的车为例，假设普通路径适用 10% 第三国关税，对比如下：

| | 普通车辆（8703） | 收藏级车辆（9705） |
|---|---|---|
| 关税 | £10,000（10%） | £0 |
| VAT 计税基础 | £110,000 | £25,000（价值的 25%） |
| 20% 进口 VAT | £22,000 | £5,000 |
| **进口税合计** | **£32,000** | **£5,000** |

普通车辆的关税税率取决于车辆的原产国和原产地证明，而不是装船国家。

## 装船前先锁定归类

能否归为收藏品，是 HMRC 根据证据作出的判断。花钱之前先问清楚：

- **购买前：**HMRC 指引建议发邮件给 Tariff Classification Service，就车辆是否符合条件获取非约束性意见。
- **要确定性：**申请 **Advance Tariff Ruling（预先归类裁定）**，这是对商品编码具有法律约束力的决定。需要 EORI 号码。HMRC 在 30 到 120 天内答复，而且必须在**海关手续完成之前**申请，因为裁定不能追溯。进口申报时要填写裁定编号。

准备好以下证据：制造年份、产量与存世量、原厂状态证明（车架号与发动机号、照片）、购买价格和用途说明。

## 超过 10 年免做 IVA

GOV.UK 列明，乘客座位不超过 8 个、车龄**超过 10 年**的轿车和小型客车免做车辆认证，所以 30 年的经典车不需要 IVA。左舵不影响登记。不过做 MOT 之前，大灯必须调到左侧通行时不会晃到对向车辆。

登记后可能还适用两条历史车辆规定：

- **MOT 豁免：**制造或首次登记**超过 40 年**、且最近 30 年内没有实质性改动的车辆，不需要每年做 MOT。
- **历史车辆税类别：**自 2026 年 4 月 1 日起，**1986 年 1 月 1 日之前制造**的车辆可申请免缴车辆税（仍须办理零税额的车辆税登记）。

## 14 天内办理 NOVA

车辆到港后 **14 天内**必须通过 **Notification of Vehicle Arrivals（NOVA）**通知 HMRC。NOVA 处理完毕前无法登记，逾期通知可能被罚款。海运进口的车，NOVA 申报可以由船公司、报关代理或 HMRC 的 CARS 团队代办，需要：

- 进口申报文件或 Movement Reference Number（MRN）
- 6 个月内购买的车辆需提供发票或买卖合同
- 能证明车架号的官方文件，例如日本出口证明书（輸出抹消仮登録証明書）

DVLA 的进口说明建议，在收到 HMRC 确认后等 48 小时再申请登记。

## 向 DVLA 登记

DVLA 收取 £55 的首次登记费，同时缴纳车辆税。需要提供车辆认证证明（或豁免依据）、显示制造时间的外国登记证原件，以及提车日期的证明。登记证（V5C）最长可能需要 6 周寄到。

注意：日本出口证明书记载的是**初度登录**年月，而不是制造日期。如果车辆在日本的初度登录比制造晚好几年，要准备好厂方的制造日期证明，供 HMRC 和 DVLA 使用。车辆完成登记、纳税和投保之前不得上公共道路，前往预约好的 MOT 或认证检测除外。

## 操作步骤

1. 竞拍或购买前，**核实车龄与原厂状态。**
2. 就税目 9705 **取得归类意见或预先归类裁定。**
3. **购车：**通过我们的 [USS 拍卖代拍服务](/services/auction)竞拍，或直接选购现车。
4. **出口与海运：**注销登记、出口证明书、滚装船或集装箱订舱，详见[出口指南](/export-guide)。
5. **进口申报：**英国报关代理按 9705 申报并缴纳关税和 VAT。
6. **14 天内办理 NOVA。**
7. **视需要做 MOT，然后向 DVLA 登记、纳税、投保。**

## 两台超过 30 年的左舵保时捷 911

我们现有的两台库存车都早已超过 30 年，所属车型系列早已停产，而且都是左舵：

- [1974 年保时捷 911 2.7](${PORSCHE_1974})：车龄 52 年，2,687cc 水平对置六缸，5 速手动。制造于 1986 年之前，也落在历史车辆税和 MOT 豁免的年限范围内。
- [1992 年保时捷 911 Carrera 2（964）](${PORSCHE_1992})：车龄 34 年，3.6 升风冷水平对置六缸，5 速手动，1992 年 5 月初度登录。

具体车辆是否符合 9705，由 HMRC 决定。我们可以提供申请预先归类裁定所需的照片、车架号、发动机号和相关文件。

## 常见问题

### 所有 30 年以上的车都能享受 5% VAT 吗？

不能。车辆还必须保持原厂状态、主要部件没有实质性改动，并且车型已停产。HMRC 根据证据作出决定，所以高价值车辆最稳妥的做法是申请预先归类裁定。

### 从日本进口经典车要交关税吗？

归入税目 9705 的话不用，关税为 0%。按税目 8703，第三国关税是 10%。英日协定等优惠税率取决于车辆的原产国，并需要原产地证明，所以在日本买到的欧洲车并不自动适用。

### 左舵经典车需要 IVA 吗？

不需要。超过 10 年的轿车免做车辆认证。不过做 MOT 前，大灯仍需调整为适合左侧通行。

### NOVA 要多快办理？

车辆抵达英国后 14 天内。线上 NOVA 通知通常几小时内处理完毕。

### 可以从港口直接开回家吗？

不可以。登记、纳税、投保完成之前，只能开往预约好的 MOT 或车辆认证检测。请安排从港口拖运。

### ClickCar 可以替我在日本拍卖会竞拍吗？

可以。我们代您参加 USS 拍卖并负责日本出口手续，英国进口手续由您的报关代理处理。佣金按成交价的一定比例收取，竞拍前约定。详见 [USS 拍卖代拍服务](/services/auction)。

## 官方来源

- GOV.UK：[How to value goods for import VAT](https://www.gov.uk/guidance/how-to-value-goods-for-import-vat)
- HMRC：[IMPS05200 艺术品、古董与收藏品](https://www.gov.uk/hmrc-internal-manuals/imports/imps05200)
- 英国关税税则：[税目 9705](https://www.trade-tariff.service.gov.uk/headings/9705)、[税目 8703](https://www.trade-tariff.service.gov.uk/headings/8703)
- GOV.UK：[Apply for an Advance Tariff Ruling](https://www.gov.uk/guidance/apply-for-an-advance-tariff-ruling)
- GOV.UK：[Importing vehicles into the UK](https://www.gov.uk/importing-vehicles-into-the-uk)、[Telling HMRC（NOVA）](https://www.gov.uk/importing-vehicles-into-the-uk/telling-hmrc)
- GOV.UK：[Exemptions from vehicle approval](https://www.gov.uk/vehicle-approval/exemptions-from-vehicle-approval)
- GOV.UK：[Registering an imported vehicle](https://www.gov.uk/importing-vehicles-into-the-uk/registering-an-imported-vehicle)
- GOV.UK：[Historic (classic) vehicles: MOT and vehicle tax](https://www.gov.uk/historic-vehicles)`,

  ja: `日本から英国（グレートブリテン）へ車を輸入すると、通常は車両価格と輸送費に加えて10%の関税と20%の輸入VATがかかります。本物のクラシックカーなら、負担はずっと小さくなり得ます。HMRCが関税分類9705のコレクターズアイテムと認めれば、関税は0%、輸入VATは減額した価額に課され、実効税率は **5%** です。この年式の車は個別車両認証（IVA）も免除されます。本記事では、そのルール、船積み前に分類を確定させる方法、到着後のNOVAとDVLAの手続きを解説します。

本記事は一般的な情報であり、税務上の助言ではありません。輸入申告は通関代理人が行い、分類はHMRCが決定します。

## 結論

- **一般の中古車（分類8703）：**第三国関税10%（貿易上の特恵が適用される場合を除く）に加え、輸送費と関税を含めた価額に20%の輸入VAT。
- **コレクターズ車両（分類9705）：**関税0%、輸入VATは価額の25%に課税され、**実効5%**。
- **対象：**製造から **30年以上**、**オリジナルの状態**、**生産終了**したモデル。
- **車両認証：****10年超**の乗用車はIVAが免除。
- **到着後：****14日以内にNOVA**でHMRCへ届け出て、**DVLA**で登録（初回登録料£55）。

## コレクターズ車両（分類9705）の条件

英国関税表の第97類の注は、分類9705の対象を、次の3条件を満たす歴史的価値のある自動車としています。

1. **オリジナルの状態：**シャシー、ボディ、ステアリング、ブレーキ、トランスミッション、サスペンション、エンジンに大きな変更がないこと。歴史的に正しい状態が保たれていれば、修理・レストアや摩耗部品の交換は認められます。近代化・改造された車両は対象外です。
2. **製造から30年以上。**
3. **生産が終了したモデル・型式。**

3条件を満たす車両は、希少性、特別な取引、高い価値といったコレクターズアイテムとしての他の要件も満たすと推定されます。また、歴史的な出来事に使われたことを証明できる車両（年式を問わない）や、重要な競技実績のあるレーシングカーも対象になり得ます。

エンジン載せ替え、現代的なサスペンションへの変更、レストモッドは、まさに9705から外れ、関税10%とVAT20%に戻ってしまう典型例です。

## 実効5%のVATの仕組み

HMRCの輸入VATガイダンスが計算方法を示しています。関税上の課税価額を求めて追加費用を加え、**その合計に25%を掛けます**。この減額後の価額に20%のVATを課すため、実効税率は5%になります。

輸入価額（車両価格＋輸送費）£100,000の車で、一般ルートに第三国関税10%が適用されると仮定した比較例です。

| | 一般車両（8703） | コレクターズ車両（9705） |
|---|---|---|
| 関税 | £10,000（10%） | £0 |
| VATの課税標準 | £110,000 | £25,000（価額の25%） |
| 輸入VAT（20%） | £22,000 | £5,000 |
| **輸入税の合計** | **£32,000** | **£5,000** |

一般車両の関税率は、船積み国ではなく、車両の原産国と原産地証明によって決まります。

## 船積み前に分類を確定させる

コレクターズアイテムに当たるかどうかは、HMRCが証拠に基づいて判断します。お金を払う前に確認しましょう。

- **購入前：**HMRCのガイダンスは、Tariff Classification Serviceにメールで問い合わせ、拘束力のない助言を得ることを勧めています。
- **確実にするなら：****Advance Tariff Ruling（事前教示）**を申請します。商品コードについて法的拘束力のある決定です。EORI番号が必要です。HMRCの回答には30〜120日かかり、遡って裁定は出せないため、**税関手続きが完了する前**に申請しなければなりません。輸入申告には裁定の参照番号を記載します。

製造年、生産台数と現存台数、オリジナル性の証拠（車台番号・エンジン番号、写真）、購入価格、使用目的を用意してください。

## 10年超ならIVA不要

GOV.UKは、乗客定員8人以下で **10年を超える** 乗用車・ミニバスを車両認証の免除対象としています。30年以上のクラシックカーにIVAは不要です。左ハンドルでも登録できます。ただしMOTの前に、左側通行で対向車を幻惑しないようヘッドライトを調整する必要があります。

登録後は、次の2つのヒストリックカー規定が適用される場合があります。

- **MOT免除：**製造または初回登録から **40年超** で、過去30年間に大きな変更がない車両は、毎年のMOTが不要です。
- **ヒストリック車両の税区分：**2026年4月1日から、**1986年1月1日より前に製造された** 車両は車両税の免除を申請できます（税額ゼロでの課税手続きは必要です）。

## 14日以内にNOVA

車両の到着から **14日以内** に、**Notification of Vehicle Arrivals（NOVA）** でHMRCへ届け出る必要があります。NOVAの処理が終わるまで登録はできず、届出が遅れると罰金の可能性があります。海上輸送の場合、NOVAの申告は船会社、通関代理人、またはHMRCのCARSチームが代行できます。必要なものは次のとおりです。

- 輸入申告書類またはMovement Reference Number（MRN）
- 6か月以内に購入した場合は請求書または売買契約書
- 車台番号を確認できる公的書類（日本の輸出抹消仮登録証明書など）

DVLAの輸入案内は、HMRCの確認を受けてから48時間おいて登録を申請するよう勧めています。

## DVLAでの登録

DVLAの初回登録料は£55で、同時に車両税も納めます。車両認証の証明（または免除の根拠）、製造時期がわかる外国の登録書類の原本、車両の引き取り日の証拠が必要です。登録証（V5C）の到着には最大6週間かかることがあります。

輸出抹消仮登録証明書に記載されるのは **初度登録** 年月で、製造日ではありません。製造から何年も後に日本で初度登録された車は、HMRCとDVLA向けにメーカーの製造時期の証拠を用意してください。登録・課税・保険が済むまで公道は走れません（予約済みのMOTや認証検査への走行を除く）。

## 手順

1. 入札・購入の前に **年式とオリジナル性を確認** します。
2. 分類9705について **分類の助言または事前教示を取得** します。
3. **購入：**当社の [USSオークション代行](/services/auction) で入札するか、在庫車から選びます。
4. **輸出と海上輸送：**抹消登録、輸出抹消仮登録証明書、RoRo船・コンテナの手配は [輸出ガイド](/export-guide) で解説しています。
5. **輸入申告：**英国の通関代理人が9705で申告し、関税とVATを納付します。
6. **14日以内にNOVA。**
7. **必要に応じてMOTを受け、DVLAで登録・課税・保険加入。**

## 30年を超える左ハンドルのポルシェ911

当社の現在の在庫2台は、どちらも30年を大きく超え、モデルはとうに生産終了しており、左ハンドルです。

- [1974年 ポルシェ 911 2.7](${PORSCHE_1974})：製造から52年、2,687cc水平対向6気筒、5速MT。1986年より前の製造のため、ヒストリック車両の税区分とMOT免除の年数要件にも当てはまります。
- [1992年 ポルシェ 911 カレラ2（964）](${PORSCHE_1992})：製造から34年、3.6L空冷水平対向6気筒、5速MT、初度登録1992年5月。

個々の車両が9705に該当するかはHMRCが決定します。当社は、事前教示の申請に必要な写真、車台番号・エンジン番号、書類をご用意できます。

## よくある質問

### 30年を超えた車なら必ずVAT 5%になりますか？

いいえ。主要部品に大きな変更のないオリジナルの状態で、生産終了したモデルであることも必要です。HMRCが証拠に基づいて判断するため、高額な車では事前教示の取得が最も確実です。

### 日本からクラシックカーを輸入すると関税はかかりますか？

分類9705に該当すれば関税は0%です。分類8703では第三国関税が10%です。英日協定などの特恵税率は車両の原産国によって決まり、原産地証明が必要なため、日本で購入した欧州車が自動的に対象になるわけではありません。

### 左ハンドルのクラシックカーにIVAは必要ですか？

不要です。10年を超える乗用車は車両認証が免除されます。ただしMOTの前に、左側通行に合ったヘッドライトにする必要があります。

### NOVAはいつまでに行う必要がありますか？

車両が英国に到着してから14日以内です。オンラインのNOVA届出は通常数時間で処理されます。

### 港から自分で運転して帰れますか？

いいえ。登録・課税・保険が済むまでは、予約済みのMOTまたは車両認証検査への走行しか認められません。港からは陸送を手配してください。

### ClickCarは日本のオークションで代理入札できますか？

はい。USSオークションで代理入札し、日本からの輸出手続きに対応します。英国側の輸入手続きは通関代理人が行います。手数料は購入価格に対する一定割合で、入札前に合意します。詳しくは [USSオークション代行](/services/auction) をご覧ください。

## 公式情報源

- GOV.UK：[How to value goods for import VAT](https://www.gov.uk/guidance/how-to-value-goods-for-import-vat)
- HMRC：[IMPS05200 美術品・骨董品・コレクターズアイテム](https://www.gov.uk/hmrc-internal-manuals/imports/imps05200)
- 英国関税表：[分類9705](https://www.trade-tariff.service.gov.uk/headings/9705)、[分類8703](https://www.trade-tariff.service.gov.uk/headings/8703)
- GOV.UK：[Apply for an Advance Tariff Ruling](https://www.gov.uk/guidance/apply-for-an-advance-tariff-ruling)
- GOV.UK：[Importing vehicles into the UK](https://www.gov.uk/importing-vehicles-into-the-uk)、[Telling HMRC（NOVA）](https://www.gov.uk/importing-vehicles-into-the-uk/telling-hmrc)
- GOV.UK：[Exemptions from vehicle approval](https://www.gov.uk/vehicle-approval/exemptions-from-vehicle-approval)
- GOV.UK：[Registering an imported vehicle](https://www.gov.uk/importing-vehicles-into-the-uk/registering-an-imported-vehicle)
- GOV.UK：[Historic (classic) vehicles: MOT and vehicle tax](https://www.gov.uk/historic-vehicles)`,
};
