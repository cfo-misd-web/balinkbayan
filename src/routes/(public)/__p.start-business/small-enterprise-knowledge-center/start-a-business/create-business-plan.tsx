import { createFileRoute } from '@tanstack/react-router'
import Paragraph from '@/components/user/shared/paragraph'
import BiggerBanner from '@/components/user/shared/banner/bigger-banner'
import Heading4 from '@/components/user/shared/headings/heading-4'
import Heading5 from '@/components/user/shared/headings/heading-5'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { AccordionHeader } from '@radix-ui/react-accordion'

export const Route = createFileRoute(
  '/(public)/__p/start-business/small-enterprise-knowledge-center/start-a-business/create-business-plan',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <BiggerBanner text='Create your Business Plan' label='Start a Business' img_url='/img-assets/start-a-business/thinking-about-it/starting-a-business.jpg' />
      <section className='text-cyan-900'>
        <div className='max-lg:mx-4 3xl:max-w-[1400px] 2xl:max-w-[1280px] lg:max-w-[1080px] flex flex-col items-center justify-center mx-auto my-20 bg-light'>
          <Paragraph className='mb-32'>The Small Enterprise Knowledge Center provides a complete guide in starting and managing a business. Through the basic business modules, the Center aims to equip you with knowledge on the key aspects of a business. All materials published in the Center were based from the U.S. Small Business Administration website (www.sba.gov) and adapted to suit the local Philippine situation and laws.</Paragraph>
          <Heading4 className='text-center'>Create your Business Plan</Heading4>
          <Paragraph className='mt-10'>Are you thinking about starting a business of your own? Explore the modules below to learn the aspects of starting a business and find ways on how to succeed.</Paragraph>
        </div>
        <div className='bg-cyan-900 max-lg:px-4 text-white w-full flex items-center flex-col justify-center py-5 mb-32'>
          <Accordion type='single' collapsible className='max-lg:mx-4 mx-auto w-full max-w-3xl'>
            <AccordionItem value='item-1' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <Heading4>Executive Summary</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <div className='flex flex-row items-center space-x-20'>
                  <img src='/img-assets/start-a-business/create-business-plan/executive-summary.png' />
                  <div>
                    <Paragraph className='mt-5'>The executive summary is often considered the most important section of a business plan. This section briefly tells your reader where your company is, where you want to take it, and why your business idea will be successful. If you are seeking funding for your business, the executive summary is also your first opportunity to grab a potential investor’s interest.<br/><br/>

                    The executive summary should highlight the strengths of your overall plan and therefore be the last section you write. However, it usually appears first in your business plan document.</Paragraph>
                  </div>
                </div>
                {/*  */}
                <Paragraph>If you are an established business, be sure to include the following information:</Paragraph>
                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>The Mission Statement explaining what your business is all about. It should be between several sentences and a paragraph.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Company Information covers when your business was formed, the names of the founders and their roles, your number of employees, and your business location(s).</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Growth Highlights include examples of company growth, such as financial or market highlights (for example, “XYZ Firm increased profit margins and market share year-over-year since its foundation). Graphs and charts can be helpful in this section.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Briefly describe the Products/Services that you provide.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>For funding, Financial Information may include any information about your current bank and investors.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>A Summary of Future Plans explaining where you would like to take your business in the future.</Paragraph>
                </div>
                <Paragraph className='mt-5'>With the exception of the mission statement, all of the information in the executive summary should be covered in a concise fashion and kept to one page. The executive summary is the first part of your business plan many people will see, so each word should count.<br/><br/>

                However, if you are just starting a business, you won’t have as much information as an established company. Instead, focus on your experience and background as well as the decisions that led you to start this particular enterprise.</Paragraph>
                {/*  */}
                <div className='flex justify-center'>
                  <img src='/img-assets/start-a-business/create-business-plan/executive-summary2.png'></img>
                </div>
                <Paragraph className='mt-5'>Demonstrate that you have done thorough market analysis. Include information about a need or gap in your target market, and how your particular solutions can fill it. Convince the reader that you can succeed in your target market, and then address your future plans.<br/><br/>

                Remember, your Executive Summary will be the last thing you write. So the first section of the business plan that you will tackle is the Company Description section.</Paragraph>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-2' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <Heading4>Company Description</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <Paragraph>This section of your business plan provides a high-level review of the different elements of your business. This can help readers and potential investors quickly understand the goal of your business and its unique proposition.</Paragraph>
                <div className='flex flex-row items-center space-x-20'>
                  <div>
                    <Paragraph>The Company Description should:</Paragraph>
                    <div className='grid grid-cols-12 gap-y-5 mt-5'>
                      <Paragraph className='text-center'>&#8226;</Paragraph>
                      <Paragraph className='col-span-11'>The Mission Statement explaining what your business is all about. It should be between several sentences and a paragraph.</Paragraph>
                      <Paragraph className='text-center'>&#8226;</Paragraph>
                      <Paragraph className='col-span-11'>Company Information covers when your business was formed, the names of the founders and their roles, your number of employees, and your business location(s).</Paragraph>
                      <Paragraph className='text-center'>&#8226;</Paragraph>
                      <Paragraph className='col-span-11'>Growth Highlights include examples of company growth, such as financial or market highlights (for example, “XYZ Firm increased profit margins and market share year-over-year since its foundation). Graphs and charts can be helpful in this section.</Paragraph>
                      <Paragraph className='text-center'>&#8226;</Paragraph>
                      <Paragraph className='col-span-11'>Briefly describe the Products/Services that you provide.</Paragraph>
                      <Paragraph className='text-center'>&#8226;</Paragraph>
                      <Paragraph className='col-span-11'>For funding, Financial Information may include any information about your current bank and investors.</Paragraph>
                      <Paragraph className='text-center'>&#8226;</Paragraph>
                      <Paragraph className='col-span-11'>A Summary of Future Plans explaining where you would like to take your business in the future.</Paragraph>
                    </div>
                  </div>
                  <img src='/img-assets/start-a-business/create-business-plan/company.png' />
                </div>
                <Paragraph className='mt-20'>Next, you’ll need to move on to the Market Analysis section of your plan.</Paragraph>
                {/*  */}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-3' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <Heading4>Market Analysis (Marketing Your Product)</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <Paragraph>The market analysis section of your business plan should illustrate your industry and market knowledge as well as any of your research findings and conclusions. This section is usually presented after the company description.</Paragraph>
                {/*  */}
                <div className='flex flex-row items-center space-x-20'>
                  <div className='space-y-10'>
                    <Paragraph className='mt-5'>The market analysis section should include:</Paragraph>
                    <Paragraph>Industry description and outlook: A description of your industry, including its current size and historic growth rate as well as other trends and characteristics (e.g., life cycle stage, projected growth rate). Next, list the major customer groups within your industry.</Paragraph>
                  </div>
                  <img src='/img-assets/start-a-business/create-business-plan/market-analysis-1.png' />
                </div>
                <div className='flex flex-row items-center space-x-20'>
                  <img src='/img-assets/start-a-business/create-business-plan/market-analysis-2.png' />
                  <Paragraph>Information about your target market: Narrow your target market to a manageable size. Many businesses make the mistake of trying to appeal to too many target markets. Research and include the following information about your market.</Paragraph>
                </div>
                <div className='flex flex-row items-center space-x-20'>
                  <Paragraph>Distinguishing characteristics: What are the critical needs of your potential customers? Are those needs being met? What are the demographics of the group and where are they located? Are there any seasonal or cyclical purchasing trends that may impact your business?</Paragraph>
                  <img src='/img-assets/start-a-business/create-business-plan/market-analysis-3.png' />
                </div>
                <div className='flex flex-row items-center space-x-20'>
                  <img src='/img-assets/start-a-business/create-business-plan/market-analysis-4.png' />
                  <Paragraph>Size of the primary target market: In addition to the size of your market, what data can you include about the annual purchases your market makes in your industry? What is the forecasted market growth for this group? For more information, see our market research guide for tips and free government resources that can help you build a market profile.</Paragraph>
                </div>
                <div className='flex flex-row items-center space-x-20'>
                  <Paragraph>How much market share can you gain? What is the market share percentage and number of customers you expect to obtain in a defined geographic area? Explain the logic behind your calculation.</Paragraph>
                  <img src='/img-assets/start-a-business/create-business-plan/market-analysis-5.png' />
                </div>
                <div className='flex flex-row items-center space-x-20'>
                  <img src='/img-assets/start-a-business/create-business-plan/market-analysis-6.png' />
                  <Paragraph>Pricing and gross margin targets: Define your pricing structure, gross margin levels, and any discount that you plan to use.<br/><br/>

                  When you include information about any of the market tests or research studies you have completed, be sure to focus only on the results of these tests. Any other details should be included in the appendix.</Paragraph>
                </div>
                <div className='flex flex-row items-center space-x-20'>
                  <Paragraph>Competitive Analysis: Your competitive analysis should identify your competition by product line or service and market segment. Assess the following characteristics of the competitive landscape:</Paragraph>
                  <img src='/img-assets/start-a-business/create-business-plan/market-analysis-7.png' />
                </div>
                <div className='flex flex-row items-center space-x-20'>
                  <div className='grid grid-cols-12 gap-y-5'>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Market share</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Strengths and weaknesses</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>How important is your target market to your competitors?</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Are there any barriers that may hinder you as you enter the market?</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>What is your window of opportunity to enter the market?</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Are there any indirect or secondary competitors who may impact your success?</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>What barriers to market are there (e.g., changing technology, high investment cost, lack of quality personnel)?</Paragraph>
                  </div>
                </div>
                <div className='flex flex-row items-center space-x-20'>
                <img src='/img-assets/start-a-business/create-business-plan/market-analysis-8.png'/>
                  <Paragraph>Regulatory Restrictions: Include any customer or governmental regulatory requirements affecting your business, and how you’ll comply. Also, cite any operational or cost impact the compliance process will have on your business.</Paragraph>
                </div>
                <Paragraph className='mt-20'>Once you’ve completed this section, you can move on to the Organization & Management section of your business plan.</Paragraph>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-4' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <Heading4>Organization and Management</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <Paragraph>This section should include your company’s organizational structure, details about the ownership of your company, profiles of your management team, and the qualifications of your board of directors.</Paragraph>
                <div className='flex justify-center'>
                  <img src='/img-assets/start-a-business/create-business-plan/organization-1.png' />
                </div>
                <Paragraph>These may seem like unnecessary for a one- or two-person organization, but the people reading your business plan want to know who’s in charge of which task, so they need to know. Give a detailed description of each division or department and its function.<br/><br/>

                This section should include who’s on the board and how you intend to keep them there. What kind of salary and benefits package do you have for your people? What incentives are you offering? How about promotions? Reassure your reader that the people you have on staff are more than just names on a letterhead.</Paragraph>
                {/*  */}
                <Heading5>Organizational Structure</Heading5>
                <Paragraph>A simple but effective way to lay out the structure of your company is to create an organizational chart with a narrative description. This will prove that you’re leaving nothing to chance, you’ve thought out exactly who is doing what, and there is someone in charge of every function of your company. To a potential investor or employee, that is very important.</Paragraph>
                {/*  */}
                <div className='flex justify-center'>
                  <img src='/img-assets/start-a-business/create-business-plan/organization-2.png' />
                </div>
                <Heading5>Ownership Information</Heading5>
                <Paragraph>This section should also include the legal structure of your business along with the subsequent ownership information it relates to. Have you incorporated your business? Or perhaps you have formed a partnership with someone. Or maybe you are a sole proprietor.<br/><br/>

                The following important ownership information should be incorporated into your business plan:</Paragraph>
                <div className='grid grid-cols-12 gap-y-5 mt-5'>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Names of owners</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Percentage ownership</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Extent of involvement with the company</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Forms of ownership (i.e., common stock, preferred stock, general partner, limited partner)</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Outstanding equity equivalents (i.e., options, warrants, convertible debt)</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Common stock (i.e., authorized or issued)</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Management Profiles</Paragraph>
                </div>
                <Paragraph>Experts agree that one of the strongest factors for success in any growth company is the ability and track record of its owner/management team, so let your reader know about the key people in your company and their backgrounds. Provide resumes that include the following information:</Paragraph>
                <div className='grid grid-cols-12 gap-y-5 mt-5'>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Name</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Position (include brief position description along with primary duties)</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Primary responsibilities and authority</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Education</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Unique experience and skills</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Prior employment</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Special skills</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Past track record</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Industry recognition</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Community involvement</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Number of years with company</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Compensation basis and levels (make sure these are reasonable — not too high or too low)</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Be sure you quantify achievements (e.g. “Managed a sales force of ten people,” “Managed a department of fifteen people,” “Increased revenue by 15 percent in the first six months,” “Expanded the retail outlets at the rate of two each year,” “Improved the customer service as rated by our customers from a 60 percent to a 90 percent rating”)</Paragraph>
                </div>
                <Paragraph className='mt-20'>Also highlight how the people surrounding you complement your own skills. If you’re just starting out, show how each person’s unique experience will contribute to the success of your venture.</Paragraph>
                {/*  */}
                <div className='flex justify-center'>
                  <img src='/img-assets/start-a-business/create-business-plan/organization-3.png' />
                </div>
                <Heading5>Board of Directors' Qualifications</Heading5>
                <Paragraph>The major benefit of an unpaid advisory board is that it can provide expertise that your company cannot otherwise afford. A list of well-known, successful business owners/managers can go a long way toward enhancing your company’s credibility and perception of management expertise.<br/><br/>

                If you have a board of directors, be sure to gather the following information when developing the outline for your business plan:</Paragraph>
                <div className='grid grid-cols-12 gap-y-5 mt-5'>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Names</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Positions on the board</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Extent of involvement with company</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Background</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Historical and future contribution to the company’s success</Paragraph>
                </div>
                <Paragraph className='mt-20'>Next, move on to the Service or Product Line section of your plan.</Paragraph>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-5' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <Heading4>Service or Product Line</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <Paragraph>Once you’ve completed the Organizational and Management section of your plan, the next part of your business plan is where you describe your service or product, emphasizing the benefits to potential and current customers. Focus on why your particular product will fill a need for your target customers.</Paragraph>
                {/*  */}
                <div className='flex justify-center'>
                  <img src='/img-assets/start-a-business/create-business-plan/product-service.png' />
                </div>
                <Heading5>A Description of Your Product / Service</Heading5>
                <Paragraph>Include information about the specific benefits of your product or service – from your customers’ perspective. You should also talk about your product or service’s ability to meet consumer needs, any advantages your product has over that of the competition, and the current development stage your product is in (e.g., idea, prototype).</Paragraph>
                {/*  */}
                <Heading5>Details About Your Product’s Life Cycle</Heading5>
                <Paragraph>Be sure to include information about where your product or service is in its life cycle, as well as any factors that may influence its cycle in the future.</Paragraph>
                {/*  */}
                <Heading5>Intellectual Property</Heading5>
                <Paragraph>If you have any existing, pending, or any anticipated copyright or patent filings, list them here. Also disclose whether any key aspects of a product may be classified as trade secrets. Last, include any information pertaining to existing legal agreements, such as nondisclosure or non-compete agreements.</Paragraph>
                {/*  */}
                <Heading5>Research and Development (R&D) Activities</Heading5>
                <Paragraph>Outline any R&D activities that you are involved in or are planning. What results of future R&D activities do you expect? Be sure to analyze the R&D efforts of not only your own business, but also of others in your industry.<br/><br/>

                Next, move on to the Marketing & Sales Management section of your plan.</Paragraph>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-6' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <Heading4>Marketing and Sales</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <Paragraph>Once you’ve completed the Service or Product Line section of your plan, the next part of your business plan should focus on your marketing and sales management strategy for your business.<br/><br/>

                Marketing is the process of creating customers, and customers are the lifeblood of your business. In this section, the first thing you want to do is define your marketing strategy. There is no single way to approach a marketing strategy; your strategy should be part of an ongoing business-evaluation process and unique to your company. However, there are common steps you can follow which will help you think through the direction and tactics you would like to use to drive sales and sustain customer loyalty.</Paragraph>
                {/*  */}
                <div className='flex justify-center'>
                  <img src='/img-assets/start-a-business/create-business-plan/marketing-sales-1.png' />
                </div>
                <Paragraph className='mt-5'>An overall marketing strategy should include four different strategies:</Paragraph>
                <Heading5>Market penetration strategy</Heading5>
                <Paragraph><b>Growth strategy</b>: This might include internal strategy such as how to increase your human resources, an acquisition strategy such as buying another business, a franchise strategy for branching out, a horizontal strategy where you would provide the same type of products to different users, or a vertical strategy where you would continue providing the same products but would offer them at different levels of the distribution chain.</Paragraph>
                <Paragraph><b>Channels of distribution strategy</b>: This could include original equipment manufacturers (OEMs), an internal sales force, distributors, or retailers.</Paragraph>
                <Paragraph><b>Communication strategy</b>: How are you going to reach your customers? Usually a combination of the following tactics works the best: promotions, advertising, public relations, personal selling, and printed materials such as brochures, catalogs, flyers, etc.<br/><br/>

                After you have developed a comprehensive marketing strategy, you can then define your sales strategy. This covers how you plan to actually sell your product.<br/><br/>

                Your overall sales strategy should include two primary elements:</Paragraph>
                <div className='grid grid-cols-12 gap-y-5 mt-5'>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'><b>Sales force strategy</b>: If you are going to have a sales force, do you plan to use internal or independent representatives? How many salespeople will you recruit for your sales force? What type of recruitment strategies will you use? How will you train your sales force? What about compensation for your sales force?</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'><b>Sales activities</b>: When you are defining your sales strategy, it is important that you break it down into activities. For instance, you need to identify your prospects. Once you have made a list of your prospects, you need to prioritize the contacts, selecting the leads with the highest potential to buy first. Next, identify the number of sales calls you will make over a certain period of time. From there, you need to determine the average number of sales calls you will need to make per sale, the average dollar size per sale, and the average dollar size per vendor.</Paragraph>
                </div>
                <div className='ml-20 space-y-10'>
                </div>
                <Paragraph className='mt-20'>Next, if you are seeking financing for your business, you’ll need to complete the next part of your plan – Funding Request.</Paragraph>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-7' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <Heading4>Funding Request</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <Paragraph>If you are seeking funding for your business venture, use this section to outline your requirements.<br/><br/>
                
                Your funding request should include the following information:</Paragraph>
                <div className='flex flex-row items-center space-x-20'>
                  <div className='grid grid-cols-12 gap-y-5'>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Your current funding requirement</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Company Information covers when your business was formed, the names of the founders and their roles, your number of employees, and your business location(s).</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Growth Highlights include examples of company growth, such as financial or market highlights (for example, “XYZ Firm increased profit margins and market share year-over-year since its foundation). Graphs and charts can be helpful in this section.</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Briefly describe the Products/Services that you provide.</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>For funding, Financial Information may include any information about your current bank and investors.</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>A Summary of Future Plans explaining where you would like to take your business in the future.</Paragraph>
                  </div>
                  <img src='/img-assets/start-a-business/create-business-plan/fund-request-1.png' />
                </div>
                <Paragraph>When you are outlining your funding requirements, include the amount you want now and the amount you want in the future. Also include the time period that each request will cover, the type of funding you would like to have (e.g., equity, debt), and the terms that you would like to have applied.<br/><br/>

                To support your funding request you’ll also need to provide historical and prospective financial information.<br/><br/>

                Once you have completed your funding request, move on to the next part of your plan –Financial Projections.</Paragraph>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-8' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <Heading4>Financial Projections</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <Paragraph>You should develop the Financial Projections section after you’ve analyzed the market and set clear objectives. That’s when you can allocate resources efficiently. The following is a list of the critical financial statements to include in your business plan packet.</Paragraph>
                <div className='flex justify-center'>
                  <img src='/img-assets/start-a-business/create-business-plan/financial-projection.png' />
                </div>
                {/*  */}
                <Heading5>Historical Financial Data</Heading5>
                <Paragraph>If you own an established business, you will be requested to supply historical data related to your company’s performance. Most creditors request data for the last three to five years, depending on the length of time you have been in business.<br/><br/>

                The historical financial data to include are your company’s income statements, balance sheets, and cash flow statements for each year you have been in business (usually for up to three to five years). Often, creditors are also interested in any collateral that you may have that could be used to ensure your loan, regardless of the stage of your business.</Paragraph>
                {/*  */}
                <Heading5>Prospective Financial Data</Heading5>
                <Paragraph>All businesses, whether startup or growing, will be required to supply prospective financial data. Most of the time, creditors will want to see what you expect your company to be able to do within the next five years. Each year’s documents should include forecasted income statements, balance sheets, cash flow statements, and capital expenditure budgets. For the first year, you should supply monthly or quarterly projections. After that, you can stretch it to quarterly and/or yearly projections for years two through five.<br/><br/>

                Make sure that your projections match your funding requests; creditors will be on the lookout for inconsistencies. It’s much better if you catch mistakes before they do. If you have made assumptions in your projections, be sure to summarize what you have assumed. This way, the reader will not be left guessing.<br/><br/>

                Finally, include a short analysis of your financial information. Include a ratio and trend analysis for all of your financial statements (both historical and prospective). Since pictures speak louder than words, you may want to add graphs of your trend analysis (especially if they are positive).<br/><br/><br/><br/>

                Next, you may want to include an Appendix to your plan. This can include items such as your credit history, resumes, letters of reference, and any additional information that a lender may request.</Paragraph>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-9' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <Heading4>Appendix</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <Paragraph>The Appendix should be provided to readers on an as-needed basis. In other words, it should not be included with the main body of your business plan. Your plan is your communication tool; as such, it will be seen by a lot of people. Some of the information in the business section you will not want everyone to see, but specific individuals (such as creditors) may want access to this information to make lending decisions. Therefore, it is important to have the appendix within easy reach.</Paragraph>
                {/*  */}
                <Paragraph>The appendix would include:</Paragraph>
                <div className='flex flex-row items-center space-x-20'>
                  <div className='grid grid-cols-12 gap-y-5'>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Credit history (personal & business)</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Resumes of key managers</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Product pictures</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Letters of reference</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Details of market studies</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Relevant magazine articles or book references</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Licenses, permits or patents</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Legal documents</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Copies of leases</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Building permits</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Contracts</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>List of business consultants, including attorney and accountant</Paragraph>
                  </div>
                  <img src='/img-assets/start-a-business/create-business-plan/appendix.png' />
                </div>
                {/*  */}
                <Paragraph className='mt-20'>Any copies of your business plan should be controlled; keep a distribution record. This will allow you to update and maintain your business plan on an as-needed basis. Remember, too, that you should include a private placement disclaimer with your business plan if you plan to use it to raise capital.</Paragraph>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-10' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <Heading4>How to Make Your Business Plan Stand Out</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <Paragraph>One of the first steps to business planning is determining your target market and why they would want to buy from you.<br/><br/>

                For example, is the market you serve the best one for your product or service? Are the benefits of dealing with your business clear and are they aligned with customer needs? If you’re unsure about the answers to any of these questions, take a step back and revisit the foundation of your business plan.</Paragraph>
                <div className='flex justify-center'>
                  <img src='/img-assets/start-a-business/create-business-plan/business-plan-1.png' />
                </div>
                <Paragraph>The following tips can help you clarify what your business has to offer, identify the right target market for it and build a niche for yourself.</Paragraph>
                {/*  */}
                <Heading5>Be Clear About What You Have to Offer</Heading5>
                <Paragraph>Ask yourself: Beyond basic products or services, what are you really selling? Consider this example: Your town probably has several restaurants all selling one fundamental product—food. But each is targeted at a different need or clientele.<br/><br/>

                One might be a drive-thru fast food restaurant, perhaps another sells pizza in a rustic Italian kitchen, and maybe there’s a fine dining seafood restaurant that specializes in wood-grilled fare. All these restaurants sell meals, but they sell them to targeted clientele looking for the unique qualities each has to offer. What they are really selling is a combination of product, value, ambience and brand experience.<br/><br/>

                When starting a business, be sure to understand what makes your business unique. What needs does your product or service fulfill? What benefits and differentiators will help your business stand out from the crowd?</Paragraph>
                {/*  */}
                <Heading5>Don’t Become a Jack of All Trades-Learn to Strategize</Heading5>
                <Paragraph>It’s important to clearly define what you’re selling. You do not want to become a jack-of-all trades and master of none because this can have a negative impact on business growth. As a smaller business, it’s often a better strategy to divide your products or services into manageable market niches. Small operations can then offer specialized goods and services that are attractive to a specific group of prospective buyers.</Paragraph>
                {/*  */}
                <Heading5>Identify Your Niche</Heading5>
                <Paragraph>Creating a niche for your business is essential to success. Often, business owners can identify a niche based on their own market knowledge, but it can also be helpful to conduct a market survey with potential customers to uncover untapped needs. During your research process, identify the following:</Paragraph>
                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Which areas your competitors are already well-established</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Which areas are being ignored by your competitors</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Potential opportunities for your business</Paragraph>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  )
}