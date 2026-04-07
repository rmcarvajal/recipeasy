import mail from "../../assets/Mail.svg"
import lock from "../../assets/Lock.svg"
import logo from "../../assets/logo.svg"
import user from "../../assets/User.svg"
import chefhat from "../../assets/ChefHat.svg"
import { useNavigate } from "react-router-dom"

export const Signup = () => {

    const navigate = useNavigate()

    return(
    <div className="bg-smoke flex flex-col items-center lg:flex-row-reverse ">


        <div className="flex flex-col items-center lg:w-1/2 ">

            <div className="w-100 h-190 drop-shadow-2xl bg-white p-10 rounded-[20px] ">

                <div className="flex w-[320px] items-end justify-between pb-10">

                    <button className="text-gray-400 font-bold border-b-2 h-14 text-[25px] w-37.5 hover:border-b-4" onClick={() => navigate("/login")}>Log In</button>
                    <button className="text-coral font-bold border-b-4 h-14 text-[25px] w-37.5">Sign Up</button>

                </div>

                <div className="pb-5">
                <h1 className="text-[38px] font-extrabold text-charcoal-500">Create Account</h1>
                <p className="text-[20px] text-charcoal-100">Join thousands of home cooks today!</p>
                </div>

                <div className="pb-5">
                    <p className="text-charcoal-500">Full Name</p>

                    <div className="flex border-2 border-gray-400 rounded-[18px] h-16.5 items-center">
                        <div className="p-4.5">
                            <img src={user} className="w-25.8 h-25.8" alt="user" />
                        </div>
                        <input type="text" placeholder="Enter your full name" />
                    </div>
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
    

                <div className="flex flex-row pb-5 text-[14px]">
                    <p className="pl-1 text-charcoal-100 flex flex-wrap">I agree to the 
                        <p className="text-coral font-semibold px-1">
                            Terms & Conditions
                        </p>
                        and
                        <p className="text-coral font-semibold px-1">
                            Privacy Policy 
                        </p>
                    </p>
           
                </div>

                <button className="bg-forest text-white w-[320px] h-[77.5px] font-extrabold rounded-[18px] text-[24px]" onClick={() => navigate("/")}>Create Account</button>
            </div>
            
            <div className="flex items-center pt-10 ">
                <p className="text-[18px] text-charcoal-100 mr-2">Already have an account?</p>
                <button className="text-[20px] text-coral font-semibold hover:underline" onClick={() => navigate("/login")}>Log in</button>
            </div>

        </div>


        <div className="w-screen h-210 bg-coral flex flex-col lg:w-1/2 lg:h-full md:p-20 lg:p-30">
            <img src={logo} className="w-[361.41px] h-20 mt-4" alt="logo" />

            <div className="flex flex-col text-white font-extrabold text-[55px] ml-4">
                <p>
                    Your
                </p>

                <p>
                    Quick
                </p>

                <p>
                    Recipe
                </p>

                <p>
                    Guide
                </p>
            </div>

            <div>
                <div className="flex items-center">
                    <div className="w-10.75 h-10.75 bg-white rounded-full flex justify-center items-center m-4">
                    <img src={chefhat} className="w-6.75 h-6.75 fill-coral" alt="chefhat" />                        
                    </div>
                    <p className="text-white text-[18px]">Delicious recipes from around the world</p>
                </div>

                <div className="flex items-center">
                    <div className="w-10.75 h-10.75 bg-white rounded-full flex justify-center items-center m-4">
                    <img src={chefhat} className="w-6.75 h-6.75 fill-coral" alt="chefhat" />                        
                    </div>
                    <p className="text-white text-[18px]">Share your own with our community</p>
                </div>


                <div className="flex items-center">
                    <div className="w-10.75 h-10.75 bg-white rounded-full flex justify-center items-center m-4">
                    <img src={chefhat} className="w-6.75 h-6.75 fill-coral" alt="chefhat" />                        
                    </div>
                    <p className="text-white text-[18px]">Get to the action quickly</p>
                </div>

                                <div className="flex items-center">
                    <div className="w-10.75 h-10.75 bg-white rounded-full flex justify-center items-center m-4">
                    <img src={chefhat} className="w-6.75 h-6.75 fill-coral" alt="chefhat" />                        
                    </div>
                    <p className="text-white text-[18px]">Save and organize your favorite recipes</p>
                </div>
            </div>

        </div>

    </div>
    )
}