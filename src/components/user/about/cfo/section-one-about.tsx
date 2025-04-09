import { useMediaQuery } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';
import React from 'react';



const SectionCFOOne: React.FC = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');

    return (
        <section className="lg:w-[1400px] flex flex-col items-center justify-center mx-auto py-5 bg-light">
            <div>
                <div className="flex flex-col items-start justify-center mt-[50px] mx-auto">
                    <div className={cn("mb-8 mb-lg-0 text-teal-700 text-5xl font-bold", isMobile && "text-4xl")}>
                        <p className='text-sm text-black'>About the</p>
                        <div className='items-center max-lg:items-start  flex flex-row max-lg:flex-col'>Commission on Filipinos Overseas
                            <div className='w-[200px] h-[5px] bg-orange-300 mt-3'></div>
                        </div>
                    </div>
                    <div className='text-gray-700 text-xl space-y-12 text-justify'>
                        <p>

                            Established on 16 June 1980 through Batas Pambansa 79, the Commission on Filipinos Overseas (CFO) is an agency of the Philippine Government under the Office of the President tasked to promote and uphold the interests, rights and welfare of overseas Filipinos and strengthen their ties with the Motherland.
                        </p>
                        <p>

                            The evolution of the Commission on Filipinos Overseas can be traced over a series of policy pronouncements. Presidential Decree No. 442 (Labor Code of the Philippines), which was passed in 1974, created the Overseas Employment Development Board in order to set up a systematic program for the overseas employment of Filipino workers, as well as to register and monitor emigrants leaving for various countries. The following years were characterized by a steady increase in migration, thus making it necessary to establish an independent unit which would constitute a local support network solely for Filipino emigrants. In June 1978, Presidential Decree No. 1412 was passed the Office of Emigrant Affairs (OEA). The decree specifically identified Filipino emigrants as the recipients of its services.
                        </p>

                        <p>
                            In June 1980, Batas Pambansa Blg. 79 was enacted to strengthen the government’s policy on the promotion of migrant welfare and interest. It created the Commission on Filipinos Overseas which replaced OEA but retained and further expanded its mandate.
                        </p>

                        <p>
                            The CFO registers and provides pre-departure orientation seminars to emigrants. It also promotes the transfer of technology as well as material and financial contributions from overseas for development projects in underserved communities all over the Philippines. It also provides younger generations of Filipinos overseas with opportunities to learn Philippine history and culture.
                        </p>
                    </div>
                    <div className='text-gray-700 text-xl mt-[30px] space-y-8 text-justify'>
                        <h2 className='font-bold'>FUNCTIONS</h2>

                        <p className='text-black'>
                            Batas Pambansa Blg. 79, mandates the CFO to perform the following functions:
                        </p>
                        <ul className=' italic text-wrap space-y-1 '>
                            <li>
                                • Provide assistance to the President and the Congress of the Philippines in the formulation of policies and measures concerning or affecting Filipinos overseas; </li>
                            <li>
                                • Develop and implement programmes to promote the interest and well-being of Filipinos overseas;</li>
                            <li>
                                • Serve as a forum for preserving and enhancing the social, economic and cultural ties of Filipinos overseas with the motherland; and
                            </li>
                            <li>
                                • Liase on behalf of Filipinos overseas with appropriate government and private agencies in the transaction of business and similar ventures in the Philippines.
                            </li>
                        </ul>


                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionCFOOne