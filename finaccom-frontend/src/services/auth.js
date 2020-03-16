export const TOKEN_KEY = "@finaccom-token"
export const login = token => localStorage.setItem(TOKEN_KEY, token)
export const getToken = () => localStorage.getItem(TOKEN_KEY)
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY)
export const logout = () => localStorage.removeItem(TOKEN_KEY)