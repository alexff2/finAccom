export const TOKEN_KEY = "@finaccom-token"

export const authLogin = token => localStorage.setItem(TOKEN_KEY, token)
export const userLogin = user => localStorage.setItem("@finaccom-user", user)

export const getToken = () => localStorage.getItem(TOKEN_KEY)
export const getUser = () => localStorage.getItem("@finaccom-user")

export const isAuthenticated = () => {
  if (localStorage.getItem(TOKEN_KEY)) {
    return true
  }
  return false
}
export const logout = () => {
  localStorage.clear()
}