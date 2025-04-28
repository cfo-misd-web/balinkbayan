import { createFileRoute } from '@tanstack/react-router'
import Paragraph from '@/components/user/shared/paragraph'
import BiggerBanner from '@/components/user/shared/banner/bigger-banner'
import Heading4 from '@/components/user/shared/headings/heading-4'
import Heading5 from '@/components/user/shared/headings/heading-5'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { AccordionHeader } from '@radix-ui/react-accordion'
import RoseAnchor from '@/components/user/shared/anchors/rose-anchor'

export const Route = createFileRoute(
  '/(public)/__p/start-business/small-enterprise-knowledge-center/start-a-business/thinking-about-it',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <BiggerBanner text='Thinking about starting a business?' label='Start a Business' img_url='/img-assets/start-a-business/thinking-about-it/starting-a-business.jpg' />
      <section className='text-cyan-900'>
        <div className='max-lg:mx-4 3xl:max-w-[1400px] 2xl:max-w-[1280px] lg:max-w-[1080px] flex flex-col items-center justify-center mx-auto my-20 bg-light'>
          <Paragraph className='mb-32'>The Small Enterprise Knowledge Center provides a complete guide in starting and managing a business. Through the basic business modules, the Center aims to equip you with knowledge on the key aspects of a business. All materials published in the Center were based from the U.S. Small Business Administration website (www.sba.gov) and adapted to suit the local Philippine situation and laws.</Paragraph>
          <Heading4 className='text-center'>Starting a Business</Heading4>
          <Paragraph className='mt-10'>Are you thinking about starting a business of your own? Explore the modules below to learn the aspects of starting a business and find ways on how to succeed.</Paragraph>
        </div>
        <div className='bg-cyan-900 max-lg:px-4 text-white w-full flex items-center flex-col justify-center py-5 mb-32'>
          <Accordion type='single' collapsible className='max-lg:mx-4 mx-auto w-full max-w-3xl'>
            <AccordionItem value='item-1' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <Heading4>Is Entrepreneurship For You?</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <div className='flex flex-row items-center space-x-20'>
                  <img src='/img-assets/start-a-business/thinking-about-it/what-does-it-take-to-be-an-entrepreneur-1.png' />
                  <div>
                    <Heading5>What does it take to be an entrepreneur?</Heading5>
                    <Paragraph className='mt-5'>Starting your own business has numerous advantages such as being your own boss, setting your own schedule and making a living by doing something you enjoy. But, it requires thorough planning, creativity and hard work.<br /><br />

                      These have been determined to be the personal traits and behaviors of a successful entrepreneur.</Paragraph>
                  </div>
                </div>
                <div className='flex justify-center ml-20'>
                  <img src='/img-assets/start-a-business/thinking-about-it/traits-entrepreneur.png'></img>
                </div>
                {/*  */}
                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>a.</Paragraph>
                  <Paragraph className='col-span-11'><b>Willing to take risks</b>: Successful entrepreneurs are risk takers who have all gotten over one very significant hurdle: they are not afraid of failure. They also accept that, even if they make the best decision possible, things don’t always go according to plan and may fail anyhow. Entrepreneurship involves uncertainty. Successful entrepreneurs deliberately calculate risks and evaluate alternatives. Again, there’s not one successful entrepreneur out there sitting on his couch asking, “what if?”</Paragraph>
                  <Paragraph className='text-center'>b.</Paragraph>
                  <Paragraph className='col-span-11'><b>Self-sufficient</b>: Successful entrepreneurs are capable to decide on their own. If you enjoy challenges, will work tirelessly to solve problems that confront you and if you are not afraid of rejections — you could be on your way to being an entrepreneur.</Paragraph>
                  <Paragraph className='text-center'>c.</Paragraph>
                  <Paragraph className='col-span-11'><b>Convincing</b>: Persuasion is a skill, like riding a bicycle that you can learn through study and practice. Your job is to become absolutely excellent at influencing and motivating others to support and assist you in achieving your goals and solving your problems.You may have the greatest idea in the world, but if you cannot persuade customers, employees and potential lenders or partners it is nonsense. Your persuasion power will earn you the support and respect of others.</Paragraph>
                  <Paragraph className='text-center'>d.</Paragraph>
                  <Paragraph className='col-span-11'><b>Master the art of negotiations</b>: In business, negotiation skills are used daily. Always remember that mastering the art of negotiation means that your skills are so finely tuned that you can always orchestrate a win-win situation. These win-win arrangements mean that everyone involved feels they have won, which is really the basis for building long-term and profitable business relationships.</Paragraph>
                  <Paragraph className='text-center'>e.</Paragraph>
                  <Paragraph className='col-span-11'><b>Innovative</b>: Entrepreneurs are almost defined by their drive to constantly develop new ideas. Can you imagine new ways to solve problems? Entrepreneurs must be able to think creatively. If you have insights on how to take advantage of new opportunities, entrepreneurship may be a good fit.</Paragraph>
                  <Paragraph className='text-center'>f.</Paragraph>
                  <Paragraph className='col-span-11'><b>Supported by others</b>: In the first months of your business you will be forced to make important decisions. Therefore, you will need a strong support network of people that will help you. Also, consider looking for someone who is willing to provide advice and guidance, a business mentor can be one.</Paragraph>
                </div>
                {/*  */}
                <Heading5>20 Questions to ask yourself before starting a business:</Heading5>
                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>1.</Paragraph>
                  <Paragraph className='col-span-11'>Why am I starting a business?</Paragraph>
                  <Paragraph className='text-center'>2.</Paragraph>
                  <Paragraph className='col-span-11'>What kind of business do I want?</Paragraph>
                  <Paragraph className='text-center'>3.</Paragraph>
                  <Paragraph className='col-span-11'>Who is my ideal customer?</Paragraph>
                  <Paragraph className='text-center'>4.</Paragraph>
                  <Paragraph className='col-span-11'>What products or services will my business provide?</Paragraph>
                  <Paragraph className='text-center'>5.</Paragraph>
                  <Paragraph className='col-span-11'>Am I ready to spend the time and money needed to get my business started?</Paragraph>
                  <Paragraph className='text-center'>6.</Paragraph>
                  <Paragraph className='col-span-11'>What makes my business idea and the products or services I will provide different from others in the market?</Paragraph>
                  <Paragraph className='text-center'>7.</Paragraph>
                  <Paragraph className='col-span-11'>Where will be my business located?</Paragraph>
                  <Paragraph className='text-center'>8.</Paragraph>
                  <Paragraph className='col-span-11'>How many employees do I need?</Paragraph>
                  <Paragraph className='text-center'>9.</Paragraph>
                  <Paragraph className='col-span-11'>What types of suppliers do I need?</Paragraph>
                  <Paragraph className='text-center'>10.</Paragraph>
                  <Paragraph className='col-span-11'>How much capital do I need to start?</Paragraph>
                  <Paragraph className='text-center'>11.</Paragraph>
                  <Paragraph className='col-span-11'>Will I need to get a loan?</Paragraph>
                  <Paragraph className='text-center'>12.</Paragraph>
                  <Paragraph className='col-span-11'>How soon will it take before my products or services are available?</Paragraph>
                  <Paragraph className='text-center'>13.</Paragraph>
                  <Paragraph className='col-span-11'>How long do I have until I start making a profit?</Paragraph>
                  <Paragraph className='text-center'>14.</Paragraph>
                  <Paragraph className='col-span-11'>Who are my competitors?</Paragraph>
                  <Paragraph className='text-center'>15.</Paragraph>
                  <Paragraph className='col-span-11'>How will I price my product compared to my competition?</Paragraph>
                  <Paragraph className='text-center'>16.</Paragraph>
                  <Paragraph className='col-span-11'>How will I set up the legal structure of my business?</Paragraph>
                  <Paragraph className='text-center'>17.</Paragraph>
                  <Paragraph className='col-span-11'>What taxes do I need to pay?</Paragraph>
                  <Paragraph className='text-center'>18.</Paragraph>
                  <Paragraph className='col-span-11'>What kind of insurance do I need?</Paragraph>
                  <Paragraph className='text-center'>19.</Paragraph>
                  <Paragraph className='col-span-11'>How will I manage my business?</Paragraph>
                  <Paragraph className='text-center'>20.</Paragraph>
                  <Paragraph className='col-span-11'>How will I market my business?</Paragraph>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-2' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <Heading4>10 Steps to Starting a Business</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <div className='flex flex-row items-center space-x-20'>
                  <img src='/img-assets/start-a-business/thinking-about-it/10-steps.png' />
                  <div>
                    <Paragraph>Starting a business involves planning, making key financial decisions and completing a series of legal activities. These 10 easy steps can help you plan, prepare and manage your business.</Paragraph>
                  </div>
                </div>
                {/*  */}
                <div className='mt-20 space-y-5'>
                  <Heading5><RoseAnchor href_url=''>STEP 1: Write a Business Plan</RoseAnchor></Heading5>
                  <Paragraph className=''>Use these tools and resources to create a business plan. This written guide will help you map out how you will start and run your business successfully.</Paragraph>
                  <Heading5><RoseAnchor href_url=''>STEP 2: Get Business Assistance and Training</RoseAnchor></Heading5>
                  <Paragraph className=''>Take advantage of free training and counseling services, from preparing a business plan and securing financing, to expanding or relocating a business.</Paragraph>
                  <Heading5><RoseAnchor href_url=''>STEP 3: Choose a Business Location</RoseAnchor></Heading5>
                  <Paragraph className=''>Get advice on how to select a customer-friendly location and comply with zoning laws.</Paragraph>
                  <Heading5><RoseAnchor href_url=''>STEP 4: Finance Your Business</RoseAnchor></Heading5>
                  <Paragraph className=''>Find government backed loans, venture capital and research grants to help you get started.</Paragraph>
                  <Heading5><RoseAnchor href_url=''>STEP 5: Determine the Legal Structure of Your Business</RoseAnchor></Heading5>
                  <Paragraph className=''>Decide which form of ownership is best for you: sole proprietorship, partnership, Limited Liability Company (LLC), corporation, S corporation, nonprofit or cooperative.</Paragraph>
                  <Heading5><RoseAnchor href_url=''>STEP 6: Register a Business Name (“Doing Business As”)</RoseAnchor></Heading5>
                  <Paragraph className=''>Register your business name.</Paragraph>
                  <Heading5><RoseAnchor href_url=''>STEP 7: Get a Tax Identification Number</RoseAnchor></Heading5>
                  <Paragraph className=''>Learn which tax identification number you’ll need to obtain from the BIR.</Paragraph>
                  <Heading5><RoseAnchor href_url=''>STEP 8: Register for State and Local Taxes</RoseAnchor></Heading5>
                  <Paragraph className=''>Register with your state to obtain a tax identification number, workers’ compensation, unemployment and disability insurance.</Paragraph>
                  <Heading5><RoseAnchor href_url=''>STEP 9: Obtain Business Licenses and Permits</RoseAnchor></Heading5>
                  <Paragraph className=''>Get a list of licenses and permits required for your business.</Paragraph>
                  <Heading5><RoseAnchor href_url=''>STEP 10: Understand Employer Responsibilities</RoseAnchor></Heading5>
                  <Paragraph className=''>Learn the legal steps you need to take to hire employees.</Paragraph>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-3' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <Heading4>Understand Your Market</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <Paragraph className='mt-5'>(Bureau of Micro, Small and Medium Enterprise Development)<br /><br />

                  In starting your business, it is important to assess your external environment. It is often very dynamic in nature since it can be influenced by various factors such as political-legal, economic, technological, and intra-industry structures.<br /><br />

                  Conducting an evaluation of your external environment is necessary to decrease the threats and take advantage of the opportunities in the market. Market research is an essential tool that you can use to better understand your business environment. In applying this technique, there are five steps that you must follow.</Paragraph>
                <Heading5>1. Segmenting the market</Heading5>
                <Paragraph className='mt-5'>You must learn how to divide prospective buyers into groups which have common needs and are expected to respond similarly to a marketing action.<br /><br />

                  A market can be categorized based on the following attributes: geographic (region of the world or country, size of country, climate), demographic (population – age, gender, sexual orientation, income, occupation, education, etc.), psychographic (personality, lifestyle, values, and attitudes), or behavioral (product, benefit sought, rate usage, brand loyalty, readiness-to-buy stage, etc.)<br /><br />

                  Market segmentation can be effectively employed by visiting places where products similar to what you plan to produce or service you intend to provide are being sold. This strategy will allow you to gain important insights by observing the current market condition of a business that is similar to what you have in mind.</Paragraph>
                <Heading5>2. Targeting</Heading5>
                <div className='flex flex-row space-x-20 items-center'>
                  <img src='/img-assets/start-a-business/thinking-about-it/target-1.png' />
                  <Paragraph>After segmenting the market, you can now choose which among the segments or groups you plan to focus on. Targeting is a marketing skill which allows you to identify the specific type of buyers or users, you intend to cater to. It is recommended to target one segment at a time to allow you to focus your resources on the specific segment of the market.</Paragraph>
                </div>
                <Heading5>3. Understanding Your Target</Heading5>
                <div className='flex flex-row space-x-20 items-center'>
                  <Paragraph>When you have set a specific target, you can now develop your skills in understanding your target market. In doing this, you can use market research. It involves the collection and analysis of information on the movement of goods or services from the producer to the consumer.</Paragraph>
                  <img src='/img-assets/start-a-business/thinking-about-it/understand-target.png' />
                </div>
                <Paragraph>Low-cost market research can be conducted by using the following tools:<br /><br />

                  Survey is a process of collecting a sample of data or opinions from a group that can be considered to represent a whole on a product or service. It is commonly composed of a list of questions to ask to a sample of the target market.  It is also conducted using printed questionnaires, interviews, or polls.<br /><br />

                  Focus group discussion (FGD) is an organized discussion of people from the target market who will talk about the issues and concerns about the possible product or service. The success of an FGD is mostly dependent on the facilitator who will moderate and will draw out the ideas and feedback from the members of the target market.<br /><br />

                  Observation is a process of paying close attention or taking a patient look at a sample of the target market. One of the simplest methods used is the so called contextual observation that entails studying or monitoring a sample of the target market in the context of a product or service.<br /><br />

                  The effectiveness of market research is not only dependent on its execution but mostly reliant on the questions asked. Generally, inquires on why people do what they do (motivation or intention) and how they do what they do (process) are included in market surveys.</Paragraph>
                <Heading5>4. Analyzing the Competition</Heading5>
                <div className='flex flex-row space-x-20 items-center'>
                  <img src='/img-assets/start-a-business/thinking-about-it/analyze-competition-1.png' />
                  <Paragraph>After identifying your target market, you can now proceed to understanding other businesses that are making similar products or offering the same services as with your business. This process aims to provide additional information on why the target market buys or might buy from the competition, what the competitor’s marketing is, and why the target market is buying or will buy from the competitor.</Paragraph>
                </div>
                <Heading5>5. Estimating Potential Market Demand</Heading5>
                <div className='flex flex-row space-x-20 items-center'>
                  <Paragraph>One of the most critical parts of a market survey is the estimation of potential market demand. It is a marketing skill that creates a significant impact on forecasting sales, sales growth, and capital, machine, and manpower requirements. Essentially, the estimated potential market demand is the numerical representation of how well you understand the market.  A very simple way that is used in estimating demand is through retrieving factual data from national consensus.</Paragraph>
                  <img src='/img-assets/start-a-business/thinking-about-it/market-demand.png' />
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-4' className='border-b'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <Heading4>Business Data and Statistics</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <Paragraph className='mt-5'>Business research and planning initiatives require the collection of relevant statistics and data. These resources provide necessary input to understand the external environment where your business will operate. It will better equip you with information on your customers, market, and other factors that can affect your business.<br /><br />

                  The Philippine Statistics Authority (PSA) is an attached agency of the National Economic and Development Authority. It is also the highest policy-making body on statistical matters. The agency produces official and controlling statistics of the government. Primarily, PSA is in-charge of all national censuses and surveys, sectoral statistics, consolidation of selected administrative recording systems and compilation of national accounts.</Paragraph>
                <div className='flex justify-center'>
                  <img src='/img-assets/start-a-business/thinking-about-it/statistics.png' />
                </div>
                {/*  */}
                <Paragraph className='mt-20'>The PSA produces and compiles the following data which are subdivided into four categories:</Paragraph>
                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'><b>Economic</b>: Economic indicators include national accounts, regional accounts, input output tables, quarterly economic indices, leading economic indicators, foreign investments, tourism satellite accounts.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'><b>Environment</b>: Environment indicators are economic-environmental and natural resource accounts.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'><b>Governance</b>: PeGovernance indicators consist of good governance index and indigenous people’s rights.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'><b>Social</b>: Social indicators comprise statistics on poverty, human development index, national health accounts, national education expenditure accounts, gender and development, and children.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'><b>Multisectoral</b>: Multisectoral data include publications such as Millennium Development Goals, Statistical Indicators on Philippine Development, and Economic and Financial Data of the Philippines.</Paragraph>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  )
}