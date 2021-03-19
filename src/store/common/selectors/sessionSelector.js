import { useSelector } from 'react-redux';

const sessionSelector = (state) => state?.common?.session;

export const useSession = () => useSelector(sessionSelector);

export default sessionSelector;
