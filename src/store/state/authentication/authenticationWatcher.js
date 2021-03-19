import loginWatcher from './login/loginWatcher';
import registerWatcher from './register/registerWatcher';

const authenticationWatcher = [
  ...loginWatcher,
  ...registerWatcher,
];

export default authenticationWatcher;
