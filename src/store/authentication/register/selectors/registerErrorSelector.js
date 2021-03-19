import { useSelector } from 'react-redux';

const registerErrorSelector = (state) => state?.authentication?.register?.errors;

export const useRegisterError = () => useSelector(registerErrorSelector);

export default registerErrorSelector;
