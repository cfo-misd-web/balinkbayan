import { Button } from "@/components/ui/button"
import { categories } from "@/constants/contants"


export default function FilipinoCategories() {
    return (
        <div className="container mb-12 lg:w-[1100px] mx-auto px-4">
            <div className="">
                <h3 className="font-bold text-[28px] text-[#135e69] font-[arial]">Our Services</h3>
                <div className="w-8 md:w-10 lg:w-12 h-0.5 bg-orange-400 mb-3 md:mb-4 lg:mb-6"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {categories.map((category) => (
                    <div key={category.id} className="flex flex-col items-center text-center h-full">
                        <div
                            className={`w-32 h-32 rounded-full overflow-hidden ${category.bgColor} mb-4 flex items-center justify-center`}
                        >
                            <img
                                src={category.imgUrl || "/placeholder.svg"}
                                alt={category.title}
                                width={128}
                                height={128}
                                className="object-cover"
                            />
                        </div>
                        <h2 className="text-teal-700 font-bold text-xl mb-2">{category.title}</h2>
                        <p className="text-gray-700 mb-4 flex-grow">{category.description}</p>
                        <Button className="bg-orange-400 hover:bg-green-500 text-white font-medium mt-auto">LEARN MORE</Button>
                    </div>
                ))}
            </div>
        </div>
    )
}

