import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import Footer from '@/components/user/layout/footer'
import { SubHeader } from '@/components/user/layout/sub-header'


export const Route = createRootRoute({
  component: () => (
    <>
      <script
        defer
        data-domain="balinkbayan.r3workshop.live"
        src="https://pl-analytics.r3workshop.live/js/script.js"
      ></script>
      <script dangerouslySetInnerHTML={{
        __html: `
          window.plausible = window.plausible || function() { 
            (window.plausible.q = window.plausible.q || []).push(arguments);
          }
        `
      }}>
      </script>

      <div className='w-full overflow-none'>


        <SubHeader />

        <Outlet />
        <TanStackRouterDevtools />

        <Footer />
      </div>
    </>
  ),
})
