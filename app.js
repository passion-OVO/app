const storageKey = "qingdun-parent-app-state-v1";

const dimensions = [
  { key: "health", label: "数字健康", color: "#0f8b7e" },
  { key: "privacy", label: "隐私安全", color: "#3e6bb5" },
  { key: "ethics", label: "网络伦理", color: "#7d5ab5" },
  { key: "fraud", label: "反诈识别", color: "#e36b4f" },
  { key: "tools", label: "工具素养", color: "#f0b64f" },
];

const questions = [
  {
    dimension: "health",
    text: "孩子睡前还想继续刷短视频，最适合的家庭处理方式是？",
    choices: [
      { text: "直接没收手机，并要求以后不许再刷", score: 35 },
      { text: "一起约定睡前 1 小时无屏幕，并准备替代活动", score: 95 },
      { text: "只要作业写完，刷到几点都可以", score: 25 },
    ],
  },
  {
    dimension: "privacy",
    text: "同学在群里索要验证码，说帮忙领取游戏礼包，孩子应该怎么做？",
    choices: [
      { text: "把验证码发给熟悉的同学", score: 20 },
      { text: "不发送验证码，并向家长确认是否存在风险", score: 100 },
      { text: "先发一半数字，看看对方怎么说", score: 35 },
    ],
  },
  {
    dimension: "ethics",
    text: "孩子看到同学被制作成恶搞视频传播，正确反应是？",
    choices: [
      { text: "不转发，保存证据，并提醒同学或老师介入", score: 100 },
      { text: "觉得好笑就转给几个朋友", score: 15 },
      { text: "只要不是自己拍的，就不用管", score: 30 },
    ],
  },
  {
    dimension: "fraud",
    text: "陌生账号私信称可以低价代充游戏币，要求先付款，孩子应如何判断？",
    choices: [
      { text: "低价很划算，可以先小额试试", score: 25 },
      { text: "要求对方发更多截图证明", score: 45 },
      { text: "识别为高风险交易，不付款并告知家长", score: 100 },
    ],
  },
  {
    dimension: "tools",
    text: "安装新 App 时弹出通讯录、定位、相册权限申请，较稳妥的做法是？",
    choices: [
      { text: "全部同意，否则可能影响使用", score: 20 },
      { text: "只开启必要权限，不确定时先拒绝", score: 95 },
      { text: "先同意，出了问题再卸载", score: 35 },
    ],
  },
  {
    dimension: "health",
    text: "孩子说刷短视频能缓解压力，家长最适合先回应什么？",
    choices: [
      { text: "承认压力存在，再一起找更健康的放松方式", score: 95 },
      { text: "告诉孩子这都是借口", score: 25 },
      { text: "完全不限制，让孩子自己调节", score: 45 },
    ],
  },
  {
    dimension: "privacy",
    text: "孩子想在社交平台发布校服照和家庭住址附近照片，家长应提醒什么？",
    choices: [
      { text: "避免暴露学校、住址、行程等可定位信息", score: 100 },
      { text: "只要设置了好友可见就绝对安全", score: 45 },
      { text: "照片好看就可以发", score: 20 },
    ],
  },
  {
    dimension: "fraud",
    text: "孩子看到 AI 换脸视频中“老师”要求扫码缴费，应该怎么做？",
    choices: [
      { text: "先扫码，避免错过通知", score: 20 },
      { text: "通过班级群、老师电话等官方渠道二次确认", score: 100 },
      { text: "问几个同学有没有交", score: 55 },
    ],
  },
];

const guidance = [
  {
    key: "short-video",
    label: "短视频过度",
    title: "孩子总是停不下来刷短视频",
    say: "我不是要否定你放松，但我们要一起看看它有没有影响睡眠和学习。",
    avoid: "你就是自控力太差。",
    action: "今晚先把睡前 1 小时设成无屏幕时间，准备一个替代活动。",
    signal: "如果孩子因无法刷手机出现持续失眠、暴躁或逃学，需要寻求学校或专业支持。",
  },
  {
    key: "bullying",
    label: "网络欺凌",
    title: "孩子可能遭遇网络欺凌",
    say: "我会先站在你这边。我们一起看发生了什么，不急着责怪你。",
    avoid: "是不是你先惹别人了。",
    action: "保留截图、链接和时间线，不继续对骂，必要时联系老师和平台举报。",
    signal: "出现自伤表达、持续恐惧上学、睡眠和饮食明显变化时，要立即介入。",
  },
  {
    key: "privacy",
    label: "隐私暴露",
    title: "孩子喜欢发布个人生活细节",
    say: "分享生活可以，但有些信息会让陌生人定位到你，我们一起筛一遍。",
    avoid: "以后什么都不许发。",
    action: "把学校、住址、路线、证件、电话等信息列为家庭发布红线。",
    signal: "若已出现陌生人持续私信、威胁或开盒迹象，应保存证据并报警。",
  },
  {
    key: "conflict",
    label: "亲子冲突",
    title: "孩子反感家长查看手机",
    say: "我想了解风险，不是要偷看你的全部生活。我们可以约定哪些情况必须求助。",
    avoid: "你没问题为什么怕我看。",
    action: "把检查手机改成共同复盘契约，只在高风险信号出现时扩大查看范围。",
    signal: "如果双方已经无法沟通，可以邀请班主任、心理老师或可信任亲友参与。",
  },
];

const initialState = {
  child: { name: "小澄", age: "13岁", grade: "初一" },
  scores: { health: 58, privacy: 72, ethics: 66, fraud: 61, tools: 74 },
  answers: Array(questions.length).fill(null),
  currentQuestion: 0,
  reviewStreak: 3,
  selectedReview: "稳定执行",
  activeScenario: "short-video",
  contracts: [
    {
      id: "sleep",
      title: "睡前 1 小时无屏幕",
      detail: "晚上 21:30 后手机放到客厅充电，家长也同步减少刷手机。",
      done: true,
    },
    {
      id: "shorts",
      title: "短视频每日 30 分钟",
      detail: "娱乐性短视频集中在晚饭后使用，到点后由孩子主动停止。",
      done: false,
    },
    {
      id: "stranger",
      title: "陌生人私信先暂停",
      detail: "涉及转账、验证码、见面、隐私照片时必须先告诉家长。",
      done: true,
    },
    {
      id: "bullying",
      title: "遇到网暴先留证据",
      detail: "不继续对骂，先截图、保存链接，再找家长或老师一起处理。",
      done: false,
    },
    {
      id: "review",
      title: "周日 20:30 家庭复盘",
      detail: "只讨论本周规则是否合适，不翻旧账，不贴标签。",
      done: false,
    },
  ],
};

let state = loadState();

function loadState() {
  try {
    const stored = JSON.parse(localStorage.getItem(storageKey));
    return stored ? { ...initialState, ...stored } : structuredClone(initialState);
  } catch {
    return structuredClone(initialState);
  }
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function scoreTotal() {
  const values = Object.values(state.scores);
  return Math.round(values.reduce((sum, value) => sum + value, 0) / values.length);
}

function licenseInfo(total = scoreTotal()) {
  if (total >= 86) return { level: "L3 示范引导", risk: "低风险", tone: "孩子具备较强自主管理能力，可参与家庭规则共创。" };
  if (total >= 74) return { level: "L2 稳定自律", risk: "较低风险", tone: "孩子能识别多数常见风险，适合逐步增加自主空间。" };
  if (total >= 60) return { level: "L1 基础合格", risk: "中风险", tone: "孩子具备基础安全意识，但仍需要家庭支持。" };
  return { level: "L0 待学习", risk: "高风险", tone: "当前风险识别和自我管理能力偏弱，建议先陪伴使用。" };
}

function weakestDimension() {
  return dimensions.reduce((weakest, item) =>
    state.scores[item.key] < state.scores[weakest.key] ? item : weakest
  );
}

function focusActions() {
  const weak = weakestDimension().key;
  const map = {
    health: [
      ["建立睡前停用", "今晚开始执行睡前 1 小时无屏幕，并准备替代活动。"],
      ["减少即时指责", "先确认孩子压力来源，再讨论短视频边界。"],
      ["共同示范", "家长同步减少睡前刷手机，降低规则对抗感。"],
    ],
    privacy: [
      ["检查发布边界", "把学校、住址、路线、证件列为家庭发布红线。"],
      ["关闭非必要权限", "和孩子一起检查常用 App 的通讯录、定位、相册权限。"],
      ["约定求助信号", "涉及验证码、隐私照、陌生人邀约时必须暂停并求助。"],
    ],
    ethics: [
      ["建立不转发原则", "看到恶搞、辱骂、开盒内容时不点赞、不围观、不转发。"],
      ["保留证据", "遇到欺凌先截图和记录时间线，再寻求老师或平台介入。"],
      ["讨论边界", "用真实案例说明玩笑、评价和伤害之间的界限。"],
    ],
    fraud: [
      ["设置付款冷静期", "任何代充、返利、抽奖、缴费都先等 10 分钟再确认。"],
      ["二次核验", "老师、平台、朋友发来的付款信息必须换渠道确认。"],
      ["识别 AI 冒充", "遇到语音、视频、头像都不能只凭相貌判断真伪。"],
    ],
    tools: [
      ["权限最小化", "安装新 App 时默认拒绝非必要权限。"],
      ["打开青少年模式", "对短视频和游戏平台设置基础时间提醒。"],
      ["整理应急流程", "中毒、诈骗、网暴时先断开、截图、求助。"],
    ],
  };
  return map[weak];
}

function setView(viewId) {
  document.querySelectorAll(".view").forEach((view) => view.classList.toggle("active", view.id === viewId));
  document.querySelectorAll(".nav-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.view === viewId);
  });
  const titles = {
    dashboard: "今日概览",
    assessment: "数字驾照测评",
    report: "风险报告",
    contract: "家庭契约",
    guidance: "家长建议",
  };
  document.querySelector("#screenTitle").textContent = titles[viewId] || "今日概览";
  if (viewId === "report") drawRadar();
}

function renderDashboard() {
  const total = scoreTotal();
  const info = licenseInfo(total);
  const actions = focusActions();
  const completed = state.contracts.filter((item) => item.done).length;

  document.querySelector("#childName").textContent = state.child.name;
  document.querySelector("#railChildName").textContent = state.child.name;
  document.querySelector("#railChildMeta").textContent = `${state.child.age} · ${state.child.grade}`;
  document.querySelector("#licenseLevel").textContent = info.level;
  document.querySelector("#totalScore").textContent = total;
  document.querySelector("#riskLevel").textContent = info.risk;
  document.querySelector("#contractProgress").textContent = `${completed}/${state.contracts.length}`;
  document.querySelector("#reviewStreak").textContent = `${state.reviewStreak}天`;
  document.querySelector("#heroAdvice").textContent = actions[0][1];
  document.querySelector("#railFocus").textContent = actions[0][0];

  const dashOffset = 302 - (302 * total) / 100;
  document.querySelector("#scoreRing").style.strokeDashoffset = dashOffset.toString();

  document.querySelector("#todayActions").innerHTML = actions
    .map(
      ([title, detail], index) => `
        <article class="action-item">
          <span class="action-index">${index + 1}</span>
          <div>
            <strong>${title}</strong>
            <p>${detail}</p>
          </div>
        </article>
      `
    )
    .join("");
}

function renderQuiz() {
  const index = state.currentQuestion;
  const question = questions[index];
  const selected = state.answers[index];
  document.querySelector("#quizProgressBar").style.width = `${((index + 1) / questions.length) * 100}%`;
  document.querySelector("#quizProgressText").textContent = `第 ${index + 1} / ${questions.length} 题`;
  document.querySelector("#questionDimension").textContent = dimensions.find((item) => item.key === question.dimension).label;
  document.querySelector("#questionText").textContent = question.text;
  document.querySelector("#choiceList").innerHTML = question.choices
    .map(
      (choice, choiceIndex) => `
        <button class="choice ${selected === choiceIndex ? "selected" : ""}" data-choice="${choiceIndex}" type="button">
          ${choice.text}
        </button>
      `
    )
    .join("");
  document.querySelector("#prevQuestion").disabled = index === 0;
  document.querySelector("#nextQuestion").innerHTML =
    index === questions.length - 1
      ? '生成报告 <i data-lucide="file-text" data-fallback="报"></i>'
      : '下一题 <i data-lucide="arrow-right" data-fallback="→"></i>';
  refreshIcons();
}

function applyQuizScores() {
  const grouped = {};
  dimensions.forEach((item) => {
    grouped[item.key] = [];
  });
  state.answers.forEach((answer, index) => {
    if (answer === null) return;
    const question = questions[index];
    grouped[question.dimension].push(question.choices[answer].score);
  });
  dimensions.forEach((item) => {
    if (grouped[item.key].length) {
      state.scores[item.key] = Math.round(
        grouped[item.key].reduce((sum, value) => sum + value, 0) / grouped[item.key].length
      );
    }
  });
}

function renderReport() {
  const total = scoreTotal();
  const info = licenseInfo(total);
  const weak = weakestDimension();
  const priorities = focusActions();
  document.querySelector("#reportLevel").textContent = info.risk;
  document.querySelector("#reportScore").textContent = total;
  document.querySelector("#reportSummary").textContent = info.tone;
  document.querySelector("#weakestDimension").textContent = `短板：${weak.label}`;
  document.querySelector("#dimensionList").innerHTML = dimensions
    .map(
      (item) => `
        <article class="dimension-item">
          <span class="dimension-score">${state.scores[item.key]}</span>
          <div>
            <strong>${item.label}</strong>
            <p>${dimensionAdvice(item.key)}</p>
          </div>
        </article>
      `
    )
    .join("");
  document.querySelector("#priorityList").innerHTML = priorities
    .map(
      ([title, detail], index) => `
        <article class="priority-item">
          <span class="priority-index">${index + 1}</span>
          <div>
            <strong>${title}</strong>
            <p>${detail}</p>
          </div>
        </article>
      `
    )
    .join("");
  drawRadar();
}

function dimensionAdvice(key) {
  const advice = {
    health: "关注睡眠、情绪和屏幕时间边界。",
    privacy: "重点检查个人信息发布和 App 权限。",
    ethics: "强化不转发欺凌内容和证据留存意识。",
    fraud: "遇到付款、代充、抽奖先做二次核验。",
    tools: "学会使用青少年模式、权限管理和应急设置。",
  };
  return advice[key];
}

function drawRadar() {
  const canvas = document.querySelector("#radarChart");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2 + 2;
  const radius = 92;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.font = "13px Microsoft YaHei, Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  for (let ring = 1; ring <= 4; ring += 1) {
    const r = (radius * ring) / 4;
    ctx.beginPath();
    dimensions.forEach((_, index) => {
      const angle = -Math.PI / 2 + (Math.PI * 2 * index) / dimensions.length;
      const x = centerX + Math.cos(angle) * r;
      const y = centerY + Math.sin(angle) * r;
      if (index === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.closePath();
    ctx.strokeStyle = "#dfe5df";
    ctx.stroke();
  }

  dimensions.forEach((item, index) => {
    const angle = -Math.PI / 2 + (Math.PI * 2 * index) / dimensions.length;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(centerX + Math.cos(angle) * radius, centerY + Math.sin(angle) * radius);
    ctx.strokeStyle = "#e8ece7";
    ctx.stroke();
    ctx.fillStyle = "#4f5c58";
    ctx.fillText(item.label, centerX + Math.cos(angle) * 122, centerY + Math.sin(angle) * 116);
  });

  ctx.beginPath();
  dimensions.forEach((item, index) => {
    const angle = -Math.PI / 2 + (Math.PI * 2 * index) / dimensions.length;
    const r = (radius * state.scores[item.key]) / 100;
    const x = centerX + Math.cos(angle) * r;
    const y = centerY + Math.sin(angle) * r;
    if (index === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.closePath();
  ctx.fillStyle = "rgba(15, 139, 126, 0.2)";
  ctx.strokeStyle = "#0f8b7e";
  ctx.lineWidth = 3;
  ctx.fill();
  ctx.stroke();
}

function renderContracts() {
  document.querySelector("#contractList").innerHTML = state.contracts
    .map(
      (item) => `
        <article class="contract-item ${item.done ? "done" : ""}">
          <input class="contract-check" data-contract="${item.id}" type="checkbox" ${item.done ? "checked" : ""} aria-label="${item.title}" />
          <div>
            <strong>${item.title}</strong>
            <p>${item.detail}</p>
          </div>
          <span class="contract-status">${item.done ? "已执行" : "待执行"}</span>
        </article>
      `
    )
    .join("");
  document.querySelectorAll(".segment").forEach((button) => {
    button.classList.toggle("active", button.dataset.review === state.selectedReview);
  });
}

function renderGuidance() {
  document.querySelector("#scenarioTabs").innerHTML = guidance
    .map(
      (item) => `
        <button class="scenario-tab ${state.activeScenario === item.key ? "active" : ""}" data-scenario="${item.key}" type="button">
          ${item.label}
        </button>
      `
    )
    .join("");
  const item = guidance.find((entry) => entry.key === state.activeScenario) || guidance[0];
  document.querySelector("#guidanceCard").innerHTML = `
    <div class="guidance-section">
      <p class="section-kicker">场景</p>
      <h3>${item.title}</h3>
    </div>
    <div class="guidance-section">
      <strong>可以先这样说</strong>
      <p>${item.say}</p>
    </div>
    <div class="guidance-section">
      <strong>尽量避免</strong>
      <p>${item.avoid}</p>
    </div>
    <div class="guidance-section">
      <strong>今天可以做</strong>
      <p>${item.action}</p>
    </div>
    <div class="guidance-section">
      <strong>需要升级处理的信号</strong>
      <p>${item.signal}</p>
    </div>
  `;
}

function renderAll() {
  renderDashboard();
  renderQuiz();
  renderReport();
  renderContracts();
  renderGuidance();
  refreshIcons();
}

function refreshIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function bindEvents() {
  document.addEventListener("click", (event) => {
    const nav = event.target.closest("[data-view]");
    if (nav) {
      setView(nav.dataset.view);
      return;
    }
    const jump = event.target.closest("[data-view-jump]");
    if (jump) {
      setView(jump.dataset.viewJump);
      return;
    }
    const choice = event.target.closest("[data-choice]");
    if (choice) {
      state.answers[state.currentQuestion] = Number(choice.dataset.choice);
      saveState();
      renderQuiz();
      return;
    }
    const scenario = event.target.closest("[data-scenario]");
    if (scenario) {
      state.activeScenario = scenario.dataset.scenario;
      saveState();
      renderGuidance();
      return;
    }
    const segment = event.target.closest("[data-review]");
    if (segment) {
      state.selectedReview = segment.dataset.review;
      saveState();
      renderContracts();
    }
  });

  document.querySelector("#prevQuestion").addEventListener("click", () => {
    state.currentQuestion = Math.max(0, state.currentQuestion - 1);
    saveState();
    renderQuiz();
  });

  document.querySelector("#nextQuestion").addEventListener("click", () => {
    if (state.answers[state.currentQuestion] === null) {
      const firstChoice = document.querySelector(".choice");
      firstChoice?.focus();
      return;
    }
    if (state.currentQuestion === questions.length - 1) {
      applyQuizScores();
      saveState();
      renderAll();
      setView("report");
      return;
    }
    state.currentQuestion += 1;
    saveState();
    renderQuiz();
  });

  document.querySelector("#contractList").addEventListener("change", (event) => {
    if (!event.target.matches("[data-contract]")) return;
    const contract = state.contracts.find((item) => item.id === event.target.dataset.contract);
    if (contract) contract.done = event.target.checked;
    saveState();
    renderAll();
  });

  document.querySelector("#saveReview").addEventListener("click", () => {
    state.reviewStreak += 1;
    saveState();
    renderAll();
  });

  document.querySelector("#resetButton").addEventListener("click", () => {
    state = structuredClone(initialState);
    saveState();
    renderAll();
    setView("dashboard");
  });

  const dialog = document.querySelector("#profileDialog");
  document.querySelector("#profileButton").addEventListener("click", () => {
    document.querySelector("#profileName").value = state.child.name;
    document.querySelector("#profileAge").value = state.child.age;
    document.querySelector("#profileGrade").value = state.child.grade;
    dialog.showModal();
  });

  document.querySelector("#profileForm").addEventListener("submit", (event) => {
    if (event.submitter?.value === "cancel") return;
    event.preventDefault();
    state.child = {
      name: document.querySelector("#profileName").value.trim() || "小澄",
      age: document.querySelector("#profileAge").value.trim() || "13岁",
      grade: document.querySelector("#profileGrade").value.trim() || "初一",
    };
    saveState();
    renderAll();
    dialog.close();
  });
}

bindEvents();
renderAll();
setView("dashboard");
