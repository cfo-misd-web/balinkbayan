import { createFileRoute } from '@tanstack/react-router'
import Paragraph from '@/components/user/shared/paragraph'
import BiggerBanner from '@/components/user/shared/banner/bigger-banner'
import Heading5 from '@/components/user/shared/headings/heading-5'
import Heading4 from '@/components/user/shared/headings/heading-4'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { AccordionHeader } from '@radix-ui/react-accordion'
import { Facebook, MapPin, Mail, MessageCircle, Phone, Globe } from 'lucide-react'
import { Dialog, DialogHeader, DialogTrigger, DialogContent, DialogDescription } from '@/components/ui/dialog'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
import DarkRoseAnchor from '@/components/user/shared/anchors/darkrose-anchor'


export const Route = createFileRoute(
  '/(public)/__p/services/resource-agency/cooperative-development-authority',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <BiggerBanner text='Access Government Services' label='Cooperative Development Authority (CDA)' img_url='/img-assets/gov-services/cda/CDA-and-BTr.png' />
      <section className='text-cyan-900'>
        <div className='max-lg:mx-4 3xl:max-w-[1400px] 2xl:max-w-[1280px] lg:max-w-[1080px] mx-auto my-20 bg-light space-y-10 max-lg:space-y-20'>
          <div className='grid grid-cols-2 max-lg:block gap-10 max-lg:space-y-20'>
            <div className='border-4 border-teal-500 rounded p-5 space-y-10'>
              <Heading4>What is the Cooperative Development Authority</Heading4>
              <Paragraph>The Cooperative Development Authority or CDA is a government agency tasked to fulfill the provisions of section 15, article XII of the Philippine Constitution in ensuring the viability and growth of cooperatives. The CDA is also tasked to formulate, adopt, and implement integrated plans and programs for cooperative development. The CDA is the central agency that ensures that cooperatives, though under the private sector, remain partners of the government in sustainable development and economic growth in the country.</Paragraph>
              {/*  */}
              <Heading5>So why invest in Co-ops?</Heading5>
              <Paragraph>Cooperatives are people-centered enterprises that are owned, controlled, and operated by and for their members. A co-op is run by members with a common goal in mind. Co-ops are democratically managed through the one member-one vote rule, regardless of how much or how little a member puts into the business. There are several types of cooperatives in operation with a host of products and services offered. In provinces, most utility services are provided for by large co-ops like the Benguet Electric Cooperative, Inc (BENECO), Ilocos Norte Electric Cooperative Inc. (INEC), Bantayan Electric Cooperative, Inc. (BANELCO), and the allied co-op called Mindanao Cooperatives Water Service Federation (MCWS).</Paragraph>
              {/*  */}
              <Heading5>OFFICE INFORMATION</Heading5>
              <div className='flex flex-row items-center space-x-5 justify-center'>
                <a href='https://www.facebook.com/CDAphgov' className='rounded-full bg-cyan-50 border border-gray-400 hover:bg-amber-50 p-2'>
                  <Facebook />
                </a>
                <a href='https://www.google.com/maps/dir//Citigold+Center+1345+Quirino+Ave+Paco,+Manila+Metro+Manila/@14.5768119,120.996482,10z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3397c9859df5f7c1:0x3b9eafeef5f3fe5d!2m2!1d120.996482!2d14.5768119?hl=en&shorturl=1' className='rounded-full bg-cyan-50 border border-gray-400 hover:bg-amber-50 p-2'>
                  <MapPin />
                </a>
                <a href='http://44.199.161.141/contact/' className='rounded-full bg-cyan-50 border border-gray-400 hover:bg-amber-50 p-2'>
                  <Mail />
                </a>
                <a href='http://44.199.161.141/contact/' className='rounded-full bg-cyan-50 border border-gray-400 hover:bg-amber-50 p-2 relative'>
                  <MessageCircle/>
                  <Phone fill='#164E63' className='absolute top-2 scale-40'/>
                </a>
                <a href='https://www.treasury.gov.ph/' className='rounded-full bg-cyan-50 border border-gray-400 hover:bg-amber-50 p-2'>
                  <Globe />
                </a>
              </div>
              {/*  */}
              <Heading5>FAST FACTS</Heading5>
              <Accordion type='single' collapsible className='border'>
                <AccordionItem value='item-1' className='border-b mb-2'>
                  <AccordionHeader>
                    <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                      <p>Did you Know?</p>
                    </AccordionTrigger>
                  </AccordionHeader>
                  <AccordionContent className='my-10 space-y-10 mx-5'>
                    <Paragraph>According to the CDA, as of 31 Dec 2018, there are 28, 784 registered co-ops in the Philippines, across all regions.</Paragraph>
                  </AccordionContent>
                </AccordionItem>
                {/*  */}
                <AccordionItem value='item-2' className='border-b mb-2'>
                  <AccordionHeader>
                    <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                      <p>Who can be members of cooperatives?</p>
                    </AccordionTrigger>
                  </AccordionHeader>
                  <AccordionContent className='my-10 space-y-10 mx-5'>
                    <Paragraph>Cooperatives have two kinds of members:
                      
                      <div className='grid grid-cols-12 gap-y-5'>
                        <Paragraph className='text-center'>&#8226;</Paragraph>
                        <Paragraph className='col-span-11'><b>Regular member</b>: one who has complied with all the membership requirements of the co-op and is therefore provided the privileges of a member as stated in the Cooperative Code and and the co-op’s by laws.</Paragraph>
                        <Paragraph className='text-center'>&#8226;</Paragraph>
                        <Paragraph className='col-span-11'><b>Associate Member</b>: one who has no right to vote or be endorsed/voted as candidate for officers of the co-op. The associate member is only entitled to some rights and privileges as mandated by the co-op’s by laws.</Paragraph>
                      </div>
                    </Paragraph>
                  </AccordionContent>
                </AccordionItem>
                {/*  */}
                <AccordionItem value='item-3' className='border-b mb-2'>
                  <AccordionHeader>
                    <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                      <p>What are the categories of membership in cooperatives?</p>
                    </AccordionTrigger>
                  </AccordionHeader>
                  <AccordionContent className='my-10 space-y-10 mx-5'>
                    <Paragraph>Cooperatives in the Philippines have 3 main categories,. in terms of membership:
                      
                    <div className='grid grid-cols-12 gap-y-5'>
                      <Paragraph className='text-center'>&#8226;</Paragraph>
                      <Paragraph className='col-span-11'><b>Primary Co-op</b>: Members are natural persons/individuals</Paragraph>
                      <Paragraph className='text-center'>&#8226;</Paragraph>
                      <Paragraph className='col-span-11'><b>Secondary Co-op</b>: Members are primary co-ops</Paragraph>
                      <Paragraph className='text-center'>&#8226;</Paragraph>
                      <Paragraph className='col-span-11'><b>Tertiary Co-op</b>: Members are secondary co-ops</Paragraph>
                    </div>
                    </Paragraph>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            {/*  */}
            <div className='border-4 border-teal-500 rounded p-5 space-y-10'>
              <Heading5>Top Products and Services offered by Co-Ops Per Region</Heading5>
              <Dialog>
                <DialogTrigger>
                  <img src='/img-assets/gov-services/cda/CO-OPS-1.png'/>
                </DialogTrigger>
                <DialogContent className='m-0 p-0'>
                  <DialogHeader>
                    <DialogDescription>
                      <img className='rounded-lg' src='/img-assets/gov-services/cda/CO-OPS-1.png'/>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
              <Dialog>
                <DialogTrigger>
                  <img src='/img-assets/gov-services/cda/CO-OPS-2.png'/>
                </DialogTrigger>
                <DialogContent className='m-0 p-0'>
                  <DialogHeader>
                    <DialogDescription>
                      <img className='rounded-lg' src='/img-assets/gov-services/cda/CO-OPS-2.png'/>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
              <Dialog>
                <DialogTrigger>
                  <img src='/img-assets/gov-services/cda/CO-OPS-3.png'/>
                </DialogTrigger>
                <DialogContent className='m-0 p-0'>
                  <DialogHeader>
                    <DialogDescription>
                      <img className='rounded-lg' src='/img-assets/gov-services/cda/CO-OPS-3.png'/>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          {/*  */}
          <div className='border-4 border-teal-500 rounded p-5 space-y-10'>
            <Heading4 className='text-center'>Organizing a Cooperative</Heading4>
            <div className='grid grid-cols-2 max-lg:block gap-10 max-lg:space-y-20'>
              <div className='border-4 border-teal-500 rounded p-5 space-y-10'>
                <Heading5>BEFORE YOU REGISTER THE COOPERATIVE:</Heading5>
                <Accordion type='single' collapsible className='border'>
                  <AccordionItem value='item-1' className='border-b mb-2'>
                    <AccordionHeader>
                      <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                        <p>In order to form a cooperative, at least 15 members are needed</p>
                      </AccordionTrigger>
                    </AccordionHeader>
                    <AccordionContent className='my-10 space-y-10 mx-5'>
                      <Paragraph>In order to form a cooperative, at least 15 members are needed. Decide right away which common issues you want to be resolved and which fundamental requirements you want to be met by a cooperative. Increased production, produce marketing, credit support, power generation, banking or insurance, and other related demands might be included. Identifying your issues and requirements will also enable you to categorize the cooperative you plan to establish. A committed core group of individuals who will handle all the organizational and paperwork is required even before a cooperative is established. Working committees might be established from this core group to get things going. Membership, finance, executive, and secretariat are a few examples of these committees.</Paragraph>
                    </AccordionContent>
                  </AccordionItem>
                  {/*  */}
                  <AccordionItem value='item-2' className='border-b mb-2'>
                    <AccordionHeader>
                      <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                        <p> Reserve your proposed cooperative name</p>
                      </AccordionTrigger>
                    </AccordionHeader>
                    <AccordionContent className='my-10 space-y-10 mx-5'>
                      <Paragraph>Reserve your proposed cooperative name. Secure and fill up the Cooperative Name Reservation Request Form (CNRRF). This must be submitted to the Cooperative Development Authority (CDA) Central Office or any of its Extension Office. A reservation fee shall apply. You must register an account at the CDA Cooperative Systems (CS) Project. After that, you can reserve your preferred coop name by clicking the “Name Reservation” button. You may access this link for reference: https://cs.cda.gov.ph/index.html The following periods are available to the applicant to reserve the proposed names with the associated reservation fees:</Paragraph>
                      <div className='grid grid-cols-12 gap-y-3'>
                        <Paragraph className='text-center'>&#8226;</Paragraph>
                        <Paragraph className='col-span-8'><b>Thirty</b> (<b>30</b>) calendar days:</Paragraph>
                        <Paragraph className='col-span-3'><b>P 100.00</b></Paragraph>
                        <Paragraph className='text-center'>&#8226;</Paragraph>
                        <Paragraph className='col-span-8'><b>Sixty</b> (<b>60</b>) calendar days:</Paragraph>
                        <Paragraph className='col-span-3'><b>P 200.00</b></Paragraph>
                        <Paragraph className='text-center'>&#8226;</Paragraph>
                        <Paragraph className='col-span-8'><b>Ninety</b> (<b>90</b>) calendar days:</Paragraph>
                        <Paragraph className='col-span-3'><b>P 300.00</b></Paragraph>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  {/*  */}
                  <AccordionItem value='item-3' className='border-b mb-2'>
                    <AccordionHeader>
                      <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                        <p>You need to prepare an Economic Survey</p>
                      </AccordionTrigger>
                    </AccordionHeader>
                    <AccordionContent className='my-10 space-y-10 mx-5'>
                      <Paragraph>You need to prepare an Economic Survey. An Economic Survey is a general statement describing the structure and purpose of the proposed cooperative. The structure and actual staffing pattern/ organizational structure should include a bookkeeper. The survey should indicate the area of operation, the membership size, and other pertinent data in a format provided by the Authority.</Paragraph>
                    </AccordionContent>
                  </AccordionItem>
                  {/*  */}
                  <AccordionItem value='item-4' className='border-b mb-2'>
                    <AccordionHeader>
                      <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                        <p>Prepare the cooperative's by-laws</p>
                      </AccordionTrigger>
                    </AccordionHeader>
                    <AccordionContent className='my-10 space-y-10 mx-5'>
                      <Paragraph>Prepare the cooperative’s by-laws. The by-laws contain the rules and regulations governing the operation of the cooperative.</Paragraph>
                    </AccordionContent>
                  </AccordionItem>
                  {/*  */}
                  <AccordionItem value='item-5' className='border-b mb-2'>
                    <AccordionHeader>
                      <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                        <p>Aside from the by-laws, the coop should also have the articles of association</p>
                      </AccordionTrigger>
                    </AccordionHeader>
                    <AccordionContent className='my-10 space-y-10 mx-5'>
                      <Paragraph>Aside from the by-laws, the coop should also have the articles of association. The following information should be included in the articles of association: a. the name of the cooperative, which must include the word “cooperative”; b. the purpose/purposes of the cooperative and the scope of business for which the coop is to be registered; c. the term of existence of cooperative; d. the area of operation and the address of head office; e. the names, nationality, and the addresses of the registrants; f. the common bond of membership; g. The names of the directors who shall manage the cooperative; and; h. The size of the cooperative’s share capital, the contributors’ names and addresses, and a declaration of whether the cooperative is primary, secondary, or tertiary. Before a notary public, the articles of collaboration must be signed by all of the organizers, acknowledged by them if they are natural persons, and by the chairpersons or secretaries if they are legal entities. ** For more information on the categories of cooperatives, you can visit the CDA webpage on the BaLinkBayan portal.</Paragraph>
                    </AccordionContent>
                  </AccordionItem>
                  {/*  */}
                  <AccordionItem value='item-6' className='border-b mb-2'>
                    <AccordionHeader>
                      <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                        <p>Secure the bond of accountable officer/s</p>
                      </AccordionTrigger>
                    </AccordionHeader>
                    <AccordionContent className='my-10 space-y-10 mx-5'>
                      <Paragraph>Secure the bond of accountable officer/s. A legitimate insurance or bonding provider should provide a surety bond. This applies to every director, official, and worker who deals with money, assets, or property on the cooperative’s behalf. The sufficiency of such bonds will be decided by the board of directors.</Paragraph>
                    </AccordionContent>
                  </AccordionItem>
                  {/*  */}
                  <AccordionItem value='item-7' className='border-b mb-2'>
                    <AccordionHeader>
                      <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                        <p>Execute Treasurer's Affidavit</p>
                      </AccordionTrigger>
                    </AccordionHeader>
                    <AccordionContent className='my-10 space-y-10 mx-5'>
                      <Paragraph>Execute Treasurer’s Affidavit. To be executed and attached to the articles of cooperation should be a sworn statement from the treasurer chosen by the subscribers demonstrating that at least twenty-five percent (25%) of the authorized share capital has been subscribed, and at least twenty-five percent (25%) of the total subscription has been paid. The paid-up share capital cannot be lower than 15,000 pesos (P15,000.00).</Paragraph>
                    </AccordionContent>
                  </AccordionItem>
                  {/*  */}
                  <AccordionItem value='item-8' className='border-b mb-2'>
                    <AccordionHeader>
                      <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                        <p>Complete the Pre-Membership Education Seminar (PMES)</p>
                      </AccordionTrigger>
                    </AccordionHeader>
                    <AccordionContent className='my-10 space-y-10 mx-5'>
                      <Paragraph>Complete the Pre-Membership Education Seminar (PMES). All prospective members of a primary cooperative must complete a Pre-Membership Education Seminar (PMES). You can contact the Regional or Extension Office which has jurisdiction over your proposed cooperative for technical assistance.</Paragraph>
                    </AccordionContent>
                  </AccordionItem>
                  {/*  */}
                  <AccordionItem value='item-9' className='border-b mb-2'>
                    <AccordionHeader>
                      <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                        <p>Register your cooperative with the Cooperative Development Authority (CDA)</p>
                      </AccordionTrigger>
                    </AccordionHeader>
                    <AccordionContent className='my-10 space-y-10 mx-5'>
                      <Paragraph>Register your cooperative with the Cooperative Development Authority (CDA). Submit the following requirements in four (4) copies: a. Economic Survey; b. Articles of Cooperation and By-Laws; c. Surety bond of Accountable Officers; d. Treasurer’s Affidavit; e. Approved Cooperative Name Reservation Slip; and f. Certificate of PMES.</Paragraph>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              {/*  */}
              <div className='border-4 border-teal-500 rounded p-5 space-y-10'>
                <Heading5>BEFORE YOU REGISTER THE COOPERATIVE:</Heading5>
                <Paragraph>The Cooperative Development Authority (CDA) is the only government agency responsible and mandated for registering all types of cooperatives. Their main office is located at <b>827 Aurora Blvd., Immaculate Conception, Quezon City</b>. However, for registration of primary cooperatives, this power has been delegated to the Regional or Extension Offices.

                Further, below is the schedule of fees for registering your cooperative (based on MEMORANDUM CIRCULAR NO. 2016-08, Series of 201– Amended Schedule of Registration Fees):</Paragraph>
                {/*  */}
                <Table >
                  <TableHeader className='border-1'>
                    <TableRow>
                      <TableHead className="text-white bg-teal-500 border-r-1 border-gray-400 text-center py-8">
                        <Heading5>PROCESS</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center bg-teal-500 border-r-1 border-gray-400 py-8">
                        <Heading5>REQUIRED FEES</Heading5>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className='border-1 '>
                      <TableRow>
                        <TableCell className='border-r-1 border-gray-400'><div className='grid grid-cols-6 gap-y-3'>
                          <Paragraph className='text-center'>A.</Paragraph>
                          <Paragraph className='col-span-5'><b>Name Reservation</b> (pre-registration)</Paragraph>
                          <Paragraph className='col-start-2 col-span-5'>30 days</Paragraph>
                          <Paragraph className='col-start-2 col-span-5'>60 days</Paragraph>
                          <Paragraph className='col-start-2 col-span-5'>90 days</Paragraph>
                          </div></TableCell>
                        <TableCell className='border-r-1 border-gray-400'>
                          <Paragraph>
                            <b>30 days</b>: Php 100<br/>
                            <b>60 days</b>: Php 200<br/>
                            <b>90 days</b>: Php 300</Paragraph>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className='border-r-1 border-gray-400'><div className='grid grid-cols-6 gap-y-3'>
                          <Paragraph className='text-center'>B.</Paragraph>
                          <Paragraph className='col-span-5'><b>Initial Registration</b><br/>The initial registration fee to be imposed shall be 1/10 of 1% of the paid-up capital or the basic fee below whichever is higher</Paragraph>
                          <div className='col-span-5 col-start-2 grid grid-cols-6 gap-y-3'>
                            <Paragraph className='text-center'>&#8226;</Paragraph>
                            <Paragraph className='col-span-5'>Primary Co-Ops</Paragraph>
                            <Paragraph className='text-center'>&#8226;</Paragraph>
                            <Paragraph className='col-span-5'>Secondary Co-Ops</Paragraph>
                            <Paragraph className='text-center'>&#8226;</Paragraph>
                            <Paragraph className='col-span-5'>Tertiary Co-Ops</Paragraph>
                            <Paragraph className='text-center'>&#8226;</Paragraph>
                            <Paragraph className='col-span-5'>Laboratory Co-Ops</Paragraph>
                          </div>
                          </div></TableCell>
                        <TableCell className='border-r-1 border-gray-400'>
                          <Paragraph>
                            <b>Primary</b>: Php 500<br/>
                            <b>Secondary</b>: Php 2, 000<br/>
                            <b>Tertiary</b>: Php 3, 000<br/>
                            <b>Laboratory</b>: Php 50</Paragraph>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className='border-r-1 border-gray-400'><div className='grid grid-cols-6 gap-y-3'>
                          <Paragraph className='text-center'>C.</Paragraph>
                          <Paragraph className='col-span-5'><b>Amendment</b></Paragraph>
                          <div className='col-span-5 col-start-2 grid grid-cols-6 gap-y-3'>
                            <Paragraph className='text-center'>&#8226;</Paragraph>
                            <Paragraph className='col-span-5'>On specific provision/s</Paragraph>
                            <Paragraph className='text-center'>&#8226;</Paragraph>
                            <Paragraph className='col-span-5'>By substition</Paragraph>
                            <Paragraph className='text-center'>&#8226;</Paragraph>
                            <Paragraph className='col-span-5'>On increase of capital</Paragraph>
                          </div>
                          </div></TableCell>
                        <TableCell className='border-r-1 border-gray-400'>
                          <Paragraph>
                            <b>On specific</b>: Php 300<br/>
                            <b>By substitution</b>: Php 300<br/>
                            <b>On increase</b>: Php 1/10 of 1% of the increased paid-up capital</Paragraph>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className='border-r-1 border-gray-400'>
                          <Paragraph>D. <b>Merger</b></Paragraph>
                        </TableCell>
                        <TableCell className='border-r-1 border-gray-400'>
                          <Paragraph>400.00 and, apply "c.3" above in case of increase in capital</Paragraph>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className='border-r-1 border-gray-400'>
                          <Paragraph>E. <b>Consolidation</b></Paragraph>
                        </TableCell>
                        <TableCell className='border-r-1 border-gray-400'>
                          <Paragraph>apply "B" above, if applicable</Paragraph>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className='border-r-1 border-gray-400'>
                          <Paragraph>F. <b>Division</b></Paragraph>
                        </TableCell>
                        <TableCell className='border-r-1 border-gray-400'>
                          <Paragraph>apply "B" above, if applicable</Paragraph>
                        </TableCell>
                      </TableRow>
                  </TableBody>
                </Table>
                {/*  */}
                <Paragraph>For more information on the fees, you can check the <DarkRoseAnchor href_url='https://cda.gov.ph/memorandum-circulars/mc-2016-08-amended-schedule-of-registration-fees/'>latest Amended Schedule of Registration Fees on the CDA website</DarkRoseAnchor>
                </Paragraph>
              </div>
            </div>
          </div>
          {/*  */}
          <Paragraph className='italic font-light text-center'>Sources:<br/>

            <DarkRoseAnchor href_url='https://cda.gov.ph/frequently-asked-questions/'>https://cda.gov.ph/frequently-asked-questions/</DarkRoseAnchor><br/>

            <DarkRoseAnchor href_url='https://cda.gov.ph/services/regulatory-services/registration/'>https://cda.gov.ph/services/regulatory-services/registration/</DarkRoseAnchor><br/>

            <DarkRoseAnchor href_url=' https://cda.gov.ph/memorandum-circulars/mc-2016-08-amended-schedule-of-registration-fees/'> https://cda.gov.ph/memorandum-circulars/mc-2016-08-amended-schedule-of-registration-fees/</DarkRoseAnchor>
          </Paragraph>
        </div>
      </section>
    </>
  )
}