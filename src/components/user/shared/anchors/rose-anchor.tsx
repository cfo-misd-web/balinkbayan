import { cn } from "@/lib/utils";

const RoseAnchor = ({children, className, href_url}: { children: React.ReactNode, href_url?:string, className?:string}) => {
    return (
        <a href={href_url} className={cn('text-rose-200', 'underline',className)}>
            {children}
        </a>
    );
};
export default RoseAnchor;