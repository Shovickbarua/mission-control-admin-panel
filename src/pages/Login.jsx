import astronautImg from "../assets/astro-5.jpg"
import loginBg from "../assets/login-bg.jpg"
import { FiUser } from "react-icons/fi";
import { RiLock2Line } from "react-icons/ri";
import googleImg from "../assets/google.png"
import facebookImg from "../assets/facebook.png"
import Input from "../components/Input";
import { useNavigate } from "react-router";


const Login = () => {
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("submitted")
        navigate("/admin")
    }

    return (
        <>
        <div className="relative flex flex-col lg:flex-row items-center w-full min-h-screen lg:overflow-hidden px-4 lg:px-0">
            <div className="relative w-full h-[260px] lg:h-auto lg:absolute lg:left-[2.5%] lg:top-[2.5%] lg:bottom-[2.5%] lg:w-[75%] lg:rounded-t-[90px] rounded-b-xl lg:rounded-b-4xl overflow-hidden">
                <div
                    className="relative w-full h-full bg-cover bg-center bg-no-repeat "
                    style={{ backgroundImage: `url(${astronautImg})` }}
                >
                    <div className="absolute bottom-[8%] bg-white/20 backdrop-blur-xs rounded-e-4xl shadow-lg px-8 py-6 ">
                        <p className="text-2xl lg:text-6xl font-extrabold text-outline-white mb-4">Private</p>
                        <p className="text-lg lg:text-4xl font-extrabold bg-gradient-to-r from-[#FF8031] to-[#FF5D3C] bg-clip-text text-transparent">
                            Mission To MARS
                        </p>
                    </div>
                </div>
            </div>

            <div
                className="relative z-10 w-full mx-auto mt-5 text-center flex flex-col items-center justify-center px-6 py-8 bg-cover bg-no-repeat bg-center rounded-xl  lg:absolute lg:mt-0 lg:right-0 lg:top-[150px] lg:h-[calc(100%-240px)] lg:w-[28%] lg:rounded-l-4xl lg:rounded-tr-none lg:px-16 lg:py-0"
                style={{ backgroundImage: `url(${loginBg})` }}
            >
                <h2 className="text-[32px] md:text-[40px] lg:text-[48px] rajdhani-font font-semibold mb-4 text-white">Login</h2>
                <p className="text-white mb-8 text-sm md:text-base">Welcome back! Please login to continue.</p>

                <form onSubmit={handleSubmit} className="w-full">
                    {/* Username */}
                    <Input icon={FiUser} type="text" placeholder="Username" />
                    {/* Password */}
                    <Input className="mt-4" icon={RiLock2Line} type="password" placeholder="Password" />

                    <button type="submit" className="text-white font-bold px-7 py-5 text-xs rounded-xl mt-5 bg-gradient-to-r from-[#3CAA7B] to-[#296E49]">LOGIN NOW</button>
                </form>

                <div className="flex items-center gap-1 mt-5 w-full">
                    <div className="flex-1 h-px bg-white/60" />
                    <p className="text-white text-sm whitespace-nowrap">
                        <span className="font-bold">Login</span> with Others
                    </p>
                    <div className="flex-1 h-px bg-white/60" />
                </div>
                
                <button className="bg-white p-3 flex items-center justify-center rounded-xl mt-4 w-full h-[52px]">
                    <img className="w-[24px] h-[24px] mr-2" src={googleImg} alt="google login" />
                    <p className="text-xs">Login with <span className="font-bold">Google</span></p>
                </button> 
                
                <button className="bg-white p-3 flex items-center justify-center rounded-xl mt-4 w-full h-[52px]">
                    <img className="w-[24px] h-[24px] mr-2" src={facebookImg} alt="facebook login" />
                    <p className="text-xs">Login with <span className="font-bold">Facebook</span></p>
                </button> 
            </div>
        </div>
        </>
    )
}

export default Login
