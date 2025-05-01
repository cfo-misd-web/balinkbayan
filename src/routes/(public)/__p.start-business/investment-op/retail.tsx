import { createFileRoute } from '@tanstack/react-router'
import Paragraph from '@/components/user/shared/paragraph'
import BiggerBanner from '@/components/user/shared/banner/bigger-banner'
import Heading4 from '@/components/user/shared/headings/heading-4'
import Heading5 from '@/components/user/shared/headings/heading-5'
import { Separator } from '@radix-ui/react-separator'

export const Route = createFileRoute(
  '/(public)/__p/start-business/investment-op/retail',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <BiggerBanner text='Business Opportunities in the PH' label='Retail' img_url='/img-assets/start-a-business/retail/shopping-receipt-business-2614155.jpg' />
      <section className='text-cyan-900'>
        <div className='max-lg:mx-4 3xl:max-w-[1400px] 2xl:max-w-[1280px] lg:max-w-[1080px]flex items-center mx-auto my-20 bg-light space-y-20'>
          <Paragraph>The National Statistics Office (NSO) defines retail trade as the resale of new and used goods for personal and household consumption. Retailers are not engaged in production and manufacture of products. Instead, they buy in bulk or wholesale and sell repacked products.<br/><br/>

          As of 2012, the majority of the micro, small, and medium enterprises (MSMEs) in operation are in the wholesale and retail trade, repair of motor vehicles and motorcycle industries. The proliferation of retail business establishments is attributed to demand of their products which constitute the core of household spending of a typical Filipino. Retail business shows a great potential as a business and investment opportunity.</Paragraph>
          <div className='flex flex-row space-x-20'>
            <div className='w-full'>
              <div className='grid grid-cols-6 gap-y-5'>
                <Heading5 className='col-start-2 col-span-5'>Advantages</Heading5>
                <Paragraph className='text-center'>&#8226;</Paragraph>
                <Paragraph className='col-span-5'><b>High Demand</b>: Retail businesses cater to most Filipino families</Paragraph>
                <Paragraph className='text-center'>&#8226;</Paragraph>
                <Paragraph className='col-span-5'><b>Low Capitalization</b>: Retail trade requires smaller initial capital than other type of businesses</Paragraph>
              </div>
            </div>
            <div className='w-full'>
              <div className='grid grid-cols-6 gap-y-5'>
                <Heading5 className='col-start-2 col-span-5'>Disadvantages</Heading5>
                <Paragraph className='text-center'>&#8226;</Paragraph>
                <Paragraph className='col-span-5'><b>Stringent Competition</b>: Large-scale companies continue to expand in different regions in the country which in turn compete in the market share of retail stores</Paragraph>
              </div>
            </div>
          </div>
          {/*  */}
          <Paragraph><b>How to start a retail business?</b><br/><br/>
          
          <div className='grid grid-cols-12 gap-y-5'>
            <Paragraph className='text-center'>1.</Paragraph>
            <Paragraph className='col-span-11'>Register the Business Name at the Department of Trade and Industry (for Single Proprietorships) or the Securities and Exchange Commission (for Partnerships and Corporations).<br/><br/>

            The business name is valid for five years. The law governing the registration of business name is Act No. 3883, as amended by Act No. 41476 and R.A. No. 863, otherwise known as the Business Name Law.
            </Paragraph>
            <Paragraph className='text-center'>2.</Paragraph>
            <Paragraph className='col-span-11'>Get a Mayor’s permit from the municipality or city where the business is located. The permit is valid for one year.</Paragraph>
            <Paragraph className='text-center'>3.</Paragraph>
            <Paragraph className='col-span-11'>Apply for an Employer’s Tax Identification Number (TIN) at the Bureau of Internal Revenue (BIR).</Paragraph>
            <Paragraph className='text-center'>4.</Paragraph>
            <Paragraph className='col-span-11'>Apply for Authority to Print Receipts and Invoices at the BIR.</Paragraph>
            <Paragraph className='text-center'>5.</Paragraph>
            <Paragraph className='col-span-11'>Investors should register for a Social Security System (SSS) Certificate.</Paragraph>
            <Paragraph className='text-center'>6.</Paragraph>
            <Paragraph className='col-span-11'>For businesses with five or more employees, owners must register with the Department of Labor and Employment (DOLE).</Paragraph>
          </div>
          </Paragraph>
          {/*  */}
          <Paragraph><b>What are the opportunities in the retail sector?</b><br/><br/>
          
          <div className='grid grid-cols-12 gap-y-5'>
            <Paragraph className='text-center'>1.</Paragraph>
            <Paragraph className='col-span-11'>HARDWARE AND CONSTRUCTION SUPPLY STORE.<br/><br/>

            PDF from TRC titled Setting up a Hardware and Construction Supply Store.</Paragraph>
          </div>
          </Paragraph>
          {/*  */}
          <Paragraph className='italic font-light text-center'><b>Source</b>: National Statistics Office, Department of Trade and Industry</Paragraph>
        </div>
      </section>
    </>
  )
}