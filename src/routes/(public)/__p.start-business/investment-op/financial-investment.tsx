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
  // Bank
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
      disadvantagesDesc: ": Demand deposits come with an array of fees that an account holder may incur. A demand deposit is not a credit line. Issuing checks should be backed by a maintain balance in a current account. It is a criminal liability to issue bouncing checks.",
    },
    {
      advantagesTitle: "Easy transaction",
      advantagesDesc: ": Demand deposit holders have access to banking products such as online and mobile banking, ATMs, debit cards and checks to make purchase or withdraw funds from the account.",
      disadvantagesTitle: "Withdrawal limitations",
      disadvantagesDesc: ": Demand deposits are subjected to maximum withdrawal.",
    },
    {
      advantagesTitle: "",
      advantagesDesc: "",
      disadvantagesTitle: "Maintaining balance and penalty fees",
      disadvantagesDesc: ": Demand deposits require minimum balance and charge a fee if the account balance is lower than minimum.",
    },
  ]
  const timeDeposits = [
    {
      advantagesTitle: "High interest rate",
      advantagesDesc: ": Time deposits earn slightly higher interest rate than savings account",
      disadvantagesTitle: "Deposits are not easily accessible",
      disadvantagesDesc: ": Money in time deposits is locked away until the maturity date. There are associated penalty if the time deposits are withdrawn before maturity.",
    },
    {
      advantagesTitle: "Low risk",
      advantagesDesc: ": Time deposits have assured return of investment",
      disadvantagesTitle: "",
      disadvantagesDesc: "",
    },
    {
      advantagesTitle: "Low minimum investment",
      advantagesDesc: ": Time deposits require small amount of starting investment",
      disadvantagesTitle: "",
      disadvantagesDesc: "",
    },
  ]
  const foreignCurrencyDeposits = [
    {
      advantagesTitle: "Easy access of funds",
      advantagesDesc: ": Foreign currency deposit allows withdrawal of funds at any time in accordance to bank regulation",
      disadvantagesTitle: "Low return",
      disadvantagesDesc: ": Foreign currency deposit generally have the lowest return in comparison with other types of investments.",
    },
    {
      advantagesTitle: "Low investment",
      advantagesDesc: ": Foreign currency deposit require low investment amount to start with.",
      disadvantagesTitle: "Minimum balance",
      disadvantagesDesc: ": Foreign currency deposit require minimum balance requirement",
    },
    {
      advantagesTitle: "Low risk",
      advantagesDesc: ": Foreign currency deposit are insured by the PDIC.",
      disadvantagesTitle: "Insurance limitations",
      disadvantagesDesc: ": The PDIC only insures accounts up to P500,000",
    },
    {
      advantagesTitle: "Low transaction cost",
      advantagesDesc: ": Foreign currency deposit allow automatic deductions for bill–pay and minimal monthly fees.",
      disadvantagesTitle: "Withdrawal limitations",
      disadvantagesDesc: ": Banks charge fees and limit withdrawals of foreign money in hard currency in accordance to the Anti–Money Laundering Act",
    },
  ]
  const dollarCheckingAccount = [
    {
      advantagesTitle: "Safety",
      advantagesDesc: ": Dollar checking accounts are insured by the PDIC.",
      disadvantagesTitle: "Transaction fees",
      disadvantagesDesc: ": Many dollar checking accounts come with an array of fees that an account holder may incur.",
    },
    {
      advantagesTitle: "Easy transaction",
      advantagesDesc: ": Dollar checking account holders have access to bank products such as online and mobile banking, ATMs, debit cards and checks to make purchase or withdraw funds form the account.",
      disadvantagesTitle: "Withdrawal limitations",
      disadvantagesDesc: ": Dollar checking accounts are subjected to maximum withdrawal.",
    },
    {
      advantagesTitle: "",
      advantagesDesc: "",
      disadvantagesTitle: "Minimum balance",
      disadvantagesDesc: ": Dollar checking accounts require minimum balance and charge a fee if the account balance is lower than minimum.",
    },
  ]
  const longTermDeposits = [
    {
      advantagesTitle: "Safety",
      advantagesDesc: ": LTNCDs are covered by PDIC up to P250,000.",
      disadvantagesTitle: "High starting investment",
      disadvantagesDesc: ": LTNCDs require large sums of money for deposit.",
    },
    {
      advantagesTitle: "Easy access of funds",
      advantagesDesc: ": LTNCDs can be liquidated anytime at the current market price, but the investor has to pay withholding taxes if held for less than five years.",
      disadvantagesTitle: "",
      disadvantagesDesc: "",
    },
    {
      advantagesTitle: "Taxes",
      advantagesDesc: ": LTNCDs are not subjected to withholding tax if kept until maturity",
      disadvantagesTitle: "",
      disadvantagesDesc: "",
    },
  ]
  const unitInvestmentTrustFunds = [
    {
      advantagesTitle: "Easy access of funds",
      advantagesDesc: ": Investor’s share on the UITFs can be withdrawn and sold anytime. It can be converted to cash either by withdrawing or selling.",
      disadvantagesTitle: "Risky",
      disadvantagesDesc: ": Initial investments are not covered by the PDIC. There is no guaranteed rate of return because UITFs earn through the spread between the UITFs’ purchase price and selling price. Both prices are based on prevailing market prices.",
    },
    {
      advantagesTitle: "Diversification of Investment",
      advantagesDesc: ": UITFs allow investors to participate in various types of instruments because the pool of fund is invested in diversified financial instruments.",
      disadvantagesTitle: "",
      disadvantagesDesc: "",
    },
  ]
  // Government Securities
  const treasuryBills = [
    {
      advantagesTitle: "Secured",
      advantagesDesc: ": T-bills are some of the safest investments you can buy. The law requires the Treasury to pay them back.",
      disadvantagesTitle: "High starting investment",
      disadvantagesDesc: ": T-bills can be purchased at P100, 000.",
    },
    {
      advantagesTitle: "Low transaction cost",
      advantagesDesc: ": T-bills can be bought directly from the Treasury. In this case, the purchase of T-bills is fee-free and commission-free.",
      disadvantagesTitle: "Low return",
      disadvantagesDesc: ": T–bills offer relatively low return given their safety.",
    },
  ]
  const treasuryBonds = [
    {
      advantagesTitle: "Minimal risk",
      advantagesDesc: ": Treasury bonds are issued by the government, lending them certain stability. They are relatively safe.",
      disadvantagesTitle: "Early redemption limitations",
      disadvantagesDesc: ": Treasury bonds cannot be redeemed before maturity. They mature longer than T-bills.",
    },
  ]
  const retailTreasuryBonds = [
    {
      advantagesTitle: "Affordability",
      advantagesDesc: ": Retail Treasury Bonds can be purchased at P5, 000.",
      disadvantagesTitle: "Low interest",
      disadvantagesDesc: ": Retail Treasury Bonds offer relatively low interest given their safety.",
    },
    {
      advantagesTitle: "Minimal risk",
      advantagesDesc: ": Retail Treasury Bonds are issued by the government; therefore, they are fully backed. The government rarely defaults on a debt security.",
      disadvantagesTitle: "",
      disadvantagesDesc: "",
    },
    {
      advantagesTitle: "Liquidity",
      advantagesDesc: ": Retail Treasury Bonds can be traded in the secondary market prior to maturity.",
      disadvantagesTitle: "",
      disadvantagesDesc: "",
    },
  ]
  const dollarLinkedPesoNotes = [
    {
      advantagesTitle: "Minimal risk",
      advantagesDesc: ": Dollar Linked Peso are issued by the government; therefore, they are fully backed. The government rarely defaults on a debt security.",
      disadvantagesTitle: "Volatility",
      disadvantagesDesc: ": Dollar Linked Peso Notes are subjected to interest rate risk and foreign exchange risk. Payments of interest and principal are linked to the movement of the exchange rate.",
    },
  ]
  // Non-Bank Investments
  const corporateBonds = [
    {
      advantagesTitle: "Reliability of income",
      advantagesDesc: ": Investing in corporate bonds guarantees a steady flow of income until it reaches maturity.",
      disadvantagesTitle: "Possibility of issuer to default",
      disadvantagesDesc: ": The corporation that issued bonds can default on the promised repayments. This is when issuers fail to complete payments within the term. It may happen when the corporation experienced financial setbacks or went bankrupt.",
    },
    {
      advantagesTitle: "Safety",
      advantagesDesc: ": Corporations are evaluated and rated based on their credibility through audited financial statements and annual reports. Choosing the highest rated corporations is a prudent way of ensuring an investor’s safety. It is always wiser to study the market first before purchasing a corporate bond.",
      disadvantagesTitle: "Low liquidity",
      disadvantagesDesc: ": Individual bonds in general are long-term investments. Therefore, it is not readily convertible to cash.",
    },
    {
      advantagesTitle: "Variety",
      advantagesDesc: ": Depending on the investors’ preferences, they can choose to purchase corporate bonds from many different sectors.",
      disadvantagesTitle: "",
      disadvantagesDesc: "",
    },
    {
      advantagesTitle: "Marketability",
      advantagesDesc: ": The market for corporate bonds is large. Therefore, there are higher possibilities of selling corporate bonds than government and municipal bonds.",
      disadvantagesTitle: "",
      disadvantagesDesc: "",
    },
  ]
  const stocks = [
    {
      advantagesTitle: "High return",
      advantagesDesc: ": The stock market tends to fluctuate more often than other types of financial investments. In spite of this, it has higher growth in the long run and has the most potential for high returns.",
      disadvantagesTitle: "High risk",
      disadvantagesDesc: ": Stocks pose high risk because of fluctuation in the stock market.",
    },
    {
      advantagesTitle: "Liquidity",
      advantagesDesc: ": Investors can easily convert their shares to cash by reselling. Stocks are always readily sellable because the stock market is always active.",
      disadvantagesTitle: "Time consuming",
      disadvantagesDesc: ": Aside from investing money, investors also need to devote time in monitoring the stock market. Research is very important to know the movement of stock prices.",
    },
    {
      advantagesTitle: "Availability of Information",
      advantagesDesc: ": News on the stock market are being reported at all times because it is closely watched by investors all over the world. Investors can monitor the market through the internet, newspapers, and television news reports.",
      disadvantagesTitle: "",
      disadvantagesDesc: "",
    },
    {
      advantagesTitle: "Ownership",
      advantagesDesc: ": Investors have shares of ownership in a corporation.",
      disadvantagesTitle: "",
      disadvantagesDesc: "",
    },
  ]
  const mutualFunds = [
    {
      advantagesTitle: "Professional management",
      advantagesDesc: ": Investors have the benefit of having full-time investment managers who study the market and select products that have greatest potentials of high returns.",
      disadvantagesTitle: "Lack of control",
      disadvantagesDesc: ": Decisions are made by professional financial managers. Therefore, individual investors cannot direct the buying of shares.",
    },
    {
      advantagesTitle: "Diversification",
      advantagesDesc: ": Mutual funds are invested in many different securities including stocks and bonds.",
      disadvantagesTitle: "Uncertainty of returns",
      disadvantagesDesc: ": Philippine law forbids mutual funds to guarantee returns.",
    },
    {
      advantagesTitle: "Liquidity",
      advantagesDesc: ": It can be easily converted into cash because the fund itself can immediately buy the shares back within the current Net Asset Value per Share.",
      disadvantagesTitle: "Fees",
      disadvantagesDesc: ": Deductions such as management and redemption fees, and sales commissions are subtracted from the investor’s yield",
    },
    {
      advantagesTitle: "Safety",
      advantagesDesc: ": The Securities and Exchange Commission regulates mutual funds as stated in the Investment Company Act (Republic Act No. 2629). This protects current shareholders and assures potential investors.",
      disadvantagesTitle: "",
      disadvantagesDesc: "",
    },
    {
      advantagesTitle: "Potentially higher returns",
      advantagesDesc: ": Professional investment managers handle mutual funds. Compared to individual investors, these professional managers have skills and experience, which they use for the advantage of mutual funds.",
      disadvantagesTitle: "",
      disadvantagesDesc: "",
    },
    {
      advantagesTitle: "Tax exemption",
      advantagesDesc: ": The Comprehensive Tax Reform Program (CTRP) states that mutual funds are non-taxable to promote long-term savings in the Philippines.",
      disadvantagesTitle: "",
      disadvantagesDesc: "",
    },
  ]
  const cooperatives = [
    {
      advIntro: "Under the Republic Act 9520, registered cooperatives enjoy the following:",
      advantagesDesc: []
    },
    {
      advantagesTitle: "Government privileges",
      advantagesDesc: [
        {
          Desc: "- can deposit belongings in the safes of municipal or city treasurers and other government offices free of charge."
        },
        {
          Desc: "- cooperatives with government employees as members can freely use any available space in their agency."
        },
        {
          Desc: "- exemption from pre-qualification bidding requirements when transacting business with the Government of the Philippines."
        },
        {
          Desc: "- free provision of provincial or city fiscal representatives or the Office of the Solicitor General, except when the other party is the Republic of the Philippines."
        },
      ],
      disadvantagesTitle: "Lack of individual control",
      disadvantagesDesc: ": A member cannot decide on his/her own; all decisions should be agreed by majority of the members.",
    },
    {
      advantagesTitle: "Franchise",
      advantagesDesc: [
        {
          Desc: "Those that provide special services shall have a franchise. Individuals who are qualified to serve shall be allowed to be members."
        },
      ],
      disadvantagesTitle: "Conflict possibility",
      disadvantagesDesc: ": Not all members agree with each other.",
    },
    {
      advantagesTitle: "Preferential treatment",
      advantagesDesc: [
        {
          Desc: "- priority on fertilizer and rice provisions."
        },
        {
          Desc: "- those who produce agricultural commodities have the preferential right to supply government institutions."
        },
        {
          Desc: "- entitlement to management of public markets and lease of public market facilities."
        },
        {
          Desc: "- those with faculty member have rights in managing canteens and other services within the educational institution they are employed."
        },
      ],
      disadvantagesTitle: "Timely decision-making process",
      disadvantagesDesc: ": It may take a longer time to arrive on a decision.",
    },
    {
      advantagesTitle: "Loans",
      advantagesDesc: [
        {
          Desc: "They are entitled to loans, credit facilities, and other related services tied with:"
        },
        {
          Desc: "- Development Bank of the Philippines"
        },
        {
          Desc: "- Philippine National Bank"
        },
        {
          Desc: "- Land Bank of the Philippines"
        },
        {
          Desc: "- Other financial institutions except the Central Bank of the Philippines"
        },
      ],
    },
    {
      advantagesTitle: "Housing finances",
      advantagesDesc: [
        {
          Desc: "- housing funds shall be made available to qualified cooperatives."
        },
      ],
    },
  ]
  const pagibigSavingsProgram = [
    {
      monthly: "P500.00",
      fiveYears: "P34, 484.17",
      tenYears: "P79, 553.59",
    },
    {
      monthly: "P1, 000.00",
      fiveYears: "P68, 968.33",
      tenYears: "P159, 107.18",
    },
    {
      monthly: "P1, 500.00",
      fiveYears: "P103, 452.50",
      tenYears: "P238, 660.78",
    },
    {
      monthly: "P2, 000.00",
      fiveYears: "P137, 936.66",
      tenYears: "P318, 214.37",
    },
    {
      monthly: "P3, 000.00",
      fiveYears: "P206, 905.00",
      tenYears: "P477, 321.56",
    },
    {
      monthly: "P4, 000.00",
      fiveYears: "P275, 873.32",
      tenYears: "P636, 428.74",
    },
    {
      monthly: "P5, 000.00",
      fiveYears: "P344, 841.65",
      tenYears: "P795, 535.92",
    },
  ]
  const sssFlexiFunds = [
    {
      paymentTitle: "Details of payment",
      paymentDetails1: "Applicable period:",
      paymentDetails2: "Total amount paid:",
      paymentDesc1: "January to March 2014",
      paymentDesc11: "(total of 3 months)",
      paymentDesc2: "P8, 280",
      paymentDesc21: "(or P2, 760 x 3)",
    },
    {
      paymentTitle: "Posting of payments",
      paymentDetails1: "Regular Program:",
      paymentDetails2: "Flexi-fund Program:",
      paymentDesc1: "P5, 280",
      paymentDesc11: "(or P1,760 x 3 months)",
      paymentDesc2: "P3, 000",
      paymentDesc21: "(excess amount)",
    },
  ]
  const ssFormRS5 = [
    {
      ssRSPicture1: "/img-assets/start-a-business/financial-investments/aub.png",
      ssRSPicture2: "/img-assets/start-a-business/financial-investments/commerce.png",
      ssRSPicture3: "/img-assets/start-a-business/financial-investments/pnb.png",
      ssRSPicture4: "/img-assets/start-a-business/financial-investments/iremit.png",
    },
    {
      ssRSTitle1: "Asia United Bank",
      ssRSTitle2: "Bank of Commerce",
      ssRSTitle3: "Philippine National Bank",
      ssRSTitle4: "iRemit",
    },
    {
      ssRSPicture1: "/img-assets/start-a-business/financial-investments/ventaja.png",
      ssRSPicture2: "/img-assets/start-a-business/financial-investments/lucky-money.png",
      ssRSPicture3: "/img-assets/start-a-business/financial-investments/western-union.png",
      ssRSPicture4: "",
    },
    {
      ssRSTitle1: "Ventaja",
      ssRSTitle2: "WDS - Lucky Money",
      ssRSTitle3: "Western Union (selected locations)",
      ssRSTitle4: "",
    },
  ]

  // 
  // 
  return (
    <>
      <BiggerBanner text='Business Opportunities in the PH' label='Financial Investments' img_url='/img-assets/start-a-business/financial-investments/money-home-coin-2724245.jpg' />
      <section className='text-cyan-900'>
        <div className='max-lg:mx-4 mx-0 3xl:max-w-[1400px] 2xl:max-w-[1280px] lg:max-w-[1080px] flex flex-col items-center justify-center my-20 bg-light'>
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
                <Paragraph><b>How do you earn?</b><br/><br/>Savings accounts are interest bearing.</Paragraph>
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
                        <TableCell className='border-r-1 border-gray-400'><b>{i.advantagesTitle}</b>{i.advantagesDesc}</TableCell>
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
                        <TableCell className='border-r-1 border-gray-400'><b>{i.advantagesTitle}</b>{i.advantagesDesc}</TableCell>
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
                <Paragraph><b>How do you earn?</b><br/><br/>Time deposits are interest bearing.</Paragraph>
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
                        <TableCell className='border-r-1 border-gray-400'><b>{i.advantagesTitle}</b>{i.advantagesDesc}</TableCell>
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
                <Paragraph><b>How do you earn?</b><br/><br/>Dollar Savings Account are interest bearing.</Paragraph>
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
                        <TableCell className='border-r-1 border-gray-400'><b>{i.advantagesTitle}</b>{i.advantagesDesc}</TableCell>
                        <TableCell><b>{i.disadvantagesTitle}</b>{i.disadvantagesDesc}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-5' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <Heading4>Dollar Checking Account</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <div className='flex flex-row items-center space-x-20'>
                  <Paragraph><b>Dollar Checking Account</b> is a savings instrument that is similar with the demand deposits only it is dominated in US dollars. This instrument also does not earn interest.</Paragraph>
                  <img src='/img-assets/start-a-business/financial-investments/dollar-checking-account.png' />
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
                    {dollarCheckingAccount.map((i,idx) => (
                      <TableRow key={idx}>
                        <TableCell className='border-r-1 border-gray-400'><b>{i.advantagesTitle}</b>{i.advantagesDesc}</TableCell>
                        <TableCell><b>{i.disadvantagesTitle}</b>{i.disadvantagesDesc}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-6' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <Heading4>Long Term Negotiable Certificate of Deposits (LTNCD)</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <div className='flex flex-row items-center space-x-20'>
                <img src='/img-assets/start-a-business/financial-investments/how-do-you-earn.png' />
                  <Paragraph><b>Long Term Negotiable Certificate of Deposits (LTNCD)</b> are debt instrument sold by a bank that pays annual interest and matures in 5 years.</Paragraph>
                  <img src='/img-assets/start-a-business/financial-investments/ltncd.png' />
                </div>
                <Paragraph><b>How do you earn?</b><br/><br/>LTNCD pays annual interest for five years. Interest rate is fixed for 5 years.</Paragraph>
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
                    {longTermDeposits.map((i,idx) => (
                      <TableRow key={idx}>
                        <TableCell className='border-r-1 border-gray-400'><b>{i.advantagesTitle}</b>{i.advantagesDesc}</TableCell>
                        <TableCell><b>{i.disadvantagesTitle}</b>{i.disadvantagesDesc}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-7' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <Heading4>Unit Investment Trust Funds (UITs)</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <div className='flex flex-row items-center space-x-20'>
                <img src='/img-assets/start-a-business/financial-investments/how-do-you-earn.png' />
                  <Paragraph><b>Unit Investment Trust Funds (UITs)</b> are bank investments that allow the pooling of funds from different investors with similar investment objectives. Investors participate by “buying” participating units or shares of funds. The fund is managed and operated by a financial institution and other similar entities called “trust entities”.</Paragraph>
                  <img src='/img-assets/start-a-business/financial-investments/unit-trust-funds.png' />
                </div>
                <Paragraph><b>How do you earn?</b><br/><br/>At the start of the agreement, the fund value is determined together with the value of each participating unit of investment – this is the investor’s purchase price. It often called the <b>Net Asset Value per Unit (NAVPU)</b>.<br/><br/>
                
                After a period of time, the same investor may decide to redeem or withdraw his money. The Net Asset Value per Unit is computed to determine the investor’s selling price. The difference between the selling price and purchase price is the profit or loss of the investor.
                </Paragraph>
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
                    {unitInvestmentTrustFunds.map((i,idx) => (
                      <TableRow key={idx}>
                        <TableCell className='border-r-1 border-gray-400'><b>{i.advantagesTitle}</b>{i.advantagesDesc}</TableCell>
                        <TableCell><b>{i.disadvantagesTitle}</b>{i.disadvantagesDesc}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        {/*  */}
        {/*  */}
        <Heading5 className='max-lg:mx-4 mx-auto w-full max-w-3xl'>Government Securities</Heading5>
        <div className='bg-cyan-900 max-lg:px-4 text-white w-full flex items-center flex-col justify-center py-5 mb-32 mt-10'>
          <Accordion type='single' collapsible className='max-lg:mx-4 mx-auto w-full max-w-3xl'>
            <AccordionItem value='item-1' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <Heading4>Treasury Bills</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <div className='flex flex-row items-center space-x-20'>
                  <img src='/img-assets/start-a-business/financial-investments/how-do-you-earn.png' />
                  <Paragraph><b>Treasury Bills</b> are government securities that mature in less than a year. It has three tenors: (1) 91 day (2) 182-day (3) 364-day Bills. Treasury Bills do not bear interest.</Paragraph>
                  <img src='/img-assets/start-a-business/financial-investments/tbills.png' />
                </div>
                <Paragraph><b>How do you earn?</b><br/><br/>T-Bills are issued and sold at a discount. They are redeemed at maturity for the full face value of the financial instrument.</Paragraph>
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
                    {treasuryBills.map((i,idx) => (
                      <TableRow key={idx}>
                        <TableCell className='border-r-1 border-gray-400'><b>{i.advantagesTitle}</b>{i.advantagesDesc}</TableCell>
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
                  <Heading4>Treasury Bonds</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <div className='flex flex-row items-center space-x-20'>
                  <img src='/img-assets/start-a-business/financial-investments/how-do-you-earn.png' />
                  <Paragraph><b>Treasury Bonds</b> are government securities which mature beyond one year. Bonds have five maturities: (1) 2 year (2) 5 year (3) 7 year (4) 10 year and (5) 20 year.</Paragraph>
                  <img src='/img-assets/start-a-business/financial-investments/tbonds.png' />
                </div>
                <Paragraph><b>How do you earn?</b><br/><br/>Treasury Bonds are interest bearing and can be traded in the secondary market before maturity.</Paragraph>
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
                    {treasuryBonds.map((i,idx) => (
                      <TableRow key={idx}>
                        <TableCell className='border-r-1 border-gray-400'><b>{i.advantagesTitle}</b>{i.advantagesDesc}</TableCell>
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
                  <Heading4>Retail Treasury Bonds (RTBs)</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <div className='flex flex-row items-center space-x-20'>
                  <img src='/img-assets/start-a-business/financial-investments/how-do-you-earn.png' />
                  <Paragraph><b>Retail Treasury Bonds (RTBs)</b> are government securities similar to treasury notes, but they mature longer (10 years and above).</Paragraph>
                  <img src='/img-assets/start-a-business/financial-investments/rtb.png' />
                </div>
                <Paragraph><b>How do you earn?</b><br/><br/>They are interest bearing and carry a term of more than one year and can be traded in the secondary market before maturity.</Paragraph>
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
                    {retailTreasuryBonds.map((i,idx) => (
                      <TableRow key={idx}>
                        <TableCell className='border-r-1 border-gray-400'><b>{i.advantagesTitle}</b>{i.advantagesDesc}</TableCell>
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
                  <Heading4>Dollar Linked Peso Notes (DLPNs)</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <div className='flex flex-row items-center space-x-20'>
                  <img src='/img-assets/start-a-business/financial-investments/how-do-you-earn.png' />
                  <Paragraph><b>Dollar Linked Peso Notes (DLPNs)</b> are government securities that are interest bearing and carry a term up to 25 years.</Paragraph>
                  <img src='/img-assets/start-a-business/financial-investments/dlpn.png' />
                </div>
                <Paragraph><b>How do you earn?</b><br/><br/>They are interest bearing and can be traded in the secondary market before maturity.</Paragraph>
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
                    {dollarLinkedPesoNotes.map((i,idx) => (
                      <TableRow key={idx}>
                        <TableCell className='border-r-1 border-gray-400'><b>{i.advantagesTitle}</b>{i.advantagesDesc}</TableCell>
                        <TableCell><b>{i.disadvantagesTitle}</b>{i.disadvantagesDesc}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        {/*  */}
        {/*  */}
        <Heading5 className='max-lg:mx-4 mx-auto w-full max-w-3xl'>Non-Bank Investments</Heading5>
        <div className='bg-cyan-900 max-lg:px-4 text-white w-full flex items-center flex-col justify-center py-5 mb-32 mt-10'>
          <Accordion type='single' collapsible className='max-lg:mx-4 mx-auto w-full max-w-3xl'>
            <AccordionItem value='item-1' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <Heading4>Corporate Bonds</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <div className='flex flex-row items-center space-x-20'>
                  <img src='/img-assets/start-a-business/financial-investments/how-do-you-earn.png' />
                  <Paragraph><b>Corporate Bonds</b> are fixed-income security that allows individual investors to lend money to issuers. Those that are issued by corporations are called corporate bonds. They are based on the financial health of the corporation, which can be determined through audited financial statements and annual reports.
                  Corporate bonds are regulated by the Securities and Exchange Commission under the Securities Regulation Code (Republic Act No. 8799) and the Revised Securities Act (Republic Act No. 178).</Paragraph>
                  <img src='/img-assets/start-a-business/financial-investments/tbills.png' />
                </div>
                <Paragraph><b>How do you earn?</b><br/><br/>Initial investments will be periodically returned with interest within a term. The term will end when it reached its maturity.<br/><br/>
                
                Corporate bonds can be resold as long as the payment is higher than the original price to ensure profit</Paragraph>
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
                    {corporateBonds.map((i,idx) => (
                      <TableRow key={idx}>
                        <TableCell className='border-r-1 border-gray-400'><b>{i.advantagesTitle}</b>{i.advantagesDesc}</TableCell>
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
                  <Heading4>Stocks</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <div className='flex flex-row items-center space-x-20'>
                  <Paragraph>When an investor buys stocks, he is actually buying shares of ownership of an enterprise. This makes them entitled to the net income and assets of the corporation. When investors purchase stocks, they are called shareholders or stockholders.</Paragraph>
                  <img src='/img-assets/start-a-business/financial-investments/stocks.png' />
                </div>
                <Paragraph>Entities who may hold shares are:<br/><br/>

                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Individuals</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Pension funds</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Mutual funds or investment companies</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Banks</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Insurance companies</Paragraph>
                </div><br/>

                Stocks are risky because it is prone to fluctuation. However, they are regulated by the Securities and Exchange Commission under the Securities Regulation Code (Republic Act No. 8799) and the Revised Securities Act (Republic Act No. 178).
                </Paragraph>
                {/*  */}
                <Heading5>Types of Stocks</Heading5>
                <div className='flex justify-center'>
                  <img src='/img-assets/start-a-business/financial-investments/diff-stocks.png' />
                </div>
                {/*  */}
                <Paragraph><b>Common Stock</b><br/><br/>
                
                Majority of stocks issued are common stocks. In this type, investors have privileges such as:<br/><br/>

                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Dividends on a percentage of the company’s profits</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Ability to choose through voting who to elect as board members</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Higher yields due to capital growth</Paragraph>
                </div><br/>

                Setback:<br/><br/>

                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>If the company opts to liquidate, common shareholders will receive compensation only after preferred shareholders, bondholders, and creditors are paid.</Paragraph>
                </div>
                </Paragraph>
                {/*  */}
                <Paragraph><b>Preferred Stocks</b><br/><br/>
                
                Preferred shareholders benefits are:<br/><br/>

                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Fixed dividends</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'><b>Priority</b>: In case the corporation goes bankrupt, they are to be paid before common shareholders</Paragraph>
                </div><br/>

                This type can be bought back by the corporation at any time.</Paragraph>
                {/*  */}
                <Paragraph><b>Other types of stocks</b><br/><br/>
                
                Policies of private corporations vary according to their preferences. Therefore, there are customized types of stocks depending on the corporation.</Paragraph>
                {/*  */}
                <div className='flex flex-row items-center space-x-20 mt-20'>
                  <img src='/img-assets/start-a-business/financial-investments/how-do-you-earn.png' />
                  <Paragraph><b>How do you earn?</b><br/><br/>
                  
                  <div className='grid grid-cols-12 gap-y-5'>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Shareholders have claims or dividends on the corporations’ profit.</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Stocks can be resold as long as the payment is higher than the original price, to ensure profit.</Paragraph>
                  </div><br/>

                  Investors may inquire about yields through their stockbrokers.
                  </Paragraph>
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
                    {stocks.map((i,idx) => (
                      <TableRow key={idx}>
                        <TableCell className='border-r-1 border-gray-400'><b>{i.advantagesTitle}</b>{i.advantagesDesc}</TableCell>
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
                  <Heading4>Mutual Funds</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                  <Paragraph><b>Mutual Funds</b>, also called Investment Companies, pool money from individual investors. The collected amount is used to purchase bonds and stocks in order to form a diversified portfolio of security investments. Individuals can buy shares of a mutual fund. They are called owners or shareholders.<br/><br/>

                  Mutual funds are regulated by the Securities and Exchange Commission under the Securities Regulation Code (Republic Act No. 8799) and the Revised Securities Act (Republic Act No. 178).<br/><br/>

                  Mutual funds can buy, hold, and sell assets depending on its objectives. The following are kinds of mutual funds in the Philippines:</Paragraph>
                {/*  */}
                <Heading5>Types of Mutual Funds</Heading5>
                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>1.</Paragraph>
                  <Paragraph className='col-span-11'><b>Money market funds</b><br/><br/>

                  Short-term bonds and debt instruments, fixed-income securities, and special savings are the target investments of money market funds. Compared to other types of mutual fund, this fund can be easily liquidized and is more stable.
                  </Paragraph>
                  {/*  */}
                  <Paragraph className='text-center'>2.</Paragraph>
                  <Paragraph className='col-span-11'><b>Equity of stock funds</b><br/><br/>

                  Most of the fund is invested in stocks, but has tendencies for wide fluctuations. Therefore, most people who invest in equity funds are risk-takers.
                  </Paragraph>
                  {/*  */}
                  <Paragraph className='text-center'>3.</Paragraph>
                  <Paragraph className='col-span-11'><b>Bond funds</b><br/><br/>

                  Funds are invested in bonds and other debts instruments. Unlike individual bond investments, bond funds do not have maturity dates. Thus, they are intended to last in perpetuity.
                  </Paragraph>
                  {/*  */}
                  <Paragraph className='text-center'>4.</Paragraph>
                  <Paragraph className='col-span-11'><b>Index funds</b><br/><br/>

                  An index is a group of securities (stocks, bonds, etc.). Upon investing in an index fund, individual investrs automatically has shares in all of the securities included in the index. It gives investors an instant diversified portfolio.
                  </Paragraph>
                  {/*  */}
                  <Paragraph className='text-center'>5.</Paragraph>
                  <Paragraph className='col-span-11'><b>Balanced funds</b><br/><br/>

                  These are funds that have balanced combinations of stocks, bonds, and in some case, money markets. It has the high earning potential of stocks and the stabilitiy of bonds.
                  </Paragraph>
                </div>
                {/*  */}
                <div className='flex flex-row items-center space-x-20 mt-20'>
                  <img src='/img-assets/start-a-business/financial-investments/how-do-you-earn.png' />
                  <Paragraph><b>How do you earn?</b><br/><br/>Shareholders earn through receiving yields. Yields are made depending on the type of mutual fund. These are through:<br/><br/>
                  
                    <div className='grid grid-cols-12 gap-y-5'>
                      <Paragraph className='text-center'>&#8226;</Paragraph>
                      <Paragraph className='col-span-11'>Reselling shares as long as the payment is higher than the original price</Paragraph>
                      <Paragraph className='text-center'>&#8226;</Paragraph>
                      <Paragraph className='col-span-11'>Receiving cash dividends for being shareholders</Paragraph>
                      <Paragraph className='text-center'>&#8226;</Paragraph>
                      <Paragraph className='col-span-11'>Earning through interest rates</Paragraph>
                    </div><br/>

                  Investors may know more about yields through their investment managers
                  </Paragraph>
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
                    {mutualFunds.map((i,idx) => (
                      <TableRow key={idx}>
                        <TableCell className='border-r-1 border-gray-400'><b>{i.advantagesTitle}</b>{i.advantagesDesc}</TableCell>
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
                  <Heading4>Cooperatives</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <Paragraph>Enterprises which are owned by its members are called cooperatives. Anyone can become members of the cooperative by volunteering. Members manage, control, and decide for the cooperative.</Paragraph>
                <div className='flex justify-center'>
                  <img src='/img-assets/start-a-business/financial-investments/corporate-1.png' />
                </div>
                {/*  */}
                <Heading5>How members benefit</Heading5>
                <Paragraph>Cooperatives aid its members by:<br/><br/>

                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Helping them increase income, save money, and have purchasing power through providing goods and services</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Providing social and economic benefits</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Educating them of effective ways of engaging in cooperatives</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Giving innovative business ideas</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Cooperating with the government, organizations, and other cooperatives to boost projects and help achieve its objectives</Paragraph>
                </div>
                </Paragraph>
                {/*  */}
                <Table className='table-auto'>
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
                    {cooperatives.map((i,idx) => (
                      <TableRow key={idx}>
                        <TableCell className='border-r-1 border-gray-400'>
                          {i.advIntro}
                          <b>{i.advantagesTitle}</b>
                          {i.advantagesDesc.map((i,idx) => (
                            <p key={idx}><br/>{i.Desc}<br/></p>
                          ))}
                          </TableCell>
                        <TableCell><b>{i.disadvantagesTitle}</b>{i.disadvantagesDesc}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-5' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <Heading4>Microfinance Institutions (MFIs)</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <Paragraph><b>Microfinance Institutions (MFIs)</b>provides various financial services to low-income households and their microenterprises. These services include:</Paragraph>
                <Table className='table-fixed'>
                  <TableHeader className='border-1'>
                    <TableRow>
                      <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                        <img src="/img-assets/start-a-business/financial-investments/mfi-deposit.png" />
                      </TableHead>
                      <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                        <img src="/img-assets/start-a-business/financial-investments/mfi-loan.png" />
                      </TableHead>
                      <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                        <img src="/img-assets/start-a-business/financial-investments/mfi-payment-service.png" />
                      </TableHead>
                      <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                        <img src="/img-assets/start-a-business/financial-investments/mfi-money-transfer.png" />
                      </TableHead>
                      <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                        <img src="/img-assets/start-a-business/financial-investments/mfi-insurance.png" />
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className='border-1 '>
                    <TableRow >
                      <TableCell className='border-r-1 border-gray-400'>Deposits</TableCell>
                      <TableCell className='border-r-1 border-gray-400'>Loans</TableCell>
                      <TableCell className='border-r-1 border-gray-400'>Payment services</TableCell>
                      <TableCell className='border-r-1 border-gray-400'>Money transfer</TableCell>
                      <TableCell>Insurance products</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                {/*  */}
                <Paragraph>Microfinance is available to economically active but entrepreneurial, poor individuals.<br/><br/>
                
                <b>Benefits</b><br/><br/>

                Microfinance helps its beneficiaries by:<br/><br/>

                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Giving microenterprises a boost in order for their business to grow</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Providing easy access to financial services without high interest rates</Paragraph>
                </div>
                </Paragraph>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-6' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <Heading4>Insurance Products</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <Paragraph><b>Insurance Products</b> is a form of risk management that provides financial security in times of unexpected need. It entitles insurance holders and their beneficiaries to receive monetary assistance from insurance providers. Beneficiaries could be anyone specified by the insurance holder including his family and loved ones.<br/><br/>

                Anyone can avail insurance products as long as they pay monthly contributions to the insurance institution’s funds. Contributions are called premiums.<br/><br/>

                Insurance products are safe investments because they are regulated by the Insurance Code of the Philippines (Presidential Decree No. 612) and the Insurance Act (Act No. 2427).</Paragraph>
                {/*  */}
                <Heading5>Types of Insurance</Heading5>
                <Paragraph>The different types of insurance products cater to needs they are intended to assist. The following are:</Paragraph>
                <Paragraph><b>Life Insurance</b><br/><br/>
                
                <div className='flex justify-center'>
                  <img src='/img-assets/start-a-business/financial-investments/insurance-family.png' />
                </div><br/>

                It is is intended to give assistance to beneficiaries after the insurance holder’s death.<br/><br/>

                They benefit through:<br/><br/>

                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Family financial protection</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'><b>Savings</b>: Whether the insurance holder lives or dies, he will have an accumulated fund</Paragraph>
                </div>
                </Paragraph>
                {/*  */}
                <Paragraph><b>Health Insurance</b><br/><br/>
                
                <div className='flex justify-center'>
                  <img src='/img-assets/start-a-business/financial-investments/insurance-health.png' />
                </div><br/>

                It aims to provide for the insurance holder the moment he experiences significant health issues. He can also use his health insurance for his beneficiaries.
                </Paragraph>
                {/*  */}
                <Paragraph><b>Property Insurance</b><br/><br/>
                
                <div className='flex justify-center'>
                  <img src='/img-assets/start-a-business/financial-investments/insurance-property.png' />
                </div><br/>

                In this type, the insurance provider will compensate for any property losses due to theft, fire, and damages.
                </Paragraph>
                {/*  */}
                <Paragraph><b>Travel Insurance</b><br/><br/>
                
                <div className='flex justify-center'>
                  <img src='/img-assets/start-a-business/financial-investments/insurance-travel.png' />
                </div><br/>

                Loss of belongings, health issues, and physical damage obtained during travel are covered by travel insurance.
                </Paragraph>
                {/*  */}
                <Paragraph><b>Car Insurance</b><br/><br/>
                
                <div className='flex justify-center'>
                  <img src='/img-assets/start-a-business/financial-investments/insurance-car.png' />
                </div><br/>

                Car insurance covers any costs caused by car accidents including car repair and injuries.
                </Paragraph>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-7' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <Heading4>Pag-IBIG II Savings Program</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <Paragraph><b>Pag-IBIG II Savings Program</b>is a voluntary savings program that gives higher dividends in a short term. It is intended for individuals who are active members of Pag-IBIG I or Pag IBIG Overseas Program.<br/><br/>

                In this program, the minimum amount of contribution is Php 500 per month for five years.</Paragraph>
                {/*  */}
                <Table className='table-fixed'>
                  <TableHeader className='border-1'>
                    <TableRow>
                      <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                        <Heading5>Monthly Contribution</Heading5>
                      </TableHead>
                      <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                        <Heading5>Total savings after 5 years*</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center py-8">
                        <Heading5>Total savings after 10 years*</Heading5>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className='border-1 '>
                    {pagibigSavingsProgram.map((i,idx) => (
                      <TableRow key={idx}>
                        <TableCell className='border-r-1 border-gray-400'>{i.monthly}</TableCell>
                        <TableCell className='border-r-1 border-gray-400'>{i.fiveYears}</TableCell>
                        <TableCell>{i.tenYears}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                {/*  */}
                <Paragraph>*if the dividend rate is 6%<br/><br/>

                Members can only withdraw their total accumulated value (TAV) upon reaching the maturity date. However, they can withdraw their TAVs with the following exceptions<br/><br/>
                
                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>they become totally disabled</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>they become mentally incapable</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>they have health issues resulting to service separation</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>death</Paragraph>
                </div><br/>

                <b>Benefits</b>:<br/><br/>
                
                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Pag-IBIG II has the highest dividend compared to Pag-IBIG I and Pag-IBIG Overseas Program</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Tax-free dividends</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Investments are assured and handled by the government</Paragraph>
                </div>
                </Paragraph>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-8' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <Heading4>Social Security System (SSS) Flexi Funds</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <Paragraph><b>Social Security System (SSS) Flexi Funds</b>is a voluntary individual account intended for Overseas Filipino workers (OFWs). It is a combination of pension plans and savings accounts. This fund is invested in government securities.<br/><br/>

                OFWs may join the program by submitting membership applications (SS Form OW-1 or Overseas Worker Record) at any SSS branch nationwide.<br/><br/>
                
                The terms of payment are:<br/><br/>
                
                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Any amount not lower than P200, in excess of the required regular SSS contribution automatically goes to the member’s account and earns interest</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>No minimum and maximum contribution amounts</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Members can make monthly, quarterly, annual, or intermittent contributions</Paragraph>
                </div>
                </Paragraph>
                {/*  */}
                <Table className='table-fixed'>
                  <TableHeader className='border-1'>
                    <TableRow>
                      <TableHead className="text-white border-r-1 border-gray-400 py-8"></TableHead>
                      <TableHead className="text-white border-r-1 border-gray-400 py-8">
                        <Paragraph className='text-center'>Maximum regular SSS contribution</Paragraph>
                      </TableHead>
                      <TableHead className="text-white py-8">
                        <Paragraph className='text-center'>P1,760/month for Y2014</Paragraph>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className='border-1 '>
                    {sssFlexiFunds.map((i,idx) => (
                      <TableRow key={idx}>
                        <TableCell className='border-r-1 border-gray-400'><b>{i.paymentTitle}</b></TableCell>
                        <TableCell className='border-r-1 border-gray-400'>
                          <p className='border-b-1 border-gray-400 mb-5 pb-5'>{i.paymentDetails1}</p>
                          <p>{i.paymentDetails2}</p>
                        </TableCell>
                        <TableCell>
                          <p className='border-b-1 border-gray-400 mb-3 pb-3'>{i.paymentDesc1}<br/>{i.paymentDesc11}</p>
                          <p>{i.paymentDesc2}<br/>{i.paymentDesc21}</p>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                {/*  */}
                <Paragraph>Members can remit contributions by filing SS Form RS-5 (Contributions Payment Return) and indicating the payor type as Overseas Filipino Worker. They can remit at participating branches and authorized agents including:</Paragraph>
                <Table className='table-fixed'>
                  <TableBody className='border-1 '>
                    {ssFormRS5.map((i,idx) => (
                      <TableRow key={idx}>
                        <TableCell className='border-r-1 border-gray-400'>
                          <img className='place-self-center' src={i.ssRSPicture1} />
                          {i.ssRSTitle1}
                        </TableCell>
                        <TableCell className='border-r-1 border-gray-400'>
                          <img className='place-self-center' src={i.ssRSPicture2} />
                          {i.ssRSTitle2}</TableCell>
                        <TableCell className='border-r-1 border-gray-400'>
                          <img className='place-self-center' src={i.ssRSPicture3} />
                          {i.ssRSTitle3}</TableCell>
                        <TableCell>
                          <img className='place-self-center' src={i.ssRSPicture4} />
                          {i.ssRSTitle4}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                {/*  */}
                <Paragraph>Contributions may be paid as follows:<br/><br/>
                
                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'><b>January-December</b>: anytime within the same year</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'><b>October-December</b>: on or before January 31 of the next year</Paragraph>
                </div><br/>

                Claims come in the form of:<br/><br/>
                
                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Monthly pension</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Lump sum payment</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Combination of both</Paragraph>
                </div><br/>

                <b>Benefits</b>:<br/><br/>

                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Contributions are primarily invested in government securities.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Investments are transparent and risk-free because the government handles contributions.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Computations of interest rates can be based on SSS’ short-term placements or the average Treasury bill rate, depending on which one is higher.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Early withdrawal.</Paragraph>
                </div>
                </Paragraph>
                {/*  */}
                <Paragraph>Members whose overseas employments have ended may continue to contribute in Flexi Fund Savings as long as they make maximum contributions regularly.</Paragraph>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        {/*  */}
        {/*  */}
        <div className='flex justify-center mb-32'>
        <div className='max-lg:mx-4 mx-0 3xl:max-w-[1400px] 2xl:max-w-[1280px] lg:max-w-[1080px] flex flex-col items-center justify-center my-20 bg-light'>
          <Paragraph className='italic font-light'><b>Sources of Bank Financial Investments</b>: Bureau of Treasury, Bangko Sentral ng Pilipinas, private banks and other bank-related websites<br/><br/>
          
          <b>Sources of Government Securities Financial Investments</b>: Bureau of Treasury and Private Banks<br/><br/>

          <b>Sources of Non-bank Financial Investments</b>: Philippine Stocks Exchange, Cooperatives Development Authority, Social Security System, Insurance Commission, Pag-IBIG Fund, Philippine Life Insurance Association Inc., Money Gurado, Stock Markets for Pinoys, Investing in Bonds and other investment-related websites
          </Paragraph>
        </div>
        </div>
      </section>
    </>
  )
}