import { createFileRoute, Navigate } from '@tanstack/react-router'

export const Route = createFileRoute('/(protected)/__protected/cms/')({
    component: RouteComponent,
})

function RouteComponent() {
    return Navigate({ to: "/cms/posts" })
}
