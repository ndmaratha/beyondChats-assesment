import { useState } from "react";
import Confetti from "react-confetti";

const ChatbotIntegration = () => {
	const [showSuccess, setShowSuccess] = useState(false);
	const [showInstructions, setShowInstructions] = useState(false);
	const [showChat, setShowChat] = useState(false);

	return (
		<div className='max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md mt-8 text-black border-black'>
			<h1 className='text-2xl font-bold mb-4'>Chatbot Integration</h1>

			<div className='space-y-3'>
				<button
					onClick={() => setShowChat(true)}
					className='w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 border-black'
				>
					Test Chatbot
				</button>

				<button
					onClick={() => setShowInstructions(true)}
					className='w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 border-black'
				>
					Integrate on Website
				</button>

				<button
					onClick={() => setShowSuccess(true)}
					className='w-full bg-purple-500 text-white p-2 rounded hover:bg-purple-600 border-black'
				>
					Test Integration
				</button>
			</div>

			{/* Chatbot Modal */}
			{showChat && (
				<div className='fixed bottom-4 right-4 w-72 bg-white border rounded-lg shadow-lg p-4 text-black border-black'>
					<div className='flex justify-between items-center mb-2'>
						<h3 className='font-semibold'>Dummy Chatbot</h3>
						<button
							onClick={() => setShowChat(false)}
							className='text-gray-500'
						>
							×
						</button>
					</div>
					<div className='h-32 overflow-y-auto mb-2 border p-2 rounded text-sm'>
						<p className='text-gray-600'>Bot: Hello! How can I help you?</p>
					</div>
					<input
						type='text'
						placeholder='Type a message...'
						className='w-full p-1 border rounded text-sm border-black'
					/>
				</div>
			)}

			{/* Integration Instructions */}
			{showInstructions && (
				<div className='mt-4 p-4 bg-gray-100 rounded text-black border-black'>
					<h3 className='font-semibold'>Integration Steps</h3>
					<p className='mt-2 text-sm'>
						Add this code to your website's &lt;head&gt;:
					</p>
					<code className='block mt-2 p-2 bg-gray-200 rounded text-sm'>
						{`<script src="https://dummy-chatbot-integration.js"></script>`}
					</code>
					<button
						onClick={() => setShowInstructions(false)}
						className='mt-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm border-black'
					>
						Close
					</button>
				</div>
			)}

			{/* Success Screen */}
			{showSuccess && (
				<div className='mt-4 text-center text-black border-black'>
					<Confetti width={window.innerWidth} height={window.innerHeight} />
					<h2 className='text-xl font-bold mb-4'>Integration Successful! 🎉</h2>
					<div className='space-y-2'>
						<button className='w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 border-black'>
							Explore Admin Panel
						</button>
						<button className='w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 border-black'>
							Start Chatting
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default ChatbotIntegration;
