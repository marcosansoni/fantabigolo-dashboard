import { useSelector } from 'react-redux';
import themeSelector from '../store/state/navbar/theme/selectors/themeSelector';
import Theme from '../assets/Theme';

const useTheme = () => {
  const selectedThemeMode = useSelector(themeSelector);

  return {
    theme: Theme[selectedThemeMode],
  };
};

export default useTheme;
