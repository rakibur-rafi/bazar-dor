
import React from 'react';
import Link from 'next/link';

const NavCategories = async () => {
    const res = await fetch(
        'https://api.api-store.workers.dev/api/bazardor/categories');

    const categories = await res.json();

    return (
        <div className="w-full border-b border-[#F0F5F0]">
            <nav className="max-w-7xl mx-auto flex items-center gap-1 sm:gap-3 py-2 px-2 sm:px-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
                {categories.map(category => (
                    <Link
                        key={category.id}
                        href={`/category/${category.slug}`}
                        className="text-sm text-[#1D271F] px-3 py-2 sm:p-3 flex items-center gap-2 shrink-0 rounded-lg "
                    >
                        <span>{category.icon}</span>
                        <span className="font-semibold">{category.nameBn}</span>
                    </Link>
                ))}
            </nav>
        </div>
    );
};

export default NavCategories;