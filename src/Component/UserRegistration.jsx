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
		<div className='max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-8 text-black border-black'>
			<h1 className='text-2xl font-bold mb-4 text-black'>User Registration</h1>

			<Formik
				initialValues={{ name: "", email: "", password: "" }}
				validationSchema={validationSchema}
				onSubmit={() => setVerificationCode("123456")}
			>
				<Form className='space-y-4'>
					<div>
						<label className='block text-sm font-medium mb-1 text-black'>
							Name
						</label>
						<Field
							name='name'
							className='w-full p-2 border border-black rounded'
						/>
						<ErrorMessage
							name='name'
							component='div'
							className='text-red-500 text-sm'
						/>
					</div>

					<div>
						<label className='block text-sm font-medium mb-1 text-black'>
							Email
						</label>
						<Field
							name='email'
							type='email'
							className='w-full p-2 border border-black rounded'
						/>
						<ErrorMessage
							name='email'
							component='div'
							className='text-red-500 text-sm'
						/>
					</div>

					<div>
						<label className='block text-sm font-medium text-black mb-1'>
							Password
						</label>
						<Field
							name='password'
							type='password'
							className='w-full p-2 border border-black rounded'
						/>
						<ErrorMessage
							name='password'
							component='div'
							className='text-red-500 text-sm'
						/>
					</div>

					<button
						type='submit'
						className='w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 border-black'
					>
						Registerr
					</button>
				</Form>
			</Formik>

			{verificationCode && !isVerified && (
				<div className='mt-4 space-y-2'>
					<input
						placeholder='Enter verification code ""123456""'
						className='w-full p-2 border border-black rounded'
						type='number'
						onChange={(e) => setVerificationCode(e.target.value)}
					/>
					<button
						className='w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 border-black'
						onClick={() => handleVerification(verificationCode)}
					>
						Verify Email
					</button>
				</div>
			)}

			{isVerified && (
				<div className='mt-4 text-green-500'>Email verified successfully!</div>
			)}

			<button className='w-full mt-4 bg-gray-100 p-2 text-white rounded hover:bg-gray-200 border-black'>
				Continue with Google
			</button>
		</div>
	);
};

export default UserRegistration;
