export const TOKEN_KEY = "@finaccom-token"
export const authLogin = token => localStorage.setItem(TOKEN_KEY, token)
export const getToken = () => localStorage.getItem(TOKEN_KEY)
export const isAuthenticated = () => {
  if (localStorage.getItem(TOKEN_KEY)) {
    return true
  }
  return false
}
export const logout = () => localStorage.removeItem(TOKEN_KEY)