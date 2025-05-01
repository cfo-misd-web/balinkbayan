import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/(public)/__p/donate/volunteer/balik-turo',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(public)/__p/donate/volunteer/balik-turo"!</div>
}
