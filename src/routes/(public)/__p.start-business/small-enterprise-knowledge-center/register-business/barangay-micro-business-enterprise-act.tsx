import { createFileRoute } from '@tanstack/react-router'
import Paragraph from '@/components/user/shared/paragraph'
import BiggerBanner from '@/components/user/shared/banner/bigger-banner'
import Heading4 from '@/components/user/shared/headings/heading-4'
import Heading5 from '@/components/user/shared/headings/heading-5'
import RoseAnchor from '@/components/user/shared/anchors/rose-anchor'

export const Route = createFileRoute(
  '/(public)/__p/start-business/small-enterprise-knowledge-center/register-business/barangay-micro-business-enterprise-act',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <BiggerBanner text='Barangay Micro-Business Enterprise Act of 2002' label='Start a Business' img_url='/img-assets/start-a-business/register-business/open-book-library-education-1428428.jpg' />
      <section className='text-cyan-900 max-lg:mx-4 3xl:max-w-[1400px] 2xl:max-w-[1280px] lg:max-w-[1080px] flex flex-col items-center justify-center mx-auto my-20 bg-light'>
        <div className='space-y-5'>
          <Heading4 className='text-center'>Barangay Micro-Business Enterprise Act of 2002</Heading4>
          <Paragraph className='text-center mt-20'><b>Republic of the Philippines<br/>
          Congress of the Philippines<br/></b>
          Metro Manila<br/><br/>

          <b>Twelfth Congress<br/>
          Second Regular Session</b><br/><br/><br/>
          Begun and held in Metro Manila, on Monday, the twenty-second day of July, two thousand two.</Paragraph>
          <Paragraph><b>Republic Act No. 9178<span className='ml-16'>November 13, 2002</span></b></Paragraph><br/>
          <Paragraph className='text-center'><b>AN ACT TO PROMOTE THE ESTABLISHMENT OF BARANGAY MICRO BUSINESS ENTERPRISES (BMBEs), PROVIDING INCENTIVES AND BENEFITS THEREFOR, AND FOR OTHER PURPOSES.<br/><br/></b>
          Be it enacted by the Senate and House of Representatives of the Philippines in Congress assembled.</Paragraph>
          {/*  */}
          <Heading5 className='text-center mt-20'>PRELIMINARY PROVISIONS</Heading5>
          <div className='space-y-10 mt-10'>
            <Paragraph><b>Section 1. </b>Short Title – This Act shall be known as the “Barangay Micro Business Enterprises (BMBE’s) Act of 2002.”</Paragraph>
            <Paragraph><b>Section 2. </b>Declaration of Policy – It is hereby declared to be the policy of the State to hasten the country’s economic development by encouraging the formation and growth of barangay micro business enterprises which effectively serve as seedbeds of Filipino entrepreneurial talents, and intergranting those in the informal sector with the mainstream economy, through the rationalization of bureaucratic restrictions, the active granting of incentives and benefits to generate much-needed employment and alleviate poverty.</Paragraph>
            <Paragraph><b>Section 3. </b>Definition of Terms – As used in this Act, the following terms shall mean:<br/><br/>
            <div className='grid grid-cols-12 gap-y-5'>
              <Paragraph className='text-center'>(a)</Paragraph>
              <Paragraph className='col-span-11'>“Barangay Micro Business Enterprise,” hereinafter referred to as BMBE, refers to any business entity or enterprise engaged in the production, processing or manufacturing of products or commodities, including agro-processing, trading and services, whose total assets including those arising from loans but exclusive of the land on which the particular business entity’s office, plant and equipment are situated, shall not be more than Three Million Pesos (P3,000,000.00) The Above definition shall be subjected to review and upward adjustment by the SMED Council, as mandated under Republic Act No. 6977, as amended by Republic Act No. 8289.<br/><br/>

              For the purpose of this Act, “service” shall exclude those rendered by any one, who is duly licensed government after having passed a government licensure examination, in connection with the exercise of one’s profession.</Paragraph>
              <Paragraph className='text-center'>(b)</Paragraph>
              <Paragraph className='col-span-11'>“Certificate of Authority” is the certificate issued granting the authority to the registered BMBE to operate and be entitled to the benefits and privileges accorded thereto.</Paragraph>
              <Paragraph className='text-center'>(c)</Paragraph>
              <Paragraph className='col-span-11'>“Assets” refers to all kinds of properties, real or personal, owned by the BMBE and used for the conduct of its business as defined by the SMED Council: Provided, That for the purpose of exemption from taxes and fees under this Act, this term shall mean all kinds of properties, real or personal, owned and/or used by the BMBE for the conduct of its business as defined by the SMED Council.</Paragraph>
              <Paragraph className='text-center'>(d)</Paragraph>
              <Paragraph className='col-span-11'>“Registration” refers to the inclusion of BMBE in the BMBE Registry of a city or municipality.</Paragraph>
              <Paragraph className='text-center'>(e)</Paragraph>
              <Paragraph className='col-span-11'>“Financing” refers to all borrowings of the BMBE from all sources after registration.</Paragraph>
            </div></Paragraph>
          </div>
          {/*  */}
          <Heading5 className='text-center mt-20'>REGISTRATION AND OPERATION OF BMBE</Heading5>
          <div className='space-y-10 mt-10'>
            <Paragraph><b>Section 4. </b>Registration and Fees – The Office of the Treasurer of each city or municipality shall register the BMBE’s and issue a Certificate of Authority to enable the BMBE to avail of the benefits under this Act. Any such applications shall be processed within fifteen (15) working days upon submission of complete documents. Otherwise, the BMBEs shall be deemed registered. The Municipal or City Mayor may appoint a BMBE Registration Officer who shall be under the Office of the Treasurer. Local government units (LGU’s) are encouraged to establish a One-Stop-business Registration Center to handle the efficient registration and processing of permits/licenses of BMBEs. Likewise, LGUs shall make a periodic evaluation of the BMBE’s financial status for monitoring and reporting purposes.<br/><br/>

            The LGUs shall issue the Certificate of Authority promptly and free of charge. However, to defray the administrative costs of registering and monitoring the BMBEs, the LGUs may charge a fee renewal.<br/><br/>

            The Certificate of Authority shall be effective for a period of two (2) years, renewable for a period of two (2) years for every renewal.<br/><br/>

            As much as possible, BMBEs shall be subject to minimal bureaucratic requirements and reasonable fees and charges.</Paragraph>
            <Paragraph><b>Section 5. </b>Who are Eligible to Register – Any person, natural or juridical, or cooperative, or association, having the qualifications as defined in Section 3(a) hereof may apply for registration as BMBE.</Paragraph>
            <Paragraph><b>Section 6. </b>Transfer of Ownership – The BMBE shall report to the city or municipality of any changer in the status of its ownership structure, and shall surrender the original copy of the BMBE Certificate of Authority for notation of the transfer.</Paragraph>
          </div>
          {/*  */}
          <Heading5 className='text-center mt-20'>INCENTIVES AND BENEFITS</Heading5>
          <div className='space-y-10 mt-10'>
            <Paragraph><b>Section 7. </b>Exemption from Taxes and Fees – All BMBEs shall be exempt from tax for income arising from the operations of the enterprise.<br/><br/>

            The LGUs are encouraged either to reduce the amount of local taxes, fees and charges imposed or to exempt BMBEs from local taxes, fees and charges</Paragraph>
            <Paragraph><b>Section 8. </b>Exemption from the Coverage of the Minimum Wage Law – The BMBEs shall be exempt from the coverage of the Minimum Wage Law: Provided, That all employees covered under this Act shall be entitled to the same benefits given to any regular employee such as social security and healthcare benefits.</Paragraph>
            <Paragraph><b>Section 9. </b>Credit Delivery – upon the approval of this Act, the land Bank of the Philippines (LBP), the Development Bank of the Philippines (DBP), the Small Business Guarantee and Finance Corporation (SBGFC), and the People’s Credit and Finance Corporation (PCFC) shall set up a special credit window that will service the financing needs of BMBEs registered under this Act consistent with the Banko Sentral ng Pilipinas (BSP) policies; rules and regulations. The Government Service Insurance System (GSIS) and Social Security System (SSS) shall likewise set up a special credit window that will serve the financing needs of their respective members who wish to establish a BMBE. The concerned financial institutions (FIs) encouraged to wholesale the funds to accredited private financial institutions including community-based organizations such as credit, cooperatives, non-government organizations (NGOs) and people’s organizations, which will in turn, directly provide credit support to BMBEs.<br/><br/>

            All loans from whatever sources granted to BMBEs under this Act shall be considered as part of alternative compliance to Presidential Decree no, 717,, otherwise known as the Agri-Agra Law, or to Republic Act. No. 6977, known as the Magna Carta for Small and Medium Enterprises, as amended. For purposes of compliance with presidential Decree no. 717 and Republic Act No. 6977, as amended, loans granted to BMBEs under this Act shall be computed at twice the amount of the face value of the loans.<br/><br/>

            To minimize the risks in lending to the BMBEs, the SBGFC and the Quedan and Rural Credit Guarantee Corporation (QUEDANCOR) under the Department of Agriculture, in case of agribusiness activities, shall set up a special guarantee window to provide the necessary credit guarantee to BMBEs under their respective guarantee programs.<br/><br/>

            The LBP, DBP. PCFC, SBGFC, SSS, GSIS, and QUEDANCOR shall annually report to the appropriate Committee of Both Houses of Congress on the status of the implementation of this provision.<br/><br/>

            The BSP shall formulate the rules for the implementation of this provision and shall likewise establish incentive programs to encourage and improve credit delivery to the BMBEs.</Paragraph>
            <Paragraph><b>Section 10. </b>Technology Transfer, Production and Management Training, and marketing Assistance – A BMBE Development Fund shall be set up with an endowment of Three Hundred Million pesos (P300,000,000.00) from the Philippine Amusement and Gaming Corporation (PAGCOR) and shall be administered by the SMED Council.<br/><br/>

            The Department of Trade and Industry (DTI), the Department of Science and Technology (DOST), the university of the Philippines Institute for Small Scale Industries (UP ISSI), Cooperative Development Authority (CDA), Technical Education and Skills Development Authority (TESDA), and Technology and Livelihood Resource Center (TLRC) may avail of the said Fund for technology transfer, production and management training and marketing assistance to BMBEs.<br/><br/>

            The DTI, in coordination with the private sector and non-government organization (NGOs), shall explore the possibilities of linking or matching-up BMBEs with small, medium and large enterprises and likewise establish incentives therefor.<br/><br/>

            The DTI, in behalf of the DOST, UP ISSI, CDA. TESDA and TLRC shall be required to furnish the appropriate Committees of both Houses of Congress a yearly report on the development and accomplishments of their projects and programs in relation to technology transfer, production and management training and marketing assistance extended to BMBEs.</Paragraph>
            <Paragraph><b>Section 11. </b>Trade and Investment Promotions – The data gathered from business registration shall be made accessible to and shall be utilized by private sector organizations and non-government organizations for purposes of business matching, trade and investment promotion.</Paragraph>
          </div>
          {/*  */}
          <Heading5 className='text-center mt-20'>INFORMATION DISSEMINATION</Heading5>
          <div className='space-y-10 mt-10'>
            <Paragraph><b>Section 12. </b>Information Dissemination – The Philippine Information Agency (PIA), in accordance with the Department of Labor and Employment (DOLE), the DILG and the DTI, shall ensure the proper and adequate information dissemination of the contents and benefits of this Act to the general public especially to its intended beneficiaries specifically in the barangay level.</Paragraph>
          </div>
          {/*  */}
          <Heading5 className='text-center mt-20'>PENALTY</Heading5>
          <div className='space-y-10 mt-10'>
            <Paragraph><b>Section 13. </b>Penalty – Any person who shall willfully violates any provision of this Act or who shall in any manner commit any act to defeat any provisions of this Act shall, upon conviction, be punished by a fine of not less than twenty-five Thousand Pesos (P25,000.00) but not more than Fifty Thousand Pesos (P50,000.00) and suffer imprisonment of not less than six (6) months but not more than two (2) years.<br/><br/>

            In case of non-compliance with the provisions of Section 9 of this Act, the BSP shall impose administrative sanctions and other penalties on the concerned government financial institutions, including a fine of not less than Five Hundred Thousand Pesos (P500,000.00).</Paragraph>
          </div>
          {/*  */}
          <Heading5 className='text-center mt-20'>MISCELLANEOUS PROVISIONS</Heading5>
          <div className='space-y-10 mt-10'>
            <Paragraph><b>Section 14. </b>Annual Report – The DILG, DTI, and BSP shall submit an annual report to the Congress on the status of the implementation of this Act.</Paragraph>
            <Paragraph><b>Section 15. </b>Implementing Rules and Regulations – The Secretary of the Department of Trade and Industry, in consultation with the Secretaries of the DILG, DOF, and the BSP Governor shall formulate the necessary ruled and regulations to implement the provisions of this Act within ninety (90) days after its approval. The rules and regulations issued pursuant to this section shall take effect fifteen (15) days after its publication in a newspaper of general circulation.</Paragraph>
            <Paragraph><b>Section 16. </b>Separably Clause – If any provision or part hereof, is held invalid or unconstitutional, the remainder of the law or the provision not otherwise affected shall remain valid and subsisting.</Paragraph>
            <Paragraph><b>Section 17. </b>Repealing Clause – Existing laws, presidential decrees, executive orders, proclamations or administrative regulations that are inconsistent with the provisions of this Act are hereby amended, modified, superseded or repealed accordingly.</Paragraph>
            <Paragraph><b>Section 18. </b>Effectivity – This Act shall take effect fifteen (15) days after its publication in the Office Gazette or in at least two (2) newspaper of general circulation.</Paragraph>
          </div>
          <Paragraph className='mt-20 ml-20'>Approved,</Paragraph>
          <div className='flex flex-row'>
            <div className='border border-r-0 w-full p-2'>
              <Paragraph className='text-center'><b>FRANKLIN DRILON</b><br/>
              President of the Senate</Paragraph>
            </div>
            <div className='border w-full p-2'>
              <Paragraph className='text-center'><b>JOSE DE VENECIA JR.</b><br/>
              Speaker of the House of Representatives</Paragraph></div>
          </div>
          <Paragraph className='mt-10'>This Act, which is a consolidation of Senate Bill No. 1855 and House Bill No. 4871 was finally passed by the Senate and the House of Representatives on October 24, 2002 and October 23, 2002, respectively.</Paragraph>
          <div className='flex flex-row'>
            <div className='border border-r-0 w-full p-2'>
              <Paragraph className='text-center'><b>OSCAR G. YABES</b><br/>
              Secretary of Senate</Paragraph>
            </div>
            <div className='border w-full p-2'>
              <Paragraph className='text-center'><b>ROBERTO P. NAZARENO</b><br/>
              Secretary General<br/>
              House of Represenatives</Paragraph></div>
          </div>
          <Paragraph className='mt-10 ml-20'>Approved: November 13, 2002</Paragraph>
          <Paragraph className='text-center'><b>GLORIA MACAPAGAL-ARROYO</b><br/>
          President of the Philippines</Paragraph>
          <Paragraph className='mt-20 font-medium'><RoseAnchor className='text-rose-700 hover:text-rose-500' href_url='https://pcw.gov.ph/assets/files/2019/04/RA_9178_Barangay-Micro-Business-Enterprises-Act-of-2002.pdf'>Download RA 9178 Micro Business-Enterprise Act of 2002</RoseAnchor></Paragraph>
          <Paragraph className='font-light text-center'>Source: <RoseAnchor className='text-rose-700 hover:text-rose-500' href_url='https://pcw.gov.ph/republic-act-9178-barangay-micro-business-enterprises-act-of-2002/'>https://pcw.gov.ph/republic-act-9178-barangay-micro-business-enterprises-act-of-2002/</RoseAnchor></Paragraph>
        </div>
      </section>
    </>
  )
}