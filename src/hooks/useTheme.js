import { useSelector } from 'react-redux';
import theme from '../assets/theme';
import themeSelector from '../store/setting/selectors/themeSelector';

const useTheme = () => {
  const selectedTheme = useSelector(themeSelector);

  return {
    theme: theme[selectedTheme],
  };
};

export default useTheme;
