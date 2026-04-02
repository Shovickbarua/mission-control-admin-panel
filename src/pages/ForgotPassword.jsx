import astronautImg from "../assets/astro-5.jpg"
import loginBg from "../assets/login-bg.jpg"
import { FiMail } from "react-icons/fi";
import Input from "../components/Input";
import { Link } from "react-router";

const ForgotPassword = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Reset link sent")
    }

    return (
        <div className="relative flex flex-col lg:flex-row items-center w-full min-h-screen lg:overflow-hidden px-4 lg:px-0">
            <div className="relative w-full h-[260px] lg:h-auto lg:absolute lg:left-[2.5%] lg:top-[2.5%] lg:bottom-[2.5%] lg:w-[75%] lg:rounded-t-[90px] rounded-b-xl lg:rounded-b-4xl overflow-hidden">
                <div
                    className="relative w-full h-full bg-cover bg-center bg-no-repeat "
                    style={{ backgroundImage: `url(${astronautImg})` }}
                >
                    <div className="absolute bottom-[8%] bg-white/20 backdrop-blur-xs rounded-e-4xl shadow-lg px-8 py-6 ">
                        <p className="text-2xl lg:text-6xl font-extrabold text-outline-white mb-4">Reset</p>
                        <p className="text-lg lg:text-4xl font-extrabold bg-gradient-to-r from-[#FF8031] to-[#FF5D3C] bg-clip-text text-transparent">
                            Mission Access
                        </p>
                    </div>
                </div>
            </div>

            <div
                className="relative z-10 w-full mx-auto mt-5 text-center flex flex-col items-center justify-center px-6 py-8 bg-cover bg-no-repeat bg-center rounded-xl lg:absolute lg:mt-0 lg:right-0 lg:top-[180px] lg:min-h-[calc(100%-360px)] lg:w-[28%] lg:rounded-l-4xl lg:rounded-tr-none lg:px-16 lg:py-8"
                style={{ backgroundImage: `url(${loginBg})` }}
            >
                <h2 className="text-[32px] md:text-[40px] lg:text-[48px] rajdhani-font font-semibold mb-4 text-white text-nowrap">Forgot Password</h2>
                <p className="text-white mb-8 text-sm md:text-base">Enter your email to receive a reset link.</p>

                <form onSubmit={handleSubmit} className="w-full">
                    {/* Email Address */}
                    <Input icon={FiMail} type="email" placeholder="Email Address" />

                    <button type="submit" className="text-white font-bold px-7 py-5 text-xs rounded-xl mt-8 bg-gradient-to-r from-[#3CAA7B] to-[#296E49] w-full">SEND RESET LINK</button>
                </form>

                <div className="mt-8">
                    <Link to="/" className="text-white text-sm font-bold hover:underline">
                        Back to Login
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword
