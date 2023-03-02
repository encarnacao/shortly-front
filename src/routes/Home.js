import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import LinkInput from "../components/LinkInput";
import LinkList from "../components/LinkList";
import Loading from "../components/Loading";
import RankingBoard from "../components/RankingBoard";
import { AuthContext } from "../contexts/authContext";

function LoggedOn() {
	
	const [loading, setLoading] = useState(true);
	const { links, getData } = useContext(AuthContext);
	useEffect(() => {
		getData();
		setLoading(false);
	}, [getData]);
	if (loading) return <Loading />;
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
	return <HomeContainer>{Render}</HomeContainer>;
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
