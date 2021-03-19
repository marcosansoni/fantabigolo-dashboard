import { useSelector } from 'react-redux';

const userSelector = (state) => state?.navbar?.user?.user;

export const useUser = () => useSelector(userSelector);

export default userSelector;
