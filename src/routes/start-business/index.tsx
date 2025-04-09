import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/start-business/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/start-business/"!</div>
}
