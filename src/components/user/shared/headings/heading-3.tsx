import { cn } from "@/lib/utils";

const Heading3 = ({children, className}: { children: React.ReactNode, className?:string }) => {
    return (
        <p className={cn('', className)}>
            {children}
        </p>
    );
};
export default Heading3;