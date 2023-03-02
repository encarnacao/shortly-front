import { createContext, useState } from "react";
import useStickyState from "../hooks/sticky";

const AuthContext = createContext({});

function AuthProvider({ children }) {
	const [user, setUser] = useStickyState(null, "user");
	const [token, setToken] = useStickyState("", "token");
	const [active, setActive] = useState("Entrar");
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	const logout = () => {
		setUser(null);
		setToken(null);
		localStorage.clear();
		setActive("Entrar");
	};

	return (
		<AuthContext.Provider
			value={{
				user,
				config,
				active,
				setToken,
				setUser,
				setActive,
				logout,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}

export { AuthContext };
export default AuthProvider;
