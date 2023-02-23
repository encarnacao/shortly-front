import styled from "styled-components";
const Title = styled.h1`
	font-size: 64px;
	font-weight: 200;
`;

const Logo = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	max-width: 320px;
	height: 100%;
	max-height: 110px;
	> img {
		width: 100px;
		height: 100px;
		margin-left: 10px;
	}
`;

const HeaderContainer = styled.header`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	max-width: 80%;
	height: 25%;
	max-height: 250px;
	margin: 50px auto;
`;

const Menu = styled.ul`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	width: 100%;
	margin-bottom: 15px;
	> li {
		font-weight: 400;
		font-size: 14px;
		color: #9c9c9c;
		margin: 0 10px;
		cursor: pointer;
		&.active {
			color: #5d9040;
		}
        &.logout {
            text-decoration-line: underline;
        }
	}
`;

const SubHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	> div {
        width: 100%;
		font-style: normal;
		font-weight: 400;
		font-size: 14px;
		line-height: 18px;
		color: #5d9040;
	}
`;

export { Title, Logo, HeaderContainer, Menu, SubHeader };
