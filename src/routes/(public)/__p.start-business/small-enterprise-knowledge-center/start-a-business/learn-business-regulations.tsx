import { createFileRoute } from "@tanstack/react-router";
import Paragraph from "@/components/user/shared/paragraph";
import BiggerBanner from "@/components/user/shared/banner/bigger-banner";
import Heading4 from "@/components/user/shared/headings/heading-4";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AccordionHeader } from "@radix-ui/react-accordion";

export const Route = createFileRoute(
  "/(public)/__p/start-business/small-enterprise-knowledge-center/start-a-business/learn-business-regulations"
)({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <BiggerBanner
        text="Learn About Business Laws and Regulations"
        label="Start a Business"
        img_url="/img-assets/start-a-business/thinking-about-it/starting-a-business.jpg"
      />
      <section className="text-cyan-900">
        <div className="max-lg:mx-4 3xl:max-w-[1400px] 2xl:max-w-[1280px] lg:max-w-[1080px] flex flex-col items-center justify-center mx-auto my-20 bg-light">
          <Paragraph className="mb-32">The Small Enterprise Knowledge Center provides a complete guide instarting and managing a business. Through the basic businessmodules, the Center aims to equip you with knowledge on the keyaspects of a business. All materials published in the Center werebased from the U.S. Small Business Administration website(www.sba.gov) and adapted to suit the local Philippine situation andlaws.</Paragraph>
          <Heading4 className='text-center'>Learn About Business Laws and Regulations</Heading4>
          <Paragraph className="mt-10">Are you thinking about starting a business of your own? Explore themodules below to learn the aspects of starting a business and findways on how to succeed.</Paragraph>
        </div>
        <div className="bg-cyan-900 max-lg:px-4 text-white w-full flex items-center flex-col justify-center py-5 mb-32">
          <Accordion
            type="single"
            collapsible
            className="max-lg:mx-4 mx-auto w-full max-w-3xl">
            <AccordionItem value="item-1" className="border-b mb-2">
              <AccordionHeader>
                <AccordionTrigger className="cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium">
                  <Heading4>Employment and Labor Law</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className="my-10 space-y-10">
                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Labor Code of the Philippines (Presidential Decree No. 442)</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Social Security Act of 1997 (R.A. No. 8282)</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Home Development Mutual Fund Law of 2009 (R.A. No. 9679)</Paragraph>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-b mb-2">
              <AccordionHeader>
                <AccordionTrigger className="cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium">
                  <Heading4>Finance Law</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className="my-10 space-y-10">
                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Tax Reform Act of 1997 (Republic Act No. 8424)</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Securities Regulation Code of the Philippines (R.A. No. 8799)</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Financing Company Act of 1998 (R.A. No. 8556)</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Electronic Commerce Act of 2000 (R.A. 8792)</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Truth in Lending Act (R.A. No. 3765)</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Philippine Cooperative Code of 2008 (R.A. 9520)</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Anti-Money Laundering Act of 2001 (RA 9160)</Paragraph>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-b mb-2">
              <AccordionHeader>
                <AccordionTrigger className="cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium">
                  <Heading4>Intellectual Property Law</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className="my-10 space-y-10">
                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Intellectual Property Code of the Philippines (R.A. 8293)</Paragraph>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border-b mb-2">
              <AccordionHeader>
                <AccordionTrigger className="cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium">
                  <Heading4>Environment Regulations</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className="my-10 space-y-10">
                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Food and Drug Administration (FDA) Act of 2009 (R.A. No. 9711)</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>The Philippine Fisheries Code (R.A. No. 8550)</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>The Animal Welfare Act of 1998 (R.A. No. 8485)</Paragraph>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="border-b mb-2">
              <AccordionHeader>
                <AccordionTrigger className="cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium">
                  <Heading4>Workplace Safety and Health Law</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className="my-10 space-y-10">
                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>National Health Insurance Act of 1995 (R.A. No. 7875)</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Insurance Act of the Philippines</Paragraph>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6" className="border-b mb-2">
              <AccordionHeader>
                <AccordionTrigger className="cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium">
                  <Heading4>Foreign Workers and Employee Eligibility</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className="my-10 space-y-10">
                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Foreign Investments Act of 1991 (R.A. No. 7042)</Paragraph>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7" className="border-b mb-2">
              <AccordionHeader>
                <AccordionTrigger className="cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium">
                  <Heading4>Local Government and MSMEs</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className="my-10 space-y-10">
                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>The Local Government Code of the Philippines (Republic Act No. 7160)</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>The Magna Carta for Micro, Small and Medium Enterprises (MSMEs), as amended (RA 9501)</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Barangay Micro Business Enterprises (BMBEs) Act of 2002 (R.A. No. 9178)</Paragraph>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  );
}
