import { createFileRoute } from '@tanstack/react-router'
import Paragraph from '@/components/user/shared/paragraph'
import BiggerBanner from '@/components/user/shared/banner/bigger-banner'
import Heading4 from '@/components/user/shared/headings/heading-4'
import { Separator } from '@radix-ui/react-separator'

export const Route = createFileRoute(
  '/(public)/__p/donate/volunteer/balik-turo',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <BiggerBanner text='Donate and Volunteer' label='Balik-Turo' img_url='/img-assets/donate-volunteer/balik-turo/school-classroom-boys-79612.jpg' />
      <section className='text-cyan-900'>
        <div className='max-lg:mx-4 3xl:max-w-[1400px] 2xl:max-w-[1280px] lg:max-w-[1080px] mx-auto my-20 bg-light space-y-20'>
          <div className='flex justify-center w-full'>
            <img src='/img-assets/donate-volunteer/balik-turo/balik-turoheader.jpg' />
          </div>
          <Paragraph>The objective of the Balik-Turo is to establish a network of professionals of overseas Filipinos in the fields of education, health-related professions and others who can extend voluntary services in teaching, mentoring, lecturing, training to their counterparts in the country, and become part of a continued and sustainable program of educational exchange.<br/><br/>

          Basically, the program will bring Filipino educators abroad back to the Philippines to share information, knowledge, expertise, strategies, trends, new technologies and most recent developments in various fields of education through seminars and workshops. The direct beneficiaries are teachers from public and private educational institutions from all over the Philippines. It seeks to improve the teaching profession and to equip them with necessary tools to become globally competitive.</Paragraph>
          {/*  */}
          <div>
            <Separator className='bg-amber-500 h-[2px] w-20' />
            <Heading4 className='mt-10'>Rationale</Heading4>
          </div>
          <div className='flex flex-row items-center space-x-20'>
            <Paragraph>The Commission on Filipinos Overseas (CFO) has been implementing several programs related to the exchange of skills and technical know-how of the Filipino professions, such as teachers and nurses. It has facilitated the continuing professional education program of the Philippine Nurses Association in America (PNAA), providing assistance to professional Filipino nurses working in the United States to come back and share their expertise through short-term professional courses, seminars and other learning activities with their alumni schools.</Paragraph>
            <img src='/img-assets/donate-volunteer/balik-turo/donate-pnaa.jpg' />
          </div>
          {/*  */}
          <Separator className='bg-gray-200 h-[2px]' />
          {/*  */}
          <div>
            <Separator className='bg-amber-500 h-[2px] w-20' />
            <Heading4 className='mt-10'>Exchange Visitor Program</Heading4>
          </div>
          <div className='space-y-10'>
            <div className='flex flex-row items-center space-x-20'>
              <img src='/img-assets/donate-volunteer/balik-turo/evp.jpg' />
              <Paragraph>Under the Exchange Visitor Program (EVP), an international educational and cultural exchange program administered by the United States to increase mutual understanding, the EVP Committee of the Philippines processs the application of Filipino EVP participants for No Objection Statement. For those whose fields of specialization are included in the Skills List for the Philippines, the EVP Committee will offer the applicant an alternative arrangement only if it finds merit in the application. An alternative arrangement is a project in which the participant should personally conduct a transfer of skills activity, and sponsor an enhancement training for an identified beneficiary in his/her particular field of expertise.</Paragraph>
            </div>
            <Paragraph>Under the transfer of skills, an applicant should submit a project proposal based on the training/skills he/she has acquired in the US. Said proposal is forwarded to the EVP Committee member with jurisdiction on the applicant’s field of expertise for technical evaluation. The approved proposal is physically implemented with an authorized partner institution in the Philippines for at least 40 hours and at least 30 qualified participants.</Paragraph>
          </div>
          {/*  */}
          <Separator className='bg-gray-200 h-[2px]' />
          {/*  */}
          <Paragraph className='mb-32'>The Commission also serves as the secretariat for the Inter-Agency Committee on the Philippine Schools Overseas, which supervises some 41 overseas schools using the Philippine basic and secondary education curricula. These schools may benefit from twinning arrangements with other educational institutions in the Philippines, which will permit the scaling up of their academic human resources and upgrade the teaching skills of their teachers.</Paragraph>
        </div>
      </section>
    </>
  )
}