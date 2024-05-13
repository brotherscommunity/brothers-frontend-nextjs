'use client'

import Search from "./Search"

interface TopPageHeaderProps {
    pageCode: string,
    pageName: string,
    pageDescription: string
}

export default function TopPageHeader({pageCode, pageName, pageDescription} : TopPageHeaderProps) {

    return (
        <section className="mt-7 w-full h-auto rounded-lg bg-header px-6 py-4">
            <div className="flex items-center justify-between">
                <p className="max-sm:text-sm sm:text-base text-navy font-semibold"> Page Code: {pageCode} </p>
                <Search queryParameter="code" placeholder="Search by code" />
            </div>
            <h3 className="max-md:mt-4 md:mt-2 max-sm:text-lg text-xl text-black font-semibold font-palanquin"> {pageName} </h3>
            <p className="mt-4 max-sm:text-sm max-sm:leading-6 text-base text-black"> {pageDescription} </p>
        </section>
    )
}
