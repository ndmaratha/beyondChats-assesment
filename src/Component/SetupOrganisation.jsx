import { useState } from "react";

const SetupOrganisation = () => {
	const [companyName, setCompanyName] = useState("");
	const [websiteURL, setWebsiteURL] = useState("");
	const [companyDescription, setCompanyDescription] = useState("");
	const [metaDescription, setMetaDescription] = useState("");
	const [websiteData, setWebsiteData] = useState([
		{
			id: 1,
			url: "https://example.com",
			status: "Scraped",
			chunks: ["Header content", "Footer content"],
		},
		{
			id: 2,
			url: "https://example.com/about",
			status: "Pending",
			chunks: [],
		},
	]);

	const [selectedPage, setSelectedPage] = useState(null);

	const fetchMetaDescription = async (url) => {
		// Simulate fetching meta-description from the URL
		const description =
			"This is a dummy meta-description fetched from the website.";
		setMetaDescription(description);
		setCompanyDescription(description);
	};

	const handleSave = () => {
		// Simulate saving data
		alert("Company information saved successfully!");
	};

	return (
		<div className='max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-8 text-black border-black'>
			<h1 className='text-2xl font-bold mb-4'>Setup Organisation</h1>

			<form className='space-y-4' onSubmit={(e) => e.preventDefault()}>
				<div>
					<label className='block text-sm font-medium mb-1'>Company Name</label>
					<input
						className='w-full p-2 border rounded border-black'
						value={companyName}
						onChange={(e) => setCompanyName(e.target.value)}
					/>
				</div>

				<div>
					<label className='block text-sm font-medium mb-1'>Website URL</label>
					<input
						className='w-full p-2 border rounded border-black'
						value={websiteURL}
						onChange={(e) => setWebsiteURL(e.target.value)}
						onBlur={() => fetchMetaDescription(websiteURL)}
					/>
				</div>

				<div>
					<label className='block text-sm font-medium mb-1'>
						Company Description
					</label>
					<textarea
						className='w-full p-2 border rounded border-black'
						value={companyDescription}
						onChange={(e) => setCompanyDescription(e.target.value)}
					/>
				</div>

				<button
					className='w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 border-black'
					onClick={handleSave}
				>
					Save
				</button>
			</form>

			<div className='mt-6'>
				<h2 className='text-xl font-bold mb-2'>Scraped Pages</h2>
				<div className='space-y-2'>
					{websiteData.map((page) => (
						<div key={page.id} className='p-3 border rounded border-black'>
							<div className='flex justify-between items-center'>
								<span>{page.url}</span>
								<span
									className={`text-sm ${
										page.status === "Scraped"
											? "text-green-500"
											: "text-yellow-500"
									}`}
								>
									{page.status}
								</span>
								<button
									onClick={() => setSelectedPage(page)}
									className='bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 border-black'
								>
									View Data
								</button>
							</div>
						</div>
					))}
				</div>
			</div>

			{selectedPage && (
				<div className='mt-4 p-4 bg-gray-50 rounded text-black border-black'>
					<h3 className='font-semibold mb-2'>
						Scraped Data from {selectedPage.url}
					</h3>
					<ul className='list-disc pl-6'>
						{selectedPage.chunks.length > 0 ? (
							selectedPage.chunks.map((chunk, i) => (
								<li key={i} className='text-sm'>
									{chunk}
								</li>
							))
						) : (
							<li className='text-sm text-red-500'>No data chunks available</li>
						)}
					</ul>
				</div>
			)}
		</div>
	);
};

export default SetupOrganisation;
