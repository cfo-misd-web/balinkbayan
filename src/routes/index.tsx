import BalikbayanAbout from '@/components/user/home/balinkbayan-about'
import FilipinoCategories from '@/components/user/home/filipino-cats'
import FilipinoServices from '@/components/user/home/filipino-services'
import HeadSection from '@/components/user/home/head'
import BaLinkBayanPortal from '@/components/user/home/portal'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div>
      <HeadSection />
      <BaLinkBayanPortal />
      <FilipinoCategories />
      <FilipinoServices />

      <BalikbayanAbout />
    </div>
  )
}
