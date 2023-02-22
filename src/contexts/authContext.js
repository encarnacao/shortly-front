import { createContext, useState } from "react";

const AuthContext = createContext({});

function AuthProvider({ children }) {
	const [user, setUser] = useState(null);
	const [token, setToken] = useState(null);
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	return (
		<AuthContext.Provider value={{ user, config, setUser, setToken }}>
			{children}
		</AuthContext.Provider>
	);
}

export { AuthContext };
export default AuthProvider;
