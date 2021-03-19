import { useSelector } from 'react-redux';

const fetchSelector = (state) => state?.common?.fetch;

export const useFetch = () => useSelector(fetchSelector);

export const useFetchType = (type) => useFetch()?.includes(type);

export default fetchSelector;
