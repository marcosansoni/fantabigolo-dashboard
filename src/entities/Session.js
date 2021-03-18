class Session {
  constructor(session) {
    this.session = session;
  }

  get isValid() {
    return Boolean(this.session?.length);
  }
}

export default Session;
