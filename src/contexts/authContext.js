import axios from "axios";
import { createContext, useState } from "react";
import useStickyState from "../hooks/sticky";

const AuthContext = createContext({});

function AuthProvider({ children }) {
	const [user, setUser] = useStickyState(null, "user");
	const [token, setToken] = useStickyState("", "token");
	const [active, setActive] = useState("Entrar");
	const [links, setLinks] = useState([]);

	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	async function getData() {
		try {
			const { data } = await axios.get("/users/me", config);
			const links = data.shortenedUrls;
			if (links[0].id) {
				setLinks(links);
			} else {
				setLinks([]);
			}
		} catch (e) {
			console.log(e);
			alert(
				"Houve um erro ao obter os links. Por favor, atualize a página."
			);
		}
	}

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
				links,
				config,
				active,
				setToken,
				setUser,
				setActive,
				getData,
				logout,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}

export { AuthContext };
export default AuthProvider;
