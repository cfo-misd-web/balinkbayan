import { createFileRoute } from "@tanstack/react-router";
import Paragraph from "@/components/user/shared/paragraph";
import BiggerBanner from "@/components/user/shared/banner/bigger-banner";
import Heading4 from "@/components/user/shared/headings/heading-4";
import Heading5 from "@/components/user/shared/headings/heading-5";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AccordionHeader } from "@radix-ui/react-accordion";

export const Route = createFileRoute(
  "/(public)/__p/start-business/small-enterprise-knowledge-center/start-a-business/obtain-business-licenses-permits"
)({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <BiggerBanner
        text="Obtain Business Licenses & Permits (Register your Business)"
        label="Start a Business"
        img_url="/img-assets/start-a-business/thinking-about-it/starting-a-business.jpg"
      />
      <section className="text-cyan-900">
        <div className="max-lg:mx-4 3xl:max-w-[1400px] 2xl:max-w-[1280px] lg:max-w-[1080px] flex flex-col items-center justify-center mx-auto my-20 bg-light">
          <Paragraph className="mb-32">The Small Enterprise Knowledge Center provides a complete guide instarting and managing a business. Through the basic businessmodules, the Center aims to equip you with knowledge on the keyaspects of a business. All materials published in the Center werebased from the U.S. Small Business Administration website(www.sba.gov) and adapted to suit the local Philippine situation andlaws.</Paragraph>
          <Heading4 className='text-center'>Obtain Business Licenses & Permits (Register your Business)</Heading4>
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
                  <Heading4>Licenses and Permits (Mayor’s Permit, Employer’s TIN,Authority to Print Receipts and Invoices, SSS Certificate)</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className="my-10 space-y-10">
                <Paragraph className="mt-5">Every business requires a license or a permit to operatelegally. Each is supervised and regulated by variousgovernment agencies. However, license and permit requirementsvary depending on the type of business you want to operate.</Paragraph>
                <div className="flex justify-center">
                  <img src="/img-assets/start-a-business/obtain-business-licenses-permits/ph-makes-doing-business-easier.jpg" />
                </div>
                <Paragraph>To help you determine the specific license or permit yourbusiness needs, the following are government agencies thatfacilitate business registration.</Paragraph>
                {/*  */}
                <Heading5>Department of Trade and Industry</Heading5>
                <Paragraph>DTI requires single proprietors to register their businesswith them in order to gain exclusive rights to your businessname. You can register at any DTI Regional or Provincialoffice or apply online at <a className="underline" href="www.bnrs.dti.gov.ph">www.bnrs.dti.gov.ph</a>.</Paragraph>
                {/*  */}
                <Heading5>Securities and Exchange Commission (SEC)</Heading5>
                <Paragraph>The SEC registers a partnership or a corporation to establish them as legal or judicial entity.<br /><br />

                  Register at:<br />
                  SEC Building, Edsa, Greenhills, Mandaluyong City<br />
                  Tel. Nos.: (+632) 726.0931 to 39<br />
                  Email: <a className="underline" href="mis@sec.gov.ph">mis@sec.gov.ph</a><br />
                  Website: <a className="underline" href="www.sec.gov.ph">www.sec.gov.ph</a><br />
                  or <a className="underline" href="http://iregister.sec.gov.ph/MainServlet">http://iregister.sec.gov.ph/MainServlet</a></Paragraph>
                {/*  */}
                <Heading5>Local Government</Heading5>
                <Paragraph>The local government is in-charge of accrediting all types of businesses regardless of their legal form. They require businesses to secure a mayor’s permit or municipal license from the city or municipality where they are located. However, registration procedures vary across cities and municipalities.</Paragraph>
                {/*  */}
                <Heading5>Bureau of Internal Revenue (BIR)</Heading5>
                <Paragraph>The BIR facilitates the registration of businesses for tax purposes. It provides them with tax identification number (TIN) and allows them to print receipt, invoices, and other related documents.<br /><br />

                  Register at:<br />
                  Bureau of Internal Revenue (BIR)<br />
                  BIR National Office, Agham Road, Diliman, Quezon City<br />
                  Trunkline: (+632) 981.7000 / 981.8888<br />
                  Email: <a className="underline" href="contact_us@cctr.bir.gov.ph">contact_us@cctr.bir.gov.ph</a><br />
                  Website: <a className="underline" href="www.bir.gov.ph">www.bir.gov.ph</a></Paragraph>
                {/*  */}
                <Heading5>Social Security System (SSS)</Heading5>
                <Paragraph>Businesses, as employer, are required to register with the SSS for the benefits of their employees.<br /><br />

                  Register at:<br />
                  Social Security System (SSS)<br />
                  SSS Building, East Avenue, Diliman, Quezon City<br />
                  Tel. Nos.: (+632) 920.6401 / 920.6446<br />
                  Email: <a className="underline" href="member_relations@sss.gov.ph">member_relations@sss.gov.ph</a><br />
                  Website: <a className="underline" href="www.sss.gov.ph">www.sss.gov.ph</a></Paragraph>
                {/*  */}
                <Heading5>Department of Labor and Employment (DOLE)</Heading5>
                <Paragraph>The DOLE obliges businesses with fifty or more employees to register with them. The agency monitors business compliance with labor regulations. Specifically, the Bureau of Local Employment administers the registration of these businesses.<br /><br />

                  Register at:<br />
                  Department of Labor and Employment (DOLE)<br />
                  2/F, Dy International Building, San<br />
                  Marcelino cor. Gen. Malvar St., Malate, Manila<br />
                  Tel. Nos.: (+632) 339.2013 / 527.8000<br />
                  Email: <a className="underline" href="osec@dole.gov.ph">osec@dole.gov.ph</a><br />
                  Website: <a className="underline" href="www.dole.gov.ph">www.dole.gov.ph</a></Paragraph>
                {/*  */}
                <Heading5>Local Government</Heading5>
                <Paragraph>Check with the Mayor’s Permit Office of your municipality or city.<br /><br />

                  Business registration is now made simpler. Below is an infographic released by DTI to guide you in the process of obtaining business license and permit for partnerships.</Paragraph>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  );
}
