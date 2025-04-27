import { Outlet, createRootRoute } from '@tanstack/react-router'
import Footer from '@/components/user/layout/footer'
import { SubHeader } from '@/components/user/layout/sub-header'


export const Route = createRootRoute({
    component: () => (
        <>
            <SubHeader />
            <Outlet />
            <Footer />
        </>
    ),
})
