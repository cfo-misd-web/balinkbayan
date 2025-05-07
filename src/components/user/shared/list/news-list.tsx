import { ChevronRight } from "lucide-react";
import RoseAnchor from "../anchors/rose-anchor";
import Heading5 from "../headings/heading-5";
import Paragraph from "../paragraph";
import { cn } from "@/lib/utils";

type NewsListProps = {
    className?:string,
    newsTitle?:string,
    postedDate?:string,
    newsDescription?:string,
    imageUrl?:string,
    id?:string,
    author?:string,
}

const NewsList = ({className, newsTitle, postedDate, newsDescription, imageUrl, id, author}: NewsListProps) => {
    return (
        <li className='even:bg-gray-200 odd:bg-gray-100 w-full flex justify-center py-8 text-cyan-900'>
          <div className={cn('flex flex-row space-x-20 w-[80%] border border-gray-300 rounded-lg shadow-md p-[25px]', className)}>
            {imageUrl&& <div className="h-full bg-transparent rounded-lg flex items-center">
                <img className='max-w-64 h-fit rounded-lg' src={imageUrl}/>
            </div>}
            <div className="space-y-3">
              <Heading5>{newsTitle}</Heading5>
              <Paragraph className="font-light text-xs">{postedDate}</Paragraph>
              <Paragraph className="font-semibold">{newsDescription}</Paragraph>
              <Paragraph className="font-light text-sm">by: {author}</Paragraph>

              <RoseAnchor 
                target="_self"
                className="flex flex-row text-rose-700 hover:text-rose-500 cursor-pointer" 
                href_url={`/news/${id}`}
              >
                Read more 
                <ChevronRight className="w-10"/>
              </RoseAnchor>
            </div>
          </div>
        </li>
    );
};
export default NewsList;