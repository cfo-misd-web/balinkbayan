import { createFileRoute } from '@tanstack/react-router'
import AgricultureTemp from '@/components/user/shared/agricultureTemp'
import Paragraph from '@/components/user/shared/paragraph'
import { Separator } from '@radix-ui/react-separator'

export const Route = createFileRoute(
  '/start-business/investment-op/agriculture',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
  // <div>Hello "/start-business/investment-op/agriculture"!</div>
  <>
    <AgricultureTemp text='Business Opportunities in the PH' label='Agriculture' img_url='/img-assets/start-a-business/Agriculture/Intro_Header.jpg'/>
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
          
        <div className='text-white flex justify-center max-lg:mx-4 lg:w-[1400px] flex flex-col items-center justify-center mx-auto py-5 bg-light'>
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
          
        <div className='text-cyan-900 flex justify-center max-lg:mx-4 lg:w-[1400px] flex flex-col mx-auto py-5 bg-light'>
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
    </section>
  </>
)
}
