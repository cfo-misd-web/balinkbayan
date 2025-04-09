import { ChevronRight } from "lucide-react"

export default function BaLinkBayanPortal() {
    return (
        <div className="max-lg:mx-auto max-lg:mt-0 rounded-b-lg lg:w-[1400px] h-fit flex flex-col mx-auto">

            <div className="max-lg:px-4 flex">

                {/* Lower Section */}
                <div className="flex h-full w-full gap-[1px] bg-white rounded-b-lg">
                    {/* Lower Left - Logo section */}

                    <div className="w-1/2 h-[267px] max-lg:hidden">
                        <img src="/balinkbayan-sl.png"
                            alt="BaLinkBayan Logo"
                            className="object-center w-full h-full rounded-tl-lg shadow-lg rounded-bl-lg"
                        />
                    </div>


                    <div className="flex w-1/2 h-full max-lg:w-full bg-teal-700 rounded-b-lg">
                        {/* Partnership section */}
                        <div className="bg-[#F4A03A] p-8 w-1/2 h-1/2 rounded-br-lg">
                            <h3 className="font-medium">Partnership</h3>
                            <div className="w-12 h-0.5 bg-white mb-6"></div>

                            <p className="mb-6">
                                We have partnered with various national government agencies, local government units, and overseas Filipino
                                communities.
                            </p>

                            <button className="border border-black rounded-full p-2 hover:bg-orange-600 transition-colors">
                                <ChevronRight size={16} />
                            </button>
                        </div>

                        {/* Vision section */}
                        <div className="bg-teal-700 text-white p-8 w-1/2 h-full rounded-b-lg">
                            <p className="italic text-right mb-6">
                                "CFO's vision, mission, and quality policy statement reflect our deep commitment to fulfilling our mandate
                                and empowering the community of Filipinos overseas. Under my leadership, I will ensure that our agency will
                                efficiently and effectively deliver the services that will redound to their welfare and well-being, and
                                continue to innovate, utilizing digital and information technology, to serve the public better."
                            </p>

                            <div className="text-right">
                                <p className="font-medium">Secretary Romulo V. Arugay</p>
                                <p className="text-sm">Commission on Filipinos Overseas</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
