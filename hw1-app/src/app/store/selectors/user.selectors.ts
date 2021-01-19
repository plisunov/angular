export const selectUser = (state) => state.user;

export const selectIsAuthenticated = (state) => {
  return !!state.user.token;
};

