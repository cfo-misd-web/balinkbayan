import { createFileRoute } from '@tanstack/react-router'
import Paragraph from '@/components/user/shared/paragraph'
import BiggerBanner from '@/components/user/shared/banner/bigger-banner'
import Heading4 from '@/components/user/shared/headings/heading-4'
import Heading5 from '@/components/user/shared/headings/heading-5'
import RoseAnchor from '@/components/user/shared/anchors/rose-anchor'

export const Route = createFileRoute(
  '/(public)/__p/donate/donate/linkapil-donations',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <BiggerBanner text='Donate and Volunteer' label='Donations for LINKAPIL' img_url='/img-assets/donate-volunteer/linkapil-donations/donate.jpg' />
      <section className='text-cyan-900'>
        <div className='max-lg:mx-4 3xl:max-w-[1400px] 2xl:max-w-[1280px] lg:max-w-[1080px] mx-auto my-20 bg-light space-y-20'>
          <Heading4 className='text-center'>LINKAPIL - Lingkod sa Kapwa Pilipino<br/>(Link for Development Program)
          </Heading4>
          <Paragraph><b>LINKAPIL</b> facilitates the flow of assistance from Overseas Filipinos to specific beneficiaries in the Philippines.<br/><br/>

          In 1989, the Commission on Filipinos Overseas (CFO) initiated a program that would systematically manage donations from Filipinos based overseas and direct them towards enhancing local development initiatives. The program was named, <b>Lingkod sa Kapwa Pilipino (LINKAPIL)</b>, which literally translates to “<b>service to fellow Filipinos</b>.” The program was a pioneering government effort in engaging overseas Filipinos to partner with local institutions in promoting development. The longevity of the program speaks of the enduring sense of bayanihan of Filipinos even when they have found new homes in other countries.</Paragraph>
          {/*  */}
          <Heading4>LINKAPIL PROJECTS</Heading4>
          <div>
            <Heading5>Education</Heading5>
            <Paragraph className='mt-5'>Donors may support the education Filipino children and youth interested to go to school but are hindered by poverty.</Paragraph>
          </div>
          <div className='space-y-10'>
            <div className='flex justify-center'>
              <img src='/img-assets/donate-volunteer/linkapil-donations/educ.jpg' />
            </div>
            <RoseAnchor className='text-rose-700 hover:text-rose-500' href_url='https://cfo-linkapil.org.ph/index.php/education/'>Click here to learn more</RoseAnchor>
          </div>
          {/*  */}
          <div>
            <Heading5>Livelihood</Heading5>
            <Paragraph className='mt-5'>Donors may sponsor the construction of facilities needed to achieve quality living.</Paragraph>
          </div>
          <div className='space-y-10'>
            <div className='flex justify-center'>
              <img src='/img-assets/donate-volunteer/linkapil-donations/live.jpg' />
            </div>
            <RoseAnchor className='text-rose-700 hover:text-rose-500' href_url='http://cfo-linkapil.org.ph/index.php/livelihood/'>Click here to learn more</RoseAnchor>
          </div>
          {/*  */}
          <div>
            <Heading5>Small-Scale Infrastructure</Heading5>
            <Paragraph className='mt-5'>Donors may provide assistance or funds for the construction of facilities needed for the improvement of day to day life of underserved Filipinos.</Paragraph>
          </div>
          <div className='space-y-10'>
            <div className='flex justify-center'>
              <img src='/img-assets/donate-volunteer/linkapil-donations/infra.jpg' />
            </div>
            <RoseAnchor className='text-rose-700 hover:text-rose-500' href_url='http://cfo-linkapil.org.ph/index.php/smallscaleinfrastructure/'>Click here to learn more</RoseAnchor>
          </div>
          {/*  */}
          <div>
            <Heading5>Health and Welfare</Heading5>
            <Paragraph className='mt-5'>Donors may provide health care among Filipinos especially in rural and economically disadvantaged areas of the Philippines to have greater access to health services and social benefits.</Paragraph>
          </div>
          <div className='space-y-10'>
            <div className='flex justify-center'>
              <img src='/img-assets/donate-volunteer/linkapil-donations/health.jpg' />
            </div>
            <RoseAnchor className='text-rose-700 hover:text-rose-500' href_url='http://cfo-linkapil.org.ph/index.php/https://cfo-linkapil.org.ph/health-and-welfare/'>Click here to learn more</RoseAnchor>
          </div>
        </div>
      </section>
    </>
  )
}