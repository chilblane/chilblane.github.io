module.exports = new (class components {
  get Application() {
    return require('./Application');
  }
  get About() {
    return require('./About');
  }
  get Layout() {
    return require('./Layout');
  }
  get ErrorPage() {
    return require('./ErrorPage');
  }
})();
