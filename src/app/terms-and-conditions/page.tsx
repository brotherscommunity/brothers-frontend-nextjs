import { TERMS_AND_CONDITIONS } from "@/constants";


export default function page() {
    return (
        <main className="mt-20 mx-24 mb-48">
            <h2 className="text-2xl text-black font-semibold"> Terms and Conditions Agreement </h2>
            <h5 className="mt-6 text-base"> Welcome to our social media blog! </h5>
            <p className="mt-4 text-base"> 
                These Terms and Conditions govern your use of our website and any associated services offered through it. By accessing or using our website, you agree to be bound by these Terms and Conditions. Please read them carefully before proceeding. If you do not agree to these Terms and Conditions, you may not use our website.
            </p>
            { TERMS_AND_CONDITIONS.map((term, index) => {
                return (
                    <div key={term.title} className="flex flex-col justify-start mt-6 text-black">
                        <h4 className="text-lg font-medium"> {index + 1}. {term.title} </h4>
                        <p className="mt-3 text-base text-justify"> {term.description} </p>
                        {term.additional_info && <p className="mt-3"> {term.additional_info} </p>}
                    </div>
                )
            })}
        </main>
    )
}
