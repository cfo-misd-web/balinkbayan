import ContactPage from '@/components/user/contact/contact-page'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(public)/__p/contact/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <ContactPage />
}
