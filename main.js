/* ================================================================
   Smartcom Limited — main.js
   ★ Edit content in SITE_DATA at the top of this file ★
   Pages: home | services | clients | about | contact | partners
================================================================ */
document.addEventListener('DOMContentLoaded', () => {

const SITE_DATA = {

  /* ── Navigation ─────────────────────────────────────────────────
     label  → text in menu
     href   → page file or anchor (e.g. 'services.html' or '#why')
     isCta  → renders as filled CTA button
  ──────────────────────────────────────────────────────────────── */
  navLinks: [
    { label: 'Home',       href: 'home.html'     },
    { label: 'Services',   href: 'services.html' },
    { label: 'Why Us',     href: 'home.html#why'  },
    { label: 'Clients',    href: 'clients.html'  },
    { label: 'About',      href: 'about.html'    },
    { label: 'Partners',   href: 'partners.html'  },
    { label: 'Contact Us', href: 'contact.html', isCta: true },
  ],

  /* ── Services ───────────────────────────────────────────────────
     Shown as animated name tiles on home.html
     Full descriptions shown on services.html
  ──────────────────────────────────────────────────────────────── */
  services: [
    {
      name: 'Security Operation Center',
      tag:  'SOC',
      desc: '24/7 real-time monitoring and threat detection through our state-of-the-art SOC, providing rapid incident response and continuous protection across your entire digital infrastructure.',
      icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    },
    {
      name: 'Technology Optimization',
      tag:  'TOC',
      desc: 'Maximise performance and ROI from your existing IT investments. We audit, streamline and modernise your technology stack so every system operates at peak efficiency.',
      icon: '<circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>',
    },
    {
      name: 'Offensive Security',
      tag:  'RED TEAM',
      desc: 'Proactive penetration testing, red team exercises and vulnerability assessments that simulate real-world attacks — find and fix weaknesses before adversaries do.',
      icon: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>',
    },
    {
      name: 'Compliance Center',
      tag:  'GRC',
      desc: 'Navigate ISO 27001, NIST, GDPR, NCA and more with expert-led gap assessments, policy creation and continuous compliance monitoring tailored to your industry.',
      icon: '<path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>',
    },
    {
      name: 'Managed Security',
      tag:  'MSSP',
      desc: 'Fully managed end-to-end security services including firewall management, endpoint protection, SIEM and threat intelligence — enterprise-grade defence without enterprise overheads.',
      icon: '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>',
    },
    {
      name: 'Training & Certification',
      tag:  'EDU',
      desc: 'Accredited cybersecurity training programmes and certification pathways — from foundational security awareness to advanced specialist courses — empowering your teams.',
      icon: '<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
    },
  ],

  /* ── Why Choose Us ──────────────────────────────────────────────
     stat  → big number shown on card (leave '' to hide)
     title → card heading
     desc  → body text
     icon  → SVG path data (24×24 viewBox)
  ──────────────────────────────────────────────────────────────── */
  whyUs: [
    {
      stat:  '13+',
      title: 'Years of Expertise',
      desc:  'Over a decade delivering IT and cybersecurity solutions across Bangladesh and the UAE, with a proven track record clients trust.',
      icon:  '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
    },
    {
      stat:  '24/7',
      title: 'Always-On Protection',
      desc:  'Our Security Operations Centre never sleeps. Round-the-clock monitoring, detection and response so threats are neutralised before they escalate.',
      icon:  '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    },
    {
      stat:  '500+',
      title: 'Clients Secured',
      desc:  "From SMEs to large enterprises, we've helped hundreds of organisations strengthen their security posture and achieve compliance.",
      icon:  '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    },
    {
      stat:  'VAD',
      title: 'Value Added Distributor',
      desc:  'Authorised value-added distributor and partner for leading global cybersecurity vendors — giving clients access to cutting-edge products and expertise.',
      icon:  '<polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/>',
    },
  ],

  /* ── Clients ────────────────────────────────────────────────────
     Logos only shown on home.html
     Full cards (name + sector) shown on clients.html
     logo   → path to logo file in your project (images/clients/...)
     sector → industry shown on clients.html
  ──────────────────────────────────────────────────────────────── */
  clients: [
    { name: 'Client One',   logo: 'images/clients/client1.png', sector: 'Banking & Finance'   },
    { name: 'Client Two',   logo: 'images/clients/client2.png', sector: 'Telecommunications'  },
    { name: 'Client Three', logo: 'images/clients/client3.png', sector: 'Government'          },
    { name: 'Client Four',  logo: 'images/clients/client4.png', sector: 'Healthcare'          },
    { name: 'Client Five',  logo: 'images/clients/client5.png', sector: 'Energy & Utilities'  },
    { name: 'Client Six',   logo: 'images/clients/client6.png', sector: 'Retail & E-Commerce' },
  ],

  /* ── Typewriter (home.html hero) ────────────────────────────────
     These cycle through the typing animation on the hero.
     name  → word typed out
     size  → tag font-size multiplier (0.85–1.6)
     angle → tag rotation in degrees (-5 to +5)
  ──────────────────────────────────────────────────────────────── */
  itSolutions: [
    { name: 'Security Operations', size: 1.4,  angle: -2 },
    { name: 'Cyber Security',      size: 1.35, angle:  3 },
    { name: 'Cloud Solutions',     size: 1.5,  angle: -1 },
    { name: 'Managed Security',    size: 1.3,  angle:  2 },
    { name: 'Compliance',          size: 1.55, angle: -3 },
    { name: 'Offensive Security',  size: 1.2,  angle:  1 },
  ],

  /* ── Cybersecurity solutions (globe labels + cards) ─────────────
     These 8 names appear on the 3D rotating globe (home + services)
     Full cards with desc + icon shown on services.html
  ──────────────────────────────────────────────────────────────── */
  cyberSolutions: [
    { name: 'SOC',               desc: 'Security Operation Center — 24/7 real-time monitoring, threat detection and incident response.',                                                    icon: '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>'                                                                                                                         },
    { name: 'TOC',               desc: 'Technology Optimization Center — maximise performance and ROI from your existing IT investments.',                                                  icon: '<circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>'                                },
    { name: 'Offensive Security', desc: 'Penetration testing, red team exercises and vulnerability assessments that simulate real-world attacks.',                                          icon: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>'                                                   },
    { name: 'Compliance',        desc: 'Navigate ISO 27001, NIST, GDPR and NCA with expert-led gap assessments and continuous compliance monitoring.',                                     icon: '<path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>'                                                                                             },
    { name: 'Managed Security',  desc: 'Fully managed end-to-end security — firewall, endpoint, SIEM and threat intelligence.',                                                            icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>'                                                                                                                                     },
    { name: 'SOAR',              desc: 'Security Orchestration, Automation and Response — automate and orchestrate threat responses across all your tools.',                               icon: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>'                                                                                                                                   },
    { name: 'Training',          desc: 'Accredited cybersecurity training and certification pathways from foundational awareness to advanced specialist courses.',                          icon: '<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>'                                                                                                                 },
    { name: 'Zero Trust',        desc: 'Never trust, always verify — enforce least-privilege access for every user and device regardless of network location.',                            icon: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>'                                                                                                 },
  ],

  /* ── About bullets (about.html) ─────────────────────────────────
     Each string is a bullet point in the about section.
  ──────────────────────────────────────────────────────────────── */
  aboutBullets: [
    'Computer systems & software solutions',
    'Peripherals, accessories & networking products',
    'Complete cybersecurity solutions',
    'IT consulting & managed services',
    'Cloud migration & digital transformation',
    'Data privacy compliance & risk assessments',
  ],

  /* ── About stats (home.html + about.html) ───────────────────────
     num   → large number displayed
     label → description below number
  ──────────────────────────────────────────────────────────────── */
  aboutStats: [
    { num: '13+',  label: 'Years of expertise'        },
    { num: '25+',  label: 'Yrs management experience' },
    { num: '2',    label: 'Countries: BD & UAE'       },
    { num: '500+', label: 'Clients secured'           },
  ],

  /* ── Partners marquee (home.html) ───────────────────────────────
     logo → path to logo image file
     Save logos to images/ folder and update paths below.
  ──────────────────────────────────────────────────────────────── */
  partners: [
    { logo: 'images/infopercept.png'      }, /* https://www.infopercept.com/ */
    { logo: 'images/sophos.png'           }, /* https://www.sophos.com/      */
    { logo: 'images/google-workspace.png' }, /* Google Workspace             */
    { logo: 'images/microsoft-365.png'    }, /* Microsoft 365                */
  ],

  /* ── Contact ─────────────────────────────────────────────────────
     ┌──────────────────────────────────────────────────────────┐
     │  FORMSPREE SETUP (one-time, 2 min):                      │
     │  1. formspree.io → sign up free                          │
     │  2. Create form → set email recipient                    │
     │  3. Copy endpoint URL → paste into formEndpoint below    │
     └──────────────────────────────────────────────────────────┘
  ──────────────────────────────────────────────────────────────── */
  contact: {
    formEndpoint:    'https://formspree.io/f/YOUR_FORM_ID', /* ← paste here */
    turnstileSiteKey:'0x4AAAAAACk2Kzl8Lc8wDy0N',

    headline: 'Get In <span>Touch</span>',
    tagline:  'Ready to secure your digital future? Our team across Bangladesh is here to help.',

    whatsapp: '+8801700769292', /* international format, no spaces */

    /* Address, email and hours shown on contact.html */
    info: [
      { type: 'address',  label: 'Bangladesh Office', value: 'Celebration Point (Level-5), Plot: 3 & 5, Road: 113/A, Gulshan, Dhaka-1212, Bangladesh' },
      { type: 'whatsapp', label: 'WhatsApp',          value: '+880 170 076 9292'    },
      { type: 'email',    label: 'Email',             value: 'info@smartcom.com.bd' },
      { type: 'email',    label: 'Email (alt)',        value: 'info@smartcombd.com'  },
      { type: 'hours',    label: 'Business Hours',    value: 'Sun – Thu: 9:00 AM – 6:00 PM (BST)' },
    ],

    /* Action cards — shown on home.html strip AND contact.html
       type: 'wa' | 'email' | 'li' | 'cal'
       href: null = auto-built from whatsapp/email above        */
    actions: [
      { type: 'wa',    title: 'WhatsApp Us',    tag: 'Typically replies within 1 hour', href: null },
      { type: 'email', title: 'Email Directly', tag: 'For formal enquiries',            href: null },
      { type: 'li',    title: 'LinkedIn',       tag: 'Connect with our team',           href: 'https://www.linkedin.com/company/smartcom-ae/' },
    ],
  },

  /* ── Social links (footer — all pages) ─────────────────────────
     Replace with real URLs.
  ──────────────────────────────────────────────────────────────── */
  social: {
    facebook: 'https://www.facebook.com/smartcombd',
    linkedin: 'https://www.linkedin.com/company/smartcom-ae/',
  },

}; /* end SITE_DATA */

/* ================================================================
   PAGE DETECTION  — each HTML must have <body data-page="...">
================================================================ */
const PAGE = document.body.dataset.page || 'home';


/* ================================================================
   REVEAL HELPER
   Call showWhenVisible(el) right after appending any element.
   Uses a shared observer so it works for JS-built elements too.
================================================================ */
const _revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      _revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.07, rootMargin: '0px 0px -30px 0px' });

function showWhenVisible(el) { _revealObs.observe(el); }

/* Observe all static .reveal / .reveal-left / .reveal-right elements */
document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(showWhenVisible);

/* Observe .anim elements — triggered by body.loaded */
document.querySelectorAll('.anim').forEach(el => {
  _revealObs.observe(el);
});


/* ================================================================
   SHARED UTILITIES
================================================================ */
function svgIcon(paths) {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${paths}</svg>`;
}


/* ================================================================
   NAVBAR
================================================================ */
function buildNav() {
  const desk = document.getElementById('navLinks');
  const mob  = document.getElementById('mobileLinks');
  if (!desk && !mob) return;

  const currentFile = window.location.pathname.split('/').pop() || 'home.html';

  SITE_DATA.navLinks.forEach(link => {
    const linkFile = link.href.split('#')[0];
    const isActive = linkFile === currentFile || (currentFile === '' && linkFile === 'home.html');

    if (desk) {
      const li = document.createElement('li');
      const a  = document.createElement('a');
      a.href        = link.href;
      a.textContent = link.label;
      a.className   = link.isCta ? 'navbar__cta' : `navbar__link${isActive ? ' active' : ''}`;
      li.appendChild(a);
      desk.appendChild(li);
    }
    if (mob) {
      const li = document.createElement('li');
      const a  = document.createElement('a');
      a.href        = link.href;
      a.textContent = link.label;
      a.className   = `navbar__mobile-link${isActive ? ' active' : ''}${link.isCta ? ' navbar__mobile-cta' : ''}`;
      li.appendChild(a);
      mob.appendChild(li);
    }
  });

  /* Hamburger */
  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  function closeMobileMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.remove('open');
    hamburger && hamburger.classList.remove('open');
    hamburger && hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', e => {
      e.stopPropagation();
      const open = mobileMenu.classList.toggle('open');
      hamburger.classList.toggle('open', open);
      hamburger.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
    });
    mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMobileMenu));
    document.addEventListener('click', e => {
      if (mobileMenu.classList.contains('open') && !hamburger.contains(e.target) && !mobileMenu.contains(e.target)) closeMobileMenu();
    });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMobileMenu(); });
  }

  /* Scroll shadow */
  const navbar = document.getElementById('navbar');
  if (navbar) {
    const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* Scroll-spy — highlight active section */
  const sections = document.querySelectorAll('section[id]');
  if (sections.length > 1) {
    const spy = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const id = '#' + e.target.id;
          document.querySelectorAll('.navbar__link, .navbar__mobile-link').forEach(a => {
            const h = a.getAttribute('href') || '';
            a.classList.toggle('active', h === id || h.endsWith(id));
          });
        }
      });
    }, { threshold: 0.4, rootMargin: '-60px 0px -35% 0px' });
    sections.forEach(s => spy.observe(s));
  }
}


/* ================================================================
   FOOTER / SOCIAL / BACK TO TOP
================================================================ */
function buildSocial() {
  const fb   = document.getElementById('socialFb');
  const li   = document.getElementById('socialLi');
  const yr   = document.getElementById('footerYear');
  if (fb) fb.href = SITE_DATA.social.facebook;
  if (li) li.href = SITE_DATA.social.linkedin;
  if (yr) yr.textContent = new Date().getFullYear();
}

function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;
  window.addEventListener('scroll', () => btn.classList.toggle('visible', window.scrollY > 400), { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}


/* ================================================================
   GLOBE
================================================================ */
function initGlobe() {
      const canvas  = document.getElementById('globeCanvas');
      if (!canvas) return;
      const ctx     = canvas.getContext('2d');

      /* Labels — pulled straight from SITE_DATA */
      const labels  = SITE_DATA.cyberSolutions.map(s => s.name);
      const COUNT   = labels.length;

      /* ── Responsive sizing ──────────────────────────────────────
         Globe diameter = min(container width, 520px).
         On mobile this naturally makes a smaller, clean globe.
      ── */
      function getSize() {
        const max = Math.min(canvas.parentElement.offsetWidth, 520);
        return Math.max(max, 260); /* never smaller than 260px */
      }

      let SIZE, R, cx, cy;
      function resize() {
        SIZE = getSize();
        canvas.width  = SIZE;
        canvas.height = SIZE;
        R  = SIZE * 0.40;  /* globe radius = 38% of canvas size */
        cx = SIZE / 2;
        cy = SIZE / 2;
      }
      resize();
      window.addEventListener('resize', () => { resize(); }, { passive: true });

      /* ── Distribute labels evenly on sphere surface ─────────────
         Uses a sunflower / golden angle distribution so labels
         are spread as evenly as possible without clustering.
      ── */
      const goldenAngle = Math.PI * (3 - Math.sqrt(5)); /* ~137.5° */
      const points = labels.map((_, i) => {
        const t   = i / (COUNT - 1 || 1);             /* 0 → 1           */
        /* Clamp to ±68° so no label sits at a pole where rotation stalls */
        const MAX_LAT = 68 * Math.PI / 180;
        const lat = MAX_LAT * (2 * t - 1);            /* −68° → +68°     */
        const lon = goldenAngle * i + Math.PI * 0.3;  /* offset start    */
        return { lat, lon };
      });

      /* ── Wireframe latitude/longitude lines ─────────────────────
         A few faint circles give the globe its structure.
      ── */
      const WIRE_LATS = [-50, -25, 0, 25, 50].map(d => d * Math.PI / 180);
      const WIRE_LONS = [0, 60, 120, 180, 240, 300].map(d => d * Math.PI / 180);

      /* ── State ── */
      let   rotY      = 0;          /* current Y rotation (radians) */
      let   rotX      = 0.28;       /* slight tilt on X axis         */
      let   speed     = 0.006;      /* auto-rotate speed (rad/frame) */
      let   dragging  = false;
      let   lastX     = 0;
      let   raf       = null;
      let   paused    = false;

      /* ── Project a 3D point onto 2D canvas ── */
      function project(lat, lon) {
        const cosLat = Math.cos(lat);
        const sinLat = Math.sin(lat);
        const cosLon = Math.cos(lon + rotY);
        const sinLon = Math.sin(lon + rotY);
        const cosX   = Math.cos(rotX);
        const sinX   = Math.sin(rotX);

        /* 3D coords on unit sphere */
        const x3 =  cosLat * sinLon;
        const y3 = -sinLat * cosX + cosLat * cosLon * sinX;
        const z3 =  sinLat * sinX + cosLat * cosLon * cosX;

        return { x: cx + x3 * R, y: cy + y3 * R, z: z3 };
      }

      /* ── Draw one frame ── */
      function draw() {
        ctx.clearRect(0, 0, SIZE, SIZE);

        /* 1. Wireframe lines */
        ctx.lineWidth   = 0.5;

        /* Latitude rings */
        WIRE_LATS.forEach(lat => {
          ctx.beginPath();
          let first = true;
          for (let a = 0; a <= Math.PI * 2; a += 0.06) {
            const p = project(lat, a);
            /* Only draw front-facing segments (z > -0.1) */
            if (p.z < -0.1) { first = true; continue; }
            const alpha = (p.z + 1) * 0.5 * 0.18;
            ctx.strokeStyle = `rgba(0,106,78,${alpha * 1.8})`;
            if (first) { ctx.moveTo(p.x, p.y); first = false; }
            else          ctx.lineTo(p.x, p.y);
          }
          ctx.stroke();
        });

        /* Longitude lines */
        WIRE_LONS.forEach(lon => {
          ctx.beginPath();
          let first = true;
          for (let a = -Math.PI / 2; a <= Math.PI / 2; a += 0.06) {
            const p = project(a, lon);
            if (p.z < -0.1) { first = true; continue; }
            const alpha = (p.z + 1) * 0.5 * 0.18;
            ctx.strokeStyle = `rgba(0,106,78,${alpha * 1.8})`;
            if (first) { ctx.moveTo(p.x, p.y); first = false; }
            else          ctx.lineTo(p.x, p.y);
          }
          ctx.stroke();
        });

        /* 2. Labels — sorted back-to-front so front labels render on top */
        const projected = points.map((pt, i) => {
          const p = project(pt.lat, pt.lon);
          return { ...p, label: labels[i] };
        });
        projected.sort((a, b) => a.z - b.z); /* painter's algorithm */

        projected.forEach(pt => {
          /* z goes from -1 (back) to +1 (front) */
          const depth   = (pt.z + 1) / 2;      /* 0 → 1        */
          const opacity = 0.15 + depth * 0.85;  /* 0.15 → 1.0   */
          const fsize   = Math.round((SIZE * 0.026) + depth * (SIZE * 0.016));
          /* Back labels are slightly greyed, front labels white */
          const lightness = Math.round(8 + (1 - depth) * 28);

          ctx.save();
          ctx.globalAlpha = opacity;
          ctx.font        = `700 ${fsize}px 'Syne', sans-serif`;
          ctx.textAlign   = 'center';
          ctx.textBaseline= 'middle';

          /* Subtle green glow for front labels */
          if (depth > 0.65) {
            ctx.shadowColor = 'rgba(0,135,95,0.6)';
            ctx.shadowBlur  = depth * 8;
          }

          ctx.fillStyle = `hsl(160,15%,${lightness}%)`;
          ctx.fillText(pt.label, pt.x, pt.y);

          /* Small dot at label position */
          ctx.beginPath();
          ctx.arc(pt.x, pt.y - fsize * 0.85, 2, 0, Math.PI * 2);
          ctx.fillStyle = depth > 0.5
            ? `rgba(0,135,95,${opacity * 0.8})`
            : `rgba(245,245,240,${opacity * 0.3})`;
          ctx.shadowBlur = 0;
          ctx.fill();

          ctx.restore();
        });
      }

      /* ── Animation loop ── */
      function loop() {
        if (!dragging) rotY += speed;
        draw();
        raf = requestAnimationFrame(loop);
      }

      /* ── Pause when tab hidden (saves CPU) ── */
      document.addEventListener('visibilitychange', () => {
        paused = document.hidden;
        if (!paused && !raf) loop();
        if (paused && raf)   { cancelAnimationFrame(raf); raf = null; }
      });

      /* ── Mouse / touch drag to manually rotate ── */
      canvas.addEventListener('mousedown',  e => { dragging=true; lastX=e.clientX; });
      window.addEventListener('mouseup',    () => { dragging=false; });
      window.addEventListener('mousemove',  e => { if (dragging) { rotY += (e.clientX - lastX) * 0.008; lastX = e.clientX; } });

      canvas.addEventListener('touchstart', e => { dragging=true; lastX=e.touches[0].clientX; }, { passive:true });
      window.addEventListener('touchend',   () => { dragging=false; });
      window.addEventListener('touchmove',  e => { if (dragging) { rotY += (e.touches[0].clientX - lastX) * 0.008; lastX = e.touches[0].clientX; } }, { passive:true });

      /* ── Start ── */
      loop();
    }

/* ================================================================
   TYPEWRITER
================================================================ */
function startTypewriter() {
  const el = document.getElementById('typewriterText');
  if (!el) return;
  const words = SITE_DATA.itSolutions.map(s => s.name);
  let ci = 0, ch = 0, del = false;
  function tick() {
    const word = words[ci];
    el.textContent = del ? word.slice(0, ch - 1) : word.slice(0, ch + 1);
    ch = del ? ch - 1 : ch + 1;
    let wait = del ? 48 : 88;
    if (!del && ch === word.length)  { wait = 1700; del = true; }
    else if (del && ch === 0)         { del = false; ci = (ci + 1) % words.length; wait = 300; }
    setTimeout(tick, wait);
  }
  tick();
}


/* ================================================================
   SERVICES
   home.html     → name tiles only
   services.html → full cards
================================================================ */
function buildServicesHome() {
  const g = document.getElementById('servicesGrid');
  if (!g) return;
  SITE_DATA.services.forEach((s, i) => {
    const d = document.createElement('div');
    d.className = 'service-tile';
    d.innerHTML = `<span class="service-tile__tag">${s.tag}</span><span class="service-tile__name">${s.name}</span>`;
    g.appendChild(d);
    showWhenVisible(d);
  });
}

function buildServicesDetail() {
  const g = document.getElementById('servicesGrid');
  if (!g) return;
  SITE_DATA.services.forEach((s, i) => {
    const d = document.createElement('div');
    d.className = 'service-card';
    d.innerHTML = `
      <div class="service-card__icon">${svgIcon(s.icon)}</div>
      <div class="service-card__tag">${s.tag}</div>
      <h3 class="service-card__name">${s.name}</h3>
      <p class="service-card__desc">${s.desc}</p>`;
    g.appendChild(d);
    showWhenVisible(d);
  });
}


/* ================================================================
   WHY US
================================================================ */
function buildWhyUs() {
  const g = document.getElementById('whyGrid');
  if (!g) return;
  SITE_DATA.whyUs.forEach((w, i) => {
    const d = document.createElement('div');
    d.className = 'why-card';
    d.innerHTML = `
      ${w.stat ? `<div class="why-card__stat">${w.stat}</div>` : ''}
      <div class="why-card__icon">${svgIcon(w.icon)}</div>
      <h3 class="why-card__title">${w.title}</h3>
      <p class="why-card__desc">${w.desc}</p>`;
    g.appendChild(d);
    showWhenVisible(d);
  });
}


/* ================================================================
   CLIENTS
   home.html    → marquee (same as partners)
   clients.html → full cards
================================================================ */
function buildClientsHome() {
  const stage = document.getElementById('clientsGrid');
  if (!stage) return;
  stage.className = 'partners__stage';
  const all = SITE_DATA.clients;
  const track = document.createElement('div');
  track.className = 'partners__track partners__track--left';
  [...all, ...all, ...all].forEach(c => {
    track.innerHTML += `<div class="partner-item"><div class="partner-item__logo"><img src="${c.logo}" alt="${c.name}" title="${c.name}" loading="lazy"></div></div>`;
  });
  stage.appendChild(track);
}

function buildClientsDetail() {
  const g = document.getElementById('clientsGrid');
  if (!g) return;
  SITE_DATA.clients.forEach(c => {
    const d = document.createElement('div');
    d.className = 'client-card';
    d.innerHTML = `
      <div class="client-card__logo"><img src="${c.logo}" alt="${c.name}" loading="lazy"></div>
      <span class="client-card__name">${c.name}</span>
      <span class="client-card__sector">${c.sector}</span>`;
    g.appendChild(d);
    showWhenVisible(d);
  });
}


/* ================================================================
   ABOUT
================================================================ */
function buildAboutStats() {
  const row = document.getElementById('aboutStats');
  if (!row) return;
  SITE_DATA.aboutStats.forEach(s => {
    const d = document.createElement('div');
    d.className = 'about__stat';
    d.innerHTML = `<div class="about__stat-num">${s.num}</div><div class="about__stat-label">${s.label}</div>`;
    row.appendChild(d);
    showWhenVisible(d);
  });
}

function buildAboutBullets() {
  const ul = document.getElementById('aboutList');
  if (!ul) return;
  SITE_DATA.aboutBullets.forEach(t => {
    const li = document.createElement('li');
    li.className = 'about__list-item';
    li.textContent = t;
    ul.appendChild(li);
  });
}


/* ================================================================
   CYBER SOLUTIONS  —  services.html
================================================================ */
function buildCyberSolutions() {
  const g = document.getElementById('cyberGrid');
  if (!g) return;
  SITE_DATA.cyberSolutions.forEach(s => {
    const d = document.createElement('div');
    d.className = 'cyber-card';
    d.innerHTML = `
      <div class="cyber-card__icon">${svgIcon(s.icon)}</div>
      <h3 class="cyber-card__name">${s.name}</h3>
      <p class="cyber-card__desc">${s.desc}</p>`;
    g.appendChild(d);
    showWhenVisible(d);
  });
}


/* ================================================================
   PARTNERS  —  marquee
================================================================ */
function buildPartners() {
      const stage = document.getElementById('partnersStage');
      const all   = SITE_DATA.partners;

      function itemHTML(p) {
        return `<div class="partner-item"><div class="partner-item__logo"><img src="${p.logo}" alt="Partner logo" loading="lazy"><\/div><\/div>`;
      }
      /* Single centred row, tripled so the loop is seamless even with few logos */
      const t = document.createElement('div');
      t.className = 'partners__track partners__track--left';
      const h = all.map(itemHTML).join('');
      t.innerHTML = h + h + h;
      stage.appendChild(t);
    }

/* ================================================================
   PARTNER CARDS  —  partners.html
================================================================ */
function buildPartnerCards() {
  const g = document.getElementById('partnerCards');
  if (!g) return;
  const details = [
    {
      name: 'Sophos',
      logo: 'images/sophos.png',
      tag:  'Endpoint & Network Security',
      desc: 'Global leader in next-generation cybersecurity — delivering cloud-managed endpoint, network, email and mobile security solutions trusted by 500,000+ organisations worldwide.',
      url:  'https://www.sophos.com/',
    },
    {
      name: 'Infopercept',
      logo: 'images/infopercept.png',
      tag:  'SOC & MSSP',
      desc: 'Leading managed security services provider specialising in Security Operations Centre (SOC), Threat Intelligence, and end-to-end MSSP services across Asia and the Middle East.',
      url:  'https://www.infopercept.com/',
    },
    {
      name: 'Google Workspace',
      logo: 'images/google-workspace.png',
      tag:  'Cloud Productivity',
      desc: 'Google\'s integrated suite of cloud-based collaboration and productivity tools — Gmail, Drive, Meet, Docs and more — deployed and managed by Smartcom for enterprise clients.',
      url:  'https://workspace.google.com/',
    },
    {
      name: 'Microsoft 365',
      logo: 'images/microsoft-365.png',
      tag:  'Cloud Productivity & Security',
      desc: 'Microsoft\'s comprehensive cloud platform combining Office productivity apps, advanced security, compliance tools and cloud services — licensed and supported by Smartcom.',
      url:  'https://www.microsoft.com/microsoft-365',
    },
  ];
  details.forEach((p, i) => {
    const d = document.createElement('div');
    d.className = 'partner-detail-card reveal';
    d.style.transitionDelay = (i * 0.1) + 's';
    d.innerHTML = `
      <div class="partner-detail-card__logo">
        <img src="${p.logo}" alt="${p.name}" loading="lazy">
      </div>
      <div class="partner-detail-card__body">
        <span class="partner-detail-card__tag">${p.tag}</span>
        <h3 class="partner-detail-card__name">${p.name}</h3>
        <p class="partner-detail-card__desc">${p.desc}</p>
        <a href="${p.url}" class="partner-detail-card__link" target="_blank" rel="noopener">
          Visit Website
          <svg viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
      </div>`;
    g.appendChild(d);
  });
}

/* ================================================================
   CONTACT
   home.html    → action cards + "Send a Message" button (no form)
   contact.html → action cards + info strip + full form
================================================================ */
function buildContact() {
  const cfg      = SITE_DATA.contact;
  const waNum    = cfg.whatsapp.replace(/\D/g, '');
  const emailVal = (cfg.info.find(i => i.type === 'email') || {}).value || 'info@smartcom.com.bd';

  const ICONS = {
    wa:    '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>',
    email: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>',
    li:    '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
    cal:   '<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
  };

  /* ── Action cards ── */
  const actionsEl = document.getElementById('contactActions');
  if (actionsEl) {
    cfg.actions.forEach((action, i) => {
      let href = action.href;
      if (action.type === 'wa')    href = `https://wa.me/${waNum}`;
      if (action.type === 'email') href = `mailto:${emailVal}`;
      if (!href)                   href = '#';

      const card = document.createElement('a');
      card.className = `contact-card contact-card--${action.type}`;
      card.href      = href;
      card.target    = (action.type === 'wa' || action.type === 'li') ? '_blank' : '_self';
      card.rel       = 'noopener noreferrer';
      card.innerHTML = `
        <div class="contact-card__icon">${svgIcon(ICONS[action.type] || '')}</div>
        <span class="contact-card__title">${action.title}</span>
        <span class="contact-card__tag">${action.tag}</span>`;
      actionsEl.appendChild(card);
      showWhenVisible(card);
    });
  }

  /* ── Info strip (contact.html only) ── */
  const stripEl = document.getElementById('contactInfo');
  if (stripEl) {
    const STRIP_ICONS = {
      address:  '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
      whatsapp: '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>',
      email:    '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>',
      hours:    '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
    };
    cfg.info.forEach((item, i) => {
      const d = document.createElement('div');
      d.className = 'contact__info-item';
      d.innerHTML = `
        <div class="contact__info-icon">${svgIcon(STRIP_ICONS[item.type] || STRIP_ICONS.address)}</div>
        <div class="contact__info-text">
          <span class="contact__info-label">${item.label}</span>
          <span class="contact__info-value">${item.value}</span>
        </div>`;
      stripEl.appendChild(d);
      showWhenVisible(d);
    });
  }

  /* ── Form (contact.html only) ── */
  const form      = document.getElementById('contactForm');
  const submitBtn = document.getElementById('formSubmit');
  const successEl = document.getElementById('formSuccess');
  const errorEl   = document.getElementById('formError');
  if (!form || !submitBtn) return;

  form.action = cfg.formEndpoint;

  /* Turnstile */
  if (document.getElementById('turnstileWidget') && cfg.turnstileSiteKey) {
    const tryRender = () => {
      if (typeof turnstile !== 'undefined') {
        turnstile.render('#turnstileWidget', { sitekey: cfg.turnstileSiteKey, theme: 'light' });
      } else { setTimeout(tryRender, 400); }
    };
    tryRender();
  }

  if (cfg.formEndpoint.includes('YOUR_FORM_ID')) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      if (errorEl) { errorEl.textContent = '⚙️ Paste your Formspree URL into SITE_DATA.contact.formEndpoint'; errorEl.classList.add('visible'); }
    });
    return;
  }

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const token = form.querySelector('[name="cf-turnstile-response"]');
    if (token && !token.value) {
      if (errorEl) { errorEl.textContent = 'Please complete the security check.'; errorEl.classList.add('visible'); }
      return;
    }
    if (!form.checkValidity()) { form.reportValidity(); return; }
    submitBtn.disabled = true; submitBtn.textContent = 'Sending…';
    if (successEl) successEl.classList.remove('visible');
    if (errorEl)   errorEl.classList.remove('visible');
    try {
      const res = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
      if (res.ok) {
        if (successEl) successEl.classList.add('visible');
        form.reset();
        if (typeof turnstile !== 'undefined') turnstile.reset('#turnstileWidget');
      } else { if (errorEl) errorEl.classList.add('visible'); }
    } catch { if (errorEl) errorEl.classList.add('visible'); }
    finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = 'Send Message ' + svgIcon('<path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>');
    }
  });
}


/* ================================================================
   INIT
================================================================ */
buildNav();
buildSocial();
initBackToTop();

if (PAGE === 'home') {
  startTypewriter();
  initGlobe();
  buildServicesHome();
  buildWhyUs();
  buildClientsHome();
  buildAboutStats();
  buildPartners();
  buildContact();
}

if (PAGE === 'services') {
  buildServicesDetail();
  buildCyberSolutions();
}

if (PAGE === 'clients') {
  buildClientsDetail();
}

if (PAGE === 'about') {
  buildAboutStats();
  buildAboutBullets();
}

if (PAGE === 'contact') {
  buildContact();
}

if (PAGE === 'partners') {
  buildPartners();
  buildPartnerCards();
}

document.body.classList.add('loaded');

}); /* end DOMContentLoaded */