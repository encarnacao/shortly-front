import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import LinkInput from "../components/LinkInput";
import LinkList from "../components/LinkList";
import RankingBoard from "../components/RankingBoard";
import { AuthContext } from "../contexts/authContext";

function LoggedOn() {
	const [links, setLinks] = useState([]);
	useEffect(() => {
		setLinks([
			{
				id: 1,
				url: "https://www.google.com",
				code: "g1",
				views: 1000,
			},
			{
				id: 2,
				url: "https://www.youtube.com",
				code: "y1",
				views: 999,
			},
			{
				id: 3,
				url: "https://www.facebook.com",
				code: "f1",
				views: 998,
			},
		]);
	}, []);
	return (
		<>
			<LinkInput />
			<LinkList links={links} />
		</>
	);
}

function LoggedOff() {
	return (
		<>
			<RankingBoard />
			<h2>Crie sua conta para usar nosso serviço!</h2>
		</>
	);
}

function Home() {
	const { user } = useContext(AuthContext);
	const Render = user ? <LoggedOn /> : <LoggedOff />;
	return (
		<HomeContainer>
			{Render}
		</HomeContainer>
	);
}

const HomeContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100%;
	width: 100%;
	> h2 {
		font-weight: 700;
		font-size: 36px;
		margin-top: 80px;
	}
`;

export default Home;
