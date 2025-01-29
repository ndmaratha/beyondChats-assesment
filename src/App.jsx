import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserRegistration from "./Component/UserRegistration";
import SetupOrganisation from "./Component/SetupOrganisation";
import ChatbotIntegration from "./Component/ChatbotIntegration";
import Header from "./Component/Header";
import "./App.css";

export default function App() {
	return (
		<BrowserRouter>
			<div className='min-h-screen bg-gray-100 text-black border-black'>
				<Header />
				<Routes>
					<Route path='/' element={<UserRegistration />} />
					<Route path='/setup' element={<SetupOrganisation />} />
					<Route path='/integration' element={<ChatbotIntegration />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}
