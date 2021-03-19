class User {
  constructor(params) {
    this.firstName = params?.firstname;
    this.lastName = params?.lastname;
    this.email = params?.email;
  }

  get isValid() {
    return Boolean(this.email);
  }
}

export default User;
