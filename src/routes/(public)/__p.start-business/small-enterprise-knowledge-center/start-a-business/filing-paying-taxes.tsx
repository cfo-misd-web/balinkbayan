import { createFileRoute } from '@tanstack/react-router'
import Paragraph from '@/components/user/shared/paragraph'
import BiggerBanner from '@/components/user/shared/banner/bigger-banner'
import Heading4 from '@/components/user/shared/headings/heading-4'
import Heading5 from '@/components/user/shared/headings/heading-5'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { AccordionHeader } from '@radix-ui/react-accordion'

export const Route = createFileRoute(
  '/(public)/__p/start-business/small-enterprise-knowledge-center/start-a-business/filing-paying-taxes',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <BiggerBanner text='Finance Your Business (Tracking your Finance)' label='Start a Business' img_url='/img-assets/start-a-business/thinking-about-it/starting-a-business.jpg' />
      <section className='text-cyan-900 max-lg:mx-4 3xl:max-w-[1400px] 2xl:max-w-[1280px] lg:max-w-[1080px] flex flex-col items-center justify-center mx-auto my-20 bg-light'>
        <Paragraph className='mb-32'>The Small Enterprise Knowledge Center provides a complete guide in starting and managing a business. Through the basic business modules, the Center aims to equip you with knowledge on the key aspects of a business. All materials published in the Center were based from the U.S. Small Business Administration website (www.sba.gov) and adapted to suit the local Philippine situation and laws.</Paragraph>
        <div className='space-y-10'>
          <Heading4 className='text-center'>Finance Your Business (Tracking your Finance)</Heading4>
          <Paragraph>Are you thinking about starting a business of your own? Explore the modules below to learn the aspects of starting a business and find ways on how to succeed.</Paragraph>
          <Paragraph>The Bureau of Internal Revenue (BIR) is the primary government agency that is in-charge in registering and reminding tax payers of their obligations. There are different types of tax that is collected by BIR. These include the following:</Paragraph>
          <div className='grid grid-cols-12 gap-y-5'>
            <Paragraph className='text-center'>&#8226;</Paragraph>
            <Paragraph className='col-span-11'><b>Capital Gains Tax</b> is a tax collected based on the gains of the seller from the sale, exchange, or other disposition of capital assets located in the Philippines.</Paragraph>
            <Paragraph className='text-center'>&#8226;</Paragraph>
            <Paragraph className='col-span-11'><b>Documentary Stamp Tax</b> is tax on documents, instruments, loan agreements and papers that shows evidence of acceptance, assignment, sale or transfer of an obligation, rights, or property incident.</Paragraph>
            <Paragraph className='text-center'>&#8226;</Paragraph>
            <Paragraph className='col-span-11'><b>Donor’s Tax</b> is tax on donation or gift and on free transfer of property.</Paragraph>
            <Paragraph className='text-center'>&#8226;</Paragraph>
            <Paragraph className='col-span-11'><b>Estate Tax</b> is tax on the properties transmitted from a deceased person to his/her lawful heirs and beneficiaries.</Paragraph>
            <Paragraph className='text-center'>&#8226;</Paragraph>
            <Paragraph className='col-span-11'><b>Income Tax</b> is tax on all yearly profits arising from property, profession, trades or offices or as a tax on a person’s income, benefits, profits and the like.</Paragraph>
            <Paragraph className='text-center'>&#8226;</Paragraph>
            <Paragraph className='col-span-11'><b>Percentage Tax</b> is a business tax based on persons or entities who sell or lease goods, properties or services in the course of trade or business whose gross annual sales or receipts do not exceed P550,000 and are not VAT-registered.</Paragraph>
            <Paragraph className='text-center'>&#8226;</Paragraph>
            <Paragraph className='col-span-11'><b>Value-Added Tax</b> is a business tax collected from the seller in the course of trade or business on every sale of properties (real or personal), lease of goods or properties (real or personal) or vendors of services. It is an indirect tax. Thus, it can be passed on to the buyer.</Paragraph>
            <Paragraph className='text-center'>&#8226;</Paragraph>
            <Paragraph className='col-span-11'><b>Withholding Tax on Compensation</b> is the tax from individuals receiving purely compensation income.</Paragraph>
            <Paragraph className='text-center'>&#8226;</Paragraph>
            <Paragraph className='col-span-11'><b>Expanded Withholding Tax</b> is a withholding tax which is required only for certain payors and is creditable against the income tax due of the payee for the taxable quarter year.</Paragraph>
            <Paragraph className='text-center'>&#8226;</Paragraph>
            <Paragraph className='col-span-11'><b>Final Withholding Tax</b> is a withholding tax which is required only for certain payors and is not creditable against the income tax due of the payee for the taxable year.</Paragraph>
            <Paragraph className='text-center'>&#8226;</Paragraph>
            <Paragraph className='col-span-11'><b>Withholding Tax on Government Money Payments</b> is a withholding tax of government offices and entities, including government-owned or -controlled corporations and local government units, before making any payments to private individuals, corporations, partnerships and/or associations.</Paragraph>
          </div>
          <Paragraph>After identifying which among these taxes are applicable to you, you can now register to the BIR. The agency provides a complete list of requirements on their website. Each is categorized based on different types of entities which include the following:</Paragraph>
          <div className='grid grid-cols-12 gap-y-5'>
            <Paragraph className='text-center'>&#8226;</Paragraph>
            <Paragraph className='col-span-11'>For self-employed and mixed income individuals</Paragraph>
            <Paragraph className='text-center'>&#8226;</Paragraph>
            <Paragraph className='col-span-11'>Estates (under judicial settlement)</Paragraph>
            <Paragraph className='text-center'>&#8226;</Paragraph>
            <Paragraph className='col-span-11'>Trusts</Paragraph>
            <Paragraph className='text-center'>&#8226;</Paragraph>
            <Paragraph className='col-span-11'>Individuals earning purely compensation income</Paragraph>
            <Paragraph className='text-center'>&#8226;</Paragraph>
            <Paragraph className='col-span-11'>Non-residents citizens</Paragraph>
            <Paragraph className='text-center'>&#8226;</Paragraph>
            <Paragraph className='col-span-11'>OCWs/Seamen earning purely foreign-sourced income</Paragraph>
            <Paragraph className='text-center'>&#8226;</Paragraph>
            <Paragraph className='col-span-11'>Corporations/partnerships (including government-owned and controlled corporations) (taxabe/non-taxable)</Paragraph>
            <Paragraph className='text-center'>&#8226;</Paragraph>
            <Paragraph className='col-span-11'>Government Agencies and Instrumentalities</Paragraph>
            <Paragraph className='text-center'>&#8226;</Paragraph>
            <Paragraph className='col-span-11'>Local Government Units</Paragraph>
            <Paragraph className='text-center'>&#8226;</Paragraph>
            <Paragraph className='col-span-11'>One time taxpayers (with no previously issued TIN)</Paragraph>
            <Paragraph className='text-center'>&#8226;</Paragraph>
            <Paragraph className='col-span-11'>Persons registering under E.O 98 (securing a TIN to be able to transact with any government office, e.g. LTO, NBI, DFA, etc.)</Paragraph>
          </div>
          <Paragraph>In addition, the website provides tax forms and specifies procedures and deadlines based on the abovementioned classification. You can also determine your tax schedule using BIR’s tax calendar on their website.</Paragraph>
          <Paragraph className='text-right italic font-normal mt-20'>Source: Bureau of Internal Revenue</Paragraph>
        </div>
      </section>
    </>
  )
}