import { cn } from "@/lib/utils";

const Heading5 = ({children, className}: {children:React.ReactNode, className?:string}) => {
    return (
        <p className={cn('font-black text-xl',className)}>
            {children}
        </p>
    );
};
export default Heading5;