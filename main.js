// ── DATA ────────────────────────────────────────────────────────────────────

const agents = [
  { icon: 'clapperboard', name: 'Director Agent', desc: 'Orchestrates the entire production pipeline. Interprets your prompt and issues creative direction to every downstream agent.', tag: 'Orchestration' },
  { icon: 'camera', name: 'Cinematographer', desc: 'Plans shot composition, camera movement, depth-of-field and lighting to match your chosen visual style.', tag: 'Visuals' },
  { icon: 'file-text', name: 'Script Agent', desc: 'Turns your prompt into a full screenplay — scenes, dialogue, voiceover cues, and pacing beats.', tag: 'Narrative' },
  { icon: 'users', name: 'Character Agent', desc: 'Creates and maintains consistent character appearances, expressions and wardrobe across every scene.', tag: 'Consistency' },
  { icon: 'mic', name: 'Voice Agent', desc: 'Generates cinematic voiceover with lip-synced delivery across 100+ lifelike voices in 40 languages.', tag: 'Audio' },
  { icon: 'music', name: 'Music Composer', desc: 'Scores an original adaptive soundtrack — genre, mood and tempo change dynamically with each scene.', tag: 'Score' },
  { icon: 'volume-2', name: 'Sound Design', desc: 'Layers ambient sound, Foley effects and spatial audio to make every scene feel real and immersive.', tag: 'SFX' },
  { icon: 'scissors', name: 'Editing Agent', desc: 'Assembles the final cut with professional pacing, transitions, colour grading and motion graphics.', tag: 'Post' },
  { icon: 'subtitles', name: 'Caption Agent', desc: 'Auto-generates and burns in accurate multi-language subtitles with cinematic typography.', tag: 'Accessibility' },
  { icon: 'share-2', name: 'Distribution Agent', desc: 'Exports optimised deliverables for every platform — 8K master, social crops, streaming specs.', tag: 'Export' },
];

const showcaseItems = [
  { prompt: 'A dark emotional trailer about a lost astronaut surviving alone on Mars', tag: 'Sci-Fi', duration: '2:14', img: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?auto=format&fit=crop&w=800&q=80', large: true },
  { prompt: 'Luxury perfume ad with golden light and flowing silk', tag: 'Commercial', duration: '0:30', img: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=80' },
  { prompt: 'Cyberpunk chase through neon-lit Tokyo alleyways', tag: 'Action', duration: '1:45', img: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=600&q=80' },
  { prompt: 'Documentary about deep-sea bioluminescent creatures', tag: 'Documentary', duration: '3:20', img: 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?auto=format&fit=crop&w=600&q=80' },
];

const testimonials = [
  { name: 'Sarah Jenkins', role: 'Creative Director, Apex Studios', avatar: 'https://i.pravatar.cc/150?u=sarah', text: '"CinemAI completely changed our agency workflow. We pitch full video concepts in hours instead of weeks. The quality is simply unmatched."' },
  { name: 'Marcus Chen', role: 'YouTube Creator, 4.2M subs', avatar: 'https://i.pravatar.cc/150?u=marcus', text: '"I used to spend 40 hours a week editing. Now I write my script, feed it to CinemAI, and tweak the timeline. My output has tripled."' },
  { name: 'Elena Rostova', role: 'Independent Filmmaker', avatar: 'https://i.pravatar.cc/150?u=elena', text: '"The character consistency is what blew me away. I generated a 5-minute short and my protagonist looked identical in every single shot."' },
];

const pricingPlans = [
  {
    name: 'Starter', price: 'Free', period: 'forever', featured: false,
    desc: 'For creators just getting started with AI video.',
    features: ['3 videos / month', '1080p resolution', '2 AI Agents', 'Community templates', 'Watermarked export'],
  },
  {
    name: 'Creator', price: '$49', period: '/ month', featured: true,
    desc: 'For serious creators who want cinematic results.',
    features: ['50 videos / month', '4K resolution', 'All 10 AI Agents', 'Custom characters', 'No watermark', 'Priority render queue'],
  },
  {
    name: 'Studio', price: '$199', period: '/ month', featured: false,
    desc: 'For agencies and production teams at scale.',
    features: ['Unlimited videos', '8K resolution', 'All 10 AI Agents', 'Team collaboration', 'API access', 'Dedicated support', 'Custom branding'],
  },
];

const demoItems = [
  { prompt: 'Mars survivor — dark, emotional trailer', tag: 'Sci-Fi', img: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?auto=format&fit=crop&w=320&q=80' },
  { prompt: 'Luxury perfume ad with golden silk', tag: 'Commercial', img: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=320&q=80' },
  { prompt: 'Cyberpunk Tokyo neon chase scene', tag: 'Action', img: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=320&q=80' },
  { prompt: 'Deep-sea bioluminescent documentary', tag: 'Documentary', img: 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?auto=format&fit=crop&w=320&q=80' },
  { prompt: 'Ancient Rome gladiator epic', tag: 'Historical', img: 'https://images.unsplash.com/photo-1555448248-2571daf6344b?auto=format&fit=crop&w=320&q=80' },
  { prompt: 'Minimal product launch reveal', tag: 'Brand', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=320&q=80' },
];

const promptExamples = [
  'A dark emotional trailer about a lost astronaut surviving alone on Mars, dramatic orchestral score',
  'Anime-style action sequence in a neon-lit Tokyo alley at midnight, rain',
  'Luxury perfume commercial with golden light, flowing silk, and slow motion',
  'Documentary about ancient underwater civilisations, cinematic narration',
  'Sci-fi thriller on a dying space station — crew of 3, twist ending',
];

// ── RENDER ───────────────────────────────────────────────────────────────────

function renderAgents() {
  const grid = document.getElementById('agents-grid');
  if (!grid) return;
  grid.innerHTML = agents.map(a => `
    <div class="agent-card reveal">
      <div class="agent-card-inner">
        <div class="agent-icon"><i data-lucide="${a.icon}"></i></div>
        <div class="agent-name">${a.name}</div>
        <p class="agent-desc">${a.desc}</p>
        <span class="agent-tag">${a.tag}</span>
      </div>
    </div>`).join('');
}

function renderShowcase() {
  const grid = document.getElementById('showcase-grid');
  if (!grid) return;
  grid.innerHTML = showcaseItems.map(item => `
    <div class="showcase-item ${item.large ? 'large' : ''} reveal">
      <div class="showcase-thumb">
        <img src="${item.img}" alt="${item.prompt}" loading="lazy" />
        <div class="showcase-overlay">
          <div class="showcase-play">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          </div>
        </div>
      </div>
      <div class="showcase-info">
        <p class="showcase-prompt">${item.prompt}</p>
        <div class="showcase-meta">
          <span class="showcase-tag">${item.tag}</span>
          <span class="showcase-tag">${item.duration}</span>
        </div>
      </div>
    </div>`).join('');
}

function renderTestimonials() {
  const grid = document.getElementById('testimonials-grid');
  if (!grid) return;
  grid.innerHTML = testimonials.map((t, i) => `
    <div class="testimonial-card reveal reveal-delay-${i}">
      <p class="testimonial-text">${t.text}</p>
      <div class="testimonial-author">
        <img class="testimonial-avatar" src="${t.avatar}" alt="${t.name}" />
        <div>
          <div class="author-name">${t.name}</div>
          <div class="author-role">${t.role}</div>
        </div>
      </div>
    </div>`).join('');
}

function renderPricing() {
  const grid = document.getElementById('pricing-grid');
  if (!grid) return;
  grid.innerHTML = pricingPlans.map(p => `
    <div class="pricing-card ${p.featured ? 'featured' : ''} reveal">
      ${p.featured ? '<div class="pricing-badge">Most Popular</div>' : ''}
      <div class="pricing-name">${p.name}</div>
      <div class="pricing-price">${p.price}</div>
      <div class="pricing-period">${p.period}</div>
      <p class="pricing-desc">${p.desc}</p>
      <div class="pricing-features">
        ${p.features.map(f => `
          <div class="pricing-feature">
            <svg class="feature-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            <span>${f}</span>
          </div>`).join('')}
      </div>
      <a href="/workspace/" class="btn ${p.featured ? 'btn-primary' : 'btn-ghost'}">
        ${p.name === 'Starter' ? 'Start Free' : `Get ${p.name}`}
      </a>
    </div>`).join('');
}

function renderTicker() {
  const track = document.getElementById('ticker-track');
  if (!track) return;
  const doubled = [...demoItems, ...demoItems];
  track.innerHTML = doubled.map(item => `
    <div class="demo-card">
      <div class="demo-thumb">
        <img src="${item.img}" alt="${item.prompt}" loading="lazy" />
        <div class="demo-play">
          <div class="play-icon">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          </div>
        </div>
      </div>
      <div class="demo-info">
        <p class="demo-prompt">${item.prompt}</p>
        <div class="demo-meta"><span class="demo-tag">${item.tag}</span><span class="demo-try">Try prompt →</span></div>
      </div>
    </div>`).join('');
}

// ── TYPING ANIMATION ─────────────────────────────────────────────────────────

function initTyping() {
  const el = document.getElementById('prompt-typing');
  if (!el) return;
  let pIdx = 0, cIdx = 0, deleting = false;
  function type() {
    const cur = promptExamples[pIdx];
    if (!deleting) {
      el.textContent = cur.slice(0, ++cIdx);
      if (cIdx === cur.length) { deleting = true; setTimeout(type, 2400); return; }
    } else {
      el.textContent = cur.slice(0, --cIdx);
      if (cIdx === 0) { deleting = false; pIdx = (pIdx + 1) % promptExamples.length; }
    }
    setTimeout(type, deleting ? 28 : 52);
  }
  setTimeout(type, 800);
}

// ── SCROLL REVEAL ─────────────────────────────────────────────────────────────

function initScrollReveal() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}

// ── NAV ───────────────────────────────────────────────────────────────────────

function initNav() {
  const nav = document.getElementById('main-nav');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
  const toggle = document.getElementById('nav-mobile-toggle');
  const links = document.getElementById('nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
  }
}

// ── CHIPS ─────────────────────────────────────────────────────────────────────

function initChips() {
  const el = document.getElementById('prompt-typing');
  document.querySelectorAll('.chip[data-prompt]').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      if (el) el.textContent = chip.dataset.prompt;
    });
  });
}

// ── HERO BUTTON LOGIC ───────────────────────────────────────────────────────

function initHeroGenerate() {
  const btn = document.getElementById('btn-generate');
  const typingEl = document.getElementById('prompt-typing');
  if (!btn || !typingEl) return;
  
  btn.addEventListener('click', () => {
    const promptText = typingEl.textContent || 'A dark emotional cinematic trailer';
    window.location.href = `/workspace/?prompt=${encodeURIComponent(promptText)}&autoStart=true`;
  });
}

// ── INIT ──────────────────────────────────────────────────────────────────────

function initPromptTabs() {
  document.querySelectorAll('.prompt-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.prompt-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderTicker();
  renderAgents();
  renderShowcase();
  renderTestimonials();
  renderPricing();
  if (typeof lucide !== 'undefined') lucide.createIcons();
  initTyping();
  initNav();
  initChips();
  initHeroGenerate();
  initPromptTabs();
  setTimeout(initScrollReveal, 100);
});
