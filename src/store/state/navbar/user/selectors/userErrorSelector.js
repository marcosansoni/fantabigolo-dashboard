import { useSelector } from 'react-redux';

const userErrorSelector = (state) => state?.navbar?.user?.errors;

export const useUserError = () => useSelector(userErrorSelector);

export default userErrorSelector;
