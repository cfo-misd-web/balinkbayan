import { createFileRoute } from '@tanstack/react-router'
import Paragraph from '@/components/user/shared/paragraph'
import BiggerBanner from '@/components/user/shared/banner/bigger-banner'
import Heading4 from '@/components/user/shared/headings/heading-4'
import Heading5 from '@/components/user/shared/headings/heading-5'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { AccordionHeader } from '@radix-ui/react-accordion'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
import { Separator } from '@radix-ui/react-separator'
import RoseAnchor from '@/components/user/shared/anchors/rose-anchor'

export const Route = createFileRoute(
  '/(public)/__p/start-business/investment-op/services',
)({
  component: RouteComponent,
})

function RouteComponent() {
  const technologyShops = [
    {
      advantagesTitle: 'Huge short-term credit demand',
      advantagesDesc: ': Micro-lending caters to individuals who are in need to pay short-term financial obligations. Some of them are small and marginal farmers, rural artisans, weavers and the self-employed.',
      disadvantagesTitle: 'Risky',
      disadvantagesDesc: ': Individuals who acquire loans from micro-lending often belong to low economic level. Loans are also exempted from rules and regulations which may be issued by the Monetary Board with respect to unsecured loans under Section 41 of the General Banking Law of 2000.',
    },
    {
      advantagesTitle: 'Fast processing of loans',
      advantagesDesc: ': Unlike banks, micro-lending does not require their clients to undergo tedious process to acquire loan.',
      disadvantagesTitle: '',
      disadvantagesDesc: '',
    },
  ]
  const microcredit = [
    {
      advantagesTitle: 'Social Media Engagement',
      advantagesDesc: ': According to UM, a division of IPG Mediabrands, Filipinos are the most active in social media engagement.',
      disadvantagesTitle: 'Fast-paced technology advances',
      disadvantagesDesc: ': Continuous innovation leads to the need for constant programs updates and part replacements',
    },
    {
      advantagesTitle: 'Constant need for photocopy and printing services',
      advantagesDesc: ': Students constantly need to photocopy study materials and printing of school papers.',
      disadvantagesTitle: 'Internet connection',
      disadvantagesDesc: ': The internet service in the Philippines is below average',
    },
    {
      advantagesTitle: 'Popularity of computer shop services',
      advantagesDesc: ': This includes online games and chat, movie and audio downloads, and video streaming.',
      disadvantagesTitle: '',
      disadvantagesDesc: '',
    },
  ]
  const pawnshop = [
    {
      advantagesTitle: 'Security',
      advantagesDesc: ': In case of default; loans are backed by collateral offering a safety net for pawnshop owners.',
      disadvantagesTitle: 'Risky',
      disadvantagesDesc: ': Individuals who acquire loans from pawnshops often belong to low economic level',
    },
    {
      advantagesTitle: 'Huge Demand',
      advantagesDesc: ': Pawnshop caters to individuals who are in need to pay short-term financial obligations but are left unattended by banks.',
      disadvantagesTitle: '',
      disadvantagesDesc: '',
    },
    {
      advantagesTitle: 'Fast Processing of Loans',
      advantagesDesc: ': Unlike banks, pawnshops do not require their clients to undergo tedious process to acquire loan.',
      disadvantagesTitle: '',
      disadvantagesDesc: '',
    },
  ]
  const healthWellness = [
    {
      advantagesTitle: 'Low initial investment',
      advantagesDesc: ': Tourist inns require smaller investment in relation to hotels and resorts.',
      disadvantagesTitle: 'High cost',
      disadvantagesDesc: ': Owners need to spend money on high quality and durable equipment and supplies, as well as maintenance. Renovation of the place should also be done to suit the ambiance/theme of the business.',
    },
    {
      advantagesTitle: 'Reasonable price',
      advantagesDesc: ': Tourist inns are known for giving affordable prices to tourist who can’t afford hotel accommodation.',
      disadvantagesTitle: 'Competition',
      disadvantagesDesc: ': Spas,there is a seasonal demand in the tourism industry. The holidays and summer vacation are the peak seasons of tourist inns.',
    },
    {
      advantagesTitle: 'Create jobs for the locals',
      advantagesDesc: ': Tourist inns support employment generation in local areas.',
      disadvantagesTitle: '',
      disadvantagesDesc: '',
    },
  ]
  const tourismInns = [
    {
      advantagesTitle: 'Creative Liberty',
      advantagesDesc: ': For places such as spas, salons, and gyms, the owner could exercise his/her creativity through the design/theme of the establishment.',
      disadvantagesTitle: 'Seasonal demand',
      disadvantagesDesc: ': There are emerging businesses offering the same services. The owner should come up with unique promos to attract customers',
    },
    {
      advantagesTitle: 'High need',
      advantagesDesc: ': Students and working adults have the need to relax and be pampered.',
      disadvantagesTitle: '',
      disadvantagesDesc: '',
    },
  ]
  const travelAgencies = [
    {
      advantagesTitle: 'Network expansion',
      advantagesDesc: ': Agents have the opportunity to widen their network through establishing contacts with different companies/hotels/airlines.',
      businessIncentive: [],
      tezIncentive: [],
      disadvantagesTitle: 'Need for wide network',
      disadvantagesDesc: ': Owners should have a wide network/contacts for easy organization of tour promos and packages.',
    },
    {
      advantagesTitle: 'High need for the service',
      advantagesDesc: ': The Tourism Act of 2009 (RA 9593) provides incentives for Primary Tourism Enterprises and Secondary Tourism Enterprises that are registered with the Tourism Infrastructure and Enterprise Zone Authority (TIEZA). Tourism businesses in the tourism economic zone (TEZ) are given incentives such as:',
      businessIncentive: [
        {
          Incens: '- income tax holiday'
        },
        {
          Incens: '- gross income taxation'
        },
        {
          Incens: '- tax and customs duties exemption during importation'
        },
        {
          Incens: '- tax credit'
        },
        {
          Incens: '- social responsibility incentive'
        },
        {
          Incens: '- employment of foreign national'
        },
        {
          Incens: '- protection from requisition of investment'
        },
      ] ,
      tezIncentive: [],
      disadvantagesTitle: 'Challenging preparation',
      disadvantagesDesc: ': Tour promos and packages include hotel accommodations, itineraries, and transport services.',
    },
    {
      advantagesTitle: '',
      advantagesDesc: 'Tourism businesses outside the TEZ are given incentives such as:',
      businessIncentive: [],
      tezIncentive: [
        {
          Incens: '- economic incentives'
        },
        {
          Incens: '- income tax holiday'
        },
        {
          Incens: '- tax and customs duties exemption during importation'
        },
      ],
      disadvantagesTitle: '',
      disadvantagesDesc: '',
    },
  ]
  const transportationServices = [
    {
      advantagesTitle: 'Need for PUVs',
      advantagesDesc: ': PUVs are needed every day by majority of Filipino in order to go to their destinations.',
      disadvantagesTitle: 'Traffic jams',
      disadvantagesDesc: ': Almost all major roads and streets in the Philippines are slow-moving',
    },
    {
      advantagesTitle: 'High number of commuters',
      advantagesDesc: ': The population that needs PUVS is high; therefore, PUVs have more passengers.',
      disadvantagesTitle: 'High competition',
      disadvantagesDesc: ': High competition – Due to high demands for PUVs, many choose to set up PUV businesses, thus, increasing competition',
    },
  ]

  return (
    <>
      <BiggerBanner text='Business Opportunities in the PH' label='Services' img_url='/img-assets/start-a-business/services/airport-man-travel-1822133.jpg' />
      <section className='text-cyan-900'>
        <div className='max-lg:mx-4 3xl:max-w-[1400px] 2xl:max-w-[1280px] lg:max-w-[1080px] flex flex-col items-center justify-center mx-auto my-20 bg-light space-y-20'>
          <Paragraph>The service sector is considered as one of the country’s primary tools for economic growth. According to the National Economic and Development Authority, the service sector can give significant contributions to the country’s inclusive growth. Aside from the employment and export earnings it provides, it also allows economic transformation through inter-sectoral connections. Sectors connected to the service sector include agriculture, manufacturing, and retail trading.<br/><br/>

          The service sector is expected to grow further because of the country’s economic development plan.<br/><br/>

          Businesses in the service sector provide facilities, amenities, and assistances to customers. This includes financial services, travel and tourism, health and wellness, computer and printing shops, and public transportation services.
          
          
          <p className='italic font-light text-center'><br/>(Sources: National Economic and Development Authority, Asian Development Bank, and Economy Watch)</p>
          </Paragraph>
          {/*  */}
          <div className='max-lg:mx-4 3xl:max-w-[1400px] 2xl:max-w-[1280px] lg:max-w-[1080px] flex flex-col items-center justify-center mx-auto bg-light'>
            <Heading4 className='text-center'>Services</Heading4>
          </div>
        </div>
        <Heading5 className='max-lg:mx-4 mx-auto w-full max-w-3xl'>Technology</Heading5>
        <div className='bg-cyan-900 max-lg:px-4 text-white w-full flex items-center flex-col justify-center py-5 mb-32'>
          <Accordion type='single' collapsible className='max-lg:mx-4 mx-auto w-full max-w-3xl'>
            <AccordionItem value='item-1' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <Heading4>Computer, printing, and photocopy shops</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <div className='flex flex-row items-center space-x-20'>
                  <Paragraph>Computer, printing, and photocopy shops are popular among students and non-students alike. These services are important in their studies, jobs, and at times, leisure.</Paragraph>
                  <img src='/img-assets/start-a-business/services/service-computer.png' />
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
                    {technologyShops.map((i,idx) => (
                      <TableRow key={idx}>
                        <TableCell className='border-r-1 border-gray-400'><b>{i.advantagesTitle}</b>{i.advantagesDesc}</TableCell>
                        <TableCell><b>{i.disadvantagesTitle}</b>{i.disadvantagesDesc}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                {/*  */}
                <Paragraph className='text-center italic font-light'>*from <RoseAnchor href_url='http://www.gmanetwork.com/news/story/367983/scitech/technology/pinoys-lead-the-world-in-social-media-engagement-study'>http://www.gmanetwork.com/news/story/367983/scitech/technology/pinoys-lead-the-world-in-social-media-engagement-study</RoseAnchor></Paragraph>
                {/*  */}
                <Paragraph><b>How to Register a Computer, Printing, and Photocopy Business</b><br/><br/>
                
                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>1.</Paragraph>
                  <Paragraph className='col-span-11'>Register the Business Name at the Department of Trade and Industry (for Single Proprietorships) or the Securities and Exchange Commission (for Partnerships and Corporations).<br/><br/>

                  <b>Validity</b>: 5 years<br/><br/>

                  The law governing the registration of business name is Act No. 3883, as amended by Act No. 41476 and R.A. No. 863, otherwise known as the Business Name Law.
                  </Paragraph>
                  <Paragraph className='text-center'>2.</Paragraph>
                  <Paragraph className='col-span-11'>Get a Mayor’s permit from the municipality or city where the business is located.<br/><br/>

                  <b>Validity</b>: 1 year
                  </Paragraph>
                  <Paragraph className='text-center'>3.</Paragraph>
                  <Paragraph className='col-span-11'>Apply for an Employer’s Tax Identification Number (TIN) at the Bureau of Internal Revenue (BIR).</Paragraph>
                  <Paragraph className='text-center'>4.</Paragraph>
                  <Paragraph className='col-span-11'>Investors should register for a Social Security System (SSS) Certificate.</Paragraph>
                  <Paragraph className='text-center'>5.</Paragraph>
                  <Paragraph className='col-span-11'>For businesses with five or more employees, owners must register with the Department of Labor and Employment (DOLE).</Paragraph>
                </div></Paragraph>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        {/*  */}
        <Heading5 className='max-lg:mx-4 mx-auto w-full max-w-3xl'>Financial</Heading5>
          <div className='bg-cyan-900 max-lg:px-4 text-white w-full flex items-center flex-col justify-center py-5 mb-32'>
          <Accordion type='single' collapsible className='max-lg:mx-4 mx-auto w-full max-w-3xl'>
            <AccordionItem value='item-1' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <Heading4>Microcredit</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <div className='flex flex-row items-center space-x-20'>
                  <Paragraph>The General Baking Law of 2000 directs the Bangko Sentral ng Pilipinas (BSP) towards the promotion and maintenance of a stable and efficient banking and financial system that is globally competitive, dynamic, and responsive to the demands of a developing economy. However, as a heavily regulated sector, financial institutions fail to address the needs of individuals from low-income level. This segment of society is usually in need of short-term and small amount of loans, which are also uncollateralized.</Paragraph>
                  <img src='/img-assets/start-a-business/services/service-financial.png' />
                </div>
                <Paragraph>Through Social Reform and Alleviation Act, the demand of the low income bracket is recognized and resolved. Particularly, one of it salient provisions is the creation and development of microfinance. Microfinance is noted as an essential tool to support poverty reduction. The EIU Global Microscope on the Microfinance Business Environment commended Bangko Sentral ng Pilipinas (BSP) for continuously promoting an enabling environment for microfinance.<br/><br/>

                In 2013, the aggregate savings of microfinance clients attained a peak at P 8.9 billion despite of being unregulated by the General Banking Law. As a non-regulated sector, microfinance offers interest rates higher than the market rates. The upward trend of microfinance makes it as a viable business and investment opportunities. In the Philippines, there are two widely known types of microfinance: microcredit and pawn shop.<br/><br/>

                Microcredit, also known as microfinance loans, are small loans granted to the poor and low-income households for their microenterprise and small businesses to enable them to raise their income levels and improve their living standards. Other microfinance products include loans, deposits, transfers or payments or micro insurance.<br/><br/>

                Microfinance loans are typically unsecured, for relatively short periods of time (180 days) with monthly (or more frequent) amortizations of interest and principal, and often featuring a joint and several guarantee of one or more persons and, certainly, seldom with tangible collateral.</Paragraph>
                {/*  */}
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
                    {microcredit.map((i,idx) => (
                      <TableRow key={idx}>
                        <TableCell className='border-r-1 border-gray-400'><b>{i.advantagesTitle}</b>{i.advantagesDesc}</TableCell>
                        <TableCell><b>{i.disadvantagesTitle}</b>{i.disadvantagesDesc}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                {/*  */}
                <Paragraph><b>How to establish a micro-lending business?</b><br/><br/>
                
                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>1.</Paragraph>
                  <Paragraph className='col-span-11'>Secure a Certificate of Authority<br/><br/>

                  In forming a microfinance organization, choose the corporate and trade name that shall include the word “Microfinance” to indicate its primary activity. The purpose clause of the Articles of Incorporation shall state that the organization conducts microfinance operations pursuant to Republic Acy No. 8425, the Social Reform and Poverty Alleviation Act.</Paragraph>
                  <Paragraph className='text-center'>2.</Paragraph>
                  <Paragraph className='col-span-11'>Acquire the minimum capital of P150, 000</Paragraph>
                  <Paragraph className='text-center'>3.</Paragraph>
                  <Paragraph className='col-span-11'>Complete all the necessary requirements<br/><br/>
                  
                  Microfinance shall file with SEC four copies of duly accomplished application form to operate as a Micro-finance-NGO, signed under oath by the President, together with the following documents in the prescribed form:<br/><br/>

                  <div className='grid grid-cols-12 gap-y-5'>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Information sheet</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>NBI clearance of each director/officer</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>President Sworn Statement and Undertaking</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Business plan including method of marketing its product and sources of funds and maturities of credit</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Statement of its compliance with Rule 17, 1 (2) (A) (i) and (ii) of the Amended Implementing Rules and Regulations of the Securities Regulation Code</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>A location map indicating the exact address of the principal office signed by the President and countersigned by the Corporate Secretary</Paragraph>
                  </div>
                  </Paragraph>
                </div>
                </Paragraph>
                <Paragraph className='text-center'>4.</Paragraph>
                <Paragraph className='col-span-11'>Register the micro-lending business with the Securities and Exchange Commission (SEC)</Paragraph>
                {/*  */}
                <Paragraph><b>Regulation and Compliance</b><br/><br/>
                
                Microcredit business is under the provision of the “Rules and Regulation on Microfinance Non-Government Organization” which provides specific guidelines on capital requirement, amount and charges on loans, maintenance of books of accounts and records, and the authority of SEC. The Bangko Sentral ng Pilipinas also supervises the sector through implementing circulars related to microfinance:<br/><br/>

                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>(1)</Paragraph>
                  <Paragraph className='col-span-11'>Microfinance Loan Regulations</Paragraph>
                  <Paragraph className='text-center'>(2)</Paragraph>
                  <Paragraph className='col-span-11'>Rediscounting for Microfinance Loans</Paragraph>
                  <Paragraph className='text-center'>(3)</Paragraph>
                  <Paragraph className='col-span-11'>Reporting Requirements for Microfinance Loans</Paragraph>
                  <Paragraph className='text-center'>(4)</Paragraph>
                  <Paragraph className='col-span-11'>Documentary Requirements for Microfinance Loans Clients</Paragraph>
                  <Paragraph className='text-center'>(5)</Paragraph>
                  <Paragraph className='col-span-11'>Microfinance Products</Paragraph>
                  <Paragraph className='text-center'>(6)</Paragraph>
                  <Paragraph className='col-span-11'>Governance of Microfinance Banks</Paragraph>
                  <Paragraph className='text-center'>(7)</Paragraph>
                  <Paragraph className='col-span-11'>Microfinance Ratings</Paragraph>
                </div><br/>
                </Paragraph>
              </AccordionContent>
            </AccordionItem>
            {/*  */}
            {/*  */}
            <AccordionItem value='item-2' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <Heading4>Pawnshop</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <div className='flex flex-row items-center space-x-20'>
                  <Paragraph>Pawn shop is a business entity engaged in lending money on personal property which serves as security for loans. Most pawnshops are involved in short-term loans which are based on the value of the personal property used as collateral. When the loan is fully paid, the collateral is re-claimed by the customer.</Paragraph>
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
                    {pawnshop.map((i,idx) => (
                      <TableRow key={idx}>
                        <TableCell className='border-r-1 border-gray-400'><b>{i.advantagesTitle}</b>{i.advantagesDesc}</TableCell>
                        <TableCell><b>{i.disadvantagesTitle}</b>{i.disadvantagesDesc}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                {/*  */}
                <Paragraph><b>How to register your pawn shop?</b><br/><br/>
                
                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>1.</Paragraph>
                  <Paragraph className='col-span-11'>Choose a pawnshop name and call Bangko Sentral ng Pilipinas (BSP) pawnshop hotline to check if your chosen pawnshop name is still available.</Paragraph>
                  <Paragraph className='text-center'>2.</Paragraph>
                  <Paragraph className='col-span-11'>Register your business with; the Bureau of Commerce, for sole proprietorship; or the Securities and Exchange Commission, for partnerships or corporations.</Paragraph>
                  <Paragraph className='text-center'>3.</Paragraph>
                  <Paragraph className='col-span-11'>Secure a business permit from the city or municipality where the pawnshop will be established.</Paragraph>
                  <Paragraph className='text-center'>4.</Paragraph>
                  <Paragraph className='col-span-11'>Register the pawnshop with the BSP by submitting all the requirements below.</Paragraph>
                </div>
                </Paragraph>
                {/*  */}
                <Paragraph><b>Requirements:</b><br/><br/>
                
                Incorporations papers duly authenticated by the Securities Exchange Commission (for corporation and partnership)/CDA Registration (for Cooperative) (Activity applied for should be indicated/added in the purpose clause);<br/><br/>
                
                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Copy of certificate of Registration duly authenticated by the Department of Trade and Industry (for single proprietorship);</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Copy of business license/permit from the city or municipality having territorial jurisdiction over the place of establishment and operation (Activity applied for should be indicated/added in the kind of business and original copy should be presented);</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>List of stockholders/partners/proprietor/directors/principal officers as the case may be; (Name, Designation, Contact No. and Address);</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Notarized Deed of Undertaking (Annex B) to strictly comply with the requirements of all relevant laws, rules and regulations, signed either by the owner, partner, president or officer of equivalent rank;</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Two (2) copies passport size pictures and Xerox copy of one (1) valid ID with picture and signature of the proprietor or the officer duly authorized by the Board of Directors or Partners; and</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>For Remittance Agent (RA) Only – notarized document on tie-up agreement with a remittance company (REMCO)/Remittance Service Provider (RSP).<br/><br/>

                  <div className='grid grid-cols-6 gap-y-5'>
                    <Paragraph className='text-center'>1.</Paragraph>
                    <Paragraph className='col-span-5'>For any REMCO/RSP or counterparty based abroad, proof that the REMCO/RSP or counterparty is licensed by the regulatory authority to engage in the remittance business and is subject to the anti-money laundering laws of the country;</Paragraph>
                    <Paragraph className='text-center'>2.</Paragraph>
                    <Paragraph className='col-span-5'>For an entity acting as local agent of a REMCO/RSP, a copy of agreement between the local agent and the REMCO/RSP; and</Paragraph>
                    <Paragraph className='text-center'>3.</Paragraph>
                    <Paragraph className='col-span-5'>For an entity that is a sub-agent or sub-representative of a local agent, copy of tie-up agreement between sub agent/sub-representative and local agent.</Paragraph>
                  </div>
                  </Paragraph>
                </div>
                </Paragraph>
                {/*  */}
                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>5.</Paragraph>
                  <Paragraph className='col-span-11'>Acquire the minimum paid-in capital of P 100, 000.</Paragraph>
                  <Paragraph className='text-center'>6.</Paragraph>
                  <Paragraph className='col-span-11'>The application is processed for two to three weeks.</Paragraph>
                </div>
                {/*  */}
                <Paragraph>NOTE: The pawnshop should be open within six months after the application is approved. The permit will be revoked otherwise.</Paragraph>
                <Paragraph><b>Regulation and Compliance</b><br/><br/>
                
                Pawnshops are under the regulation of the Bangko Sentral ng Pilipinas. The Presidential Decree No. 114 of January 29, 1973 specifies all the regulations on the establishment and operation of pawn shops.</Paragraph>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        {/*  */}
        {/*  */}
        <Heading5 className='max-lg:mx-4 mx-auto w-full max-w-3xl'>Health and Wellness</Heading5>
        <div className='bg-cyan-900 max-lg:px-4 text-white w-full flex items-center flex-col justify-center py-5 mb-32'>
          <Accordion type='single' collapsible className='max-lg:mx-4 mx-auto w-full max-w-3xl'>
            <AccordionItem value='item-1' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <Heading4>Health and Wellness</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <div className='flex flex-row items-center space-x-20'>
                  <Paragraph>The health and wellness industry has the potential to grow into a profitable business. It is popular among employees looking for a relaxing experience, as well as body care.</Paragraph>
                  <img src='/img-assets/start-a-business/services/service-health-wellness.png' />
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
                    {healthWellness.map((i,idx) => (
                      <TableRow key={idx}>
                        <TableCell className='border-r-1 border-gray-400'><b>{i.advantagesTitle}</b>{i.advantagesDesc}</TableCell>
                        <TableCell><b>{i.disadvantagesTitle}</b>{i.disadvantagesDesc}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                {/*  */}
                <Paragraph className='text-center italic font-light'>*from <RoseAnchor href_url='http://www.gmanetwork.com/news/story/367983/scitech/technology/pinoys-lead-the-world-in-social-media-engagement-study'>http://www.gmanetwork.com/news/story/367983/scitech/technology/pinoys-lead-the-world-in-social-media-engagement-study</RoseAnchor></Paragraph>
                {/*  */}
                <Paragraph><b>How to Register a Computer, Printing, and Photocopy Business</b><br/><br/>
                
                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>1.</Paragraph>
                  <Paragraph className='col-span-11'>Register the Business Name at the Department of Trade and Industry (for Single Proprietorships) or the Securities and Exchange Commission (for Partnerships and Corporations).<br/><br/>

                  <b>Validity</b>: 5 years<br/><br/>

                  The law governing the registration of business name is Act No. 3883, as amended by Act No. 41476 and R.A. No. 863, otherwise known as the Business Name Law.
                  </Paragraph>
                  <Paragraph className='text-center'>2.</Paragraph>
                  <Paragraph className='col-span-11'>Get a Mayor’s permit from the municipality or city where the business is located.<br/><br/>

                  <b>Validity</b>: 1 year
                  </Paragraph>
                  <Paragraph className='text-center'>3.</Paragraph>
                  <Paragraph className='col-span-11'>Apply for an Employer’s Tax Identification Number (TIN) at the Bureau of Internal Revenue (BIR).</Paragraph>
                  <Paragraph className='text-center'>4.</Paragraph>
                  <Paragraph className='col-span-11'>Investors should register for a Social Security System (SSS) Certificate.</Paragraph>
                  <Paragraph className='text-center'>5.</Paragraph>
                  <Paragraph className='col-span-11'>For businesses with five or more employees, owners must register with the Department of Labor and Employment (DOLE).</Paragraph>
                </div></Paragraph>
                {/*  */}
                <Paragraph><b>How to register a home style business?</b><br/><br/>
                
                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>1.</Paragraph>
                  <Paragraph className='col-span-11'>Register the Business Name at the Department of Trade and Industry (for Single Proprietorships) or the Securities and Exchange Commission (for Partnerships and Corporations).<br/><br/>

                  <b>Validity</b>: 5 years<br/><br/>

                  The law governing the registration of business name is Act No. 3883, as amended by Act No. 41476 and R.A. No. 863, otherwise known as the Business Name Law.</Paragraph>
                  <Paragraph className='text-center'>2.</Paragraph>
                  <Paragraph className='col-span-11'>Get a Mayor’s permit from the municipality or city where the business is located.<br/><br/>

                  <b>Validity</b>: 1 year</Paragraph>
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
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        {/*  */}
        {/*  */}
        <Heading5 className='max-lg:mx-4 mx-auto w-full max-w-3xl'>Tourism</Heading5>
        <div className='bg-cyan-900 max-lg:px-4 text-white w-full flex items-center flex-col justify-center py-5 mb-32'>
          <Accordion type='single' collapsible className='max-lg:mx-4 mx-auto w-full max-w-3xl'>
            <AccordionItem value='item-1' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <Heading4>Tourism Inns</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <div className='flex flex-row items-center space-x-20'>
                  <Paragraph>As of the third quarter of 2014, there is a continuous surge in the tourism industry. Specifically, it experienced a growth of 2.72% over its previous year’s volume for the same period. The positive trend is attributed to the marketing efforts and participation of the country in international travel fairs, as well as tourism infrastructure development undertaken.<br/><br/>

                  The growth in international visitor arrivals and domestic travel movements is expected to bring about a corresponding increase in capacity requirements and demand for new products, facilities, and services, thus paving the way for business and investment opportunities in the tourism industry.<br/><br/>

                  Tourist Inns are lodging establishments that caters to transient which does not meet the minimum requirements of an economy hotel. The anticipated growth in international visitor arrivals and domestic travel movements is expected to bring about a corresponding increase in capacity requirements and demand for new products, facilities and services, thus paving the way for the establishment of tourist inns.</Paragraph>
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
                    {tourismInns.map((i,idx) => (
                      <TableRow key={idx}>
                        <TableCell className='border-r-1 border-gray-400'><b>{i.advantagesTitle}</b>{i.advantagesDesc}</TableCell>
                        <TableCell><b>{i.disadvantagesTitle}</b>{i.disadvantagesDesc}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                {/*  */}
                <Paragraph><b>How to establish a tourist inn?</b><br/><br/>
                
                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>1.</Paragraph>
                  <Paragraph className='col-span-11'>Find a location that maximizes the potential of the tourist inn business. The following should be considered when choosing a location:<br/><br/>

                  <div className='grid grid-cols-6 gap-y-5'>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-5'><b>Potential demands</b>: Select a location that is within the area of tourist destinations such as churches, historical sitesTourist Inns, and scenic views. Spots with unique activities like diving, bungee jumping, and hiking could also be considered.</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-5'><b>Ease of transport</b>: For tourists’ convenience, the location should have readily available transport services such as airports and bus terminals. It should also have access to principal highways and roads.</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-5'><b>Services that cater to tourists’ needs</b>: The location should be near businesses that provide services that tourists require. These are laundry shops, restaurants, convenience stores, pasalubong and handicrafts stores, and other micro-businesses in the area. This boosts the potential of the tourist inn business, supports existing businesses, and upholds the tourism industry.</Paragraph>
                  </div></Paragraph>

                  <Paragraph className='text-center'>2.</Paragraph>
                  <Paragraph className='col-span-11'>Register the tourist inn business.<br/><br/>
                  
                  Complete all the necessary requirements below and pass them to the specified government agency. Unless otherwise indicated in the form, the application shall be accompanied by two (2) copies of the following documents;<br/><br/>
                  
                  <div className='grid grid-cols-12 gap-y-5'>
                    <Paragraph className='text-center'>a.</Paragraph>
                    <Paragraph className='col-span-11'>In the case of corporation or partnership, a certified true copy of the Articles of Incorporation, its by-laws, or Articles of Partnership and amendments thereof, duly registered with the Securities and Exchange Commission, and Business Name Certificate and amendments thereof, if any.</Paragraph>
                    <Paragraph className='text-center'>b.</Paragraph>
                    <Paragraph className='col-span-11'>Applicant’s latest income tax return and audited financial statements for the preceding year of its operation (not applicable for new establishments).</Paragraph>
                    <Paragraph className='text-center'>c.</Paragraph>
                    <Paragraph className='col-span-11'>List of the names of all officials and employees and their respective designations, nationalities, home addresses; for alien personnel – valid visa from the Bureau of Immigration and the appropriate permit from the Department of Labor and Employment.</Paragraph>
                    <Paragraph className='text-center'>d.</Paragraph>
                    <Paragraph className='col-span-11'>Mayor’s permit and/or municipal license.</Paragraph>
                    <Paragraph className='text-center'>e.</Paragraph>
                    <Paragraph className='col-span-11'>Such other papers or documents as may be required from time to time by the Department.<br/><br/>

                    <div className='grid grid-cols-12 gap-y-5'>
                      <Paragraph className='text-center'>&#8226;</Paragraph>
                      <Paragraph className='col-span-11'>Bedroom facilities and furnishing must meet the following minimum requirements;<br/><br/>

                      <div className='grid grid-cols-12 gap-y-3'>
                        <Paragraph className='text-center'>-</Paragraph>
                        <Paragraph className='col-span-11'>All bedrooms shall have attached toilet and bath equipped with 24-hour service of running water. They shall have adequate natural as well as artificial light and ventilation and shall be furnished with comfortable beds and quality furniture (mirror, writing table, chair, closet and dresser).</Paragraph>
                        <Paragraph className='text-center'>-</Paragraph>
                        <Paragraph className='col-span-11'>Walls shall be painted or wall-wrapped and kept clean and pleasing to the eye. Windows shall be furnished with clean and appropriate draperies. Floors shall be of good flooring materials.</Paragraph>
                        <Paragraph className='text-center'>-</Paragraph>
                        <Paragraph className='col-span-11'>All single bedrooms shall have a floor area of not less than nine (9) square meters and all twin-rooms or double-rooms shall have a floor area of not less than sixteen (16) square meters.</Paragraph>
                        <Paragraph className='text-center'>-</Paragraph>
                        <Paragraph className='col-span-11'>There shall be vacuum jugs and thermos flasks with drinking water with glasses in each bedroom. There shall be adequate supply of clean linen, blankets and towels that shall be changed regularly.</Paragraph>
                      </div>
                      </Paragraph>
                      <Paragraph className='text-center'>&#8226;</Paragraph>
                      <Paragraph className='col-span-11'>The parking space for vehicles is recommended to be proportionate to the number of lettable rooms and other public facilities of the inn.</Paragraph>
                      <Paragraph className='text-center'>&#8226;</Paragraph>
                      <Paragraph className='col-span-11'>The following areas must also be established within the vicinity of the tourist inns.<br/><br/>
                      
                      <div className='grid grid-cols-12 gap-y-3'>
                        <Paragraph className='text-center'>-</Paragraph>
                        <Paragraph className='col-span-11'>Reception and Information Counter</Paragraph>
                        <Paragraph className='text-center'>-</Paragraph>
                        <Paragraph className='col-span-11'>Telephone</Paragraph>
                        <Paragraph className='text-center'>-</Paragraph>
                        <Paragraph className='col-span-11'>Radio/ Television</Paragraph>
                        <Paragraph className='text-center'>-</Paragraph>
                        <Paragraph className='col-span-11'>Dining Room</Paragraph>
                        <Paragraph className='text-center'>-</Paragraph>
                        <Paragraph className='col-span-11'>Security</Paragraph>
                        <Paragraph className='text-center'>-</Paragraph>
                        <Paragraph className='col-span-11'>Emergency Power</Paragraph>
                        <Paragraph className='text-center'>-</Paragraph>
                        <Paragraph className='col-span-11'>Fire-fighting facilities</Paragraph>
                      </div>
                      </Paragraph>
                    </div>
                    </Paragraph>
                  </div>
                  </Paragraph>
                </div>
                </Paragraph>
                {/*  */}
                <Paragraph><b>Regulations and Compliance</b><br/><br/>
                
                Tourist inns are under the supervision of the Department of Tourism. Executive No. 120 states the rules and regulations that govern the accreditation of hotels, tourist inns, motels, apartels, resorts, pension houses and other accommodation establishments.</Paragraph>
              </AccordionContent>
            </AccordionItem>
            {/*  */}
            {/*  */}
            <AccordionItem value='item-2' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <Heading4>Travel Agencies</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <div className='flex flex-row items-center space-x-20'>
                  <Paragraph>Travel agencies provide products and services to customers who are interested in local or international travel. Aside from tickets, travel agencies may also provide car rentals, hotel accommodations, tour packages, cruises, and other items.</Paragraph>
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
                    {travelAgencies.map((i,idx) => (
                      <TableRow key={idx}>
                        <TableCell className='border-r-1 border-gray-400'>
                          <b>{i.advantagesTitle}</b>
                          {i.advantagesDesc}
                          {i.businessIncentive.map((i,idx) => (
                            <p className='text-left' key={idx}><br/>{i.Incens}<br/></p>
                          ))}
                          {i.tezIncentive.map((i,idx) => (
                            <p className='text-left' key={idx}><br/>{i.Incens}<br/></p>
                          ))}
                        </TableCell>
                        <TableCell><b>{i.disadvantagesTitle}</b>{i.disadvantagesDesc}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                {/*  */}
                <Paragraph><b>How to Register a Travel Agency Business</b><br/><br/>
                
                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>1.</Paragraph>
                  <Paragraph className='col-span-11'>Register the Business Name at the Department of Trade and Industry (for Single Proprietorships) or the Securities and Exchange Commission (for Partnerships and Corporations).<br/><br/>

                  <b>Validity</b>: 5 years<br/><br/>

                  The law governing the registration of business name is Act No. 3883, as amended by Act No. 41476 and R.A. No. 863, otherwise known as the Business Name Law.</Paragraph>
                  <Paragraph className='text-center'>2.</Paragraph>
                  <Paragraph className='col-span-11'>Get a Mayor’s permit from the municipality or city where the business is located.<br/><br/>
                  
                  <b>Validity</b>: 1 year</Paragraph>
                  <Paragraph className='text-center'>3.</Paragraph>
                  <Paragraph className='col-span-11'>Apply for an Employer’s Tax Identification Number (TIN) at the Bureau of Internal Revenue (BIR).</Paragraph>
                  <Paragraph className='text-center'>4.</Paragraph>
                  <Paragraph className='col-span-11'>Apply for Authority to Print Receipts and Invoices at the BIR.</Paragraph>
                  <Paragraph className='text-center'>5.</Paragraph>
                  <Paragraph className='col-span-11'>Investors should register for a Social Security System (SSS) Certificate.<br/><br/>
                  Social Security System<br/>
                  Loans and Investment Office<br/>
                  SSS Building, East Avenue, Diliman,<br/>
                  Quezon City<br/><br/>
                  Email: member_relations@sss.gov.ph<br/>
                  Website: <RoseAnchor href_url='https://www.sss.gov.ph'>www.sss.gov.ph</RoseAnchor></Paragraph>
                  <Paragraph className='text-center'>6.</Paragraph>
                  <Paragraph className='col-span-11'>For businesses with five or more employees, owners must register with the Department of Labor and Employment (DOLE).<br/><br/>
                  DOLE<br/>
                  Labor Standard and Enforcement Division<br/>
                  2nd Flr. Dy International Building, San Marcelino<br/><br/>
                  Hotline No.: 527-8000<br/>
                  Email: osec@dole.gov.ph<br/>
                  Website: <RoseAnchor href_url='https://www.dole.gov.ph'>www.dole.gov.ph</RoseAnchor></Paragraph>
                  <Paragraph className='text-center'>7.</Paragraph>
                  <Paragraph className='col-span-11'>To avail of incentives provided in the Tourism Act of 2009, travel agencies within a tourism economic zone (TEZ) should register with TIEZA.<br/><br/>
                  Tourism Infrastructure and Enterprise Zone Authority<br/>
                  142 Amorsolo St., Legaspi Village<br/>
                  Makati City<br/><br/>
                  Fax No.:  463-9936</Paragraph>
                  <Paragraph className='text-center'>8.</Paragraph>
                  <Paragraph className='col-span-11'>Travel agencies need to be accredited by the Department of Tourism.<br/><br/>
                  Department of Tourism Central Office<br/>
                  #351 Sen. Gil Puyat Ave., JB Bldg., Makati City<br/><br/>
                  Trunkline: (63 2) 459-5200 / 5230<br/><br/>
                  Contact the DOT Regional or District Office where the business is located.<br/>
                  <p className='text-left'>For online accreditation, visit: <RoseAnchor href_url='http://accreditationonline.tourism.gov.ph/Registration/registerpage.aspx'>http://accreditationonline.tourism.gov.ph/Registration/registerpage.aspx</RoseAnchor></p>
                  </Paragraph>
                </div>
                </Paragraph>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        {/*  */}
        {/*  */}
        <Heading5 className='max-lg:mx-4 mx-auto w-full max-w-3xl'>Transportation</Heading5>
        <div className='bg-cyan-900 max-lg:px-4 text-white w-full flex items-center flex-col justify-center py-5 mb-32'>
          <Accordion type='single' collapsible className='max-lg:mx-4 mx-auto w-full max-w-3xl'>
            <AccordionItem value='item-1' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <Heading4>Transportation Services</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <div className='flex flex-row items-center space-x-20'>
                  <Paragraph>Transportation is a public necessity that allows commuters to go to and from places by riding public utility vehicles (PUVs) such as jeepneys, buses, tricycles, pedicabs, and FXs. These PUVs follow their respective routes.<br/><br/>

                  Another type of PUVs are taxis, which allow passengers to specify a location they want to go to.</Paragraph>
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
                    {transportationServices.map((i,idx) => (
                      <TableRow key={idx}>
                        <TableCell className='border-r-1 border-gray-400'><b>{i.advantagesTitle}</b>{i.advantagesDesc}</TableCell>
                        <TableCell><b>{i.disadvantagesTitle}</b>{i.disadvantagesDesc}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                {/*  */}
                <Paragraph><b>How to Register a Public Transportation Business</b><br/><br/>
                
                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>1.</Paragraph>
                  <Paragraph className='col-span-11'>Register the Business Name at the Department of Trade and Industry (for Single Proprietorships) or the Securities and Exchange Commission (for Partnerships and Corporations).<br/><br/>

                  <b>Validity</b>: 5 years<br/><br/>

                  The law governing the registration of business name is Act No. 3883, as amended by Act No. 41476 and R.A. No. 863, otherwise known as the Business Name Law.
                  </Paragraph>
                  <Paragraph className='text-center'>2.</Paragraph>
                  <Paragraph className='col-span-11'>Get a Mayor’s permit from the municipality or city where the business is located.<br/><br/>

                  <b>Validity</b>: 1 year
                  </Paragraph>
                  <Paragraph className='text-center'>3.</Paragraph>
                  <Paragraph className='col-span-11'>Apply for an Employer’s Tax Identification Number (TIN) at the Bureau of Internal Revenue (BIR).</Paragraph>
                  <Paragraph className='text-center'>4.</Paragraph>
                  <Paragraph className='col-span-11'>Apply for Authority to Print Receipts and Invoices at the BIR.</Paragraph>
                  <Paragraph className='text-center'>5.</Paragraph>
                  <Paragraph className='col-span-11'>Investors should register for a Social Security System (SSS) Certificate.</Paragraph>
                  <Paragraph className='text-center'>6.</Paragraph>
                  <Paragraph className='col-span-11'>For businesses with five or more employees, owners must register with the Department of Labor and Employment (DOLE).</Paragraph>
                  <Paragraph className='text-center'>7.</Paragraph>
                  <Paragraph className='col-span-11'>Apply for a Professional Driver’s License (for taxis and jeepneys) or a Motorized Tricycle Operator’s Permit (for tricycles) from Land Transportation Office (LTO).</Paragraph>
                  <Paragraph className='text-center'>8.</Paragraph>
                  <Paragraph className='col-span-11'>Get a Certificate of Public Convenience (Franchise) at Land Transportation Franchising And Regulatory Board (LTFRB).</Paragraph>
                  <Paragraph className='text-center'>9.</Paragraph>
                  <Paragraph className='col-span-11'>Owners may opt to provide insurance for their vehicles and drivers.</Paragraph>
                </div></Paragraph>
                {/*  */}
                <Heading5>BUSINESS OPPORTUNITIES</Heading5>
                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>1.</Paragraph>
                  <Paragraph className='col-span-11'>TAXI BUSINESS<br/><br/>

                  Requirements in establishing a Taxi business:<br/><br/>

                  <div className='grid grid-cols-12 gap-y-5'>
                    <Paragraph className='text-center'>a.</Paragraph>
                    <Paragraph className='col-span-11'>At least one car</Paragraph>
                    <Paragraph className='text-center'>b.</Paragraph>
                    <Paragraph className='col-span-11'>Professionally licensed drivers</Paragraph>
                    <Paragraph className='text-center'>c.</Paragraph>
                    <Paragraph className='col-span-11'>A Certificate of Public Convenience (Franchise)</Paragraph>
                    <Paragraph className='text-center'>d.</Paragraph>
                    <Paragraph className='col-span-11'>A garage to use during car barn<br/>
                    
                    <RoseAnchor href_url='http://www.forumcash.com/wordpress/guide-to-owning-and-operating-a-taxi-franchise/'>http://www.forumcash.com/wordpress/guide-to-owning-and-operating-a-taxi-franchise/</RoseAnchor></Paragraph>
                  </div>
                  </Paragraph>
                  {/*  */}
                  <Paragraph className='text-center'>2.</Paragraph>
                  <Paragraph className='col-span-11'>JEEPNEY BUSINESS<br/><br/>

                  Requirements in establishing a Jeepney business:<br/><br/>

                  <div className='grid grid-cols-12 gap-y-5'>
                    <Paragraph className='text-center'>a.</Paragraph>
                    <Paragraph className='col-span-11'>At least one jeepney</Paragraph>
                    <Paragraph className='text-center'>b.</Paragraph>
                    <Paragraph className='col-span-11'>Professionally licensed drivers<br/>
                    
                    <RoseAnchor href_url='http://www.forumcash.com/wordpress/guide-to-owning-and-operating-a-jeepney-route/'>http://www.forumcash.com/wordpress/guide-to-owning-and-operating-a-jeepney-route/</RoseAnchor></Paragraph>
                  </div>
                  </Paragraph>
                  {/*  */}
                  <Paragraph className='text-center'>3.</Paragraph>
                  <Paragraph className='col-span-11'>TRICYCLE BUSINESS<br/><br/>

                  Requirements in establishing a Tricycle business:<br/><br/>

                  <div className='grid grid-cols-12 gap-y-5'>
                    <Paragraph className='text-center'>a.</Paragraph>
                    <Paragraph className='col-span-11'>At least one tricycle</Paragraph>
                    <Paragraph className='text-center'>b.</Paragraph>
                    <Paragraph className='col-span-11'>Motorized Tricycle Operators Permit (MTOP) for tricycle drivers<br/>
                    
                    <RoseAnchor href_url='http://www.forumcash.com/wordpress/guide-to-owning-and-operating-a-tricycle-route/'>http://www.forumcash.com/wordpress/guide-to-owning-and-operating-a-tricycle-route/</RoseAnchor></Paragraph>
                  </div>
                  </Paragraph>
                  {/*  */}
                  <Paragraph className='text-center'>4.</Paragraph>
                  <Paragraph className='col-span-11'>PEDICAB BUSINESS<br/><br/>

                  Other businesses connected to public transportation are:<br/><br/>

                  <div className='grid grid-cols-12 gap-y-5'>
                    <Paragraph className='text-center'>a.</Paragraph>
                    <Paragraph className='col-span-11'>CAR WASH<br/>
                    
                    <RoseAnchor href_url='https://drive.google.com/file/d/0B0ilL7KAK3i5eEFqV3FXLW1iNmM/edit'>https://drive.google.com/file/d/0B0ilL7KAK3i5eEFqV3FXLW1iNmM/edit</RoseAnchor></Paragraph>
                    <Paragraph className='text-center'>b.</Paragraph>
                    <Paragraph className='col-span-11'>REPAIR SHOP<br/>
                    
                    <RoseAnchor href_url='https://drive.google.com/file/d/0B0ilL7KAK3i5d0ZQRG5vTXR3QkU/edit'>https://drive.google.com/file/d/0B0ilL7KAK3i5d0ZQRG5vTXR3QkU/edit</RoseAnchor></Paragraph>
                  </div>
                  </Paragraph>
                </div>
                {/*  */}
                <Paragraph className='italic font-light text-center mt-20'>Sources: Land Transportation Office, Land Transportation Franchising & Regulatory Board, and ForumCash</Paragraph>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  )
}