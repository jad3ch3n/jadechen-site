(function () {
  const THEME_KEY = 'jadechen-theme';
  const THEME_COLOR = {
    light: '#f9fafb',
    dark: '#111827'
  };

  const CONTACTS = {
    email: {
      href: ['mailto:', 'kunyuliu', '@', 'berkeley.edu'],
      text: 'Email'
    },
    linkedin: {
      href: ['https://www.linkedin.com/in/', 'jad3ch3n'],
      text: 'LinkedIn'
    },
    github: {
      href: ['https://github.com/', 'jad3ch3n'],
      text: 'GitHub'
    }
  };

  function readTheme() {
    try {
      return window.localStorage.getItem(THEME_KEY) || 'light';
    } catch (error) {
      return 'light';
    }
  }

  function writeTheme(mode) {
    try {
      window.localStorage.setItem(THEME_KEY, mode);
    } catch (error) {
      return;
    }
  }

  function updateThemeColor(mode) {
    const tag = document.querySelector('meta[name="theme-color"]');
    if (tag) {
      tag.setAttribute('content', THEME_COLOR[mode] || THEME_COLOR.light);
    }
  }

  function setTheme(mode, options) {
    const settings = options || {};
    const next = mode === 'dark' ? 'dark' : 'light';
    document.documentElement.classList.toggle('dark', next === 'dark');
    document.documentElement.dataset.theme = next;
    updateThemeColor(next);

    if (settings.persist !== false) {
      writeTheme(next);
    }

    if (window.JadeSite && typeof window.JadeSite.onThemeChange === 'function') {
      window.JadeSite.onThemeChange(next);
    }
  }

  function bootstrapTheme() {
    setTheme(readTheme(), { persist: false });
  }

  function initThemeToggle(selector) {
    const target = selector || '#theme-toggle';
    const button = typeof target === 'string' ? document.querySelector(target) : target;
    if (!button) {
      return;
    }

    const syncState = function () {
      const dark = document.documentElement.classList.contains('dark');
      button.setAttribute('aria-pressed', String(dark));
      button.setAttribute('title', dark ? 'Switch to light mode' : 'Switch to dark mode');
    };

    syncState();
    button.addEventListener('click', function () {
      const next = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
      setTheme(next);
      syncState();
    });
  }

  function initProtectedContacts(selector) {
    const target = selector || '[data-contact]';
    document.querySelectorAll(target).forEach(function (link) {
      const key = link.getAttribute('data-contact');
      const definition = CONTACTS[key];
      if (!definition) {
        return;
      }

      const href = definition.href.join('');
      link.setAttribute('href', href);
      link.textContent = link.dataset.label || definition.text;
      link.setAttribute('rel', 'noopener noreferrer me');
      link.setAttribute('referrerpolicy', 'no-referrer');

      if (href.startsWith('http')) {
        link.setAttribute('target', '_blank');
      }
    });
  }

  function decorateExternalLinks(selector) {
    const target = selector || 'a[target="_blank"]';
    document.querySelectorAll(target).forEach(function (link) {
      const rel = new Set((link.getAttribute('rel') || '').split(/\s+/).filter(Boolean));
      rel.add('noopener');
      rel.add('noreferrer');
      rel.add('external');
      link.setAttribute('rel', Array.from(rel).join(' '));
      link.setAttribute('referrerpolicy', 'no-referrer');
    });
  }

  bootstrapTheme();

  window.JadeSite = {
    CONTACTS,
    bootstrapTheme,
    decorateExternalLinks,
    initProtectedContacts,
    initThemeToggle,
    onThemeChange: null,
    readTheme,
    setTheme
  };
})();
