export const SNACKBAR = 'SNACKBAR';

export const snackbarActionCreator = (text, severity) => ({
  type: SNACKBAR,
  payload: {
    text,
    severity,
  },
});
