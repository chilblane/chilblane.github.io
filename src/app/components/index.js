module.exports = new (class components {
  get Application() {
    return require('./Application');
  }
  get Layout() {
    return require('./Layout');
  }
  get About() {
    return require('./About');
  }
  get Work() {
    return require('./Work');
  }
  get Resume() {
    return require('./Resume');
  }
  get Contact() {
    return require('./Contact');
  }
  get ErrorPage() {
    return require('./ErrorPage');
  }
})();
