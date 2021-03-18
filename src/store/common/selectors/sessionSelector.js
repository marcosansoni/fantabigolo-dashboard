import { useSelector } from 'react-redux';
// import Session from '../../../entities/Session';

const sessionSelector = (state) => state?.common?.session;

// export const useSession = () => new Session(useSelector(sessionSelector));
export const useSession = () => useSelector(sessionSelector);

export default sessionSelector;
