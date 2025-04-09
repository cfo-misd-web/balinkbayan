import { MessageSquare, PhoneCall } from "lucide-react"
import { Link } from "@tanstack/react-router"
import Nav from "./navs"
import { NavSheet } from "../partials/navsheets"
import { useState } from "react"

export const SubHeader = () => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <div className="container w-full lg:w-[1600px] p-4 mx-auto">
                <div className="flex items-center justify-between space-x-0 sm:space-x-3 space-y-3 sm:space-y-0 flex-col sm:flex-row">
                    <div className="flex items-center w-full mx-auto justify-between space-x-4">
                        <Link aria-label="Main Logo" to="/">
                            <img className="object-contain object-left w-auto max-h-[70px] h-auto max-w-[300px]" src="/balinkbayan.png" alt="" />
                        </Link>
                        <NavSheet open={open} setOpen={setOpen} />

                    </div>
                    <div className="flex items-center border-t sm:border-t-0 pt-3 sm:pt-0 text-sm space-y-0 sm:space-y-0 flex-col sm:flex-row w-full mx-auto justify-center sm:justify-end">
                        <div className=" text-black px-2 sm:pt-0 pt-2">
                            <div className="flex justify-center sm:justify-end mb-2 flex-row">
                                <div className="flex space-x-2 text-sm font-semibold px-2">
                                    <PhoneCall className="h-5 w-5 self-center" />
                                    <span className="text-slate-900 text-xs">(02) 866-225-88</span>
                                </div>
                                <div className="flex space-x-2 text-sm font-semibold px-2">
                                    <MessageSquare className="h-5 w-5 self-center" />
                                    <span className="text-slate-900 text-xs">actioncenter@cfo.gov.ph</span>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2 text-sm font-semibold">
                                <form>
                                    <div className="flex rounded-md shadow-sm border">
                                        <div className="relative flex flex-grow items-stretch focus-within:z-10">
                                            <input id="search" className="block min-w-[120px] w-full rounded-none rounded-l-md border-0 py-1.5 px-4 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" placeholder="Search" type="text" value="" name="search" />
                                        </div>
                                        <button type="submit" aria-label="Search Button" className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" className="-ml-0.5 h-5 w-5 text-gray-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg></button></div></form><div className="flex items-center space-x-2">
                                    <a href="https://www.philhealth.gov.ph/about_us/transparency/" target="_blank" aria-label="Transparency Seal" rel="noopener noreferrer">
                                        <img className="w-auto max-h-[50px] h-auto max-w-[300px] object-center object-contain" src="/images/transparency-seal.png" alt="" /></a>
                                    <a href="https://www.foi.gov.ph/requests?agency=PH" target="_blank" aria-label="Freedom of Information" rel="noopener noreferrer">
                                        <img className="w-auto max-h-[50px] h-auto max-w-[300px] object-center object-contain" src="/images/freedom-of-information.png" alt="" /></a>
                                    <img className="w-auto max-h-[50px] h-auto max-w-[300px] object-center object-contain" src="/images/bagong-pilipinas-dark.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <Nav />
        </>
    )
}