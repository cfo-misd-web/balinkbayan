import { createFileRoute } from '@tanstack/react-router'
import Paragraph from '@/components/user/shared/paragraph'
import BiggerBanner from '@/components/user/shared/banner/bigger-banner'
import Heading5 from '@/components/user/shared/headings/heading-5'
import Heading4 from '@/components/user/shared/headings/heading-4'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Dialog, DialogHeader, DialogTrigger, DialogContent, DialogDescription } from '@/components/ui/dialog'
import ImageHolder from '@/components/user/shared/images/image-holder'

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
          <div className='grid grid-cols-2 max-lg:block space-y-10'>
            <div className='border-4 border-teal-500 rounded p-5 space-y-10'>
              <Heading4>What is the Bureau of the Treasury?</Heading4>
              <Paragraph>The Bureau of the Treasury (BTr) is an attached agency of the Department of Finance and is primarily tasked to ensure the proper accounting of the National Government’s transactions. Furthermore, the Bureau is tasked to oversee the cash and asset management of the Philippine government and to undertake its financing and liability management. As the principal custodian of the financial and physical assets of the government, the BTr makes funding available for various government projects and programs, and assists in the formulation of policies on the borrowing, investment, and capital market activities of the PH government. The Bureau is also responsible for managing the PH government’s cash resources and public debt. The Bureau of the Treasury is also tasked to manage government securities.</Paragraph>
              {/*  */}
              <Heading5>OFFICE INFORMATION</Heading5>
              <div></div>
              {/*  */}
              <Paragraph><b>GALLERY</b></Paragraph>
              <Carousel opts={{ slidesToScroll: 1, align: 'start', loop: true, autoplay: true, autoplaySpeed: 200 }} className='mx-4'>
                <CarouselContent className='text-center pt-10'>
                  <CarouselItem>
                    <Dialog>
                      <DialogTrigger>
                        <ImageHolder img_url='/img-assets/gov-services/btr/btr_1.jpg' />
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
                        <ImageHolder img_url='/img-assets/gov-services/btr/BTR_2.jpg' />
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
                        <ImageHolder img_url='/img-assets/gov-services/btr/BTR_3.jpg' />
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
          </div>
        </div>
      </section>
    </>
  )
}