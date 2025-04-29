import { createFileRoute } from '@tanstack/react-router'
import Paragraph from '@/components/user/shared/paragraph'
import BiggerBanner from '@/components/user/shared/banner/bigger-banner'
import Heading4 from '@/components/user/shared/headings/heading-4'
import Heading5 from '@/components/user/shared/headings/heading-5'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { AccordionHeader } from '@radix-ui/react-accordion'

export const Route = createFileRoute(
  '/(public)/__p/start-business/small-enterprise-knowledge-center/manage-business/growing-business',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <BiggerBanner text='Growing Your Business' label='Manage a Business' img_url='/img-assets/start-a-business/leading-company/managing-a-business.jpg' />
      <section className='text-cyan-900'>
        <div className='max-lg:mx-4 3xl:max-w-[1400px] 2xl:max-w-[1280px] lg:max-w-[1080px] flex flex-col items-center justify-center mx-auto my-20 bg-light'>
          <Paragraph className='mb-32'>The Small Enterprise Knowledge Center provides a complete guide in starting and managing a business. Through the basic business modules, the Center aims to equip you with knowledge on the key aspects of a business. All materials published in the Center were based from the U.S. Small Business Administration website (www.sba.gov) and adapted to suit the local Philippine situation and laws.</Paragraph>
          <Heading4 className='text-center'>Growing Your Company</Heading4>
          <Paragraph className='mt-10'>Are you thinking about starting a business of your own? Explore the modules below to learn the aspects of starting a business and find ways on how to succeed.</Paragraph>
        </div>
        <div className='bg-cyan-900 max-lg:px-4 text-white w-full flex items-center flex-col justify-center py-5 mb-32'>
          <Accordion type='single' collapsible className='max-lg:mx-4 mx-auto w-full max-w-3xl'>
            <AccordionItem value='item-1' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <Heading4>Forecasting for Growth</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <Paragraph className='mt-5'>Strategic thinking is a key skill to be an effective leader. It is defined as the process where you transform your business vision into reality by enhancing your teamwork, problem solving and critical thinking abilities. It also helps you become flexible to change, adaptive during transitions, and receptive to new opportunities.<br/><br/>

                In developing a strategic vision for your business, you must consider and focus on five different criteria to determine your ideal outcome and the steps necessary to attain your business vision.</Paragraph>
                {/*  */}
                <div className='flex justify-center'>
                  <img src='/img-assets/start-a-business/growing-business/meeting.png' />
                </div>
                <Heading5>Organization</Heading5>
                <Paragraph>The organization of your business comprised your employees, the structure of your business and your resources. In creating and developing your organization, you must be able to answer the following questions: (1) how will your organization appear like? (2) what type of structure is aligned with your vision? (3) how will you harmoniously combine people, structure, and resources to attain your ideal outcome?</Paragraph>
                {/*  */}
                <Heading5>Observation</Heading5>
                <Paragraph>Strategic thinking allows you to perceive key aspects of your business in a bigger picture. Enhancing your observation skill will help you gain more insight on what motivates your people, how to solve problems effectively, and how to determine your alternatives.</Paragraph>
                {/*  */}
                <Heading5>Views</Heading5>
                <Paragraph>Views give different ways of thinking about something. Strategic thinking permits you too consider four viewpoints, which includes the environmental view, the marketplace view, the project view, and the measurement view. Views are important tools in determining your outcomes and critical elements as well as in creating flexible actions to achieve your ideal position.</Paragraph>
                {/*  */}
                <Heading5>Driving Forces</Heading5>
                <Paragraph>Driving forces are the key elements of the business, specifically, the area where you want people to focus on in your business. These include individual and organizational incentives; empowerment and alignment; qualitative factors (defined vision, values, and goals); productive factors (mission or function); quantitative factors (results or experience); and others such as commitment, coherent action, effectiveness, productivity and value.</Paragraph>
                {/*  */}
                <Heading5>Ideal Position</Heading5>
                <Paragraph>The first four phase of strategic thinking will allow you to arrive at your ideal position. The outline of your ideal position includes: the conditions necessary to attain productivity; present and future opportunities; the core competencies of your business; and the strategies and tactics which you will apply to attain your ideal position.</Paragraph>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-2' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <Heading4>Using Technology to Stay Competitive</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <Paragraph>Over time, markets will change that will create new competition. As business environment change, business owners must aim to stay competitive by understanding and using advanced technologies. Some of the technologies which you can adopt in your business are the following:</Paragraph>
                <div className='flex flex-row space-x-20 items-center'>
                  <div className='grid grid-cols-12 gap-y-5'>
                    <Paragraph className='text-center'>1.</Paragraph>
                    <Paragraph className='col-span-11'>Accounting software provides a brief profile of your profits and losses. It also allows you to create and maintain a budget for your business.</Paragraph>
                    <Paragraph className='text-center'>2.</Paragraph>
                    <Paragraph className='col-span-11'>Planning software or tools offers calendar system to keep your schedule organized. Many of which are available online.</Paragraph>
                    <Paragraph className='text-center'>3.</Paragraph>
                    <Paragraph className='col-span-11'>Time tracking software arranges tasks based on how they generate profit in order to determine what tasks can be eliminated, outsourced, or improved.</Paragraph>
                    <Paragraph className='text-center'>4.</Paragraph>
                    <Paragraph className='col-span-11'>Email management allows streamlining of different emails to one account in order to stay systematic and well-informed of your emails.</Paragraph>
                    <Paragraph className='text-center'>5.</Paragraph>
                    <Paragraph className='col-span-11'>Mobile internet access helps you maintain a positive reputation for your business, specifically, showing that you are accessible, timely, and proficient.</Paragraph>
                  </div>
                  <img src='/img-assets/start-a-business/growing-business/technology-1.png' />
                </div>
                <Paragraph>Through choosing appropriate technologies for your business, you are working towards increasing efficiency and expanding operations.</Paragraph>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-3' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <Heading4>Ideas for Growing Your Business</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <Paragraph className='mt-5'>There are many ways that you can do to help your business grow. The following are 10 strategies which you can apply based on the type of business you own, your available resources, and how much additional time, money and resources you’re willing to put.</Paragraph>
                <div className='flex flex-row space-x-20 items-center'>
                  <div className='grid grid-cols-6 gap-y-5'>
                    <Paragraph className='text-center'>1.</Paragraph>
                    <Paragraph className='col-span-5'>Open another location. If your current business location is successful, try to expand your business in a new location.</Paragraph>
                    <Paragraph className='text-center'>2.</Paragraph>
                    <Paragraph className='col-span-5'>Offer your business a franchise or business opportunity. Franchising your business will offer expansion without the need to manage the new location.</Paragraph>
                    <Paragraph className='text-center'>3.</Paragraph>
                    <Paragraph className='col-span-5'>License your product. Licensing is considered as an effective, low risk, low-cost growth method for business offering service product or branded product.</Paragraph>
                    <Paragraph className='text-center'>4.</Paragraph>
                    <Paragraph className='col-span-5'>Form an alliance. Arranging yourself with a similar type of business can be an easy yet effective method to expand.</Paragraph>
                  </div>
                  <img src='/img-assets/start-a-business/growing-business/business-location-1.png' />
                </div>
                <div className='grid grid-cols-12 gap-y-5'>
                    <Paragraph className='text-center'>5.</Paragraph>
                    <Paragraph className='col-span-11'>Diversifying allows you to minimize your risk as well as establish multiple sources of income. These are the common ways to diversify.
                      <div className='grid grid-cols-12 gap-y-5'>
                        <Paragraph className='text-center'>a.</Paragraph>
                        <Paragraph className='col-span-11'>Sell complementary products or services</Paragraph>
                        <Paragraph className='text-center'>b.</Paragraph>
                        <Paragraph className='col-span-11'>Import or export yours or others’ products</Paragraph>
                        <Paragraph className='text-center'>c.</Paragraph>
                        <Paragraph className='col-span-11'>Become a paid speaker, consultant or columnist</Paragraph>
                      </div>
                    </Paragraph>
                  <Paragraph className='text-center'>6.</Paragraph>
                  <Paragraph className='col-span-11'>Target other markets. If your current market is serving you well, look for another potential market that could use your product.</Paragraph>
                  <Paragraph className='text-center'>7.</Paragraph>
                  <Paragraph className='col-span-11'>Win a government contract. Another way to expand your business is to find potential customers such as the government.</Paragraph>
                  <Paragraph className='text-center'>8.</Paragraph>
                  <Paragraph className='col-span-11'>Merge with or acquire another business. Find companies which are similar to yours or offers complementary goods to yours, and discover the benefits of acquiring or merging with that business.</Paragraph>
                  <Paragraph className='text-center'>9.</Paragraph>
                  <Paragraph className='col-span-11'>Expand globally. Expand your market by exploring international locations where you can offer your products and services. In line with this, find a potential foreign distributor who can help you in the supplying your product and reselling it in their domestic markets.</Paragraph>
                  <Paragraph className='text-center'>10.</Paragraph>
                  <Paragraph className='col-span-11'>Expand to the Internet. Maximize your exposure through the internet, which offers lower cost and accessibility.</Paragraph>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-4' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <Heading4>Developing a Marketing Plan</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <div className='flex flex-row items-center space-x-20'>
                  <Paragraph className='mt-5'>Creating a strong marketing plan does not only assure timely delivery of your objectives but also evaluates your spending strategy. It comprised all key aspects of your business from understanding your target market and identifying your competitive position to determining your tactics to reach the market and differentiate yourself from the competition. Additionally, marketing budget must be included in your marketing plan in order to specify the corresponding cost to achieve your marketing goals within the timeframe.</Paragraph>
                  <img src='/img-assets/start-a-business/growing-business/marketing-plan-1.png' />
                </div>
                <Paragraph>Your marketing plan is your guide in managing your business. However, when unforeseen changes arise, you must learn to bend your budget while still keeping an eye on your return on investment (ROI). The plan will serve as your foundation in measuring the impact of your marketing activities and tactics. It will help you decipher tactics that worked and aid you to eliminate those that didn’t work.<br/><br/>

                Marketing plans are usually updated on an annual basis, at a minimum. When you offer a new product or service, try to review your original plan or create a separate plan which you can incorporate to your original marketing plan.</Paragraph>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-5' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <Heading4>Financing Growth</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
              <Paragraph className='mt-5'>Injecting additional capital is a vital component to grow your business. There is a wide range of lending mechanism which you can avail. However, seeking additional financial assistance will require you again to undergo the qualification process. To prepare for this, you can answer the following question to have a better understanding on your business’s financing needs:</Paragraph>
                <div className='flex flex-row items-center space-x-20'>
                  <div className='grid grid-cols-6 gap-y-5'>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-5'>Do you need more capital or can you manage existing cash flow more effectively?</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-5'>How do you define your need? Do you need money to expand or as a cushion against risk?</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-5'>How urgent is your need? You can obtain the best terms when you anticipate your needs rather than looking for money under pressure.</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-5'>How great are your risks? All businesses carry risks, and the degree of risk will affect cost and available financing alternatives.</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-5'>In what state of development is your business? Needs are most critical during transitional stages.</Paragraph>
                  </div>
                  <img src='/img-assets/start-a-business/growing-business/financing.png' />
                </div>
                <div className='grid grid-cols-11 gap-y-5'>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-10'>For what purposes will the capital be used? Any lender will require that capital be requested for very specific needs.</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-10'>What is the state of your industry? Depressed, stable, or growth conditions require different approaches to money needs and sources. Businesses that prosper while others are in decline will often receive better funding terms.</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-10'>Is your business seasonal or cyclical? Seasonal needs for financing generally are short term. Loans advanced for cyclical industries, such as construction, are designed to support a business through depressed periods.</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-10'>How strong is your management team? Management is an important element assessed by lenders.</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-10'>How does your need for financing mesh with your business plan? If you don’t have a business plan, make writing one your first priority. All capital sources will want to see your business plan for the start-up and growth of your business.</Paragraph>
                  </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-6' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <Heading4>Build Your Own Franchise</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <Paragraph className='mt-5'>Franchising is a growth strategy which allows you to expand your business exponentially. It entails the replication of your business model by establishing a legal and commercial relationship with an individual or a group wishing to use your identification such as trademark, service mark, trade name, or advertising symbol.</Paragraph>
                <div className='flex justify-center'>
                  <img src='/img-assets/start-a-business/growing-business/franchise.png' />
                </div>
                <Paragraph>The franchise manual includes the business’s full range of services, such as site selection, training, product supply, marketing plans, as well as assistance in getting financing. Before developing your franchise manual, consider the following criteria to assess whether your business is viable for franchise.</Paragraph>
                <div className='grid grid-cols-6 gap-y-5'>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-5'>Your business should offer a superior product or service to engage potential franchisee</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-5'>Your business concept should be easy to share and teach since the manual must contain a detailed procedure for each key aspect of the business.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-5'>Your business should be easy to replicate with high potential to succeed in different locations.</Paragraph>
                </div>
                <Paragraph>If your business has a potential for franchise, work on the five steps to franchise development:<br/><br/>
                (1) Operations manual development<br/>
                (2) Franchise structure development<br/>
                (3) Franchise marketing<br/>
                (4) Franchise sales<br/>
                (5) Legal development<br/><br/>

                Each of these five steps requires the assistance of a specialist in order to properly carry out the process of building your own franchise</Paragraph>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  )
}