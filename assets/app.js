'use strict';

/* ============================================================
   Preset collections
   ------------------------------------------------------------
   Each preset is a ready-made word list players can start from
   instead of writing their own. Availability of some items
   (gas/food brands, wildlife) varies by region — that's part of
   the fun. Every list has at least 25 unique entries so it works
   with or without a FREE space.
   ============================================================ */
const PRESETS = [
  {
    title: 'Classic Road Trip',
    freeSpace: true,
    words: [
      'Out-of-state license plate', 'Water tower', 'American flag', 'Billboard',
      'Semi truck', 'Motorcycle', 'RV / camper', 'Police car', 'Roadwork / cones',
      'Bridge', 'Tunnel', 'Rest area', 'Barn', 'Cow', 'Horse', 'Church steeple',
      'Train', 'Airplane overhead', 'Dog in a car', 'Vanity plate',
      'Produce stand', 'Windmill', 'Roadside diner', 'Hay bales', 'Overpass',
      'Hitchhiker', 'Broken-down car', 'Flag on a truck'
    ]
  },
  {
    title: 'Vehicles & Traffic',
    freeSpace: true,
    words: [
      'Semi truck', 'School bus', 'Motorcycle', 'RV / camper', 'Pickup truck',
      'Convertible', 'Sports car', 'Police car', 'Ambulance', 'Fire truck',
      'Tow truck', 'Tractor', 'Minivan', 'Jeep', 'Delivery van', 'Tanker truck',
      'Car pulling a trailer', 'City bus', 'Food truck', 'Classic / vintage car',
      'Electric car', 'Cement mixer', 'Garbage truck', 'Limousine',
      'Flatbed truck', 'Dump truck', 'Car with a roof rack', 'Motorhome towing a car'
    ]
  },
  {
    title: 'Car Colors',
    freeSpace: true,
    words: [
      'Red car', 'Orange car', 'Yellow car', 'Green car', 'Blue car',
      'Purple car', 'Pink car', 'Black car', 'White car', 'Silver car',
      'Gray car', 'Brown car', 'Gold car', 'Beige / tan car', 'Maroon car',
      'Navy blue car', 'Teal car', 'Lime green car', 'Bright red sports car',
      'Matte black car', 'Two-tone car', 'Camo-wrapped car', 'Custom / wrapped car',
      'Bronze / copper car', 'Metallic-flake paint'
    ]
  },
  {
    title: 'Plants & Animals',
    freeSpace: true,
    words: [
      'Cow', 'Horse', 'Sheep', 'Goat', 'Deer', 'Hawk / bird of prey',
      'Crows on a wire', 'Herd of cattle', 'Butterfly', 'Wildflowers',
      'Cornfield', 'Sunflowers', 'Cactus', 'Pine trees', 'Palm tree',
      'Vineyard', 'Pumpkin patch', 'Llama or alpaca', 'Chickens', 'Pig',
      'Pond with ducks', 'Squirrel', 'Grazing horses', 'Wheat field', 'Oak tree', 'Roadside dog'
    ]
  },
  {
    title: 'Gas Stations & Truck Stops',
    freeSpace: true,
    words: [
      'Shell', 'Chevron', 'Exxon', 'Mobil', 'BP', 'Texaco', 'Marathon',
      'Speedway', 'Circle K', '7-Eleven', 'Wawa', 'Sheetz', "Buc-ee's",
      "Love's", 'Pilot', 'Flying J', 'QuikTrip', "Casey's", 'Sunoco', 'Valero',
      'Phillips 66', 'Conoco', 'Sinclair', 'Kwik Trip', 'Maverik', 'RaceTrac',
      'Cumberland Farms'
    ]
  },
  {
    title: 'Fast Food & Roadside Eats',
    freeSpace: true,
    words: [
      "McDonald's", 'Burger King', "Wendy's", 'Taco Bell', 'Subway', 'KFC',
      'Chick-fil-A', "Arby's", 'Sonic', 'Dairy Queen', 'In-N-Out', 'Whataburger',
      "Culver's", 'Popeyes', 'Chipotle', 'Starbucks', "Dunkin'", 'Cracker Barrel',
      'Waffle House', "Denny's", 'IHOP', 'Five Guys', 'Jack in the Box',
      "Carl's Jr / Hardee's", "Domino's", 'Panera'
    ]
  },
  {
    title: 'Desert & Southwest',
    freeSpace: true,
    words: [
      'Saguaro cactus', 'Tumbleweed', 'Red rock formation', 'Sand dunes',
      'Dry riverbed', 'Mesa or butte', 'Dust devil', 'Joshua tree', 'Lizard',
      'Windmill', 'Adobe building', '“Next services 100 miles” sign', 'Sagebrush',
      'Rock arch', 'Dry lake bed', 'Wind turbines', 'Oil pump jack',
      'Cloudless blue sky', 'Distant mountains', 'Roadrunner', 'Cattle skull',
      'Border patrol vehicle', 'Gravel pull-off', 'Heat mirage', 'Prickly pear cactus'
    ]
  },
  {
    title: 'Pacific Northwest',
    freeSpace: true,
    words: [
      'Evergreen forest', 'Fog or mist', 'Waterfall', 'Moss-covered trees',
      'Snow-capped mountain', 'River rapids', 'Ferry', 'Lighthouse', 'Rain',
      'Drive-thru coffee stand', 'Logging truck', 'Lake', 'Kayak or canoe',
      'Bald eagle', 'Covered bridge', 'Ferns', 'Wooden cabin', 'Fishing boat',
      'Rocky coastline', 'Tulip field', 'Mushrooms', 'Mountain lake', 'Deer',
      'Cyclist in rain gear', 'Wind turbine on a ridge'
    ]
  },
  {
    title: 'Great Plains',
    freeSpace: true,
    words: [
      'Grain silo', 'Wind turbine', 'Cattle', 'Round hay bales', 'Cornfield',
      'Wheat field', 'Red barn', 'Tractor', 'Grain elevator', 'Water tower',
      'Windmill', 'Road straight to the horizon', 'Big open sky', 'Freight train',
      'Combine harvester', 'Pronghorn / antelope', 'Grain truck',
      'Endless fence line', 'Dirt side road', 'Small-town water tower', 'Feedlot',
      'Roadside diner', 'Sunflower field', 'Pheasant or quail', 'Abandoned farmhouse'
    ]
  },
  {
    title: 'Mountains',
    freeSpace: true,
    words: [
      'Switchback road', 'Snow-capped peak', 'Pine forest', 'Scenic overlook',
      'River or creek', 'Waterfall', 'Tunnel', 'Ski resort sign', 'Elk or deer',
      'Runaway truck ramp', '“Falling rocks” sign', 'Alpine lake',
      'Wildflower meadow', 'Cabin or lodge', 'Chairlift', 'Trailhead sign',
      'Steep grade sign', 'Cyclist climbing', 'Fog in the valley',
      'Bridge over a gorge', 'Campground sign', 'Boulder field', 'Evergreen slope',
      'Mountain goat or bighorn', 'Waterfall pull-off'
    ]
  }
];

/* ============================================================
   Storage
   ============================================================ */
const CHARSET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // no 0/O/1/I to avoid mix-ups
const STORAGE_BOARDS = 'rtbingo:boards';
const STORAGE_CARD_PREFIX = 'rtbingo:card:';

function loadBoards() {
  try { return JSON.parse(localStorage.getItem(STORAGE_BOARDS)) || {}; }
  catch (e) { return {}; }
}
function saveBoards(boards) {
  localStorage.setItem(STORAGE_BOARDS, JSON.stringify(boards));
}
function saveBoard(seed, board) {
  const boards = loadBoards();
  boards[seed] = board;
  saveBoards(boards);
}
function getBoard(seed) {
  return loadBoards()[seed] || null;
}
function removeBoard(seed) {
  const boards = loadBoards();
  delete boards[seed];
  saveBoards(boards);
  localStorage.removeItem(STORAGE_CARD_PREFIX + seed);
}
function loadCard(seed) {
  try { return JSON.parse(localStorage.getItem(STORAGE_CARD_PREFIX + seed)); }
  catch (e) { return null; }
}
function saveCard(seed, card) {
  localStorage.setItem(STORAGE_CARD_PREFIX + seed, JSON.stringify(card));
}

/* ============================================================
   Seed + shareable data encoding
   ============================================================ */
function genSeed() {
  const arr = new Uint32Array(4);
  crypto.getRandomValues(arr);
  let s = '';
  for (let i = 0; i < 4; i++) s += CHARSET[arr[i] % CHARSET.length];
  return s;
}

function encodeData(obj) {
  const bytes = new TextEncoder().encode(JSON.stringify(obj));
  let bin = '';
  bytes.forEach(b => { bin += String.fromCharCode(b); });
  return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}
function decodeData(str) {
  let b64 = str.replace(/-/g, '+').replace(/_/g, '/');
  while (b64.length % 4) b64 += '=';
  const bin = atob(b64);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return JSON.parse(new TextDecoder().decode(bytes));
}

/* ============================================================
   Board / card logic
   ============================================================ */
function requiredCount(freeSpace) { return freeSpace ? 24 : 25; }

function parseWords(text) {
  const seen = new Set();
  const out = [];
  text.split('\n').forEach(line => {
    const w = line.trim();
    if (!w || w.toUpperCase() === 'FREE') return;
    const key = w.toLowerCase();
    if (seen.has(key)) return;
    seen.add(key);
    out.push(w);
  });
  return out;
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function generateLayout(board) {
  const need = requiredCount(board.freeSpace);
  const chosen = board.words.length > need ? shuffle(board.words).slice(0, need) : shuffle(board.words);
  if (board.freeSpace) {
    return chosen.slice(0, 12).concat(['FREE']).concat(chosen.slice(12));
  }
  return chosen;
}

function newCard(board) {
  const layout = generateLayout(board);
  const checked = layout.map(w => w === 'FREE');
  return { layout, checked };
}

const LINES = (() => {
  const lines = [];
  for (let r = 0; r < 5; r++) lines.push([0, 1, 2, 3, 4].map(c => r * 5 + c));
  for (let c = 0; c < 5; c++) lines.push([0, 1, 2, 3, 4].map(r => r * 5 + c));
  lines.push([0, 6, 12, 18, 24]);
  lines.push([4, 8, 12, 16, 20]);
  return lines;
})();
function checkBingo(checked) {
  return LINES.some(line => line.every(i => checked[i]));
}
function checkBlackout(checked) {
  return checked.every(Boolean);
}

/* ============================================================
   Tiny DOM helper (text-node children only -> XSS-safe for user words)
   ============================================================ */
function h(tag, attrs, ...children) {
  const e = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs || {})) {
    if (v == null || v === false) continue;
    if (k === 'class') e.className = v;
    else if (k.startsWith('on') && typeof v === 'function') e.addEventListener(k.slice(2), v);
    else if (v === true) e.setAttribute(k, '');
    else e.setAttribute(k, v);
  }
  children.flat().forEach(c => {
    if (c == null) return;
    e.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
  });
  return e;
}

function appRoot() { return document.getElementById('app'); }
function clearApp() { appRoot().innerHTML = ''; }

function backHeader(title, extra) {
  return h('div', { class: 'topband small' },
    h('a', { class: 'backlink', href: '#/' }, '← Home'),
    h('div', { class: 'title small' }, title),
    extra || null
  );
}

/* ============================================================
   Views
   ============================================================ */
function renderHome() {
  clearApp();
  const boards = loadBoards();
  const seeds = Object.keys(boards);

  const wrap = h('div', { class: 'view home' },
    h('div', { class: 'topband' },
      h('div', { class: 'title' }, 'ROAD TRIP ', h('span', { class: 'accent' }, 'BINGO')),
      h('div', { class: 'subtitle' }, 'Make a board · share the code · fill your card')
    ),
    h('div', { class: 'actions' },
      h('a', { class: 'btn btn-primary', href: '#/create' }, '+ Create New Board'),
      h('a', { class: 'btn btn-secondary', href: '#/join' }, 'Join a Board')
    )
  );

  if (seeds.length) {
    const list = h('div', { class: 'boardlist' },
      h('div', { class: 'section-label' }, 'Your Boards')
    );
    seeds
      .sort((a, b) => (boards[b].createdAt || 0) - (boards[a].createdAt || 0))
      .forEach(seed => {
        const b = boards[seed];
        list.appendChild(h('div', { class: 'boardrow' },
          h('div', { class: 'boardrow-info' },
            h('div', { class: 'boardrow-title' }, b.title || 'Untitled Board'),
            h('div', { class: 'boardrow-code' }, 'Code: ' + seed)
          ),
          h('div', { class: 'boardrow-actions' },
            h('a', { class: 'btn btn-small btn-primary', href: '#/play/' + seed }, 'Play'),
            h('a', { class: 'btn btn-small btn-outline', href: '#/board/' + seed }, 'Share'),
            h('button', {
              type: 'button', class: 'btn btn-small btn-danger', onclick: () => {
                if (confirm('Remove "' + (b.title || 'this board') + '" from this device? Friends who have the link can still play it.')) {
                  removeBoard(seed);
                  renderHome();
                }
              }
            }, 'Remove')
          )
        ));
      });
    wrap.appendChild(list);
  }

  appRoot().appendChild(wrap);
}

function renderCreate() {
  clearApp();
  const titleInput = h('input', { type: 'text', id: 'c-title', maxlength: '60', placeholder: 'e.g. Southwest Road Trip' });
  const freeCheck = h('input', { type: 'checkbox', id: 'c-free', checked: true });
  const wordsArea = h('textarea', { id: 'c-words', rows: '10', placeholder: 'One word or phrase per line…\nGas station\nCow\nRest stop\nLicense plate game\n…' });
  const counter = h('div', { class: 'counter' }, '');
  const errorBox = h('div', { class: 'error', style: 'display:none' });

  const presetSelect = h('select', { id: 'c-preset' },
    h('option', { value: '' }, 'Custom — write your own'),
    ...PRESETS.map((p, i) => h('option', { value: String(i) }, p.title))
  );

  // Remember whether the title was typed by the user, so switching
  // presets can safely refresh an auto-filled title but never clobber
  // one they wrote themselves.
  let titleManual = false;
  titleInput.addEventListener('input', () => { titleManual = true; });

  presetSelect.addEventListener('change', () => {
    if (presetSelect.value === '') return; // "Custom" — leave their text alone
    const p = PRESETS[Number(presetSelect.value)];
    if (wordsArea.value.trim() && !confirm('Replace the current word list with “' + p.title + '”?')) {
      presetSelect.value = ''; // they backed out — restore Custom
      return;
    }
    if (!titleManual) titleInput.value = p.title;
    wordsArea.value = p.words.join('\n');
    freeCheck.checked = p.freeSpace;
    updateCounter();
  });

  function updateCounter() {
    const words = parseWords(wordsArea.value);
    const need = requiredCount(freeCheck.checked);
    counter.textContent = words.length + ' unique word' + (words.length === 1 ? '' : 's') + ' entered (need at least ' + need + ').';
    counter.className = 'counter ' + (words.length >= need ? 'ok' : 'warn');
  }
  wordsArea.addEventListener('input', updateCounter);
  freeCheck.addEventListener('change', updateCounter);

  const form = h('form', {
    class: 'card-form', onsubmit: (e) => {
      e.preventDefault();
      errorBox.style.display = 'none';
      const title = titleInput.value.trim() || 'Road Trip Bingo';
      const freeSpace = freeCheck.checked;
      const words = parseWords(wordsArea.value);
      const need = requiredCount(freeSpace);
      if (words.length < need) {
        errorBox.textContent = 'Need at least ' + need + ' unique words — you have ' + words.length + '.';
        errorBox.style.display = 'block';
        return;
      }
      const boards = loadBoards();
      let seed = genSeed();
      while (boards[seed]) seed = genSeed();
      saveBoard(seed, { title, words, freeSpace, createdAt: Date.now() });
      location.hash = '#/board/' + seed;
    }
  },
    h('label', { for: 'c-preset' }, 'Start from a collection'),
    presetSelect,
    h('label', { for: 'c-title' }, 'Board Title'),
    titleInput,
    h('label', { class: 'checkbox-label' }, freeCheck, 'Include a FREE center space'),
    h('label', { for: 'c-words' }, 'Words (one per line)'),
    wordsArea,
    counter,
    errorBox,
    h('button', { type: 'submit', class: 'btn btn-primary btn-block' }, 'Create Board')
  );

  const wrap = h('div', { class: 'view create' },
    backHeader('Create a Board'),
    h('p', { class: 'hint' }, 'Add more words than you need — each player’s card pulls a random subset in a random order, so cards vary even more.'),
    form
  );
  appRoot().appendChild(wrap);
  updateCounter();
}

function renderBoardShare(seed) {
  clearApp();
  const board = getBoard(seed);
  if (!board) { renderMissing(seed); return; }

  const data = encodeData({ t: board.title, w: board.words, f: board.freeSpace });
  const url = location.origin + location.pathname + '#/play/' + seed + '?d=' + data;

  const linkBox = h('input', { type: 'text', readonly: true, value: url, onclick: (e) => e.target.select() });
  const copyBtn = h('button', {
    type: 'button', class: 'btn btn-outline', onclick: async () => {
      try {
        await navigator.clipboard.writeText(url);
      } catch (e) {
        linkBox.select();
        document.execCommand('copy');
      }
      copyBtn.textContent = 'Copied!';
      setTimeout(() => { copyBtn.textContent = 'Copy Link'; }, 1500);
    }
  }, 'Copy Link');

  const wrap = h('div', { class: 'view share' },
    backHeader('Board Created!'),
    h('div', { class: 'code-display' }, seed),
    h('div', { class: 'code-label' }, 'Board code — say it out loud, and send the link below'),
    h('div', { class: 'sharebox' }, linkBox, copyBtn),
    h('p', { class: 'hint' }, 'Anyone who opens the link gets the same word list but their own randomly shuffled card, so everyone plays from a different layout.'),
    h('div', { class: 'actions' },
      h('a', { class: 'btn btn-primary btn-block', href: '#/play/' + seed }, 'Play This Board'),
      h('a', { class: 'btn btn-secondary btn-block', href: '#/' }, 'Back Home')
    )
  );
  appRoot().appendChild(wrap);
}

function parseSharedLink(text) {
  const m = text.match(/#\/play\/([A-Za-z0-9]{4})(?:\?d=([A-Za-z0-9_-]+))?/);
  if (m) return { seed: m[1].toUpperCase(), data: m[2] || null };
  const trimmed = text.trim();
  if (/^[A-Za-z0-9]{4}$/.test(trimmed)) {
    const seed = trimmed.toUpperCase();
    if (getBoard(seed)) return { seed, data: null };
  }
  return null;
}

function renderJoin() {
  clearApp();
  const input = h('textarea', { rows: '3', placeholder: 'Paste the board link your friend sent you…' });
  const errorBox = h('div', { class: 'error', style: 'display:none' });
  const form = h('form', {
    class: 'card-form', onsubmit: (e) => {
      e.preventDefault();
      errorBox.style.display = 'none';
      const parsed = parseSharedLink(input.value.trim());
      if (!parsed) {
        errorBox.textContent = 'Couldn’t find a board in that. Paste the full link your friend shared (it contains "#/play/").';
        errorBox.style.display = 'block';
        return;
      }
      location.hash = '#/play/' + parsed.seed + (parsed.data ? '?d=' + parsed.data : '');
    }
  },
    h('label', {}, 'Paste Board Link'),
    input,
    errorBox,
    h('button', { type: 'submit', class: 'btn btn-primary btn-block' }, 'Join Board')
  );
  const wrap = h('div', { class: 'view join' },
    backHeader('Join a Board'),
    h('p', { class: 'hint' }, 'Ask whoever created the board for the link they got — the board code is built right into it.'),
    form
  );
  appRoot().appendChild(wrap);
}

function renderMissing(seed) {
  clearApp();
  const wrap = h('div', { class: 'view' },
    backHeader('Board Not Found'),
    h('p', { class: 'hint' }, 'This board (code ' + seed + ') isn’t on this device yet. Ask for the full share link, or use “Join a Board” and paste it in.'),
    h('div', { class: 'actions' },
      h('a', { class: 'btn btn-primary btn-block', href: '#/join' }, 'Join a Board'),
      h('a', { class: 'btn btn-secondary btn-block', href: '#/' }, 'Back Home')
    )
  );
  appRoot().appendChild(wrap);
}

function renderPlay(rawSeed, query) {
  clearApp();
  const seed = rawSeed.toUpperCase();
  let board = getBoard(seed);
  const d = query.get('d');

  if (d) {
    try {
      const decoded = decodeData(d);
      if (decoded && Array.isArray(decoded.w) && decoded.w.length) {
        board = {
          title: typeof decoded.t === 'string' && decoded.t ? decoded.t : 'Road Trip Bingo',
          words: decoded.w.filter(w => typeof w === 'string'),
          freeSpace: !!decoded.f,
          createdAt: board ? board.createdAt : Date.now()
        };
        saveBoard(seed, board);
        history.replaceState(null, '', location.pathname + location.search + '#/play/' + seed);
      }
    } catch (e) { /* ignore malformed data, fall back to stored board (if any) */ }
  }

  if (!board || board.words.length < requiredCount(board.freeSpace)) { renderMissing(seed); return; }

  let card = loadCard(seed);
  if (!card || !Array.isArray(card.layout) || card.layout.length !== 25) {
    card = newCard(board);
    saveCard(seed, card);
  }

  renderPlayUI(seed, board, card);
}

function renderPlayUI(seed, board, initialCard) {
  let card = initialCard;
  let hadBingo = checkBingo(card.checked);

  const status = h('div', { class: 'status' });
  const grid = h('div', { class: 'grid' });

  function updateStatus() {
    status.innerHTML = '';
    if (checkBlackout(card.checked)) {
      status.appendChild(h('div', { class: 'status-pill blackout' }, '⭐ BLACKOUT!'));
    } else if (checkBingo(card.checked)) {
      status.appendChild(h('div', { class: 'status-pill bingo' }, '🎉 BINGO!'));
    }
  }

  function showBingoModal(blackout) {
    const overlay = h('div', { class: 'modal-overlay', onclick: (e) => { if (e.target === overlay) overlay.remove(); } });
    overlay.appendChild(h('div', { class: 'modal' },
      h('div', { class: 'modal-banner' }, blackout ? '⭐ BLACKOUT! ⭐' : '🎉 BINGO! 🎉'),
      h('div', { class: 'modal-sub' }, blackout ? 'Every square filled — legendary road trip.' : 'Five in a row!'),
      h('div', { class: 'confetti' }),
      h('button', { type: 'button', class: 'btn btn-primary', onclick: () => overlay.remove() }, 'Keep Playing')
    ));
    document.body.appendChild(overlay);
  }

  function renderGrid() {
    grid.innerHTML = '';
    card.layout.forEach((word, i) => {
      const isFree = word === 'FREE';
      const cell = h('button', {
        type: 'button',
        class: 'cell' + (card.checked[i] ? ' checked' : '') + (isFree ? ' free' : ''),
        disabled: isFree
      }, h('span', {}, isFree ? '★ FREE' : word));
      if (!isFree) {
        cell.addEventListener('click', () => {
          card.checked[i] = !card.checked[i];
          saveCard(seed, card);
          const nowBingo = checkBingo(card.checked);
          renderGrid();
          updateStatus();
          if (nowBingo && !hadBingo) showBingoModal(checkBlackout(card.checked));
          hadBingo = nowBingo;
        });
      }
      grid.appendChild(cell);
    });
  }

  const controls = h('div', { class: 'play-controls' },
    h('button', {
      type: 'button', class: 'btn btn-outline', onclick: () => {
        if (confirm('Get a new random card for this board? This clears your current progress.')) {
          card = newCard(board);
          saveCard(seed, card);
          hadBingo = false;
          renderGrid();
          updateStatus();
        }
      }
    }, 'New Card'),
    h('a', { class: 'btn btn-outline', href: '#/board/' + seed }, 'Share Board')
  );

  renderGrid();
  updateStatus();

  const wrap = h('div', { class: 'view play' },
    backHeader(board.title, h('div', { class: 'code-pill' }, seed)),
    status,
    grid,
    controls
  );
  appRoot().appendChild(wrap);
}

/* ============================================================
   Router
   ============================================================ */
function route() {
  const hash = location.hash.slice(1) || '/';
  const qIndex = hash.indexOf('?');
  const path = qIndex === -1 ? hash : hash.slice(0, qIndex);
  const query = new URLSearchParams(qIndex === -1 ? '' : hash.slice(qIndex + 1));
  const parts = path.split('/').filter(Boolean);

  if (parts.length === 0) return renderHome();
  if (parts[0] === 'create') return renderCreate();
  if (parts[0] === 'join') return renderJoin();
  if (parts[0] === 'board' && parts[1]) return renderBoardShare(parts[1].toUpperCase());
  if (parts[0] === 'play' && parts[1]) return renderPlay(parts[1], query);
  return renderHome();
}

window.addEventListener('hashchange', route);
window.addEventListener('DOMContentLoaded', route);
