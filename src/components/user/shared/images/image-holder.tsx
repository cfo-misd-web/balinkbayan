import { cn } from "@/lib/utils";
import Paragraph from "../paragraph";

const ImageHolder = ({children, className, img_url, blb_url}: {children?:React.ReactNode, className?:string, img_url:string, blb_url?:string}) => {
    return (
        <a target="_blank" href={blb_url} className={cn('hover:bg-amber-50 flex flex-col items-center space-y-5 shadow-xl p-5 px-10 rounded-xl border-1 border-gray-100 max-h-72 min-h-72', className)}>
            <div className="h-40 flex items-center">
                <img className="w-fit max-h-40" src={img_url}/>
            </div>
            <Paragraph className="text-center max-w-40">{children}</Paragraph>
        </a>
    );
};

export default ImageHolder;