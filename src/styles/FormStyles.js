import styled from "styled-components";

const TextInput = styled.input`
	font-family: "Lexend Deca";
	font-weight: 400;
	font-size: 14px;
	line-height: 18px;
	width: 70%;
	height: 60px;
	border: 1px solid rgba(120, 177, 89, 0.25);
	box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
	border-radius: 12px;
	padding: 0 20px;
	&::placeholder {
		color: #9c9c9c;
	}
	&:focus {
		outline: none;
	}
	&.error {
		border: 1px solid #ff0000;
		background-color: rgba(255, 0, 0, 0.1);
	}
`;

const ConfirmButton = styled.button`
	width: 182px;
	height: 60px;
	background: #5d9040;
	border-radius: 12px;
	color: #ffffff;
	font-weight: 700;
	font-size: 14px;
	border: none;
	transition: filter 0.2s;
	&:hover {
		cursor: pointer;
		filter: brightness(1.1);
	}
`;

const SignContainer = styled.div`
	width: 100%;
	margin-bottom: 40px;
	> form {
		width: 80%;
		max-width: 1020px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		margin: 0 auto;
		* {
			margin-bottom: 40px;
		}
		> div{
			margin-bottom: 0;
		}
		p.error {
			color: #ff0000;
			font-size: 12px;
		}
		p.hidden {
			display: none;
		}
	}
`;

export { TextInput, ConfirmButton, SignContainer };
