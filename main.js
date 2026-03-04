/* ============================================================
   Smartcom Limited — Site Logic & Data

   ★ ALL EDITABLE CONTENT IS IN SITE_DATA (top of this file) ★

   HOW TO UPDATE:
     Nav links          → SITE_DATA.navLinks
     Services           → SITE_DATA.services
     Why Choose Us      → SITE_DATA.whyUs
     IT solutions       → SITE_DATA.itSolutions
                          (typewriter cycles through these)
     Cyber solutions    → SITE_DATA.cyberSolutions
                          (appear as labels on the 3D globe)
     About bullets      → SITE_DATA.aboutBullets
     About stats        → SITE_DATA.aboutStats
     Partners           → SITE_DATA.partners
                          (logo paths — put files in images/)
     Partner logo size  → style.css .partner-item__logo
     Contact info cards → SITE_DATA.contact.info
     WhatsApp number    → SITE_DATA.contact.whatsapp
     Form endpoint      → SITE_DATA.contact.formEndpoint
     Form recipients    → SITE_DATA.contact.formRecipients
     Turnstile key      → SITE_DATA.contact.turnstileSiteKey
     Facebook link      → SITE_DATA.social.facebook
     LinkedIn link      → SITE_DATA.social.linkedin
============================================================ */

/* ============================================================
       ★ SITE DATA — edit everything here ★
    ============================================================ */
    document.addEventListener('DOMContentLoaded', () => {
const SITE_DATA = {

      /* ── Navigation links ─────────────────────────────────────
         label  → text in menu
         href   → section ID to scroll to
         active → true highlights it initially
         isCta  → true renders as filled red button
      ────────────────────────────────────────────────────────── */
      navLinks: [
        { label: 'Home',         href: '#home',     active: true  },
        { label: 'Services',     href: '#services', active: false },
        { label: 'Why Us',       href: '#why',      active: false },
        { label: 'Clients',      href: '#clients',  active: false },
        { label: 'Solutions',    href: '#solutions',active: false },
        { label: 'About',        href: '#about',    active: false },
        { label: 'Partners',     href: '#partners', active: false },
        { label: 'Contact Us',   href: '#contact',  active: false, isCta: true },
      ],

      /* ── Services ─────────────────────────────────────────────
         name → card heading
         desc → body text
         tag  → short label bottom-right
         icon → SVG paths inside a 24×24 viewBox
      ────────────────────────────────────────────────────────── */
      services: [
        { name:'Security Operation Center', tag:'SOC',      desc:'24/7 real-time monitoring and threat detection through our state-of-the-art SOC, providing rapid incident response and continuous protection across your entire digital infrastructure.',      icon:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>' },
        { name:'Technology Optimization',   tag:'TECH',     desc:'Maximise performance and ROI from your existing IT investments. We audit, streamline and modernise your technology stack so every system operates at peak efficiency.',                     icon:'<circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>' },
        { name:'Offensive Security',        tag:'RED TEAM', desc:'Proactive penetration testing, red team exercises and vulnerability assessments that simulate real-world attacks — find and fix weaknesses before adversaries do.',                     icon:'<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>' },
        { name:'Compliance Center',         tag:'GRC',      desc:'Navigate ISO 27001, NIST, GDPR, NCA and more with expert-led gap assessments, policy creation and continuous compliance monitoring tailored to your industry.',                           icon:'<path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>' },
        { name:'Managed Security',          tag:'MSSP',     desc:'Fully managed end-to-end security services including firewall management, endpoint protection, SIEM and threat intelligence — enterprise-grade defence without enterprise overheads.',       icon:'<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>' },
        { name:'Training & Certification',  tag:'EDU',      desc:'Accredited cybersecurity training programmes and certification pathways — from foundational security awareness to advanced specialist courses — empowering your teams.',                   icon:'<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>' },
      ],

      /* ── Why Choose Us ────────────────────────────────────────
         stat  → big number/text (optional — leave '' to omit)
         title → card heading
         desc  → body text
         icon  → SVG paths
      ────────────────────────────────────────────────────────── */
      whyUs: [
        { stat:'13+',  title:'Years of Expertise',       desc:'Over a decade delivering IT and cybersecurity solutions across Bangladesh, with a proven track record clients trust.',                    icon:'<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>' },
        { stat:'24/7', title:'Always-On Protection',     desc:'Our Security Operations Centre never sleeps. Round-the-clock monitoring, detection and response so threats are neutralised before they escalate.',   icon:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>' },
        { stat:'500+', title:'Clients Secured',          desc:'From SMEs to large enterprises, we\'ve helped hundreds of organisations strengthen their security posture and achieve compliance.',                    icon:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>' },
        { stat:'VAD',  title:'Value Added Distributor',  desc:'Authorised value-added distributor and partner for leading global cybersecurity vendors — giving clients access to cutting-edge products and expertise.',icon:'<polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/>' },
      ],

      /* ── Clients ─────────────────────────────────────────────
         Add each client with a logo path and sector tag.
         Logos go in your images/clients/ folder.
      ────────────────────────────────────────────────────────── */
      clients: [
        { name: 'Client One',   logo: 'images/clients/client1.png',  sector: 'Banking & Finance'      },
        { name: 'Client Two',   logo: 'images/clients/client2.png',  sector: 'Telecommunications'     },
        { name: 'Client Three', logo: 'images/clients/client3.png',  sector: 'Government'             },
        { name: 'Client Four',  logo: 'images/clients/client4.png',  sector: 'Healthcare'             },
        { name: 'Client Five',  logo: 'images/clients/client5.png',  sector: 'Energy & Utilities'     },
        { name: 'Client Six',   logo: 'images/clients/client6.png',  sector: 'Retail & E-Commerce'    },
      ],

      /* ── IT Solutions (typewriter) ────────────────
         name  → text typed + shown on tag
         size  → tag font-size in rem (0.85–1.6)
         angle → rotation in degrees (−5 to +5)
      ────────────────────────────────────────────────────────── */
      itSolutions: [
        { name:'Information Technology', size:1.55, angle:-2 },
        { name:'Cyber Security',         size:1.35, angle: 3 },
        { name:'Cloud',                  size:1.6,  angle:-1 },
        { name:'Enterprise Data Center', size:1.1,  angle: 2 },
        { name:'MSP',                    size:1.4,  angle:-3 },
      ],

      /* ── Cybersecurity solutions (card grid) ──────────────────
         name → card heading
         desc → body text
         icon → SVG paths
      ────────────────────────────────────────────────────────── */
      cyberSolutions: [
        /* These 8 names appear on the 3D rotating globe */
        { name:'SOC',                         desc:'Security Operation Center — 24/7 real-time monitoring, threat detection and incident response.',                                                                              icon:'<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>' },
        { name:'TOC',                         desc:'Technology Optimization Center — maximise performance and ROI from your existing IT investments.',                                                                             icon:'<circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>' },
        { name:'Offensive Security',          desc:'Penetration testing, red team exercises and vulnerability assessments that simulate real-world attacks.',                                                                     icon:'<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>' },
        { name:'Compliance Center',           desc:'Navigate ISO 27001, NIST, GDPR and NCA with expert-led gap assessments and continuous compliance monitoring.',                                                               icon:'<path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>' },
        { name:'Managed Security',            desc:'Fully managed end-to-end security services — firewall, endpoint, SIEM and threat intelligence.',                                                                             icon:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>' },
        { name:'SOAR',                        desc:'Security Orchestration, Automation and Response — automate and orchestrate threat responses across all your tools.',                                                          icon:'<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>' },
        { name:'Training & Cert.',            desc:'Accredited cybersecurity training and certification pathways from foundational awareness to advanced specialist courses.',                                                     icon:'<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>' },
        { name:'Zero Trust',                  desc:'Never trust, always verify — enforce least-privilege access for every user and device regardless of network location.',                                                       icon:'<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>' },
      ],

      /* ── About bullets ────────────────────────────────────── */
      aboutBullets: [
        'Computer systems & software solutions',
        'Peripherals, accessories & networking products',
        'Complete cybersecurity solutions',
        'IT consulting & managed services',
        'Cloud migration & digital transformation',
        'Data privacy compliance & risk assessments',
      ],

      /* ── About stats ──────────────────────────────────────── */
      aboutStats: [
        { num:'13+',  label:'Years of expertise'          },
        { num:'25+',  label:'Yrs management experience'   },
        { num:'1',    label:'Countries: BD'         },
        { num:'500+', label:'Clients secured'             },
      ],

      /* ── Partners ─────────────────────────────────────────────
         logo → path to your logo image file
         HOW TO ADD: add { logo: 'images/yourlogo.png' }
         JS splits into two rows and handles the seamless loop.
      ────────────────────────────────────────────────────────── */
      partners: [
        /* Real partners from smartcom.com.bd
           Download logos and save to images/ folder */
        { logo:'images/infopercept.png'  },  /* https://www.infopercept.com/      */
        { logo:'images/sophos.png'       },  /* https://www.sophos.com/           */
        { logo:'images/google-workspace.png' }, /* Google Workspace               */
        { logo:'images/microsoft-365.png'    }, /* Microsoft 365                  */
      ],

      /* ── Contact ──────────────────────────────────────────────
         formEndpoint   → your Formspree URL (see setup below)
         formRecipients → who gets the email
         whatsapp       → number for WhatsApp click-to-chat
         info           → address/email/hours cards
         type options:  'address' | 'email' | 'hours' | 'whatsapp'
      ────────────────────────────────────────────────────────── */
      contact: {

        /*
          FORMSPREE SETUP (one-time, 2 minutes):
          1. Go to https://formspree.io and sign up (free)
          2. Create a new form → set recipient to nafisaffan14@gmail.com
          3. Copy the endpoint URL → paste it below
        */
        formEndpoint: 'https://formspree.io/f/YOUR_FORM_ID', /* ← paste here */

        /* Cloudflare Turnstile — anti-bot protection */
        turnstileSiteKey: '0x4AAAAAACk2Kzl8Lc8wDy0N',

        /* Primary recipient is set in Formspree dashboard.
           Extra addresses go here as CC. */
        formRecipients: [
          'nafisaffan14@gmail.com',
          'info@smartcom.com.bd',
        ],

        headline: 'Get In <span>Touch<\/span>',
        tagline:  'Ready to enhance your cybersecurity posture? Our team of experts across Bangladesh is here to help.',

        /* WhatsApp number — used for click-to-chat link */
        whatsapp: '+8801700769292', /* real number from smartcom.com.bd */

        info: [
          { type:'address', label:'Bangladesh Office', value:'Celebration Point (Level-5), Plot: 3 & 5, Road: 113/A, Gulshan, Dhaka-1212, Bangladesh'  },
          { type:'whatsapp',label:'WhatsApp',          value:'+880 170 076 9292'                                                                        },
          { type:'email',   label:'Email',             value:'info@smartcom.com.bd'                                                                     },
          { type:'email',   label:'Email (alt)',        value:'info@smartcombd.com'                                                                     },
          { type:'hours',   label:'Business Hours',    value:'Sun – Thu: 9:00 AM – 6:00 PM (BST)'                                                      },
        ],

        /* ── Action cards — edit href values when ready ── */
        actions: [
          // {
          //   type:  'cal',
          //   title: 'Book a Call',
          //   tag:   'Free 30-min discovery call',
          //   href:  '#',   /* ← add your Calendly URL */
          // },
          {
            type:  'wa',
            title: 'WhatsApp Us',
            tag:   'Typically replies within 1 hour',
            href:  null,  /* built from contact.whatsapp automatically */
          },
          {
            type:  'email',
            title: 'Email Directly',
            tag:   'For formal enquiries',
            href:  null,  /* built from contact.info email automatically */
          },
          {
            type:  'li',
            title: 'LinkedIn',
            tag:   'Connect with our team',
            href:  'https://www.linkedin.com/company/smartcom-ae/',
          },
        ],
      },

      /* ── Social links ─────────────────────────────────────────
         Paste your real URLs here when ready.
         Leave '#' as placeholder until then.
      ────────────────────────────────────────────────────────── */
      social: {
        facebook: 'https://www.facebook.com/smartcombd',
        linkedin: 'https://www.linkedin.com/company/smartcom-ae/',
      },

    }; /* ← end of SITE_DATA */


    /* ============================================================
       BUILDERS — read SITE_DATA and inject HTML
       You should not need to edit anything below this line.
    ============================================================ */

    /* ── Navbar ── */
    function buildNav() {
      const desk  = document.getElementById('navLinks');
      const mob   = document.getElementById('mobileLinks');
      SITE_DATA.navLinks.forEach(link => {
        const li = document.createElement('li');
        li.innerHTML = link.isCta
          ? `<a href="${link.href}" class="navbar__cta">${link.label}<\/a>`
          : `<a href="${link.href}" class="navbar__link${link.active?' active':''}" data-section="${link.href}">${link.label}<\/a>`;
        desk.appendChild(li);
        const mli = document.createElement('li');
        mli.innerHTML = `<a href="${link.href}" class="navbar__mobile-link${link.active?' active':''}${link.isCta?' contact':''}" data-section="${link.href}">${link.label}<\/a>`;
        mob.appendChild(mli);
      });
    }

    /* ── Services grid ── */
    function buildServices() {
      const g = document.getElementById('servicesGrid');
      SITE_DATA.services.forEach(s => {
        const d = document.createElement('div');
        d.className = 'svc-card';
        d.innerHTML = `<div class="svc-icon"><svg viewBox="0 0 24 24" fill="none" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${s.icon}<\/svg><\/div><h3 class="svc-name">${s.name}<\/h3><p class="svc-desc">${s.desc}<\/p><span class="svc-tag">${s.tag}<\/span>`;
        g.appendChild(d);
      });
    }

    /* ── Why Choose Us grid ── */
    function buildWhyUs() {
      const g = document.getElementById('whyGrid');
      SITE_DATA.whyUs.forEach((w, i) => {
        const d = document.createElement('div');
        d.className = 'why-card';
        d.innerHTML = `
          <span class="why-card__num">0${i+1}<\/span>
          <div class="why-card__icon"><svg viewBox="0 0 24 24" fill="none" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${w.icon}<\/svg><\/div>
          ${w.stat ? `<div class="why-card__stat">${w.stat}<\/div>` : ''}
          <h3 class="why-card__title">${w.title}<\/h3>
          <p class="why-card__desc">${w.desc}<\/p>`;
        g.appendChild(d);
      });
    }

    /* ── Clients grid ── */
    function buildClients() {
      const grid = document.getElementById('clientsGrid');
      if (!grid) return;
      SITE_DATA.clients.forEach((client, i) => {
        const card = document.createElement('div');
        card.className = 'client-card';
        card.innerHTML = `
          <div class="client-card__logo">
            <img src="${client.logo}" alt="${client.name} logo" loading="lazy">
          <\/div>
          <span class="client-card__name">${client.name}<\/span>
          <span class="client-card__sector">${client.sector}<\/span>`;
        grid.appendChild(card);
      });
      /* Staggered scroll reveal */
      staggerReveal('.client-card', 'revealed', 80);
    }

    /* ── Globe — 3D rotating sphere with cyber solution labels ────
       Pure canvas, no libraries. Uses a simple 3D projection:
         x2d = cx + r * cos(lat) * sin(lon) * scale
         y2d = cy - r * sin(lat) * scale
       Each label's opacity and size is driven by its Z depth
       so front labels are bright+large, back labels fade out.
       The globe auto-pauses when the tab is hidden.
    ────────────────────────────────────────────────────────────── */
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
        R  = SIZE * 0.38;  /* globe radius = 38% of canvas size */
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
      let   speed     = 0.004;      /* auto-rotate speed (rad/frame) */
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

    /* ── Typewriter ── */
    function startTypewriter() {
      const el    = document.getElementById('typewriterText');
      const words = SITE_DATA.itSolutions.map(s => s.name);
      let ci = 0, ch = 0, del = false;

      function tick() {
        const word = words[ci];
        el.textContent = del ? word.slice(0,ch-1) : word.slice(0,ch+1);
        ch = del ? ch-1 : ch+1;
        let wait = del ? 48 : 88;
        if (!del && ch===word.length)   { wait=1700; del=true; }
        else if (del && ch===0)         { del=false; ci=(ci+1)%words.length; wait=320; }
        setTimeout(tick, wait);
      }
      tick();
    }

    /* ── Globe ── initialised once the solutions section enters viewport */
    /* (initGlobe is defined above and called in the scroll observer below) */

    /* ── About bullets + stats ── */
    function buildAbout() {
      const ul = document.getElementById('aboutList');
      SITE_DATA.aboutBullets.forEach(t => {
        const li = document.createElement('li'); li.className='about__list-item'; li.textContent=t; ul.appendChild(li);
      });
      const row = document.getElementById('aboutStats');
      SITE_DATA.aboutStats.forEach(s => {
        const d = document.createElement('div');
        d.innerHTML = `<div class="about__stat-num">${s.num}<\/div><div class="about__stat-label">${s.label}<\/div>`;
        row.appendChild(d);
      });
    }

    /* ── Partners marquee ── */
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

    /* ── Contact section ── */
    function buildContact() {
      const cfg = SITE_DATA.contact;

      /* Title + tagline */
      const titleEl = document.getElementById('contactTitle');
      if (titleEl) titleEl.innerHTML = cfg.headline;
      const tagEl = document.getElementById('contactTagline');
      if (tagEl) tagEl.textContent = cfg.tagline;

      /* Set form endpoint */
      const form = document.getElementById('contactForm');
      if (form) {
        form.action = cfg.formEndpoint;
        cfg.formRecipients.slice(1).forEach(email => {
          const h = document.createElement('input');
          h.type='hidden'; h.name='_cc'; h.value=email;
          form.appendChild(h);
        });
      }

      /* ── Build 4 action cards ── */
      const actionsEl = document.getElementById('contactActions');
      const waNumber  = cfg.whatsapp.replace(/\D/g,'');
      const emailInfo = cfg.info.find(i => i.type === 'email');

      const cardIcons = {
        cal:   '<path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/>',
        wa:    '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>',
        email: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>',
        li:    '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
      };

      cfg.actions.forEach((action, idx) => {
        /* Resolve href */
        let href = action.href;
        if (action.type === 'wa')    href = `https://wa.me/${waNumber}`;
        if (action.type === 'email') href = emailInfo ? `mailto:${emailInfo.value}` : 'mailto:info@smartcom.com';
        if (!href || href === '#' && action.type === 'cal') href = '#'; /* placeholder */

        const card = document.createElement('a');
        card.className = `contact-card contact-card--${action.type} reveal`;
        card.style.transitionDelay = (idx * 0.08) + 's';
        card.href   = href;
        card.target = (action.type === 'wa' || action.type === 'li') ? '_blank' : '_self';
        card.rel    = 'noopener';
        card.innerHTML = `
          <div class="contact-card__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
              ${cardIcons[action.type]}
            <\/svg>
          <\/div>
          <span class="contact-card__title">${action.title}<\/span>
          <span class="contact-card__tag">${action.tag}<\/span>`;
        actionsEl.appendChild(card);
      });

      /* ── Build info strip (address + hours only) ── */
      const stripEl = document.getElementById('contactInfo');
      const stripIcons = {
        address: '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
        hours:   '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
      };
      cfg.info.filter(i => i.type === 'address' || i.type === 'hours').forEach((item, idx) => {
        const card = document.createElement('div');
        card.className = 'contact__info-item reveal';
        card.style.transitionDelay = (idx * 0.1) + 's';
        card.innerHTML = `
          <div class="contact__info-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
              ${stripIcons[item.type] || stripIcons.address}
            <\/svg>
          <\/div>
          <div class="contact__info-text">
            <span class="contact__info-label">${item.label}<\/span>
            <span class="contact__info-value">${item.value}<\/span>
          <\/div>`;
        stripEl.appendChild(card);
      });

      /* ── Collapsible form toggle ── */
      const toggle  = document.getElementById('formToggle');
      const formWrap= document.getElementById('formWrap');
      if (toggle && formWrap) {
        toggle.addEventListener('click', () => {
          const isOpen = formWrap.classList.toggle('open');
          toggle.classList.toggle('open', isOpen);
          toggle.querySelector('span') && (toggle.querySelector('span').textContent =
            isOpen ? 'Hide the form' : 'Have a detailed request? Send us a message');
          if (isOpen) setTimeout(() => formWrap.scrollIntoView({ behavior:'smooth', block:'nearest' }), 100);
        });
      }
    }

    /* ── Social links in footer ── */
    function buildSocial() {
      const fb = document.getElementById('socialFb');
      const li = document.getElementById('socialLi');
      if (fb) fb.href = SITE_DATA.social.facebook;
      if (li) li.href = SITE_DATA.social.linkedin;
    }


    /* ============================================================
       INIT — run all builders
    ============================================================ */
    buildNav();
    buildServices();
    buildWhyUs();
    buildClients();
    /* Globe is initialised lazily when section enters viewport */
    buildAbout();
    buildPartners();
    buildContact();
    buildSocial();

    /* Footer year */
    const yrEl = document.getElementById('footerYear');
    if (yrEl) yrEl.textContent = new Date().getFullYear();


    /* ============================================================
       PAGE LOGIC
    ============================================================ */

    /* ── Loading screen ──
       Hides after the bar animation completes (~1.7s),
       then fires the page-load animations.
    ── */
    /* No loading screen — fire page animations immediately */
    document.body.classList.add('loaded');

    /* ── Navbar scroll behaviour ── */
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('navbar--scrolled', window.scrollY > 40);
    }, { passive:true });

    /* ── Scroll progress bar ── */
    const progressBar = document.getElementById('scrollProgress');
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      const total    = document.documentElement.scrollHeight - window.innerHeight;
      progressBar.style.width = (total > 0 ? (scrolled / total) * 100 : 0) + '%';
    }, { passive:true });

    /* ── Active nav on scroll ──
       Watches every section and updates the active nav link
       as you scroll through each one.
    ── */
    function updateActiveNav() {
      const sections = document.querySelectorAll('section[id]');
      const links    = document.querySelectorAll('.navbar__link[data-section], .navbar__mobile-link[data-section]');
      let current = '';
      sections.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 120) current = '#' + sec.id;
      });
      links.forEach(link => {
        link.classList.toggle('active', link.dataset.section === current);
      });
    }
    window.addEventListener('scroll', updateActiveNav, { passive:true });
    updateActiveNav(); /* run once on load */

    /* ── Mobile hamburger ── */
    const hamburger  = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    hamburger.addEventListener('click', () => {
      const open = mobileMenu.classList.toggle('open');
      hamburger.classList.toggle('open', open);
      hamburger.setAttribute('aria-expanded', String(open));
    });
    /* Close mobile menu when a link is tapped */
    document.querySelectorAll('.navbar__mobile-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });

    /* ── Back to top ── */
    const btt = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
      btt.classList.toggle('visible', window.scrollY > 500);
    }, { passive:true });
    btt.addEventListener('click', () => window.scrollTo({ top:0, behavior:'smooth' }));

    /* ── Universal scroll-reveal observer ── */
    const revEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    const revObs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); revObs.unobserve(e.target); } });
    }, { threshold:0.1 });
    revEls.forEach(el => revObs.observe(el));

    /* ── Staggered card reveal (services, why, cyber) ── */
    function staggerReveal(selector, cls, delay) {
      const cards = document.querySelectorAll(selector);
      const obs   = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            const i = [...cards].indexOf(e.target);
            setTimeout(() => e.target.classList.add(cls), i * delay);
            obs.unobserve(e.target);
          }
        });
      }, { threshold:0.08 });
      cards.forEach(c => obs.observe(c));
    }
    staggerReveal('.svc-card',   'revealed', 85);
    staggerReveal('.why-card',   'revealed', 90);

    /* ── Solutions section — start typewriter + globe on entry ── */
    let twStarted=false, globeStarted=false;
    new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          if (!twStarted)    { twStarted=true;    setTimeout(startTypewriter, 300); }
          if (!globeStarted) { globeStarted=true; setTimeout(initGlobe, 500); }
        }
      });
    }, { threshold:0.1 }).observe(document.getElementById('solutions'));

    /* ── Contact form submission ── */
    const form      = document.getElementById('contactForm');
    const submitBtn = document.getElementById('formSubmit');
    const successEl = document.getElementById('formSuccess');
    const errorEl   = document.getElementById('formError');

    /* ── Cloudflare Turnstile — init widget with site key from SITE_DATA ── */
    const turnstileWidget = document.getElementById('turnstileWidget');
    if (turnstileWidget && SITE_DATA.contact.turnstileSiteKey) {
      /* Render widget once Turnstile script has loaded */
      const initTurnstile = () => {
        if (typeof turnstile !== 'undefined') {
          turnstile.render('#turnstileWidget', {
            sitekey: SITE_DATA.contact.turnstileSiteKey,
            theme:   'light',
          });
        } else {
          /* Script not loaded yet — retry after 300ms */
          setTimeout(initTurnstile, 300);
        }
      };
      initTurnstile();
    }

    /* Dev warning if Formspree hasn't been configured yet */
    if (form.action.includes('YOUR_FORM_ID')) {
      form.addEventListener('submit', e => {
        e.preventDefault();
        errorEl.textContent = '⚙️ Setup needed: replace YOUR_FORM_ID in SITE_DATA.contact.formEndpoint with your Formspree URL.';
        errorEl.classList.add('visible');
      });
    } else {
    form.addEventListener('submit', async e => {
      /* Block submit if Turnstile token not yet generated */
      const token = form.querySelector('[name="cf-turnstile-response"]');
      if (!token || !token.value) {
        errorEl.textContent = 'Please complete the security check above.';
        errorEl.classList.add('visible');
        return;
      }
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      submitBtn.disabled=true; submitBtn.textContent='Sending…';
      successEl.classList.remove('visible'); errorEl.classList.remove('visible');
      try {
        const res = await fetch(form.action, { method:'POST', body:new FormData(form), headers:{'Accept':'application/json'} });
        if (res.ok) { successEl.classList.add('visible'); form.reset(); if (typeof turnstile !== 'undefined') turnstile.reset('#turnstileWidget'); }
        else          errorEl.classList.add('visible');
      } catch { errorEl.classList.add('visible'); }
      finally {
        submitBtn.disabled=false;
        submitBtn.innerHTML='Send Message <svg viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><\/svg>';
      }
    });
    } /* end else — Formspree configured */

});