"use client";
import React from 'react';
import Link from 'next/link';
import { authClient } from '@/lib/auth-client';
import { useRouter } from "next/navigation";
import { toast } from 'react-toastify';
const Update = () => {
    const router = useRouter();
    const onSubmit = async(e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const user = Object.fromEntries(formData);
        const updated=await authClient.updateUser({
            ...user
        })
        if(updated){
            toast.success('প্রোফাইল পরিবর্তন হয়েছে');
            router.push('/profile');
        }
    }
    return (
        <div className="min-h-[80vh]">
            <div className="flex  items-center justify-center px-4 py-10">
            <div className="w-full max-w-md">
                <div className="">
                    <div className="mb-7 text-center">
                        <h1 className="text-2xl font-bold text-[#1d271f]">
                            প্রোফাইল পরিবর্তন
                        </h1>
                    </div>

                    {/* Signup Form */}
                    <div className="w-full max-w-md rounded-2xl border border-[#E1E8E1] bg-white p-6 shadow-sm sm:p-8">
                        <form  onSubmit={onSubmit} className="space-y-5 ">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="mb-2 block text-sm font-semibold text-[#1d271f]"
                                >
                                    নাম
                                </label>

                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="আপনার নাম"
                                    autoComplete="name"
                                    required
                                    className="w-full rounded-xl border border-[#E1E8E1] bg-[#FAFCFA] px-4 py-3 text-sm text-[#1d271f] outline-none transition placeholder:text-[#1d271f]/40 focus:border-[#1A9951] focus:ring-2 focus:ring-[#1A9951]/10"
                                />
                            </div>


                            <button
                                type="submit"
                                className="w-full rounded-xl bg-[#1A9951] px-4 py-3.5 font-semibold text-white transition hover:bg-[#157A40] focus:outline-none focus:ring-2 focus:ring-[#1A9951]/30 focus:ring-offset-2"
                            >
                                পরিবর্তন করুন
                            </button>
                        </form>

                    </div>            
                </div>

                <div className="mt-6 text-center">
                    <Link
                        href="/profile"
                        className="text-sm font-medium text-[#1d271f]/60 transition hover:text-[#1A9951]"
                    >
                        ← প্রোফাইলে ফিরে যান
                    </Link>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Update;