import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, Loader,Eye,EyeOff} from "lucide-react";
import { Link } from "react-router-dom";
import Input from "../components/Details";



const LoginPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false)



	const handleLogin = async (e) => {
		e.preventDefault();
		
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className='max-w-md w-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden'
		>
			<div className='p-8'>
				<h2 className='text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text'>
					Welcome Back
				</h2>

				<form onSubmit={handleLogin}>
					<Input
						icon={Mail}
						type='email'
						placeholder='Email Address'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>

                        {/* Password with Show/Hide Feature */}
                      <div className="relative mb-4">
                        <Lock
                          size={18}
                          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500" // <-- FIXED ICON COLOR
                        />
                        <Input
                        icon={Lock}
                          type={showPassword ? "text" : "password"}
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="w-full pl-10 pr-10 py-3  text-white rounded-lg border border-gray-600
                                           focus:ring-green-500 "
                        />
                        {/* Eye Icon for Show/Hide Password */}
                        {showPassword ? (
                          <EyeOff
                            size={18}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500 cursor-pointer" // <-- FIXED ICON COLOR
                            onClick={() => setShowPassword(false)}
                          />
                        ) : (
                          <Eye
                            size={18}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500 cursor-pointer" // <-- FIXED ICON COLOR
                            onClick={() => setShowPassword(true)}
                          />
                        )}
                      </div>

					<div className='flex items-center mb-6'>
						<Link to='/forgot-password' className='text-sm text-green-400 hover:underline'>
							Forgot password?
						</Link>
					</div>
					

					<motion.button
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
						className='w-full py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200'
						type='submit'
				
					>
			Login
					</motion.button>
				</form>
			</div>
			<div className='px-8 py-4 bg-gray-900 bg-opacity-50 flex justify-center'>
				<p className='text-sm text-gray-400'>
					Don't have an account?{" "}
					<Link to='/signup' className='text-green-400 hover:underline'>
						Sign up
					</Link>
				</p>
			</div>
		</motion.div>
	);
};
export default LoginPage;