import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Login = () => {

    const [state, setState] = useState({
        email: "",
        password: ""
    });

    const inputHandler = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    };

    const submit = (e) => {
        e.preventDefault();
        console.log(state);
    };

    return (
        <div>
            <div className="min-w-screen min-h-screen bg-[#CDCAE9] flex justify-center items-center">
                <div className="w-[350px] text-[#ffffff] p-2" >
                    <div className="bg-[#6f68d1] p-4 rounded-[2em]">
                        <h2 className="text-xl mb-3 font-bold">Welcome to High-Heel Heaven</h2>
                        <p className="text-md mb-3 font-light">Please Login to your Account</p>
                        <form onSubmit={submit}>
                            <div className="flex flex-col w-full gap-1 mb-3">
                                <label htmlFor="email" className="text-sm font-light">Email</label>
                                <input onChange={inputHandler} value={state.email} className="px-3 py-2 outline-none border border-slate-400 bg-transparent rounded-[2em]" type="email" name="email" placeholder="Email" id="email" required />
                            </div>
                            <div className="flex flex-col w-full gap-1 mb-3">
                                <label htmlFor="password" className="text-sm font-light">Password</label>
                                <input onChange={inputHandler} value={state.password} className="px-3 py-2 outline-none border border-slate-400 bg-transparent rounded-[2em]" type="password" name="password" placeholder="Password" id="password" required />
                            </div>
                            <div className="flex items-center w-full gap-3 mb-3">
                                <input className="w-4 h-4 text-blue-600 overflow-hidden bg-gray-200 rounded border-gray-300 focus:ring-blue-500" type="checkbox" name="checkbox" id="checkbox" />
                                <label htmlFor="checkbox" className="text-sm"> I Agree to Terms & Privacy Policy</label>
                            </div>
                            <button className="bg-slate-800 w-full hover:shadow-blue-300/50 hover:shadow-lg text-white rounded-[2em] px-7 py-2 mb-3 text-sm" >Login</button>

                            <div className="flex items-center mb-3 gap-3 justify-center">
                                <p className="text-sm" >Don't have an Account? <Link className="font-bold" to="/register">Register</Link></p>
                            </div>
                            <div className="w-full flex justify-center items-center mb-3">
                                <div className="w-[45%] bg-slate-300 h-[1px]"></div>
                                <div className="w-[10%] flex justify-center items-center">
                                    <span className="pb-1">or</span>
                                </div>
                                <div className="w-[45%] bg-slate-300 h-[1px]"></div>
                            </div>
                            <div className="flex justify-center items-center gap-3">
                                <div className="w-[135px] h-[35px] flex rounded-[2em] bg-orange-700 shadow-lg hover:shadow-orange-700/50 justify-center cursor-pointer items-center overflow-hidden">
                                    <span><FaGoogle /></span>
                                </div>
                                <div className="w-[135px] h-[35px] flex rounded-[2em] bg-blue-700 shadow-lg hover:shadow-blue-700/50 justify-center cursor-pointer items-center overflow-hidden">
                                    <span><FaFacebook /></span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;