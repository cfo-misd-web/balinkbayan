import { useState } from "react";
import NewsList from '@/components/user/shared/list/news-list';
import { createFileRoute } from '@tanstack/react-router';
import { useGetPaginatedPosts } from '@/services/query&mutations/use-get-paginated-posts';
import Pagination from "@/lib/use-pagination";
import { Loader2 } from "lucide-react";


export const Route = createFileRoute('/(public)/__p/news/')({
  component: RouteComponent,
});

function RouteComponent() {
  const [page, setPage] = useState(1);
  const pageSize = 5;
  const { data, isPending, isError } = useGetPaginatedPosts({ page, pageSize, search: "" });

  if (isPending) {
    return <div className="flex justify-center items-center h-screen">
      <Loader2 className="animate-spin h-30 w-30 text-teal-700" />
    </div>;
  }

  if (isError) {
    return <div className="flex justify-center items-center h-screen">
      <p className="text-red-500">Error loading posts</p>
    </div>;
  }

  return (
    <div className="mt-10 mb-20">
      <ul>
        {data?.posts.map((news) => (
          <NewsList
            key={news.id}
            newsTitle={news.title}
            newsDescription={news.description}
            postedDate={new Date(news.createdAt).toLocaleDateString()}
            imageUrl={news.bannerImg}
            author={news.author}
            id={news.id}

            className="max-lg:w-full max-lg:mx-auto flex max-lg:flex-col max-lg:gap-4 "
          />
        ))}
      </ul>
      {!isPending && <div className="mt-6 flex justify-center">
        <Pagination
          currentPage={page}
          totalPages={data?.pagination.totalPages || 1}
          onPageChange={(newPage) => setPage(newPage)}
        />
      </div>}
    </div>
  );
}
