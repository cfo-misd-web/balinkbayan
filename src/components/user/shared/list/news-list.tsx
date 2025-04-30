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
}

const NewsList = ({className, newsTitle, postedDate, newsDescription, imageUrl}: NewsListProps) => {
    return (
        <li className='even:bg-gray-200 odd:bg-gray-100 w-full flex justify-center py-8 text-cyan-900'>
          <div className={cn('flex flex-row space-x-20 w-[80%] border border-gray-300 rounded-lg shadow-md p-4', className)}>
            <div className="h-full bg-teal-700 rounded-lg flex items-center">
                <img className='max-w-64 h-fit rounded-lg' src={imageUrl ?? "https://balinkbayan.gov.ph/wp-content/uploads/2025/04/for-eblast-819x1024.jpg"}/>
            </div>
            <div className="space-y-3">
              <Heading5>{newsTitle}</Heading5>
              <Paragraph className="font-light">{postedDate}</Paragraph>
              <Paragraph>{newsDescription}</Paragraph>

              {/* TODO: RATING */}
              <div>
                <Paragraph>Rating Title</Paragraph>
                <Paragraph>Rating description</Paragraph>
                <div>Rating</div>
              </div>

              <RoseAnchor 
              className="flex flex-row text-rose-900" 
              //TODO: href_url="template"
              >Read more <ChevronRight className="w-10"/></RoseAnchor>
            </div>
          </div>
        </li>
    );
};
export default NewsList;