import styled from "styled-components";
import {
	HiTrash,
	HiOutlineCheckCircle,
	HiOutlineXCircle,
} from "react-icons/hi2";

import { IoIosCopy } from "react-icons/io";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/authContext";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";

function LinkItem({ id, url, code, views }) {
	const [remove, setRemove] = useState(false);
	const [loading, setLoading] = useState(false);
	const { config, getData } = useContext(AuthContext);

	async function removeLink() {
		setLoading(true);
		try {
			await axios.delete("/urls/" + id, config);
			getData();
		} catch (e) {
			console.log(e);
			alert(
				"Houve um erro ao deletar o link. Por favor, tente novamente."
			);
		}
		setLoading(false);
	}

	return (
		<ListItem>
			<div>
				<IoIosCopy />
			</div>
			<div>
				<span className="url">{url}</span>
				<span className="code">{code}</span>
				<span className="hits">Quantidade de visitantes: {views}</span>
			</div>
			<div>
				{loading ? (
					<Dots />
				) : (
					<>
						<CancelIcon
							remove={remove ? 1 : 0}
							onClick={() => setRemove(false)}
						/>
						<TrashIcon
							remove={remove ? 1 : 0}
							onClick={() => setRemove(true)}
						/>
						<ConfirmIcon
							remove={remove ? 1 : 0}
							onClick={removeLink}
						/>
					</>
				)}
			</div>
		</ListItem>
	);
}

const ListItem = styled.li`
	margin: 40px 0;
	width: 100%;
	height: 65px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border: 1px solid rgba(120, 177, 89, 0.25);
	box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
	border-radius: 12px;
	> div:first-child {
		background: #80cc74;
		width: 60px;
		height: 100%;
		border-radius: 12px 0px 0px 12px;
		display: flex;
		justify-content: center;
		align-items: center;
		> svg {
			color: #ffffff;
		}
	}
	> div:nth-child(2) {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 85%;
		height: 100%;
		background: #80cc74;
		color: #ffffff;
		font-size: 14px;
		padding: 20px;
	}
	> div:last-child {
		width: 15%;
		height: 100%;
		border-radius: 0px 12px 12px 0px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 0px 12px 12px 0px;
	}
	svg {
		font-size: 30px;
		cursor: pointer;
	}
`;

const TrashIcon = styled(HiTrash)`
	visibility: ${(props) => (props.remove ? "hidden" : "visible")};
	color: #ff5555;
	opacity: ${(props) => (props.remove ? 0 : 1)};
	transition: visibility 0.1s, opacity 0.1s linear;
`;

const ConfirmIcon = styled(HiOutlineCheckCircle)`
	visibility: ${(props) => (props.remove ? "visible" : "hidden")};
	color: #80cc74;
	opacity: ${(props) => (props.remove ? 1 : 0)};
	transition: visibility 0.1s, opacity 0.1s linear;
`;

const CancelIcon = styled(HiOutlineXCircle)`
	visibility: ${(props) => (props.remove ? "visible" : "hidden")};
	color: #ff5555;
	opacity: ${(props) => (props.remove ? 1 : 0)};
	transition: visibility 0.1s, opacity 0.1s linear;
`;

const Dots = () => {
	return (
		<ThreeDots
			height="50"
			width="50"
			radius="9"
			color="#cf1800"
			ariaLabel="three-dots-loading"
			wrapperStyle={{}}
			wrapperClassName=""
			visible={true}
		/>
	);
};

export default LinkItem;
