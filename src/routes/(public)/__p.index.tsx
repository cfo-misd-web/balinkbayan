import BalikbayanAbout from '@/components/user/home/balinkbayan-about'
import FilipinoCategories from '@/components/user/home/filipino-cats'
import FilipinoServices from '@/components/user/home/filipino-services'
import HeadSection from '@/components/user/home/head'
import BaLinkBayanPortal from '@/components/user/home/portal'

import { useGetPaginatedPosts } from '@/services/query&mutations/use-get-paginated-posts'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(public)/__p/')({
  component: App,
})

function App() {
  const { data: post, isPending } = useGetPaginatedPosts({ page: 1, pageSize: 5, search: "" });


  return (
    <div>
      <HeadSection />
      <BaLinkBayanPortal />
      <FilipinoCategories />
      <FilipinoServices />
      <BalikbayanAbout />

      <div className='w-[1400px] mx-auto px-2'>
        <h2 className="text-2xl font-bold text-start mt-10 mb-5">Latest News</h2>


        {!isPending && post && <ul className="flex flex-col gap-4 mb-10">
          {post?.posts.map((news) => (
            <li>
            <a href={`/news/${news.id}`} key={news.id} className='text-teal-700 hover:text-teal-500 hover:underline cursor-pointer flex flex-row gap-2 items-center'>
            • {news.title}
            </a>
            </li>
          ))}
          </ul>
          }

      </div>
    </div>
  )
}
