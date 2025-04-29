import { cn } from "@/lib/utils";

const TableCell = ({children, className}: {children:React.ReactNode, className?:string}) => {
    return (
        <div className={cn('border border-r-0 py-5 max-h-40',className)}>
            {children}
        </div>
    );
};
export default TableCell;