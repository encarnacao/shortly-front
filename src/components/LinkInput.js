import styled from "styled-components";
import { useState } from "react";

function LinkInput() {
	const [url, setUrl] = useState("");
	return (
		<InputContainer>
			<form>
				<TextInput
					type="url"
					placeholder="Links que cabem no bolso"
					value={url}
					onChange={(e) => setUrl(e.target.value)}
				/>

				<ConfirmButton>Encurtar Link</ConfirmButton>
			</form>
		</InputContainer>
	);
}

const InputContainer = styled.div`
	width: 100%;
	margin-bottom: 40px;
	> form {
		width: 80%;
		max-width: 1020px;
		display: flex;
		justify-content: space-between;
        margin: 0 auto;
	}
`;

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
    &:hover{
        cursor: pointer;
        filter: brightness(1.1);
    }
`;

export default LinkInput;
