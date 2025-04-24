import { cn } from "@/lib/utils"

const Paragraph = ({children, className}: { children: React.ReactNode , className?:string}) => {
    return (
        <p className={cn('text-cyan-900 text-lg mb-20 text-justify', className)}>
            {children}
        </p>
    );
};
export default Paragraph;