import { createFileRoute } from '@tanstack/react-router'
import Paragraph from '@/components/user/shared/paragraph'
import BiggerBanner from '@/components/user/shared/banner/bigger-banner'
import Heading5 from '@/components/user/shared/headings/heading-5'
import Heading4 from '@/components/user/shared/headings/heading-4'
import DarkRoseAnchor from '@/components/user/shared/anchors/darkrose-anchor'
import CurrencyConverter from '@/components/user/shared/embed/currencyconverter'
import ExchangeRates from '@/components/user/shared/embed/exchangerates'

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Dialog, DialogHeader, DialogTrigger, DialogContent, DialogDescription } from '@/components/ui/dialog'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { AccordionHeader } from '@radix-ui/react-accordion'
import ImageHolder from '@/components/user/shared/images/image-holder'
import { Facebook, Globe, Mail, MapPin, MessageCircle, Phone, } from 'lucide-react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import BankingTabs from '@/components/user/shared/banking-tabs'
import TealAnchor from '@/components/user/shared/anchors/teal-anchor'


export const Route = createFileRoute(
  '/(public)/__p/services/resource-agency/overseas-filipino-bank',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <BiggerBanner text='Access Government Services' label='Overseas Filipino Bank (OFBank)' img_url='/img-assets/gov-services/ofb/Overseas-Filipino-Bank.jpg' />
      <section className='text-cyan-900'>
        <div className='max-lg:mx-4 3xl:max-w-[1400px] 2xl:max-w-[1280px] lg:max-w-[1080px] mx-auto my-20 bg-light'>
          <div className='grid grid-cols-2 max-lg:block gap-10 max-lg:space-y-20'>
            <div className='border-4 border-teal-500 rounded p-8 space-y-20 pb-20'>
              <div className='space-y-10'>
                <Heading4>What is OFBANK?</Heading4>
                <Paragraph>The Overseas Filipino Bank or OFBank is the only digital, branchless Philippine bank that caters primarily to Overseas Filipinos/ Overseas Filipino workers and their families here in the Philippines. In 2016, Land Bank of the Philippines or LANDBANK announced its plan to acquire PPSB and convert it into a bank that will exclusively cater to overseas-based Filipinos. It was in September 2017 by virtue of EO No. 44 of Pres. Rodrigo Duterte that PPSB was officially acquired by LANDBANK. It was rebranded to its present name, OFBank, which serves as the digital arm of LANDBANK.</Paragraph>
              </div>
              {/*  */}
              <div className='space-y-10'>
                <Heading5 className='text-center'>OFFICE INFORMATION</Heading5>
                <div className='flex flex-row items-center space-x-5 justify-center'>
                  <a href='https://www.facebook.com/CDAphgov' className='rounded-full bg-cyan-50 border border-gray-400 hover:bg-amber-50 p-2'>
                    <Facebook />
                  </a>
                  <a href='https://www.google.com/maps/dir//Citigold+Center+1345+Quirino+Ave+Paco,+Manila+Metro+Manila/@14.5768119,120.996482,10z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3397c9859df5f7c1:0x3b9eafeef5f3fe5d!2m2!1d120.996482!2d14.5768119?hl=en&shorturl=1' className='rounded-full bg-cyan-50 border border-gray-400 hover:bg-amber-50 p-2'>
                    <MapPin />
                  </a>
                  <a href='http://44.199.161.141/contact/' className='rounded-full bg-cyan-50 border border-gray-400 hover:bg-amber-50 p-2'>
                    <Mail />
                  </a>
                  <a href='http://44.199.161.141/contact/' className='rounded-full bg-cyan-50 border border-gray-400 hover:bg-amber-50 p-2 relative'>
                    <MessageCircle/>
                    <Phone fill='#164E63' className='absolute top-2 scale-40'/>
                  </a>
                  <a href='https://www.treasury.gov.ph/' className='rounded-full bg-cyan-50 border border-gray-400 hover:bg-amber-50 p-2'>
                    <Globe />
                  </a>
                </div>
              </div>
            </div>
            {/*  */}
            <div className='border-4 border-teal-500 rounded p-5 space-y-20'>
              <Heading5>PRODUCT AND SERVICES</Heading5>
              <div className='space-y-10'>
                <Paragraph>OFBank offers a variety of financial products and services like the following:</Paragraph>
                <BankingTabs/>
              </div>
            </div>
            {/*  */}
            <div className='border-4 border-teal-500 rounded p-5 space-y-10 text-center'>
              <Heading5>GALLERY</Heading5>
              <Carousel opts={{ slidesToScroll: 1, align: 'start', loop: true, autoplay: true, autoplaySpeed: 200 }} className='mx-4'>
                <CarouselContent className='text-center pt-10'>
                  <CarouselItem>
                    <Dialog>
                      <DialogTrigger>
                        <ImageHolder imgClass='max-h-48 min-h-48' className='max-h-fit min-h-fit p-5 space-y-0' img_url='/img-assets/gov-services/ofb/ofbank_media1.png' />
                      </DialogTrigger>
                      <DialogContent className='m-0 p-0'>
                        <DialogHeader>
                          <DialogDescription>
                            <img className='rounded-sm outline-4 outline-gray-200' src='/img-assets/gov-services/ofb/ofbank_media1.png'/>
                          </DialogDescription>
                          <DialogDescription>
                            <Paragraph className='mt-10 text-center text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>Planning to acquire real property anytime soon? The OFBank together with LANDBANK offers a variety of home loans that can help you with this milestone. For more information, you can visit their website at <TealAnchor href_url='https://www.ofbank.com.ph/products-services/loans'>https://www.ofbank.com.ph/products-services/loans</TealAnchor>.</Paragraph>
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                  </CarouselItem>
                  <CarouselItem>
                    <Dialog>
                      <DialogTrigger>
                        <ImageHolder imgClass='max-h-48 min-h-48' className='max-h-fit min-h-fit p-5 space-y-0' img_url='/img-assets/gov-services/ofb/ofbank_media2.jpg' />
                      </DialogTrigger>
                      <DialogContent className='m-0 p-0'>
                        <DialogHeader>
                          <DialogDescription>
                              <img className='rounded-sm outline-4 outline-gray-200' src='/img-assets/gov-services/ofb/ofbank_media2.jpg'/>
                          </DialogDescription>
                          <DialogDescription>
                            <Paragraph className='mt-10 text-center text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>Planning to get the OFBank App? Reminder to only download the application from official and trusted sources! For more information, you can visit the official website of the OFBank at <TealAnchor href_url='https://www.ofbank.com.ph/news-updates/ofbank-is-officially-first-digital-only-bank-in-phl-after-obtaining-bsp-banking-license'>https://www.ofbank.com.ph/news-updates/ofbank-is-officially-first-digital-only-bank-in-phl-after-obtaining-bsp-banking-license</TealAnchor>.</Paragraph>
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                  </CarouselItem>
                  <CarouselItem>
                    <Dialog>
                      <DialogTrigger>
                        <ImageHolder imgClass='max-h-48 min-h-48' className='max-h-fit min-h-fit p-5 space-y-0' img_url='/img-assets/gov-services/ofb/ofbank_media3.jpg' />
                      </DialogTrigger>
                      <DialogContent className='m-0 p-0 flex justify-center'>
                        <DialogHeader>
                          <DialogDescription>
                            <img className='rounded-sm outline-4 outline-gray-200' src='/img-assets/gov-services/ofb/ofbank_media3.jpg'/>
                          </DialogDescription>
                          <DialogDescription>
                            <Paragraph className='mt-10 text-center text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>Introducing the OFBank App, the digital-only bank of the Philippines that is specifically designed for Overseas Filipinos. A subsidiary of LANDBANK, the OFBank offers seamless and comprehensive delivery of banking services to OFs and their families.</Paragraph>
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                  </CarouselItem>
                  <CarouselItem>
                    <Dialog>
                      <DialogTrigger>
                        <ImageHolder imgClass='max-h-48 min-h-48' className='max-h-fit min-h-fit p-5 space-y-0' img_url='/img-assets/gov-services/ofb/ofbank_media4.jpg' />
                      </DialogTrigger>
                      <DialogContent className='m-0 p-0 flex justify-center'>
                        <DialogHeader>
                          <DialogDescription>
                            <img className='rounded-sm outline-4 outline-gray-200' src='/img-assets/gov-services/ofb/ofbank_media4.jpg'/>
                          </DialogDescription>
                          <DialogDescription>
                            <Paragraph className='mt-10 text-center text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>This is a screen capture from a promotional video of OFBank narrating the struggles of Overseas FIlipinos (OFs). It showcases a simplified system of remittance and banking operations designed for OFs and how the OFBank can help them with that. Full video can be viewed at <TealAnchor href_url='https://fb.watch/99Xa7R6WkI/'>https://fb.watch/99Xa7R6WkI/</TealAnchor>.</Paragraph>
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
              <Heading5>INVESTMENT AND SERVICES</Heading5>
              <Tabs defaultValue='tab-1' className='border'>
                <TabsList className='grid grid-cols-2 rounded-none min-h-28 max-h-36'>
                  <TabsTrigger value='tab-1' className='text-center'>Treasury Bonds Offering</TabsTrigger>
                  <TabsTrigger value='tab-2' className='text-center'>Leasing Facility</TabsTrigger>
                </TabsList>
                <TabsContent value='tab-1' className='pt-5 mb-10 space-y-10 px-4 border-t border-cyan-50'>
                  <Paragraph className='text-center'>The OFBank is one of the partners of the PH government as a payment channel for investments in government securities like Treasury Bills and Bonds. By using the OFBank App, you can get the latest news, announcements, and a safe and secure payment option for your investments like the Treasury Bonds/Bills offered by the Philippine government through the Bureau of the Treasury.</Paragraph>
                </TabsContent>
                <TabsContent value='tab-2' className='pt-5 mb-10 space-y-10 px-4 border-t border-cyan-50'>
                  <Paragraph className='text-center'>Got a business and looking to expand/ modernize, or perhaps increase efficiency? The Financial Leasing Facility of OFBank in partnership with LBP Leasing and Finance Corporation or LLFC (a subsidiary of LANDBANK) can help you with that. There are 2 types of services offered under this:</Paragraph>
                  <Accordion type='single' collapsible className='border'>
                    <AccordionItem value='item-1' className='border-b mb-2'>
                      <AccordionHeader>
                        <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                          <p>Financial Lease</p>
                        </AccordionTrigger>
                      </AccordionHeader>
                      <AccordionContent className='my-10 space-y-10 mx-5'>
                        <Paragraph>Under this, the LLFC (lessor) acquires the fixed assets based on the needs of the client (lessee). These assets are then leased by the lessor to the lessee and the lessor is paid through a periodic lease amortization. At the end of term, ownership of these fixed assets are then passed on to the lessee. These fixed assets include but are not limited to the following:</Paragraph>
                        <div className='grid grid-cols-6 gap-y-5'>
                          <Paragraph className='text-center'>&#8226;</Paragraph>
                          <Paragraph className='col-span-5'>Equipment</Paragraph>
                          <Paragraph className='text-center'>&#8226;</Paragraph>
                          <Paragraph className='col-span-5'>Motor vehicle</Paragraph>
                          <Paragraph className='text-center'>&#8226;</Paragraph>
                          <Paragraph className='col-span-5'>Lot and building</Paragraph>
                          <Paragraph className='text-center'>&#8226;</Paragraph>
                          <Paragraph className='col-span-5'>Other equipment to expand, upgrade or modernize operations</Paragraph>
                        </div>
                        <Paragraph>Under the Financial Lease, there are 3 types of acquisition:</Paragraph>
                        <div className='grid grid-cols-6 gap-y-5'>
                          <Paragraph className='text-center'>&#8226;</Paragraph>
                          <Paragraph className='col-span-5'>Direct Lease, wherein the lessor (LLFC) acquires assets through a third party supplier and leases it out to the lessee (client).</Paragraph>
                          <Paragraph className='text-center'>&#8226;</Paragraph>
                          <Paragraph className='col-span-5'>Sale and Leaseback, wherein the client (lessee) may sell an asset to the lessor (LLFC) and leases back the asset to the client. The purpose of this kind of transaction is to liquidate the client’s fixed asset for working capital.</Paragraph>
                          <Paragraph className='text-center'>&#8226;</Paragraph>
                          <Paragraph className='col-span-5'>Sublease Arrangement, wherein the lessor (LLFC) allows the client (lessee) to sublease the leased asset to a third party (Sub lessee). There is a lease agreement between the lessor (LLFC) and the lessee (client) on who will acquire the asset after an agreed payment period. There is a separate lease contract between the lessee (client) and the Sub lessee.</Paragraph>
                        </div>
                        <Paragraph>For more information on the matter, kindly download the OFBank Mobile Banking App for the complete details. Source: <DarkRoseAnchor href_url='https://www.lbpleasing.com/products-services/lease'>https://www.lbpleasing.com/products-services/lease</DarkRoseAnchor>.</Paragraph>
                      </AccordionContent>
                    </AccordionItem>
                    {/*  */}
                    <AccordionItem value='item-2' className='border-b mb-2'>
                      <AccordionHeader>
                        <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                          <p>Operating Lease</p>
                        </AccordionTrigger>
                      </AccordionHeader>
                      <AccordionContent className='my-10 space-y-10 mx-5'>
                        <Paragraph>This is a rental agreement granted only to LANDBANK and its subsidiaries who do not want to be burdened with the acquisition and disposition process of acquiring ownership of a leased asset. This is an option only for asset types that have long economic life and well-established secondary markets. The operating and maintenance costs of the assets to be leased can also be included already in the lease agreement. For more information on the matter, kindly download the OFBank Mobile Banking App for the complete details. Source: https://www.lbpleasing.com/products-services/lease.</Paragraph>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </TabsContent>
              </Tabs>
            </div>
            {/*  */}
            <div className='border-4 border-teal-500 rounded flex flex-col items-center p-5 space-y-10'>
              <Heading5>CURRENCY CONVERTER</Heading5>
              <CurrencyConverter />
            </div>
            {/*  */}
            <div className='border-4 border-teal-500 rounded flex flex-col items-center p-5 space-y-10'>
              <Heading5>EXCHANGE RATES</Heading5>
              <ExchangeRates />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}