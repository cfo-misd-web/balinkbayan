import { cn } from "@/lib/utils";

const Heading4 = ({children, className}: { children: React.ReactNode, className?:string }) => {
    return (
        <p className={cn('font-bold text-3xl',className)}>
            {children}
        </p>
    );
};
export default Heading4;