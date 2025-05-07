import { createFileRoute } from '@tanstack/react-router'
import Paragraph from '@/components/user/shared/paragraph'
import BiggerBanner from '@/components/user/shared/banner/bigger-banner'
import Heading5 from '@/components/user/shared/headings/heading-5'
import Heading4 from '@/components/user/shared/headings/heading-4'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Dialog, DialogHeader, DialogTrigger, DialogContent, DialogDescription } from '@/components/ui/dialog'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import ImageHolder from '@/components/user/shared/images/image-holder'
import { Facebook, Globe, Mail, MapPin, MessageCircle, Phone, } from 'lucide-react'
import { AccordionHeader } from '@radix-ui/react-accordion'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import RoseAnchor from '@/components/user/shared/anchors/rose-anchor'

export const Route = createFileRoute(
  '/(public)/__p/services/resource-agency/bureau-of-the-treasury',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <BiggerBanner text='Access Government Services' label='Bureau of the Treasury (BTr)' img_url='/img-assets/gov-services/btr/BTRbanner.jpg' />
      <section className='text-cyan-900'>
        <div className='max-lg:mx-4 3xl:max-w-[1400px] 2xl:max-w-[1280px] lg:max-w-[1080px] mx-auto my-20 bg-light'>
          <div className='grid grid-cols-2 max-lg:block gap-10 max-lg:space-y-20'>
            <div className='border-4 border-teal-500 rounded p-5 space-y-10'>
              <Heading4>What is the Bureau of the Treasury?</Heading4>
              <Paragraph>The Bureau of the Treasury (BTr) is an attached agency of the Department of Finance and is primarily tasked to ensure the proper accounting of the National Government’s transactions. Furthermore, the Bureau is tasked to oversee the cash and asset management of the Philippine government and to undertake its financing and liability management. As the principal custodian of the financial and physical assets of the government, the BTr makes funding available for various government projects and programs, and assists in the formulation of policies on the borrowing, investment, and capital market activities of the PH government. The Bureau is also responsible for managing the PH government’s cash resources and public debt. The Bureau of the Treasury is also tasked to manage government securities.</Paragraph>
              {/*  */}
              <Heading5>OFFICE INFORMATION</Heading5>
              <div className='flex flex-row items-center space-x-5 justify-center'>
                <a href='https://www.facebook.com/CDAphgov' className='rounded-full bg-gray-100 border border-gray-400 hover:bg-amber-50 p-2'>
                  <Facebook />
                </a>
                <a href='https://www.google.com/maps/dir//Citigold+Center+1345+Quirino+Ave+Paco,+Manila+Metro+Manila/@14.5768119,120.996482,10z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3397c9859df5f7c1:0x3b9eafeef5f3fe5d!2m2!1d120.996482!2d14.5768119?hl=en&shorturl=1' className='rounded-full bg-gray-100 border border-gray-400 hover:bg-amber-50 p-2'>
                  <MapPin />
                </a>
                <a href='http://44.199.161.141/contact/' className='rounded-full bg-gray-100 border border-gray-400 hover:bg-amber-50 p-2'>
                  <Mail />
                </a>
                <a href='http://44.199.161.141/contact/' className='rounded-full bg-gray-100 border border-gray-400 hover:bg-amber-50 p-2 relative'>
                  <MessageCircle/>
                  <Phone fill='#164E63' className='absolute top-2 scale-40'/>
                </a>
                <a href='https://www.treasury.gov.ph/' className='rounded-full bg-gray-100 border border-gray-400 hover:bg-amber-50 p-2'>
                  <Globe />
                </a>
              </div>
              {/*  */}
              <Paragraph><b>GALLERY</b></Paragraph>
              <Carousel opts={{ slidesToScroll: 1, align: 'start', loop: true, autoplay: true, autoplaySpeed: 200 }} className='mx-4'>
                <CarouselContent className='text-center pt-10'>
                  <CarouselItem>
                    <Dialog>
                      <DialogTrigger>
                        <ImageHolder imgClass='max-h-48 min-h-48' className='max-h-fit min-h-fit p-5 space-y-0' img_url='/img-assets/gov-services/btr/btr_1.jpg' />
                      </DialogTrigger>
                      <DialogContent className='m-0 p-0'>
                        <DialogHeader>
                          <DialogDescription>
                            <img className='rounded-lg' src='/img-assets/gov-services/btr/btr_1.jpg'/>
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                  </CarouselItem>
                  <CarouselItem>
                    <Dialog>
                      <DialogTrigger>
                        <ImageHolder imgClass='max-h-48 min-h-48' className='max-h-fit min-h-fit p-5 space-y-0' img_url='/img-assets/gov-services/btr/BTR_2.jpg' />
                      </DialogTrigger>
                      <DialogContent className='m-0 p-0'>
                        <DialogHeader>
                          <DialogDescription>
                            <img className='rounded-lg' src='/img-assets/gov-services/btr/BTR_2.jpg'/>
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                  </CarouselItem>
                  <CarouselItem>
                    <Dialog>
                      <DialogTrigger>
                        <ImageHolder imgClass='max-h-48 min-h-48' className='max-h-fit min-h-fit p-5 space-y-0' img_url='/img-assets/gov-services/btr/BTR_3.jpg' />
                      </DialogTrigger>
                      <DialogContent className='m-0 p-0'>
                        <DialogHeader>
                          <DialogDescription>
                            <img className='rounded-lg' src='/img-assets/gov-services/btr/BTR_3.jpg'/>
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
            {/*  */}
            <div className='border-4 border-teal-500 rounded p-5 space-y-10'>
              <Heading5>TERMINOLOGIES AND FAST FACTS</Heading5>
              <Tabs defaultValue='tab-1' className='w-full max-w-3xl border'>
                <TabsList className='grid w-full grid-cols-3 rounded-none h-20'>
                  <TabsTrigger value='tab-1' className='w-full text-center'>Government Securities (GS)</TabsTrigger>
                  <TabsTrigger value='tab-2' className='w-full text-center'>Retail Investors</TabsTrigger>
                  <TabsTrigger value='tab-3' className='w-full text-center'>Institutional Investors</TabsTrigger>
                </TabsList>
                <TabsContent value='tab-1' className='pt-5 mb-10 space-y-10 px-4 border-t border-gray-100'>
                  <Paragraph>The range of investment products offered by the government to fund ongoing projects and services. As these are backed by the full taxing power of the sovereign state, GS are practically free from default, making these appealing to investors who are looking to widen their investment portfolios without much risk.</Paragraph>
                </TabsContent>
                <TabsContent value='tab-2' className='pt-5 mb-10 space-y-10 px-4 border-t border-gray-100'>
                  <Paragraph>Non-professional investors who purchase from their personal accounts and often trade in smaller amounts than institutional investors. Because they trade in smaller amounts than institutional investors, RIs may pay higher fees and commissions to their brokers, though there are now online brokers that offer no-fee trading.</Paragraph>
                </TabsContent>
                <TabsContent value='tab-3' className='pt-5 mb-10 space-y-10 px-4 border-t border-gray-100'>
                  <Paragraph>It is a company or organization that invests in behalf of a company or members (pension funds, private pension funds, etc.). Endowments, hedge funds, and mutual funds are examples of institutional investors. They have the resources and expertise in researching varies investment opportunities that might not be available for the retail investors. They have larger trade volumes and sizes than retail investors.<br/><br/>

                  Source: <RoseAnchor className='text-rose-700 hover:text-rose-500' href_url='https://www.investopedia.com/terms/i/institutionalinvestor.asp'>Investopedia</RoseAnchor>.</Paragraph>
                </TabsContent>
              </Tabs>
              {/*  */}
              <Heading5>LATEST NEWS AND ANNOUNCEMENTS</Heading5>
              <Accordion type='single' collapsible className='border'>
                <AccordionItem value='item-1' className='border-b mb-2'>
                  <AccordionHeader>
                    <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                      <Heading4>Latest: Treasury Bills Auction</Heading4>
                    </AccordionTrigger>
                  </AccordionHeader>
                  <AccordionContent className='my-10 space-y-10 mx-5'>
                    <RoseAnchor className='text-rose-700 hover:text-rose-500' href_url='https://www.treasury.gov.ph/?p=42786'>Schedule of Treasury Bills and Treasury Bonds Offering for January 2022</RoseAnchor>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-2' className='border-b mb-2'>
                  <AccordionHeader>
                    <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                      <Heading4>The BTr App</Heading4>
                    </AccordionTrigger>
                  </AccordionHeader>
                  <AccordionContent className='my-10 space-y-10 mx-5'>
                    <Paragraph>You can download the app via Google Play or the App Store. For more details, you can check the website of the BTr <RoseAnchor className='text-rose-700 hover:text-rose-500' href_url='https://www.treasury.gov.ph/?fbclid=IwAR3ShJRobk_o0z-t0-lOZiToxrcZ-XVewmIz9jXy71HPa-CyK_0tIkQeuEQ'>here</RoseAnchor><br/><br/>

                    <RoseAnchor className='text-rose-700 hover:text-rose-500' href_url='https://bit.ly/btr-app'>Google Play</RoseAnchor><br/>

                    <RoseAnchor className='text-rose-700 hover:text-rose-500' href_url='https://bit.ly/btr-app-ios'>App Store</RoseAnchor>
                    </Paragraph>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-3'>
                  <AccordionHeader>
                    <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                      <Heading4>RTB26</Heading4>
                    </AccordionTrigger>
                  </AccordionHeader>
                  <AccordionContent className='my-10 space-y-10 mx-5'>
                    <Paragraph>What is <RoseAnchor className='text-rose-700 hover:text-rose-500' href_url='https://www.treasury.gov.ph/?p=42532'>RTB26</RoseAnchor>?</Paragraph>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            {/*  */}
            <div className='border-4 border-teal-500 rounded p-5 space-y-10'>
              <Heading5>TYPES OF GOVERNMENT SECURITIES</Heading5>
              <Paragraph>In the Philippines, there are 5 types of GS. These are the following:</Paragraph>
              <Accordion type='single' collapsible className='border'>
                <AccordionItem value='item-1' className='border-b mb-2'>
                  <AccordionHeader>
                    <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                      <Heading4>Treasury Bills</Heading4>
                    </AccordionTrigger>
                  </AccordionHeader>
                  <AccordionContent className='my-10 space-y-10 mx-5'>
                    <Paragraph>These are peso-denominated GS in tenors of 91,182, and 364 days and are sold at a discount. Click here for the latest offering of Treasury Bills from the BTr.</Paragraph>
                  </AccordionContent>
                </AccordionItem>
                {/*  */}
                <AccordionItem value='item-2' className='border-b mb-2'>
                  <AccordionHeader>
                    <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                      <Heading4>Treasury Bonds</Heading4>
                    </AccordionTrigger>
                  </AccordionHeader>
                  <AccordionContent className='my-10 space-y-10 mx-5'>
                    <Paragraph>These are peso-denominated GS which mature beyond one year and are sold at a face value on origination. Click here for the latest offering of Treasury Bonds from the BTr.</Paragraph>
                  </AccordionContent>
                </AccordionItem>
                {/*  */}
                <AccordionItem value='item-3'>
                  <AccordionHeader>
                    <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                      <Heading4>Retail Treasury Bonds</Heading4>
                    </AccordionTrigger>
                  </AccordionHeader>
                  <AccordionContent className='my-10 space-y-10 mx-5'>
                    <Paragraph>These GS are also peso-denominated and mature beyond one year and are offered to retail investors. Click here for the latest offering of Retail Treasury Bonds from the BTr.</Paragraph>
                  </AccordionContent>
                </AccordionItem>
                {/*  */}
                <AccordionItem value='item-4'>
                  <AccordionHeader>
                    <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                      <Heading4>Premyo Bonds</Heading4>
                    </AccordionTrigger>
                  </AccordionHeader>
                  <AccordionContent className='my-10 space-y-10 mx-5'>
                    <Paragraph>These short-term debt securities are offered by the Philippine government that also provides investors a chance to win rewards every quarter. Click here for the latest Premyo Bonds offering of the BTr.</Paragraph>
                  </AccordionContent>
                </AccordionItem>
                {/*  */}
                <AccordionItem value='item-5'>
                  <AccordionHeader>
                    <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                      <Heading4>Retail Dollar Bonds (RDBs)</Heading4>
                    </AccordionTrigger>
                  </AccordionHeader>
                  <AccordionContent className='my-10 space-y-10 mx-5'>
                    <Paragraph>A counterpart to the Peso Retail Treasury bonds, these are medium- to long-term debt securities in dollar denomination offered to retail investors.</Paragraph>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            {/*  */}
            <div className='border-4 border-teal-500 rounded p-5 space-y-10'>
              <Heading5>TYPES OF GOVERNMENT SECURITIES</Heading5>
              <Paragraph>In the Philippines, there are 5 types of GS. These are the following:</Paragraph>
              <Accordion type='single' collapsible className='border'>
                <AccordionItem value='item-1' className='border-b mb-2'>
                  <AccordionHeader>
                    <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                      <Heading4>Treasury Bills</Heading4>
                    </AccordionTrigger>
                  </AccordionHeader>
                  <AccordionContent className='my-10 space-y-10 mx-5'>
                    <Paragraph>These are peso-denominated GS in tenors of 91,182, and 364 days and are sold at a discount. Click here for the latest offering of Treasury Bills from the BTr.</Paragraph>
                  </AccordionContent>
                </AccordionItem>
                {/*  */}
                <AccordionItem value='item-2' className='border-b mb-2'>
                  <AccordionHeader>
                    <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                      <Heading4>Treasury Bonds</Heading4>
                    </AccordionTrigger>
                  </AccordionHeader>
                  <AccordionContent className='my-10 space-y-10 mx-5'>
                    <Paragraph>These are peso-denominated GS which mature beyond one year and are sold at a face value on origination. Click here for the latest offering of Treasury Bonds from the BTr.</Paragraph>
                  </AccordionContent>
                </AccordionItem>
                {/*  */}
                <AccordionItem value='item-3'>
                  <AccordionHeader>
                    <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                      <Heading4>Retail Treasury Bonds</Heading4>
                    </AccordionTrigger>
                  </AccordionHeader>
                  <AccordionContent className='my-10 space-y-10 mx-5'>
                    <Paragraph>These GS are also peso-denominated and mature beyond one year and are offered to retail investors. Click here for the latest offering of Retail Treasury Bonds from the BTr.</Paragraph>
                  </AccordionContent>
                </AccordionItem>
                {/*  */}
                <AccordionItem value='item-4'>
                  <AccordionHeader>
                    <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                      <Heading4>Premyo Bonds</Heading4>
                    </AccordionTrigger>
                  </AccordionHeader>
                  <AccordionContent className='my-10 space-y-10 mx-5'>
                    <Paragraph>These short-term debt securities are offered by the Philippine government that also provides investors a chance to win rewards every quarter. Click here for the latest Premyo Bonds offering of the BTr.</Paragraph>
                  </AccordionContent>
                </AccordionItem>
                {/*  */}
                <AccordionItem value='item-5'>
                  <AccordionHeader>
                    <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                      <Heading4>Retail Dollar Bonds (RDBs)</Heading4>
                    </AccordionTrigger>
                  </AccordionHeader>
                  <AccordionContent className='my-10 space-y-10 mx-5'>
                    <Paragraph>A counterpart to the Peso Retail Treasury bonds, these are medium- to long-term debt securities in dollar denomination offered to retail investors.</Paragraph>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            {/*  */}
            {/* TODO */}
            {/* TODO */}
            {/* TODO */}
            {/* TODO */}
            {/* TODO */}
            {/* TODO */}
            {/* TODO */}
            {/* TODO */}
            {/* TODO */}
            {/* TODO */}
            {/* TODO */}
            {/* TODO */}
            {/* TODO */}
            {/* TODO */}
            {/* TODO */}
            {/* TODO */}
            {/* TODO */}
            {/* TODO */}
            {/* TODO */}
            {/* TODO */}
            {/* TODO */}
            {/* TODO */}
            {/* TODO */}
            {/* TODO */}
            {/* TODO */}
            {/* TODO */}
            {/* TODO */}
            {/* TODO */}
            {/* TODO */}
            {/* TODO */}
            {/* TODO */}
            {/* EXCHANGE RATES EXCHANGE RATES EXCHANGE RATES EXCHANGE RATES EXCHANGE RATES EXCHANGE RATES EXCHANGE RATES EXCHANGE RATES EXCHANGE RATES EXCHANGE RATES EXCHANGE RATES EXCHANGE RATES EXCHANGE RATES EXCHANGE RATES EXCHANGE RATES EXCHANGE RATES EXCHANGE RATES EXCHANGE RATES EXCHANGE RATES EXCHANGE RATES EXCHANGE RATES */}
            <div className='border-4 border-teal-500 rounded p-5 space-y-10'></div>
          </div>
        </div>
      </section>
    </>
  )
}