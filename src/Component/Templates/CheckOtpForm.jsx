import React from 'react';
import {CheckOtp} from "../../Services/auth.js";
import {setCookie} from "../../utils/cookie.js";

const CheckOtpForm =  ({code, setCode, setStep, mobile}) => {

    const startfromCheck =async (event) => {
        event.preventDefault()
        console.log({code , mobile})
        if (code.length !== 5) return
        const {response , error} = await CheckOtp(mobile, code)
        console.log({response , error})
        if (response){
            setCookie(response.data)
            alert(response.data.message)
        }
        if (error) console.log(error.response.data.message)
    }

    return (
        <form onSubmit={startfromCheck}>
            <p>تایید کد اس ام اس شده</p>
            <span>   کد پیامک شده به شماره موبایل {mobile} وارد کنید </span>
            <label htmlFor="input">کد تایید را وارد کنید </label>
            <input type="text" id="input" placeholder="کد تایید" value={code}
                   onChange={(event) => setCode(event.target.value)}/>
            <button type="submit">ورود</button>
            <button onClick={() => setStep(1)}>تغییر شماره موبایل</button>
        </form>
    );
};

export default CheckOtpForm;