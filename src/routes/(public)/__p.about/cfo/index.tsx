import AboutCFOHead from '@/components/user/about/cfo/about-cfo-head'
import ClientGrid from '@/components/user/about/cfo/client-grid'
import ClienteleHeader from '@/components/user/about/cfo/clientele-header'
import { MissionVisionCFO } from '@/components/user/about/cfo/mision-and-vision-cfo'
import QualityPolicyStatement from '@/components/user/about/cfo/quality-policy-statement'
import SectionCFOOne from '@/components/user/about/cfo/section-one-about'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(public)/__p/about/cfo/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <>
    <AboutCFOHead />
    <div className="max-lg:mx-4">
      <SectionCFOOne />
      <ClienteleHeader />
      <ClientGrid />
      <MissionVisionCFO />
    </div>
    <QualityPolicyStatement />
  </>
}
