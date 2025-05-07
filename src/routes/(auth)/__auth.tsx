import { useSessionStore } from '@/store/session-store'
import { createRootRoute, Navigate, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: AuthRoute,
})


function AuthRoute() {
  const session = useSessionStore((s) => s.session)
  if (session?.name) {
    return <Navigate to='/' />
  }

  return (
    <div className='w-full overflow-none max-lg:overflow-x-hidden'>
      <Outlet />
    </div>
  )
}


