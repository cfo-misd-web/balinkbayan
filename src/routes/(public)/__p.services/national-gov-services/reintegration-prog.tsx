import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/(public)/__p/services/national-gov-services/reintegration-prog',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      Hello "/(public)/__p/services/national-gov-services/reintegration-prog"!
    </div>
  )
}
