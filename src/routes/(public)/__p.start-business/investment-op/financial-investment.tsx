import { createFileRoute } from '@tanstack/react-router'
import Paragraph from '@/components/user/shared/paragraph'
import BiggerBanner from '@/components/user/shared/banner/bigger-banner'
import Heading4 from '@/components/user/shared/headings/heading-4'
import Heading5 from '@/components/user/shared/headings/heading-5'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { AccordionHeader } from '@radix-ui/react-accordion'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'

export const Route = createFileRoute(
  '/(public)/__p/start-business/investment-op/financial-investment',
)({
  component: RouteComponent,
})

function RouteComponent() {
  const savingAccounts = [
    {
      advantagesTitle: "Easy access of funds",
      advantagesDesc: ": Savings accounts allow the withdrawal of funds at any time in accordance with bank regulation.",
      disadvantagesTitle: "Low return",
      disadvantagesDesc: ": Savings accounts generally have the lowest return in comparison with other types of investments.",
    },
    {
      advantagesTitle: "Low initial investment",
      advantagesDesc: ": Savings account require low investment amount to start with.",
      disadvantagesTitle: "Low maintaining balance",
      disadvantagesDesc: ": Savings account require minimum balance requirement.",
    },
    {
      advantagesTitle: "Low risk",
      advantagesDesc: ": Savings accounts are insured by the Philippine Deposit Insurance Corporation (PDIC).",
      disadvantagesTitle: "Insurance limitation",
      disadvantagesDesc: ": PDIC only insures accounts up to P500,000 per depositor.",
    },
    {
      advantagesTitle: "Flexibility with minimal charges",
      advantagesDesc: ": Savings accounts allow automatic deductions for bill-pay and minimal monthly fees.",
      disadvantagesTitle: "",
      disadvantagesDesc: "",
    },
  ]
  const demandDeposits = [
    {
      advantagesTitle: "Safety",
      advantagesDesc: ": Demand deposits are insured by the PDIC.",
      disadvantagesTitle: "Transaction fees",
      disadvantagesDesc: "Demand deposits come with an array of fees that an account holder may incur. A demand deposit is not a credit line. Issuing checks should be backed by a maintain balance in a current account. It is a criminal liability to issue bouncing checks.",
    },
    {
      advantagesTitle: "Easy transaction",
      advantagesDesc: ": Demand deposit holders have access to banking products such as online and mobile banking, ATMs, debit cards and checks to make purchase or withdraw funds from the account.",
      disadvantagesTitle: "Withdrawal limitations",
      disadvantagesDesc: "Demand deposits are subjected to maximum withdrawal.",
    },
    {
      advantagesTitle: "",
      advantagesDesc: "",
      disadvantagesTitle: "Maintaining balance and penalty fees",
      disadvantagesDesc: "Demand deposits require minimum balance and charge a fee if the account balance is lower than minimum.",
    },
  ]
  const timeDeposits = [
    {
      advantagesTitle: "High interest rate",
      advantagesDesc: "Time deposits earn slightly higher interest rate than savings account",
      disadvantagesTitle: "Deposits are not easily accessible",
      disadvantagesDesc: "Money in time deposits is locked away until the maturity date. There are associated penalty if the time deposits are withdrawn before maturity.",
    },
    {
      advantagesTitle: "Low risk",
      advantagesDesc: "Time deposits have assured return of investment",
      disadvantagesTitle: "",
      disadvantagesDesc: "",
    },
    {
      advantagesTitle: "Low minimum investment",
      advantagesDesc: "Time deposits require small amount of starting investment",
      disadvantagesTitle: "",
      disadvantagesDesc: "",
    },
  ]
  const foreignCurrencyDeposits = [
    {
      advantagesTitle: "Easy access of funds",
      advantagesDesc: "Foreign currency deposit allows withdrawal of funds at any time in accordance to bank regulation",
      disadvantagesTitle: "Low return",
      disadvantagesDesc: "Foreign currency deposit generally have the lowest return in comparison with other types of investments.",
    },
    {
      advantagesTitle: "Low investment",
      advantagesDesc: "Foreign currency deposit require low investment amount to start with.",
      disadvantagesTitle: "Minimum balance",
      disadvantagesDesc: "Foreign currency deposit require minimum balance requirement",
    },
    {
      advantagesTitle: "Low risk",
      advantagesDesc: "Foreign currency deposit are insured by the PDIC.",
      disadvantagesTitle: "Insurance limitations",
      disadvantagesDesc: "The PDIC only insures accounts up to P500,000",
    },
    {
      advantagesTitle: "Low transaction cost",
      advantagesDesc: "Foreign currency deposit allow automatic deductions for bill–pay and minimal monthly fees.",
      disadvantagesTitle: "Withdrawal limitations",
      disadvantagesDesc: "Banks charge fees and limit withdrawals of foreign money in hard currency in accordance to the Anti–Money Laundering Act",
    },
  ]

  // 
  // 
  return (
    <>
      <BiggerBanner text='Financial Investments' label='Manage a Business' img_url='/img-assets/start-a-business/leading-company/managing-a-business.jpg' />
      <section className='text-cyan-900'>
        <div className='max-lg:mx-0 mx-4 3xl:max-w-[1400px] 2xl:max-w-[1280px] lg:max-w-[1080px] flex flex-col items-center justify-center my-20 bg-light'>
          <Paragraph>A financial investment is a document that states the legal obligation of an investor to transfer something of value to another investor at a future date, under certain conditions. Investors put their money in financial investments in the hopes of growing their money. Financial investments however carry varying degrees of risk. Individuals who are planning to invest in these types of opportunities should therefore properly assess their risk and return.<br/><br/>

          In the Philippines, financial investments are issued by bank, non-bank institutions and the Philippine National Government. Banks offer a variety of financial products and services that are specific to the needs of their clients. Non-bank institutions represent private corporations and other financial investments that also sell financial investments. The Philippine National Government, on the other hand, offers securities and financial options to the public.<br/><br/>

          <span className='italic font-light'>Source: “Money, Banking, and Financial Markets” by Cecchetti Schoenholtz</span>
          </Paragraph>
        </div>
        <div className='max-lg:mx-4 3xl:max-w-[1400px] 2xl:max-w-[1280px] lg:max-w-[1080px] flex flex-col items-center justify-center mx-auto my-20 bg-light'>
          <Heading4 className='text-center'>Financial Investments</Heading4>
        </div>
        <Heading5 className='max-lg:mx-4 mx-auto w-full max-w-3xl'>Bank</Heading5>
        <div className='bg-cyan-900 max-lg:px-4 text-white w-full flex items-center flex-col justify-center py-5 mb-32 mt-10'>
          <Accordion type='single' collapsible className='max-lg:mx-4 mx-auto w-full max-w-3xl'>
            <AccordionItem value='item-1' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <Heading4>Savings</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <div className='flex flex-row items-center space-x-20'>
                  <img src='/img-assets/start-a-business/financial-investments/how-do-you-earn.png' />
                  <Paragraph><b>Savings</b> are the most basic type of deposit instrument with low interest rates. They are mostly used for safekeeping purposes.</Paragraph>
                  <img src='/img-assets/start-a-business/financial-investments/savings.png' />
                </div>
                <Paragraph>Savings accounts are interest bearing.</Paragraph>
                <Table className='table-fixed'>
                  <TableHeader className='border-1'>
                    <TableRow>
                      <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                        <Heading5>Advantages</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center py-8">
                        <Heading5>Disadvantages</Heading5>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className='border-1 '>
                    {savingAccounts.map((i,idx) => (
                      <TableRow key={idx}>
                        <TableCell className='border-r-1 border-gray-400'><b>{i.advantagesTitle}</b> {i.advantagesDesc}</TableCell>
                        <TableCell><b>{i.disadvantagesTitle}</b>{i.disadvantagesDesc}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-2' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <Heading4>Demand Deposits</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <div className='flex flex-row items-center space-x-20'>
                  <Paragraph><b>Demand deposits</b>, which are commonly known as current/checking account, are simple deposit instruments with no interest. This instrument is used to settle payments/ obligations by issuing checks which are backed by a maintaining balance in a current account. Demand deposits also create a detailed documentation of payments and transactions.</Paragraph>
                  <img src='/img-assets/start-a-business/financial-investments/demand-deposits.png' />
                </div>
                <Table className='table-fixed'>
                  <TableHeader className='border-1'>
                    <TableRow>
                      <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                        <Heading5>Advantages</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center py-8">
                        <Heading5>Disadvantages</Heading5>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className='border-1 '>
                    {demandDeposits.map((i,idx) => (
                      <TableRow key={idx}>
                        <TableCell className='border-r-1 border-gray-400'><b>{i.advantagesTitle}</b> {i.advantagesDesc}</TableCell>
                        <TableCell><b>{i.disadvantagesTitle}</b>{i.disadvantagesDesc}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-3' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <Heading4>Time deposits</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <div className='flex flex-row items-center space-x-20'>
                  <img src='/img-assets/start-a-business/financial-investments/how-do-you-earn.png' />
                  <Paragraph><b>Time deposits</b> are savings instruments that offer slightly higher interest than savings account. The fixed rate is based on current market situation. No withdrawals should be made during the placement period. Interest is earned at the end maturity period.</Paragraph>
                  <img src='/img-assets/start-a-business/financial-investments/time-deposits.png' />
                </div>
                <Paragraph>Time deposits are interest bearing.</Paragraph>
                <Table className='table-fixed'>
                  <TableHeader className='border-1'>
                    <TableRow>
                      <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                        <Heading5>Advantages</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center py-8">
                        <Heading5>Disadvantages</Heading5>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className='border-1 '>
                    {timeDeposits.map((i,idx) => (
                      <TableRow key={idx}>
                        <TableCell className='border-r-1 border-gray-400'><b>{i.advantagesTitle}</b> {i.advantagesDesc}</TableCell>
                        <TableCell><b>{i.disadvantagesTitle}</b>{i.disadvantagesDesc}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-4' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <Heading4>Foreign Currency Deposits</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <div className='flex flex-row items-center space-x-20'>
                  <img src='/img-assets/start-a-business/financial-investments/how-do-you-earn.png' />
                  <Paragraph><b>Foreign Currency Deposit</b> is a savings instrument similar to a peso savings account which allows depositors to earn interest. The interest rate of foreign currency deposit fluctuates in accordance with the foreign exchange.</Paragraph>
                  <img src='/img-assets/start-a-business/financial-investments/foreign-currency-deposits.png' />
                </div>
                <Paragraph>Dollar Savings Account are interest bearing.</Paragraph>
                <Table className='table-fixed'>
                  <TableHeader className='border-1'>
                    <TableRow>
                      <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                        <Heading5>Advantages</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center py-8">
                        <Heading5>Disadvantages</Heading5>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className='border-1 '>
                    {foreignCurrencyDeposits.map((i,idx) => (
                      <TableRow key={idx}>
                        <TableCell className='border-r-1 border-gray-400'><b>{i.advantagesTitle}</b> {i.advantagesDesc}</TableCell>
                        <TableCell><b>{i.disadvantagesTitle}</b>{i.disadvantagesDesc}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </AccordionContent>
            </AccordionItem>
            {/* TODO */}
            {/* TODO */}
            {/* TODO */}
            {/* TODO */}
            {/* TODO */}
            {/* TODO */}
            {/* TODO */}
            {/* TODO */}
            {/* TODO */}
            {/* TODO */}
            {/* TODO */}
            {/* TODO */}
            {/* TODO */}
            {/* TODO */}
            {/* TODO */}
            {/* TODO */}
            {/* TODO */}
            {/* TODO */}
            {/* TODO */}
            <AccordionItem value='item-4' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <Heading4>Foreign Currency Deposits</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <div className='flex flex-row items-center space-x-20'>
                  <img src='/img-assets/start-a-business/financial-investments/how-do-you-earn.png' />
                  <Paragraph><b>Foreign Currency Deposit</b> is a savings instrument similar to a peso savings account which allows depositors to earn interest. The interest rate of foreign currency deposit fluctuates in accordance with the foreign exchange.</Paragraph>
                  <img src='/img-assets/start-a-business/financial-investments/foreign-currency-deposits.png' />
                </div>
                <Paragraph>Dollar Savings Account are interest bearing.</Paragraph>
                <Table className='table-fixed'>
                  <TableHeader className='border-1'>
                    <TableRow>
                      <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                        <Heading5>Advantages</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center py-8">
                        <Heading5>Disadvantages</Heading5>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className='border-1 '>
                    {foreignCurrencyDeposits.map((i,idx) => (
                      <TableRow key={idx}>
                        <TableCell className='border-r-1 border-gray-400'><b>{i.advantagesTitle}</b> {i.advantagesDesc}</TableCell>
                        <TableCell><b>{i.disadvantagesTitle}</b>{i.disadvantagesDesc}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  )
}