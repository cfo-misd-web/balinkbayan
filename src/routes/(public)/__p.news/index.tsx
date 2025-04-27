import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(public)/__p/news/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/news/"!</div>
}
