import HeaderTemp from '@/components/user/shared/banner/header'
import Paragraph from '@/components/user/shared/paragraph'
import Image from '@/components/user/shared/image'
import Heading3 from '@/components/user/shared/headings/heading-3'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(public)/__p/services/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <HeaderTemp img_url='https://balinkbayan.gov.ph/wp-content/uploads/2020/12/istockphoto-1144547910-170667a.jpg' label='National Government Services' />
      <div className='max-lg:mx-4 lg:w-[1400px] flex flex-col items-center justify-center mx-auto py-5 bg-light'>
        <section>
          <div>
            <Paragraph>Through BaLinkBayan, you will be provided online access to services of national government agencies such as the Social Security System, Home Development Mutual Fund (otherwise known as Pag-IBIG Fund) and the Philippine Health Insurance Corporation or PhilHealth.</Paragraph>
            <Image img_url='https://balinkbayan.gov.ph/wp-content/uploads/2020/12/online-natl-pg.jpg' />
            <Paragraph>Now you can transact with national government agencies online. Check your membership credits and other privileges with the Social Security system. Find out what their special programs are for overseas Filipinos. Secure and process claims, or even apply for a housing loan for your family in the Philippines with the Pag-IBIG Fund. Health maintenance for yourself and your dependents made easier with affordable government health insurance through PhilHealth. Civil registry documents like birth certificates are just clicks away through PSA’s (formerly NSO) online service. The DTI’s online business name registration is also available for aspiring entrepreneurs in business start-ups.</Paragraph>
            <Heading3>National Government Services</Heading3>
            <Paragraph>Access national government agencies online. Find out what their special programs are for overseas Filipinos.</Paragraph>
          </div>
        </section>
      </div>
    </>
  )
}
