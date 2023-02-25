import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./routes/Home";
import Ranking from "./routes/Ranking";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/ranking" element={<Ranking />} />
			</Routes>
		</>
	);
}

export default App;
