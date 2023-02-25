import { Title, Logo, HeaderContainer, Menu, SubHeader } from "../styles/HeaderStyles";
import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";
import { useNavigate } from "react-router-dom";
import logo from "../assets/shortly.svg";

function setClass(item, active) {
	let className = item === active ? "active" : "";
	className += item === "Sair" ? " logout" : "";
	return className;
}

function Header() {
	const { active, setActive, user } = useContext(AuthContext);
	const routes = {
		Home: "/",
		Ranking: "/ranking",
		Entrar: "/login",
		"Cadastrar-se": "/signup",
		Sair: "/",
	};
	const menu = user
		? ["Home", "Ranking", "Sair"]
		: ["Entrar", "Cadastrar-se"];

	const navigate = useNavigate();

	const welcomeMessage = `Seja bem-vindo(a), ${user}!`;
	return (
		<HeaderContainer>
			<SubHeader>
				<div>{user && <p>{welcomeMessage}</p>}</div>
				<Menu>
					{menu.map((item, i) => {
						return (
							<li
								key={i}
								className={setClass(item, active)}
								onClick={() => {
									setActive(item);
									navigate(routes[item]);
								}}
							>
								{item}
							</li>
						);
					})}
				</Menu>
			</SubHeader>
			<Logo>
				<Title>Shortly</Title>
				<img src={logo} alt="Shortly Logo" />
			</Logo>
		</HeaderContainer>
	);
}

export default Header;
