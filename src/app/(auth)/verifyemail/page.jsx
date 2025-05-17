'use client'
import appwriteService from '@/appwrite/appwrite_config';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const VerifyEmailUser = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    const completeEmailVerification = async (userId, secret) => {
        try {
            await appwriteService.verifyemail(userId, secret);
            toast.success("User verified.", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            router.push('/');
        } catch (error) {
            toast.error(error.message || "Verification failed.", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const userId = urlParams.get('userId');
        const secret = urlParams.get('secret');

        const verifyEmail = async () => {
            if (userId && secret) {
                await completeEmailVerification(userId, secret);
            } else {
                toast.error("Missing userId or secret.", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
                setLoading(false);
            }
        };

        verifyEmail();
    }, []);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-md max-w-sm text-center">
                {loading ? (
                    <h2 className="text-xl font-semibold text-gray-700">Verifying your email...</h2>
                ) : (
                    <h2 className="text-xl font-semibold text-gray-700">Verification complete!</h2>
                )}

            </div>

        </div>
    );
};

export default VerifyEmailUser;
