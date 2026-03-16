'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation'
//import Link from 'next/link'
//import { Mail, Lock, Eye, EyeOff, User, Github } from 'lucide-react';

export default function RegisterPage() {
    const navigate = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert('Пароли не совпадают!');
            return;
        }
        console.log('Register:', formData);
        navigate('/board');
    }
    return (
        <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl mb-4">
                        <span className="text-2xl font-bold text-white">Tr</span>
                    </div>
                </div>
            </div>
        </div>
    )
}