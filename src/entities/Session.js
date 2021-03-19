class Session {
  constructor(data) {
    this.code = data?.code;
  }

  get isValid() {
    return Boolean(this.code);
  }
}

export default Session;
