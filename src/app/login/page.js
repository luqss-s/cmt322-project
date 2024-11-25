"use client";

import { useState } from "react";

export default function Home() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="bg-black h-screen flex items-center justify-end relative"> {/* Use justify-end to move the form to the right */}
            <div className="absolute inset-0 z-0 opacity-25">
    <video className="w-full h-full object-cover" autoPlay loop muted>
        <source src="mp4.mp4" type="video/mp4" />
    </video>
    <div className="absolute inset-0 bg-black opacity-40">
    <img 
        src="/welcome.png" 
        alt="Foreground" 
        className="absolute ml-36 inset-0 m-auto h-96 w-auto z-10" 
    />
    </div> 
</div>


            {/* Login box */}
            <div className="relative z-10 bg-transparent rounded-lg p-8 w-full max-w-md border-gray-200/40 mr-24"> {/* Add margin to move it away from the edge */}
                <div className="flex justify-center">
                    <a href="/">
                        <img className="h-36 w-auto inline" src="/logobotb.png" alt="Your Company" />
                    </a>
                </div>
                <div>
                    <div className="mt-10">
                        <form className="space-y-6" action="#" method="POST">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        onChange={(e) => setEmail(e.target.value)}
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                                        Password
                                    </label>
                                    <div className="text-sm">
                                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                            Forgot password?
                                        </a>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <input
                                        onChange={(e) => setPassword(e.target.value)}
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <a href="/login1">
                                    <button
                                        type="button"
                                        className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Sign in
                                    </button>
                                </a>
                            </div>
                        </form>

                        <p className="mt-10 text-center text-sm text-white">
                            Don't Have Account?{" "}
                            <a href="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                Register Now
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
