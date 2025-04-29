import DownloadAccordion from "./download-accordion";
import DownloadHead from "./download-head";

export default function DownloadPage() {
    return (
        <div>
            <DownloadHead />
            <div className="w-[1400px] flex-col max-lg:w-full px-6 mx-auto mt-10 mb-16">
                <div className="prose max-w-none">
                    <p className="text-base mb-4">
                        This section gathers a range of tools and references that would aid your search for more comprehensive resources on overseas Filipinos. Available resources are provided and classified under the following topics:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-6">
                        <li>
                            <span className="font-semibold">CFO Publications</span> – gathers reference materials produced by the Commission on Filipinos Overseas
                        </li>
                        <li>
                            <span className="font-semibold">Laws on Overseas Filipinos</span> – a collection of legislation i.e. Republic Acts, Proclamations, Executive Orders, Memorandum Circulars and GAD Codes that contain provisions for overseas Filipinos.
                        </li>
                        <li>
                            <span className="font-semibold">Statistics on Overseas Filipinos</span> – presents the latest statistics on overseas Filipino culled from the country's statistical agencies.
                        </li>
                        <li>
                            <span className="font-semibold">Good Practices</span> – compiles a selection of stories of notable practices of overseas Filipinos or by national government agencies, local government units and partner stakeholders pertaining to overseas Filipinos.
                        </li>
                    </ul>
                    <h2 className="text-2xl font-semibold mt-8 mb-4">BaLinkBayan Reference Materials</h2>
                    <p className="text-base italic mb-6">
                        Click on the topic to view or hide the list of downloads.
                    </p>
                </div>

                <DownloadAccordion />
            </div>
        </div>
    )
}