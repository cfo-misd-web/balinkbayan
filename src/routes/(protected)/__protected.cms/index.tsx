import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(protected)/__protected/cms/')({
    component: RouteComponent,
})

function RouteComponent() {
    return <>
        <div className="max-lg:mx-4">
            hello protected world
        </div>
    </>
}
