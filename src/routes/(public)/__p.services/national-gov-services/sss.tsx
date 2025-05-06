import { createFileRoute } from '@tanstack/react-router'
import Paragraph from '@/components/user/shared/paragraph'
import BiggerBanner from '@/components/user/shared/banner/bigger-banner'
import Heading4 from '@/components/user/shared/headings/heading-4'
import Heading5 from '@/components/user/shared/headings/heading-5'
import RoseAnchor from '@/components/user/shared/anchors/rose-anchor'
import Button from '@/components/user/shared/buttons/button'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { AccordionHeader } from '@radix-ui/react-accordion'

export const Route = createFileRoute(
  '/(public)/__p/services/national-gov-services/sss',
)({
  component: RouteComponent,
})

function RouteComponent() {
  const contributions = [
    {
      month: 'January – September of a given calendar year',
      deadline: 'December 31 of the same year'
    },
    {
      month: 'October – December of a given calendar year',
      deadline: 'January 31 of the succeeding year'
    },
  ]
  const benefits = [
    {
      longTerm: 'Disability',
      shortTerm: 'Sickness'
    },
    {
      longTerm: 'Retirement',
      shortTerm: 'Maternity'
    },
    {
      longTerm: 'Death',
      shortTerm: 'Unemployment'
    },
    {
      longTerm: '',
      shortTerm: 'Funeral'
    },
  ]
  const foreignOffices = [
    {
      asia: 'Hong Kong',
      europe: 'Rome',
      northAmerica: 'Toronto',
      middleEast: 'Kuwait'
    },
    {
      asia: 'Macau',
      europe: 'Milan',
      northAmerica: 'Calgary',
      middleEast: 'Riyadh'
    },
    {
      asia: 'Taipei',
      europe: 'London',
      northAmerica: 'Vancouver',
      middleEast: 'Jeddah'
    },
    {
      asia: 'Kaohsiung',
      europe: 'Madrid',
      northAmerica: 'San Francisco',
      middleEast: 'Al Khobar'
    },
    {
      asia: 'Brunei',
      europe: '',
      northAmerica: 'New York',
      middleEast: 'Kuwait'
    },
    {
      asia: 'Singapore',
      europe: '',
      northAmerica: 'Los Angeles',
      middleEast: 'Abu Dhabi'
    },
    {
      asia: 'Kuala Lumpur',
      europe: '',
      northAmerica: '',
      middleEast: 'Dubai'
    },
    {
      middleEast: 'Doha'
    },
    {
      middleEast: 'Muscat'
    },
    {
      middleEast: 'Bahrain'
    },
    {
      middleEast: 'Jordan'
    },
    {
      middleEast: 'Tel Aviv'
    },
  ]

  return (
    <>
      <BiggerBanner text='Access Government Services' label='Social Security System' img_url='/img-assets/gov-services/sss/sss-building4.jpg' />
      <section className='text-cyan-900'>
        <div className='max-lg:mx-4 3xl:max-w-[1400px] 2xl:max-w-[1280px] lg:max-w-[1080px] mx-auto my-20 bg-light space-y-20'>
          <Heading4>What is Social Security System (SSS)?</Heading4>
          <Paragraph>The SSS is a social insurance institution mandated by law to promote the welfare of private sector workers, including those in the informal sector, the self-employed, and voluntary members by providing replacement income in times of life’s contingencies: sickness, maternity, unemployment, disability, retirement, and death. It currently administers two (2) programs, namely: (1) the Social Security (SS) Program and (2) the Employees’ Compensation (EC) Program.<br/><br/>

          Pursuant to Republic Act No. 11199 (RA 11199 or the Social Security Act of 2018), coverage in the SSS shall be compulsory to all sea-based and land-based Overseas Filipino Workers (OFWs) as defined under R.A. No. 8042 or the Migrant Workers and Overseas Filipinos Act of 1995 as amended (by R.A. No. 10022), provided they are not over sixty years of age</Paragraph>
          {/*  */}
          <Heading4>SSS Programs for Overseas Filipino Workers</Heading4>
          <div className='space-y-10'>
            <Heading5>Registration</Heading5>
            <Paragraph>An OFW shall be allowed to register for initial coverage with the SSS up to the day of his/her 60th birthday. When a person registers to SSS, he/she becomes a member for life and is entitled to the benefits, privileges, and services provided by the SSS, for as long as he/she meets their qualifying conditions. To comply with the requirements of the Ease of Doing Business and Efficient Government Services Delivery Act of 2018 (Republic Act No. 11032), the SSS has adopted a digital transformation of its processes including the issuance of SS numbers to its members, implemented mandatorily in July 2020. Following this, an Online Application for SS Number with an option for uploading supporting documents was implemented effective December 2020.</Paragraph>
            <Button href_url='https://member.sss.gov.ph/members/rcsmi/main.html' className='bg-[#006093] hover:bg-[#006993]'>CLICK HERE TO REGISTER</Button>
          </div>
          {/*  */}
          <div className='space-y-10'>
            <Heading5>Contributions</Heading5>
            <Paragraph>The monthly earnings declared by an OFW at the time of registration shall be the basis of the initial Monthly Salary Credit (MSC) and the corresponding amount of monthly contribution, but in no case shall it be lower than the prevailing minimum MSC for OFWs currently at ₱8,000. The deadline for payment of contributions for land-based OFW members is shown below:</Paragraph>
            <Table >
              <TableHeader className='border-1'>
                <TableRow>
                  <TableHead className="text-white border-r-1 bg-cyan-900 border-gray-400 text-center py-8">
                    <Heading5>Applicable Month</Heading5>
                  </TableHead>
                  <TableHead className="text-white text-center bg-cyan-900 py-8">
                    <Heading5>Payment Deadline</Heading5>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className='border-1 '>
                {contributions.map((i,idx) => (
                  <TableRow key={idx}>
                    <TableCell className='border-r-1 border-gray-400'>{i.month}</TableCell>
                    <TableCell>{i.deadline}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Paragraph>In case the payment deadline falls on a Saturday, Sunday or a holiday, payment may be made on the next working day.</Paragraph>
            <Button href_url='https://www.sss.gov.ph/sss/DownloadContent?fileName=2021-CONTRIBUTION-SCHEDULE.pdf' className='bg-[#006093] hover:bg-[#006993]'>SSS CONTRIBUTION SCHEDULE FOR LAND-BASED</Button>
          </div>
          {/*  */}
          <div className='space-y-10'>
            <Heading5>Benefits</Heading5>
            <Paragraph>Under RA 11199, all benefit provisions shall apply to covered OFWs. The benefits include retirement, death, disability, funeral, sickness, maternity, and unemployment insurance or involuntary separation benefits. These benefits are closely linked to the amount and number of contributions, with the minimum monthly pension guaranteed. The higher contribution amount and longer contribution period translate to higher benefit amounts.</Paragraph>
            <Table >
              <TableHeader className='border-1'>
                <TableRow>
                  <TableHead className="text-white border-r-1 bg-cyan-900 border-gray-400 text-center py-8">
                    <Heading5>Long-term Benefits</Heading5>
                  </TableHead>
                  <TableHead className="text-white text-center bg-cyan-900 py-8">
                    <Heading5>Short-term Benefits</Heading5>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className='border-1 '>
                {benefits.map((i,idx) => (
                  <TableRow key={idx}>
                    <TableCell className='border-r-1 border-gray-400'>{i.longTerm}</TableCell>
                    <TableCell>{i.shortTerm}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Button href_url='https://www.sss.gov.ph/sss/DownloadContent?fileName=SUMMARY_OF_BENEFITS.pdf' className='bg-[#006093] hover:bg-[#006993]'>SSS BENEFITS SUMMARY</Button>
            <Paragraph>Note: Availment of SSS benefits is only allowed for “Permanent” membership status, subject to qualifying conditions.</Paragraph>
          </div>
          {/*  */}
          <div className='space-y-10'>
            <Heading5>Loans</Heading5>
            <Paragraph>OFWs are also provided with loan privileges, subject to qualifying conditions, and is based on the amount of their contributions. Availment of loans is only allowed for those with “Permanent” membership status. For Salary Loan, a member must at least have 36 monthly contributions (or 72 months if applying for a 2-month loan; however, recency is a requirement, which means that the member must have paid at least 6 months in the 12-month period prior to a loan application. Meanwhile, a Calamity Loan is provided to members residing in or with residence in the NDRRMC (please spell out) -declared calamity areas, as required. However, the member must also have at least 36 posted monthly contributions, including recently-paid contributions. Both types of loans may be filed online through the My.SSS Portal or the SSS Mobile App.</Paragraph>
          </div>
            {/*  */}
          <div className='space-y-10'>
            <Heading5>Foreign Offices</Heading5>
            <Paragraph>To reach out to overseas Filipinos and promote its programs, the SSS has established the following Foreign Offices (FOs), mostly housed at Philippine Embassies or Consulates. Currently, there are 28 FOs providing OFWs with direct access to SSS programs and services, and keeping them under the mantle of social security protection.</Paragraph>
            <Table >
              <TableHeader className='border-1'>
                <TableRow>
                  <TableHead className="text-white border-r-1 bg-cyan-900 border-gray-400 text-center py-8">
                    <Heading5>ASIA</Heading5>
                  </TableHead>
                  <TableHead className="text-white border-r-1 bg-cyan-900 border-gray-400 text-center py-8">
                    <Heading5>EUROPE</Heading5>
                  </TableHead>
                  <TableHead className="text-white border-r-1 bg-cyan-900 border-gray-400 text-center py-8">
                    <Heading5>NORTH AMERICA</Heading5>
                  </TableHead>
                  <TableHead className="text-white text-center bg-cyan-900 py-8">
                    <Heading5>MIDDLE EAST</Heading5>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className='border-1 '>
                {foreignOffices.map((i,idx) => (
                  <TableRow key={idx}>
                    <TableCell className='border-r-1 border-gray-400'>{i.asia}</TableCell>
                    <TableCell className='border-r-1 border-gray-400'>{i.europe}</TableCell>
                    <TableCell className='border-r-1 border-gray-400'>{i.northAmerica}</TableCell>
                    <TableCell>{i.middleEast}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          {/*  */}
          <div >
            <div className='space-y-10'>
              <Heading5>OFW-Contact Services Section (OFW-CSS)</Heading5>
              <Paragraph>The OFW-CSS was established to provide a dedicated unit for faster resolution of OFW concerns. The OFW-CSS has the following contact channels that OFWs may transact with such as the verification of SS numbers, posting of contributions and loan payments, the status of membership and various benefit claim applications, and the Annual Confirmation of Pensioners (ACOP) compliance/appointment system.</Paragraph>
            </div>
            <Heading5 className='bg-cyan-900 py-8 text-white text-center m-0 border-1 border-gray-400'>AVAILABLE CONTACT CHANNELS</Heading5>
            <Table >
              <TableBody className='border-1 '>
                <TableRow >
                  <TableCell className='border-r-1 border-gray-400'>EMAIL<br/>
                    ofw.relations@sss.gov.ph</TableCell>
                  <TableCell>MOBILE CALL AND TEXT<br/>
                    Globe (0977) 804-8668<br/>
                    Smart (0998) 847-4092
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <p className='border-1 border-gray-200 border-t-0 p-4 text-center text-sm'>LANDLINE NOS.<br/>
            (+632) 8364-7796 / (+632) 8364-7798 (+632) 8709-7198 Locals 6358/6359</p>
          </div>
          {/*  */}
          <div className='space-y-10'>
            <Heading5>MY.SSS</Heading5>
            <Paragraph>My.SSS is an online service portal that allows OFW members exclusive access to their contributions and membership records. It serves as a primary interface for members in transacting with the SSS online. The portal has been enhanced from 2011 to the present, which transformed My.SSS into a one-stop-shop facility that offers various online services that allow OFWs to view their membership status, request membership records, set appointments with SSS offices, and file benefit claim/loan applications.</Paragraph>
            <Button href_url='https://www.sss.gov.ph/sss/appmanager/viewArticle.jsp?page=MySSS%20Registration' className='bg-[#006093] hover:bg-[#006993]'>MY SSS ACCOUNT CREATION</Button>
          </div>
          {/*  */}
          <div className='space-y-10'>
            <Heading5>SSS MOBILE APP</Heading5>
            <Paragraph>The SSS Mobile App is a free downloadable app for smartphone users that was launched in 2018. It is designed to provide a more convenient way for members to transact with SSS without the hassle of queuing in SSS branches. Currently, services and information accessed through the SSS Mobile App are similar to the My.SSS Portal on the SSS Website. It also allows viewing of: member’s information, posted contributions, information on benefit claims including documentary requirements, location map of SSS branch offices, salary loan application including status and balance, submission of maternity notification, generation of PRN, and online payment option through Paymaya, Gcash, Credit/Debit Card and BPI. The SSS Mobile App may be downloaded from Google Play Store, and Apple App Store.</Paragraph>
            <div className='flex items-center flex-col'>
              <a target='_blank' href='https://apps.apple.com/ph/app/sss-mobile/id1376067900' className='w-40'>
                <img src='/img-assets/gov-services/sss/app-store.png' />
              </a>
              <a target='_blank' href='https://play.google.com/store/apps/details?id=com.sssgov.sssmobileapp&hl=en&gl=US' className='w-40'>
                <img src='/img-assets/gov-services/sss/google-play.png' />
              </a>
            </div>
          </div>
          {/*  */}
          <div className='space-y-10'>
            <Heading5>OFW PAYMENT FACILITIES</Heading5>
            <Paragraph>SSS periodically conducts accreditation of banks and non-banks/remittance transfer companies for the collection of payments of OFW made from both local and foreign. In most of SSS existing payment channels and facilities, posting of contributions (and loan payments) are done on a real-time basis, and the issuance of a Payment Reference Number (PRN) has become mandatory.</Paragraph>
            <Button href_url='https://www.facebook.com/photo/?fbid=343776121195368&set=pb.100066889475143.-2207520000' className='bg-[#006093] hover:bg-[#006993]'>OFW PAYMENT FACILITIES</Button>
          </div>
          {/*  */}
          <Heading4>FREQUENTLY ASKED QUESTIONS</Heading4>
        </div>
        <div className='bg-cyan-900 max-lg:px-4 text-white w-full flex items-center flex-col justify-center py-5 mb-32 mt-10'>
        <Accordion type='single' collapsible className='max-lg:mx-4 mx-auto w-full max-w-3xl'>
          <AccordionItem value='item-1' className='border-b mb-2'>
            <AccordionHeader>
              <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                <Heading4>How do I get an SS Number as an Overseas Filipino/OFW?</Heading4>
              </AccordionTrigger>
            </AccordionHeader>
            <AccordionContent className='my-10 space-y-10'>
              <Heading5>How do I get an SS Number as an Overseas Filipino/OFW?</Heading5>
              <div className='grid grid-cols-12 gap-y-5'>
                <Paragraph className='text-center'>1.</Paragraph>
                <Paragraph className='col-span-11'>Overseas Filipinos are allowed to register for initial coverage with the SSS up to their 60th birthday. Since July 2020, online application for SS number has become mandatory</Paragraph>
              </div>
              <Paragraph>To apply for an SS number, please access the following link:</Paragraph>
              <Button href_url='https://member.sss.gov.ph/members/rcsmi/main.html' className='bg-[#006093] hover:bg-[#006993]'>CLICK HERE TO REGISTER</Button>
              <Paragraph>Overseas Filipinos may also apply for an SS number and/or register to the My.SSS portal using the SSS Mobile App. The SSS Mobile App may be downloaded from the Google Play Store, Huawei AppGallery and Apple App Store.</Paragraph>
            </AccordionContent>
          </AccordionItem>
          {/*  */}
          <AccordionItem value='item-2' className='border-b mb-2'>
            <AccordionHeader>
              <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                <Heading4>How can overseas Filipinos/OFWs reset the password of their My.SSS accounts?</Heading4>
              </AccordionTrigger>
            </AccordionHeader>
            <AccordionContent className='my-10 space-y-10'>
              <Heading5>How can overseas Filipinos/OFWs reset the password of their My.SSS accounts?</Heading5>
              <div className='grid grid-cols-12 gap-y-5'>
                <Paragraph className='text-center'>1.</Paragraph>
                <Paragraph className='col-span-11'>Follow the steps below to self-reset your My.SSS account password:

                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>a.</Paragraph>
                  <Paragraph className='col-span-11'>Go to our official website <RoseAnchor href_url='https://www.sss.gov.ph'>www.sss.gov.ph</RoseAnchor>, answer the captcha and click “MEMBER” under “Portals”.</Paragraph>
                  <Paragraph className='text-center'>b.</Paragraph>
                  <Paragraph className='col-span-11'>Click “Forgot User ID or Password”.</Paragraph>
                  <Paragraph className='text-center'>c.</Paragraph>
                  <Paragraph className='col-span-11'>Click from the two options provided to retrieve your user ID/password:<br/><br/>

                  <div className='grid grid-cols-6 gap-y-5'>
                    <Paragraph><b>Option 1</b>:</Paragraph>
                    <Paragraph className='col-span-5'>Registered email address<br/><br/>

                    <div className='grid grid-cols-12 gap-y-3'>
                      <Paragraph className='text-center'>i.</Paragraph>
                      <Paragraph className='col-span-11'>Encode the CRN/SS number, enter captcha and click “Submit”.</Paragraph>
                      <Paragraph className='text-center'>ii.</Paragraph>
                      <Paragraph className='col-span-11'>You will receive an email containing the link to self-reset your password, click “Ok” and check your email address.</Paragraph>
                      <Paragraph className='text-center'>iii.</Paragraph>
                      <Paragraph className='col-span-11'>Click “Click here” and you will be directed to the password resetting page.</Paragraph>
                      <Paragraph className='text-center'>iv.</Paragraph>
                      <Paragraph className='col-span-11'>Encode the User ID, Preferred Password and confirm Preferred Password, then click “Submit”.</Paragraph>
                      <Paragraph className='text-center'>v.</Paragraph>
                      <Paragraph className='col-span-11'>After successfully resetting your password, you will be directed to your My.SSS member account.</Paragraph>
                    </div><br/>

                    <b>Note</b>: Above procedures are applicable for those whose e-mail address used during SSS Web registration is still active/working.
                    </Paragraph>
                    <Paragraph><b>Option 2</b>:</Paragraph>
                    <Paragraph className='col-span-5'>Security Questions and Answers<br/><br/>

                    <div className='grid grid-cols-12 gap-y-3'>
                      <Paragraph className='text-center'>i.</Paragraph>
                      <Paragraph className='col-span-11'>Encode the CRN/SS number and click the search button.</Paragraph>
                      <Paragraph className='text-center'>ii.</Paragraph>
                      <Paragraph className='col-span-11'>Encode the answers to your security questions, click the box before “I’m not a robot”, then click “Submit”.</Paragraph>
                      <Paragraph className='text-center'>iii.</Paragraph>
                      <Paragraph className='col-span-11'>Encode your user ID and preferred password, and re-encode your confirmed preferred password, then click “Submit”.</Paragraph>
                      <Paragraph className='text-center'>iv.</Paragraph>
                      <Paragraph className='col-span-11'>After successfully resetting your password, you will be directed to your My.SSS member account.</Paragraph>
                    </div><br/>

                    <b>Note</b>: If you have not yet provided your Security Questions and Answers, your My.SSS account will automatically prompt you to set up your Security Questions and Answers upon log-in.
                    </Paragraph>
                  </div>
                  </Paragraph>
                </div>
                </Paragraph>
                {/*  */}
                <Paragraph className='text-center'>2.</Paragraph>
                <Paragraph className='col-span-11'>You may also send an email request to ofw.relations@sss.gov.ph for password resetting.</Paragraph>
              </div>
              <Paragraph>To apply for an SS number, please access the following link:</Paragraph>
              <Button href_url='https://member.sss.gov.ph/members/rcsmi/main.html' className='bg-[#006093] hover:bg-[#006993]'>CLICK HERE TO REGISTER</Button>
              <Paragraph>Overseas Filipinos may also apply for an SS number and/or register to the My.SSS portal using the SSS Mobile App. The SSS Mobile App may be downloaded from the Google Play Store, Huawei AppGallery and Apple App Store.</Paragraph>
            </AccordionContent>
          </AccordionItem>
          {/*  */}
          <AccordionItem value='item-3' className='border-b mb-2'>
            <AccordionHeader>
              <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                <Heading4>How can overseas Filipinos/OFWs view their SSS records (status of contributions, benefits, loans)?</Heading4>
              </AccordionTrigger>
            </AccordionHeader>
            <AccordionContent className='my-10 space-y-10'>
              <Heading5>How can overseas Filipinos/OFWs view their SSS records (status of contributions, benefits, loans)?</Heading5>
              <Paragraph>Overseas Filipinos can view their member records and avail of other services/transactions online through their registered My.SSS account.<br/><br/>

              To register your My.SSS account, please access the following link – <RoseAnchor href_url='https://member.sss.gov.ph/members/'>https://member.sss.gov.ph/members/</RoseAnchor><br/><br/>

              To learn more of other SSS online services/transactions available through the My.SSS portal or the SSS Mobile App, please access the following link – <RoseAnchor href_url='https://www.facebook.com/SSSPh/posts/248912680681713'>https://www.facebook.com/SSSPh/posts/248912680681713</RoseAnchor>.</Paragraph>
            </AccordionContent>
          </AccordionItem>
          {/*  */}
          <AccordionItem value='item-4' className='border-b mb-2'>
            <AccordionHeader>
              <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                <Heading4>How much is the monthly contribution for overseas Filipinos/OFWs?</Heading4>
              </AccordionTrigger>
            </AccordionHeader>
            <AccordionContent className='my-10 space-y-10'>
              <Heading5>How much is the monthly contribution for overseas Filipinos/OFWs?</Heading5>
              <Paragraph>The monthly earnings declared by overseas Filipinos at the time of registration shall be the basis of their initial Monthly Salary Credit (MSC) and the corresponding amount of monthly contribution, but in no case shall it be lower than the prevailing minimum MSC for overseas Filipinos currently at ₱8,000 (currently equivalent to ₱1,040 monthly contribution).<br/><br/>

              To view the prevailing SSS Contribution Schedule for OFWs (effective January 2021), please access the following link – <RoseAnchor href_url='https://www.sss.gov.ph/sss/DownloadContent?fileName=2021-CONTRIBUTION-SCHEDULE.pdf'>https://www.sss.gov.ph/sss/DownloadContent?fileName=2021-CONTRIBUTION-SCHEDULE.pdf</RoseAnchor>.</Paragraph>
            </AccordionContent>
          </AccordionItem>
          {/*  */}
          <AccordionItem value='item-5' className='border-b mb-2'>
            <AccordionHeader>
              <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                <Heading4>What is the deadline in the payment of OFW contributions?</Heading4>
              </AccordionTrigger>
            </AccordionHeader>
            <AccordionContent className='my-10 space-y-10'>
              <Heading5>What is the deadline in the payment of OFW contributions?</Heading5>
              <Paragraph>The deadline for the payment of contributions of land-based OFW members shall be as follows:</Paragraph>
              <Table>
                <TableHeader className='border-1'>
                  <TableRow>
                    <TableHead className="text-white border-r-1 bg-cyan-900 border-gray-400 text-center py-8">
                      <Heading5>Applicable Month</Heading5>
                    </TableHead>
                    <TableHead className="text-white text-center bg-cyan-900 py-8">
                      <Heading5>Payment Deadline</Heading5>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className='border-1 '>
                  {contributions.map((i,idx) => (
                    <TableRow key={idx}>
                      <TableCell className='border-r-1 border-gray-400'>{i.month}</TableCell>
                      <TableCell>{i.deadline}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <Paragraph>In case the payment deadline falls on a Saturday, Sunday or a holiday, payment may be made on the next working day.</Paragraph>
            </AccordionContent>
          </AccordionItem>
          {/*  */}
          <AccordionItem value='item-6' className='border-b mb-2'>
            <AccordionHeader>
              <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                <Heading4>How can overseas Filipinos/OFWs pay their contributions and/or settle their loan obligations/amortizations?</Heading4>
              </AccordionTrigger>
            </AccordionHeader>
            <AccordionContent className='my-10 space-y-10'>
              <Heading5>How can overseas Filipinos/OFWs pay their contributions and/or settle their loan obligations/amortizations?</Heading5>
              <Paragraph>The use of Payment Reference Number (PRN) has become mandatory in the payment of contributions (including loan amortizations). Overseas Filipinos/OFWs can generate PRN by accessing their My.SSS account through the web or through the SSS Mobile App (i.e., with payment facilities such as Paymaya, GCash, Credit Card/Debit Card and BPI). They may also pay their contribution in all local SSS branches with tellering facilities while Auto Debit Arrangement (ADA) is also an option for account holders of participating Philippine banks.<br/><br/>

              For more information on other available SSS payment channels for land-based overseas Filipinos/OFWs, please access the following link:<br/><br/>

              <RoseAnchor href_url='https://www.facebook.com/SSSPh/posts/305048681734779'>https://www.facebook.com/SSSPh/posts/305048681734779</RoseAnchor></Paragraph>
            </AccordionContent>
          </AccordionItem>
          {/*  */}
          <AccordionItem value='item-7' className='border-b mb-2'>
            <AccordionHeader>
              <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                <Heading4>How can overseas Filipinos/OFWs file their benefit claim applications?</Heading4>
              </AccordionTrigger>
            </AccordionHeader>
            <AccordionContent className='my-10 space-y-10'>
              <Heading5>How can overseas Filipinos/OFWs file their benefit claim applications?</Heading5>
              <div className='grid grid-cols-5'>
                <Table className='col-span-4'>
                  <TableHeader className='border-1'>
                    <TableRow>
                      <TableHead className="text-white border-r-1 bg-cyan-900 border-gray-400 pl-4 py-8">
                        <Heading5 className='mr-5'>SSS Benefit Claim</Heading5>
                      </TableHead>
                      <TableHead className="text-white bg-cyan-900 pl-4 py-8">
                        <Heading5>Available Channels</Heading5>
                      </TableHead>
                      <TableHead className="bg-cyan-900 border-r-1 border-gray-400 py-8"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className='border-1 '>
                      <TableRow>
                        <TableCell className='border-r-1 border-gray-400'></TableCell>
                        <TableCell className='border-r-1 border-gray-400'><b>Online</b><br/>
                        (My.SSS Portal)
                        </TableCell>
                        <TableCell className='border-r-1 border-gray-400'><b>Over-the-Counter</b><br/>
                        (Local SSS Branches and Foreign Offices)
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className='border-r-1 border-gray-400'><b>1. Disability</b></TableCell>
                        <TableCell className='border-r-1 border-gray-400'></TableCell>
                        <TableCell className='border-r-1 border-gray-400'><p className='text-center'>✔</p></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className='border-r-1 border-gray-400'><b>2. Death</b></TableCell>
                        <TableCell className='border-r-1 border-gray-400'><p className='text-center'>✔</p><br/><br/>
                        
                        For qualified dependent legal spouse (not remarried, cohabitated or have entered in live-in relationships)</TableCell>
                        <TableCell className='border-r-1 border-gray-400'><p className='text-center'>✔</p><br/><br/>
                        
                        For those under the following cases:<br/><br/>

                        <div className='grid grid-cols-6 gap-y-3'>
                          <p className='text-center'>-</p>
                          <p className='col-span-5'>Deceased has outstanding SILP/Privatization Loan Program/Educational Loan Program/Vocational Technology Program</p>
                          <p className='text-center'>-</p>
                          <p className='col-span-5'>Claimant is incapacitated, under guardianship or confined in institution (penitentiary, correctional, or rehabilitation)</p>
                          <p className='text-center'>-</p>
                          <p className='col-span-5'>Application under Portability Law or Bilateral Social Security Agreements (SSAs)</p>
                          <p className='text-center'>-</p>
                          <p className='col-span-5'>Non-availability or late registration of DC issued by LCR or PSA</p>
                          <p className='text-center'>-</p>
                          <p className='col-span-5'>With adjustment or for re-adjudication of claim</p>
                        </div></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className='border-r-1 border-gray-400'><b>3. Retirement</b></TableCell>
                        <TableCell className='border-r-1 border-gray-400'><p className='text-center'>✔</p><br/><br/>
                        
                        For qualified employees, self-employed voluntary members, and land-based OFWs.</TableCell>
                        <TableCell className='border-r-1 border-gray-400'><p className='text-center'>✔</p><br/><br/>
                        
                        For those under the following cases:<br/><br/>
                        
                        <div className='grid grid-cols-6 gap-y-3'>
                          <p className='text-center'>-</p>
                          <p className='col-span-5'>Deceased has outstanding SILP/Privatization Loan Program/Educational Loan Program/Vocational Technology Program</p>
                          <p className='text-center'>-</p>
                          <p className='col-span-5'>With outstanding SILP/Privatization Loan Program/Educational Loan Program/Vocational Technology Program</p>
                          <p className='text-center'>-</p>
                          <p className='col-span-5'>With dependent child/ren under guardianship</p>
                          <p className='text-center'>-</p>
                          <p className='col-span-5'>Application under Portability Law or Bilateral Social Security Agreement (SSA)</p>
                          <p className='text-center'>-</p>
                          <p className='col-span-5'>Member is incapacitated, under guardianship or confined in an institution (penitentiary, rehabilitation)</p>
                        </div></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className='border-r-1 border-gray-400'><b>4. Funeral</b></TableCell>
                        <TableCell className='border-r-1 border-gray-400'><p className='text-center'>✔</p><br/><br/>
                        
                        For qualified SSS-member claimants who defrayed the cost of Funeral expenses.</TableCell>
                        <TableCell className='border-r-1 border-gray-400'><p className='text-center'>✔</p><br/><br/>
                        
                        For qualified non-SSS member claimants (no issued SS number)</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className='border-r-1 border-gray-400'><b>5. Sickness</b></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className='border-r-1 border-gray-400'><b>6. Maternity</b></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className='border-r-1 border-gray-400'><b>7. Unemployment</b></TableCell>
                      </TableRow>
                  </TableBody>
                </Table>
                <div className='border-1 border-l-0 border-gray-200 '>
                  <Heading5 className='py-[60px] pl-4 border-b-1 border-gray-100'>Remarks</Heading5>
                  <p className='px-4 py-8'>For the list of SSS branches and offices, click <RoseAnchor href_url='https://www.sss.gov.ph/sss/showBranchDirectory.action'>here</RoseAnchor>.</p>
                </div>
              </div>
              <Paragraph><b>Note</b>: Online claim applications are subject to pre-requisites for online filing (e.g., approved Disbursement Account Enrollment Module, filer is qualified/covered by policy for online filing for a particular benefit). Exemption cases not covered by online filing are accepted at SSS branches/foreign offices, depending on the condition/case, as may be determined by the SSS.</Paragraph>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        </div>
      </section>
    </>
  )
}