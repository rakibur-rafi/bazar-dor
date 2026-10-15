
"use client";

import React from "react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/dist/server/api-utils";

const UserInfo = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user;

    const handleLogout = async () => {
        await authClient.signOut();
    };

    return (
        <div>
            {user ? (
                <div className="dropdown dropdown-end">
                    <button
                        tabIndex={0}
                        className="btn rounded-lg border-none bg-white px-2 text-sm font-semibold text-black shadow-none sm:px-4"
                    >
                        {user.name}

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m6 9 6 6 6-6"
                            />
                        </svg>
                    </button>

                    <ul
                        tabIndex={0}
                        className="dropdown-content menu z-50 mt-3 w-64 rounded-2xl border border-[#E1E8E1] bg-white p-3 shadow-lg"
                    >
                        <li className="pointer-events-none pb-3">
                            <div className="flex flex-col items-start gap-1">
                                <span className="font-semibold text-sm text-[#1d271f]">
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
                                className="rounded-lg  text-[#1d271f] hover:bg-[#f0f5f0]"
                            >
                                আমার প্রোফাইল
                            </Link>
                        </li>

                        {/* Logout */}
                        <li>
                            <button
                                onClick={handleLogout}
                                className="rounded-lg  text-red-600 hover:bg-red-50"
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
