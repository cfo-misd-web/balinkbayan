import { useState } from "react";
import NewsList from '@/components/user/shared/list/news-list';
import { createFileRoute } from '@tanstack/react-router';
import { useGetPaginatedPosts } from '@/services/query&mutations/use-get-paginated-posts';
import Pagination from "@/lib/use-pagination";


export const Route = createFileRoute('/(public)/__p/news/')({
  component: RouteComponent,
});

function RouteComponent() {
  const [page, setPage] = useState(1);
  const pageSize = 5;
  const { data } = useGetPaginatedPosts({ page, pageSize, search: "" });

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
          />
        ))}
      </ul>
      <div className="mt-6 flex justify-center">
        <Pagination
          currentPage={page}
          totalPages={data?.pagination.totalPages || 1}
          onPageChange={(newPage) => setPage(newPage)}
        />
      </div>
    </div>
  );
}
