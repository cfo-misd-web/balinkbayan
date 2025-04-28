import { createFileRoute } from '@tanstack/react-router'
import Paragraph from '@/components/user/shared/paragraph'
import BiggerBanner from '@/components/user/shared/banner/bigger-banner'
import Heading4 from '@/components/user/shared/headings/heading-4'
import Heading5 from '@/components/user/shared/headings/heading-5'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { AccordionHeader } from '@radix-ui/react-accordion'

export const Route = createFileRoute(
  '/(public)/__p/start-business/small-enterprise-knowledge-center/register-business/business-registration-guide',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <BiggerBanner text='Business Registration Guide' label='Register your Business' img_url='/img-assets/start-a-business/thinking-about-it/starting-a-business.jpg' />
      <section className='text-cyan-900'>
        <div className='max-lg:mx-4 3xl:max-w-[1400px] 2xl:max-w-[1280px] lg:max-w-[1080px] flex flex-col items-center justify-center mx-auto my-20 bg-light'>
          <Heading4 className='text-center'>Business Registration Procedure</Heading4>
        </div>
        <Heading5 className='max-lg:mx-4 mx-auto w-full max-w-3xl'>Sole Proprietorship</Heading5>
        <div className='bg-cyan-900 max-lg:px-4 text-white w-full flex items-center flex-col justify-center py-5 mb-32 mt-10'>
          <Accordion type='single' collapsible className='max-lg:mx-4 mx-auto w-full max-w-3xl'>
            <AccordionItem value='item-1' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <Heading4>Registering with the Department of Trade and Industry (DTI)</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <Paragraph className='mt-5'>Business Name Registration Certificate<br />
                  Where:  DTI-Provincial Office where the business is located or log on to <a target='_blank' className='underline' href='https://www.bnrs.dti.gov.ph'>www.bnrs.dti.gov.ph</a><br />
                  Validity: 5 years<br /><br />

                  Requirements:<br /><br />
                  <div className='grid grid-cols-12 gap-y-5'>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>National issued ID with photo and signature</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Accomplished Business Name Registration form (BTRCP FORM 16A) in duplicate</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Registration fee depending on territorial coverage of the business name and documentary stamp:</Paragraph>
                  </div>
                  <div className='ml-20 mt-5'>• &nbsp;Barangay: &nbsp;P200.00<br />
                    • &nbsp;Municipal: &nbsp;P500.00<br />
                    • &nbsp;Regional: &nbsp;P1,000.00<br />
                    • &nbsp;National: &nbsp;P2,000.00</div></Paragraph>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-2' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <Heading4>Registering with the Municipality</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <Heading5>Mayor’s Permit</Heading5>
                <Paragraph><div className='grid grid-cols-6 gap-y-5'>
                  <Paragraph>Where:</Paragraph>
                  <Paragraph className='col-span-5'>Municipality or City where the business is located</Paragraph>
                  <Paragraph>Validity:</Paragraph>
                  <Paragraph className='col-span-5'>1 year</Paragraph>
                </div><br />
                  Requirements may include the following:<br /><br />
                  <div className='grid grid-cols-12 gap-y-5'>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>DTI Business Name Registration Certificate/ Articles of Incorporation</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Community Tax Certificate (CTC)</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Barangay Clearance</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Location Clearance</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Certificate of Occupancy</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Building Permit</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Fire Safety/ Inspection Permit</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Electrical Inspection Certificate</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Contract of Lease</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Picture/ Sketch of the Site</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Public Liability Insurance (for restaurants, mall, cinemas)</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>SSS Registration</Paragraph>
                  </div></Paragraph>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-3' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <Heading4>Registering with the Bureau of Internal Revenue (BIR)</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <Paragraph>Employer’s Tax Idenification Number
                  <div className='grid grid-cols-6 gap-y-5'>
                    <Paragraph>Where:</Paragraph>
                    <Paragraph className='col-span-5'>BIR Provincial Office where the business is located or go to the BIR Revenue District Office</Paragraph>
                    <Paragraph>Trunklines:</Paragraph>
                    <Paragraph className='col-span-5'>(632) 981.7000 / 981.8888</Paragraph>
                    <Paragraph>Email:</Paragraph>
                    <Paragraph className='col-span-5'>contact_us@cctr.bir.gov.ph</Paragraph>
                    <Paragraph>Website:</Paragraph>
                    <Paragraph className='col-span-5'><a target='_blank' className='underline' href='https://www.bir.gov.ph'>www.bir.gov.ph</a></Paragraph>
                    <Paragraph>Validity:</Paragraph>
                    <Paragraph className='col-span-5'>1 year</Paragraph>
                  </div><br />
                  Requirements:<br /><br />
                  <div className='grid grid-cols-6'>
                    <Paragraph className='text-center'>1)</Paragraph>
                    <Paragraph className='col-span-5'>For Application for Employer’s Tax identification Numbers (TIN)<br />
                      <div className='grid grid-cols-12'>
                        <Paragraph>a.)</Paragraph>
                        <Paragraph className='col-span-11'>Self- Employed/ Mixed Income individual (BIR Form 1901)</Paragraph>
                        <Paragraph className='col-start-2'>&#8226;</Paragraph>
                        <Paragraph className='col-span-10'>Birth Certificate or any valid ID showing name, address and birth date</Paragraph>
                        <Paragraph className='col-start-2'>&#8226;</Paragraph>
                        <Paragraph className='col-span-10'>Mayor’s permit or application for Mayor’s Permit</Paragraph>
                        <Paragraph className='col-start-2'>&#8226;</Paragraph>
                        <Paragraph className='col-span-10'>DTI Certificate of Registration of Business Name</Paragraph>
                        <Paragraph>b.)</Paragraph>
                        <Paragraph className='col-span-11'>For Partnerships and Corporations (BIR Form 1903)</Paragraph>
                        <Paragraph className='col-start-2'>&#8226;</Paragraph>
                        <Paragraph className='col-span-10'>SEC Certificate of Registrations for Partnerships and Corporation</Paragraph>
                        <Paragraph className='col-start-2'>&#8226;</Paragraph>
                        <Paragraph className='col-span-10'>License to do business in the Philippines (in case of residence foreign corporation)</Paragraph>
                        <Paragraph className='col-start-2'>&#8226;</Paragraph>
                        <Paragraph className='col-span-10'>Mayor’s permit or Application for Mayor’s permit</Paragraph>
                      </div><br /></Paragraph>
                    <Paragraph className='text-center'>2)</Paragraph>
                    <Paragraph className='col-span-5'>For Application for Authority to Print Receipts and Invoices<br />
                      <div className='grid grid-cols-12'>
                        <Paragraph>c.)</Paragraph>
                        <Paragraph className='col-span-11'>For New Taxpayers (BIR Form 1906)</Paragraph>
                        <Paragraph className='col-start-2'>&#8226;</Paragraph>
                        <Paragraph className='col-span-10'>Job Order</Paragraph>
                        <Paragraph className='col-start-2'>&#8226;</Paragraph>
                        <Paragraph className='col-span-10'>Final and Clear Sample of Receipts and Invoices (machine printed)</Paragraph>
                        <Paragraph className='col-start-2'>&#8226;</Paragraph>
                        <Paragraph className='col-span-10'>Photocopy of BIR Form 1901 or 1903, TIN Card, Proof of Payment (BIR Form 0605)</Paragraph>
                        <Paragraph>d.)</Paragraph>
                        <Paragraph className='col-span-11'>For Registered Taxpayers (BIR Form 1906)</Paragraph>
                        <Paragraph className='col-start-2'>&#8226;</Paragraph>
                        <Paragraph className='col-span-10'>Job order</Paragraph>
                        <Paragraph className='col-start-2'>&#8226;</Paragraph>
                        <Paragraph className='col-span-10'>Final and clear sample of receipts and invoices</Paragraph>
                        <Paragraph className='col-start-2'>&#8226;</Paragraph>
                        <Paragraph className='col-span-10'>Photocopy of Proof of Payment (BIR Form 0605, previously approved Authority to Print Invoice (ATP), Certificate of Registration (COR) BIR Form 2303, last booklet printed</Paragraph>
                      </div></Paragraph>
                  </div></Paragraph>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-4' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <Heading4>Registering with the Philippine Business Registry (PBR) for SSS, PhilHealth and Pag-IBIG</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <Heading5>For Sole Proprietorship</Heading5>
                <Paragraph>(Walk-in application at DTI office)<br /><br />
                  <div className='grid grid-cols-6 gap-y-5'>
                    <Paragraph>Where:</Paragraph>
                    <Paragraph className='col-span-5'>BIR Provincial Office where the business is located or go to the BIR Revenue District Office</Paragraph>
                    <Paragraph>Trunklines:</Paragraph>
                    <Paragraph className='col-span-5'>(632) 981.7000 / 981.8888</Paragraph>
                    <Paragraph>Email:</Paragraph>
                    <Paragraph className='col-span-5'>contact_us@cctr.bir.gov.ph</Paragraph>
                    <Paragraph>Website:</Paragraph>
                    <Paragraph className='col-span-5'><a target='_blank' className='underline' href='https://www.bir.gov.ph'>www.bir.gov.ph</a></Paragraph>
                    <Paragraph>Validity:</Paragraph>
                    <Paragraph className='col-span-5'>1 year</Paragraph>
                  </div><br />
                  Requirements:<br /><br />
                  <div className='grid grid-cols-6'>
                    <Paragraph className='text-center'>1)</Paragraph>
                    <Paragraph className='col-span-5'>For Application for Employer’s Tax identification Numbers (TIN)<br />
                      <div className='grid grid-cols-12'>
                        <Paragraph>a.)</Paragraph>
                        <Paragraph className='col-span-11'>Self- Employed/ Mixed Income individual (BIR Form 1901)</Paragraph>
                        <Paragraph className='col-start-2'>&#8226;</Paragraph>
                        <Paragraph className='col-span-10'>Birth Certificate or any valid ID showing name, address and birth date</Paragraph>
                        <Paragraph className='col-start-2'>&#8226;</Paragraph>
                        <Paragraph className='col-span-10'>Mayor’s permit or application for Mayor’s Permit</Paragraph>
                        <Paragraph className='col-start-2'>&#8226;</Paragraph>
                        <Paragraph className='col-span-10'>DTI Certificate of Registration of Business Name</Paragraph>
                        <Paragraph>b.)</Paragraph>
                        <Paragraph className='col-span-11'>For Partnerships and Corporations (BIR Form 1903)</Paragraph>
                        <Paragraph className='col-start-2'>&#8226;</Paragraph>
                        <Paragraph className='col-span-10'>SEC Certificate of Registrations for Partnerships and Corporation</Paragraph>
                        <Paragraph className='col-start-2'>&#8226;</Paragraph>
                        <Paragraph className='col-span-10'>License to do business in the Philippines (in case of residence foreign corporation)</Paragraph>
                        <Paragraph className='col-start-2'>&#8226;</Paragraph>
                        <Paragraph className='col-span-10'>Mayor’s permit or Application for Mayor’s permit</Paragraph>
                      </div><br /></Paragraph>
                    <Paragraph className='text-center'>2)</Paragraph>
                    <Paragraph className='col-span-5'>For Application for Authority to Print Receipts and Invoices<br />
                      <div className='grid grid-cols-12'>
                        <Paragraph>c.)</Paragraph>
                        <Paragraph className='col-span-11'>For New Taxpayers (BIR Form 1906)</Paragraph>
                        <Paragraph className='col-start-2'>&#8226;</Paragraph>
                        <Paragraph className='col-span-10'>Job Order</Paragraph>
                        <Paragraph className='col-start-2'>&#8226;</Paragraph>
                        <Paragraph className='col-span-10'>Final and Clear Sample of Receipts and Invoices (machine printed)</Paragraph>
                        <Paragraph className='col-start-2'>&#8226;</Paragraph>
                        <Paragraph className='col-span-10'>Photocopy of BIR Form 1901 or 1903, TIN Card, Proof of Payment (BIR Form 0605)</Paragraph>
                        <Paragraph>d.)</Paragraph>
                        <Paragraph className='col-span-11'>For Registered Taxpayers (BIR Form 1906)</Paragraph>
                        <Paragraph className='col-start-2'>&#8226;</Paragraph>
                        <Paragraph className='col-span-10'>Job order</Paragraph>
                        <Paragraph className='col-start-2'>&#8226;</Paragraph>
                        <Paragraph className='col-span-10'>Final and clear sample of receipts and invoices</Paragraph>
                        <Paragraph className='col-start-2'>&#8226;</Paragraph>
                        <Paragraph className='col-span-10'>Photocopy of Proof of Payment (BIR Form 0605, previously approved Authority to Print Invoice (ATP), Certificate of Registration (COR) BIR Form 2303, last booklet printed</Paragraph>
                      </div></Paragraph>
                  </div></Paragraph>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  )
}