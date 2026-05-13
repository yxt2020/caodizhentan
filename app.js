// ============================================================
// 种草翻译官 · 应用逻辑 v2
// 支持 4 模式：consumer / finance / entertainment / food
// ============================================================

let currentMode = "consumer";

const $ = (id) => document.getElementById(id);

// ============================================================
// 初始化
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  renderQuickPicks();
  bindEvents();
  syncHeroCopy();
});

function bindEvents() {
  // 模式切换
  document.querySelectorAll(".mode-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".mode-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentMode = btn.dataset.mode;
      const cfg = MODE_CONFIG[currentMode];
      renderQuickPicks();
      $("searchInput").placeholder = cfg.placeholder;
      syncHeroCopy();
    });
  });

  // 搜索
  $("searchForm").addEventListener("submit", (e) => {
    e.preventDefault();
    runAnalysis();
  });
  $("searchBtn").addEventListener("click", runAnalysis);
  $("searchInput").addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      runAnalysis();
    }
  });
}

// hero 文案随模式切换
function syncHeroCopy() {
  const cfg = MODE_CONFIG[currentMode];
  // 决策动词
  const decisionMap = {
    consumer: "「该不该买」",
    entertainment: "「值不值看」",
    food: "「该不该去」",
    finance: "「该不该买」",
  };
  $("heroDecision").textContent = decisionMap[currentMode] || "「该不该买」";

  // sub line
  const subMap = {
    consumer: '软广识别 · 多视角聚合 · 历史最低价 · 同价位替代<br/><span class="hero-sub-small">输入商品名，30 秒搞定。再也不用刷 50 条笔记拼真相。</span>',
    entertainment: '通稿识别 · 多视角拆解 · 同类型推荐 · 适不适合你<br/><span class="hero-sub-small">输入作品名，30 秒翻译影视 / 综艺 / 游戏 / 书的真实口碑。</span>',
    food: '探店广识别 · 口味/环境/服务拆解 · 同位置替代 · 该不该去<br/><span class="hero-sub-small">输入店名，30 秒看清排队和滤镜背后是不是真的好吃。</span>',
    finance: '营销识别 · 风险拆解 · 同策略替代 · 该不该买<br/><span class="hero-sub-small">输入基金 / 保险名，30 秒看清小红书理财笔记水有多深。</span>',
  };
  $("heroSub").innerHTML = subMap[currentMode] || subMap.consumer;
}

function renderQuickPicks() {
  const cfg = MODE_CONFIG[currentMode] || MODE_CONFIG.consumer;
  $("quickPicks").innerHTML = cfg.keys
    .map((k) => `<button class="pick-chip" data-product="${k}">${k}</button>`)
    .join("");
  document.querySelectorAll(".pick-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      $("searchInput").value = chip.dataset.product;
      runAnalysis();
    });
  });
}

// ============================================================
// 分析流程
// ============================================================
function runAnalysis() {
  const query = $("searchInput").value.trim();
  if (!query) {
    $("searchInput").focus();
    return;
  }

  $("hero").classList.add("hidden");
  $("report").classList.add("hidden");
  $("loadingStage").classList.remove("hidden");
  $("loadingTarget").textContent = query;
  const loadTitles = {
    consumer: "正在为你翻译这个商品...",
    entertainment: "正在为你翻译这部作品...",
    food: "正在为你翻译这家餐厅...",
    finance: "正在为你翻译这个理财产品...",
  };
  $("loadingTitle").textContent = loadTitles[currentMode] || loadTitles.consumer;
  window.scrollTo({ top: 0, behavior: "smooth" });

  // 不同模式的加载步骤文案
  const stepsByMode = {
    consumer: [
      { id: "step1", duration: 900, status: ["扫描笔记池...", "已抓取 32/100", "已抓取 100/100 ✓"] },
      { id: "step2", duration: 1400, status: ["品牌词频次扫描...", "话术模板匹配中...", "图片水印识别...", "评论控评检测...", "完成 ✓"] },
      { id: "step3", duration: 1400, status: ["拆解视角中...", "成分党聚合...", "敏感肌聚合...", "价格党聚合...", "完成 ✓"] },
      { id: "step4", duration: 900, status: ["查询历史价格...", "匹配同价位替代...", "完成 ✓"] },
      { id: "step5", duration: 700, status: ["生成决策矩阵...", "渲染报告 ✓"] },
    ],
    entertainment: [
      { id: "step1", duration: 900, status: ["扫描笔记池...", "已抓取 32/100", "已抓取 100/100 ✓"] },
      { id: "step2", duration: 1400, status: ["营销号通稿识别...", "话题营造检测...", "粉丝控评分析...", "片方水军筛查...", "完成 ✓"] },
      { id: "step3", duration: 1400, status: ["剧情党聚合...", "演技党聚合...", "美学党聚合...", "三观党聚合...", "完成 ✓"] },
      { id: "step4", duration: 900, status: ["匹配同类型推荐...", "查找同导演前作...", "完成 ✓"] },
      { id: "step5", duration: 700, status: ["生成值不值看矩阵...", "渲染报告 ✓"] },
    ],
    food: [
      { id: "step1", duration: 900, status: ["扫描笔记池...", "已抓取 32/100", "已抓取 100/100 ✓"] },
      { id: "step2", duration: 1400, status: ["探店模板识别...", "代金券引流检测...", "九宫格摆盘筛查...", "环境营销分析...", "完成 ✓"] },
      { id: "step3", duration: 1400, status: ["口味党聚合...", "环境党聚合...", "服务党聚合...", "价格党聚合...", "完成 ✓"] },
      { id: "step4", duration: 900, status: ["匹配同位置替代...", "查找同价位餐厅...", "完成 ✓"] },
      { id: "step5", duration: 700, status: ["生成该不该去矩阵...", "渲染报告 ✓"] },
    ],
    finance: [
      { id: "step1", duration: 900, status: ["扫描笔记池...", "已抓取 32/100", "已抓取 100/100 ✓"] },
      { id: "step2", duration: 1400, status: ["代销引流识别...", "话术模板匹配...", "私域转化检测...", "收益夸大筛查...", "完成 ✓"] },
      { id: "step3", duration: 1400, status: ["价投党聚合...", "风险党聚合...", "新手党聚合...", "条款党聚合...", "完成 ✓"] },
      { id: "step4", duration: 900, status: ["匹配同策略替代...", "对比同风险等级...", "完成 ✓"] },
      { id: "step5", duration: 700, status: ["生成该不该买矩阵...", "渲染报告 ✓"] },
    ],
  };
  const steps = stepsByMode[currentMode] || stepsByMode.consumer;

  resetSteps();
  runStepsSequentially(steps, 0, () => {
    setTimeout(() => {
      $("loadingStage").classList.add("hidden");
      $("report").classList.remove("hidden");
      renderReport(query);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 280);
  });
}

function resetSteps() {
  document.querySelectorAll(".step").forEach((s) => {
    s.classList.remove("active", "done");
    s.querySelector(".step-status").textContent = "等待中...";
  });
}

function runStepsSequentially(steps, idx, done) {
  if (idx >= steps.length) {
    done();
    return;
  }
  const step = steps[idx];
  const el = $(step.id);
  el.classList.add("active");

  const statusEl = el.querySelector(".step-status");
  let statusIdx = 0;
  const interval = setInterval(() => {
    if (statusIdx < step.status.length) {
      statusEl.textContent = step.status[statusIdx++];
    }
  }, step.duration / step.status.length);

  setTimeout(() => {
    clearInterval(interval);
    statusEl.textContent = step.status[step.status.length - 1];
    el.classList.remove("active");
    el.classList.add("done");
    runStepsSequentially(steps, idx + 1, done);
  }, step.duration);
}

// ============================================================
// 渲染决策报告
// ============================================================
function renderReport(query) {
  const cfg = MODE_CONFIG[currentMode] || MODE_CONFIG.consumer;
  const product = ALL_PRODUCTS[query] || generateFallback(query, currentMode);
  const isFinance = currentMode === "finance";

  let html = "";

  // Red Finance Banner (理财模式)
  if (isFinance) {
    html += `
      <div class="finance-banner">
        <div class="finance-banner-icon">💰</div>
        <div class="finance-banner-text">
          <b>Red Finance · 决策中心</b> · 把"消费决策入口"心智延伸到理财产品
          <div class="finance-banner-meta">这是该方案的未来形态：基金 / 保险的小红书讨论 → 同样可以聚合分析</div>
        </div>
      </div>
    `;
  }

  html += renderHeader(product, cfg);
  html += renderScoreBlock(product, cfg);

  html += `<div class="report-grid">`;
  html += renderFitCard(product, cfg);
  html += renderAvoidCard(product, cfg);
  html += renderAdCard(product, cfg);
  html += renderPerspectiveCard(product, cfg);
  if (product.priceHistory && (cfg.pricePanel || currentMode === "entertainment")) {
    html += renderPriceCard(product, cfg);
  }
  html += renderAltCard(product, cfg);
  html += `</div>`;

  // CTA
  html += `
    <div class="cta-row">
      <button class="cta-btn ghost" id="backBtn">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
          <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        再分析一个
      </button>
      <button class="cta-btn primary">
        ${cfg.actionLabel}
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
  `;

  $("report").innerHTML = html;

  $("backBtn").addEventListener("click", () => {
    $("report").classList.add("hidden");
    $("hero").classList.remove("hidden");
    $("searchInput").value = "";
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  setTimeout(() => animateNumbers(product), 50);
}

// ----- 报告各 section 渲染 -----
function renderHeader(p, cfg) {
  const fallbackCategoryEmoji = {
    consumer: "🛍️", entertainment: "🎬", food: "🍜", finance: "💰",
  };
  // 优先级：产品自带 cover > mode 的 emoji map > 默认
  const emoji =
    p.cover ||
    (cfg.emojiMap && cfg.emojiMap[p.category]) ||
    fallbackCategoryEmoji[currentMode] ||
    "📦";

  return `
    <div class="report-header">
      <div class="report-cover"><div style="font-size:48px;">${emoji}</div></div>
      <div class="report-meta">
        <span class="report-cat">${p.category || p.type || ""}</span>
        <div class="report-name">${p.name}</div>
        <div class="report-stats">
          <span><b>${p.notes.total.toLocaleString()}</b> 篇笔记池</span>
          <span>已分析 <b>${p.notes.analyzed}</b> 篇</span>
          <span>均赞 <b>${p.notes.avgLikes}</b></span>
        </div>
      </div>
    </div>
  `;
}

function renderScoreBlock(p, cfg) {
  const score = p.verdict.score;
  const verb = cfg.decisionVerb;
  // 决策动词驱动文案
  const verdictByVerb = {
    买: {
      hi: "强烈推荐 / 闭眼入",
      mid_hi: "值得入手 / 适合特定人群",
      mid: "见仁见智 / 看预算和需求",
      mid_lo: "谨慎考虑 / 有替代品",
      lo: "不推荐 / 有更优选",
    },
    看: {
      hi: "封神级 / 闭眼看",
      mid_hi: "值得一看 / 适合该题材爱好者",
      mid: "见仁见智 / 选择性观看",
      mid_lo: "可看可不看 / 有更优选",
      lo: "不推荐 / 时间金贵跳过",
    },
    去: {
      hi: "强烈推荐 / 闭眼去",
      mid_hi: "值得一去 / 适合特定场景",
      mid: "见仁见智 / 看你预期",
      mid_lo: "可去可不去 / 有替代",
      lo: "不推荐 / 同位置有更优",
    },
  };
  const v = verdictByVerb[verb] || verdictByVerb["买"];
  const verdict =
    score >= 80 ? v.hi :
    score >= 70 ? v.mid_hi :
    score >= 60 ? v.mid :
    score >= 50 ? v.mid_lo : v.lo;

  const summaryByVerb = {
    买: {
      hi: `这是该品类的标杆，<b>除非预算极度紧张，否则首选</b>。`,
      mid_hi: `综合得分良好，<b>适合特定人群闭眼入</b>，请看下方「${cfg.fitTitle}」。`,
      mid: `优缺点都明显，<b>建议先看「${cfg.avoidTitle}」再下单</b>。`,
      mid_lo: `存在明显短板，<b>建议先看下方替代品再决定</b>。`,
      lo: `不推荐，<b>同类有性价比更高的选项</b>，请看替代品板块。`,
    },
    看: {
      hi: `近年同题材封神级作品，<b>口碑 / 完成度 / 立意都过硬</b>。`,
      mid_hi: `综合得分良好，<b>适合特定人群</b>，请看下方「${cfg.fitTitle}」。`,
      mid: `优缺点都明显，<b>先看「${cfg.avoidTitle}」再决定要不要追</b>。`,
      mid_lo: `有短板，<b>同类型有更值得追的，请看推荐</b>。`,
      lo: `不推荐，<b>时间金贵，同题材有更值得看的</b>。`,
    },
    去: {
      hi: `区域口碑标杆，<b>除非排队劝退，否则首选</b>。`,
      mid_hi: `综合体验良好，<b>适合特定场景去吃</b>，请看下方「${cfg.fitTitle}」。`,
      mid: `口碑两极，<b>先看「${cfg.avoidTitle}」再决定要不要去</b>。`,
      mid_lo: `有短板，<b>建议看同位置替代</b>。`,
      lo: `不推荐，<b>同位置同价位有更值得去的</b>。`,
    },
  };
  const s = summaryByVerb[verb] || summaryByVerb["买"];
  const summary =
    score >= 80 ? s.hi :
    score >= 70 ? s.mid_hi :
    score >= 60 ? s.mid :
    score >= 50 ? s.mid_lo : s.lo;

  const r = 60;
  const c = 2 * Math.PI * r;
  const offset = c * (1 - score / 100);

  return `
    <div class="score-block">
      <div class="score-row">
        <div class="score-circle">
          <svg class="score-svg" width="132" height="132" viewBox="0 0 132 132">
            <circle class="score-bg-track" cx="66" cy="66" r="${r}" stroke-width="10"/>
            <circle class="score-progress" cx="66" cy="66" r="${r}" stroke-width="10"
              stroke-dasharray="${c}"
              stroke-dashoffset="${c}"
              data-target-offset="${offset}"
              stroke-linecap="round"/>
          </svg>
          <div class="score-text">
            <div class="score-num" data-target="${score}">0</div>
            <div class="score-label">综合得分</div>
          </div>
        </div>
        <div class="score-body">
          <div class="score-verdict">${verdict}</div>
          <div class="score-summary">${summary}</div>
        </div>
      </div>
    </div>
  `;
}

function renderFitCard(p, cfg) {
  return `
    <div class="card">
      <div class="card-title"><span class="card-title-icon">✅</span> ${cfg.fitTitle}</div>
      <div class="card-sub">基于 ${p.notes.analyzed} 篇笔记真实评价聚合</div>
      <ul class="verdict-list fit-list">
        ${p.verdict.fitFor.map((x) => `<li>${x}</li>`).join("")}
      </ul>
    </div>
  `;
}

function renderAvoidCard(p, cfg) {
  const subByMode = {
    consumer: "这些人群 / 场景下劝你别买",
    entertainment: "这些人群 / 场景下不推荐看",
    food: "这些人群 / 场景下劝你别去",
    finance: "这些场景 / 风险偏好不建议入",
  };
  return `
    <div class="card">
      <div class="card-title"><span class="card-title-icon">❌</span> ${cfg.avoidTitle}</div>
      <div class="card-sub">${subByMode[currentMode] || subByMode.consumer}</div>
      <ul class="verdict-list avoid-list">
        ${p.verdict.avoid.map((x) => `<li>${x}</li>`).join("")}
      </ul>
    </div>
  `;
}

function renderAdCard(p, cfg) {
  const subByMode = {
    consumer: "多模态识别：品牌词频次 + 话术模板 + 图片水印 + 评论控评",
    entertainment: "多模态识别：营销号通稿 + 粉丝控评 + 片方水军 + 联动营销",
    food: "多模态识别：探店模板 + 代金券引流 + 九宫格摆盘 + 排队炫耀",
    finance: "多模态识别：代销引流 + 私域转化 + 收益夸大 + 焦虑营销",
  };
  return `
    <div class="card card-wide">
      <div class="card-title"><span class="card-title-icon">🕵️</span> ${cfg.adTitle}</div>
      <div class="card-sub">${subByMode[currentMode] || subByMode.consumer}</div>

      <div class="ad-meter">
        <div class="ad-meter-num">${p.ads.detected}<span style="font-size:18px;opacity:.6;">/${p.ads.total}</span></div>
        <div class="ad-meter-body">
          <div class="ad-meter-label">${cfg.adLabel}</div>
          <div class="ad-meter-conf">识别置信度 ${p.ads.confidence}%</div>
          <div class="ad-bar">
            <div class="ad-bar-fill" style="width:0%;" data-target="${p.ads.detected}"></div>
          </div>
        </div>
      </div>

      <div class="signal-list">
        ${p.ads.signals
          .map(
            (s) => `
          <div class="signal">
            <span class="signal-tag">特征</span>
            <div class="signal-body">
              <div class="signal-name">${s.type}</div>
              <div class="signal-desc">${s.desc}</div>
            </div>
            <div class="signal-count">命中 ${s.count} 篇</div>
          </div>
        `
          )
          .join("")}
      </div>

      ${
        p.ads.examples && p.ads.examples.length
          ? `
        <div class="suspect-list">
          <div class="suspect-title">🚨 高嫌疑笔记示例</div>
          ${p.ads.examples
            .map(
              (e) => `
            <div class="suspect">
              <div class="suspect-head">
                <div class="suspect-title-text">${e.title}</div>
                <div class="suspect-score">嫌疑 ${e.suspicion}%</div>
              </div>
              <div class="suspect-reason">${e.reason}</div>
            </div>
          `
            )
            .join("")}
        </div>
      `
          : ""
      }
    </div>
  `;
}

function renderPerspectiveCard(p, cfg) {
  const subByMode = {
    consumer: "把笔记按人群标签拆解，看清不同视角下的真实评价",
    entertainment: "把笔记按观众视角拆解：剧情 / 演技 / 美学 / 三观各自打几分",
    food: "把笔记按食客视角拆解：口味 / 环境 / 服务 / 价格各自打几分",
    finance: "把笔记按投资风格拆解：价投 / 风险 / 新手 / 条款各自打几分",
  };
  return `
    <div class="card card-wide">
      <div class="card-title"><span class="card-title-icon">🎭</span> 多视角拆解</div>
      <div class="card-sub">${subByMode[currentMode] || subByMode.consumer}</div>
      <div class="perspective-list">
        ${p.perspectives
          .map((v) => {
            const cls = v.sentimentScore >= 65 ? "pos" : v.sentimentScore >= 45 ? "mid" : "neg";
            return `
            <div class="perspective">
              <div class="perspective-head">
                <div class="perspective-tag ${cls}">${v.tag}</div>
                <span class="perspective-ratio">${v.ratio}% 笔记 · ${v.sentiment}</span>
                <div class="perspective-bar"><div class="perspective-bar-fill ${cls}" style="width:0%;" data-target="${v.sentimentScore}"></div></div>
              </div>
              <div class="perspective-summary">${v.summary}</div>
              ${
                v.quotes && v.quotes.length
                  ? `<div class="perspective-quote">"${v.quotes[0]}"</div>`
                  : ""
              }
            </div>
          `;
          })
          .join("")}
      </div>
    </div>
  `;
}

function renderPriceCard(p, cfg) {
  const ph = p.priceHistory;
  const trend = ph.trend;
  const max = Math.max(...trend.map((t) => t.price));
  const min = Math.min(...trend.map((t) => t.price));
  const range = max - min || 1;

  const w = 480;
  const h = 100;
  const padL = 6;
  const padR = 6;
  const innerW = w - padL - padR;
  const innerH = h - 20;

  const points = trend.map((t, i) => {
    const x = padL + (i / (trend.length - 1)) * innerW;
    const y = 12 + innerH - ((t.price - min) / range) * innerH;
    return { x, y, ...t };
  });

  const path = points.map((pt, i) => `${i === 0 ? "M" : "L"}${pt.x.toFixed(1)},${pt.y.toFixed(1)}`).join(" ");
  const areaPath = path + ` L${points[points.length - 1].x},${h - 4} L${points[0].x},${h - 4} Z`;

  const lowestPt = points.reduce((a, b) => (a.price < b.price ? a : b));

  const titleByMode = {
    consumer: "💰 价格档案",
    entertainment: "💰 价格 / 票房档案",
    food: "💰 人均价格档案",
    finance: "💰 净值档案",
  };

  return `
    <div class="card card-wide">
      <div class="card-title"><span class="card-title-icon">💰</span> ${titleByMode[currentMode]?.replace("💰 ","") || "价格档案"}</div>
      <div class="card-sub">12 个月价格曲线 · 蹲点建议</div>

      <div class="price-row">
        <div class="price-block">
          <div class="price-label">当前价</div>
          <div class="price-num current">¥${ph.current}</div>
        </div>
        <div class="price-divider"></div>
        <div class="price-block">
          <div class="price-label">历史最低</div>
          <div class="price-num lowest">¥${ph.lowest}</div>
          <div class="price-channel">${ph.lowestChannel}</div>
        </div>
        <div class="price-divider"></div>
        <div class="price-block">
          <div class="price-label">折扣空间</div>
          <div class="price-num" style="color:var(--orange-500);">${ph.avgDiscount} 折</div>
          <div class="price-channel">活动期均值</div>
        </div>
      </div>

      <svg id="priceChart" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none">
        <defs>
          <linearGradient id="priceGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#FF2E4D" stop-opacity=".25"/>
            <stop offset="100%" stop-color="#FF2E4D" stop-opacity="0"/>
          </linearGradient>
        </defs>
        <path d="${areaPath}" fill="url(#priceGrad)"/>
        <path d="${path}" fill="none" stroke="#FF2E4D" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
        ${points
          .map(
            (pt) => `<circle cx="${pt.x}" cy="${pt.y}" r="${pt === lowestPt ? 5 : 2.5}" fill="${pt === lowestPt ? "#22C55E" : "#FF2E4D"}" stroke="white" stroke-width="${pt === lowestPt ? 2 : 1}"/>`
          )
          .join("")}
        <text x="${lowestPt.x}" y="${lowestPt.y - 10}" font-size="10" fill="#22C55E" text-anchor="middle" font-weight="600">最低 ¥${lowestPt.price}</text>
      </svg>
      <div style="display:flex;justify-content:space-between;font-size:11px;color:var(--ink-500);margin-top:6px;font-family:var(--font-mono);">
        <span>${trend[0].month}</span>
        <span>${trend[Math.floor(trend.length / 2)].month}</span>
        <span>${trend[trend.length - 1].month}</span>
      </div>
    </div>
  `;
}

function renderAltCard(p, cfg) {
  const subByMode = {
    consumer: "匹配度由 AI 综合成分 / 体验 / 人群计算",
    entertainment: "同题材 / 同导演 / 同主演相似度计算",
    food: "同位置 / 同价位 / 同品类匹配",
    finance: "同风险等级 / 同策略 / 同费率匹配",
  };
  return `
    <div class="card card-wide">
      <div class="card-title"><span class="card-title-icon">🆚</span> ${cfg.altTitle}</div>
      <div class="card-sub">${subByMode[currentMode] || subByMode.consumer}</div>
      <div class="alt-list">
        ${p.alternatives
          .map(
            (a) => `
          <div class="alt">
            <div class="alt-match">${a.match}</div>
            <div class="alt-body">
              <div class="alt-name">${a.name}</div>
              <div class="alt-brand">${a.brand || a.type || ""}</div>
              <div class="alt-diff">${a.diff}</div>
            </div>
            <div class="alt-price">${formatAltPrice(a.price)}</div>
          </div>
        `
          )
          .join("")}
      </div>
    </div>
  `;
}

function formatAltPrice(p) {
  if (p === 0 || p === "0") return "免费 / VIP";
  if (typeof p === "number") return "¥" + p;
  return p;
}

// ----- 数字 + 进度动画 -----
function animateNumbers(product) {
  document.querySelectorAll("[data-target-offset]").forEach((el) => {
    const off = parseFloat(el.dataset.targetOffset);
    setTimeout(() => (el.style.strokeDashoffset = off), 80);
  });

  document.querySelectorAll(".ad-bar-fill, .perspective-bar-fill").forEach((el) => {
    const target = parseFloat(el.dataset.target);
    if (isNaN(target)) return;
    setTimeout(() => (el.style.width = target + "%"), 80);
  });

  document.querySelectorAll(".score-num[data-target]").forEach((el) => {
    const target = parseFloat(el.dataset.target);
    if (isNaN(target)) return;
    const duration = 900;
    const start = performance.now();
    const step = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - t, 3);
      const v = target * ease;
      el.textContent = Math.round(v);
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  });
}
