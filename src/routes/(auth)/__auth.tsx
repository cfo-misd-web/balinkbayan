import { createRootRoute, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: AuthRoute,
})


function AuthRoute() {
  return (
    <div className='w-full overflow-none max-lg:overflow-x-hidden'>
      <Outlet />
    </div>
  )
}


