import { createFileRoute } from '@tanstack/react-router'
import Paragraph from '@/components/user/shared/paragraph'
import BiggerBanner from '@/components/user/shared/banner/bigger-banner'
import Heading4 from '@/components/user/shared/headings/heading-4'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { AccordionHeader } from '@radix-ui/react-accordion'

export const Route = createFileRoute(
  '/(public)/__p/start-business/small-enterprise-knowledge-center/manage-business/getting-out',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <BiggerBanner text='Getting Out' label='Manage a Business' img_url='/img-assets/start-a-business/leading-company/managing-a-business.jpg' />
      <section className='text-cyan-900'>
        <div className='max-lg:mx-4 3xl:max-w-[1400px] 2xl:max-w-[1280px] lg:max-w-[1080px] flex flex-col items-center justify-center mx-auto my-20 bg-light'>
          <Paragraph className='mb-32'>The Small Enterprise Knowledge Center provides a complete guide in starting and managing a business. Through the basic business modules, the Center aims to equip you with knowledge on the key aspects of a business. All materials published in the Center were based from the U.S. Small Business Administration website (www.sba.gov) and adapted to suit the local Philippine situation and laws.</Paragraph>
          <Heading4 className='text-center'>Getting Out</Heading4>
          <Paragraph className='mt-10'>Are you thinking about starting a business of your own? Explore the modules below to learn the aspects of starting a business and find ways on how to succeed.</Paragraph>
        </div>
        <div className='bg-cyan-900 max-lg:px-4 text-white w-full flex items-center flex-col justify-center py-5 mb-32'>
          <Accordion type='single' collapsible className='max-lg:mx-4 mx-auto w-full max-w-3xl'>
            <AccordionItem value='item-1' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <Heading4>Plan Your Exit</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <Paragraph className='mt-5'>Before you retire and hand over your business legacy, it is essential to plan and develop a business exit strategy to ensure your life’s achievement is in good hands. Formulating a succession plan has a significant role and could influence on long-term business profitability. It is necessary to consult your lawyer and a business expert as well to explore all the best alternatives.<br /><br />

                  Thus, business owners should consider these steps in planning your succession:<br /><br />

                  <div className='grid grid-cols-12 gap-y-5'>
                    <Paragraph className='text-center'>1.</Paragraph>
                    <Paragraph className='col-span-11'><b>Choose your successor</b>: Succession should begin 15 years before you plan to retire. Consult and seek the advice of your board of directors to help you determine a qualified candidate.</Paragraph>
                    <Paragraph className='text-center'>2.</Paragraph>
                    <Paragraph className='col-span-11'><b>Formulate a formal training plan for your successor</b>: In preparing a plan, determine the key functions of the company and immerse your successor on the depth and breadth of the business operation.</Paragraph>
                    <Paragraph className='text-center'>3.</Paragraph>
                    <Paragraph className='col-span-11'><b>Set a timeframe</b>: Establish a training timetable and a timetable for shifting control of the company. This will help your successor to be motivated to move through his or her training program quickly and successfully.</Paragraph>
                    <Paragraph className='text-center'>4.</Paragraph>
                    <Paragraph className='col-span-11'><b>Prepare yourself for retirement</b>: Start your retirement plan early. This plan may encompass recreation, travel, community service or another business venture.</Paragraph>
                    <Paragraph className='text-center'>5.</Paragraph>
                    <Paragraph className='col-span-11'><b>Install your successor</b>: Prepare your successor to perform the roles and responsibilities for which he or she has been trained.</Paragraph>
                  </div>
                </Paragraph>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-2' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <Heading4>Steps to Closing a Business</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <Paragraph className='mt-5'>If you deem to leave or close your business, follow the recommended steps below in closing your business:<br /><br />

                  <div className='grid grid-cols-12 gap-y-5'>
                    <Paragraph className='text-center'>1.</Paragraph>
                    <Paragraph className='col-span-11'><b>Decide to close a business</b>: Unlike sole proprietorship, co-owners of a partnership or a corporation must make a consensus to dissolve the entity in accordance to the established organizational guidelines. Put the final decision in a written agreement.</Paragraph>
                    <Paragraph className='text-center'>2.</Paragraph>
                    <Paragraph className='col-span-11'><b>Seek for professional advice</b>: Closing a business involves tedious and multi-step process. Thus, it is better to seek an expert advice from lawyers, accountants, business brokers, auctioneers, tax experts and bankers.</Paragraph>
                    <Paragraph className='text-center'>3.</Paragraph>
                    <Paragraph className='col-span-11'><b>File termination documents</b>: It is best to formally notify the government and creditors of the change. Failure to legally dissolve your corporation will held you liable for taxes and fillings.</Paragraph>
                    <Paragraph className='text-center'>4.</Paragraph>
                    <Paragraph className='col-span-11'>Cancellation of registrations, permits, licenses and business names.</Paragraph>
                    <Paragraph className='text-center'>5.</Paragraph>
                    <Paragraph className='col-span-11'><b>Comply with employment and labor laws</b>: Employees are entitled to have a security of tenure. Final paychecks must be paid to employees by their last day of work or soon after.</Paragraph>
                    <Paragraph className='text-center'>6.</Paragraph>
                    <Paragraph className='col-span-11'><b>Resolve financial obligations</b>: Go to your Revenue District Office to know more the steps on how to close your Employer Tax Identification Number (TIN) and payroll tax responsibilities.</Paragraph>
                    <Paragraph className='text-center'>7.</Paragraph>
                    <Paragraph className='col-span-11'><b>Keep your records</b>: Even after closing your business, maintain records, particularly tax and employment records.</Paragraph>
                  </div>
                </Paragraph>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-3' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <Heading4>Selling Your Business</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <Paragraph className='mt-5'>Another exit strategy that you might want to consider is selling your business. To formally sell your business to prospect buyers, you will need to prepare a sales agreement. This is an essential document in acquiring business assets or stock of a corporation. In this agreement, you should define all the terms of the purchase, particularly business, assets, customer lists, intellectual property and goodwill.<br /><br />

                  Below is the checklist of items that should be undertaken in the agreement:<br /><br />

                  <div className='grid grid-cols-12 gap-y-5'>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Names of seller, buyer and business</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Background Information</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Assets being sold</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Purchase price and assets allocation</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Covenant Not to Compete</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Any adjustments to be made</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Terms of agreement and Payment Terms</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>List of inventory included in the sale</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Seller and buyer warranties</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Determination as to the access to any business information</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Determination as to the running of the business prior to closing</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Contingencies</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Fees, including broker fees</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Closing date</Paragraph>
                  </div>
                </Paragraph>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-4' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <Heading4>Transfer Ownership</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <Paragraph className='mt-5'>Usually, business owners turnover their family business to the next generation. It can help to provide business security, prepare for tax obligations, and ease of ownership transfer. But for some reasons and circumstances, they opt to transfer the ownership to another person or entity. There are several options that needs to be considered when it comes to transferring ownership rights:<br /><br />

                  <div className='grid grid-cols-12 gap-y-5'>
                    <Paragraph className='text-center'>1.</Paragraph>
                    <Paragraph className='col-span-11'><b>Outright sale</b><br />Selling a business in full will speed up the process of ownership transfer and payment for your assets.</Paragraph>
                    <Paragraph className='text-center'>2.</Paragraph>
                    <Paragraph className='col-span-11'><b>Gradual sale</b><br />This type of transfer ownership is a flexible option for individuals who cannot afford outright sale. As the business owner transfer the ownership rights, he/she has not to worry about managing his business but is still receiving a monthly income from the gradual sale.</Paragraph>
                    <Paragraph className='text-center'>3.</Paragraph>
                    <Paragraph className='col-span-11'><b>Lease agreement</b><br />Through a lease agreement, an individual will commit to a contract that details the terms of conditions and payments that will be receive for the temporary rights to the business.</Paragraph>
                  </div>
                </Paragraph>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-5' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <Heading4>Legal Resources for Exiting</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <Paragraph>These laws below would serve as a guide for business owners to comply with the basic laws for conducting and exiting a business:</Paragraph>
                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'><b>Labor Code of the Philippines (Presidential Decree No. 442)</b>: this governs the employment practices and labor relations.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'><b>Tax Reform Act of 1997 (R.A. No. 8424)</b>: this governs the national taxation in the Philippines and gives the Bureau of Internal Revenue the authority to assess and collect national internal revenue taxes.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'><b>Home Development Mutual Fund Law of 2009 (R.A. No. 9679)</b>: this mandates employers to register their business and their employees with the Pag-Ibig Fund</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'><b>Social Security Act of 1997 (R.A. No. 8282)</b>: this mandates employers to register their business and their employees with the Social Security System (SSS).</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'><b>Civil Law of the Philippines (R.A. No 386)</b>: this is the civil code of the Philippines which includes the laws on obligations and contracts. This law also governs special contracts such as contract of agency and partnership.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'><b>National Health Insurance Act of 1995 (R.A. No. 7875)</b>: this mandate employers to register their business and their employees with the Philippine Health Insurance Corporation or PhilHealth</Paragraph>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-6' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <Heading4>Liquidating Assets</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <Paragraph>If you have decided to get out of the business yet you are not able to transfer or sell it, liquidating your assets might be a viable strategy for you. Understanding the liquidation process is essential to help you recover your assets and pursue future undertakings.<br /><br />

                  Here are the steps to liquidate your assets:<br /><br />

                  <div className='grid grid-cols-12 gap-y-5'>
                    <Paragraph className='text-center'>1.</Paragraph>
                    <Paragraph className='col-span-11'>Talk to your lawyer or accountant.</Paragraph>
                    <Paragraph className='text-center'>2.</Paragraph>
                    <Paragraph className='col-span-11'>Examine your assets. Make an inventory and prepare each item for sale.</Paragraph>
                    <Paragraph className='text-center'>2.</Paragraph>
                    <Paragraph className='col-span-11'>Secure your merchandise.</Paragraph>
                    <Paragraph className='text-center'>4.</Paragraph>
                    <Paragraph className='col-span-11'>Set the asset liquidation value. With the help of an eligible appraiser, secure a written liquidation value appraisal before entertaining offers.</Paragraph>
                    <Paragraph className='text-center'>5.</Paragraph>
                    <Paragraph className='col-span-11'>Calculate and estimate net sales proceeds. Ascertain that a sale is worthwhile.</Paragraph>
                    <Paragraph className='text-center'>6.</Paragraph>
                    <Paragraph className='col-span-11'>If a liquidation sale seems worthwhile, choose what type of sale for your merchandise. Having a public auction would be suitable for most business ass.</Paragraph>
                    <Paragraph className='text-center'>7.</Paragraph>
                    <Paragraph className='col-span-11'>Determine the best timing or season that will be convenient and will attract customers to buy your merchandise.</Paragraph>
                    <Paragraph className='text-center'>8.</Paragraph>
                    <Paragraph className='col-span-11'>Find the most appropriate venue or location to hold your sale that will have an impact on your net proceeds. Usually, it is best to hold your sale on your business premises.</Paragraph>
                    <Paragraph className='text-center'>9.</Paragraph>
                    <Paragraph className='col-span-11'>Choose an expert to conduct your sale. It may be an auctioneer, a dealer, a broker, etc.</Paragraph>
                    <Paragraph className='text-center'>10.</Paragraph>
                    <Paragraph className='col-span-11'>Use a non-recourse bill of sale.</Paragraph>
                  </div>
                </Paragraph>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  )
}