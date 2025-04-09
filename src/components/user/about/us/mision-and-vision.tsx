import { useMediaQuery } from "@/hooks/use-mobile";

export const MissionVision = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');

    return (
        <section className="lg:w-[1400px] flex flex-col items-center justify-center mx-auto py-5  bg-light">
            <div className="space-y-12">

                <div className="flex flex-col items-start justify-center mx-auto">
                    <div className="mb-6 mb-lg-0 text-teal-700 text-4xl font-bold">
                        Our Mission
                    </div>
                    <div className='text-gray-700 text-xl space-y-12'>
                        BaLinkBayan seeks to provide overseas Filipinos with the most comprehensive online guide for engaging in the development of the Philippines through opportunities in investments, philanthropy, technology expertise and skills exchange, and special government services.
                    </div>
                </div>
                <div className="flex flex-col items-start justify-center mx-auto">
                    <div className="mb-6 mb-lg-0 text-teal-700 text-4xl font-bold">
                        Our Vision
                    </div>
                    <div className='text-gray-700 text-xl space-y-12'>
                        BaLinkBayan aims to strengthen partnerships between overseas Filipinos and local communities, to achieve sustainable and long-term development of rural and urban localities, toward an economically prosperous Philippines.
                    </div>
                </div>
            </div>
            <div className="flex items-center w-full mt-12 justify-center">
                <iframe width={isMobile ? "320" : "1200"} height="560" src="https://www.youtube.com/embed/4-taieBHuAM?si=q8bkHwJcEGBAtcdf" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </section>
    );
}