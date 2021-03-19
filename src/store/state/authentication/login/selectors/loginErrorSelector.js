import { useSelector } from 'react-redux';

const loginErrorSelector = (state) => state?.authentication?.login?.errors;

export const useLoginError = () => useSelector(loginErrorSelector);

export default loginErrorSelector;
