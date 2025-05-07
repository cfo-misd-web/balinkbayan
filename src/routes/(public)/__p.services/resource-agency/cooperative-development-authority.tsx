import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/(public)/__p/services/resource-agency/cooperative-development-authority',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      Hello
      "/(public)/__p/services/resource-agency/cooperative-development-authority"!
    </div>
  )
}
