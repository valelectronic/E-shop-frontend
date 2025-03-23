import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Input from "../components/Details";
import {User,Mail,Lock,Eye,EyeOff} from 'lucide-react'
import PasswordStrengthMeter from '../components/PasswordStrengthMeter'
import VerificationCodeInput from '../components/VerificationCodeInput';
import { Link } from 'react-router-dom'



function SignUpPage() {

const [name, setName] = useState("")
const [email, setEmail] = useState("")
const[password, setPassword] = useState("")
const [showPassword, setShowPassword] = useState(false)
const [isValidEmail, setIsValidEmail] = useState(false);

// Function to validate email format
const validateEmail = (email) => {
  return /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(email);
};

// Handle email input change
const handleEmailChange = (e) => {
  const newEmail = e.target.value;
  setEmail(newEmail);

  const isValid = validateEmail(newEmail);
  
  setIsValidEmail(isValid);
};

const handleSignUp = async(e)=>{
e.preventDefault()
}
  return (
    <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className='max-w-md w-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl 
    overflow-hidden'>
        <div className='p-8'>
            <h2 className='text-2xl font-bold mb-6 text-center
            bg-gradient-to-r from-green-400 to-emerald-500
            text-transparent bg-clip-text uppercase'>
                create account

            </h2>
            
            

            <form onSubmit={handleSignUp} className='space-y-4'>
              
                {/* input for email */}
                <Input
                icon={Mail}
                type = "email"
                placeholder = "email address  "
                value = {email}
                onChange = {handleEmailChange}
                />
              
                {/* input for verification code  */}
                <div className='mb-6 space-y-2'>
                <VerificationCodeInput length={6} isValidEmail={isValidEmail}/>
                </div>
                
                {/* input for full name  */}
                <Input
                icon={User}
                type = "text"
                placeholder = "full name "
                value = {name}
                onChange = {(e)=> setName(e.target.value)}
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
                {/* password strength meter  */}
                <PasswordStrengthMeter password={password} />

                <motion.button
						className='mt-5 w-full py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white 
						font-bold rounded-lg shadow-lg hover:from-green-600
						hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2
						 focus:ring-offset-gray-900 transition duration-200'
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
						type='submit'
						
					>
						sign up
					</motion.button>
             
               

            </form>
            <div className='px-8 py-4 bg-gray-900 bg-opacity-50 flex justify-center'>
				<p className='text-sm text-gray-400'>
					Already have an account?{" "}
					<Link to={"/login"} className='text-green-400 hover:underline'>
						Login
					</Link>
				</p>
			</div>

        </div>

        
        </motion.div>
  )
}

export default SignUpPage