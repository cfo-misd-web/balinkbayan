import { createFileRoute } from '@tanstack/react-router'
import Paragraph from '@/components/user/shared/paragraph'
import BiggerBanner from '@/components/user/shared/banner/bigger-banner'
import Heading4 from '@/components/user/shared/headings/heading-4'
import Heading5 from '@/components/user/shared/headings/heading-5'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { AccordionHeader } from '@radix-ui/react-accordion'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
import { Separator } from '@radix-ui/react-separator'

export const Route = createFileRoute(
  '/(public)/__p/start-business/investment-op/real-property',
)({
  component: RouteComponent,
})

function RouteComponent() {
  const rawLand = [
    {
      advantagesTitle: 'Less cost',
      advantagesDesc: ': Purchase of raw land incurs less cost relative to other real estate investments.',
      disadvantagesTitle: 'No regular income',
      disadvantagesDesc: ': Raw land does not generate steady income during the period of ownership.',
    },
    {
      advantagesTitle: 'Price appreciation',
      advantagesDesc: ': Real value of raw land increases over time.',
      disadvantagesTitle: 'Expenses',
      disadvantagesDesc: ': Raw land accrues property taxes.',
    },
    {
      advantagesTitle: 'Long-term investment',
      advantagesDesc: ': Acquisition of raw land is an easy form of long-term investment. It also takes time for a raw land to increase its value.',
      disadvantagesTitle: 'Not readily sold in the market',
      disadvantagesDesc: ': Raw land is the most illiquid form of real estate investment because it takes time to sell it. Therefore, raw land cannot be quickly converted into cash.',
    },
  ]
  const apartment = [
    {
      advantagesTitle: 'Minimal risk',
      advantagesDesc: ': There is a monthly rental income from the tenants. In most cases, apartment rentals do not go bankrupt.',
      disadvantagesTitle: 'Low returns',
      disadvantagesDesc: ': The monthly rental income is small relative to the size of the initial investment.',
    },
    {
      advantagesTitle: 'Minimal supervision',
      advantagesDesc: ': Apartment only requires minimal management in relation to other business.',
      disadvantagesTitle: 'Long payback period',
      disadvantagesDesc: ': In comparison to other types of business, it takes a longer time to get the initial investment back.',
    },
  ]
  const condominiumUnits = [
    {
      advantagesTitle: 'High Demand',
      advantagesDesc: ': Young professionals, expats, and businessmen in central districts demand rentable condominiums.',
      disadvantagesTitle: 'Association fees',
      disadvantagesDesc: ': All fees are paid whether the unit is rented or vacant.',
    },
    {
      advantagesTitle: 'Steady Flow of Rent Income',
      advantagesDesc: ': Occupied condominium units earn monthly rent income.',
      disadvantagesTitle: 'Payment of other expenses',
      disadvantagesDesc: ': Other associated expenses include realty tax on the unit, share of realty tax on the land on which the condominium stands, and share of realty tax on common areas.',
    },
    {
      advantagesTitle: 'High Price Appreciation',
      advantagesDesc: ': Real value of condominium goes up at least proportional to the rate of inflation.',
      disadvantagesTitle: 'Shared decision making',
      disadvantagesDesc: ': The regulations of the condominium building is based on the decision of the association or board of directors.',
    },
  ]

  return (
    <>
      <BiggerBanner text='Business Opportunities in the PH' label='Real Property' img_url='/img-assets/start-a-business/financial-investments/money-home-coin-2724245.jpg' />
      <section className='text-cyan-900'>
        <div className='max-lg:mx-4 3xl:max-w-[1400px] 2xl:max-w-[1280px] lg:max-w-[1080px] flex flex-col items-center justify-center mx-auto my-20 bg-light space-y-20'>
          <div className='flex flex-row items-center space-x-20'>
          <img src='/img-assets/start-a-business/real-property/invest-guide-real-property.png' />
            <Paragraph>The growing population in the urban and suburban areas in the Philippines has increased the demand for real estate properties. Increase in property values as a result of demand offers excellent possibilities for secure investment in real property. In the Philippines, there are different opportunities in the sector which includes acquisition of raw land, construction of apartment building and purchase of condominium unit.</Paragraph>
          </div>
          <div className='max-lg:mx-4 3xl:max-w-[1400px] 2xl:max-w-[1280px] lg:max-w-[1080px] flex flex-col items-center justify-center mx-auto mt-20 bg-light'>
            <Heading4 className='text-center'>Real Property</Heading4>
          </div>
        </div>
          <div className='bg-cyan-900 max-lg:px-4 text-white w-full flex items-center flex-col justify-center py-5 mb-32'>
          <Accordion type='single' collapsible className='max-lg:mx-4 mx-auto w-full max-w-3xl'>
            <AccordionItem value='item-1' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <Heading4>Raw Land</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <div className='flex flex-row items-center space-x-20'>
                  <Paragraph>A raw land is defined as a property in its natural state. Due to its undeveloped form, it can be converted into commercial, residential and agricultural property. Investors are also allowed to venture on small scale lot banking. It is a type of real estate investment that is suitable for would-be investors who are willing to wait for years to sell their property.</Paragraph>
                  <img src='/img-assets/start-a-business/real-property/invest-guide-real-property-1.png' />
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
                    {rawLand.map((i,idx) => (
                      <TableRow key={idx}>
                        <TableCell className='border-r-1 border-gray-400'><b>{i.advantagesTitle}</b>{i.advantagesDesc}</TableCell>
                        <TableCell><b>{i.disadvantagesTitle}</b>{i.disadvantagesDesc}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                {/*  */}
                <Heading5>HOW TO ACQUIRE A RAW LAND?</Heading5>
                <Paragraph><b>Before Buying</b><br/><br/>
                
                Check if the Project has a Certificate of Registration and a License to Sell.<br/><br/>

                You should ask the broker/agent of the owner/developer if the project is registered and has a License to Sell issued by the Housing and Land Use Regulatory Board (HLURB):<br/><br/>

                * This can be verified at the On-line Queries/HLURB website (www.hlurb.gov.ph) for the list of projects covered with Certificate of Registration and License to Sell as well as any encumbrance thereon, e.g. Cease and Desist Order, Suspension of License, etc.;<br/><br/>

                * Or you may visit or call the nearest HLURB Regional Office for this information.
                </Paragraph>
                <Paragraph>Visit the subdivision/condominium, where the house and lot or condo unit to be purchased is located to know its natural topography, viz: susceptibility to landslide, flooding, erosion, etc.<br/><br/>

                If the project is covered with a License to Sell, you may already enter into a Contract with the owner/developer. However, there are things which must be checked:<br/><br/>

                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>1.</Paragraph>
                  <Paragraph className='col-span-11'>The date of completion of the project as indicated in the License to Sell;</Paragraph>
                  <Paragraph className='text-center'>2.</Paragraph>
                  <Paragraph className='col-span-11'>If the property is mortgaged, it should have a Clearance to Mortgage from the HLURB.</Paragraph>
                  <Paragraph className='text-center'>3.</Paragraph>
                  <Paragraph className='col-span-11'>The facilities and amenities represented in the advertisement flyers/ brochures are in accordance with the approved subdivision and condominium plan on file with HLURB.</Paragraph>
                </div>
                </Paragraph>
                {/*  */}
                <Separator className='h-[2px] bg-gray-400'/>
                {/*  */}
                <Paragraph className='mt-20'><b>When Buying</b><br/><br/>

                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>1.</Paragraph>
                  <Paragraph className='col-span-11'>Check if the broker/agent is registered with HLURB/DTI.</Paragraph>
                  <Paragraph className='text-center'>2.</Paragraph>
                  <Paragraph className='col-span-11'>Verify with the Register of Deeds to see if the property has not been sold to other buyers.</Paragraph>
                  <Paragraph className='text-center'>3.</Paragraph>
                  <Paragraph className='col-span-11'>Check into your source of income whether you can afford to pay the equity and the monthly installments.</Paragraph>
                  <Paragraph className='text-center'>4.</Paragraph>
                  <Paragraph className='col-span-11'>Check if the materials of the house or condo unit conform to the development standards and approved construction specifications submitted to HLURB.</Paragraph>
                  <Paragraph className='text-center'>5.</Paragraph>
                  <Paragraph className='col-span-11'>Check whether the developer would pay for the water and electric meters, the subdivision perimeter fence, etc.</Paragraph>
                  <Paragraph className='text-center'>6.</Paragraph>
                  <Paragraph className='col-span-11'>Check who would eventually operate the subdivision/condominium water system.</Paragraph>
                </div>
                </Paragraph>
                {/*  */}
                <Separator className='h-[2px] bg-gray-400'/>
                {/*  */}
                <Paragraph className='mt-20'><b>Before Signing the Contract to Sell</b><br/><br/>

                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>1.</Paragraph>
                  <Paragraph className='col-span-11'>Don’t sign any blank form of the Contract.</Paragraph>
                  <Paragraph className='text-center'>2.</Paragraph>
                  <Paragraph className='col-span-11'>Read thoroughly all the contents of the Contract especially the terms and conditions in fine print.</Paragraph>
                  <Paragraph className='text-center'>3.</Paragraph>
                  <Paragraph className='col-span-11'>Secure a copy of the Contract and all other documents that you have signed.</Paragraph>
                  <Paragraph className='text-center'>4.</Paragraph>
                  <Paragraph className='col-span-11'>Make sure that the Contract would be registered by the owner/developer to the Register of Deeds.</Paragraph>
                  <Paragraph className='text-center'>5.</Paragraph>
                  <Paragraph className='col-span-11'>Pay directly to the owner/developer or the marketing agent authorized by said owner/developer only.</Paragraph>
                  <Paragraph className='text-center'>6.</Paragraph>
                  <Paragraph className='col-span-11'>Ask for an official receipt on all payments for your file.</Paragraph>
                </div>
                </Paragraph>
                {/*  */}
                <Separator className='h-[2px] bg-gray-400'/>
                {/*  */}
                <Paragraph className='mt-20'><b>Regulation and Compliance</b><br/><br/>

                The Housing and Land Regulatory Board is the Philippine government agency which promulgates and enforces policies on land use, housing and homeowners associations. Presidential Decree No. 957, also known as the Subdivision and Condominium Buyer’s Protective Decree, is the policy that regulates the sale of subdivision lots and condominiums.
                </Paragraph>
              </AccordionContent>
            </AccordionItem>
            {/*  */}
            <AccordionItem value='item-2' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <Heading4>Apartment</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <div className='flex flex-row items-center space-x-20'>
                  <Paragraph>Apartment rental is one of the most common businesses of overseas Filipinos, specifically for the retirees. It offers them an option to establish a business that only needs minimal supervision. Aside from easy management, apartment rental provides a steady flow of income. There is also a high demand especially in heavily populated areas in the country. Apartment rentals offer affordable housing for lower income brackets.</Paragraph>
                  <img src='/img-assets/start-a-business/real-property/invest-guide-real-property-2.png' />
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
                    {apartment.map((i,idx) => (
                      <TableRow key={idx}>
                        <TableCell className='border-r-1 border-gray-400'><b>{i.advantagesTitle}</b>{i.advantagesDesc}</TableCell>
                        <TableCell><b>{i.disadvantagesTitle}</b>{i.disadvantagesDesc}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                {/*  */}
                <Paragraph><b>How to start an apartment rental business?</b><br/><br/>
                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>1.</Paragraph>
                  <Paragraph className='col-span-11'>Find a property that is zoned for construction of a residential apartment.</Paragraph>
                  <Paragraph className='text-center'>2.</Paragraph>
                  <Paragraph className='col-span-11'>Register the apartment business. For sole proprietorship, register with the Department of Trade and Industry (DTI). For partnership or corporations, register with the Securities and Exchange Commission (SEC).</Paragraph>
                  <Paragraph className='text-center'>3.</Paragraph>
                  <Paragraph className='col-span-11'>Acquire a Barangay Clearance.</Paragraph>
                  <Paragraph className='text-center'>4.</Paragraph>
                  <Paragraph className='col-span-11'>Get a Building Permit, Occupation Permit and Fire Safety Permit from the municipal or city where the apartment is situated.</Paragraph>
                  <Paragraph className='text-center'>5.</Paragraph>
                  <Paragraph className='col-span-11'>Obtain a certificate of registration, which contains the schedule of tax obligations, from the Bureau of Internal Revenue (BIR).</Paragraph>
                </div>
                </Paragraph>
                <Paragraph><b>Regulations and Compliance</b><br/><br/>
                
                An apartment rental business is under the provision of Republic Act No. 9653, also known as the Rent Control Act of 2009. One of its salient features includes the limitation of increasing rent which is effective for a period of one year.</Paragraph>
              </AccordionContent>
            </AccordionItem>
            {/*  */}
            <AccordionItem value='item-3' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <Heading4>Condominium Units</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <div className='flex flex-row items-center space-x-20'>
                  <Paragraph>Acquisition of condominium units is considered as a convenient and profitable investment opportunity. Condominiums operate the same way as corporations. A unit owner is considered as a shareholder of the condominium; one unit is equal to one share. It also translates that all unit owners equally owns the common areas and the land where the condominium is built.</Paragraph>
                  <img src='/img-assets/start-a-business/real-property/invest-guide-real-property-3.png' />
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
                    {condominiumUnits.map((i,idx) => (
                      <TableRow key={idx}>
                        <TableCell className='border-r-1 border-gray-400'><b>{i.advantagesTitle}</b>{i.advantagesDesc}</TableCell>
                        <TableCell><b>{i.disadvantagesTitle}</b>{i.disadvantagesDesc}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                {/*  */}
                <Paragraph><b>How to purchase condominium unit?</b><br/><br/>
                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>1.</Paragraph>
                  <Paragraph className='col-span-11'>Conduct a thorough research on the background of the condominium.<br/><br/>
                  
                  Find a condominium unit that fits your choice by researching on the following:<br/>
                  <div className='grid grid-cols-6 gap-y-3 my-3'>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-5'>Unit</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-5'>Location</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-5'>Amenities</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-5'>Developer</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-5'>Cost of the Property and Other Expenses</Paragraph>
                  </div>
                  </Paragraph>
                  <Paragraph className='text-center'>2.</Paragraph>
                  <Paragraph className='col-span-11'>Complete all the necessary requirements.<br/>
                    
                  <div className='grid grid-cols-6 gap-y-3 my-3'>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-5'>Consularized Special Power of Attorney</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-5'>Copies of your passport</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-5'>Other ID’s</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-5'>Proof of income</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-5'>Proof of billing in the Philippines</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-5'>Tax Identification Number (TIN)</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-5'>Employment Contract</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-5'>Certificate of Employment and Compensation</Paragraph>
                  </div>
                  </Paragraph>
                  <Paragraph className='text-center'>3.</Paragraph>
                  <Paragraph className='col-span-11'>Pay all the cost of the property and other expenses.</Paragraph>
                </div>
                </Paragraph>
                <Paragraph>After paying the cost of the condominium and other initial expenses, the Condominium Certificate of Title is already prepared as a proof of ownership of the purchased condominium unit.</Paragraph>
                <Paragraph><b>Regulations and Compliance</b><br/><br/>
                
                In purchasing a condominium unit, buyers should be well informed on Republic Act No. 4726, more commonly known as “The Condominium Act”. It is the regulation that governs the rights of the owners and states the extent of their influence in the property where they purchased the unit.</Paragraph>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        {/*  */}
        <div className='max-lg:mx-4 3xl:max-w-[1400px] 2xl:max-w-[1280px] lg:max-w-[1080px] flex flex-col items-center justify-center mx-auto mb-32 bg-light'>
          <Paragraph className='italic font-light text-center'><b>Sources</b>: Housing and Land Use Regulatory Board, Real Estate Companies and other business guides</Paragraph>
        </div>
      </section>
    </>
  )
}