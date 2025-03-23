import { useState, useEffect } from "react";
import { Key } from "lucide-react";

export default function VerificationCodeInput({ length = 6, isValidEmail }) {
    
    const [otp, setOtp] = useState(Array(length).fill(""));
    const [countdown, setCountdown] = useState(0);

    useEffect(() => {
        let timer;
        if (countdown > 0) {
            timer = setInterval(() => {
                setCountdown((prev) => prev - 1);
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [countdown]);

    const handleChange = (index, value) => {
        if (isNaN(value)) return;
        let newOtp = [...otp];
        newOtp[index] = value.slice(-1);
        setOtp(newOtp);

        if (value && index < length - 1) {
            document.getElementById(`otp-${index + 1}`).focus();
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            document.getElementById(`otp-${index - 1}`).focus();
        }
    };

    const handleSendCode = () => {
        if (!isValidEmail) return; // Prevent sending if email is invalid
        setCountdown(900); // Start 15-minute countdown (900 seconds)
    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
    };

    return (
        <div className="flex flex-col gap-3">
            {/* Send Code Button */}
            <button
                onClick={handleSendCode}
                disabled={!isValidEmail || countdown > 0}
                className={`w-full py-2 rounded-md text-white font-medium transition 
                ${!isValidEmail || countdown > 0 ? "bg-gray-600 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"}`}
            >
                {countdown > 0 ? `Resend Code in ${formatTime(countdown)}` : "Send Code"}
            </button>

            {/* OTP Input Fields */}
            <div className="flex items-center gap-2">
                <Key className="size-5 text-green-500" />
                <div className="flex gap-2">
                    {otp.map((digit, index) => (
                        <input
                            key={index}
                            id={`otp-${index}`}
                            type="tel"
                            pattern="[0-9]*"
                            inputMode="numeric"
                            value={digit}
                            onChange={(e) => handleChange(index, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(index, e)}
                            maxLength="1"
                            className="w-10 h-10 text-center text-lg bg-gray-800 border border-gray-700 rounded-md focus:ring-2 focus:ring-green-500 text-white"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}