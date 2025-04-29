import { createFileRoute } from '@tanstack/react-router'
import LoginPage from '@/components/user/auth/login/login-page'

export const Route = createFileRoute('/(auth)/__auth/login')({
    component: RouteComponent,
})

function RouteComponent() {
    return <LoginPage />
}
