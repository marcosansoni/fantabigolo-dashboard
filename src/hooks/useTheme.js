import { useSelector } from 'react-redux';
import theme from '../assets/OLD/theme';
import themeSelector from '../store/ui/selectors/themeSelector';

const useTheme = () => {
  const selectedTheme = useSelector(themeSelector);

  return {
    theme: theme[selectedTheme],
  };
};

export default useTheme;
