import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "../Pages/HomePage.jsx";
import DshboardPage from "../Pages/DshboardPage.jsx";
import AuthPage from "../Pages/AuthPage.jsx";
import AdminPage from "../Pages/AdminPage.jsx";
import Page404 from "../Pages/Page404.jsx";
import {useQuery} from "@tanstack/react-query";
import {getProfile} from "../Services/users.js";

const Router = () => {
    const { data , isLoading ,error} =useQuery(["profile"],getProfile)
    console.log({data ,isLoading,  error})

    if (isLoading) return <h1>کمی صبر کنید..</h1>
    return (
        <Routes>
            <Route index element={<HomePage/>}/>
            <Route path="/dashboard" element={<DshboardPage/>}/>
            <Route path="/auth" element={<AuthPage/>}/>
            <Route path="/admin" element={<AdminPage/>}/>
            <Route path="/*" element={<Page404/>}/>
        </Routes>
    );
};

export default Router;