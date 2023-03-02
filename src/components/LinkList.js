import styled from "styled-components";
import LinkItem from "./LinkItem";

function LinkList({ links }) {
	return (
		<LinkListContainer>
			<List>
				{links.map((link) => {
					return (
						<LinkItem
							key={link.id}
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
`;

const List = styled.ul`
	width: 80%;
	max-width: 1020px;
	margin: 0 auto;
`;

export default LinkList;
