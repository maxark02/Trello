'use client'

import { useState } from "react";
import { createClient } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const supabase = createClient();
    const router = useRouter();


    const handleRegister = async () => {
        if (password !== confirmPassword) {
            alert("error");
            return;
        }

    const { error } = await supabase.auth.signUp({ email, password })
        console.log(error)
     if (error) {
         alert(error);
         return;
     }
     router.push("/login");
    }
    return (
        <>


            <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 flex items-center justify-center p-4">
                <div className="flex flex-col items-center bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 shadow-2xl gap-6">
                <h1 className="text-white font-bold text-3xl ">Sign Up</h1>

                <form onSubmit={handleRegister} className=" items-center gap-6">

                    <input className="w-70 rounded-3xl p-2 border border-white bg-white"
                           type="email"
                           value={email}
                           onChange={(e) => {setEmail(e.target.value)}}
                           placeholder="Email"
                    />

                    <input className="w-70 rounded-3xl p-2 border border-white bg-white"
                           type="password"
                           value={password}
                           onChange={(e) => {setPassword(e.target.value)}}
                           placeholder="Password"
                    />
                    <input className="w-70 rounded-3xl p-2 border border-white bg-white"
                           type="password"
                           value={confirmPassword}
                           onChange={(e) => {setConfirmPassword(e.target.value)}}
                           placeholder="Confirm Password"



                    />

                </form>


            <button onClick={handleRegister}
            className="bg-white text-black w-50 border-black rounded-3xl p-3"
            >Register</button>
                </div>
            </div>
        </>
    );

}