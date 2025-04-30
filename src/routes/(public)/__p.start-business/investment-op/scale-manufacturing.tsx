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
  '/(public)/__p/start-business/investment-op/scale-manufacturing',
)({
  component: RouteComponent,
})

function RouteComponent() {
  const foodBeverageProcessing = [
    {
      advantagesTitle: 'Popularity',
      advantagesDesc: ': Native delicacies are popular among Filipinos.',
      disadvantagesTitle: 'High Competition',
      disadvantagesDesc: ': The competitition in the market is stringent given the expansive market share of large scale manufacturers.',
    },
    {
      advantagesTitle: 'High Necessity',
      advantagesDesc: ': There is a constant need for food and beverages because they are some of the most important necessities of man.',
      disadvantagesTitle: '',
      disadvantagesDesc: '',
    },
    {
      advantagesTitle: 'Availability of materials',
      advantagesDesc: ': Raw materials and ingredients are easily available.',
      disadvantagesTitle: '',
      disadvantagesDesc: '',
    },
  ]
  const homeStyleManufacturing = [
    {
      advantagesTitle: 'Access to the world market',
      advantagesDesc: ': There is an opportunity for makers to showcase their products because of the Philippine International Furniture Show.',
      disadvantagesTitle: 'Unavailability of some raw materials',
      disadvantagesDesc: ': Some wood species need to be imported from other countries.',
    },
    {
      advantagesTitle: 'Internal support',
      advantagesDesc: ': The implementation of 5S (headed by the DTI 5S Team) regulates furniture production cost.',
      disadvantagesTitle: 'Quality control',
      disadvantagesDesc: ': Contractors’ strict material and workmanship specifications hinder liberty in production.',
    },
    {
      advantagesTitle: 'Native raw materials',
      advantagesDesc: ': Materials such as rattan and bamboo are locally available.',
      disadvantagesTitle: '',
      disadvantagesDesc: '',
    },
    {
      advantagesTitle: 'High selling price',
      advantagesDesc: ': Compared to furniture from other Asian countries, Philippine furniture are sold at higher prices because of product innovation and strength of the design, materials, and aesthetics.',
      disadvantagesTitle: '',
      disadvantagesDesc: '',
    },
    {
      advantagesTitle: 'Technology',
      advantagesDesc: ': Ease of production is attainable through the aid of technology.',
      disadvantagesTitle: '',
      disadvantagesDesc: '',
    },
    {
      advantagesTitle: 'High demand',
      advantagesDesc: ': New trends in interior design emerge, thus, there is a need for new homestyle products.',
      disadvantagesTitle: '',
      disadvantagesDesc: '',
    },
  ]
  const soapManufacturing = [
    {
      advantagesTitle: 'Saleable',
      advantagesDesc: ': Soap is being used in all parts of the Philippines because it is one of the most important products for hygiene.',
      disadvantagesTitle: 'High Competition',
      disadvantagesDesc: ': The popularity of soap products causes similar businesses to emerge.',
    },
    {
      advantagesTitle: 'Variety',
      advantagesDesc: ': Many natural products can be used to produce various kinds of soaps.',
      disadvantagesTitle: '',
      disadvantagesDesc: '',
    },
  ]

  return (
    <>
      <BiggerBanner text='Business Opportunities in the PH' label='Small and Medium Scale Manufacturing' img_url='/img-assets/start-a-business/scale-manufacturing/leave-room-interior-design-internal-825317.jpg' />
      <section className='text-cyan-900'>
        <div className='max-lg:mx-4 3xl:max-w-[1400px] 2xl:max-w-[1280px] lg:max-w-[1080px] flex flex-col items-center justify-center mx-auto my-20 bg-light space-y-20'>
          <Paragraph>The large number of small and medium enterprises (SMEs) greatly contributes to the economic growth and industrial progress of developing countries. They are valuable to the manufacturing industry of the Philippines. Global expansion and growing economic integration allows SMEs to be potential product exporters. Through using locally available materials, SMEs have the opportunity to manufacture food and non-food products in small and medium scale.</Paragraph>
          <div className='max-lg:mx-4 3xl:max-w-[1400px] 2xl:max-w-[1280px] lg:max-w-[1080px] flex flex-col items-center justify-center mx-auto mt-20 bg-light'>
            <Heading4 className='text-center'>Small and Medium Scale Manufacturing</Heading4>
          </div>
        </div>
        <div className='bg-cyan-900 max-lg:px-4 text-white w-full flex items-center flex-col justify-center py-5 mb-32'>
          <Accordion type='single' collapsible className='max-lg:mx-4 mx-auto w-full max-w-3xl'>
            <AccordionItem value='item-1' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <Heading4>Food and Beverage Processing</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <Paragraph>Food and beverage are constantly being purchased and consumed because it is one of the most essential needs of humans. In addition, Filipinos have a taste for delicious and healthy food and beverage products.<br/><br/>

                Manufacture of food and beverages are two of the Philippines’ major industries. From 2010-2013, food and beverage manufacturing had 5% and 6% growths, respectively. To ensure the development of the industry and to encourage potential investors, the Philippine government considers it a priority sector.</Paragraph>
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
                    {foodBeverageProcessing.map((i,idx) => (
                      <TableRow key={idx}>
                        <TableCell className='border-r-1 border-gray-400'><b>{i.advantagesTitle}</b>{i.advantagesDesc}</TableCell>
                        <TableCell><b>{i.disadvantagesTitle}</b>{i.disadvantagesDesc}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                {/*  */}
                <Heading5>How to register a food and beverage processing business?</Heading5>
                <Paragraph>
                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>1.</Paragraph>
                  <Paragraph className='col-span-11'>Register the Business Name at the Department of Trade and Industry (for Single Proprietorships) or the Securities and Exchange Commission (for Partnerships and Corporations).<br/><br/>

                  The law governing the registration of business name is Act No. 3883, as amended by Act No. 41476 and R.A. No. 863, otherwise known as the Business Name Law. The business name is valid for five years.</Paragraph>
                  <Paragraph className='text-center'>2.</Paragraph>
                  <Paragraph className='col-span-11'>Get a Mayor’s permit from the municipality or city where the business is located. The permit is valid for a year.</Paragraph>
                  <Paragraph className='text-center'>3.</Paragraph>
                  <Paragraph className='col-span-11'>Apply for an Employer’s Tax Identification Number (TIN) at the Bureau of Internal Revenue (BIR).</Paragraph>
                  <Paragraph className='text-center'>4.</Paragraph>
                  <Paragraph className='col-span-11'>Apply for Authority to Print Receipts and Invoices at the BIR.</Paragraph>
                  <Paragraph className='text-center'>5.</Paragraph>
                  <Paragraph className='col-span-11'>Investors should register for a Social Security System (SSS) Certificate.</Paragraph>
                  <Paragraph className='text-center'>6.</Paragraph>
                  <Paragraph className='col-span-11'>Register for a License to Operate at the Food and Drug Administration (FDA).</Paragraph>
                  <Paragraph className='text-center'>7.</Paragraph>
                  <Paragraph className='col-span-11'>For businesses with five or more employees, owners must register with the Department of Labor and Employment (DOLE).</Paragraph>
                </div>
                </Paragraph>
                {/*  */}
                <Paragraph><b>What are the opportunities in the food and processing sector?</b><br/><br/>

                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>1.</Paragraph>
                  <Paragraph className='col-span-5'>Balut making</Paragraph>
                  <Paragraph className='text-center'>2.</Paragraph>
                  <Paragraph className='col-span-5'>Banana chips</Paragraph>
                  <Paragraph className='text-center'>3.</Paragraph>
                  <Paragraph className='col-span-5'>Burger</Paragraph>
                  <Paragraph className='text-center'>4.</Paragraph>
                  <Paragraph className='col-span-5'>Corned beef</Paragraph>
                  <Paragraph className='text-center'>5.</Paragraph>
                  <Paragraph className='col-span-5'>Daing</Paragraph>
                  <Paragraph className='text-center'>6.</Paragraph>
                  <Paragraph className='col-span-5'>Fruit shake</Paragraph>
                  <Paragraph className='text-center'>7.</Paragraph>
                  <Paragraph className='col-span-5'>Honey bee and honey production</Paragraph>
                  <Paragraph className='text-center'>8.</Paragraph>
                  <Paragraph className='col-span-5'>Jackfruit products</Paragraph>
                  <Paragraph className='text-center'>9.</Paragraph>
                  <Paragraph className='col-span-5'>Kaong preserves</Paragraph>
                  <Paragraph className='text-center'>10.</Paragraph>
                  <Paragraph className='col-span-5'>Lambanog</Paragraph>
                  <Paragraph className='text-center'>5.</Paragraph>
                  <Paragraph className='col-span-5'>Longganisa</Paragraph>
                  <Paragraph className='text-center'>12.</Paragraph>
                  <Paragraph className='col-span-5'>Mango Chutney</Paragraph>
                  <Paragraph className='text-center'>13.</Paragraph>
                  <Paragraph className='col-span-5'>Nata de coco</Paragraph>
                  <Paragraph className='text-center'>14.</Paragraph>
                  <Paragraph className='col-span-5'>Pandesal</Paragraph>
                  <Paragraph className='text-center'>15.</Paragraph>
                  <Paragraph className='col-span-5'>Siomai</Paragraph>
                  <Paragraph className='text-center'>16.</Paragraph>
                  <Paragraph className='col-span-5'>Smoked boneless bangus</Paragraph>
                  <Paragraph className='text-center'>17.</Paragraph>
                  <Paragraph className='col-span-5'>Smoked sausage</Paragraph>
                  <Paragraph className='text-center'>18.</Paragraph>
                  <Paragraph className='col-span-5'>Tinapa</Paragraph>
                  <Paragraph className='text-center'>19.</Paragraph>
                  <Paragraph className='col-span-5'>Tocino</Paragraph>
                  <Paragraph className='text-center'>20.</Paragraph>
                  <Paragraph className='col-span-5'>Tomato Catsup</Paragraph>
                  <Paragraph className='text-center'>21.</Paragraph>
                  <Paragraph className='col-span-5'>Tuyo</Paragraph>
                  <Paragraph className='text-center'>22.</Paragraph>
                  <Paragraph className='col-span-5'>Vinegar from banana peeling</Paragraph>
                </div>
                </Paragraph>
              </AccordionContent>
            </AccordionItem>
            {/*  */}
            <AccordionItem value='item-2' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <Heading4>Home Style Manufacturing</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <Paragraph>Products that are not fit for human consumption are called non-food products. They are produced for their respective purposes such as decorating and cleaning.<br/><br/>

                Home style products are always marketable because of the need to decorate homes. The Philippines is considered as the top manufacturer of home style products in terms of craftsmanship and design. Because of this, the potential for exportation of home style products is very viable.</Paragraph>
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
                    {homeStyleManufacturing.map((i,idx) => (
                      <TableRow key={idx}>
                        <TableCell className='border-r-1 border-gray-400'><b>{i.advantagesTitle}</b>{i.advantagesDesc}</TableCell>
                        <TableCell><b>{i.disadvantagesTitle}</b>{i.disadvantagesDesc}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <Paragraph>Some home style products are décor and furniture.</Paragraph>
                {/*  */}
                <Heading5>Home Décor</Heading5>
                <Paragraph>Philippine-made home décor products are often crafted from eco-friendly materials. In the advent of the call for protection of the environment, buyers are becoming environment-conscious. Thus, the marketability of Philippine-made home décor products increases.<br/><br/>

                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>a.</Paragraph>
                  <Paragraph className='col-span-11'><RoseAnchor href_url='https://docs.google.com/file/d/0BwHVUF_oks0sVFRmdjF4ODFYdTQ/edit'>Dipped and molded candles</RoseAnchor></Paragraph>
                  <Paragraph className='text-center'>b.</Paragraph>
                  <Paragraph className='col-span-11'><RoseAnchor href_url='https://docs.google.com/file/d/0BwHVUF_oks0sYmpBREZmLXBNTEE/edit'>Candle holder centerpiece</RoseAnchor></Paragraph>
                </div>
                </Paragraph>
                <Heading5>Furniture</Heading5>
                <Paragraph>The furniture industry largely contributes to the Philippine economy. It had a growth of 57% from 2010-2013. In line with this, the Philippine Statistics Authority considers furniture as one of the top ten exports of the country as of April 2014. Products are sold to local buyers, distributor-wholesalers, and retailers.<br/><br/>
                
                Some furniture pieces are sofas, benches, beds, cabinets, tables, and chairs.<br/><br/>

                Philippine furniture is noted as well-crafted, skillfully designed, and made from durable materials. Furniture can be made from different materials such as wood, buri, metal, stone, rattan, and bamboo.<br/><br/>

                Click <RoseAnchor href_url='https://www.dticebu.net.ph/03_a_02.html'>here</RoseAnchor> to know more about the furniture industry.<br/><br/>

                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>a.</Paragraph>
                  <Paragraph className='col-span-11'><RoseAnchor href_url='https://docs.google.com/file/d/0BwHVUF_oks0sVFRmdjF4ODFYdTQ/edit'>Dipped and molded candles</RoseAnchor></Paragraph>
                  <Paragraph className='text-center'>b.</Paragraph>
                  <Paragraph className='col-span-11'><RoseAnchor href_url='https://docs.google.com/file/d/0BwHVUF_oks0sYmpBREZmLXBNTEE/edit'>Candle holder centerpiece</RoseAnchor></Paragraph>
                </div>
                </Paragraph>
                <Paragraph><b>How to register a home style business?</b><br/><br/>
                
                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>1.</Paragraph>
                  <Paragraph className='col-span-11'>Register the Business Name at the Department of Trade and Industry (for Single Proprietorships) or the Securities and Exchange Commission (for Partnerships and Corporations).<br/><br/>
                    
                  The law governing the registration of business name is Act No. 3883, as amended by Act No. 41476 and R.A. No. 863, otherwise known as the Business Name Law. The business name is valid for five years.</Paragraph>
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
              </AccordionContent>
            </AccordionItem>
            {/*  */}
            <AccordionItem value='item-3' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <Heading4>Soap Manufacturing</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <div className='flex flex-row items-center space-x-20'>
                  <Paragraph>Soap is one of the most essential products when it comes to body hygiene. Many Filipinos look for effective, yet affordable soap products that suit their needs. Because of this, many soap making businesses emerge in the Philippines.</Paragraph>
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
                    {soapManufacturing.map((i,idx) => (
                      <TableRow key={idx}>
                        <TableCell className='border-r-1 border-gray-400'><b>{i.advantagesTitle}</b>{i.advantagesDesc}</TableCell>
                        <TableCell><b>{i.disadvantagesTitle}</b>{i.disadvantagesDesc}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                {/*  */}
                <Paragraph>Manufacturers can make bath soaps, whitening soaps, detergent soaps, and dishwashing soaps.<br/><br/>

                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>1.</Paragraph>
                  <Paragraph className='col-span-11'>Herbal bath soap<br/><br/>
                  
                  <div className='grid grid-cols-12 gap-y-3 my-3'>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'><RoseAnchor href_url='https://docs.google.com/file/d/0BwHVUF_oks0sSlBudV9zN3NnNUE/edit'>Akapulko and guava</RoseAnchor></Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'><RoseAnchor href_url='https://docs.google.com/file/d/0BwHVUF_oks0sTm1qVjR2aDhGWDQ/edit'>Papaya, radish, calamansi, cucumber, and kamias</RoseAnchor></Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'><RoseAnchor href_url='https://docs.google.com/file/d/0BwHVUF_oks0sWTdPWlczQmJZd28/edit'>Aloe vera, patchouli, citronella, rose, and sampaguita</RoseAnchor></Paragraph>
                  </div>
                  </Paragraph>
                  <Paragraph className='text-center'>2.</Paragraph>
                  <Paragraph className='col-span-11'>Powdered detergent<br/></Paragraph>
                  <Paragraph className='text-center'>3.</Paragraph>
                  <Paragraph className='col-span-11'>Fabric softener</Paragraph>
                  <Paragraph className='text-center'>4.</Paragraph>
                  <Paragraph className='col-span-11'><RoseAnchor href_url='https://docs.google.com/file/d/0BwHVUF_oks0sN2ZFbFVSdXNzdGc/edit'>Dishwashing liquid</RoseAnchor></Paragraph>
                  <Paragraph className='text-center'>5.</Paragraph>
                  <Paragraph className='col-span-11'><RoseAnchor href_url='http://www.pinoybisnes.com/money-making-business-ideas/how-to-make-biodegradable-detergent-soap/#ixzz3DMVca8D4'>Biodegradable detergent soap</RoseAnchor></Paragraph>
                  <Paragraph className='text-center'>6.</Paragraph>
                  <Paragraph className='col-span-11'><RoseAnchor href_url='http://www.pinoybisnes.com/money-making-business-ideas/how-to-make-biodegradable-detergent-soap/#ixzz3DMVca8D4'>Coffee-scented soap</RoseAnchor></Paragraph>
                  <Paragraph className='text-center'>7.</Paragraph>
                  <Paragraph className='col-span-11'><RoseAnchor href_url='http://www.pinoybisnes.com/home-based-business/cornmeal-soap-small-business/#ixzz3DMVgrviW'>Cornmeal soap</RoseAnchor></Paragraph>
                </div>
                </Paragraph>
                <Paragraph><b>How to register a soap manufacturing business?</b><br/><br/>
                
                <div className='grid grid-cols-12 gap-y-3 my-3'>
                    <Paragraph className='text-center'>1.</Paragraph>
                    <Paragraph className='col-span-11'>Register the Business Name at the Department of Trade and Industry (for Single Proprietorships) or the Securities and Exchange Commission (for Partnerships and Corporations).<br/><br/>
                    
                    The law governing the registration of business name is Act No. 3883, as amended by Act No. 41476 and R.A. No. 863, otherwise known as the Business Name Law. The business name is valid for five years.</Paragraph>
                    <Paragraph className='text-center'>2.</Paragraph>
                    <Paragraph className='col-span-11'>Get a Mayor’s permit from the municipality or city where the business is located. The permit is valid for one year.</Paragraph>
                    <Paragraph className='text-center'>3.</Paragraph>
                    <Paragraph className='col-span-11'>Apply for an Employer’s Tax Identification Number (TIN) at the Bureau of Internal Revenue (BIR).</Paragraph>
                    <Paragraph className='text-center'>4.</Paragraph>
                    <Paragraph className='col-span-11'>Apply for Authority to Print Receipts and Invoices at the BIR.</Paragraph>
                    <Paragraph className='text-center'>5.</Paragraph>
                    <Paragraph className='col-span-11'>Register for a License to Operate at the Food and Drug Administration (FDA).</Paragraph>
                    <Paragraph className='text-center'>6.</Paragraph>
                    <Paragraph className='col-span-11'>Investors should register for a Social Security System (SSS) Certificate.</Paragraph>
                    <Paragraph className='text-center'>7.</Paragraph>
                    <Paragraph className='col-span-11'>For businesses with five or more employees, owners must register with the Department of Labor and Employment (DOLE).</Paragraph>
                  </div>
                  </Paragraph>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        {/*  */}
        <div className='max-lg:mx-4 3xl:max-w-[1400px] 2xl:max-w-[1280px] lg:max-w-[1080px] flex flex-col items-center justify-center mx-auto mb-32 bg-light'>
          <Paragraph className='italic font-light text-center'><b>Sources</b>: Philippine Institute for Development Studies, Department of Trade and Industry, Philippine Statistics Authority, Online Developing Country Sourcing, and related websites</Paragraph>
        </div>
      </section>
    </>
  )
}