import type { Post } from '@/constants/types'
import { api } from '@/services/axios-fetchers/api'
import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect } from "react";
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { StarIcon } from "lucide-react";

export const Route = createFileRoute('/(public)/__p/news/$postroute')({
  component: RouteComponent,
  loader: async ({ params }) => {
    const { data }: { data: { post: Post } } = await api.get(`/posts/${params.postroute}`);
    return data;
  },
  head: (c) => ({
    meta: [
      {
      title: c.loaderData.post.title,
      description: c.loaderData.post.description,
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0",
      },
    ],
  })
});

function RouteComponent() {
  const loaderData = Route.useLoaderData();
  const { post } = loaderData;
  const [rating, setRating] = useState<number | null>(null);

  useEffect(() => {
    const storedRating = localStorage.getItem(`rating-${post.id}`);
    if (storedRating) {
      setRating(Number(storedRating));
    }
  }, [post.id]);

  const handleRating = (newRating: number) => {
    setRating(newRating);
    localStorage.setItem(`rating-${post.id}`, newRating.toString());
  };

  const tags: string[] = JSON.parse(post.tags || "[]");

  return (
    <div className='flex flex-col items-center mb-[50px] justify-center w-full'>
    <Card className='lg:w-[1400px] max-lg:w-auto mx-auto w-full bg-white shadow-md rounded-lg overflow-hidden'>
      <CardContent className="p-6">
        <div className="prose max-w-none">
          <h1 className="text-3xl font-bold mb-2">{post.title}</h1>

          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            {post.author && <span>By {post.author}</span>}
            {post.createdAt && (
              <span>• {new Date(post.createdAt).toLocaleDateString()}</span>
            )}
          </div>

          {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-sm">
                    {tag}
                  </Badge>
                ))}
              </div>
            )
          }
        

          {post.description && (
            <p className="text-gray-600 mb-6 italic">{post.description}</p>
          )}

          <div
            dangerouslySetInnerHTML={{ __html: post.content }}
            className="mt-6"
          />

          <div className="mt-6">
            <h2 className="text-lg font-bold mb-2">Rate this post:</h2>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon
                  key={star}
                  className={`h-6 w-6 cursor-pointer ${
                    rating && star <= rating ? "text-yellow-500" : "text-gray-300"
                  }`}
                  onClick={() => handleRating(star)}
                />
              ))}
            </div>
            {rating && <p className="mt-2 text-sm text-gray-500">You rated this post {rating} star(s).</p>}
          </div>
        </div>
      </CardContent>
    </Card>
    </div>
  );
}
