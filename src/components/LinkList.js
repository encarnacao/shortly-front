import styled from "styled-components";
import LinkItem from "./LinkItem";

function LinkList({ links }) {
	return (
		<LinkListContainer>
			{links.length === 0 && <h2>Você não tem links encurtados</h2>}
			<List>
				{links.map((link) => {
					return (
						<LinkItem
							key={link.id}
							id={link.id}
							url={link.url}
							code={link.shortUrl}
							views={link.visitCount}
						/>
					);
				})}
			</List>
		</LinkListContainer>
	);
}

const LinkListContainer = styled.div`
	width: 100%;
	margin: 0 auto;
	> h2 {
		text-align: center;
		margin: 100px auto;
		font-size: 36px;
		color: #cccccc;
	}
`;

const List = styled.ul`
	width: 80%;
	max-width: 1020px;
	margin: 0 auto;
`;

export default LinkList;
