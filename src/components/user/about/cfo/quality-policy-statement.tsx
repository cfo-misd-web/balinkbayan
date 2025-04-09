export default function QualityPolicyStatement() {
    return (
        <div className="relative w-full bg-teal-700 min-h-[600px] md:min-h-[700px] overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/placeholder.svg?height=700&width=1200')",
                        filter: "brightness(0.4)",
                    }}
                />
            </div>

            {/* content */}
            <div className="relative z-10 container mx-auto px-4 py-12 md:py-16 text-white">
                <div className="max-w-[1400px] mx-auto">

                    <h3 className="text-lg md:text-xl font-medium mb-2">Commission on Filipinos Overseas</h3>

                    <h1 className="text-3xl md:text-5xl font-bold mb-6 md:mb-10">Quality Policy Statement</h1>

                    <div className="grid md:grid-cols-2 gap-6 md:gap-10">
                        <div className="space-y-6">
                            <p className="text-sm md:text-base">
                                We in the Commission on Filipinos Overseas (CFO), a government agency responsible for upholding the
                                interests, rights and welfare of overseas Filipinos and strengthening their ties with the Philippines,
                                commit to effectively and efficiently deliver gender-responsive policies, programs and services for the
                                well-being and empowerment of the community of Filipinos overseas.
                            </p>

                            <p className="text-sm md:text-base">In pursuit of this commitment, we shall:</p>

                            <p className="text-sm md:text-base">
                                Capacitate our people through continuous professional development anchored on social responsibility;
                            </p>

                            <p className="text-sm md:text-base">
                                Formulate policies and facilitate quality and citizen-centric programs and services that
                            </p>
                        </div>

                        <div className="space-y-6">
                            <p className="text-sm md:text-base">exceed expectations of the public we serve; and</p>

                            <p className="text-sm md:text-base">
                                Optimize the benefits of migration with overseas Filipinos as development partners of the Philippines
                                and their host countries while addressing the social costs.
                            </p>

                            <p className="text-sm md:text-base">
                                With the commitment to uphold the principles of good governance and highest standards of excellence, we
                                adhere to comply and continuously improve our quality management system and other legal requirements.
                            </p>
                        </div>
                    </div>

                    <div className="mt-10 md:mt-16">
                        <p className="text-xl md:text-2xl italic font-medium">
                            "Kalidad na serbisyo para sa mamamayan, abot sa lahat ng bayan."
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
