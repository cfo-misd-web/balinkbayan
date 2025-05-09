import * as React from "react"
import { AlertCircleIcon } from "lucide-react"
import { TooltipProvider } from "@/components/ui/tooltip"

interface ImageUploadButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    isUploading?: boolean
    tooltipMessage?: string
    children: React.ReactNode
}

export function CTooltip({
    isUploading = true,
    tooltipMessage = "Only 1 image upload at a time",
    children,
}: ImageUploadButtonProps) {
    const [showTooltip, setShowTooltip] = React.useState(false)


    const handleMouseEnter = () => {
        if (isUploading) {
            setShowTooltip(true)
        }
    }

    const handleMouseLeave = () => {
        setShowTooltip(false)
    }

    return (
        <TooltipProvider>
            <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                {children}
                {isUploading && showTooltip && (
                    <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 z-50">
                        <div className="relative">
                            <div className="absolute inset-0 bg-amber-400 rounded-lg blur-sm animate-pulse"></div>
                            <div className="relative bg-amber-500 text-white px-4 py-2 rounded-lg shadow-lg border border-amber-600 flex items-center gap-2 min-w-[200px] text-center">
                                <AlertCircleIcon className="h-4 w-4 text-white animate-bounce" />
                                <span className="text-xs text-nowrap">{tooltipMessage}</span>
                            </div>
                            <div className="absolute h-3 w-3 bg-amber-500 rotate-45 left-1/2 -bottom-1.5 transform -translate-x-1/2 border-r border-b border-amber-600"></div>
                        </div>
                    </div>
                )}
            </div>
        </TooltipProvider>
    )
}
