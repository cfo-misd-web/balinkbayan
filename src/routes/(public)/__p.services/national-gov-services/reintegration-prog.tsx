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
import { Heading } from 'lucide-react'

export const Route = createFileRoute(
  '/(public)/__p/services/national-gov-services/reintegration-prog',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <BiggerBanner text='Access Government Services' label='Government Reintegration Services' img_url='/img-assets/gov-services/reintegration-prog/pic-from-sey-for-reintegration.jpg' />
      <section className='text-cyan-900'>
        <div className='max-lg:mx-4 3xl:max-w-[1400px] 2xl:max-w-[1280px] lg:max-w-[1080px] mx-auto my-20 bg-light space-y-20'>
          <Heading4>GOVERNMENT REINTEGRATION SERVICES</Heading4>
          <Paragraph>The Philippine government, through the Department of Migrant Workers, offers a range of reintegration services aimed at enhancing the socio-economic well-being of returning overseas Filipino workers (OFWs). Below is the overview of key government reintegration programs, including the Livelihood Development Assistance Program (LDAP), Balik-Pinay, Balik-Hanapbuhay (BPBH) Program, Sa Pinas Ikaw ang Ma’am at Sir (SPIMS), Financial Awareness Seminar-Small Business Management Training (FAS-SBMT), and Tulong PUSO (Tulong Pangkabuhayan para sa Pag-unlad ng Samahang OFWs).</Paragraph>
          {/*  */}
          <Heading4>Livelihood Development Assistance Program (LDAP)</Heading4>
          <div className='space-y-10'>
            <Heading5>Program Description</Heading5>
            <Paragraph>Livelihood Development Assistance Program (LDAP) is a livelihood grant by the Department of Migrant Workers – National Reintegration Center for OFWs (NRCO) designed to improve the socio-economic well-being of undocumented OFWs. The program offers a business enterprise start-up kit worth P10,000, which is expected to cover all the materials needed to sustain their proposed business or livelihood. The start-up kit is awarded to beneficiaries after completing the Small Business Management Training and Financial Awareness Seminar to help them upskill in managing a small business enterprise.</Paragraph>
          </div>
          <div className='space-y-10'>
            <Heading5>Eligibility</Heading5>
            <Paragraph>The beneficiaries of this program shall be any undocumented OFW who has returned to the Philippines. An undocumented OFW is defined as those:</Paragraph>
            <div className='grid grid-cols-12 gap-y-5'>
              <Paragraph className='text-center'>1.</Paragraph>
              <Paragraph className='col-span-11'>Who acquired their passports through fraud or misrepresentation;</Paragraph>
              <Paragraph className='text-center'>2.</Paragraph>
              <Paragraph className='col-span-11'>Who possess an expired visa or permit to stay;</Paragraph>
              <Paragraph className='text-center'>3.</Paragraph>
              <Paragraph className='col-span-11'>Who have no travel documents whatsoever;</Paragraph>
              <Paragraph className='text-center'>4.</Paragraph>
              <Paragraph className='col-span-11'>Who were originally regular or documented workers but, for some reason or cause, have thereafter lost their regular documented status;</Paragraph>
              <Paragraph className='text-center'>5.</Paragraph>
              <Paragraph className='col-span-11'>Who is not registered with the Philippine Overseas Employment Administration or whose contracts were not processed by POEA or the Philippine Overseas Labor Office (POLO) but have undertaken actions to regularize their contracts or status; and</Paragraph>
              <Paragraph className='text-center'>6.</Paragraph>
              <Paragraph className='col-span-11'>Who have valid but inappropriate visas or who have employment contracts that were not processed by the POEA or subsequently verified and registered on-site by the Philippine Overseas Labor Office (POLO), if required by law or regulation.</Paragraph>
            </div>
          </div>
          {/*  */}
          <div className='space-y-10'>
            <Heading5>Requirements</Heading5>
            <Paragraph>Applicants are required to submit the following documents:</Paragraph>
            <div className='grid grid-cols-12 gap-y-5'>
              <Paragraph className='text-center'>&#8226;</Paragraph>
              <Paragraph className='col-span-11'>LDAP Request Form</Paragraph>
              <Paragraph className='text-center'>&#8226;</Paragraph>
              <Paragraph className='col-span-11'>Passport copy</Paragraph>
              <Paragraph className='text-center'>&#8226;</Paragraph>
              <Paragraph className='col-span-11'>Philippine Arrival Stamp in passport</Paragraph>
              <Paragraph className='text-center'>&#8226;</Paragraph>
              <Paragraph className='col-span-11'>Boarding Pass/Airline Ticket of latest arrival in the country</Paragraph>
              <Paragraph className='text-center'>&#8226;</Paragraph>
              <Paragraph className='col-span-11'>Employment Contract or other Proof of Employment</Paragraph>
              <Paragraph className='text-center'>&#8226;</Paragraph>
              <Paragraph className='col-span-11'>Certificate/Proof of Loss of Employment from employer or endorsement from Philippine Overseas Labor Office (POLO) in lieu of Certificate of loss of employment from employer</Paragraph>
            </div>
          </div>
          {/*  */}
          <div className='space-y-10'>
            <Heading5>Procedural Guide</Heading5>
            <div className='grid grid-cols-12 gap-y-5'>
              <Paragraph className='text-center'>1.</Paragraph>
              <Paragraph className='col-span-11'>Interested applicants can submit a request outlining their livelihood plans to the DOLE Regional Office closest to the intended business site.</Paragraph>
              <Paragraph className='text-center'>2.</Paragraph>
              <Paragraph className='col-span-11'>The proposal is then evaluated based on the standards and requirements of the implementing agency.</Paragraph>
              <Paragraph className='text-center'>3.</Paragraph>
              <Paragraph className='col-span-11'>As a preparation for the operation of the proposed business, all approved LDAP beneficiaries must complete the Small Business Management Training and Financial Awareness Seminar.</Paragraph>
              <Paragraph className='text-center'>4.</Paragraph>
              <Paragraph className='col-span-11'>Approved applicants are then awarded financial support to kickstart their livelihood plans.</Paragraph>
            </div>
          </div>
          {/*  */}
          <div className='space-y-10'>
            <Heading5>Contact Details</Heading5>
            <div className='grid grid-cols-12 gap-y-5'>
              <Paragraph className='text-center'>➢</Paragraph>
              <Paragraph className='col-span-11'>For more details about this program, kindly refer to the <RoseAnchor className='text-rose-700 hover:text-rose-500' href_url='https://www.dmw.gov.ph/archives/AssistWELL/categ/livelihood.htm'>https://www.dmw.gov.ph/archives/AssistWELL/categ/livelihood.htm</RoseAnchor></Paragraph>
              <Paragraph className='text-center'>➢</Paragraph>
              <Paragraph className='col-span-11'>For inquiries and applications, please reach out to:<br/><br/>
              
              <b>NRCO</b><br/>

              Ground Floor, Blas F. Ople Development Center<br/>

              (Old OWWA Building)<br/>

              Corner Solana and Victoria Streets<br/>

              Intramuros, Manila<br/>

              Telephone Numbers: 285262392<br/>

              E-mail Address: nrco@dmw.gov.ph<br/>

              Facebook: <RoseAnchor className='text-rose-700 hover:text-rose-500' href_url='https://www.facebook.com/NRCOCentral'>https://www.facebook.com/NRCOCentral</RoseAnchor></Paragraph>
            </div>
          </div>
          {/*  */}
          <Heading4>Balik-Pinay, Balik-Hanapbuhay (BPBH) Program</Heading4>
          <div className='space-y-10'>
            <Heading5>Program Description</Heading5>
            <Paragraph>The BPBH Program is a livelihood aid by the Department of Migrant Workers – National Reintegration Center for OFWs (NRCO) designed to provide immediate relief to female OFW returnees (distressed/displaced) starting and operating self-employment ventures upon returning to the Philippines. The program offers skills training and livelihood assistance worth up to Php 20,000 as a start-up or supplementary funding for the livelihood enterprise. Its primary goal is to enhance the employability of women by providing them with the necessary skills for gainful employment or entrepreneurship, fostering self-sufficiency and independence of female OFWs.</Paragraph>
          </div>
          <div className='space-y-10'>
            <Heading5>Eligibility</Heading5>
            <Paragraph>The BPBH Program exclusively caters to female OFWs returning to the Philippines, aiming to enhance their skills and explore opportunities in employment or entrepreneurship, with priority given to women OFWs who have been displaced by hostilities and conflicts in their home country or who have been victims of unlawful recruiting and trafficking, as well as other distressed and displaced women domestic service workers.</Paragraph>
          </div>
          <div className='space-y-10'>
            <Heading5>Requirements</Heading5>
            <Paragraph>Applicants are required to submit the following documents:</Paragraph>
            <div className='grid grid-cols-12 gap-y-5'>
              <Paragraph className='text-center'>&#8226;</Paragraph>
              <Paragraph className='col-span-11'>OWWA Membership Records from OWWA Regional Welfare Office (RWO)</Paragraph>
              <Paragraph className='text-center'>&#8226;</Paragraph>
              <Paragraph className='col-span-11'>Application Form, accompanied by a personal undertaking affirming that the cash assistance will be utilized solely for self-employment or starting or expanding a livelihood project or business. Forms are available at OWWA RWO/Reintegration units or Focal Persons</Paragraph>
              <Paragraph className='text-center'>&#8226;</Paragraph>
              <Paragraph className='col-span-11'>Entrepreneurial Development Training Certificate (Financial Literacy, Entrepreneurial Development Training, and Livelihood Skills Training)</Paragraph>
              <Paragraph className='text-center'>&#8226;</Paragraph>
              <Paragraph className='col-span-11'>An approved business plan or proposal demonstrating the sustainability and feasibility of the chosen livelihood enterprise, endorsed by the Regional Welfare Office Director</Paragraph>
              <Paragraph className='text-center'>&#8226;</Paragraph>
              <Paragraph className='col-span-11'>Proof/Documentation of repatriation or return to the Philippines (Passport, Travel documents, Airline Ticket)</Paragraph>
              <Paragraph className='text-center'>&#8226;</Paragraph>
              <Paragraph className='col-span-11'>Proof of displacement (termination letter from employer or agency, referral letter or certification from POLO or Philippine Embassy, SENA or complaint, request for repatriation)</Paragraph>
              <Paragraph className='text-center'>&#8226;</Paragraph>
              <Paragraph className='col-span-11'>Proof of Residence from the Barangay where the OFW resides</Paragraph>
            </div>
          </div>
          <div className='space-y-10'>
            <Heading5>Procedural Guide</Heading5>
            <div className='grid grid-cols-12 gap-y-5'>
              <Paragraph className='text-center'>1.</Paragraph>
              <Paragraph className='col-span-11'>Interested applicants can apply by submitting the accomplished requirements to the DOLE Regional Office closest to the intended business site.</Paragraph>
              <Paragraph className='text-center'>2.</Paragraph>
              <Paragraph className='col-span-11'>Qualified beneficiaries attend the Enterprise Development Training (EDT) session at OWWA RWO.</Paragraph>
              <Paragraph className='text-center'>3.</Paragraph>
              <Paragraph className='col-span-11'>Prepare for the Business Site Inspection by OWWA RWO.</Paragraph>
              <Paragraph className='text-center'>4.</Paragraph>
              <Paragraph className='col-span-11'>The grant recipient will receive a commercial enterprise start-up kit based on the training received.</Paragraph>
            </div>
          </div>
          <div className='space-y-10'>
            <Heading5>Contact Details</Heading5>
            <div className='grid grid-cols-12 gap-y-5'>
              <Paragraph className='text-center'>➢</Paragraph>
              <Paragraph className='col-span-11'>For more details about this program, kindly refer to the <RoseAnchor className='text-rose-700 hover:text-rose-500' href_url='https://www.dmw.gov.ph/archives/AssistWELL/files/Balik%20Pinay!%20Balik%20Hanapbuhay!%20Program.pdf'>http://tinyurl.com/DMWBalikPinay</RoseAnchor></Paragraph>
              <Paragraph className='text-center'>➢</Paragraph>
              <Paragraph className='col-span-11'>For inquiries and applications, please reach out to:<br/><br/>
              
              <b>OWWA Central Office</b><br/>

              Address: F.B. Harrison St., Pasay, Metro Manila<br/>

              Tel.: 8891-7601-24<br/>

              Website: <RoseAnchor className='text-rose-700 hover:text-rose-500' href_url='https://owwa.gov.ph'>https://owwa.gov.ph</RoseAnchor><br/>

              Facebook Page: <RoseAnchor className='text-rose-700 hover:text-rose-500' href_url='https://www.facebook.com/OWWAofficial'>facebook.com/OWWAofficial</RoseAnchor><br/>

              Twitter: @OWWAofficial<br/><br/>

              <b>NRCO</b><br/>

              Ground Floor, Blas F. Ople Development Center<br/>

              (Old OWWA Building)<br/>

              Corner Solana and Victoria Streets<br/>

              Intramuros, Manila<br/>

              Telephone Numbers: 285262392<br/>

              E-mail Address: nrco@dmw.gov.ph<br/></Paragraph>
            </div>
          </div>
          {/*  */}
          <Heading4>Sa Pinas Ikaw ang Ma’am at Sir (SPIMS)</Heading4>
          <div className='space-y-10'>
            <Heading5>Program Description</Heading5>
            <Paragraph>SPIMS is a training program intended to retrain Household Service Workers (HSW) on the skill set required for the Teacher 1 position in the Department of Education (DepEd), enabling them to pursue opportunities for employment in their hometowns and move away from domestic employment. The program offers opportunities for returning OFWs through education and training for potential teaching posts in the Department of Education or from various non-teaching and other occupations available in the Philippine labor market. The program is implemented by varying institutions, including DMW, DOLE Regional Offices, NRCO, and the POLO. Educational institutions also partake, such as the Professional Regular Commission (PRC), the Technical Education and Skills Development Authority (TESDA), the Department of Education (DepEd), the Commission on Higher Education (CHED), and the Philippine Normal University (PNU).</Paragraph>
          </div>
          <div className='space-y-10'>
            <Heading5>Eligibility</Heading5>
            <Paragraph>The application is open to individuals who meet the following criteria:</Paragraph>
            <div className='grid grid-cols-12 gap-y-5'>
              <Paragraph className='text-center'>1.</Paragraph>
              <Paragraph className='col-span-11'>OFW LET Passers</Paragraph>
              <Paragraph className='text-center'>2.</Paragraph>
              <Paragraph className='col-span-11'>With teaching experience within the last five (5) years</Paragraph>
              <Paragraph className='text-center'>3.</Paragraph>
              <Paragraph className='col-span-11'>With teaching experience beyond (5) years</Paragraph>
              <Paragraph className='text-center'>4.</Paragraph>
              <Paragraph className='col-span-11'>OFWs who arrive home for not more than three (3) years based on the current year</Paragraph>
              <Paragraph className='text-center'>5.</Paragraph>
              <Paragraph className='col-span-11'>Those without teaching experience required must undergo a refresher course</Paragraph>
            </div>
          </div>
          <div className='space-y-10'>
            <Heading5>Requirements</Heading5>
            <Paragraph>Applicants are required to submit the following documents:</Paragraph>
            <div className='grid grid-cols-12 gap-y-5'>
              <Paragraph className='text-center'>&#8226;</Paragraph>
              <Paragraph className='col-span-11'>Accomplished Application Form from NRCO</Paragraph>
              <Paragraph className='text-center'>&#8226;</Paragraph>
              <Paragraph className='col-span-11'>Copy of Passport</Paragraph>
              <Paragraph className='text-center'>&#8226;</Paragraph>
              <Paragraph className='col-span-11'>Philippine Arrival Stamp in Passport</Paragraph>
              <Paragraph className='text-center'>&#8226;</Paragraph>
              <Paragraph className='col-span-11'>Boarding Pass/Airline Ticket (latest arrival in the country)</Paragraph>
              <Paragraph className='text-center'>&#8226;</Paragraph>
              <Paragraph className='col-span-11'>An employment contract or other proof of employment</Paragraph>
            </div>
          </div>
          <div className='space-y-10'>
            <Heading5>Procedural Guide</Heading5>
            <div className='grid grid-cols-12 gap-y-5'>
              <Paragraph className='text-center'>1.</Paragraph>
              <Paragraph className='col-span-11'>Fill out the online application form at <RoseAnchor className='text-rose-700 hover:text-rose-500' href_url='https://nrco.fole.gov.ph/index.php/spisms'>https://nrco.fole.gov.ph/index.php/spisms</RoseAnchor>.</Paragraph>
              <Paragraph className='text-center'>2.</Paragraph>
              <Paragraph className='col-span-11'>Interested applicants already in the Philippines may go to the nearest DOLE Regional Office to apply. Those who are still abroad may proceed to the nearest POLO.</Paragraph>
              <Paragraph className='text-center'>3.</Paragraph>
              <Paragraph className='col-span-11'>Approved applicants then enroll in relevant courses or training programs on education or skills development.</Paragraph>
              <Paragraph className='text-center'>4.</Paragraph>
              <Paragraph className='col-span-11'>Approved applicants are then granted support in terms of job placement.</Paragraph>
            </div>
          </div>
          <div className='space-y-10'>
            <Heading5>Contact Details</Heading5>
            <div className='grid grid-cols-12 gap-y-5'>
              <Paragraph className='text-center'>➢</Paragraph>
              <Paragraph className='col-span-11'>For more details about this program, kindly refer to their official Facebook account: <RoseAnchor className='text-rose-700 hover:text-rose-500' href_url='https://www.facebook.com/SPIMSNRCO/'>https://www.facebook.com/SPIMSNRCO/</RoseAnchor>.</Paragraph>
              <Paragraph className='text-center'>➢</Paragraph>
              <Paragraph className='col-span-11'>For inquiries and applications, please reach out to:<br/><br/>

              <b>NRCO - SPIMS</b><br/>

              Ground Floor, Blas F. Ople Development Center<br/>

              (Old OWWA Building)<br/>

              Corner Solana and Victoria Streets<br/>

              Intramuros, Manila<br/>

              Telephone Numbers: 285262392<br/>

              E-mail Address: nrco@dmw.gov.ph<br/>
              
              Facebook: <RoseAnchor className='text-rose-700 hover:text-rose-500' href_url='https://www.facebook.com/SPIMSNRCO/'>https://www.facebook.com/SPIMSNRCO/</RoseAnchor></Paragraph>
            </div>
          </div>
          {/*  */}
          <Heading4>Financial Awareness Seminar-Small Business Management Training (FAS-SBMT)</Heading4>
          <div className='space-y-10'>
            <Heading5>Program Description</Heading5>
            <Paragraph>FAS-SBMT is a non-cash livelihood support by the Department of Migrant Workers – National Reintegration Center for OFWs (NRCO) that focuses on educating returning OFWs about financial literacy and practical skills for managing small businesses to increase their chances of entrepreneurial success. A component of this training program is a workshop on preparing a business plan proposal, as it is a prerequisite for availing the Livelihood Development Assistance Program (LDAP) and Balik-Pinay, Balik-Hanapbuhay (BPBH).</Paragraph>
          </div>
          <div className='space-y-10'>
            <Heading5>Eligibility</Heading5>
            <Paragraph>Open to returning OFWs interested in financial education and small business ventures.</Paragraph>
          </div>
          <div className='space-y-10'>
            <Heading5>Contact Details</Heading5>
            <div className='grid grid-cols-12 gap-y-5'>
              <Paragraph className='text-center'>➢</Paragraph>
              <Paragraph className='col-span-11'>For more details about this program, kindly refer to their official Facebook account: <RoseAnchor className='text-rose-700 hover:text-rose-500' href_url='https://www.facebook.com/SPIMSNRCO/'>https://www.facebook.com/SPIMSNRCO/</RoseAnchor>.</Paragraph>
              <Paragraph className='text-center'>➢</Paragraph>
              <Paragraph className='col-span-11'>For inquiries and applications, please reach out to:<br/><br/>

              <b>NRCO - SPIMS</b><br/>

              Ground Floor, Blas F. Ople Development Center<br/>

              (Old OWWA Building)<br/>

              Corner Solana and Victoria Streets<br/>

              Intramuros, Manila<br/>

              Telephone Numbers: 285262392<br/>

              E-mail Address: nrco@dmw.gov.ph<br/>
              
              Facebook: <RoseAnchor className='text-rose-700 hover:text-rose-500' href_url='https://www.facebook.com/SPIMSNRCO/'>https://www.facebook.com/SPIMSNRCO/</RoseAnchor></Paragraph>
            </div>
          </div>
          {/*  */}
          <Heading4>Tulong PUSO (Tulong Pangkabuhayan para sa Pag-unlad ng Samahang OFWs)</Heading4>
          <div className='space-y-10'>
            <Heading5>Program Description</Heading5>
            <Paragraph>Tulong-PUSO Program is a DOLE-OWWA undertaking that assists with collective livelihood projects for OFW organizations or OFW groups. The program offers qualified applicants a one-time financial grant worth up to Php 1 million in cash assistance. The program is available to:<br/>
            1) livelihood start-up,<br/>
            2) livelihood expansion, and<br/>
            3) livelihood restoration initiated by OFW groups.</Paragraph>
          </div>
          <div className='space-y-10'>
            <Heading5>Eligibility</Heading5>
            <Paragraph>Interested who meet the following requirements can apply for the grant:</Paragraph>
            <div className='grid grid-cols-12 gap-y-5'>
              <Paragraph className='text-center'>1.</Paragraph>
              <Paragraph className='col-span-11'>OFW groups duly registered with DOLE, CDA, and SEC.</Paragraph>
              <Paragraph className='text-center'>2.</Paragraph>
              <Paragraph className='col-span-11'>The OFW group should comprise 80% OWWA members (active or inactive) and 20% other members (undocumented OFWs)</Paragraph>
            </div>
          </div>
          <div className='space-y-10'>
            <Heading5>Requirements</Heading5>
            <Paragraph>Applicants are required to submit the following documents:</Paragraph>
            <div className='grid grid-cols-12 gap-y-5'>
              <Paragraph className='text-center'>&#8226;</Paragraph>
              <Paragraph className='col-span-11'>Accomplished Tulong PUSO Application Form at <RoseAnchor className='text-rose-700 hover:text-rose-500' href_url='https://tulongpuso.owwa.gov.ph/'>https://tulongpuso.owwa.gov.ph/</RoseAnchor>.</Paragraph>
              <Paragraph className='text-center'>&#8226;</Paragraph>
              <Paragraph className='col-span-11'>Proof of registration from DOLE, CDA, or SEC</Paragraph>
              <Paragraph className='text-center'>&#8226;</Paragraph>
              <Paragraph className='col-span-11'>OFW Group Profile and Members’ Profile indicating at least 80% thereof are OWWA members and your families</Paragraph>
              <Paragraph className='text-center'>&#8226;</Paragraph>
              <Paragraph className='col-span-11'>Audited Financial Statements certified by the Association/Group Treasurer and Auditor, when applicable</Paragraph>
              <Paragraph className='text-center'>&#8226;</Paragraph>
              <Paragraph className='col-span-11'>A certification signed by the OFW Group President indicating the names of duly authorized representatives to deal with the concerned RWO in the entire program phases (maximum of three)</Paragraph>
              <Paragraph className='text-center'>&#8226;</Paragraph>
              <Paragraph className='col-span-11'>Affidavit or Undertaking by the OFW Group How to Manage and Grow the Business</Paragraph>
              <Paragraph className='text-center'>&#8226;</Paragraph>
              <Paragraph className='col-span-11'>Business Proposal and Feasibility Study with proof of equity of at least 20% comprising available and/or existing capital assets, bank accounts/statements, and other similar evidence</Paragraph>
              <Paragraph className='text-center'>&#8226;</Paragraph>
              <Paragraph className='col-span-11'>Business Permit</Paragraph>
            </div>
          </div>
          <div className='space-y-10'>
            <Heading5>Procedural Guide</Heading5>
            <div className='grid grid-cols-12 gap-y-5'>
              <Paragraph className='text-center'>1.</Paragraph>
              <Paragraph className='col-span-11'>Interested applicants may start the application process via the Online Appointment System (<RoseAnchor className='text-rose-700 hover:text-rose-500' href_url='https://appointment.owwa.gov.ph/'>https://appointment.owwa.gov.ph/</RoseAnchor>).</Paragraph>
              <Paragraph className='text-center'>2.</Paragraph>
              <Paragraph className='col-span-11'>Applicants must then attend a pre-orientation and pre-social preparation session through a webinar.</Paragraph>
              <Paragraph className='text-center'>3.</Paragraph>
              <Paragraph className='col-span-11'>The Regional Welfare Office then evaluates and reviews the submitted documents to ensure feasibility and eligibility.</Paragraph>
              <Paragraph className='text-center'>4.</Paragraph>
              <Paragraph className='col-span-11'>After the evaluation of initial requirements, the business proposal is assessed, including a site inspection.</Paragraph>
              <Paragraph className='text-center'>5.</Paragraph>
              <Paragraph className='col-span-11'>The Regional Review Committee will then review if the proposal passes the criterion.</Paragraph>
              <Paragraph className='text-center'>6.</Paragraph>
              <Paragraph className='col-span-11'>Approved applicants are then awarded financial support to kickstart their business ventures.</Paragraph>
              <Paragraph className='text-center'>7.</Paragraph>
              <Paragraph className='col-span-11'>There will be regular monitoring and evaluation of the business’s status to ensure each grant’s progress and success.</Paragraph>
            </div>
          </div>
          <div className='space-y-10'>
            <Heading5>Contact Details</Heading5>
            <div className='grid grid-cols-12 gap-y-5'>
              <Paragraph className='text-center'>➢</Paragraph>
              <Paragraph className='col-span-11'>For more details about this program, kindly refer to this link: <RoseAnchor className='text-rose-700 hover:text-rose-500' href_url='https://tulongpuso.owwa.gov.ph/'>https://tulongpuso.owwa.gov.ph/</RoseAnchor>.</Paragraph>
              <Paragraph className='text-center'>➢</Paragraph>
              <Paragraph className='col-span-11'>For inquiries and applications, please reach out to:<br/><br/>

              <b>OWWA</b><br/>

              Address: F.B. Harrison St., Pasay, Metro Manila<br/>

              Tel.: 8891-7601-24<br/>

              Website: <RoseAnchor className='text-rose-700 hover:text-rose-500' href_url='https://owwa.gov.ph'>https://owwa.gov.ph</RoseAnchor><br/>

              Facebook Page: <RoseAnchor className='text-rose-700 hover:text-rose-500' href_url='https://www.facebook.com/OWWAofficial'>facebook.com/OWWAofficial</RoseAnchor></Paragraph>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}