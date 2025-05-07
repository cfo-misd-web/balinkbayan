import { createFileRoute } from '@tanstack/react-router'
import Paragraph from '@/components/user/shared/paragraph'
import BiggerBanner from '@/components/user/shared/banner/bigger-banner'
import Heading4 from '@/components/user/shared/headings/heading-4'
import Heading5 from '@/components/user/shared/headings/heading-5'
import RoseAnchor from '@/components/user/shared/anchors/rose-anchor'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
import { services } from '@/constants/contants'
import AccordItem from '@/components/user/shared/accord-item'



export const Route = createFileRoute(
  '/(public)/__p/services/other-online-gov-services',
)({
  component: RouteComponent,
})



function RouteComponent() {
  return (
    <>
      <BiggerBanner text='Access Government Services' label='Other Government Online Services for Overseas Filipinos' img_url='/img-assets/gov-services/other-gov-services/airport-people-walking-4120835.jpg' />
      <section className='text-cyan-900'>
        <div className='max-lg:mx-4 3xl:max-w-[1400px] 2xl:max-w-[1280px] lg:max-w-[1080px] mx-auto my-20 bg-light space-y-20'>
          <Heading4>Other Government Online Services for Overseas Filipinos</Heading4>
          <div className='space-y-10'>
            <Paragraph>Access other government online services for overseas Filipinos. Find out what their special programs are for overseas Filipinos.</Paragraph>
            {/*  */}
            <Table >
              <TableHeader className='border-1'>
                <TableRow>
                  <TableHead className="text-white bg-teal-500 border-r-1 border-gray-400 text-center py-8">
                    <Heading5>Online Services</Heading5>
                  </TableHead>
                  <TableHead className="text-white text-center bg-teal-500 border-r-1 border-gray-400 py-8">
                    <Heading5>Description of Service/Benefits</Heading5>
                  </TableHead>
                  <TableHead className="text-white text-center bg-teal-500 border-r-1 border-gray-400 py-8">
                    <Heading5>Government Agency</Heading5>
                  </TableHead>
                  <TableHead className="text-white text-center bg-teal-500 py-8">
                    <Heading5>Links</Heading5>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className='border-1 '>
                {services.map((i,idx) => (
                  <TableRow key={idx}>
                    <TableCell className='border-r-1 border-gray-400'>{i.onlineServices}</TableCell>
                    <TableCell className='border-r-1 border-gray-400'>{i.description}
                      <p><br/>{i.description1}</p>
                      <p>{i.description2}</p>
                      <p>{i.description3}</p>
                    </TableCell>
                    <TableCell className='border-r-1 border-gray-400'>{i.govAgency}</TableCell>
                    <TableCell><RoseAnchor className='text-rose-700 hover:text-rose-500 break-all' href_url={i.links}>{i.links}</RoseAnchor></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          {/*  */}
          <Heading4>Directory of Philippine Embassies and Consulates Overseas</Heading4>
        </div>
          <div className='bg-cyan-900 max-lg:px-4 text-white w-full flex items-center flex-col justify-center py-5 mb-32 mt-10'>
            <AccordItem/>
          </div>
      </section>
    </>
  )
}