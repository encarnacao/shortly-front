import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import { AuthContext } from "../contexts/authContext";
import { ConfirmButton, SignContainer, TextInput } from "../styles/FormStyles";

function SignIn() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [persist, setPersist] = useState(false);
	const [loading, setLoading] = useState(false);
	const { setUser, setActive, setToken } = useContext(AuthContext);
	const navigate = useNavigate();

	async function handleSubmit(e) {
		e.preventDefault();
		setLoading(true);
		const body = { email, password };
		try {
			const { data } = await axios.post("/signin", body);
			setToken(data.token);
			if (persist){
				localStorage.setItem("token", data.token);
				localStorage.setItem("user", data.name);
			}
			setUser(data.name);
		} catch (e) {
			console.log(e);
			alert(e.response.data);
			setLoading(false);
			return;
		}
		setActive("Home");
		navigate("/");
	}

	if (loading) return <Loading />;
	return (
		<SignContainer>
			<form onSubmit={handleSubmit}>
				<TextInput
					type="email"
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<TextInput
					type="password"
					placeholder="Senha"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<div>
					<input
						type="checkbox"
						onChange={() => setPersist(!persist)}
					/>
					{"Permanecer conectado"}
				</div>
				<ConfirmButton type="submit">Entrar</ConfirmButton>
			</form>
		</SignContainer>
	);
}

export default SignIn;
