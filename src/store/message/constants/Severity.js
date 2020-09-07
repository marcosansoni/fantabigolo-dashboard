import { Color } from '../../../assets/theme';

const Severity = {
  WARNING: 'warning',
  ERROR: 'error',
};

export const getColorFromSeverity = (severity, theme) => {
  switch (severity) {
    case Severity.ERROR:
      return theme[Color.ERROR];
    case Severity.WARNING:
      return theme[Color.WARNING];
    default:
      return theme[Color.ERROR];
  }
};

export default Severity;
