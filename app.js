window.DEVOUT = window.DEVOUT || {};

document.addEventListener('DOMContentLoaded', () => {
  const page = location.pathname.split('/').pop() || 'index.html';

  if (page !== 'crisis.html') {
    document.querySelectorAll('.resume').forEach((box) => box.remove());
  }

  document.querySelectorAll('.prayer-strip').forEach((block) => {
    if (!block.querySelector('.sign-of-cross.opening')) {
      const opening = document.createElement('p');
      opening.className = 'sign-of-cross opening';
      opening.textContent = 'In the name of the Father, and of the Son, and of the Holy Spirit. Amen.';
      block.prepend(opening);
    }
    if (!block.querySelector('.sign-of-cross.closing')) {
      const closing = document.createElement('p');
      closing.className = 'sign-of-cross closing';
      closing.textContent = 'In the name of the Father, and of the Son, and of the Holy Spirit. Amen.';
      block.append(closing);
    }
  });

  const nav = document.querySelector('.nav');
  if (nav) {
    const coursePages = new Set(['start.html','lessons.html','lesson.html','practical.html','prayers.html','crisis.html','rule.html']);
    const active = page === 'index.html' ? 'home' : coursePages.has(page) ? 'course' : page === 'schedule.html' ? 'schedule' : page === 'materials.html' ? 'materials' : page === 'certificates.html' ? 'certificates' : page === 'contact.html' ? 'contact' : 'home';
    const items = [
      ['home','index.html','⌂','Home'],
      ['course','lessons.html','▤','Course'],
      ['schedule','schedule.html','◫','Schedule'],
      ['materials','materials.html','▣','Materials'],
      ['certificates','certificates.html','✦','Certificates'],
      ['contact','contact.html','✉','Contact']
    ];
    nav.innerHTML = '<div class="logo" aria-hidden="true">✠</div>' + items.map(([key,href,icon,label]) => `<a href="${href}"${key===active?' class="on" aria-current="page"':''}>${icon}<span>${label}</span></a>`).join('');
  }

  const masthead = document.querySelector('.masthead');
  if (masthead && !masthead.querySelector('.secondary-nav')) {
    const secondary = document.createElement('nav');
    secondary.className = 'secondary-nav';
    secondary.setAttribute('aria-label','Devout Life secondary navigation');
    secondary.innerHTML = '<a href="start.html">Start here</a><a href="practical.html">Practical course</a><a href="prayers.html">Prayers</a><a href="crisis.html">Pause pattern</a>';
    masthead.appendChild(secondary);
  }

  const style = document.createElement('style');
  style.textContent = `
    @media (min-width:801px){
      body{padding:2vw!important}
      .app{min-height:96vh!important;border:10px solid var(--ink)!important;border-radius:26px!important;grid-template-columns:105px minmax(0,1fr)!important;background:linear-gradient(to right,var(--ink) 0 105px,var(--paper) 105px 100%)!important}
      .nav{position:sticky!important;top:0!important;align-self:start!important;width:105px!important;height:calc(96vh - 20px)!important;padding:20px 9px!important;gap:4px!important}
      .logo{width:55px!important;height:55px!important;margin:0 auto 30px!important;border:2px solid var(--gold)!important;background:var(--gold)!important}
      .nav a{min-height:56px!important;padding:10px 3px!important;margin:3px 0!important;border-radius:12px!important}
      .nav a.on{box-shadow:inset 3px 0 var(--gold)!important}
    }
    .secondary-nav{display:flex;flex-wrap:wrap;gap:8px;margin-top:18px}
    .secondary-nav a{padding:8px 11px;border:1px solid var(--line);border-radius:999px;background:#fff;color:var(--burgundy);font-size:12px;font-weight:700;text-decoration:none}
    @media(max-width:800px){.secondary-nav{overflow-x:auto;flex-wrap:nowrap}.secondary-nav a{flex:0 0 auto}}
  `;
  document.head.appendChild(style);
});