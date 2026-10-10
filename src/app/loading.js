import React from "react";

const Loading = () => {
    return (
        <div className="flex min-h-[70vh] items-center justify-center bg-[#FAFCFA] px-4">
            <div className="flex flex-col items-center gap-4">
                {/* Spinning Loader */}
                <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#E1E8E1] border-t-[#1A9951]" />

                {/* Loading Text */}
                <p className="text-sm font-medium text-[#1d271f]/60">
                    লোড হচ্ছে...
                </p>
            </div>
        </div>
    );
};

export default Loading;
