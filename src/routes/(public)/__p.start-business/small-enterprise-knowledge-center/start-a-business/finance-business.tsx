import { createFileRoute } from '@tanstack/react-router'
import Paragraph from '@/components/user/shared/paragraph'
import BiggerBanner from '@/components/user/shared/banner/bigger-banner'
import Heading4 from '@/components/user/shared/headings/heading-4'
import Heading5 from '@/components/user/shared/headings/heading-5'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { AccordionHeader } from '@radix-ui/react-accordion'

export const Route = createFileRoute(
  '/(public)/__p/start-business/small-enterprise-knowledge-center/start-a-business/finance-business',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <BiggerBanner text='Finance Your Business (Tracking your Finance)' label='Start a Business' img_url='/img-assets/start-a-business/thinking-about-it/starting-a-business.jpg' />
      <section className='text-cyan-900'>
        <div className='max-lg:mx-4 3xl:max-w-[1400px] 2xl:max-w-[1280px] lg:max-w-[1080px] flex flex-col items-center justify-center mx-auto my-20 bg-light'>
          <Paragraph className='mb-32'>The Small Enterprise Knowledge Center provides a complete guide in starting and managing a business. Through the basic business modules, the Center aims to equip you with knowledge on the key aspects of a business. All materials published in the Center were based from the U.S. Small Business Administration website (www.sba.gov) and adapted to suit the local Philippine situation and laws.</Paragraph>
          <Heading4 className='text-center'>Finance Your Business (Tracking your Finance)</Heading4>
          <Paragraph className='mt-10'>Are you thinking about starting a business of your own? Explore the modules below to learn the aspects of starting a business and find ways on how to succeed.</Paragraph>
        </div>
        <div className='bg-cyan-900 max-lg:px-4 text-white w-full flex items-center flex-col justify-center py-5 mb-32'>
          <Accordion type='single' collapsible className='max-lg:mx-4 mx-auto w-full max-w-3xl'>
            <AccordionItem value='item-1' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <Heading4>Estimating Startup Costs</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <Paragraph className='mt-5'>Determining your budgetary needs is a critical stage in starting your business.<br /><br />

                  Every business is unique and carries a specific cash needs at different stages of development. Thus, there is no universal method for estimating your start-up costs. The budget varies depending on the type of your business. Some can start on small budget while others need large investments such as for long-term equipment and acquisition or renovation of a building.</Paragraph>
                <div className='flex justify-center'>
                  <img src='/img-assets/start-a-business/finance-business/10-Budget-02.png' />
                </div>
                {/*  */}
                <Paragraph className='mt-5'>In computing for your startup costs, calculate an estimate of the cost you will acquire for the first months of operation. These expenses are either <b>one-time costs</b>, such as the fee of incorporating your business, or <b>ongoing costs</b>, such as cost of utilities, inventory, insurance, etc. After recognizing these costs, identify whether they are <b>important</b> or <b>optional</b>. A realistic startup budget should only include items that are important to start your business.<br /><br />

                  Important expenses are categorized as fixed and variable. <b>Fixed expenses</b> are rent, utilities, administrative costs and insurance costs. <b>Variable expenses</b> are inventory, shipping and packaging costs, sales commissions, and other costs associated with the direct sale of a product or service.<br /><br />

                  The most effective method to estimate your start-up costs is to use a worksheet that identifies your business’ one-time and ongoing costs.</Paragraph>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-2' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <Heading4>Using Personal Finances</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <div className='flex justify-center'>
                  <img src='/img-assets/start-a-business/finance-business/11-PersonalFinance-02.png' />
                </div>
                <Paragraph>One common source of start-up budget is your personal finance. This approach, however, can result to tremendous strain on your personal fund since it takes time before your new business earns profit. It is hence important to organize your personal finance.<br /><br />

                  Start by writing a monthly household budget that includes your income and your household expenses. Be conservative in handling your household expenses because it will also determine the success of your business. Any problem on your personal budget directly risks your business.<br /><br />

                  It is important to build a strong personal credit history because it will serve as the basis of your lenders and suppliers in determining your terms of credit.</Paragraph>
                {/*  */}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-3' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <Heading4>Preparing Financial Statements</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <Paragraph>Financial statements serve as roadmap in directing businesses towards the right direction. Their value extends beyond preparing tax returns or applying for loans. The following paragraphs discuss the basic components of primary financial statements: the balance sheet and the income statement.</Paragraph>
                {/*  */}
                <Heading5>Balance Sheet</Heading5>
                <div className='flex flex-row items-center space-x-20'>
                  <Paragraph>The balance sheet is the summary of your business financials. It mainly includes assets, and liabilities and net worth (assets = liabilities + net worth). Balance sheet items change daily and reflect the activities of your business. It can help you understand and develop your business by providing relevant financial information such as your ability to collect revenues, manage your inventory, and asses your ability to satisfy creditors.<br /><br />

                    Liabilities and net worth are sources of funds that are collected from creditors and investors. Liabilities are obligations to creditors while net worth are the owner’s investment in the business. Creditors and owners are both considered as “investors” in the business, although, they are repaid in a different timeframe. They are also important in sustaining and expanding your business operation.</Paragraph>
                  <img src='/img-assets/start-a-business/finance-business/marketing-plan-1.png' />
                </div>
                <Paragraph>Consequently, assets represent the use of funds. The cash or other funds provided by creditors of investors are used to acquire assets. These include things of value that are acquired and owned or due to a business.</Paragraph>
                {/*  */}
                <div className='flex justify-center'>
                  <img src='/img-assets/start-a-business/finance-business/12-Assets-02.png' />
                </div>
                <Heading5>Assets</Heading5>
                <Paragraph>Current Assets mature in less than one year. They are the sum of:</Paragraph>
                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'><b>Cash</b>: Cash is used to pay for bills and obligations. It includes all checking, money market and short-term savings account.</Paragraph>
                </div>
                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'><b>Accounts Receivable (A/R)</b>: Accounts receivables are money due from customers. When the inventory is sold, an invoice is sent to the customer, and cash is collected at later time. The receivable exists for the time period between the sale of inventory and the receipt of cash.</Paragraph>
                </div>
                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'><b>Inventory</b>: Inventory represents products purchased by a business to resell at a profit. Businesses buy raw material inventory to be processed. It is eventually sold as finished goods inventory. When inventory is sold, it doesn’t bring cash immediately to a business but it creates receivable. Once the receivables are collected, cash returns to the business. Thus, inventory must be well managed to avoid keeping too much cash tied up in inventory. A business must also maintain sufficient inventory to prevent stockouts (having nothing to sell) which may result in loss of profits and customers.</Paragraph>
                </div>
                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'><b>Notes Receivable (N/R)</b>: N/R is a claim due to the business as a result of making a loan. It is often a loan made by three stakeholders: customers who are unable to pay their invoice on time, employees or officers of business who are in need of financial support, such as down payment on home. However, officer borrowing is considered as the worst form of N/R since it reduces the business net worth.</Paragraph>
                </div>
                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'><b>Other current assets</b>: Other current assets represent prepaid expenses, other miscellaneous and current assets.</Paragraph>
                </div>
                {/*  */}
                <div className='flex justify-center'>
                  <img src='/img-assets/start-a-business/finance-business/13-FixedAssets-02.png' />
                </div>
                <Heading5>Fixed Assets</Heading5>
                <Paragraph>Fixed assets are acquired physical assets whose life exceeds one year. These include the following:</Paragraph>
                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Land</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Building</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Machinery and equipment</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Furniture and fixtures</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Leasehold improvements</Paragraph>
                </div>
                {/*  */}
                <Heading5>Total Assets</Heading5>
                <Paragraph>Total Assets is the sum of all the assets acquired and owned by or claims due to a business.</Paragraph>
                {/*  */}
                <div className='flex justify-center'>
                  <img src='/img-assets/start-a-business/finance-business/14-Debt-02.png' />
                </div>
                <Heading5>Liabilities and Net Worth</Heading5>
                <Paragraph><b>Current Liabilities</b>: Current liabilities are obligations that will mature and must be paid within 12 months. These liabilities are important especially when cash is inadequate. These will keep a business away from experiencing insolvency (incapacity to pay debt). Current creditors must always be satisfied to maintain a steady and important source of credit for short-term obligations.</Paragraph>
                <Paragraph>These include the following accounts:</Paragraph>
                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Accounts Payable (A/P) are obligations due to suppliers who have provided inventory, goods or services used in operating the business.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Accrued Expenses are obligations owed, but not billed, which include wages and payroll taxes, interest on a loan, or obligations accruing.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Notes Payables are obligations in the form of promissory notes which must be paid in less than 12 months.</Paragraph>
                </div>
                {/*  */}
                <Paragraph><b>Non-Current Liabilities</b>: Non-current liabilities are obligations that are due the following year. These include non-current portion of long-term debt, a portion of a term loan that is not due in a year; and notes payable to officers, shareholders or owners’ cash that they invest in the business.</Paragraph>
                <Paragraph><b>Total Liabilities</b>: Total liabilities represent the sum of all the obligations of business and claims of creditors on its assets.</Paragraph>
                <Paragraph><b>Equity</b>: Equity is the difference between total assets and total liabilities. It is the owners’ contribution in financing the assets of the business.</Paragraph>
                {/*  */}
                <div className='flex flex-row items-center space-x-20'>
                  <div className='space-y-10'>
                    <Heading5>Income Statement</Heading5>
                    <Paragraph>The income statement is another type of financial statement that includes all income and expense accounts over a period of time. It is also referred as the profit and loss statement since it shows how much money the business will make after expenses are deducted.</Paragraph>
                  </div>
                  <img src='/img-assets/start-a-business/finance-business/business-plan-1.png' />
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  )
}