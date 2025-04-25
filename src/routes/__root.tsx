import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import Footer from '@/components/user/layout/footer'
import { SubHeader } from '@/components/user/layout/sub-header'


export const Route = createRootRoute({
  component: () => (
    <div className='w-full overflow-none max-lg:overflow-x-hidden'>
      <SubHeader />
      <Outlet />
      <TanStackRouterDevtools />
      <Footer />
    </div>
  ),
})
