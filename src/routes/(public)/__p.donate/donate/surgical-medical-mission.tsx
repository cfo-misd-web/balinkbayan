import { createFileRoute } from '@tanstack/react-router'
import Paragraph from '@/components/user/shared/paragraph'
import BiggerBanner from '@/components/user/shared/banner/bigger-banner'
import Heading5 from '@/components/user/shared/headings/heading-5'

export const Route = createFileRoute(
  '/(public)/__p/donate/donate/surgical-medical-mission',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <BiggerBanner text='Donate and Volunteer' label='Surgical and Medical Mission' img_url='/img-assets/donate-volunteer/surgical-medical-mission/medic-hospital-laboratory-563423.jpg' />
      <section className='text-cyan-900'>
        <div className='max-lg:mx-4 3xl:max-w-[1400px] 2xl:max-w-[1280px] lg:max-w-[1080px] mx-auto my-20 bg-light space-y-20'>
          <Paragraph>Surgical and Medical Missions (SMM) are activities where medical interventions and/or surgical services are provided in selected underserved areas and communities in the Philippines by a foreign individual or an organization, which may include Filipino nationals. The SMM may be conducted in partnership with a local partner in the Philippines, i.e. Local Government Unit (LGU), non-government organization (NGO), and church-based organizations (CBO). These activities are conducted as a professional humanitarian endeavour at no cost to the beneficiaries and not for political patronage.</Paragraph>
          {/*  */}
          <div className='space-y-10'>
            <Heading5>GUIDELINES</Heading5>
            <Paragraph>Pursuant to DOH Administrative Order No. 179, series of 2001, Filipino and foreign medical professionals, non- government organizations and medical groups which intend to provide health care services in underserved areas where specialized services, ancillary procedures, surgical interventions and medicines are given at no cost to the patient, should adhere to the following guidelines:</Paragraph>
            <div className='grid grid-cols-12 gap-y-5'>
              <Paragraph className='text-center'>&#8226;</Paragraph>
              <Paragraph className='col-span-11'>Sponsors of medical and surgical missions are required to seek clearance from the Office of the Secretary of Health, through the Bureau of Internal Health Cooperation (BIHC), prior to implementation of such activities.</Paragraph>
              <Paragraph className='text-center'>&#8226;</Paragraph>
              <Paragraph className='col-span-11'>For monitoring purposes, the BIHC will notify the concerned Center for Health Development that a medical/ surgical mission will be conducted in their areas of responsibility.</Paragraph>
              <Paragraph className='text-center'>&#8226;</Paragraph>
              <Paragraph className='col-span-11'>A foreign medical or surgical mission can only be conducted in a given community with the expressed and written consent of the local government unit and the local medical society.</Paragraph>
              <Paragraph className='text-center'>&#8226;</Paragraph>
              <Paragraph className='col-span-11'>All medical and surgical procedures to be employed must conform to accepted local and international standards.</Paragraph>
              <Paragraph className='text-center'>&#8226;</Paragraph>
              <Paragraph className='col-span-11'>All medicines to be dispensed should have clearance from the Bureau of Food and Drugs (BFAD) as to safety and efficacy, and shall have an expiry date of no less than one (0) year. These medicines must have Certificates of Product Registration issued by the BFAD.</Paragraph>
              <Paragraph className='text-center'>&#8226;</Paragraph>
              <Paragraph className='col-span-11'>A referral system to follow-up all patients seen during the medical and surgical mission and those needing further evaluation and treatment must be established by the sponsor and collaborating organization(s).</Paragraph>
              <Paragraph className='text-center'>&#8226;</Paragraph>
              <Paragraph className='col-span-11'>All cases seen during the medical/ surgical mission must be documented and a summary report must be submitted to the Center for Health Development concerned within two (2) weeks after the mission with the following basic information:<br/><br/>
              
              <div className='grid grid-cols-12 gap-y-5'>
                <Paragraph className='text-center'>a.</Paragraph>
                <Paragraph className='col-span-11'>Number and age of cases seen;</Paragraph>
                <Paragraph className='text-center'>b.</Paragraph>
                <Paragraph className='col-span-11'>List of medicines dispensed;</Paragraph>
                <Paragraph className='text-center'>c.</Paragraph>
                <Paragraph className='col-span-11'>Diagnoses of patients seen;</Paragraph>
                <Paragraph className='text-center'>d.</Paragraph>
                <Paragraph className='col-span-11'>Surgical procedures done; and</Paragraph>
                <Paragraph className='text-center'>e.</Paragraph>
                <Paragraph className='col-span-11'>Referrals made to any other health facility, if any.</Paragraph>
              </div></Paragraph>
              <Paragraph className='text-center'>&#8226;</Paragraph>
              <Paragraph className='col-span-11'>Foreign physicians and health-related professionals may only be allowed to practice their professions in the Philippines if they have secured a Special Temporary Permits from the Professional Regulation Commission (PRC).</Paragraph>
            </div>
          </div>
            {/*  */}
            <Paragraph>NOTE:<br/><br/>
            
            Only foreign physicians, whose country grants reciprocity for Philippine physicians to practice, may be granted Special Temporary Permits by the PRC.<br/><br/>

            Presidential Decree No. 541 allows professionals who were former citizens of the Philippines and who have previously passed licensure examinations in the Philippines to practice their profession while in the country on a visit, sojourn or permanent residence. Said former Filipino professionals must be practitioners of good standing prior to their departure from the Philippines and in their adopted country.</Paragraph>
        </div>
      </section>
    </>
  )
}