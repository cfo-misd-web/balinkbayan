import { useMediaQuery } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';
import React from 'react';



const SectionOne: React.FC = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');

    return (
        <section className="lg:w-[1400px] flex flex-col items-center justify-center mx-auto py-5 bg-light">
            <div>
                <div className="flex flex-col items-start justify-center mx-auto">
                    <div className={cn("mb-8 mb-lg-0 text-teal-700 text-5xl font-bold", isMobile && "text-4xl")}>
                        Balinkbayan
                    </div>
                    <div className='text-gray-700 text-xl space-y-12'>
                        <p>

                            The increasing inflows of remittances from Overseas Filipinos (OFs) served as one of the profound tenacities of the Commission on Filipinos Overseas (CFO) to convert remittances to more sustainable productive channels through investment and entrepreneurship.
                        </p>
                        <p>

                            Government agencies may have published online business/investment opportunities   and priority areas, yet there seem to be a gap between accessing information and utilizing it for productive use.
                        </p>

                        <p>
                            Thus in 2013, CFO launched the <b className='underline'>BaLinkBayan</b> as the Overseas Filipinos’ one-stop online portal for diaspora engagement, offering an integrated and unique platform to re-engage with the Philippines through the so-called D2D (Diaspora to Development) program of the Commission on Filipinos Overseas (CFO). A locally-funded national E-Government Project, the term BaLinkBayan is a play on the Filipino words Balikbayan (returning migrant), balik (return), bayan (country) and the English word “Link,” that refer to the World Wide Web.
                        </p>



                        Examples of the D2D programs that are parts of the portal are: diaspora philanthropy, medical mission coordination, doing business in the Philippines, tourism initiatives and investment for overseas Filipinos. The portal addresses the concerns of many migrants and their families in investing but would need information and directions to make their money work for them on a sustained basis as there is an absence of a developed government website portal for the purpose of assisting overseas Filipinos to invest in the Philippines.
                        <a href="/about/history" className="btn btn-primary">Learn More About Us</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionOne