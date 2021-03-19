class Session {
  constructor(data) {
    this.code = data?.code;
    this.username = data?.username;
  }

  get isValid() {
    return Boolean(this.code);
  }
}

export default Session;
