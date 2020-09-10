// eslint-disable-next-line import/prefer-default-export
export const getSession = (state) => state.session.session;
export const getUsername = (state) => state.session.username;
export const getFetchingLogin = (state) => state.session.isFetching;

