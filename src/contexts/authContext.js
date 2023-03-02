import axios from "axios";
import { createContext, useState } from "react";
import useStickyState from "../hooks/sticky";

const AuthContext = createContext({});

function AuthProvider({ children }) {
	const [user, setUser] = useState(null);
	const [token, setToken] = useStickyState("", "token");
	const [active, setActive] = useState("Entrar");
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};
	async function getUser() {
		const result = await axios.get("/users/me", config);
		const username = result.data.name;
		setUser(username);
	}

	return (
		<AuthContext.Provider
			value={{
				user,
				config,
				active,
				setToken,
				setUser,
				setActive,
				getUser,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}

export { AuthContext };
export default AuthProvider;
