"use client"
import { features } from "@/constants/contants"
import { useMediaQuery } from "@/hooks/use-mobile"



export default function FilipinoServices() {
    const isMobile = useMediaQuery("(max-width: 768px)")

    return (
        <div className="lg:w-[1100px] mx-auto max-lg:px-4 items-center justify-center">
            <div className="grid grid-cols-1 gap-6">
                {features.map((feature) => (
                    <FeatureCard
                        key={feature.id}
                        number={feature.number}
                        title={feature.title}
                        description={feature.description}
                        actions={feature.actions}
                        isMobile={isMobile}
                    />
                ))}
            </div>
        </div>
    )
}

interface FeatureCardProps {
    number: string
    title: string
    description: string
    actions: { label: string; url?: string }[]
    isMobile: boolean
}
// @ts-ignore
function FeatureCard({ number, title, description, actions, isMobile }: FeatureCardProps) {
    return (
        <div className="w-full border-t border-gray-200 pt-6 md:pt-8">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start h-full">
                <div className="mb-4 md:mb-0 md:w-1/3 pr-4">
                    <div className="flex items-center">
                        <span className="text-sm font-medium text-gray-500">Features / {number}</span>
                        <div className="ml-2 h-1 w-12 bg-orange-400 rounded"></div>
                    </div>
                    <h3 className="mt-3 text-2xl md:text-3xl font-bold text-teal-700">{title}</h3>
                </div>

                <div className="md:w-1/3 pr-4">
                    <p className="text-gray-700">{description}</p>
                </div>

                <div className="mt-4 md:mt-0 md:w-1/3 flex flex-col space-y-3">
                    {actions.map((action, index) => (
                        <a
                            key={index}
                            href={action.url || "#"}
                            className="flex items-center text-teal-700 font-medium hover:underline"
                        >
                            <span className="mr-2">—</span>
                            {action.label}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

