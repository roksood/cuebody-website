(() => {
  const HEADER_OFFSET = 72;

  // Header shadow deepens once the page scrolls
  const headerBar = document.getElementById('header-bar');
  const onScroll = () => {
    headerBar.classList.toggle('is-scrolled', window.scrollY > 12);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Smooth scroll with header offset for all in-page navigation
  document.querySelectorAll('[data-scroll]').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const target = el.getAttribute('data-scroll');
      if (target === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      const section = document.getElementById(target);
      if (section) {
        const y = section.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    });
  });

  // Waitlist form: submit to FormSubmit, then swap to the success state.
  // After the first submission, FormSubmit emails an activation link to the
  // inbox below; once activated, replace the address with the random-string
  // endpoint from the activation email to keep it out of scrapers' reach.
  const FORMSUBMIT_ENDPOINT = 'https://formsubmit.co/ajax/info@cuebody.com';

  const form = document.getElementById('waitlist-form');
  const success = document.getElementById('waitlist-success');
  const email = document.getElementById('waitlist-email');
  const honeypot = document.getElementById('waitlist-honeypot');
  const submitBtn = form.querySelector('.waitlist-submit');
  const errorNote = document.getElementById('waitlist-error');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const value = email.value.trim();
    if (!value || honeypot.value) return;

    submitBtn.disabled = true;
    const idleLabel = submitBtn.textContent;
    submitBtn.textContent = 'Joining…';
    errorNote.hidden = true;

    try {
      const res = await fetch(FORMSUBMIT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          email: value,
          _subject: 'New CueBody waitlist signup',
          _template: 'table',
        }),
      });
      if (!res.ok) throw new Error('FormSubmit responded ' + res.status);
      form.hidden = true;
      success.hidden = false;
    } catch (err) {
      console.error('Waitlist submission failed:', err);
      errorNote.hidden = false;
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = idleLabel;
    }
  });
})();
