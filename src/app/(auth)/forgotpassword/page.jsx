"use client"; // This line is required for client-side components in Next.js

import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/20/solid';
import appwriteService from '@/appwrite/appwrite_config';
import { TextField } from '@/components/Fields';
import { toast, Bounce } from 'react-toastify';

const Forgot = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const secret = searchParams.get('secret');
    const userId = searchParams.get('userId');
    const [errors, setErrors] = useState(
        {}
    )
    const [password, setPassword] = useState({
        newpassword: "",
        confirmpassword: ""
    });

    const [showPassword, setShowPassword] = useState(false);
    const validatePasswords = (password) => {
        const newErrors = {};

        // Validate new password
        if (!password.newpassword) {
            newErrors.newpassword = "Password is required.";
        } else if (password.newpassword.length < 8) {
            newErrors.newpassword = "Password must be at least 8 characters.";
        }

        // Validate confirm password
        if (!password.confirmpassword) {
            newErrors.confirmpassword = "Password confirmation is required.";
        } else if (password.confirmpassword.length < 8) {
            newErrors.confirmpassword = "Password must be at least 8 characters.";
        } else if (password.newpassword !== password.confirmpassword) {
            newErrors.confirmpassword = "Passwords do not match.";
        }

        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPassword((prev) => ({ ...prev, [name]: value.trim() }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const validationErrors = validatePasswords(password);
            if (Object.keys(validationErrors).length > 0) {
                setErrors(validationErrors);
                return; // Prevent further action if there are errors
            }
            await appwriteService.resetpass(userId, secret, password.newpassword);
            toast.success("Password changed successfully.", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            })
            router.push('/');
        } catch (error) {
            toast.error('Unable to reset the password. Please try again.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            })
        }

    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-6 text-center">Reset Password</h2>
                <div className="relative mb-4">
                    <TextField
                        className="col-span-full"
                        label="Password"
                        name="newpassword"
                        type={showPassword ? "text" : "password"} // Toggle password visibility
                        autoComplete="newpassword"
                        required
                        value={password.newpassword} // Corrected value
                        onChange={handleChange}
                    />
                    {errors.newpassword && (
                        <p className='text-red-600  outline-red-800 p-2'>{errors.newpassword}</p>
                    )}
                    <button
                        type="button"
                        className="absolute right-2 top-2"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <EyeSlashIcon className="h-5 w-5 text-gray-500" /> : <EyeIcon className="h-5 w-5 text-gray-500" />}
                    </button>
                </div>
                <div className="relative mb-6">
                    <TextField
                        className="col-span-full"
                        label="Confirm Password"
                        name="confirmpassword"
                        type={showPassword ? "text" : "password"} // Toggle password visibility
                        autoComplete="confirmpassword"
                        required
                        value={password.confirmpassword} // Corrected value
                        onChange={handleChange}
                    />
                    {errors.confirmpassword && (
                        <p className='text-red-600  outline-red-800 p-2'>{errors.confirmpassword}</p>
                    )}
                    <button
                        type="button"
                        className="absolute right-2 top-2"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <EyeSlashIcon className="h-5 w-5 text-gray-500" /> : <EyeIcon className="h-5 w-5 text-gray-500" />}
                    </button>
                </div>
                <button
                    className="w-full bg-blue-500 text-white rounded-lg py-2 hover:bg-blue-600 transition duration-200"
                    onClick={handleSubmit}
                >
                    Reset Password
                </button>
            </div>

        </div>
    );
};

export default Forgot;
