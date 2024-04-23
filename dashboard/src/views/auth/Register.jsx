import React from 'react';

const Register = () => {
    return (
        <div className='min-w-screen min-h-screen bg-[#CDCAE9] flex justify-center items-center'>
            <div className='w-[350px] text-[#ffffff] p-2' >
                <div className='bg-[#6f68da] p-4 rounded-md'>
                    <h2 className='text-xl mb-3 font-bold'>Welcome to Ecommerce</h2>
                    <p className='text-md mb-3 font-light'>Please Register a New Account</p>
                    <form>
                        <div className='flex flex-col w-full gap-1 mb-3'>
                            <label className='text-sm font-light' htmlFor="name">name</label>
                            <input className='px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md' type="text" placeholder="Name" id="name" required />

                            <label className='text-sm font-light' htmlFor="name">email</label>
                            <input className='px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md' type="text" placeholder="Email" id="email" required />

                            <label className='text-sm font-light' htmlFor="name">password</label>
                            <input className='px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md' type="password" placeholder="Password" id="password" required />
                            
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;