// ============================================================
// 种草翻译官 - Mock 数据 v2
// 消费品 / 理财 / 文娱 / 餐饮 四大模式
// ============================================================

// ===================== 消费品 =====================
const PRODUCTS = {
  "兰蔻小黑瓶": {
    id: "lancome_genifique",
    name: "兰蔻小黑瓶精华肌底液",
    brand: "Lancôme",
    category: "美妆 · 精华",
    price: 1080,
    priceUnit: "100ml",
    keywords: ["精华", "抗老", "肌底液", "二裂酵母"],
    notes: { total: 1247, analyzed: 100, avgLikes: 342, avgComments: 28 },
    ads: {
      detected: 31, total: 100, confidence: 94,
      signals: [
        { type: "品牌词高频", desc: "「LANCÔME」「兰蔻官方」出现 ≥5 次", count: 22 },
        { type: "话术模板", desc: "「家人们谁懂啊」「无限回购」连用", count: 18 },
        { type: "九宫格水印", desc: "图片含品牌活动 logo / 专柜小票", count: 14 },
        { type: "评论区控评", desc: "前 3 条评论账号近 30 天点赞 ≥10 篇同品类", count: 11 },
      ],
      examples: [
        { title: "🔥 30+ 姐妹必看！这瓶精华我吹爆", suspicion: 96, reason: "标题模板化 + 9 张图全带专柜小票" },
        { title: "兰蔻小黑瓶用完一瓶的真实变化", suspicion: 89, reason: "前 24h 互动激增异常 + 控评" },
        { title: "买它！抗老界天花板", suspicion: 92, reason: "短笔记 + 强种草词 + 高粉博主" },
      ],
    },
    perspectives: [
      { tag: "成分党", ratio: 18, sentiment: "正面", sentimentScore: 78, summary: "认可二裂酵母 + 透明质酸钠组合，pH 5.5 温和，但浓度未公开", quotes: ["成分表前几位是二裂酵母 + 透明质酸钠，配方逻辑没问题", "适合作为打底但单瓶抗老说服力不足"] },
      { tag: "油痘肌", ratio: 22, sentiment: "中性偏正", sentimentScore: 62, summary: "质地清爽不闷痘，但夏天单独用保湿不够", quotes: ["油皮夏天用刚刚好，秋冬要叠面霜", "痘肌爆痘期间也能用，没有刺激"] },
      { tag: "敏感肌", ratio: 15, sentiment: "中性", sentimentScore: 55, summary: "无明显刺激报告，但建议建立耐受后再用全脸", quotes: ["玫瑰痤疮稳定期可用，第一次先耳后测", "酒精含量低，但香精较明显"] },
      { tag: "价格党", ratio: 28, sentiment: "负面", sentimentScore: 38, summary: "正装价格偏高，建议蹲免税 / 中免日上 / 双 11 京东", quotes: ["专柜 1080，免税长期 720 左右", "活动价能到 4 折，原价买等于交税"] },
      { tag: "效果党", ratio: 17, sentiment: "中性", sentimentScore: 58, summary: "短期提亮、上妆服帖有共识；抗老效果需 3 个月以上", quotes: ["用两周脸看起来更亮，但细纹改变不大", "需要配合抗老面霜 + 视黄醇才看得到"] },
    ],
    verdict: {
      score: 78,
      fitFor: ["25-35 岁，想做初抗老打底", "混油 / 油皮，追求清爽精华", "已有完整保湿步骤，需要加一个发光剂"],
      avoid: ["预算敏感（年消耗 ≥ 3 瓶，原价压力大）", "纯敏感肌 / 屏障受损期", "指望「单品逆龄」的抗老需求"],
    },
    priceHistory: {
      current: 1080, lowest: 612, lowestChannel: "海南免税 · 2025 双 11", avgDiscount: 6.8,
      trend: [
        { month: "2025-06", price: 1080 }, { month: "2025-07", price: 980 }, { month: "2025-08", price: 880 },
        { month: "2025-09", price: 920 }, { month: "2025-10", price: 720 }, { month: "2025-11", price: 612 },
        { month: "2025-12", price: 780 }, { month: "2026-01", price: 850 }, { month: "2026-02", price: 880 },
        { month: "2026-03", price: 920 }, { month: "2026-04", price: 1000 }, { month: "2026-05", price: 1080 },
      ],
    },
    alternatives: [
      { name: "雅诗兰黛小棕瓶", brand: "Estée Lauder", price: 1180, match: 87, diff: "更厚重保湿，适合干皮 / 30+ 抗老" },
      { name: "修丽可植萃精华液", brand: "SkinCeuticals", price: 980, match: 76, diff: "舒缓修红更强，价格相近，敏感肌优选" },
      { name: "珂润润浸保湿精华", brand: "Curél", price: 220, match: 58, diff: "1/5 价格做日常打底，无抗老主张" },
    ],
  },

  "SK-II神仙水": {
    id: "sk2_ftc",
    name: "SK-II 护肤精华露 神仙水",
    brand: "SK-II",
    category: "美妆 · 精华水",
    price: 1590,
    priceUnit: "230ml",
    keywords: ["神仙水", "Pitera", "调理", "稳定"],
    notes: { total: 2156, analyzed: 100, avgLikes: 521, avgComments: 47 },
    ads: {
      detected: 38, total: 100, confidence: 96,
      signals: [
        { type: "品牌词高频", desc: "「Pitera」「神仙水」出现 ≥6 次", count: 28 },
        { type: "话术模板", desc: "「用了 N 瓶才敢推荐」", count: 21 },
        { type: "明星同款", desc: "强行关联代言人 / 明星脸", count: 17 },
        { type: "评论区控评", desc: "高赞评论账号关联度异常", count: 13 },
      ],
      examples: [
        { title: "💎 SK-II 用了 7 瓶后的脸有多稳", suspicion: 95, reason: "标题数字模板 + 评论控评" },
        { title: "为什么贵妇都在囤神仙水", suspicion: 91, reason: "强种草词 + 无瑕疵反馈" },
      ],
    },
    perspectives: [
      { tag: "成分党", ratio: 16, sentiment: "正面", sentimentScore: 80, summary: "Pitera (半乳糖酵母发酵滤液) 浓度 90%+，是真功夫成分", quotes: ["这个浓度市面上找不到替代", "成分表第二位就是 Pitera"] },
      { tag: "干皮", ratio: 14, sentiment: "正面", sentimentScore: 75, summary: "湿敷效果好，做爽肤水/二次清洁后用最佳", quotes: ["秋冬湿敷救命", "脸蛋干裂的时候就靠它"] },
      { tag: "油痘肌", ratio: 19, sentiment: "中性", sentimentScore: 56, summary: "调理肤质有共识，但味道劝退率高", quotes: ["味道真的像酒糟", "用了 1 个月毛孔小了一圈"] },
      { tag: "敏感肌", ratio: 21, sentiment: "负面", sentimentScore: 42, summary: "酒精成分 + 发酵味，部分敏感肌烂脸报告集中", quotes: ["敏感期千万别碰，刺痛", "酒精排在第三位，慎入"] },
      { tag: "价格党", ratio: 30, sentiment: "负面", sentimentScore: 35, summary: "正装 1590，但日上 / 黑五能到 900 左右", quotes: ["专柜买就是大冤种", "日上 1+1 拼起来超划算"] },
    ],
    verdict: {
      score: 74,
      fitFor: ["28+ 想稳定肤质", "混干 / 干皮", "已建立耐受，能接受发酵味"],
      avoid: ["敏感肌 / 屏障期", "20 岁以下不需要这个层级", "讨厌酒精 / 发酵气味"],
    },
    priceHistory: {
      current: 1590, lowest: 890, lowestChannel: "中免日上 · 2025 黑五", avgDiscount: 8.2,
      trend: [
        { month: "2025-06", price: 1590 }, { month: "2025-07", price: 1480 }, { month: "2025-08", price: 1320 },
        { month: "2025-09", price: 1290 }, { month: "2025-10", price: 1100 }, { month: "2025-11", price: 890 },
        { month: "2025-12", price: 1180 }, { month: "2026-01", price: 1280 }, { month: "2026-02", price: 1380 },
        { month: "2026-03", price: 1450 }, { month: "2026-04", price: 1520 }, { month: "2026-05", price: 1590 },
      ],
    },
    alternatives: [
      { name: "怡丽丝尔优悦活颜精华", brand: "Elixir", price: 480, match: 71, diff: "胶原蛋白路线，干皮替代，1/3 价位" },
      { name: "黛珂紫苏水", brand: "Decorté", price: 420, match: 68, diff: "油痘肌优选，控油 + 调理同步" },
      { name: "海蓝之谜浓缩修护精华露", brand: "La Mer", price: 2480, match: 83, diff: "修护更强，价格翻倍，奢华路线" },
    ],
  },

  "戴森吹风机": {
    id: "dyson_supersonic",
    name: "戴森 Supersonic 吹风机",
    brand: "Dyson",
    category: "数码 · 美发",
    price: 2990,
    priceUnit: "HD16",
    keywords: ["吹风机", "无叶", "护发", "戴森"],
    notes: { total: 985, analyzed: 100, avgLikes: 412, avgComments: 35 },
    ads: {
      detected: 42, total: 100, confidence: 97,
      signals: [
        { type: "品牌词高频", desc: "「Dyson」「戴森官方」出现 ≥4 次", count: 32 },
        { type: "话术模板", desc: "「头发救星」「告别毛躁」", count: 26 },
        { type: "开箱模板", desc: "九宫格开箱 + 同款风嘴特写", count: 22 },
        { type: "礼物心智", desc: "「老公送的」「520 礼物」", count: 18 },
      ],
      examples: [
        { title: "🎁 老公送的礼物里它最实用", suspicion: 98, reason: "礼物模板 + 同款风嘴特写" },
        { title: "戴森吹风机用了 1 年还要回购吗", suspicion: 76, reason: "标题伪客观 + 评论引导" },
      ],
    },
    perspectives: [
      { tag: "数码党", ratio: 15, sentiment: "正面", sentimentScore: 82, summary: "数字马达 + 智能温控是真技术，但同价位国产已能做到 80%", quotes: ["马达转速确实没对手", "徕芬已经能做到 80%"] },
      { tag: "毛躁/染烫", ratio: 24, sentiment: "正面", sentimentScore: 76, summary: "细软 / 染烫发质改善最明显", quotes: ["染了 5 次的头发救回来", "比之前用的家用机毛躁少一半"] },
      { tag: "厚发 / 长发", ratio: 18, sentiment: "中性", sentimentScore: 58, summary: "干头发时间没有比 2000 元国产快多少", quotes: ["长发还是要 8-10 分钟", "靠护发风嘴而不是风力本身"] },
      { tag: "价格党", ratio: 31, sentiment: "负面", sentimentScore: 32, summary: "性价比之争激烈，徕芬 / 追觅 / 飞利浦 7000 成为有力对手", quotes: ["3000 块买马达不划算", "徕芬 SE 1/3 价格"] },
      { tag: "送礼党", ratio: 12, sentiment: "正面", sentimentScore: 71, summary: "礼物属性强，包装、品牌、社交价值是核心驱动", quotes: ["送礼有面子", "包装确实精致"] },
    ],
    verdict: {
      score: 71,
      fitFor: ["染烫频繁 / 细软发质", "预算充足，看重护发体验", "作为礼物送人"],
      avoid: ["在意纯性价比", "头发又厚又多（速度优势不明显）", "只在家用，不出差"],
    },
    priceHistory: {
      current: 2990, lowest: 2199, lowestChannel: "京东 · 2025 双 11", avgDiscount: 4.5,
      trend: [
        { month: "2025-06", price: 2990 }, { month: "2025-07", price: 2890 }, { month: "2025-08", price: 2790 },
        { month: "2025-09", price: 2890 }, { month: "2025-10", price: 2580 }, { month: "2025-11", price: 2199 },
        { month: "2025-12", price: 2480 }, { month: "2026-01", price: 2680 }, { month: "2026-02", price: 2780 },
        { month: "2026-03", price: 2880 }, { month: "2026-04", price: 2980 }, { month: "2026-05", price: 2990 },
      ],
    },
    alternatives: [
      { name: "徕芬 SE Lite", brand: "Laifen", price: 599, match: 78, diff: "1/5 价格做到 80% 体验，性价比之王" },
      { name: "追觅 Pocket", brand: "Dreame", price: 899, match: 72, diff: "便携小巧，出差党首选" },
      { name: "戴森 Airwrap", brand: "Dyson", price: 4490, match: 65, diff: "造型 + 吹干二合一，价格更高" },
    ],
  },

  "lululemon瑜伽裤": {
    id: "lululemon_align",
    name: "lululemon Align 瑜伽裤",
    brand: "lululemon",
    category: "运动 · 服饰",
    price: 850,
    priceUnit: "25\" 标准款",
    keywords: ["瑜伽裤", "Align", "lulu", "腹部包裹"],
    notes: { total: 3421, analyzed: 100, avgLikes: 687, avgComments: 62 },
    ads: {
      detected: 27, total: 100, confidence: 89,
      signals: [
        { type: "品牌词高频", desc: "「lululemon」「lulu 女孩」出现 ≥5 次", count: 19 },
        { type: "话术模板", desc: "「裸感」「腿精」「显瘦神器」", count: 23 },
        { type: "穿搭九宫格", desc: "同款多角度九宫格 + 试穿对比", count: 16 },
        { type: "私域引流", desc: "评论区带「Vx」「sft」", count: 8 },
      ],
      examples: [
        { title: "👖 168/50kg 真实试穿 6 件 lulu", suspicion: 88, reason: "试穿模板 + 评论区私域引流" },
      ],
    },
    perspectives: [
      { tag: "运动党", ratio: 23, sentiment: "正面", sentimentScore: 84, summary: "Align 面料适合瑜伽 / 普拉提，但高强度训练不行", quotes: ["瑜伽普拉提天花板", "跑步、HIIT 不要选 Align"] },
      { tag: "身材焦虑党", ratio: 32, sentiment: "正面", sentimentScore: 78, summary: "腹部包裹 + 提臀效果有共识，是核心卖点", quotes: ["小肚子真的没了", "穿出去回头率高"] },
      { tag: "性价比党", ratio: 20, sentiment: "负面", sentimentScore: 38, summary: "850 元 vs 蕉下 / MAIA / 暴走的萝莉 300 内能做到 80%", quotes: ["国产平替已经够用", "lulu 溢价一半是品牌"] },
      { tag: "尺码党", ratio: 13, sentiment: "中性", sentimentScore: 52, summary: "尺码偏小，建议+1 码，臀大腰小不友好", quotes: ["臀大腰细一定要去店里试", "买大不买小"] },
      { tag: "耐用党", ratio: 12, sentiment: "中性偏负", sentimentScore: 48, summary: "起球、勾丝问题集中报告，洗涤需谨慎", quotes: ["半年起球", "网袋手洗能撑 1 年"] },
    ],
    verdict: {
      score: 76,
      fitFor: ["瑜伽 / 普拉提主力", "看重穿着体验和品牌感", "通勤 + 运动两穿"],
      avoid: ["纯性价比党", "高强度训练（HIIT、跑步）", "粗暴洗护习惯"],
    },
    priceHistory: {
      current: 850, lowest: 580, lowestChannel: "lululemon We Made Too Much · 2026 春", avgDiscount: 3.2,
      trend: [
        { month: "2025-06", price: 850 }, { month: "2025-07", price: 850 }, { month: "2025-08", price: 720 },
        { month: "2025-09", price: 850 }, { month: "2025-10", price: 850 }, { month: "2025-11", price: 720 },
        { month: "2025-12", price: 850 }, { month: "2026-01", price: 680 }, { month: "2026-02", price: 580 },
        { month: "2026-03", price: 720 }, { month: "2026-04", price: 850 }, { month: "2026-05", price: 850 },
      ],
    },
    alternatives: [
      { name: "MAIA ACTIVE 腰精裤", brand: "MAIA ACTIVE", price: 459, match: 81, diff: "亚洲版型，更适合腰细臀大" },
      { name: "蕉下空气感运动裤", brand: "BANANAUNDER", price: 269, match: 68, diff: "1/3 价位日常通勤足够" },
      { name: "Alo Yoga Airbrush", brand: "Alo Yoga", price: 880, match: 74, diff: "美式潮牌路线，社交属性同等" },
    ],
  },

  "白胖子防晒": {
    id: "anessa_pink",
    name: "安热沙小金瓶防晒 (2026 升级版)",
    brand: "Anessa",
    category: "美妆 · 防晒",
    price: 268,
    priceUnit: "60ml",
    keywords: ["防晒", "金瓶", "Anessa", "SPF50"],
    notes: { total: 1872, analyzed: 100, avgLikes: 289, avgComments: 24 },
    ads: {
      detected: 25, total: 100, confidence: 86,
      signals: [
        { type: "品牌词高频", desc: "「Anessa」「金瓶」出现 ≥4 次", count: 17 },
        { type: "户外测评模板", desc: "海边 / 户外 8 小时打卡", count: 15 },
        { type: "明星同款", desc: "强行关联代言人安热沙女孩", count: 11 },
        { type: "话术模板", desc: "「无限回购」「夏天命脉」", count: 13 },
      ],
      examples: [
        { title: "☀️ 海边 8 小时实测白胖子", suspicion: 84, reason: "户外打卡模板 + 单一好评" },
      ],
    },
    perspectives: [
      { tag: "户外/海边", ratio: 26, sentiment: "正面", sentimentScore: 88, summary: "防水抗汗扛打，海边 / 户外刚需", quotes: ["三亚 35 度 8 小时不脱", "汗水汽化触发防晒膜，这是真技术"] },
      { tag: "通勤党", ratio: 22, sentiment: "中性", sentimentScore: 55, summary: "通勤过强，普通日常优选轻薄款", quotes: ["通勤这么强浪费", "膜感重，妆容糊"] },
      { tag: "敏感肌", ratio: 18, sentiment: "负面", sentimentScore: 42, summary: "酒精 + 化学防晒剂，敏感肌报告集中", quotes: ["敏感肌泛红警告", "屏障受损直接劝退"] },
      { tag: "成分党", ratio: 14, sentiment: "正面", sentimentScore: 72, summary: "混合防晒 (化学 + 物理)，SPF50+ PA++++ 数据扎实", quotes: ["UVA 滤过率国货还做不到", "Tinosorb S 浓度可观"] },
      { tag: "价格党", ratio: 20, sentiment: "正面", sentimentScore: 70, summary: "200 出头的价格在中高端防晒里算合理，日上 / 6.18 能到 160", quotes: ["日上 160 能拿下", "6.18 / 双 11 必囤"] },
    ],
    verdict: {
      score: 82,
      fitFor: ["户外 / 海边 / 高强度紫外线场景", "油皮 / 混油不怕膜感", "夏季单一军火"],
      avoid: ["敏感肌 / 屏障期", "通勤日常党（杀鸡用牛刀）", "干皮单一使用（叠面霜更好）"],
    },
    priceHistory: {
      current: 268, lowest: 158, lowestChannel: "日上免税 · 2025 6.18", avgDiscount: 5.8,
      trend: [
        { month: "2025-06", price: 258 }, { month: "2025-07", price: 198 }, { month: "2025-08", price: 218 },
        { month: "2025-09", price: 238 }, { month: "2025-10", price: 248 }, { month: "2025-11", price: 168 },
        { month: "2025-12", price: 198 }, { month: "2026-01", price: 228 }, { month: "2026-02", price: 238 },
        { month: "2026-03", price: 248 }, { month: "2026-04", price: 258 }, { month: "2026-05", price: 268 },
      ],
    },
    alternatives: [
      { name: "怡思丁水润倍护防晒", brand: "ISDIN", price: 218, match: 79, diff: "通勤更友好，敏感肌也能用" },
      { name: "蓝胖子 (Anessa 蓝瓶)", brand: "Anessa", price: 248, match: 92, diff: "敏感肌版本，温和度更高" },
      { name: "理肤泉大哥大防晒", brand: "La Roche-Posay", price: 258, match: 81, diff: "纯敏感肌优选，欧系配方" },
    ],
  },
};

// ===================== 理财 =====================
const FINANCE_PRODUCTS = {
  "易方达蓝筹精选": {
    id: "yfd_lcjx", name: "易方达蓝筹精选混合 005827", type: "混合型基金",
    manager: "张坤", riskLevel: "中高风险 R4", cover: "📈",
    metrics: { ytd: -2.3, threeYear: 8.6, fiveYear: 41.2, maxDrawdown: -38.7, scale: "412 亿" },
    notes: { total: 8924, analyzed: 100, avgLikes: 156, avgComments: 89 },
    ads: {
      detected: 13, total: 100, confidence: 78,
      signals: [
        { type: "代销引流", desc: "天天基金 / 支付宝代销链接", count: 8 },
        { type: "话术模板", desc: "「跟着坤坤无脑买」", count: 7 },
        { type: "私域转化", desc: "评论区「加群」「领策略」", count: 9 },
      ],
      examples: [{ title: "💰 跟着坤坤 5 年的真实收益", suspicion: 72, reason: "标题模板 + 私域引流" }],
    },
    perspectives: [
      { tag: "价值投资派", ratio: 32, sentiment: "正面", sentimentScore: 71, summary: "认可张坤长期重仓白酒 + 消费的策略，但短期阵痛大", quotes: ["10 年维度仍是顶级选手", "重仓白酒是双刃剑"] },
      { tag: "短线/追涨派", ratio: 24, sentiment: "负面", sentimentScore: 28, summary: "21 年高点接盘者亏损普遍 40%+，回本周期长", quotes: ["套了 4 年还没回本", "高点跟风教训太大"] },
      { tag: "定投党", ratio: 28, sentiment: "中性偏正", sentimentScore: 62, summary: "持续定投 + 微笑曲线者多数已回本或盈利", quotes: ["跌到 1.5 一直定投，现在浮盈 18%", "需要纪律性"] },
      { tag: "风险控制党", ratio: 16, sentiment: "负面", sentimentScore: 35, summary: "最大回撤 -38.7%，单一行业暴露风险高", quotes: ["回撤太大，超出 R3 风险偏好", "建议配比不超过 20%"] },
    ],
    verdict: { score: 64, fitFor: ["3-5 年长期定投", "认可消费 / 白酒长期价值", "能承受 -30% 回撤"], avoid: ["1-2 年内要用的钱", "短期追涨杀跌型", "看不懂回撤就慌的新手"] },
    priceHistory: null,
    alternatives: [
      { name: "中欧时代先锋 (周蔚文)", type: "混合型", price: "1.85", match: 76, diff: "更均衡的行业配置，回撤更小" },
      { name: "兴全合润 LOF (谢治宇)", type: "混合型", price: "2.42", match: 82, diff: "均衡风格 + 选股能力，长期更稳" },
      { name: "沪深 300ETF (510300)", type: "指数型", price: "3.85", match: 65, diff: "纯被动指数，省心 + 费率低" },
    ],
  },
  "平安福": {
    id: "pingan_fu", name: "平安福终身寿险 2026", type: "终身寿险 + 重疾",
    manager: "中国平安", riskLevel: "保障型", cover: "🛡️",
    metrics: { ytd: 0, threeYear: 0, fiveYear: 0, maxDrawdown: 0, scale: "千亿级" },
    notes: { total: 4521, analyzed: 100, avgLikes: 87, avgComments: 134 },
    ads: {
      detected: 47, total: 100, confidence: 95,
      signals: [
        { type: "代理人引流", desc: "「私聊定制方案」高频出现", count: 38 },
        { type: "焦虑营销", desc: "「不买后悔一辈子」「家庭顶梁柱」", count: 29 },
        { type: "案例堆砌", desc: "「我表哥得了 XX 病赔了 50w」", count: 24 },
        { type: "捆绑销售话术", desc: "主险 + N 个附加险打包", count: 31 },
      ],
      examples: [
        { title: "🛡️ 给娃买了平安福之后我睡得超香", suspicion: 96, reason: "焦虑营销模板 + 代理人私域" },
        { title: "30 岁前必须配齐的 3 份保险", suspicion: 92, reason: "标题模板 + 引流加微" },
      ],
    },
    perspectives: [
      { tag: "精算党", ratio: 18, sentiment: "负面", sentimentScore: 22, summary: "保费贵、保额低、责任窄，性价比远低于同业", quotes: ["同价格能买百年康惠保 2 倍保额", "捆绑寿险拉高保费"] },
      { tag: "品牌党", ratio: 25, sentiment: "正面", sentimentScore: 68, summary: "认可平安服务网点 + 理赔效率", quotes: ["县城也有网点，理赔方便", "大品牌买着踏实"] },
      { tag: "理赔实战派", ratio: 20, sentiment: "中性", sentimentScore: 55, summary: "理赔速度有口碑，但拒赔案例也不少（健康告知不严）", quotes: ["甲状腺结节没告知被拒赔", "理赔到账只用了 7 天"] },
      { tag: "代理人受害者", ratio: 22, sentiment: "负面", sentimentScore: 18, summary: "代理人销售误导 + 捆绑销售 + 退保困难是高频投诉", quotes: ["被忽悠买了根本不需要的附加险", "退保只能退 30%"] },
      { tag: "替代党", ratio: 15, sentiment: "中性", sentimentScore: 50, summary: "互联网产品 (达尔文 / 超级玛丽 / 守卫者) 已成主流选择", quotes: ["互联网产品同保额便宜 40%", "需要自己懂条款"] },
    ],
    verdict: { score: 42, fitFor: ["对互联网投保没信心，需要线下服务的中老年", "县城 / 三四线城市，看重品牌"], avoid: ["精算敏感型，要追求性价比", "了解互联网保险的人", "想要单纯重疾保障的人"] },
    priceHistory: null,
    alternatives: [
      { name: "达尔文 9 号", type: "互联网重疾", price: "30 岁 5500/年", match: 89, diff: "保额翻倍，价格 6 折，纯重疾不捆绑" },
      { name: "超级玛丽 12 号", type: "互联网重疾", price: "30 岁 5800/年", match: 87, diff: "前 15 年保额 +60%，年轻人友好" },
      { name: "百年康惠保旗舰版", type: "互联网重疾", price: "30 岁 5200/年", match: 86, diff: "性价比之王，二次重疾责任强" },
    ],
  },
  "中证500ETF": {
    id: "zz500_etf", name: "中证 500ETF 510500", type: "指数型 ETF",
    manager: "南方基金", riskLevel: "中高风险 R4", cover: "📊",
    metrics: { ytd: 12.4, threeYear: -8.2, fiveYear: 18.6, maxDrawdown: -32.4, scale: "725 亿" },
    notes: { total: 3287, analyzed: 100, avgLikes: 134, avgComments: 67 },
    ads: {
      detected: 8, total: 100, confidence: 65,
      signals: [
        { type: "代销引流", desc: "代销 App 引导，含量较低", count: 5 },
        { type: "话术模板", desc: "「躺平赚钱」类标题", count: 6 },
      ],
      examples: [{ title: "📊 中证 500 网格策略月赚 3%", suspicion: 75, reason: "收益夸大 + 引流加群" }],
    },
    perspectives: [
      { tag: "指数党", ratio: 36, sentiment: "正面", sentimentScore: 80, summary: "成分股分散 + 费率低 (0.5%)，长期跟踪指数无烦恼", quotes: ["费率比主动基金便宜 70%", "中证 500 比沪深 300 弹性更高"] },
      { tag: "网格交易党", ratio: 22, sentiment: "正面", sentimentScore: 74, summary: "波动率适中，适合网格 / 估值定投策略", quotes: ["每跌 3% 加仓一次，3 年走出回撤", "需要纪律"] },
      { tag: "定投党", ratio: 28, sentiment: "中性偏正", sentimentScore: 65, summary: "估值百分位是关键，PE < 25 分位时定投胜率高", quotes: ["现在 PE 22 分位，可以开始定投", "高估时停止"] },
      { tag: "新手党", ratio: 14, sentiment: "中性", sentimentScore: 50, summary: "理解门槛低，但要避开高位申购", quotes: ["最容易上手的指数", "千万别在牛市顶部冲"] },
    ],
    verdict: { score: 81, fitFor: ["5 年以上长期资金", "新手 / 不想研究个股", "估值定投策略执行者"], avoid: ["1 年内要用的钱", "受不了 -30% 回撤", "高估值期 (PE > 80 分位) 一把梭"] },
    priceHistory: null,
    alternatives: [
      { name: "沪深 300ETF (510300)", type: "指数 ETF", price: "3.85", match: 88, diff: "更稳定，蓝筹蓝头，弹性略低" },
      { name: "创业板 ETF (159915)", type: "指数 ETF", price: "2.12", match: 76, diff: "成长性更强，波动更大" },
      { name: "中证红利 ETF (515080)", type: "指数 ETF", price: "1.42", match: 71, diff: "高股息策略，防守型" },
    ],
  },
};

// ===================== 文娱 =====================
const ENTERTAINMENT_PRODUCTS = {
  "繁花": {
    id: "fanhua", name: "繁花 (王家卫·剧版)", brand: "王家卫", category: "电视剧",
    price: 0, priceUnit: "VIP 看完整剧需 ¥30", cover: "🎬",
    keywords: ["王家卫", "上海", "胡歌", "九十年代"],
    notes: { total: 6824, analyzed: 100, avgLikes: 892, avgComments: 156 },
    ads: {
      detected: 22, total: 100, confidence: 88,
      signals: [
        { type: "营销号通稿", desc: "「王家卫剧版封神」「年度神剧」", count: 18 },
        { type: "话术模板", desc: "「家人们速看」「错过等三年」", count: 13 },
        { type: "片方水军", desc: "前 24h 互动激增异常 + 雷同评论", count: 15 },
        { type: "明星粉丝控评", desc: "胡歌 / 唐嫣超话引流", count: 14 },
      ],
      examples: [
        { title: "🎬 王家卫剧版封神，2026 年度神剧无悬念", suspicion: 94, reason: "营销号通稿标题 + 0 槽点" },
        { title: "繁花一集封神！全员演技炸裂", suspicion: 89, reason: "首播日异常互动 + 控评" },
      ],
    },
    perspectives: [
      { tag: "影迷党", ratio: 24, sentiment: "正面", sentimentScore: 86, summary: "王家卫美学还原度高，光影 / 调度 / 配乐都是电影级", quotes: ["每一帧都像电影截图", "王家卫的镜头语言这次彻底沉浸"] },
      { tag: "原著党", ratio: 18, sentiment: "中性偏负", sentimentScore: 48, summary: "改编大刀阔斧，金宇澄原著的散点叙事被改成线性主线，褒贬不一", quotes: ["原著粉看完想骂街，但单看剧是好剧", "宝总人设比原著扁平"] },
      { tag: "上海派", ratio: 22, sentiment: "正面", sentimentScore: 81, summary: "九十年代上海还原度炸裂，吃穿用度都是真考据", quotes: ["黄河路那场戏让我爷爷哭了", "排骨年糕、定胜糕全是真的"] },
      { tag: "节奏党", ratio: 19, sentiment: "负面", sentimentScore: 38, summary: "节奏慢、台词拗口、空镜过多，部分观众弃剧在第 5 集", quotes: ["看了 3 集还没进主线", "王家卫的慢节奏不是所有人都吃得消"] },
      { tag: "演技党", ratio: 17, sentiment: "正面", sentimentScore: 78, summary: "胡歌 / 马伊琍 / 唐嫣 / 辛芷蕾四主演均在线，配角更出彩", quotes: ["唐嫣这次彻底翻身", "陶陶演得最绝"] },
    ],
    verdict: {
      score: 84,
      fitFor: ["影迷 / 王家卫粉丝", "上海人 / 对九十年代有情结", "能接受慢节奏 + 美学优先"],
      avoid: ["要看爽剧的人（这不是甜宠不是悬疑）", "原著党且无法接受改编", "下饭剧观众（信息密度太高）"],
    },
    priceHistory: null,
    alternatives: [
      { name: "山海情", brand: "正午阳光", price: 0, match: 76, diff: "同样是年代剧标杆，节奏更易入口" },
      { name: "漫长的季节", brand: "辛爽", price: 0, match: 89, diff: "同样美学优先 + 慢节奏，悬疑外壳" },
      { name: "花样年华 (电影)", brand: "王家卫", price: 0, match: 92, diff: "王家卫源头作品，2 小时入门" },
    ],
  },

  "周处除三害": {
    id: "zcc3h", name: "周处除三害 (黄精甫·电影)", brand: "黄精甫", category: "电影",
    price: 0, priceUnit: "院线下映，流媒体 ¥6 起", cover: "🎞️",
    keywords: ["阮经天", "犯罪", "邪教", "暴力美学"],
    notes: { total: 4536, analyzed: 100, avgLikes: 1024, avgComments: 213 },
    ads: {
      detected: 18, total: 100, confidence: 82,
      signals: [
        { type: "营销号通稿", desc: "「华语片暴力美学新巅峰」", count: 12 },
        { type: "片段切片", desc: "邪教歌「新造的人」病毒传播", count: 15 },
        { type: "明星粉丝控评", desc: "阮经天粉丝二次破圈", count: 11 },
      ],
      examples: [
        { title: "🔥 阮经天封神之作，年度华语 No.1", suspicion: 87, reason: "通稿标题 + 0 槽点" },
      ],
    },
    perspectives: [
      { tag: "动作/犯罪片粉", ratio: 28, sentiment: "正面", sentimentScore: 90, summary: "教堂大屠杀堪称华语暴力美学新巅峰，剪辑 + 配乐封神", quotes: ["教堂那段循环看了 5 遍", "华语片少有的爽快"] },
      { tag: "深度党", ratio: 19, sentiment: "正面", sentimentScore: 78, summary: "邪教批判 + 自我救赎双线，金句密度高", quotes: ["「新造的人」直接 PUA 寓言", "结尾枪声是神来之笔"] },
      { tag: "三观党", ratio: 16, sentiment: "中性偏负", sentimentScore: 45, summary: "主角是杀人犯却被英雄化，有美化暴力争议", quotes: ["陈桂林被洗白了", "结局有点强行升华"] },
      { tag: "粉丝党", ratio: 22, sentiment: "正面", sentimentScore: 86, summary: "阮经天演技翻盘，从台偶男神到影帝级表演", quotes: ["阮经天这次拿影帝没人反对", "差点认不出这是流星花园那个"] },
      { tag: "节奏党", ratio: 15, sentiment: "中性", sentimentScore: 58, summary: "前 30 分钟铺垫慢，但教堂戏之后一路高燃", quotes: ["前面差点弃剧", "后半段值回票价"] },
    ],
    verdict: {
      score: 87,
      fitFor: ["犯罪 / 动作片爱好者", "能接受 R 级暴力 + 邪教题材", "想看阮经天演技封神现场"],
      avoid: ["三观严格 / 不能接受暴力美化", "对邪教 / 自残 / 群杀镜头敏感", "想看治愈温情片"],
    },
    priceHistory: null,
    alternatives: [
      { name: "目击者之追凶", brand: "程伟豪", price: 0, match: 81, diff: "同样台湾犯罪片标杆，反转更密" },
      { name: "老炮儿", brand: "管虎", price: 0, match: 68, diff: "大陆江湖片代表作，主题相似" },
      { name: "新世界 (韩)", brand: "朴勋政", price: 0, match: 86, diff: "韩国黑帮片教科书，气质相近" },
    ],
  },

  "再见爱人4": {
    id: "zjar4", name: "再见爱人 第 4 季", brand: "芒果 TV", category: "综艺 · 真人秀",
    price: 0, priceUnit: "VIP ¥25/月", cover: "📺",
    keywords: ["麦麦", "李行亮", "杨子", "黄圣依"],
    notes: { total: 12453, analyzed: 100, avgLikes: 1834, avgComments: 421 },
    ads: {
      detected: 35, total: 100, confidence: 92,
      signals: [
        { type: "营销号通稿", desc: "「麦麦语录」「杨子人设崩塌」", count: 28 },
        { type: "话题营造", desc: "微博热搜联动 + 切片传播", count: 24 },
        { type: "黑红营销", desc: "刻意放大嘉宾争议吸引讨论", count: 21 },
        { type: "评论引战", desc: "「站麦麦还是站李行亮」二极管引战", count: 19 },
      ],
      examples: [
        { title: "💔 麦麦的发疯文学绝了！", suspicion: 95, reason: "热搜联动标题 + 二极管引战" },
        { title: "杨子人设崩了，黄圣依终于离婚？", suspicion: 91, reason: "黑红营销 + 0 实质分析" },
      ],
    },
    perspectives: [
      { tag: "情感分析派", ratio: 24, sentiment: "正面", sentimentScore: 76, summary: "嘉宾选角精准戳中现代婚姻三大痛点：PUA / 经济不对等 / 沟通失灵", quotes: ["每对都是教科书案例", "比心理学课还透"] },
      { tag: "看戏党", ratio: 32, sentiment: "中性偏正", sentimentScore: 65, summary: "纯当下饭综艺，「发疯文学」「窝囊废文学」金句频出", quotes: ["麦麦语录笑不活了", "杨子说话每句都是地雷"] },
      { tag: "三观党", ratio: 18, sentiment: "负面", sentimentScore: 38, summary: "节目刻意激化矛盾、剪辑带节奏、消费婚姻问题被反复诟病", quotes: ["完全是吃人血馒头", "剪辑师下班"] },
      { tag: "女性视角", ratio: 17, sentiment: "中性", sentimentScore: 55, summary: "麦麦 / 黄圣依的争议折射婚姻里的女性困境，但答案不统一", quotes: ["看完更不想结婚了", "麦麦不是受害者也不是加害者"] },
      { tag: "嘉宾粉丝", ratio: 9, sentiment: "负面", sentimentScore: 28, summary: "李行亮 / 黄圣依粉丝普遍认为节目剪辑恶意", quotes: ["李行亮被剪得太惨", "黄圣依本人比剪辑里温柔多了"] },
    ],
    verdict: {
      score: 72,
      fitFor: ["想看婚姻众生相 / 当下饭综艺", "对情感分析 / 心理学感兴趣", "能接受娱乐化呈现"],
      avoid: ["对消费婚姻问题反感", "三观严格不能接受恶剪", "心情低落期 (容易共情焦虑)"],
    },
    priceHistory: null,
    alternatives: [
      { name: "再见爱人 1 / 2 / 3", brand: "芒果 TV", price: 0, match: 90, diff: "前作更克制，恶剪较少，情感分析更深" },
      { name: "怦然再心动", brand: "芒果 TV", price: 0, match: 65, diff: "离婚后再恋爱视角，更治愈" },
      { name: "心动的信号 6", brand: "腾讯", price: 0, match: 58, diff: "素人恋综代表，纯甜不虐" },
    ],
  },

  "黑神话悟空": {
    id: "blackmyth", name: "黑神话：悟空", brand: "游戏科学", category: "游戏 · 单机",
    price: 268, priceUnit: "标准版 PC", cover: "🎮",
    keywords: ["国产 3A", "西游", "动作", "Boss 战"],
    notes: { total: 8932, analyzed: 100, avgLikes: 2156, avgComments: 532 },
    ads: {
      detected: 28, total: 100, confidence: 90,
      signals: [
        { type: "通稿模板", desc: "「国产 3A 元年」「年度最佳」", count: 22 },
        { type: "联动营销", desc: "瑞幸 / 联想 / 京东疯狂联名切片", count: 18 },
        { type: "评论控评", desc: "「批评游戏 = 不爱国」引战话术", count: 16 },
        { type: "高粉博主带货", desc: "首发当周头部博主集中投放", count: 14 },
      ],
      examples: [
        { title: "🐒 国产 3A 元年，黑神话封神！", suspicion: 92, reason: "通稿标题 + 民族主义包装" },
      ],
    },
    perspectives: [
      { tag: "硬核玩家", ratio: 26, sentiment: "正面", sentimentScore: 82, summary: "Boss 战质量国际一流，动作系统借鉴宫崎英高但有本土化创新", quotes: ["黄风大圣比血源 Boss 还过瘾", "招式设计有中国味"] },
      { tag: "剧情党", ratio: 18, sentiment: "中性偏正", sentimentScore: 60, summary: "前 4 章剧情精彩，第 5/6 章节奏崩盘 + 收尾仓促", quotes: ["第 5 章故事讲了个寂寞", "如果完美收尾就是神作"] },
      { tag: "美术党", ratio: 22, sentiment: "正面", sentimentScore: 92, summary: "国风美术 + 影神图设计封神，山西古建实地扫描真功夫", quotes: ["影神图比 Boss 战还想看", "古建党狂喜"] },
      { tag: "性能党", ratio: 16, sentiment: "中性", sentimentScore: 55, summary: "对硬件要求高，2K 全特效需 4070 起步，优化分歧大", quotes: ["3060 都跑不满", "DLSS 3.5 救命"] },
      { tag: "黑神话黑", ratio: 18, sentiment: "负面", sentimentScore: 32, summary: "争议集中在制作人言论 / 民族主义包装 / 隐藏关卡设计", quotes: ["被民族主义绑架不太舒服", "隐藏关劝退新手"] },
    ],
    verdict: {
      score: 86,
      fitFor: ["动作游戏老玩家 (魂系列 / 战神受众)", "西游 / 国风文化爱好者", "PC 配置 4070 + 起步"],
      avoid: ["3A 大作苦手 (不熟悉魂类操作)", "硬件低于 2060 (体验大打折扣)", "讨厌民族主义包装的玩家"],
    },
    priceHistory: {
      current: 268, lowest: 198, lowestChannel: "Steam · 2025 春节促销", avgDiscount: 7.4,
      trend: [
        { month: "2025-06", price: 268 }, { month: "2025-07", price: 268 }, { month: "2025-08", price: 268 },
        { month: "2025-09", price: 268 }, { month: "2025-10", price: 238 }, { month: "2025-11", price: 218 },
        { month: "2025-12", price: 238 }, { month: "2026-01", price: 198 }, { month: "2026-02", price: 218 },
        { month: "2026-03", price: 238 }, { month: "2026-04", price: 268 }, { month: "2026-05", price: 268 },
      ],
    },
    alternatives: [
      { name: "只狼：影逝二度", brand: "FromSoftware", price: 268, match: 88, diff: "动作系统师傅级，无 RPG 要素" },
      { name: "战神 5", brand: "圣莫妮卡", price: 298, match: 81, diff: "更易上手，叙事更强" },
      { name: "卧龙：苍天陨落", brand: "Team Ninja", price: 198, match: 74, diff: "三国题材魂类，价格更低" },
    ],
  },

  "三体小说": {
    id: "santi", name: "三体 (刘慈欣·三部曲)", brand: "刘慈欣", category: "书 · 科幻",
    price: 89, priceUnit: "三册纸质", cover: "📚",
    keywords: ["刘慈欣", "硬科幻", "黑暗森林", "雨果奖"],
    notes: { total: 5621, analyzed: 100, avgLikes: 421, avgComments: 87 },
    ads: {
      detected: 12, total: 100, confidence: 70,
      signals: [
        { type: "通稿模板", desc: "「不看后悔一辈子」「人生必读」", count: 9 },
        { type: "书单引流", desc: "豆瓣 / 微信读书引导加书单", count: 7 },
        { type: "学术包装", desc: "「读完智商 +20」浮夸标题", count: 6 },
      ],
      examples: [
        { title: "📚 不看三体的人生都不完整", suspicion: 78, reason: "夸张标题 + 跟风书单" },
      ],
    },
    perspectives: [
      { tag: "硬科幻党", ratio: 28, sentiment: "正面", sentimentScore: 92, summary: "黑暗森林 / 降维打击 / 二向箔等概念是华语科幻地基", quotes: ["三体一改变了我看世界的方式", "宇宙社会学是真原创"] },
      { tag: "文学党", ratio: 22, sentiment: "中性", sentimentScore: 50, summary: "概念封神但叙事 + 文笔有短板，人物塑造扁平", quotes: ["文笔像理工男写论文", "程心是个工具人"] },
      { tag: "三观党", ratio: 18, sentiment: "负面", sentimentScore: 35, summary: "三观争议大：女性角色塑造 / 集体主义 vs 个人 / 程心争议", quotes: ["女主全是恋爱脑+圣母", "黑暗森林是反人道"] },
      { tag: "入门党", ratio: 20, sentiment: "中性偏正", sentimentScore: 62, summary: "第一部门槛较高 (文革背景 + 物理基础)，第二三部开始爽", quotes: ["前 100 页差点放弃", "看到二向箔那段彻底封神"] },
      { tag: "考据党", ratio: 12, sentiment: "中性", sentimentScore: 55, summary: "硬科幻概念多数有真实物理基础，但「水滴」「降维」等仍是想象", quotes: ["智子是真的有可能", "二向箔纯科幻"] },
    ],
    verdict: {
      score: 88,
      fitFor: ["科幻 / 物理 / 哲学爱好者", "想拓宽世界观的读者", "能接受文笔短板"],
      avoid: ["纯文学审美严格者", "对女性角色刻板印象敏感", "不喜欢长篇 / 难懂科幻设定"],
    },
    priceHistory: {
      current: 89, lowest: 49, lowestChannel: "京东 · 2025 双 11", avgDiscount: 5.5,
      trend: [
        { month: "2025-06", price: 89 }, { month: "2025-07", price: 79 }, { month: "2025-08", price: 69 },
        { month: "2025-09", price: 79 }, { month: "2025-10", price: 59 }, { month: "2025-11", price: 49 },
        { month: "2025-12", price: 69 }, { month: "2026-01", price: 75 }, { month: "2026-02", price: 79 },
        { month: "2026-03", price: 85 }, { month: "2026-04", price: 89 }, { month: "2026-05", price: 89 },
      ],
    },
    alternatives: [
      { name: "球状闪电", brand: "刘慈欣", price: 35, match: 86, diff: "大刘短篇代表，门槛更低" },
      { name: "海伯利安", brand: "丹·西蒙斯", price: 128, match: 81, diff: "西方硬科幻巅峰，文笔更佳" },
      { name: "基地系列", brand: "阿西莫夫", price: 168, match: 75, diff: "科幻祖师爷之作，节奏稍慢" },
    ],
  },
};

// ===================== 餐饮 =====================
const FOOD_PRODUCTS = {
  "海底捞": {
    id: "haidilao", name: "海底捞火锅 (北京三里屯店)", brand: "海底捞", category: "火锅 · 连锁",
    price: 138, priceUnit: "人均", cover: "🍲",
    keywords: ["火锅", "海底捞", "服务", "排队"],
    notes: { total: 3214, analyzed: 100, avgLikes: 234, avgComments: 41 },
    ads: {
      detected: 21, total: 100, confidence: 85,
      signals: [
        { type: "探店模板", desc: "「人均 XX 吃到扶墙出」", count: 16 },
        { type: "话术模板", desc: "「服务好哭了」「生日仪式感」", count: 18 },
        { type: "九宫格菜品", desc: "标准化探店摆盘九宫格", count: 14 },
        { type: "代金券引流", desc: "「评论区领券」「私信团购」", count: 9 },
      ],
      examples: [
        { title: "🍲 在海底捞过生日服务好到哭", suspicion: 88, reason: "生日仪式感模板 + 0 槽点" },
      ],
    },
    perspectives: [
      { tag: "服务党", ratio: 28, sentiment: "正面", sentimentScore: 84, summary: "服务体验仍是行业标杆：美甲 / 等位小吃 / 庆生服务全免费", quotes: ["等位 1.5h 但小吃免费", "服务员说一句话能感动人"] },
      { tag: "口味党", ratio: 22, sentiment: "中性偏负", sentimentScore: 48, summary: "锅底 / 蘸料趋于标准化，缺乏惊艳感，部分门店食材新鲜度下滑", quotes: ["口味没什么特别", "牛肉品质比之前差"] },
      { tag: "价格党", ratio: 26, sentiment: "负面", sentimentScore: 38, summary: "人均 130+ 在连锁火锅里偏高，可点性价比下降", quotes: ["两个人 350 没吃饱", "现在没必要专程去海底捞"] },
      { tag: "环境党", ratio: 14, sentiment: "正面", sentimentScore: 72, summary: "店内卫生 / 包间 / 儿童设施都不错，适合家庭聚餐", quotes: ["带小孩去最合适", "包间私密性好"] },
      { tag: "排队党", ratio: 10, sentiment: "负面", sentimentScore: 35, summary: "热门时段排队 1-3h，建议工作日 / 错峰", quotes: ["周末必排 2h", "建议下午 2 点去"] },
    ],
    verdict: {
      score: 68,
      fitFor: ["家庭聚餐 / 庆生 / 带小孩", "服务体验优先于口味", "工作日中午 / 下午时段可去"],
      avoid: ["纯口味党 / 追求性价比", "讨厌过度服务", "周末晚高峰 (排队 2h+)"],
    },
    priceHistory: null,
    alternatives: [
      { name: "巴奴毛肚火锅", brand: "巴奴", price: 158, match: 82, diff: "口味更突出，毛肚 / 菌汤天花板" },
      { name: "凑凑火锅", brand: "凑凑", price: 145, match: 76, diff: "茶饮 + 火锅，环境年轻向" },
      { name: "蜀大侠 / 小龙坎", brand: "川渝品牌", price: 110, match: 71, diff: "正宗川味，性价比更高" },
    ],
  },

  "Manner咖啡": {
    id: "manner", name: "Manner Coffee", brand: "Manner", category: "咖啡 · 连锁",
    price: 20, priceUnit: "一杯均价", cover: "☕",
    keywords: ["咖啡", "Manner", "性价比", "自带杯"],
    notes: { total: 2876, analyzed: 100, avgLikes: 156, avgComments: 32 },
    ads: {
      detected: 19, total: 100, confidence: 81,
      signals: [
        { type: "探店模板", desc: "「20 一杯精品咖啡的天花板」", count: 14 },
        { type: "联名营销", desc: "LV / 祖玛珑联名打卡引流", count: 16 },
        { type: "自带杯心智", desc: "「自带杯 -5 元」反复强调", count: 12 },
        { type: "九宫格门店", desc: "上海老洋房 / 网红门店打卡", count: 11 },
      ],
      examples: [
        { title: "☕ 20 块的精品咖啡也太香了", suspicion: 86, reason: "性价比标题模板 + 9 图打卡" },
      ],
    },
    perspectives: [
      { tag: "咖啡党", ratio: 26, sentiment: "正面", sentimentScore: 78, summary: "豆子品质对得起 20 元价位，比星巴克 / 瑞幸更接近精品", quotes: ["拿铁比星巴克好喝", "燕麦拿铁是日常"] },
      { tag: "性价比党", ratio: 32, sentiment: "正面", sentimentScore: 82, summary: "20 元一杯 + 自带杯 -5，工作日早咖通勤必备", quotes: ["每天自带杯一杯 15", "比瑞幸便宜质量好"] },
      { tag: "门店党", ratio: 14, sentiment: "中性", sentimentScore: 52, summary: "门店通常窄小、座位极少，不适合堂食 / 办公", quotes: ["只能站着喝", "买完就走的逻辑"] },
      { tag: "服务党", ratio: 16, sentiment: "负面", sentimentScore: 35, summary: "店员高压 + 服务争议事件多发，态度参差", quotes: ["店员看起来很累", "之前的店员泼咖啡事件没忘"] },
      { tag: "尝鲜党", ratio: 12, sentiment: "中性偏正", sentimentScore: 60, summary: "联名款 / 桂花拿铁等季节限定值得一试，但常规款选项少", quotes: ["桂花拿铁香疯了", "菜单很久没更新"] },
    ],
    verdict: {
      score: 78,
      fitFor: ["日常通勤咖啡党 (20 元价位)", "自带杯 / 想省 5 块的", "上海 / 一线城市 (门店密度高)"],
      avoid: ["想坐下办公 / 谈事", "讨厌排队 / 等待 5+ 分钟", "对服务体验要求高的人"],
    },
    priceHistory: null,
    alternatives: [
      { name: "瑞幸咖啡", brand: "Luckin", price: 13, match: 76, diff: "更便宜 + 门店更多，但豆子稍弱" },
      { name: "M Stand", brand: "M Stand", price: 32, match: 71, diff: "更高端 + 大店空间，价格翻倍" },
      { name: "Seesaw", brand: "Seesaw", price: 28, match: 74, diff: "创意咖啡为主，门店有座位" },
    ],
  },

  "茶颜悦色": {
    id: "chayan", name: "茶颜悦色 (长沙总店)", brand: "茶颜悦色", category: "奶茶 · 区域品牌",
    price: 18, priceUnit: "一杯均价", cover: "🍵",
    keywords: ["茶颜悦色", "长沙", "奶茶", "幽兰拿铁"],
    notes: { total: 4521, analyzed: 100, avgLikes: 342, avgComments: 67 },
    ads: {
      detected: 24, total: 100, confidence: 87,
      signals: [
        { type: "旅游打卡模板", desc: "「来长沙必喝」「打卡 5 杯」", count: 21 },
        { type: "排队炫耀", desc: "「排了 3 小时但值得」", count: 17 },
        { type: "九宫格摆拍", desc: "5-10 杯一字排开的标准摆拍", count: 19 },
        { type: "周边带货", desc: "「杯子超好看」「随便买周边」", count: 13 },
      ],
      examples: [
        { title: "🍵 长沙旅游打卡了 5 杯茶颜", suspicion: 91, reason: "旅游打卡模板 + 一次性买 5 杯炫耀" },
      ],
    },
    perspectives: [
      { tag: "奶茶党", ratio: 28, sentiment: "正面", sentimentScore: 78, summary: "幽兰拿铁 / 声声乌龙 / 桂花弄是真的好喝，茶基扎实", quotes: ["幽兰拿铁是奶茶天花板", "桂花弄秋天必喝"] },
      { tag: "性价比党", ratio: 18, sentiment: "正面", sentimentScore: 82, summary: "18 元在新茶饮里算合理，比喜茶 / 奈雪便宜 1/3", quotes: ["18 块的喜茶质量", "本地连锁的诚意"] },
      { tag: "排队党", ratio: 26, sentiment: "负面", sentimentScore: 30, summary: "长沙总店排队 2-4 小时是常态，黄牛代购 +50 元起步", quotes: ["排了 3 小时喝到了眼泪", "黄牛比奶茶贵"] },
      { tag: "外地党", ratio: 16, sentiment: "中性偏负", sentimentScore: 48, summary: "出长沙后体验下滑：武汉店稳定但深圳上海店常断货", quotes: ["深圳店天天断货", "还是长沙本地最稳"] },
      { tag: "营销党", ratio: 12, sentiment: "负面", sentimentScore: 38, summary: "故宫风包装 + 「不开放加盟」反向饥饿营销，被指过度种草", quotes: ["营销做得太满了", "杯子包装确实美"] },
    ],
    verdict: {
      score: 74,
      fitFor: ["长沙本地人 / 长期出差长沙", "新茶饮爱好者，不在意排队", "买周边 / 送礼"],
      avoid: ["短途旅客 (不愿排 2h+)", "外地党 (深圳上海店体验差)", "讨厌饥饿营销的人"],
    },
    priceHistory: null,
    alternatives: [
      { name: "霸王茶姬", brand: "霸王茶姬", price: 17, match: 84, diff: "全国连锁不用排队，伯牙绝弦同样出彩" },
      { name: "喜茶 / 奈雪", brand: "新茶饮", price: 28, match: 71, diff: "价位更高 + 产品更花哨" },
      { name: "蜜雪冰城", brand: "蜜雪冰城", price: 6, match: 52, diff: "1/3 价格 + 高甜度，路边随便买" },
    ],
  },

  "和府捞面": {
    id: "hefu", name: "和府捞面", brand: "和府", category: "中式快餐 · 面食",
    price: 48, priceUnit: "人均",  cover: "🍜",
    keywords: ["面食", "中式快餐", "高端面", "和府"],
    notes: { total: 1832, analyzed: 100, avgLikes: 124, avgComments: 28 },
    ads: {
      detected: 18, total: 100, confidence: 80,
      signals: [
        { type: "探店模板", desc: "「书房里吃面」高频出现", count: 13 },
        { type: "话术模板", desc: "「高端面」「精致中餐」标签滥用", count: 15 },
        { type: "九宫格摆盘", desc: "刻意书法 + 餐具特写", count: 12 },
        { type: "代金券引流", desc: "「美团 88 折」「会员日 9 折」", count: 9 },
      ],
      examples: [
        { title: "📚 在书房里吃一碗 50 块的面", suspicion: 84, reason: "概念模板 + 美团代金券引流" },
      ],
    },
    perspectives: [
      { tag: "口味党", ratio: 22, sentiment: "中性偏负", sentimentScore: 48, summary: "汤底中规中矩，面条普通，远没有 48 元的惊艳感", quotes: ["味道比味千一品还差点", "汤是料包味"] },
      { tag: "价格党", ratio: 32, sentiment: "负面", sentimentScore: 28, summary: "48-58 元在快餐面里属于天花板，反而不如沙县 / 兰州拉面+10 块", quotes: ["50 块吃一碗速冻面感觉", "性价比拉胯"] },
      { tag: "环境党", ratio: 18, sentiment: "正面", sentimentScore: 76, summary: "门店装修和「书房」概念是核心卖点，购物中心吃饭首选之一", quotes: ["写字楼下吃饭就它合适", "环境比真功夫好太多"] },
      { tag: "速食党", ratio: 14, sentiment: "中性", sentimentScore: 58, summary: "出餐快、品质稳定 (因为是料包)，适合赶时间", quotes: ["10 分钟内能吃完", "工作日午餐合适"] },
      { tag: "健康党", ratio: 14, sentiment: "中性偏正", sentimentScore: 62, summary: "汤头钠含量明显较低，主打「养生」概念，适合轻食党", quotes: ["确实不咸", "比兰州拉面健康"] },
    ],
    verdict: {
      score: 56,
      fitFor: ["写字楼快餐 (环境 + 速度)", "购物中心吃饭首选场景", "美团 8 折以下 (¥40 内)"],
      avoid: ["纯口味党 / 性价比党", "周末和家人聚餐 (没仪式感)", "原价吃 (¥48-58 体验不值)"],
    },
    priceHistory: null,
    alternatives: [
      { name: "陈香贵 / 马记永", brand: "新派兰州拉面", price: 32, match: 84, diff: "同样环境优秀，价格 7 折 + 现拉面" },
      { name: "李先生牛肉面", brand: "李先生", price: 28, match: 72, diff: "更传统稳定，半价位" },
      { name: "永和大王 / 真功夫", brand: "中式快餐", price: 25, match: 65, diff: "1/2 价格做基础需求" },
    ],
  },

  "桂满陇": {
    id: "guimanlong", name: "桂满陇 · 江南菜", brand: "桂满陇", category: "正餐 · 江浙菜",
    price: 128, priceUnit: "人均", cover: "🍱",
    keywords: ["江浙菜", "西湖醋鱼", "网红餐厅", "购物中心"],
    notes: { total: 2143, analyzed: 100, avgLikes: 187, avgComments: 38 },
    ads: {
      detected: 23, total: 100, confidence: 86,
      signals: [
        { type: "环境营销", desc: "「江南水乡」「青砖白墙」高频出现", count: 19 },
        { type: "九宫格摆盘", desc: "西湖醋鱼 / 龙井虾仁经典菜九宫格", count: 17 },
        { type: "话术模板", desc: "「人均 100 出头的精致江浙菜」", count: 14 },
        { type: "代金券引流", desc: "「大众点评 5 折」「美团团购」", count: 12 },
      ],
      examples: [
        { title: "🌸 江南水乡风装修，每道菜都像艺术品", suspicion: 89, reason: "环境营销模板 + 滤镜过重" },
      ],
    },
    perspectives: [
      { tag: "环境党", ratio: 30, sentiment: "正面", sentimentScore: 88, summary: "门店是核心 USP：江南水乡 / 包间 / 拍照都是顶级", quotes: ["拍照真的好出片", "约会首选"] },
      { tag: "口味党", ratio: 22, sentiment: "中性偏负", sentimentScore: 45, summary: "网红化中式预制菜的代表，本地江浙人吐槽多", quotes: ["西湖醋鱼太甜了", "蟹粉是冷冻的"] },
      { tag: "性价比党", ratio: 18, sentiment: "中性", sentimentScore: 55, summary: "原价人均 130+ 偏高，但点评 5 折后可接受", quotes: ["团购 8 折以下值", "原价不如去本地老店"] },
      { tag: "本地党", ratio: 14, sentiment: "负面", sentimentScore: 32, summary: "杭州 / 上海本地人普遍认为是「江浙菜的迪士尼版」", quotes: ["本地人不会去", "甜得离谱"] },
      { tag: "约会党", ratio: 16, sentiment: "正面", sentimentScore: 80, summary: "环境 + 包间 + 仪式感是约会的稳妥选择，朋友圈出片好", quotes: ["约会闭眼选", "朋友圈点赞神器"] },
    ],
    verdict: {
      score: 65,
      fitFor: ["约会 / 拍照 / 朋友圈党", "对江浙菜没本地审美包袱", "团购 / 大众点评 8 折以下"],
      avoid: ["江浙本地人 / 口味党", "原价吃 (¥130+ 体验不值)", "想要传统口味的人"],
    },
    priceHistory: null,
    alternatives: [
      { name: "绿茶餐厅", brand: "绿茶", price: 88, match: 82, diff: "同款江浙菜网红连锁，价位 7 折" },
      { name: "新荣记", brand: "新荣记", price: 480, match: 86, diff: "正宗台州菜 + 米其林品质，价格翻倍" },
      { name: "本帮老饭店", brand: "上海本帮菜", price: 108, match: 74, diff: "本地老店，口味地道" },
    ],
  },
};

// ===================== 全部模式映射 =====================
const ALL_PRODUCTS = { ...PRODUCTS, ...FINANCE_PRODUCTS, ...ENTERTAINMENT_PRODUCTS, ...FOOD_PRODUCTS };
const PRODUCT_KEYS = Object.keys(PRODUCTS);
const FINANCE_KEYS = Object.keys(FINANCE_PRODUCTS);
const ENTERTAINMENT_KEYS = Object.keys(ENTERTAINMENT_PRODUCTS);
const FOOD_KEYS = Object.keys(FOOD_PRODUCTS);

// ===================== Mode 配置 =====================
const MODE_CONFIG = {
  consumer: {
    label: "消费品决策",
    icon: "💄",
    sub: "美妆 / 数码 / 服饰",
    keys: PRODUCT_KEYS,
    placeholder: "输入商品名，比如「兰蔻小黑瓶」「lululemon瑜伽裤」",
    decisionVerb: "买",
    fitTitle: "适合谁",
    avoidTitle: "避雷点",
    altTitle: "同价位 / 同需求替代",
    pricePanel: true,
    adTitle: "软广雷达",
    adLabel: "疑似软广笔记",
    actionLabel: "加入价格监控",
    emojiMap: {
      "美妆 · 精华": "🧪", "美妆 · 精华水": "💎", "美妆 · 防晒": "☀️",
      "数码 · 美发": "💨", "运动 · 服饰": "🧘‍♀️",
    },
  },
  finance: {
    label: "理财产品决策",
    icon: "💰",
    sub: "Red Finance · 未来形态",
    keys: FINANCE_KEYS,
    placeholder: "输入理财产品名，比如「易方达蓝筹精选」「平安福」",
    decisionVerb: "买",
    fitTitle: "适合谁",
    avoidTitle: "避雷点",
    altTitle: "同风险等级 / 同策略替代",
    pricePanel: false,
    adTitle: "营销雷达",
    adLabel: "疑似营销内容",
    actionLabel: "加入持仓监控",
    emojiMap: {},
  },
  entertainment: {
    label: "文娱内容决策",
    icon: "🎬",
    sub: "影视 / 综艺 / 游戏 / 书",
    keys: ENTERTAINMENT_KEYS,
    placeholder: "输入作品名，比如「繁花」「黑神话悟空」「三体」",
    decisionVerb: "看",
    fitTitle: "适合谁看",
    avoidTitle: "劝退点",
    altTitle: "同类型推荐",
    pricePanel: false,
    adTitle: "通稿雷达",
    adLabel: "疑似营销号 / 水军笔记",
    actionLabel: "加入想看清单",
    emojiMap: {
      "电视剧": "🎬", "电影": "🎞️", "综艺 · 真人秀": "📺",
      "游戏 · 单机": "🎮", "书 · 科幻": "📚",
    },
  },
  food: {
    label: "餐饮决策",
    icon: "🍜",
    sub: "餐厅 / 咖啡 / 奶茶 / 外卖",
    keys: FOOD_KEYS,
    placeholder: "输入店名，比如「海底捞」「Manner咖啡」「茶颜悦色」",
    decisionVerb: "去",
    fitTitle: "适合什么人去",
    avoidTitle: "踩雷点",
    altTitle: "同位置 / 同价位替代",
    pricePanel: false,
    adTitle: "探店雷达",
    adLabel: "疑似探店推广笔记",
    actionLabel: "加入想吃清单",
    emojiMap: {
      "火锅 · 连锁": "🍲", "咖啡 · 连锁": "☕", "奶茶 · 区域品牌": "🍵",
      "中式快餐 · 面食": "🍜", "正餐 · 江浙菜": "🍱",
    },
  },
};

// ===================== 智能 Fallback 引擎 v3 =====================
// 核心思路：先用关键词匹配定位输入到底是什么细分子品类，
//          再用该子品类的真实视角/特征/替代品/适合人群。
//          不再用「美妆通用模板」套所有输入。

function strHash(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = (h * 16777619) >>> 0;
  }
  return h;
}
function makePRNG(seed) {
  let s = seed >>> 0;
  return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 0x100000000; };
}
function pick(arr, rnd) { return arr[Math.floor(rnd() * arr.length)]; }
function pickN(arr, n, rnd) {
  const c = [...arr]; const r = [];
  for (let i = 0; i < n && c.length > 0; i++) r.push(c.splice(Math.floor(rnd() * c.length), 1)[0]);
  return r;
}

// ===================== 细分品类知识库 =====================
// 每个子品类自带：触发关键词 + 类目标签 + emoji + 视角池 + 软广特征 + 替代品基底 + 适合/避雷模板 + 价格区间
const SUBCATEGORIES = {
  // ---------- 消费品 ----------
  skincare: {
    triggers: ["精华", "面霜", "面膜", "爽肤", "乳液", "护肤", "肌底", "原液", "小黑瓶", "小棕瓶", "神仙水", "雅诗兰黛", "兰蔻", "sk-ii", "sk2", "海蓝之谜", "雪花秀", "asmara", "玻尿酸", "视黄醇", "烟酰胺"],
    category: "美妆 · 护肤", emoji: "🧪", priceRange: [180, 2200], priceUnit: "标准装",
    perspectives: [
      { tag: "成分党", topic: "活性成分浓度" }, { tag: "敏感肌", topic: "刺激度 / 屏障" },
      { tag: "油痘肌", topic: "控油不闷痘" }, { tag: "干皮党", topic: "保湿持续力" },
      { tag: "抗老党", topic: "细纹 / 紧致" }, { tag: "性价比党", topic: "活动价 / 容量" },
    ],
    signals: [
      { type: "成分话术滥用", desc: "把「同款成分」「平替大牌」当万能种草点" },
      { type: "敏感肌测评模板", desc: "「敏感肌都能用」「0 刺激」无证据" },
      { type: "九宫格水印", desc: "图片含专柜小票 / 品牌活动 logo" },
      { type: "评论控评", desc: "前 3 条评论账号 30 天点赞同类 ≥10 篇" },
    ],
    fitFor: q => [`已建立基础保湿步骤，需要加一个功效精华`, `认可${q}的核心功效宣称`, `预算允许、能跟上活动节奏`],
    avoid: q => [`敏感肌 / 屏障受损期`, `指望「单瓶逆龄」的人`, `预算紧、不会蹲免税 / 双 11 的人`],
    altSeeds: [
      { name: "珂润润浸保湿", brand: "Curél", priceMul: 0.22, diff: "敏感肌打底安全牌，无功效宣称" },
      { name: "薇诺娜舒敏精华", brand: "Winona", priceMul: 0.45, diff: "屏障期国货优选，刺激报告少" },
      { name: "修丽可植萃精华液", brand: "SkinCeuticals", priceMul: 0.95, diff: "舒缓修红更强，敏感肌可耐受" },
    ],
  },
  makeup: {
    triggers: ["口红", "粉底", "眼影", "睫毛", "眉笔", "腮红", "高光", "唇釉", "气垫", "ysl", "dior彩妆", "mac", "纪梵希", "彩妆"],
    category: "美妆 · 彩妆", emoji: "💄", priceRange: [80, 800], priceUnit: "标准装",
    perspectives: [
      { tag: "色号党", topic: "显白 / 黄黑皮适配" }, { tag: "持久度党", topic: "脱色 / 沾杯" },
      { tag: "质地党", topic: "雾面 / 镜面 / 水润" }, { tag: "性价比党", topic: "活动价 / 平替" },
      { tag: "送礼党", topic: "包装 / 仪式感" }, { tag: "敏感肌党", topic: "刺激 / 拔干" },
    ],
    signals: [
      { type: "色号种草模板", desc: "「黄黑皮显白」「死亡芭比粉」滥用" },
      { type: "明星色号", desc: "强行关联明星 / 偶像剧同款" },
      { type: "九宫格试色", desc: "标准化手臂试色九宫格" },
      { type: "评论控评", desc: "前 3 条评论账号关联度异常" },
    ],
    fitFor: q => [`想找一支日常 + 通勤兼顾的`, `认可${q}的色号体系`, `愿意为包装 / 仪式感买单`],
    avoid: q => [`只追求性价比、能买平替的人`, `唇部 / 眼部敏感人群`, `非彩妆爱好者送礼对象`],
    altSeeds: [
      { name: "完美日记小细跟唇釉", brand: "Perfect Diary", priceMul: 0.18, diff: "国货平替，色号覆盖广" },
      { name: "花知晓彩妆系列", brand: "Flortte", priceMul: 0.32, diff: "包装出片，年轻向价格" },
      { name: "MAC 子弹头", brand: "MAC", priceMul: 0.65, diff: "经典专业彩妆，色号库最全" },
    ],
  },
  sunscreen: {
    triggers: ["防晒", "白胖子", "蓝胖子", "安耐晒", "怡丽丝尔", "妮维雅防晒", "理肤泉防晒", "spf"],
    category: "美妆 · 防晒", emoji: "☀️", priceRange: [80, 360], priceUnit: "50ml",
    perspectives: [
      { tag: "肤感党", topic: "厚重 / 假白 / 油腻" }, { tag: "敏感肌党", topic: "化学防晒刺激" },
      { tag: "防晒力党", topic: "SPF/PA 实测" }, { tag: "防水党", topic: "户外 / 出汗" },
      { tag: "性价比党", topic: "容量 / 活动价" }, { tag: "通勤党", topic: "妆前打底" },
    ],
    signals: [
      { type: "假白党争议", desc: "「白胖子」「黑胖子」标题党" },
      { type: "成分焦虑", desc: "「化学防晒致敏」「物理才安全」绝对化" },
      { type: "户外测评", desc: "标准化海边 / 雪山场景照" },
      { type: "代购引流", desc: "「日上 / 中免在订单」私信带货" },
    ],
    fitFor: q => [`通勤 + 周末户外混合场景`, `认可${q}的肤感取向`, `愿意每天足量涂抹的人`],
    avoid: q => [`一年只去海边 2 次的人 (浪费高倍防晒)`, `极度敏感肌 (优先纯物理)`, `想一瓶通杀所有场景的人`],
    altSeeds: [
      { name: "怡丽丝尔金管", brand: "ELIXIR", priceMul: 0.85, diff: "妆前感最好，干皮通勤优选" },
      { name: "ALLIE 矿物水凝", brand: "ALLIE", priceMul: 0.7, diff: "纯物理，敏感肌孕妇可用" },
      { name: "蜜丝婷小黄帽", brand: "Mistine", priceMul: 0.25, diff: "性价比之王，户外暴汗扛打" },
    ],
  },
  haircare: {
    triggers: ["洗发水", "护发素", "发膜", "卡诗", "馥绿德雅", "潘婷", "施华蔻", "海飞丝", "去屑", "防脱"],
    category: "美妆 · 洗护", emoji: "🧴", priceRange: [60, 480], priceUnit: "500ml",
    perspectives: [
      { tag: "去屑党", topic: "止痒控屑" }, { tag: "防脱党", topic: "毛囊 / 头皮" },
      { tag: "蓬松党", topic: "扁塌 / 油腻" }, { tag: "顺滑党", topic: "毛躁 / 染烫修护" },
      { tag: "香味党", topic: "持久度 / 沙龙感" }, { tag: "性价比党", topic: "容量 / 活动价" },
    ],
    signals: [
      { type: "防脱焦虑", desc: "「30 天告别脱发」「植发不如它」" },
      { type: "沙龙营销", desc: "「沙龙级修护」「专业线」无证据" },
      { type: "九宫格洗后", desc: "标准化披散 / 反光大片" },
      { type: "代理人引流", desc: "「私聊定制」「头皮问诊」" },
    ],
    fitFor: q => [`长期受脱发 / 头屑困扰`, `认可${q}的核心修护取向`, `愿意配合洗护两步流程`],
    avoid: q => [`头皮无明显问题、对香味不挑剔的人`, `指望「一瓶逆袭浓密」的人`, `油性头皮 (浓厚款会越洗越油)`],
    altSeeds: [
      { name: "海飞丝丝源复活", brand: "Head & Shoulders", priceMul: 0.25, diff: "去屑大宗品，性价比" },
      { name: "馥绿德雅紫精华", brand: "Rene Furterer", priceMul: 1.2, diff: "头皮油脂调理高端代表" },
      { name: "卡诗黑钻钥源", brand: "Kérastase", priceMul: 1.4, diff: "防脱护理沙龙线标杆" },
    ],
  },
  digital: {
    triggers: ["手机", "iphone", "华为", "小米", "vivo", "oppo", "三星", "笔记本", "macbook", "联想", "thinkpad", "ipad", "平板", "耳机", "airpods", "索尼", "音箱", "相机", "尼康", "佳能", "索尼相机", "switch", "ps5"],
    category: "数码 · 3C", emoji: "📱", priceRange: [800, 12000], priceUnit: "标准款",
    perspectives: [
      { tag: "性能党", topic: "处理器 / 续航 / 跑分" }, { tag: "拍照党", topic: "成像 / 视频" },
      { tag: "性价比党", topic: "首发价 / 二手价" }, { tag: "外观党", topic: "颜值 / 手感" },
      { tag: "生态党", topic: "系统 / 互联" }, { tag: "续航党", topic: "电池 / 散热" },
    ],
    signals: [
      { type: "跑分截图", desc: "「安兔兔 XX 万」拼跑分忽略真实体验" },
      { type: "首发种草", desc: "发售日异常互动激增 + 0 槽点" },
      { type: "对比测评水军", desc: "刻意贬低同价位竞品" },
      { type: "代理人引流", desc: "「私信渠道价」「内部员工」" },
    ],
    fitFor: q => [`明确知道自己看重的核心需求 (性能/拍照/续航)`, `认可${q}所在品牌生态`, `预算到位，不追求极致性价比`],
    avoid: q => [`只看跑分不在意手感的小白`, `半年内一定会换新机的纯尝鲜党`, `刚需轻办公 (不需要旗舰)`],
    altSeeds: [
      { name: "上一代旗舰", brand: "同品牌", priceMul: 0.62, diff: "去年旗舰降价，体验差 10%" },
      { name: "同价位竞品", brand: "竞争对手", priceMul: 0.95, diff: "同价位另一家，长板不同" },
      { name: "中端替代款", brand: "同品牌", priceMul: 0.45, diff: "够用就好，性价比线" },
    ],
  },
  appliance: {
    triggers: ["吹风机", "戴森", "卷发棒", "直发器", "电动牙刷", "牙刷", "扫地机器人", "扫地机", "洗碗机", "破壁机", "空气炸锅", "空气净化器", "加湿器", "电饭煲", "电磁炉", "电烤箱", "微波炉", "咖啡机", "美容仪"],
    category: "数码 · 家电", emoji: "🔌", priceRange: [200, 4000], priceUnit: "标准款",
    perspectives: [
      { tag: "效果党", topic: "实际清洁 / 美护效果" }, { tag: "噪音党", topic: "工作分贝" },
      { tag: "维护党", topic: "耗材 / 清洁难度" }, { tag: "颜值党", topic: "出片 / 摆台" },
      { tag: "性价比党", topic: "活动价 / 国产替代" }, { tag: "耐用党", topic: "使用 1 年后状态" },
    ],
    signals: [
      { type: "网红同款", desc: "「博主同款」「明星家里都用」" },
      { type: "测评模板", desc: "标准化使用前后对比九宫格" },
      { type: "降噪营销", desc: "「图书馆级静音」无实测分贝" },
      { type: "海淘 / 代购引流", desc: "「日本直送」「免税 7 折」" },
    ],
    fitFor: q => [`长期使用 (每周 ≥3 次)`, `认可${q}的核心使用场景`, `预算允许 + 愿意为颜值 / 静音溢价`],
    avoid: q => [`一年用 5 次的尝鲜党`, `小户型 / 收纳紧张`, `已有同类产品且未坏的家庭`],
    altSeeds: [
      { name: "徕芬 / 追觅同款", brand: "国货", priceMul: 0.25, diff: "1/4 价格做到 80% 体验" },
      { name: "松下 / 飞利浦同款", brand: "日系", priceMul: 0.55, diff: "稳健日系，耐用度好" },
      { name: "升级旗舰款", brand: "同品牌", priceMul: 1.35, diff: "升级款，体验差距明显" },
    ],
  },
  sportswear: {
    triggers: ["瑜伽裤", "lululemon", "lulu", "运动裤", "跑步鞋", "跑鞋", "李宁", "安踏", "鸿星尔克", "nike", "耐克", "adidas", "阿迪", "asics", "亚瑟士", "hoka", "on", "soar", "始祖鸟", "arcteryx", "冲锋衣", "羽绒服", "运动文胸", "速干"],
    category: "运动 · 服饰", emoji: "🧘‍♀️", priceRange: [200, 2500], priceUnit: "标准款",
    perspectives: [
      { tag: "版型党", topic: "包臀 / 显瘦 / 腰线" }, { tag: "材质党", topic: "面料 / 速干 / 弹力" },
      { tag: "运动场景党", topic: "跑步 / 普拉提 / 通勤" }, { tag: "性价比党", topic: "国货 / 平替" },
      { tag: "穿搭党", topic: "athleisure / 通勤友好" }, { tag: "耐用党", topic: "起球 / 洗后变形" },
    ],
    signals: [
      { type: "明星同款", desc: "「Gigi 同款」「明星私服」滥用" },
      { type: "身材焦虑", desc: "「显瘦 5 斤」「白幼瘦标配」" },
      { type: "九宫格穿搭", desc: "标准化镜面自拍九宫格" },
      { type: "代购引流", desc: "「海外发货」「奥莱 / 香港价」" },
    ],
    fitFor: q => [`每周运动 ≥2 次的人`, `认可${q}的版型 / 面料取向`, `愿意为版型 / 品牌溢价`],
    avoid: q => [`只在家穿懒人裤、零运动的人`, `极端身材外 (XXS / XXL 码段难找)`, `预算紧张能接受国货平替的人`],
    altSeeds: [
      { name: "MAIA ACTIVE 暖芯裤", brand: "MAIA ACTIVE", priceMul: 0.55, diff: "国货品牌，版型瞄准亚洲女性" },
      { name: "粒子狂热同款", brand: "Particle Fever", priceMul: 0.65, diff: "高端国货运动品牌" },
      { name: "迪卡侬同位", brand: "Decathlon", priceMul: 0.18, diff: "极致性价比，入门款够用" },
    ],
  },
  bag_fashion: {
    triggers: ["包", "包包", "lv", "gucci", "chanel", "香奈儿", "古驰", "prada", "普拉达", "celine", "bv", "stelle", "telfar", "鞋", "高跟鞋", "靴子", "外套", "大衣", "卫衣", "牛仔裤", "uniqlo", "优衣库", "zara"],
    category: "时尚 · 服饰箱包", emoji: "👜", priceRange: [200, 18000], priceUnit: "标准款",
    perspectives: [
      { tag: "实用党", topic: "容量 / 日常通勤" }, { tag: "时尚党", topic: "潮流寿命 / 搭配" },
      { tag: "保值党", topic: "二手价 / 涨价" }, { tag: "性价比党", topic: "平替 / 奥莱" },
      { tag: "做工党", topic: "材质 / 耐用" }, { tag: "logo 党", topic: "辨识度 / 装腔" },
    ],
    signals: [
      { type: "OOTD 模板", desc: "标准化镜面 OOTD 九宫格" },
      { type: "保值营销", desc: "「越买越值」「永不过时」" },
      { type: "代购引流", desc: "「海外发货 / 退税价」" },
      { type: "明星私服", desc: "强行关联明星生图" },
    ],
    fitFor: q => [`认可${q}的设计语言`, `预算到位 + 接受非保值溢价`, `日常通勤会真的背 / 穿`],
    avoid: q => [`只为一次拍照 / 一次场合买`, `预算紧张但勉强冲奢品的人`, `已有 3+ 同类色款的人`],
    altSeeds: [
      { name: "中古二手同款", brand: "中古市场", priceMul: 0.55, diff: "二手保值款，预算友好" },
      { name: "Polène / Songmont 设计款", brand: "小众设计师", priceMul: 0.35, diff: "设计感强，价格友好" },
      { name: "优衣库同款搭配", brand: "UNIQLO", priceMul: 0.05, diff: "基础款替代，先试搭配再升级" },
    ],
  },

  // ---------- 文娱 ----------
  movie: {
    triggers: ["电影", "movie", "影院", "导演", "诺兰", "周星驰", "宫崎骏", "陈凯歌", "贾樟柯", "毕赣", "奥本海默", "流浪地球", "封神", "悲情城市", "你好李焕英"],
    category: "电影", emoji: "🎞️", priceRange: [40, 150], priceUnit: "影院票价",
    perspectives: [
      { tag: "剧情党", topic: "叙事 / 节奏" }, { tag: "演技党", topic: "表演水准" },
      { tag: "视听党", topic: "画面 / 音乐" }, { tag: "深度党", topic: "立意 / 隐喻" },
      { tag: "情绪党", topic: "代入感 / 共鸣" }, { tag: "影院党", topic: "IMAX / 大银幕加分" },
    ],
    signals: [
      { type: "片方营销", desc: "首映日异常互动激增 + 雷同评论" },
      { type: "营销号通稿", desc: "「年度神作」「不看后悔」" },
      { type: "粉丝控评", desc: "明星超话引流 + 二极管引战" },
      { type: "豆瓣冲分", desc: "前 24h 评分异动" },
    ],
    fitFor: q => [`同题材爱好者`, `能接受${q}的叙事节奏`, `愿意去影院 / IMAX 看大银幕版`],
    avoid: q => [`只看爽片 / 商业大片的人`, `对该题材完全无感`, `带小孩 / 长辈观影的合家欢需求`],
    altSeeds: [
      { name: "同导演前作", brand: "同导演", priceMul: 0, diff: "导演风格延续，可作前置" },
      { name: "同题材代表作", brand: "同题材", priceMul: 0, diff: "同主题更易入口的版本" },
      { name: "近期同档期热门", brand: "同档期", priceMul: 1, diff: "院线同期可比片" },
    ],
  },
  tvshow: {
    triggers: ["电视剧", "剧", "繁花", "甄嬛传", "庆余年", "三体剧", "鬿龙诀", "漫长的季节", "山海情", "狂飙", "藏海传", "美剧", "韩剧", "权游", "权力的游戏", "弊端", "斯通", "三十而已"],
    category: "电视剧", emoji: "🎬", priceRange: [0, 30], priceUnit: "VIP 看完整剧",
    perspectives: [
      { tag: "剧情党", topic: "主线 / 节奏 / 烂尾" }, { tag: "演技党", topic: "主演 / 配角" },
      { tag: "原著党", topic: "改编忠实度" }, { tag: "美学党", topic: "镜头 / 服化道" },
      { tag: "三观党", topic: "价值导向" }, { tag: "节奏党", topic: "拖沓 / 倍速友好" },
    ],
    signals: [
      { type: "片方水军", desc: "首播日异常互动激增 + 控评" },
      { type: "粉丝控评", desc: "主演超话引流 + 二极管引战" },
      { type: "营销号通稿", desc: "「年度神剧」「封神」滥用" },
      { type: "卫视 / 平台联合营销", desc: "热搜联动 + 切片传播" },
    ],
    fitFor: q => [`同题材爱好者 (年代剧 / 悬疑 / 古装等)`, `能接受${q}的叙事节奏`, `主演粉丝 / 原著粉`],
    avoid: q => [`只看下饭剧 / 倍速党`, `对该题材完全无感`, `时间紧、无法追长剧 (30 集+)`],
    altSeeds: [
      { name: "同导演前作", brand: "同导演", priceMul: 0, diff: "导演风格延续，节奏更易入口" },
      { name: "同题材代表作", brand: "同题材", priceMul: 0, diff: "同主题里口碑更稳的" },
      { name: "海外同类型", brand: "海外", priceMul: 0, diff: "题材相近的美剧 / 韩剧" },
    ],
  },
  variety: {
    triggers: ["综艺", "再见爱人", "脱口秀", "脱口秀大会", "披荆斩棘", "乘风破浪", "向往的生活", "我是歌手", "声生不息", "奔跑吧", "极限挑战", "笑果", "明侦", "明星大侦探"],
    category: "综艺 · 真人秀", emoji: "📺", priceRange: [0, 30], priceUnit: "VIP 全季",
    perspectives: [
      { tag: "话题党", topic: "热搜话题 / 二创" }, { tag: "嘉宾党", topic: "主咖配咖表现" },
      { tag: "情感党", topic: "真情实感 / 剧本感" }, { tag: "笑点党", topic: "好笑 / 尴尬" },
      { tag: "节奏党", topic: "剪辑 / 拖沓" }, { tag: "三观党", topic: "价值导向 / 引战" },
    ],
    signals: [
      { type: "热搜买营销", desc: "话题预埋 + 切片病毒传播" },
      { type: "粉丝控评", desc: "嘉宾粉丝引战引流" },
      { type: "营销号通稿", desc: "「全员高情商」「封神瞬间」" },
      { type: "片方剧本号", desc: "拍摄前已铺好话题" },
    ],
    fitFor: q => [`同类型综艺老粉`, `能接受${q}的嘉宾阵容`, `愿意追每周更新节奏`],
    avoid: q => [`不喜欢真人秀剧本感的人`, `讨厌话题营销 / 二极管引战`, `时间紧、只看精华切片就够`],
    altSeeds: [
      { name: "同制作团队作品", brand: "同制作组", priceMul: 0, diff: "团队风格延续" },
      { name: "同主题前作", brand: "同主题", priceMul: 0, diff: "同主题里口碑更稳的" },
      { name: "海外原版", brand: "海外", priceMul: 0, diff: "国内综艺的原版蓝本" },
    ],
  },
  game: {
    triggers: ["游戏", "黑神话", "悟空", "原神", "崩坏", "塞尔达", "宝可梦", "宝梦", "马里奥", "只狼", "艾尔登法环", "elden ring", "黑暗之魂", "ps5 游戏", "steam", "switch游戏", "王者荣耀", "和平精英", "蛋仔派对", "我的世界", "明日方舟", "手游"],
    category: "游戏 · 单机 / 手游", emoji: "🎮", priceRange: [0, 380], priceUnit: "标准版",
    perspectives: [
      { tag: "剧情党", topic: "叙事 / 立意" }, { tag: "玩法党", topic: "战斗 / 系统设计" },
      { tag: "美术党", topic: "画面 / 风格" }, { tag: "硬件党", topic: "优化 / 帧率" },
      { tag: "氪金党", topic: "氪金深度 / 抽卡率" }, { tag: "时间党", topic: "通关时长 / 内容量" },
    ],
    signals: [
      { type: "首发种草", desc: "发售日异常互动激增 + 0 槽点" },
      { type: "厂商水军", desc: "雷同好评模板 + 短笔记" },
      { type: "玩家粉丝战", desc: "厂商粉丝集中引战" },
      { type: "代练 / 代刷引流", desc: "「评论区代练 / 帮抽」" },
    ],
    fitFor: q => [`同类型游戏老玩家`, `能接受${q}的难度 / 时长`, `认可该平台 / 厂商作品风格`],
    avoid: q => [`手残 / 不耐受高难度`, `时间碎片化、只能打 15 分钟一局`, `对氪金 / 抽卡反感`],
    altSeeds: [
      { name: "同厂商前作", brand: "同厂商", priceMul: 0.7, diff: "厂商风格延续" },
      { name: "同题材独立游戏", brand: "独立游戏", priceMul: 0.25, diff: "同类题材的小品级精品" },
      { name: "免费上手版", brand: "demo / 试玩", priceMul: 0, diff: "先打 demo 再决定要不要入" },
    ],
  },
  book: {
    triggers: ["书", "小说", "三体", "百年孤独", "活着", "余华", "刘慈欣", "村上春树", "毛姆", "马尔克斯", "鬼吹灯", "盗墓笔记", "金庸", "三联", "豆瓣高分", "kindle", "微信读书"],
    category: "书 · 小说 / 非虚构", emoji: "📚", priceRange: [25, 180], priceUnit: "纸质书",
    perspectives: [
      { tag: "深度党", topic: "立意 / 思想" }, { tag: "可读性党", topic: "节奏 / 翻译" },
      { tag: "文笔党", topic: "语言 / 风格" }, { tag: "时代党", topic: "历史 / 时代切口" },
      { tag: "学院派", topic: "学术 / 引证" }, { tag: "性价比党", topic: "电子版 / 二手" },
    ],
    signals: [
      { type: "书单营销", desc: "「年度必读」「人生 10 本书」" },
      { type: "豆瓣冲分", desc: "首发周内异常评分激增" },
      { type: "明星 / 顶流推荐", desc: "强行关联名人书单" },
      { type: "代购引流", desc: "「正版书友群」「精校电子版」" },
    ],
    fitFor: q => [`同题材爱好者`, `能接受${q}的节奏 / 翻译`, `愿意做笔记 / 重读的人`],
    avoid: q => [`想找通勤地铁爽文的人`, `对该题材完全无感`, `阅读量低、对长篇耐受度差`],
    altSeeds: [
      { name: "同作者代表作", brand: "同作者", priceMul: 0.9, diff: "作者前作，先入口" },
      { name: "同主题入门书", brand: "同主题", priceMul: 0.6, diff: "同主题更易读的版本" },
      { name: "微信读书电子版", brand: "电子版", priceMul: 0.05, diff: "先在微信读书读一两章" },
    ],
  },

  // ---------- 餐饮 ----------
  hotpot: {
    triggers: ["火锅", "海底捞", "巴奴", "凑凑", "蜀大侠", "小龙坎", "呷哺", "重庆火锅", "潮汕牛肉", "牛肉火锅"],
    category: "火锅 · 餐厅", emoji: "🍲", priceRange: [80, 250], priceUnit: "人均",
    perspectives: [
      { tag: "口味党", topic: "锅底 / 食材" }, { tag: "服务党", topic: "服务体验 / 等位" },
      { tag: "性价比党", topic: "人均 / 团购" }, { tag: "环境党", topic: "包间 / 卫生" },
      { tag: "排队党", topic: "等位时长" }, { tag: "聚餐党", topic: "适合家庭 / 朋友" },
    ],
    signals: [
      { type: "探店模板", desc: "「人均 XX 吃到扶墙出」" },
      { type: "服务煽情", desc: "「服务好到哭」「生日仪式感」" },
      { type: "九宫格菜品", desc: "标准化探店摆盘" },
      { type: "代金券引流", desc: "「评论区领券」「美团折扣」" },
    ],
    fitFor: q => [`家庭 / 朋友聚餐`, `认可${q}的锅底 / 食材取向`, `工作日中午 / 下午时段可去`],
    avoid: q => [`纯口味党追求性价比的`, `讨厌过度服务的`, `周末晚高峰 (排队 2h+)`],
    altSeeds: [
      { name: "巴奴毛肚火锅", brand: "巴奴", priceMul: 1.15, diff: "口味突出，毛肚 / 菌汤天花板" },
      { name: "凑凑火锅", brand: "凑凑", priceMul: 1.05, diff: "茶饮 + 火锅，环境年轻" },
      { name: "周边川味小馆", brand: "区域品牌", priceMul: 0.6, diff: "正宗川味，性价比高" },
    ],
  },
  cafe: {
    triggers: ["咖啡", "manner", "瑞幸", "luckin", "星巴克", "starbucks", "tims", "%arabica", "blue bottle", "蓝瓶", "seesaw", "fisheye", "美式", "拿铁", "dirty"],
    category: "咖啡 · 连锁 / 精品", emoji: "☕", priceRange: [10, 60], priceUnit: "单杯",
    perspectives: [
      { tag: "咖啡党", topic: "豆子 / 出品稳定" }, { tag: "通勤党", topic: "门店密度 / 速度" },
      { tag: "性价比党", topic: "单杯价 / 券" }, { tag: "氛围党", topic: "门店 / 出片" },
      { tag: "甜品党", topic: "搭配的食品" }, { tag: "社交党", topic: "约人 / 工作场地" },
    ],
    signals: [
      { type: "新品营销", desc: "限定季节饮品全网铺量" },
      { type: "九宫格出片", desc: "标准化杯托 / 杯套九宫格" },
      { type: "联名营销", desc: "IP 联名周边带货" },
      { type: "代金券引流", desc: "评论区券码裂变" },
    ],
    fitFor: q => [`每天通勤需要一杯的人`, `认可${q}的豆子 / 出品风格`, `愿意为门店 / 氛围溢价`],
    avoid: q => [`一年喝 3 次咖啡的人`, `对甜咖啡 / 糖耐受度低的人`, `想找安静工作场地 (热门店人挤人)`],
    altSeeds: [
      { name: "瑞幸 / 库迪同款", brand: "国产连锁", priceMul: 0.35, diff: "极致性价比，门店密度大" },
      { name: "%阿拉比卡 / 蓝瓶", brand: "精品咖啡", priceMul: 1.5, diff: "豆子更精品，氛围更出片" },
      { name: "周边社区独立咖啡馆", brand: "独立精品", priceMul: 0.85, diff: "本地咖啡师，出品个性化" },
    ],
  },
  milktea: {
    triggers: ["奶茶", "茶颜悦色", "喜茶", "奈雪", "蜜雪冰城", "茶百道", "古茗", "霸王茶姬", "霸王", "一点点", "coco", "都可", "茶叙"],
    category: "奶茶 · 茶饮", emoji: "🍵", priceRange: [5, 35], priceUnit: "单杯",
    perspectives: [
      { tag: "口味党", topic: "茶底 / 配料" }, { tag: "性价比党", topic: "单杯价 / 第二杯半价" },
      { tag: "出片党", topic: "杯子 / 联名设计" }, { tag: "排队党", topic: "等位 / 限购" },
      { tag: "健康党", topic: "糖度 / 添加剂" }, { tag: "甜品党", topic: "搭配小食" },
    ],
    signals: [
      { type: "限定营销", desc: "「区域限定」「城市限定」黄牛炒" },
      { type: "九宫格出片", desc: "杯托 / 杯套九宫格" },
      { type: "排队炫耀", desc: "「排了 X 小时但值得」" },
      { type: "代购引流", desc: "异地代购 / 黄牛跑腿" },
    ],
    fitFor: q => [`同价位品类爱好者`, `认可${q}的茶底 / 风格`, `愿意为限定 / 出片排队`],
    avoid: q => [`糖耐受度低 / 健身期人群`, `讨厌排队 / 限定饥饿营销`, `孩子日常喝 (高频糖摄入)`],
    altSeeds: [
      { name: "霸王茶姬 / 茶百道同价", brand: "新茶饮连锁", priceMul: 0.7, diff: "口味相近门店更多" },
      { name: "蜜雪冰城", brand: "蜜雪", priceMul: 0.18, diff: "极致性价比，孩子喝得起" },
      { name: "本地原叶茶饮", brand: "区域品牌", priceMul: 0.8, diff: "茶底更纯，糖度可调" },
    ],
  },
  noodle: {
    triggers: ["面", "面馆", "和府捞面", "兰州拉面", "牛肉面", "重庆小面", "热干面", "云吞面", "番茄面", "拌面"],
    category: "中式快餐 · 面食", emoji: "🍜", priceRange: [15, 80], priceUnit: "人均",
    perspectives: [
      { tag: "口味党", topic: "汤底 / 面条" }, { tag: "性价比党", topic: "人均 / 加面" },
      { tag: "服务党", topic: "上面速度 / 卫生" }, { tag: "环境党", topic: "装修 / 出片" },
      { tag: "正宗党", topic: "地道度" }, { tag: "外卖党", topic: "打包还原度" },
    ],
    signals: [
      { type: "探店模板", desc: "「藏在 XX 的神店」标题党" },
      { type: "国潮营销", desc: "强调装修 / IP 联名拍照" },
      { type: "九宫格摆盘", desc: "标准化探店摆盘" },
      { type: "代金券引流", desc: "美团 / 抖音团购券引流" },
    ],
    fitFor: q => [`午饭 / 加班晚餐刚需场景`, `认可${q}的口味取向`, `办公商圈附近就餐`],
    avoid: q => [`只接受地道老店的口味党`, `预算紧张吃饱优先 (高端面价位偏高)`, `想吃辣 / 浓汤 (清淡款不合)`],
    altSeeds: [
      { name: "周边夫妻面馆", brand: "本地老店", priceMul: 0.55, diff: "地道老味道，半价享受" },
      { name: "遇见小面 / 五爷拌面", brand: "连锁面馆", priceMul: 0.85, diff: "门店多更便利，体验稳" },
      { name: "兰州 / 重庆地道馆", brand: "地域名店", priceMul: 0.7, diff: "原产地正宗派" },
    ],
  },
  zhongcan: {
    triggers: ["饭店", "餐厅", "中餐", "粤菜", "川菜", "湘菜", "本帮菜", "江浙菜", "桂满陇", "外婆家", "绿茶", "新荣记", "西贝", "云海肴", "莆田", "鼎泰丰"],
    category: "正餐 · 中餐", emoji: "🍱", priceRange: [80, 600], priceUnit: "人均",
    perspectives: [
      { tag: "口味党", topic: "招牌菜 / 锅气" }, { tag: "环境党", topic: "装修 / 出片" },
      { tag: "服务党", topic: "服务标准 / 等位" }, { tag: "性价比党", topic: "人均 / 套餐" },
      { tag: "约会党", topic: "氛围适合度" }, { tag: "聚餐党", topic: "包间 / 桌数" },
    ],
    signals: [
      { type: "探店模板", desc: "「人均 XX 神仙国风餐厅」" },
      { type: "九宫格菜品", desc: "标准化招牌菜九宫格" },
      { type: "环境营销", desc: "刻意强调装修 / 拍照出片" },
      { type: "代金券引流", desc: "评论区领券 / 抖音团购" },
    ],
    fitFor: q => [`生日 / 约会 / 商务聚餐场景`, `认可${q}的菜系取向`, `预算到位 + 接受出品稳定但无惊艳`],
    avoid: q => [`想吃锅气 / 烟火气小馆子`, `预算紧张 (网红中餐人均偏高)`, `只去过 1 次的尝鲜党`],
    altSeeds: [
      { name: "本地老字号", brand: "本地名店", priceMul: 0.75, diff: "本地人推荐，地道味道" },
      { name: "新荣记 / 莆田", brand: "高端中餐", priceMul: 1.6, diff: "升级体验，菜系标杆" },
      { name: "社区小馆", brand: "苍蝇馆子", priceMul: 0.35, diff: "锅气足，性价比极高" },
    ],
  },
  fastfood_western: {
    triggers: ["麦当劳", "肯德基", "kfc", "汉堡王", "披萨", "必胜客", "赛百味", "汉堡", "炸鸡", "塔可", "tacobell", "西式快餐"],
    category: "西式快餐", emoji: "🍔", priceRange: [25, 80], priceUnit: "人均",
    perspectives: [
      { tag: "口味党", topic: "味道 / 一致性" }, { tag: "性价比党", topic: "优惠券 / 套餐" },
      { tag: "速度党", topic: "出餐速度" }, { tag: "新品党", topic: "限定上新" },
      { tag: "健康党", topic: "热量 / 油炸" }, { tag: "外卖党", topic: "外送还原度" },
    ],
    signals: [
      { type: "新品营销", desc: "限定限时全网铺量" },
      { type: "套餐种草", desc: "「9.9 三件套」全平台投放" },
      { type: "代金券引流", desc: "App / 美团券码裂变" },
      { type: "明星代言", desc: "强行关联代言人 / IP" },
    ],
    fitFor: q => [`赶时间 / 不想纠结吃什么`, `认可${q}的标准化口味`, `用优惠券吃刚需餐`],
    avoid: q => [`健身期 / 健康饮食党`, `追求本土口味 / 锅气`, `孩子高频食用 (高热高糖)`],
    altSeeds: [
      { name: "塔斯汀 / 华莱士", brand: "国产连锁", priceMul: 0.55, diff: "国产平替，本土化口味" },
      { name: "Shake Shack / 五条人", brand: "精品汉堡", priceMul: 1.8, diff: "升级体验，肉质更扎实" },
      { name: "本地汉堡店", brand: "独立精品", priceMul: 1.2, diff: "本地小店，手工感强" },
    ],
  },

  // ---------- 理财 ----------
  fund_equity: {
    triggers: ["基金", "易方达", "张坤", "葛兰", "中欧", "兴全", "蓝筹", "白酒基金", "新能源基金", "etf", "中证", "沪深300"],
    category: "公募基金 · 偏股", emoji: "📈", priceRange: [1, 10], priceUnit: "净值",
    perspectives: [
      { tag: "价值投资派", topic: "长期持仓质量" }, { tag: "短线党", topic: "短期波动" },
      { tag: "定投党", topic: "纪律性" }, { tag: "风险党", topic: "最大回撤" },
      { tag: "新手党", topic: "入门难度" }, { tag: "条款党", topic: "费率 / 申赎" },
    ],
    signals: [
      { type: "代销引流", desc: "支付宝 / 天天基金代销链接" },
      { type: "话术模板", desc: "「跟着 XX 无脑买」「躺平赚钱」" },
      { type: "焦虑营销", desc: "「不买被通胀吃掉」" },
      { type: "私域转化", desc: "「加群领策略」" },
    ],
    fitFor: q => [`认可${q}的投资策略`, `闲钱配置、3 年以上不动用`, `能承受 -30% 回撤`],
    avoid: q => [`短期内要用的钱`, `不了解底层标的`, `跟风追涨杀跌型`],
    altSeeds: [
      { name: "沪深300ETF (510300)", brand: "宽基指数", priceMul: 0.5, diff: "纯被动指数，费率最低" },
      { name: "兴全合宜 LOF", brand: "兴全", priceMul: 0.9, diff: "同梯队主动管理代表" },
      { name: "中欧时代先锋", brand: "中欧", priceMul: 1.1, diff: "成长风格代表" },
    ],
  },
  insurance: {
    triggers: ["保险", "重疾", "重大疾病", "意外险", "医疗险", "百万医疗", "终身寿", "增额寿", "年金险", "平安福", "平安", "国寿", "友邦", "复星联合"],
    category: "保险 · 健康 / 储蓄", emoji: "🛡️", priceRange: [200, 8000], priceUnit: "年缴",
    perspectives: [
      { tag: "条款党", topic: "保障范围 / 免责" }, { tag: "性价比党", topic: "保费 / 杠杆" },
      { tag: "理赔党", topic: "理赔难度 / 时效" }, { tag: "代理人党", topic: "服务体验" },
      { tag: "新手党", topic: "看不懂条款" }, { tag: "续保党", topic: "续保规则" },
    ],
    signals: [
      { type: "代理人引流", desc: "「私聊定制方案」" },
      { type: "焦虑营销", desc: "「不买保险一夜返贫」" },
      { type: "话术模板", desc: "「保终身」「确定收益」绝对化" },
      { type: "假条款解读", desc: "刻意忽略免责 / 等待期" },
    ],
    fitFor: q => [`刚需健康保障 / 储蓄场景`, `认可${q}的核心保障范围`, `愿意细读条款 + 长期持有`],
    avoid: q => [`保费占年收入 ≥10% 的紧张家庭`, `已有同类保障的重复投保`, `看不懂条款 / 完全依赖代理人推销`],
    altSeeds: [
      { name: "百万医疗险", brand: "短期医疗", priceMul: 0.05, diff: "百元保费百万保额，性价比天花板" },
      { name: "纯消费型重疾", brand: "消费型", priceMul: 0.35, diff: "保费 1/3，保障到 70 岁" },
      { name: "增额终身寿", brand: "储蓄型", priceMul: 1.2, diff: "锁定 3% 利率储蓄替代" },
    ],
  },
  crypto: {
    triggers: ["比特币", "btc", "以太坊", "eth", "币", "数字货币", "区块链", "defi", "nft", "binance", "okx", "欧易"],
    category: "数字资产 · 高风险", emoji: "🪙", priceRange: [100, 60000], priceUnit: "美元",
    perspectives: [
      { tag: "信仰党", topic: "长期价值" }, { tag: "短线党", topic: "波动 / 杠杆" },
      { tag: "风险党", topic: "归零 / 监管" }, { tag: "新手党", topic: "入门 / 钱包" },
      { tag: "合规党", topic: "国内政策" }, { tag: "套利党", topic: "DeFi / 收益" },
    ],
    signals: [
      { type: "杠杆引流", desc: "「百倍合约」「躺赚」" },
      { type: "私域 / 黑话", desc: "「内部信号群」「电报群」" },
      { type: "明星 KOL 站台", desc: "顶流 / 网红强行带货" },
      { type: "项目方水军", desc: "新币上线 0 槽点刷屏" },
    ],
    fitFor: q => [`认可数字资产长期叙事`, `仓位控制在闲钱 ≤5%`, `能承受 -90% 归零风险`],
    avoid: q => [`借钱 / 加杠杆参与`, `国内监管敏感场景使用`, `把它当主仓位的人`],
    altSeeds: [
      { name: "纳指 ETF (QQQ)", brand: "美股科技", priceMul: 8, diff: "波动小很多的科技敞口" },
      { name: "黄金 / 黄金 ETF", brand: "贵金属", priceMul: 0.04, diff: "抗通胀避险替代" },
      { name: "稳定币理财", brand: "稳定币", priceMul: 0.0001, diff: "1:1 美元锚定，低波动" },
    ],
  },

  // ---------- 通用兜底 ----------
  _generic_consumer: {
    triggers: [], category: "消费品 · 待考据", emoji: "🛍️", priceRange: [80, 1500], priceUnit: "标准款",
    perspectives: [
      { tag: "实用党", topic: "实际效果" }, { tag: "性价比党", topic: "价格 / 活动" },
      { tag: "颜值党", topic: "外观 / 设计" }, { tag: "耐用党", topic: "使用 1 年后" },
    ],
    signals: [
      { type: "网红种草模板", desc: "「家人们谁懂啊」「yyds」滥用" },
      { type: "九宫格水印", desc: "标准化探店 / 测评九宫格" },
      { type: "评论控评", desc: "前 3 条评论账号关联度异常" },
      { type: "代购引流", desc: "「内部渠道价」「私聊带货」" },
    ],
    fitFor: q => [`认可${q}的核心使用场景`, `预算到位 + 长期使用`, `已建立同类产品基础对比`],
    avoid: q => [`一年用 3 次的尝鲜党`, `预算紧张能接受平替`, `已有同类未坏的家庭`],
    altSeeds: [
      { name: "国货同位竞品", brand: "国货品牌", priceMul: 0.45, diff: "国货平替，性价比线" },
      { name: "升级旗舰款", brand: "同品牌", priceMul: 1.4, diff: "升级款，体验拉满" },
      { name: "二手 / 闲鱼版", brand: "二手市场", priceMul: 0.35, diff: "二手 7 成新，预算友好" },
    ],
  },
  _generic_entertainment: {
    triggers: [], category: "文娱内容 · 待考据", emoji: "🎭", priceRange: [0, 100], priceUnit: "标准",
    perspectives: [
      { tag: "剧情党", topic: "叙事 / 立意" }, { tag: "美学党", topic: "画面 / 风格" },
      { tag: "节奏党", topic: "时长 / 拖沓" }, { tag: "三观党", topic: "价值导向" },
    ],
    signals: [
      { type: "营销号通稿", desc: "「年度神作」「封神」滥用" },
      { type: "粉丝控评", desc: "主创超话引流 + 二极管引战" },
      { type: "片方水军", desc: "首发日异常互动激增" },
      { type: "联动营销", desc: "品牌联名 / 周边带货" },
    ],
    fitFor: q => [`同题材爱好者`, `能接受${q}的节奏和风格`, `愿意做笔记 / 二刷`],
    avoid: q => [`要看爽片 / 爽剧的人`, `对该题材完全无感`, `时间紧、只能看精华切片`],
    altSeeds: [
      { name: "同题材代表作", brand: "同题材", priceMul: 1, diff: "同主题口碑更稳的版本" },
      { name: "同导演 / 作者前作", brand: "同主创", priceMul: 1, diff: "主创风格延续" },
      { name: "免费 demo / 试读", brand: "试看", priceMul: 0, diff: "先试看再决定要不要追" },
    ],
  },
  _generic_food: {
    triggers: [], category: "餐饮 · 待考据", emoji: "🍴", priceRange: [30, 200], priceUnit: "人均",
    perspectives: [
      { tag: "口味党", topic: "味道" }, { tag: "环境党", topic: "装修 / 氛围" },
      { tag: "服务党", topic: "服务体验" }, { tag: "性价比党", topic: "人均 / 团购" },
      { tag: "排队党", topic: "等位时间" },
    ],
    signals: [
      { type: "探店模板", desc: "「人均 XX 神仙小馆」标题党" },
      { type: "九宫格菜品", desc: "标准化摆盘九宫格" },
      { type: "代金券引流", desc: "「评论区领券」「美团团购」" },
      { type: "环境营销", desc: "刻意强调装修 / 出片" },
    ],
    fitFor: q => [`所在商圈附近就餐`, `认可${q}的菜系 / 价位定位`, `避开周末高峰可去`],
    avoid: q => [`周末晚高峰原价吃 (建议团购)`, `本地口味党`, `带小孩 / 长辈对环境敏感`],
    altSeeds: [
      { name: "同商圈本地老店", brand: "本地名店", priceMul: 0.65, diff: "本地人推荐，地道味道" },
      { name: "升级版同菜系", brand: "高端连锁", priceMul: 1.5, diff: "升级体验，菜系标杆" },
      { name: "社区苍蝇馆子", brand: "夫妻店", priceMul: 0.35, diff: "锅气足，性价比极高" },
    ],
  },
  _generic_finance: {
    triggers: [], category: "理财 · 待考据", emoji: "💰", priceRange: [1, 100], priceUnit: "净值",
    perspectives: [
      { tag: "价值投资派", topic: "长期价值" }, { tag: "风险党", topic: "回撤 / 风险" },
      { tag: "新手党", topic: "入门门槛" }, { tag: "条款党", topic: "费率 / 细则" },
    ],
    signals: [
      { type: "代销引流", desc: "代销链接 / 私域转化" },
      { type: "话术模板", desc: "「躺平赚钱」「稳赚不赔」" },
      { type: "焦虑营销", desc: "「不理财就被通胀吃掉」" },
      { type: "收益夸大", desc: "晒局部高收益截图，回避回撤" },
    ],
    fitFor: q => [`认可${q}的策略 / 风险等级`, `闲钱配置、长期持有`, `能承受相应回撤`],
    avoid: q => [`短期要用的钱`, `不了解产品底层`, `跟风追涨杀跌型`],
    altSeeds: [
      { name: "宽基指数 ETF", brand: "指数化", priceMul: 0.5, diff: "纯被动，省心 + 费率低" },
      { name: "同策略基金", brand: "同策略", priceMul: 1, diff: "策略相近但回撤更小" },
      { name: "货币基金", brand: "保守替代", priceMul: 0.01, diff: "无风险替代，3% 年化" },
    ],
  },
};

// 根据模式默认的兜底 key
const GENERIC_KEY_BY_MODE = {
  consumer: "_generic_consumer",
  entertainment: "_generic_entertainment",
  food: "_generic_food",
  finance: "_generic_finance",
};

// 根据 mode 限制候选子品类
const SUBCAT_BY_MODE = {
  consumer: ["skincare", "makeup", "sunscreen", "haircare", "digital", "appliance", "sportswear", "bag_fashion"],
  entertainment: ["movie", "tvshow", "variety", "game", "book"],
  food: ["hotpot", "cafe", "milktea", "noodle", "zhongcan", "fastfood_western"],
  finance: ["fund_equity", "insurance", "crypto"],
};

// 智能分类器：输入字符串 + mode -> 子品类 key
function classifySubcategory(query, mode) {
  const q = query.toLowerCase();
  const candidates = SUBCAT_BY_MODE[mode] || SUBCAT_BY_MODE.consumer;
  for (const key of candidates) {
    const sub = SUBCATEGORIES[key];
    if (!sub) continue;
    for (const trig of sub.triggers) {
      if (q.includes(trig.toLowerCase())) return key;
    }
  }
  return GENERIC_KEY_BY_MODE[mode] || "_generic_consumer";
}

// ===================== 智能 Fallback 生成器 v3 =====================
function generateFallback(query, mode) {
  const cfg = MODE_CONFIG[mode] || MODE_CONFIG.consumer;
  const subKey = classifySubcategory(query, mode);
  const sub = SUBCATEGORIES[subKey];

  const seed = strHash(query + "|" + mode + "|" + subKey);
  const rnd = makePRNG(seed);

  // 价格：取自子品类区间
  const [pLow, pHi] = sub.priceRange;
  const price = pLow + Math.floor(rnd() * (pHi - pLow));

  const score = 50 + Math.floor(rnd() * 40);
  const totalNotes = 80 + Math.floor(rnd() * 420);
  const adDetected = 12 + Math.floor(rnd() * 38);
  const adConfidence = 70 + Math.floor(rnd() * 28);

  // 软广特征：来自子品类
  const signals = pickN(sub.signals, 3 + Math.floor(rnd() * 2), rnd).map(s => ({
    type: s.type, desc: s.desc, count: 5 + Math.floor(rnd() * 25),
  }));

  // 视角：来自子品类（已经是该品类真实视角）
  const picked = pickN(sub.perspectives, 4, rnd);
  const ratios = []; let remaining = 100;
  for (let i = 0; i < picked.length - 1; i++) {
    const r = 15 + Math.floor(rnd() * 20); ratios.push(r); remaining -= r;
  }
  ratios.push(Math.max(10, remaining));

  const sentimentByMode = {
    正面: q => `从${q.topic}维度看，${query}有不错的表现，多数笔记给出正面评价`,
    中性: q => `从${q.topic}维度看，${query}表现中规中矩，看你的具体需求`,
    负面: q => `从${q.topic}维度看，${query}存在明显短板，需要谨慎评估`,
  };

  const perspectives = picked.map((p, i) => {
    const ss = 30 + Math.floor(rnd() * 60);
    const sentiment = ss >= 65 ? "正面" : ss >= 45 ? "中性" : "负面";
    return {
      tag: p.tag, ratio: ratios[i], sentiment, sentimentScore: ss,
      summary: sentimentByMode[sentiment](p),
      quotes: [`笔记池里关于${p.topic}的争议主要集中在 ${query} 的实际表现`, `多数体验都围绕 ${p.topic} 展开`],
    };
  });

  // 适合 / 避雷：来自子品类的真实模板，把 query 注入
  const fitFor = sub.fitFor(query);
  const avoid = sub.avoid(query);

  // 替代品：来自子品类的真实替代库
  const alternatives = sub.altSeeds.map(seed => ({
    name: seed.name,
    brand: seed.brand,
    price: seed.priceMul === 0 ? 0 : Math.round(price * seed.priceMul),
    match: 60 + Math.floor(rnd() * 30),
    diff: seed.diff,
  }));

  // 价格曲线：仅消费品类目（数码/家电/服饰）+ 部分文娱
  let priceHistory = null;
  const enablePriceHistory = mode === "consumer" && price >= 100;
  if (enablePriceHistory) {
    const lowest = Math.round(price * (0.55 + rnd() * 0.25));
    const trend = [];
    for (let i = 0; i < 12; i++) {
      const noise = (rnd() - 0.5) * (price - lowest) * 0.8;
      const month = `${2025 + (i >= 6 ? 1 : 0)}-${String(((i + 6) % 12) + 1).padStart(2, "0")}`;
      const p = Math.max(lowest, Math.min(price, Math.round(price - Math.abs(noise))));
      trend.push({ month, price: p });
    }
    trend[5 + Math.floor(rnd() * 3)].price = lowest;
    trend[trend.length - 1].price = price;
    priceHistory = {
      current: price, lowest,
      lowestChannel: "电商 · 2025 双 11",
      avgDiscount: parseFloat((4 + rnd() * 5).toFixed(1)),
      trend,
    };
  }

  // 高嫌疑示例：基于子品类 + query 拼装
  const exampleTpls = {
    consumer: [
      `🔥 真实测评！${query} 用了 3 个月的真实变化`,
      `家人们谁懂啊！${query} 是我今年最爱`,
      `${query} 真的值这个价吗？深度测评`,
    ],
    entertainment: [
      `🎬 ${query} 封神！年度必看不解释`,
      `不看 ${query} 你的 2026 不完整`,
      `${query} 一集 / 一章封神，全员炸裂`,
    ],
    food: [
      `🍽️ 排队 3 小时也要吃的 ${query}`,
      `${query} 服务好到哭，下次还来`,
      `在 ${query} 真的太出片了 (附九宫格)`,
    ],
    finance: [
      `💰 跟着 ${query} 5 年的真实收益`,
      `${query} 是 2026 必入仓位`,
      `${query} 翻倍秘籍，错过等三年`,
    ],
  };
  const exPool = exampleTpls[mode] || exampleTpls.consumer;
  const examples = pickN(exPool, 2, rnd).map(title => ({
    title,
    suspicion: 75 + Math.floor(rnd() * 22),
    reason: pick(["标题模板化 + 评论控评", "通稿模板 + 互动激增", "高粉博主集中投放 + 0 槽点", "私域引流 + 强种草词"], rnd),
  }));

  return {
    id: "fallback_" + seed.toString(36),
    name: query,
    brand: "AI 智能识别",
    category: sub.category,
    cover: sub.emoji,
    price,
    priceUnit: sub.priceUnit,
    keywords: [query, sub.category],
    notes: {
      total: totalNotes, analyzed: 100,
      avgLikes: 50 + Math.floor(rnd() * 600),
      avgComments: 8 + Math.floor(rnd() * 120),
    },
    ads: { detected: adDetected, total: 100, confidence: adConfidence, signals, examples },
    perspectives,
    verdict: { score, fitFor, avoid },
    priceHistory,
    alternatives,
    _isFallback: true,
    _subcategory: subKey,
  };
}
