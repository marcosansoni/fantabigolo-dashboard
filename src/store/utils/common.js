export const rejectUndefinedError = () => Promise.reject({
  success: false,
  error: 100,
});
