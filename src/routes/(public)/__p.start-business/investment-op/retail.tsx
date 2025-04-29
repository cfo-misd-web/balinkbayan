import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/(public)/__p/start-business/investment-op/retail',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(public)/__p/start-business/investment-op/retail"!</div>
}
