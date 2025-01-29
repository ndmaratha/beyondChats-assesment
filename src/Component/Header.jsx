import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className='bg-white shadow-md p-4 text-black border-black'>
			<div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center'>
				<h1 className='text-xl font-bold mb-2 md:mb-0'>BeyondChats</h1>
				<nav className='space-x-4'>
					<Link to='/setup' className='text-blue-500 hover:underline'>
						Setup Organisation
					</Link>
					<Link to='/integration' className='text-blue-500 hover:underline'>
						Chatbot Integration
					</Link>
				</nav>
			</div>
		</header>
	);
};

export default Header;
