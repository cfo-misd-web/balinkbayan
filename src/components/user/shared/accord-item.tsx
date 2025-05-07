
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { AccordionHeader } from '@radix-ui/react-accordion'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
import Heading5 from './headings/heading-5';
import RoseAnchor from './anchors/rose-anchor';
import { countries } from '@/constants/countries';


export default function AccordItem(){
  return (
    <Accordion type='single' collapsible className='max-lg:mx-4 mx-auto w-full max-w-7xl'>
      <AccordionItem value='item-1' className='border-b mb-2'>
        <AccordionHeader>
          <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
            <p className='text-sm font-light'>ARGENTINA</p>
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent className='my-10 space-y-10'>
          <Table>
            <TableHeader className='border-1'>
              <TableRow>
                <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                  <Heading5>Country</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Name</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Head of Office</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Address</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Email</Heading5>
                </TableHead>
                <TableHead className="text-white text-center py-8">
                  <Heading5>Website</Heading5>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className='border-1 '>
              <TableRow>
                <TableCell className='border-r-1 border-gray-400'>Argentina</TableCell>
                <TableCell className='border-r-1 border-gray-400'>EMBASSY OF THE PHILIPPINES, BUENOS AIRES</TableCell>
                <TableCell className='border-r-1 border-gray-400'>H.E. (Mr.) Rey A. Carandang<br/><br/>Ambassador Extraordinary and Plenipotentiary</TableCell>
                <TableCell className='border-r-1 border-gray-400'>Embajada de la República de Filipinas, Zapiola 1701,<br/><br/>C1426AUI Ciudad Autónoma de Buenos Aires</TableCell>
                <TableCell className='border-r-1 border-gray-400 break-all'>buenosaires.pe@dfa.gov.ph;<br/>pheba@fibertel.com.ar</TableCell>
                <TableCell><RoseAnchor className='break-all' href_url='https://www.embafil.com.ar'>www.embafil.com.ar</RoseAnchor></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </AccordionContent>
      </AccordionItem>
      {/*  */}
      <AccordionItem value='item-2' className='border-b mb-2'>
        <AccordionHeader>
          <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
            <p className='text-sm font-light'>AUSTRALIA</p>
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent className='my-10 space-y-10'>
          <Table>
            <TableHeader className='border-1'>
              <TableRow>
                <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                  <Heading5>Country</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Name</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Head of Office</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Address</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Email</Heading5>
                </TableHead>
                <TableHead className="text-white text-center py-8">
                  <Heading5>Website</Heading5>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className='border-1 '>
              {countries.australia.map((i,idx) => (
              <TableRow key={idx}>
                <TableCell className='p-2 border-r-1 border-gray-400'>{i.country}</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.name}</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.headOffice1}
                  <p><br/>{i.headOffice2}</p>
                </TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.address}
                  <p>{i.address2}</p>
                </TableCell>
                <TableCell className='p-2 border-r-1 border-gray-400 break-all'>{i.email1}
                  <p>{i.email2}</p>
                </TableCell>
                <TableCell className='p-2'><RoseAnchor className='break-all' href_url={i.website}>{i.website}</RoseAnchor></TableCell>
              </TableRow>
              ))}
            </TableBody>
          </Table>
        </AccordionContent>
      </AccordionItem>
      {/*  */}
      <AccordionItem value='item-3' className='border-b mb-2'>
        <AccordionHeader>
          <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
            <p className='text-sm font-light'>AUSTRIA</p>
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent className='my-10 space-y-10'>
          <Table>
            <TableHeader className='border-1'>
              <TableRow>
                <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                  <Heading5>Country</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Name</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Head of Office</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Address</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Email</Heading5>
                </TableHead>
                <TableHead className="text-white text-center py-8">
                  <Heading5>Website</Heading5>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className='border-1 '>
              {countries.austria.map((i,idx) => (
              <TableRow key={idx}>
                <TableCell className='p-2 border-r-1 border-gray-400'>{i.country}</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.name}</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.headOffice1}
                  <p><br/>{i.headOffice2}</p>
                </TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.address}
                  <p>{i.address2}</p>
                </TableCell>
                <TableCell className='p-2 border-r-1 border-gray-400 break-all'>{i.email1}
                  <p>{i.email2}</p>
                </TableCell>
                <TableCell className='p-2'><RoseAnchor className='break-all' href_url={i.website}>{i.website}</RoseAnchor></TableCell>
              </TableRow>
              ))}
            </TableBody>
          </Table>
        </AccordionContent>
      </AccordionItem>
      {/*  */}
      <AccordionItem value='item-4' className='border-b mb-2'>
        <AccordionHeader>
          <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
            <p className='text-sm font-light'>BAHRAIN</p>
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent className='my-10 space-y-10'>
          <Table>
            <TableHeader className='border-1'>
              <TableRow>
                <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                  <Heading5>Country</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Name</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Head of Office</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Address</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Email</Heading5>
                </TableHead>
                <TableHead className="text-white text-center py-8">
                  <Heading5>Website</Heading5>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className='border-1 '>
              <TableRow>
                <TableCell className='p-2 border-r-1 border-gray-400'>Bahrain</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>EMBASSY OF THE PHILIPPINES, MANAMA</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>H.E. (Mr.) Sahid S. Glang<br/><br/>Ambassador Extraordinary and Plenipotentiary</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>Villa No. 992, Road No. 3119, New Zinj, Manama, Kingdom of Bahrain</TableCell>
                <TableCell className='p-2 border-r-1 border-gray-400 break-all'>manama.pe@dfa.gov.ph;<br/>manamape@batelco.com.ph</TableCell>
                <TableCell className='p-2'><RoseAnchor className='break-all' href_url='https://www.philembassy-bahrain.org'>www.philembassy-bahrain.org</RoseAnchor></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </AccordionContent>
      </AccordionItem>
      {/*  */}
      <AccordionItem value='item-5' className='border-b mb-2'>
        <AccordionHeader>
          <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
            <p className='text-sm font-light'>BANGLADESH</p>
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent className='my-10 space-y-10'>
          <Table>
            <TableHeader className='border-1'>
              <TableRow>
                <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                  <Heading5>Country</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Name</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Head of Office</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Address</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Email</Heading5>
                </TableHead>
                <TableHead className="text-white text-center py-8">
                  <Heading5>Website</Heading5>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className='border-1 '>
              <TableRow>
                <TableCell className='p-2 border-r-1 border-gray-400'>Bangladesh</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>EMBASSY OF THE PHILIPPINES, DHAKA</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>H.E. (Mr.) Bahnarim A. Guinomla<br/><br/>Ambassador Extraordinary and Plenipotentiary</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>House No. 17, Road No. 7, Baridhara, Dhaka 1212, People’s Republic of Bangladesh</TableCell>
                <TableCell className='p-2 border-r-1 border-gray-400 break-all'>dhaka.pe@dfa.gov.ph;<br/>philemb2@aknetbd.com</TableCell>
                <TableCell className='p-2'><RoseAnchor className='break-all' href_url='https://www.philembassydhaka.org'>www.philembassydhaka.org</RoseAnchor></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </AccordionContent>
      </AccordionItem>
      {/*  */}
      <AccordionItem value='item-6' className='border-b mb-2'>
        <AccordionHeader>
          <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
            <p className='text-sm font-light'>BELGIUM</p>
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent className='my-10 space-y-10'>
          <Table>
            <TableHeader className='border-1'>
              <TableRow>
                <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                  <Heading5>Country</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Name</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Head of Office</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Address</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Email</Heading5>
                </TableHead>
                <TableHead className="text-white text-center py-8">
                  <Heading5>Website</Heading5>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className='border-1 '>
              <TableRow>
                <TableCell className='p-2 border-r-1 border-gray-400'>Belgium</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>EMBASSY OF THE PHILIPPINES, BRUSSELS</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>H.E. (Ms.) Victoria S. Bataclan<br/><br/>Ambassador Extraordinary and Plenipotentiary</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>House No. 17, Road No. 7, Baridhara, Dhaka 1212, People’s Republic of Bangladesh</TableCell>
                <TableCell className='p-2 border-r-1 border-gray-400 break-all'>dhaka.pe@dfa.gov.ph;<br/>philemb2@aknetbd.com</TableCell>
                <TableCell className='p-2'><RoseAnchor className='break-all' href_url='https://www.philembassy.be'>www.philembassy.be</RoseAnchor></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='p-2 border-r-1 border-gray-400'></TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>EMBASSY OF THE PHILIPPINES, DHAKA</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>Mr. Peter van Bogaert<br/>Consul General, ad honorem<br/><br/>Mr. Antonio A. Guansing<br/>Consul, ad honorem</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>90 Duerne, Antwerp, Belgium</TableCell>
                <TableCell className='p-2 border-r-1 border-gray-400 break-all'>pb.vanbogaert@skynet.be;<br/>aguansing@skynet.be</TableCell>
                <TableCell className='p-2'></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </AccordionContent>
      </AccordionItem>
      {/*  */}
      <AccordionItem value='item-7' className='border-b mb-2'>
        <AccordionHeader>
          <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
            <p className='text-sm font-light'>BRAZIL</p>
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent className='my-10 space-y-10'>
          <Table>
            <TableHeader className='border-1'>
              <TableRow>
                <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                  <Heading5>Country</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Name</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Head of Office</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Address</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Email</Heading5>
                </TableHead>
                <TableHead className="text-white text-center py-8">
                  <Heading5>Website</Heading5>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className='border-1 '>
              {countries.brazil.map((i,idx) => (
              <TableRow key={idx}>
                <TableCell className='p-2 border-r-1 border-gray-400'>{i.country}</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.name}</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.headOffice1}
                  <p><br/>{i.headOffice2}</p>
                </TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.address}
                  <p>{i.address2}</p>
                </TableCell>
                <TableCell className='p-2 border-r-1 border-gray-400 break-all'>{i.email1}
                  <p>{i.email2}</p>
                </TableCell>
                <TableCell className='p-2'><RoseAnchor className='break-all' href_url={i.website}>{i.website}</RoseAnchor></TableCell>
              </TableRow>
              ))}
            </TableBody>
          </Table>
        </AccordionContent>
      </AccordionItem>
      {/*  */}
      <AccordionItem value='item-8' className='border-b mb-2'>
        <AccordionHeader>
          <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
            <p className='text-sm font-light'>BRUNEI</p>
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent className='my-10 space-y-10'>
          <Table>
            <TableHeader className='border-1'>
              <TableRow>
                <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                  <Heading5>Country</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Name</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Head of Office</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Address</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Email</Heading5>
                </TableHead>
                <TableHead className="text-white text-center py-8">
                  <Heading5>Website</Heading5>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className='border-1 '>
              <TableRow>
                <TableCell className='p-2 border-r-1 border-gray-400'>Brunei</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>EMBASSY OF THE PHILIPPINES, BRUNEI</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>H.E. (Mr.) Nestor Z. Ochoa<br/><br/>Ambassador Extraordinary and Plenipotentiary</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>Simpang 336, Diplomatic Enclave<br/>Jalan Kebangsaan, Bandar Seri Begawan, BA 1210<br/>Brunei Darussalam</TableCell>
                <TableCell className='p-2 border-r-1 border-gray-400 break-all'>brunei.pe@dfa.gov.ph;<br/>bruneipe@brunet.bn/;<br/>bruneipe@gmail.com</TableCell>
                <TableCell className='p-2'><RoseAnchor className='break-all' href_url='https://www.philembassy.be'>www.philippine-embassybrunei.com</RoseAnchor></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </AccordionContent>
      </AccordionItem>
      {/*  */}
      <AccordionItem value='item-9' className='border-b mb-2'>
        <AccordionHeader>
          <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
            <p className='text-sm font-light'>CAMBODIA</p>
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent className='my-10 space-y-10'>
          <Table>
            <TableHeader className='border-1'>
              <TableRow>
                <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                  <Heading5>Country</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Name</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Head of Office</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Address</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Email</Heading5>
                </TableHead>
                <TableHead className="text-white text-center py-8">
                  <Heading5>Website</Heading5>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className='border-1 '>
              <TableRow>
                <TableCell className='p-2 border-r-1 border-gray-400'>Cambodia</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>EMBASSY OF THE PHILIPPINES, PHNOM PENH</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>H.E. (Mr.) Noe A. Wong<br/><br/>Ambassador Extraordinary and Plenipotentiary</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>House No. 15, Street 422, Sangkat Tonle Bassac, Khan Chamkarmon, Phnom Penh, Kingdom of Cambodia</TableCell>
                <TableCell className='p-2 border-r-1 border-gray-400 break-all'>phnompenh.pe@dfa.gov.ph;<br/>phnompenhpe@ezecom.com.kh</TableCell>
                <TableCell className='p-2'></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </AccordionContent>
      </AccordionItem>
      {/*  */}
      <AccordionItem value='item-10' className='border-b mb-2'>
        <AccordionHeader>
          <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
            <p className='text-sm font-light'>CANADA</p>
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent className='my-10 space-y-10'>
          <Table>
            <TableHeader className='border-1'>
              <TableRow>
                <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                  <Heading5>Country</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Name</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Head of Office</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Address</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Email</Heading5>
                </TableHead>
                <TableHead className="text-white text-center py-8">
                  <Heading5>Website</Heading5>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className='border-1 '>
              {countries.canada.map((i,idx) => (
              <TableRow key={idx}>
                <TableCell className='p-2 border-r-1 border-gray-400'>{i.country}</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.name}</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.headOffice1}
                  <p><br/>{i.headOffice2}</p>
                </TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.address}
                  <p>{i.address2}</p>
                </TableCell>
                <TableCell className='p-2 border-r-1 border-gray-400 break-all'>{i.email1}
                  <p>{i.email2}</p>
                </TableCell>
                <TableCell className='p-2'><RoseAnchor className='break-all' href_url={i.website}>{i.website}</RoseAnchor></TableCell>
              </TableRow>
              ))}
            </TableBody>
          </Table>
        </AccordionContent>
      </AccordionItem>
      {/*  */}
      <AccordionItem value='item-11' className='border-b mb-2'>
        <AccordionHeader>
          <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
            <p className='text-sm font-light'>CHILE</p>
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent className='my-10 space-y-10'>
          <Table>
            <TableHeader className='border-1'>
              <TableRow>
                <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                  <Heading5>Country</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Name</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Head of Office</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Address</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Email</Heading5>
                </TableHead>
                <TableHead className="text-white text-center py-8">
                  <Heading5>Website</Heading5>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className='border-1 '>
              <TableRow>
                <TableCell className='p-2 border-r-1 border-gray-400'>Chile</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>EMBASSY OF THE PHILIPPINES, SANTIAGO</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>H.E. (Ms.) Ma. Consuelo Puyat-Reyes<br/><br/>Ambassador Extraordinary and Plenipotentiary</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>Felix de Amesti No. 367, Las Condes, Santiago, Chile</TableCell>
                <TableCell className='p-2 border-r-1 border-gray-400 break-all'>santiago.pe@dfa.gov.ph;<br/>embassyphil@vtr.net/<br/>embafilsantiago@vtr.net</TableCell>
                <TableCell className='p-2'></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='p-2 border-r-1 border-gray-400'></TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>PHILIPPINE CONSULATE, SAN ANTONIO</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>Mrs. Ingeborg Gwinner Maurice<br/><br/>Consul, ad honorem</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>Avenida del Mar 02 Santo Domingo, San Antonio, Chile</TableCell>
                <TableCell className='p-2 border-r-1 border-gray-400 break-all'>igwinner@mi.cl</TableCell>
                <TableCell className='p-2'></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </AccordionContent>
      </AccordionItem>
      {/*  */}
      <AccordionItem value='item-12' className='border-b mb-2'>
        <AccordionHeader>
          <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
            <p className='text-sm font-light'>CHINA</p>
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent className='my-10 space-y-10'>
          <Table>
            <TableHeader className='border-1'>
              <TableRow>
                <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                  <Heading5>Country</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Name</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Head of Office</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Address</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Email</Heading5>
                </TableHead>
                <TableHead className="text-white text-center py-8">
                  <Heading5>Website</Heading5>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className='border-1 '>
              {countries.china.map((i,idx) => (
              <TableRow key={idx}>
                <TableCell className='p-2 border-r-1 border-gray-400'>{i.country}</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.name}</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.headOffice1}
                  <p><br/>{i.headOffice2}</p>
                </TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.address}
                  <p>{i.address2}</p>
                </TableCell>
                <TableCell className='p-2 border-r-1 border-gray-400 break-all'>{i.email1}
                  <p>{i.email2}</p>
                  <p>{i.email3}</p>
                </TableCell>
                <TableCell className='p-2'><RoseAnchor className='break-all' href_url={i.website}>{i.website}</RoseAnchor></TableCell>
              </TableRow>
              ))}
            </TableBody>
          </Table>
        </AccordionContent>
      </AccordionItem>
      {/*  */}
      <AccordionItem value='item-13' className='border-b mb-2'>
        <AccordionHeader>
          <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
            <p className='text-sm font-light'>CZECH REPUBLIC</p>
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent className='my-10 space-y-10'>
          <Table>
            <TableHeader className='border-1'>
              <TableRow>
                <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                  <Heading5>Country</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Name</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Head of Office</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Address</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Email</Heading5>
                </TableHead>
                <TableHead className="text-white text-center py-8">
                  <Heading5>Website</Heading5>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className='border-1 '>
              <TableRow>
                <TableCell className='p-2 border-r-1 border-gray-400'>Czech Republic</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>EMBASSY OF THE PHILIPPINES, PRAGUE</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>H.E. (Ms.) Evelyn D. Austria-Garcia<br/><br/>Ambassador Extraordinary and Plenipotentiary</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>Senovazne Namesti 8, 110 00, Prague 1, Czech Republic</TableCell>
                <TableCell className='p-2 border-r-1 border-gray-400 break-all'>prague.pe@dfa.gov.ph;<br/><br/>praguepe@gmail.com</TableCell>
                <TableCell className='p-2'><RoseAnchor className='break-all' href_url='https://www.praguepe.cz'>www.praguepe.cz</RoseAnchor></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </AccordionContent>
      </AccordionItem>
      {/*  */}
      <AccordionItem value='item-14' className='border-b mb-2'>
        <AccordionHeader>
          <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
            <p className='text-sm font-light'>EGYPT</p>
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent className='my-10 space-y-10'>
          <Table>
            <TableHeader className='border-1'>
              <TableRow>
                <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                  <Heading5>Country</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Name</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Head of Office</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Address</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Email</Heading5>
                </TableHead>
                <TableHead className="text-white text-center py-8">
                  <Heading5>Website</Heading5>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className='border-1 '>
              <TableRow>
                <TableCell className='p-2 border-r-1 border-gray-400'>Egypt</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>EMBASSY OF THE PHILIPPINES, CAIRO</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>H.E. Claro S. Cristobal<br/><br/>Ambassador Extraordinary and Plenipotentiary</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>Road 200, Villa 28 Degla, Maadi, Cairo, Arab, Republic of Egypt</TableCell>
                <TableCell className='p-2 border-r-1 border-gray-400 break-all'>cairo.pe@dfa.gov.ph;<br/>cairope@tedata.net.eg;<br/>cairo.pe@dfa.gov.ph</TableCell>
                <TableCell className='p-2'></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </AccordionContent>
      </AccordionItem>
      {/*  */}
      <AccordionItem value='item-15' className='border-b mb-2'>
        <AccordionHeader>
          <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
            <p className='text-sm font-light'>FINLAND</p>
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent className='my-10 space-y-10'>
          <Table>
            <TableHeader className='border-1'>
              <TableRow>
                <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                  <Heading5>Country</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Name</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Head of Office</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Address</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Email</Heading5>
                </TableHead>
                <TableHead className="text-white text-center py-8">
                  <Heading5>Website</Heading5>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className='border-1 '>
              <TableRow>
                <TableCell className='p-2 border-r-1 border-gray-400'>Finland</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>PHILIPPINE CONSULATE, GREATER HELSINKI</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>Mrs. Teresita Zurbano Ruutu<br/><br/>Vice Consul, ad honorem</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>Ukonkivenpolku 3e, Fi-01610 Vantaa, Finland</TableCell>
                <TableCell className='p-2 border-r-1 border-gray-400 break-all'>teresita.ruutu@saunalahti.fi</TableCell>
                <TableCell className='p-2'></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </AccordionContent>
      </AccordionItem>
      {/*  */}
      <AccordionItem value='item-16' className='border-b mb-2'>
        <AccordionHeader>
          <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
            <p className='text-sm font-light'>FRANCE</p>
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent className='my-10 space-y-10'>
          <Table>
            <TableHeader className='border-1'>
              <TableRow>
                <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                  <Heading5>Country</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Name</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Head of Office</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Address</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Email</Heading5>
                </TableHead>
                <TableHead className="text-white text-center py-8">
                  <Heading5>Website</Heading5>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className='border-1 '>
              {countries.france.map((i,idx) => (
              <TableRow key={idx}>
                <TableCell className='p-2 border-r-1 border-gray-400'>{i.country}</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.name}</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.headOffice1}
                  <p><br/>{i.headOffice2}</p>
                </TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.address}
                  <p>{i.address2}</p>
                </TableCell>
                <TableCell className='p-2 border-r-1 border-gray-400 break-all'>{i.email1}
                  <p>{i.email2}</p>
                </TableCell>
                <TableCell className='p-2'><RoseAnchor className='break-all' href_url={i.website}>{i.website}</RoseAnchor></TableCell>
              </TableRow>
              ))}
            </TableBody>
          </Table>
        </AccordionContent>
      </AccordionItem>
      {/*  */}
      <AccordionItem value='item-17' className='border-b mb-2'>
        <AccordionHeader>
          <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
            <p className='text-sm font-light'>GERMANY</p>
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent className='my-10 space-y-10'>
          <Table>
            <TableHeader className='border-1'>
              <TableRow>
                <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                  <Heading5>Country</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Name</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Head of Office</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Address</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Email</Heading5>
                </TableHead>
                <TableHead className="text-white text-center py-8">
                  <Heading5>Website</Heading5>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className='border-1 '>
              {countries.germany.map((i,idx) => (
              <TableRow key={idx}>
                <TableCell className='p-2 border-r-1 border-gray-400'>{i.country}</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.name}</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.headOffice1}
                  <p>{i.headOffice2}</p>
                  <p><br/>{i.headOffice3}</p>
                  <p>{i.headOffice4}</p>
                </TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.address}
                  <p>{i.address2}</p>
                </TableCell>
                <TableCell className='p-2 border-r-1 border-gray-400 break-all'>{i.email1}
                  <p>{i.email2}</p>
                </TableCell>
                <TableCell className='p-2'><RoseAnchor className='break-all' href_url={i.website}>{i.website}</RoseAnchor></TableCell>
              </TableRow>
              ))}
            </TableBody>
          </Table>
        </AccordionContent>
      </AccordionItem>
      {/*  */}
      <AccordionItem value='item-18' className='border-b mb-2'>
        <AccordionHeader>
          <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
            <p className='text-sm font-light'>GREECE</p>
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent className='my-10 space-y-10'>
          <Table>
            <TableHeader className='border-1'>
              <TableRow>
                <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                  <Heading5>Country</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Name</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Head of Office</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Address</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Email</Heading5>
                </TableHead>
                <TableHead className="text-white text-center py-8">
                  <Heading5>Website</Heading5>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className='border-1 '>
              {countries.greece.map((i,idx) => (
              <TableRow key={idx}>
                <TableCell className='p-2 border-r-1 border-gray-400'>{i.country}</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.name}</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.headOffice1}
                  <p><br/>{i.headOffice2}</p>
                </TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.address}
                  <p>{i.address2}</p>
                </TableCell>
                <TableCell className='p-2 border-r-1 border-gray-400 break-all'>{i.email1}
                  <p>{i.email2}</p>
                  <p>{i.email3}</p>
                </TableCell>
                <TableCell className='p-2'><RoseAnchor className='break-all' href_url={i.website}>{i.website}</RoseAnchor></TableCell>
              </TableRow>
              ))}
            </TableBody>
          </Table>
        </AccordionContent>
      </AccordionItem>
      {/*  */}
      <AccordionItem value='item-19' className='border-b mb-2'>
        <AccordionHeader>
          <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
            <p className='text-sm font-light'>HUNGRARY</p>
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent className='my-10 space-y-10'>
          <Table>
            <TableHeader className='border-1'>
              <TableRow>
                <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                  <Heading5>Country</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Name</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Head of Office</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Address</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Email</Heading5>
                </TableHead>
                <TableHead className="text-white text-center py-8">
                  <Heading5>Website</Heading5>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className='border-1 '>
              <TableRow>
                <TableCell className='p-2 border-r-1 border-gray-400'>Hungrary</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>EMBASSY OF THE PHILIPPINES, BUDAPEST</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>H.E. (Ms.) Eleanor L. Jaucian<br/><br/>Ambassador Extraordinary and Plenipotentiary</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>1026 Budapest , Gabor Aron utca 58 Budapest, Hungary</TableCell>
                <TableCell className='p-2 border-r-1 border-gray-400 break-all'>budapest.pe@dfa.gov.ph;<br/>consular.ph;<br/>@mail.datanet.hu</TableCell>
                <TableCell className='p-2 break-all'>phbuda@mail.datanet.hu</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </AccordionContent>
      </AccordionItem>
      {/*  */}
      <AccordionItem value='item-20' className='border-b mb-2'>
        <AccordionHeader>
          <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
            <p className='text-sm font-light'>INDIA</p>
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent className='my-10 space-y-10'>
          <Table>
            <TableHeader className='border-1'>
              <TableRow>
                <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                  <Heading5>Country</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Name</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Head of Office</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Address</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Email</Heading5>
                </TableHead>
                <TableHead className="text-white text-center py-8">
                  <Heading5>Website</Heading5>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className='border-1 '>
              {countries.india.map((i,idx) => (
              <TableRow key={idx}>
                <TableCell className='p-2 border-r-1 border-gray-400'>{i.country}</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.name}</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.headOffice1}
                  <p>{i.headOffice2}</p>
                  <p><br/>{i.headOffice3}</p>
                  <p>{i.headOffice4}</p>
                  <p><br/>{i.headOffice5}</p>
                  <p>{i.headOffice6}</p>
                </TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.address}
                  <p>{i.address2}</p>
                </TableCell>
                <TableCell className='p-2 border-r-1 border-gray-400 break-all'>{i.email1}
                  <p>{i.email2}</p>
                </TableCell>
                <TableCell className='p-2'><RoseAnchor className='break-all' href_url={i.website}>{i.website}</RoseAnchor></TableCell>
              </TableRow>
              ))}
            </TableBody>
          </Table>
        </AccordionContent>
      </AccordionItem>
      {/*  */}
      <AccordionItem value='item-21' className='border-b mb-2'>
        <AccordionHeader>
          <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
            <p className='text-sm font-light'>INDONESIA</p>
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent className='my-10 space-y-10'>
          <Table>
            <TableHeader className='border-1'>
              <TableRow>
                <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                  <Heading5>Country</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Name</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Head of Office</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Address</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Email</Heading5>
                </TableHead>
                <TableHead className="text-white text-center py-8">
                  <Heading5>Website</Heading5>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className='border-1 '>
              {countries.indonesia.map((i,idx) => (
              <TableRow key={idx}>
                <TableCell className='p-2 border-r-1 border-gray-400'>{i.country}</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.name}</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.headOffice1}
                  <p><br/>{i.headOffice2}</p>
                </TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.address}
                </TableCell>
                <TableCell className='p-2 border-r-1 border-gray-400 break-all'>{i.email1}
                  <p>{i.email2}</p>
                  <p>{i.email3}</p>
                </TableCell>
                <TableCell className='p-2'></TableCell>
              </TableRow>
              ))}
            </TableBody>
          </Table>
        </AccordionContent>
      </AccordionItem>
      {/*  */}
      <AccordionItem value='item-22' className='border-b mb-2'>
        <AccordionHeader>
          <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
            <p className='text-sm font-light'>IRAQ</p>
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent className='my-10 space-y-10'>
          <Table>
            <TableHeader className='border-1'>
              <TableRow>
                <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                  <Heading5>Country</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Name</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Head of Office</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Address</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Email</Heading5>
                </TableHead>
                <TableHead className="text-white text-center py-8">
                  <Heading5>Website</Heading5>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className='border-1 '>
              <TableRow>
                <TableCell className='p-2 border-r-1 border-gray-400'>Iraq</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>EMBASSY OF THE PHILIPPINES, BAGHDAD</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>H.E. (Mr.) Marlowe A. Miranda<br/><br/>Chargé d’ Affaires, a.i.</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>House No. 4 Zukak No. 22, Mahalat 915 Hay Al-Jamia, Al-Jadriyah, Baghdad, Iraq</TableCell>
                <TableCell className='p-2 border-r-1 border-gray-400 break-all'>baghdad.pe@dfa.gov.ph;<br/>pe.baghdad@gmail.com;<br/>baghdadpe@gmx.com</TableCell>
                <TableCell className='p-2 break-all'></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </AccordionContent>
      </AccordionItem>
      {/*  */}
      <AccordionItem value='item-23' className='border-b mb-2'>
        <AccordionHeader>
          <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
            <p className='text-sm font-light'>ISRAEL</p>
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent className='my-10 space-y-10'>
          <Table>
            <TableHeader className='border-1'>
              <TableRow>
                <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                  <Heading5>Country</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Name</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Head of Office</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Address</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Email</Heading5>
                </TableHead>
                <TableHead className="text-white text-center py-8">
                  <Heading5>Website</Heading5>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className='border-1 '>
              {countries.israel.map((i,idx) => (
              <TableRow key={idx}>
                <TableCell className='p-2 border-r-1 border-gray-400'>{i.country}</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.name}</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.headOffice1}
                  <p><br/>{i.headOffice2}</p>
                </TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.address}
                </TableCell>
                <TableCell className='p-2 border-r-1 border-gray-400 break-all'>{i.email1}
                  <p>{i.email2}</p>
                </TableCell>
                <TableCell className='p-2'><RoseAnchor className='break-all' href_url={i.website}>{i.website}</RoseAnchor></TableCell>
              </TableRow>
              ))}
            </TableBody>
          </Table>
        </AccordionContent>
      </AccordionItem>
      {/*  */}
      <AccordionItem value='item-24' className='border-b mb-2'>
        <AccordionHeader>
          <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
            <p className='text-sm font-light'>ITALY</p>
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent className='my-10 space-y-10'>
          <Table>
            <TableHeader className='border-1'>
              <TableRow>
                <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                  <Heading5>Country</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Name</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Head of Office</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Address</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Email</Heading5>
                </TableHead>
                <TableHead className="text-white text-center py-8">
                  <Heading5>Website</Heading5>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className='border-1 '>
              {countries.italy.map((i,idx) => (
              <TableRow key={idx}>
                <TableCell className='p-2 border-r-1 border-gray-400'>{i.country}</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.name}</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.headOffice1}
                  <p><br/>{i.headOffice2}</p>
                </TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.address}
                </TableCell>
                <TableCell className='p-2 border-r-1 border-gray-400 break-all'>{i.email1}
                  <p>{i.email2}</p>
                  <p>{i.email3}</p>
                </TableCell>
                <TableCell className='p-2'><RoseAnchor className='break-all' href_url={i.website}>{i.website}</RoseAnchor></TableCell>
              </TableRow>
              ))}
            </TableBody>
          </Table>
        </AccordionContent>
      </AccordionItem>
      {/*  */}
      <AccordionItem value='item-25' className='border-b mb-2'>
        <AccordionHeader>
          <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
            <p className='text-sm font-light'>JAPAN</p>
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent className='my-10 space-y-10'>
          <Table>
            <TableHeader className='border-1'>
              <TableRow>
                <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                  <Heading5>Country</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Name</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Head of Office</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Address</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Email</Heading5>
                </TableHead>
                <TableHead className="text-white text-center py-8">
                  <Heading5>Website</Heading5>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className='border-1 '>
              {countries.japan.map((i,idx) => (
              <TableRow key={idx}>
                <TableCell className='p-2 border-r-1 border-gray-400'>{i.country}</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.name}</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.headOffice1}
                  <p><br/>{i.headOffice2}</p>
                </TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.address}
                  <p><br/>{i.address2}</p>
                </TableCell>
                <TableCell className='p-2 border-r-1 border-gray-400 break-all'>{i.email1}
                  <p><br/>{i.email2}</p>
                </TableCell>
                <TableCell className='p-2'><RoseAnchor className='break-all' href_url={i.website}>{i.website}</RoseAnchor></TableCell>
              </TableRow>
              ))}
            </TableBody>
          </Table>
        </AccordionContent>
      </AccordionItem>
      {/*  */}
      <AccordionItem value='item-26' className='border-b mb-2'>
        <AccordionHeader>
          <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
            <p className='text-sm font-light'>JORDAN</p>
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent className='my-10 space-y-10'>
          <Table>
            <TableHeader className='border-1'>
              <TableRow>
                <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                  <Heading5>Country</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Name</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Head of Office</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Address</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Email</Heading5>
                </TableHead>
                <TableHead className="text-white text-center py-8">
                  <Heading5>Website</Heading5>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className='border-1 '>
              <TableRow>
                <TableCell className='p-2 border-r-1 border-gray-400'>Jordan</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>EMBASSY OF THE PHILIPPINES, AMMAN</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>H.E. (Ms.) Olivia V. Palala<br/><br/>Ambassador Extraordinary and Plenipotentiary</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>No. 5 Salem Al Batarseh St., Al Sahel Area, Wadi Al Seir, Amman, Hashemite Kingdom of Jordan</TableCell>
                <TableCell className='p-2 border-r-1 border-gray-400 break-all'>amman.pe@dfa.gov.ph;<br/><br/>ammanpe@orange.jo;<br/><br/>pe.amman@gmail.com</TableCell>
                <TableCell className='p-2 break-all'></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </AccordionContent>
      </AccordionItem>
      {/*  */}
      <AccordionItem value='item-27' className='border-b mb-2'>
        <AccordionHeader>
          <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
            <p className='text-sm font-light'>KENYA</p>
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent className='my-10 space-y-10'>
          <Table>
            <TableHeader className='border-1'>
              <TableRow>
                <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                  <Heading5>Country</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Name</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Head of Office</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Address</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Email</Heading5>
                </TableHead>
                <TableHead className="text-white text-center py-8">
                  <Heading5>Website</Heading5>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className='border-1 '>
              <TableRow>
                <TableCell className='p-2 border-r-1 border-gray-400'>Kenya</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>EMBASSY OF THE PHILIPPINES, NAIROBI</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>H.E. (Mr.) Domingo D. Lucenario, Jr.<br/><br/>Ambassador Extraordinary and Plenipotentiary</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>State House Road P.O. Box 47941, 00100 Nairobi, Kenya</TableCell>
                <TableCell className='p-2 border-r-1 border-gray-400 break-all'>nairobi.pe@dfa.gov.ph;<br/><br/>pe.nairobi@gmail.com;<br/><br/>nairobipe@philembassy.or</TableCell>
                <TableCell className='p-2'><RoseAnchor className='break-all' href_url='https://www.phil-embassy.or.ke'>www.phil-embassy.or.ke</RoseAnchor></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </AccordionContent>
      </AccordionItem>
      {/*  */}
      <AccordionItem value='item-28' className='border-b mb-2'>
        <AccordionHeader>
          <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
            <p className='text-sm font-light'>REPUBLIC OF KOREA</p>
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent className='my-10 space-y-10'>
          <Table>
            <TableHeader className='border-1'>
              <TableRow>
                <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                  <Heading5>Country</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Name</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Head of Office</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Address</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Email</Heading5>
                </TableHead>
                <TableHead className="text-white text-center py-8">
                  <Heading5>Website</Heading5>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className='border-1 '>
              <TableRow>
                <TableCell className='p-2 border-r-1 border-gray-400'>Republic of Korea</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>EMBASSY OF THE PHILIPPINES, SEOUL</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>H.E. (Mr.) Luis T. Cruz<br/><br/>Ambassador Extraordinary and Plenipotentiary</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>5-1 Itaewon-2 dong, Yongsan-Gu, Seoul 140-200, Republic of Korea</TableCell>
                <TableCell className='p-2 border-r-1 border-gray-400 break-all'>seoul.pe@dfa.gov.ph;<br/>seoulpe@philembassy-seoul.com;<br/>contact.us@philembassy-seoul.com;<br/>ambassador@philembassy-seoul.com</TableCell>
                <TableCell className='p-2'><RoseAnchor className='break-all' href_url='https://www.philembassy-seoul.com'>www.philembassy-seoul.com</RoseAnchor></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </AccordionContent>
      </AccordionItem>
      {/*  */}
      <AccordionItem value='item-29' className='border-b mb-2'>
        <AccordionHeader>
          <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
            <p className='text-sm font-light'>KUWAIT</p>
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent className='my-10 space-y-10'>
          <Table>
            <TableHeader className='border-1'>
              <TableRow>
                <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                  <Heading5>Country</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Name</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Head of Office</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Address</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Email</Heading5>
                </TableHead>
                <TableHead className="text-white text-center py-8">
                  <Heading5>Website</Heading5>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className='border-1 '>
              <TableRow>
                <TableCell className='p-2 border-r-1 border-gray-400'>Kuwait</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>EMBASSY OF THE PHILIPPINES, KUWAIT</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>Mr. Raul H. Dado<br/><br/>Charge d’ Affaires, a. i.</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>Villa 153, Nouman bin Basher St. corner Damascus St.<br/><br/>Block 6, Faiha, State of Kuwait</TableCell>
                <TableCell className='p-2 border-r-1 border-gray-400 break-all'>kuwait.pe@dfa.gov.ph;<br/><br/>kuwaitpe@philem.fasttelco.com</TableCell>
                <TableCell className='p-2'><RoseAnchor className='break-all' href_url='https://www.philembassykuwait.gov.kw'>www.philembassykuwait.gov.kw</RoseAnchor></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </AccordionContent>
      </AccordionItem>
      {/*  */}
      <AccordionItem value='item-30' className='border-b mb-2'>
        <AccordionHeader>
          <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
            <p className='text-sm font-light'>LAOS</p>
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent className='my-10 space-y-10'>
          <Table>
            <TableHeader className='border-1'>
              <TableRow>
                <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                  <Heading5>Country</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Name</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Head of Office</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Address</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Email</Heading5>
                </TableHead>
                <TableHead className="text-white text-center py-8">
                  <Heading5>Website</Heading5>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className='border-1 '>
              <TableRow>
                <TableCell className='p-2 border-r-1 border-gray-400'>Laos</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>EMBASSY OF THE PHILIPPINES, VIENTIANE</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>H.E. (Ms.) Ma. Lumen B. Isleta<br/><br/>Ambassador Extraordinary and Plenipotentiary</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>Ban Saphanthong Kang, Sisattanak District, Vientiane, Lao Pdr</TableCell>
                <TableCell className='p-2 border-r-1 border-gray-400 break-all'>vientiane.pe@dfa.gov.ph;<br/><br/>pelaopdr@laotel.com</TableCell>
                <TableCell className='p-2'></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </AccordionContent>
      </AccordionItem>
      {/*  */}
      <AccordionItem value='item-31' className='border-b mb-2'>
        <AccordionHeader>
          <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
            <p className='text-sm font-light'>LEBANON</p>
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent className='my-10 space-y-10'>
          <Table>
            <TableHeader className='border-1'>
              <TableRow>
                <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                  <Heading5>Country</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Name</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Head of Office</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Address</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Email</Heading5>
                </TableHead>
                <TableHead className="text-white text-center py-8">
                  <Heading5>Website</Heading5>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className='border-1 '>
              <TableRow>
                <TableCell className='p-2 border-r-1 border-gray-400'>Lebanon</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>EMBASSY OF THE PHILIPPINES, BEIRUT</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>H.E. (Ms.) Leah B. Ruiz<br/><br/>Ambassador Extraordinary and Plenipotentiary</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>W Building, Rue Mar Geries<br/><br/>Hadath, Baabda, Mount Lebanon, Republic of Lebanon</TableCell>
                <TableCell className='p-2 border-r-1 border-gray-400 break-all'>beirut.pe@dfa.gov.ph</TableCell>
                <TableCell className='p-2'></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </AccordionContent>
      </AccordionItem>
      {/*  */}
      <AccordionItem value='item-32' className='border-b mb-2'>
        <AccordionHeader>
          <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
            <p className='text-sm font-light'>LIBYA</p>
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent className='my-10 space-y-10'>
          <Table>
            <TableHeader className='border-1'>
              <TableRow>
                <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                  <Heading5>Country</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Name</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Head of Office</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Address</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Email</Heading5>
                </TableHead>
                <TableHead className="text-white text-center py-8">
                  <Heading5>Website</Heading5>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className='border-1 '>
              <TableRow>
                <TableCell className='p-2 border-r-1 border-gray-400'>Libya</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>EMBASSY OF THE PHILIPPINES, TRIPOLI</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>H.E. (Mr.) Oscar G. Orcine<br/><br/>Ambassador Extraordinary and Plenipotentiary</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>KM 7 Gargaresh Road, Abu Nawas P.O. Box 12508, Tripoli, Libya</TableCell>
                <TableCell className='p-2 border-r-1 border-gray-400 break-all'>tripoli.pe@gmail.com;<br/><br/>tripoli.pe@dfa.gov.ph</TableCell>
                <TableCell className='p-2'></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </AccordionContent>
      </AccordionItem>
      {/*  */}
      <AccordionItem value='item-33' className='border-b mb-2'>
        <AccordionHeader>
          <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
            <p className='text-sm font-light'>MALAYSIA</p>
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent className='my-10 space-y-10'>
          <Table>
            <TableHeader className='border-1'>
              <TableRow>
                <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                  <Heading5>Country</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Name</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Head of Office</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Address</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Email</Heading5>
                </TableHead>
                <TableHead className="text-white text-center py-8">
                  <Heading5>Website</Heading5>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className='border-1'>
              <TableRow>
                <TableCell className='p-2 border-r-1 border-gray-400'>Malaysia</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>EMBASSY OF THE PHILIPPINES, KUALA LUMPUR</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>H.E. (Mr.) Jose Eduardo E. Malaya III<br/><br/>Ambassador Extraordinary and Plenipotentiary</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>No. 1 Jalan Changkat Kia Peng<br/><br/>50450 Kuala Lumpur, Malaysia</TableCell>
                <TableCell className='p-2 border-r-1 border-gray-400 break-all'>kualalumpur.pe@dfa.gov.ph;<br/><br/>webmaster@philembassykl.org.my</TableCell>
                <TableCell className='p-2'><RoseAnchor className='break-all' href_url='https://www.philembassykl.org.my'>www.philembassykl.org.my</RoseAnchor></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </AccordionContent>
      </AccordionItem>
      {/*  */}
      <AccordionItem value='item-34' className='border-b mb-2'>
        <AccordionHeader>
          <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
            <p className='text-sm font-light'>MEXICO</p>
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent className='my-10 space-y-10'>
          <Table>
            <TableHeader className='border-1'>
              <TableRow>
                <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                  <Heading5>Country</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Name</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Head of Office</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Address</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Email</Heading5>
                </TableHead>
                <TableHead className="text-white text-center py-8">
                  <Heading5>Website</Heading5>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className='border-1 '>
              {countries.mexico.map((i,idx) => (
              <TableRow key={idx}>
                <TableCell className='p-2 border-r-1 border-gray-400'>{i.country}</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.name}</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.headOffice1}
                  <p>{i.headOffice2}</p>
                  <p><br/>{i.headOffice3}</p>
                  <p>{i.headOffice4}</p>
                </TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.address}
                  <p>{i.address2}</p>
                  <p>{i.address3}</p>
                  <p>{i.address4}</p>
                </TableCell>
                <TableCell className='p-2 border-r-1 border-gray-400 break-all'>{i.email1}
                  <p><br/>{i.email2}</p>
                </TableCell>
                <TableCell className='p-2'></TableCell>
              </TableRow>
              ))}
            </TableBody>
          </Table>
        </AccordionContent>
      </AccordionItem>
      {/*  */}
      <AccordionItem value='item-35' className='border-b mb-2'>
        <AccordionHeader>
          <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
            <p className='text-sm font-light'>MYANMAR</p>
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent className='my-10 space-y-10'>
          <Table>
            <TableHeader className='border-1'>
              <TableRow>
                <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                  <Heading5>Country</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Name</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Head of Office</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Address</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Email</Heading5>
                </TableHead>
                <TableHead className="text-white text-center py-8">
                  <Heading5>Website</Heading5>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className='border-1'>
              <TableRow>
                <TableCell className='p-2 border-r-1 border-gray-400'>Myanmar</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>EMBASSY OF THE PHILIPPINES, YANGON</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>Hon. (Mr.) Bryan Jess T. Baguio<br/><br/>Charge d’ Affaires, a.i.</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>No. 50 Saya San Road, Bahan Township, Yangon, Union of Myanmar</TableCell>
                <TableCell className='p-2 border-r-1 border-gray-400 break-all'>yangon.pe@dfa.gov.ph;<br/>yangonpe@mptmail.net.mm;<br/>p.e.yangon@gmail.com</TableCell>
                <TableCell className='p-2'><RoseAnchor className='break-all' href_url='https://www.philembassy-yangon.com'>www.philembassy-yangon.com</RoseAnchor></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </AccordionContent>
      </AccordionItem>
      {/*  */}
      <AccordionItem value='item-36' className='border-b mb-2'>
        <AccordionHeader>
          <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
            <p className='text-sm font-light'>NETHERLANDS</p>
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent className='my-10 space-y-10'>
          <Table>
            <TableHeader className='border-1'>
              <TableRow>
                <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                  <Heading5>Country</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Name</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Head of Office</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Address</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Email</Heading5>
                </TableHead>
                <TableHead className="text-white text-center py-8">
                  <Heading5>Website</Heading5>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className='border-1 '>
              {countries.netherlands.map((i,idx) => (
              <TableRow key={idx}>
                <TableCell className='p-2 border-r-1 border-gray-400'>{i.country}</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.name}</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.headOffice1}
                  <p><br/>{i.headOffice2}</p>
                </TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.address}
                  <p>{i.address2}</p>
                  <p>{i.address3}</p>
                </TableCell>
                <TableCell className='p-2 border-r-1 border-gray-400 break-all'>{i.email1}
                  <p><br/>{i.email2}</p>
                </TableCell>
                <TableCell className='p-2'><RoseAnchor className='break-all' href_url={i.website}>{i.website}</RoseAnchor></TableCell>
              </TableRow>
              ))}
            </TableBody>
          </Table>
        </AccordionContent>
      </AccordionItem>
      {/*  */}
      <AccordionItem value='item-37' className='border-b mb-2'>
        <AccordionHeader>
          <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
            <p className='text-sm font-light'>NEW ZEALAND</p>
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent className='my-10 space-y-10'>
          <Table>
            <TableHeader className='border-1'>
              <TableRow>
                <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                  <Heading5>Country</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Name</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Head of Office</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Address</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Email</Heading5>
                </TableHead>
                <TableHead className="text-white text-center py-8">
                  <Heading5>Website</Heading5>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className='border-1 '>
              {countries.newZealand.map((i,idx) => (
              <TableRow key={idx}>
                <TableCell className='p-2 border-r-1 border-gray-400'>{i.country}</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.name}</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.headOffice1}
                  <p>{i.headOffice2}</p>
                  <p><br/>{i.headOffice3}</p>
                  <p>{i.headOffice4}</p>
                </TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.address}</TableCell>
                <TableCell className='p-2 border-r-1 border-gray-400 break-all'>{i.email1}
                  <p><br/>{i.email2}</p>
                </TableCell>
                <TableCell className='p-2'><RoseAnchor className='break-all' href_url={i.website}>{i.website}</RoseAnchor></TableCell>
              </TableRow>
              ))}
            </TableBody>
          </Table>
        </AccordionContent>
      </AccordionItem>
      {/*  */}
      <AccordionItem value='item-38' className='border-b mb-2'>
        <AccordionHeader>
          <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
            <p className='text-sm font-light'>NIGERIA</p>
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent className='my-10 space-y-10'>
          <Table>
            <TableHeader className='border-1'>
              <TableRow>
                <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                  <Heading5>Country</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Name</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Head of Office</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Address</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Email</Heading5>
                </TableHead>
                <TableHead className="text-white text-center py-8">
                  <Heading5>Website</Heading5>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className='border-1'>
              <TableRow>
                <TableCell className='p-2 border-r-1 border-gray-400'>Nigeria</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>EMBASSY OF THE PHILIPPINES, ABUJA</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>H.E. (Mr.) Alex V. Lamadrid<br/><br/>Ambassador Extraordinary and Plenipotentiary</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>No. 2 Kainji St., corner Lake Chad Crescent, Maitama District, FCT Abuja, Federal Republic of Nigeria</TableCell>
                <TableCell className='p-2 border-r-1 border-gray-400 break-all'>abuja.pe@dfa.gov.ph;<br/><br/>abuja_pe@yahoo.co.uk;<br/><br/>philemb_abuja@yahoo.co.uk</TableCell>
                <TableCell className='p-2'></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </AccordionContent>
      </AccordionItem>
      {/*  */}
      <AccordionItem value='item-39' className='border-b mb-2'>
        <AccordionHeader>
          <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
            <p className='text-sm font-light'>NORWAY</p>
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent className='my-10 space-y-10'>
          <Table>
            <TableHeader className='border-1'>
              <TableRow>
                <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                  <Heading5>Country</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Name</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Head of Office</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Address</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Email</Heading5>
                </TableHead>
                <TableHead className="text-white text-center py-8">
                  <Heading5>Website</Heading5>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className='border-1'>
              <TableRow>
                <TableCell className='p-2 border-r-1 border-gray-400'>Norway</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>EMBASSY OF THE PHILIPPINES, OSLO</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>H.E. (Mr.) Bayani S. Mercado<br/><br/>Ambassador Extraordinary and Plenipotentiary</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>4th Flr. Nedre Vollgate 5, 0158 Oslo, Norway</TableCell>
                <TableCell className='p-2 border-r-1 border-gray-400 break-all'>oslo.pe@dfa.gov.ph;<br/>ambassador@philembassy.no;<br/>philembassy.oslo@gmail.com</TableCell>
                <TableCell className='p-2'><RoseAnchor className='break-all' href_url='https://www.philembassy.no'>www.philembassy.no</RoseAnchor></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='p-2 border-r-1 border-gray-400'></TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>PHILIPPINE CONSULATE, STAVANGER</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>Ms. Renee Saga Ikdal<br/><br/>Consul, ad honorem</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>Office: Senior AS, Lokkeveien 13, 4008, Stavanger, Norway</TableCell>
                <TableCell className='p-2 border-r-1 border-gray-400 break-all'>renee@senior.as</TableCell>
                <TableCell className='p-2'></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </AccordionContent>
      </AccordionItem>
      {/*  */}
      <AccordionItem value='item-40' className='border-b mb-2'>
        <AccordionHeader>
          <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
            <p className='text-sm font-light'>OMAN</p>
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent className='my-10 space-y-10'>
          <Table>
            <TableHeader className='border-1'>
              <TableRow>
                <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                  <Heading5>Country</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Name</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Head of Office</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Address</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Email</Heading5>
                </TableHead>
                <TableHead className="text-white text-center py-8">
                  <Heading5>Website</Heading5>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className='border-1'>
              <TableRow>
                <TableCell className='p-2 border-r-1 border-gray-400'>Oman</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>EMBASSY OF THE PHILIPPINES, MUSCAT</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>H.E. (Mr.) Joselito A. Jimeno<br/><br/>Ambassador Extraordinary and Plenipotentiary</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>Building No.1041/1043, Way No. 3015, Al Kharijya St., Shatti Al Qurum, Muscat, Sultanate of Oman</TableCell>
                <TableCell className='p-2 border-r-1 border-gray-400 break-all'>muscat.pe@dfa.gov.ph;<br/><br/>muscatpe@omantel.net.om;<br/><br/>muscatpe@yahoo.com</TableCell>
                <TableCell className='p-2'><RoseAnchor className='break-all' href_url='https://www.muscatpe.org'>www.muscatpe.org</RoseAnchor></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </AccordionContent>
      </AccordionItem>
      {/*  */}
      <AccordionItem value='item-41' className='border-b mb-2'>
        <AccordionHeader>
          <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
            <p className='text-sm font-light'>PAKISTAN</p>
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent className='my-10 space-y-10'>
          <Table>
            <TableHeader className='border-1'>
              <TableRow>
                <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                  <Heading5>Country</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Name</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Head of Office</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Address</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Email</Heading5>
                </TableHead>
                <TableHead className="text-white text-center py-8">
                  <Heading5>Website</Heading5>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className='border-1'>
              <TableRow>
                <TableCell className='p-2 border-r-1 border-gray-400'>Pakistan</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>EMBASSY OF THE PHILIPPINES, ISLAMABAD</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>Hon. (Mr.) Conrado B. Demdem Jr.<br/><br/>Charge d’ Affaires, a.i.</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>House No. 12, Street No. 12, F/2, Islamabad, Pakistan</TableCell>
                <TableCell className='p-2 border-r-1 border-gray-400 break-all'>islamabad.pe@dfa.gov.ph;<br/><br/>isdpe@isb.comsats.net.pk</TableCell>
                <TableCell className='p-2'><RoseAnchor className='break-all' href_url='https://www.isdpe.com.pk'>www.isdpe.com.pk</RoseAnchor></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='p-2 border-r-1 border-gray-400'></TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>PHILIPPINE CONSULATE, LAHORE</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>Mr. Rizwan Fareed<br/><br/>Consul, ad honorem</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>Office: Bldg. No. 2, Mezzanine Floor, Associated House, 7 Egerton Road, Lahore 54000, Pakistan</TableCell>
                <TableCell className='p-2 border-r-1 border-gray-400 break-all'>consoli55@hotmail.com</TableCell>
                <TableCell className='p-2'></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </AccordionContent>
      </AccordionItem>
      {/*  */}
      <AccordionItem value='item-42' className='border-b mb-2'>
        <AccordionHeader>
          <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
            <p className='text-sm font-light'>PAPUA NEW GUINEA</p>
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent className='my-10 space-y-10'>
          <Table>
            <TableHeader className='border-1'>
              <TableRow>
                <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                  <Heading5>Country</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Name</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Head of Office</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Address</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Email</Heading5>
                </TableHead>
                <TableHead className="text-white text-center py-8">
                  <Heading5>Website</Heading5>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className='border-1'>
              <TableRow>
                <TableCell className='p-2 border-r-1 border-gray-400'>Papua New Guinea</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>EMBASSY OF THE PHILIPPINES, PORT MORESBY</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>H.E. (Mr.) Bienvenido V. Tejano<br/><br/>Ambassador Extraordinary and Plenipotentiary</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>Lot 1, Section 440, Islander Village, Hohola, NCD Papua New Guinea</TableCell>
                <TableCell className='p-2 border-r-1 border-gray-400 break-all'>portmoresby.pe@dfa.gov.ph;<br/><br/>pompe@datec.net.pg;<br/><br/>to2rio@yahoo.com</TableCell>
                <TableCell className='p-2'><RoseAnchor className='break-all' href_url='http://www.philembassypng.tk'>http://www.philembassypng.tk</RoseAnchor></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </AccordionContent>
      </AccordionItem>
      {/*  */}
      <AccordionItem value='item-43' className='border-b mb-2'>
        <AccordionHeader>
          <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
            <p className='text-sm font-light'>POLAND</p>
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent className='my-10 space-y-10'>
          <Table>
            <TableHeader className='border-1'>
              <TableRow>
                <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                  <Heading5>Country</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Name</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Head of Office</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Address</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Email</Heading5>
                </TableHead>
                <TableHead className="text-white text-center py-8">
                  <Heading5>Website</Heading5>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className='border-1'>
              <TableRow>
                <TableCell className='p-2 border-r-1 border-gray-400'>Poland</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>EMBASSY OF THE PHILIPPINES, WARSAW</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>H.E. (Ms.) Patricia Ann V. Paez<br/><br/>Ambassador Extraordinary and Plenipotentiary</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>Lentza 11, Warsaw, Poland</TableCell>
                <TableCell className='p-2 border-r-1 border-gray-400 break-all'>warsaw.pe@dfa.gov.ph;<br/><br/>warsaw.philembassy@gmail.com;<br/><br/>pe.warsaw@gmail.com</TableCell>
                <TableCell className='p-2'><RoseAnchor className='break-all' href_url='http://www.philembassy.pl'>www.philembassy.pl</RoseAnchor></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='p-2 border-r-1 border-gray-400'></TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>PHILIPPINE CONSULATE GENERAL, POZNAN</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>Mr. Edward J. Magiera<br/><br/>Consul General, ad honorem</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>Ul. Sw. Marcina 80/8 Ul. Foksal 1, 00-366 Warsaw, Poland</TableCell>
                <TableCell className='p-2 border-r-1 border-gray-400 break-all'>edward.magiera@edfman.pl</TableCell>
                <TableCell className='p-2'></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </AccordionContent>
      </AccordionItem>
      {/*  */}
      <AccordionItem value='item-44' className='border-b mb-2'>
        <AccordionHeader>
          <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
            <p className='text-sm font-light'>PORTUGAL</p>
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent className='my-10 space-y-10'>
          <Table>
            <TableHeader className='border-1'>
              <TableRow>
                <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                  <Heading5>Country</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Name</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Head of Office</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Address</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Email</Heading5>
                </TableHead>
                <TableHead className="text-white text-center py-8">
                  <Heading5>Website</Heading5>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className='border-1'>
              <TableRow>
                <TableCell className='p-2 border-r-1 border-gray-400'>Portugal</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>EMBASSY OF THE PHILIPPINES, LISBON</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>H.E. (Mr.) Philippe J. Lhuillier<br/><br/>Ambassador Extraordinary and Plenipotentiary</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>Rua Braamcamp 13, 5 andar<br/><br/>1250-049 Lisbon, Portugal</TableCell>
                <TableCell className='p-2 border-r-1 border-gray-400 break-all'>lisbon.pe@dfa.gov.ph;<br/><br/>lisbon.pe@gmail.com</TableCell>
                <TableCell className='p-2'></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </AccordionContent>
      </AccordionItem>
      {/*  */}
      <AccordionItem value='item-45' className='border-b mb-2'>
        <AccordionHeader>
          <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
            <p className='text-sm font-light'>QATAR</p>
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent className='my-10 space-y-10'>
          <Table>
            <TableHeader className='border-1'>
              <TableRow>
                <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                  <Heading5>Country</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Name</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Head of Office</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Address</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Email</Heading5>
                </TableHead>
                <TableHead className="text-white text-center py-8">
                  <Heading5>Website</Heading5>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className='border-1'>
              <TableRow>
                <TableCell className='p-2 border-r-1 border-gray-400'>Qatar</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>EMBASSY OF THE PHILIPPINES, DOHA</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>H.E. (Mr.) Cresente R. Relacion<br/><br/>Ambassador Extraordinary and Plenipotentiary</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>Villa # 15 A1 Eithar Street, Saha 2, West Bay Area Doha, State of Qatar</TableCell>
                <TableCell className='p-2 border-r-1 border-gray-400 break-all'>doha.pe@dfa.gov.ph;<br/><br/>phiemb@dohape.com.qa<br/><br/>dohape@yahoo.com</TableCell>
                <TableCell className='p-2'></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </AccordionContent>
      </AccordionItem>
      {/*  */}
      <AccordionItem value='item-46' className='border-b mb-2'>
        <AccordionHeader>
          <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
            <p className='text-sm font-light'>RUSSIA</p>
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent className='my-10 space-y-10'>
          <Table>
            <TableHeader className='border-1'>
              <TableRow>
                <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                  <Heading5>Country</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Name</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Head of Office</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Address</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Email</Heading5>
                </TableHead>
                <TableHead className="text-white text-center py-8">
                  <Heading5>Website</Heading5>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className='border-1 '>
              {countries.russia.map((i,idx) => (
              <TableRow key={idx}>
                <TableCell className='p-2 border-r-1 border-gray-400'>{i.country}</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.name}</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.headOffice1}
                  <p><br/>{i.headOffice2}</p>
                </TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.address}
                  <p>{i.address2}</p>
                </TableCell>
                <TableCell className='p-2 border-r-1 border-gray-400 break-all'>{i.email1}
                  <p><br/>{i.email2}</p>
                  <p><br/>{i.email3}</p>
                </TableCell>
                <TableCell className='p-2'><RoseAnchor className='break-all' href_url={i.website}>{i.website}</RoseAnchor></TableCell>
              </TableRow>
              ))}
            </TableBody>
          </Table>
        </AccordionContent>
      </AccordionItem>
      {/*  */}
      <AccordionItem value='item-47' className='border-b mb-2'>
        <AccordionHeader>
          <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
            <p className='text-sm font-light'>SAUDI ARABIA</p>
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent className='my-10 space-y-10'>
          <Table>
            <TableHeader className='border-1'>
              <TableRow>
                <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                  <Heading5>Country</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Name</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Head of Office</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Address</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Email</Heading5>
                </TableHead>
                <TableHead className="text-white text-center py-8">
                  <Heading5>Website</Heading5>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className='border-1'>
              <TableRow>
                <TableCell className='p-2 border-r-1 border-gray-400'>Saudi Arabia</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>EMBASSY OF THE PHILIPPINES, RIYADH</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>H.E. (Mr.) Ezzedin H. Tago<br/><br/>Ambassador Extraordinary and Plenipotentiary</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>D3 Collector Road C, Diplomatic Quarter, P.O. Box 94366, Riyadh 11693 Kingdom of Saudi Arabia</TableCell>
                <TableCell className='p-2 border-r-1 border-gray-400 break-all'>riyadh.pe@dfa.gov.ph;<br/><br/>filembry@sbm.net.sa</TableCell>
                <TableCell className='p-2'><RoseAnchor className='break-all' href_url='https://www.philembassy-riyadh.org'>www.philembassy-riyadh.org</RoseAnchor></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='p-2 border-r-1 border-gray-400'></TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>PHILIPPINE CONSULATE GENERAL, JEDDAH</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>Hon. (Mr.) Uriel Norman R. Garibay<br/><br/>Consul General</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>Ummul Qurah Street Rehab District Jeddah, Kingdom of Saudi Arabia</TableCell>
                <TableCell className='p-2 border-r-1 border-gray-400 break-all'>jeddah.pcg@dfa.gov.ph;<br/><br/>pc.jeddah@gmail.com;<br/><br/>philcongen@pcgjeddah.com</TableCell>
                <TableCell className='p-2'><RoseAnchor className='break-all' href_url='https://www.pcgjeddah.com'>www.pcgjeddah.com</RoseAnchor></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </AccordionContent>
      </AccordionItem>
      {/*  */}
      <AccordionItem value='item-48' className='border-b mb-2'>
        <AccordionHeader>
          <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
            <p className='text-sm font-light'>SINGAPORE</p>
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent className='my-10 space-y-10'>
          <Table>
            <TableHeader className='border-1'>
              <TableRow>
                <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                  <Heading5>Country</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Name</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Head of Office</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Address</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Email</Heading5>
                </TableHead>
                <TableHead className="text-white text-center py-8">
                  <Heading5>Website</Heading5>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className='border-1'>
              <TableRow>
                <TableCell className='p-2 border-r-1 border-gray-400'>Singapore</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>EMBASSY OF THE PHILIPPINES, SINGAPORE</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>H.E. (Ms.) Minda Calaguian-Cruz<br/><br/>Ambassador Extraordinary and Plenipotentiary</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>20 Nassim Road, Singapore 258395</TableCell>
                <TableCell className='p-2 border-r-1 border-gray-400 break-all'>singapore.pe@dfa.gov.ph;<br/><br/>php@pacific.net.sg</TableCell>
                <TableCell className='p-2'><RoseAnchor className='break-all' href_url='https://www.philippine-embassy.org.sg'>www.philippine-embassy.org.sg</RoseAnchor></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </AccordionContent>
      </AccordionItem>
      {/*  */}
      <AccordionItem value='item-49' className='border-b mb-2'>
        <AccordionHeader>
          <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
            <p className='text-sm font-light'>SOUTH AFRICA</p>
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent className='my-10 space-y-10'>
          <Table>
            <TableHeader className='border-1'>
              <TableRow>
                <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                  <Heading5>Country</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Name</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Head of Office</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Address</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Email</Heading5>
                </TableHead>
                <TableHead className="text-white text-center py-8">
                  <Heading5>Website</Heading5>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className='border-1'>
              <TableRow>
                <TableCell className='p-2 border-r-1 border-gray-400'>South Africa</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>EMBASSY OF THE PHILIPPINES, PRETORIA</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>H.E. (MR.) Constancio R. Vingno, Jr.<br/><br/>Ambassador Extraordinary and Plenipotentiary</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>54 Nicolson St., Muckleneuk, 0181, Pretoria, South Africa</TableCell>
                <TableCell className='p-2 border-r-1 border-gray-400 break-all'>pretoria.pe@dfa.gov.ph;<br/><br/>pretoriape@mweb.co.za;<br/><br/>pretoria2@mweb.co.za</TableCell>
                <TableCell className='p-2'></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='p-2 border-r-1 border-gray-400'></TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>PHILIPPINE CONSULATE, CAPE TOWN</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>Mr. Steven David Chaimowitz<br/><br/>Consul, ad honorem</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>The Cottage, Bramber Court, Ravenscraig Road, Green Point, Cape Town, South Africa</TableCell>
                <TableCell className='p-2 border-r-1 border-gray-400 break-all'>avatar@web.co.za</TableCell>
                <TableCell className='p-2'></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </AccordionContent>
      </AccordionItem>
      {/*  */}
      <AccordionItem value='item-50' className='border-b mb-2'>
        <AccordionHeader>
          <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
            <p className='text-sm font-light'>SPAIN</p>
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent className='my-10 space-y-10'>
          <Table>
            <TableHeader className='border-1'>
              <TableRow>
                <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                  <Heading5>Country</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Name</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Head of Office</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Address</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Email</Heading5>
                </TableHead>
                <TableHead className="text-white text-center py-8">
                  <Heading5>Website</Heading5>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className='border-1 '>
              {countries.spain.map((i,idx) => (
              <TableRow key={idx}>
                <TableCell className='p-2 border-r-1 border-gray-400'>{i.country}</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.name}</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.headOffice1}
                  <p>{i.headOffice2}</p>
                  <p><br/>{i.headOffice3}</p>
                  <p>{i.headOffice4}</p>
                </TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.address}
                  <p>{i.address2}</p>
                </TableCell>
                <TableCell className='p-2 border-r-1 border-gray-400 break-all'>{i.email1}
                  <p><br/>{i.email2}</p>
                  <p><br/>{i.email3}</p>
                  <p><br/>{i.email4}</p>
                </TableCell>
                <TableCell className='p-2'><RoseAnchor className='break-all' href_url={i.website}>{i.website}</RoseAnchor></TableCell>
              </TableRow>
              ))}
            </TableBody>
          </Table>
        </AccordionContent>
      </AccordionItem>
      {/*  */}
      <AccordionItem value='item-51' className='border-b mb-2'>
        <AccordionHeader>
          <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
            <p className='text-sm font-light'>SWITZERLAND</p>
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent className='my-10 space-y-10'>
          <Table>
            <TableHeader className='border-1'>
              <TableRow>
                <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                  <Heading5>Country</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Name</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Head of Office</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Address</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Email</Heading5>
                </TableHead>
                <TableHead className="text-white text-center py-8">
                  <Heading5>Website</Heading5>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className='border-1 '>
              <TableRow>
                <TableCell className='p-2 border-r-1 border-gray-400'>Switzerland</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>EMBASSY OF THE PHILIPPINES, BERNE</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>H.E. (Mr.) Leslie J. Baja<br/><br/>Ambassador Extraordinary and Plenipotentiary</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400 break-all'>Kirchenfeldstrasse 73-75 3005 Berne, Switzerland</TableCell>
                <TableCell className='p-2 border-r-1 border-gray-400 break-all'>berne.pe@dfa.gov.ph;<br/><br/>berne_pe@bluewin.ch;<br/><br/>info@philembassyberne.ch</TableCell>
                <TableCell className='p-2'><RoseAnchor className='break-all' href_url='https://www.philembassyberne.ch'>www.philembassyberne.ch</RoseAnchor></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='p-2 border-r-1 border-gray-400'></TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>PHILIPPINE CONSULATE GENERAL, BASEL</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>Mr. Daniel Andreas Vogel<br/><br/>Consul General, ad honorem</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400 break-all'>Innere Margarethenstrasse 2, CH, 4002 Basel, Switzerland</TableCell>
                <TableCell className='p-2 border-r-1 border-gray-400 break-all'>d.vogel@dasteam.ch</TableCell>
                <TableCell className='p-2'></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </AccordionContent>
      </AccordionItem>
      {/*  */}
      <AccordionItem value='item-52' className='border-b mb-2'>
        <AccordionHeader>
          <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
            <p className='text-sm font-light'>SYRIA</p>
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent className='my-10 space-y-10'>
          <Table>
            <TableHeader className='border-1'>
              <TableRow>
                <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                  <Heading5>Country</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Name</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Head of Office</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Address</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Email</Heading5>
                </TableHead>
                <TableHead className="text-white text-center py-8">
                  <Heading5>Website</Heading5>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className='border-1 '>
              {countries.syria.map((i,idx) => (
              <TableRow key={idx}>
                <TableCell className='p-2 border-r-1 border-gray-400'>{i.country}</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.name}</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.headOffice1}
                  <p><br/>{i.headOffice2}</p>
                </TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.address}</TableCell>
                <TableCell className='p-2 border-r-1 border-gray-400 break-all'>{i.email1}
                  <p><br/>{i.email2}</p>
                  <p><br/>{i.email3}</p>
                </TableCell>
                <TableCell className='p-2'></TableCell>
              </TableRow>
              ))}
            </TableBody>
          </Table>
        </AccordionContent>
      </AccordionItem>
      {/*  */}
      <AccordionItem value='item-53' className='border-b mb-2'>
        <AccordionHeader>
          <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
            <p className='text-sm font-light'>TIMOR LESTE</p>
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent className='my-10 space-y-10'>
          <Table>
            <TableHeader className='border-1'>
              <TableRow>
                <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                  <Heading5>Country</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Name</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Head of Office</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Address</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Email</Heading5>
                </TableHead>
                <TableHead className="text-white text-center py-8">
                  <Heading5>Website</Heading5>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className='border-1 '>
              <TableRow>
                <TableCell className='p-2 border-r-1 border-gray-400'>Timor Leste</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>EMBASSY OF THE PHILIPPINES, DILI</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>H.E. (Ms.) Ma. Aniceta Aileen H. Bugarin<br/><br/>Ambassador Extraordinary and Plenipotentiary</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>Rua Gov. Serpa Rosa, Bairo Farol, Dili, Timor-Leste</TableCell>
                <TableCell className='p-2 border-r-1 border-gray-400 break-all'>dili.pe@dfa.gov.ph;<br/><br/>philembdili@gmail.com;<br/><br/>philembdili2010@yahoo.com</TableCell>
                <TableCell className='p-2'></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </AccordionContent>
      </AccordionItem>
      {/*  */}
      <AccordionItem value='item-54' className='border-b mb-2'>
        <AccordionHeader>
          <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
            <p className='text-sm font-light'>THAILAND</p>
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent className='my-10 space-y-10'>
          <Table>
            <TableHeader className='border-1'>
              <TableRow>
                <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                  <Heading5>Country</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Name</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Head of Office</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Address</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Email</Heading5>
                </TableHead>
                <TableHead className="text-white text-center py-8">
                  <Heading5>Website</Heading5>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className='border-1 '>
              <TableRow>
                <TableCell className='p-2 border-r-1 border-gray-400'>Thailand</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>EMBASSY OF THE PHILIPPINES, BANGKOK</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>H.E. (Ms.) Jocelyn S. Batoon-Garcia<br/><br/>Ambassador Extraordinary and Plenipotentiary</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>760 Sukhumvit Road, cor. Soi Philippines (Soi 30/1)<br/><br/>Bangkok 10110, Kingdom of Thailand</TableCell>
                <TableCell className='p-2 border-r-1 border-gray-400 break-all'>bangkok.pe@dfa.gov.ph;<br/><br/>bangkokpe@gmail.com;<br/><br/>inquiry@philembassy-bangkok.net</TableCell>
                <TableCell className='p-2'><RoseAnchor className='break-all' href_url='https://www.philembassy-bangkok.net'>www.philembassy-bangkok.net</RoseAnchor></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </AccordionContent>
      </AccordionItem>
      {/*  */}
      <AccordionItem value='item-55' className='border-b mb-2'>
        <AccordionHeader>
          <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
            <p className='text-sm font-light'>TURKEY</p>
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent className='my-10 space-y-10'>
          <Table>
            <TableHeader className='border-1'>
              <TableRow>
                <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                  <Heading5>Country</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Name</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Head of Office</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Address</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Email</Heading5>
                </TableHead>
                <TableHead className="text-white text-center py-8">
                  <Heading5>Website</Heading5>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className='border-1 '>
              {countries.turkey.map((i,idx) => (
              <TableRow key={idx}>
                <TableCell className='p-2 border-r-1 border-gray-400'>{i.country}</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.name}</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.headOffice1}
                  <p><br/>{i.headOffice2}</p>
                </TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.address}</TableCell>
                <TableCell className='p-2 border-r-1 border-gray-400 break-all'>{i.email1}
                  <p><br/>{i.email2}</p>
                  <p><br/>{i.email3}</p>
                </TableCell>
                <TableCell className='p-2'></TableCell>
              </TableRow>
              ))}
            </TableBody>
          </Table>
        </AccordionContent>
      </AccordionItem>
      {/*  */}
      <AccordionItem value='item-56' className='border-b mb-2'>
        <AccordionHeader>
          <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
            <p className='text-sm font-light'>UNITED ARAB EMIRATES</p>
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent className='my-10 space-y-10'>
          <Table>
            <TableHeader className='border-1'>
              <TableRow>
                <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                  <Heading5>Country</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Name</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Head of Office</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Address</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Email</Heading5>
                </TableHead>
                <TableHead className="text-white text-center py-8">
                  <Heading5>Website</Heading5>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className='border-1 '>
              <TableRow>
                <TableCell className='p-2 border-r-1 border-gray-400'>United Arab Emirates</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>EMBASSY OF THE PHILIPPINES, ABU DHABI</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>H.E. (Ms.) Grace R. Princesa<br/><br/>Ambassador Extraordinary and Plenipotentiary</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>Villa No. 8 Street No. 8, Sector 94, Zone 2 Al Bateen, Abu Dhabi, UAE</TableCell>
                <TableCell className='p-2 border-r-1 border-gray-400 break-all'>abudhabi.pe@dfa.gov.ph;;<br/><br/>auhpe@philembassy.ae</TableCell>
                <TableCell className='p-2'><RoseAnchor className='break-all' href_url='https://www.philembassy.ae'>www.philembassy.ae</RoseAnchor></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='p-2 border-r-1 border-gray-400'></TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>PHILIPPINE CONSULATE GENERAL, DUBAI</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>H.E. (Ms.) Frank R. Cimafranca<br/><br/>Consul General</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>No. 35 Beirut St., Ext. No. 2 Al Qusais Area 3, P.O. Box 94778, Dubai, United Arab Emirates</TableCell>
                <TableCell className='p-2 border-r-1 border-gray-400 break-all'>pcgdxb@gmail.com;<br/><br/>pcgdxb@pcgdubai.ae</TableCell>
                <TableCell className='p-2'></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </AccordionContent>
      </AccordionItem>
      {/*  */}
      <AccordionItem value='item-57' className='border-b mb-2'>
        <AccordionHeader>
          <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
            <p className='text-sm font-light'>UNITED KINGDOM</p>
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent className='my-10 space-y-10'>
          <Table>
            <TableHeader className='border-1'>
              <TableRow>
                <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                  <Heading5>Country</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Name</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Head of Office</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Address</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Email</Heading5>
                </TableHead>
                <TableHead className="text-white text-center py-8">
                  <Heading5>Website</Heading5>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className='border-1 '>
              {countries.unitedKingdom.map((i,idx) => (
              <TableRow key={idx}>
                <TableCell className='p-2 border-r-1 border-gray-400'>{i.country}</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.name}</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.headOffice1}
                  <p><br/>{i.headOffice2}</p>
                </TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.address}</TableCell>
                <TableCell className='p-2 border-r-1 border-gray-400 break-all'>{i.email1}</TableCell>
                <TableCell className='p-2'><RoseAnchor className='break-all' href_url={i.website}>{i.website}</RoseAnchor></TableCell>
              </TableRow>
              ))}
            </TableBody>
          </Table>
        </AccordionContent>
      </AccordionItem>
      {/*  */}
      <AccordionItem value='item-58' className='border-b mb-2'>
        <AccordionHeader>
          <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
            <p className='text-sm font-light'>UNITED STATES OF AMERICA</p>
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent className='my-10 space-y-10'>
          <Table>
            <TableHeader className='border-1'>
              <TableRow>
                <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                  <Heading5>Country</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Name</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Head of Office</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Address</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Email</Heading5>
                </TableHead>
                <TableHead className="text-white text-center py-8">
                  <Heading5>Website</Heading5>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className='border-1 '>
              {countries.unitedStatesOfAmerica.map((i,idx) => (
              <TableRow key={idx}>
                <TableCell className='p-2 border-r-1 border-gray-400'>{i.country}</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.name}</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.headOffice1}
                  <p><br/>{i.headOffice2}</p>
                </TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.address}</TableCell>
                <TableCell className='p-2 border-r-1 border-gray-400 break-all'>{i.email1}<br/><br/>{i.email2}<br/><br/>{i.email3}</TableCell>
                <TableCell className='p-2'><RoseAnchor className='break-all' href_url={i.website}>{i.website}</RoseAnchor><br/><br/><RoseAnchor className='break-all' href_url={i.website2}>{i.website2}</RoseAnchor></TableCell>
              </TableRow>
              ))}
            </TableBody>
          </Table>
        </AccordionContent>
      </AccordionItem>
      {/*  */}
      <AccordionItem value='item-59' className='border-b mb-2'>
        <AccordionHeader>
          <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
            <p className='text-sm font-light'>VATICAN</p>
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent className='my-10 space-y-10'>
          <Table>
            <TableHeader className='border-1'>
              <TableRow>
                <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                  <Heading5>Country</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Name</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Head of Office</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Address</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Email</Heading5>
                </TableHead>
                <TableHead className="text-white text-center py-8">
                  <Heading5>Website</Heading5>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className='border-1 '>
              <TableRow>
                <TableCell className='p-2 border-r-1 border-gray-400'>Vatican</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>EMBASSY OF THE PHILIPPINES, VATICAN</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>H.E. (Ms.) Mercedes Reinares-Arrastia Tuazon<br/><br/>Ambassador Extraordinary and Plenipotentiary</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>Via Paolo VI, 29, 00193 Rome, Italy</TableCell>
                <TableCell className='p-2 border-r-1 border-gray-400 break-all'>vatican.pe@dfa.gov.ph;<br/><br/>embholysee@philvatican.it;<br/><br/>vaticanpe@gmail.com</TableCell>
                <TableCell className='p-2'></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </AccordionContent>
      </AccordionItem>
      {/*  */}
      <AccordionItem value='item-60' className='border-b mb-2'>
        <AccordionHeader>
          <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
            <p className='text-sm font-light'>VENEZUELA</p>
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent className='my-10 space-y-10'>
          <Table>
            <TableHeader className='border-1'>
              <TableRow>
                <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                  <Heading5>Country</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Name</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Head of Office</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Address</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Email</Heading5>
                </TableHead>
                <TableHead className="text-white text-center py-8">
                  <Heading5>Website</Heading5>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className='border-1 '>
              <TableRow>
                <TableCell className='p-2 border-r-1 border-gray-400'>Venezuela</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>PHILIPPINE CONSULATE, PUERTO CABELLO</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>Mr. Andres V. Duarte<br/><br/>Consul, ad honorem</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>Edificio Boulton, Calle Anzoátegui, No. 4-85, Zona Colonial, Puerto Cabello, Estado Carabobo, Venezuela</TableCell>
                <TableCell className='p-2 border-r-1 border-gray-400 break-all'>aduarte@dvaccs.com</TableCell>
                <TableCell className='p-2'></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </AccordionContent>
      </AccordionItem>
      {/*  */}
      <AccordionItem value='item-61' className='border-b mb-2'>
        <AccordionHeader>
          <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
            <p className='text-sm font-light'>VIETNAM</p>
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent className='my-10 space-y-10'>
          <Table>
            <TableHeader className='border-1'>
              <TableRow>
                <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                  <Heading5>Country</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Name</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Head of Office</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Address</Heading5>
                </TableHead>
                <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                  <Heading5>Email</Heading5>
                </TableHead>
                <TableHead className="text-white text-center py-8">
                  <Heading5>Website</Heading5>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className='border-1 '>
              <TableRow>
                <TableCell className='p-2 border-r-1 border-gray-400'>Vietnam</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>EMBASSY OF THE PHILIPPINES, HANOI</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>H.E. (Mr.) Jerril G. Santos<br/><br/>Ambassador Extraordinary and Plenipotentiary</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>27-B Tran Hung Dao Street, Hanoi, Socialist Republic of Vietnam</TableCell>
                <TableCell className='p-2 border-r-1 border-gray-400 break-all'>hanoi.pe@dfa.gov.ph;<br/><br/>hnpe2000@gmail.com</TableCell>
                <TableCell className='p-2'><RoseAnchor className='break-all' href_url='https://www.hanoipe.org'>www.hanoipe.org</RoseAnchor></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='p-2 border-r-1 border-gray-400'></TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>PHILIPPINE CONSULATE GENERAL, HO CHI MINH CITY</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>Atty. Le Thi Phung<br/><br/>Consul General, ad honorem</TableCell>
                <TableCell className='p-2 text-left border-r-1 border-gray-400'>40-5 Pham Viet Chahn St., Ward 19, Binh Thanh, District, Ho Chi Mihn City, Vietnam</TableCell>
                <TableCell className='p-2 border-r-1 border-gray-400 break-all'>philippineconsulate-hcm@fmc.com.vn</TableCell>
                <TableCell className='p-2'></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}