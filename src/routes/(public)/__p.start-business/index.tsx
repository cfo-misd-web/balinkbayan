import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(public)/__p/start-business/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/start-business/"!</div>
}
