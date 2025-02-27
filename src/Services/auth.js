import api from "../configs/api.js";

const sendOtp = async (mobile) => {
    try {
        const response = await api.post("/auth/send-otp", {mobile:mobile})
        return {response};
    } catch (error) {
        return {error}
    }
}
const CheckOtp = async (mobile , code) =>{
    try {
        const response = await api.post("/auth/check-otp", {mobile ,code})
        return {response};
    } catch (error) {
        return {error}
    }

}
export {sendOtp , CheckOtp}