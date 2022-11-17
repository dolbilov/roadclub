export default class Toggle {
  constructor(toggle) {
    this._toggle = toggle;
  }

  setPreferTheme() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-theme', 'dark');
      this._toggle.checked = true;
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      this._toggle.checked = false;
    }
  }

  _changeTheme(evt) {
    const nextTheme = evt.target.checked ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', nextTheme);
  }

  setEventListeners() {
  this._toggle.addEventListener('change', this._changeTheme);
  }
}
