import { Oval } from "react-loader-spinner";
import styled from "styled-components";

const LoadingContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
    min-height: 500px;
	width: 100%;
`;

export default function Loading() {
	return (
		<LoadingContainer>
			<Oval
				height={150}
				width={150}
				color="#4fa94d"
				visible={true}
				ariaLabel="loading"
				secondaryColor="#4fa94d"
				strokeWidth={5}
				strokeWidthSecondary={2}
			/>
		</LoadingContainer>
	);
}
