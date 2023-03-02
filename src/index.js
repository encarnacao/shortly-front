import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyle from "./styles/globalstyle";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./contexts/authContext";
import axios from "axios";
const root = ReactDOM.createRoot(document.getElementById("root"));

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<AuthProvider>
				<GlobalStyle />
				<App />
			</AuthProvider>
		</BrowserRouter>
	</React.StrictMode>
);
