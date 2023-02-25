import styled from "styled-components";
import { useState } from "react";
import { ConfirmButton, TextInput } from "../styles/FormStyles";

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

export default LinkInput;
