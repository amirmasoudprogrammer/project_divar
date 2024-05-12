import React from 'react';
import {sendOtp} from "../../Services/auth.js";


const SendOTpForm = ({mobile, setMobile, setStep}) => {
    const startCode = async (e) => {
        e.preventDefault()
        if (mobile.length !== 11) return;
        const {response, error} = await sendOtp(mobile)
        if (response) setStep(2)
        if (error)await console.log(error.response.data.message)
    }
    return (
        <div>
            <form onSubmit={startCode}>
                <p>ورود به حساب کاربری</p>
                <span>
                    لطفا شماره موبایل وارد کنید تا کد اس ام اس شود ممنون از صبر و  شکیبایی شما
                </span>
                <label htmlFor="input">شماره موبایل وارد کنید </label>
                <input type="text" placeholder="شماره خود را وارد کنید" value={mobile}
                       onChange={(e) => setMobile(e.target.value)}/>
                <button type="submit"> ارسال کد تایید</button>
            </form>
        </div>
    );
};

export default SendOTpForm;