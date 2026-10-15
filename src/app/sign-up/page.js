"use client";
import React from "react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { redirect } from "next/navigation";

const SignUp = () => {
    const onSubmit= async(e)=>{
        e.preventDefault();
        const formData = new FormData(e.target);
        const user= Object.fromEntries(formData);
        const{data, error} =await authClient.signUp.email({
            ...user,
            callbackURL: '/sign-in'
        })
        console.log(data);
        if(data){
            toast.success('অ্যাকাউন্ট তৈরি হয়েছে');
            redirect('/sign-in')
        }
        if(error){
            toast.error(error.message);
        }
    }
    return (
        <div className="flex  items-center justify-center px-4 py-10">
            <div className="w-full max-w-md">
                <div className="">
                    <div className="mb-7 text-center">
                        <h1 className="text-2xl font-bold text-[#1d271f]">
                            অ্যাকাউন্ট তৈরি করুন
                        </h1>

                        <p className="mt-2 text-sm leading-6 text-[#1d271f]/60">
                            বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
                        </p>
                    </div>

                    {/* Signup Form */}
                    <form onSubmit={onSubmit} className="space-y-5 w-full max-w-md rounded-2xl border border-[#E1E8E1] bg-white p-6 shadow-sm sm:p-8">
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
                                placeholder="আপনার পুরো নাম লিখুন"
                                autoComplete="name"
                                required
                                className="w-full rounded-xl border border-[#E1E8E1] bg-[#FAFCFA] px-4 py-3 text-sm text-[#1d271f] outline-none transition placeholder:text-[#1d271f]/40 focus:border-[#1A9951] focus:ring-2 focus:ring-[#1A9951]/10"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="mb-2 block text-sm font-semibold text-[#1d271f]"
                            >
                                ইমেইল
                            </label>

                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="আপনার ইমেইল লিখুন"
                                autoComplete="email"
                                required
                                className="w-full rounded-xl border border-[#E1E8E1] bg-[#FAFCFA] px-4 py-3 text-sm text-[#1d271f] outline-none transition placeholder:text-[#1d271f]/40 focus:border-[#1A9951] focus:ring-2 focus:ring-[#1A9951]/10"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="password"
                                className="mb-2 block text-sm font-semibold text-[#1d271f]"
                            >
                                পাসওয়ার্ড
                            </label>

                            <input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="একটি পাসওয়ার্ড তৈরি করুন"
                                autoComplete="new-password"
                                minLength={8}
                                required
                                className="w-full rounded-xl border border-[#E1E8E1] bg-[#FAFCFA] px-4 py-3 text-sm text-[#1d271f] outline-none transition placeholder:text-[#1d271f]/40 focus:border-[#1A9951] focus:ring-2 focus:ring-[#1A9951]/10"
                            />

                            <p className="mt-1.5 text-xs text-[#1d271f]/50">
                                কমপক্ষে ৮ অক্ষরের পাসওয়ার্ড দিন।
                            </p>
                        </div>

                        <button
                            type="submit"
                            className="w-full rounded-xl bg-[#1A9951] px-4 py-3.5 font-semibold text-white transition hover:bg-[#157A40] focus:outline-none focus:ring-2 focus:ring-[#1A9951]/30 focus:ring-offset-2"
                        >
                            অ্যাকাউন্ট তৈরি করুন
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="my-6 flex items-center gap-4">
                        <div className="h-px flex-1 bg-[#E1E8E1]" />
                        <span className="text-sm text-[#1d271f]/50">
                            অথবা
                        </span>
                        <div className="h-px flex-1 bg-[#E1E8E1]" />
                    </div>

                    {/* Sign In Link */}
                    <p className="text-center text-sm text-[#1d271f]/70">
                        অ্যাকাউন্ট আছে?{" "}
                        <Link
                            href="/sign-in"
                            className="font-semibold text-[#1A9951] hover:underline"
                        >
                            সাইন ইন করুন
                        </Link>
                    </p>
                </div>

                {/* Back to Home */}
                <div className="mt-6 text-center">
                    <Link
                        href="/"
                        className="text-sm font-medium text-[#1d271f]/60 transition hover:text-[#1A9951]"
                    >
                        ← হোম পেজে ফিরে যান
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
