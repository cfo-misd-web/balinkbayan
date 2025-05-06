import { createFileRoute } from '@tanstack/react-router'
import Paragraph from '@/components/user/shared/paragraph'
import BiggerBanner from '@/components/user/shared/banner/bigger-banner'
import RoseAnchor from '@/components/user/shared/anchors/rose-anchor'

export const Route = createFileRoute(
  '/(public)/__p/donate/volunteer/balik-scientist',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <BiggerBanner text='Donate and Volunteer' label='Balik Scientist' img_url='/img-assets/donate-volunteer/balik-scientist/laboratory-analysis-chemistry-2815641.jpg' />
      <section className='text-cyan-900'>
        <div className='max-lg:mx-4 3xl:max-w-[1400px] 2xl:max-w-[1280px] lg:max-w-[1080px] mx-auto my-20 bg-light space-y-20'>
          <div className='flex flex-row items-center space-x-20'>
            <img src='/img-assets/donate-volunteer/balik-scientist/beaker-tube.jpg' />
            <Paragraph><b>WHAT IS THE PROGRAM AND WHO IS A BALIK SCIENTIST?</b><br/><br/>
            
            The Balik Scientist Program (BSP) of the Department of Science and Technology (DOST) encourages Filipino scientists, technologists, and experts to return to the country and share their expertise in order to promote scientific, agro-industrial, and economic development. The BSP also aims to support and strengthen the scientific and technological human resources in the Philippines.<br/><br/>

            A Balik Scientist is a science and technology expert who is a Filipino citizen or a foreigner of Filipino descent, residing abroad and contracted by the Government to return and work in the Philippines along his/her field of expertise.</Paragraph>
          </div>
          {/*  */}
          <Paragraph><b>PRIORITY AREAS OF THE PROGRAM</b><br/><br/>
          
          Agriculture and Food, Biotechnology, Disaster Mitigation and Management, Environment and Natural Resources, Electronics, Energy, Genomics, Health, ICT, Manufacturing, Nanotechnology, and Semiconductors.</Paragraph>
          {/*  */}
          <div className='flex flex-row items-center space-x-20'>
            <Paragraph><b>QUALIFICATIONS OF BALIK SCIENTIST APPLICANTS</b><br/><br/>
            
            <div className='grid grid-cols-12 gap-y-5'>
              <Paragraph className='text-center'>&#8226;</Paragraph>
              <Paragraph className='col-span-11'>He/She must be of Filipino origin or descent, and is based abroad.</Paragraph>
              <Paragraph className='text-center'>&#8226;</Paragraph>
              <Paragraph className='col-span-11'>He/She must have made an outstanding contribution in his/her field of specialization.</Paragraph>
              <Paragraph className='text-center'>&#8226;</Paragraph>
              <Paragraph className='col-span-11'>He/She must be in good health.</Paragraph>
              <Paragraph className='text-center'>&#8226;</Paragraph>
              <Paragraph className='col-span-11'>He/She must be a holder of a graduate degree and must have practiced his/her profession for not less than three (3) years after obtaining his/her masters or doctorate degree.</Paragraph>
            </div>
            </Paragraph>
            <img src='/img-assets/donate-volunteer/balik-scientist/donate-qualifications.jpg' />
          </div>
          <Paragraph>A Balik Scientist Applicant without a graduate degree but with a highly specialized skill may be qualified on special cases as long as his/her field of expertise must be consistent with the science and technology (S&T) priorities promulgated by the DOST.</Paragraph>
          {/*  */}
          <Paragraph><b>DOCUMENTARY REQUIREMENTS</b><br/><br/>
          
          <div className='grid grid-cols-12 gap-y-5'>
            <Paragraph className='text-center'>&#8226;</Paragraph>
            <Paragraph className='col-span-11'>For Both Short Term and Long Term Categories<br/><br/>
            
            <div className='flex flex-row items-center space-x-20'>
              <div className='grid grid-cols-12 gap-y-5'>
                <Paragraph className='text-center'>&#8250;</Paragraph>
                <Paragraph className='col-span-11'>Accomplishedand Signed BSP Form 1</Paragraph>
                <Paragraph className='text-center'>&#8250;</Paragraph>
                <Paragraph className='col-span-11'>Endorsement letter from the Host Institution(s)</Paragraph>
                <Paragraph className='text-center'>&#8250;</Paragraph>
                <Paragraph className='col-span-11'>Medical Certificate</Paragraph>
                <Paragraph className='text-center'>&#8250;</Paragraph>
                <Paragraph className='col-span-11'>PRC Clearance</Paragraph>
                <Paragraph className='text-center'>&#8250;</Paragraph>
                <Paragraph className='col-span-11'>Copy of passport of BSP applicant</Paragraph>
                <Paragraph className='text-center'>&#8250;</Paragraph>
                <Paragraph className='col-span-11'>Copy of diploma or transcript of record or certificate of academic achievement(s) from a credible local or international public/private institution/association</Paragraph>
                <Paragraph className='text-center'>&#8250;</Paragraph>
                <Paragraph className='col-span-11'>Detailed/Updated Curriculum Vitae to include the following:<br/><br/>
                
                <div className='grid grid-cols-12 gap-y-3'>
                  <Paragraph className='text-center'>-</Paragraph>
                  <Paragraph className='col-span-11'>Educational Background</Paragraph>
                  <Paragraph className='text-center'>-</Paragraph>
                  <Paragraph className='col-span-11'>Field of Specialization</Paragraph>
                  <Paragraph className='text-center'>-</Paragraph>
                  <Paragraph className='col-span-11'>Areas of Research Interest</Paragraph>
                  <Paragraph className='text-center'>-</Paragraph>
                  <Paragraph className='col-span-11'>Professional/Employment/Work History including significant scientific, technological and/or entrepreneurial activities undertaken</Paragraph>
                  <Paragraph className='text-center'>-</Paragraph>
                  <Paragraph className='col-span-11'>Significant achievements (up to 3) made related to your expertise or profession</Paragraph>
                  <Paragraph className='text-center'>-</Paragraph>
                  <Paragraph className='col-span-11'>Relevant trainings</Paragraph>
                  <Paragraph className='text-center'>-</Paragraph>
                  <Paragraph className='col-span-11'>Fellowship or Grants</Paragraph>
                </div></Paragraph>
              </div>
              <img src='/img-assets/donate-volunteer/balik-scientist/procedures.jpg' />
            </div></Paragraph>

            <Paragraph className='text-center'>&#8226;</Paragraph>
            <Paragraph className='col-span-11'>For Short Term Category only<br/><br/>
            
            <div className='grid grid-cols-12 gap-y-5'>
              <Paragraph className='text-center'>&#8250;</Paragraph>
              <Paragraph className='col-span-11'>Proposed Terms of Reference (TOR) with clearly defined expected outputs/deliverables and detailed schedule of activities, submitted in concurrence with the host institution(s)</Paragraph>
              <Paragraph className='text-center'>&#8250;</Paragraph>
              <Paragraph className='col-span-11'>For subsequent visit, a detailed Program Framework or Road Map on what will be accomplished</Paragraph>
            </div></Paragraph>
            <Paragraph className='text-center'>&#8226;</Paragraph>
            <Paragraph className='col-span-11'>For Long Term Category only<br/><br/>
            
            <div className='grid grid-cols-12 gap-y-5'>
              <Paragraph className='text-center'>&#8250;</Paragraph>
              <Paragraph className='col-span-11'>Detailed Quarterly Activity Plan, and Statement of Research when applicable, submitted in concurrence with the host institution(s)</Paragraph>
            </div></Paragraph>
          </div>
          </Paragraph>
          {/*  */}
          <Paragraph className='italic font-light text-center'>FOR MORE INFORMATION, PLEASE REFER TO THIS LINK TO THE <RoseAnchor className='text-rose-700 hover:text-rose-500' href_url='https://bspms.dost.gov.ph/login'>BALIK SCIENTIST WEBSITE</RoseAnchor>.</Paragraph>
        </div>
      </section>
    </>
  )
}