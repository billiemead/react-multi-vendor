import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { admin_login, messageClear } from "../../store/Reducers/authReducer";
import { PropagateLoader } from "react-spinners";
import toast from 'react-hot-toast';

const AdminLogin = () => {

    const dispatch = useDispatch();
    const { loader, errorMessage } = useSelector(state => state.auth);


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

    const overrideStyle = {
        display: 'flex',
        margin: '0 auto',
        height: '24px',
        justifyContent: 'center',
        alignItem: 'center',
    }

    useEffect(() => {
      if (errorMessage) {
          toast.error(errorMessage)
          dispatch(messageClear())
      }
    },[errorMessage])


    const submit = (e) => {
        e.preventDefault();
        dispatch(admin_login(state));
        /* console.log(state); */
    };

    return (
        <div>
            <div className="min-w-screen min-h-screen bg-[#CDCAE9] flex justify-center items-center">
                <div className="w-[350px] text-[#ffffff] p-2" >
                    <div className="bg-[#00aeef] p-4 rounded-[2em]">
                        <div className="h-[70] flex justify-center items-center">
                            <div className="w-[180px] h-[54px]">
                                <img className="w-full h-full" src="http://localhost:3000/images/highheelheaven-logo-250x75-white.png" alt="high heel heaven logo" />
                            </div>
                        </div>
                        <form onSubmit={submit}>
                            <div className="flex flex-col w-full gap-1 mb-3">
                                <label htmlFor="email" className="text-sm font-light">Email</label>
                                <input onChange={inputHandler} value={state.email} className="px-3 py-2 text-sm text-[#000] outline-none border border-white bg-white rounded-[2em]" type="email" name="email" placeholder="Email" id="email" required />
                            </div>
                            <div className="flex flex-col w-full gap-1 mb-3">
                                <label htmlFor="password" className="text-sm font-light">Password</label>
                                <input onChange={inputHandler} value={state.password} className="px-3 py-2 text-sm text-[#000] outline-none border border-white bg-white rounded-[2em]" type="password" name="password" placeholder="Password" id="password" required />
                            </div>
                            <button disabled={loader ? true : false} className="bg-[#6f68d1] w-full hover:shadow-blue-300/50 hover:shadow-lg text-white rounded-[2em] px-7 py-2 mb-3 mt-3 text-sm" >
                                {
                                    loader ? <PropagateLoader color='#FFFFFF' cssOverride={overrideStyle} /> : 'Login'
                                }
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;