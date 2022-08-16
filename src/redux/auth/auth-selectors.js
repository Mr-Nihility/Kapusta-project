export const getToken = state => state.auth.token;
export const getIsLogged = state => state.auth.isLogged;
export const getUserEmail = state => state.auth.userData.email;
export const getSid = state => state.auth.sid;
console.log(getToken);
