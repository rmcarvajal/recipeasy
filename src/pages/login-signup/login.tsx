import mail from "../../assets/Mail.svg"
import lock from "../../assets/Lock.svg"

export const Login = () => {
    return(
    <div className="bg-smoke">

        <div className="w-100 h-[698.41px] drop-shadow-lg bg-white p-10 rounded-[20px]">

            <div className="flex w-[320px] items-end justify-between">

                <button className="text-coral font-bold border-b-4 h-14 text-[25px] w-37.5">Log In</button>
                <button className="text-gray-400 font-bold border-b-2 h-14 text-[25px] w-37.5">Sign In</button>

            </div>

            <div className="pb-10">
            <h1 className="text-[38px] font-extrabold text-charcoal-500">Welcome Back!</h1>
            <p className="text-[20px] text-charcoal-100">Enter your credentials to access your account</p>
            </div>

            <div className="pb-5">
                <p className="text-charcoal-500">Email Address</p>

                <div className="flex border-2 border-gray-400 rounded-[18px] h-16.5 items-center">
                    <div className="p-4.5">
                        <img src={mail} className="w-25.8 h-25.8" alt="mail" />
                    </div>
                    <input type="text" placeholder="Enter your email" />
                </div>
            </div>

            <div className="pb-5">
                <p className="text-charcoal-500">Password</p>

                <div className="flex border-2 border-gray-400 rounded-[18px] h-16.5 items-center">
                    <div className="p-4.5">
                        <img src={lock} className="w-25.8 h-25.8" alt="lock" />
                    </div>
                    <input type="text" placeholder="Enter your password" />
                </div>
            </div>
  

            <div className="flex justify-between items-center pb-5">
                <div className="flex">
                <input type="checkbox" />
                <p className="pl-1 text-charcoal-100">Remember me</p>
                </div>

                <p className="text-coral">Forgot password?</p>
            </div>

            <button className="bg-forest text-white w-[320px] h-[77.5px] font-extrabold rounded-[18px]">Log In</button>
        </div>
        
        <div>
            <p>Don't have an account?</p>
            <p>Sign Up</p>
        </div>

    </div>
    )
}