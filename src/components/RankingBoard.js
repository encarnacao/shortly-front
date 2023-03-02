import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";
import trophy from "../assets/Trophy.svg";
import Loading from "./Loading";

function RankingBoard() {
	const [ranking, setRanking] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		async function getRanking() {
			const result = await axios("/ranking");
			setRanking(result.data);
			setLoading(false);
		}
		getRanking();
	}, []);

	if (loading) {
		return <Loading />;
	}
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
									{i + 1}. {item.name}
								</span>{" "}
								- {item.linksCount} links - {item.visitCount ?? 0}{" "}
								visualizações
							</li>
						);
					})}
					{ranking.length === 0 && (
						<h1>Ranking ainda Vazio. Comece a encurtar!</h1>
					)}
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
	position: relative;
	> ol {
		font-weight: 400;
		font-size: 22px;
		line-height: 40px;
		padding: 20px;
	}
	> ol > h1 {
		font-size: 24px;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: #4fa94d;
	}
	.username {
		font-weight: 500;
	}
`;

export default RankingBoard;
