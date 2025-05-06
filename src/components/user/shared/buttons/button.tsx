import { cn } from "@/lib/utils"

const Paragraph = ({children, className, href_url}: { children: React.ReactNode , className?:string, href_url?:string}) => {
    return (
        <button className={cn('py-4 w-full text-white font-bold rounded-lg cursor-pointer', className)} onClick={() => {
            if (href_url) {
                window.open(href_url, '_blank');
            }}}>
            {children}
        </button>
    );
};
export default Paragraph;