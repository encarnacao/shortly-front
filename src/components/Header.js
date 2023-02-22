import { Title, Logo, HeaderContainer, Menu, SubHeader } from "./HeaderStyles";
import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";
import logo from "../assets/shortly.svg";


function setClass(item, active) {
    let className = item === active ? "active" : "";
    className += item === "Sair" ? " logout" : "";
    return className;
}

function Header() {
	const { active, setActive, user } = useContext(AuthContext);
	const menu = user
		? ["Home", "Ranking", "Sair"]
		: ["Entrar", "Cadastrar-se"];
    const welcomeMessage = `Seja bem-vindo(a), ${user}!`
	return (
		<HeaderContainer>
			<SubHeader>
                <div>
                    {user && <p>{welcomeMessage}</p>}
                </div>
				<Menu>
					{menu.map((item, i) => {
						return (
							<li
								key={i}
								className={setClass(item, active)}
								onClick={() => setActive(item)}
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
