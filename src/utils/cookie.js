const setCookie = (tokens) => {
    document.cookie = `accessToken=${tokens.accessToken}; max-age=${ 1 * 24 * 60 * 60}`;
    document.cookie = `refreshToken=${tokens.refreshToken}; max-age=${ 30 * 24 * 60 * 60}`;
};
const getCookie = (cookiename) =>{
  return document.cookie.split(";").find(tokens => tokens.trim().split("=")[0] === cookiename).split("=")[1];
}
export {setCookie , getCookie}