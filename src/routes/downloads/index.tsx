import DownloadPage from '@/components/user/download/download-page'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/downloads/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <DownloadPage />
}
