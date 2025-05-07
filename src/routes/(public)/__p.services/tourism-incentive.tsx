import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/(public)/__p/services/tourism-incentive',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(public)/__p/services/tourism-incentive"!</div>
}
