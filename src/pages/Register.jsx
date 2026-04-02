import astronautImg from "../assets/astro-5.jpg"
import loginBg from "../assets/login-bg.jpg"
import { FiUser, FiMail } from "react-icons/fi";
import { RiLock2Line } from "react-icons/ri";
import googleImg from "../assets/google.png"
import facebookImg from "../assets/facebook.png"
import Input from "../components/Input";
import { useNavigate, Link } from "react-router";

const Register = () => {
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Registered")
        navigate("/admin")
    }

    return (
        <div className="relative flex flex-col lg:flex-row items-center w-full min-h-screen lg:overflow-hidden px-4 lg:px-0">
            <div className="relative w-full h-[260px] lg:h-auto lg:absolute lg:left-[2.5%] lg:top-[2.5%] lg:bottom-[2.5%] lg:w-[75%] lg:rounded-t-[90px] rounded-b-xl lg:rounded-b-4xl overflow-hidden">
                <div
                    className="relative w-full h-full bg-cover bg-center bg-no-repeat "
                    style={{ backgroundImage: `url(${astronautImg})` }}
                >
                    <div className="absolute bottom-[8%] bg-white/20 backdrop-blur-xs rounded-e-4xl shadow-lg px-8 py-6 ">
                        <p className="text-2xl lg:text-6xl font-extrabold text-outline-white mb-4">Join The</p>
                        <p className="text-lg lg:text-4xl font-extrabold bg-gradient-to-r from-[#FF8031] to-[#FF5D3C] bg-clip-text text-transparent">
                            Mission To MARS
                        </p>
                    </div>
                </div>
            </div>

            <div
                className="relative z-10 w-full mx-auto mt-5 text-center flex flex-col items-center justify-center px-6 py-8 bg-cover bg-no-repeat bg-center rounded-xl lg:absolute lg:mt-0 lg:right-0 lg:top-[80px] lg:min-h-[calc(100%-160px)] lg:w-[28%] lg:rounded-l-4xl lg:rounded-tr-none lg:px-16 lg:py-8"
                style={{ backgroundImage: `url(${loginBg})` }}
            >
                <h2 className="text-[32px] md:text-[40px] lg:text-[48px] rajdhani-font font-semibold mb-4 text-white">Register</h2>
                <p className="text-white mb-6 text-sm md:text-base">Create your account to start the mission.</p>

                <form onSubmit={handleSubmit} className="w-full">
                    {/* Full Name */}
                    <Input icon={FiUser} type="text" placeholder="Full Name" />
                    {/* Email */}
                    <Input className="mt-4" icon={FiMail} type="email" placeholder="Email Address" />
                    {/* Username */}
                    <Input className="mt-4" icon={FiUser} type="text" placeholder="Username" />
                    {/* Password */}
                    <Input className="mt-4" icon={RiLock2Line} type="password" placeholder="Password" />

                    <button type="submit" className="text-white font-bold px-7 py-5 text-xs rounded-xl mt-5 bg-gradient-to-r from-[#3CAA7B] to-[#296E49] w-full lg:w-auto">REGISTER NOW</button>
                </form>

                <p className="text-white/80 text-sm mt-6">
                    Already have an account?{" "}
                    <Link to="/" className="text-white font-bold hover:underline">
                        Login
                    </Link>
                </p>

                <div className="flex items-center gap-1 mt-6 w-full">
                    <div className="flex-1 h-px bg-white/60" />
                    <p className="text-white text-sm whitespace-nowrap">
                        <span className="font-bold">Register</span> with Others
                    </p>
                    <div className="flex-1 h-px bg-white/60" />
                </div>
                
                <button className="bg-white p-3 flex items-center justify-center rounded-xl mt-4 w-full h-[52px]">
                    <img className="w-[24px] h-[24px] mr-2" src={googleImg} alt="google register" />
                    <p className="text-xs">Register with <span className="font-bold">Google</span></p>
                </button> 
                
                <button className="bg-white p-3 flex items-center justify-center rounded-xl mt-4 w-full h-[52px]">
                    <img className="w-[24px] h-[24px] mr-2" src={facebookImg} alt="facebook register" />
                    <p className="text-xs">Register with <span className="font-bold">Facebook</span></p>
                </button> 
            </div>
        </div>
    )
}

export default Register
