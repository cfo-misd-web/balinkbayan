import { createFileRoute } from '@tanstack/react-router'
import Paragraph from '@/components/user/shared/paragraph'
import BiggerBanner from '@/components/user/shared/banner/bigger-banner'
import Heading5 from '@/components/user/shared/headings/heading-5'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import DarkRoseAnchor from '@/components/user/shared/anchors/darkrose-anchor'


export const Route = createFileRoute(
  '/(public)/__p/services/tourism-incentive',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <BiggerBanner text='Access Government Services' label='BaLinkBayani sa Turismo' img_url='/img-assets/gov-services/tourism/BLB-Header-Image-Banaue-Rice-Terraces.jpg' />
      <section className='text-cyan-900'>
        <Tabs defaultValue='tab-1' className='border'>
          <TabsList className='grid grid-cols-2 rounded-none min-h-28 max-h-36'>
            <TabsTrigger value='tab-1' className='text-center'>Bisita, Be My Guest</TabsTrigger>
            <TabsTrigger value='tab-2' className='text-center'>Balik Bayani sa Turismo</TabsTrigger>
          </TabsList>
          <TabsContent value='tab-1' className='pt-5 mb-10 space-y-10 px-4 border-t border-cyan-50'>
            <div className='max-lg:mx-4 3xl:max-w-[1400px] 2xl:max-w-[1280px] lg:max-w-[1080px] mx-auto bg-light space-y-20 mb-20'>
              <div className='flex justify-center'>
                <img src='/img-assets/gov-services/tourism/Bisita-Be-My-Guest-v2.png'/>
              </div>
              <div className='flex flex-row items-center space-x-20'>
                <img src='/img-assets/gov-services/tourism/bisita-be-my-guest-philippines.png'/>
                <Paragraph>Are you a Filipino living abroad or an OFW? Invite your foreign friends to visit the Philippines and get a chance to win raffle prizes! Inviting more tourists increases your chance of winning awesome prizes.<br/><br/>

                The Bisita, Be My Guest is the latest initiative of the Department of Tourism (DOT) to encourage Overseas Filipinos (OFs), including OFWs and permanent migrants abroad, to encourage foreigners to visit the Philippines. This program incentivizes Filipino invitees everytime they encourage and successfully refer to tourist destinations and activities here in the Philippines. This is an effort to further promote the country’s top tourist destinations and attractions</Paragraph>
              </div>
              {/*  */}
              <Paragraph><b>Interested in becoming a Sponsor? Kindly refer to the Mechanics below</b>:</Paragraph>
              <div className='space-y-10'>
                <Heading5>Promo Mechanics - For Sponsors</Heading5>
                <Paragraph>For the latest announcement of prizes and raffle draws, you may visit the official Facebook page of BBMG for updates.</Paragraph>
              </div>
            </div>
          </TabsContent>
          <TabsContent value='tab-2' className='pt-5 mb-10 space-y-10 px-4 border-t border-cyan-50'>
            <div className='max-lg:mx-4 3xl:max-w-[1400px] 2xl:max-w-[1280px] lg:max-w-[1080px] mx-auto bg-light space-y-20 mb-20'>
              <div className='flex justify-center'>
                <img src='/img-assets/gov-services/tourism/balik-bayani.png'/>
              </div>
              <div className='flex flex-row items-center space-x-20'>
                <img className='w-40' src='/img-assets/gov-services/tourism/department-of-tourism.png'/>
                <Paragraph>The Balik Bayani sa Turismo is the Department of Tourism’s latest initiative in order to help returning migrants to set up their own tourism-related business ventures and work opportunities when they go back home for good in the Philippines. In line with the Marcos’ Administration Bagong Pilipinas, the program is envisioned to be a channel for returning Filipino migrants to be the Philippines’ tourism ambassadors and effectively help in national development while gaining revenue along the way.</Paragraph>
              </div>
              {/*  */}
              <Paragraph>There are 4 areas of collaboration for different government agencies under Balik Bayani sa Turismo:</Paragraph>
              <Paragraph className='italic font-light'><b>Sources</b>:<br/><br/>
              
              Doctolero, J. (2024). DOT, DMW signs MOU to boost opportunities for returning OFWs. Philippine Information Agency. Retrieved from <DarkRoseAnchor href_url='https://pia.gov.ph/news/2024/01/19/dot-dmw-signs-mou-to-boost-opportunities-for-returning-ofws'>https://pia.gov.ph/news/2024/01/19/dot-dmw-signs-mou-to-boost-opportunities-for-returning-ofws</DarkRoseAnchor><br/><br/>

              Department of Tourism. (n.d.). Bisita, Be My Guest. Retrieved from <DarkRoseAnchor href_url='https://bbmg.philippines.travel/'>https://bbmg.philippines.travel/</DarkRoseAnchor></Paragraph>
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </>
  )
}