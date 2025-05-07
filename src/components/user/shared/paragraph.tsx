import { cn } from "@/lib/utils"

const Paragraph = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={cn('text-lg text-justify', className)}>
            {children}
        </div>
    );
};
export default Paragraph;