import api from "../configs/api.js";
const getProfile = () => api.get("user/whoami" )
export {getProfile}