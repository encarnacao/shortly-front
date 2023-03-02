import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import { ConfirmButton, SignContainer, TextInput } from "../styles/FormStyles";

function SignUp() {
	const [body, setBody] = useState({
		name: "",
		email: "",
		password: "",
		passwordConfirm: "",
	});
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	function handleChange(e) {
		setBody({ ...body, [e.target.name]: e.target.value });
		if (error) setError(false);
	}

	function checkError() {
		if (body.password !== body.passwordConfirm) {
			setError(true);
			return true;
		}
		return false;
	}

	function handleSubmit(e) {
		e.preventDefault();
		setLoading(true);
		if (checkError()) {
			setLoading(false);
			return;
		}
		console.log(body);
		navigate("/login");
	}
	if (loading) return <Loading />;
	return (
		<SignContainer>
			<form onSubmit={handleSubmit}>
				<TextInput
					type="text"
					placeholder="Nome"
					name="name"
					value={body.name}
					onChange={handleChange}
				/>
				<TextInput
					type="email"
					placeholder="Email"
					name="email"
					value={body.email}
					onChange={handleChange}
				/>
				<TextInput
					className={error ? "error" : ""}
					type="password"
					placeholder="Senha"
					name="password"
					value={body.password}
					minLength={3}
					maxLength={15}
					onChange={handleChange}
				/>
				<TextInput
					className={error ? "error" : ""}
					type="password"
					placeholder="Confirme a senha"
					name="passwordConfirm"
					value={body.passwordConfirm}
					minLength={3}
					maxLength={15}
					onChange={handleChange}
				/>
				<p className={error ? "error" : "hidden"}>
					Senhas não coincidem
				</p>
				<ConfirmButton type="submit">Criar Conta</ConfirmButton>
			</form>
		</SignContainer>
	);
}

export default SignUp;
