import { Briefcase, Heart, Laptop } from "lucide-react"

export const DiasporaPortal = () => {
    return (
        <div className="container mx-auto px-4 py-12 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                {/* Left Column - Portal Description */}
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-teal-700 leading-tight">
                        One Stop Online Portal for Diaspora Engagement
                    </h2>

                    <p className="text-gray-800">
                        It seeks to bring together 10.24 million Filipinos in the diaspora into an integrated and comprehensive
                        platform that taps into their knowledge, expertise, skills, networks, material and financial resources to
                        contribute to the development of the Philippines.
                    </p>

                    <p className="text-gray-800">
                        BaLinkBayan works at two levels. First, it links Overseas Filipinos (OFs) to development-oriented diaspora
                        initiatives in the Philippines and second, it provides options for business and investment opportunities
                        both at the national level and at their respective hometowns. The latter would link, among others, to
                        automated transactional processes at the LGU level.
                    </p>

                    <div className="border-t border-gray-300 w-24 mt-8"></div>
                </div>

                <div className="relative h-full">
                    <img
                        src="/placeholder.svg?height=600&width=400"
                        alt="Filipino diaspora community members in purple shirts"
                        width={400}
                        height={600}
                        className="w-full h-auto bg-teal-700 rounded-md shadow-md"
                    />
                </div>


                <div className="space-y-12">

                    <div className="flex items-start gap-6">
                        <div className="flex-shrink-0 bg-white rounded-full p-4 shadow-md">
                            <Briefcase className="h-8 w-8 text-gray-600" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Start a Business</h3>
                            <p className="text-gray-700">
                                The START A BUSINESS page assists overseas Filipinos to be an entrepreneur.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-6">
                        <div className="flex-shrink-0 bg-white rounded-full p-4 shadow-md">
                            <Heart className="h-8 w-8 text-gray-600" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Donate and Volunteer</h3>
                            <p className="text-gray-700">
                                The DONATE AND VOLUNTEER page encourage them to share their fortune and skills with fellow countrymen in
                                need.
                            </p>
                        </div>
                    </div>


                    <div className="flex items-start gap-6">
                        <div className="flex-shrink-0 bg-white rounded-full p-4 shadow-md">
                            <Laptop className="h-8 w-8 text-gray-600" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Access Online Government Services</h3>
                            <p className="text-gray-700">
                                The ACCESS GOVERNMENT ONLINE SERVICES page links to national government agencies, while it pilot tests
                                local government services.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}