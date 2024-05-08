'use client'

import Search from "./Search"

interface TopPageHeaderProps {
    pageCode: string,
    pageName: string,
    pageDescription: string
}

export default function TopPageHeader({pageCode, pageName, pageDescription} : TopPageHeaderProps) {

    return (
        <section className="mt-7 w-full h-[170px] rounded-lg bg-header px-6 pt-4">
            <div className="flex items-center justify-between">
                <p className="max-sm:text-sm sm:text-base text-navy font-semibold"> Page Code: {pageCode} </p>
                <Search queryParameter="code" placeholder="Search by code" />
            </div>
            <h3 className="mt-2 max-sm:text-lg text-xl text-black font-semibold"> {pageName} </h3>
            <p className="mt-4 max-sm:text-xs text-base text-black"> {pageDescription} </p>
        </section>
    )
}
