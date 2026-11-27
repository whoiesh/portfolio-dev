(() => {
  const profile = window.PORTFOLIO_PROFILE;
  if (!profile) return;

  const escapeHTML = (value) => String(value ?? '').replace(/[&<>"']/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[char]);

  document.querySelectorAll('[data-profile]').forEach((element) => {
    const key = element.dataset.profile;
    const value = key === 'nameUpper' ? profile.name.toUpperCase() : profile[key];
    if (value !== undefined) element.textContent = value;
  });

  const tagMarkup = (tags = []) => tags.map((tag) => `<span class="tag">${escapeHTML(tag)}</span>`).join('');

  const experienceList = document.getElementById('experience-list');
  experienceList.innerHTML = (window.PORTFOLIO_EXPERIENCE || []).map((item, index, list) => `
    <article class="timeline-item">
      <div class="timeline-rail"><span class="timeline-dot ${item.current ? 'active' : ''}"></span>${index !== list.length - 1 ? '<span class="timeline-stem"></span>' : ''}</div>
      <div class="experience-card">
        <div class="experience-topline"><span class="experience-period">${escapeHTML(item.period)}</span><span class="experience-location">${escapeHTML(item.location)}</span></div>
        <div class="experience-title-row"><div><h3>${escapeHTML(item.role)}</h3><p class="company-name">${escapeHTML(item.company)}</p></div>${item.current ? '<span class="current-pill"><span></span> CURRENT</span>' : ''}</div>
        <p class="experience-description">${escapeHTML(item.description)}</p>
        ${item.highlights?.length ? `<ul class="achievement-list">${item.highlights.map((line) => `<li>${escapeHTML(line)}</li>`).join('')}</ul>` : ''}
        <div class="tag-row">${tagMarkup(item.tags)}</div>
      </div>
    </article>`).join('');

  document.getElementById('work-list').innerHTML = (window.PORTFOLIO_WORK || []).map((work) => `
    <article class="work-card">
      <div class="work-card-top"><span>${escapeHTML(work.number)}</span><span class="work-category">${escapeHTML(work.category)}</span></div>
      <div class="work-card-content"><h3>${escapeHTML(work.title)}</h3><p>${escapeHTML(work.description)}</p></div>
      <div class="tag-row">${tagMarkup(work.stack)}</div><div class="work-card-decoration">↗</div>
    </article>`).join('');

  document.getElementById('skills-list').innerHTML = (window.PORTFOLIO_SKILLS || []).map((group, index) => `
    <div class="skill-group"><div class="skill-index">0${index + 1}</div><h3>${escapeHTML(group.title)}</h3><div class="skill-list">${group.skills.map((skill) => `<span>${escapeHTML(skill)}</span>`).join('')}</div></div>`).join('');

  const email = profile.email || '';
  const emailHref = `mailto:${email}`;
  document.getElementById('email-link').textContent = email;
  document.getElementById('email-link').href = emailHref;
  document.getElementById('contact-button').href = emailHref;

  const socialLinks = [];
  if (profile.linkedin) socialLinks.push(`<a href="${escapeHTML(profile.linkedin)}" target="_blank" rel="noopener noreferrer"><span class="social-icon">in</span><span>LINKEDIN</span><span>↗</span></a>`);
  if (profile.github) socialLinks.push(`<a href="${escapeHTML(profile.github)}" target="_blank" rel="noopener noreferrer"><span class="social-icon">⌘</span><span>GITHUB</span><span>↗</span></a>`);
  if (profile.resumePath) socialLinks.push(`<a href="${escapeHTML(profile.resumePath)}" target="_blank" rel="noopener noreferrer"><span class="social-icon">↓</span><span>RESUME</span><span>↗</span></a>`);
  document.getElementById('social-links').innerHTML = socialLinks.join('');

  document.getElementById('year').textContent = new Date().getFullYear();

  const menuButton = document.querySelector('.mobile-menu-button');
  const nav = document.querySelector('.navigation');
  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
  });
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation menu');
  }));
})();
