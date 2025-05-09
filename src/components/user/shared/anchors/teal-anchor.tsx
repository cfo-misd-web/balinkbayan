import { cn } from "@/lib/utils";

type target = "_blank" | "_self" 

const TealAnchor = ({children, className, href_url, target = "_blank" }: { children: React.ReactNode, href_url?:string, className?:string, target?: target}) => {
   
    return (
        <a target={target} href={href_url} className={cn('text-teal-200', 'hover:text-teal-400', 'underline',className)}>
            {children}
        </a>
    );
};
export default TealAnchor;