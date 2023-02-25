import { useState } from "react";
import { ConfirmButton, SignContainer, TextInput } from "../styles/FormStyles";

function SignUp() {
	const [body, setBody] = useState({ name: "", email: "", password: "" });
	const [passwordConfirm, setPasswordConfirm] = useState("");
	const [error, setError] = useState("");

	function handleChange(e) {
		if (e.target.name !== "passwordConfirm") {
			setBody({ ...body, [e.target.name]: e.target.value });
		} else {
			setPasswordConfirm(e.target.value);
		}
		setError(false);
	}

	function checkError() {
		if (body.password !== passwordConfirm) {
			setError(true);
			return true;
		}
		return false;
	}

	function handleSubmit(e) {
		e.preventDefault();
		if (checkError()) return;
		console.log(body);
	}

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
					onChange={handleChange}
				/>
				<TextInput
					className={error ? "error" : ""}
					type="password"
					placeholder="Confirme a senha"
					name="passwordConfirm"
					value={passwordConfirm}
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
