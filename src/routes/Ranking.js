import styled from "styled-components";
import RankingBoard from "../components/RankingBoard";

function Ranking() {
	return (
		<RankingContainer>
			<RankingBoard />
		</RankingContainer>
	);
}

const RankingContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export default Ranking;