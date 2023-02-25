import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";
import { ConfirmButton, SignContainer, TextInput } from "../styles/FormStyles";

function SignIn() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
    const {setUser, setActive} = useContext(AuthContext);
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        setUser("User");
        setActive("Home");
        navigate("/");
    }

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
				<ConfirmButton type="submit">Entrar</ConfirmButton>
			</form>
		</SignContainer>
	);
}

export default SignIn;
