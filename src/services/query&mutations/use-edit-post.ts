import { useMutation, useQueryClient } from "@tanstack/react-query"
import { api } from "../axios-fetchers/api";
import { toast } from "sonner";
import { useSessionStore } from "@/store/session-store";
import type { cmsFormValues } from "@/constants/schema";

export const useEditPost = () => {
    const session = useSessionStore.getState().session;
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async ({ data, route }: {data: cmsFormValues, route: string }) => {
            const res = await api.put(`/protected/posts/${route}/edit`, data, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${session?.token}`
                },
            }).then((res) => res.data);
            return res;
        },
        onError: (e) => {
            toast.error("Failed to create post", {
                description: e.message
            });
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ["posts"] });
            toast.success("Post created successfully", {
                description: `${data.post.title}`
            });
        }
    })
}