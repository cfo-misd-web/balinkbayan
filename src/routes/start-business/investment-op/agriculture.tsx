import { createFileRoute } from '@tanstack/react-router'
import { Separator } from '@radix-ui/react-separator'
import Paragraph from '@/components/user/shared/paragraph'
import BiggerBanner from '@/components/user/shared/banner/bigger-banner'
import SmallerBanner from '@/components/user/shared/banner/smaller-banner'
import Heading4 from '@/components/user/shared/headings/heading-4'
import Heading5 from '@/components/user/shared/headings/heading-5'

export const Route = createFileRoute(
  '/start-business/investment-op/agriculture',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
  <>
    <BiggerBanner text='Business Opportunities in the PH' label='Agriculture' img_url='/img-assets/start-a-business/Agriculture/intro-header.jpg'/>
    <section className='text-cyan-900'>
      <div className='max-lg:mx-4 3xl:max-w-[1400px] 2xl:max-w-[1280px] lg:max-w-[1080px] flex flex-col items-center justify-center mx-auto py-5 bg-light'>
      <Paragraph><br/>Maximizing the potential of our country’s vast natural resources through financial and skills investments creates a more productive space for our local farmers and fisherfolk in one of the most essential industries for nation-building: agriculture.<br/><br/>

      The Philippines, inevitably agricultural in nature, caters to produce-related profitable opportunities considering the bountiful natural resources present across our vast fertile lands. The continuous development of the sector led to the production of our ever-growing agricultural commodities, which proudly showcase “tatak-Pinoy” products.<br/><br/>

      At present, agriculture is not only limited to food, but has also largely developed into creating new innovations in medicine, cosmetics, textiles, and even renewable energy sources. Ranking as the third major sector in 2022, there is no doubt the country’s agricultural condition continues to dominate the economic industry. With this, investors can freely choose potential agricultural activities where they think they can contribute—farming, crop production, poultry and livestock, food processing/manufacturing, and endless possibilities of agricultural opportunities.</Paragraph>

      </div>
      <div className='bg-cyan-900 w-full flex items-center flex-col justify-center py-5'>
        <div className='flex flex-row space-x-5'>
          <img className='w-[472px]' src='/img-assets/start-a-business/Agriculture/why-invest-1.png'/>
          <img className='w-[450px]' src='/img-assets/start-a-business/Agriculture/why-invest-2.png'/>
        </div>
          
        <div className='text-white flex justify-center max-lg:mx-4 3xl:max-w-[1400px] 2xl:max-w-[1280px] lg:max-w-[1080px] flex-col items-center mx-auto py-5 bg-light'>
          <h4 className='font-bold text-3xl mt-10'>WHY INVEST?</h4>
          <Separator className='w-32 h-[2px] bg-white my-5' />
          <Paragraph>Agriculture means everything to people, especially to Filipinos. Without this, no one can ever live—basically making it the most vital sector within our industries, even outside of our country from our exports. Agricultural investments encourage high contributions to overall development and sustenance, given their inevitable role in everyday life. With an abundance of natural resources distinct in the tropics, the Philippine agricultural sector proves to be one of the competitive exporters of fruit and edible oil, accounting for $1.956 billion and $2.2 billion, respectively. Furthermore, the different areas of the agricultural sector contributed a 25% increase in local employment as of 2023.</Paragraph>
        </div>
      </div>
      <div className='flex items-center flex-col justify-center py-5'>
        <div className='flex flex-row space-x-20'>
          <img className='w-[472px]' src='/img-assets/start-a-business/Agriculture/potential-industries-1.png'/>
          <img className='w-[450px]' src='/img-assets/start-a-business/Agriculture/potential-industries-2.png'/>
        </div>
          
        <div className='justify-center max-lg:mx-4 3xl:max-w-[1400px] 2xl:max-w-[1280px] lg:max-w-[1080px] flex flex-col mx-auto py-10 bg-light'>
          <Heading4>Potential Industries</Heading4>
          <Separator className='w-32 h-[2px] bg-cyan-900 my-5' />
          <Paragraph>The country’s rich terrestrial and aquatic zones offer longevity of investment, given their unending cultivation and consumption—rooted in the daily need for sustenance—in the local market. Hence, the agricultural sector would be a great option for anyone, especially overseas Filipinos and their families, who aspire to invest in practicality-driven opportunities from our very own lands.<br/><br/>

          Informative videos about agricultural investing can be found at the Department of Agriculture’s official YouTube channel: <a className='underline' href='https://www.youtube.com/@daagribusiness-amas/videos'>https://www.youtube.com/@daagribusiness-amas/videos</a></Paragraph>
        </div>
      </div>
      <div className='bg-cyan-900 w-full pt-32 pb-10 text-white'>
        <div className='max-lg:mx-4 3xl:max-w-[1400px] 2xl:max-w-[1280px] lg:max-w-[1080px] flex flex-col mx-auto bg-light'>
          <Heading4>Benefits, Challenges, Opportunities</Heading4>
          <Separator className='w-32 h-[2px] bg-white my-5' />
          <Paragraph className='text-white'>Agriculture means everything to people, especially to Filipinos. Without this, no one can ever live—basically making it the most vital sector within our industries, even outside of our country from our exports. Agricultural investments encourage high contributions to overall development and sustenance, given their inevitable role in everyday life. With an abundance of natural resources distinct in the tropics, the Philippine agricultural sector proves to be one of the competitive exporters of fruit and edible oil, accounting for $1.956 billion and $2.2 billion, respectively. Furthermore, the different areas of the agricultural sector contributed a 25% increase in local employment as of 2023.</Paragraph>
        </div>
      </div>
      {/*  */}
      <div className='text-white'>
        <SmallerBanner label='A' img_url='/img-assets/start-a-business/Agriculture/benefits/active-government.jpg'/>
        <div className='bg-teal-500 w-full py-5'>
          <div className=' max-lg:mx-4 3xl:max-w-[1400px] 2xl:max-w-[1280px] lg:max-w-[1080px] flex flex-col mx-auto bg-light'>
            <Heading4>ACTIVE GOVERNMENT SUPPORT AND INTERVENTION</Heading4>
            <Paragraph className='mt-5'>In line with the national response to both local and international demands, agriculture is one of the few national industries with the largest endowment of funds for productivity, alongside active research and the provision of incentives and supplies for local farmers and producers.</Paragraph>
          </div>
        </div>
        <SmallerBanner label='G' img_url='/img-assets/start-a-business/Agriculture/benefits/growing-traction-and-support.jpg'/>
        <div className='bg-teal-500 w-full py-5'>
          <div className=' max-lg:mx-4 3xl:max-w-[1400px] 2xl:max-w-[1280px] lg:max-w-[1080px] flex flex-col mx-auto bg-light'>
            <Heading4>GROWING TRACTION AND SUPPORT OF AGRICULTURAL LABOR AND HUMAN RESOURCE</Heading4>
            <Paragraph className='mt-5'>The Philippines has a large chunk of readily available labor for agricultural activities, particularly in rural areas. As of 2023, there exists a total of 25% of Filipino workers being involved in the agricultural industry–which continues to grow faster by 1.2%.</Paragraph>
          </div>
        </div>
        <SmallerBanner label='R' img_url='/img-assets/start-a-business/Agriculture/benefits/rich-fertile-land.jpg'/>
        <div className='bg-teal-500 w-full py-5'>
          <div className=' max-lg:mx-4 3xl:max-w-[1400px] 2xl:max-w-[1280px] lg:max-w-[1080px] flex flex-col mx-auto bg-light'>
            <Heading4>RICH, FERTILE, AND EXPANSIVE AGRICULTURAL LANDS</Heading4>
            <Paragraph className='mt-5'>As an archipelagic country, the Philippines is richly built with both terrestrial and aquatic zones–offering a wide array of natural resources for cultivation and consumption.</Paragraph>
          </div>
        </div>
        <SmallerBanner label='I' img_url='/img-assets/start-a-business/Agriculture/benefits/in-demand-and-consistent-necessity.jpg'/>
        <div className='bg-teal-500 w-full py-5'>
          <div className=' max-lg:mx-4 3xl:max-w-[1400px] 2xl:max-w-[1280px] lg:max-w-[1080px] flex flex-col mx-auto bg-light'>
            <Heading4>IN-DEMAND AND CONSISTENT NECESSITY FOR AGRICULTURAL GOODS </Heading4>
            <Paragraph className='mt-5'>The agricultural sector will always be needed as it is a means of public sustenance and development. Products and services, whether locally consumed or exported, are all dependent on raw materials from agriculture.</Paragraph>
          </div>
        </div>
        <SmallerBanner label='C' img_url='/img-assets/start-a-business/Agriculture/benefits/climate-change.jpg'/>
        <div className='bg-rose-500 w-full py-5'>
          <div className=' max-lg:mx-4 3xl:max-w-[1400px] 2xl:max-w-[1280px] lg:max-w-[1080px] flex flex-col mx-auto bg-light'>
            <Heading4>CLIMATE CHANGE AND THE UNCONTROLLABLE</Heading4>
            <Paragraph className='mt-5'>Floods, typhoons, and even droughts are major critical and inevitable problems of the agricultural industry.</Paragraph>
          </div>
        </div>
        <SmallerBanner label='U' img_url='/img-assets/start-a-business/Agriculture/benefits/urbanization.avif'/>
        <div className='bg-rose-500 w-full py-5'>
          <div className=' max-lg:mx-4 3xl:max-w-[1400px] 2xl:max-w-[1280px] lg:max-w-[1080px] flex flex-col mx-auto bg-light'>
            <Heading4>URBANIZATION AND INFRASTRUCTURAL DEVELOPMENTS AND NECESSITY FOR AGRICULTURAL GOODS</Heading4>
            <Paragraph className='mt-5'>The rapid growth of urbanization within the Philippines minimizes agricultural land capacity, leading to food supply shortages and the frequent importation of basic necessities.</Paragraph>
          </div>
        </div>
        <SmallerBanner label='L' img_url='/img-assets/start-a-business/Agriculture/benefits/low-technological-support.jpg'/>
        <div className='bg-rose-500 w-full py-5'>
          <div className=' max-lg:mx-4 3xl:max-w-[1400px] 2xl:max-w-[1280px] lg:max-w-[1080px] flex flex-col mx-auto bg-light'>
            <Heading4>LOW TECHNOLOGICAL SUPPORT</Heading4>
            <Paragraph className='mt-5'>The Philippines remains less competitive in agricultural technology than other countries. Lesser productivity results because agricultural manpower is not supplemented enough by technological innovations that could improve performance.</Paragraph>
          </div>
        </div>
      </div>
      <SmallerBanner label='T' img_url='/img-assets/start-a-business/Agriculture/benefits/technological-and-machinery-adv.jpg'/>
      <div className='bg-yellow-200 w-full py-5'>
        <div className=' max-lg:mx-4 3xl:max-w-[1400px] 2xl:max-w-[1280px] lg:max-w-[1080px] flex flex-col mx-auto bg-light'>
          <Heading4>TECHNOLOGICAL AND MACHINERY ADVANCEMENTS</Heading4>
          <Paragraph className='mt-5'>The creation of the National Agricultural and Fisheries Modernization and Industrialization Plan (NAFMIP) 2021-2030 of the DA aims to advance and modernize the agriculture industry through holistic agri-food systems and raising the compensation and benefits of fishermen and fisherfolk in the country.</Paragraph>
        </div>
      </div>
      <SmallerBanner label='U' img_url='/img-assets/start-a-business/Agriculture/benefits/upstreaming-agriculture.jpg'/>
      <div className='bg-yellow-200 w-full py-5'>
        <div className=' max-lg:mx-4 3xl:max-w-[1400px] 2xl:max-w-[1280px] lg:max-w-[1080px] flex flex-col mx-auto bg-light'>
          <Heading4>UPSTREAMING AGRICULTURE AND BUSINESS (AGRIBUSINESS)</Heading4>
          <Paragraph className='mt-5'>The Philippine Development Plan of 2023 (PDP 2023) envisions promoting production efficiency through the adoption of technical advancements and integrating modern ways of farming into production and market supply.</Paragraph>
        </div>
      </div>
      <SmallerBanner label='R' img_url='/img-assets/start-a-business/Agriculture/benefits/rural-infra.png'/>
      <div className='bg-yellow-200 w-full py-5'>
        <div className=' max-lg:mx-4 3xl:max-w-[1400px] 2xl:max-w-[1280px] lg:max-w-[1080px] flex flex-col mx-auto bg-light'>
          <Heading4>RURAL INFRASTRUCTURE INVESTMENTS</Heading4>
          <Paragraph className='mt-5'>Revitalizing rural areas through infrastructure developments will create more opportunities for Filipinos to harness the agricultural industry. The DA, with the help of other government agencies, will pioneer bridging opportunities for rural communities in the country through Science and Technology (S&T) offices, private sector engagements, and agribusiness venture agreements.</Paragraph>
        </div>
      </div>
      <SmallerBanner label='E' img_url='/img-assets/start-a-business/Agriculture/benefits/educational-and-academic.jpg'/>
      <div className='bg-yellow-200 w-full py-5'>
        <div className='max-lg:mx-4 3xl:max-w-[1400px] 2xl:max-w-[1280px] lg:max-w-[1080px] flex flex-col mx-auto bg-light'>
          <Heading4>EDUCATION AND ACADEMIC INTERVENTIONS</Heading4>
          <Paragraph className='mt-5'>The Philippine government targets improving training capacities and education services for the needs of small farmers and fisherfolks, improving and reforming education curriculum in agri-fishing schools, and highlighting the essence of modern innovations in local farming and fishing technologies.</Paragraph>
        </div>
      </div>
      {/*  */}
      <div className='mt-20 mb-40 max-lg:mx-4 3xl:max-w-[1400px] 2xl:max-w-[1280px] lg:max-w-[1080px] mx-auto bg-light'>
          <Heading4>Government & Non-Government Support Channels</Heading4>
          <Separator className='w-32 h-[2px] bg-cyan-900 my-5' />
          <div className='flex flex-row items-center space-x-20'>
            <img className='max-h-[190px]' src='/img-assets/start-a-business/Agriculture/logo/dost-logo.png'/>
            <div className='flex flex-col'>
              <Heading5>Department of Science and Technology-Philippine Council for Agriculture, Aquatic, and Natural Resources Research and Development (DOST-PCAARRD)</Heading5>
              <Paragraph className='mt-5'>The DOST-PCAARRD publishes investment guides that encourage overseas Filipinos (OFs) and local entrepreneurs to invest in agriculture. The DOST-PCAARRD e-library provides these resources for the general public's consumption.<br/>
              
              <span className='ml-8'>&#8226; You may visit their website to access their resources: <a href='https://elibrary.pcaarrd.dost.gov.ph/home' className='underline'>https://elibrary.pcaarrd.dost.gov.ph/home</a></span></Paragraph>
            </div>
          </div>
          <Separator className='mx-[10vw] h-[5px] bg-teal-500 my-20'/>
          <div className='flex flex-row items-center space-x-20'>
            <div className='flex flex-col'>
              <Heading5>Department of Agriculture (DA)</Heading5>
              <Paragraph className='mt-5'>The DA has partnered with the Department of Migrant Workers (DMW) to provide agri-loans, market linkages, and agribusiness training to OFWs. Numerous Philippine embassies abroad also conduct annual agricultural investment forums to promote agribusiness to OFs.<br/>

              <span className='ml-8'>&#8226; You may visit their website for more information: <a href='https://www.da.gov.ph/services/agricultural-credit-and-financing-programs/' className='underline'>https://www.da.gov.ph/services/agricultural-credit-and-financing-programs/</a></span><br/><br/>
              
              Both the Agribusiness and Marketing Assistance Service (AMAS) and Agribusiness Promotion Division (APD) of the Department of Agriculture provide timely and accurate market information that guides agribusiness stakeholders to encourage them in agribusiness investments.<br/>

              <span className='ml-8'>&#8226; You may refer to their YouTube channel for reference: <a href='https://www.youtube.com/@daagribusiness-amas/videos' className='underline'>https://www.youtube.com/@daagribusiness-amas/videos</a></span></Paragraph>
            </div>
            <img className='max-h-[190px]' src='/img-assets/start-a-business/Agriculture/logo/da-logo.png'/>
          </div>
          <Separator className='mx-[10vw] h-[5px] bg-rose-500 my-20'/>
          <div className='flex flex-row items-center space-x-20'>
            <img className='max-h-[190px]' src='/img-assets/start-a-business/Agriculture/logo/landbank-logo.png'/>
            <div className='flex flex-col'>
              <Heading5>Land Bank of the Philippines (LandBank)</Heading5>
              <Paragraph className='mt-5'>Land Bank provides banking programs for overseas Filipinos, specifically the Overseas Filipino Bank and the Land Bank GoBayani.<br/><br/>

              You may check their website to know more:<br/>
              <span className='ml-8'>&#8226; <a href='https://www.landbank.com/about-us/foundation-and-subsidiaries/overseas-filipino-bank' className='underline'>https://www.landbank.com/about-us/foundation-and-subsidiaries/overseas-filipino-bank</a></span><br/>
              <span className='ml-8'>&#8226; <a href='https://www.landbank.com/news/landbank-launches-gobayani-digital-deposit-account-for-ofws\' className='underline'>https://www.landbank.com/news/landbank-launches-gobayani-digital-deposit-account-for-ofws\</a></span></Paragraph>
            </div>
          </div>
          <Separator className='mx-[10vw] h-[5px] bg-yellow-200 my-20'/>
          <div className='flex flex-row items-center space-x-20'>
            <div className='flex flex-col'>
              <Heading5>Development Bank of the Philippines (DBP)</Heading5>
              <Paragraph className='mt-5'>Together with Land Bank of the Philippines, the DBP provides Enterprise Development Interventions for OFWs and their families in training them on business essentials. They also offer reintegration programs where flexible credit assistance may help Overseas Filipinos build their own businesses.<br/><br/>

              You may visit the following links for more information:<br/>
              <span className='ml-8'>&#8226; <a href='https://www.dbp.ph/developmental-banking/micro-small-and-medium-enterprises/sustainable-agribusiness-financing-program-safp/' className='underline'>https://www.dbp.ph/developmental-banking/micro-small-and-medium-enterprises/sustainable-agribusiness-financing-program-safp/</a></span><br/>
              <span className='ml-8'>&#8226; <a href='https://www.dbp.ph/personal-banking/remittance-products-and-services/products-and-services/' className='underline'>https://www.dbp.ph/personal-banking/remittance-products-and-services/products-and-services/</a></span></Paragraph>
            </div>
            <img className='max-h-[190px]' src='/img-assets/start-a-business/Agriculture/logo/dbp-logo.png'/>
          </div>
          <Separator className='mx-[10vw] h-[5px] bg-teal-500 my-20'/>
          <div className='flex flex-row items-center space-x-20'>
            <img className='max-h-[190px]' src='/img-assets/start-a-business/Agriculture/logo/cda-logo.png'/>
            <div className='flex flex-col'>
              <Heading5>Various Cooperatives for Overseas Filipinos</Heading5>
              <Paragraph className='mt-5'>There are many cooperatives in the Philippines that cater to the financial needs of OFs. You may check the BaLinkBayan’s dedicated page for the Cooperative Development Authority (CDA) here: <a href='https://balinkbayan.gov.ph/cooperative-development-authority-cda-2/' className='underline'>https://balinkbayan.gov.ph/cooperative-development-authority-cda-2/</a><br/><br/>

              A complete list of CDA-accredited cooperatives (except for those in the BARMM) can be found at:<br/>
              <a href='https://cda.gov.ph/wp-content/uploads/2023/01/2021-List-of-Cooperatives.pdf'>https://cda.gov.ph/wp-content/uploads/2023/01/2021-List-of-Cooperatives.pdf</a></Paragraph>
            </div>
          </div>
          <Separator className='mx-[10vw] h-[5px] bg-rose-500 my-20'/>
          <div className='flex flex-row items-center space-x-20'>
            <div className='flex flex-col'>
              <Heading5>International Rice Research Institute (IRRI)</Heading5>
              <Paragraph className='mt-5'>As a leading international organization for specialized rice research based in the Philippines, the International Rice Research Institute offers various training and educational programs—from micromodules (free access) to short courses—for those aspiring to invest in the agricultural sector, especially with a focus on producing rice.<br/><br/>

              You may visit the following links to learn more:<br/>
              <span className='ml-8'>&#8226; <a href='https://www.irri.org/our-solutions/irri-education' className='underline'>https://www.irri.org/our-solutions/irri-education</a></span><br/>
              <span className='ml-8'>&#8226; <a href='https://openlearning.cgiar.org/' className='underline'>https://openlearning.cgiar.org/</a></span></Paragraph>
            </div>
            <img className='max-h-[190px]' src='/img-assets/start-a-business/Agriculture/logo/irri-logo.jpg'/>
          </div>
      </div>
      {/*  */}
      <div className='bg-cyan-900 w-full py-5'>
        <div className='text-white max-lg:mx-4 3xl:max-w-[1400px] 2xl:max-w-[1280px] lg:max-w-[1080px] flex-col items-center mx-auto py-5 bg-light'>
          <h4 className='font-bold text-3xl mt-10'>How to Invest in Agriculture</h4>
          <Separator className='w-32 h-[2px] bg-white my-5'/>
        </div>
      </div>
      <div className='text-white'>
        <SmallerBanner  textClass='text-4xl mb-10' label='CREATE A PLAN' img_url='/img-assets/start-a-business/Agriculture/invest/create-a-plan.jpg'/>
        <div className='bg-teal-500 w-full py-5'>
          <div className=' max-lg:mx-4 3xl:max-w-[1400px] 2xl:max-w-[1280px] lg:max-w-[1080px] flex justify-center mx-auto bg-light'>
            <Heading5 className='font-normal'>In order to succeed, you need to answer the questions:<br/>
            <span className='ml-8'>&#8226; why are you investing</span><br/>
            <span className='ml-8'>&#8226; where do you want to invest in the agricultural field</span><br/>
            <span className='ml-8'>&#8226; how much are you willing to invest</span><br/>
            <span className='ml-8'>&#8226; how do you envision your investment/s in the future</span></Heading5>
          </div>
        </div>
        <SmallerBanner  textClass='text-4xl mb-10' label='SEEK FINANCIAL AID PROGRAMS' img_url='/img-assets/start-a-business/Agriculture/invest/seek-financial-aid-programs.jpg'/>
        <div className='bg-rose-500 w-full py-5'>
          <div className=' max-lg:mx-4 3xl:max-w-[1400px] 2xl:max-w-[1280px] lg:max-w-[1080px] flex justify-center mx-auto bg-light'>
            <Heading5 className='font-normal max-w-[60vw] text-justify'>Study financial loaning programs which cater to overseas Filipinos (OFs), and decide whether to enroll.</Heading5>
          </div>
        </div>
        <SmallerBanner  textClass='text-4xl mb-10' label='STUDY' img_url='/img-assets/start-a-business/Agriculture/invest/study.jpg'/>
        <div className='bg-yellow-200 text-cyan-900 w-full py-5'>
          <div className=' max-lg:mx-4 3xl:max-w-[1400px] 2xl:max-w-[1280px] lg:max-w-[1080px] flex justify-center mx-auto bg-light'>
            <Heading5 className='font-normal max-w-[60vw] text-justify'>Research farming and agricultural know-how to equip yourself with the knowledge and skills needed to be familiarized with the field.</Heading5>
          </div>
        </div>
        <SmallerBanner textClass='text-4xl mb-10' label='CHECK AGRIBUSINESS FORUMS' img_url='/img-assets/start-a-business/Agriculture/invest/check-agribusiness-forums.jpg'/>
        <div className='bg-teal-500 w-full py-5'>
          <div className=' max-lg:mx-4 3xl:max-w-[1400px] 2xl:max-w-[1280px] lg:max-w-[1080px] flex justify-center mx-auto bg-light'>
            <Heading5 className='font-normal max-w-[60vw] text-justify'>This will greatly help you navigate your interests and establish a linkage among sectors within agriculture. This may be available online or onsite.</Heading5>
          </div>
        </div>
        <SmallerBanner textClass='text-4xl mb-10' label='CONNECT WITH TARGET INVESTORS' img_url='/img-assets/start-a-business/Agriculture/invest/connect-with-investors.jpg'/>
        <div className='bg-rose-500 w-full py-5'>
          <div className=' max-lg:mx-4 3xl:max-w-[1400px] 2xl:max-w-[1280px] lg:max-w-[1080px] flex justify-center mx-auto bg-light'>
            <Heading5 className='font-normal max-w-[60vw] text-justify'>It is important to establish rapport with and know your target investors.</Heading5>
          </div>
        </div>
        <SmallerBanner textClass='text-4xl mb-10' label='SUPPORT FILIPINO AGRICULTURE' img_url='/img-assets/start-a-business/Agriculture/invest/support-filipino-agri.jpg'/>
        <div className='bg-yellow-200 text-cyan-900 w-full py-5'>
          <div className=' max-lg:mx-4 3xl:max-w-[1400px] 2xl:max-w-[1280px] lg:max-w-[1080px] flex justify-center mx-auto bg-light'>
            <Heading5 className='font-normal max-w-[60vw] text-justify'>It is essential to support local farmers and fisherfolks in uplifting our agricultural industry towards technological progression and production development. Investing in agriculture will help our local industries create opportunities that will transcend our economy. </Heading5>
          </div>
        </div>
      </div>
      {/*  */}
      <div className='bg-cyan-900 w-full py-5'>
        <div className='bg-white mt-20 py-10 w-full'>
          <div className='max-lg:mx-4 3xl:max-w-[1400px] 2xl:max-w-[1280px] lg:max-w-[1080px] mx-auto bg-light'>
            <Heading4>Information & Photo Sources</Heading4>
            <Separator className='w-32 h-[2px] bg-cyan-900 my-5'/>
            <Paragraph>Espenilla Jr, Nestor A: “Why the Philippines” Speech | Department of Agriculture (2024) | Department of Budget and Management (2023) | Philippines Institute for Development Studies (2021) | Philippine Development Plan (2023) | National Economic Development Authority (2023) | Workforce Agriculture, Philippine Statistics Authority (2024) | Unsplash</Paragraph>
          </div>
        </div>
        <div className='text-white max-lg:mx-4 3xl:max-w-[1400px] 2xl:max-w-[1280px] lg:max-w-[1080px] mx-auto bg-light flex flex-col text-center my-10'>
          <Separator className='mx-[10vw] h-[5px] bg-rose-500 mb-5'/>
          <Heading5>Commission on Filipinos Overseas</Heading5>
          <Paragraph className='text-center'>All Rights Reserved 2025</Paragraph>
        </div>
      </div>
    </section>
  </>
)
}
