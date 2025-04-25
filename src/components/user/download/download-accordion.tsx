import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FileText } from "lucide-react";

export default function DownloadAccordion() {
    return <Accordion type="single" collapsible defaultValue="item-1" className="mb-8">
        <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg font-medium text-blue-600">Diaspora and Development</AccordionTrigger>
            <AccordionContent>
                <div className="space-y-4 pl-4 py-2">
                    <div className="flex items-start">
                        <FileText className="h-5 w-5 mt-1 mr-2" />
                        <div>
                            <a href="#" className="text-blue-600 hover:underline">Glossary on Migration</a>
                            <p className="text-gray-700">- This glossary attempts to serve as a guide to the mire of terms and concepts in the migration field,in an effort to provide a useful tool to the furtherance of such international cooperation and the common understanding of migration issues.</p>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <FileText className="h-5 w-5 mt-1 mr-2" />
                        <p className="text-blue-600 hover:underline">International Migration and the Millenium Development Goals</p>
                    </div>

                    <div className="flex items-start">
                        <FileText className="h-5 w-5 mt-1 mr-2" />
                        <div>
                            <p className="text-blue-600 hover:underline">Mainstreaming Migration</p>
                            <p className="text-gray-700">– these documents show migration's link to the current MDG framework</p>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <FileText className="h-5 w-5 mt-1 mr-2" />
                        <div>
                            <p className="text-blue-600 hover:underline">Migration and the UN Post2015 Agenda</p>
                            <p className="text-gray-700">– This document shows the relevance of including migration in the main framework of the post-2015 development agenda</p>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <FileText className="h-5 w-5 mt-1 mr-2" />
                        <p className="text-blue-600 hover:underline">Millennium Development Goals and Migration</p>
                    </div>
                </div>
            </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg font-medium text-blue-600">Invest</AccordionTrigger>
            <AccordionContent>
                <div className="space-y-6 pl-4 py-2">
                    <div>
                        <h3 className="font-medium mb-2">Business Planning and Registration</h3>
                        <div className="space-y-3 pl-4">
                            <div className="flex items-start">
                                <FileText className="h-5 w-5 mt-1 mr-2" />
                                <div>
                                    <a href="/downloads/Business_Plan_Outline.pdf" className="text-blue-600 hover:underline">Business Plan Outline</a>
                                    <p className="text-gray-700">– Learn the basics of running a business, making a surefire business plan, and the steps to take to grow your business!</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <FileText className="h-5 w-5 mt-1 mr-2" />
                                <div>
                                    <a href="/downloads/A_Guide_to_Registering_Your_Business.pdf" className="text-blue-600 hover:underline">A Guide to Registering Your Business</a>
                                    <p className="text-gray-700">– these are the requirements and procedures on how to register you business.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-medium mb-2">Entrepreneurship</h3>
                        <p className="mb-2 pl-4">– good personal attitude and outlook matters too especially while running the business and waiting for it to take-off. Learn the traits and characteristics to be a successful entrepreneur.</p>
                        <div className="space-y-3 pl-4">
                            <div className="flex items-start">
                                <FileText className="h-5 w-5 mt-1 mr-2" />
                                <a href="/downloads/14_Character_Traits_of_the_Entrepreneur.pdf" className="text-blue-600 hover:underline">14 Character Traits of the Entrepreneur</a>
                            </div>

                            <div className="flex items-start">
                                <FileText className="h-5 w-5 mt-1 mr-2" />
                                <a href="/downloads/25_Common_Characteristics_of_Successful_Entrepreneurs.pdf" className="text-blue-600 hover:underline">25 Common Characteristics of Successful Entrepreneurs</a>
                            </div>

                            <div className="flex items-start">
                                <FileText className="h-5 w-5 mt-1 mr-2" />
                                <div>
                                    <a href="/downloads/About_MSMEs.pdf" className="text-blue-600 hover:underline">About MSMEs</a>
                                    <p className="text-gray-700">– Learn the roles and importance of Micro, Small and Medium Enterprises in the Philippine economy.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-medium mb-2">Business Ideas</h3>
                        <div className="space-y-3 pl-4">
                            <div className="flex items-start">
                                <FileText className="h-5 w-5 mt-1 mr-2" />
                                <a href="/downloads/Investment_Opportunities_in_Crops.pdf" className="text-blue-600 hover:underline">Investment Opportunities in Crops</a>
                            </div>

                            <div className="flex items-start">
                                <FileText className="h-5 w-5 mt-1 mr-2" />
                                <a href="/downloads/Investment_Opportunities_in_Livestock.pdf" className="text-blue-600 hover:underline">Investment Opportunities in Livestock</a>
                            </div>

                            <div className="flex items-start">
                                <FileText className="h-5 w-5 mt-1 mr-2" />
                                <a href="/downloads/Investment_Opportunities_in_Fisheries.pdf" className="text-blue-600 hover:underline">Investment Opportunities in Fisheries</a>
                            </div>

                            <div className="flex items-start">
                                <FileText className="h-5 w-5 mt-1 mr-2" />
                                <div>
                                    <a href="/downloads/A_Guide_to_Franchising.pdf" className="text-blue-600 hover:underline">A Guide to Franchising</a>
                                    <p className="text-gray-700">– these are the requirements and procedures on how to register you business.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-medium mb-2">Finance</h3>
                        <p className="mb-2 pl-4">– Learn the importance of accounting bookkeeping in business operations. Understanding of financial statements and basic bookkeeping concepts are vital to keep your business in top financial shape.</p>
                        <div className="space-y-3 pl-4">
                            <div className="flex items-start">
                                <FileText className="h-5 w-5 mt-1 mr-2" />
                                <a href="/downloads/Accounting_101.pdf" className="text-blue-600 hover:underline">Accounting 101</a>
                            </div>

                            <div className="flex items-start">
                                <FileText className="h-5 w-5 mt-1 mr-2" />
                                <a href="/downloads/Financing_Programs.pdf" className="text-blue-600 hover:underline">Financing Programs</a>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-medium mb-2">Human Resources</h3>
                        <div className="flex items-start pl-4">
                            <FileText className="h-5 w-5 mt-1 mr-2" />
                            <div>
                                <a href="/downloads/Managing_Human_Resources.pdf" className="text-blue-600 hover:underline">Managing Human Resources</a>
                                <p className="text-gray-700">– the outcome of getting people to work for you will depend how you recruit and select your employees and how to manage them while they are under your care.</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-medium mb-2">Marketing</h3>
                        <div className="space-y-3 pl-4">
                            <div className="flex items-start">
                                <FileText className="h-5 w-5 mt-1 mr-2" />
                                <div>
                                    <a href="/downloads/Marketing_Fundamentals.pdf" className="text-blue-600 hover:underline">Marketing Fundamentals</a>
                                    <p className="text-gray-700">– basic knowledge of marketing will equip the entrepreneurs to create a market plan for their products on packaging, pricing, promoting and defining strategic product positioning.</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <FileText className="h-5 w-5 mt-1 mr-2" />
                                <div>
                                    <a href="/downloads/Nuat_Thai.pdf" className="text-blue-600 hover:underline">Nuat Thai</a>
                                    <p className="text-gray-700">– Upscaling a Migrant's Enterprise Through Access to Credit – this is a classic case of contestable markets in microeconomics</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg font-medium text-blue-600">Donations</AccordionTrigger>
            <AccordionContent>
                <div className="space-y-4 pl-4 py-2">
                    <div className="flex items-start ">
                        <FileText className="h-5 w-5 mt-1 mr-2" />
                        <div>
                            <a href="/downloads/Administrative_Order_No_2012-0030.pdf" className="text-blue-600 hover:underline">Administrative Order No. 2012-0030</a>
                            <p className="text-gray-700">– Guidelines on Foreign Surgical and Medical Mission Program in Support of Universal Health Care / kalusugan Pangkalahatan</p>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <FileText className="h-5 w-5 mt-1 mr-2" />
                        <div>
                            <a href="/downloads/PRC_Resolution_No_2012-668.pdf" className="text-blue-600 hover:underline">PRC Resolution No. 2012- 668</a>
                            <p className="text-gray-700">– Guidelines in Implementing Section 7, Paragraph (J) (L) and Section 16 of the Republic Act No. 8981, called the "PRC modernization Act of 2000", and the Pertinent Provisions of the Professional Regulatory Laws, the General Agreement on Trade in Services, and other International Agreements on the Practice of Foreign Professional in the Philippines</p>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <FileText className="h-5 w-5 mt-1 mr-2" />
                        <div>
                            <a href="/downloads/PRC_Resolution_No_2012-673.pdf" className="text-blue-600 hover:underline">PRC Resolution No. 2012-673</a>
                            <p className="text-gray-700">– Suspending the Effectivity of Section 5 and Section 17 of Resolution No. 2012-668 series of 2012 entitled the "Guidelines in Implementing Section 7, Paragraph (J) (L) and Section 16 of the Republic Act No. 8981, called the "PRC modernization Act of 2000", and the Pertinent Provisions of the Professional Regulatory Laws, the General Agreement on Trade in Services, and other International Agreements on the Practice of Foreign Professional in the Philippines", with respect to Subsection E, Section 2 Thereof.</p>
                        </div>
                    </div>
                </div>
            </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
            <AccordionTrigger className="text-lg font-medium text-blue-600">Volunteer</AccordionTrigger>
            <AccordionContent>
                <div className="space-y-4 pl-4 py-2">
                    <div className="flex items-start">
                        <FileText className="h-5 w-5 mt-1 mr-2" />
                        <a href="/downloads/Connected_Through_Service_Diaspora_Volunteers_and_Global_Development.pdf" className="text-blue-600 hover:underline">Connected Through Service Diaspora Volunteers and Global Development</a>
                    </div>

                    <div className="flex items-start">
                        <FileText className="h-5 w-5 mt-1 mr-2" />
                        <a href="/downloads/Mobilizing_Diaspora_Volunteerism_for_Development.pdf" className="text-blue-600 hover:underline">Mobilizing Diaspora Volunteerism for Development</a>
                    </div>

                    <div className="flex items-start">
                        <FileText className="h-5 w-5 mt-1 mr-2" />
                        <a href="/downloads/Characteristics_of_a_Volunteer.pdf" className="text-blue-600 hover:underline">Characteristics of a Volunteer</a>
                    </div>

                    <div className="flex items-start">
                        <FileText className="h-5 w-5 mt-1 mr-2" />
                        <a href="/downloads/Top_Ten_Reasons_to_Volunteer.pdf" className="text-blue-600 hover:underline">Top Ten Reasons to Volunteer</a>
                    </div>
                </div>
            </AccordionContent>
        </AccordionItem>
    </Accordion>

}