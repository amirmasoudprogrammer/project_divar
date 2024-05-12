import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "../src/styles/index.css";
import "../src/styles/fonts.css";
import {BrowserRouter} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import defaultOptions from "./configs/ReactQuery.js";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";


const queryClient = new QueryClient({
    defaultOptions: defaultOptions
})

ReactDOM.createRoot(document.getElementById("root")).render(
    <QueryClientProvider client={queryClient}>
        <React.StrictMode>
            <BrowserRouter>
                <App/>
                <ReactQueryDevtools/>
            </BrowserRouter>
        </React.StrictMode>
    </QueryClientProvider>
);
