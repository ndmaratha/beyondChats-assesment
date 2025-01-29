import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const UserRegistration = () => {
	const [verificationCode, setVerificationCode] = useState("");
	const [isVerified, setIsVerified] = useState(false);
	const navigate = useNavigate();
	const validationSchema = Yup.object({
		name: Yup.string().required("Required"),
		email: Yup.string().email("Invalid email").required("Required"),
		password: Yup.string().required("Required"),
	});

	const handleVerification = (code) => {
		if (code.length === 6) {
			setIsVerified(true);
			navigate("/setup");
		} else {
			alert("Invalid verification code");
		}
	};

	return (
		<div className='w-full max-w-[90%] sm:max-w-md mx-auto p-4 sm:p-6 bg-white rounded-lg shadow-md mt-4 sm:mt-8 text-black border-black'>
			<h1 className='text-xl sm:text-2xl font-bold mb-4 text-black'>
				User Registration
			</h1>

			<Formik
				initialValues={{ name: "", email: "", password: "" }}
				validationSchema={validationSchema}
				onSubmit={() => setVerificationCode("123456")}
			>
				<Form className='space-y-3 sm:space-y-4'>
					<div>
						<label className='block text-sm font-medium mb-1 text-black'>
							Name
						</label>
						<Field
							name='name'
							className='w-full p-2 sm:p-3 border border-black rounded text-sm sm:text-base'
						/>
						<ErrorMessage
							name='name'
							component='div'
							className='text-red-500 text-xs sm:text-sm mt-1'
						/>
					</div>

					<div>
						<label className='block text-sm font-medium mb-1 text-black'>
							Email
						</label>
						<Field
							name='email'
							type='email'
							className='w-full p-2 sm:p-3 border border-black rounded text-sm sm:text-base'
						/>
						<ErrorMessage
							name='email'
							component='div'
							className='text-red-500 text-xs sm:text-sm mt-1'
						/>
					</div>

					<div>
						<label className='block text-sm font-medium text-black mb-1'>
							Password
						</label>
						<Field
							name='password'
							type='password'
							className='w-full p-2 sm:p-3 border border-black rounded text-sm sm:text-base'
						/>
						<ErrorMessage
							name='password'
							component='div'
							className='text-red-500 text-xs sm:text-sm mt-1'
						/>
					</div>

					<button
						type='submit'
						className='w-full bg-blue-500 text-white p-2 sm:p-3 rounded hover:bg-blue-600 border-black text-sm sm:text-base bg-blue-500 text-white p-2 sm:p-3 rounded hover:bg-blue-600 border-black text-sm'
					>
						Register
					</button>
				</Form>
			</Formik>

			{verificationCode && !isVerified && (
				<div className='mt-4 space-y-2'>
					<input
						placeholder='Enter verification code "123456"'
						className='w-full p-2 sm:p-3 border border-black rounded text-sm sm:text-base'
						type='number'
						onChange={(e) => setVerificationCode(e.target.value)}
					/>
					<button
						className='w-full bg-green-500 text-white p-2 sm:p-3 rounded hover:bg-green-600 border-black text-sm sm:text-base'
						onClick={() => handleVerification(verificationCode)}
					>
						Verify Email
					</button>
				</div>
			)}

			{isVerified && (
				<div className='mt-4 text-green-500 text-sm sm:text-base '>
					Email verified successfully!
				</div>
			)}

			<button className='w-full mt-4 bg-gray-100 p-2 sm:p-3 text-gray-800 rounded hover:bg-gray-200 border-black text-sm sm:text-base mt-4 bg-gray-100 p-2 sm:p-3 text-gray-800 rounded hover:bg-gray-200 border-black text-sm'>
				Continue with Google
			</button>
		</div>
	);
};

export default UserRegistration;
