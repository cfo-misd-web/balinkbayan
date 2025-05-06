import { createFileRoute } from '@tanstack/react-router'
import Paragraph from '@/components/user/shared/paragraph'
import BiggerBanner from '@/components/user/shared/banner/bigger-banner'
import Heading4 from '@/components/user/shared/headings/heading-4'
import Heading5 from '@/components/user/shared/headings/heading-5'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export const Route = createFileRoute(
  '/(public)/__p/start-business/small-enterprise-knowledge-center/register-business/business-registration-guide',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <BiggerBanner text='Business Registration Guide' label='Register your Business' img_url='/img-assets/start-a-business/register-business/laptop-office-hand-3196481.jpg' />
      <section className='text-cyan-900'>
        <div className='max-lg:mx-4 3xl:max-w-[1400px] 2xl:max-w-[1280px] lg:max-w-[1080px] flex flex-col items-center justify-center mx-auto my-20 bg-light'>
          <Heading4 className='text-center'>Business Registration Procedure</Heading4>
        </div>
        <Heading5 className='max-lg:mx-4 mx-auto w-full max-w-3xl'>Sole Proprietorship</Heading5>
        <div className='bg-cyan-900 max-lg:px-4 text-white w-full flex items-center flex-col justify-center py-5 mb-32 mt-10'>
          <Accordion type='single' collapsible className='max-lg:mx-4 mx-auto w-full max-w-3xl'>
            <AccordionItem value='item-1' className='border-b mb-2'>

              <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                <Heading4>Registering with the Department of Trade and Industry (DTI)</Heading4>
              </AccordionTrigger>

              <AccordionContent className='my-10 space-y-10'>
                <Heading5>Business Name Registration Certificate</Heading5>
                <Paragraph className='mt-5'>
                  <div className='grid grid-cols-6 gap-y-5'>
                    <Paragraph>Where:</Paragraph>
                    <Paragraph className='col-span-5'>DTI-Provincial Office where the business is located or log on to <a target='_blank' className='underline' href='https://www.bnrs.dti.gov.ph'>www.bnrs.dti.gov.ph</a></Paragraph>
                    <Paragraph>Validity:</Paragraph>
                    <Paragraph className='col-span-5'>5 years</Paragraph>
                  </div><br /><br />

                  <b>Requirements:</b><br /><br />
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

              <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                <Heading4>Registering with the Municipality</Heading4>
              </AccordionTrigger>

              <AccordionContent className='my-10 space-y-10'>
                <Heading5>Mayor’s Permit</Heading5>
                <Paragraph><div className='grid grid-cols-6 gap-y-5'>
                  <Paragraph>Where:</Paragraph>
                  <Paragraph className='col-span-5'>Municipality or City where the business is located</Paragraph>
                  <Paragraph>Validity:</Paragraph>
                  <Paragraph className='col-span-5'>1 year</Paragraph>
                </div><br /><br />

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

              <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                <Heading4>Registering with the Bureau of Internal Revenue (BIR)</Heading4>
              </AccordionTrigger>

              <AccordionContent className='my-10 space-y-10'>
                <Heading5>Employer’s Tax Identification Number</Heading5>
                <Paragraph><div className='grid grid-cols-6 gap-y-5'>
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
                </div><br /><br />

                  <b>Requirements:</b><br /><br />
                  <div className='grid grid-cols-6'>
                    <Paragraph className='text-center'>1.)</Paragraph>
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
                        <Paragraph className='col-span-10'>Photocopy of Proof of Payment (BIR Form 0605, previously approved Authority to Print Invoice (ATP), Certificate of Registration (COR) BIR Form 2303, last booklet printed)</Paragraph>
                      </div></Paragraph>
                  </div></Paragraph>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-4' className='border-b mb-2'>

              <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                <Heading4>Registering with the Philippine Business Registry (PBR) for SSS, PhilHealth and Pag-IBIG</Heading4>
              </AccordionTrigger>

              <AccordionContent className='my-10 space-y-10'>
                <Heading5>For Sole Proprietorship</Heading5>
                <Paragraph>(Walk-in application at DTI office)<br /><br />
                  <div className='grid grid-cols-12 gap-y-5'>
                    <Paragraph className='text-center'>1.</Paragraph>
                    <Paragraph className='col-span-11'>Applicant fills out the PBR application form and submits to DTI Teller for processing.</Paragraph>
                    <Paragraph className='text-center'>2.</Paragraph>
                    <Paragraph className='col-span-11'>DTI Teller secures applicant’s Tax Identification Number (TIN.) (if there is an existing TIN, PBR will validate against records)</Paragraph>
                    <Paragraph className='text-center'>3.</Paragraph>
                    <Paragraph className='col-span-11'>Business Name (BN) Certificate and Employer’s Registration Numbers (ERNs) are processed.
                      <div className='grid grid-cols-12'>
                        <Paragraph>a.</Paragraph>
                        <Paragraph className='col-span-11'>A Transaction Reference Number (TRN) is presented to the Cashier for BN fee.</Paragraph>
                        <Paragraph>b.</Paragraph>
                        <Paragraph className='col-span-11'>Official Receipt of Payment is presented to the DTI Releasing Office for the BN Certificate.</Paragraph>
                        <Paragraph>c.</Paragraph>
                        <Paragraph className='col-span-11'>Applicant gets SSS, PhilHealth, and Pag-IBIG ERNs from the DTI Teller.</Paragraph>
                      </div></Paragraph>
                    <Paragraph className='text-center'>4.</Paragraph>
                    <Paragraph className='col-span-11'>Certificate of Registration or Employer ID can be secured from agencies upon presentation of PBR-generated ERNs.</Paragraph>
                  </div></Paragraph>
                {/*  */}
                <Heading5>For Partnerships or Corporations</Heading5>
                <Paragraph>(Walk-in application at PBR Kiosk at Securities and Exchange Commission (SEC) Main Office)<br />
                  (Only partnerships or corporations already registered with SEC can apply.)<br /><br />
                  <div className='grid grid-cols-12 gap-y-5'>
                    <Paragraph className='text-center'>1.</Paragraph>
                    <Paragraph className='col-span-11'>Applicant fills out the PBR application form and submits to the Teller for processing.</Paragraph>
                    <Paragraph className='text-center'>2.</Paragraph>
                    <Paragraph className='col-span-11'>Applicant submits photocopies of complete SEC registration documents (i.e., SEC registration certificate, Articles of Partnership/Corporation). Original copies are required for verification.</Paragraph>
                    <Paragraph className='text-center'>3.</Paragraph>
                    <Paragraph className='col-span-11'>Teller transmits application for employer registration numbers (ERNs) to SSS, PhilHealth and Pag-IBIG and applicant gets PBR-generated ERNs.</Paragraph>
                    <Paragraph className='text-center'>4.</Paragraph>
                    <Paragraph className='col-span-11'>Certificate of Registration or Employer ID can be secured from agencies upon presentation of PBR-generated ERNs.</Paragraph>
                  </div></Paragraph>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        {/*  */}
        {/*  */}
        <Heading5 className='max-lg:mx-4 mx-auto w-full max-w-3xl'>Partnerships and Corporations</Heading5>
        <div className='bg-cyan-900 max-lg:px-4 text-white w-full flex items-center flex-col justify-center py-5 mb-32 mt-10'>
          <Accordion type='single' collapsible className='max-lg:mx-4 mx-auto w-full max-w-3xl'>
            <AccordionItem value='item-1' className='border-b mb-2'>

              <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                <Heading4>Registering with the Securities and Exchange Commission (SEC)</Heading4>
              </AccordionTrigger>

              <AccordionContent className='my-10 space-y-10'>
                <Heading5>SEC Registration Certificate</Heading5>
                <Paragraph>
                  <div className='grid grid-cols-6 gap-y-5'>
                    <Paragraph>Where:</Paragraph>
                    <Paragraph className='col-span-5'>SEC Building, EDSA, Greenhills, Mandaluyong City</Paragraph>
                    <Paragraph>Tel. No.:</Paragraph>
                    <Paragraph className='col-span-5'>(632) 584-0923</Paragraph>
                    <Paragraph>Email:</Paragraph>
                    <Paragraph className='col-span-5'>mis@sec.gov.ph</Paragraph>
                    <Paragraph>Website:</Paragraph>
                    <Paragraph className='col-span-5'>www.sec.gov.ph or <a href='http://iregister.sec.gov.ph/MainServlet' target='_blank' className='underline'>http://iregister.sec.gov.ph/MainServlet</a><br />(for online name verification and reservation)</Paragraph>
                    <Paragraph>Validity:</Paragraph>
                    <Paragraph className='col-span-5'>50 years</Paragraph>
                  </div><br /><br />

                  <b>Requirements for Partnerships:</b><br /><br />
                  <div className='grid grid-cols-12 gap-y-5'>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Name Verification Slip (online or at the Name Verification Unit)</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Articles of Partnership</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Written Undertaking to Change Corporate Name by any partner</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Form F105 for partnership with Foreign Entity</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Proof of Inward Remittance by foreign partners</Paragraph>
                  </div><br /><br />

                  <b>Requirements for Stock [S] and Non Stock [NS] Corporations:</b><br /><br />
                  <div className='grid grid-cols-12 gap-y-5'>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Verification Slip Form [S] [NS]</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Articles of Incorporation and By-Laws [S] [NS]</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Treasurer’s Affidavit [S]</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Notarized Bank Certificate of Deposit where the bank is located [S]</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Written Undertaking to Change Corporate Name by any Incorporator or Director [S], by any Trustee [NS]</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Clearance from other government agencies [S]</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Foreign Investment Application Form F-100 (for subsidiaries of foreign corporations [S]</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Proof of Inward Remittance by Non-Resident Aliens/Subscribers [S]</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>List of members and amount contributed certified by the Secretary and Treasurer [NS]</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Registration fee of Php 360.00</Paragraph>
                  </div></Paragraph>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-2' className='border-b mb-2'>

              <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                <Heading4>Registering with the Municipality</Heading4>
              </AccordionTrigger>

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
                    <Paragraph className='col-span-11'>DTI or SEC Registration
                      Certificate/ Articles of Incorporation</Paragraph>
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

              <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                <Heading4>Registering with the Bureau of Internal Revenue (BIR)</Heading4>
              </AccordionTrigger>

              <AccordionContent className='my-10 space-y-10'>
                <Paragraph>Employer’s Tax Identification Number
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
                  <b>Requirements:</b><br /><br />
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
                        <Paragraph className='col-span-10'>Photocopy of Proof of Payment (BIR Form 0605, previously approved Authority to Print Invoice (ATP), Certificate of Registration (COR) BIR Form 2303, last booklet printed)</Paragraph>
                      </div></Paragraph>
                  </div></Paragraph>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-4' className='border-b mb-2'>

              <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                <Heading4>Registering with the Philippine Business Registry (PBR) for SSS, PhilHealth and Pag-IBIG</Heading4>
              </AccordionTrigger>

              <AccordionContent className='my-10 space-y-10'>
                <Heading5>For Sole Proprietorship</Heading5>
                <Paragraph>(Walk-in application at DTI office)<br /><br />
                  <div className='grid grid-cols-12 gap-y-5'>
                    <Paragraph className='text-center'>1.</Paragraph>
                    <Paragraph className='col-span-11'>Applicant fills out the PBR application form and submits to DTI Teller for processing.</Paragraph>
                    <Paragraph className='text-center'>2.</Paragraph>
                    <Paragraph className='col-span-11'>DTI Teller secures applicant’s Tax Identification Number (TIN.) (if there is an existing TIN, PBR will validate against records)</Paragraph>
                    <Paragraph className='text-center'>3.</Paragraph>
                    <Paragraph className='col-span-11'>Business Name (BN) Certificate and Employer’s Registration Numbers (ERNs) are processed.
                      <div className='grid grid-cols-12'>
                        <Paragraph>a.</Paragraph>
                        <Paragraph className='col-span-11'>A Transaction Reference Number (TRN) is presented to the Cashier for BN fee.</Paragraph>
                        <Paragraph>b.</Paragraph>
                        <Paragraph className='col-span-11'>Official Receipt of Payment is presented to the DTI Releasing Office for the BN Certificate.</Paragraph>
                        <Paragraph>c.</Paragraph>
                        <Paragraph className='col-span-11'>Applicant gets SSS, PhilHealth, and Pag-IBIG ERNs from the DTI Teller.</Paragraph>
                      </div></Paragraph>
                    <Paragraph className='text-center'>4.</Paragraph>
                    <Paragraph className='col-span-11'>Certificate of Registration or Employer ID can be secured from agencies upon presentation of PBR-generated ERNs.</Paragraph>
                  </div></Paragraph>
                {/*  */}
                <Heading5>For Partnerships or Corporations</Heading5>
                <Paragraph>(Walk-in application at PBR Kiosk at Securities and Exchange Commission (SEC) Main Office)<br />
                  (Only partnerships or corporations already registered with SEC can apply.)<br /><br />
                  <div className='grid grid-cols-12 gap-y-5'>
                    <Paragraph className='text-center'>1.</Paragraph>
                    <Paragraph className='col-span-11'>Applicant fills out the PBR application form and submits to the Teller for processing.</Paragraph>
                    <Paragraph className='text-center'>2.</Paragraph>
                    <Paragraph className='col-span-11'>Applicant submits photocopies of complete SEC registration documents (i.e., SEC registration certificate, Articles of Partnership/Corporation). Original copies are required for verification.</Paragraph>
                    <Paragraph className='text-center'>3.</Paragraph>
                    <Paragraph className='col-span-11'>Teller transmits application for employer registration numbers (ERNs) to SSS, PhilHealth and Pag-IBIG and applicant gets PBR-generated ERNs.</Paragraph>
                    <Paragraph className='text-center'>4.</Paragraph>
                    <Paragraph className='col-span-11'>Certificate of Registration or Employer ID can be secured from agencies upon presentation of PBR-generated ERNs.</Paragraph>
                  </div></Paragraph>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        {/*  */}
        {/*  */}
        <Heading5 className='max-lg:mx-4 mx-auto w-full max-w-3xl'>Cooperatives</Heading5>
        <div className='bg-cyan-900 max-lg:px-4 text-white w-full flex items-center flex-col justify-center py-5 mb-32 mt-10'>
          <Accordion type='single' collapsible className='max-lg:mx-4 mx-auto w-full max-w-3xl'>
            <AccordionItem value='item-1' className='border-b mb-2'>

              <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                <Heading4>Registering with the Cooperative Development Authority (CDA)</Heading4>
              </AccordionTrigger>

              <AccordionContent className='my-10 space-y-10'>
                <Heading5>Certificate of Registration</Heading5>
                <Paragraph>
                  <div className='grid grid-cols-6 gap-y-5'>
                    <Paragraph>Where:</Paragraph>
                    <Paragraph className='col-span-5'>5th and 6th Floors, Ben-Lor Building,1184 Quezon Avenue, Quezon City or 827 Aurora Blvd., Brgy. Immaculate Concepcion, Cubao, Quezon City</Paragraph>
                    <Paragraph>Tel. Nos.:</Paragraph>
                    <Paragraph className='col-span-5'>(632) 372-3808 / 373-6895 / 332-0019</Paragraph>
                    <Paragraph>Email:</Paragraph>
                    <Paragraph className='col-span-5'>webmaster@cda.gov.ph</Paragraph>
                    <Paragraph>Website:</Paragraph>
                    <Paragraph className='col-span-5'><a href='https://www.cda.gov.ph' target='_blank' className='underline'>www.cda.gov.ph</a> (for online name verification and reservation)</Paragraph>
                  </div><br />

                  A cooperative is a duly registered association of persons, with a common bond of interest who have a voluntarily joined together to achieve a lawful common social and economic end, making equitable contributions to the capital required, and accepting a fair share of the risks and benefits of the undertaking in accordance with universally accepted cooperative principles.<br /><br />

                  <b>Extension offices:</b><br /><br />

                  Dagupan City; Tuguegarao, Cagayan; Baguio City; San Fernando, Pampanga; NCR-Quezon City; Calamba, Laguna; Naga City; Iloilo City; Cebu City; Kidapawan; Tacloban City; Davao City; Zamboanga City; and Butuan City.<br /><br />

                  <b>Requirements:</b><br /><br />
                  <div className='grid grid-cols-12 gap-y-5'>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Economic Survey (4 copies)</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>By-Laws and Articles of Cooperation duly notarized (available at CDA office) – 4 copies</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>At least 15 members</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Treasurer’s Affidavit</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Undertaking to change name</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Undertaking to submit reportorial requirements</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Bond of accountable officers</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Cooperative Pre-membership Education Seminar Certification</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Favorable endorsement of proper government agency, if necessary</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Capitalization of at least Php 15,000 (total paid-up capital)</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Cooperative Annual Performance Report and audited financial statements for them to secure a certificate of good standing</Paragraph>
                  </div><br /><br />

                  <b>SCHEDULE OF FEES:</b><br /><br />
                  <div className='grid grid-cols-12 gap-y-5'>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>For Laboratory Cooperatives: No registration fee</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>For Primary Cooperatives with paid-up capital of Php 2,000.00 to 500,000.00 up: P500.00 -1/10 of 1% of paid-up share capital</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>For Secondary Cooperatives with paid-up capital of Php 2,000.00 to 500,000.00 up: P1,000.00 – 1/10 of 1% of paid-up share capital</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>For Tertiary Cooperatives: Php 3,000.00</Paragraph>
                  </div></Paragraph>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-2' className='border-b mb-2'>

              <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                <Heading4>Registering with the Municipality</Heading4>
              </AccordionTrigger>

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
                    <Paragraph className='col-span-11'>DTI or SEC Registration
                      Certificate/ Articles of Incorporation</Paragraph>
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

              <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                <Heading4>Registering with the Bureau of Internal Revenue (BIR)</Heading4>
              </AccordionTrigger>

              <AccordionContent className='my-10 space-y-10'>
                <Paragraph><b>Employer’s Tax Identification Number</b>
                  <div className='grid grid-cols-6 gap-y-5 mt-10'>
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
                  <b>Requirements:</b><br /><br />
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
                        <Paragraph className='col-span-10'>Photocopy of Proof of Payment (BIR Form 0605, previously approved Authority to Print Invoice (ATP), Certificate of Registration (COR) BIR Form 2303, last booklet printed)</Paragraph>
                      </div></Paragraph>
                  </div></Paragraph>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-4' className='border-b mb-2'>

              <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                <Heading4>Registering with the Philippine Business Registry (PBR) for SSS, PhilHealth and Pag-IBIG</Heading4>
              </AccordionTrigger>

              <AccordionContent className='my-10 space-y-10'>
                <Heading5>For Sole Proprietorship</Heading5>
                <Paragraph>(Walk-in application at DTI office)<br /><br />
                  <div className='grid grid-cols-12 gap-y-5'>
                    <Paragraph className='text-center'>1.</Paragraph>
                    <Paragraph className='col-span-11'>Applicant fills out the PBR application form and submits to DTI Teller for processing.</Paragraph>
                    <Paragraph className='text-center'>2.</Paragraph>
                    <Paragraph className='col-span-11'>DTI Teller secures applicant’s Tax Identification Number (TIN.) (if there is an existing TIN, PBR will validate against records)</Paragraph>
                    <Paragraph className='text-center'>3.</Paragraph>
                    <Paragraph className='col-span-11'>Business Name (BN) Certificate and Employer’s Registration Numbers (ERNs) are processed.
                      <div className='grid grid-cols-12'>
                        <Paragraph>a.</Paragraph>
                        <Paragraph className='col-span-11'>A Transaction Reference Number (TRN) is presented to the Cashier for BN fee.</Paragraph>
                        <Paragraph>b.</Paragraph>
                        <Paragraph className='col-span-11'>Official Receipt of Payment is presented to the DTI Releasing Office for the BN Certificate.</Paragraph>
                        <Paragraph>c.</Paragraph>
                        <Paragraph className='col-span-11'>Applicant gets SSS, PhilHealth, and Pag-IBIG ERNs from the DTI Teller.</Paragraph>
                      </div></Paragraph>
                    <Paragraph className='text-center'>4.</Paragraph>
                    <Paragraph className='col-span-11'>Certificate of Registration or Employer ID can be secured from agencies upon presentation of PBR-generated ERNs.</Paragraph>
                  </div></Paragraph>
                {/*  */}
                <Heading5>For Partnerships or Corporations</Heading5>
                <Paragraph>(Walk-in application at PBR Kiosk at Securities and Exchange Commission (SEC) Main Office)<br />
                  (Only partnerships or corporations already registered with SEC can apply.)<br /><br />
                  <div className='grid grid-cols-12 gap-y-5'>
                    <Paragraph className='text-center'>1.</Paragraph>
                    <Paragraph className='col-span-11'>Applicant fills out the PBR application form and submits to the Teller for processing.</Paragraph>
                    <Paragraph className='text-center'>2.</Paragraph>
                    <Paragraph className='col-span-11'>Applicant submits photocopies of complete SEC registration documents (i.e., SEC registration certificate, Articles of Partnership/Corporation). Original copies are required for verification.</Paragraph>
                    <Paragraph className='text-center'>3.</Paragraph>
                    <Paragraph className='col-span-11'>Teller transmits application for employer registration numbers (ERNs) to SSS, PhilHealth and Pag-IBIG and applicant gets PBR-generated ERNs.</Paragraph>
                    <Paragraph className='text-center'>4.</Paragraph>
                    <Paragraph className='col-span-11'>Certificate of Registration or Employer ID can be secured from agencies upon presentation of PBR-generated ERNs.</Paragraph>
                  </div></Paragraph>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  )
}