import styled from "styled-components";
import { useContext, useState } from "react";
import { ConfirmButton, TextInput } from "../styles/FormStyles";
import { AuthContext } from "../contexts/authContext";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

function LinkInput() {
	const [url, setUrl] = useState("");
	const [loading, setLoading] = useState(false);
	const { config,getData } = useContext(AuthContext);
	async function shortenLink(e) {
		e.preventDefault();
		setLoading(true);
		const body = { url };
		try {
			await axios.post("/urls/shorten", body, config);
			setUrl("");
			getData();
		} catch (e) {
			console.log(e);
			alert(
				"Houve um erro ao encurtar o link. Por favor, tente novamente."
			);
		}
		setLoading(false);
	}
	return (
		<InputContainer>
			<form onSubmit={shortenLink}>
				<TextInput
					type="url"
					placeholder="Links que cabem no bolso"
					value={url}
					onChange={(e) => setUrl(e.target.value)}
				/>

				<ConfirmButton type="submit" disabled={loading}>
					{loading ? <Dots /> : <>Encurtar Link</>}
				</ConfirmButton>
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

const Dots = () => {
	return (
		<ThreeDots
			height="50"
			width="50"
			radius="9"
			color="#1a381a"
			ariaLabel="three-dots-loading"
			wrapperStyle={{}}
			wrapperClassName=""
			visible={true}
		/>
	);
};

export default LinkInput;
