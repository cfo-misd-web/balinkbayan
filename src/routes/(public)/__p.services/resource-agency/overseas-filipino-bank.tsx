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
            <div className='border-4 border-teal-500 rounded p-5 space-y-10'>
              <Heading4>What is OFBANK?</Heading4>
              <Paragraph>The Overseas Filipino Bank or OFBank is the only digital, branchless Philippine bank that caters primarily to Overseas Filipinos/ Overseas Filipino workers and their families here in the Philippines. In 2016, Land Bank of the Philippines or LANDBANK announced its plan to acquire PPSB and convert it into a bank that will exclusively cater to overseas-based Filipinos. It was in September 2017 by virtue of EO No. 44 of Pres. Rodrigo Duterte that PPSB was officially acquired by LANDBANK. It was rebranded to its present name, OFBank, which serves as the digital arm of LANDBANK.</Paragraph>
              {/*  */}
              <Heading5>OFFICE INFORMATION</Heading5>
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
            {/*  */}
            <div className='border-4 border-teal-500 rounded p-5 space-y-10'>
              <Heading5>PRODUCT AND SERVICES</Heading5>
              <Paragraph>OFBank offers a variety of financial products and services like the following:</Paragraph>
              <BankingTabs/>
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
              <Heading5>FREQUENTLY ASKED QUESTIONS</Heading5>
              <Tabs defaultValue='tab-1' className='border'>
                <TabsList className='grid grid-cols-3 rounded-none min-h-28 max-h-36'>
                  <TabsTrigger value='tab-1' className='text-center'>Why Invest in GS?</TabsTrigger>
                  <TabsTrigger value='tab-2' className='text-center'>What are the advantages of Investing in Government Securities</TabsTrigger>
                  <TabsTrigger value='tab-3' className='text-center'>Where can I buy Government Securities?</TabsTrigger>
                </TabsList>
                <TabsContent value='tab-1' className='pt-5 mb-10 space-y-10 px-4 border-t border-cyan-50'>
                  <div className='grid grid-cols-12 gap-y-5'>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>GS have higher returns than simply putting your money in a time deposit.</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>It is practically risk-free as it is a direct obligation of the government that gains an interest every quarter.</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Should the need arise, you can sell GS. You can also gain back your principal upon maturity, provided that you finish the term and have not sold the GS prematurely.</Paragraph>
                  </div>
                </TabsContent>
                <TabsContent value='tab-2' className='pt-5 mb-10 space-y-10 px-4 border-t border-cyan-50'>
                  <div className='grid grid-cols-12 gap-y-5'>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Higher return than time deposits</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Default risk-free as guaranteed payout from the government</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Negotiable as can be sold (if the need arises)</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Principle amount is regained upon maturity (may not be the same case if GS sold prematurely)</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Interest is earned quarterly</Paragraph>
                  </div>
                  <Paragraph className='italic font-light ml-4'>Source: BTr PH App</Paragraph>
                </TabsContent>
                <TabsContent value='tab-3' className='pt-5 mb-10 space-y-10 px-4 border-t border-cyan-50'>
                  <Paragraph>Government Securities may be purchased thru eligible dealers and online platforms. The list are as follows:<br/><br/>

                  <b>Government Securities Eligible Dealer (GSEDs)</b></Paragraph>
                  <div className='space-y-5'>
                    <Paragraph>Per the Memorandum released by the BTr on September 15, 2021, the following banks are authorized as selling agents of Retail Onshore Dollar</Paragraph>

                    <div className='grid grid-cols-12 gap-y-3'>
                      <Paragraph className='text-center'>1.</Paragraph>
                      <Paragraph className='col-span-11'>Bank of the Philippine Islands (BPI)</Paragraph>
                      <Paragraph className='text-center'>2.</Paragraph>
                      <Paragraph className='col-span-11'>BDO Capital and Investment Corporation</Paragraph>
                      <Paragraph className='text-center'>3.</Paragraph>
                      <Paragraph className='col-span-11'>China Banking Corporation</Paragraph>
                      <Paragraph className='text-center'>4.</Paragraph>
                      <Paragraph className='col-span-11'>Development bank of the Philippines</Paragraph>
                      <Paragraph className='text-center'>5.</Paragraph>
                      <Paragraph className='col-span-11'>East West banking Corporation</Paragraph>
                      <Paragraph className='text-center'>6.</Paragraph>
                      <Paragraph className='col-span-11'>First Metro Investment Corporation</Paragraph>
                      <Paragraph className='text-center'>7.</Paragraph>
                      <Paragraph className='col-span-11'>Land Bank of the Philippines</Paragraph>
                      <Paragraph className='text-center'>8.</Paragraph>
                      <Paragraph className='col-span-11'>Metropolitan Bank & Trust Company</Paragraph>
                      <Paragraph className='text-center'>9.</Paragraph>
                      <Paragraph className='col-span-11'>Rizal Commercial Banking Corporation</Paragraph>
                      <Paragraph className='text-center'>10.</Paragraph>
                      <Paragraph className='col-span-11'>Security Bank Corporation</Paragraph>
                      <Paragraph className='text-center'>11.</Paragraph>
                      <Paragraph className='col-span-11'>Standard Chartered Bank</Paragraph>
                      <Paragraph className='text-center'>12.</Paragraph>
                      <Paragraph className='col-span-11'>Union Bank of the Philippines</Paragraph>
                    </div>
                  </div>
                  {/*  */}
                  <Paragraph><b>Online Platforms</b></Paragraph>
                  <div className='grid grid-cols-12 gap-y-3'>
                    <Paragraph className='text-center'>1.</Paragraph>
                    <Paragraph className='col-span-11'>Btr Online Ordering Facility</Paragraph>
                    <Paragraph className='text-center'>2.</Paragraph>
                    <Paragraph className='col-span-11'>Bonds.PH App</Paragraph>
                    <Paragraph className='text-center'>3.</Paragraph>
                    <Paragraph className='col-span-11'>Overseas Filipino Bank (OFBank) App</Paragraph>
                    <Paragraph className='text-center'>4.</Paragraph>
                    <Paragraph className='col-span-11'>LandBank MBA</Paragraph>
                    <Paragraph className='text-center'>5.</Paragraph>
                    <Paragraph className='col-span-11'>First Metro Securities (FMSBC)</Paragraph>
                  </div>
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