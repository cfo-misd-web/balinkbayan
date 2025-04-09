export default function ClientGrid() {
    return (
        <div className="lg:w-[1400px] mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Card 1 */}
                <div className="bg-white p-6 rounded-md shadow-sm border border-gray-100 min-h-[120px] flex items-center">
                    <p className="text-gray-800 font-medium">Filipino permanent migrants or permanent residents abroad</p>
                </div>

                {/* Card 2 */}
                <div className="bg-white p-6 rounded-md shadow-sm border border-gray-100 min-h-[120px] flex items-center">
                    <p className="text-gray-800 font-medium">
                        Filipinos overseas who have become naturalized citizens of other countries or dual citizens
                    </p>
                </div>

                {/* Card 3 */}
                <div className="bg-white p-6 rounded-md shadow-sm border border-gray-100 min-h-[120px] flex items-center">
                    <p className="text-gray-800 font-medium">
                        Filipino spouses and other partners of foreign nationals leaving the country
                    </p>
                </div>

                {/* Card 4 */}
                <div className="bg-white p-6 rounded-md shadow-sm border border-gray-100 min-h-[120px] flex items-center">
                    <p className="text-gray-800 font-medium">
                        Descendants of Filipinos overseas, as defined in <span className="italic">Batas Pambansa Blg. 79</span>
                    </p>
                </div>

                {/* Card 5 */}
                <div className="bg-white p-6 rounded-md shadow-sm border border-gray-100 min-h-[120px] flex items-center">
                    <p className="text-gray-800 font-medium">Filipino youth overseas</p>
                </div>

                {/* Card 6 */}
                <div className="bg-white p-6 rounded-md shadow-sm border border-gray-100 min-h-[120px] flex items-center">
                    <p className="text-gray-800 font-medium">Exchange Visitor Program participants</p>
                </div>

                {/* Empty Card 8 */}
                <div className="bg-white  max-md:hidden opacity-0 p-6 rounded-md shadow-sm border border-gray-100 min-h-[120px]"></div>
                {/* Card 7 */}
                <div className="bg-white p-6 rounded-md shadow-sm border border-gray-100 min-h-[120px] flex items-center">
                    <p className="text-gray-800 font-medium">Filipino Au Pair participants</p>
                </div>


                {/* Empty Card 9 */}
                <div className="bg-white max-md:hidden opacity-0 p-6 rounded-md shadow-sm border border-gray-100 min-h-[120px]"></div>
            </div>
        </div>
    )
}
