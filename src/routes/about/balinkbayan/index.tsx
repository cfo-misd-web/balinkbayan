import { DiasporaPortal } from '@/components/user/about/us/diaspora-portal'
import AboutHead from '@/components/user/about/us/hero'
import { MissionVision } from '@/components/user/about/us/mision-and-vision'
import SectionOne from '@/components/user/about/us/section-one'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about/balinkbayan/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <>
    <AboutHead />
    <div className="max-lg:mx-4">
      <SectionOne />
      <DiasporaPortal />
      <MissionVision />
    </div>
  </>
}
