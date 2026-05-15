
const aboutCopy = {
  en: {
    kicker: 'Dreamer/Not a salted fish',
    name: 'Alex Lee',
    copy:
      'I like making things people use, and just building fun random things. I am based in Hong Kong. I build across TypeScript, Python, Swift, Go, and modern web/backend stacks. I love math, baseball, supporting the Toronto Blue Jays, vintage motorbikes, especially Hondas and Harleys, vintage cars, and snowboarding in Japan.'
  },
  yue: {
    kicker: '唔係鹹魚',
    name: 'Alex Lee',
    copy:
      '我鍾意整啲人真係會用嘅嘢，亦都鍾意亂諗亂砌啲好玩小項目。我喺香港。我鍾意數學、棒球、支持多倫多藍鳥、復古電單車，特別係本田同哈雷、古董車，仲有去日本滑雪。'
  },
  zhHant: {
    kicker: '不是鹹魚',
    name: 'Alex Lee',
    copy:
      '我喜歡做別人真的會用的東西，也喜歡做各種有趣的隨機小項目。我在香港。我喜歡數學、棒球、支持多倫多藍鳥、復古電單車，特別是本田和哈雷、古董車，還有去日本滑雪。'
  },
  zhHans: {
    kicker: '不是咸鱼',
    name: 'Alex Lee',
    copy:
      '我喜欢做别人真的会用的东西，也喜欢做各种有趣的随机小项目。我在香港。我喜欢数学、棒球、支持多伦多蓝鸟、复古电单车，特别是本田和哈雷、古董车，还有去日本滑雪。'
  }
};

function setAboutLanguage(lang) {
  const content = aboutCopy[lang] || aboutCopy.en;
  document.getElementById('aboutKicker').textContent = content.kicker;
  document.getElementById('aboutName').textContent = content.name;
  document.getElementById('aboutCopy').textContent = content.copy;
  document.querySelectorAll('[data-about-lang]').forEach((button) => {
    button.classList.toggle('active', button.getAttribute('data-about-lang') === lang);
  });
}

const apps = [
  {
    id: 'cantokeys',
    name: 'CantoKeys',
    category: 'Cantonese Keyboard',
    icon: 'img/apps-webp/cantokeys.webp',
    fallback: '粵',
    tagline: 'Jyutping Cantonese keyboard for Traditional Chinese typing.',
    description:
      'CantoKeys is a Cantonese-first iOS keyboard for Jyutping input, fast Traditional Chinese candidates, local learning, fuzzy input options, and privacy-first settings.',
    appStoreUrl: 'https://apps.apple.com/us/app/cantokeys/id6747817415',
    pageUrl: 'apps/cantokeys/'
  },
  {
    id: 'solitide',
    name: 'Solitide',
    category: 'Card Game',
    icon: 'img/apps-webp/solitide.webp',
    fallback: 'A',
    tagline: 'Clean Klondike solitaire with daily challenges and smart hints.',
    description:
      'Solitide is a focused iPhone solitaire game with Draw 1, Draw 3, winnable deals, daily challenges, solver-backed hints, undo, stats, themes, and achievements.',
    appStoreUrl: '',
    pageUrl: 'apps/solitide/'
  },
  {
    id: 'monster-blur',
    name: 'Monster Blur',
    category: 'Photo & Video',
    icon: 'img/apps-webp/monster-blur.webp',
    fallback: '◉',
    tagline: 'Face blur for privacy-safe photo and video sharing.',
    description:
      'Monster Blur helps creators and everyday users detect and mask faces in photos and videos, review before export, and share media with better privacy controls.',
    appStoreUrl: 'https://apps.apple.com/us/app/monster-blur-camera/id6747309460',
    pageUrl: 'apps/monster-blur/'
  },
  {
    id: 'quick-math-duel',
    name: 'Quick Math Duel',
    category: 'Educational Game',
    icon: 'img/apps-webp/quick-math-duel.webp',
    fallback: '+',
    tagline: 'Fast mental math games with adaptive difficulty.',
    description:
      'Quick Math Duel is a speed-focused math game with Speed Tap, Numpad, True or False, adaptive difficulty, daily challenges, streaks, stats, and leaderboards.',
    appStoreUrl: 'https://apps.apple.com/us/app/quick-math-challenge/id6747409960',
    pageUrl: 'apps/quick-math-duel/'
  },
  {
    id: 'sweeep',
    name: 'Sweeep',
    category: 'Photo Utility',
    icon: 'img/apps-webp/sweeep.webp',
    fallback: 'S',
    tagline: 'Swipe-based camera roll cleanup.',
    description:
      'Sweeep helps people review photos quickly, queue unwanted shots, confirm the queue, and safely delete from the iOS photo library.',
    appStoreUrl: 'https://apps.apple.com/us/app/sweeep-photo-cleaner/id6747187567',
    pageUrl: 'apps/sweeep/'
  },
  {
    id: 'mindrocket',
    name: 'MindRocket',
    category: 'Lifestyle',
    icon: 'img/apps-webp/mindrocket.webp',
    fallback: 'M',
    tagline: 'Daily quotes, widgets, streaks, and shareable motivation cards.',
    description:
      'MindRocket is a daily motivational quotes app with curated authors, editorial portraits, widgets, achievements, streaks, and polished share cards.',
    appStoreUrl: '',
    pageUrl: 'apps/mindrocket/'
  },
  {
    id: 'flapeh',
    name: 'FlapEH!',
    category: 'Arcade Game',
    icon: 'img/apps-webp/flapeh.webp',
    fallback: 'Eh',
    tagline: 'Canadian flappy beaver arcade with poutine and maple syrup.',
    description:
      'FlapEH! is a Canadian arcade game where a beaver speeds up over time, collects poutine to slow down, and grabs maple syrup for invincibility.',
    appStoreUrl: '',
    pageUrl: 'apps/flapeh/'
  },
  {
    id: 'snek-quest',
    name: 'Snek Quest',
    category: 'Arcade Game',
    icon: 'img/apps-webp/snek-quest.webp',
    fallback: 'S',
    tagline: 'Neon snake with modes, combos, skins, and daily challenges.',
    description:
      'Snek Quest is a polished snake game with Classic, Daily, Wrap, and Hard modes, combo scoring, unlockable skins, friend challenges, and leaderboards.',
    appStoreUrl: 'https://apps.apple.com/us/app/snek-quest/id6769659366',
    pageUrl: 'apps/snek-quest/'
  },
  {
    id: 'three3three',
    name: 'Three3Three',
    category: 'Puzzle Game',
    icon: 'img/apps-webp/three3three.webp',
    fallback: '3',
    tagline: 'Match-3 puzzle battles with daily and multiplayer modes.',
    description:
      'Three3Three is a dark neon match-3 puzzle game with Blitz, Daily, Classic, Endless, and real-time VS Match modes.',
    appStoreUrl: 'https://apps.apple.com/us/app/three3three/id6769578801',
    pageUrl: 'apps/three3three/'
  },
  {
    id: 'the-emperor',
    name: 'The Emperor',
    category: 'Strategy Game',
    icon: 'img/apps-webp/the-emperor.webp',
    fallback: '帝',
    tagline: 'Dynasty strategy cards built around choice and consequence.',
    description:
      'The Emperor is a strategy card game about ruling a dynasty through fast decisions, court pressure, daily edicts, archives, and leaderboard competition.',
    appStoreUrl: 'https://apps.apple.com/us/app/the-emperors-dynasty/id6747696323',
    pageUrl: 'apps/the-emperor/'
  },
  {
    id: 'siuhongzit',
    name: '邵康節神算卦訣',
    category: 'Chinese Divination',
    icon: 'img/apps-webp/siuhongzit.webp',
    fallback: '卦',
    tagline: 'Calm Chinese divination based on 邵康節神算卦訣.',
    description:
      '邵康節神算卦訣 lets users ask a focused question, receive a traditional Chinese divination result, unlock a plain-language explanation, and save or share readings.',
    appStoreUrl: 'https://apps.apple.com/us/app/%E9%82%B5%E5%BA%B7%E7%AF%80%E7%A5%9E%E7%AE%97%E5%8D%A6%E8%A8%A3/id1086469673',
    pageUrl: 'apps/siuhongzit/'
  },
  {
    id: 'blockade',
    name: 'Blockade',
    category: 'Puzzle Game',
    icon: 'img/apps-webp/blockade.webp',
    fallback: 'B',
    tagline: 'Polished block puzzle with multiple modes, power-ups, and daily progression.',
    description:
      'Blockade is a polished block puzzle game inspired by block blast gameplay, with Classic, Easy, Power-Up, Quest, and Zen modes, plus leaderboards, streaks, and themes.',
    appStoreUrl: '',
    pageUrl: 'apps/blockade/'
  },
  {
    id: 'capygotchi',
    name: 'Capygotchi',
    category: 'Virtual Pet',
    icon: 'img/apps-webp/capygotchi.webp',
    fallback: 'C',
    tagline: 'Cozy capybara companion with widgets, rituals, and walking-based rewards.',
    description:
      'Capygotchi is a cozy capybara companion app with widget-first care, gentle daily rituals, walking adventure rewards, collectibles, and progression designed for calm daily return.',
    appStoreUrl: '',
    pageUrl: 'apps/capygotchi/'
  },
  {
    id: 'near-play',
    name: 'Near Play',
    category: 'Local Multiplayer',
    icon: 'img/apps-webp/near-play.webp',
    fallback: 'NP',
    tagline: 'Offline two-player game collection with nearby local play.',
    description:
      'Near Play is an offline two-player game collection for short local sessions using MultipeerConnectivity over nearby WiFi and Bluetooth, with no internet or account required.',
    appStoreUrl: '',
    pageUrl: 'apps/near-play/'
  },
  {
    id: 'nuanyan',
    name: '暖言',
    category: 'Wellbeing',
    icon: 'img/apps-webp/nuanyan.webp',
    fallback: '暖',
    tagline: 'Gentle language-centric wellbeing app with supportive short-form content.',
    description:
      '暖言 is a gentle language-centric wellbeing app designed for supportive short-form reading moments with low cognitive load and high daily return potential.',
    appStoreUrl: '',
    pageUrl: 'apps/nuanyan/'
  },
  {
    id: 'cantocursing',
    name: 'Canto Cursing',
    category: 'Entertainment',
    icon: 'img/apps-webp/cantocursing.webp',
    fallback: '講',
    tagline: 'Cantonese slang and soundboard-style entertainment.',
    description:
      'Canto Cursing is a lightweight Cantonese entertainment app for Hong Kong slang, funny phrases, and shareable soundboard moments.',
    appStoreUrl: 'https://apps.apple.com/us/app/canto-cursing/id1070983856',
    pageUrl: 'apps/cantocursing/'
  }
];

const windows = Array.from(document.querySelectorAll('.window'));
const titleBars = Array.from(document.querySelectorAll('.window-titlebar'));
const appGrid = document.getElementById('appGrid');
const appDetailWindow = document.getElementById('appDetailWindow');
const aboutWindow = document.getElementById('aboutWindow');
let topZ = 10;
let dragging = null;
let dragStartX = 0;
let dragStartY = 0;
let originalX = 0;
let originalY = 0;
let lastTap = { id: '', time: 0 };

function updateTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const displayHours = hours % 12 || 12;
  document.getElementById('time').textContent = `${displayHours}:${minutes} ${ampm}`;
}

function openWindow(id) {
  const win = document.getElementById(id);
  if (!win) return;
  win.classList.add('active');
  win.style.zIndex = ++topZ;
}

function closeWindow(id) {
  const win = document.getElementById(id);
  if (!win) return;
  win.classList.remove('active');
}

function focusWindow(win) {
  win.style.zIndex = ++topZ;
}

function createAppIcon(app) {
  const button = document.createElement('button');
  button.className = 'app-icon-button';
  button.type = 'button';
  button.setAttribute('data-app-id', app.id);

  const img = document.createElement('img');
  img.src = app.icon;
  img.alt = `${app.name} app icon`;
  img.loading = 'lazy';
  img.width = 68;
  img.height = 68;
  img.onerror = () => {
    img.replaceWith(createFallbackIcon(app));
  };

  const label = document.createElement('span');
  label.className = 'app-icon-name';
  label.textContent = app.name;
  const summary = document.createElement('span');
  summary.className = 'app-icon-summary';
  summary.textContent = `${app.category}. ${app.tagline}`;

  button.append(img, label, summary);
  return button;
}

function createFallbackIcon(app) {
  const fallback = document.createElement('span');
  fallback.className = 'app-icon-fallback';
  fallback.textContent = app.fallback;
  return fallback;
}

function renderApps() {
  appGrid.innerHTML = '';
  const sortedApps = [...apps].sort((a, b) =>
    a.name.localeCompare(b.name, 'en', { sensitivity: 'base', numeric: true })
  );
  sortedApps.forEach((app) => appGrid.appendChild(createAppIcon(app)));
  const appCount = document.getElementById('appCountPill');
  if (appCount) appCount.textContent = `${apps.length} items`;
}

function openAppDetail(app) {
  document.getElementById('appDetailTitle').textContent = app.name;
  document.getElementById('appDetailName').textContent = app.name;
  document.getElementById('appDetailCategory').textContent = app.category;
  document.getElementById('appDetailTagline').textContent = app.tagline;
  document.getElementById('appDetailDescription').textContent = app.description;

  const icon = document.getElementById('appDetailIcon');
  icon.src = app.icon;
  icon.alt = `${app.name} app icon`;
  icon.onerror = () => {
    icon.src = 'img/alexlee.webp';
  };

  const link = document.getElementById('appStoreLink');
  const pageLink = document.getElementById('appPageLink');
  if (app.pageUrl) {
    pageLink.href = app.pageUrl;
    pageLink.hidden = false;
  } else {
    pageLink.hidden = true;
  }

  if (app.appStoreUrl) {
    link.href = app.appStoreUrl;
    link.innerHTML = '<img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=180x60" alt="Download on the App Store" />';
    link.className = 'app-store-badge-link';
    link.removeAttribute('aria-disabled');
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noreferrer');
  } else {
    link.href = '#';
    link.textContent = 'App Store link coming soon';
    link.className = 'primary-action disabled';
    link.removeAttribute('target');
    link.removeAttribute('rel');
    link.setAttribute('aria-disabled', 'true');
  }

  openWindow('appDetailWindow');

  const detailRect = appDetailWindow.getBoundingClientRect();
  if (detailRect.right > window.innerWidth - 16) {
    appDetailWindow.style.left = `${Math.max(16, window.innerWidth - detailRect.width - 16)}px`;
  }
}

function handleOpenTrigger(trigger) {
  const id = trigger.getAttribute('data-open-window');
  if (!id) return;
  openWindow(id);
  document.querySelectorAll('.desktop-icon').forEach((icon) => icon.classList.remove('selected'));
  trigger.classList.add('selected');
}

function maybeDoubleOpen(trigger) {
  const id = trigger.id;
  const now = Date.now();
  const isDouble = lastTap.id === id && now - lastTap.time < 360;
  lastTap = { id, time: now };
  trigger.classList.add('selected');
  if (isDouble || window.matchMedia('(pointer: coarse)').matches) {
    handleOpenTrigger(trigger);
  }
}

renderApps();
if (aboutWindow && aboutWindow.classList.contains('active')) {
  focusWindow(aboutWindow);
}
updateTime();
setInterval(updateTime, 1000);

windows.forEach((win) => {
  win.addEventListener('mousedown', () => focusWindow(win));
  win.addEventListener('touchstart', () => focusWindow(win), { passive: true });
});

titleBars.forEach((bar) => {
  bar.addEventListener('mousedown', (event) => {
    if (event.target.closest('button')) return;
    const win = bar.closest('.window');
    dragging = win;
    focusWindow(win);
    const rect = win.getBoundingClientRect();
    dragStartX = event.clientX;
    dragStartY = event.clientY;
    originalX = rect.left;
    originalY = rect.top;
    win.style.left = `${rect.left}px`;
    win.style.top = `${rect.top}px`;
    win.style.transform = 'none';
  });
});

document.addEventListener('mousemove', (event) => {
  if (!dragging) return;
  event.preventDefault();
  dragging.style.left = `${originalX + event.clientX - dragStartX}px`;
  dragging.style.top = `${originalY + event.clientY - dragStartY}px`;
});

document.addEventListener('mouseup', () => {
  dragging = null;
});

document.addEventListener('click', (event) => {

  const languageButton = event.target.closest('[data-about-lang]');
  if (languageButton) {
    setAboutLanguage(languageButton.getAttribute('data-about-lang'));
    return;
  }
  const close = event.target.closest('[data-close-window]');
  if (close) {
    closeWindow(close.getAttribute('data-close-window'));
    return;
  }

  const minimize = event.target.closest('[data-minimize-window]');
  if (minimize) {
    closeWindow(minimize.getAttribute('data-minimize-window'));
    return;
  }


  const appButton = event.target.closest('.app-icon-button');
  if (appButton) {
    const app = apps.find((candidate) => candidate.id === appButton.getAttribute('data-app-id'));
    if (app) openAppDetail(app);
    return;
  }

  const openTrigger = event.target.closest('[data-open-window]');
  if (openTrigger && !openTrigger.classList.contains('desktop-icon')) {
    handleOpenTrigger(openTrigger);
    return;
  }

  const desktopIcon = event.target.closest('.desktop-icon');
  if (desktopIcon) {
    maybeDoubleOpen(desktopIcon);
    return;
  }

  if (event.target.closest('.desktop-area')) {
    document.querySelectorAll('.desktop-icon').forEach((icon) => icon.classList.remove('selected'));
  }
});

