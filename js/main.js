import * as THREE from 'three';

/* =========================================================
   PROJECT DATA  (edit freely)
   ========================================================= */
// Ordered by impact (strongest first). Descriptions reflect the actual repo
// contents as verified on GitHub — not just titles.
const PROJECTS = [
  {
    icon: '🎨', featured: true, private: true,
    title: { en: 'TrustAngle — AI Social-Media Platform', ar: 'TrustAngle — منصة سوشيال ميديا بالذكاء الاصطناعي' },
    desc: {
      en: 'Graduation project. A microservices SaaS that auto-generates social-media designs via a hybrid diffusion pipeline — a discrete-diffusion LayoutDM (element layout) + a continuous DDPM (256×256 backgrounds), both trained from scratch (no pre-trained generative models). Built on Next.js 16 + NestJS 10 + FastAPI with a 21-model PostgreSQL schema, JWT/RBAC, multi-tenant workspaces & billing.',
      ar: 'مشروع التخرّج. منصة SaaS بمعمارية Microservices تولّد تصاميم سوشيال ميديا عبر خط diffusion هجين — نموذج LayoutDM (تخطيط العناصر) + نموذج DDPM (خلفيات 256×256)، كلاهما مدرّب من الصفر دون نماذج جاهزة. مبنية على Next.js 16 + NestJS 10 + FastAPI، مع 21 جدولاً في PostgreSQL، ومصادقة JWT/RBAC، ومساحات عمل واشتراكات.'
    },
    tags: ['Diffusion (DDPM/LayoutDM)', 'PyTorch', 'Next.js 16', 'NestJS', 'FastAPI', 'PostgreSQL'], link: 'https://github.com/Malekmontanaimam'
  },
  {
    icon: '🧠', featured: true,
    title: { en: 'RecomindSystem — Production RAG', ar: 'RecomindSystem — نظام RAG إنتاجي' },
    desc: {
      en: 'Production RAG with DeepSeek-V3, multimodal BLIP2 + AraBERT retrieval over a FAISS/HNSW vector store, plus an ALS hybrid recommender. 90%+ cross-lingual accuracy, 40% lower latency.',
      ar: 'نظام RAG إنتاجي بـ DeepSeek-V3، استرجاع متعدد الوسائط (BLIP2 + AraBERT) فوق FAISS/HNSW، مع نظام توصية هجين (ALS). دقة تتجاوز 90% وزمن استجابة أقل بـ 40%.'
    },
    tags: ['DeepSeek-V3', 'FAISS', 'BLIP2', 'AraBERT', 'FastAPI'], link: 'https://github.com/Malekmontanaimam'
  },
  {
    icon: '📚', featured: true,
    title: { en: 'Mualimi (معلّمي) — Offline AI Tutor', ar: 'معلّمي — مساعد تعليمي ذكي يعمل دون إنترنت' },
    desc: {
      en: 'Offline AI tutoring platform: Gemma running via Ollama with a LangChain + ChromaDB RAG engine. React 19 PWA + FastAPI (30+ endpoints), image-based problem solving, adaptive quizzes & gamification. Built for the Gemma Hackathon.',
      ar: 'منصة تعليم ذكية تعمل دون إنترنت: نموذج Gemma عبر Ollama مع محرك RAG (LangChain + ChromaDB). واجهة React 19 (PWA) و FastAPI بأكثر من 30 نقطة، حلّ المسائل بالصور، اختبارات تكيّفية وتحفيز. لمسابقة Gemma Hackathon.'
    },
    tags: ['Gemma', 'Ollama', 'LangChain', 'ChromaDB', 'React 19'], link: 'https://github.com/Malekmontanaimam/mualimi_app'
  },
  {
    icon: '⁉️',
    title: { en: 'Arabic Text Separators — Punctuation NLP', ar: 'فواصل النص العربي — استعادة الترقيم' },
    desc: {
      en: 'Deep-learning punctuation restoration for Arabic: a 7-class token-classification model (BiLSTM / Transformer, plus AraBERT transfer learning) on the UNPC corpus — ~96.2% validation accuracy.',
      ar: 'استعادة علامات الترقيم للنص العربي بالتعلّم العميق: تصنيف رموز إلى 7 فئات (BiLSTM / Transformer مع نقل تعلّم AraBERT) على مجموعة UNPC — دقة تحقّق ≈ 96.2%.'
    },
    tags: ['TensorFlow', 'BiLSTM', 'AraBERT', 'Arabic NLP'], link: 'https://github.com/Malekmontanaimam/Arabic-text-separators'
  },
  {
    icon: '🎓',
    title: { en: 'Lecture Saver 3000 — Lecture RAG', ar: 'Lecture Saver 3000 — RAG للمحاضرات' },
    desc: {
      en: 'A retrieval-augmented Q&A system over lecture material: an ingestion pipeline builds a local vector DB, then questions are answered from your own notes.',
      ar: 'نظام أسئلة وأجوبة معزّز بالاسترجاع فوق محتوى المحاضرات: خط إدخال يبني قاعدة شعاعية محلية، ثم يجيب عن أسئلتك من ملاحظاتك.'
    },
    tags: ['Python', 'RAG', 'Vector DB', 'Embeddings'], link: 'https://github.com/Malekmontanaimam/lecture-saver-3000'
  },
  {
    icon: '🩺',
    title: { en: 'MediCore — Medical Platform', ar: 'MediCore — منصة إدارة طبية' },
    desc: {
      en: 'Full Laravel backend: 20+ interconnected models, multi-role RBAC with 2FA & Sanctum tokens, appointment scheduling, dynamic doctor search, and secure medical-file management.',
      ar: 'باك-إند Laravel كامل: أكثر من 20 نموذجاً مترابطاً، صلاحيات متعددة الأدوار مع مصادقة ثنائية ورموز Sanctum، جدولة مواعيد، بحث ديناميكي عن الأطباء، وإدارة ملفات طبية آمنة.'
    },
    tags: ['Laravel', 'PHP', 'MySQL', 'Sanctum', 'REST'], link: 'https://github.com/Malekmontanaimam'
  },
  {
    icon: '🎮',
    title: { en: 'threejs1 — 3D Game in Three.js', ar: 'threejs1 — لعبة ثلاثية الأبعاد بـ Three.js' },
    desc: {
      en: 'A browser 3D game built with Three.js — custom water shader (WaterPlus), a flying jet, and a physics module. Hands-on real-time WebGL rendering.',
      ar: 'لعبة ثلاثية الأبعاد في المتصفح مبنية بـ Three.js — شيدر ماء مخصّص (WaterPlus)، طائرة، ووحدة فيزياء. عمل مباشر على عرض WebGL في الزمن الحقيقي.'
    },
    tags: ['Three.js', 'WebGL', 'Shaders', 'JavaScript'], link: 'https://github.com/Malekmontanaimam/threejs1'
  },
  {
    icon: '🐸',
    title: { en: 'Smart Frog Shooter — CV Game Bot', ar: 'Smart Frog Shooter — بوت رؤية حاسوبية' },
    desc: {
      en: 'A computer-vision game-automation agent: live screen capture, image preprocessing, game-state detection, and a strategy engine that decides and acts in real time.',
      ar: 'وكيل أتمتة ألعاب بالرؤية الحاسوبية: التقاط مباشر للشاشة، معالجة صور، كشف حالة اللعبة، ومحرّك استراتيجية يقرّر ويتصرّف في الزمن الحقيقي.'
    },
    tags: ['Python', 'Computer Vision', 'Automation'], link: 'https://github.com/Malekmontanaimam/smart-frog-shooter'
  },
  {
    icon: '🧩',
    title: { en: 'ZeroSquare — AI Search Algorithms', ar: 'ZeroSquare — خوارزميات بحث ذكاء اصطناعي' },
    desc: {
      en: 'A from-scratch toolkit of classic AI search & optimization: A*, BFS, DFS, Uniform-Cost Search, and Hill-Climbing over a grid/state framework.',
      ar: 'حقيبة أدوات من الصفر لخوارزميات البحث والتحسين الكلاسيكية: A*، BFS، DFS، البحث ذو التكلفة المنتظمة، وتسلّق التل، فوق إطار شبكة/حالات.'
    },
    tags: ['Python', 'A*', 'Search', 'Optimization'], link: 'https://github.com/Malekmontanaimam/ZeroSquare'
  },
  {
    icon: '🏠',
    title: { en: 'House Prices — ML Regression', ar: 'أسعار المنازل — انحدار تعلّم آلي' },
    desc: {
      en: 'End-to-end regression on the Ames housing dataset: feature engineering and a model bake-off (Random Forest, Gradient Boosting, HistGB) — best MAE ≈ $15.4k.',
      ar: 'مشروع انحدار متكامل على بيانات منازل Ames: هندسة ميزات ومقارنة نماذج (Random Forest، Gradient Boosting، HistGB) — أفضل خطأ MAE ≈ 15.4 ألف دولار.'
    },
    tags: ['Python', 'scikit-learn', 'Gradient Boosting'], link: 'https://github.com/Malekmontanaimam/home-data-for-ml-course'
  },
  {
    icon: '💊',
    title: { en: 'Drug Store — Laravel Backend', ar: 'متجر أدوية — باك-إند Laravel' },
    desc: {
      en: 'A complete Laravel + MySQL backend for a pharmacy: REST API, admin dashboard & auth, product/category CRUD, search/filter, and an order-management system.',
      ar: 'باك-إند Laravel + MySQL كامل لصيدلية: واجهة REST، لوحة تحكم ومصادقة، عمليات CRUD للمنتجات والفئات، بحث وفلترة، ونظام إدارة طلبات.'
    },
    tags: ['Laravel', 'PHP', 'MySQL', 'REST API'], link: 'https://github.com/Malekmontanaimam/Drug-Store-1'
  },
  {
    icon: '🚢',
    title: { en: 'Titanic — ML from Disaster', ar: 'Titanic — تعلّم آلي' },
    desc: {
      en: 'The classic Kaggle survival-prediction pipeline: data cleaning, feature engineering, model training, and evaluation.',
      ar: 'مشروع Kaggle الكلاسيكي للتنبؤ بالنجاة: تنظيف بيانات، هندسة ميزات، تدريب نماذج، وتقييم.'
    },
    tags: ['Python', 'scikit-learn', 'Pandas'], link: 'https://github.com/Malekmontanaimam/Titanic---Machine-Learning-from-Disaster'
  }
];

/* =========================================================
   RENDER PROJECTS
   ========================================================= */
const grid = document.getElementById('projects-grid');
function renderProjects(lang) {
  grid.innerHTML = PROJECTS.map(p => `
    <article class="proj-card reveal">
      ${p.featured ? `<span class="proj-featured">Featured</span>` : ''}
      <div class="proj-head">
        <span class="proj-icon">${p.icon}</span>
        <div class="proj-links">
          ${p.private
            ? `<span class="proj-private" title="${lang === 'ar' ? 'مستودع خاص' : 'Private repository'}">🔒 ${lang === 'ar' ? 'خاص' : 'Private'}</span>`
            : `<a href="${p.link}" target="_blank" rel="noopener" title="GitHub">Code ↗</a>`}
        </div>
      </div>
      <h3>${p.title[lang]}</h3>
      <p>${p.desc[lang]}</p>
      <div class="proj-tags">${p.tags.map(t => `<span># ${t}</span>`).join('')}</div>
    </article>`).join('');
  bindCardGlow();
  observeReveals();
}

function bindCardGlow() {
  document.querySelectorAll('.proj-card').forEach(card => {
    card.addEventListener('pointermove', e => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - r.left}px`);
      card.style.setProperty('--my', `${e.clientY - r.top}px`);
    });
  });
}

/* =========================================================
   LANGUAGE TOGGLE (EN / AR)
   ========================================================= */
let lang = 'en';
const langBtn = document.getElementById('lang-toggle');
function applyLang(l) {
  lang = l;
  const html = document.documentElement;
  html.lang = l;
  html.dir = l === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-en]').forEach(el => {
    el.innerHTML = el.getAttribute(`data-${l}`);
  });
  langBtn.textContent = l === 'en' ? 'العربية' : 'English';
  renderProjects(l);
}
langBtn.addEventListener('click', () => applyLang(lang === 'en' ? 'ar' : 'en'));

/* =========================================================
   DOWNLOAD CV  → opens print dialog (save as PDF)
   ========================================================= */
document.getElementById('download-cv').addEventListener('click', e => {
  e.preventDefault();
  window.print();
});

/* =========================================================
   REVEAL ON SCROLL
   ========================================================= */
let revealObserver;
function observeReveals() {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); revealObserver.unobserve(en.target); } });
    }, { threshold: 0.15 });
  }
  document.querySelectorAll('.reveal:not(.in)').forEach(el => revealObserver.observe(el));
}

/* =========================================================
   NAV scroll state + count-up stats + year
   ========================================================= */
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 40));
document.getElementById('year').textContent = new Date().getFullYear();

function countUp(el) {
  const target = +el.dataset.count; let cur = 0;
  const step = Math.max(1, Math.round(target / 45));
  const tick = () => { cur += step; if (cur >= target) { el.textContent = target; return; } el.textContent = cur; requestAnimationFrame(tick); };
  tick();
}
const statObs = new IntersectionObserver((entries) => {
  entries.forEach(en => { if (en.isIntersecting) { countUp(en.target); statObs.unobserve(en.target); } });
}, { threshold: 0.6 });
document.querySelectorAll('.stat-num').forEach(el => statObs.observe(el));

/* =========================================================
   ABOUT CARD 3D TILT
   ========================================================= */
const tilt = document.getElementById('tilt-card');
if (tilt) {
  const inner = tilt.querySelector('.about-card-inner');
  tilt.addEventListener('pointermove', e => {
    const r = tilt.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - .5;
    const py = (e.clientY - r.top) / r.height - .5;
    inner.style.transform = `rotateY(${px * 10}deg) rotateX(${-py * 10}deg) translateZ(8px)`;
  });
  tilt.addEventListener('pointerleave', () => { inner.style.transform = 'rotateY(0) rotateX(0)'; });
}

/* =========================================================
   THREE.JS  — interactive particle constellation
   ========================================================= */
const canvas = document.getElementById('bg-canvas');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);

const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x05060a, 0.06);

const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.z = 14;

/* ---- Particle field ---- */
const COUNT = window.innerWidth < 768 ? 90 : 170;
const SPREAD = 24;
const positions = new Float32Array(COUNT * 3);
const velocities = [];
for (let i = 0; i < COUNT; i++) {
  positions[i * 3]     = (Math.random() - .5) * SPREAD;
  positions[i * 3 + 1] = (Math.random() - .5) * SPREAD * .6;
  positions[i * 3 + 2] = (Math.random() - .5) * SPREAD * .5;
  velocities.push(new THREE.Vector3((Math.random() - .5) * .01, (Math.random() - .5) * .01, (Math.random() - .5) * .01));
}
const pGeo = new THREE.BufferGeometry();
pGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

/* round glowing sprite for points */
function makeDot() {
  const c = document.createElement('canvas'); c.width = c.height = 64;
  const x = c.getContext('2d');
  const g = x.createRadialGradient(32, 32, 0, 32, 32, 32);
  g.addColorStop(0, 'rgba(94,234,212,1)');
  g.addColorStop(.4, 'rgba(124,131,255,.6)');
  g.addColorStop(1, 'rgba(124,131,255,0)');
  x.fillStyle = g; x.fillRect(0, 0, 64, 64);
  return new THREE.CanvasTexture(c);
}
const pMat = new THREE.PointsMaterial({
  size: .42, map: makeDot(), transparent: true, depthWrite: false,
  blending: THREE.AdditiveBlending, opacity: .9
});
const points = new THREE.Points(pGeo, pMat);
scene.add(points);

/* ---- Lines between near particles ---- */
const lineMat = new THREE.LineBasicMaterial({ color: 0x5eead4, transparent: true, opacity: .14, blending: THREE.AdditiveBlending });
const lineGeo = new THREE.BufferGeometry();
const maxLineVerts = COUNT * COUNT;
const linePos = new Float32Array(maxLineVerts * 3);
lineGeo.setAttribute('position', new THREE.BufferAttribute(linePos, 3));
const lines = new THREE.LineSegments(lineGeo, lineMat);
scene.add(lines);

/* ---- central wireframe icosahedron (the "core") ---- */
const core = new THREE.Mesh(
  new THREE.IcosahedronGeometry(2.4, 1),
  new THREE.MeshBasicMaterial({ color: 0x7c83ff, wireframe: true, transparent: true, opacity: .25 })
);
scene.add(core);
const coreGlow = new THREE.Mesh(
  new THREE.IcosahedronGeometry(2.38, 1),
  new THREE.MeshBasicMaterial({ color: 0x5eead4, wireframe: true, transparent: true, opacity: .08 })
);
scene.add(coreGlow);

/* ---- interaction ---- */
const mouse = new THREE.Vector2(0, 0);
const target = new THREE.Vector2(0, 0);
window.addEventListener('pointermove', e => {
  target.x = (e.clientX / window.innerWidth - .5);
  target.y = (e.clientY / window.innerHeight - .5);
});
let scrollY = 0;
window.addEventListener('scroll', () => { scrollY = window.scrollY / window.innerHeight; });

const CONNECT_DIST = 3.4;
const clock = new THREE.Clock();

function animate() {
  requestAnimationFrame(animate);
  const t = clock.getElapsedTime();
  const pos = pGeo.attributes.position.array;

  // drift particles
  for (let i = 0; i < COUNT; i++) {
    pos[i*3]   += velocities[i].x; pos[i*3+1] += velocities[i].y; pos[i*3+2] += velocities[i].z;
    if (Math.abs(pos[i*3])   > SPREAD/2)     velocities[i].x *= -1;
    if (Math.abs(pos[i*3+1]) > SPREAD*.3)    velocities[i].y *= -1;
    if (Math.abs(pos[i*3+2]) > SPREAD*.25)   velocities[i].z *= -1;
  }
  pGeo.attributes.position.needsUpdate = true;

  // build connection lines
  let v = 0;
  for (let i = 0; i < COUNT; i++) {
    for (let j = i + 1; j < COUNT; j++) {
      const dx = pos[i*3]-pos[j*3], dy = pos[i*3+1]-pos[j*3+1], dz = pos[i*3+2]-pos[j*3+2];
      const d = Math.sqrt(dx*dx+dy*dy+dz*dz);
      if (d < CONNECT_DIST) {
        linePos[v++] = pos[i*3]; linePos[v++] = pos[i*3+1]; linePos[v++] = pos[i*3+2];
        linePos[v++] = pos[j*3]; linePos[v++] = pos[j*3+1]; linePos[v++] = pos[j*3+2];
      }
    }
  }
  lineGeo.setDrawRange(0, v / 3);
  lineGeo.attributes.position.needsUpdate = true;

  // ease mouse → camera parallax
  mouse.x += (target.x - mouse.x) * .04;
  mouse.y += (target.y - mouse.y) * .04;
  camera.position.x = mouse.x * 4;
  camera.position.y = -mouse.y * 2.4 - scrollY * 1.2;
  camera.lookAt(0, 0, 0);

  points.rotation.y = t * .03;
  lines.rotation.y = t * .03;
  core.rotation.x = t * .12; core.rotation.y = t * .16;
  coreGlow.rotation.x = -t * .1; coreGlow.rotation.y = -t * .14;
  const pulse = 1 + Math.sin(t * 1.4) * .04;
  core.scale.setScalar(pulse); coreGlow.scale.setScalar(pulse * 1.02);

  renderer.render(scene, camera);
}
animate();

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

/* =========================================================
   BOOT
   ========================================================= */
applyLang('en');
observeReveals();
window.addEventListener('load', () => {
  setTimeout(() => document.getElementById('loader').classList.add('hidden'), 600);
});
