import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/(public)/__p/services/resource-agency/overseas-filipino-bank',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      Hello "/(public)/__p/services/resource-agency/overseas-filipino-bank"!
    </div>
  )
}
