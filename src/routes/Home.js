import styled from "styled-components";
import RankingBoard from "../components/RankingBoard";

function Home() {
	return (
		<HomeContainer>
			<RankingBoard />
			<h2>Crie sua conta para usar nosso serviço!</h2>
		</HomeContainer>
	);
}

const HomeContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100%;
	width: 100%;
	> h2{
		font-weight: 700;
		font-size: 36px;
		margin-top: 80px;
	}
`;

export default Home;
