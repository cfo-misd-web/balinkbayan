import { useMutation, useQueryClient } from "@tanstack/react-query"
import { api } from "../axios-fetchers/api"
import { toast } from "sonner"
import { useSessionStore } from "@/store/session-store"

export const useDeletePost = () => {
    const session = useSessionStore.getState().session;
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: async (postId: string) => {
            const res = api.delete(`/protected/posts/${postId}`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${session?.token}`
                },
            }).then((res) => res.data)
            return res;
        },
        onError: (e) => {
            toast.error("Failed to delete post", {
                description: e.message
            })
        },
        onSuccess: (res) => {
            queryClient.invalidateQueries({ queryKey: ["posts"] });
            toast.success("Post deleted successfully", {
                description: `Post ID: ${res.post.title}`
            })
        }
    })
}