import { createFileRoute } from '@tanstack/react-router'
import { Separator } from '@radix-ui/react-separator'
import Paragraph from '@/components/user/shared/paragraph'
import BiggerBanner from '@/components/user/shared/banner/bigger-banner'
import SmallerBanner from '@/components/user/shared/banner/smaller-banner'

export const Route = createFileRoute(
  '/start-business/investment-op/agriculture',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
  // <div>Hello "/start-business/investment-op/agriculture"!</div>
  <>
    <BiggerBanner text='Business Opportunities in the PH' label='Agriculture' img_url='/img-assets/start-a-business/Agriculture/Intro_Header.jpg'/>
    <section>
      <div className='max-lg:mx-4 lg:w-[1400px] flex flex-col items-center justify-center mx-auto py-5 bg-light'>
      <Paragraph><br/>Maximizing the potential of our country’s vast natural resources through financial and skills investments creates a more productive space for our local farmers and fisherfolk in one of the most essential industries for nation-building: agriculture.<br/><br/>

      The Philippines, inevitably agricultural in nature, caters to produce-related profitable opportunities considering the bountiful natural resources present across our vast fertile lands. The continuous development of the sector led to the production of our ever-growing agricultural commodities, which proudly showcase “tatak-Pinoy” products.<br/><br/>

      At present, agriculture is not only limited to food, but has also largely developed into creating new innovations in medicine, cosmetics, textiles, and even renewable energy sources. Ranking as the third major sector in 2022, there is no doubt the country’s agricultural condition continues to dominate the economic industry. With this, investors can freely choose potential agricultural activities where they think they can contribute—farming, crop production, poultry and livestock, food processing/manufacturing, and endless possibilities of agricultural opportunities.</Paragraph>

      </div>
      <div className='bg-cyan-900 w-full flex items-center flex-col justify-center py-5 '>
        <div className='flex flex-row space-x-5'>
          <img className='w-[472px]' src='/img-assets/start-a-business/Agriculture/Why Invest 1.png'/>
          <img className='w-[450px]' src='/img-assets/start-a-business/Agriculture/Why Invest 2.png'/>
        </div>
          
        <div className='text-white flex justify-center max-lg:mx-4 lg:w-[1400px] flex-col items-center mx-auto py-5 bg-light'>
          <h4 className='font-bold text-3xl mt-10'>Potential Industries</h4>
          <Separator className='w-32 h-[2px] bg-white my-5' />
          <Paragraph className='text-white'>Agriculture means everything to people, especially to Filipinos. Without this, no one can ever live—basically making it the most vital sector within our industries, even outside of our country from our exports. Agricultural investments encourage high contributions to overall development and sustenance, given their inevitable role in everyday life. With an abundance of natural resources distinct in the tropics, the Philippine agricultural sector proves to be one of the competitive exporters of fruit and edible oil, accounting for $1.956 billion and $2.2 billion, respectively. Furthermore, the different areas of the agricultural sector contributed a 25% increase in local employment as of 2023.</Paragraph>
        </div>
      </div>
      <div className='flex items-center flex-col justify-center py-5'>
        <div className='flex flex-row space-x-20'>
          <img className='w-[472px]' src='/img-assets/start-a-business/Agriculture/Potential Industries 1.png'/>
          <img className='w-[450px]' src='/img-assets/start-a-business/Agriculture/Potential Industries 2.png'/>
        </div>
          
        <div className='text-cyan-900 justify-center max-lg:mx-4 lg:w-[1400px] flex flex-col mx-auto py-5 bg-light'>
          <h4 className='font-bold text-3xl mt-10'>WHY INVEST?</h4>
          <Separator className='w-32 h-[2px] bg-cyan-900 my-5' />
          <Paragraph>The country’s rich terrestrial and aquatic zones offer longevity of investment, given their unending cultivation and consumption—rooted in the daily need for sustenance—in the local market. Hence, the agricultural sector would be a great option for anyone, especially overseas Filipinos and their families, who aspire to invest in practicality-driven opportunities from our very own lands.<br/><br/>

          Informative videos about agricultural investing can be found at the Department of Agriculture’s official YouTube channel: <a href='https://www.youtube.com/@daagribusiness-amas/videos'>https://www.youtube.com/@daagribusiness-amas/videos</a></Paragraph>
        </div>
      </div>

      <div className='bg-cyan-900 w-full py-5 '>
        <div className='text-white max-lg:mx-4 lg:w-[1400px] flex flex-col mx-auto py-5 bg-light'>
          <h4 className='font-bold text-3xl mt-10'>Benefits, Challenges, Opportunities</h4>
          <Separator className='w-32 h-[2px] bg-white my-5' />
          <Paragraph className='text-white'>Agriculture means everything to people, especially to Filipinos. Without this, no one can ever live—basically making it the most vital sector within our industries, even outside of our country from our exports. Agricultural investments encourage high contributions to overall development and sustenance, given their inevitable role in everyday life. With an abundance of natural resources distinct in the tropics, the Philippine agricultural sector proves to be one of the competitive exporters of fruit and edible oil, accounting for $1.956 billion and $2.2 billion, respectively. Furthermore, the different areas of the agricultural sector contributed a 25% increase in local employment as of 2023.</Paragraph>
        </div>
      </div>
      <SmallerBanner className='h-[150px]' label='A' img_url='/img-assets/start-a-business/Agriculture/benefits/Active-Government.jpg'/>
      <div className='bg-teal-500 w-full'>
        <div className='text-white max-lg:mx-4 lg:w-[1400px] flex flex-col mx-auto bg-light'>
          <h4 className='font-bold text-xl mt-10'>ACTIVE GOVERNMENT SUPPORT AND INTERVENTION</h4>
          <Paragraph className='text-white h-0'>In line with the national response to both local and international demands, agriculture is one of the few national industries with the largest endowment of funds for productivity, alongside active research and the provision of incentives and supplies for local farmers and producers.</Paragraph>
        </div>
      </div>
      <SmallerBanner className='h-[150px]' label='G' img_url='/img-assets/start-a-business/Agriculture/benefits/Active-Government.jpg'/>
      <div className='bg-teal-500 w-full'>
        <div className='text-white max-lg:mx-4 lg:w-[1400px] flex flex-col mx-auto bg-light'>
          <h4 className='font-bold text-xl mt-10'>GROWING TRACTION AND SUPPORT OF AGRICULTURAL LABOR AND HUMAN RESOURCE</h4>
          <Paragraph className='text-white h-0'>The Philippines has a large chunk of readily available labor for agricultural activities, particularly in rural areas. As of 2023, there exists a total of 25% of Filipino workers being involved in the agricultural industry–which continues to grow faster by 1.2%.</Paragraph>
        </div>
      </div>
      <SmallerBanner className='h-[150px]' label='R' img_url='/img-assets/start-a-business/Agriculture/benefits/Active Government.jpg'/>
      <div className='bg-teal-500 w-full'>
        <div className='text-white max-lg:mx-4 lg:w-[1400px] flex flex-col mx-auto bg-light'>
          <h4 className='font-bold text-xl mt-10'>RICH, FERTILE, AND EXPANSIVE AGRICULTURAL LANDS</h4>
          <Paragraph className='text-white h-0'>As an archipelagic country, the Philippines is richly built with both terrestrial and aquatic zones–offering a wide array of natural resources for cultivation and consumption.</Paragraph>
        </div>
      </div>
      <SmallerBanner className='h-[150px]' label='I' img_url='/img-assets/start-a-business/Agriculture/benefits/Active Government.jpg'/>
      <div className='bg-teal-500 w-full'>
        <div className='text-white max-lg:mx-4 lg:w-[1400px] flex flex-col mx-auto bg-light'>
          <h4 className='font-bold text-xl mt-10'>IN-DEMAND AND CONSISTENT NECESSITY FOR AGRICULTURAL GOODS </h4>
          <Paragraph className='text-white h-0'>The agricultural sector will always be needed as it is a means of public sustenance and development. Products and services, whether locally consumed or exported, are all dependent on raw materials from agriculture.</Paragraph>
        </div>
      </div>
      <SmallerBanner className='h-[150px]' label='C' img_url='/img-assets/start-a-business/Agriculture/benefits/Active Government.jpg'/>
      <div className='bg-rose-500 w-full'>
        <div className='text-white max-lg:mx-4 lg:w-[1400px] flex flex-col mx-auto bg-light'>
          <h4 className='font-bold text-xl mt-10'>CLIMATE CHANGE AND THE UNCONTROLLABLE</h4>
          <Paragraph className='text-white h-0'>Floods, typhoons, and even droughts are major critical and inevitable problems of the agricultural industry.</Paragraph>
        </div>
      </div>
      <SmallerBanner className='h-[150px]' label='U' img_url='/img-assets/start-a-business/Agriculture/benefits/Active Government.jpg'/>
      <div className='bg-rose-500 w-full'>
        <div className='text-white max-lg:mx-4 lg:w-[1400px] flex flex-col mx-auto bg-light'>
          <h4 className='font-bold text-xl mt-10'>URBANIZATION AND INFRASTRUCTURAL DEVELOPMENTSTENT NECESSITY FOR AGRICULTURAL GOODS </h4>
          <Paragraph className='text-white h-0'>The rapid growth of urbanization within the Philippines minimizes agricultural land capacity, leading to food supply shortages and the frequent importation of basic necessities.</Paragraph>
        </div>
      </div>
      <SmallerBanner className='h-[150px]' label='L' img_url='/img-assets/start-a-business/Agriculture/benefits/Active Government.jpg'/>
      <div className='bg-rose-500 w-full'>
        <div className='text-white max-lg:mx-4 lg:w-[1400px] flex flex-col mx-auto bg-light'>
          <h4 className='font-bold text-xl mt-10'>LOW TECHNOLOGICAL SUPPORT</h4>
          <Paragraph className='text-white h-0'>The Philippines remains less competitive in agricultural technology than other countries. Lesser productivity results because agricultural manpower is not supplemented enough by technological innovations that could improve performance.</Paragraph>
        </div>
      </div>
      <SmallerBanner className='h-[150px]' label='T' img_url='/img-assets/start-a-business/Agriculture/benefits/Active Government.jpg'/>
      <div className='bg-yellow-200 w-full'>
        <div className='text-white max-lg:mx-4 lg:w-[1400px] flex flex-col mx-auto bg-light'>
          <h4 className='font-bold text-xl mt-10'>TECHNOLOGICAL AND MACHINERY ADVANCEMENTS </h4>
          <Paragraph className='text-white h-0'>The creation of the National Agricultural and Fisheries Modernization and Industrialization Plan (NAFMIP) 2021-2030 of the DA aims to advance and modernize the agriculture industry through holistic agri-food systems and raising the compensation and benefits of fishermen and fisherfolk in the country.</Paragraph>
        </div>
      </div>
      <SmallerBanner className='h-[150px]' label='U' img_url='/img-assets/start-a-business/Agriculture/benefits/Active Government.jpg'/>
      <div className='bg-yellow-200 w-full'>
        <div className='text-white max-lg:mx-4 lg:w-[1400px] flex flex-col mx-auto bg-light'>
          <h4 className='font-bold text-xl mt-10'>UPSTREAMING AGRICULTURE AND BUSINESS (AGRIBUSINESS)</h4>
          <Paragraph className='text-white h-0'>The Philippine Development Plan of 2023 (PDP 2023) envisions promoting production efficiency through the adoption of technical advancements and integrating modern ways of farming into production and market supply.</Paragraph>
        </div>
      </div>
      <SmallerBanner className='h-[150px]' label='R' img_url='/img-assets/start-a-business/Agriculture/benefits/Active Government.jpg'/>
      <div className='bg-yellow-200 w-full'>
        <div className='text-white max-lg:mx-4 lg:w-[1400px] flex flex-col mx-auto bg-light'>
          <h4 className='font-bold text-xl mt-10'>RURAL INFRASTRUCTURE INVESTMENTS</h4>
          <Paragraph className='text-white h-0'>Revitalizing rural areas through infrastructure developments will create more opportunities for Filipinos to harness the agricultural industry. The DA, with the help of other government agencies, will pioneer bridging opportunities for rural communities in the country through Science and Technology (S&T) offices, private sector engagements, and agribusiness venture agreements.</Paragraph>
        </div>
      </div>
      <SmallerBanner className='h-[150px]' label='E' img_url='/img-assets/start-a-business/Agriculture/benefits/Active Government.jpg'/>
      <div className='bg-yellow-200 w-full'>
        <div className='text-white max-lg:mx-4 lg:w-[1400px] flex flex-col mx-auto bg-light'>
          <h4 className='font-bold text-xl mt-10'>EDUCATION AND ACADEMIC INTERVENTIONS</h4>
          <Paragraph className='text-white h-0'>The Philippine government targets improving training capacities and education services for the needs of small farmers and fisherfolks, improving and reforming education curriculum in agri-fishing schools, and highlighting the essence of modern innovations in local farming and fishing technologies.</Paragraph>
        </div>
      </div>
    </section>
  </>
)
}
