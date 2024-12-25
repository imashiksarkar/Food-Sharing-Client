export default class Token {
  static setToken = (token: string) => {
    localStorage.setItem('access_token', token)
  }

  static getToken = () => {
    return localStorage.getItem('access_token') || null
  }
}
