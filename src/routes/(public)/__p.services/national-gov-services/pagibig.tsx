import { createFileRoute } from '@tanstack/react-router'
import Paragraph from '@/components/user/shared/paragraph'
import BiggerBanner from '@/components/user/shared/banner/bigger-banner'
import Heading4 from '@/components/user/shared/headings/heading-4'
import Heading5 from '@/components/user/shared/headings/heading-5'
import RoseAnchor from '@/components/user/shared/anchors/rose-anchor'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { AccordionHeader } from '@radix-ui/react-accordion'

export const Route = createFileRoute(
  '/(public)/__p/services/national-gov-services/pagibig',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <BiggerBanner text='Access Government Services' label='Pag-IBIG' img_url='/img-assets/gov-services/pagibig/hdmf-backgrounder5.png' />
      <section className='text-cyan-900'>
        <div className='max-lg:mx-4 3xl:max-w-[1400px] 2xl:max-w-[1280px] lg:max-w-[1080px] mx-auto my-20 bg-light space-y-20'>
          <Heading4><u>Pag</u>tutulungan sa kinabukasan: <u>I</u>kaw, <u>B</u>angko, <u>I</u>ndustriya, at <u>G</u>obyerno</Heading4>
          <div className='flex flex-row items-center space-x-20'>
            <img src='/img-assets/gov-services/pagibig/pagibig.jpg' />
            <Paragraph>The Home Development Mutual Fund (HDMF), more popularly known as the Pag-IBIG Fund, was established to provide a national savings program and affordable shelter financing for the Filipino worker. The Fund offers its members short-term loans and access to housing programs. It is mandatory for all SSS- and GSIS-covered employees; uniformed members of the AFP, BFP, BJMP and PNP; as well as Filipinos employed by foreign-based employers.</Paragraph>
          </div>
          {/*  */}
          <div className='flex justify-center'>
            <img src='/img-assets/gov-services/pagibig/pagibig-options.png' />
          </div>
          {/*  */}
          <div className='flex flex-row items-center space-x-20'>
            <img src='/img-assets/gov-services/pagibig/hdmf-icon1.png' />
            <Paragraph>The Pag-IBIG Fund Regular Savings Program is a convenient and government-guaranteed savings facility that allows you to earn high returns.<br/><br/>

            Pag-IBIG contributions are mandatory for Overseas Filipino Workers (OFW) as mandated by the Republic Act No. 9679 or the Home Development Mutual (Pag-IBIG) Fund Law of 2009. An OFW whose employer is not subject to mandatory coverage shall contribute an amount equivalent to 2% of his/her monthly income and may opt to pay the employer counterpart. The maximum monthly income to be used in computing the membership savings shall not be more than P5,000.00.</Paragraph>
          </div>
          {/*  */}
          <div className='flex flex-row items-center space-x-20'>
            <img src='/img-assets/gov-services/pagibig/hdmf-icon2.png' />
            <Paragraph>The MP2 Savings is a special savings program for active Pag-IBIG Fund members who wish to earn higher returns, in addition to their Pag-IBIG Regular Savings.</Paragraph>
          </div>
          {/*  */}
          <div className='flex flex-row items-center space-x-20'>
            <img src='/img-assets/gov-services/pagibig/hdmf-icon9.png' />
            <Paragraph>The Pag-IBIG Fund Multi-Purpose Loan or MPL is a cash loan designed to help our members with any immediate financial need. A member can borrow up to 80% of their Pag-IBIG Regular Savings, and can be processed in as fast as 2 days!</Paragraph>
          </div>
          {/*  */}
          <div className='flex flex-row items-center space-x-20'>
            <img src='/img-assets/gov-services/pagibig/hdmf-icon4.png' />
            <Paragraph>The Pag-IBIG Fund Housing Loan allows you to borrow up to P6 million under very low rates and at the friendliest terms, to help you fulfill your dream of owning a home.</Paragraph>
          </div>
          {/*  */}
          <div className='flex flex-row items-center space-x-20'>
            <img src='/img-assets/gov-services/pagibig/hdmf-icon10.png' />
            <Paragraph>Pag-IBIG Fund allows Pag-IBIG-acquired assets that have been foreclosed as a result of the original owner’s failure to pay their monthly amortizations.</Paragraph>
          </div>
          {/*  */}
          <div className='flex flex-row items-center space-x-20'>
            <img src='/img-assets/gov-services/pagibig/hdmf-icon7.png' />
            <Paragraph>The Pag-IBIG Loyalty Card Plus allows you to enjoy exclusive discounts and rewards on your grocery purchases, tuition fee, hospital bills, fuel expenses.</Paragraph>
          </div>
          {/*  */}
          <div className='flex flex-row items-center space-x-20'>
            <img src='/img-assets/gov-services/pagibig/hdmf-icon8.png' />
            <Paragraph>Conveniently pay your contributions through Pag-IBIG’s online payment facilities.</Paragraph>
          </div>
          {/*  */}
          <Heading4>FREQUENTLY ASKED QUESTIONS</Heading4>
        </div>
        <div className='bg-cyan-900 max-lg:px-4 text-white w-full flex items-center flex-col justify-center py-5 mb-32 mt-10'>
        <Accordion type='single' collapsible className='max-lg:mx-4 mx-auto w-full max-w-3xl'>
          <AccordionItem value='item-1' className='border-b mb-2'>
            <AccordionHeader>
              <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                <Heading4>How can overseas Filipinos/OFWs register to PAG-IBIG?</Heading4>
              </AccordionTrigger>
            </AccordionHeader>
            <AccordionContent className='my-10 space-y-10'>
              <Heading5>EXISTING PAG-IBIG MEMBERSHIP ID (MID) NUMBER</Heading5>
              <div className='grid grid-cols-12 gap-y-5'>
                <Paragraph className='text-center'>a.</Paragraph>
                <Paragraph className='col-span-11'>OFWs without a Pag-IBIG MID number can secure one via the:<br/><br/>
                
                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>i.</Paragraph>
                  <Paragraph className='col-span-11'>Department of Migrant Workers’ e-Registration System; or</Paragraph>
                  <Paragraph className='text-center'>ii.</Paragraph>
                  <Paragraph className='col-span-11'>Virtual Pag-IBIG, Pag-IBIG Fund’s online service facility through this <RoseAnchor href_url='https://www.pagibigfundservices.com/PubReg/NewReg_Page.aspx)'>link</RoseAnchor>.</Paragraph>
                </div></Paragraph>
                <Paragraph className='text-center'>b.</Paragraph>
                <Paragraph className='col-span-11'>Overseas Filipinos without a Pag-IBIG MID and not under the Department of Migrant Workers can secure one via the:<br/><br/>
                
                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>i.</Paragraph>
                  <Paragraph className='col-span-11'>Virtual Pag-IBIG, Pag-IBIG Fund’s online service facility through this <RoseAnchor href_url='https://www.pagibigfundservices.com/PubReg/NewReg_Page.aspx)'>link</RoseAnchor>.</Paragraph>
                </div></Paragraph>
              </div>
              {/*  */}
              <Heading5>WITH PRIOR-ISSUED PAG-IBIG MID NUMBERS</Heading5>
              <div className='grid grid-cols-12 gap-y-5'>
                <Paragraph className='text-center'>a.</Paragraph>
                <Paragraph className='col-span-11'>Overseas Filipinos/OFWs with prior-issued Pag-IBIG MID numbers can recall their MID via:<br/><br/>
                
                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>i.</Paragraph>
                  <Paragraph className='col-span-11'>Virtual Pag-IBIG, Pag-IBIG Fund’s online service facility. Click <RoseAnchor href_url='https://www.pagibigfundservices.com/virtualpagibig/MIDInquiry.aspx'>here</RoseAnchor>.</Paragraph>
                  <Paragraph className='text-center'>ii.</Paragraph>
                  <Paragraph className='col-span-11'>Pag-IBIG Fund Hotline (02) 87244244</Paragraph>
                  <Paragraph className='text-center'>iii.</Paragraph>
                  <Paragraph className='col-span-11'>Email at contactus@pagibigfund.gov.ph</Paragraph>
                  <Paragraph className='text-center'>iv.</Paragraph>
                  <Paragraph className='col-span-11'>Chat via <RoseAnchor href_url='https://www.pagibigfund.gov.ph'>www.pagibigfund.gov.ph</RoseAnchor>; or</Paragraph>
                  <Paragraph className='text-center'>v.</Paragraph>
                  <Paragraph className='col-span-11'>Private message via Facebook <RoseAnchor href_url='https://www.facebook.com/PagIBIGFundOfficialPage/'>@PagIBIGFundOfficialPage</RoseAnchor></Paragraph>
                </div></Paragraph>
              </div>
            </AccordionContent>
          </AccordionItem>
          {/*  */}
          <AccordionItem value='item-2' className='border-b mb-2'>
            <AccordionHeader>
              <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                <Heading4>How can overseas Filipinos/OFWs view their PAG-IBIG contributions record (status of contributions, benefit, loans)?</Heading4>
              </AccordionTrigger>
            </AccordionHeader>
            <AccordionContent className='my-10 space-y-10'>
              <Paragraph>Overseas Filipinos can view their member records and avail of other services/transactions online through Virtual Pag-IBIG.<br/><br/>
              
              By simply downloading Virtual Pag-IBIG, members can immediately enjoy the following services:</Paragraph>
              <div className='grid grid-cols-12 gap-y-5'>
                <Paragraph className='text-center'>1.</Paragraph>
                <Paragraph className='col-span-11'>Register as a Pag-IBIG Fund member and get your permanent Membership ID (MID)Number;</Paragraph>
                <Paragraph className='text-center'>2.</Paragraph>
                <Paragraph className='col-span-11'>Open a MP2 Savings Account;</Paragraph>
                <Paragraph className='text-center'>3.</Paragraph>
                <Paragraph className='col-span-11'>Apply for a Pag-IBIG Multi-Purpose Loan (MPL);</Paragraph>
                <Paragraph className='text-center'>4.</Paragraph>
                <Paragraph className='col-span-11'>Apply for Pag-IBIG Calamity Loan (for members whose area of residence is declared under a state of calamity);</Paragraph>
                <Paragraph className='text-center'>5.</Paragraph>
                <Paragraph className='col-span-11'>Take the first step in applying for a Pag-IBIG Housing Loan;</Paragraph>
                <Paragraph className='text-center'>6.</Paragraph>
                <Paragraph className='col-span-11'>Apply for a Pag-IBIG Home Equity Appreciation Loan (HEAL);</Paragraph>
                <Paragraph className='text-center'>7.</Paragraph>
                <Paragraph className='col-span-11'>View the status of your loan (Housing, Multi-Purpose, Calamity or Home Equity Appreciation Loan);</Paragraph>
                <Paragraph className='text-center'>8.</Paragraph>
                <Paragraph className='col-span-11'>Top-Up your Pag-IBIG Regular Savings;</Paragraph>
                <Paragraph className='text-center'>9.</Paragraph>
                <Paragraph className='col-span-11'>Save in the Pag-IBIG MP2 Savings;</Paragraph>
                <Paragraph className='text-center'>10.</Paragraph>
                <Paragraph className='col-span-11'>Pay your Pag-IBIG loans (Housing, Multi-Purpose, Calamity or Home Equity Appreciation Loan);</Paragraph>
                <Paragraph className='text-center'>11.</Paragraph>
                <Paragraph className='col-span-11'>Apply for Interest-Rate Repricing on your Housing Loan;</Paragraph>
                <Paragraph className='text-center'>12.</Paragraph>
                <Paragraph className='col-span-11'>laim your Pag-IBIG Savings (due to membership maturity, optional withdrawal of savings, retirement at age 65, and MP2 Savings maturity); and</Paragraph>
                <Paragraph className='text-center'>13.</Paragraph>
                <Paragraph className='col-span-11'>Chat with a Lingkod Pag-IBIG, 24/7, to help you learn more about your Pag-IBIG Fund benefits.</Paragraph>
              </div>
              {/*  */}
              <div className='space-y-5'>
                <Paragraph>Overseas Filipino Workers (OFWs) can create their accounts anytime and from anywhere in the world by selecting the “Account Creation for OFWs” option. Here’s how:</Paragraph>
                
                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>a.</Paragraph>
                  <div className='col-span-11 space-y-5'>
                    <Paragraph>After choosing to create your account via the “Account Creation for OFWs” option, key in the following information:</Paragraph>
                    <div className='grid grid-cols-12 gap-y-3'>
                      <Paragraph className='text-center'>&#959;</Paragraph>
                      <Paragraph className='col-span-11'>Pag-IBIG Fund Membership ID (MID) Number</Paragraph>
                      <Paragraph className='text-center'>&#959;</Paragraph>
                      <Paragraph className='col-span-11'>Complete name</Paragraph>
                      <Paragraph className='text-center'>&#959;</Paragraph>
                      <Paragraph className='col-span-11'>Date of Birth</Paragraph>
                      <Paragraph className='text-center'>&#959;</Paragraph>
                      <Paragraph className='col-span-11'>Philippine mobile phone number</Paragraph>
                    </div>
                  </div>
                  <Paragraph className='text-center'>b.</Paragraph>
                  <Paragraph className='col-span-11'>Input the One-Time Pin (OTP) sent to your mobile phone;</Paragraph>
                  <Paragraph className='text-center'>c.</Paragraph>
                  <div className='col-span-11 space-y-5'>
                    <Paragraph>Key in the following information:</Paragraph>
                    <div className='grid grid-cols-12 gap-y-3'>
                      <Paragraph className='text-center'>&#959;</Paragraph>
                      <Paragraph className='col-span-11'>Country of Assignment</Paragraph>
                      <Paragraph className='text-center'>&#959;</Paragraph>
                      <Paragraph className='col-span-11'>Email Address</Paragraph>
                      <Paragraph className='text-center'>&#959;</Paragraph>
                      <Paragraph className='col-span-11'>Three (3) security questions and answers for password retrieval, in the event you forget your password</Paragraph>
                      <Paragraph className='text-center'>&#959;</Paragraph>
                      <Paragraph className='col-span-11'>Mother’s Maiden Name</Paragraph>
                      <Paragraph className='text-center'>&#959;</Paragraph>
                      <Paragraph className='col-span-11'>Place of Birth</Paragraph>
                    </div>
                  </div>
                  <Paragraph className='text-center'>d.</Paragraph>
                  <Paragraph className='col-span-11'>Upload a photo of your passport or two (2) valid primary identification cards. Please make sure that your photo is clear and your information on the card are readable;</Paragraph>
                  <Paragraph className='text-center'>e.</Paragraph>
                  <Paragraph className='col-span-11'>Upload your selfie picture while holding your passport showing or the two (2) valid identification cards you submitted. Please make sure that your photo is clear and your information on the card are readable;</Paragraph>
                  <Paragraph className='text-center'>f.</Paragraph>
                  <Paragraph className='col-span-11'>Receive an SMS confirming that you have successfully created your Virtual Pag-IBIG account;</Paragraph>
                  <Paragraph className='text-center'>g.</Paragraph>
                  <Paragraph className='col-span-11'>Receive another SMS over the next few days informing you that your Virtual Pag-IBIG account has been activated and how you may access it; and</Paragraph>
                </div>
              </div>
              {/*  */}
              <Paragraph>For your security, please change your temporary password immediately to protect your Virtual Pag-IBIG account.</Paragraph>
            </AccordionContent>
          </AccordionItem>
          {/*  */}
          <AccordionItem value='item-3' className='border-b mb-2'>
            <AccordionHeader>
              <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                <Heading4>How much is the monthly contribution for overseas Filipinos/OFWS?</Heading4>
              </AccordionTrigger>
            </AccordionHeader>
            <AccordionContent className='my-10 space-y-10'>
              <Paragraph>An Overseas Filipino Worker (OFW) whose employer is not subject to mandatory coverage shall contribute an amount equivalent to 2% of his/her monthly income. Said employee may opt to pay the employer counterpart.<br/><br/>

              <b>Contribute rate for Land-Based OFW</b></Paragraph>
              <Table>
                <TableHeader className='border-1'>
                  <TableRow>
                    <TableHead className="text-white border-r-1 border-gray-400 pl-4 py-8">
                      <Heading5>Monthly Income</Heading5>
                    </TableHead>
                    <TableHead className="text-white pl-4 py-8">
                      <Heading5>Contribution</Heading5>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className='border-1 '>
                  <TableRow>
                    <TableCell className='border-r-1 border-gray-400'>Over P1, 500</TableCell>
                    <TableCell className='bord>er-r-1 border-gray-400'>2.0%</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              {/*  */}
              <Paragraph>The maximum monthly income to be used in computing the membership savings shall not be more than Five Thousand Pesos (P5,000.00). The member may contribute more than what is required herein should he or she desires.</Paragraph>
            </AccordionContent>
          </AccordionItem>
          {/*  */}
          <AccordionItem value='item-4' className='border-b mb-2'>
            <AccordionHeader>
              <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                <Heading4>Are OFWs covered by the increase of monthly contributions to PAG-IBIG?</Heading4>
              </AccordionTrigger>
            </AccordionHeader>
            <AccordionContent className='my-10 space-y-10'>
              <Paragraph>Yes. OFWs are included in the new monthly contributions to the Pag-IBIG Fund. Starting February 2024, the monthly contribution for OFW members will be PHP 200, up from the previous PHP 100. For OFWs with Philippine employers, such as seafarers, their contributions will be matched by their employers with an equivalent PHP 200. Members have the option to contribute more than this amount to enjoy larger savings.</Paragraph>
            </AccordionContent>
          </AccordionItem>
          {/*  */}
          <AccordionItem value='item-5' className='border-b mb-2'>
            <AccordionHeader>
              <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                <Heading4>How can overseas Filipinos/OFWs pay their contributions and/or settle their loan obligations/amortizations?</Heading4>
              </AccordionTrigger>
            </AccordionHeader>
            <AccordionContent className='my-10 space-y-10'>
              <Paragraph>If you are an Overseas Filipino Worker (OFW), you may pay your loan obligations or amortizations in a number of convenient ways, which include:</Paragraph>
              <div className='grid grid-cols-12 gap-y-5'>
                <Paragraph className='text-center'>&#8226;</Paragraph>
                <Paragraph className='col-span-11'>A collection servicing arrangement with your employer (if employed), who will then remit your monthly payments to Pag-IBIG Fund;</Paragraph>
                <Paragraph className='text-center'>&#8226;</Paragraph>
                <Paragraph className='col-span-11'>Issuance of post-dated checks;</Paragraph>
                <Paragraph className='text-center'>&#8226;</Paragraph>
                <Paragraph className='col-span-11'>Auto-Debit Arrangement (ADA) with a Pag-IBIG Fund partner-bank;</Paragraph>
                <Paragraph className='text-center'>&#8226;</Paragraph>
                <Paragraph className='col-span-11'>Virtual Pag-IBIG; and</Paragraph>
                <Paragraph className='text-center'>&#8226;</Paragraph>
                <Paragraph className='col-span-11'>Any Pag-IBIG Fund branch near you.</Paragraph>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        </div>
      </section>
    </>
  )
}