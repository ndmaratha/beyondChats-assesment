import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserRegistration from "./Component/UserRegistration";
import SetupOrganisation from "./Component/SetupOrganisation";
import ChatbotIntegration from "./Component/ChatbotIntegration";
import Header from "./Component/Header";
import "./App.css";

export default function App() {
	return (
		<BrowserRouter>
			<div className='min-h-screen w-full bg-gray-100'>
				<Header />
				<main className='min-h-[calc(100vh-4rem)] w-full p-4 md:p-6 lg:p-8'>
					<div className='mx-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-4xl xl:max-w-7xl'>
						<Routes>
							<Route path='/' element={<UserRegistration />} />
							<Route path='/setup' element={<SetupOrganisation />} />
							<Route path='/integration' element={<ChatbotIntegration />} />
						</Routes>
					</div>
				</main>
			</div>
		</BrowserRouter>
	);
}
