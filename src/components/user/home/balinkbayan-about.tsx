import { ChevronRight } from "lucide-react"
import { CountCard } from "../shared/utils/count-up"

export default function BalikbayanAbout() {
    return (
        <div className="lg:w-[1400px] items-center mx-auto my-[50px] lg:rounded-lg shadow-lg overflow-hidden bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="bg-teal-800 text-white p-6 md:p-10">
                    <h3 className="text-sm font-medium uppercase mb-6">About</h3>

                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
                        Our mission is to reconnect overseas Filipinos with the motherland.
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div>
                            <p className="text-sm">
                                A quip on the Filipino word balikbayan (a returning overseas Filipino), BaLinkBayan's long term pursuit
                                for inclusive and sustainable growth
                            </p>

                            <button className="mt-4 border border-white rounded-none p-2">
                                <ChevronRight size={16} />
                            </button>
                        </div>

                        <div>
                            <p className="text-sm">
                                is driven by the collective strength of overseas Filipinos that can serve as catalysts to fuel
                                Philippine economic development.
                            </p>
                        </div>
                    </div>
                    <img
                        src="/balinkbayan-sl.png"
                        alt="BaLinkBayan Logo"
                        className="object-contain w-full"
                    />
                </div>

                <div className="flex flex-col">
                    <div className="bg-orange-400 text-black p-6 md:p-10 flex-1">
                        <h3 className="text-sm font-medium uppercase mb-6">Our Vision</h3>

                        <p className="text-sm mb-8">
                            BaLinkBayan aims to strengthen partnerships between overseas Filipinos and local communities, to achieve
                            sustainable and long-term development of rural and urban localities, toward an economically prosperous
                            Philippines.
                        </p>

                        <button className="border border-black rounded-none p-2">
                            <ChevronRight size={16} />
                        </button>

                        <img
                            src="/balinkbayan-sl.png"
                            alt="BaLinkBayan Logo"
                            className="object-contain w-full items-center justify-center self-center"
                        />
                    </div>

                    <div className="bg-orange-400 text-black p-6 md:p-10 flex-1 border-t border-orange-300">
                        <h3 className="text-sm font-medium uppercase mb-6">Our Mission</h3>

                        <p className="text-sm mb-8">
                            BaLinkBayan seeks to provide overseas Filipinos with the most comprehensive online guide for engaging in
                            the development of the Philippines through opportunities in investments, philanthropy, technology
                            expertise and skills exchange, and special government services.
                        </p>

                        <button className="border border-black rounded-none p-2">
                            <ChevronRight size={16} />
                        </button>

                        <img
                            src="/balinkbayan-sl.png"
                            alt="BaLinkBayan Logo"
                            className="object-contain w-full"
                        />
                    </div>
                </div>
            </div>

            <div className="py-10 px-6 md:px-10">
                <h2 className="text-2xl font-bold mb-10 flex items-center">
                    Our Partners
                    <span className="ml-2 w-16 h-0.5 bg-gray-400"></span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <CountCard target={15} label="Provincial Government Agencies" />

                    <CountCard target={28} label="City Government Agencies" />

                    <CountCard target={15} label="Municipal Government Agencies" />

                    <CountCard target={10} label="Filipino Association Overseas" />
                </div>
            </div>
        </div>
    )
}

