import { createSelector } from "@reduxjs/toolkit";

export const selectAuth = (state) => state.auth;

export const selectUser = createSelector(selectAuth, (auth) => auth.user);
export const selectIsLoggedIn = createSelector(
  selectAuth,
  (auth) => auth.isLoggedIn
);
export const selectIsRefreshing = createSelector(
  selectAuth,
  (auth) => auth.isRefreshing
);
