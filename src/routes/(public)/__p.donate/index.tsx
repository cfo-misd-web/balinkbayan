import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(public)/__p/donate/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/donate/"!</div>
}
