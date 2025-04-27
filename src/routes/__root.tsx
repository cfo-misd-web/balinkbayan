import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'


export const Route = createRootRoute({
  component: () => (
    <div className='w-full overflow-none max-lg:overflow-x-hidden'>
      <Outlet />
      <TanStackRouterDevtools />
    </div>
  ),
})
