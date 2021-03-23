class User {
  constructor(params) {
    this.firstName = params?.firstName;
    this.lastName = params?.lastName;
    this.username = params?.username;
    this.email = params?.email;
    this.lastAccess = params?.lastAccess;
    this.registrationDate = params?.registrationDate;
  }

  mapApi(params) {
    this.firstName = params?.firstname;
    this.lastName = params?.lastname;
    this.username = params?.username;
    this.email = params?.email;
    this.lastAccess = params?.['last access'];
    this.registrationDate = params?.['registration date'];
  }

  get isValid() {
    return Boolean(this.email && this.firstName && this.lastName);
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

export default User;
