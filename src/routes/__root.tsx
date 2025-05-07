import { HeadContent, Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'


export const Route = createRootRoute({
  head: () => ({
    scripts: [

    ],
  }),
  component: () => (
    <>
      <HeadContent />
      <div className='w-full overflow-none max-lg:overflow-x-hidden'>
        <Outlet />
        <TanStackRouterDevtools />
      </div>
    </>
  ),
})
