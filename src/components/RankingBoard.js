import { useState, useEffect } from "react";
import styled from "styled-components";
import trophy from "../assets/Trophy.svg";

function RankingBoard() {
	const [ranking, setRanking] = useState([]);
	useEffect(() => {
		setRanking([
			{
				id: 1,
				user: "Fulaninha",
				links: 32,
				views: 1703584,
			},
			{
				id: 2,
				user: "Ciclano",
				links: 20,
				views: 1113347,
			},
			{
				id: 3,
				user: "Beltrana",
				links: 18,
				views: 852961,
			},
			{
				id: 4,
				user: "Joaozin",
				links: 14,
				views: 492173,
			},
			{
				id: 5,
				user: "DEFINITIVAMENTE_NAO_E_UM_BOT",
				links: 12345252,
				views: 37707,
			},
		]);
	}, []);
	return (
		<BoardContainer>
			<Heading>
				<img src={trophy} alt="Trophy" />
				<h1>Ranking</h1>
			</Heading>
			<Board>
				<ol>
					{ranking.map((item, i) => {
						return (
							<li key={item.id}>
								<span className="username">
									{i + 1}. {item.user}
								</span>{" "}
								- {item.links} links - {item.views}{" "}
								visualizações
							</li>
						);
					})}
				</ol>
			</Board>
		</BoardContainer>
	);
}

const Heading = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 60px;
	font-weight: 700;
	font-size: 36px;
	> h1 {
		margin-left: 20px;
	}
`;

const BoardContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 100%;
`;

const Board = styled.div`
	min-height: 250px;
	height: auto;
	width: 80%;
	max-width: 1100px;
	background: #ffffff;
	border: 1px solid rgba(120, 177, 89, 0.25);
	box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
	border-radius: 24px 24px 0px 0px;
	word-wrap: break-word;
	> ol {
		font-weight: 400;
		font-size: 22px;
		line-height: 40px;
		padding: 20px;
	}
	.username {
		font-weight: 500;
	}
`;

export default RankingBoard;
