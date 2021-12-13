import Header from "./Header";
import { AppWrapper } from "../styles/App.styled";
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Quiz from "../pages/Quiz";
import Results from "../pages/Results";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import Register from "../pages/Register";

function App()
{
	return (
		<AppWrapper>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/quiz" element={<Quiz />} />
				<Route path="/results" element={<Results />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</AppWrapper>
	);
}

export default App;
