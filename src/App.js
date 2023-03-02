import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./routes/Home";
import Ranking from "./routes/Ranking";
import Redirect from "./routes/Redirect";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SingUp";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/ranking" element={<Ranking />} />
				<Route path="/login" element={<SignIn />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/:shortUrl" element={<Redirect />} />"
			</Routes>
		</>
	);
}

export default App;
