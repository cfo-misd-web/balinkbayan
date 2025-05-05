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
  '/(public)/__p/services/national-gov-services/philhealth',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <BiggerBanner text='Access Government Services' label='PhilHealth' img_url='/img-assets/gov-services/philhealth/philhealthp1.png' />
      <section className='text-cyan-900'>
        <div className='max-lg:mx-4 3xl:max-w-[1400px] 2xl:max-w-[1280px] lg:max-w-[1080px] mx-auto my-20 bg-light space-y-20'>
          <Paragraph>The <b>Philippine Health Insurance Corporation (PhilHealth)</b> is a government-owned and controlled corporation that deals with health care financing. It aims to provide quality health care for all Filipinos.<br/><br/>

          Good news! Philhealth also caters to the needs of overseas Filipinos. PhilHealth provides various medical benefits that OFWs and their qualified dependents can enjoy. Wherever you are, PhilHealth supports your health needs during times of illness</Paragraph>
          <div className='flex flex-row justify-center space-x-5'>
            <img src='/img-assets/gov-services/philhealth/philhealth-overseas.png' />
            <img src='/img-assets/gov-services/philhealth/philhealth-lifetime-membership.png' />
            <img src='/img-assets/gov-services/philhealth/philhealth-online-services.png' />
          </div>
          {/*  */}
          <div className='space-y-5'>
            <Paragraph><b>Eligible Dependents</b>:</Paragraph>
            <div className='grid grid-cols-12 gap-y-5'>
              <Paragraph className='text-center'>1.</Paragraph>
              <Paragraph className='col-span-11'>Legal spouse who is not a PhilHealth member or has inactive membership</Paragraph>
              <Paragraph className='text-center'>2.</Paragraph>
              <Paragraph className='col-span-11'>Children under 21 years old, unmarried, and unemployed (includes legitimate, illegitimate, legally adopted, or stepchildren)</Paragraph>
              <Paragraph className='text-center'>3.</Paragraph>
              <Paragraph className='col-span-11'>Children over 21 years old with mental or physical disabilities who are dependent on the member</Paragraph>
              <Paragraph className='text-center'>4.</Paragraph>
              <Paragraph className='col-span-11'>Foster children as per the Foster Care Act of 2012
              </Paragraph>
              <Paragraph className='text-center'>5.</Paragraph>
              <Paragraph className='col-span-11'>Parents aged 60 and above who are not PhilHealth members</Paragraph>
            </div>
          </div>
          {/*  */}
          <div className='space-y-10'>
            <Heading5>How to Register</Heading5>
            <div className='grid grid-cols-12 gap-y-5'>
              <Paragraph className='text-center'>1.</Paragraph>
              <Paragraph className='col-span-11'>Fill out the PhilHealth Member Registration Form (PMRF)</Paragraph>
              <Paragraph className='text-center'>2.</Paragraph>
              <div className='col-span-11 space-y-5'>
                <Paragraph className=''>Submit the completed PMRF along with:</Paragraph>
                <div className='grid grid-cols-12 gap-y-3'>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>A scanned copy or photo of a valid ID</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>A selfie holding the ID</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Supporting documents</Paragraph>
                </div>
              </div>
              <Paragraph className='text-center'>3.</Paragraph>
              <Paragraph className='col-span-11'>Send via email to: ofp@philhealth.gov.ph<br/>
              Use this email subject: Register [space] Name [space] City/Province/Region</Paragraph>
              <Paragraph className='text-center'>4.</Paragraph>
              <Paragraph className='col-span-11'>Your PhilHealth Identification Number (PIN) will be sent to the email address you provided.</Paragraph>
            </div>
            <Paragraph>For sea-based OFWs, submit the PMRF to your manning agency/employer for processing.</Paragraph>
          </div>
          {/*  */}
          <div className='space-y-10'>
            <Heading5>Paying Contributions</Heading5>
            <Paragraph><b>Employed OFWs</b>: Contributions are based on monthly salary.<br/><br/>
            
            <b>Self-employed, land-based OFWs, or professionals</b>: Contributions are based on monthly income. If there are missed contributions, they must be paid with interest (compounded monthly).</Paragraph>
          </div>
          {/*  */}
          <div className='flex justify-center'>
            <img src='/img-assets/gov-services/philhealth/premium-contributions.png' />
          </div>
          <Paragraph><b>For contract-expired OFWs</b>: Continue your membership to maintain uninterrupted benefits. Update your membership category and pay the appropriate premium contribution. If unemployed while on vacation, pay contributions according to the Income Floor.</Paragraph>
          {/*  */}
          <div className='space-y-10'>
            <Heading5>Updating Records</Heading5>
            <Paragraph>To correct information, add dependents, or update income:</Paragraph>
            <div className='grid grid-cols-12 gap-y-5'>
              <Paragraph className='text-center'>1.</Paragraph>
              <Paragraph className='col-span-11'>Fill out the PMRF form and mark “Updating/Amendment” on the top right.</Paragraph>
              <Paragraph className='text-center'>2.</Paragraph>
              <Paragraph className='col-span-11'>Submit to the nearest PhilHealth office or email the scanned copy along with valid ID and supporting documents to actioncenter@philhealth.gov.ph.</Paragraph>
              <Paragraph className='text-center'>3.</Paragraph>
              <Paragraph className='col-span-11'>Use this email subject: PHIC MEM INCOME UPDATE [space] Name [space] Province/Region.</Paragraph>
            </div>
          </div>
          {/*  */}
          <div className='space-y-10'>
            <Heading5>Claiming Benefits</Heading5>
            <Paragraph>Members are entitled to 45 hospital confinement days per year, with an additional 45 days shared among dependents.<br/><br/>
            
            <b>For confinement abroad</b>:<br/><br/>
            
            Submit the following to any PhilHealth office within 180 days after discharge:</Paragraph>
            <div className='grid grid-cols-12 gap-y-5'>
              <Paragraph className='text-center'>1.</Paragraph>
              <Paragraph className='col-span-11'>Statement of Account</Paragraph>
              <Paragraph className='text-center'>2.</Paragraph>
              <Paragraph className='col-span-11'>Medical Certificate (translated into English), indicating final diagnosis, confinement period, and services rendered</Paragraph>
              <Paragraph className='text-center'>3.</Paragraph>
              <Paragraph className='col-span-11'>Official receipts from the hospital/doctor</Paragraph>
              <Paragraph className='text-center'>4.</Paragraph>
              <Paragraph className='col-span-11'>Completed PhilHealth Claim Form 1</Paragraph>
              <Paragraph className='text-center'>5.</Paragraph>
              <Paragraph className='col-span-11'>Proof of PhilHealth contributions</Paragraph>
            </div>
          </div>
          {/*  */}
          <div className='space-y-10'>
            <Paragraph><b>Submission options</b>:<br/><br/></Paragraph>
            <div className='grid grid-cols-12 gap-y-5'>
              <Paragraph className='text-center'>1.</Paragraph>
              <Paragraph className='col-span-11'>Visit any PhilHealth office</Paragraph>
              <Paragraph className='text-center'>2.</Paragraph>
              <Paragraph className='col-span-11'>Email documents to: ofp@philhealth.gov.ph</Paragraph>
              <Paragraph className='text-center'>3.</Paragraph>
              <Paragraph className='col-span-11'>Ensure all documents are certified true copies or signed on each page</Paragraph>
            </div>
          </div>
          {/*  */}
          <div className='space-y-10'>
            <Paragraph><b>Reimbursement</b>:<br/><br/>
            
            PhilHealth will reimburse based on Philippine Peso rates, equivalent to the benefits for local confinements. The reimbursement check will be sent to the member’s Philippine address.</Paragraph>
          </div>
          {/*  */}
          <div className='space-y-10'>
            <Heading5>Expanded New Benefits for Filipino Citizens</Heading5>
            <Paragraph>Starting 2024, PhilHealth benefits have been increased by 30% and are accessible in all accredited health facilities nationwide!<br/><br/>

            *Exclusions: The new and extended benefits introduced in the past five years (e.g., hemodialysis, stroke, high-risk pneumonia, Outpatient Mental Health Benefits Package) as well as common cases like cataract procedures and the PhilHealth Konsultasyong Sulit at Tama (Konsulta) Package.<br/><br/>

            For details, contact us:<br/>

            NEW HOTLINE: (02) 8662-2588 (Available 24/7, including weekends and holidays)<br/><br/>

            MOBILE HOTLINES (Call and Text, 24/7):<br/>

            Smart: 0988-857-2957 / 0968-865-4670<br/>

            Globe: 0917-127-5987 / 0917-110-9812<br/><br/>

            To request a callback, text: PHICallback [space] Mobile Number [space] Details of Concern<br/><br/>

            EMAIL: actioncenter@philhealth.gov.ph<br/>

            Facebook: PhilHealthOfficial<br/>

            Twitter: <RoseAnchor className='text-rose-700 hover:text-rose-500' href_url='https://twitter.com/teamphilhealth'>@teamphilhealth</RoseAnchor><br/>

            Website: <RoseAnchor className='text-rose-700 hover:text-rose-500' href_url='https://www.philhealth.gov.ph'>www.philhealth.gov.ph</RoseAnchor><br/>

            Please visit this page:<br/><br/>

            <span className='italic font-light'>Sources: “PhilHealth Website.” PhilHealth Website, 2024, <RoseAnchor className='text-rose-700 hover:text-rose-500' href_url='https://www.philhealth.gov.ph'>www.philhealth.gov.ph</RoseAnchor></span></Paragraph>
          </div>
          {/*  */}
          <div className='flex flex-row items-center space-x-20 border-4 border-cyan-900 rounded-xl px-4 py-8'>
            <a className='w-full max-w-64' target='_blank' href='https://www.philhealth.gov.ph/services/'>
              <img src='/img-assets/gov-services/philhealth/philhealth-ol-serves.jpg' />
            </a>
            <Paragraph><b>PhilHealth Online Services</b><br/><br/>For electronic membership registration, access in IHCP portal, electronic payment facilities, and other online services.</Paragraph>
          </div>
          {/*  */}
          <div className='flex flex-row items-center space-x-20 border-4 border-cyan-900 rounded-xl px-4 py-8'>
            <a className='w-full max-w-64' target='_blank' href='https://www.philhealth.gov.ph/members/lifetime/member.html'>
              <img src='/img-assets/gov-services/philhealth/philhealth-life-memship.jpg' />
            </a>
            <Paragraph><b>PhilHealth Membership (Lifetime Membership)</b><br/><br/>For PhilHealth members who have completed at least 120 months of contribution; and have reached the age of retirement as provided for by law.</Paragraph>
          </div>
          {/*  */}
          <div className='flex flex-row items-center space-x-20 border-4 border-cyan-900 rounded-xl px-4 py-8'>
            <a className='w-full max-w-64' target='_blank' href='https://www.philhealth.gov.ph/advisories/2010/adv11-02-2010.pdf'>
              <img src='/img-assets/gov-services/philhealth/philhealth-abroad.png' />
            </a>
            <Paragraph><b>PhilHealth Presence and Partners Abroad</b><br/><br/>View where to go and who to contact in PhilHealth while you are abroad (2010).</Paragraph>
          </div>
          {/*  */}
          <div className='flex flex-row items-center space-x-20 border-4 border-cyan-900 rounded-xl px-4 py-8'>
            <a className='w-full max-w-64' target='_blank' href='https://www.philhealth.gov.ph/advisories/2013/pdf/adv09-05-2013.pdf'>
              <img src='/img-assets/gov-services/philhealth/bankofcommerce.jpg' />
            </a>
            <Paragraph>View the updated List of Bank of Commerce Remittance Partners and Correspondents Abroad (2013).</Paragraph>
          </div>
        </div>
      </section>
    </>
  )
}