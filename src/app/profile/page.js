"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { FaUserCircle } from "react-icons/fa";
import { FiLogOut, FiEdit3 } from "react-icons/fi";
import { toast } from "react-toastify";

const Profile = () => {
    const router = useRouter();
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;


    const handleLogout = async () => {
        const { error } = await authClient.signOut();

        if (error) {
            toast.error(error.message);
            return;
        }

        toast.success("সাইন আউট সফল হয়েছে");
        router.push("/");
    };

    if (isPending) {
        return (
            <div className="flex min-h-[50vh] items-center justify-center">
                <span className="loading loading-spinner loading-lg text-[#05893E]" />
            </div>
        );
    }

    if (!user) {
        return (
            <div className="flex flex-col items-center justify-center gap-4 px-4">
                <p className="text-[#1d271f]/70">
                    আপনার প্রোফাইল দেখতে সাইন ইন করুন।
                </p>

                <Link
                    href="/sign-in"
                    className="btn border-none bg-[#05893E] text-white hover:bg-[#157A40]"
                >
                    সাইন ইন
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-[80vh] px-4 py-10 sm:py-14">
            <div className="mx-auto w-full max-w-3xl">
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-[#1d271f]">
                        আমার প্রোফাইল
                    </h1>

                    <p className="mt-1 text-sm text-[#1d271f]/60 sm:text-base">
                        আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
                    </p>
                </div>

                {/* Profile Card */}
                <div className="flex flex-col gap-5 rounded-2xl border border-[#E1E8E1] bg-white p-5 sm:flex-row sm:items-center sm:justify-between sm:p-7">
                    <div className="flex min-w-0 items-center gap-4">
                        {user.image ? (
                            <Image
                                src={user.image}
                                alt={user.name || "Profile"}
                                width={80}
                                height={80}
                                loading="lazy"
                                className="rounded-full"
                            />
                        ) : (
                            <FaUserCircle className="h-16 w-16 shrink-0 text-[#05893E] sm:h-20 sm:w-20" />
                        )}

                        <div className="min-w-0">
                            <h2 className="text-lg font-semibold text-[#1d271f] sm:text-xl">
                                {user.name}
                            </h2>

                            <p className="mt-1 text-sm text-[#1d271f]/70">
                                {user.email}
                            </p>
                        </div>
                    </div>

                   <div className="flex flex-col gap-2 sm:flex-row sm:gap-3">
                    <Link href="/profile/update" className="">
                        <button
                        className="btn w-full bg-[#05893E] border shadow-none border-[#E1E8E1] rounded-xl text-white sm:w-auto"
                    >
                        <FiEdit3 className="h-4 w-4" />
                        আপডেট করুন
                    </button>
                    </Link>
                     <button
                        onClick={handleLogout}
                        className="btn border shadow-none border-[#E1E8E1] rounded-xl bg-white text-red-600 sm:w-auto"
                    >
                        <FiLogOut className="h-4 w-4" />
                        সাইন আউট
                    </button>
          

                    
                   </div>
                </div>

               
            </div>
        </div>
    );
};

export default Profile;
