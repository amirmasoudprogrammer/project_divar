import React, {useState} from 'react';
import SendOTpForm from "../Component/Templates/SendOTpForm.jsx";
import CheckOtpForm from "../Component/Templates/CheckOtpForm.jsx";



const AuthPage = () => {
    const [step , setStep] =useState(1)
    const [mobile , setMobile] =useState("")
    const [code , setCode] =useState("")
    return (
        <div>
            {step === 1 && (    <SendOTpForm setStep={setStep} mobile={mobile}  setMobile={setMobile} />)}
            {step === 2 && (    <CheckOtpForm code={code} setCode={setCode} mobile={mobile} setStep={setStep}/>)}


        </div>
    );
};
export default AuthPage;