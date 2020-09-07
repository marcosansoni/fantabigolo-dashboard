import { useSelector } from 'react-redux';
import { getTheme } from '../store/settings/settingsSelector';
import theme from '../assets/theme';

const useTheme = () => {
  const selectedTheme = useSelector(getTheme);

  return {
    theme: theme[selectedTheme],
  };
};

export default useTheme;
