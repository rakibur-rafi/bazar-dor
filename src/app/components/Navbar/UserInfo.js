"use client";

import React from "react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";
import { IoChevronDownOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const UserInfo = () => {
    const router = useRouter();

    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    const handleLogout = async () => {
        const { error } = await authClient.signOut();

        if (!error) {
            toast.success("সাইন আউট সফল হয়েছে");
            router.push("/");
        } else {
            toast.error("সাইন আউট করা যায়নি");
        }
    };

if (isPending) {
    return (
        <div className="flex items-center gap-3">
            <div className="skeleton h-8 w-8 shrink-0 rounded-xl bg-gray-200"></div>

            <div className="hidden flex-col gap-2 sm:flex">
                <div className="skeleton h-3 w-20 bg-gray-200"></div>
            </div>

            <div className="skeleton h-8 w-8 rounded-lg bg-gray-200 sm:hidden"></div>
        </div>
    );
}
    return (
        <div>
            {user ? (
                <div className="dropdown dropdown-end">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn flex gap-3 rounded-lg border-none bg-transparent px-2 text-sm text-[#1d271f] shadow-none sm:px-4"
                    >
                        {user.image ? (
                            <Image
                                width={32}
                                height={32}
                                src={user.image}
                                alt={user.name || "User"}
                                className="rounded-xl"
                            />
                        ) : (
                            <FaUserCircle className="h-6 w-6 text-[#05893E]" />
                        )}

                        <span className="max-w-28 truncate">
                            {user.name}
                        </span>

                        <IoChevronDownOutline className="h-3 w-3" />
                    </div>

                    <ul
                        tabIndex={0}
                        className="dropdown-content menu z-50 mt-3 w-64 rounded-2xl border border-[#E1E8E1] bg-white p-3 shadow-lg"
                    >
                        <li className="pointer-events-none pb-3">
                            <div className="flex flex-col items-start gap-1">
                                <span className="text-sm font-semibold text-[#1d271f]">
                                    {user.name}
                                </span>

                                <span className="text-xs text-[#1d271f]/60">
                                    {user.email}
                                </span>
                            </div>
                        </li>

                        <li>
                            <Link
                                href="/profile"
                                className="rounded-lg text-[#1d271f] hover:bg-[#f0f5f0]"
                            >
                                আমার প্রোফাইল
                            </Link>
                        </li>

                        <li>
                            <button
                                onClick={handleLogout}
                                className="rounded-lg text-red-600 hover:bg-red-50"
                            >
                                সাইন আউট
                            </button>
                        </li>
                    </ul>
                </div>
            ) : (
                <div className="flex items-center gap-2">
                    <Link href="/sign-in">
                        <button className="btn rounded-lg border-none bg-white px-2 py-2.5 text-sm font-semibold text-black shadow-none sm:px-4">
                            সাইন ইন
                        </button>
                    </Link>

                    <Link href="/sign-up">
                        <button className="btn rounded-lg border-none bg-[#05893E] px-2 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#05893E]/60 sm:px-4">
                            সাইন আপ
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default UserInfo;