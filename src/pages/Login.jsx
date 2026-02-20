import astronautImg from "../assets/astronaut-2.png"
import loginBg from "../assets/login-bg.png"
import { FiUser } from "react-icons/fi";
import { RiLock2Line } from "react-icons/ri";
import googleImg from "../assets/google.png"
import facebookImg from "../assets/facebook.png"

const Login = () => {
    return (
        <>
        <div className="relative flex flex-row items-center w-full h-screen overflow-hidden">
            <img className="w-[75%] h-[90%] pl-12" src={astronautImg} alt="astronaut" />
            <div className="absolute left-[54px] top-9/12 bg-white/20 rounded-e-4xl shadow-lg px-8 py-6">
                <h2 className="text-2xl mb-4">Private</h2>
                <p className="text-4xl font-extrabold bg-gradient-to-r from-[#FF8031] to-[#FF5D3C] bg-clip-text text-transparent">
                    Mission To MARS
                </p>
            </div>
            <img className="absolute right-0 w-[32%]" src={loginBg} alt="login background" />
            <div className="absolute right-[3%] text-center">
                <h2 className="text-[50px] rajdhani-font font-semibold mb-4 text-white">Login</h2>
                <p className="text-white mb-8">Welcome back! Please login to continue.</p>
                <div className="border border-white/80 p-3 flex items-center rounded-xl w-[500px] h-[52px]">
                    <FiUser className="text-white/80 mr-2" />
                    <input className="bg-transparent outline-none text-white/80 text-xs w-full" type="text" placeholder="Username" />
                </div> 
                <div className="border border-white/80 p-3 flex items-center rounded-xl mt-4 w-[500px] h-[52px]">
                    <RiLock2Line className="text-white/80 mr-2" />
                    <input className="bg-transparent outline-none text-white/80 text-xs w-full" type="password" placeholder="Password" />
                </div> 

                <button className="text-white font-bold px-7 py-5 text-xs rounded-xl mt-5 bg-gradient-to-r from-[#3CAA7B] to-[#296E49]">LOGIN NOW</button>

                <div className="flex items-center gap-1 mt-5 w-[500px]">
                    <div className="flex-1 h-px bg-white/60" />
                    <p className="text-white text-sm whitespace-nowrap">
                        <span className="font-bold">Login</span> with Others
                    </p>
                    <div className="flex-1 h-px bg-white/60" />
                </div>
                
                <div className="bg-white p-3 flex items-center justify-center rounded-xl mt-4 w-[500px] h-[52px]">
                    <img className="w-[24px] h-[24px] mr-2" src={googleImg} alt="google login" />
                    <p className="text-xs">Login with <span className="font-bold">Google</span></p>
                </div> 
                
                <div className="bg-white p-3 flex items-center justify-center rounded-xl mt-4 w-[500px] h-[52px]">
                    <img className="w-[24px] h-[24px] mr-2" src={facebookImg} alt="facebook login" />
                    <p className="text-xs">Login with <span className="font-bold">Facebook</span></p>
                </div> 
            </div>
        </div>
        </>
    )
}

export default Login
