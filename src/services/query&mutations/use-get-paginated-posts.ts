import { useQuery } from "@tanstack/react-query"
import { api } from "../axios-fetchers/api";
import { type Paginated, type Post } from "@/constants/types";

export const useGetPaginatedPosts = ({ page = 1, pageSize = 10, search }: { page: number, pageSize: number, search?: string}) => {
    return useQuery<Paginated<Post[]>>({
        queryKey: ["posts", page, pageSize, search],
        queryFn: async () => {
            const res = api.get(`/posts?page=${page}&pageSize=${pageSize}&search=${search}`).then((res) => res.data)
            return res;
        },
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
    })
}