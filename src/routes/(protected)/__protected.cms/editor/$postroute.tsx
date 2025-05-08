import { EditPosterForm } from '@/components/user/rich-text/edit-poster-form';
import type { Post } from '@/constants/types';
import { api } from '@/services/axios-fetchers/api';
import { createFileRoute } from '@tanstack/react-router'



function RouteComponent() {
    const loaderData = Route.useLoaderData();
    const { post } = loaderData;

    return <div className="max-w-[1400px] mx-auto py-10 px-[50px]">
                <h1 className="text-2xl font-bold mb-6">CMS Poster Editor</h1>
                <EditPosterForm post={post} />
            </div>
  }

export const Route = createFileRoute(
  '/(protected)/__protected/cms/editor/$postroute',
)({
  component: RouteComponent,
  loader: async ({ params }) => {
      const { data }: { data: { post: Post } } = await api.get(`/posts/specific/${params.postroute}`);
      return data;
    },
})

