import { cn } from "@/lib/utils"

const Paragraph = ({children, className}: { children: React.ReactNode , className?:string}) => {
    return (
        <p className={cn('text-lg text-justify', className)}>
            {children}
        </p>
    );
};
export default Paragraph;