import { useSelector } from 'react-redux';

const fantaleagueNewErrorSelector = (state) => state?.fantaleague?.fantaleagueNew?.errors;

export const useFantaleagueNewError = () => useSelector(fantaleagueNewErrorSelector);

export default fantaleagueNewErrorSelector;
