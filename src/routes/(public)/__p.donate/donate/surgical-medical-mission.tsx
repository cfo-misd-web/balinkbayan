import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/(public)/__p/donate/donate/surgical-medical-mission',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>Hello "/(public)/__p/donate/donate/surgical-medical-mission"!</div>
  )
}
